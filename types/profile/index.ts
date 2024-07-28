import type {Breadcrumb, Seo} from "~/types/root";

export interface HistoryDto {
	data: HistoryData;
	error: string[];
	success: string;
}

export interface HistoryData {
	orders: HistoryOrder[];
	seo: Seo;
	breadcrumb: Breadcrumb;
}

export interface HistoryOrder {
	ID: number;
	PRICE: string;
	DATE_CREATE: string;
	DATE_CHANGE: string;
	BASKET: BasketItem[];
}

export interface BasketItem {
	final_price: number;
	measure: string;
	name: string;
	picture: string;
	price: number;
	quantity: number;
}