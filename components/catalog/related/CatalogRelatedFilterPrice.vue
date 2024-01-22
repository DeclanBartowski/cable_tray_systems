<script setup lang="ts">
const price = ref<number[]>([600, 150000])
const from = ref(price.value[0])
const to = ref(price.value[1])

watch(() => price.value, () => {
  from.value = price.value[0]
  to.value = price.value[1]
})

watch(() => from.value, () => {
  price.value[0] = from.value
})

watch(() => to.value, () => {
  price.value[1] = to.value
})
</script>

<template>
  <Accordion unstyled>
    <AccordionTab
      header="Цена, ₽"
      :pt="{ headerAction: { class: 'flex flex-row-reverse items-center justify-between' }, headerTitle: { class: 'text-xl font-medium font-sans text-black' }, header: { class: 'pt-6 pb-5 px-6 bg-gray rounded-t-s transition-all' }, headerIcon: ({ context }) => ({ class: context.active ? 'w-5 h-5 rotate-180' : 'w-5 h-5 rotate-90' }), content: { class: 'pl-6 pr-20 pb-6 pt-2 bg-gray text-m font-sans text-black' } }"
    >
      <div class="w-[195px] flex flex-col gap-4">
        <ui-slider v-model="price" />
        <div class="flex items-center gap-3">
          <label>
            <input
              v-model="from"
              class="w-[84px] py-2 pr-[5px] pl-[14px] text-m font-medium font-sans text-black bg-white outline-none border-none rounded-xs laptop:text-laptopM mobile:text-mobileM"
            >
          </label>
          <span class="text-m laptop:text-laptopM mobile:text-mobileM">-</span>
          <label>
            <input
              v-model="to"
              class="w-[84px] py-2 pr-[5px] pl-[14px] text-m font-medium font-sans text-black bg-white outline-none border-none rounded-xs laptop:text-laptopM mobile:text-mobileM"
            >
          </label>
        </div>
      </div>
    </AccordionTab>
  </Accordion>
</template>
