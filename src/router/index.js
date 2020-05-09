import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import routesMeta from './routes.json';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  ...routesMeta.map((v) => ({
    path: v.path,
    name: v.name,
    component: () => import(`../views/pixi/${v.basename}`),
  })),
];

const router = new VueRouter({
  routes,
});

export default router;
