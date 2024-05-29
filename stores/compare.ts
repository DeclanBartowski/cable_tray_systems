import {defineStore, storeToRefs} from 'pinia'
import type {CartDto} from "~/types/cart";
import {useCartStore} from "~/stores/cart";
import type {CompareDto, ProductItem} from "~/types/comparison";
import type {FavoriteDto} from "~/types/favorite";
import {useFavoriteStore} from "~/stores/favorite";


export const useCompareStore = defineStore('compare', {
	state: () => ({
		compare: [] as ProductItem[]
	}),
	getters: {
		getCompare: (state) => state.compare,
	},
	actions: {
		async toggleCompare (id: number, compareStatus: boolean) {
			const {$api} = useNuxtApp();
			const {products, recommendedItems} = storeToRefs(useCartStore());
			const {favorites} = storeToRefs(useFavoriteStore());
			if (compareStatus) {
				const { data: compare } = await useAsyncData<CompareDto>(
					'compare',
					(): Promise<CompareDto> => $api('remove-compare/', {
						method: 'POST',
						body: {
							id,
						},
					}))

				this.compare = compare?.value?.data?.products || [];

				const { data: favorite } = await useAsyncData<FavoriteDto>(
					'favorite',
					(): Promise<FavoriteDto> => $api('add-favorite/', {
						method: 'POST',
						body: {
							id,
						},

					}))

				favorites.value = favorite?.value?.data?.products || [];

				const { data: cart } = await useAsyncData<CartDto>(
					'cart',
					(): Promise<CartDto> => $api('basket/', {
						method: 'GET',
					}))
				products.value = cart?.value?.data?.products || [];
				recommendedItems.value = cart?.value?.data?.recomendItem || [];

				return false;
			} else {
				const { data: compare } = await useAsyncData<CompareDto>(
					'compare',
					(): Promise<CompareDto> => $api('add-compare/', {
						method: 'POST',
						body: {
							id,
						},

					}))

				this.compare = compare?.value?.data?.products || [];

				const { data: favorite } = await useAsyncData<FavoriteDto>(
					'favorite',
					(): Promise<FavoriteDto> => $api('add-favorite/', {
						method: 'POST',
						body: {
							id,
						},

					}))

				favorites.value = favorite?.value?.data?.products || [];

				const { data: cart } = await useAsyncData<CartDto>(
					'cart',
					(): Promise<CartDto> => $api('basket/', {
						method: 'GET',
					}))
				products.value = cart?.value?.data?.products || [];
				recommendedItems.value = cart?.value?.data?.recomendItem || [];

				return true;
			}
		},
		async toggleCompareCategory (id: number, compareStatus: boolean) {
			const {$api} = useNuxtApp();
			if (compareStatus) {
				const { data: compare } = await useAsyncData<CompareDto>(
					'compare',
					(): Promise<CompareDto> => $api('remove-compare/', {
						method: 'POST',
						body: {
							id,
						},
					}))

				this.compare = compare?.value?.data?.products || [];
				return false;
			} else {
				const { data: compare } = await useAsyncData<CompareDto>(
					'compare',
					(): Promise<CompareDto> => $api('add-compare/', {
						method: 'POST',
						body: {
							id,
						},

					}))

				this.compare = compare?.value?.data?.products || [];
				return true;
			}
		},

		async deleteFromCompare(id: number) {
			const {$api} = useNuxtApp();
			const { data: compare } = await useAsyncData<CompareDto>(
				'compare',
				(): Promise<CompareDto> => $api('remove-compare/', {
					method: 'POST',
					body: {
						id,
					},
				}))

			this.compare = compare?.value?.data?.products || [];
		}
	}})