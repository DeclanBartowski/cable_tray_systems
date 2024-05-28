import {Breadcrumb, Seo} from "~/types/root";

export interface CableSupportSystemCategoryDto {
	data: CableSupportSystemCategoryData;
	error: string[],
	success: string;
}

interface  CableSupportSystemCategoryData {
	tree: TreeItem;
	type: string;
	section: CableSupportSystemCategoryDataSection;
	seo: Seo;
	breadcrumb: Breadcrumb[];
}

export interface CableSupportSystemCategoryDataSection {
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

export interface TreeItem {
	id: number;
	name: string;
	picture: string | null;
	link: string;
	sub: TreeItem[];
}