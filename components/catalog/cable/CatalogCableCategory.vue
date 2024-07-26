<script setup lang="ts">
import type {TreeItem} from "~/types/catalog/cable-support-systems/category";

defineProps<{
  tree: TreeItem[];
}>()

const config = useRuntimeConfig();
</script>

<template>
  <div class="flex flex-col gap-[60px] laptop:gap-14 tablet:gap-12 mobile:gap-10">
    <div class="flex flex-col gap-8 laptop:gap-7 tablet:gap-6" v-for="item in tree">
      <h4 class="text-xl2 font-medium text-center laptop:text-laptopXl2">
        {{item?.name}}
      </h4>
      <div class="grid grid-cols-2 gap-5 tablet:gap-4 mobile:grid-cols-1">
        <catalog-cable-category-card
          v-for="subItem in item?.sub"
          :tree="item?.sub"
          :title="subItem?.name"
          :src="`${config.public.baseURL}/${subItem?.picture}`"
          :picture="subItem?.picture"
        />
      </div>
    </div>
  </div>
</template>
