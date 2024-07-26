<script setup lang="ts">
import type { Filter, Value } from '~/types/catalog/related-products';
import { useFilterStore } from "~/stores/filters";
import { useRouter } from 'vue-router';
import { ref, toRefs, watch, onMounted } from 'vue';

const props = defineProps<{
  heightFilter: Filter;
}>();

const router = useRouter();
const filters = useFilterStore();
const { query, checkBoxModel } = toRefs(filters);

const initializeCheckBoxModel = () => {
  const model = props.heightFilter.VALUES
      .filter(heightItem => query.value[heightItem.CONTROL_NAME] === heightItem.HTML_VALUE)
      .map(heightItem => heightItem.VALUE);
  filters.setCheckBoxModel(props.heightFilter.CODE, model);
};

onMounted(initializeCheckBoxModel);

const addFilter = (heightItem: Value) => {
  const key = heightItem.CONTROL_NAME;
  const value = heightItem.HTML_VALUE;

  if (query.value[key] === value) {
    delete query.value[key];
    checkBoxModel.value[props.heightFilter.CODE] = checkBoxModel.value[props.heightFilter.CODE].filter(v => v !== heightItem.VALUE);
  } else {
    query.value[key] = value;
    checkBoxModel.value[props.heightFilter.CODE].push(heightItem.VALUE);
  }
  router.push({ query: { ...query.value } });
};
</script>

<template>
  <Accordion unstyled>
    <AccordionTab
      :header="heightFilter?.NAME"
      :pt="{ headerAction: ({ context }) => ({ class: context.active ? 'active flex flex-row-reverse items-center justify-between' : 'flex flex-row-reverse items-center justify-between'}), headerTitle: { class: 'text-xl font-medium font-sans text-black' }, header: ({ context }) => ({ class: context.active ? 'pt-6 pb-5 px-6 bg-gray rounded-b-none transition-all' : 'pt-6 pb-5 px-6 bg-gray rounded-b-s transition-all'}), content: { class: 'pl-6 pr-9 pb-6 rounded-b-s bg-gray text-m font-sans text-black' }, root: { class: 'w-[310px] tablet:w-full' } }"
    >
      <div class="flex flex-col gap-5 tablet:gap-4">
        <div class="height h-[212px] overflow-y-auto flex flex-col gap-3">
          <ui-checkbox
            v-for="heightItem in heightFilter.VALUES"
            :key="heightItem.CONTROL_NAME"
            v-model="checkBoxModel[heightFilter.CODE]"
            :name="heightItem.CONTROL_NAME"
            :input-id="heightItem.CONTROL_NAME"
            :for-label="heightItem.VALUE"
            :value="heightItem.VALUE"
            :label="heightItem.VALUE"
            @click="addFilter(heightItem)"
          />
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
