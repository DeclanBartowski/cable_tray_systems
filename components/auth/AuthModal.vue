<script setup lang="ts">
const rootStore = useRootStore()
const { isOpenAuthModal } = storeToRefs(rootStore)
</script>

<template>
  <ui-modal v-model="isOpenAuthModal">
    <auth-login />
    <auth-register v-if="false" />
    <auth-forgot-password v-if="false" />
    <auth-forgot-password-two v-if="false" />
    <auth-forgot-password-success v-if="false" />
  </ui-modal>
</template>
