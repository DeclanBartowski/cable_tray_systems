import {defineStore, storeToRefs} from 'pinia'
import type {FavoriteDto, ProductItem} from "~/types/favorite";
import type {CartDto} from "~/types/cart";
import {useCartStore} from "~/stores/cart";
import type {CategoryDto} from "~/types/catalog/category";


export const useFavoriteStore = defineStore('favorite', {
	state: () => ({
		favorites: [] as ProductItem[]
	}),
	getters: {
		getFavorites: (state) => state.favorites,
	},
	actions: {
		async toggleFavorite (id: number, favoriteStatus: boolean) {
			const {$api} = useNuxtApp();
			const {products, recommendedItems} = storeToRefs(useCartStore());
			if (favoriteStatus) {

				const { data: favorite } = await useAsyncData<FavoriteDto>(
					'favorite',
					(): Promise<FavoriteDto> => $api('remove-favorite/', {
						method: 'POST',
						body: {
							id,
						},
					}))

				this.favorites = favorite?.value?.data?.products || [];

				const { data: cart } = await useAsyncData<CartDto>(
					'cart',
					(): Promise<CartDto> => $api('basket/', {
						method: 'GET',
					}))
				products.value = cart?.value?.data?.products || [];
				recommendedItems.value = cart?.value?.data?.recomendItem || [];

				return false;
			} else {
				const { data: favorite } = await useAsyncData<FavoriteDto>(
					'favorite',
					(): Promise<FavoriteDto> => $api('add-favorite/', {
						method: 'POST',
						body: {
							id,
						},

					}))

				this.favorites = favorite?.value?.data?.products || [];

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
		async toggleFavoriteCategory (id: number, favoriteStatus: boolean) {
			const {$api} = useNuxtApp();
			if (favoriteStatus) {

				const { data: favorite } = await useAsyncData<FavoriteDto>(
					'favorite',
					(): Promise<FavoriteDto> => $api('remove-favorite/', {
						method: 'POST',
						body: {
							id,
						},
					}))

				this.favorites = favorite?.value?.data?.products || [];

				return false;
			} else {
				const { data: favorite } = await useAsyncData<FavoriteDto>(
					'favorite',
					(): Promise<FavoriteDto> => $api('add-favorite/', {
						method: 'POST',
						body: {
							id,
						},

					}))

				this.favorites = favorite?.value?.data?.products || [];

				return true;
			}
		}
}})