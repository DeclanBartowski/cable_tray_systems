<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col gap-6">
    <div class="flex items-start gap-4">
      <span class="text-m laptop:text-laptopM mobile:text-mobileM">Сортировка:</span>
      <ui-select />
    </div>
    <div class="flex flex-col gap-5 tablet:gap-4">
      <div class="grid grid-cols-3 gap-5 tablet:gap-4 laptop:grid-cols-2 mobile:grid-cols-1">
        <ui-card
          v-for="product in products"
          :key="product.to"
          :to="product.to"
          :src="product.src"
          :name="product.name"
          :description="product.description"
          :price="product.price"
          :old-price="product.oldPrice"
        />
      </div>
      <common-button-more />
    </div>
  </div>
</template>
