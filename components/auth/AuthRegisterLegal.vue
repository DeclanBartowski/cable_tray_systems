<script setup lang="ts">
const form = ref({
	name: '',
	email: '',
	tel: '',
	legal: '',
	inn: '',
	password: '',
	confirmPassword: ''
})
</script>

<template>
  <form class="flex flex-col justify-center gap-7 tablet:gap-6">
    <fieldset class="flex flex-col gap-4 w-[310px] mx-auto mobile:w-[260px]">
      <ui-input
        v-model="form.name"
        label="Фамилия и имя*"
        placeholder="Введите фамилию и имя"
      />
      <ui-input
        v-model="form.email"
        label="Электронная почта*"
        placeholder="Введите почту"
      />
      <ui-input
        v-model="form.tel"
        label="Телефон*"
        placeholder="Введите телефон"
      />
      <ui-input
        v-model="form.legal"
        label="Организация*"
        placeholder="Ваша организация"
      />
      <ui-input
        v-model="form.inn"
        label="ИНН*"
        placeholder="Введите ИНН"
      />
      <ui-input
        v-model="form.password"
        point="password"
        label="Пароль"
        placeholder="Новый пароль"
      />
      <ui-input
        v-model="form.confirmPassword"
        point="password"
        label="Подтвердить пароль"
        placeholder="Подтвердите пароль"
      />
    </fieldset>
    <div class="flex flex-col items-center gap-2">
      <ui-button
        type="submit"
        text="Войти"
        fill="fill"
        class="w-[310px] mobile:w-[260px]"
      />
      <span class="text-s text-center text-gray200 w-[297px] mobile:w-[260px]">Нажимая на кнопку, вы соглашаетесь <nuxt-link class="text-blue">на обработку ваших персональных данных</nuxt-link></span>
    </div>
  </form>
</template>
