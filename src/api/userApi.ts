import { I_login, I_login_res, I_register } from "@/interfaces/userInterface";
import axios from "axios";

export const userApi = {
    register: (data: I_register) => {
        return axios.post(`/auth/register`, data);
    },

    login: (data: I_login):Promise<{data: I_login_res}> => {
        return axios.post(`/auth/login`, data);
    },
};
