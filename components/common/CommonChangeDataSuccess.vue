<script setup lang="ts">
const rootStore = useRootStore()
const {isChangeDataSuccessActive} = storeToRefs(rootStore);
</script>

<template>
  <ui-modal v-model="isChangeDataSuccessActive">
    <div class="pt-16 pb-[84px] px-[95px] flex flex-col gap-20 justify-center items-center mobile:pt-10 mobile:pb-14 mobile:px-10 mobile:gap-16">
      <div class="flex flex-col gap-11 mobile:gap-8">
        <img
            src="/svg/success.svg"
            alt="Успешно"
            class="w-[60px] h-[60px] mx-auto"
        >
        <h2 class="text-xl2 font-medium text-center w-[310px] mobile:text-mobileXl2 mobile:w-[230px]">
          Данные успешно изменены!
        </h2>
      </div>
      <ui-button
          text="Понятно"
          class="w-[310px] mobile:w-[230px]"
          fill="fill"
          @click="isChangeDataSuccessActive = false"
      />
    </div>
  </ui-modal>
</template>
