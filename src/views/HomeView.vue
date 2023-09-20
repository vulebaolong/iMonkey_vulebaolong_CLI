<template>
    <div class="home">home</div>
</template>

<script lang="ts">
import { RouteLocationRaw } from "vue-router";
import { lcStorage } from "@/helpers/lcStorage";
import { USER_LOGIN } from "@/constant";

export default {
    beforeRouteEnter(to: RouteLocationRaw, from: RouteLocationRaw, next: any) {
        if (!lcStorage.get(USER_LOGIN)) {
            // Chuyển hướng nếu người dùng chưa đăng nhập
            next("/login");
        } else {
            // Nếu đã đăng nhập, tiếp tục hiển thị component
            next();
        }
    },
    setup() {
        console.log(123);
    },
};
</script>
