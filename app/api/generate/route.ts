import { NextRequest, NextResponse } from "next/server"
import { callGemini, geminiApiKey } from "@/lib/gemini"

const N8N_WEBHOOK = process.env.N8N_AI_WEBHOOK_URL

const SYSTEM_PROMPTS: Record<string, string> = {
  "intelligence-report":
    "You are an expert intelligence analyst. Generate a structured intelligence report based on the following information. Use professional intelligence community formatting: include a classification header, executive summary, key findings, source assessment, analysis, conclusions, and recommendations. Use estimative language where appropriate. Format the output as clean markdown. Start with a title \"# Intelligence Report: [subject]\".",
  "source-analysis":
    "You are a source reliability assessor. Evaluate the provided source using structured analytic techniques including the Admiralty System (A-F source reliability, 1-6 information credibility). Generate a detailed source assessment that covers: source description, access level, past reliability, potential biases, corroboration status, and an overall rating. Format the output as clean markdown. Start with a title \"# Source Reliability Assessment\".",
  "threat-assessment":
    "You are a threat assessment specialist. Produce a structured threat assessment using the following framework: threat actor description, intent, capability, opportunity, likelihood assessment, impact analysis, and recommended countermeasures. Use professional threat intelligence formatting and estimative language. Format the output as clean markdown. Start with a title \"# Threat Assessment: [actor]\".",
}

export async function POST(req: NextRequest) {
  const apiKey = geminiApiKey()
  if (!apiKey) {
    return NextResponse.json(
      { error: "AI generation is not configured yet. Drop a Gemini API key in GOOGLE_API_KEY to enable it." },
      { status: 500 },
    )
  }

  const { tool, questions, answers } = await req.json()

  if (!tool || !questions || !answers) {
    return NextResponse.json({ error: "Missing tool, questions, or answers" }, { status: 400 })
  }

  const systemPrompt =
    SYSTEM_PROMPTS[tool] || SYSTEM_PROMPTS["intelligence-report"]

  // Build the Q&A prompt
  const qaPairs = questions
    .map((q: string, i: number) => `Q: ${q}\nA: ${answers[i] || "(not provided)"}`)
    .join("\n\n")

  const toolName =
    tool === "intelligence-report"
      ? "Intelligence Report"
      : tool === "source-analysis"
        ? "Source Analysis"
        : "Threat Assessment"

  const prompt = `${systemPrompt}

Based on the following input from an intelligence analyst:

${qaPairs}

Generate the ${toolName} in full. Use concrete detail where provided and professional defaults where information is not supplied.`

  try {
    // Route through n8n AI gateway if configured
    if (N8N_WEBHOOK) {
      const res = await fetch(N8N_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tool,
          model: 'free',
          docName: toolName,
          prompt,
          questions,
          answers,
        }),
      })

      if (!res.ok) {
        const err = await res.text()
        console.error("n8n gateway error:", res.status, err)
        return NextResponse.json(
          { error: `AI generation failed (${res.status}). Please try again.` },
          { status: 502 },
        )
      }

      const data = await res.json()
      const text = data?.draft

      if (!text) {
        return NextResponse.json(
          { error: "AI returned an empty response. Try rephrasing your answers." },
          { status: 502 },
        )
      }

      return NextResponse.json({ draft: text })
    }

    // Fallback: call Gemini directly. Thinking is off so the draft is not
    // eaten by the model's hidden reasoning budget.
    const result = await callGemini(apiKey, {
      prompt,
      temperature: 0.7,
      maxOutputTokens: 8192,
      thinkingBudget: 0,
    })

    if (!result.ok) {
      if (!result.empty) console.error("Gemini API error:", result.status, result.detail)
      if (result.empty) {
        return NextResponse.json(
          { error: "AI returned an empty response. Try rephrasing your answers." },
          { status: 502 },
        )
      }
      return NextResponse.json(
        { error: `AI generation failed (${result.status}). Please try again.` },
        { status: 502 },
      )
    }

    return NextResponse.json({ draft: result.text })
  } catch (err) {
    console.error("Gemini API call failed:", err)
    return NextResponse.json(
      { error: "Could not reach the AI service. Check your network and try again." },
      { status: 502 },
    )
  }
}
