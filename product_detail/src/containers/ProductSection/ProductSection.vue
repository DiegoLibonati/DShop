<script setup lang="ts">
import { inject } from "vue";

import ImageViewerArticle from "@src/containers/ImageViewerArticle/ImageViewerArticle.vue";
import ProductInformationArticle from "@src/containers/ProductInformationArticle/ProductInformationArticle.vue";

import { PRODUCT_CONTEXT_KEY } from "@src/constants/keys";

import { Product } from "shared_core/SharedCoreEntities";

import "@src/containers/ProductSection/ProductSection.css"


const product = inject(PRODUCT_CONTEXT_KEY) as Product
</script>

<template>
    <section class="product-section">
        <ImageViewerArticle :images="product.images"></ImageViewerArticle>
        <ProductInformationArticle :name="product.name" :rate="product.rate" :price="product.price"
            :discount="product.discount" :description="product.description!" :colors="product.colors"
            :sizes="product.sizes"></ProductInformationArticle>
    </section>
</template>
