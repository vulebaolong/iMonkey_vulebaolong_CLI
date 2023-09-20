import { MessageInstance } from "ant-design-vue/es/message";

export let messageApi: MessageInstance;

export const setMessageApi = (api: MessageInstance) => {
    messageApi = api;
};

export const success = (content: string) => {
    messageApi.open({
        type: "success",
        content,
    });
};

export const error = (content: string) => {
    messageApi.open({
        type: "error",
        content,
    });
};

export const warning = (content: string) => {
    messageApi.open({
        type: "warning",
        content,
    });
};
