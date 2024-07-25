import {Seo} from "~/types/root";

export interface FavoriteDto {
	data: FavoriteData;
	error: string[];
	success: string;
}

interface FavoriteData {
	products?: ProductItem[];
	seo: Seo;
}

export interface ProductItem {
	id: number;
	ratio: number;
	code: string;
	section_code: string;
	section_name: string;
	name: string;
	image: string;
	text: string;
	price: string;
	discount: string;
	favorite: boolean;
	compare: boolean;
	offer: boolean;
	discount_percent: string;
}
