<script setup lang="ts">

import type {ProductItem} from "~/types/comparison";

defineProps<{
  compareItems: ProductItem[];
  onlyDiff: boolean;
}>();

const getCharacters = (compareList: ProductItem[]) => {
  const resultList: string[] = [];
  compareList.forEach((el) => {
    el.charecter.forEach((characterItem) => {
      if(!resultList.find((item) => item == characterItem.title)) {
        resultList.push(characterItem.title);
      }
    })
  })
  return resultList;
}

const getCharactersForItem = (compareItem: ProductItem, characters: string[]) => {
  const resultList: string[] = [];
  characters.forEach((el) => {
    if(compareItem.charecter.find((item) => item.title == el)) {
      resultList.push(compareItem.charecter.find((item) => item.title == el)?.value || '-');
    } else {
      resultList.push('-');
    }
  })
  return resultList;
}

const checkOnlyDiff = (compareItems: ProductItem[], character: string) => {
  const valuesList = [];
  for(const item of compareItems) {
    const value = item.charecter.find((item) => item.title == character);
    valuesList.push(value?.value ? value.value : '-');
  }
  const val = valuesList[0];
  for(const item of valuesList) {
    if(item != val) return false;
  }
  return true;
}

</script>

<template>
  <Accordion unstyled>
    <AccordionTab
      header="Технические характеристики"
      :pt="{ headerAction: ({ context }) => ({ class: context.active ? 'active flex flex-row-reverse items-center gap-[21px]' : 'flex flex-row-reverse items-center gap-[21px]' }), headerTitle: { class: 'text-xl2 font-medium font-sans text-gray300' }, header: { class: 'flex py-0 pr-0 pl-6' }, content: { class: 'b-transparent font-sans text-black' } }"
    >
      <table class="flex tablet:overflow-x-auto" v-if="onlyDiff">
        <tr class="flex flex-col items-start text-m">
          <th v-for="item in getCharacters(compareItems).filter((el) => !checkOnlyDiff(compareItems, el))" class="pt-5 pb-2 text-start font-normal ml-6 w-[300px] border-b border-solid border-gray100 laptop:w-[270px] tablet:w-[230px]">
            {{item}}
          </th>
        </tr>
        <tr class="flex flex-col text-s lining-nums proportional-nums" v-for="item in compareItems">
          <td
              v-for="characterValue in getCharactersForItem(item, getCharacters(compareItems).filter((el) => !checkOnlyDiff(compareItems, el)))"
              class="pt-[22px] pb-2.5 text-center w-[200px] border-b border-r border-solid border-gray100 laptop:w-[170px] tablet:w-[130px]"
          >
            {{characterValue}}
          </td>
        </tr>
      </table>
      <table class="flex tablet:overflow-x-auto" v-else>
        <tr class="flex flex-col items-start text-m">
          <th v-for="item in getCharacters(compareItems)" class="pt-5 pb-2 text-start font-normal ml-6 w-[300px] border-b border-solid border-gray100 laptop:w-[270px] tablet:w-[230px]">
            {{item}}
          </th>
        </tr>
        <tr class="flex flex-col text-s lining-nums proportional-nums" v-for="item in compareItems">
          <td
              v-for="characterValue in getCharactersForItem(item, getCharacters(compareItems))"
              class="pt-[22px] pb-2.5 text-center w-[200px] border-b border-r border-solid border-gray100 laptop:w-[170px] tablet:w-[130px]"
          >
            {{characterValue}}
          </td>
        </tr>
      </table>
      <template #headericon>
        <img
          src="/svg/chevron-down.svg"
          class="icon w-5 h-5"
        >
      </template>
    </AccordionTab>
  </Accordion>
</template>
