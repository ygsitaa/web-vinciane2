const STORAGE_KEY = 'garden-access-granted'

export function useGardenAccess() {
  const config = useRuntimeConfig()
  const hasAccess = useState('garden-access', () => false)

  const checkStoredAccess = () => {
    if (import.meta.client) {
      hasAccess.value = sessionStorage.getItem(STORAGE_KEY) === 'true'
    }
    return hasAccess.value
  }

  const grantAccess = () => {
    hasAccess.value = true
    if (import.meta.client) {
      sessionStorage.setItem(STORAGE_KEY, 'true')
    }
  }

  const tryUnlock = (password: string) => {
    const expected = String(config.public.gardenPassword ?? '')
    if (!expected) return false

    const isValid = password.trim().toLowerCase() === expected.toLowerCase()
    if (isValid) {
      grantAccess()
    }
    return isValid
  }

  return {
    hasAccess,
    checkStoredAccess,
    grantAccess,
    tryUnlock,
  }
}
