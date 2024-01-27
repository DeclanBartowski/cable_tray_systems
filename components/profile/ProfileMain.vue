<script setup lang="ts">

</script>

<template>
  <div class="profile">
    <TabView
      :pt="{ root: { class: 'bg-transparent flex items-start tablet:flex-col tablet:gap-7 mobile:gap-6' }, nav: { class: 'flex flex-col bg-transparent text-xl font-medium font-sans text-black laptop:text-laptopXl tablet:flex-row mobile:flex-col' }, panelContainer: { class: 'py-0 px-0 bg-transparent font-sans text-black w-full' }, navContainer: { class: 'tablet:w-full' } }"
    >
      <TabPanel
        header="История заказов"
        :pt="{ headerAction: { class: 'bg-gray py-6 px-6 rounded-t-s w-[310px] laptop:w-auto tablet:w-full tablet:rounded-t-none tablet:rounded-tl-s tablet:rounded-bl-s mobile:rounded-bl-none mobile:rounded-t-s' }, root: { class: 'tablet:w-full'} }"
      >
        <profile-history />
      </TabPanel>
      <TabPanel
        header="Личная информация"
        :pt="{ headerAction: { class: 'bg-gray py-6 px-6 rounded-s rounded-t-none w-[310px] laptop:w-auto tablet:w-full tablet:rounded-none tablet:rounded-tr-s tablet:rounded-br-s mobile:rounded-s mobile:rounded-t-none mobile:rounded-tr-none' }, root: { class: 'tablet:w-full'} }"
      >
        <profile-information />
      </TabPanel>
    </TabView>
  </div>
</template>

<style>
.profile .p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link {
	color: #fff !important;
	background-color: #697586 !important;
}
</style>
