<script setup lang="ts">
import {useHeaderStore} from "~/stores/header";

const rootStore = useRootStore()
const { isOpenCatalog, isHeaderActive } = storeToRefs(rootStore)

useHead({
  bodyAttrs: {
    class: isOpenCatalog.value ? "overflow-hidden" : "",
  }
})

const {catalogSections} = toRefs(useHeaderStore());
</script>

<template>
  <div
    class="absolute left-0 z-50 py-9 px-12 bg-white w-full max-w-[1144px] rounded-b-s laptop:max-w-[1000px] tablet:max-w-[calc(100%-120px)] tablet:py-5 tablet:px-8 mobile:max-w-[272px] mobile:px-4 mobile:py-4 mobile:left-[50%] mobile:translate-x-[-50%]"
    :class="isHeaderActive ? 'top-20 mobile:top-[130px]' : 'top-[175px]'"
  >
    <div class="catalogs">
      <TabView
        :pt="{ root: { class: 'bg-transparent' }, nav: { class: 'flex gap-[49px] bg-transparent text-xl font-medium font-sans text-gray200 pb-1 tablet:flex-col tablet:gap-4' }, panelContainer: { class: 'pt-4 pb-0 px-0 bg-transparent font-sans text-black' } }"
      >
        <TabPanel
          :header="catalogSections[0]?.name"
          :pt="{ headerAction: { class: 'bg-transparent font-sans font-medium pt-0 px-0 pb-1 border-b border-solid border-transparent' }, header: { class: 'tablet:flex' } }"
        >
          <layout-catalog-cable :sections="catalogSections[0]?.sub" />
        </TabPanel>
        <TabPanel
                  :header="catalogSections[1]?.name"
                  :pt="{ headerAction: { class: 'bg-transparent font-sans font-medium pt-0 px-0 pb-1 border-b border-solid border-transparent' }, header: { class: 'tablet:flex' } }"
        >
          <layout-catalog-cable :sections="catalogSections[1]?.sub" />
        </TabPanel>
      </TabView>
    </div>
  </div>
</template>

<style>
.catalogs .p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link {
  color: #000 !important;
  border-bottom-color: #FFD54A !important;
}
</style>
