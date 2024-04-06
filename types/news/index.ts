import type { Breadcrumb, Page, PreviewsTextTitleUrl, Seo } from '../root'

export interface NewsDto {
	data: NewsData
	error: string[],
	success: string
}

export interface NewsData {
	breadcrumb: Breadcrumb[]
	elements: PreviewsTextTitleUrl[]
	page: Page
	seo: Seo
	title: string
}
