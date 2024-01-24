<script setup lang="ts">
const modelValue = defineModel<boolean>()

withDefaults(defineProps<{
	item?: string
}>(), {
	item: 'default'
})
</script>

<template>
  <Dialog
    v-model:visible="modelValue"
    :item="item"
    :pt="{ header: { class: 'hidden' }, content: { class: 'h-full rounded-popup py-0 px-0 font-sans text-black' }, root: { class: 'relative rounded-popup bg-white' } }"
    modal
  >
    <slot />
    <button
      class="border-none absolute top-6 right-6"
      @click="modelValue = false"
    >
      <close class="text-gray200 transition-all hover:text-black" />
    </button>
  </Dialog>
</template>
