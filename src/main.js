import { createApp } from "vue";
import App from "./App.vue";
// import router
import router from "./router";

// createApp(App).mount('#app')
// use router as a plugin
createApp(App)
  .use(router)
  .mount("#app");
