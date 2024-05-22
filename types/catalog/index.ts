import {Breadcrumb, Seo} from "~/types/root";

export interface CatalogDto {
	data: CatalogData;
	error: string[];
	success: string;
}

interface CatalogData {
	sections: CatalogDataSection[];
	title: string;
	seo: Seo;
	breadcrumb: Breadcrumb[];
}

export interface CatalogDataSection {
	name: string;
	code: string;
	url: string;
	picture: Picture;
	new: boolean;
}

interface Picture {
	src: string;
	alt: string;
}