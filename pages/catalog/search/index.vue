<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type {CategoryDto, Product} from "~/types/catalog/category";
import {useFilterStore} from "~/stores/filters";
import {useFavoriteStore} from "~/stores/favorite";
import {useCompareStore} from "~/stores/compare";
import type {SearchDto} from "~/types/catalog/search";

const {categoryPageSortFields} = toRefs(useFilterStore());

const route = useRoute();

const favoriteStore = useFavoriteStore();
const compareStore = useCompareStore();

const { $api } = useNuxtApp()

const page = ref(1);
const sort = ref('');
const productsList = ref<Product[]>([])

const { data: search } = await useAsyncData<SearchDto>(
    'search',
    (): Promise<SearchDto> => $api('/search/', {
      method: 'GET',
      params: {
        page: page.value,
        sort: sort.value
      },
      query: {
        q: route.query?.q || ''
      }
    }))


$api('/search/', {
  method: 'GET',
  params: {
    page: page.value,
    sort: sort.value
  },
  query: {
    q: route.query?.q || ''
  },
  onResponse({response}) {
    if (response.status == 201 || response.status == 200) {
      productsList.value.push(...response?._data?.data?.products)
    }
  },
})

watch(
    () => route.query,
    () => {

      $api('/search/', {
        method: 'GET',
        query: {
          ...route.query,
        },
        params: {
          page: page.value,
        },

        onResponse({response}) {
          if (response.status == 201 || response.status == 200) {
            if (page.value == 1) {
              productsList.value = response?._data?.data?.products;
            } else {
              productsList.push(...response?._data?.data?.products)
            }
          }
        },
      })
    })

watch(page, () => {
  $api('/search/', {
    method: 'GET',
    params: {
      page: page.value,
      sort: sort.value
    },
    query: {
      q: route.query?.q || ''
    },
    onResponse({response}) {
      if (response.status == 201 || response.status == 200) {
        if(page.value == 1) {
          productsList.value = response?._data?.data?.products;
        } else {
          productsList.value.push(...response?._data?.data?.products)
        }
      }
    },
  })
})

categoryPageSortFields.value = search?.value?.data?.sortFields || [];
const nextPage = () => {
  if(productsList.value.length < search?.value?.data.pagination.itemsCount) {
    page.value += 1;
  }
}

const toggleFavoriteCategory = async (id: number, favoriteStatus: boolean) => {
  await favoriteStore.toggleFavoriteCategory(id, favoriteStatus);

  $api('/search/', {
    method: 'GET',
    params: {
      page: page.value,
      sort: sort.value
    },
    query: {
      q: route.query?.q || ''
    },
    onResponse({response}) {
      if (response.status == 201 || response.status == 200) {
        productsList.value.length -= response?._data?.data?.products.length;
        productsList.value.push(...response?._data?.data?.products)
      }
    },
  })
}

const toggleCompareCategory = async (id: number, compareStatus: boolean) => {
  await compareStore.toggleCompareCategory(id, compareStatus);

  $api('/search/', {
    method: 'GET',
    params: {
      page: page.value,
      sort: sort.value
    },
    query: {
      q: route.query?.q || ''
    },
    onResponse({response}) {
      if (response.status == 201 || response.status == 200) {
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
      <div class="flex flex-col gap-[108px] laptop:gap-20 tablet:gap-14 mobile:gap-6">
        <div class="flex items-start gap-5 tablet:gap-6 tablet:flex-col">
          <promotion-main
              @toggle-compare="toggleCompareCategory"
              @toggle-favorite="toggleFavoriteCategory"
              :pagination="search?.data?.pagination || null"
              :category-products="productsList || []"
              @next-page="nextPage" />
        </div>
      </div>
    </div>
  </div>
</template>
