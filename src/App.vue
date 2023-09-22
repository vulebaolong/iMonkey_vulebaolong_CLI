<template>
    <context-holder />
    <component :is="layout">
        <router-view />
    </component>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import { PUBLIC_LAYOUT } from "@/constant/index";
import { computed } from "vue";

import { setMessageApi } from "./helpers/messageHelper";
import { message } from "ant-design-vue";
const [messageApi, contextHolder] = message.useMessage();

setMessageApi(messageApi);

const route = useRoute();

if (process.env.NODE_ENV === "production") console.log("Ứng dụng đang chạy ở môi trường production.");
if (process.env.NODE_ENV !== "production") console.log("Ứng dụng đang chạy ở môi trường development.");

const layout = computed(() => (route.meta.layout || PUBLIC_LAYOUT) + "-layout");
</script>
