<script setup lang="ts">
import type {Filter} from '~/types/catalog/related-products';
import {useFilterStore} from "~/stores/filters";

const props = defineProps<{
  priceFilter: Filter;
}>();

const priceFilterValues = props.priceFilter.VALUES;
let min = 0;
let max = 0;

priceFilterValues.forEach(item => {
  if (item.CONTROL_NAME.includes("_MIN")) {
    min = item;
  }
  if (item.CONTROL_NAME.includes("_MAX")) {
    max = item;
  }
});

const filters = useFilterStore();

const {priceTo, priceFrom, query} = toRefs(useFilterStore());

const minMaxPrice = ref<number[]>([+min.VALUE, +max.VALUE]);
const price = ref<number[]>([+min.HTML_VALUE | +min.VALUE, +max.HTML_VALUE | +max.VALUE]);

filters.setPriceFrom(price.value[0]);
filters.setPriceTo(price.value[1]);

const router = useRouter();
watch(() => price.value, () => {
  filters.setPriceFrom(price.value[0]);
  filters.setPriceTo(price.value[1]);
})

watch(() => filters.getPriceFrom, () => {
  price.value[0] = filters.getPriceFrom;
  query.value[min.CONTROL_NAME] = filters.getPriceFrom;
  router.replace({query: {...query.value }});
})

watch(() => filters.getPriceTo, () => {
  price.value[1] = filters.getPriceTo;
  query.value[max.CONTROL_NAME] = filters.getPriceTo;
  router.replace({query: {...query.value }});
})
</script>

<template>
  <Accordion unstyled>
    <AccordionTab
      header="Цена, ₽"
      :pt="{ headerAction: ({ context }) => ({ class: context.active ? 'active flex flex-row-reverse items-center justify-between' : 'flex flex-row-reverse items-center justify-between'}), headerTitle: { class: 'text-xl font-medium font-sans text-black' }, header: { class: 'pt-6 pb-5 px-6 bg-gray rounded-t-s transition-all' }, content: { class: 'pl-6 pr-20 pb-6 pt-2 bg-gray text-m font-sans text-black' } }"
    >
      <div class="w-[195px] flex flex-col gap-4">
        <ui-slider v-model="price" :min-max="minMaxPrice"/>
        <div class="flex items-center gap-3">
          <label>
            <input
              v-model="priceFrom"
              class="w-[84px] py-2 pr-[5px] pl-[14px] text-m font-medium lining-nums proportional-nums font-sans text-black bg-white outline-none border-none rounded-xs laptop:text-laptopM mobile:text-mobileM"
            >
          </label>
          <span class="text-m laptop:text-laptopM mobile:text-mobileM">-</span>
          <label>
            <input
              v-model="priceTo"
              class="w-[84px] py-2 pr-[5px] pl-[14px] text-m font-medium lining-nums proportional-nums font-sans text-black bg-white outline-none border-none rounded-xs laptop:text-laptopM mobile:text-mobileM"
            >
          </label>
        </div>
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
