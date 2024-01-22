<script setup lang="ts">
const modelValue = defineModel<string | string[]>()

defineProps<{
	label: string,
	inputId: string,
	name: string,
	value: string,
	forLabel: string,
	amount?: string
}>()
</script>

<template>
  <div class="flex items-center gap-3">
    <Checkbox
      v-model="modelValue"
      :input-id="inputId"
      :name="name"
      :value="value"
      :pt="{
        input: ({ context, state }) => ({
          class: context.checked ? 'w-5 h-5 rounded-checkbox outline-none bg-yellow border border-solid border-yellow shadow-none' : 'w-5 h-5 bg-white border border-solid border-transparent rounded-checkbox' && state.focused ? 'w-5 h-5 shadow-none' : 'w-5 h-5 shadow-none' }), icon: { class: '!hidden' }
      }"
    />
    <div class="flex items-center gap-2.5">
      <label
        :for="forLabel"
        class="text-m cursor-pointer"
      >{{ label }}</label>
      <span class="text-s text-gray200">{{ amount }}</span>
    </div>
  </div>
</template>
