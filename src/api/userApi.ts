import { I_login_req, I_login_res, I_register_req } from "@/interfaces/userInterface";
import axios from "axios";

export const userApi = {
    register: (data: I_register_req) => {
        return axios.post(`/auth/register`, data);
    },

    login: (data: I_login_req): Promise<{ data: I_login_res }> => {
        return axios.post(`/auth/login`, data);
    },
};
