<script setup lang="ts">

</script>

<template>
  <div class="grid grid-cols-3 gap-5 tablet:gap-4 mobile:grid-cols-2">
    <div
      v-for="cable in cables"
      :key="cable.title"
    >
      <common-products-card
        :to="cable.to"
        :src="cable.src"
        :title="cable.title"
        :item="cable.item"
      />
    </div>
  </div>
</template>
