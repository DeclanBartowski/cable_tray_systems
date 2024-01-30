<script setup lang="ts">

</script>

<template>
  <div class="trays">
    <TabView
      :pt="{ root: { class: 'bg-transparent flex tablet:flex-col' }, nav: { class: 'pl-2.5 flex flex-col bg-white text-tabs font-normal font-sans text-black w-[340px] laptop:text-laptopTabs laptop:w-[300px] tablet:w-[290px] mobile:text-mobileTabs mobile:pl-0' }, panelContainer: { class: 'py-0 px-0 bg-white font-sans text-black' } }"
    >
      <TabPanel
        :pt="{ headerAction: { class: 'bg-white font-sans font-normal py-2.5 pl-5 pr-6 rounded-none border-l border-solid border-l-transparent border-b-none block w-[340px] h-[53px] border-b-none laptop:w-[300px] tablet:px-4 tablet:w-[290px] mobile:w-[240px] mobile:px-3' } }"
      >
        <template #header>
          <div class="flex items-center justify-between">
            <span class="text-tabs text-black laptop:text-laptopTabs mobile:text-mobileTabs">Перфорированные лотки простого типа</span>
            <img
              src="/svg/next.svg"
              alt="Открыть"
            >
          </div>
        </template>
      </TabPanel>
      <TabPanel
        :pt="{ headerAction: { class: 'bg-white font-sans font-normal py-2.5 pl-5 pr-6 rounded-none border-l border-solid border-l-transparent border-t border-t-gray block w-[340px] h-[53px] border-b-none laptop:w-[300px] tablet:px-4 tablet:w-[290px] mobile:w-[240px] mobile:px-3' } }"
      >
        <template #header>
          <div class="flex items-center justify-between">
            <span class="text-tabs text-black laptop:text-laptopTabs mobile:text-mobileTabs">Перфорированные лотки замкового типа</span>
            <img
              src="/svg/next.svg"
              alt="Открыть"
            >
          </div>
        </template>
        <layout-catalog-cable-trays-castle />
      </TabPanel>
      <TabPanel
        :pt="{ headerAction: { class: 'bg-white font-sans font-normal py-4 pl-5 pr-6 rounded-none border-l border-solid border-l-transparent border-t border-t-gray block w-[340px] h-[53px] border-b-none laptop:w-[300px] tablet:px-4 tablet:w-[290px] mobile:w-[240px] mobile:px-3' } }"
      >
        <template #header>
          <div class="flex items-center justify-between">
            <span class="text-tabs text-black laptop:text-laptopTabs mobile:text-mobileTabs">Глухие лотки простого типа</span>
            <img
              src="/svg/next.svg"
              alt="Открыть"
            >
          </div>
        </template>
      </TabPanel>
      <TabPanel
        :pt="{ headerAction: { class: 'bg-white font-sans font-normal py-4 pl-5 pr-6 rounded-none border-l border-solid border-l-transparent border-t border-t-gray block w-[340px] h-[53px] laptop:w-[300px] tablet:px-4 tablet:w-[290px] mobile:w-[240px] mobile:px-3' } }"
      >
        <template #header>
          <div class="flex items-center justify-between">
            <span class="text-tabs text-black laptop:text-laptopTabs mobile:text-mobileTabs">Глухие лотки замкового типа</span>
            <img
              src="/svg/next.svg"
              alt="Открыть"
            >
          </div>
        </template>
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
