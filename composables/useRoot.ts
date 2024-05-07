export const useRoot = () => {
	const isOpenAuthModal = useState('is-open-auth-modal', () => false)
	const isShowLogin = useState('is-show-login', () => true)
	const isShowRegister = useState('is-show-register', () => false)
	const isShowPassword = useState('is-show-password', () => false)
	const isShowPasswordTwo = useState('is-show-password-two', () => false)
	const isShowPasswordSuccess = useState('is-show-password-success', () => false)

  const checkword = useState<string | undefined>('user', () => undefined)
	const login = useState<string | undefined>('user', () => undefined)

	return { isOpenAuthModal, isShowLogin, isShowRegister, isShowPassword, isShowPasswordTwo, isShowPasswordSuccess, checkword, login }
}
