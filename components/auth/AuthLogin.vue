<script setup lang="ts">
import useVuelidate from '@vuelidate/core'
import { email, helpers, required } from '@vuelidate/validators'

const { $api } = useNuxtApp()

const { token } = useAuth()
const { isOpenAuthModal, isShowLogin, isShowRegister, isShowPassword } = useRoot()

const form = ref({
  email: '',
  password: ''
})

const rules = computed(() => ({
  email: {
    required: helpers.withMessage('Обязательно для заполнения', required),
    email
  },
  password: {
    required: helpers.withMessage('Обязательно для заполнения', required)
  }
}))

const v$ = useVuelidate(rules, form.value)

const showRegister = (): void => {
  isShowLogin.value = false
  isShowRegister.value = true
}

const showPassword = (): void => {
  isShowLogin.value = false
  isShowPassword.value = true
}

const onSubmit = async () => {
  const result = await v$.value.$validate()
  if (!result) {
    return
  }
  await $api('auth/', {
    method: 'POST',
    body: {
      email: form.value.email,
      password: form.value.password
    },
    onResponse({ response }) {
      if (response.status == 201 || response.status == 200) {
        token.value = response._data.data.token
        isOpenAuthModal.value = false
        form.value = {
          email: '',
          password: ''
        }
      }
    }
  })
}
</script>

<template>
  <div class="pt-10 pb-[60px] px-[72px] flex flex-col gap-6 tablet:gap-5 mobile:pt-6 mobile:pb-10 mobile:px-6">
    <h2 class="text-xl2 font-medium text-center mobile:text-mobileXl2">
      Войти в аккаунт
    </h2>
    <form
      class="flex flex-col gap-7 tablet:gap-6"
      @submit.prevent="onSubmit()"
    >
      <div class="flex flex-col gap-1">
        <fieldset class="flex flex-col gap-4">
          <ui-input
            v-model="v$.email.$model"
            :error="v$.email.$error"
            :error-message="v$.email.required.$message"
            label="Электронная почта"
            placeholder="Введите почту"
          />
          <ui-input
            v-model="v$.password.$model"
            :error="v$.password.$error"
            :error-message="v$.password.required.$message"
            point="password"
            label="Пароль"
            placeholder="Введите пароль"
          />
        </fieldset>
        <button
          class="border-none text-xs text-blue flex items-start"
          @click="showPassword()"
        >
          Забыли пароль?
        </button>
      </div>
      <div class="flex items-center gap-5 tablet:gap-4 mobile:flex-col">
        <ui-button
          type="submit"
          text="Войти"
          fill="fill"
          class="w-[112px] mobile:w-full"
        />
        <ui-button
          text="Зарегистрироваться"
          fill="transparent"
          class="mobile:w-full"
          @click.stop="showRegister"
        />
      </div>
    </form>
  </div>
</template>
