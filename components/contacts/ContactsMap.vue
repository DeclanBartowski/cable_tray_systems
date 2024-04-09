<script setup lang="ts">
import { YandexMap, YandexMapDefaultSchemeLayer, YandexMapDefaultFeaturesLayer, YandexMapMarker } from 'vue-yandex-maps'

defineProps<{
	data: string[]
}>()
</script>

<template>
  <yandex-map
    :settings="{
      location: {
        center: [37.753869, 55.759796],
        zoom: 14,
      },
    }"
  >
    <yandex-map-default-scheme-layer />
    <yandex-map-default-features-layer />
    <yandex-map-marker :settings="{ coordinates: [Number(data[1]), Number(data[0])] }">
      <img
        src="/images/location.png"
        class="pin"
      >
    </yandex-map-marker>
  </yandex-map>
</template>

<style>
[class*="--map"] {
	border-radius: 20px;
}

[class*="--map-copyrights"] {
  display: none !important;
}

.pin {
  max-width: unset;
  width: 40px;
  height: 52px;
}
</style>
