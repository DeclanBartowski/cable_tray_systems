import type { UserDto, UserInfoDto } from '~/types/auth'

export const useAuth = () => {
  const user = useState<UserDto | undefined>('user', () => undefined)
	const userInfo = useState<UserInfoDto | undefined>('user-info', () => undefined)

	const token = useCookie<string | null>('token', {
    maxAge: 60 * 24 * 28,
    sameSite: 'strict'
  })

  return { user, token, userInfo }
}
