<template>
  <div class="project">
    <div v-if="pname.description">
      <p class="desc">{{pname.pname}}</p>
      <template v-if="pname.description.mainImage">
        <v-img       
          :src="pname.description.mainImage"  
          class="descriptionImage"
        ></v-img>
      </template>

      <template  v-if="pname.description.paragraphs.length">
        <p  class="content" v-for="p in pname.description.paragraphs" :key="p">
          {{p}}
        </p>
      </template>
      
      <div style="height:50px;"></div>

      <template  v-if="pname.description.steps.length">
        <div v-for="(s, i) in pname.description.steps" :key="i">
          <!--<p style="margin-left:15%; font-weight:bold;">Step {{i + 1}} :</p>-->
          <template v-if="s.image">
            <v-img       
              eager="true"
              :src="s.image"
              class="descriptionImage"
            ></v-img>
          </template>
        </div>       
      </template>
     
      <p class="content" style="margin:16px auto; text-align:center; margin-bottom:30px; ">
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
body {
  background-color: #000 !important;
}
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
  margin-left: 100px;
  width: 90%;
  color: #fff;
  font-family: "Roboto Slab", "Helvetica Neue", Helvetica, Arial, sans-serif;
  margin-bottom: 4vh;
}
.descriptionImage {
  height:60%; 
  width:60%; 
  margin:0 auto; 
  margin-bottom:5vh !important;
}
.headingPr {
  /* color: #333333; */
  color: #fff;
  font-size: 40px;
  font-weight: bold;
  font-family: "Roboto Slab", "Helvetica Neue", Helvetica, Arial, sans-serif;
  margin-bottom: 4vh;
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
  font-size: 1.05rem;
  font-style: normal;
  /*color: #555555; */
  color: #fff;
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
  color: #fff;
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
.psharelink {
  height: 20px;
  width: 20px;
  margin: 2px 8px;
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
    margin-bottom:20px;
  }
  .infoSection {
  position: absolute;
  top: 50%;
  left: 45%;
  transform: translate(-50%, -50%);
}
  .desc{
    margin-left:0;
    text-align: justify;
    width: fit-content;
    font-size: 1.65rem;
    line-height: 1.3;
    display:flex;
    justify-content: space-evenly;
    width:100%;
  }
  .descriptionImage {
  height:60%; 
  width:80%; 
  margin:0 auto; 
  margin-bottom:5vh !important;
  background-color: #fff;
}
.headingPr {
  /* color: #333333; */
  color: #fff;
  font-size: 1.65rem;
  font-weight: 400;
  line-height:1.3;
  font-family: "Roboto Slab", "Helvetica Neue", Helvetica, Arial, sans-serif;
  margin-bottom: 4vh;
}
  .projectDescription{
    margin-top: -35px;
  }
.psharelink {
  height: 20px;
  width: 20px;
  margin: 2px 8px;

}

.content {
  font-family: "Roboto Slab", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.375rem;
}

.container-fluid {
    margin-top:0 !important;
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
