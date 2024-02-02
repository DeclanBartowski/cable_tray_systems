<script setup lang="ts">

</script>

<template>
  <div class="sticky top-[150px] py-8 px-8 rounded-s bg-gray flex flex-col w-[420px] laptop:w-[380px] laptop:py-7 laptop:px-7 tablet:py-6 tablet:px-6 tablet:w-full mobile:py-4 mobile:px-4">
    <h3 class="text-xl2 font-semibold mb-[25px] laptop:mb-6 tablet:mb-5">
      Ваша корзина
    </h3>
    <ul class="py-0 px-0 flex flex-col gap-3 mb-10 lining-nums proportional-nums text-m laptop:text-laptopM laptop:mb-9 tablet:mb-8 mobile:mb-7 mobile:text-mobileM">
      <li class="flex items-end gap-2">
        Всего товаров:
        <div class="grow border-b border-dashed border-gray200" />
        <span class="font-medium">3 товара</span>
      </li>
      <li class="flex items-end gap-2">
        Сумма заказа:
        <div class="grow border-b border-dashed border-gray200" />
        <span class="font-medium">7 749 ₽</span>
      </li>
      <li class="flex items-end gap-2 text-gray300">
        Скидка:
        <div class="grow border-b border-dashed border-gray200" />
        <span class="lining-nums proportional-nums">— 500 ₽</span>
      </li>
    </ul>
    <ul class="py-0 px-0 flex flex-col gap-3 mb-[35px] laptop:mb-8 tablet:mb-7 mobile:mb-6">
      <li class="flex items-end gap-2 text-xl2 laptop:text-laptopXl2 mobile:text-mobileXl2">
        Всего товаров:
        <div class="grow border-b border-dashed border-gray200" />
        <span class="text-xl3 font-semibold lining-nums proportional-nums laptop:text-laptopXl3 mobile:text-mobileXl3">7 249 ₽</span>
      </li>
    </ul>
    <div class="mb-3">
      <ui-button
        text="Подтвердить заказ"
        fill="fill"
        class="w-full"
      />
    </div>
    <span class="text-s text-gray300">Нажимая на кнопку, вы соглашаетесь <nuxt-link
      to="/"
      class="text-blue"
    >на обработку ваших персональных данных</nuxt-link></span>
  </div>
</template>
