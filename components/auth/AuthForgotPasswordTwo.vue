<script setup lang="ts">
import useVuelidate from '@vuelidate/core'
import { helpers, required, sameAs } from '@vuelidate/validators'

const { $api } = useNuxtApp()

const { isShowPasswordTwo, isShowPasswordSuccess,checkword, login } = useRoot()

const form = ref({
  password: '',
  confirmPassword: ''
})

const rules = computed(() => ({
  password: {
    required: helpers.withMessage('Обязательно для заполнения', required)
  },
  confirmPassword: {
    required: helpers.withMessage('Пароли не совпадают', required),
    sameAsPassword: sameAs('password')
  }
}))

const v$ = useVuelidate(rules, form.value)

const route = useRoute()

checkword.value = route.path.split('&')[2]
login.value = route.path.split('&')[3]

const onSubmit = async () => {
  const result = await v$.value.$validate()
  if (!result) {
    return
  }
  await $api('auth/', {
    method: 'POST',
    body: {
      checkword: checkword.value,
      login: login.value,
      password: form.value.password,
      confirm_password: form.value.confirmPassword
    },
    onResponse({ response }) {
      if (response.status == 201 || response.status == 200) {
        isShowPasswordTwo.value = false
        isShowPasswordSuccess.value = true
        form.value = {
          password: '',
          confirmPassword: ''
        }
      }
    }
  })
}

watchEffect(() => {
  if (checkword.value) {
    checkword.value.split('=')[1]
  }

  if (login.value) {
    login.value.split('=')[1]
  }
})
</script>

<template>
  <form
    class="py-[60px] px-[95px] flex flex-col gap-8 laptop:gap-7 tablet:gap-6 mobile:pt-6 mobile:pb-10 mobile:px-6"
    @submit.prevent="onSubmit()"
  >
    <h2 class="text-xl2 font-medium text-center mobile:text-mobileXl2">
      Восстановление пароля
    </h2>
    <div class="flex flex-col gap-7 laptop:gap-6 tablet:gap-5 w-[310px] mx-auto mobile:w-[260px]">
      <fieldset class="flex flex-col gap-4">
        <ui-input
          v-model="v$.password.$model"
          :error="v$.password.$error"
          :error-message="v$.password.required.$message"
          point="password"
          label="Введите новый пароль"
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
      <ui-button
        type="submit"
        fill="fill"
        text="Отправить"
        class="w-[310px] mobile:w-full"
      />
    </div>
  </form>
</template>
