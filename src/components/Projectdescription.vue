<template>
  <div class="project">
    <b-container fluid style="margin-top:50px; width:90%;">
      <v-row>
        <v-col cols="6">
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
                {{ pname.description }}
              </p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="6" style="position:relative">
          <div class="infoSection">
            <div>
              <p>Website:</p>
              <a
                style="color:#2496FF"
                v-bind:href="pname.url"
                target="_blank"
                >{{ pname.url }}</a
              >
            </div>
            <div>
              <p>Category:</p>
              <p>{{ pname.category }}</p>
            </div>
            <div>
              <p>Tags:</p>
              <p>{{ pname.description_tags }}</p>
            </div>
            <div>
              <p>Share:</p>
              <a v-bind:href="pname.facebook_link" target="_blank"
                ><i class="fab fa-facebook"></i
              ></a>
              <a v-bind:href="pname.twitter_link" target="_blank"
                ><i class="fa fa-twitter"></i
              ></a>
              <a v-bind:href="pname.whatsapp_link" target="_blank"
                ><i style="color:#4FCE5D" class="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </v-col>
      </v-row>
    </b-container>
    <div>
      <p class="desc">Project Description</p>
      {{ pname.project_description }}
    </div>
  </div>
</template>

<script></script>
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
