<script setup lang="ts">
const modelValue = defineModel<string>()

withDefaults(defineProps<{ 
	placeholder: string, 
	item?: string,
  label?: string,
  className?: string 
}>(), {
	item: 'default',
  label: '',
  className: 'default'
})
</script>

<template>
  <label
    :item="item"
    class="relative w-full"
    :class="label !== '' ? 'flex flex-col gap-2 text-s text-black laptop:text-laptopS' : ''" 
  >
    {{ label }}
    <input
      v-model="modelValue"
      :className="className"
      class="py-4 border border-solid border-gray100 flex items-center outline-none w-full font-sans text-m text-black placeholder:text-m placeholder:text-gray300 placeholder:font-sans laptop:text-laptopM laptop:placeholder:text-laptopM mobile:text-mobileM mobile:placeholder:text-mobileM"
      :class="[
        item === 'default' ? 'px-[22px]' : '', 
        item === 'icon' ? 'pl-[23px] pr-[47px]' : '',
        className === 'default' ? 'rounded-l' : '',
        className === 'small' ? 'rounded-m' : ''
      ]"
      :placeholder="placeholder"
    >
    <slot v-if="item === 'icon'" />
  </label>
</template>
