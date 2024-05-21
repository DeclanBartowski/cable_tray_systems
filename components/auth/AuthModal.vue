<script setup lang="ts">
const { isOpenAuthModal, isShowLogin, isShowRegister, isShowPassword, isShowPasswordTwo, isShowPasswordSuccess } = useRoot()
</script>

<template>
  <ui-modal v-model="isOpenAuthModal">
    <auth-login v-show="isShowLogin" />
    <auth-register v-show="isShowRegister" />
    <auth-forgot-password v-show="isShowPassword" />
    <auth-forgot-password-two v-show="isShowPasswordTwo" />
    <auth-forgot-password-success v-if="isShowPasswordSuccess" />
  </ui-modal>
</template>
