<script setup lang="ts">
const rootStore = useRootStore()
const { isOpenModalIndividual, isOpenModalSuccess } = storeToRefs(rootStore)

const form = ref({
	name: '',
	tel: '',
	comment: ''
})

const onSubmit = () => {
	isOpenModalIndividual.value = false
	isOpenModalSuccess.value = true
}
</script>

<template>
  <ui-modal v-model="isOpenModalIndividual">
    <form
      class="pt-12 pb-[60px] px-[95px] flex flex-col justify-center items-center mobile:pt-10 mobile:pb-14 mobile:px-10"
      @submit.prevent="onSubmit"
    >
      <div class="flex flex-col gap-2 mb-6 mobile:mb-5">
        <h2 class="text-xl2 font-medium text-center mobile:text-mobileXl2">
          Оставить заявку
        </h2>
        <p class="text-s text-gray300 text-center w-[250px] mobile:w-[230px]">
          Оставьте заявку и в ближайшее время мы свяжемся с Вами
        </p>
      </div>
      <fieldset class="flex flex-col gap-4 mb-7 w-full mobile:mb-5">
        <ui-input
          v-model="form.name"
          placeholder="Введите фамилию и имя"
          label="Фамилия и имя"
          class="w-[310px] mobile:w-[230px]"
        />
        <ui-input
          v-model="form.tel"
          placeholder="Введите телефон"
          label="Телефон"
          class="w-[310px] mobile:w-[230px]"
        />
        <ui-textarea
          v-model="form.comment"
          placeholder="Введите текст"
          label="Комментарий"
          class="w-[310px] mobile:w-[230px]"
        />
      </fieldset>
      <ui-button
        type="submit"
        text="Отправить"
        fill="fill"
        class="w-[310px] mobile:w-[230px]"
      />
    </form>
  </ui-modal>
</template>
