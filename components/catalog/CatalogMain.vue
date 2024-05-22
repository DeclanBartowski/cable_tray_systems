<script setup lang="ts">
import type {CatalogDataSection} from "~/types/catalog";

const config = useRuntimeConfig();

const props = defineProps<{
  sections: CatalogDataSection[]
}>();

</script>

<template>
  <div class="flex w-full h-[560px] laptop:h-[480px] mobile:flex-col">
    <div v-for="section in sections" :style="`background: url(${config.public.baseURL}${section.picture.src})`" class="bg-cover bg-center bg-no-repeat w-[50%] tablet:flex tablet:justify-center tablet:items-center tablet:py-4 tablet:px-4 mobile:w-full mobile:h-[200px]">
      <div class="flex flex-col gap-8 mt-[140px] ml-[310px] laptop:ml-[120px] tablet:mt-0 tablet:ml-0 tablet:items-center">
        <h3 class="text-xl3 font-medium laptop:text-laptopXl3 tablet:text-tabletXl3 tablet:text-center mobile:text-mobileXl3">
          {{section?.name}}
        </h3>
        <ui-button
          :to="section?.url"
          item="color"
          text="Подробнее"
          class="w-[153px]"
        />
      </div>
    </div>
<!--    <div class="bg-[url('/images/catalog-main-2.jpg')] bg-cover bg-center bg-no-repeat w-[50%] tablet:flex tablet:justify-center tablet:items-center tablet:py-4 tablet:px-4 mobile:w-full mobile:h-[200px]">-->
<!--      <div class="flex flex-col gap-8 mt-[140px] ml-[120px] tablet:mt-0 tablet:ml-0 tablet:items-center">-->
<!--        <h3 class="text-xl3 font-medium text-white w-full max-w-[485px] laptop:text-laptopXl3 tablet:text-tabletXl3 tablet:text-center mobile:text-mobileXl3">-->
<!--          Сопутствующие товары комплексных инженерных систем-->
<!--        </h3>-->
<!--        <ui-button-->
<!--          to="/catalog/related-products"-->
<!--          item="color"-->
<!--          text="Подробнее"-->
<!--          class="w-[153px]"-->
<!--        />-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>
