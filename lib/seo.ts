import type { Metadata } from "next"

/** Apex host. www also answers, and it does not redirect. */
export const SITE_ORIGIN = "https://theintelanalystacademy.com"

export function pageMetadata(path: string, title: string, description: string, extra?: Metadata): Metadata {
  const { alternates, ...rest } = extra ?? {}
  return {
    title,
    description,
    ...rest,
    alternates: { ...alternates, canonical: path },
  }
}
