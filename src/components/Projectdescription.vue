<template>
  <div class="project">
    <b-container fluid style="margin-top:50px; width:90%;">
      <v-row>
        <v-col cols="12" sm="4">
          <h3 class="headingPr">{{ pname.pname }}</h3>
          <v-card style="border-radius:11px 11px 0px 0px; ">
            <v-img
              style="height:300px;"
              class="white--text align-end"
              v-bind:src="pname.img"
            >
            </v-img>
            <v-card-text class="text--primary">
              <p style="width:fit-content; margin:0 auto;">
                {{ pname.tagline }}
              </p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="6" style="position:relative">
          <div class="infoSection">
            <div>
              <p class="pwebsite">{{pname.website}}</p>
              <a class="pwebsitelink"
                style="color:#2496FF"
                :href="pname.websitelink"
                target="_blank"
                >{{pname.websitelink}}</a
              >
            </div>
            <div v-if="pname.categories">
              <p class="pcat">Category:</p>
              <p class="pcatlist">{{pname.categories}}</p>
            </div>
           
            <div v-if="pname.tags">
              <p class="ptags">Tags:</p>
              <p class="ptaglist">{{pname.tags.join(', ')}}</p>
            </div>
            <div>
              <p class="pshare">Share:</p>
              <a 
              class="psharelink"
                href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2Fdecabits%2F&amp;src=sdkpreparse"
                target="_blank"
                ><i class="fab fa-facebook"></i
              ></a>
              <a
              class="psharelink"
                href="https://twitter.com/intent/tweet?text=Checkout this awesome development tool-Logo Maker- at https://labs.decabits.com/"
                target="_blank"
                ><i class="fa fa-twitter"></i
              ></a>
              <a
              class="psharelink"
                href="https://api.whatsapp.com/send?phone=+91999925147&text=Checkout this awesome development tool-Logo Maker- at https://labs.decabits.com/"
                target="_blank"
                ><i style="color:#4FCE5D" class="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </v-col>
      </v-row>
    </b-container>
    <div v-if="pname.description">
      <p class="desc">Project Description</p>
      <template v-if="pname.description.mainImage">
        <v-img       
          :src="pname.description.mainImage"
          style="height:60%; width:60%; margin:0 auto; "
        ></v-img>
      </template>

      <template  v-if="pname.description.paragraphs.length">
        <p  class="content" v-for="p in pname.description.paragraphs" :key="p">
          {{p}}
        </p>
      </template>
      
      <div style="height:100px;"></div>

      <template  v-if="pname.description.steps.length">
        <div v-for="(s, i) in pname.description.steps" :key="i">
          <p style="margin-left:15%; font-weight:bold;">Step {{i + 1}} :</p>
          <template v-if="s.image">
            <v-img       
              eager="true"
              :src="s.image"
              style="height:60%; width:60%; margin:0 auto; border: 3px solid #999999" 
            ></v-img>
          </template>
        </div>       
      </template>
     
      <p class="content" style="margin:16px auto; text-align:center; ">
        Feel free to give your suggestions or feedback in the following link or
        mail us at <a href="info@decabits.com">info@decabits.com</a>
      </p>
    </div>
  </div>
</template>

<script>
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Roboto|Roboto+Slab&display=swap");
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding:wght@400;700&display=swap");
.comments {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-size: 38px;
  font-weight: light;
  margin-top: 50px;
  margin-left: 128px;
  width: 90%;
  color: #333333;
}
.desc {
  font-style: normal;
  font-size: 38px;
  font-weight: bold;
  margin-top: 50px;
  margin-left: 100px;
  width: 90%;
  color: #333333;
  font-family: "Roboto Slab", "Helvetica Neue", Helvetica, Arial, sans-serif;
}
.headingPr {
  color: #333333;
  font-size: 40px;
  font-weight: bold;
  font-family: "Roboto Slab", "Helvetica Neue", Helvetica, Arial, sans-serif;
}
.rate {
  color: #333333;
  position: absolute;
  width: 652px;
  height: 122px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 66px;
}
.content {
  font-family: "Roboto Slab", "Helvetica Neue", Helvetica, Arial, sans-serif;
  margin: 0 auto;
  width: 85%;
  font-size: 18px;
  font-style: normal;
  color: #555555;
  font-weight: lighter;
}

.infoSection {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.infoSection div {
  display: flex;
  font-family: "Roboto Slab", "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #999999;
  font-size: 1.3vw;
}
.infoSection div p:first-child {
  color: black;
}

.infoSection p {
  margin: 0 4px;
}

.fab {
  margin: 0 4px;
}

.v-image__image {
  background-size: contain !important;
}
@media only screen and (max-width: 400px){
  .pwebsite, .pwebsitelink , .pcat, .pcatlist, .ptags, .ptaglist, .pshare, .psharelink{
    font-size:4vw;
  }
  .infoSection{
    display:flex;
    flex-direction:column;  
    margin-top:40px;
    justify-content:center;
    margin-left:47px;
    margin-bottom:20px;
  }
  .desc{
    margin-top: 110px;
    text-align: justify;
  }

  }

</style>
<script>
import Cards from "./Cards";
export default {
  components: {
    Cards,
  },
  data: () => ({
    review: ["Good", "Awesome", "Loved it", "Not Good"],
    comment: "",
  }),
  props: {
    pname: Object,
    stringProp: String,
    title: String,
  },
  methods: {
    vclick() {
      console.log(this.props);
    },
  },
};

</script>
