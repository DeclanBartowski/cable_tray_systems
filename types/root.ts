export interface Breadcrumbs {
	label: string
	route: string
}

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
