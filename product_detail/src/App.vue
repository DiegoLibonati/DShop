<template>
    <section class="product-detail">
        <h1>Product Detail</h1>
        <p>ID: {{ productId }}</p>
    </section>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
    productId?: string;
}>();
const productId = props.productId ?? "N/A";
</script>

<style scoped></style>
