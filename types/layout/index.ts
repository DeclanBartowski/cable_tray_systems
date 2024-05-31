import type { HomeSections } from '../home'
import type { CodeLinkSvgTitle, ListSrcValue } from '../root'
import type {TreeItem} from "~/types/catalog/cable-support-systems/category";

export interface LayoutDto {
	data: LayoutData
	error: string[],
	success: string
}

export interface LayoutData {
	footer_first: LayoutLink[]
	footer_second: LayoutLink[]
	info: LayoutInfo
	menuHeader: LayoutLink[]
	phones: LayoutPhones[]
	politic: LayoutLink[]
	sections: TreeItem[]
	socials: CodeLinkSvgTitle[]
}

export interface LayoutLink {
	link: string
	title: string
}

export interface LayoutInfo {
	address: ListSrcValue
	email: ListSrcValue
	worktime: ListSrcValue
}

export interface LayoutPhones {
	href: string
	text: string
	title: string
}
