import { createApp } from "vue";
import "./assets/css/base.css";
import { VueQueryPlugin } from "@tanstack/vue-query";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
const app = createApp(App);
app.use(createPinia());

app.use(router);
app.use(VueQueryPlugin);
app.mount("#app");