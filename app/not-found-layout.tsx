import type React from "react"
export default function NotFoundLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <header style={{ backgroundColor: "white", borderBottom: "1px solid #e5e7eb", padding: "1rem 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
          <Link href="/" style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#2563eb", textDecoration: "none" }}>
            The Intel Analyst Academy
          </Link>
        </div>
      </header>
      <main style={{ flex: "1" }}>{children}</main>
      <footer style={{ backgroundColor: "#f3f4f6", padding: "1.5rem 0", marginTop: "auto" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem", textAlign: "center", color: "#4b5563" }}>
          <p>© {new Date().getFullYear()} The Intel Analyst Academy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
