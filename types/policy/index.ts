import type { Breadcrumb, LinkTextTitle, Seo } from '../root'

export interface PolicyDto {
	data: PolicyData
	error: string[],
	success: string
}

export interface PolicyData {
	breadcrumb: Breadcrumb[]
	info: LinkTextTitle
	seo: Seo
}
