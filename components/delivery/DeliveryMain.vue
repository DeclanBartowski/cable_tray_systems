<script setup lang="ts">
import type { DescTitle } from '~/types/root'

defineProps<{
  data: DescTitle[]
}>()
</script>

<template>
  <div class="grid grid-cols-3 gap-5 tablet:gap-4 tablet:grid-cols-2 mobile:grid-cols-1">
    <delivery-main-card
      v-for="d in data"
      :key="d.title"
      :title="d.title"
      :text="d.desc"
    />
  </div>
</template>
