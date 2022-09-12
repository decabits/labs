<template>
  <div class="home" id="Home">
    <v-app>
      <v-app-bar color="FFFFFF" fixed>
        <v-img
          style="margin-right:68%; cursor:pointer;"
          src="../assets/Labdecabits_logo.svg"
          max-height="60"
          contain
          position="none"
          class="icon"
          @click="logoopen()"
        >
        </v-img>
        <!-- <v-text-field
          style="border-radius:11px;"
          flat
          solo
          hide-details
          prepend-inner-icon="mdi-magnify"
          label="Search.."
          v-model="search"
          class="searchbox"
        /> -->
        <v-btn
          @click="showContact()"
          style="  max-width:150px; height:40px; margin: 0 20px 0 0 !important; font-size:16px;"
          class="ma-2 showcontact"
          dark
          small
          color="#070785"
          >Contact Us</v-btn
        >
      </v-app-bar>
      <v-content>
        <div class="bannerContainer" >
        <Banner v-on:bannerClicked="reachusbanner" />
        </div>
          <Textarea />
        <a
          href="#desc"
          v-smooth-scroll="{ duration: 1000 }"
          style="text-decoration:none;"
        >
          <Cards
            v-on:cardClicked="onchildClick"
            v-on:AllItems="storeData"
            :Itemfilter="cardData"
            v-on:AllTags="storeTags"
          />
        </a>
        <div id="desc" style="height:20px;"></div>
        <Projectdescription
          :pname="singleItem"
          style="display:none;"
          id="pdesc"
        />
        <comments style="display:none;" id="cmnt" />
      </v-content>
    </v-app>
    <router-view />
    <b-modal
      class="contactUS"
      ref="my-modal"
      size="md"
      centered
      hide-footer
      title="Contact Us !"
    >
      <div class="d-block text-center">
        <p>
          Want to discuss some work?<br />
          Just drop a message below or mail us at
          <a href="info@decabits.com">info@decabits.com</a>
        </p>
      </div>
      <form ref="form" @submit="submitData" class="contactModal">
        <div>
          <b-form-input
            id="your_name"
            v-model="form.name"
            placeholder="Name"
            style="width:100%;"
          ></b-form-input>
          <p class="validate">{{ errors.name }}</p>

          <b-form-input
            id="your_email"
            v-model="form.email"
            placeholder="  Email"
            style="width:100%;"
          ></b-form-input>
          <p class="validate">{{ errors.email }}</p>
          <b-form-input
            id="phone-input"
            v-model="form.phone"
            placeholder=" Phone No."
            style="width:100%;"
          ></b-form-input>
          <p class="validate">{{ errors.phone }}</p>
        </div>
        <div>
          <b-form-textarea
            id="message"
            v-model="form.message"
            placeholder="Your message..."
            rows="5"
            style="width:100%;"
          ></b-form-textarea>
          <p class="validate">{{ errors.message }}</p>
        </div>
        <b-button
          type="submit"
          style="margin:auto;display:flex"
          variant="primary"
          >Submit</b-button
        >
      </form>

      <div
        style="margin-top:20px;  width:100%; justify-content:center; display:flex"
      >
        <a href="https://www.linkedin.com/company/decabits/" target="_blank"
          ><i
            class="fab fa-linkedin fa-2x"
            style="margin:5px 5px; color: #0077B7"
          ></i
        ></a>
        <a href="https://github.com/decabits" target="_blank"
          ><i
            class="fab fa-github fa-2x"
            style="margin:5px 5px; color:black;"
          ></i
        ></a>
      </div>
    </b-modal>
    <v-snackbar v-model="snackbar">
      {{ text }}
      <v-btn color="pink" text @click="snackbar = false">
        Close
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import Banner from "./Banner";
import Textarea from "./Textarea";
import Cards from "./Cards";
import Projectdescription from "./Projectdescription";
import comments from "./comments";

import cardData from '../constants/cardData.js'

