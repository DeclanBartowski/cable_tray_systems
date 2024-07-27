<script setup lang="ts">
import {email, helpers, maxLength, minLength, required} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import type {OrderDto} from "~/types/orders";
import type { YMap } from '@yandex/ymaps3-types';
import { YandexMap, YandexMapDefaultSchemeLayer } from 'vue-yandex-maps';
import {storeToRefs} from "pinia";
import {useCartStore} from "~/stores/cart";

const { data: orderInfo } = await useContentFetch<OrderDto>('order-info/', {
  method: 'GET'
})

const rootStore = useRootStore()
const { isOpenModalSuccess } = storeToRefs(rootStore)
const {total, products, recommendedItems } = storeToRefs(useCartStore());

const map = shallowRef<null | YMap>(null);

const {$api} = useNuxtApp();

const form = ref({
	name: '',
	tel: '',
	email: '',
	inn: '',
	receivingOrders: '',
	receivingPayment: '',
  optionalText: '',
})

const rules = computed(() => ({
  name: {
    required: helpers.withMessage('Обязательно для заполнения', required)
  },
  tel: {
    required: helpers.withMessage('Обязательно для заполнения', required),
    minLength: minLength(15),
    maxLength: maxLength(15)
  },
  email: {
    required: helpers.withMessage('Обязательно для заполнения', required),
    email
  },
  inn: {
    required: helpers.withMessage('Обязательно для заполнения', required)
  },
  receivingOrders: {
    required: helpers.withMessage('Обязательно для заполнения', required)
  },
  receivingPayment: {
    required: helpers.withMessage('Обязательно для заполнения', required)
  }
}))

const v$ = useVuelidate(rules, form);

const getCart = async () => {
  await $api('basket/', {
    method: 'GET',
    onResponse({response}) {
      products.value = response._data?.data?.products || [];
      if(response._data?.data?.total) {
        total.value = response._data?.data?.total;
      }
      recommendedItems.value = response._data.data?.recomendItem;
    }
  })
}

const sendForm = async (): Promise<void> => {
  const result = await v$.value.$validate()
  if (!result) {
    return;
  }

  await $api('create-order/', {
    method: 'POST',
    body: {
      payment: form.value.receivingPayment,
      delivery: form.value.receivingOrders,
      inn: form.value.inn,
      organization: form.value.name,
      email: form.value.email,
      phone: form.value.tel,
      comment: form.value.optionalText,
    },
    onResponse({ response }) {
      if (response.status == 201 || response.status == 200) {
        isOpenModalSuccess.value = true;
        form.value = {
          name: '',
          tel: '',
          email: '',
          inn: '',
          receivingOrders: '',
          receivingPayment: '',
          optionalText: '',
        }
        v$.value.$reset();
        products.value = [];
      }
    }
  })

  await getCart();
}

useServerSeoMeta({
  ogTitle: () => orderInfo.value!.data.seo.title,
  title: () => orderInfo.value!.data.seo.title,
  description: () => orderInfo.value!.data.seo.description,
  ogDescription: () => orderInfo.value!.data.seo.description,
  keywords: () => orderInfo.value!.data.seo.keywords
})

</script>

<template>
  <form @submit.prevent="sendForm" class="flex items-start gap-5 laptop:justify-between tablet:flex-col tablet:gap-8 mobile:gap-6">
    <div class="flex flex-col gap-10 laptop:gap-9 tablet:gap-8 mobile:gap-7">
      <div class="flex flex-col gap-6 text-m font-medium lining-nums proportional-nums laptop:text-laptopM tablet:gap-5 mobile:text-mobileM">
        1. Контактная информация
        <fieldset class="grid grid-cols-2 gap-5 w-full max-w-[640px] laptop:max-w-[580px] tablet:gap-4 tablet:max-w-full mobile:grid-cols-1">
          <ui-input
            v-model="v$.name.$model"
            :error="v$.name.$error"
            :error-message="v$.name.required.$message"
            placeholder="Название организации"
            label="Организация"
          />
          <client-only>
            <ui-input
                v-model="v$.tel.$model"
                :error="v$.tel.$error"
                :error-message="v$.tel.required.$message"
                placeholder="8 800 792-92-92"
                label="Телефон"
                point="phone"
            />
          </client-only>
          <ui-input
            v-model="v$.email.$model"
            :error="v$.email.$error"
            :error-message="v$.email.required.$message"
            placeholder="Введите почту"
            label="Электронная почта"
          />
          <ui-input
            v-model="v$.inn.$model"
            :error="v$.inn.$error"
            :error-message="v$.inn.required.$message"
            placeholder="54869524455665"
            label="ИНН"
          />
        </fieldset>
      </div>
      <div class="flex flex-col gap-6 text-m font-medium lining-nums proportional-nums tablet:gap-5 laptop:text-laptopM mobile:text-mobileM">
        2. Способ получения заказа
        <div class="flex flex-col gap-5 tablet:gap-4">
          <div class="grid grid-cols-2 gap-5 w-full max-w-[640px] laptop:max-w-[580px] tablet:gap-4 tablet:max-w-full mobile:grid-cols-1">
            <ui-radio v-for="item in orderInfo?.data?.delivery"
                      v-model="v$.receivingOrders.$model"
                      :error="v$.receivingOrders.$error"
                      :error-message="v$.receivingOrders.required.$message"
                      item="orders"
                      :input-id="'delivery'+item.id"
                      :label-for="'delivery'+item.id"
                      name="receivingOrders"
                      :value="item.id"
                      :text="item.name"
                      add-text="Рассчитывается исходя из удалённости"
            />
          </div>
          <div class="h-[440px] laptop:h-[400px] tablet:h-[380px] mobile:h-[360px]">
            <yandex-map
                v-model="map"
                :settings="{
        location: {
          center: [orderInfo?.data?.pont?.GPS_S || 33.12, orderInfo?.data?.pont?.GPS_N || 55.44],
          zoom: 13,
        },
      }"
            >
              <yandex-map-default-scheme-layer/>
            </yandex-map>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-6 text-m font-medium lining-nums proportional-nums tablet:gap-5 laptop:text-laptopM mobile:text-mobileM">
        3. Способ оплаты
        <div class="grid grid-cols-2 gap-5 w-full max-w-[640px] laptop:max-w-[580px] tablet:gap-4 tablet:max-w-full mobile:grid-cols-1">
          <ui-radio v-for="item in orderInfo?.data?.payment"
                    v-model="v$.receivingPayment.$model"
                    :error="v$.receivingPayment.$error"
                    :error-message="v$.receivingPayment.required.$message"
                    item="orders"
                    :input-id="'payment'+item.id"
                    :label-for="'payment'+item.id"
                    name="receivingPayment"
                    :value="item.id"
                    :text="item.name"
                    add-text="Только для юридических лиц"
          />
          <div class="mobile:hidden" />
        </div>
      </div>
      <div class="flex flex-col gap-6 text-m font-medium lining-nums proportional-nums w-[860px] laptop:w-full tablet:gap-5 laptop:text-laptopM mobile:text-mobileM">
        4. Дополнительная информация
        <ui-textarea
          v-model="form.optionalText"
          placeholder="Комментарии, дополнение к заказу"
          class="h-[160px]"
        />
      </div>
    </div>
    <orders-order />
  </form>
</template>
