import {Seo} from "~/types/root";

export interface CompareDto {
	data: CompareData;
	error: string[];
	success: string;
}

interface CompareData {
	products?: ProductItem[];
	seo: Seo;
}

export interface ProductItem {
	id: number;
	code: string;
	ratio: number;
	section_code: string;
	section_name: string;
	name: string;
	image: string;
	text: string;
	price: string;
	discount: string;
	favorite: boolean;
	compare: boolean;
	charecter: CharecterItem[];
}

export interface CharecterItem {
	title: string;
	value: string;
}