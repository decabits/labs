<template>
  <div>
    <div class="topnav">
      <img src="../assets/Labdecabits_logo.svg" id="labsLogo" />
      <a
        style="  max-width:250px; height:30px; margin: 0 20px 0 0 !important;
      color:#000;
      align-self: center;
    font-size:100%;
    font-weight:400;
    border: 1px solid #000;
    padding: 0 4%;
    border-style:inset;
    cursor:pointer;
    text-decoration:none;
      "
        href="#contactus"
      >
        Contact Us
      </a>
    </div>
    <section>
    <div id="headerContainer">
      <video autoplay muted loop id="bgVideo">
        <source src="../assets/matrix_bg.mp4" type="video/mp4" />
      </video>
      <div id="innrContainer">
        <h6 style="font-size:1.15rem; font-weight: 200;">Decabits Software</h6>
        <div id="divider1"></div>
        <div style="margin-top: 30px; margin-bottom: 30px">
          <h3 id="welcomeTxt">Welcome to</h3>
          <h3 id="welcomeTxt1">
            Lab Decabits
          </h3>
          <br />
          <p id="headerPara">
            Your self designed laboratory to create richly detailed, open-source & effective tools. Brainstorming,
            finding ideas & experimenting with the latest tech stack is now a click away. Quench your knowledge thirst
            in 3,2,1! tab to click
          </p>
          <br />
          <a class="learnMoreBtn" href="#logoMakerSectionContainer">Learn More</a>
        </div>
      </div>
    </div>    
    </section>
    <section id="logoMakerSectionContainer">
      <v-card class="mx-auto logoMakerSection">
        <v-img src="../assets/foldShirt.jpg" class="bannerImages"></v-img>
        <section class="logoMakerSectionRight">
          <v-card-title>
            <h4 class="descriptionHeading">
              Decabits LogoMaker
            </h4>
          </v-card-title>
          <v-card-title>
            <h1 class="descriptionSubHeading">
              Logos that fits <br />
              everywhere!
            </h1>
          </v-card-title>
          <br />
          <v-card-subtitle style="color: #fff; margin-top:-25px">
            <a id="startNowBtn" href="https://logomaker.decabits.com/" target="blank">Start Now</a>
            <br />
          </v-card-subtitle>
          <v-card-subtitle style="color: #fff;">
            If you're on our website, you're in exactly the right place! We create logos using Logo Maker to build your
            brand identity even if you are a small business or consumer.
            <br />
            <br />
            <!-- <v-btn style="color: #fff; text-decoration: underline; font-size: 16px;" icon @click="showFields(showLogoMaker, showNotification,'showLogoMaker', 'showNotification')"> -->
            <a
              style="color: white; text-decoration: underline;font-weight: 700;"
              href="#showLogoMaker"
              @click="showFields(showLogoMaker, showNotification, 'showLogoMaker', 'showNotification')"
              >Learn More</a
            >
            <!-- </v-btn> -->
          </v-card-subtitle>
        </section>
      </v-card>
    </section>
    <section id="notificationSectionContainer">
      <v-card class="mx-auto notificationSection ">
        <section class="notificationSectionLeft">
          <v-card-title>
            <h4 style="font-weight: 400;">
              Decabits Lab
            </h4>
          </v-card-title>
          <v-card-title>
            <h1 class="descriptionSubHeading">
              Notification <br />
              Trapper
            </h1>
          </v-card-title>
          <br />
          <v-card-subtitle style="color: #fff; margin-top:-25px">
            <a id="startNowBtn" href="http://notification-trapper.herokuapp.com/" target="blank">Start Now</a>
            <br />
          </v-card-subtitle>

          <v-card-subtitle style="color: #fff; ">
            Notification Trapper by Decabits, is a self-curated tool by this startup based in New Delhi focussing to
            provide an easy to use tool for testing SMS/email before sending out the real text message.
            <br />
            <br />
            <!-- <v-btn style="color: #fff; text-decoration: underline; font-size: 16px;" icon @click="showFields(showNotification, showLogoMaker, 'showNotification', 'showLogoMaker')"> -->
            <a
              style="color: white; text-decoration: underline;font-weight: 700; padding-top:20px;"
              href="#showNotification"
              @click="showFields(showNotification, showLogoMaker, 'showNotification', 'showLogoMaker')"
              >Learn More</a
            >
            <!-- </v-btn> -->
          </v-card-subtitle>
        </section>
        <v-img src="../assets/notificationTrapper.jpg" class="bannerImages"></v-img>
      </v-card>
    </section>
    <br />
    <br />
    <div id="descriptionContainer" style="background-color: #000">
      <Projectdescription
        :pname="cardData[0]"
        style="display:none; background-color: #0000 !important"
        id="showLogoMaker"
      />
      <Projectdescription
        :pname="cardData[1]"
        style="display:none; background-color: #0000 !important"
        id="showNotification"
      />
    </div>
    <section id="contactus">
      <h3 class="contHead">You deserve the <span style="color: red;">best.</span></h3>
      <v-card class="mx-auto" max-width="700" height="auto" style="background-color: #0A0A0A; color: #fff">
        <v-card-title class="p-4" style="font-size: 1.60rem;font-weight: 400; display: flex; justify-content: center;">
          Contact Us
          <br />
        </v-card-title>
        <v-card-subtitle style="color: #fff; display: flex; justify-content: center; padding-bottom:0; ">
          Want to discuss some work?
        </v-card-subtitle>
        <v-card-subtitle class="w-100" style="color: #fff;display:flex; justify-content: center; padding:0; ">
          Just drop a message below or mail us at
        </v-card-subtitle>
        <a href="https://info@decabits.com" target="blank" style="display:flex; justify-content: space-evenly"
          >info@decabits.com
        </a>

        <section>
          <br />
          <v-form ref="form" @submit="submitData">
            <v-container>
              <v-row justify="center" class="p-sm-4">
                <v-col cols="12" md="6">
                  <v-text-field solo dense  placeholder="Name" class="contInput" v-model="form.name" required></v-text-field>
                  <p class="validate">{{ errors.name }}</p>
                  <v-text-field solo dense placeholder="Email" class="contInput" v-model="form.email" required></v-text-field>
                  <p class="validate">{{ errors.email }}</p>
                  <v-text-field solo dense placeholder="Phone No.." class="contInput" v-model="form.phone" required></v-text-field>
                  <p class="validate">{{ errors.phone }}</p>
                </v-col>

                <v-col cols="12" md="6">
                  <v-textarea
                    solo dense
                    row="6"
                    placeholder="Write your message..."
                    class="contInputArea"
                    v-model="form.message"
                    required
                  ></v-textarea>
                  <p class="validate">{{ errors.message }}</p>
                </v-col>
              </v-row>
              <b-spinner v-bind:style="loading ?'margin:auto;display:flex':'display: none'" label="Spinning" ></b-spinner>
              <b-button type="submit" v-bind:style="loading ?'display: none':'margin:auto;display:flex'" variant="primary" >
                Submit
              </b-button>
            </v-container>
          </v-form>
        </section>
      </v-card>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import Projectdescription from "./Projectdescription";
