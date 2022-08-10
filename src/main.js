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
import Register from "./Views/registercourse.vue"
import GHhome from "./Views/getHiredhom.vue"
import GHAbout from "./Views/gethiredabout.vue"
import VueGtag from "vue-gtag";

import VueAnalytics from 'vue-analytics';


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
            path:"/GetHired", name:"Gethired", component:GHhome
        },
       
       {
            path:"/campusclub", name:"Campusclub", component:Campusclub
        },
       {
            path:"/:pathMatch(.*)", name:"404", component:Home
        },
        {
            path:"/registercourse/:id", name:"registercourse", component:Register
        },
    
    
       

    ]
})


createApp(App).use(router).use(VueGtag,{config: { id: "G-D394SN23TD" }},router ).mount('#app')
