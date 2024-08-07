<script setup lang="ts">
import useVuelidate from '@vuelidate/core'
import { email, helpers, maxLength, minLength, required, sameAs } from '@vuelidate/validators'
import type { RegisterDto } from '~/types/auth'

const { $api } = useNuxtApp()

const { token } = useAuth()
const { isOpenAuthModal } = useRoot()

const form = ref({
  name: '',
  email: '',
  tel: '',
  legal: '',
  inn: '',
  password: '',
  confirmPassword: ''
})

const rules = computed(() => ({
  name: {
    required: helpers.withMessage('Обязательно для заполнения', required)
  },
  email: {
    required: helpers.withMessage('Обязательно для заполнения', required),
    email
  },
  tel: {
    required: helpers.withMessage('Обязательно для заполнения', required),
    minLength: minLength(15),
    maxLength: maxLength(15)
  },
  legal: {
    required: helpers.withMessage('Обязательно для заполнения', required)
  },
  inn: {
    required: helpers.withMessage('Обязательно для заполнения', required)
  },
  password: {
    required: helpers.withMessage('Обязательно для заполнения', required)
  },
  confirmPassword: {
    required: helpers.withMessage('Пароли не совпадают', required),
    sameAsPassword: sameAs('password')
  }
}))

const v$ = useVuelidate(rules, form.value)

const errorMessage = ref('');

const onSubmit = async (): Promise<void> => {
  const result = await v$.value.$validate()
  if (!result) {
    return
  }
  await $api<RegisterDto>('register/', {
    method: 'POST',
    body: {
      name: form.value.name,
      email: form.value.email,
      phone: form.value.tel,
      company: form.value.legal,
      inn: form.value.inn,
      password: form.value.password,
      confirm_password: form.value.confirmPassword
    },
    onResponse({ response }) {
      if (response.status == 201 || response.status == 200) {
        if(response?._data?.status !== 'success') {
          errorMessage.value = response._data.errors[0].message;
        }
        token.value = response._data.data.token;
        isOpenAuthModal.value = false
        form.value = {
          name: '',
          email: '',
          tel: '',
          legal: '',
          inn: '',
          password: '',
          confirmPassword: ''
        }
      }
    }
  })
}
</script>

<template>
  <form
    class="flex flex-col justify-center gap-7 tablet:gap-6"
    @submit.prevent="onSubmit()"
  >
    <fieldset class="flex flex-col gap-4 w-[310px] mx-auto mobile:w-[260px]">
      <ui-input
        v-model="v$.name.$model"
        :error="v$.name.$error"
        :error-message="v$.name.required.$message"
        label="Фамилия и имя*"
        placeholder="Введите фамилию и имя"
      />
      <ui-input
        v-model="v$.email.$model"
        :error="v$.email.$error"
        :error-message="v$.email.required.$message"
        label="Электронная почта*"
        placeholder="Введите почту"
      />
      <client-only>
        <ui-input
          v-model="v$.tel.$model"
          :error="v$.tel.$error"
          :error-message="v$.tel.required.$message"
          label="Телефон*"
          placeholder="Введите телефон"
          point="phone"
        />
      </client-only>
      <ui-input
        v-model="v$.legal.$model"
        :error="v$.legal.$error"
        :error-message="v$.legal.required.$message"
        label="Организация*"
        placeholder="Ваша организация"
      />
      <ui-input
        v-model="v$.inn.$model"
        :error="v$.inn.$error"
        :error-message="v$.inn.required.$message"
        label="ИНН*"
        placeholder="Введите ИНН"
      />
      <ui-input
        v-model="v$.password.$model"
        :error="v$.password.$error"
        :error-message="v$.password.required.$message"
        point="password"
        label="Пароль"
        placeholder="Новый пароль"
      />
      <ui-input
        v-model="v$.confirmPassword.$model"
        :error="v$.confirmPassword.$error"
        :error-message="v$.confirmPassword.required.$message"
        point="password"
        label="Подтвердить пароль"
        placeholder="Подтвердите пароль"
      />
    </fieldset>
    <span v-if="errorMessage" v-html="errorMessage" class="mt-2 mb-2 text-s text-red text-center w-[350px] mobile:w-[260px]"></span>
    <div class="flex flex-col items-center gap-2">
      <ui-button
        type="submit"
        text="Войти"
        fill="fill"
        class="w-[310px] mobile:w-[260px]"
      />
      <span class="text-s text-center text-gray200 w-[297px] mobile:w-[260px]">Нажимая на кнопку, вы соглашаетесь
        <nuxt-link to="/policy" class="text-blue">на обработку ваших персональных данных</nuxt-link></span>
    </div>
  </form>
</template>
