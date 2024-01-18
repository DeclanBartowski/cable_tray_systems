<script setup lang="ts">
withDefaults(defineProps<{
	text: string,
	item?: string,
	src?: string,
	alt?: string,
}>(), {
	item: 'default',
	src: '',
	alt: ''
})
</script>

<template>
  <button
    :item="item"
    class="flex items-center border border-solid border-yellow rounded-l text-m font-medium cursor-pointer transition-all"
    :class="[
      item === 'default' ? 'py-4 px-8 justify-center bg-white hover:bg-yellow focus:bg-yellow' : '', 
      item === 'icon' ? 'py-[14px] px-6 gap-4 bg-yellow hover:bg-white focus:bg-white' : ''
    ]"
  >
    <slot v-if="item === 'icon'" />
    {{ text }}
  </button>
</template>
