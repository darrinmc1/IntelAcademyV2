import "../../../download-styles/print.css"

export default function LearningPathDownloadLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="hide-site-chrome">{children}</div>
}
