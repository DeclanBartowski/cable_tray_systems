<script setup lang="ts">
defineProps<{
	src: string,
	name: string,
	characteristic: string,
	amount: string,
	price: string,
	oldPrice?: string
}>()

const current = ref<number>(100)
const isFavorite = ref(false)
const isBar = ref(false)

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
  <div class="relative px-5 pb-[18px] flex gap-[60px] border-b border-solid border-gray100 mobile:flex-col mobile:gap-9">
    <div class="relative pt-[23px] mobile:pt-0">
      <img
        :src="src"
        alt="Продукт"
        class="w-[140px] h-20"
      >
      <div class="absolute top-1.5 -right-10 flex items-center gap-2 mobile:top-1 mobile:-right-4">
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
    </div>
    <div class="flex flex-col gap-5 w-[300px] tablet:gap-4">
      <div class="flex flex-col gap-3">
        <h3 class="text-m font-medium laptop:text-laptopM mobile:text-mobileM">
          {{ name }}
        </h3>
        <div class="flex flex-col gap-1">
          <div class="flex items-center gap-4">
            <span class="text-m text-gray300 laptop:text-laptopM mobile:text-mobileM">Количество:</span>
            <div class="flex items-center gap-4">
              <button
                class="border-none"
                @click.prevent="minusCurrent"
              >
                <minus :class="current <= 100 ? 'text-gray100' : 'text-black'" />
              </button>
              <span class="text-m lining-nums proportional-nums laptop:text-laptopM mobile:text-mobileM">
                {{ current }} шт
              </span>
              <button
                class="border-none"
                @click.prevent="plusCurrent"
              >
                <plus class="text-black" />
              </button>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <span class="text-m text-gray300 laptop:text-laptopM mobile:text-mobileM">{{ characteristic
            }}:</span>
            <span class="text-m text-gray300 lining-nums proportional-nums laptop:text-laptopM mobile:text-mobileM">{{ amount
            }}мм</span>
          </div>
        </div>
      </div>
      <div class="flex items-end gap-5 tablet:gap-4">
        <span class="text-xl2 font-medium laptop:text-laptopXl2 mobile:text-mobileXl2">{{ price }} ₽</span>
        <del
          v-if="oldPrice"
          class="text-m text-gray300 lining-nums proportional-nums laptop:text-laptopM mobile:text-mobileM"
        >{{ oldPrice }} ₽</del>
      </div>
    </div>
    <button class="absolute top-[9px] right-0 border-none text-gray200 transition-all hover:text-black mobile:top-0 mobile:bottom-[-80%] mobile:right-8">
      <delete />
    </button>
  </div>
</template>
