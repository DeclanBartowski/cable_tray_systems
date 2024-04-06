<script setup lang="ts">
import type { FileTitle } from '~/types/root'

defineProps<{
  data: FileTitle[]
}>()

const config = useRuntimeConfig()
</script>

<template>
  <div class="grid grid-cols-3 gap-5 tablet:gap-4 tablet:grid-cols-2 mobile:grid-cols-1">
    <price-main-card
      v-for="d in data"
      :key="d.title"
      :title="d.title"
      :src="`${config.public.baseURL}${d.file}`"
    />
  </div>
</template>
