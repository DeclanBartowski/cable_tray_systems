<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type { ContactsDto } from '~/types/contacts'

const { data: contacts } = await useContentFetch<ContactsDto>('contacts', {
  method: 'GET'
})

const breadcrumbs = ref([
  {
    label: contacts.value!.data.breadcrumb[1].title,
    route: contacts.value!.data.breadcrumb[1].url
  }
])

useServerSeoMeta({
  ogTitle: () => contacts.value!.data.seo.title,
  title: () => contacts.value!.data.seo.title,
  description: () => contacts.value!.data.seo.description,
  ogDescription: () => contacts.value!.data.seo.description,
  keywords: () => contacts.value!.data.seo.keywords
})
</script>

<template>
  <div class="pt-8 text-black laptop:pt-7 tablet:pt-6">
    <div class="container">
      <div
        v-if="contacts"
        class="mb-10 laptop:mb-19 tablet:mb-8 mobile:hidden"
      >
        <ui-breadcrumbs :breadcrumbs="breadcrumbs" />
      </div>
      <h2
        v-if="contacts"
        class="text-xl4 font-medium mb-[33px] laptop:text-laptopXl4 tablet:text-tabletXl4 mobile:text-mobileXl4 laptop:mb-8 tablet:mb-7 mobile:mb-6"
      >
        Контакты
      </h2>
    </div>
    <div
      v-if="contacts"
      class="flex flex-col gap-[100px] laptop:gap-20 tablet:gap-14 mobile:gap-9"
    >
      <contacts-intro
        v-if="contacts"
        :data="contacts.data"
      />
      <common-form />
    </div>
  </div>
</template>
