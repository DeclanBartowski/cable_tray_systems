import { defineStore } from 'pinia'
import type {CartDto, ProductItem, RecommendedItem, TotalInfo} from "../types/cart";
export const useCartStore = defineStore('cart', {
	state: () => ({
		products: [] as ProductItem[],
		total: {
			count: 0,
			countFormat: '',
			discount: 0,
			discountFormat: '',
			price: 0,
			priceFormat: '',
		} as TotalInfo,
		recommendedItems: [] as RecommendedItem[],
	}),
	getters: {
		getProducts: (state) => state.products,
	},
	actions: {
		async addProductInCart(productId: number, quantity: number) {
			const {$api} = useNuxtApp();
			const { data: cart } = await useAsyncData<CartDto>(
				'cart',
				(): Promise<CartDto> => $api('basket-add/', {
					method: 'POST',
					body: {
						product: productId,
						quantity,
					}
				}));
			this.products = cart?.value?.data?.products || [];
			if(cart?.value?.data?.total) {
				this.total = cart?.value?.data?.total;
			}
		},
		async updateProductInCart(productId: number, quantity: number) {
			const {$api} = useNuxtApp();
			const { data: cart } = await useAsyncData<CartDto>(
				'cart',
				(): Promise<CartDto> => $api('basket-update/', {
					method: 'POST',
					body: {
						basket: productId,
						quantity,
					}
				}));
			this.products = cart?.value?.data?.products || [];
			if(cart?.value?.data?.total) {
				this.total = cart?.value?.data?.total;
			}
		},
		async deleteProductFromCart(itemId: number) {
			const {$api} = useNuxtApp();
			const { data: cart } = await useAsyncData<CartDto>(
				'cart',
				(): Promise<CartDto> => $api('basket-delete/', {
					method: 'POST',
					body: {
						basket: itemId
					},
				}));
			this.products = cart?.value?.data?.products || [];
			if(cart?.value?.data?.total) {
				this.total = cart?.value?.data?.total;
			}
		}
	}
})