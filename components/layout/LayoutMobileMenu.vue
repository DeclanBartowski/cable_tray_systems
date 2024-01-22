<script setup lang="ts">
const rootStore = useRootStore()
const { isOpenMenu } = storeToRefs(rootStore)

useHead({
  bodyAttrs: {
    class: isOpenMenu.value ? "overflow-hidden" : "",
  }
})
</script>

<template>
  <div
    class="bg-white text-black text-laptopM absolute top-0 right-0 h-auto overflow-hidden w-[calc(100%-24px)] z-10"
  >
    <div class="relative px-6 py-6">
      <nav class="flex flex-col gap-6 pb-6 border-b border-b-solid border-b-gray">
        <ul class="flex flex-col gap-6">
          <li
            v-for="nav in headerNav"
            :key="nav.name"
            class="text-tabletM"
          >
            <nuxt-link :to="nav.path">
              {{ nav.name }}
            </nuxt-link>
          </li>
        </ul>
        <ul class="flex flex-col gap-6">
          <li class="text-tabletM">
            <nuxt-link to="/promotion">
              Акции (распродажи)
            </nuxt-link>
          </li>
          <li class="text-tabletM">
            <nuxt-link to="/metal-trim">
              Металлическая обрезь (обрезки производства)
            </nuxt-link>
          </li>
        </ul>
      </nav>
      <div class="pt-6">
        <div class="flex flex-col gap-6">
          <div class="flex flex-col gap-1">
            <a
              href="tel:88003087242"
              class="text-tabletM font-add font-semibold"
            >8 800 308-72-42</a>
            <span class="text-tabletXs">Доставка для регионов круглосуточно</span>
          </div>
          <div class="flex flex-col gap-1">
            <a
              href="tel:+74958087338"
              class="text-tabletM font-add font-semibold"
            >+7 495 808-73-38</a>
            <span class="text-tabletXs">Москва, Пн-Пт с 8.00 до 17.00</span>
          </div>
          <div class="flex flex-col gap-1">
            <a
              href="tel:+79533080872"
              class="text-tabletM font-add font-semibold"
            >+7 953 308-08-72</a>
            <span class="text-tabletXs">Доставка для регионов круглосуточно</span>
          </div>
        </div>
      </div>
      <button
        class="absolute top-6 right-6 border-none"
        @click="isOpenMenu = false"
      >
        <close />
      </button>
    </div>
  </div>
</template>
