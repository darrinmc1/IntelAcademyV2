import Link from 'next/link'

export const metadata = {
  title: 'Access Denied - Intel Analyst Academy',
}

export default function UnauthorizedPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-3xl font-bold">Access Restricted</h1>
      <p className="max-w-md text-muted-foreground">
        This area is for authorized personnel only. Your current clearance does not
        grant access to the admin console.
      </p>
      <div className="flex gap-3">
        <Link
          href="/"
          className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
        >
          Return to site
        </Link>
        <Link
          href="/login"
          className="rounded-md border px-4 py-2 text-sm font-medium hover:bg-gray-100"
        >
          Sign in as admin
        </Link>
      </div>
    </div>
  )
}
