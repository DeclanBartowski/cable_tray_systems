<script setup lang="ts">
const isHover = ref(false)
</script>

<template>
  <div
    class="pt-10 pb-[50px] bg-gray relative after:absolute after:w-[calc(100%-750px)] after:h-[1px] after:bg-gray300 after:left-[750px] after:top-[100px] laptop:pb-10 laptop:after:left-[420px] laptop:after:w-[calc(100%-420px)] tablet:py-8 tablet:after:top-[75px] tablet:after:left-[224px] tablet:after:w-[calc(100%-224px)] mobile:after:hidden mobile:py-6"
  >
    <div class="container">
      <div class="flex flex-col gap-[62px] laptop:gap-14 tablet:gap-10 mobile:gap-6">
        <div class="flex items-center gap-[299px] laptop:gap-[200px] tablet:gap-16 mobile:gap-10 mobile:items-start">
          <nuxt-link to="/">
            <img
              src="/images/logo-dark.png"
              alt="Логотип"
              class="laptop:w-[120px] tablet:w-[100px] mobile:w-20"
            >
          </nuxt-link>
          <div class="flex items-center gap-[79px] laptop:gap-[60px] tablet:gap-11 mobile:flex-col mobile:gap-4">
            <div class="flex flex-col gap-1 mobile:w-full">
              <a
                href="tel:88003087242"
                class="text-m font-add font-semibold laptop:text-laptopM tablet:text-tabletM"
              >8 800 308-72-42</a>
              <span class="text-xs laptop:text-laptopXs tablet:text-tabletXs">Доставка для регионов круглосуточно</span>
            </div>
            <div class="flex flex-col gap-1 mobile:w-full">
              <a
                href="tel:+74958087338"
                class="text-m font-add font-semibold laptop:text-laptopM tablet:text-tabletM"
              >+7 495 808-73-38</a>
              <span class="text-xs laptop:text-laptopXs tablet:text-tabletXs">Москва, Пн-Пт с 8.00 до 17.00</span>
            </div>
            <div class="flex flex-col gap-1 mobile:w-full">
              <a
                href="tel:+79533080872"
                class="text-m font-add font-semibold laptop:text-laptopM tablet:text-tabletM"
              >+7 953 308-08-72</a>
              <span class="text-xs laptop:text-laptopXs tablet:text-tabletXs">Доставка для регионов круглосуточно</span>
            </div>
          </div>
        </div>
        <div class="flex mobile:flex-col mobile:gap-6">
          <nav class="flex gap-[133px] text-m mr-[151px] laptop:gap-[100px] laptop:mr-[100px] laptop:text-laptopM tablet:gap-10 tablet:mr-10 mobile:mr-0 mobile:text-mobileM">
            <ul class="flex flex-col gap-5 tablet:gap-4 mobile:w-20">
              <li
                v-for="nav in footerNavLeft"
                :key="nav.name"
              >
                <nuxt-link :to="nav.path">
                  {{ nav.name }}
                </nuxt-link>
              </li>
            </ul>
            <ul class="flex flex-col gap-5 tablet:gap-4">
              <li
                v-for="nav in footerNavRight"
                :key="nav.name"
              >
                <nuxt-link :to="nav.path">
                  {{ nav.name }}
                </nuxt-link>
              </li>
            </ul>
          </nav>
          <div class="flex flex-col gap-5 w-[375px] text-m mr-[63px] laptop:text-laptopM laptop:mr-14 laptop:w-[270px] tablet:text-tabletM tablet:mr-8 tablet:gap-4 tablet:w-[180px] mobile:w-full mobile:mr-0 mobile:text-mobileM">
            <div class="flex items-start gap-[11px] laptop:gap-2.5 tablet:gap-2 tablet:items-center">
              <img
                src="/svg/mail.svg"
                alt="Почта"
              >
              <a href="mailto:info@korob.ru">info@korob.ru</a>
            </div>
            <div class="flex items-start gap-[11px] laptop:gap-2.5 tablet:gap-2">
              <img
                src="/svg/home.svg"
                alt="Дом"
              >
              <address class="not-italic">
                Россия, Москва.ю 2-я улица Зелёная д5. Территория завода «Компрессор»
              </address>
            </div>
            <div class="flex items-start gap-[11px] laptop:gap-2.5 tablet:gap-2 tablet:items-center">
              <img
                src="/svg/clock.svg"
                alt="Часы"
              >
              <span>Пн-Пт: 9.00–17.00</span>
            </div>
          </div>
          <div class="flex flex-col gap-5 tablet:gap-4">
            <div class="flex items-center gap-4">
              <a
                href="#"
                class="cursor-pointer"
                @mouseenter="isHover = true"
                @mouseleave="isHover = false"
              >
                <vk
                  v-if="isHover === false"
                  class="tablet:w-8 tablet:h-8"
                />
                <vk-active
                  v-else
                  class="tablet:w-8 tablet:h-8"
                />
              </a>
              <a
                href="#"
                class="cursor-pointer"
                @mouseenter="isHover = true"
                @mouseleave="isHover = false"
              >
                <telegram
                  v-if="isHover === false"
                  class="tablet:w-8 tablet:h-8"
                />
                <telegram-active
                  v-else
                  class="tablet:w-8 tablet:h-8"
                />
              </a>
              <a
                href="#"
                class="cursor-pointer"
                @mouseenter="isHover = true"
                @mouseleave="isHover = false"
              >
                <whatsapp
                  v-if="isHover === false"
                  class="tablet:w-8 tablet:h-8"
                />
                <whatsapp-active
                  v-else
                  class="tablet:w-8 tablet:h-8"
                />
              </a>
            </div>
            <nuxt-link
              to="/"
              class="text-xs laptop:text-laptopXs"
            >
              Политика конфиденциальности
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
