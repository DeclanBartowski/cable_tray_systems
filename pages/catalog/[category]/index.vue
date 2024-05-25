<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type {CategoryDto, Product} from "~/types/catalog/category";
import {useFilterStore} from "~/stores/filters";
import {useFavoriteStore} from "~/stores/favorite";

const {categoryPageSortFields} = toRefs(useFilterStore());

const route = useRoute();

const favoriteStore = useFavoriteStore();

const { $api } = useNuxtApp()

const page = ref(1);
const sort = ref('');
const productsList = ref<Product[]>([])
const { data: category } = await useAsyncData<CategoryDto>(
    'category',
    (): Promise<CategoryDto> => $api('/catalog/'+route.params.category, {
      method: 'GET',
      params: {
        page: page.value,
        sort: sort.value
      },
}))

$api('/catalog/'+route.params.category, {
  method: 'GET',
  params: {
    page: page.value,
    sort: sort.value
  },
  onResponse({response}) {
    if (response.status == 201 || response.status == 200) {
      productsList.value.push(...response?._data?.data?.products)
    }
  },
})

const toggleFavoriteCategory = async (id: number, favoriteStatus: boolean) => {
  await favoriteStore.toggleFavoriteCategory(id, favoriteStatus);

  $api('/catalog/'+route.params.category, {
    method: 'GET',
    params: {
      page: page.value,
      sort: sort.value
    },
    onResponse({response}) {
      if (response.status == 201 || response.status == 200) {
        productsList.value.length -= response?._data?.data?.products.length;
        productsList.value.push(...response?._data?.data?.products)
      }
    },
  })
}

watch(() => route.query, async () => {
  productsList.value = [];
  page.value = 1;
  sort.value = route.query.sort || '';

  await $api('/catalog/'+route.params.category, {
    method: 'GET',
    params: {
      page: page.value,
      sort: sort.value
    },
    onResponse({response}) {
      if (response.status == 201 || response.status == 200) {
        productsList.value.push(...response?._data?.data?.products)
      }
    },
  })
})

categoryPageSortFields.value = category?.value?.data?.sortFields || [];
const nextPage = () => {
  if(productsList.value.length < category?.value?.data.pagination.itemsCount) {
    page.value += 1;
  }
}



useSeoMeta({
  ogTitle: () => category.value!.data.seo.title,
  title: () => category.value!.data.seo.title,
  description: () => category.value!.data.seo.description,
  ogDescription: () => category.value!.data.seo.description,
  keywords: () => category.value!.data.seo.keywords
})
</script>

<template>
    <div class="pt-8 pb-[100px] text-black laptop:pt-7 laptop:pb-20 tablet:pt-6 tablet:pb-14 mobile:pb-6">
        <div class="container">
            <div class="mb-10 laptop:mb-19 tablet:mb-8 mobile:hidden">
                <ui-breadcrumbs :breadcrumbs="category?.data?.breadcrumb" />
            </div>
            <h2 class="text-xl4 font-medium mb-[33px] laptop:text-laptopXl4 tablet:text-tabletXl4 mobile:text-mobileXl4 laptop:mb-8 tablet:mb-7 mobile:mb-6">
                Акционные товары
            </h2>
            <promotion-main @toggle-favorite="toggleFavoriteCategory" :category-products="productsList || []" @next-page="nextPage" />
        </div>
    </div>
</template>
