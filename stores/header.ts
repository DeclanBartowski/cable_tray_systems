import {defineStore} from "pinia";
import type {TreeItem} from "~/types/catalog/cable-support-systems/category";

export const useHeaderStore = defineStore('header', {
	state: () => ({
		catalogSections: [] as TreeItem[]
	}),
})