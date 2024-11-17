<template>
    <!--
      This example requires updating your template:
  
      ```
      <html class="h-full bg-white">
      <body class="h-full">
      ```
    -->
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-10 w-auto" src="https://р66.навигатор.дети/images/events/cover/4a9a475bd041a287fcec0f731eba74a6_big.jpg" alt="Your Company" />
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Tizimga kirish</h2>
      </div>
  
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" @submit.prevent="login">
          <div>
            <label for="login" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <div class="mt-2">
              <input id="login"
               name="email" 
               type="login" 
               autocomplete="login" 
               required="" 
               v-model="user.login"
                class="input"
               />
            </div>
          </div>
  
          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Maxfiy kalit</label>
              
            </div>
            <div class="mt-2">
              <input 
              id="password" 
              name="password" 
              type="password" 
              autocomplete="current-password"
               required="" 
               v-model="user.password"
                class="input" />
            </div>
          </div>

  
  
          <div>
            <button type="submit" 
            class="submit-btn">Sign in</button>
          </div>
        </form>
  
        <p class="mt-10 text-center text-sm text-gray-500">
            Akauntingiz yo'qmi?
          {{ ' ' }}
          <router-link :to="{name:'registration'}"    class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Royhatdan o'tish
        </router-link>
        </p>
      </div>
    </div>
    <notifaction
    :show="show"
    :title="title"
    :text="text"
    @close="close"
    :status="status"
    />
  </template>
  
<script>
import{api} from "@/helpers/api";

export default {
   
    data:()=>({
        user:{},
        show:false,
        title:'',
        text:'',
        status:'success'
    }),
    methods: {
        close(){
            this.show =false,
            this.title='',
            this.text='',
            this.status='success'
        },
        async login() {
            const {data} = await api.post("auth/login" ,this.user).catch(e => {
              console.log('error',e);
              this.title =" Tizimga kirishda xatolik bo'ldi " 
              this.text = e.response.data
              this.status= 'warning'
              this.show=true 

              setTimeout(()=>{
                this.close()
              },3000)
            });
            localStorage.setItem('hospital_token',data.token)
            this.$router.push({name:'home'})
            console.log(data);
                      
            // if(data=='exist'){
            //     this.title='Bunday fofdalunvchi mavjud'
            //     this.text='Iltimos boshqa login kiriting'
            //     this.show='true'
            //     this.status ='warning'
            //     setTimeout(() => {
            //         this.close()
            //     }, 3000);
            // }

            // if(data =='success'){
            //     this.title ="Ro'yhatdan o'tish mavfaqiyatli bajarildi"
            //      this.text='Endi tizimga login va parolingiz bilan kirishingiz mumkin'
            //     this.show='true'
            //     setTimeout(()=>{
            //         this.close()
            //     },3000);
            // }
            
        },
    },
};
</script>
<style>
    
</style>