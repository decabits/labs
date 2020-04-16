<template>
  <div class="cards">
    <div id="skl" style="padding-top:70px;">
      <v-row>
        <v-col v-for="(item, i) in Itemfilter" :key="i" cols="6" sm="4">
          <v-skeleton-loader
            class="mx-auto"
            max-width="300"
            type="card,paragraph,button"
          ></v-skeleton-loader>
        </v-col>
      </v-row>
    </div>

    <b-container id="crd" style="display:none; width:90% " fluid>
      <v-row no-gutters>
        <v-col cols="6" sm="4" v-for="(item, i) in Itemfilter" :key="i">
          <v-hover v-slot:default="{ hover }" close-delay="200">
            <v-card
              :elevation="hover ? 16 : 2"
              :loading="loading"
              class="mx-auto my-12"
              max-width="374"
              style="border-radius:16px;"
              @click="reserve({ item })"
            >
              <v-img height="250" v-bind:src="item.img"> </v-img>
              <v-card-title>{{ item.pname }}</v-card-title>
              <v-card-text>
                <v-row align="center" class="mx-0">
                  <v-rating
                    :value="4"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  >
                  </v-rating>
                  <div class="grey--text ml-4">
                   <!-- ({{ item.numberOfPeopleRated }}) -->
                  </div>
                </v-row>
                <div style="font-weight:bold;">{{ item.description }}</div>
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
                <v-btn
                  style="border-radius:11px"
                  color="#2496FF"
                  dark
                  text
                  @click="reserve({ item })"
                >
                  Read More
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </b-container>
  </div>
</template>
<script>
import logomakerimage from "../assets/cardimage.svg";
export default {
  methods: {
    reserve: function({ item, i }) {
      this.$emit("cardClicked", { item, i });
    },
  },
  mounted() {
    setTimeout(() => {
      console.log("3s elapsed!");
      document.getElementById("crd").style.display == "none"
        ? (document.getElementById("crd").style.display = "")
        : null;
      document.getElementById("skl").style.display == ""
        ? (document.getElementById("skl").style.display = "none")
        : null;
    }, 3000),
      setTimeout(() => {
        this.$emit("AllItems", this.items);
      }, 0),
      setTimeout(() => {
        this.$emit("AllTags", this.items.tags);
      }, 0);
  },
  props: {
    Itemfilter: Array,
  },
  data() {
    return {
      items: [
        {
          img: logomakerimage,
          pname: "Logo Maker",
          rating: 4,
          numberOfPeopleRated: 143,
          description:
            "Make your own unique logo for free ",
          tags: ["Vue.js", "HTML", "CSS", "Fabric.js"],
          review: ["Good", "Awesome", "Loved it", "Not Good"],
        },
        //  ,{
        //    img: 'https://i.picsum.photos/id/111/300/300.jpg' ,
        //    pname: 'CAR',
        //    rating: 3,
        //    numberOfPeopleRated: 143,
        //    description : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed ',
        //    tags: ["vue", "css","html"]
        //    }
        //  ,{
        //     img: 'https://i.picsum.photos/id/239/300/300.jpg' ,
        //    pname: 'flower',
        //    rating: 2,
        //    numberOfPeopleRated: 143,
        //    description : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed ',
        //    tags: ["javascript", "css","kds"]
        //    }
        //   ,{
        //    img: 'https://i.picsum.photos/id/249/300/300.jpg' ,
        //    pname: 'Country',
        //    rating: 4,
        //    numberOfPeopleRated: 143,
        //    description : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed ',
        //    tags: ["sid", "android","html"]
        //   }
        //   ,{
        //    img: 'https://i.picsum.photos/id/219/300/300.jpg' ,
        //    pname: 'Tiger',
        //    rating: 1,
        //    numberOfPeopleRated: 143,
        //    description : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed ',
        //    tags: ["javascript", "css","ashesh"]
        //   }
        //   ,{
        //    img: 'https://i.picsum.photos/id/119/300/300.jpg' ,
        //    pname: 'Macbook',
        //    rating: 4,
        //    numberOfPeopleRated: 143,
        //    description :'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed ',
        //    tags: ["swift", "css","html"]
        //   }
      ],
    };
  },
};
</script>
<style>
.cards {
  margin-top: 420px;
}
</style>
