<script setup lang="ts">
import type {ProductItemParam} from "~/types/cart";
import {useFavoriteStore} from "~/stores/favorite";
import {useCartStore} from "~/stores/cart";
import {useCompareStore} from "~/stores/compare";

const props = defineProps<{
	src: string,
	name: string,
	characteristics: ProductItemParam[],
	price: string,
	oldPrice?: string,
  id: number,
  isFavorite: boolean,
  productId: number;
  quantity?: number;
  ratio: number;
  isBar: boolean;
  url: string;
}>()

const current = ref<number>(props?.quantity || 1);
const isFavorite = computed(() => props.isFavorite);
const isBar =computed(() => props.isBar);

const {toggleFavorite} = toRefs(useFavoriteStore());
const {toggleCompare} = toRefs(useCompareStore());
const {deleteProductFromCart, updateProductInCart} = toRefs(useCartStore());

const plusCurrent = (): void => {
  current.value = current.value + (+props?.ratio || 1);
}

const minusCurrent = (): void => {
  if (current.value <= 1) {
    return;
  } else {
    current.value = current.value - (+props?.ratio || 1);
  }
}

watch(current, () => {
  if(current.value <= 1) {
    current.value = (+props?.ratio || 1);
  }
})
</script>

<template>
  <nuxt-link :to="url" class="relative px-5 pb-[18px] flex gap-[60px] border-b border-solid border-gray100 mobile:flex-col mobile:gap-9">
    <div class="relative pt-[23px] mobile:pt-0">
      <img v-if="src"
        :src="src"
        alt="Продукт"
        class="w-[140px] h-20"
      >
      <div v-else
           class="w-[140px] h-20">
      </div>
      <div class="absolute top-1.5 -right-10 flex items-center gap-2 mobile:top-1 mobile:-right-4">
        <button
          class="border-none w-6 h-6"
          @click.prevent="toggleFavorite(productId, isFavorite).then(res => isFavorite = res)"
        >
          <heart
            v-if="!isFavorite"
            class="w-6 h-6"
          />
          <heart-active
            v-else
            class="w-6 h-6"
          />
        </button>
        <button
          class="border-none w-6 h-6"
          @click.prevent="toggleCompare(productId, isBar).then(res => isBar = res)"
        >
          <bar
            v-if="!isBar"
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
              <button @click="updateProductInCart(id, current-(+props?.ratio || 1))"
                class="border-none"
                @click.prevent="minusCurrent"
              >
                <minus class="text-black" />
              </button>
              <span class="text-m lining-nums proportional-nums laptop:text-laptopM mobile:text-mobileM">
                {{ current }} шт
              </span>
              <button
                @click="updateProductInCart(id, current+(+props?.ratio || 1))"
                class="border-none"
                @click.prevent="plusCurrent"
              >
                <plus class="text-black" />
              </button>
            </div>
          </div>
          <div class="flex items-center gap-4"
               v-for="character in characteristics"
          >
            <span class="text-m text-gray300 laptop:text-laptopM mobile:text-mobileM">{{ character.NAME
            }}:</span>
            <span class="text-m text-gray300 lining-nums proportional-nums laptop:text-laptopM mobile:text-mobileM">{{ character.VALUE
            }}</span>
          </div>
        </div>
      </div>
      <div class="flex items-end gap-5 tablet:gap-4">
        <span class="text-xl2 font-medium laptop:text-laptopXl2 mobile:text-mobileXl2" v-html="price"></span>
        <del
          v-if="oldPrice"
          class="text-m text-gray300 lining-nums proportional-nums laptop:text-laptopM mobile:text-mobileM" v-html="oldPrice"
        ></del>
      </div>
    </div>
    <button @click.once="deleteProductFromCart(id)" class="absolute top-[9px] right-0 border-none text-gray200 transition-all hover:text-black mobile:top-0 mobile:bottom-[-80%] mobile:right-8">
      <delete />
    </button>
  </nuxt-link>
</template>
