import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createRouter, createWebHistory } from 'vue-router'
import Home from "./Views/Home.vue"
import contact from "./Views/Contact.vue"


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', name:"Home", component:Home
        },
        {
            path:"/contact", name: "Contact", component: contact
        },
       

    ]
})


createApp(App).use(router).mount('#app')
