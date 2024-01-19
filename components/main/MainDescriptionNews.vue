<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col gap-7 laptop:gap-6 laptop:w-full laptop:max-w-[50%] tablet:max-w-full tablet:gap-8 mobile:gap-7">
    <div class="flex justify-between items-center">
      <h2 class="text-xl4 font-medium laptop:text-laptopXl4 tablet:text-tabletXl4 mobile:text-mobileXl4">
        Новости
      </h2>
      <ui-button
        to="/"
        text="Все новости"
      />
    </div>
    <div class="grid grid-cols-2 gap-5 tablet:gap-4">
      <main-description-news-card
        src="/test/news-1.png"
        title="Заключаем контракты на поставку кабельной продукции"
        text="В начале года мы решаем, продолжить работать с существующими"
      />
      <main-description-news-card
        src="/test/news-2.png"
        title="Заключаем контракты на поставку кабельной продукции"
        text="В начале года мы решаем, продолжить работать с существующими"
      />
      <main-description-news-card
        src="/test/news-3.png"
        title="Заключаем контракты на поставку кабельной продукции"
        text="В начале года мы решаем, продолжить работать с существующими"
      />
      <main-description-news-card
        src="/test/news-4.png"
        title="Заключаем контракты на поставку кабельной продукции"
        text="В начале года мы решаем, продолжить работать с существующими"
      />
    </div>
  </div>
</template>
