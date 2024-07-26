<script setup lang="ts">
const modelValue = defineModel<number | number[]>()
defineProps<{
  minMax: number[]
}>()
</script>

<template>
  <Slider
    v-model="modelValue"
    :min="minMax[0]"
    :max="minMax[1]"
    range
    :pt="{ root: { class: 'w-full h-[1px] bg-gray200' }, startHandler: { class: 'w-4 h-4 mt-[-8px] ml-0 rounded-full bg-yellow' }, endHandler: { class: 'w-4 h-4 mt-[-8px] mr-0 rounded-full bg-yellow' }, range: { class: 'bg-yellow max-w-full' } }"
  />
</template>

<style>
.p-slider .p-slider-handle {
  border: none;
}

.p-slider .p-slider-handle:focus {
  box-shadow: none;
}
</style>
