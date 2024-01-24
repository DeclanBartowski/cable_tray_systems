<script setup lang="ts">
const height = ref<string>('')
</script>

<template>
  <Accordion unstyled>
    <AccordionTab
      header="Высота борта"
      :pt="{ headerAction: ({ context }) => ({ class: context.active ? 'active flex flex-row-reverse items-center justify-between' : 'flex flex-row-reverse items-center justify-between'}), headerTitle: { class: 'text-xl font-medium font-sans text-black' }, header: ({ context }) => ({ class: context.active ? 'pt-6 pb-5 px-6 bg-gray rounded-b-none transition-all' : 'pt-6 pb-5 px-6 bg-gray rounded-b-s transition-all'}), content: { class: 'pl-6 pr-9 pb-6 rounded-b-s bg-gray text-m font-sans text-black' }, root: { class: 'w-[310px] tablet:w-full' } }"
    >
      <div class="flex flex-col gap-5 tablet:gap-4">
        <div class="height h-[212px] overflow-y-auto flex flex-col gap-3">
          <ui-radio
            v-model="height"
            item="filter"
            name="height"
            input-id="allHeight"
            label-for="allHeight"
            value="Все"
            text="Все"
          />
          <ui-radio
            v-model="height"
            item="filter"
            name="height"
            input-id="50mm"
            label-for="50mm"
            value="50 мм"
            text="50 мм"
            amount="2"
          />
          <ui-radio
            v-model="height"
            item="filter"
            name="height"
            input-id="60mm"
            label-for="60mm"
            value="60 мм"
            text="60 мм"
            amount="2"
          />
          <ui-radio
            v-model="height"
            item="filter"
            name="height"
            input-id="65mm"
            label-for="65mm"
            value="65 мм"
            text="65 мм"
            amount="2"
          />
          <ui-radio
            v-model="height"
            item="filter"
            name="height"
            input-id="100mm"
            label-for="100mm"
            value="100 мм"
            text="100 мм"
            amount="2"
          />
          <ui-radio
            v-model="height"
            item="filter"
            name="height"
            input-id="150mm"
            label-for="150mm"
            value="150 мм"
            text="150 мм"
            amount="2"
          />
          <ui-radio
            v-model="height"
            item="filter"
            name="height"
            input-id="200mm"
            label-for="200mm"
            value="200 мм"
            text="200 мм"
            amount="2"
          />
          <ui-radio
            v-model="height"
            item="filter"
            name="height"
            input-id="250mm"
            label-for="250mm"
            value="250 мм"
            text="250 мм"
            amount="2"
          />
          <ui-radio
            v-model="height"
            item="filter"
            name="height"
            input-id="300mm"
            label-for="300mm"
            value="300 мм"
            text="300 мм"
            amount="2"
          />
        </div>
        <button class="flex items-center justify-center py-[14px] px-8 border-none bg-white rounded-l text-m font-medium text-gray300 transition-all hover:bg-gray300 hover:text-white laptop:text-laptopM mobile:text-mobileM">
          Сбросить фильтр
        </button>
      </div>
      <template #headericon>
        <img
          src="/svg/chevron-down.svg"
          class="icon w-5 h-5"
        >
      </template>
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
