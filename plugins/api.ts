import nuxtStorage from "nuxt-storage/nuxt-storage";
import { v4 as uuidv4 } from 'uuid';
import nuxtStorage from 'nuxt-storage/nuxt-storage';

export default defineNuxtPlugin(() => {
	const config = useRuntimeConfig()
	const { token } = useAuth()

	let userSession = nuxtStorage.localStorage.getData('userSession');
	if(!userSession) {
		nuxtStorage.localStorage.setData('userSession', uuidv4(), 5000, 'd');
	}
	userSession = nuxtStorage.localStorage.getData('userSession');
	console.log(userSession);

	const $api = $fetch.create({
		baseURL: config.public.baseAPI,
		retry: 1,
		retryStatusCodes: [401],
		retryDelay: 500,
		onRequest({ options }) {
			options.headers = token.value
				? {
					"Authorization": `Bearer ${token.value}`,
					"Content-Type": 'application/json',
					"user-session": userSession
				}
				: {"user-session": userSession}
		},
	})
	return {
		provide: {
			api: $api
		}
	}
})
