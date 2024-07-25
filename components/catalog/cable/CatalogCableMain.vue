<script setup lang="ts">
const config = useRuntimeConfig();
defineProps(['categories']);
</script>

<template>
  <div class="grid grid-cols-3 gap-5 tablet:gap-4 mobile:grid-cols-2">
    <div
      v-for="cable in categories"
      :key="cable"
    >
      <common-products-card
        :to="cable.url"
        :src="`${config.public.baseURL}${cable.picture.src}`"
        :title="cable.name"
        :item="cable.new"
        :picture="cable?.picture"
      />
    </div>
  </div>
</template>
