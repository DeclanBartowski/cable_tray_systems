<script setup lang="ts">

</script>

<template>
  <div class="bg-gray mt-[60px] mb-[108px] py-[50px] laptop:mt-12 laptop:mb-20 laptop:py-10 tablet:mt-9 tablet:mb-14 tablet:py-8 mobile:mt-5 mobile:mb-6 mobile:py-6">
    <div class="container">
      <div class="product">
        <TabView
          :pt="{ root: { class: 'bg-transparent' }, nav: { class: 'flex gap-10 bg-transparent font-medium text-xl2 text-gray200 pb-1 laptop:text-laptopXl2 laptop:gap-9 tablet:gap-8 mobile:flex-col mobile:gap-4' }, panelContainer: { class: 'pt-6 pb-0 px-0 bg-transparent font-sans text-black' } }"
        >
          <TabPanel
            header="Описание и характеристики"
            :pt="{ headerAction: { class: 'bg-transparent font-sans pt-0 px-0 pb-1 border-b border-solid border-transparent' }, header: { class: 'mobile:flex' } }"
          >
            <catalog-product-documentation-description />
          </TabPanel>
          <TabPanel
            header="Техническая документация"
            :pt="{ headerAction: { class: 'bg-transparent font-sans pt-0 px-0 pb-1 border-b border-solid border-transparent' }, header: { class: 'mobile:flex' } }"
          >
            <catalog-product-documentation-technical />
          </TabPanel>
        </TabView>
      </div>
    </div>
  </div>
</template>

<style>
.product .p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link {
  color: #000 !important;
  border-bottom: 1px solid #FFD54A !important;
}
</style>

