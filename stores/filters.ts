import { defineStore } from 'pinia'
import type { SortField } from "~/types/catalog/related-products";

export const useFilterStore = defineStore('filters', {
	state: () => ({
		priceFrom: 0,
		priceTo: 0,
		query: {} as { [key: string]: string },
		sortField: {} as SortField,
		categoryPageSortFields: [] as SortField[],
		categoryPageSortField: {} as SortField,
		checkBoxModel: {} as  { [key: string]: string[] },
	}),
	getters: {
		getPriceFrom: (state) => state.priceFrom,
		getPriceTo: (state) => state.priceTo,
		getQuery: (state) => state.query,
	},
	actions: {
		setPriceFrom(price: number) {
			this.priceFrom = price;
		},
		setPriceTo(price: number) {
			this.priceTo = price;
		},
		setQuery(query: { [key: string]: string }) {
			this.query = query;
		},
		resetFilters() {
			this.query = {};
			this.checkBoxModel = {};
		},
		setCheckBoxModel(name:string,values: string[]) {
			this.checkBoxModel[name] = values;
		},
	},
})
