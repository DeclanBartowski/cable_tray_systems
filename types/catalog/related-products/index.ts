import {type Breadcrumb, type Page, type Seo} from "../../root";
import type {TreeItem} from "~/types/catalog/cable-support-systems/category";

export interface RelatedProductsDto {

	data: RelatedProductsData;
	error: string[],
	success: string;
}

interface RelatedProductsData {
	tree: TreeItem;
	section: RelatedProductsDataSection;
	type: string;
	seo: Seo;
	breadcrumb: Breadcrumb[];
}

export interface Filter {
	DISPLAY_TYPE: string;
	NAME: string;
	CODE: string;
	VALUES: {
		[key: string]: Value;
	}
}

export interface Value {
	CONTROL_NAME: string;
	VALUE: string;
	HTML_VALUE: string | null;
	CHECKED: boolean | null;
}

export interface Product {
	id: number;
	ratio: string;
	section_code: string;
	code:string;
	section_name: string;
	name: string;
	image: null | Picture;
	text: string;
	price: string;
	discount: string;
	favorite: boolean;
	compare: boolean;
	url:string;
}

interface Picture {
	src: string;
	alt: string;
}

export interface SortField {
	name: string;
	code: string;
}

interface RelatedProductsDataSection {
	id: number;
	name: string;
	code: string;
	url: string;
	picture: Picture;
}
