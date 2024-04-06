import type { Breadcrumb, DescTitle, Seo } from '../root'

export interface DeliveryDto {
	data: DeliveryData
	error: string[],
	success: string
}

export interface DeliveryData {
	breadcrumb: Breadcrumb[]
	card: DescTitle[]
	seo: Seo
	title: string
}
