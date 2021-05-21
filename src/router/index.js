import Vue from "vue";
import VueRouter from "vue-router";
import dashboard from "../views/Dashboard";
import Shipments from "../views/Shipments.vue";
import Orders from "../views/Orders.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    component: dashboard,
    children: [
      {
        path: "",
        component: Orders,
      },
      {
        path: "Shipments",
        component: Shipments,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
