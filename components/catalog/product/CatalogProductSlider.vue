<script setup lang="ts">
import type {SliderItem} from "~/types/catalog/category/id";

const images = ref([
	'/images/cable-4.png',
	'/images/cable-5.png',
	'/images/cable-6.png',
	'/images/cable-7.png'
])

const props = defineProps<{
  images: SliderItem[];
}>();

const config = useRuntimeConfig();
const reactImages = ref<string[]>([]);

props.images.forEach((el) => {
  reactImages.value.push(config.public.baseURL + el.src);
})

const currentImage = ref<string>(props.images[0]?.src ? config.public.baseURL + props.images[0]?.src : '');
const isFavorite = ref(false)
const isBar = ref(false)
</script>

<template>
  <div class="relative w-full max-w-[603px] flex items-center gap-[51px] laptop:w-[50%] laptop:flex-col-reverse tablet:w-full mobile:gap-10">
    <div
      class="flex flex-col laptop:flex-row mobile:grid mobile:grid-cols-2 mobile:gap-4"
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
        @click="isFavorite = !isFavorite"
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
        @click="isBar = !isBar"
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
