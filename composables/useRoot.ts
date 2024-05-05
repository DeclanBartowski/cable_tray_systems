export const useRoot = () => {
	const isOpenAuthModal = useState('is-open-auth-modal', () => false)
	const isShowLogin = useState('is-show-login', () => true)
	const isShowRegister = useState('is-show-register', () => false)
	const isShowPassword = useState('is-show-password', () => false)
	const isShowPasswordTwo = useState('is-show-password-two', () => false)
	const isShowPasswordSuccess = useState('is-show-password-success', () => false)

	return { isOpenAuthModal, isShowLogin, isShowRegister, isShowPassword, isShowPasswordTwo, isShowPasswordSuccess }
}
