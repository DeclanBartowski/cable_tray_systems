<script setup lang="ts">
const rootStore = useRootStore()
const { isOpenOrderFast } = storeToRefs(rootStore)

useHead({
  bodyAttrs: {
    class: isOpenOrderFast.value ? "overflow-hidden" : "",
  }
})
</script>

<template>
  <div class="bg-white text-black absolute top-0 right-0 h-screen overflow-hidden w-[640px] z-10 mobile:w-[calc(100%-24px)]">
    <div class="pt-10 laptop:pt-9 tablet:pt-8 mobile:pt-7">
      <div class="flex items-start justify-between pl-9 pr-11 laptop:px-10 tablet:pl-7 tablet:pr-8 mobile:px-4 mb-10 laptop:mb-9 tablet:mb-8 mobile:mb-7">
        <h2 class="text-xl3 font-medium lining-nums proportional-nums laptop:text-laptopXl3 tablet:text-tabletXl3 mobile:text-mobileXl3">
          Корзина (3)
        </h2>
        <button class="border-none text-black">
          <close />
        </button>
      </div>
      <div class="flex flex-col gap-5 pl-4 pr-6 w-full mb-11 laptop:mb-10 tablet:gap-4 tablet:pr-5 tablet:mb-9 mobile:mb-8 mobile:pr-4">
        <cart-card
          src="/images/products-1.png"
          name="Перфорированные лотки замкового типа"
          characteristic="Высота борта"
          amount="50"
          price="3 499"
          old-price="3 999"
        />
        <cart-card
          src="/images/products-2.png"
          name="Потолочный держатель"
          characteristic="Толщина металла"
          amount="5"
          price="2 450"
        />
        <cart-card
          src="/images/products-3.png"
          name="Переход для лотков"
          characteristic="Высота борта"
          amount="100"
          price="1300"
        />
      </div>
      <div class="flex items-end gap-[65px] pl-9 mb-5 laptop:pl-10 tablet:pl-7 mobile:pl-4 tablet:mb-4">
        <span class="text-xl font-medium laptop:text-laptopXl mobile:text-mobileM">Итого к оплате:</span>
        <span class="text-xl3 font-medium lining-nums proportional-nums laptop:text-laptopXl3 tablet:text-tabletXl3 mobile:text-mobileXl3">7 249 ₽</span>
      </div>
      <div class="flex items-center gap-5 tablet:gap-4 pl-9 laptop:pl-10 tablet:pl-7 mobile:px-4 mobile:flex-col">
        <ui-button
          text="Оформить заказ"
          fill="fill"
          class="mobile:w-full"
        />
        <ui-button
          to="/cart"
          text="Перейти в корзину"
          class="mobile:w-full"
        />
      </div>
    </div>
  </div>
</template>
