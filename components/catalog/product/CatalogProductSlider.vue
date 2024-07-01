<script setup lang="ts">
import type {ProductElement, SliderItem} from "~/types/catalog/category/id";
import {useFavoriteStore} from "~/stores/favorite";
import {useCompareStore} from "~/stores/compare";

const images = ref([
	'/images/cable-4.png',
	'/images/cable-5.png',
	'/images/cable-6.png',
	'/images/cable-7.png'
])

const {$api} = useNuxtApp();
const route = useRoute();

const props = defineProps<{
  images: SliderItem[];
}>();

const favoriteStore = useFavoriteStore();
const compareStore = useCompareStore();

const config = useRuntimeConfig();
const reactImages = ref<string[]>([]);

const productWithUserData = ref<ProductElement | null>(null);


const isFavorite = computed(() => productWithUserData.value?.favorite);
const isBar = computed(() => productWithUserData.value?.compare);

$api(`product/${route.params.id}`, {
  method: 'GET',
  onResponse({response}) {
    if (response.status == 201 || response.status == 200) {
      productWithUserData.value = response._data?.data?.element || null;
    }
  },
})

const toggleRelatedProductFavorite = async (id: number, favoriteStatus: boolean) => {
  await favoriteStore.toggleFavorite(id, favoriteStatus);

  await $api(`product/${route.params.id}`, {
    method: 'GET',
    onResponse({response}) {
      if (response.status == 201 || response.status == 200) {
        productWithUserData.value = response._data?.data?.element || null;
      }
    },
  })
}

const toggleRelatedProductCompare = async (id: number, favoriteStatus: boolean) => {
  await compareStore.toggleCompare(id, favoriteStatus);

  await $api(`product/${route.params.id}`, {
    method: 'GET',
    onResponse({response}) {
      if (response.status == 201 || response.status == 200) {
        productWithUserData.value = response._data?.data?.element || null;
      }
    },
  })
}

props.images.forEach((el) => {
  reactImages.value.push(config.public.baseURL + el.src);
})

const currentImage = ref<string>(props.images[0]?.src ? config.public.baseURL + props.images[0]?.src : '');


</script>

<template>
  <div class="relative w-full max-w-[603px] flex items-center gap-[51px] laptop:w-[50%] laptop:flex-col-reverse tablet:w-full mobile:gap-10">
    <div
      class="flex flex-col laptop:flex-row mobile:grid mobile:grid-cols-2 mobile:gap-4 slider"
    >
      <div
        v-for="image in reactImages"
        :key="image"
        class="py-5 px-10 cursor-pointer transition-all hover:bg-white hover:shadow-slider laptop:px-5 mobile:px-4 mobile:py-4"
        :class="currentImage === image ? 'bg-white shadow-slider' : 'bg-transparent'"
      >
        <img
          class="object-fit w-[122px] h-[70px]"
          :src="image"
          @click="currentImage = image"
        >
      </div>
    </div>
    <img
      v-if="currentImage"
      class="object-fit w-[320px] h-[300px] mobile:w-[240px] mobile:h-[220px]"
      :src="currentImage"
    >
    <div class="absolute top-0 right-0 flex items-center gap-2.5">
      <button
        class="border-none"
        @click="toggleRelatedProductFavorite(productWithUserData?.id || 0, isFavorite || false)"
      >
        <heart
          v-if="isFavorite === false"
          class="mobile:w-6 mobile:h-6"
        />
        <heart-active
          v-else
          class="mobile:w-6 mobile:h-6"
        />
      </button>
      <button
        class="border-none"
        @click="toggleRelatedProductCompare(productWithUserData?.id || 0, isBar || false)"
      >
        <bar
          v-if="isBar === false"
          class="mobile:w-6 mobile:h-6"
        />
        <bar-active
          v-else
          class="mobile:w-6 mobile:h-6"
        />
      </button>
    </div>
  </div>
</template>

<style>

.slider {
  max-height: 600px;
  overflow-y: scroll;
}

.slider::-webkit-scrollbar {
  width: 5px;
}

.slider::-webkit-scrollbar-thumb {
  background-color: #d1d1d1;
  border-radius: 10px;
}

.slider::-webkit-scrollbar-track {
  background-color: inherit;

}


@media(max-width: 1919px) {
  .slider {
    flex-wrap: wrap;
  }

}
</style>