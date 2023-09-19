<template>
    <div class="mt-8">
        <div class="container">
            <!-- FROM -->
            <form class="space-y-6" @submit.prevent="handleSubmit">
                <!-- FULL NAME -->
                <div class="row">
                    <label class="flex flex-col" for="fullName">
                        <span class="font-semibold">Full name</span>
                        <input v-model="values.fullName" class="px-4 py-3 mt-1 border border-gray-100 rounded-lg" type="text" placeholder="iMoney..." id="fullName" />
                    </label>
                </div>

                <!-- EMAIL -->
                <div class="row">
                    <label class="flex flex-col" for="email">
                        <span class="font-semibold">Email</span>
                        <input v-model="values.email" class="px-4 py-3 mt-1 border border-gray-100 rounded-lg" type="text" placeholder="example@gmail.com" id="email" />
                    </label>
                </div>

                <!-- PASSWORD -->
                <div class="row">
                    <label class="flex flex-col" for="password">
                        <span class="font-semibold">Password</span>
                        <input v-model="values.password" class="px-4 py-3 mt-1 border border-gray-100 rounded-lg" type="text" placeholder="password" id="password" />
                    </label>
                </div>

                <!-- BUTTON -->
                <div class="row">
                    <button class="w-full py-3 font-bold text-white rounded-lg bg-primary" type="submit">Sign In</button>
                </div>
            </form>

            <!-- DIRECTION -->
            <div class="w-full mt-6 text-center">
                <span class="font-semibold">I am already a member.</span>
                <span class="ml-1 font-bold text-primary">
                    <router-link to="/login">Login</router-link>
                </span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
const values = reactive({
    fullName: "",
    email: "",
    password: "",
});
const handleSubmit = () => {
    console.log(values);
};
</script>
