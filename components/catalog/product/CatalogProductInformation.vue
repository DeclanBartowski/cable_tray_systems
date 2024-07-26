<script setup lang="ts">
import type {ProductElement} from "~/types/catalog/category/id";
import {useCartStore} from "~/stores/cart";


const props = defineProps<{
  product: ProductElement;
}>();

const current = ref<number>(+props?.product?.ratio || 1)




const { addProductInCart } = toRefs(useCartStore());

const plusCurrent = (): void => {
  current.value = current.value + (+props?.product?.ratio || 1);
}

const minusCurrent = (): void => {
  if (current.value <= 1) {
    return
  } else {
    current.value = current.value - (+props?.product?.ratio || 1);
  }
}

const currentOffer = ref<object>(props?.product?.offers[0] || {})
const getFormattedUniqueValues = (offers, key) => {
  const uniqueMap = new Map();

  props?.product?.offers.forEach(offer => {
    const value = offer[key];
    if (value !== null && value !== undefined && value !== '') {
      if (!uniqueMap.has(value)) {
        uniqueMap.set(value, offer.id);
      }
    }
  });

  const uniqueValues = Array.from(uniqueMap, ([name, id]) => ({ name, id }));

  return uniqueValues;
}

const dlinna = ref<{ name: string, id: number }[]>(getFormattedUniqueValues(props?.product?.offers, 'dlinna'));
const massa = ref<{ name: string, id: number }[]>(getFormattedUniqueValues(props?.product?.offers, 'massa'));
const prolet = ref<{ name: string, id: number }[]>(getFormattedUniqueValues(props?.product?.offers, 'prolet'));
const tolshina = ref<{ name: string, id: number }[]>(getFormattedUniqueValues(props?.product?.offers, 'tolshina'));
const variant = ref<{ name: string, id: number }[]>(getFormattedUniqueValues(props?.product?.offers, 'variant'));

const dlinnaM = ref<string>(currentOffer.value.dlinna || '');
const massaM = ref<string>(currentOffer.value.massa || '');
const proletM = ref<string>(currentOffer.value.prolet || '');
const tolshinaM = ref<string>(currentOffer.value.tolshina || '');
const variantM = ref<string>(currentOffer.value.variant || '');

const updateCurrentOffer = (offerId: number) => {
  const offer = props?.product?.offers.find(offer => offer.id === offerId);
  if (offer) {
    currentOffer.value = { ...offer };
    dlinnaM.value = offer.dlinna || '';
    massaM.value = offer.massa || '';
    proletM.value = offer.prolet || '';
    tolshinaM.value = offer.tolshina || '';
    variantM.value = offer.variant || '';
  }
};

</script>

