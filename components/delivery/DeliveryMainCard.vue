<script setup lang="ts">
defineProps<{ title: string, text: string }>()
</script>

<template>
  <div
    class="py-8 px-8 flex flex-col gap-4 border border-solid border-gray100 rounded-s text-m laptop:px-6 laptop:py-6 laptop:text-laptopM tablet:min-h-[140px] mobile:h-auto mobile:py-4 mobile:px-4 mobile:gap-3 mobile:text-mobileM "
  >
    <h3 class="font-medium">
      {{ title }}
    </h3>
    <p class="text-gray300">
      {{ text }}
    </p>
  </div>
</template>
