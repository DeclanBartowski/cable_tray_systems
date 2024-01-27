<script setup lang="ts">
const modelValue = defineModel<string>()

withDefaults(defineProps<{
  label?: string,
  placeholder: string
}>(), {
  label: ''
})
</script>

<template>
  <label :class="label !== '' ? 'flex flex-col gap-2 text-s text-black laptop:text-laptopS' : ''">
    {{ label }}
    <textarea
      v-model="modelValue"
      class="py-4 px-4 border border-solid border-gray100 flex items-center rounded-s outline-none resize-none w-full h-full font-sans text-m text-black lining-nums proportional-nums placeholder:lining-nums placeholder:proportional-nums placeholder:text-m placeholder:text-gray300 placeholder:font-sans laptop:text-laptopM laptop:placeholder:text-laptopM mobile:text-mobileM mobile:placeholder:text-mobileM"
      :placeholder="placeholder"
    />
  </label>
</template>
