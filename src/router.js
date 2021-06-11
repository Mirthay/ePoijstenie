import { createRouter, createWebHistory } from 'vue-router';
import NotFound from './components/NotFound.vue';
import WhyMail from './pages/WhyMail.vue';
import MainPage from './pages/MainPage.vue';

const AboutUs = () => import('./pages/AboutUs.vue');

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/srovnejto' },
    { path: '/srovnejto', component: MainPage },
    { path: '/whymail', component: WhyMail },
    { path: '/aboutus', component: AboutUs },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

export default router;
