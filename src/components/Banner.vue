<template>
  <v-carousel
    class="banner"
    cycle
    hide-delimiter-background
    show-arrows-on-hover
    hide-delimiters="true"
    style=" 
              width: 100%;
              margin:40px auto 0 auto;
              border-radius: 16px;
              cursor:pointer;
              transition-timing-function: ease-in;"
  >
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
      style="border-radius:16px;"
      @click="banneropen(item.bname)"
    >
    </v-carousel-item>
  </v-carousel>
</template>
<script>
import Bannerimage0 from "../assets/banner0.svg";
import Bannerimage from "../assets/banner1.svg";
import Bannerimage2 from "../assets/banner2.svg";
import Bannerimage3 from "../assets/banner3.svg";
import Bannerimage4 from "../assets/banner4.svg";
export default {
  data() {
    return {
      items: [
        {
          src: Bannerimage0,
          bname: "labdecabits",
        },
        {
          src: Bannerimage,
          bname: "blogomaker",
        },
        {
          src: Bannerimage2,
          bname: "blogomaker",
        },
        {
          src: Bannerimage3,
          bname: "blogomaker",
        },
        {
          src: Bannerimage4,

          bname: "reachus",
        },
      ],
    };
  },
  methods: {
    banneropen(name) {
      if (name == "reachus") {
        this.reserve(name);
      } else if (name == "blogomaker") {
        window.open("https://logomaker.decabits.com/");
      }
    },
    reserve: function(item) {
      this.$emit("bannerClicked", item);
    },
  },
};
</script>
<style>
@media only screen and (max-width: 1160px) {
  .theme--dark.v-btn.v-btn--icon {
    color: black;
  }
}
</style>
