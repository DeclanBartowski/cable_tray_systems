<script setup lang="ts">
const rootStore = useRootStore()
const { isOpenMenu } = storeToRefs(rootStore)

const search = ref('')
const isOpenMore = ref(false)
</script>

<template>
  <div class="pt-5 text-black mobile:pt-4">
    <div class="container">
      <div class="flex flex-col gap-8 laptop:gap-7 tablet:gap-6 mobile:gap-5">
        <div class="pt-1 flex items-center justify-between">
          <nuxt-link to="/">
            <img
              src="/images/logo.png"
              alt="Логотип"
              class="laptop:w-[120px] mobile:w-20"
            >
          </nuxt-link>
          <div class="flex items-center gap-10 laptop:gap-7 tablet:hidden">
            <div class="flex flex-col gap-1">
              <a
                href="tel:88003087242"
                class="text-m font-add font-semibold laptop:text-laptopM"
              >8 800 308-72-42</a>
              <span class="text-xs laptop:text-laptopXs">Доставка для регионов круглосуточно</span>
            </div>
            <div class="flex flex-col gap-1">
              <a
                href="tel:+74958087338"
                class="text-m font-add font-semibold laptop:text-laptopM"
              >+7 495 808-73-38</a>
              <span class="text-xs laptop:text-laptopXs">Москва, Пн-Пт с 8.00 до 17.00</span>
            </div>
            <div class="flex flex-col gap-1">
              <a
                href="tel:+79533080872"
                class="text-m font-add font-semibold laptop:text-laptopM"
              >+7 953 308-08-72</a>
              <span class="text-xs laptop:text-laptopXs">Доставка для регионов круглосуточно</span>
            </div>
          </div>
          <div class="flex items-center gap-[50px] laptop:gap-9 mobile:gap-4">
            <nuxt-link
              to="/favorites"
              class="border-none relative"
            >
              <heart class="mobile:w-6 mobile:h-6" />
              <span class="absolute block text-xxs font-medium py-1.5 px-2 rounded-full bg-yellow top-[-40%] right-[-35%] laptop:text-laptopXxs">0</span>
            </nuxt-link>
            <nuxt-link
              to="/comparison"
              class="border-none relative"
            >
              <bar-active class="mobile:w-6 mobile:h-6" />
              <span class="absolute block text-xxs font-medium py-1.5 px-2 rounded-full bg-yellow top-[-40%] right-[-35%] laptop:text-laptopXxs">0</span>
            </nuxt-link>
            <nuxt-link
              to="/cart"
              class="border-none relative"
            >
              <cart class="mobile:w-6 mobile:h-6" />
              <span class="absolute block text-xxs font-medium py-1.5 px-2 rounded-full bg-yellow top-[-40%] right-[-35%] laptop:text-laptopXxs">0</span>
            </nuxt-link>
          </div>
          <ui-button
            text="Войти"
            class="tablet:w-[138px] mobile:hidden"
          />
          <button
            class="hidden border-none tablet:flex"
            @click="isOpenMenu = true"
          >
            <img
              src="/svg/menu.svg"
              alt="Меню"
              class="mobile:w-6 mobile:h-6"
            >
          </button>
        </div>
        <div class="flex items-center justify-between mobile:flex-col mobile:gap-4">
          <div class="mobile:flex mobile:items-center mobile:gap-4">
            <ui-button
              item="icon"
              fill="fill"
              text="Каталог"
            >
              <close
                v-if="false"
                class="text-black"
              />
              <catalog />
            </ui-button>
            <ui-button
              text="Войти"
              class="hidden mobile:flex w-[138px]"
            />
          </div>
          <nav class="relative flex items-end gap-6 laptop:gap-5 tablet:hidden">
            <ul class="flex items-center gap-14 laptop:gap-10">
              <li
                v-for="nav in headerNav"
                :key="nav.name"
                class="text-m transition-all laptop:text-laptopM hover:text-gray300"
              >
                <nuxt-link :to="nav.path">
                  {{ nav.name }}
                </nuxt-link>
              </li>
            </ul>
            <button
              class="border-none"
              @click="isOpenMore = !isOpenMore"
            >
              <more />
            </button>
            <layout-header-more v-if="isOpenMore" />
          </nav>
          <ui-input
            v-model="search"
            item="icon"
            class-name="small"
            placeholder="Поиск по каталогу"
            class="max-w-[420px] laptop:max-w-[320px]"
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
  <layout-mobile-menu v-if="isOpenMenu" />
</template>
