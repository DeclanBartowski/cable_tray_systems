<script setup lang="ts">
import useVuelidate from '@vuelidate/core'
import { email, helpers, required } from '@vuelidate/validators'

const { $api } = useNuxtApp()

const { isOpenAuthModal } = useRoot()

const form = ref({
	email: ''
})

const rules = computed(() => ({
  email: {
    required: helpers.withMessage('Обязательно для заполнения', required),
    email
  }
}))

const errorMessage = ref('');

const v$ = useVuelidate(rules, form.value)

const onSubmit = async () => {
  const result = await v$.value.$validate()
  if (!result) {
    return
  }
  await $api('recovery/', {
    method: 'POST',
    body: {
      email: form.value.email,
    },
    onResponse({ response }) {
      if (response.status == 201 || response.status == 200) {
        if(response?._data?.status !== 'success') {
          errorMessage.value = response._data.errors[0].message;
          return;
        }
        isOpenAuthModal.value = false
        form.value = {
          email: ''
        }
      }
    }
  })
}
</script>

<template>
  <form
    class="pt-[60px] pb-[104px] px-[60px] flex flex-col gap-8 laptop:gap-7 tablet:gap-6 mobile:pt-6 mobile:pb-10 mobile:px-6"
    @submit.prevent="onSubmit()"
  >
    <div class="flex flex-col items-center gap-2 w-[380px] mobile:w-[260px]">
      <h2 class="text-xl2 font-medium text-center mobile:text-mobileXl2">
        Восстановление пароля
      </h2>
      <p class="text-s text-gray300 text-center">
        На ваш электронный ящик отправлена ссылка, перейдите по ней, для того, чтобы восстановить пароль
      </p>
    </div>
    <div class="flex flex-col gap-7 laptop:gap-6 tablet:gap-5 w-[310px] mx-auto mobile:w-[260px]">
      <ui-input
        v-model="v$.email.$model"
        :error="v$.email.$error"
        :error-message="v$.email.required.$message"
        label="Электронная почта"
        placeholder="Введите почту"
      />
      <span v-if="errorMessage" v-html="errorMessage" class="mt-2 mb-2 text-s text-red text-center w-[300px] mobile:w-[260px]"></span>
      <ui-button
        type="submit"
        fill="fill"
        text="Отправить"
        class="w-[310px] mobile:w-[260px]"
      />
    </div>
  </form>
</template>
