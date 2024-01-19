export const useRootStore = defineStore('root', () => {
	const isOpenMenu = ref(false)

	return { isOpenMenu }
})