import cardData from "../constants/cardData.js";
export default {
  name: "Home1",
  components: {
    Projectdescription,
  },
  data: () => ({
    showNotification: false,
    showLogoMaker: false,
    allowSpaces: false,
    loading: false,
    cardData,
    match: "Foobar",
    max: 0,
    model: "Foobar",
    errors: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    form: {
      name: "",
      email: "",
      message: "",
      phone: "",
    },
  }),
  methods: {
    showFields(e, previousE, currentClassName, prevClassName) {
      try {
        this.e = !e;
        this.previousE = !previousE;
        let preBlog = document.getElementById(prevClassName);
        preBlog.style.display = "none";
        let blog = document.getElementById(currentClassName);
        blog.style.display = "block";
      } catch (error) {
        window.console.log(error);
      }
    },
    validateField() {
      this.$refs.form.validate();
    },
    validEmail() {
      const text = this.form.email;
      let reg = /^\w+([.-/+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      if (reg.test(text)) {
        return true;
      } else {
        this.errors.email = "Please enter valid email address";
        return false;
      }
    },
    submitData(e) {
      e.preventDefault();
        this.loading = true;
      let newData = {};
      if (this.form.name == "") {
        this.errors.name = "Name field is required!";
        this.loading = false;
      }else{
        this.errors.name = ""
      }
      if (this.form.email.toString() == "") {
        this.errors.email = "Email field is required!";
        this.loading = false;
      } else {
        this.errors.email = "";
      }
      if (this.form.phone.toString() == "") {
        this.errors.phone = "Phone field is required!";
        this.loading = false;
      } else {
        this.errors.phone = "";
      }
      if (this.form.message.toString() == "") {
        this.errors.message = "Message field is required!";
        this.loading = false;
      } else {
        this.errors.message = "";
      }
      if (
        this.errors.name == "" &&
        this.errors.email == "" &&
        this.errors.phone == "" &&
        this.errors.message == "" &&
        this.validEmail()
      ) {
        newData = {
          subject:
            "Website Contact Form: " + `${this.form.name.charAt(0).toUpperCase() + this.form.name.toString().slice(1)}`,
          text: `You have received a new message from DecabitsLab .\n\nHere are the details:\n\nName: ${this.form.name
            .charAt(0)
            .toUpperCase() + this.form.name.toString().slice(1)}\n\nMobile: ${this.form.phone}\n\nEmail: ${
            this.form.email
          }\n\nMessage:\n${this.form.message}`,
          to: "info@decabits.com",
          from: `"DecabitsLab" info@decabits.com`,
        };
        axios
          .post("https://db-node-mail-service.herokuapp.com/api/email", newData, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            this.snackbar = true;
            this.loading = false;
            this.form.name = ""
            this.form.email = ""
            this.form.phone = ""
            this.form.message = ""
            console.log(res.data);
          });
      }
    },
  },
  computed: {
    rules() {
      const rules = [];

      if (this.max) {
        const rule = (v) => (v || "").length <= this.max || `A maximum of ${this.max} characters is allowed`;

        rules.push(rule);
      }

      if (!this.allowSpaces) {
        const rule = (v) => (v || "").indexOf(" ") < 0 || "No spaces are allowed";

        rules.push(rule);
      }

      if (this.match) {
        const rule = (v) => (!!v && v) === this.match || "Values do not match";

        rules.push(rule);
      }

      return rules;
    },
  },

  watch: {
    match: "validateField",
    max: "validateField",
    model: "validateField",
  },
};
</script>

<style>
* {
  scroll-behavior: smooth !important;
  color: #fff;
  font-family: "Roboto Slab", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
}
.v-input input:focus, .v-input input:active  {
  outline: 1px solid #fff !important;
  box-shadow: none !important;
}
.v-input__slot {
  background-color: rgb(10, 10, 10) !important;
  padding: 0 !important;
}
#bgVideo {
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
  position: absolute;
  z-index: -1;
}
#descriptionContainer {
  background-color: #000;
}
.topnav {
  overflow: hidden;
  background-color: #fff;
  height: 70px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
}
#labsLogo {
  height: 100px;
  width: 150px;
  margin-left: 60px;
  margin-top: -8px;
}
#divider1 {
  width: 520px;
  background-color: #ffff;
  height: 0.8px;
}
#welcomeTxt {
  font-size: 2.95rem;
  font-weight: 300;
  margin: 0;
}
#welcomeTxt1 {
  font-size: 2.75rem;
  font-weight: bolder;
  color: #f53535;
  margin-top: 5px;
  display: inline;
  position: relative;
}
#welcomeTxt1::after {
  content: "";
  width: 7ch;
  border-bottom: 3px solid yellow;
  padding-bottom: 10px;
  height: 26px;
  position: absolute;
  bottom: -10%;
  right: 0;
}
.bannerImages {
  height: auto;
  flex-basis: 60%;
  background-color: #000;
  border-radius: 0 !important;
}
#headerPara {
  max-width: 480px;
  font-size: 1.05rem;
  margin-top: 50px;
  font-family: "Segoe UI", sans-serif;
}
#headerContainer {
  height: auto;
  width: 100%;
  min-height: 86vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #000d;
  color: #ffff;
}

