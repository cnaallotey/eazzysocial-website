import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createRouter, createWebHistory } from 'vue-router'
import Home from "./Views/Home.vue"
import contact from "./Views/Contact.vue"
import About from "./Views/About.vue"
import DigitizingTVET from "./Views/DigitizingTVET.vue"
import ExpressSocial from "./Views/ExpressSocial.vue"
import Courses from "./Views/Courses.vue"
import Campusclub from "./Views/Campusclub.vue"



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', name:"Home", component:Home
        },
        {
            path:"/contact", name: "Contact", component: contact
        },
        {
            path:"/about", name:"About", component:About
        },
        {
            path:"/digitizing-TVET", name:"DigitizingTVET", component:DigitizingTVET
        },
        {
            path:"/expressSocial", name:"ExpressSocial", component:ExpressSocial
        },
       {
            path:"/courses", name:"courses", component:Courses
        },
       {
            path:"/campusclub", name:"Campusclub", component:Campusclub
        },
       {
            path:"/:pathMatch(.*)", name:"404", component:Home
        },
    
    
       

    ]
})


createApp(App).use(router).mount('#app')
