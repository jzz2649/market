import Vue from 'vue';
import VueRouter from 'vue-router';

const Home = () => import('./components/Home.vue')
const Main = () => import('./components/Main.vue')

Vue.use(VueRouter);

const routes = [{
    path:'/',
    component: Home
  },
  {
    path:'/market',
    component:Main,
  },
  {
    path:'*',
    redirect: '/'
  }];

const router = new VueRouter({
  mode: "hash",
  routes
});

export default router;