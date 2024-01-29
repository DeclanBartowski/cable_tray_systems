<script setup lang="ts">
const form = ref({
	password: '',
  confirmPassword: ''
})
</script>

<template>
  <div class="py-[60px] px-[95px] flex flex-col gap-8 laptop:gap-7 tablet:gap-6 mobile:pt-6 mobile:pb-10 mobile:px-6">
    <h2 class="text-xl2 font-medium text-center mobile:text-mobileXl2">
      Восстановление пароля
    </h2>
    <div class="flex flex-col gap-7 laptop:gap-6 tablet:gap-5 w-[310px] mx-auto mobile:w-[260px]">
      <fieldset class="flex flex-col gap-4">
        <ui-input
          v-model="form.password"
          point="password"
          label="Введите новый пароль"
          placeholder="Новый пароль"
        />
        <ui-input
          v-model="form.confirmPassword"
          point="password"
          label="Подтвердить пароль"
          placeholder="Подтвердите пароль"
        />
      </fieldset>
      <ui-button
        type="submit"
        fill="fill"
        text="Отправить"
        class="w-[310px] mobile:w-full"
      />
    </div>
  </div>
</template>