#innrContainer {
  padding: 125px 0 0px 60px;
}

.descriptionHeading {
  font-size: 1.5rem;
  font-weight: 400;
}

.descriptionSubHeading {
  line-height: 4rem;
  font-weight: 400;
  font-size: 2.95rem;
  margin-top: -10px;
}

.learnMoreBtn {
  padding: 8px 65px;
  font-size: 1rem;
  background-color: #0000;
  border: 2px solid #fff;
  border-style: inset;
  color: #fff;
  text-decoration: none;
}
.learnMoreBtn:hover {
  text-decoration: none;
  color: #fff;
}

#logoMakerSectionContainer {
  background-color: #000;
  padding: 30px 60px;
}

#notificationSectionContainer {
  background-color: #000;
  padding: 30px 80px 30px 5px;
}

#startNowBtn {
  padding: 8px 0px;
  display: flex;
  max-width: 250px;
  justify-content: center;
  font-size: 1rem;
  background-color: #0000;
  border: 2px solid #fff;
  border-style: inset;
  color: #fff;
  text-decoration: none;
}

#contactus {
  background-color: #000;
  padding: 45px 55px;
  padding-bottom: 100px;
}

.logoMakerSection {
  display: flex;
  background-color: #000 !important;
  border: 0 !important;
}
.notificationSection {
  display: flex;
  background-color: #000 !important;
  border: 0 !important;
}
.logoMakerSectionRight {
  width: calc(100% - 540px) !important;
  padding: 30px 30px;
  background-color: #000;
  color: #fff;
  border-radius: 0 !important;
}
.notificationSectionLeft {
  width: calc(100% - 540px) !important;
  padding: 30px 30px;
  background-color: #000;
  color: #fff;
  border-radius: 0 !important;
}
.contInput {
  padding: 0;
}
.contInputArea,
.v-text-field {
  padding-top: 0 !important;
}
.v-text-field__slot > input,
textarea {
  color: #fff !important;
  padding: 5px;
  border: 1px solid #fff;
}
.v-text-field__slot > textarea {
  color: #fff !important;
  padding: 5px;
  border: 1px solid #fff;
  bottom: 50px;
}
.v-text-field__slot > input::placeholder,
textarea::placeholder {
  color: #9a9b9c !important;
}
.validate {
  width: 60%;
  text-align: left;
  font-size: 10px;
  margin: 0 auto;
  color: red;
}
.contHead {
  font-size: 3.05rem;
  color: #fff;
  font-weight: 400;
  text-align: center;
  margin-bottom: 50px;
}
@media only screen and (max-width: 1200px) {
  .topnav {
    overflow: hidden;
    background-color: #fff;
    height: 40px;
    display: flex;
    align-items: center;
  }
  #labsLogo {
    height: 30px;
    width: 100px;
    margin-left: 5px;
  }
  #divider1 {
    width: 60vw;
    background-color: #ffff;
    height: 0.8px;
  }
  #welcomeTxt {
    font-size: 1.25rem;
    font-weight: 300;
    margin: 0;
  }
  #welcomeTxt1 {
    font-size: 1.25rem;
    font-weight: bolder;
    color: #f53535;
    margin-top: 5px;
  }

  #welcomeTxt1::after {
    content: "";
    width: 100%;
    border-bottom: 3px solid yellow;
    padding-bottom: 10px;
    height: 26px;
    position: absolute;
    bottom: -10%;
    right: 0;
  }
  .bannerImages {
    height: auto;
    background-color: #000;
    border-radius: 0 !important;
    padding: 0 5%;
  }
  #headerPara {
    max-width: 90%;
    font-size: 0.85rem;
    margin-top: 10px;
    font-family: "Segoe UI", sans-serif;
  }

  #headerContainer {
    height: auto;
    width: 100%;
    min-height: 86vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #000d;
    color: #ffff;
  }

  #innrContainer {
    padding: 80px 0 30px 30px;
    /*background: rgb(0, 0, 0); /* Fallback color */
    /*background: rgba(0, 0, 0, 0.8); /* Black background with 0.5 opacity */
  }

  .descriptionHeading {
    font-size: 1.15rem;
    font-weight: 400;
  }

  #descriptionContainer {
    background-color: #000;
  }

  .descriptionSubHeading {
    font-weight: 400;
    font-size: 3vw;
    line-height: 4vw;
  }

  .learnMoreBtn {
    padding: 5px 35px;
    font-size: 0.85rem;
    background-color: #0000;
    border: 2px solid #fff;
    border-style: inset;
    color: #fff;
    text-decoration: none;
  }
  .learnMoreBtn:hover {
    text-decoration: none;
    color: #fff;
  }

  #logoMakerSectionContainer {
    background-color: #000;
    padding: 30px 20px;
    padding-top: 0;
  }
  #notificationSectionContainer {
    background-color: #000;
    padding: 30px 20px;
  }

  #startNowBtn {
    padding: 2px 0px;
    width: 150px;
    font-size: 1rem;
    background-color: #0000;
    border: 2px solid #fff;
    border-style: inset;
    color: #fff;
    text-decoration: none;
  }

  #contactus {
    background-color: #000;
    padding: 10px 15px;
    padding-bottom: 100px;
  }

  .logoMakerSection {
    display: flex;
    flex-direction: row;
    background-color: #000;
    border: 0 !important;
  }
  .notificationSection {
    display: flex;
    flex-direction: row;
    background-color: #000;
    border: 0 !important;
  }
  .logoMakerSectionRight {
    width: 90vw !important;
    padding: 30px 0px 0px 30px;
    align-self: center;
    background-color: #000;
    color: #fff;
    border-radius: 0 !important;
  }
  .notificationSectionLeft {
    width: 90vw !important;
    padding: 30px 0px;
    align-self: center;
    background-color: #000;
    color: #fff;
    border-radius: 0 !important;
  }
  .contInput {
    padding: 0;
  }
  .contInputArea,
  .v-text-field {
    padding-top: 0 !important;
  }
  .v-text-field__slot > input,
  textarea {
    color: #fff !important;
    padding: 5px;
    border: 1px solid #fff;
  }
  .v-text-field__slot > textarea {
    color: #fff !important;
    padding: 5px;
    border: 1px solid #fff;
    bottom: 50px;
  }
  .v-text-field__slot > input::placeholder,
  textarea::placeholder {
    color: #9a9b9c !important;
  }
  .validate {
    width: 60%;
    text-align: left;
    font-size: 10px;
    margin: 0 auto;
    color: red;
  }
  .v-responsive .bannerImages {
    padding: 0 15px;
    background-color: #000;
    border-radius: 0;
  }
  .contHead {
    font-size: 1.85rem;
    color: #fff;
    font-weight: 400;
    text-align: center;
    margin-top: 50px;
    margin-bottom: 30px;
  }
}

