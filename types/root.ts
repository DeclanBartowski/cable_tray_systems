export interface Breadcrumb {
	title: string
	url: string
}

export interface DescTitle {
	desc: string
	title: string
}

export interface Seo {
	canonical: string
	description: string
	keywords: string
	title: string
}

export interface DescriptionPictureTitle {
	description: string
	picture: string
	title: string
}

export interface SvgTitle {
	svg: string
	title: string
}

export interface PreviewsTextTitleUrl {
	preview: string
	text: string
	title: string
	url: string
}

export interface Page {
	itemsCount: number
	pageCount: number
	pageCurrent: number
	pageSize: number
}

export interface FileTitle {
	file: string
	title: string
}

export interface ListSrcValue {
	list: DescriptionValue[]
	src: string
	value: string
}

interface DescriptionValue {
	description: string
	value: string
}

export interface CodeLinkSvgTitle {
	code: string
	link: string
	svg: string
	title: string
}

export interface LinkTextTitle {
	link: string
	text: string
	title: string
}

export interface IconTitle {
	icon: string
	title: string
}

export interface DescriptionTitle {
	description: string
	title: string
}

export interface IdLinkNamePicture {
	id: number
	link: string
	name: string
	picture: string
}
