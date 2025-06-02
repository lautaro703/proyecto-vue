import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[
   /*  {
      path: '/',
      name: 'home',
      component: HomeView,
    },*/
    {
      path: '/contador',
      name: 'contador',
      component: () => import('../components/Contador.vue'),
    },
    {
      path: '/tarea',
      name: 'ListaDeTareas',
      component: () => import('../components/ListaDeTarea.vue')
    }
  ]
})

export default router
