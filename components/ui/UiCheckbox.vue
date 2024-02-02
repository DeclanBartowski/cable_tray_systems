<script setup lang="ts">
const modelValue = defineModel<string[]>()

defineProps<{
	label: string,
	inputId: string,
	name: string,
	value: string,
	forLabel: string
	amount?: string
}>()
</script>

<template>
  <div class="flex items-center gap-2.5">
    <div class="flex items-center gap-3">
      <Checkbox
        v-model="modelValue"
        :input-id="inputId"
        :name="name"
        :value="value"
        :pt="{
          input: ({ context, state }) => ({
            class: context.checked ? 'w-5 h-5 rounded-checkbox border-none outline-none bg-yellow shadow-none' : 'w-5 h-5 bg-white border-none rounded-checkbox' && state.focused ? 'w-5 h-5 shadow-none rounded-checkbox' : 'w-5 h-5 bg-white border-none rounded-checkbox'
          }), icon: { class: '!hidden' }
        }"
      />
      <label class="text-m text-black lining-nums proportional-nums cursor-pointer">{{ label }}</label>
    </div>
    <span class="text-s text-gray200 lining-nums proportional-nums">{{ amount }}</span>
  </div>
</template>
