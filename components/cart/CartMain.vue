<script setup lang="ts">

</script>

<template>
  <div class="flex items-start justify-between tablet:flex-col tablet:justify-normal tablet:gap-8">
    <div class="flex flex-col gap-6 w-full max-w-[640px] laptop:max-w-[580px] tablet:max-w-full">
      <div class="pb-2 border-b border-solid border-gray100">
        <button class="border-none text-m text-gray200 flex items-center gap-3 laptop:text-laptopM mobile:text-mobileM">
          <close />
          Удалить все товары
        </button>
      </div>
      <div class="flex flex-col gap-5">
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
    </div>
    <div class="pt-4 tablet:pt-0 tablet:w-full">
      <cart-order />
    </div>
  </div>
</template>
