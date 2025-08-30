<script setup lang="ts">
import { defineProps, ref, onMounted, onBeforeUnmount, watch } from "vue";

import { mountComponent, MountOptions, unMountComponent } from "shared_react/SharedReact";
import { GalleryClothesProps } from "shared_react/SharedReactProps";
import { Component } from "shared_react/SharedReactEnums";


const props = defineProps<GalleryClothesProps>();

const containerRef = ref<HTMLDivElement | null>(null);

function init() {
    if (!containerRef.value) return;

    const options: MountOptions = {
        idComponent: Component.GalleryClothes,
        props: {
            idRoot: props.idRoot,
            title: props.title,
            clothes: props.clothes,
            language: props.language,
            className: props.className,
            onClothesClick: props.onClothesClick,
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
