<script setup lang="ts">
import {useCartStore} from "~/stores/cart";
import {useFavoriteStore} from "~/stores/favorite";
import {storeToRefs} from "pinia";
import {useCompareStore} from "~/stores/compare";

const rootStore = useRootStore()
const { isOpenOrderFast, isOpenIndividual } = storeToRefs(rootStore)

const { $api } = useNuxtApp()

const { token, user, userInfo } = useAuth();

const {total, products, recommendedItems } = storeToRefs(useCartStore());
const {favorites} = storeToRefs(useFavoriteStore());

const {compare} = storeToRefs(useCompareStore());

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
      recommendedItems.value = response._data.data?.recomendItem;
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

const getCompare = async () => {
  await $api('compare/', {
    method: 'GET',
    onResponse({response}) {
      compare.value = response._data?.data?.products || [];
    }
  })
}


watchEffect(async () => {
  if (token.value) {
    await getUser();
    await getCart();
    await getCompare();
    await getFavorite();
  } else {
    await getFavorite();
    await getCart();
    await getCompare();
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
  <lazy-catalog-cable-modal v-show="isOpenIndividual"/>
</template>
