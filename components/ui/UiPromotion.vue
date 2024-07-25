<script setup lang="ts">

const props = defineProps<{
  promotion: string;
}>();
</script>

<template>
  <span class="absolute py-3 px-[1px] text-black text-s bg-yellow rounded-full lining-nums proportional-nums">{{ promotion }}</span>
</template>
