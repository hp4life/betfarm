import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Football from '../views/football/Football.vue'
import Basketball from "../views/basketball/Basketball.vue";

Vue.use(VueRouter);

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'football',
    component: Football
  },
    {
      path: '/basketball',
      name: 'basketball',
      component: Basketball
    },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
