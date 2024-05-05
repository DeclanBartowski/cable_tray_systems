export default defineNuxtPlugin(() => {
	const config = useRuntimeConfig()
	const { token } = useAuth()

	const $api = $fetch.create({
		baseURL: config.public.baseAPI,
		retry: 1,
		retryStatusCodes: [401],
		retryDelay: 500,
		onRequest({ options }) {
			options.headers = token.value
				? {
					"Authorization": `Bearer ${token.value}`,
					"Content-Type": 'application/json'
				}
				: {}
		}
	})
	return {
		provide: {
			api: $api
		}
	}
})
