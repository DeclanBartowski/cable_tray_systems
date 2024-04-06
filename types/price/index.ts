import type { Breadcrumb, FileTitle, Seo } from '../root'

export interface PriceDto {
	data: PriceData
	error: string[],
	success: string
}

export interface PriceData {
	breadcrumb: Breadcrumb[]
	elements: FileTitle[]
	seo: Seo
	title: string
}
