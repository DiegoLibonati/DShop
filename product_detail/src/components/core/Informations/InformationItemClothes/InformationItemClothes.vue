<script setup lang="ts">
import { defineProps, ref, onMounted, onBeforeUnmount, watch } from "vue";

import { mountComponent, unMountComponent } from "shared_core/SharedCore";
import { InformationItemClothesProps } from "shared_core/SharedCoreProps";
import { Component } from "shared_core/SharedCoreEnums";


const props = defineProps<InformationItemClothesProps>();

const containerRef = ref<HTMLDivElement | null>(null);

function init() {
    if (!containerRef.value) return;

    console.log(props)

    mountComponent(containerRef.value, Component.InformationItemClothes, {
        idRoot: props.idRoot,
        name: props.name,
        rate: props.rate,
        price: props.price,
        discount: props.discount,
        description: props.description,
        language: props.language,
        className: props.className,
    });
}

function destroy() {
    unMountComponent(props.idRoot);
}

onMounted(init);
onBeforeUnmount(destroy);

watch(() => props, () => {
    init();
}, { deep: true });
</script>

<template>
    <div ref="containerRef" :class="props.classNameWrapper"></div>
</template>
