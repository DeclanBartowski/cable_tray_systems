<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type {CategoryDto, Product} from "~/types/catalog/category";
import {useFilterStore} from "~/stores/filters";
import {useFavoriteStore} from "~/stores/favorite";
import {useCompareStore} from "~/stores/compare";

const {categoryPageSortFields} = toRefs(useFilterStore());

const route = useRoute();

const favoriteStore = useFavoriteStore();
const compareStore = useCompareStore();
const config = useRuntimeConfig();

const { $api } = useNuxtApp()


const page = ref(1);
const sort = ref('');
const productsList = ref<Product[]>([])
const interestedList = ref<Product[]>([]);
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
      interestedList.value = response?._data?.data?.interested;
      if (Array.isArray(response?._data?.data?.products)) {
        productsList.value.push(...response?._data?.data?.products)
      }
    }
  },
})




const priceFilter = ref(category.value?.data?.filter?.find((el) => el.CODE == 'PRICE'));
const typeFilter = ref(category.value?.data?.filter?.find((el) => el.CODE == 'TYPE'));
const viewFilter = ref(category.value?.data?.filter?.find((el) => el.CODE == 'VID'));
const heightFilter = ref(category.value?.data?.filter?.find((el) => el.CODE == 'BORT'));

const filters = useFilterStore();
const query = {};
for(const key in route.query) {
  query[key] = route.query[key] || '';
}
filters.setQuery(query);

watch(
    () => route.query,
    async () => {

      const {data: res} = await useContentFetch<CategoryDto>(`catalog/${route.params.category}`, {
        method: 'GET',
        query: {
          ...route.query,
          'set_filter': 'Y',
        },
        params: {
          page: page.value,
        }
      });
      category.value = res.value;
    }, {
      deep: true,
      immediate: true,
    }
)
watch(page, () => {
  $api('/catalog/'+route.params.category, {
    method: 'GET',
    params: {
      page: page.value,
      sort: sort.value
    },
    query: filters.query,
    onResponse({response}) {
      if (response.status == 201 || response.status == 200) {
        if(page.value == 1) {
          category.value = response?._data?.data?.products;
        } else {
          category.value?.data?.products.push(...response?._data?.data?.products)
        }
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
        interestedList.value = response?._data?.data?.interested || [];
        productsList.value.length -= response?._data?.data?.products.length;
        if (Array.isArray(response?._data?.data?.products)) {
          productsList.value.push(...response?._data?.data?.products)
        }
      }
    },
  })
}

const toggleCompareCategory = async (id: number, compareStatus: boolean) => {
  await compareStore.toggleCompareCategory(id, compareStatus);

  $api('/catalog/'+route.params.category, {
    method: 'GET',
    params: {
      page: page.value,
      sort: sort.value
    },
    onResponse({response}) {
      if (response.status == 201 || response.status == 200) {
        interestedList.value = response?._data?.data?.interested;
        productsList.value.length -= response?._data?.data?.products.length;
        productsList.value.push(...response?._data?.data?.products)
      }
    },
  })
}
</script>

<template>
  <div class="pt-8 pb-[100px] text-black laptop:pt-7 laptop:pb-20 tablet:pt-6 tablet:pb-14 mobile:pb-6">
    <div class="container">
      <div class="mb-10 laptop:mb-19 tablet:mb-8 mobile:hidden">
        <ui-breadcrumbs :breadcrumbs="category?.data?.breadcrumb" />
      </div>
      <h2 class="text-xl4 font-medium mb-[33px] laptop:text-laptopXl4 tablet:text-tabletXl4 mobile:text-mobileXl4 laptop:mb-8 tablet:mb-7 mobile:mb-6">
        {{ category?.data?.section?.name }}
      </h2>
      <template v-if="category?.data?.type === 'elements'">
        <div class="flex -col gap-[108px] laptop:gap-20 tablet:gap-14 mobile:gap-6">
          <div class="flex items-start gap-5 tablet:gap-6 tablet:flex-col">
            <catalog-related-filter
              :view-filter="viewFilter || {}"
              :type-filter="typeFilter || {}"
              :price-filter="priceFilter || {}"
              :height-filter="heightFilter || {}"
            />
            <promotion-main
              :pagination="category?.data?.pagination || null"
              :category-products="productsList || []"
              @toggle-compare="toggleCompareCategory"
              @toggle-favorite="toggleFavoriteCategory"
              @next-page="nextPage"
            />
          </div>
        </div>
        <catalog-related-slider-interesting
            :interested="interestedList || []"
            @toggle-compare="toggleCompareCategory"
            @toggle-favorite="toggleFavoriteCategory"
        />
      </template>
      <template v-else-if="category?.data?.type === 'multi_sections'">
        <catalog-cable-category :tree="category?.data?.tree?.sub || []" />
      </template>
      <template v-else-if="category?.data?.type === 'sections'">
        <div class="flex flex-col gap-[108px] laptop:gap-20 tablet:gap-14 mobile:gap-6">
          <div class="flex items-start gap-5 tablet:gap-6 tablet:flex-col">
            <div class="grid grid-cols-4 gap-5 tablet:gap-4 mobile:grid-cols-1">
              <common-products-card v-for="item in category?.data?.tree?.sub  || []"
                                    :to="item.link"
                                    :tree="item?.sub"
                                    :title="item?.name"
                                    :src="`${config.public.baseURL}/${item?.picture}`"
              />
            </div>
          </div>
          <catalog-related-slider-interesting
              :interested="interestedList || []"
              @toggle-compare="toggleCompareCategory"
              @toggle-favorite="toggleFavoriteCategory"
          />
        </div>
      </template>
    </div>
  </div>
</template>
