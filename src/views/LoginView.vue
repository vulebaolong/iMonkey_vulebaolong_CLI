<template>
    <div class="mt-8">
        <div class="container">
            <!-- FROM -->
            <a-form :model="formState" layout="vertical" @finish="onFinish" @finishFailed="onFinishFailed">
                <!-- EMAIL -->
                <a-form-item label="Email" name="email" :rules="[{ required: true, message: 'Please input your password!' }]">
                    <a-input v-model:value="formState.email" size="large" />
                </a-form-item>

                <!-- PASSWORD -->
                <a-form-item label="Password" name="password" :rules="[{ required: true, message: 'Please input your password!' }]">
                    <a-input-password v-model:value="formState.password" size="large" />
                </a-form-item>

                <!-- BUTTON -->
                <a-form-item>
                    <a-button :loading="loadingBtn" class="w-full" size="large" type="primary" html-type="submit">Sign In</a-button>
                </a-form-item>
            </a-form>

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
import { userApi } from "@/api/userApi";
import { error, success } from "@/helpers/messageHelper";
import { reactive } from "vue";
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const loadingBtn = ref(false);

const formState = reactive({
    email: "",
    password: "",
});

const onFinish = (values: any) => {
    loadingBtn.value = true;
    store.dispatch("login", values).then((result) => {
        if (result) loadingBtn.value = false;
    });
};

const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
};
</script>
