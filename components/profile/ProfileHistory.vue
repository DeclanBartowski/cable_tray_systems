<script setup lang="ts">
const { $api } = useNuxtApp()

const { data: orders } = await useAsyncData(
  'orders-history',
  () => $api('history/', {
    method: 'GET'
  })
)
</script>

<template>
  <div class="pl-5 flex-flex-col gap-1 tablet:pl-0">
    <Accordion unstyled>
      <AccordionTab
        :pt="{ headerAction: ({ context }) => ({ class: context.active ? 'active flex flex-row-reverse items-center justify-between mobile:items-start' : 'flex flex-row-reverse items-center justify-between mobile:items-start'}), headerTitle: { class: 'font-sans' }, header: ({ context }) => ({ class: context.active ? 'py-5 pl-12 pr-7 bg-white border-x border-t border-solid border-gray100 border-b-none rounded-xs rounded-b-none transition-all mobile:py-4 mobile:px-6' : 'py-5 pl-12 pr-7 bg-white border border-solid border-gray100 rounded-xs transition-all mobile:py-4 mobile:px-6' }), content: { class: 'pl-12 pr-10 pb-[22px] bg-white font-sans text-black border-x border-b border-solid border-gray100 border-t-none rounded-b-s mobile:px-6 mobile:pb-5' } }"
      >
        <template #header>
          <div class="flex items-center gap-[341px] lining-nums proportional-nums laptop:gap-[200px] tablet:gap-[100px] mobile:flex-col mobile:items-start mobile:gap-4">
            <span class="text-m font-medium laptop:text-laptopM mobile:text-mobileM">Заказ № 25463</span>
            <div class="flex items-center gap-[37px] text-m text-gray300 laptop:text-laptopM mobile:text-mobileM mobile:flex-col mobile:items-start mobile:gap-3">
              <div class="flex items-center gap-3">
                <span>Создан:</span>
                <span>14.12.2023</span>
              </div>
              <div class="flex items-center gap-3">
                <span>Получен:</span>
                <span>17.12.2023</span>
              </div>
            </div>
          </div>
        </template>
        <template #headericon>
          <img
            src="/svg/chevron-down.svg"
            class="icon w-5 h-5"
          >
        </template>
        <div class="history flex flex-col gap-1 h-[240px] overflow-y-auto mb-3">
          <div class="px-[2px] mr-[82px] flex items-center justify-between border-b border-solid border-gray100 text-s lining-nums proportional-nums tablet:mr-10 mobile:items-start mobile:mr-5 mobile:gap-4 mobile:justify-normal mobile:pb-3 mobile:flex-col">
            <img
              src="/images/products-1.png"
              class="w-[60px] h-10"
            >
            <p>Потолочный держатель</p>
            <div class="flex items-center gap-4">
              <span>2450 ₽</span>
              <span>х</span>
              <span>100шт</span>
            </div>
            <span>2450 ₽</span>
          </div>
          <div class="px-[2px] mr-[82px] flex items-center justify-between border-b border-solid border-gray100 text-s lining-nums proportional-nums tablet:mr-10 mobile:items-start mobile:mr-5 mobile:gap-4 mobile:justify-normal mobile:pb-3 mobile:flex-col">
            <img
              src="/images/products-1.png"
              class="w-[60px] h-10"
            >
            <p>Потолочный держатель</p>
            <div class="flex items-center gap-4">
              <span>2450 ₽</span>
              <span>х</span>
              <span>100шт</span>
            </div>
            <span>2450 ₽</span>
          </div>
          <div class="px-[2px] mr-[82px] flex items-center justify-between border-b border-solid border-gray100 text-s lining-nums proportional-nums tablet:mr-10 mobile:items-start mobile:mr-5 mobile:gap-4 mobile:justify-normal mobile:pb-3 mobile:flex-col">
            <img
              src="/images/products-1.png"
              class="w-[60px] h-10"
            >
            <p>Потолочный держатель</p>
            <div class="flex items-center gap-4">
              <span>2450 ₽</span>
              <span>х</span>
              <span>100шт</span>
            </div>
            <span>2450 ₽</span>
          </div>
          <div class="px-[2px] mr-[82px] flex items-center justify-between border-b border-solid border-gray100 text-s lining-nums proportional-nums tablet:mr-10 mobile:items-start mobile:mr-5 mobile:gap-4 mobile:justify-normal mobile:pb-3 mobile:flex-col">
            <img
              src="/images/products-1.png"
              class="w-[60px] h-10"
            >
            <p>Потолочный держатель</p>
            <div class="flex items-center gap-4">
              <span>2450 ₽</span>
              <span>х</span>
              <span>100шт</span>
            </div>
            <span>2450 ₽</span>
          </div>
          <div class="px-[2px] mr-[82px] flex items-center justify-between border-b border-solid border-gray100 text-s lining-nums proportional-nums tablet:mr-10 mobile:items-start mobile:mr-5 mobile:gap-4 mobile:justify-normal mobile:pb-3 mobile:flex-col">
            <img
              src="/images/products-1.png"
              class="w-[60px] h-10"
            >
            <p>Потолочный держатель</p>
            <div class="flex items-center gap-4">
              <span>2450 ₽</span>
              <span>х</span>
              <span>100шт</span>
            </div>
            <span>2450 ₽</span>
          </div>
          <div class="px-[2px] mr-[82px] flex items-center justify-between border-b border-solid border-gray100 text-s lining-nums proportional-nums tablet:mr-10 mobile:items-start mobile:mr-5 mobile:gap-4 mobile:justify-normal mobile:pb-3 mobile:flex-col">
            <img
              src="/images/products-1.png"
              class="w-[60px] h-10"
            >
            <p>Потолочный держатель</p>
            <div class="flex items-center gap-4">
              <span>2450 ₽</span>
              <span>х</span>
              <span>100шт</span>
            </div>
            <span>2450 ₽</span>
          </div>
        </div>
        <div class="flex items-center justify-between ml-[195px] mr-[82px] text-m font-medium lining-nums proportional-nums laptop:text-laptopM tablet:mr-10 tablet:ml-[100px] mobile:text-mobileM mobile:ml-0">
          <span>Итого:</span>
          <span>12 149 ₽</span>
        </div>
      </AccordionTab>
    </Accordion>
  </div>
</template>

<style>
.history::-webkit-scrollbar {
  width: 1px;
}

.history::-webkit-scrollbar-track {
  background: #E6E9F8;
}

.history::-webkit-scrollbar-thumb {
  background: #FFD54A;
}
</style>
