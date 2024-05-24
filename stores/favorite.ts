import { defineStore } from 'pinia'
import type {ProductItem} from "~/types/favorite";
export const useFavoriteStore = defineStore('favorite', {
	state: () => ({
		favorites: [] as ProductItem[]
	}),
	getters: {
		getFavorites: (state) => state.favorites,
	},
})