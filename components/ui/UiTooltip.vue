<script setup lang="ts">

</script>

<template>
  <button
    v-tooltip="{
      value: 'объяснение что это такое, скорее всего в две строки',
      pt: { text: { class: 'py-2 px-2.5 bg-white border border-solid border-gray100 rounded-xs text-black text-s shadow-default w-[210px]' } }
    }"
  >
    <img
      src="/svg/tooltip.svg"
      alt="Подробнее"
    >
  </button>
</template>
