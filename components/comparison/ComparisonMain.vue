<script setup lang="ts">
import {useCompareStore} from "~/stores/compare";
import type {ProductItem} from "~/types/comparison";

const {compare} = toRefs(useCompareStore());

const compareTabs = ref<Array<{
code: string;
name: string;
}>>([]);

const selectedTab = ref<string>(compareTabs.value[0]?.code || '');
const filteredCompare = ref<ProductItem[]>([]);

const getFilteredCompare = (compareList: ProductItem[], sectionCode: string) => {
  return compareList.filter((el) => el.section_code == sectionCode);
}

watch(selectedTab, () => {
  filteredCompare.value = compare.value.filter((el) => el.section_code == selectedTab.value);
})

watchEffect(() => {
  if(compare.value) {
    compare.value.forEach((el) => {
      if(!compareTabs.value.find((item) => (item.name == el.section_name) && (item.code == el.section_code))) {
        compareTabs.value.push({
          code: el.section_code,
          name: el.section_name,
        })
      }
    })
  }
})

</script>

<template>
  <div class="comparison">
    <TabView
      :pt="{ root: { class: 'bg-transparent overflow-x-auto' }, nav: { class: 'flex gap-2 pb-1 bg-transparent text-m text-gray200 laptop:text-laptopM mobile:text-mobileM' }, panelContainer: { class: 'pt-8 pb-0 px-0 bg-transparent font-sans text-black' } }"
    >
      <TabPanel
        v-for="item in compareTabs"
        :header="item.name"
        :pt="{ headerAction: { class: 'bg-white font-sans font-normal py-5 px-[30px] border border-solid border-gray100 rounded-s' } }"
      >
        <comparison-characteristics
            :compare-items="getFilteredCompare(compare, item.code)" />
      </TabPanel>
    </TabView>
  </div>
</template>

<style>
.comparison .p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link {
	color: #000 !important;
	border: 1px solid #FFD54A !important;
	background-color: #FFD54A !important;
}
</style>
