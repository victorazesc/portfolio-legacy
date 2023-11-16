import Vue from 'vue';
import Router from 'vue-router';
import Landing from '@/components/site/Landing';
import Portfolio from '@/components/site/Portfolio';
import Contact from '@/components/site/Contact';
import Blog from '@/components/site/Blog';
import Post from '@/components/site/Post';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing,
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio,
    },
    {
      path: '/contato',
      name: 'contato',
      component: Contact,
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog,
    },
    {
      path: '/post',
      name: 'post',
      component: Post,
    },
  ],
});
