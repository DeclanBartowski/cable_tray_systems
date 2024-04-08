<script setup lang="ts">
import type { IconTitle } from '~/types/root'

defineProps<{
  data: IconTitle[]
}>()

const config = useRuntimeConfig()
</script>

<template>
  <div class="grid grid-cols-4 gap-5 tablet:gap-4 mobile:grid-cols-2">
    <common-card
      v-for="d in data"
      :key="d.title"
      :src="`${config.public.baseURL}${d.icon}`"
      :text="d.title"
    />
  </div>
</template>
