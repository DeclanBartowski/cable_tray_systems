<script setup lang="ts">
withDefaults(defineProps<{
	text: string,
	item?: string,
	src?: string,
	alt?: string,
  to?: string,
  fill?: string
}>(), {
	item: 'default',
  fill: 'transparent',
	src: '',
	alt: '',
  to: ''
})
</script>

<template>
  <nuxt-link
    v-if="to"
    :to="to"
    :item="item"
    class="flex items-center border border-solid border-yellow rounded-l text-m font-medium text-black cursor-pointer transition-all laptop:text-laptopM mobile:text-mobileM"
    :class="[
      item === 'default' ? 'py-4 px-8 justify-center bg-white hover:bg-yellow focus:bg-yellow' : '', 
      item === 'icon' ? 'py-[14px] px-6 gap-4 bg-yellow hover:bg-white focus:bg-white' : '',
      item === 'color' ? 'py-4 px-8 justify-center bg-yellow hover:bg-white focus:bg-white' : '',
      item === 'border' ? 'py-4 px-8 justify-center bg-white hover:bg-yellow focus:bg-yellow hover:border-black focus:border-black' : '', 
    ]"
  >
    <slot v-if="item === 'icon'" />
    {{ text }}
  </nuxt-link>

  <button
    v-else
    :item="item"
    :fill="fill"
    class="flex items-center border border-solid border-yellow rounded-l text-m font-medium text-black cursor-pointer transition-all laptop:text-laptopM mobile:text-mobileM"
    :class="[
      item === 'default' ? 'py-4 px-8 justify-center' : '', 
      item === 'icon' ? 'py-[14px] px-6 gap-4 laptop:gap-3' : '',
      fill === 'transparent' ? 'bg-white hover:bg-yellow focus:bg-yellow' : '',
      fill === 'fill' ? 'bg-yellow hover:bg-white focus:bg-white' : ''
    ]"
  >
    <slot v-if="item === 'icon'" />
    {{ text }}
  </button>
</template>
