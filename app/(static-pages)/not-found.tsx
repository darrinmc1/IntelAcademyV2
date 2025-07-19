export default function StaticNotFound() {
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
        <h1 style={{ fontSize: "2.25rem", fontWeight: "bold", marginBottom: "1rem" }}>404 - Page Not Found</h1>
        <p style={{ marginBottom: "1.5rem", color: "#4b5563" }}>
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>

        <div style={{ marginTop: "2rem" }}>
          <Link
            href="/"
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#2563eb",
              color: "white",
              borderRadius: "0.25rem",
              textDecoration: "none",
            }}
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
