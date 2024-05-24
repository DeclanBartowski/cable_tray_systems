import { defineStore } from 'pinia'
import type {ProductItem, TotalInfo} from "../types/cart";
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
	}),
	getters: {
		getProducts: (state) => state.products,
	},
})