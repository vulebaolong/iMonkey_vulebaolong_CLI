<template>
    <NavigationHeader />
    <div class="pb-24">
        <slot />
    </div>
    <NavigationBottom v-if="meta.isShowFooter" />
</template>

<script lang="ts">
import NavigationBottom from "@/components/NavigationBottom.vue";
import NavigationHeader from "@/components/NavigationHeader.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
    components: { NavigationBottom, NavigationHeader },
    setup() {
        const route = useRoute();
        return {
            meta: computed(() => route.meta),
        };
    },
};
</script>
