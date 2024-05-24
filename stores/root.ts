export const useRootStore = defineStore('root', () => {
	const isOpenMenu = ref(false)
	const isOpenModalSuccess = ref(false)
	const isOpenModalIndividual = ref(false)
	const isOpenOrderFast = ref(false)
	const isOpenCatalog = ref(false)
	const isHeaderActive = ref(false)
	const isShowHeader = ref(true);

	return { isOpenMenu, isOpenModalSuccess, isOpenModalIndividual, isOpenOrderFast, isOpenCatalog, isHeaderActive, isShowHeader }
})
