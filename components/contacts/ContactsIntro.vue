<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="flex items-start gap-5 tablet:gap-4 mobile:flex-col mobile:gap-6">
      <div class="flex flex-col gap-14 w-full max-w-[420px] text-m laptop:gap-10 laptop:text-laptopM laptop:max-w-[50%] tablet:gap-8 mobile:gap-6 mobile:text-mobileM mobile:max-w-full">
        <div class="flex items-center gap-7 laptop:gap-6 tablet:gap-5 mobile:gap-4">
          <img
            src="/svg/contacts-phone.svg"
            alt="Телефон"
          >
          <div class="flex flex-col gap-2">
            <a href="tel:+74952268242">+7 495 226-82-42</a>
            <a href="tel:+74952267252">+7 495 226-72-52</a>
          </div>
        </div>
        <div class="flex items-center gap-7 laptop:gap-6 tablet:gap-5 mobile:gap-4">
          <img
            src="/svg/contacts-email.svg"
            alt="Email"
          >
          <a href="mailto:info@korob-teh.ru">info@korob-teh.ru</a>
        </div>
        <div class="flex items-center gap-7 laptop:gap-6 tablet:gap-5 mobile:gap-4">
          <img
            src="/svg/contacts-location.svg"
            alt="Адрес"
          >
          <address class="not-italic">
            Россия, Москва,2-я улица Энтузиастов, д,5 Территория завода «Компрессор»
          </address>
        </div>
        <div class="flex items-center gap-7 laptop:gap-6 tablet:gap-5 mobile:gap-4">
          <img
            src="/svg/contacts-clock.svg"
            alt="Время работы"
          >
          <span>Пн-Пт, 9–00–17–00</span>
        </div>
        <div class="flex items-center gap-3">
          <a href="#">
            <img src="/svg/vk.svg">
          </a>
          <a href="#">
            <img src="/svg/telegram.svg">
          </a>
          <a href="#">
            <img src="/svg/whatsapp.svg">
          </a>
        </div>
      </div>
      <img
        src="/test/map.png"
        class="laptop:w-[50%] mobile:w-full"
      >
    </div>
  </div>
</template>
