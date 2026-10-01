const STORAGE_KEY = 'pyp-consent'

export const defaultConsent = (version) => ({
  version,
  necessary: true,
  preferences: false,
  analytics: false,
  marketing: false,
  updatedAt: '',
})

export function readConsent(version) {
  try {
    const stored = JSON.parse(window.localStorage.getItem(STORAGE_KEY))
    if (stored?.version === version && stored.necessary === true) return { ...defaultConsent(version), ...stored }
  } catch {
    // A malformed preference is treated as no decision and will be replaced safely.
  }
  return null
}

export function saveConsent(consent) {
  const value = { ...consent, necessary: true, updatedAt: new Date().toISOString() }
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
  return value
}

export { STORAGE_KEY }
