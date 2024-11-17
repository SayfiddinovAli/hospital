<template >
     <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4">
          <div class="flex h-16 shrink-0 items-center">
            <img class="h-8 w-auto" src="" alt="Your Company" />
          </div>
          <nav class="flex flex-1 flex-col">

          <router-link 
          v-for="item of navigation"
          :key="item.to"
          :to="{name:item.to}"
          :class="[item.current ? ' bg-indigo-700 text-white' : 'text-indigo-200  hover:text-white hover:bg-indigo-700',
           'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold']">
        <component :is="item.icon" :class="[item.current ? 'text-white' : 'text-indigo-200 group-hover:text-white', 'h-6 w-6 shrink-0']" aria-hidden="true" />
    
    
        {{ item.name }}
                      
                      
        </router-link>

          </nav>
        </div>
      </div>
</template>
<script >

import{
HomeIcon,
UsersIcon
} from '@heroicons/vue/24/outline'
export default{

    data:()=>({
        navigation:[
            {
                name:'Bosh sahifa' ,to:'dashboard-page',icon:HomeIcon
            },
            {
                name:' Bo`limlar ' ,to:'departments',icon:UsersIcon
            },
        ]
    })
}

</script>
<style lang="">
    
</style>