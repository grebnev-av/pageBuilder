import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/projects",
    name: "Projects",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Projects.vue")
  },
  {
    path: "/project/:id",
    name: "Projects",
    component: () =>
        import(/* webpackChunkName: "about" */ "../views/Project.vue")
  },
  {
    path: "/page/:id",
    name: "Page",
    component: () =>
        import(/* webpackChunkName: "about" */ "../views/Page.vue")
  },
  {
    path: "/ui",
    name: "UI-kit",
    component: () => import("../views/Ui.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
