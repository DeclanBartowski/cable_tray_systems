<script setup lang="ts">
const rootStore = useRootStore()
const { isOpenOrderFast } = storeToRefs(rootStore)
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <common-modal-success />
  <cart-order-fast v-if="isOpenOrderFast" />
</template>
