<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col gap-10 laptop:gap-9 tablet:gap-8 mobile:gap-7">
    <h2 class="text-xl3 font-medium text-center laptop:text-laptopXl3 tablet:text-tabletXl3 mobile:text-mobileXl3">
      Основополагающие принципы деятельности нашей фирмы
    </h2>
    <div class="grid grid-cols-4 gap-5 tablet:grid-cols-3 tablet:gap-4 mobile:grid-cols-2">
      <common-card
        src="/svg/benefits-1.svg"
        text="Оперативное выполнение заказа"
      />
      <common-card
        src="/svg/benefits-2.svg"
        text="Собственное производство кабельных лотков"
      />
      <common-card
        src="/svg/benefits-3.svg"
        text="Надёжность в партнёрстве и сотрудничестве"
      />
      <common-card
        src="/svg/principles-1.svg"
        text="Индивидуальный подход"
      />
      <div class="tablet:hidden" />
      <common-card
        src="/svg/principles-2.svg"
        text="Высокое качество"
      />
      <common-card
        src="/svg/benefits-4.svg"
        text="Взвешенная ценовая политика"
      />
      <div class="tablet:hidden" />
    </div>
  </div>
</template>
