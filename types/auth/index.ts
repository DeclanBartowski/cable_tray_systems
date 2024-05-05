import type { Breadcrumb, Seo } from '../root'

export interface RegisterDto {
	status: string
	data: RegisterData
	errors: string[]
}

interface RegisterData {
	status: boolean
	token: {
		token: string
		expires: number
		user_id: number
	}
}

export interface UserInfoDto {
	status: string
	data: {
		user: UserDto
		seo: Seo
		breadcrumb: Breadcrumb[]
	}
	errors: string[]
}

export interface UserDto {
	email: string
	name: string
	phone: string
	company: string
	inn: string
	legal: boolean
}
