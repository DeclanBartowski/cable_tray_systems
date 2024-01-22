<script setup lang="ts">
defineProps<{
	to: string,
	src: string,
	name: string,
	description: string,
	price: string,
	oldPrice: string
}>()

const isHover = ref(false)
const isFavorite = ref(false)
const isBar = ref(false)
const isCart = ref(false)
const current = ref<number>(100)

const plusCurrent = (): void => {
  current.value = current.value + 100
}

const minusCurrent = (): void => {
  if (current.value === 100) {
    return
  } else {
    current.value = current.value - 100
  }
}
</script>

<template>
  <nuxt-link
    :to="to"
    class="relative bg-white pt-5 px-6 pb-[22px] flex flex-col gap-3 border border-solid rounded-s w-[310px] tablet:py-5 tablet:px-5 mobile:py-4 mobile:px-4 mobile:max-w-[280px]"
    :class="isHover ? 'border-yellow' : 'border-gray100'"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
  >
    <div class="flex items-center gap-4">
      <button
        class="border-none w-6 h-6"
        @click.prevent="isFavorite = !isFavorite"
      >
        <heart
          v-if="isFavorite === false"
          class="w-6 h-6"
        />
        <heart-active
          v-else
          class="w-6 h-6"
        />
      </button>
      <button
        class="border-none w-6 h-6"
        @click.prevent="isBar = !isBar"
      >
        <bar
          v-if="isBar === false"
          class="w-6 h-6"
        />
        <bar-active
          v-else
          class="w-6 h-6"
        />
      </button>
    </div>
    <div class="mx-auto">
      <img
        :src="src"
        alt="Продукт"
        class="w-[180px] h-[120px] mobile:w-[160px] mobile:h-[100px]"
      >
    </div>
    <div class="flex flex-col items-center justify-center gap-4 w-[262px] laptop:w-auto">
      <div class="flex flex-col items-center gap-2">
        <h4 class="text-m text-center laptop:text-laptopM mobile:text-mobileM">
          {{ name }}
        </h4>
        <p class="text-s text-gray200">
          {{ description }}
        </p>
      </div>
      <div class="flex items-end gap-2">
        <div class="flex items-end gap-0.5">
          <span class="text-xl2 font-medium">{{ price }} ₽</span>
          <span class="text-xxs">за 100 шт</span>
        </div>
        <span class="text-s text-gray200">{{ oldPrice }} ₽</span>
      </div>
      <div
        v-if="isHover"
        class="flex items-center gap-[13px]"
      >
        <div class="flex items-center border border-solid border-gray100 rounded-xs">
          <button
            class=" border-none py-2.5 px-2.5 flex items-center justify-center"
            @click.prevent="minusCurrent"
          >
            <minus :class="current <= 100 ? 'text-gray100' : 'text-black'" />
          </button>
          <span class="py-2.5 px-[15px] flex items-center justify-center text-xl font-medium relative after:absolute after:w-[1px] after:h-5 after:bg-gray100 after:top-[50%] after:right-[1px] after:translate-y-[-50%] before:absolute before:w-[1px] before:h-5 before:bg-gray100 before:top-[50%] before:left-[1px] before:translate-y-[-50%]">
            {{ current }}
          </span>
          <button
            class="border-none py-2.5 px-2.5 flex items-center justify-center"
            @click.prevent="plusCurrent"
          >
            <plus class="text-black" />
          </button>
        </div>
        <button
          class="border-none"
          @click.prevent="isCart = !isCart"
        >
          <img
            v-if="isCart === false"
            src="/svg/cart.svg"
            alt="Добавить в корзину"
          >
          <img
            v-else
            src="/svg/in-cart.svg"
            alt="Убрать из корзины"
          >
        </button>
      </div>
    </div>
    <ui-promotion class="top-4 right-4" />
  </nuxt-link>
</template>
