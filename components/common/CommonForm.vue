<script setup lang="ts">
import type { DealerDto } from '~/types/common'

const rootStore = useRootStore()
const { isOpenModalSuccess } = storeToRefs(rootStore)

const { $api } = useNuxtApp()

const form = ref({
	name: '',
	tel: '',
	manager: '',
	email: '',
	website: '',
	inn: ''
})

const { data: dealer } = await useContentFetch<DealerDto>('diler-form', {
  method: 'GET'
})

const { refresh } = await useAsyncData(
  'form',
  () => $api('diler-form', {
    method: 'POST',
    body: {
      organization: form.value.name,
      phone: form.value.tel,
      manager: form.value.manager,
      email: form.value.email,
      site: form.value.website,
      inn: form.value.inn
    },
    onResponse({ response }) {
      if (response.status == 201) {
        isOpenModalSuccess.value = true
      }
    }
  }), {
  immediate: false
})

const config = useRuntimeConfig()
</script>

<template>
  <div class="flex gap-[130px] laptop:gap-[100px] tablet:container tablet:pb-20 mobile:pb-6">
    <div class="laptop:w-full laptop:min-w-[550px] laptop:h-[560px] tablet:hidden">
      <img
        v-if="dealer"
        :src="`${config.public.baseURL}${dealer.data.picture}`"
        alt="Изображение"
        class="h-full"
      >
    </div>
    <form
      class="flex flex-col gap-10 w-full max-w-[640px] laptop:max-w-[50%] laptop:pr-[100px] laptop:gap-9 tablet:pr-0 tablet:max-w-full tablet:gap-8 mobile:gap-7"
      @submit.prevent="refresh()"
    >
      <div class="flex flex-col justify-center items-center">
        <h2
          v-if="dealer"
          class="text-xl4 font-medium laptop:text-laptopXl4 tablet:text-tabletXl4 mobile:text-mobileXl4"
        >
          {{ dealer.data.title }}
        </h2>
        <p
          v-if="dealer"
          class="text-m text-gray300 laptop:text-laptopM mobile:text-mobileM mobile:text-center"
        >
          {{ dealer.data.description }}
        </p>
      </div>
      <fieldset class="grid grid-cols-2 gap-5 tablet:gap-4 mobile:grid-cols-1">
        <ui-input
          v-model="form.name"
          label="Организация"
          placeholder="Название организации"
        />
        <ui-input
          v-model="form.tel"
          label="Телефон"
          placeholder="8 800 792-92-92"
        />
        <ui-input
          v-model="form.manager"
          label="Менеджер"
          placeholder="Укажите ФИО"
        />
        <ui-input
          v-model="form.email"
          label="Электронная почта"
          placeholder="Введите почту"
        />
        <ui-input
          v-model="form.website"
          label="Сайт компании"
          placeholder="www.cait.ru"
        />
        <ui-input
          v-model="form.inn"
          label="ИНН"
          placeholder="54869524455665"
        />
      </fieldset>
      <div class="flex flex-col justify-center items-center gap-2"> 
        <ui-button
          type="submit"
          text="Отправить"
          fill="fill"
          class="w-[146px]"
        />
        <div class="flex flex-col justify-center items-center text-s laptop:text-laptopS">
          <p class="text-gray300">
            Нажимая на кнопку, вы соглашаетесь
          </p>
          <nuxt-link
            to="/"
            class="text-blue"
          >
            на обработку ваших персональных данных
          </nuxt-link>
        </div>
      </div>
    </form>
  </div>
</template>
