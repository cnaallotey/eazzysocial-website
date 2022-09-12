import axios from 'axios'
import { defineStore } from 'pinia'

const url = "https://ipinfo.io/41.139.47.35?token=456c7ad621116e"



export const useStore = defineStore('main', {
    state: () => ({ country:null }),
    actions: {
        
        async getcountry() {   
                // this.country = res.data.country
                const check = sessionStorage.getItem("country");
                //console.log(check);
                if(check == null){
                    const res = await axios.get(url)
                    this.country = res.data.country
                    sessionStorage.setItem("country", res.data.country)
                    console.log("request made")
                }
                else{
                    this.country = check
                }
                
                
        },
        randomizeCounter() {
          this.count = Math.round(100 * Math.random())
        },
      },
})
