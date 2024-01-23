<script setup lang="ts">
const isCart = ref(false)
</script>

<template>
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
</template>
