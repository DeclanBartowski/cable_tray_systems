<script setup lang="ts">
import type {TreeItem} from "~/types/catalog/cable-support-systems/category";

defineProps<{
  sections: TreeItem[];
}>();
</script>

<template>
  <div class="trays">
    <TabView
      :pt="{ root: { class: 'bg-transparent flex tablet:flex-col' }, nav: { class: 'pl-2.5 flex flex-col bg-white text-tabs font-normal font-sans text-black w-[340px] laptop:text-laptopTabs laptop:w-[300px] tablet:w-[290px] mobile:text-mobileTabs mobile:pl-0' }, panelContainer: { class: 'py-0 px-0 bg-white font-sans text-black' } }"
    >
      <TabPanel v-for="tabItem in sections"
        :pt="{ headerAction: { class: 'bg-white font-sans font-normal py-2.5 pl-5 pr-6 rounded-none border-l border-solid border-l-transparent border-b-none block w-[340px] h-[53px] border-b-none laptop:w-[300px] tablet:px-4 tablet:w-[290px] mobile:w-[240px] mobile:px-3' } }"
      >
        <template #header>
          <nuxt-link :to="tabItem.link" class="flex items-center justify-between" v-if="!tabItem.sub.length">
            <span class="text-tabs text-black laptop:text-laptopTabs mobile:text-mobileTabs">{{tabItem.name}}</span>
            <img
              src="/svg/next.svg"
              alt="Открыть"
            >
          </nuxt-link>
          <div v-else class="flex items-center justify-between">
            <span class="text-tabs text-black laptop:text-laptopTabs mobile:text-mobileTabs">{{tabItem.name}}</span>
            <img
                src="/svg/next.svg"
                alt="Открыть"
            >
          </div>
        </template>
        <layout-catalog-cable-trays-castle :sections="tabItem.sub" />
      </TabPanel>
    </TabView>
  </div>
</template>

<style>
.trays .p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link {
	background-color: #F1F4F8;
  border-left: 1px solid #FFD54A !important;
}
</style>