export default {
  name: "Home",
  components: {
    Banner,
    Textarea,
    Cards,
    Projectdescription,
    comments,
  },
  methods: {
    reachusbanner(value) {
      console.log("Helloooooooo = " + value);
      this.$refs["my-modal"].show();
    },
    logoopen() {
      window.open("https://labs.decabits.com/","_self");
    },
    Onchange(e) {
      console.log(e.target.value);
    },
    validEmail() {
      const text = this.form.email;
      let reg = /^\w+([.-/+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      if (reg.test(text)) {
        document.getElementById("your_email").style.borderColor = "green";
        return true;
      } else {
        this.errors.email = "Please enter valid email address";
        document.getElementById("your_email").style.borderColor = "red";
        return false;
      }
    },
    submitData(e) {
      e.preventDefault();

      if (this.form.name == "") {
        console.log("name empty");
        this.errors.name = "Name field is required!";
        document.getElementById("your_name").style.borderColor = "red";
      }
      if (this.form.email.toString() == "") {
        this.errors.email = "Email field is required!";
      } else {
        this.errors.email = "";
        document.getElementById("your_email").style.borderColor = "green";
      }
      if (this.form.phone.toString() == "") {
        this.errors.phone = "Phone field is required!";
        document.getElementById("phone-input").style.borderColor = "red";
      } else {
        this.errors.phone = "";
        document.getElementById("phone-input").style.borderColor = "green";
      }
      if (this.form.message.toString() == "") {
        this.errors.message = "Message field is required!";
        document.getElementById("message").style.borderColor = "red";
      } else {
        this.errors.message = "";
        document.getElementById("message").style.borderColor = "green";
      }

      if (
        this.errors.name == "" &&
        this.errors.email == "" &&
        this.errors.phone == "" &&
        this.errors.message == "" &&
        this.validEmail()
      ) {
        let newData = {
          your_name: this.form.name,
          contact_submitted: this.form.phone ? "yes" : "no",
          your_email: this.form.email,
          your_message: this.form.message + "\n" + this.form.phone,
        };
        this.axios
          .post("https://blog.entnetwrk.com/contact.php", newData, {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          })
          .then((res) => {
            this.snackbar = true;
            console.log(res.data);
          });
      }

      console.log(this.form);
    },
    showContact() {
      this.$refs["my-modal"].show();
    },

    onchildClick(value) {
      document.getElementById("pdesc").style.display = "";
      document.getElementById("cmnt").style.display = "";
      this.singleItem = value.item;
      console.log(this.singleItem);
    },
    storeData(e) {
      this.cardData = e;
    },
    storeTags(e) {
      this.tagData = e;
    },
  },

  data: () => ({
    errors: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    snackbar: false,
    text: "Message sent Successfully! ",
    search: "",
    tagData: [],
    cardData,
    singleItem: {
      pname: "",
      launchDate: "",
      img: "",
      description: "",
    },
    form: {
      name: "",
      email: "",
      message: "",
      phone: "",
    },
    drawer: false,
    // item: 1,
    items: [
      { icon: "mdi-home", route: "/", name: "home" },
      { icon: "mdi-account", name: "contactus" },
      { icon: "mdi-cogs", route: "/services", name: "services" },
    ],
  }),
  computed: {
    filteredItems: function() {
      return this.cardData.filter((d) => {
        return d.pname.toLowerCase().match(this.search.toLowerCase());
      });
    },
  },
};
</script>
<style>
.navdrawer {
  box-shadow: 2px 0px 4px rgba(78, 78, 78, 0.25);
  border-radius: 0px;
  border: 0;
}
.navicon {
  transform: rotate(90deg);
}
.searchbox {
  width: 324px;
  height: 50px;
  background: #fafafa;
}
.list {
  width: 70%;
  margin: 6px;
}
.icons {
  margin-left: 90%;
  margin-bottom: 18px;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
}

.icon {
  margin-right: 55% !important;
  height: 100%;
  width: fit-content;
}

.contactModal input {
  width: 60%;
  margin: 10px auto;
}
.contactModal textarea {
  width: 60%;
  margin: 12px auto;
}

.modal-header h5 {
  margin: 0 auto;
}

.close {
  position: absolute;
  right: 2%;
}
.validate {
  width: 60%;
  text-align: left;
  font-size: 10px;
  margin: 0 auto;
  color: red;
}
@media only screen and (max-width: 400px){
  .icon{
    position: relative;
  }
  .showcontact{
    position: absolute;
    top: 50%;
    left: 30% !important;
    transform: translate(50%,-50%);
  }
  .bannerContainer{
    height: 20vh;
  }
  .Parent{
    margin-bottom: 25px;
  }
}
</style>
