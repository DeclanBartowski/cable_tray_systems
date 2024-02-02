<script setup lang="ts">
const form = ref({
	name: '',
	organization: '',
	email: '',
	inn: '',
	tel: '',
	oldPassword: '',
	newPassword: '',
	confirmPassword: ''
})
</script>

<template>
  <form class="pl-[130px] flex flex-col gap-10 laptop:gap-9 laptop:pl-[100px] tablet:gap-8 tablet:pl-0 mobile:gap-7 mobile:pl-0">
    <div class="flex flex-col gap-6 mobile:gap-4">
      <h3 class="text-xl font-medium laptop:text-laptopXl">
        Личная информация
      </h3>
      <fieldset class="grid grid-cols-2 gap-x-5 gap-y-4 w-[640px] tablet:gap-x-4 tablet:w-full mobile:grid-cols-1">
        <ui-input
          v-model="form.name"
          label="Фамилия и имя"
          placeholder="Иванов"
        />
        <ui-input
          v-model="form.organization"
          label="Организация"
          placeholder="ОАО “Строймир”"
        />
        <ui-input
          v-model="form.email"
          label="Электронная почта"
          placeholder="pochtaivanova@mail.ru"
        />
        <ui-input
          v-model="form.inn"
          label="ИНН"
          placeholder="4565556545"
        />
        <ui-input
          v-model="form.tel"
          label="Телефон"
          placeholder="+7 495 555 66 77"
        />
      </fieldset>
    </div>
    <div class="flex flex-col gap-6 mobile:gap-4">
      <h3 class="text-xl font-medium laptop:text-laptopXl">
        Изменение пароля
      </h3>
      <fieldset class="grid grid-cols-1 gap-4 w-[310px] tablet:w-full">
        <div class="tablet:w-[calc(50%-8px)] mobile:w-full">
          <ui-input
            v-model="form.oldPassword"
            point="password"
            label="Старый пароль"
            placeholder="Старый пароль"
          />
        </div>
        <div class="tablet:w-[calc(50%-8px)] mobile:w-full">
          <ui-input
            v-model="form.newPassword"
            label="Новый пароль"
            point="password"
            placeholder=".........."
          />
        </div>
        <div class="tablet:w-[calc(50%-8px)] mobile:w-full">
          <ui-input
            v-model="form.confirmPassword"
            label="Подтвердить пароль"
            point="password"
            placeholder=".........."
          />
        </div>
      </fieldset>
    </div>
    <ui-button
      type="submit"
      text="Сохранить изменения"
      class="w-[237px]"
    />
  </form>
</template>
