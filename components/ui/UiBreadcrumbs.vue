<script setup lang="ts">
import type { Breadcrumb } from '~/types/root'

const p = defineProps<{ breadcrumbs: Breadcrumb[] }>()
</script>

<template>
  <Breadcrumb
    :pt="{ root: { class: 'bg-transparent py-0 px-0 font-sans' }, action: ({ context }) => ({ class: context.index === p.breadcrumbs.length - 1 ? 'text-black' : 'text-gray200' }) }"
    :model="breadcrumbs"
  >
    <template #item="{ item, props }">
      <nuxt-link
        v-slot="{ href, navigate }"
        :to="item.url"
        custom
      >
        <a
          :href="href"
          v-bind="props.action"
          @click="navigate"
        >
          <span class="text-s">{{ item.title }}</span>
        </a>
      </nuxt-link>
    </template>
    <template #separator>
      <span class="text-s font-medium text-gray200">/</span>
    </template>
  </Breadcrumb>
</template>

