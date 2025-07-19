"use client"

export default function StaticError() {
  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "28rem", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.25rem", fontWeight: "bold", marginBottom: "1rem" }}>Something went wrong</h1>
        <p style={{ marginBottom: "1.5rem", color: "#4b5563" }}>
          We're sorry, but something went wrong. Please try again later.
        </p>

        <div style={{ marginTop: "2rem" }}>
          <a
            href="/"
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#7afaff",
              color: "white",
              borderRadius: "0.25rem",
              textDecoration: "none",
            }}
          >
            Return to Home
          </a>
        </div>
      </div>
    </div>
  )
}
