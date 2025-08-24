<script setup lang="ts">
import { defineProps, provide, watchEffect } from "vue";

import { AppProps } from "@src/entities/props";

import ProductSection from '@src/containers/ProductSection/ProductSection.vue';

import { PRODUCT_CONTEXT_KEY } from "@src/constants/keys";
import { PRODUCT_1 } from "@src/constants/products";

import "@src/App.css"


const props = defineProps<AppProps>();

const onProductChange = () => {
    const idProduct = props.idProduct

    if (idProduct === "constant") {
        const product = PRODUCT_1;
        provide(PRODUCT_CONTEXT_KEY, product);
    }

    return
}

watchEffect(onProductChange);
</script>

<template>
    <main class="main-product-detail">
        <ProductSection></ProductSection>
    </main>
</template>
