<script setup lang="ts">
const type = ref()
</script>

<template>
  <Accordion unstyled>
    <AccordionTab
      header="Тип"
      :pt="{ headerAction: { class: 'flex flex-row-reverse items-center justify-between' }, headerTitle: { class: 'text-xl font-medium font-sans text-black' }, header: { class: 'pt-6 pb-5 px-6 bg-gray' }, headerIcon: ({ context }) => ({ class: context.active ? 'w-5 h-5 rotate-180' : 'w-5 h-5 rotate-90' }), content: { class: 'pl-6 pr-20 pb-6 bg-gray text-m font-sans text-black' } }"
    >
      <div class="flex flex-col gap-3">
        <ui-checkbox
          v-model="type"
          name="type"
          input-id="allType"
          for-label="allType"
          value="Все"
          label="Все"
          amount="24"
        />
        <ui-checkbox
          v-model="type"
          name="type"
          input-id="simple"
          for-label="simple"
          value="Простой"
          label="Простой"
          amount="12"
        />
        <ui-checkbox
          v-model="type"
          name="type"
          input-id="castle"
          for-label="castle"
          value="Замковый"
          label="Замковый"
          amount="12"
        />
      </div>
    </AccordionTab>
  </Accordion>
</template>
