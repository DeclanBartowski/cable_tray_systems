import type {Seo} from '../../root';
import {type Breadcrumb} from '../../root';

export interface CableSupportSystemDto {
	data: CableSupportSystemData;
	error: string[],
	success: string;
}

interface CableSupportSystemData {
	section: CableSupportSystemDataSection;
	sections: SectionsItem[];
	seo: Seo;
	breadcrumb: Breadcrumb[];
}

interface CableSupportSystemDataSection {
	id: number;
	name: string;
	code: string;
	url: string;
	picture: Picture;
}

interface SectionsItem {
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