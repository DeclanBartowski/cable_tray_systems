<script setup lang="ts">
import {email, helpers, maxLength, minLength, required, requiredIf, sameAs} from "@vuelidate/validators";
import useVuelidate from '@vuelidate/core/dist';

const { user, userInfo } = useAuth();
const {$api} = useNuxtApp();
const rootStore = useRootStore()
const { isChangeDataSuccessActive } = storeToRefs(rootStore)


const form = ref({
  name: '',
  organization: '',
  inn: '',
  email: '',
  tel: '',
  oldPassword: '',
  newPassword: '',
  confirmPassword: ''
})

const rules = computed(() => ({
  name: {
    required: helpers.withMessage('Обязательно для заполнения', required),
  },
  organization: {},
  inn: {},
  tel: {
    required: helpers.withMessage('Обязательно для заполнения', required),
    minLength: minLength(15),
    maxLength: maxLength(15)
  },
  email: {
    required: helpers.withMessage('Обязательно для заполнения', required),
    email
  },
  oldPassword: {
    required: helpers.withMessage('Обязательно для заполнения', requiredIf(form.value.newPassword || form.value.confirmPassword)),
  },
  newPassword: {
    sameAs: helpers.withMessage("Пароли не совпадают", sameAs(form.value.confirmPassword))
  },
  confirmPassword: {
    sameAs: helpers.withMessage("Пароли не совпадают", sameAs(form.value.newPassword))
  },
}))

const v$ = useVuelidate(rules, form)

const getUser = async () => {
  await $api('user-info/', {
    method: 'GET',
    onResponse({ response }) {
      if (response.status == 201 || response.status == 200) {
        user.value = response?._data?.data?.user
        userInfo.value = response?._data
      }
    }
  })
}

const sendForm = async (): Promise<void> => {
  const result = await v$.value.$validate()
  if (!result) {
    return;
  }
  await $api('change-data/', {
    method: 'POST',
    body: {
      name: form.value.name,
      email: form.value.email,
      phone: form.value.tel,
      company: form.value.organization,
      inn: form.value.inn,
      password: form.value.newPassword,
      confirm_password: form.value.confirmPassword,
      old_password: form.value.oldPassword,
    },
    onResponse({ response }) {
      if (response.status == 201 || response.status == 200) {
        isChangeDataSuccessActive.value = true;
        form.value = {
          name: user.value?.name || '',
          organization: user.value?.company || '',
          email:  user.value?.email || '',
          inn: user.value?.inn || '',
          tel: user.value?.phone || '',
          oldPassword: '',
          newPassword: '',
          confirmPassword: ''
        }
        v$.value.$reset();
      }
    }
  })
  await getUser();
}


watchEffect(() => {
  if (user.value) {
    form.value.name = user.value.name
    form.value.organization = user.value.company
    form.value.email = user.value.email
    form.value.inn = user.value.inn
    form.value.tel = user.value.phone
  }
})
</script>

<template>
  <form @submit.prevent="sendForm" class="pl-[130px] flex flex-col gap-10 laptop:gap-9 laptop:pl-[100px] tablet:gap-8 tablet:pl-0 mobile:gap-7 mobile:pl-0">
    <div class="flex flex-col gap-6 mobile:gap-4">
      <h3 class="text-xl font-medium laptop:text-laptopXl">
        Личная информация
      </h3>
      <fieldset class="grid grid-cols-2 gap-x-5 gap-y-4 w-[640px] tablet:gap-x-4 tablet:w-full mobile:grid-cols-1">
        <ui-input
          v-model="v$.name.$model"
          :error="v$.name.$error"
          :error-message="v$.name.required.$message"
          label="Фамилия и имя"
          placeholder="Иванов"
        />
        <ui-input
          v-if="user?.company"
          v-model="v$.organization.$model"
          :error="v$.organization.$error"
          label="Организация"
          placeholder="ОАО “Строймир”"
        />
        <ui-input
          v-model="v$.email.$model"
          :error="v$.email.$error"
          :error-message="v$.email.required.$message"
          label="Электронная почта"
          placeholder="pochtaivanova@mail.ru"
        />
        <ui-input
          v-if="user?.inn"
          v-model="v$.inn.$model"
          :error="v$.inn.$error"
          label="ИНН"
          placeholder="4565556545"
        />
        <client-only>
          <ui-input
              v-model="v$.tel.$model"
              :error="v$.tel.$error"
              :error-message="v$.tel.required.$message"
              label="Телефон"
              placeholder="+7 495 555 66 77"
              point="phone"
          />
        </client-only>
      </fieldset>
    </div>
    <div class="flex flex-col gap-6 mobile:gap-4">
      <h3 class="text-xl font-medium laptop:text-laptopXl">
        Изменение пароля
      </h3>
      <fieldset class="grid grid-cols-1 gap-4 w-[310px] tablet:w-full">
        <div class="tablet:w-[calc(50%-8px)] mobile:w-full">
          <ui-input
            v-model="v$.oldPassword.$model"
            :error="v$.oldPassword.$error"
            :error-message="v$.oldPassword.required.$message"
            point="password"
            label="Старый пароль"
            placeholder="Старый пароль"
          />
        </div>
        <div class="tablet:w-[calc(50%-8px)] mobile:w-full">
          <ui-input
            v-model="v$.newPassword.$model"
            :error="v$.newPassword.$error"
            :error-message="v$.newPassword.sameAs.$message"
            label="Новый пароль"
            point="password"
            placeholder=".........."
          />
        </div>
        <div class="tablet:w-[calc(50%-8px)] mobile:w-full">
          <ui-input
              v-model="v$.confirmPassword.$model"
              :error="v$.confirmPassword.$error"
              :error-message="v$.confirmPassword.sameAs.$message"
            label="Подтвердить пароль"
            point="password"
            placeholder=".........."
          />
        </div>
      </fieldset>
    </div>
    <ui-button
      type="submit"
      text="Сохранить изменения"
      class="w-[237px]"
    />
  </form>
</template>
