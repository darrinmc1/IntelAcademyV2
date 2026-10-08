import { ImageResponse } from "next/og"

export const alt = "The Intel Analyst Academy. Intelligence analysis training."
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#0f172a",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            margin: "48px",
            padding: "64px",
            border: "2px solid rgba(29, 78, 216, 0.45)",
            borderRadius: "12px",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", fontSize: 64, fontWeight: 700 }}>Intel Academy</div>
          <div style={{ display: "flex", marginTop: 12, fontSize: 28, color: "#94a3b8" }}>
            Intelligence Analysis Training
          </div>
          <div
            style={{
              display: "flex",
              width: 200,
              height: 4,
              marginTop: 36,
              backgroundColor: "#1d4ed8",
              borderRadius: 2,
            }}
          />
          <div style={{ display: "flex", marginTop: 32, fontSize: 20, color: "#22c55e" }}>
            theintelanalystacademy.com
          </div>
          <div style={{ display: "flex", marginTop: 12, fontSize: 18, color: "#475569" }}>
            Empire-HQ Portfolio
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
