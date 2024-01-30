export const useRootStore = defineStore('root', () => {
	const isOpenMenu = ref(false)
	const isOpenModalSuccess = ref(false)
	const isOpenModalIndividual = ref(false)
	const isOpenOrderFast = ref(false)
	const isOpenAuthModal = ref(false)
	const isOpenCatalog = ref(false)
	const isHeaderActive = ref(false)

	return { isOpenMenu, isOpenModalSuccess, isOpenModalIndividual, isOpenOrderFast, isOpenAuthModal, isOpenCatalog, isHeaderActive }
})
