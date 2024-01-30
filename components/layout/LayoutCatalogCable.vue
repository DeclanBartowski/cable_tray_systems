<script setup lang="ts">

</script>

<template>
  <div class="cable">
    <TabView
      :pt="{ root: { class: 'bg-transparent flex mobile:flex-col' }, nav: { class: 'flex flex-col bg-white text-m font-normal font-sans text-black w-[340px] laptop:text-laptopM laptop:w-[300px] tablet:w-[290px] mobile:text-mobileM mobile:w-[240px]' }, panelContainer: { class: 'py-0 px-0 bg-white font-sans text-black' } }"
    >
      <TabPanel
        :pt="{ headerAction: { class: 'bg-white font-sans font-normal py-4 pl-5 pr-6 rounded-none border-l border-solid border-l-transparent border-b-none block w-[340px] border-b-none laptop:w-[300px] tablet:px-4 tablet:w-[290px] mobile:w-[240px] mobile:px-3' } }"
      >
        <template #header>
          <div class="flex items-center justify-between">
            <span class="text-m text-black laptop:text-laptopM mobile:text-mobileM">Лотки кабельные</span>
            <img
              src="/svg/next.svg"
              alt="Открыть"
            >
          </div>
        </template>
        <layout-catalog-cable-trays />
      </TabPanel>
      <TabPanel
        :pt="{ headerAction: { class: 'bg-white font-sans font-normal py-4 pl-5 pr-6 rounded-none border-l border-solid border-l-transparent border-t border-t-gray block w-[340px] border-b-none laptop:w-[300px] tablet:px-4 tablet:w-[290px] mobile:w-[240px] mobile:px-3' } }"
      >
        <template #header>
          <div class="flex items-center justify-between">
            <span class="text-m text-black laptop:text-laptopM mobile:text-mobileM">Аксессуары для кабельных лотков</span>
            <img
              src="/svg/next.svg"
              alt="Открыть"
            >
          </div>
        </template>
      </TabPanel>
      <TabPanel
        :pt="{ headerAction: { class: 'bg-white font-sans font-normal py-4 pl-5 pr-6 rounded-none border-l border-solid border-l-transparent border-t border-t-gray block w-[340px] border-b-none laptop:w-[300px] tablet:px-4 tablet:w-[290px] mobile:w-[240px] mobile:px-3' } }"
      >
        <template #header>
          <div class="flex items-center justify-between">
            <span class="text-m text-black laptop:text-laptopM mobile:text-mobileM">Стойки и полки кабельные</span>
            <img
              src="/svg/next.svg"
              alt="Открыть"
            >
          </div>
        </template>
      </TabPanel>
      <TabPanel
        :pt="{ headerAction: { class: 'bg-white font-sans font-normal py-4 pl-5 pr-6 rounded-none border-l border-solid border-l-transparent border-t border-t-gray block w-[340px] border-b-none laptop:w-[300px] tablet:px-4 tablet:w-[290px] mobile:w-[240px] mobile:px-3' } }"
      >
        <template #header>
          <div class="flex items-center justify-between">
            <span class="text-m text-black laptop:text-laptopM mobile:text-mobileM">Профиль и полосы монтажные</span>
            <img
              src="/svg/next.svg"
              alt="Открыть"
            >
          </div>
        </template>
      </TabPanel>
      <TabPanel
        :pt="{ headerAction: { class: 'bg-white font-sans font-normal py-4 pl-5 pr-6 rounded-none border-l border-solid border-l-transparent border-t border-t-gray block w-[340px] laptop:w-[300px] tablet:px-4 tablet:w-[290px] mobile:w-[240px] mobile:px-3' } }"
      >
        <template #header>
          <div class="flex items-center justify-between">
            <span class="text-m text-black laptop:text-laptopM mobile:text-mobileM">Коробки и ящики монтажные</span>
            <img
              src="/svg/next.svg"
              alt="Открыть"
            >
          </div>
        </template>
      </TabPanel>
      <TabPanel
        :pt="{ headerAction: { class: 'bg-white font-sans font-normal py-4 pl-5 pr-6 rounded-none border-l border-solid border-l-transparent border-t border-t-gray block w-[340px] border-b-none laptop:w-[300px] tablet:px-4 tablet:w-[290px] mobile:w-[240px] mobile:px-3' } }"
      >
        <template #header>
          <div class="flex items-center justify-between">
            <span class="text-m text-black laptop:text-laptopM mobile:text-mobileM">Электромонтаж</span>
            <img
              src="/svg/next.svg"
              alt="Открыть"
            >
          </div>
        </template>
      </TabPanel>
      <TabPanel
        :pt="{ headerAction: { class: 'bg-white font-sans font-normal py-4 pl-5 pr-6 rounded-none border-l border-solid border-l-transparent border-t border-t-gray block w-[340px] border-b-none laptop:w-[300px] tablet:px-4 tablet:w-[290px] mobile:w-[240px] mobile:px-3' } }"
      >
        <template #header>
          <div class="flex items-center justify-between">
            <span class="text-m text-black laptop:text-laptopM mobile:text-mobileM">Другое</span>
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
.cable .p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link {
	background-color: #F1F4F8;
  border-left: 1px solid #FFD54A !important;
}
</style>
