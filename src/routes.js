import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Profile from "./components/Profile.vue";
import Login from "./components/Login.vue";
import PageNotFound from "./components/PageNotFound.vue";

const routes = [
  { path: "/", component: Home, name: "Home" },
  { path: "/login", component: Login, name: "Login" },
  { path: "/profile/:name", component: Profile, name: "Profile" },
  { path: "/:pathMath(.*)*", component: PageNotFound, name: "PageNotFound" },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
