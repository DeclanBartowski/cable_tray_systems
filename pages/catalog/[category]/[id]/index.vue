<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type {ProductDto} from "~/types/catalog/category/id";

const route = useRoute();

const { data: product} = await useContentFetch<ProductDto>(`product/${route.params.id}`, {
  method: 'GET',
})

useServerSeoMeta({
  ogTitle: () => product?.value!.data.seo.title,
  title: () => product?.value!.data.seo.title,
  description: () => product?.value!.data.seo.description,
  ogDescription: () => product?.value!.data.seo.description,
  keywords: () => product?.value!.data.seo.keywords
})
</script>

<template>
    <div class="pt-8 pb-[100px] text-black laptop:pt-7 laptop:pb-20 tablet:pt-6 tablet:pb-14 mobile:pb-6">
        <div class="container">
            <div class="mb-10 laptop:mb-10 tablet:mb-9 mobile:hidden">
                <ui-breadcrumbs :breadcrumbs="product?.data?.breadcrumb" />
            </div>
            <div class="flex items-start gap-[57px] laptop:gap-12 tablet:gap-10 tablet:flex-col">
                <catalog-product-slider :images="product?.data?.element?.slider || []" />
                <catalog-product-information :product="product?.data?.element" />
            </div>
        </div>
        <catalog-product-documentation :documents="product?.data?.element?.documents" />
        <div class="container">
            <div class="flex flex-col gap-[108px] laptop:gap-20 tablet:gap-14 mobile:gap-6">
                <catalog-product-slider-related />
                <catalog-product-slider-similar />
            </div>
        </div>
    </div>
</template>
