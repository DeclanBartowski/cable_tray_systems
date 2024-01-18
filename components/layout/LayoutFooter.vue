<script setup lang="ts">
const isHover = ref(false)
</script>

<template>
  <div
    class="pt-10 pb-[50px] bg-gray relative after:absolute after:w-screen after:h-[1px] after:bg-gray300 after:left-[750px] after:top-[100px]"
  >
    <div class="container">
      <div class="flex flex-col gap-[62px]">
        <div class="flex items-center gap-[299px]">
          <nuxt-link to="/">
            <img
              src="/images/logo-dark.png"
              alt="Логотип"
            >
          </nuxt-link>
          <div class="flex items-center gap-[79px]">
            <div class="flex flex-col gap-1">
              <a
                href="tel:88003087242"
                class="text-m font-semibold"
              >8 800 308-72-42</a>
              <span class="text-xs">Доставка для регионов круглосуточно</span>
            </div>
            <div class="flex flex-col gap-1">
              <a
                href="tel:+74958087338"
                class="text-m font-semibold"
              >+7 495 808-73-38</a>
              <span class="text-xs">Москва, Пн-Пт с 8.00 до 17.00</span>
            </div>
            <div class="flex flex-col gap-1">
              <a
                href="tel:+79533080872"
                class="text-m font-semibold"
              >+7 953 308-08-72</a>
              <span class="text-xs">Доставка для регионов круглосуточно</span>
            </div>
          </div>
        </div>
        <div class="flex">
          <nav class="flex gap-[133px] text-m mr-[151px]">
            <ul class="flex flex-col gap-5">
              <li
                v-for="nav in footerNavLeft"
                :key="nav.name"
              >
                <nuxt-link :to="nav.path">
                  {{ nav.name }}
                </nuxt-link>
              </li>
            </ul>
            <ul class="flex flex-col gap-5">
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
          <div class="flex flex-col gap-5 w-[375px] text-m mr-[63px]">
            <div class="flex items-start gap-[11px]">
              <img
                src="/svg/mail.svg"
                alt="Почта"
              >
              <a href="mailto:info@korob.ru">info@korob.ru</a>
            </div>
            <div class="flex items-start gap-[11px]">
              <img
                src="/svg/home.svg"
                alt="Дом"
              >
              <address class="not-italic">
                Россия, Москва.ю 2-я улица Зелёная д5. Территория завода «Компрессор»
              </address>
            </div>
            <div class="flex items-start gap-[11px]">
              <img
                src="/svg/clock.svg"
                alt="Часы"
              >
              <span>Пн-Пт: 9.00–17.00</span>
            </div>
          </div>
          <div class="flex flex-col gap-5">
            <div class="flex items-center gap-4">
              <a
                href="#"
                class="cursor-pointer"
                @mouseenter="isHover = true"
                @mouseleave="isHover = false"
              >
                <vk v-if="isHover === false" />
                <vk-active v-else />
              </a>
              <a
                href="#"
                class="cursor-pointer"
                @mouseenter="isHover = true"
                @mouseleave="isHover = false"
              >
                <telegram v-if="isHover === false" />
                <telegram-active v-else />
              </a>
              <a
                href="#"
                class="cursor-pointer"
                @mouseenter="isHover = true"
                @mouseleave="isHover = false"
              >
                <whatsapp v-if="isHover === false" />
                <whatsapp-active v-else />
              </a>
            </div>
            <nuxt-link
              to="/"
              class="text-xs"
            >
              Политика конфиденциальности
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
