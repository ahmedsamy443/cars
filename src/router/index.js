import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import car from "../views/car.vue"
import page2 from "../views/page2.vue"
import page3 from "../views/page3.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/page2",
    name: "page2",
    component: page2,
  },
  {
    path: "/page3",
    name: "page3",
    component: page3,
  },
  {
    path: "/car",
    name: "car",
    component: car,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
