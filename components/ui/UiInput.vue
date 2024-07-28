<script setup lang="ts">
const modelValue = defineModel<string>()

const isPassword = ref(false)

withDefaults(defineProps<{ 
	placeholder: string, 
	item?: string,
  label?: string,
  className?: string,
  point?: string,
  error?: boolean,
  errorMessage?: string
}>(), {
	item: 'default',
  label: '',
  className: 'default',
  point: 'default',
  error: false,
  errorMessage: ''
})
</script>

<template>
  <label
    v-if="point === 'default'"
    :item="item"
    :point="point"
    :error="error"
    class="relative w-full"
    :class="label !== '' ? 'flex flex-col gap-2 text-s text-black laptop:text-laptopS' : ''" 
  >
    {{ label }}
    <input
      v-model="modelValue"
      :className="className"
      type="text"
      class="py-4 border border-solid flex items-center outline-none w-full font-sans text-m text-black lining-nums proportional-nums placeholder:lining-nums placeholder:proportional-nums placeholder:text-m placeholder:font-sans laptop:text-laptopM laptop:placeholder:text-laptopM mobile:text-mobileM mobile:placeholder:text-mobileM"
      :class="[
        item === 'default' ? 'pl-[22px] pr-[47px]' : '', 
        item === 'icon' ? 'pl-[23px] pr-[47px]' : '',
        className === 'default' ? 'rounded-l' : '',
        className === 'small' ? 'rounded-m' : '',
        error ? 'border-red placeholder:text-red' : 'border-gray100 placeholder:text-gray300'
      ]"
      :placeholder="placeholder"
    >
    <span
      v-if="error"
      class="absolute top-[-1px] right-0 text-red text-xs"
    >{{ errorMessage }}</span>
    <slot v-if="item === 'icon'" />
  </label>

  <label
    v-if="point === 'phone'"
    :item="item"
    :point="point"
    :error="error"
    class="relative w-full"
    :class="label !== '' ? 'flex flex-col gap-2 text-s text-black laptop:text-laptopS' : ''" 
  >
    {{ label }}
    <input
      v-model="modelValue"
      v-maska
      :className="className"
      data-maska="8 ### ###-##-##"
      type="text"
      inputmode="numeric"
      class="py-4 border border-solid flex items-center outline-none w-full font-sans text-m text-black lining-nums proportional-nums placeholder:lining-nums placeholder:proportional-nums placeholder:text-m placeholder:font-sans laptop:text-laptopM laptop:placeholder:text-laptopM mobile:text-mobileM mobile:placeholder:text-mobileM"
      :class="[
        (item === 'default') ? 'pl-[22px] pr-[47px]' : '',
        (item === 'icon') ? 'pl-[23px] pr-[47px]' : '',
        className === 'default' ? 'rounded-l' : '',
        className === 'small' ? 'rounded-m' : '',
        error ? 'border-red placeholder:text-red' : 'border-gray100 placeholder:text-gray300'
      ]"
      :placeholder="placeholder"
    >
    <span
      v-if="error"
      class="absolute top-[-1px] right-0 text-red text-xs"
    >{{ errorMessage }}</span>
    <slot v-if="item === 'icon'" />
  </label>

  <label
    v-if="point === 'password'"
    :error="error"
    :item="item"
    :point="point"
    class="relative w-full"
    :class="label !== '' ? 'flex flex-col gap-2 text-s text-black laptop:text-laptopS' : ''" 
  >
    {{ label }}
    <input
      v-if="isPassword === false"
      v-model="modelValue"
      :className="className"
      type="password"
      class="py-4 border border-solid border-gray100 flex items-center outline-none w-full font-sans text-m text-black lining-nums proportional-nums placeholder:lining-nums placeholder:proportional-nums placeholder:text-m placeholder:text-gray300 placeholder:font-sans laptop:text-laptopM laptop:placeholder:text-laptopM mobile:text-mobileM mobile:placeholder:text-mobileM"
      :class="[
        item === 'default' ? 'pl-[22px] pr-[47px]' : '', 
        item === 'icon' ? 'pl-[23px] pr-[47px]' : '',
        className === 'default' ? 'rounded-l' : '',
        className === 'small' ? 'rounded-m' : '',
        error ? 'border-red placeholder:text-red' : 'border-gray100 placeholder:text-gray300'
      ]"
      :placeholder="placeholder"
    >
    <input
      v-else
      v-model="modelValue"
      :className="className"
      type="text"
      class="py-4 border border-solid border-gray100 flex items-center outline-none w-full font-sans text-m text-black lining-nums proportional-nums placeholder:lining-nums placeholder:proportional-nums placeholder:text-m placeholder:text-gray300 placeholder:font-sans laptop:text-laptopM laptop:placeholder:text-laptopM mobile:text-mobileM mobile:placeholder:text-mobileM"
      :class="[
        item === 'default' ? 'pl-[22px] pr-[47px]' : '', 
        item === 'icon' ? 'pl-[23px] pr-[47px]' : '',
        className === 'default' ? 'rounded-l' : '',
        className === 'small' ? 'rounded-m' : '',
        error ? 'border-red placeholder:text-red' : 'border-gray100 placeholder:text-gray300'
      ]"
      :placeholder="placeholder"
    >
    <span
      v-if="error"
      class="absolute top-[-1px] right-0 text-red text-xs"
    >{{ errorMessage }}</span>
    <button
      type="button"
      class="absolute top-[38px] right-4 border-none text-gray200 transition-all hover:text-gray300 laptop:top-9"
      @click="isPassword = !isPassword"
    >
      <eye-on v-if="isPassword" />
      <eye-off v-else />
    </button>
  </label>
</template>
