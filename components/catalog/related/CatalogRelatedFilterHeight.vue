<script setup lang="ts">

import type {Filter, Value} from '../../../types/catalog/related-products/index';
import {useFilterStore} from "~/stores/filters";

defineProps<{
  heightFilter: Filter;
}>();

const router = useRouter();

defineEmits(['resetFilters']);
const {height, query} = toRefs(useFilterStore());

const addFilter = (heightItem: Value) => {
  if(height.value.find((el) => el == heightItem.VALUE)) {
    query.value[heightItem.CONTROL_NAME] = heightItem.HTML_VALUE;
  } else {
    delete query.value[heightItem.CONTROL_NAME];
  }
  router.push({query: {...query.value}});
}

</script>

<template>
  <Accordion unstyled>
    <AccordionTab
      header="Высота борта"
      :pt="{ headerAction: ({ context }) => ({ class: context.active ? 'active flex flex-row-reverse items-center justify-between' : 'flex flex-row-reverse items-center justify-between'}), headerTitle: { class: 'text-xl font-medium font-sans text-black' }, header: ({ context }) => ({ class: context.active ? 'pt-6 pb-5 px-6 bg-gray rounded-b-none transition-all' : 'pt-6 pb-5 px-6 bg-gray rounded-b-s transition-all'}), content: { class: 'pl-6 pr-9 pb-6 rounded-b-s bg-gray text-m font-sans text-black' }, root: { class: 'w-[310px] tablet:w-full' } }"
    >
      <div class="flex flex-col gap-5 tablet:gap-4">
        <div class="height h-[212px] overflow-y-auto flex flex-col gap-3">
          <ui-checkbox v-for="heightItem in heightFilter.VALUES"
              v-model="height"
              name="type"
              :input-id="heightItem.VALUE"
              :for-label="heightItem.VALUE"
              :value="heightItem.VALUE"
              :label="heightItem.VALUE"

               @click="addFilter(heightItem)"
              amount="2"
          />
        </div>
        <button @click="$emit('resetFilters')" class="flex items-center justify-center py-[14px] px-8 border-none bg-white rounded-l text-m font-medium text-gray300 transition-all hover:bg-gray300 hover:text-white laptop:text-laptopM mobile:text-mobileM">
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
