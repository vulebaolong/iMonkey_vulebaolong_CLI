<template>
    <footer class="fixed bottom-0 left-0 w-full pt-4 bg-white p-b-safe-4">
        <div class="container h-full px-8">
            <ul class="flex items-center justify-between h-full">
                <li v-for="(navItem, index) in navItems" :key="index">
                    <router-link :to="navItem.router">
                        <i class="text-2xl t2ico" :class="navItem.icon"></i>
                    </router-link>
                </li>
            </ul>
        </div>

        <!-- PLUS -->
        <div class="absolute p-2 bg-dark-light aspect-square w-[15%] top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full">
            <div class="flex items-center justify-center w-full h-full rounded-full bg-primary">
                <i class="text-white t2ico t2ico-plus"></i>
            </div>
        </div>
    </footer>
</template>

<script lang="ts">
import { reactive } from "vue";
export default {
    setup() {
        const navItems = reactive([
            {
                icon: "t2ico-category",
                router: "/",
            },
            {
                icon: "t2ico-chart",
                router: "/",
                // router: "/report",
            },
            {
                icon: "t2ico-presentation",
                router: "/",
                // router: "/budget",
            },
            {
                icon: "t2ico-profile",
                router: "/profile",
            },
        ]);
        return { navItems };
    },
};
</script>

<style scoped></style>
