<template>
  <div class="md:flex md:items-center md:justify-between">
    <div class="min-w-0 flex-1">
      <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Back End Developer</h2>
    </div>
    <div class="mt-4 flex md:ml-4 md:mt-0">
  
      <button type="button" @click="changeShow(true)" class="ml-3 inline-flex items-center rounded-md
       bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm 
       hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
        focus-visible:outline-indigo-600">Yangi bo'lim</button>
    </div>
  </div>
  <modalDepartment :show @close="changeShow" @add="add"/>
</template>
<script>
import {api} from'@/helpers/api'
import modalDepartment from '@/components/department/modalDepartment.vue';
export default {
    components:{
        modalDepartment
    },
    data:()=>({
        show:false
    }),
    methods:{
        changeShow(value){
            this.show=value
        },
        async add(value){
            const{data}=await api.post('pepartment', value)
            console.log(data);
            
        }
    }
    }
</script>
<style lang="">
    
</style>