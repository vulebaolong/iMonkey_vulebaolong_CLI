<template>
    <slot />
    <NavigationBottom />
</template>

<script lang="ts">
import NavigationBottom from "@/components/NavigationBottom.vue";

export default {
    components: { NavigationBottom },
    setup() {
        return {};
    },
};
</script>
