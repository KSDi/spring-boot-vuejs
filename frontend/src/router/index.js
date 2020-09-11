import Vue from 'vue';
import VueRouter from 'vue-router';
import Hello from '@/components/Hello';
import Service from '@/components/Service';
import Bootstrap from '@/components/Bootstrap';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Hello },
  { path: '/callservice', component: Service },
  { path: '/bootstrap', component: Bootstrap },
];

const router = new VueRouter({
  mode: 'history',
  // eslint-disable-next-line no-undef
  base: process.env.BASE_URL,
  routes,
});

export default router;
