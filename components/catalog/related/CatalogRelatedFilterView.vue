<script setup lang="ts">
const view = ref()
</script>

<template>
  <Accordion unstyled>
    <AccordionTab
      header="Вид"
      :pt="{ headerAction: { class: 'flex flex-row-reverse items-center justify-between' }, headerTitle: { class: 'text-xl font-medium font-sans text-black' }, header: { class: 'pt-6 pb-5 px-6 bg-gray' }, headerIcon: ({ context }) => ({ class: context.active ? 'w-5 h-5 rotate-180' : 'w-5 h-5 rotate-90' }), content: { class: 'pl-6 pr-20 pb-6 bg-gray text-m font-sans text-black' } }"
    >
      <div class="flex flex-col gap-3">
        <ui-checkbox
          v-model="view"
          name="view"
          input-id="allView"
          for-label="allView"
          value="Все"
          label="Все"
          amount="24"
        />
        <ui-checkbox
          v-model="view"
          name="view"
          input-id="Perforated"
          for-label="Perforated"
          value="Перфорированные"
          label="Перфорированные"
          amount="12"
        />
        <ui-checkbox
          v-model="view"
          name="view"
          input-id="deaf"
          for-label="deaf"
          value="Глухой"
          label="Глухой"
          amount="12"
        />
      </div>
    </AccordionTab>
  </Accordion>
</template>
