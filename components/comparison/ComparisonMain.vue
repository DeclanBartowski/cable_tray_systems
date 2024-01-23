<script setup lang="ts">

</script>

<template>
  <div class="comparison">
    <TabView
      :pt="{ root: { class: 'bg-transparent overflow-x-auto' }, nav: { class: 'flex gap-2 pb-1 bg-transparent text-m text-gray200 laptop:text-laptopM mobile:text-mobileM' }, panelContainer: { class: 'pt-8 pb-0 px-0 bg-transparent font-sans text-black' } }"
    >
      <TabPanel
        header="Кабельные лотки"
        :pt="{ headerAction: { class: 'bg-white font-sans font-normal py-5 px-[30px] border border-solid border-gray100 rounded-s' } }"
      >
        <comparison-characteristics />
      </TabPanel>
      <TabPanel
        header="Переход для лотка"
        :pt="{ headerAction: { class: 'bg-white font-sans font-normal py-5 px-[30px] border border-solid border-gray100 rounded-s' } }"
      >
        <comparison-characteristics />
      </TabPanel>
      <TabPanel
        header="Кабеля"
        :pt="{ headerAction: { class: 'bg-white font-sans font-normal py-5 px-[30px] border border-solid border-gray100 rounded-s' } }"
      >
        <comparison-characteristics />
      </TabPanel>
      <TabPanel
        header="Розетки"
        :pt="{ headerAction: { class: 'bg-white font-sans font-normal py-5 px-[30px] border border-solid border-gray100 rounded-s' } }"
      >
        <comparison-characteristics />
      </TabPanel>
      <TabPanel
        header="Полки для лотка"
        :pt="{ headerAction: { class: 'bg-white font-sans font-normal py-5 px-[30px] border border-solid border-gray100 rounded-s' } }"
      >
        <comparison-characteristics />
      </TabPanel>
      <TabPanel
        header="Коробки и ящики монтажные"
        :pt="{ headerAction: { class: 'bg-white font-sans font-normal py-5 px-[30px] border border-solid border-gray100 rounded-s' } }"
      >
        <comparison-characteristics />
      </TabPanel>
      <TabPanel
        header="Подвесы"
        :pt="{ headerAction: { class: 'bg-white font-sans font-normal py-5 px-[30px] border border-solid border-gray100 rounded-s' } }"
      >
        <comparison-characteristics />
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
