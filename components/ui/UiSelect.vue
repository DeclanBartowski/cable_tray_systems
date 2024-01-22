<script setup lang="ts">
const selectedCity = ref({ name: 'Сначала новые' })
const cities = ref([
	{ name: 'Сначала новые' },
	{ name: 'Сначала старые' },
	{ name: 'Популярные' },
	{ name: 'Еще какие-то' }
])
</script>

<template>
  <Dropdown
    v-model="selectedCity"
    :options="cities"
    option-label="name"
    :pt="{ root: ({ state }) => ({ class: state.focused ? 'w-full max-w-[220px] px-0 pb-2 border-none flex items-center justify-between shadow-none' : 'w-full max-w-[220px] px-0 pb-2 border-b border-solid border-gray100 flex items-center justify-between shadow-none' }), input: { class: 'py-0 px-0 text-black text-s font-sans' }, trigger: { class: 'w-5 h-5' }, list: { class: 'py-3 pr-2 pl-3 w-[310px] bg-white border border-solid border-gray100 rounded-select shadow-select flex flex-col gap-2' }, item: ({ context }) => ({ class: context.selected ? 'px-2 py-2.5 text-s text-black font-sans bg-gray' : 'px-2 py-2.5 text-s text-black font-sans bg-white hover:bg-gray' && context.focused ? 'px-2 py-2.5 text-s text-black font-sans bg-gray' : 'px-2 py-2.5 text-s text-black font-sans bg-white hover:bg-gray' }) }"
  />
</template>
