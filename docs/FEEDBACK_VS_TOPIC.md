# Feedback vs new-topic requests

Two public intents. Do not mix them.

| Intent | User meaning | App destination | May create a topic/page? |
|---|---|---|---|
| **Feedback** | Bug, complaint, page-fix recommendation, comment on an existing lesson, interest in a lesson already listed as coming soon | `feedback` table + `/admin/feedback` | **Never** |
| **Request a new topic** | User wants a learning subject that does **not** exist yet | `topic_requests` table + `/admin/topic-requests` | Only this path may enqueue a topic request. Page generation is a later, explicit publisher step — not automatic from feedback. |

Feedback form categories are **Bug / Complaint / Page recommendation / Suggestion / Other**. Legacy `Content Request` submissions are remapped to `Page recommendation` so they stay feedback and cannot match n8n’s `Is Content Request?` node. They must not auto-promote into `topic_requests`, coming-soon pages, or Lesson Publisher `new_page` events.

## App contract (this repo)

- `POST /api/feedback` and `submitFeedbackAction` write `feedback` only, with `intent = "feedback"`. Client-supplied `intent`, `channel`, `topic`, or `topic_title` is discarded.
- `POST /api/request-topic` and `submitTopicRequestAction` write `topic_requests` only, with `intent = "topic_request"`.
- Neither path calls `scripts/generate-coming-soon-page.ts` or `scripts/generate-all-coming-soon-pages.js`.
- After a successful insert, submit **immediately kicks n8n** (fire-and-forget; webhook failures are logged and never fail the user):
  - Feedback → **GET** `FEEDBACK_WEBHOOK_URL` or `https://n8n.peelboss.com/webhook/feedback-creator-run` (Empire — Feedback to GitHub Issue).
  - Topic request → **POST** JSON to `TOPIC_REQUEST_WEBHOOK_URL` or `https://n8n.peelboss.com/webhook/empire-topic-request` (lesson queue).
  - Daily cron remains a backup sweeper if the immediate kick is missed.

## n8n flip notes (Darrin — required)

Confirmed production behavior: workflow **`Empire — Feedback to GitHub Issue` (`KD7HIVzJIG1mUlfP`)** has node **`Is Content Request?`**. When `category === 'Content Request'` it inserts an **approved** `agent_tasks` row with `task_type = new_page`, which auto-creates subject pages.

Also disable the **Feedback Response Agent → Build Content Request** path (same `new_page` outcome).

This app no longer writes category `Content Request` (legacy value remaps to `Page recommendation`). Still flip n8n so a stray old row or replay cannot spawn a page.

Historical evidence:

- GitHub issues titled `[Feedback] {Category}: {message}` with body `Feedback submitted via **Intel Analyst Academy**` and `**Category:** Content Request` (e.g. #135, #137, #138, #146, #147).
- Suggestion feedback can also be labeled `content-queued` (e.g. #136, “content header is repeated”) and was published as a fake topic (`intelligence-decision-making-header-fix` in `docs/topic-inventory.md`).
- Auto PRs titled `🤖 AI fix: feedback #N` (e.g. #64, #69, #98–#101, #130) are spawned from those issues.

### What to change in n8n

1. **`Empire — Feedback to GitHub Issue` (`KD7HIVzJIG1mUlfP`)**
   - Node **`Is Content Request?`**: `category === 'Content Request'` → insert **approved** `agent_tasks` with `task_type = new_page`.
   - **Disable or delete that node / true-branch.** Do not insert `new_page` from any feedback row.
2. **Feedback Response Agent → Build Content Request** — disable. Same `new_page` outcome.
3. **Lesson Publisher** (`EBwuLh3qffH3v0JC`) — must not consume `[Feedback]` issues or `feedback` rows.

**Flip the classifier. Exact filter change:**

| Current (wrong) | Change to |
|---|---|
| Node **`Is Content Request?`** (`category === 'Content Request'` → approved `agent_tasks` `new_page`) | **Disable.** Never insert `new_page` from feedback. |
| Feedback Response Agent → Build Content Request | **Disable.** |
| IF `category` equals `Suggestion` → `content-queued` / `new_page` | **Remove.** Suggestion is a page-fix / comment. |
| IF GitHub issue title starts with `[Feedback]` → Lesson Publisher | **Stop.** `[Feedback]` issues must never enter `new_page`. |
| `content-queued` on label `feedback` | Require `intent == "topic_request"` **or** table `topic_requests` **or** path `/api/request-topic`. |

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
