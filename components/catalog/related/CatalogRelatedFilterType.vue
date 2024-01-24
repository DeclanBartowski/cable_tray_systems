<script setup lang="ts">
const type = ref<string>('')
</script>

<template>
  <Accordion unstyled>
    <AccordionTab
      header="Тип"
      :pt="{ headerAction: ({ context }) => ({ class: context.active ? 'active flex flex-row-reverse items-center justify-between' : 'flex flex-row-reverse items-center justify-between'}), headerTitle: { class: 'text-xl font-medium font-sans text-black' }, header: { class: 'pt-6 pb-5 px-6 bg-gray' }, content: { class: 'pl-6 pr-20 pb-6 bg-gray text-m font-sans text-black' } }"
    >
      <div class="flex flex-col gap-3">
        <ui-radio
          v-model="type"
          item="filter"
          name="type"
          input-id="allType"
          label-for="allType"
          value="Все"
          text="Все"
          amount="24"
        />
        <ui-radio
          v-model="type"
          item="filter"
          name="type"
          input-id="simple"
          label-for="simple"
          value="Простой"
          text="Простой"
          amount="12"
        />
        <ui-radio
          v-model="type"
          item="filter"
          name="type"
          input-id="castle"
          label-for="castle"
          value="Замковый"
          text="Замковый"
          amount="12"
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
