<template>
     <v-carousel class="banner"
      cycle
      hide-delimiter-background
      show-arrows-on-hover
      style=" position: absolute;
              max-width: 95%;
              height: 427px;
              left: 40px;
              top: 110px;
              background: #555555;
              border-radius: 8px;">
      <v-carousel-item 
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
        style="width:100%; margin-top: -2px;"
        @click="banneropen(item.bname)"
      >
      </v-carousel-item>
      </v-carousel>
</template>
<script>
import Bannerimage0 from '../assets/banner0.svg'
import Bannerimage from '../assets/banner1.svg';
import Bannerimage2 from '../assets/banner2.svg';
import Bannerimage3 from '../assets/banner3.svg';
import Bannerimage4 from '../assets/banner4.svg';
export default {
    data () {
      return {
        items: [
          {
            src: Bannerimage0,
             bname:'labdecabits',  
          },
          {
            src: Bannerimage,
            bname:'blogomaker',  
          },
          {
            src: Bannerimage2,
             bname:'blogomaker',  
          },
          {
            src: Bannerimage3,
             bname:'blogomaker',  
          },
          {
            src: Bannerimage4,
            
            bname:'reachus',   
          } 
          
        ],
      }
    },
    methods:{
      banneropen(name){
        // window.open("https://logomaker.decabits.com/");
        if(name == 'reachus'){
           this.reserve(name)
        } else if(name == 'blogomaker'){
          window.open("https://logomaker.decabits.com/");
        }
      
      },
      reserve: function(item) {
      this.$emit("bannerClicked",item);
    },
    },
    
}
</script>
<style >
.banner{
  top: 120px;
  left: 1px;
  border-radius: 8px;
}
</style>