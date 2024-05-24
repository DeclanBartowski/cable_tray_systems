<script setup lang="ts">
import {useFavoriteStore} from "~/stores/favorite";

const {favorites} = toRefs(useFavoriteStore());
const config = useRuntimeConfig();
</script>

<template>
  <div class="grid grid-cols-4 auto-rows-default laptop:auto-rows-defaultLaptop tablet:auto-rows-defaultTablet mobile:auto-rows-defaultMobile gap-5 items-start laptop:grid-cols-3 tablet:grid-cols-2 tablet:gap-4 mobile:grid-cols-1">
    <ui-card
      v-for="item in favorites"
      :to="`catalog/${item.section_code}/${item.id}`"
      :src="`${config.public.baseURL}/${item.image}`"
      :name="item.name"
      :description="item.text"
      :price="item.discount"
      :old-price="item.price"
      :is-favorite="item.favorite"
    />
  </div>
</template>
