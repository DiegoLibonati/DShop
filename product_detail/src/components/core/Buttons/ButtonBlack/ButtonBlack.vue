<script setup lang="ts">
import {
    defineProps, ref, onMounted, onBeforeUnmount, watch,
    useSlots, h, render
} from "vue";

import { mountComponent, unMountComponent } from "shared_core/SharedCore";
import { Component } from "shared_core/SharedCoreEnums";
import type { ButtonBlackProps } from "shared_core/SharedCoreProps";

const props = defineProps<ButtonBlackProps>();
const slots = useSlots();

const containerRef = ref<HTMLDivElement | null>(null);


function buildChildrenText(): string {
    const host = document.createElement("div");
    const Render = { render: () => slots.default?.() };
    render(h(Render), host);
    const text = host.textContent ?? "";
    render(null, host);
    return text.trim();
}

function init() {
    if (!containerRef.value) return;
    const childrenText = buildChildrenText();

    mountComponent(containerRef.value, Component.ButtonBlack, {
        idRoot: props.idRoot,
        ariaLabel: props.ariaLabel,
        rounded: props.rounded,
        children: childrenText,
        language: props.language,
        className: props.className,
        onClick: props.onClick,
    });
}
function destroy() { unMountComponent(props.idRoot); }

onMounted(init);
onBeforeUnmount(destroy);

watch(
    () => [props.idRoot, props.language, props.className, props.onClick, props.rounded, props.ariaLabel, slots.default?.()],
    () => { init(); },
    { deep: true }
);
</script>

<template>
    <div ref="containerRef" :class="props.classNameWrapper">
        <slot />
    </div>
</template>
