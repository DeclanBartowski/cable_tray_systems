<script setup lang="ts">
import type {Filter, Value} from '../../../types/catalog/related-products/index';
import {useFilterStore} from "~/stores/filters";

const props = defineProps<{
  typeFilter: Filter;
}>();

const {type, query} = toRefs(useFilterStore());
const router = useRouter();

for(const filterItem in props.typeFilter.VALUES) {
  if(props.typeFilter.VALUES[filterItem].CHECKED) {
    type.value = props.typeFilter.VALUES[filterItem].VALUE;
  }
}

watch(type, (value, oldValue, onCleanup) => {
  for(const typeItem in props.typeFilter.VALUES) {
    if(typeItem == value) {
      query.value[props.typeFilter.VALUES[typeItem].CONTROL_NAME] = props.typeFilter.VALUES[typeItem].HTML_VALUE;
    } else {
      delete query.value[props.typeFilter.VALUES[typeItem].CONTROL_NAME];
    }
  }
  router.push({query: {...query.value}});
})

</script>

<template>
  <Accordion unstyled>
    <AccordionTab
      header="Тип"
      :pt="{ headerAction: ({ context }) => ({ class: context.active ? 'active flex flex-row-reverse items-center justify-between' : 'flex flex-row-reverse items-center justify-between'}), headerTitle: { class: 'text-xl font-medium font-sans text-black' }, header: { class: 'pt-6 pb-5 px-6 bg-gray' }, content: { class: 'pl-6 pr-20 pb-6 bg-gray text-m font-sans text-black' } }"
    >
      <div class="flex flex-col gap-3">
        <ui-radio v-for="typeItem in typeFilter.VALUES"
          v-model="type"
          item="filter"
          name="type"
          :input-id="typeItem.VALUE"
          :label-for="typeItem.VALUE"
          :value="typeItem.VALUE"
          :text="typeItem.VALUE"
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
