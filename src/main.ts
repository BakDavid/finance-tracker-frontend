import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import pinia from "./store";

import "./assets/style.css"; // Tailwind or custom styles

const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount("#app");
