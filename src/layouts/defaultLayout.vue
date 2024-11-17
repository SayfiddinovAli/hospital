<template>
    <default-sidebar/>
    <div class="lg:pl-72">
      <default-header/>
      <main class="py-10">
        <div class="px-4 sm:px-6 lg:px-8">
       <router-view></router-view>
        </div>
      </main>
    </div>
</template>
<script>
import defaultHeader from '@/components/dashboard/defaultHeader.vue';
import defaultSidebar from '@/components/dashboard/defaultSidebar.vue';
export default {
  components:{
    defaultHeader,
    defaultSidebar
  }  
}
</script>
<style lang="">
    
</style>