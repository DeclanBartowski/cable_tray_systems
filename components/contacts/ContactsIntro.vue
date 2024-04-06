<script setup lang="ts">
import type { ContactsData } from '~/types/contacts'

defineProps<{
  data: ContactsData
}>()

const config = useRuntimeConfig()
</script>

<template>
  <div class="container">
    <div class="flex items-start gap-5 tablet:gap-4 mobile:flex-col mobile:gap-6">
      <div class="flex flex-col gap-10 w-full max-w-[420px] text-m laptop:gap-9 laptop:text-laptopM laptop:max-w-[50%] tablet:gap-8 mobile:gap-6 mobile:text-mobileM mobile:max-w-full">
        <div class="flex items-center gap-7 laptop:gap-6 tablet:gap-5 mobile:gap-4">
          <img
            :src="`${config.public.baseURL}${data.info.phone.src}`"
            alt="Телефон"
          >
          <div class="flex flex-col gap-2">
            <a
              v-for="d in data.info.phone.list"
              :key="d.value"
              :href="`tel:${d.description}`"
            >{{ d.value }}</a>
          </div>
        </div>
        <div class="flex items-center gap-7 laptop:gap-6 tablet:gap-5 mobile:gap-4">
          <img
            :src="`${config.public.baseURL}${data.info.email.src}`"
            alt="Email"
          >
          <a :href="`mailto:${data.info.email.value}`">{{ data.info.email.value }}</a>
        </div>
        <div class="flex items-center gap-7 laptop:gap-6 tablet:gap-5 mobile:gap-4">
          <img
            :src="`${config.public.baseURL}${data.info.address.src}`"
            alt="Адрес"
          >
          <address class="not-italic">
            {{ data.info.address.value }}
          </address>
        </div>
        <div class="flex items-center gap-7 laptop:gap-6 tablet:gap-5 mobile:gap-4">
          <img
            :src="`${config.public.baseURL}${data.info.worktime.src}`"
            alt="Время работы"
          >
          <span>{{ data.info.worktime.value }}</span>
        </div>
        <div class="flex items-center gap-3">
          <a
            v-for="d in data.socials"
            :key="d.code"
            :href="d.link"
          >
            <div v-html="d.svg" />
          </a>
        </div>
      </div>
      <img
        src="/test/map.png"
        class="laptop:w-[50%] mobile:w-full"
      >
    </div>
  </div>
</template>
