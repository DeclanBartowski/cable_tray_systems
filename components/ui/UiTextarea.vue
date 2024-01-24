<script setup lang="ts">
const modelValue = defineModel<string>()

defineProps<{ label: string, placeholder: string }>()
</script>

<template>
  <label class="flex flex-col gap-2 text-s text-black laptop:text-laptopS">
    {{ label }}
    <textarea
      v-model="modelValue"
      class="py-4 px-4 border border-solid border-gray100 flex items-center rounded-s outline-none resize-none w-full min-h-[120px] font-sans text-m text-black lining-nums proportional-nums placeholder:lining-nums placeholder:proportional-nums placeholder:text-m placeholder:text-gray300 placeholder:font-sans laptop:text-laptopM laptop:placeholder:text-laptopM mobile:text-mobileM mobile:placeholder:text-mobileM"
      :placeholder="placeholder"
    />
  </label>
</template>
