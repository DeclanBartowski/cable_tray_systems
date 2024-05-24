<script setup lang="ts">
import {useCartStore} from "~/stores/cart";

const rootStore = useRootStore()
const { isOpenOrderFast, isShowHeader} = storeToRefs(rootStore);
const {total} = toRefs(useCartStore());

const openFastOrder = () => {
  isShowHeader.value = false;
  isOpenOrderFast.value = true;
}
</script>

<template>
  <div class="py-8 px-8 rounded-s bg-gray flex flex-col w-[420px] laptop:w-[380px] laptop:py-7 laptop:px-7 tablet:py-6 tablet:px-6 tablet:w-full mobile:py-4 mobile:px-4">
    <h3 class="text-xl2 font-semibold mb-[25px] laptop:mb-6 tablet:mb-5">
      Ваша корзина
    </h3>
    <ul class="py-0 px-0 flex flex-col gap-3 mb-10 lining-nums proportional-nums text-m laptop:text-laptopM laptop:mb-9 tablet:mb-8 mobile:mb-7 mobile:text-mobileM">
      <li class="flex items-end gap-2">
        Всего товаров:
        <div class="grow border-b border-dashed border-gray200" />
        <span class="font-medium">{{total.countFormat}}</span>
      </li>
      <li class="flex items-end gap-2">
        Сумма заказа:
        <div class="grow border-b border-dashed border-gray200"/>
        <span class="font-medium">{{total.price}} ₽</span>
      </li>
      <li class="flex items-end gap-2 text-gray300">
        Скидка:
        <div class="grow border-b border-dashed border-gray200" />
        <p class="lining-nums proportional-nums">
          {{total.discount}} ₽
        </p>
      </li>
    </ul>
    <ul class="py-0 px-0 flex flex-col gap-3 mb-[35px] laptop:mb-8 tablet:mb-7 mobile:mb-6">
      <li class="flex items-end gap-2 text-xl2 laptop:text-laptopXl2 mobile:text-mobileXl2">
        Всего товаров:
        <div class="grow border-b border-dashed border-gray200" />
        <span class="text-xl3 font-semibold lining-nums proportional-nums laptop:text-laptopXl3 mobile:text-mobileXl3">{{total.price-total.discount}} ₽</span>
      </li>
    </ul>
    <ui-button
      @click="openFastOrder()"
      text="Оформить заказ"
      fill="fill"
      class="w-full"
    />
  </div>
</template>
