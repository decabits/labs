<template>
  <div class="home" id="Home">
    <v-app>
      <v-app-bar color="FFFFFF" fixed>
        <!-- <v-app-bar-nav-icon @click="drawer =! drawer"> </v-app-bar-nav-icon> -->
        <v-img
          src="../assets/decabitslogo.svg"
          max-height="60"
          contain
          class="icon"
        >
        </v-img>
        <v-text-field
          style="border-radius:11px;"
          flat
          solo-inverted
          hide-details
          prepend-inner-icon="mdi-magnify"
          label="Search.."
          v-model="search"
          class="hidden-sm-and-down searchbox"
        />
        <v-icon
          style="top: 14%;"
          nav
          min-width
          color="blue"
          light
          v-text="'fa-envelope-o'"
          class="icons"
          @click="showContact()"
        ></v-icon>
      </v-app-bar>
      <v-navigation-drawer
        v-model="drawer"
        app
        class="indogo navdrawer"
        color="#2496FF"
        width="80px"
      >
        <v-app-bar-nav-icon
          @click="drawer = !drawer"
          color="white"
          class="navicon mx-4 my-4"
        >
        </v-app-bar-nav-icon>
        <v-list class="list">
          <v-list-item-group v-model="item" color="primary">
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              router
              :to="item.route"
              @click="showContact(item.name)"
            >
              <v-list-item-icon>
                <v-icon
                  nav
                  min-width
                  color="white"
                  light
                  v-text="item.icon"
                  class="icons"
                ></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

      <v-content>
        <Banner />
        <Textarea />
        <a
          href="#desc"
          v-smooth-scroll="{ duration: 3000 }"
          style="text-decoration:none;"
        >
          <Cards
            v-on:cardClicked="onchildClick"
            v-on:AllItems="storeData"
            :Itemfilter="filteredItems"
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
            placeholder="  Name"
          ></b-form-input>
          <p class="validate">{{ errors.name }}</p>

          <b-form-input
            id="your_email"
            v-model="form.email"
            placeholder="  Email"
          ></b-form-input>
          <p class="validate">{{ errors.email }}</p>
          <b-form-input
            id="phone-input"
            v-model="form.phone"
            placeholder=" Phone No."
          ></b-form-input>
          <p class="validate">{{ errors.phone }}</p>
        </div>
        <div>
          <b-form-textarea
            id="message"
            v-model="form.message"
            placeholder="Your message..."
            rows="5"
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
    <!-- <div class="modal fade" ref="my-modal" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> -->
  </div>
</template>

<script>
import Banner from "./Banner";
import Textarea from "./Textarea";
import Cards from "./Cards";
import Projectdescription from "./Projectdescription";
import comments from "./comments";

export default {
  name: "Home",
  components: {
    Banner,
    Textarea,
    Cards,
    Projectdescription,
    comments
  },
  methods: {
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
          your_message: this.form.message + "\n" + this.form.phone
        };
        this.axios
          .post("http://blog.entnetwrk.com/contact.php", newData, {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          })
          .then(res => {
            this.snackbar = true;
            console.log(res.data);
          });
      }

      console.log(this.form);
    },
    // showContact(name){
    //    console.log(name);
    //   //  if(name == 'contactus'){
    //   //  this.$refs['my-modal'].show()
    //   //  }
    //   this.$refs['my-modal'].show()
    // },
    showContact() {
      this.$refs["my-modal"].show();
    },

    onchildClick(value) {
      document.getElementById("pdesc").style.display = "";
      document.getElementById("cmnt").style.display = "";
      console.log(this.singleItem);
      this.singleItem.pname = value.item.pname;
      this.singleItem.img = value.item.img;
      this.singleItem.description = value.item.description;
    },
    storeData(e) {
      this.cardData = e;
    },
    storeTags(e) {
      this.tagData = e;
    }
  },

  data: () => ({
    errors: {
      name: "",
      email: "",
      phone: "",
      message: ""
    },
    snackbar: false,
    text: "Message sent Successfully! ",
    search: "",
    tagData: [],
    cardData: [],
    singleItem: {
      pname: "",
      img: "",
      description: ""
    },
    form: {
      name: "",
      email: "",
      message: "",
      phone: ""
    },
    drawer: false,
    // item: 1,
    items: [
      { icon: "mdi-home", route: "/", name: "home" },
      { icon: "mdi-account", name: "contactus" },
      { icon: "mdi-cogs", route: "/services", name: "services" }
    ]
  }),
  computed: {
    filteredItems: function() {
      return this.cardData.filter(d => {
        // // for (var i = 0; i <d.tags.length; i++) {
        //   return d.tags[i].toLowerCase().match(this.search)
        // // }
        return d.pname.toLowerCase().match(this.search.toLowerCase());
      });
    }
  }
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
  /* position: absolute;
        left: 76.04%;
        right: 1.46%;
        top: 14.00%;
        bottom: 24.73%;  */
  position: absolute;
  width: 324px;
  height: 50px;
  right: 5%;
  top: 14%;
  background: #fafafa;
}
.list {
  width: 70%;
  margin: 6px;
}
.icons {
  margin-bottom: 20px;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
}

.contactModal input {
  /* margin-bottom:12px; */
  width: 60%;
  margin: 5px auto;
}
.contactModal textarea {
  /* margin-bottom:12px; */
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

/* .modal-backdrop {
   background-color: red;
}

.contactModal{
display: flex;
justify-content: space-around;
}

.contactModal input{
  margin-bottom:12px;
  border: none;
  border-bottom: 1px solid black;
  border-radius: 0;
  padding: 0;
  outline:none;
  box-shadow:none !important;
  width: 100%;
  transition: all 0.2s linear;
  margin: 0 auto;
}

.contactModal textarea{
  margin-top:12px;
  border: none;
  border-bottom: 1px solid black;
  border-radius: 0;
  padding: 0;
  outline:none;
   box-shadow:none !important;
  width: 100%;
  transition: all 0.2s linear;
  margin: 0 auto;
}

.contactModal textarea:focus{
  width: 140%;
  border-bottom: 1px solid black;
}

.contactModal input:focus{
  width: 140%;
  border-bottom: 1px solid black;
} */
.validate {
  width: 60%;
  text-align: left;
  font-size: 10px;
  margin: 0 auto;
  color: red;
}
</style>
