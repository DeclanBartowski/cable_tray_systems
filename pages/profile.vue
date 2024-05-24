<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
const { userInfo } = useAuth();
if(!userInfo.value) navigateTo({path: '/'});

useServerSeoMeta({
  ogTitle: () => userInfo.value!.data.seo.title,
  title: () => userInfo.value!.data.seo.title,
  description: () => userInfo.value!.data.seo.description,
  ogDescription: () => userInfo.value!.data.seo.description,
  keywords: () => userInfo.value!.data.seo.keywords
})
</script>

<template>
  <div class="pt-8 pb-[100px] text-black laptop:pt-7 laptop:pb-20 tablet:pt-6 tablet:pb-14 mobile:pb-6">
    <div class="container">
      <div
        v-if="userInfo"
        class="mb-10 laptop:mb-19 tablet:mb-8 mobile:hidden"
      >
        <ui-breadcrumbs :breadcrumbs="userInfo.data.breadcrumb" />
      </div>
      <h2 class="text-xl4 font-medium mb-[33px] laptop:text-laptopXl4 tablet:text-tabletXl4 mobile:text-mobileXl4 laptop:mb-8 tablet:mb-7 mobile:mb-6">
        Личный кабинет
      </h2>
      <profile-main />
    </div>
  </div>
</template>
