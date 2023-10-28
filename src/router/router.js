import { createRouter, createWebHistory } from 'vue-router';
import { user } from '../store.js';
import HomeComponent from '../components/HomeComponent.vue';
import AboutMeComponent from '../components/AboutMeComponent.vue';
import LandingComponent from '../components/LandingComponent.vue';

const routes = [
  { path: '/', component: LandingComponent },
  { path: '/home', component: HomeComponent, meta: { requiresLogin: true } },
  { path: '/about-me', component: AboutMeComponent, meta: { requiresLogin: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresLogin && !user.loggedInStatus) {
    next('/');
  } else if (!to.meta.requiresLogin && user.loggedInStatus) {
    next('/home');
  } else {
    next();
  }
});

export default router;
