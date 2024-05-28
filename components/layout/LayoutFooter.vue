<script setup lang="ts">
import type { LayoutData } from '~/types/layout'

defineProps<{
  data: LayoutData
}>()

const config = useRuntimeConfig()
</script>

<template>
  <div
    class="pt-10 pb-[50px] bg-gray relative after:absolute after:w-[calc(100%-750px)] after:h-[1px] after:bg-gray300 after:left-[750px] after:top-[100px] laptop:pb-10 laptop:after:left-[420px] laptop:after:w-[calc(100%-420px)] tablet:py-8 tablet:after:top-[75px] tablet:after:left-[224px] tablet:after:w-[calc(100%-224px)] mobile:after:hidden mobile:py-6"
  >
    <div class="container">
      <div class="flex flex-col gap-[62px] laptop:gap-14 tablet:gap-10 mobile:gap-6">
        <div class="flex items-center gap-[299px] laptop:gap-[200px] tablet:gap-16 mobile:gap-10 mobile:items-start">
          <nuxt-link to="/">
            <img
              src="/images/logo-dark.png"
              alt="Логотип"
              class="laptop:w-[120px] tablet:w-[100px] mobile:w-20"
            >
          </nuxt-link>
          <div class="flex items-center gap-[79px] laptop:gap-[60px] tablet:gap-11 mobile:flex-col mobile:gap-4">
            <div
              v-for="d in data?.phones"
              :key="d.href"
              class="flex flex-col gap-1 mobile:w-full"
            >
              <a
                :href="d.href"
                class="text-m font-add font-semibold laptop:text-laptopM tablet:text-tabletM"
              >{{ d.title }}</a>
              <span class="text-xs laptop:text-laptopXs tablet:text-tabletXs">{{ d.text }}</span>
            </div>
          </div>
        </div>
        <div class="flex mobile:flex-col mobile:gap-6">
          <nav class="flex gap-[133px] text-m mr-[151px] laptop:gap-[100px] laptop:mr-[100px] laptop:text-laptopM tablet:gap-10 tablet:mr-10 mobile:mr-0 mobile:text-mobileM">
            <ul class="flex flex-col gap-5 tablet:gap-4 mobile:w-20">
              <li
                v-for="d in data?.footer_first"
                :key="d.link"
              >
                <nuxt-link :to="d.link">
                  {{ d.title }}
                </nuxt-link>
              </li>
            </ul>
            <ul class="flex flex-col gap-5 tablet:gap-4">
              <li
                v-for="d in data?.footer_second"
                :key="d.link"
              >
                <nuxt-link :to="d.link">
                  {{ d.title }}
                </nuxt-link>
              </li>
            </ul>
          </nav>
          <div class="flex flex-col gap-5 w-[375px] text-m mr-[63px] laptop:text-laptopM laptop:mr-14 laptop:w-[270px] tablet:text-tabletM tablet:mr-8 tablet:gap-4 tablet:w-[180px] mobile:w-full mobile:mr-0 mobile:text-mobileM">
            <div class="flex items-start gap-[11px] laptop:gap-2.5 tablet:gap-2 tablet:items-center">
              <img
                :src="`${config.public.baseURL}${data?.info.email.src}`"
                alt="Почта"
              >
              <a href="`mailto:${data.info.email.value}`">{{ data?.info.email.value }}</a>
            </div>
            <div class="flex items-start gap-[11px] laptop:gap-2.5 tablet:gap-2">
              <img
                :src="`${config.public.baseURL}${data?.info.address.src}`"
                alt="Дом"
              >
              <address class="not-italic">
                {{ data?.info.address.value }}
              </address>
            </div>
            <div class="flex items-start gap-[11px] laptop:gap-2.5 tablet:gap-2 tablet:items-center">
              <img
                :src="`${config.public.baseURL}${data?.info.worktime.src}`"
                alt="Часы"
              >
              <span>{{ data?.info.worktime.value }}</span>
            </div>
          </div>
          <div class="flex flex-col gap-5 tablet:gap-4">
            <div class="flex items-center gap-4">
              <nuxt-link
                v-for="d in data?.socials"
                :key="d.link"
                :to="d.link"
                href="#"
                class="cursor-pointer"
              >
                <div v-html="d.svg" />
              </nuxt-link>
            </div>
            <nuxt-link
              v-for="d in data?.politic"
              :key="d.link"
              :to="d.link"
              class="text-xs laptop:text-laptopXs"
            >
              {{ d.title }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