<template>
  <div class="w-full relative laptop:w-[50%] tablet:w-full">
    <div class="pb-6 flex flex-col gap-6 tablet:gap-4">
      <div class="flex flex-col gap-5 tablet:gap-4">
        <div class="flex flex-col gap-1 mobile:gap-3">
          <h2 class="text-tabletXl3 font-medium w-full max-w-[500px] laptop:max-w-[80%] laptop:text-laptopXl3 tablet:text-tabletXl3 mobile:text-mobileXl3">
            {{ product.name }}
          </h2>
          <div class="flex gap-8 text-s lining-nums proportional-nums text-gray300 laptop:gap-7 tablet:gap-5 mobile:gap-2 mobile:flex-wrap">
            <span v-if="product.element_code">Код товара: {{ product.element_code }}</span>
            <span v-if="product.gabarite">Габариты: {{ product.gabarite }}</span>
            <span>Заказ: {{ product.ratio_format }}</span>
          </div>
        </div>
        <p
          class="text-description"
          v-html="product.text"
        />
      </div>
      <div class="flex flex-col gap-5 tablet:gap-4">
        <div
          v-if="variant.length>0"
          class="flex flex-col gap-2.5"
        >
          <h4 class="text-m font-medium laptop:text-laptopM mobile:text-mobileM">
            Вариант покрытия
          </h4>
          <div class="flex items-center gap-2 mobile:flex-wrap">
            <ui-radio
              v-for="(item, index) in variant"
              :key="index"
              v-model="variantM"
              :input-id="`coating_${index}`"
              :label-for="`coating_${index}`"
              name="coating"
              :value="item.name"
              :text="item.name"
              @update:model-value="updateCurrentOffer(item.id)"
            />
          </div>
        </div>
        <div
          v-if="tolshina.length>0"
          class="flex flex-col gap-2.5"
        >
          <h4 class="text-m font-medium laptop:text-laptopM mobile:text-mobileM">
            Толщина металла, мм
          </h4>
          <div class="flex items-center gap-2 mobile:flex-wrap">
            <ui-radio
              v-for="(item, index) in tolshina"
              :key="index"
              v-model="tolshinaM"
              :input-id="`thickness_${index}`"
              :label-for="`thickness_${index}`"
              name="thickness"
              :value="item.name"
              :text="item.name"
              @update:model-value="updateCurrentOffer(item.id)"
            />
          </div>
        </div>
        <div
          v-if="dlinna.length>0"
          class="flex flex-col gap-2.5"
        >
          <h4 class="text-m font-medium laptop:text-laptopM mobile:text-mobileM">
            Длина, мм
          </h4>
          <div class="flex items-center gap-2 mobile:flex-wrap">
            <ui-radio
              v-for="(item, index) in dlinna"
              :key="index"
              v-model="dlinnaM"
              :input-id="`length_${index}`"
              :label-for="`length_${index}`"
              name="length"
              :value="item.name"
              :text="item.name"
              @update:model-value="updateCurrentOffer(item.id)"
            />
          </div>
        </div>
        <div
          v-if="prolet.length > 0"
          class="flex flex-col gap-2.5"
        >
          <h4 class="text-m font-medium laptop:text-laptopM mobile:text-mobileM">
            Пролет, мм
          </h4>
          <div class="flex items-center gap-2 mobile:flex-wrap">
            <ui-radio
              v-for="(item, index) in prolet"
              :key="index"
              v-model="proletM"
              :input-id="`spanM_${index}`"
              :label-for="`spanM_${index}`"
              name="spanM"
              :value="item.name"
              :text="item.name"
              @update:model-value="updateCurrentOffer(item.id)"
            />
          </div>
        </div>
        <div
          v-if="massa.length > 0"
          class="flex flex-col gap-2.5"
        >
          <h4 class="text-m font-medium laptop:text-laptopM mobile:text-mobileM">
            Масса, кг
          </h4>
          <div class="flex items-center gap-2 mobile:flex-wrap">
            <ui-radio
              v-for="(item, index) in massa"
              :key="index"
              v-model="massaM"
              :input-id="`weight_${index}`"
              :label-for="`weight_${index}`"
              name="weight"
              :value="item.name"
              :text="item.name"
              @update:model-value="updateCurrentOffer(item.id)"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="h-[1px] w-[530px] bg-gray laptop:w-full" />
    <div class="pt-[21px] flex flex-col gap-6 w-full max-w-[417px] laptop:max-w-full tablet:gap-4">
      <div class="flex flex-col gap-1">
        <div class="flex items-center justify-between">
          <div class="relative">
            <span class="text-m font-medium laptop:text-laptopM mobile:text-mobileM">Ваша цена</span>
            <ui-tooltip class="absolute border-none -right-4 -top-1" />
          </div>
          <span
            class="text-xl3 font-medium lining-nums proportional-nums"
            v-html="currentOffer.price || product.price"
          />
        </div>
        <div class="flex items-center justify-between text-gray200 text-s lining-nums proportional-nums">
          <span>Розничная цена</span>
          <span v-html="product.rozn_price"></span>
        </div>
      </div>
      <div class="flex items-center justify-between mobile:flex-col mobile:gap-4">
        <div class="flex items-center">
          <button
            class="border-none py-[15px] px-[15px] bg-gray300 flex items-center justify-center rounded-l-s"
            @click="minusCurrent"
          >
            <img
              src="/svg/minus.svg"
              alt="Минус"
            >
          </button>
          <span class="py-[15px] px-[35px] bg-gray flex items-center justify-center text-xl font-medium">
            {{ current }} шт
          </span>
          <button
            class="border-none py-[15px] px-[15px] bg-gray300 flex items-center justify-center rounded-r-s"
            @click="plusCurrent"
          >
            <img
              src="/svg/plus.svg"
              alt="Плюс"
            >
          </button>
        </div>
        <ui-button
          fill="fill"
          text="В корзину"
          class="w-[142px]"
          @click="addProductInCart(currentOffer.id || product.id, current)"
        />
      </div>
    </div>
    <ui-promotion v-if="product.discount_percent && product.discount_percent !=''" :promotion="product.discount_percent" class="-top-5 right-0 laptop:-top-10 tablet:-top-5 mobile:top-0" />
  </div>
</template>
