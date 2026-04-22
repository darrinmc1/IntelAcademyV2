/**
 * Safely revalidates a path if the App Router is being used
 * Falls back gracefully in the Pages Router
 */
export async function safeRevalidatePath(path: string): Promise<void> {
  try {
    // Dynamic import to avoid static analysis issues
    const { revalidatePath } = await import("next/cache")
    revalidatePath(path)
  } catch (e) {
    // If revalidatePath is not available (Pages Router), just log it
    console.log(`Path revalidation skipped for ${path} - not available in this context`)
  }
}
