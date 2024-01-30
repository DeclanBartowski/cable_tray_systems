<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
const rootStore = useRootStore()
const { isOpenMenu, isOpenOrderFast, isOpenCatalog } = storeToRefs(rootStore)
</script>

<template>
  <div
    class="min-h-full flex flex-col relative"
    :class="isOpenMenu || isOpenOrderFast ? 'overflow-hidden after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-background after:z-0' : ''"
  >
    <layout-header />
    <main
      class="main pt-[179px] laptop:pt-[171px] tablet:pt-[167px] mobile:pt-[189px]"
      :class="isOpenCatalog ? 'overflow-hidden after:absolute after:w-full after:h-[calc(100%-185px)] after:bottom-0 after:left-0 after:bg-background after:z-0' : ''"
    >
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
