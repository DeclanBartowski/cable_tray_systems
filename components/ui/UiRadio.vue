<script setup lang="ts">
const modelValue = defineModel<string>()

defineProps<{
	inputId: string,
	name: string,
	value: string,
	labelFor: string,
	text: string,
}>()
</script>

<template>
  <label
    :for="labelFor"
    class="flex items-center justify-center text-laptopS bg-white px-4 py-2.5 border border-solid rounded-l cursor-pointer"
    :class="modelValue === text ? 'border-black text-black' : 'border-gray200 text-gray200'"
  >
    <RadioButton
      v-model="modelValue"
      :pt="{ root: { class: 'hidden' } }"
      :input-id="inputId"
      :name="name"
      :value="value"
    />
    {{ text }}
  </label>
</template>
