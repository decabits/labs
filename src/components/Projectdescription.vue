<template>
  <div class="project">
    <b-container fluid style="margin-top:50px; width:90%;">
      <v-row>
        <v-col cols="8">
          <h3 class="headingPr">{{ pname.pname }}</h3>
          <v-card style="border-radius:11px 11px 0px 0px;">
            <v-img
              style="
                height:400px;
                background-position:center;"
              class="white--text align-end"
              v-bind:src="pname.img"
            >
            </v-img>

            <v-card-text class="text--primary">
              <p>{{ pname.description }}</p>
            </v-card-text>
          </v-card></v-col
        >
        <v-col cols="4" style="padding-left:50px; margin-top:20px;">
          <!-- <v-select
            color="#2496FF"
            style="width: 394px;
                  height: 48px;
                  box-sizing: border-box;
                  border-radius: 6px;"
            :items="review"
            label="Quick Review"
            outlined
          >
          </v-select> -->

          <!-- <p
            style=" font-family: Roboto;
                   font-style: normal; 
                   font-size:32px; 
                   font-weight:light;
                   margin-top:10px; 
                   margin-bottom:0; 
                   color: #333333;"
          >
            Rate this Project :
          </p>
          <v-rating
            style=" margin:0;"
            v-model="rating"
            background-color="orange lighten-3"
            color="orange"
            large
          >
          </v-rating> -->
          <!-- <p
            style=" font-family: Roboto; 
                  font-style: normal;  
                  font-size:32px; 
                  font-weight:light; 
                   margin-top:10px; 
                   color: #333333;"
          >
            Give your Feedback:
          </p>
          <v-textarea
            solo
            name="input-7-4"
            label="Write your feedback here"
            style="width: 394px; "
          ></v-textarea> -->
          <!-- <v-btn
            rounded
            color="#2695FF"
            style="color:white; text-transform:capitalize; font-weight:normal;"
            >Submit</v-btn
          > -->
        </v-col>
        <!-- <v-col class="d-flex" cols="12" sm="6">
          <v-select
            :items="review"
            label="Outlined style"
            outlined
          ></v-select>
        </v-col> -->
        <!-- <v-col cols="8" class="text" style=" padding-right:25px;background-color:orange"><p style="">Project Title</p>
      <v-card 
        style="border-radius:11px; ">
        <v-img
         class="white--text align-end"
         height="400px"
         src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
        </v-img>

        <v-card-text class="text--primary">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </v-card-text>
        </v-card>
    </v-col> -->
        <!-- <v-col cols="4" style="position:relative; ">
        <v-select color="#2496FF" 
           style="width: 394px;
                  height: 48px;
                  box-sizing: border-box;
                  border-radius: 6px;"
                  :items="items"
                  label="Quick Review"
                  outlined>
        </v-select>
        <p style=" font-family: Roboto;
                   font-style: normal; 
                   font-size:32px; 
                   font-weight:light;
                   margin-top:10px; 
                   margin-bottom:0; 
                   color: #333333;">Rate this Project :</p>
      <v-rating style=" margin:0;"
         v-model="rating"
         background-color="orange lighten-3"
         color="orange"
         large
       >
       </v-rating>
       <p style=" font-family: Roboto; 
                  font-style: normal;  
                  font-size:32px; 
                  font-weight:light; 
                   margin-top:10px; 
                   color: #333333;">Give your Feedback:</p>
       <v-textarea
           solo
           name="input-7-4"
           label="Write your feedback here"
           style="width: 394px; "
          ></v-textarea>
        <v-btn rounded color="#2695FF" style="color:white; text-transform:capitalize; font-weight:normal;">Submit</v-btn>
        </v-col> -->
      </v-row>
    </b-container>
    <div>
      <p class="desc">Project Description & Setup</p>
      <p class="content">
        Our foremost project at labs decabits is created with a vision to help
        other startups to flourish & grow with minimal investment. To begin
        with, we want to provide our customers with utmost convenience.
      </p>
      <p class="content">
        Any consumer who wants to explore & design logomakes can begin with
        selecting/outlining a company name followed by picking fonts & case. The
        next step for creating the perfect trademark is connecting symbolic
        shades & colors to it. Move further by determining & specifying
        meaningful icons for a pleasing layout.
      </p>
      <p class="content">
        Our high tech team of designers & developers have collaborated to
        fabricate the flawless logomakes. With frontend technology like Vue.JS,
        HTML & CSS- the project was set up & completed with precision & fruitful
        results. Apart from the basic technologies & coding, a very special part
        & copart of this project is contributed by an inbuilt canvas library
        called Fabric.JS. A powerful & simple library to build SVGs. With an
        easy yet robust tech stack, Labs.decabits delivered its very first open
        source tool for going live.
      </p>
      <p class="content">
        A noteworthy detail & feature makes its free download service of the
        logos, in all formats like PNG, JPEG & SVG (With or without background)
      </p>
      <p class="content">
        Any logo the consumer may create will directly be saved in the
        galleries, even if you are halfway through. Once you want to get back to
        the design, with a single click the consumer will be redirected to an
        editable file for making the needful alterations.
      </p>
      <p style="margin-left:10%; font-weight:bold;"> Step 1 :</p>
      <v-img src='../assets/gif1.gif' style="height:60%; width:60%; margin-left:20%; margin-top:10%;"></v-img>
      <p style="margin-left:10%;  font-weight:bold;"> Step 2 :</p>
      <v-img src='../assets/gif2.gif' style="height:60%; width:60%; margin-left:20%;  margin-top:10%;"></v-img>
      <p style="margin-left:10%;  font-weight:bold;"> Step 3 :</p>
      <v-img src='../assets/gif3.gif' style="height:60%; width:60%; margin-left:20%;  margin-top:10%;"></v-img>
      
      <p class="content">
        Feel free to give your suggestions or feedback in the following link or
        mail us at <a href="info@decabits.com">info@decabits.com</a>
      </p>
    </div>
    <!-- <p  @click="onChange" class="comments">Comments</p>
        <v-col cols="12" style="width:85%; margin:0 auto; " >
        <v-textarea id="commentVAL" style="border-radius:16px;"
          solo
          name="input-7-4"
          label="Write your comment here"
        ></v-textarea>
            <v-btn  @click="showContact()" rounded color="#2496FF" dark style="width:130px; border-radius:16px;">Submit</v-btn>
        <hr/>

      </v-col> -->
  </div>
</template>

<script>

// export default {
//   // methods: {
//   //    showContact(){
//   //      console.log("hello");
//   //   },
//   //  },

//   data: () => ({
//     // review: ["Good", "Awesome", "Loved it", "Not Good"],
//     comment: "",
//   }),
// };
//
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
  font-weight: light;
  margin-top: 50px;
  margin-left: 128px;
  width: 90%;
  color: #333333;
}
.headingPr {
  color: #333333;
  font-family: "Roboto", sans-serif;
  font-size: 40px;
}

/* .theme--light.v-label {
  color:red
}
.theme--light.v-icon{
  color:red
}
.theme--light.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state)>.v-input__control>.v-input__slot fieldset{
  color:red
} */
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
  font-family: "Roboto";
  margin-top: 50px;
  margin-left: 128px;
  width: 85%;
}
/* .project{
    margin-top:900px;
} */
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
