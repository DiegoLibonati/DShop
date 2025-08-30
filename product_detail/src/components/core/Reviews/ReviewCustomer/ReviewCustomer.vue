<script setup lang="ts">
import { defineProps, ref, onMounted, onBeforeUnmount, watch } from "vue";

import { mountComponent, MountOptions, unMountComponent } from "shared_angular/SharedAngular";
import { ReviewCustomerProps } from "shared_angular/SharedAngularProps";
import { Component } from "shared_angular/SharedAngularEnums";


const props = defineProps<ReviewCustomerProps>();

const containerRef = ref<HTMLDivElement | null>(null);

function init() {
    if (!containerRef.value) return;

    const options: MountOptions = {
        idComponent: Component.ReviewCustomer,
        props: {
            idRoot: props.idRoot,
            name: props.name,
            description: props.description,
            maxStars: props.maxStars,
            valueStars: props.valueStars,
            language: props.language,
            className: props.className,
        }
    };

    mountComponent(containerRef.value, options);
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
