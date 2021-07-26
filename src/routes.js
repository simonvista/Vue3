import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Profile from "./components/Profile.vue";
import Login from "./components/Login.vue";

const routes = [
  { path: "/", component: Home, name: "Home" },
  { path: "/profile", component: Profile, name: "Profile" },
  { path: "/login", component: Login, name: "Login" },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
