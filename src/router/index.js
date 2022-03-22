import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/components/Home/HomeView";
import Product from "@/components/Product/Product";
import AboutView from "@/components/About/AboutView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/product/:id",
    props: true,
    name: "product",
    component: Product,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
