export function useAsset(path: string) {
  if (!path) {
    return ''
  }

  if (/^(https?:)?\/\//i.test(path) || path.startsWith('data:')) {
    return path
  }

  const runtimeConfig = useRuntimeConfig()
  const baseURL = runtimeConfig.app?.baseURL ?? '/'
  const normalizedPath = path.startsWith('/') ? path : `/${path}`

  if (import.meta.dev) {
    return normalizedPath
  }

  const normalizedBase = baseURL === '/' ? '/' : baseURL.replace(/\/+$/, '/')
  return `${normalizedBase}${normalizedPath.replace(/^\/+/, '')}`
}

export function assetUrl(path: string) {
  return useAsset(path)
}
