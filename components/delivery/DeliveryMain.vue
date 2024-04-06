<script setup lang="ts">
import type { DeliveryData } from '~/types/delivery'

defineProps<{
  data: DeliveryData
}>()
</script>

<template>
  <div class="grid grid-cols-3 gap-5 tablet:gap-4 tablet:grid-cols-2 mobile:grid-cols-1">
    <delivery-main-card
      v-for="d in data.card"
      :key="d.title"
      :title="d.title"
      :text="d.desc"
    />
  </div>
</template>
