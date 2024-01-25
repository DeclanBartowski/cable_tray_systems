export const useRootStore = defineStore('root', () => {
	const isOpenMenu = ref(false)
	const isOpenModalSuccess = ref(false)
	const isOpenModalIndividual = ref(false)
	const isOpenOrderFast = ref(false)

	return { isOpenMenu, isOpenModalSuccess, isOpenModalIndividual, isOpenOrderFast }
})
