import type { Breadcrumb, DescriptionPictureTitle, Seo, SvgTitle } from '../root'

export interface AboutDto {
	data: AboutData
	error: string[],
	success: string
}

export interface AboutData {
	breadcrumb: Breadcrumb[]
	main: DescriptionPictureTitle
	principles: AboutPrinciples
	seo: Seo
}

export interface AboutPrinciples {
	elements: SvgTitle[]
	title: string
}
