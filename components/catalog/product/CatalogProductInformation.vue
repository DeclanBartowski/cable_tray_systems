<script setup lang="ts">
import type {ProductElement} from "~/types/catalog/category/id";
import {useCartStore} from "~/stores/cart";

const coating = ref<string>('')
const thickness = ref<string>('')
const length = ref<string>('')
const current = ref<number>(7000)


defineProps<{
  product: ProductElement;
}>();

const { addProductInCart } = toRefs(useCartStore());

const plusCurrent = (): void => {
  current.value = current.value + 1000
}

const minusCurrent = (): void => {
  if (current.value === 1000) {
    return
  } else {
    current.value = current.value - 1000
  }
}
</script>

<template>
  <div class="w-full relative laptop:w-[50%] tablet:w-full">
    <div class="pb-6 flex flex-col gap-6 tablet:gap-4">
      <div class="flex flex-col gap-5 tablet:gap-4">
        <div class="flex flex-col gap-1 mobile:gap-3">
          <h2 class="text-tabletXl3 font-medium w-full max-w-[500px] laptop:max-w-[80%] laptop:text-laptopXl3 tablet:text-tabletXl3 mobile:text-mobileXl3">
            {{ product.name }}
          </h2>
          <div class="flex gap-8 text-s lining-nums proportional-nums text-gray300 laptop:gap-7 tablet:gap-5 mobile:gap-2 mobile:flex-wrap">
            <span>Код товара: {{product.element_code}}</span>
            <span>Габариты: {{product.gabarite}}</span>
            <span>Заказ: по {{product.ratio_format}}</span>
          </div>
        </div>
        <p class="text-description" v-html="product.text">
        </p>
      </div>
      <div class="flex flex-col gap-5 tablet:gap-4">
        <div class="flex flex-col gap-2.5">
          <h4 class="text-m font-medium laptop:text-laptopM mobile:text-mobileM">
            Вариант покрытия
          </h4>
          <div class="flex items-center gap-2 mobile:flex-wrap">
            <ui-radio
              v-model="coating"
              input-id="galvanizing"
              label-for="galvanizing"
              name="coating"
              value="Цинкование"
              text="Цинкование"
            />
            <ui-radio
              v-model="coating"
              input-id="stainless"
              label-for="stainless"
              name="coating"
              value="Нержавейка"
              text="Нержавейка"
            />
            <ui-radio
              v-model="coating"
              input-id="withoutCoating"
              label-for="withoutCoating"
              name="coating"
              value="Без покрытия (под окрас)"
              text="Без покрытия (под окрас)"
            />
          </div>
        </div>
        <div class="flex flex-col gap-2.5">
          <h4 class="text-m font-medium laptop:text-laptopM mobile:text-mobileM">
            Толщина металла, мм
          </h4>
          <div class="flex items-center gap-2 mobile:flex-wrap">
            <ui-radio
              v-model="thickness"
              input-id="055"
              label-for="055"
              name="thickness"
              value="0,55"
              text="0,55"
            />
            <ui-radio
              v-model="thickness"
              input-id="07"
              label-for="07"
              name="thickness"
              value="0,7"
              text="0,7"
            />
            <ui-radio
              v-model="thickness"
              input-id="08"
              label-for="08"
              name="thickness"
              value="0,8"
              text="0,8"
            />
            <ui-radio
              v-model="thickness"
              input-id="1"
              label-for="1"
              name="thickness"
              value="1"
              text="1"
            />
            <ui-radio
              v-model="thickness"
              input-id="12"
              label-for="12"
              name="thickness"
              value="1,2"
              text="1,2"
            />
          </div>
        </div>
        <div class="flex flex-col gap-2.5">
          <h4 class="text-m font-medium laptop:text-laptopM mobile:text-mobileM">
            Длина, мм
          </h4>
          <div class="flex items-center gap-2 mobile:flex-wrap">
            <ui-radio
              v-model="length"
              input-id="2500"
              label-for="2500"
              name="length"
              value="2500"
              text="2500"
            />
            <ui-radio
              v-model="length"
              input-id="2000"
              label-for="2000"
              name="length"
              value="2000"
              text="2000"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="h-[1px] w-[530px] bg-gray laptop:w-full" />
    <div class="pt-[21px] flex flex-col gap-6 w-full max-w-[417px] laptop:max-w-full tablet:gap-4">
      <div class="flex flex-col gap-1">
        <div class="flex items-center justify-between">
          <div class="relative">
            <span class="text-m font-medium laptop:text-laptopM mobile:text-mobileM">Ваша цена</span>
            <ui-tooltip class="absolute border-none -right-4 -top-1" />
          </div>
          <span class="text-xl3 font-medium lining-nums proportional-nums" v-html="product.price" ></span>
        </div>
        <div class="flex items-center justify-between text-gray200 text-s lining-nums proportional-nums">
          <span>Розничная цена</span>
          <span v-html="product.rozn_price"></span>
        </div>
      </div>
      <div class="flex items-center justify-between mobile:flex-col mobile:gap-4">
        <div class="flex items-center">
          <button
            class="border-none py-[15px] px-[15px] bg-gray300 flex items-center justify-center rounded-l-s"
            @click="minusCurrent"
          >
            <img
              src="/svg/minus.svg"
              alt="Минус"
            >
          </button>
          <span class="py-[15px] px-[35px] bg-gray flex items-center justify-center text-xl font-medium">
            {{ current }} шт
          </span>
          <button
            class="border-none py-[15px] px-[15px] bg-gray300 flex items-center justify-center rounded-r-s"
            @click="plusCurrent"
          >
            <img
              src="/svg/plus.svg"
              alt="Плюс"
            >
          </button>
        </div>
        <ui-button
            @click="addProductInCart(product.id, current)"
          fill="fill"
          text="В корзину"
          class="w-[142px]"
        />
      </div>
    </div>
    <ui-promotion class="-top-5 right-0 laptop:-top-10 tablet:-top-5 mobile:top-0" />
  </div>
</template>
