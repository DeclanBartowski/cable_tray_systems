import type { Breadcrumb, LinkTextTitle, Page, PreviewsTextTitleUrl, Seo } from '../root'

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

export interface NewsDetailDto {
	data: NewsDetailData
	error: string[],
	success: string
}

export interface NewsDetailData {
	breadcrumb: Breadcrumb[]
	info: LinkTextTitle
	seo: Seo
}
