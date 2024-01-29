<script setup lang="ts">
const form = ref({
	email: '',
	password: ''
})
</script>

<template>
  <div class="pt-10 pb-[60px] px-[72px] flex flex-col gap-6 tablet:gap-5 mobile:pt-6 mobile:pb-10 mobile:px-6">
    <h2 class="text-xl2 font-medium text-center mobile:text-mobileXl2">
      Войти в аккаунт
    </h2>
    <form class="flex flex-col gap-7 tablet:gap-6">
      <div class="flex flex-col gap-1">
        <fieldset class="flex flex-col gap-4">
          <ui-input
            v-model="form.email"
            label="Электронная почта"
            placeholder="Введите почту"
          />
          <ui-input
            v-model="form.password"
            point="password"
            label="Пароль"
            placeholder="Введите пароль"
          />
        </fieldset>
        <button class="border-none text-xs text-blue flex items-start">
          Забыли пароль?
        </button>
      </div>
      <div class="flex items-center gap-5 tablet:gap-4 mobile:flex-col">
        <ui-button
          text="Войти"
          fill="fill"
          class="w-[112px] mobile:w-full"
        />
        <ui-button
          type="submit"
          text="Зарегистрироваться"
          fill="transparent"
          class="mobile:w-full"
        />
      </div>
    </form>
  </div>
</template>
