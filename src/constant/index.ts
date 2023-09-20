const isProduction = process.env.NODE_ENV === "production";
export const BASE_URL = isProduction ? "https://l9-learning.onrender.com/api/v1" : "http://localhost:3001/api/v1";

export const USER_LOGIN = "USER_LOGIN";

export const TOKEN = "TOKEN";

export const PUBLIC_LAYOUT = "default";

export const PROFILE_OPTION = [
    {
        name: "My Wallet",
        icon: "t2ico-wallet",
        route: "/home",
    },
    {
        name: "Tools",
        icon: "t2ico-ticket-star",
        route: "/home",
    },
    {
        name: "About",
        icon: "t2ico-info-square",
        route: "/home",
    },
    {
        name: "Logout",
        icon: "t2ico-logout",
        route: "/logout",
    },
];
