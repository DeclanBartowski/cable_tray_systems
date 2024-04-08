export default defineNuxtPlugin(() => {
	const config = useRuntimeConfig()

	const $api = $fetch.create({
		baseURL: config.public.baseAPI,
		retry: 1,
		retryStatusCodes: [401],
		retryDelay: 500,
	})
	return {
		provide: {
			api: $api
		}
	}
})
