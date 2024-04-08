import type { DescriptionTitle, IconTitle, IdLinkNamePicture, PreviewsTextTitleUrl, Seo } from '../root'

export interface HomeDto {
	data: HomeData
	error: string[],
	success: string
}

export interface HomeData {
	about: HomeAbout
	benefits: IconTitle[]
	main_banner: HomeMain
	news: HomeNews
	sections: HomeSections[]
	seo: Seo
	sub_banner: HomeMain[]
}

export interface HomeAbout {
	btn_link: string
	btn_title: string
	subtitle: string
	text: string
	title: string
}

export interface HomeMain {
	btn: DescriptionTitle
	name: string
	picture: string
}

export interface HomeNews {
	btn_name: string
	items: PreviewsTextTitleUrl[]
	link: string
	title: string
}

export interface HomeSections {
	id: number
	link: string
	name: string
	picture: string
	sub: IdLinkNamePicture[]
}
