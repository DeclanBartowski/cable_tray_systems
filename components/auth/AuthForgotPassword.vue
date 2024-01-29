<script setup lang="ts">
const form = ref({
	email: ''
})
</script>

<template>
  <div class="pt-[60px] pb-[104px] px-[60px] flex flex-col gap-8 laptop:gap-7 tablet:gap-6 mobile:pt-6 mobile:pb-10 mobile:px-6">
    <div class="flex flex-col items-center gap-2 w-[380px] mobile:w-[260px]">
      <h2 class="text-xl2 font-medium text-center mobile:text-mobileXl2">
        Восстановление пароля
      </h2>
      <p class="text-s text-gray300 text-center">
        На ваш электронный ящик отправлена ссылка, перейдите по ней, для того, чтобы восстановить пароль
      </p>
    </div>
    <div class="flex flex-col gap-7 laptop:gap-6 tablet:gap-5 w-[310px] mx-auto mobile:w-[260px]">
      <ui-input
        v-model="form.email"
        label="Электронная почта"
        placeholder="Введите почту"
      />
      <ui-button
        type="submit"
        fill="fill"
        text="Отправить"
        class="w-[310px] mobile:w-[260px]"
      />
    </div>
  </div>
</template>
