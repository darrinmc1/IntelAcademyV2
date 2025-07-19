// Local development storage alternative to Blob storage

const localStorageAvailable = typeof window !== "undefined" && window.localStorage

export function storeLocalImage(key: string, dataUrl: string): void {
  if (!localStorageAvailable) return
  try {
    localStorage.setItem(`dev-image:${key}`, dataUrl)
  } catch (e) {
    console.warn("Local storage quota exceeded", e)
  }
}

export function getLocalImage(key: string): string | null {
  if (!localStorageAvailable) return null
  return localStorage.getItem(`dev-image:${key}`)
}

export function clearLocalImages(): void {
  if (!localStorageAvailable) return

  Object.keys(localStorage).forEach((key) => {
    if (key.startsWith("dev-image:")) {
      localStorage.removeItem(key)
    }
  })
}
