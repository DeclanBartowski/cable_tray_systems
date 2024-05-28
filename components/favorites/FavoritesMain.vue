<script setup lang="ts">
import {useFavoriteStore} from "~/stores/favorite";
import {useCompareStore} from "~/stores/compare";

const {favorites} = toRefs(useFavoriteStore());
const config = useRuntimeConfig();
const { toggleFavorite} = toRefs(useFavoriteStore());
const {toggleCompare} = toRefs(useCompareStore());
</script>

<template>
  <div class="grid grid-cols-4 auto-rows-default laptop:auto-rows-defaultLaptop tablet:auto-rows-defaultTablet mobile:auto-rows-defaultMobile gap-5 items-start laptop:grid-cols-3 tablet:grid-cols-2 tablet:gap-4 mobile:grid-cols-1">
    <ui-card
      v-for="item in favorites"
      :id="item.id"
      :key="`catalog/${item.section_code}/${item.code}`"
      :to="`catalog/${item.section_code}/${item.code}`"
      :src="`${config.public.baseURL}/${item.image}`"
      :name="item.name"
      :description="item.text"
      :price="item.discount"
      :old-price="item.price"
      :is-favorite="item.favorite"
      :is-bar="item.compare"
      @toggle-favorite="toggleFavorite"
      @toggle-compare="toggleCompare"
    />
  </div>
</template>
