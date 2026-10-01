import { createContext, useContext, useMemo, useState } from 'react'
import { legalConfig } from '../../config/legal'
import { defaultConsent, readConsent, saveConsent } from '../../lib/consent'

const ConsentContext = createContext(null)

export function ConsentProvider({ children }) {
  const [consent, setConsent] = useState(() => readConsent(legalConfig.consentVersion))
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)

  const value = useMemo(() => ({
    consent,
    isSettingsOpen,
    openSettings: () => setIsSettingsOpen(true),
    closeSettings: () => setIsSettingsOpen(false),
    save: (preferences) => {
      const next = saveConsent({ ...defaultConsent(legalConfig.consentVersion), ...preferences })
      setConsent(next)
      setIsSettingsOpen(false)
    },
  }), [consent, isSettingsOpen])

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useConsent() {
  const context = useContext(ConsentContext)
  if (!context) throw new Error('useConsent debe utilizarse dentro de ConsentProvider.')
  return context
}
