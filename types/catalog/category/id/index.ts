import {Breadcrumb, Seo} from "~/types/root";
import type {Product} from "~/types/catalog/category";

export interface ProductDto {
	data: ProductData;
	error: string[];
	success: string;
}

interface ProductData {
	element: ProductElement;
	seo: Seo;
	breadcrumb: Breadcrumb[];
}

export interface ProductElement {
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
	element_code: string;
	gabarite: string;
	rozn_price: string;
	ratio_format: string;

	slider: SliderItem[];

	detail_text: string;

	characters: CharacterItem[];
	documents: DocumentItem[];

	more_items: Product[];

	similar_items: Product[];

	text_tooltip: string;
}

export interface SliderItem {
	src: string;
	alt: string;
}

interface CharacterItem {
	title: string;
	value: string;
}

export interface DocumentItem {
	title: string;
	src: string;
}

interface Product {
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
	charecter: Array<any>;
}