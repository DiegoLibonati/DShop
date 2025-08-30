<script setup lang="ts">
import { defineProps, ref, onMounted, onBeforeUnmount, watch } from "vue";

import { mountComponent, unMountComponent } from "shared_core/SharedCore";
import { CounterWithActionsProps } from "shared_core/SharedCoreProps";
import { Component } from "shared_core/SharedCoreEnums";
import { MountOptions } from "shared_core/SharedCoreEntities";

const props = defineProps<CounterWithActionsProps>();

const containerRef = ref<HTMLDivElement | null>(null);

function init() {
    if (!containerRef.value) return;

    const options: MountOptions = {
        idComponent: Component.CounterWithActions,
        props: {
            idRoot: props.idRoot,
            limit: props.limit,
            language: props.language,
            className: props.className,
            onChange: props.onChange,
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
