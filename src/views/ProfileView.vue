<template>
    <!-- INFO -->
    <div class="container p-8">
        <!-- TEXT -->
        <div class="text-center">
            <p class="text-2xl font-bold text-primary">{{ userLogin.name }}</p>
            <p class="mt-1 font-semibold text-gray-400">{{ userLogin.email }}</p>
        </div>
    </div>

    <!-- MENU -->
    <div class="container px-8">
        <div class="grid grid-cols-1">
            <div class="col-span-1">
                <h3 class="mb-2 text-xl font-bold text-primary">General</h3>
            </div>
            <div class="col-span-1">
                <ul>
                    <li v-for="(profile, index) in profileOption" :key="index" class="last:text-red">
                        <router-link :to="profile.route" class="flex items-center justify-between py-3">
                            <div class="flex items-center text-left">
                                <i class="text-2xl t2ico" :class="profile.icon"></i>
                                <h5 class="ml-3 font-semibold">{{ profile.name }}</h5>
                            </div>
                            <div class="flex items-center text-right">
                                <i class="t2ico t2ico-arrow-right"></i>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { RouteLocationRaw, useRouter } from "vue-router";
import { lcStorage } from "@/helpers/lcStorage";
import { PROFILE_OPTION, USER_LOGIN } from "@/constant";
import { computed, ComputedRef, reactive } from "vue";
import { useStore } from "vuex";
import { I_login_res } from "@/interfaces/userInterface";

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
        const store = useStore();
        const profileOption = reactive(PROFILE_OPTION);

        const userLogin: ComputedRef<I_login_res> = computed(() => store.state.userModule.userLogin);
        return { profileOption, userLogin };
    },
};
</script>
