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
import Engage from "./Views/Engage.vue"
import GHAbout from "./Views/gethiredabout.vue"
import webinar from "./Views/Webinar.vue"
import VueGtag from "vue-gtag";
import { createPinia } from 'pinia'
import VueTelInput from 'vue3-tel-input'
import courseregistration from './Views/courseregistration.vue'
import 'vue3-tel-input/dist/vue3-tel-input.css'
import vueCountryRegionSelect from 'vue3-country-region-select'

import VueAnalytics from 'vue-analytics';

const pinia = createPinia()


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
        {
            path:"/engage", name:"engage", component:Engage
        },
        {
            path:"/webinar", name:"webinar", component:webinar
        },
        {
            path:'/campusclub/:id', name:'campusclubcourse', component:courseregistration, props: route => ({ affiliate: route.query.affiliate })
        },
    
    
    
       

    ]
})


createApp(App).use(router).use(vueCountryRegionSelect).use(VueGtag,{config: { id: "G-D394SN23TD" }},router ).use(VueTelInput).use(pinia).mount('#app')

export {router}