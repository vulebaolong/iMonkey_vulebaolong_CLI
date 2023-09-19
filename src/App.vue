<template>
    <component :is="layout">
        <router-view />
    </component>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import { PUBLIC_LAYOUT } from "@/constant/index";
import { computed } from "vue";

const route = useRoute();
if (process.env.NODE_ENV === "production") {
    // Mã lệnh cho môi trường production
    console.log("Ứng dụng đang chạy ở môi trường production.");
} else {
    // Mã lệnh cho môi trường development
    console.log("Ứng dụng đang chạy ở môi trường development.");
}

const layout = computed(() => (route.meta.layout || PUBLIC_LAYOUT) + "-layout");
</script>
