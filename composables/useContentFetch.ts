import { defu } from 'defu'
import type { UseFetchOptions } from 'nuxt/app'
import { v4 as uuidv4 } from 'uuid';
import nuxtStorage from 'nuxt-storage/nuxt-storage';

export function useContentFetch<T>(url: string, options: UseFetchOptions<T> = {}) {
  const config = useRuntimeConfig();
	const userSession = nuxtStorage.localStorage.getData('userSession');
	if(!userSession) {
		nuxtStorage.localStorage.setData('userSession', uuidv4());
	}

  const defaults: UseFetchOptions<T> = {
    baseURL: config.public.baseAPI,
    key: url,
    retry: 1,
    retryStatusCodes: [401],
    retryDelay: 500,
		headers: {
			'user-session': nuxtStorage.localStorage.getData('userSession'),
		}
  }

  const params = defu(options, defaults)

  return useFetch(url, params)
}
