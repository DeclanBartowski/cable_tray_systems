<script setup lang="ts">
const search = ref('')
</script>

<template>
  <div class="pt-5 text-black">
    <div class="container">
      <div class="flex flex-col gap-8">
        <div class="pt-1 flex items-center justify-between">
          <nuxt-link to="/">
            <img
              src="/images/logo.png"
              alt="Логотип"
            >
          </nuxt-link>
          <div class="flex items-center gap-10">
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
          <div class="flex items-center gap-[50px]">
            <button class="border-none relative">
              <heart />
              <span class="absolute block text-xxs font-medium py-1.5 px-2 rounded-full bg-yellow top-[-40%] right-[-35%]">0</span>
            </button>
            <button class="border-none relative">
              <bar />
              <span class="absolute block text-xxs font-medium py-1.5 px-2 rounded-full bg-yellow top-[-40%] right-[-35%]">0</span>
            </button>
            <button class="border-none relative">
              <cart />
              <span class="absolute block text-xxs font-medium py-1.5 px-2 rounded-full bg-yellow top-[-40%] right-[-35%]">0</span>
            </button>
          </div>
          <ui-button text="Войти" />
        </div>
        <div class="flex items-center justify-between">
          <ui-button
            item="icon"
            text="Каталог"
          >
            <close v-if="false" />
            <catalog />
          </ui-button>
          <nav class="flex items-end gap-6">
            <ul class="flex items-center gap-14">
              <li
                v-for="nav in headerNav"
                :key="nav.name"
                class="text-m"
              >
                <nuxt-link :to="nav.path">
                  {{ nav.name }}
                </nuxt-link>
              </li>
            </ul>
            <button class="border-none">
              <more />
            </button>
          </nav>
          <ui-input
            v-model="search"
            item="icon"
            placeholder="Поиск по каталогу"
            class="max-w-[420px]"
          >
            <img
              src="/svg/search.svg"
              alt="Поиск"
              class="absolute top-[50%] right-[23px] translate-y-[-50%]"
            >
          </ui-input> 
        </div>
      </div>
    </div>
  </div>
</template>
