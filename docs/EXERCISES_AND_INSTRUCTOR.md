# Practical exercises and The Chief (AI instructor)

Two features that move the academy from reading to doing:

- **`/exercises`** — fictional brief packs. Students grade every report on the Admiralty scale, list intelligence gaps, build hypotheses with an ACH matrix, write a BLUF + key judgments, then get a debrief.
- **`/instructor`** — The Chief, the academy's owl, as an AI instructor. Also available inside every exercise ("Ask The Chief"), where it can see the student's draft.

Everything works with **no AI key**: marking is answer-key based and The Chief falls back to built-in notes. Adding one key switches on the written critique, live tutoring and practice-exercise generation (and Academy Brief's live mode).

## Switching on live AI

Set **one** of these in Vercel → `intel-academy-v2` → Settings → Environment Variables (Production + Preview), then redeploy:

| Variable | Notes |
|---|---|
| `OPENROUTER_API_KEY` | Preferred. Same provider as the Empire drafter. |
| `GOOGLE_API_KEY` | Gemini API direct. |
| `N8N_AI_WEBHOOK_URL` | n8n gateway: receives `{ tool, model, docName, prompt }`, must return `{ draft }`. |

Optional: `AI_PROVIDER` (`openrouter` / `gemini` / `n8n`) to force one when several are set; `AI_MODEL` to override the model. Defaults: `google/gemini-3.5-flash-lite` (OpenRouter) and `gemini-3.5-flash-lite` (Gemini) — Google's recommendation for new projects after Gemini 2.0 Flash was retired on 1 June 2026.

All provider code lives in `lib/ai/llm.ts`. Every caller treats a `null` result as "fall back", so a bad key or an outage degrades to the no-AI path rather than an error page.

Rate limits (per IP, in-memory): feedback 10 / 10 min, The Chief 24 / 10 min, generated exercises 4 / 30 min. Feedback skips the model call for near-empty attempts.

## How marking works

`lib/exercises/scoring.ts` — deterministic, unit-tested, no model involved:

| Dimension | How it's scored |
|---|---|
| Evaluating the information | Each report's reliability and credibility vs the expert grade. Exact = 2 points, inside the defensible range = 1. |
| Identifying gaps | Student gaps matched to expected gaps by keyword fragments (`keywords`, `minMatches`). Unmatched student gaps are shown, not penalised. |
| Developing hypotheses | One-to-one keyword matching to the expert hypotheses, plus agreement with the expert ACH matrix. Missing the expert's **lead** hypothesis caps the rating at Developing. |
| Producing the assessment | BLUF present, judgment-first, ≤ 80 words; ≥ 2 key judgments with confidence; estimative language; few hedges; indicators; and a substance check (`mustAddress`). Overconfidence caps at Proficient; missing the key issue caps at Developing. |

Ratings: Needs work / Developing / Proficient / Strong. The AI critique (`lib/exercises/feedback.ts`) sits on top: it never re-marks grades, it judges reasoning, credits good gaps the key missed, rewrites the BLUF and asks follow-up questions. Lesson links from the model are filtered against real pages.

**The answer key never reaches the browser** for library exercises — pages pass `toStudentView(exercise)` to the client and marking happens in `/api/exercises/feedback`.

## Writing a new exercise

1. Copy one of the files in `data/exercises/` (they're plain data, typed as `Exercise`).
2. Register it in `data/exercises/index.ts`.
3. Run `pnpm test`. `data/exercises/exercises.test.ts` checks the schema, the ACH matrix covers every report, every lesson link is a real page, the answer key stays out of the student view, and — the important one — **that the expert answer itself scores Strong on every dimension**. If your own model answer can't pass, your keywords are wrong.

Rules of thumb that make a good pack:

- 5–7 reports of deliberately uneven quality. Give each source a track record so reliability is gradeable.
- Build in at least one trap: circular reporting, an anonymous source, a self-interested source, evidence that fits every hypothesis (non-diagnostic), and one detail that discriminates between hypotheses.
- Three hypotheses: `lead`, `alternative` and a boring `null`.
- `acceptableReliability` / `acceptableCredibility` hold the grades a trained analyst could defend — always including the expected grade.
- Keywords are lower-case fragments a student would actually type (`"launder"` matches "laundering"). Wrap in spaces (`" state "`) for whole-word matching.
- Use the academy's probability scale exactly as `/topics/estimative-language` teaches it.
- Everything fictional — invented people, companies, places and countries. Australian English.

## The Chief

- System prompt and offline fallback: `lib/instructor/instructor.ts`. Built-in technique notes: `lib/instructor/techniques.ts`.
- Before a student submits, The Chief gets the brief pack, the student's draft and teaching notes, but **not** the expert grades or model answer — it's told to ask questions instead. After submission it gets the full key.
- Practice exercises (`lib/instructor/generate.ts`) are generated as JSON in the same schema, repaired for predictable slips, validated exactly like library exercises, and stored in the student's browser only.
- Guardrails in the prompt: training only; no profiling or investigating real private individuals; no operational planning for harm; student text is treated as data, not instructions.

## Later

- XP / badges for completed exercises (`lib/user-store.ts`).
- Server-side attempt history for logged-in users.
- An n8n job that drafts new library exercises in this schema for review, the same way weekly lessons are produced.
