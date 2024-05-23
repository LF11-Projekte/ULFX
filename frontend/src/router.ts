import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue';
import EditPostView from "./views/EditPostView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/edit-post',
      name: 'post-edit',
      component: EditPostView
    }
  ]
})

export default router
