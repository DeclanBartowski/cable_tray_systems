<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type { LayoutDto } from '~/types/layout'

const rootStore = useRootStore()
const { isOpenMenu, isOpenOrderFast, isOpenCatalog, isShowHeader } = storeToRefs(rootStore)

const { data: layout } = await useContentFetch<LayoutDto>('getMain', {
  method: 'GET'
})
</script>

<template>
  <div
    class="min-h-full flex flex-col relative"
    :class="isOpenMenu || isOpenOrderFast ? 'overflow-hidden after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-background after:z-0' : ''"
  >
    <layout-header
      v-if="layout && isShowHeader"
      :data="layout.data"
    />
    <main
      class="main pt-[179px] laptop:pt-[171px] tablet:pt-[167px] mobile:pt-[189px]"
      :class="isOpenCatalog ? 'overflow-hidden after:absolute after:w-full after:h-[calc(100%-185px)] after:bottom-0 after:left-0 after:bg-background after:z-0' : ''"
    >
      <slot />
    </main>
    <layout-footer
      v-if="layout"
      :data="layout.data"
    />
  </div>
</template>

<style scoped>
.main {
  flex: 1 1 auto;
}
</style>
