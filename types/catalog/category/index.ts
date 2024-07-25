import {Breadcrumb, Seo, Page} from "~/types/root";

export interface CategoryDto {
	data: CategoryData;
	error: string[];
	success: string;
}

interface CategoryData {
	showFilter: boolean;
	filter: Filter[];
	pagination: Page;
	products: Product[];
	interested: Product[];
	sortFields: SortField[];
	section: CategorySection;
	seo: Seo;
	breadcrumb: Breadcrumb[];
}

interface CategorySection {
	id: number;
	name: string;
	code: string;
	url: string;
	picture: string | null;
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
	code: string;
	ratio: string | null;
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
	offer: boolean;
	discount_percent: boolean;
}
export interface SortField {
	name: string;
	code: string;
}
