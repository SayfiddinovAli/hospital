import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'defaultLayout',
      component:()=>import('@/layouts/defaultLayout.vue'),
      children:[ 
        {
          path:'',
          name:'dashboard-page',
          component  :()=>import('@/views/default/dashboardPage.vue')
        },
        {
          path:'departments',
          name:'departments',
          component  :()=>import('@/views/default/departmentsList.vue')
        },

       ]
      
    },
    {
      path:'/auth',
      name:'authLayout',
      component:()=>import('@/layouts/autLayout.vue'),
      children:[
        {
          path:'',
          name:'login',
          component:()=>import('@/views/auth/loginPage.vue')
        },
        {
          path:'registration',
          name:'registration',
          component:()=>import('@/views/auth/regPage.vue')
        }
     
      ]
      
    },

  ],
})

export default router
