import {type Breadcrumb, type Page, type Seo} from "../../root";

export interface RelatedProductsDto {

	data: RelatedProductsData;
	error: string[],
	success: string;
}

interface RelatedProductsData {
	showFilter: boolean;
	filter: Filter[];
	products: Product[];
	pagination: Page;
	sortFields: SortField[];
	section: RelatedProductsDataSection;
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
	section_name: string;
	name: string;
	image: null | Picture;
	text: string;
	price: string;
	discount: string;
	favorite: boolean;
	compare: boolean;
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
