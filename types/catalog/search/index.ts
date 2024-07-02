import {Page} from "~/types/root";

export interface SearchDto {
	data: SearchData;
	error: string[];
	success: string;
}

interface SearchData {
	pagination: Page;
	products: Product[];
	sortFields: SortField[];
}

export interface Product {
	id: number;
	code: string;
	ratio: string;
	section_code: string;
	section_name: string;
	name: string;
	image: string | null;
	text: string;
	price: string;
	discount: string;
	favorite: boolean;
	compare: boolean;
	url: string;
}


export interface SortField {
	name: string;
	code: string;
}