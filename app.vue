<script setup lang="ts">
const rootStore = useRootStore()
const { isOpenOrderFast, isOpenAuthModal } = storeToRefs(rootStore)
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <common-modal-success />
  <cart-order-fast v-if="isOpenOrderFast" />
  <auth-modal v-if="isOpenAuthModal" />
</template>
