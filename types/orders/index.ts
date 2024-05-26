import {Seo} from "~/types/root";

export interface OrderDto {
	data: OrderData;
	error: string[];
	success: string;
}

interface  OrderData {
	payment: Payment[];
	delivery: Delivery[];
	pont: Pont;
	seo: Seo;
}

interface Payment {
	id: number;
	name: string;
}

interface Delivery {
	id: number;
	name: string;
}

interface Pont {
	ID: number;
	TITLE: string;
	ACTIVE: string;
	ADDRESS: string;
	DESCRIPTION: string;
	GPS_N: string;
	GPS_S: string;
	IMAGE_ID: number | null;
	LOCATION_ID: number | null;
	DATE_MODIFY: Date;
	DATE_CREATE: Date;
	USER_ID: string;
	MODIFIED_BY: string;
	PHONE: string;
	SCHEDULE: string;
	XML_ID: string;
	SORT: string;
	EMAIL: string;
	ISSUING_CENTER: string;
	SHIPPING_CENTER: string;
	SITE_ID: number | null,
	CODE: string;
	IS_DEFAULT: string;
}