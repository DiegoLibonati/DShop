<script setup lang="ts">
import { defineProps, ref, onMounted, onBeforeUnmount, watch } from "vue";

import { mountComponent, unMountComponent } from "shared_core/SharedCore";
import { ImageWithBackgroundColorProps } from "shared_core/SharedCoreProps";
import { Component } from "shared_core/SharedCoreEnums";

const props = defineProps<ImageWithBackgroundColorProps>();

const containerRef = ref<HTMLDivElement | null>(null);

function init() {
    if (!containerRef.value) return;

    mountComponent(containerRef.value, Component.ImageWithBackgroundColor, {
        idRoot: props.idRoot,
        src: props.src,
        alt: props.alt,
        bgColor: props.bgColor,
        isActive: props.isActive,
        language: props.language,
        className: props.className,
        onClick: props.onClick,
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
