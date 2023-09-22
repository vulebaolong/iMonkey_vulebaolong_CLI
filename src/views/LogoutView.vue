<template>
    
</template>

<script lang="ts">
import { RouteLocationRaw, useRouter } from "vue-router";
import { useStore } from 'vuex';
export default {
    // beforeRouteEnter(to: RouteLocationRaw, from: RouteLocationRaw, next: any) {
    //     next("/login");
    // },
    setup() {
        const store = useStore()
        store.commit('userModule/logout')
        store.commit('categoryModule/logout')
        store.commit('transactionModule/logout')
        return {};
    },
};
</script>

<style scoped></style>
