export const useRootStore = defineStore('root', () => {
	const isOpenMenu = ref(false)
	const isOpenModalSuccess = ref(false)
	const isOpenOrderFast = ref(false)
	const isOpenCatalog = ref(false)
	const isHeaderActive = ref(false)
	const isShowHeader = ref(true);
	const isChangeDataSuccessActive = ref(false);
	const isOpenIndividual = ref(false);

	return { isOpenMenu, isOpenModalSuccess, isOpenOrderFast, isOpenCatalog, isOpenIndividual, isHeaderActive, isShowHeader, isChangeDataSuccessActive }
})
