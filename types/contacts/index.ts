import type { Breadcrumb, CodeLinkSvgTitle, ListSrcValue, Seo } from '../root'

export interface ContactsDto {
	data: ContactsData
	error: string[],
	success: string
}

export interface ContactsData {
	breadcrumb: Breadcrumb[]
	info: ContactsInfo
	map: {
		cordinate: string[]
		title: string
	}
	seo: Seo
	socials: CodeLinkSvgTitle[]
	title: string
}

interface ContactsInfo {
	address: ListSrcValue
	email: ListSrcValue
	phone: ListSrcValue
	worktime: ListSrcValue
}
