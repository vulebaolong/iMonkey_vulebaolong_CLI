<template>
    <div class="mt-8">
        <div class="container">
            <!-- FROM -->
            <form class="space-y-6" @submit.prevent="handleSubmit">
                <!-- EMAIL -->
                <div class="row">
                    <label class="flex flex-col" for="email">
                        <span class="font-semibold">Email</span>
                        <input class="px-4 py-3 mt-1 border border-gray-100 rounded-lg" type="text" placeholder="example@gmail.com" id="email" />
                    </label>
                </div>

                <!-- PASSWORD -->
                <div class="row">
                    <label class="flex flex-col" for="password">
                        <span class="font-semibold">Password</span>
                        <input class="px-4 py-3 mt-1 border border-gray-100 rounded-lg" type="text" placeholder="password" id="password" />
                    </label>
                </div>

                <!-- BUTTON -->
                <div class="row">
                    <button class="w-full py-3 font-bold text-white rounded-lg bg-primary" type="submit">Login</button>
                </div>
            </form>

            <!-- DIRECTION -->
            <div class="w-full mt-6 text-center">
                <span class="font-semibold">I am a new user.</span>
                <span class="ml-1 font-bold text-primary">
                    <router-link to="/register">Sign In</router-link>
                </span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const handleSubmit = () => {
    console.log(123);
};
</script>