@media only screen and (max-width: 922px) {
  .topnav {
    overflow: hidden;
    background-color: #fff;
    height: 40px;
    display: flex;
    align-items: center;
  }
  #labsLogo {
    height: 30px;
    width: 100px;
    margin-left: 5px;
  }
  #divider1 {
    width: 60vw;
    background-color: #ffff;
    height: 0.8px;
  }
  #welcomeTxt {
    font-size: 1.25rem;
    font-weight: 300;
    margin: 0;
  }
  #welcomeTxt1 {
    font-size: 1.25rem;
    font-weight: bolder;
    color: #f53535;
    margin-top: 5px;
  }

  #welcomeTxt1::after {
    content: "";
    width: 100%;
    border-bottom: 3px solid yellow;
    padding-bottom: 10px;
    height: 26px;
    position: absolute;
    bottom: -10%;
    right: 0;
  }
  .bannerImages {
    height: auto;
    flex-basis: 100%;
    background-color: #000;
    border-radius: 0 !important;
    padding: 0 5%;
  }
  #headerPara {
    max-width: 90%;
    font-size: 0.85rem;
    margin-top: 10px;
  }
  .content {
    font-size: 0.85rem;
  }

  #headerContainer {
    height: auto;
    width: 100%;
    min-height: 60vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #000d;
    color: #ffff;
  }

  #innrContainer {
    padding: 80px 0 30px 30px;
    /*background: rgb(0, 0, 0); /* Fallback color */
    /*background: rgba(0, 0, 0, 0.8); /* Black background with 0.5 opacity */
  }

  .descriptionHeading {
    font-size: 1.15rem;
    font-weight: 400;
  }

  #descriptionContainer {
    background-color: #000;
  }

  .descriptionSubHeading {
    font-weight: 400;
    font-size: 1.65rem;
    line-height: 1.3;
  }

  .learnMoreBtn {
    padding: 5px 35px;
    font-size: 0.85rem;
    background-color: #0000;
    border: 2px solid #fff;
    border-style: inset;
    color: #fff;
    text-decoration: none;
  }
  .learnMoreBtn:hover {
    text-decoration: none;
    color: #fff;
  }

  #logoMakerSectionContainer {
    background-color: #000;
    padding: 30px 20px;
    padding-top: 0;
  }
  #notificationSectionContainer {
    background-color: #000;
    padding: 30px 20px;
  }

  #startNowBtn {
    padding: 2px 0px;
    width: 150px;
    font-size: 1rem;
    background-color: #0000;
    border: 2px solid #fff;
    border-style: inset;
    color: #fff;
    text-decoration: none;
  }

  #contactus {
    background-color: #000;
    padding: 10px 15px;
    padding-bottom: 100px;
  }

  .logoMakerSection {
    display: flex;
    flex-direction: column-reverse;
    background-color: #000;
    border: 0 !important;
  }
  .notificationSection {
    display: flex;
    flex-direction: column;
    background-color: #000;
    border: 0 !important;
  }
  .logoMakerSectionRight {
    width: 90vw !important;
    padding: 30px 0px;
    align-self: center;
    background-color: #000;
    color: #fff;
    border-radius: 0 !important;
  }
  .notificationSectionLeft {
    width: 90vw !important;
    padding: 30px 0px;
    align-self: center;
    background-color: #000;
    color: #fff;
    border-radius: 0 !important;
  }
  .contInput {
    padding: 0;
  }
  .contInputArea,
  .v-text-field {
    padding-top: 0 !important;
  }
  .v-text-field__slot > input,
  textarea {
    color: #fff !important;
    padding: 5px;
    border: 1px solid #fff;
  }
  .v-text-field__slot > textarea {
    color: #fff !important;
    padding: 5px;
    border: 1px solid #fff;
    bottom: 50px;
  }
  .v-text-field__slot > input::placeholder,
  textarea::placeholder {
    color: #9a9b9c !important;
  }
  .validate {
    width: 60%;
    text-align: left;
    font-size: 10px;
    margin: 0 auto;
    color: red;
  }
  .v-responsive .bannerImages {
    padding: 0 15px;
    background-color: #000;
    border-radius: 0;
  }
  .contHead {
    font-size: 1.85rem;
    color: #fff;
    font-weight: 400;
    text-align: center;
    margin-top: 0px;
    margin-bottom: 30px;
  }
  .container-fluid {
    margin-top:30vh !important;
  }
}
@media only screen and (max-width: 420px) {
  .topnav {
    overflow: hidden;
    background-color: #fff;
    height: 40px;
    display: flex;
    align-items: center;
  }
  #labsLogo {
    height: 30px;
    width: 100px;
    margin-left: 5px;
  }
  #divider1 {
    width: 60vw;
    background-color: #ffff;
    height: 0.8px;
  }
  #welcomeTxt {
    font-size: 1.25rem;
    font-weight: 300;
    margin: 0;
  }
  #welcomeTxt1 {
    font-size: 1.25rem;
    font-weight: bolder;
    color: #f53535;
    margin-top: 5px;
  }

  #welcomeTxt1::after {
    content: "";
    width: 100%;
    border-bottom: 3px solid yellow;
    padding-bottom: 10px;
    height: 26px;
    position: absolute;
    bottom: -10%;
    right: 0;
  }
  .bannerImages {
    height: auto;
    flex-basis: 100%;
    background-color: #000;
    border-radius: 0 !important;
    padding: 0 5%;
  }
  #headerPara {
    max-width: 90%;
    font-size: 0.85rem;
    margin-top: 10px;
  }
  .content {
    font-size: 0.85rem;
  }

  #headerContainer {
    height: auto;
    width: 100%;
    min-height: 86vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #000d;
    color: #ffff;
  }

  #innrContainer {
    padding: 80px 0 30px 30px;
    /*background: rgb(0, 0, 0); /* Fallback color */
    /*background: rgba(0, 0, 0, 0.8); /* Black background with 0.5 opacity */
  }

  .descriptionHeading {
    font-size: 1.15rem;
    font-weight: 400;
  }

  #descriptionContainer {
    background-color: #000;
  }

  .descriptionSubHeading {
    font-weight: 400;
    font-size: 1.65rem;
    line-height: 1.3;
  }

  .learnMoreBtn {
    padding: 5px 35px;
    font-size: 0.85rem;
    background-color: #0000;
    border: 2px solid #fff;
    border-style: inset;
    color: #fff;
    text-decoration: none;
  }
  .learnMoreBtn:hover {
    text-decoration: none;
    color: #fff;
  }

  #logoMakerSectionContainer {
    background-color: #000;
    padding: 30px 20px;
    padding-top: 0;
  }
  #notificationSectionContainer {
    background-color: #000;
    padding: 30px 20px;
  }

  #startNowBtn {
    padding: 2px 0px;
    width: 150px;
    font-size: 1rem;
    background-color: #0000;
    border: 2px solid #fff;
    border-style: inset;
    color: #fff;
    text-decoration: none;
  }

  #contactus {
    background-color: #000;
    padding: 10px 15px;
    padding-bottom: 100px;
  }

  .logoMakerSection {
    display: flex;
    flex-direction: column-reverse;
    background-color: #000;
    border: 0 !important;
  }
  .notificationSection {
    display: flex;
    flex-direction: column;
    background-color: #000;
    border: 0 !important;
  }
  .logoMakerSectionRight {
    width: 90vw !important;
    padding: 30px 0px;
    align-self: center;
    background-color: #000;
    color: #fff;
    border-radius: 0 !important;
  }
  .notificationSectionLeft {
    width: 90vw !important;
    padding: 30px 0px;
    align-self: center;
    background-color: #000;
    color: #fff;
    border-radius: 0 !important;
  }
  .contInput {
    padding: 0;
  }
  .contInputArea,
  .v-text-field {
    padding-top: 0 !important;
  }
  .v-text-field__slot > input,
  textarea {
    color: #fff !important;
    padding: 5px;
    border: 1px solid #fff;
  }
  .v-text-field__slot > textarea {
    color: #fff !important;
    padding: 5px;
    border: 1px solid #fff;
    bottom: 50px;
  }
  .v-text-field__slot > input::placeholder,
  textarea::placeholder {
    color: #9a9b9c !important;
  }
  .validate {
    width: 60%;
    text-align: left;
    font-size: 10px;
    margin: 0 auto;
    color: red;
  }
  .v-responsive .bannerImages {
    padding: 0 15px;
    background-color: #000;
    border-radius: 0;
  }
  .contHead {
    font-size: 1.85rem;
    color: #fff;
    font-weight: 400;
    text-align: center;
    margin-top: 0px;
    margin-bottom: 30px;
  }
  .container-fluid {
    margin-top:30vh !important;
  }
}
</style>
