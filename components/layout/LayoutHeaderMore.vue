<script setup lang="ts">
import {useHeaderStore} from "~/stores/header";

const {catalogSections} = toRefs(useHeaderStore());
</script>

<template>
  <div class="absolute bg-white py-8 px-8 top-11 right-[-325px] rounded-s border border-solid border-gray100 shadow-default laptop:py-6 laptop:px-6">
    <nav>
      <ul class="flex flex-col gap-4">
        <li class="text-m transition-all hover:text-gray300 laptop:text-laptopM">
          <nuxt-link :to="catalogSections[catalogSections.length - 1].link">
            {{catalogSections[catalogSections.length - 1].name}}
          </nuxt-link>
        </li>
        <li class="text-m transition-all hover:text-gray300 laptop:text-laptopM">
          <nuxt-link :to="catalogSections[catalogSections.length - 2].link">
            {{catalogSections[catalogSections.length - 2].name}}
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
