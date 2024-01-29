<script setup lang="ts">

</script>

<template>
  <div class="py-10 px-[104px] flex flex-col gap-6 tablet:gap-5 mobile:py-6 mobile:px-6">
    <h2 class="text-xl2 font-medium text-center mobile:text-mobileXl2">
      Регистрация
    </h2>
    <div class="auth">
      <TabView
        :pt="{ root: { class: 'bg-transparent' }, nav: { class: 'flex gap-[55px] bg-transparent text-m font-normal font-sans text-gray200 pb-2 laptop:text-laptopM laptop:gap-10 tablet:gap-8 mobile:gap-4 mobile:flex-col mobile:items-center' }, panelContainer: { class: 'pt-5 pb-0 px-0 bg-transparent font-sans text-black mobile:pt-3' } }"
      >
        <TabPanel
          header="как физическое лицо"
          :pt="{ headerAction: { class: 'bg-transparent font-sans pt-0 px-0 pb-2 border-b border-solid border-transparent' }, header: { class: 'mobile:flex' } }"
        >
          <auth-register-individual />
        </TabPanel>
        <TabPanel
          header="как юридическое лицо"
          :pt="{ headerAction: { class: 'bg-transparent font-sans pt-0 px-0 pb-2 border-b border-solid border-transparent' }, header: { class: 'mobile:flex' } }"
        >
          <auth-register-legal />
        </TabPanel>
      </TabView>
    </div>
  </div>
</template>

<style>
.auth .p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link {
  color: #000 !important;
  border-bottom: 1px solid #FFD54A !important;
}
</style>
