<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
const rootStore = useRootStore()
const { isOpenMenu } = storeToRefs(rootStore)
</script>

<template>
  <div
    class="min-h-full flex flex-col relative"
    :class="isOpenMenu ? 'overflow-hidden after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-background after:z-0' : ''"
  >
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
