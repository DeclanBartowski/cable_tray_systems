<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">

</script>

<template>
  <div class="min-h-full flex flex-col relative">
    <layout-header />
    <main class="main">
      <slot />
    </main>
    <layout-footer />
  </div>
</template>

<style scoped>
.main {
  flex: 1 1 auto;
}
</style>
