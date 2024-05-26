<script setup lang="ts">
const modelValue = defineModel<string>()

withDefaults(defineProps<{
  inputId: string,
  name: string,
  value: string,
  labelFor: string,
  text: string,
  amount?: string,
  item?: string,
  addText?: string;
  error?: boolean;
}>(), {
  amount: '',
  item: 'default',
  addText: ''
})
</script>

<template>
  <label
    v-if="item === 'default'"
    :item="item"
    :for="labelFor"
    class="flex items-center justify-center text-laptopS lining-nums proportional-nums bg-white px-4 py-2.5 border border-solid rounded-l cursor-pointer"
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

  <div
    v-if="item === 'filter'"
    :item="item"
    class="flex items-center gap-2.5"
  >
    <label
      :for="labelFor"
      class="flex items-center gap-3 text-m text-black lining-nums proportional-nums"
    >
      <RadioButton
        v-model="modelValue"
        :pt="{ root: { class: 'w-5 h-5 rounded-checkbox' }, input: ({ state }) => ({ class: state.focused ? 'flex items-center justify-center w-5 h-5 rounded-checkbox shadow-none bg-yellow border-none' : 'flex items-center justify-center w-5 h-5 rounded-checkbox bg-white border-none' }), icon: { class: 'w-5 h-5 bg-yellow rounded-checkbox' } }"
        :input-id="inputId"
        :name="name"
        :value="value"
      />
      {{ text }}
    </label>
    <span class="text-s text-gray200 lining-nums proportional-nums">{{ amount }}</span>
  </div>

  <label
    v-if="item === 'orders'"
    :item="item"
    :for="labelFor"
    class="relative py-5 px-6 flex flex-col gap-2 text-m font-medium border border-solid rounded-s text-black lining-nums proportional-nums laptop:text-laptopM laptop:px-5 mobile:text-mobileM mobile:py-4 mobile:px-4"
    :class="[
        modelValue === text ? 'border-yellow' : 'border-gray100',
        error? 'border-red': ''
        ]"
  >
    <RadioButton
      v-model="modelValue"
      :pt="{ root: { class: 'absolute w-5 h-5 rounded-full top-3 right-3' }, input: ({ props }) => ({ class: props.modelValue === value ? 'flex items-center justify-center w-5 h-5 rounded-full shadow-none bg-white border border-solid border-yellow' : 'hidden' }), icon: { class: 'w-2.5 h-2.5 bg-yellow rounded-full' } }"
      :input-id="inputId"
      :name="name"
      :value="value"
    />
    <span class="w-[232px] tablet:w-[220px]" :class="error ? 'text-red' : ''">{{ text }}</span>
    <span class="text-s text-gray300" :class="error ? 'text-red' : ''">{{ addText }}</span>
  </label>
</template>
