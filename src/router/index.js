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
      component: () => import('../modules/contador/components/Contador.vue'),
    },
    {
      path: '/tarea',
      name: 'ListaDeTareas',
      component: () => import('../modules/listadetareas/components/ListaDeTarea.vue')
    },
    {
      path: '/registro',
      name: 'registro',
      component: () => import('../modules/registro/schemas/views/RegistrarView.vue'),
    }
  ]
})

export default router
