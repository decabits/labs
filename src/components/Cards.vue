<template>
  <div class="cards">
    <b-container id="crd" fluid>
      <v-row>
      
        <v-col class="productCard" cols="12" sm="4" v-for="(item, i) in Itemfilter" :key="i"
        >
          <v-hover v-slot:default="{ hover }" close-delay="200">
            <v-card
              :elevation="hover ? 16 : 2"
              :loading="loading"
              class="mx-auto my-12"
              max-width="420"
              height="80%"
              style="border-radius:16px;"
              @click="reserve({ item })"
            >
          
              <div class="logoimage">
                <v-img v-bind:src="item.img" aspect-ratio="2"> </v-img>
              </div>
              <v-card-title style="display:flex; justify-content:left;">{{ item.pname }}</v-card-title>
              <p style="font-weight:bold; display:flex; justify-content:left; padding-left: 16px; margin-top: -15px; margin-bottom: -15px;">{{ item.launchDate }}</p>
              <v-card-text>
                <v-row align="left" class="mx-0">
                  <div class="grey--text ml-4"></div>
                </v-row>
                <div style="font-weight:bold; display:flex; justify-content:left;">{{ item.tagline }}</div>
              </v-card-text>
              <v-divider class="mx-4"></v-divider>
              <v-card-text>
                <v-chip-group column>
                  <v-chip
                    color="#3389C2"
                    text-color="white"
                    v-for="tag in item.tags"
                    :key="tag"
                    >{{ tag }}</v-chip
                  >
                </v-chip-group>
              </v-card-text> 
              <v-card-actions>
                <!-- <v-btn
                  style="border-radius:11px"
                  color="#2496FF"
                  dark
                  text
                  @click="reserve({ item })"
                >
                  Read More
                </v-btn> -->
              </v-card-actions> 
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </b-container>
  </div>
</template>
<script>
// import notificationtrapperimage from "../assets/NotificationTrapper__logo.png";

export default {
  methods: {
    reserve: function({ item, i }) {
      this.$emit("cardClicked", { item, i });
    },
  },
  mounted() {
    // setTimeout(() => {
    //   console.log("3s elapsed!");
    //   document.getElementById("crd").style.display == "none"
    //     ? (document.getElementById("crd").style.display = "")
    //     : null;
    //   document.getElementById("skl").style.display == ""
    //     ? (document.getElementById("skl").style.display = "none")
    //     : null;
    // }, 3000),
    //   setTimeout(() => {
    //     this.$emit("AllItems", this.items);
    //   }, 0),
    //   setTimeout(() => {
    //     this.$emit("AllTags", this.items.tags);
    //   }, 0);
  },
  props: {
    Itemfilter: Array,
  },
  data() {
    return {
      items: [
        
      ],
    };
  },
};
</script>
<style>
.cards{
  display:flex;
}
@media only screen and (max-width: 400px){
  .cards{
    display:flex;
    flex-direction:column;

  }
  .productCard{
    margin-bottom: -80px;
  }
}
</style>
