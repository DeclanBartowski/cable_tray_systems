import { defineStore } from 'pinia'
import type {SortField} from "~/types/catalog/related-products";
export const useFilterStore = defineStore('filters', {
	state: () => ({
		height: [] as string[],
		view: '',
		type: '',
		priceFrom: 0,
		priceTo: 0,
		query: {} as {[key: string]: string },
		sortField: {} as SortField,
		categoryPageSortFields: [] as SortField[],
		categoryPageSortField: {} as SortField,
	}),
	getters: {
		getHeight: (state) => state.height,
		getView: (state) => state.view,
		getType: (state) => state.type,
		getPriceFrom: (state) => state.priceFrom,
		getPriceTo: (state) => state.priceTo,
		getQuery: (state) => state.query,
	},
	actions: {
		setHeight(height: string[]) {
			this.height = height;
		},
		setView(view: string) {
			this.view = view;
		},
		setType(type: string) {
			this.type = type;
		},
		setPriceFrom(price: number) {
			this.priceFrom = price;
		},
		setPriceTo(price: number) {
			this.priceTo = price;
		},
		setQuery(query: {[key: string]: string}) {
			this.query = query;
		},
	},
})