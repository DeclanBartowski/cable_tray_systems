export const useRootStore = defineStore('root', () => {
	const isOpenMenu = ref(false)
	const isOpenModalSuccess = ref(false)
	const isOpenModalIndividual = ref(false)
	const isOpenOrderFast = ref(false)
	const isOpenAuthModal = ref(false)

	return { isOpenMenu, isOpenModalSuccess, isOpenModalIndividual, isOpenOrderFast, isOpenAuthModal }
})
