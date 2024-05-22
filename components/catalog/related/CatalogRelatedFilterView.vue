<script setup lang="ts">

import type {Filter} from '../../../types/catalog/related-products/index';
import {useFilterStore} from "~/stores/filters";

const props = defineProps<{
  viewFilter: Filter;
}>();

const {view, query} = toRefs(useFilterStore());
const router = useRouter();

for(const filterItem in props.viewFilter.VALUES) {
  if(props.viewFilter.VALUES[filterItem].CHECKED) {
    view.value = props.viewFilter.VALUES[filterItem].VALUE;
  }
}

watch(view, (value, oldValue, onCleanup) => {

  for(const filterItem in props.viewFilter.VALUES) {
    if(filterItem == value) {
      query.value[props.viewFilter.VALUES[filterItem].CONTROL_NAME] = props.viewFilter.VALUES[filterItem].HTML_VALUE;
    } else {
      delete query.value[props.viewFilter.VALUES[filterItem].CONTROL_NAME];
    }
  }
    router.push({query: {...query.value}});

})
</script>

<template>
  <Accordion unstyled>
    <AccordionTab
      header="Вид"
      :pt="{ headerAction: ({ context }) => ({ class: context.active ? 'active flex flex-row-reverse items-center justify-between' : 'flex flex-row-reverse items-center justify-between'}), headerTitle: { class: 'text-xl font-medium font-sans text-black' }, header: { class: 'pt-6 pb-5 px-6 bg-gray' }, content: { class: 'pl-6 pr-20 pb-6 bg-gray text-m font-sans text-black' } }"
    >
      <div class="flex flex-col gap-3">
        <ui-radio v-for="viewItem in viewFilter.VALUES"
                  v-model="view"
                  item="filter"
                  name="type"
                  :input-id="viewItem.VALUE"
                  :label-for="viewItem.VALUE"
                  :value="viewItem.VALUE"
                  :text="viewItem.VALUE"
                  amount="24"
        />
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
