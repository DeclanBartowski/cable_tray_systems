<script setup lang="ts">
import type { LinkTextTitle } from '~/types/root'

defineProps<{
  data: LinkTextTitle
}>()
</script>

<template>
  <div class="flex flex-col gap-[60px] laptop:gap-12 tablet:gap-10 mobile:gap-8">
    <div class="container">
      <div class="flex flex-col gap-10 laptop:gap-9 tablet:gap-8 mobile:gap-7">
        <div class="flex flex-col gap-8 laptop:gap-7 tablet:gap-6">
          <h2 class="text-xl4 font-medium laptop:text-laptopXl4 tablet:text-tabletXl4 mobile:text-mobileXl4">
            {{ data.title }}
          </h2>
          <div
            class="flex flex-col gap-5 text-l laptop:text-laptopL tablet:gap-4"
            v-html="data.text"
          />
        </div>
        <div class="flex flex-col gap-6 tablet:gap-5">
          <h3 class="text-xl2 font-medium laptop:text-laptopXl2 mobile:text-mobileXl2">
            Название блока
          </h3>
          <div class="flex flex-col gap-5 text-l laptop:text-laptopL tablet:gap-4">
            <p>Настоящий документ «Политика конфиденциальности» (далее по тексту – «Политика») представляет собой правила использования /указать владельца сайта/ (далее – «мы» и/или «Администрация») данных интернет-пользователей (далее «вы» и/или «Пользователь»), собираемых с использованием сайта / указать URL сайта/ (далее – «сайт»).</p>
            <p>1. Обрабатываемые данные</p>
            <p>1.1. Мы не осуществляем сбор ваших персональных данных с использованием сайта.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-start gap-5 tablet:gap-4 pl-[310px] laptop:pl-[100px] tablet:px-[60px] tablet:flex-col mobile:px-5">
      <div class="flex flex-col gap-5 text-l laptop:text-laptopL tablet:gap-4">
        <p>Настоящий документ «Политика конфиденциальности» (далее по тексту – «Политика») представляет собой правила использования /указать владельца сайта/ (далее – «мы» и/или «Администрация») данных интернет-пользователей (далее «вы» и/или «Пользователь»), собираемых с использованием сайта / указать URL сайта/ (далее – «сайт»).</p>
        <p>1. Обрабатываемые данные</p>
        <p>1.1. Мы не осуществляем сбор ваших персональных данных с использованием сайта.</p>
        <p>1.2. Все данные, собираемые на сайте, предоставляются и принимаются в обезличенной форме (далее – «Обезличенные данные»).</p>
        <p>1.3. Обезличенные данные включают следующие сведения, которые не позволяют вас идентифицировать.</p>
      </div>
      <img
        src="/images/policy.png"
        alt="Изображение"
        class="rounded-l-s laptop:w-[55%] tablet:rounded-s tablet:w-full"
      >
    </div>
    <div class="container">
      <div class="flex flex-col gap-5 text-l laptop:text-laptopL tablet:gap-4">
        <p>Настоящий документ «Политика конфиденциальности» (далее по тексту – «Политика») представляет собой правила использования /указать владельца сайта/ (далее – «мы» и/или «Администрация») данных интернет-пользователей (далее «вы» и/или «Пользователь»), собираемых с использованием сайта / указать URL сайта/ (далее – «сайт»).</p>
        <p>1. Обрабатываемые данные</p>
        <p>1.1. Мы не осуществляем сбор ваших персональных данных с использованием сайта.</p>
      </div>
    </div>
  </div>
</template>
