import { defu } from 'defu'
import type { UseFetchOptions } from 'nuxt/app'

export function useContentFetch<T>(url: string, options: UseFetchOptions<T> = {}) {
  const config = useRuntimeConfig()

  const defaults: UseFetchOptions<T> = {
    baseURL: config.public.baseAPI,
    key: url,
    retry: 1,
    retryStatusCodes: [401],
    retryDelay: 500
  }

  const params = defu(options, defaults)

  return useFetch(url, params)
}
