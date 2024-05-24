<script setup lang="ts">
import {useCartStore} from "~/stores/cart";
import {useFavoriteStore} from "~/stores/favorite";

const rootStore = useRootStore()
const { isOpenOrderFast } = storeToRefs(rootStore)

const { $api } = useNuxtApp()

const { token, user, userInfo } = useAuth();

const {total, products } = toRefs(useCartStore());
const {favorites} = toRefs(useFavoriteStore());

const { isOpenAuthModal, isShowLogin, isShowRegister, isShowPassword, isShowPasswordTwo, checkword, login } = useRoot()

const getUser = async () => {
  await $api('user-info/', {
    method: 'GET',
    onResponse({ response }) {
      if (response.status == 201 || response.status == 200) {
        user.value = response?._data?.data?.user
        userInfo.value = response?._data
      }
    }
  })
}

const getCart = async () => {
  await $api('basket/', {
    method: 'GET',
    onResponse({response}) {
      products.value = response._data?.data?.products || [];
      if(response._data?.data?.total) {
        total.value = response._data?.data?.total;
      }
    }
  })
}

const getFavorite = async () => {
  await $api('favorite/', {
    method: 'GET',
    onResponse({response}) {
      favorites.value = response._data?.data?.products || [];
    }
  })
}

watchEffect(async () => {
  if (token.value) {
    await getUser();
    await getCart();
    await getFavorite();
  }

  if (checkword.value && login.value) {
    isOpenAuthModal.value = false
    isShowLogin.value = false
    isShowRegister.value = false
    isShowPassword.value = false
    isShowPasswordTwo.value = false
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
