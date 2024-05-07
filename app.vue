<script setup lang="ts">
const rootStore = useRootStore()
const { isOpenOrderFast } = storeToRefs(rootStore)

const { $api } = useNuxtApp()

const { token, user, userInfo } = useAuth()
const { isOpenAuthModal, isShowLogin, isShowRegister, isShowPassword, isShowPasswordTwo, checkword, login } = useRoot()

const getUser = async () => {
  await $api('user-info/', {
    method: 'GET',
    onResponse({ response }) {
      if (response.status == 201 || response.status == 200) {
        user.value = response._data.data.user
        userInfo.value = response._data
      }
    }
  })
}

watchEffect(async () => {
  if (token.value) {
    await getUser()
  }

  if (checkword.value && login.value) {
    isOpenAuthModal.value = true
    isShowLogin.value = false
    isShowRegister.value = false
    isShowPassword.value = false
    isShowPasswordTwo.value = true
  }
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <lazy-common-modal-success />
  <lazy-cart-order-fast v-if="isOpenOrderFast" />
  <lazy-auth-modal v-if="isOpenAuthModal" />
</template>
