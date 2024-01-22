<script setup lang="ts">
const height = ref()
</script>

<template>
  <Accordion unstyled>
    <AccordionTab
      header="Высота борта"
      :pt="{ headerAction: { class: 'flex flex-row-reverse items-center justify-between' }, headerTitle: { class: 'text-xl font-medium font-sans text-black' }, header: ({ context }) => ({ class: context.active ? 'pt-6 pb-5 px-6 bg-gray rounded-b-none transition-all' : 'pt-6 pb-5 px-6 bg-gray rounded-b-s transition-all'}), headerIcon: ({ context }) => ({ class: context.active ? 'w-5 h-5 rotate-180' : 'w-5 h-5 rotate-90' }), content: { class: 'pl-6 pr-9 pb-6 rounded-b-s bg-gray text-m font-sans text-black' } }"
    >
      <div class="flex flex-col gap-5 tablet:gap-4">
        <div class="height h-[212px] overflow-y-auto flex flex-col gap-3">
          <ui-checkbox
            v-model="height"
            name="height"
            input-id="allHeight"
            for-label="allHeight"
            value="Все"
            label="Все"
          />
          <ui-checkbox
            v-model="height"
            name="height"
            input-id="50mm"
            for-label="50mm"
            value="50 мм"
            label="50 мм"
            amount="2"
          />
          <ui-checkbox
            v-model="height"
            name="height"
            input-id="60mm"
            for-label="60mm"
            value="60 мм"
            label="60 мм"
            amount="2"
          />
          <ui-checkbox
            v-model="height"
            name="height"
            input-id="65mm"
            for-label="65mm"
            value="65 мм"
            label="65 мм"
            amount="2"
          />
          <ui-checkbox
            v-model="height"
            name="height"
            input-id="100mm"
            for-label="100mm"
            value="100 мм"
            label="100 мм"
            amount="2"
          />
          <ui-checkbox
            v-model="height"
            name="height"
            input-id="150mm"
            for-label="150mm"
            value="150 мм"
            label="150 мм"
            amount="2"
          />
          <ui-checkbox
            v-model="height"
            name="height"
            input-id="200mm"
            for-label="200mm"
            value="200 мм"
            label="200 мм"
            amount="2"
          />
          <ui-checkbox
            v-model="height"
            name="height"
            input-id="250mm"
            for-label="250mm"
            value="250 мм"
            label="250 мм"
            amount="2"
          />
          <ui-checkbox
            v-model="height"
            name="height"
            input-id="300mm"
            for-label="300mm"
            value="300 мм"
            label="300 мм"
            amount="2"
          />
        </div>
        <button class="flex items-center justify-center py-[14px] px-8 border-none bg-white rounded-l text-m font-medium text-gray300 laptop:text-laptopM mobile:text-mobileM">
          Сбросить фильтр
        </button>
      </div>
    </AccordionTab>
  </Accordion>
</template>

<style>
.height::-webkit-scrollbar {
  width: 1px;
}

.height::-webkit-scrollbar-track {
  background: #E6E9F8;
}

.height::-webkit-scrollbar-thumb {
  background: #FFD54A;
}
</style>
