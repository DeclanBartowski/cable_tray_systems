<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="flex flex-col gap-5 tablet:gap-4 mobile:gap-5">
      <div class="grid grid-cols-2 grid-rows-2 gap-5 tablet:grid-cols-1 tablet:gap-4">
        <div class="bg-yellow rounded-s py-10 pr-8 pl-14 row-span-2 h-[460px] laptop:px-10 laptop:h-auto laptop:py-6 tablet:flex tablet:justify-between mobile:px-4 mobile:py-4">
          <div class="flex flex-col gap-8 laptop:gap-7 tablet:gap-6 mobile:gap-5">
            <div class="flex gap-4 mobile:w-full">
              <h1 class="text-xl4 font-medium laptop:text-laptopXl4 tablet:text-tabletXl4 mobile:text-mobileXl4 mobile:max-w-[60%]">
                Скидки до 20% на местный и строительный крепёж
              </h1>
              <div class="hidden mobile:flex">
                <img
                  src="/images/main-intro-1.png"
                  class="w-auto h-auto"
                >
              </div>
            </div>
            <ui-button
              to="/"
              text="Подробнее"
              class="w-[152px] mobile:w-full"
            />
          </div>
          <div class="relative flex justify-end z-10 top-[-28px] laptop:top-0 tablet:justify-normal mobile:hidden">
            <img
              src="/images/main-intro-1.png"
              class="w-[380px] h-[240px] laptop:w-[320px] laptop:h-[200px] tablet:w-[300px] tablet:h-[180px]"
            >
          </div>
        </div>
        <main-intro-card
          title="Специальное предложение на электромонтаж"
          to="/"
          src="/images/main-intro-2.png"
        />
        <main-intro-card
          title="Специальное предложение на электромонтаж"
          to="/"
          src="/images/main-intro-3.png"
        />
      </div>
      <main-intro-benefits />
    </div>
  </div>
</template>
