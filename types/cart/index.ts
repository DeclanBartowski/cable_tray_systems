import {Seo} from "~/types/root";

export interface CartDto {
	data: CartData;
	error: string[];
	success: string;
}

interface  CartData {
	products: ProductItem[];
	total: TotalInfo;
	recomendItem: RecommendedItem[];
	seo: Seo;
}

export interface TotalInfo {
	count: number;
	countFormat: string;
	price: number;
	priceFormat: string;
	discount: number;
	discountFormat: string;
}

export interface ProductItem {
	id: number;
	product_id: number;
	image: string | null;
	name: string;
	quantity: number;
	discount: number;
	discountFormat: string;
	finalPrice: number;
	finalPriceFormat: string;
	params: ProductItemParam[];
	favorite: boolean;
	compare: boolean,
	ratio: number;
}

export interface ProductItemParam {
	NAME: string;
	VALUE: string;
}

export interface RecommendedItem {
	id: number;
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
	discount_percent: string;
	offer: boolean;
}
