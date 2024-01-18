<script setup lang="ts">
const modelValue = defineModel<string>()

withDefaults(defineProps<{ 
	placeholder: string, 
	item: string 
}>(), {
	item: 'default'
})
</script>

<template>
  <label
    :item="item"
    class="relative w-full"
  >
    <input
      v-model="modelValue"
      class="py-4 px-[47px] border border-solid border-gray100 rounded-m flex items-center outline-none w-full font-sans text-black placeholder:text-m placeholder:text-gray300 placeholder:font-sans"
      :placeholder="placeholder"
    >
    <slot v-if="item === 'icon'" />
  </label>
</template>
