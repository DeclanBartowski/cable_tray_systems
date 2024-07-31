<script setup lang="ts">
import {helpers, required} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";

const rootStore = useRootStore();
const { isOpenModalSuccess, isOpenIndividual} = storeToRefs(rootStore)

const { $api } = useNuxtApp()

const form = ref({
	name: '',
	tel: '',
	comment: ''
})

const rules = computed(() => ({
  name: {
    required: helpers.withMessage('Обязательно для заполнения', required),
  },
  tel: {
    required: helpers.withMessage('Обязательно для заполнения', required)
  }
}))

const v$ = useVuelidate(rules, form.value);

const errorMessage = ref('');
//
// const onSubmit = () => {
//   isOpenIndividual.value = false
// 	isOpenModalSuccess.value = true
// }

const onSubmit = async () => {
  const result = await v$.value.$validate()
  if (!result) {
    return
  }
  await $api('callback', {
    method: 'POST',
    body: {
      name: form.value.name,
      tel : form.value.tel,
      comment : form.value.comment,
    },
    onResponse({ response }) {
      if (response.status == 201 || response.status == 200) {
        if(response?._data?.status !== 'success') {
          errorMessage.value = response._data.errors[0].message;
          return;
        }
        isOpenIndividual.value = false
        isOpenModalSuccess.value = true;
        form.value = {
          name: '',
          tel: '',
          comment: ''
        }
      }
    }
  })
}



</script>

<template>
  <ui-modal v-model="isOpenIndividual">
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
          v-model="v$.name.$model"
          :error="v$.name.$error"
          :error-message="v$.name.required.$message"
          placeholder="Введите фамилию и имя"
          label="Фамилия и имя"
          class="w-[310px] mobile:w-[230px]"
        />
        <client-only>
          <ui-input
            v-model="v$.tel.$model"
            :error="v$.tel.$error"
            :error-message="v$.tel.required.$message"
            placeholder="Введите телефон"
            label="Телефон"
            class="w-[310px] mobile:w-[230px]"
            point="phone"
          />
        </client-only>
        <ui-textarea
          v-model="form.comment"
          placeholder="Введите текст"
          label="Комментарий"
          class="w-[310px] mobile:w-[230px]"
        />
      </fieldset>
      <span v-if="errorMessage" v-html="errorMessage" class="mt-2 mb-2 text-s text-red text-center w-[350px] mobile:w-[260px]"></span>
      <ui-button
        type="submit"
        text="Отправить"
        fill="fill"
        class="w-[310px] mobile:w-[230px]"
      />
    </form>
  </ui-modal>
</template>
