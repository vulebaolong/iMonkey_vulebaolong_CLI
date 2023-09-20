<template>
    <div class="mt-8">
        <div class="container">
            <!-- FROM -->
            <a-form :model="formState" layout="vertical" @finish="onFinish" @finishFailed="onFinishFailed">
                <!-- NAME -->
                <a-form-item label="Full Name" name="name" :rules="[{ required: true, message: 'Please input your full name' }]">
                    <a-input v-model:value="formState.name" size="large" />
                </a-form-item>

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
                <span class="font-semibold">I am already a member.</span>
                <span class="ml-1 font-bold text-primary">
                    <router-link to="/login">Login</router-link>
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

const loadingBtn = ref(false);

const formState = reactive({
    name: "",
    email: "",
    password: "",
});

const onFinish = async (values: any) => {
    try {
        console.log("Success:", values);
        loadingBtn.value = true;
        const { data } = await userApi.register(formState);
        success("Đăng ký thành công");
    } catch (err) {
        console.log(err);
        error("Đăng ký không thành công");
    } finally {
        loadingBtn.value = false;
    }
};

const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
};
</script>
