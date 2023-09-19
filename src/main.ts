import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './api/configApi'

import "./assets/styles/tailwind.css";
import "./assets/styles/font.css";
import "./assets/styles/global.css";
import { registerGlobalComponents } from "./helpers/import";

const app = createApp(App);

registerGlobalComponents(app)

app.use(store);
app.use(router);

app.mount("#app");
