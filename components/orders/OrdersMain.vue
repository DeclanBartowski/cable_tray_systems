<script setup lang="ts">
const form = ref({
	name: '',
	tel: '',
	email: '',
	inn: '',
	receivingOrders: '',
	receivingPayment: ''
})
</script>

<template>
  <form class="flex items-start gap-5 tablet:flex-col tablet:gap-8 mobile:gap-6">
    <div class="flex flex-col gap-10 laptop:gap-9 tablet:gap-8 mobile:gap-7">
      <div class="flex flex-col gap-6 text-m font-medium lining-nums proportional-nums laptop:text-laptopM tablet:gap-5 mobile:text-mobileM">
        1. Контактная информация
        <fieldset class="grid grid-cols-2 gap-5 w-full max-w-[640px] laptop:max-w-[580px] tablet:gap-4 tablet:max-w-full mobile:grid-cols-1">
          <ui-input
            v-model="form.name"
            placeholder="Название организации"
            label="Организация"
          />
          <ui-input
            v-model="form.tel"
            placeholder="8 800 792-92-92"
            label="Телефон"
          />
          <ui-input
            v-model="form.email"
            placeholder="Введите почту"
            label="Электронная почта"
          />
          <ui-input
            v-model="form.inn"
            placeholder="54869524455665"
            label="ИНН"
          />
        </fieldset>
      </div>
      <div class="flex flex-col gap-6 text-m font-medium lining-nums proportional-nums tablet:gap-5 laptop:text-laptopM mobile:text-mobileM">
        2. Способ получения заказа
        <div class="flex flex-col gap-5 tablet:gap-4">
          <div class="grid grid-cols-2 gap-5 w-full max-w-[640px] laptop:max-w-[580px] tablet:gap-4 tablet:max-w-full mobile:grid-cols-1">
            <ui-radio
              v-model="form.receivingOrders"
              item="orders"
              input-id="moscow"
              label-for="moscow"
              name="receivingOrders"
              value="По Москве и Московской области (до 1 тонны)"
              text="По Москве и Московской области (до 1 тонны)"
              add-text="Рассчитывается исходя из удалённости"
            />
            <ui-radio
              v-model="form.receivingOrders"
              item="orders"
              input-id="transport"
              label-for="transport"
              name="receivingOrders"
              value="Посредством транспортных компаний"
              text="Посредством транспортных компаний"
              add-text="В любые регионы России"
            />
            <ui-radio
              v-model="form.receivingOrders"
              item="orders"
              input-id="pickup"
              label-for="pickup"
              name="receivingOrders"
              value="Самовывоз со склада в Москве"
              text="Самовывоз со склада в Москве"
              add-text="По адресу: Россия, Москва, 2-я улица Энтузиастов, д,5 Территория завода «Компрессор»"
            />
          </div>
          <div class="h-[440px] laptop:h-[400px] tablet:h-[380px] mobile:h-[360px]">
            <img
              src="/test/map.png"
              class=" w-full h-[440px] laptop:h-[400px] tablet:h-[380px] mobile:h-[360px]"
            >
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-6 text-m font-medium lining-nums proportional-nums tablet:gap-5 laptop:text-laptopM mobile:text-mobileM">
        3. Способ оплаты
        <div class="grid grid-cols-2 gap-5 w-full max-w-[640px] laptop:max-w-[580px] tablet:gap-4 tablet:max-w-full mobile:grid-cols-1">
          <ui-radio
            v-model="form.receivingPayment"
            item="orders"
            input-id="cashless"
            label-for="cashless"
            name="receivingPayment"
            value="Безналичный расчёт на основании выставленных счётов"
            text="Безналичный расчёт на основании выставленных счётов"
            add-text="Только для юридических лиц"
          />
          <div class="mobile:hidden" />
        </div>
      </div>
      <div class="flex flex-col gap-6 text-m font-medium lining-nums proportional-nums w-[860px] laptop:w-full tablet:gap-5 laptop:text-laptopM mobile:text-mobileM">
        4. Дополнительная информация
        <ui-textarea
          placeholder="Комментарии, дополнение к заказу"
          class="h-[160px]"
        />
      </div>
    </div>
    <orders-order />
  </form>
</template>
