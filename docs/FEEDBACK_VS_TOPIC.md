# Feedback vs new-topic requests

Two public intents. Do not mix them.

| Intent | User meaning | App destination | May create a topic/page? |
|---|---|---|---|
| **Feedback** | Bug, complaint, page-fix recommendation, comment on an existing lesson, interest in a lesson already listed as coming soon | `feedback` table + `/admin/feedback` | **Never** |
| **Request a new topic** | User wants a learning subject that does **not** exist yet | `topic_requests` table + `/admin/topic-requests` | Only this path may enqueue a topic request. Page generation is a later, explicit publisher step — not automatic from feedback. |

Categories `Suggestion` and `Content Request` on the feedback form are **still feedback**. They must not auto-promote into `topic_requests`, coming-soon pages, or Lesson Publisher `new_page` events.

## App contract (this repo)

- `POST /api/feedback` and `submitFeedbackAction` write `feedback` only, with `intent = "feedback"`. Client-supplied `intent`, `channel`, `topic`, or `topic_title` is discarded.
- `POST /api/request-topic` and `submitTopicRequestAction` write `topic_requests` only, with `intent = "topic_request"`.
- Neither path calls `scripts/generate-coming-soon-page.ts` or `scripts/generate-all-coming-soon-pages.js`.

## n8n flip notes (Darrin — required)

Confirmed production behavior: n8n treats feedback category **Content Request** as approved `new_page` / topic creation. Historical evidence:

- GitHub issues titled `[Feedback] {Category}: {message}` with body `Feedback submitted via **Intel Analyst Academy**` and `**Category:** Content Request` (e.g. #135, #137, #138, #146, #147).
- Suggestion feedback can also be labeled `content-queued` (e.g. #136, “content header is repeated”) and was published as a fake topic (`intelligence-decision-making-header-fix` in `docs/topic-inventory.md`).
- Auto PRs titled `🤖 AI fix: feedback #N` (e.g. #64, #69, #98–#101, #130) are spawned from those issues.

### What to change in n8n

Workflows involved (names may differ slightly in the canvas):

1. **Feedback ingest** — Supabase trigger on `feedback` INSERT (or the webhook that creates the GitHub issue). Builds:
   - Title: `[Feedback] {{category}}: {{message}}`
   - Body field `**Category:** {{category}}`
   - Label: `feedback`
2. **Classifier / Switch** — maps `Category == "Content Request"` (and sometimes `Suggestion`) → action `new_page` + label `content-queued`.
3. **Lesson Publisher** (`EBwuLh3qffH3v0JC`, see `docs/topic-inventory.md`) — consumes `content-queued` / `approved` and creates a catalog topic + `app/topics/<slug>` (coming-soon or full page). May call `generate-coming-soon-page`.

**Flip the classifier. Exact filter change:**

| Current (wrong) | Change to |
|---|---|
| IF `category` equals `Content Request` → `new_page` | **Remove this branch.** Content Request is feedback. |
| IF `category` equals `Suggestion` → `content-queued` / `new_page` | **Remove this branch.** Suggestion is a page-fix / comment. |
| IF GitHub issue title starts with `[Feedback]` → Lesson Publisher | **Stop.** `[Feedback]` issues must never enter `new_page`. |
| IF label `feedback` + `content-queued` → generate topic | Require `intent == "topic_request"` **or** source table `topic_requests` **or** path `/api/request-topic`. |

**Only create pages when all of these are true:**

- Event source is `topic_requests` INSERT (or `/api/request-topic`), **not** `feedback`
- `intent` is `topic_request` (not `feedback`, not missing)
- The user asked for a **new** subject (has `topic_title`), not “fix this page”

**Optional keep:** Bug / Suggestion issues may still open `🤖 AI fix` PRs that **edit an existing file**. That path must not create a new slug or run the coming-soon generator.

**Do not** key `new_page` off keywords in the message (`fix`, `add`, `missing`, `PESTLE`, `dorking`, etc.). Ambiguous → leave in the feedback queue.

### After the flip

- Add a Supabase/Postgres trigger on `topic_requests` (intent `topic_request`) if you still want auto coming-soon pages for real new-topic asks.
- Existing `[Feedback]` issues already labeled `content-queued` should be unlabeled and closed as feedback, not published.
- Add the `intent` column on Supabase `feedback` (`DEFAULT 'feedback'`) so the new rows are filterable even if category remains `Content Request`.
