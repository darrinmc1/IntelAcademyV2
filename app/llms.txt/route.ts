import { buildLlmTxt } from "@/lib/aeo"

/** Alias of /llm.txt (llms.txt convention). */
export function GET() {
  return new Response(buildLlmTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
