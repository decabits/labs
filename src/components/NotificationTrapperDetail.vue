<template>
  <div>
    <Header id="header" />
    <button class="back-btn" @click="closeWindow();" > Back </button>
    <section>
    <div id="headerContainer2" class="mobile-hide">
      <div id="innrContainer">
         <section>
          <div>
            <h4 class="descriptionHeading">
              Decabits Lab
            </h4>
          </div>
          <div>
            <h1 class="descriptionSubHeading">
              Notification <br />
              Trapper
            </h1>
          </div>
          <div class="hero-content">
            Notification Trapper by Decabits, is a self-curated tool by this startup based in New Delhi 
            focussing to provide an easy to use tool for testing SMS/email before sending out the real text message.
          </div>
        </section>
      </div>
    </div>    
    </section>
    <div id="headerContainer2" class="no-bg-img">
      <div id="innrContainer">
         <section>
          <div>
            <h4 class="descriptionHeading">
              Decabits Lab
            </h4>
          </div>
          <div>
            <h1 class="descriptionSubHeading">
              Notification <br />
              Trapper
            </h1>
          </div>
          <div class="hero-content">
            Notification Trapper by Decabits, is a self-curated tool by this startup based in New Delhi 
            focussing to provide an easy to use tool for testing SMS/email before sending out the real text message.
          </div>
        </section>      
      </div>
    </div>

    <div class="row project">
      <div class="col-lg-7">
        <ProjectDescriptionNew
          :pname="cardData[1]"
          id="showLogoMaker"
        />
      </div>
      <div class="col-lg-5 project-right1">
        <v-img src="../assets/notificationTrapper.jpg"
          contain
          class="project_img"
        >
        </v-img>
      </div>
    </div>
    <Footer id="footer" />
  </div>
</template>

<script>
import ProjectDescriptionNew from "./ProjectDescriptionNew";
import Header from "./Header";
import Footer from "./Footer";
import cardData from "../constants/cardData.js";
export default {
  name: "Home1",
  components: {
    ProjectDescriptionNew,
    Header,
    Footer,
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
    closeWindow: function () {		
			window.close();	
    },
  },

};
</script>

<style>
  .back-btn {
    padding: 4px 40px; 
    border: 1px solid #aaa; 
    margin-left: 5.25vw;
    margin-top: 4rem;
    font-size: 1.25rem;
  }
  #headerContainer2 {
    background-image: url("../assets/notificationTrapper.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #000a;
    background-blend-mode: darken;
    background-position-y: -140px;
    color: #ffff;
    margin-left: 5.25vw;
    margin-right: 5.25vw;
    margin-top: 40px;
  }
  .no-bg-img {
    display: none;
  }
  .project {
    padding-left: 5.25vw;
    padding-right: 5.25vw;
    padding-top: 4.25rem;
    margin-bottom: 2rem;
    display: flex;
  }
  #headerContainer2 #innrContainer {
    padding-top: 110px;
    padding-bottom: 16rem;
    padding-left: 25px;
  }
  #headerContainer2 .descriptionHeading {
    font-size: 1.25rem;
    font-weight: 400;
  }
  #headerContainer2 .descriptionSubHeading {
    line-height: 4rem;
    font-weight: 400;
    font-size: 2.75rem;
    margin-top: 20px;
  }
  #headerContainer2 .hero-content {
    color: #fff; 
    max-width: 49ch;
    padding-top: 1.5rem;
    font-size: 0.97rem;
  }
  .project-right1 {
    display: flex;
    flex-direction: column;
  }
  .project-right1 .project_img {
    width: 100%;
    align-self: center;
  }

  @media only screen and (max-width: 1200px) {
    .back-btn {
      padding: 3.75px 35px;
      margin-top: 2rem;
      font-size: 1.1rem;
    }
    #headerContainer2 {
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      /* background-position-y: -100px; */
    }
    #headerContainer2 #innrContainer {
      padding-top: 100px;
      padding-bottom: 16.5rem;
      padding-left: 25px;
    }
    #headerContainer2 .descriptionHeading {
      font-size: 1.15rem;
      font-weight: 400;
    }
    #headerContainer2 .descriptionSubHeading {
      font-weight: 400;
      font-size: 3vw;
      line-height: 4vw;
    }
  }

  @media only screen and (max-width: 992px) {
    .back-btn {
      padding: 3.5px 30px;
      margin-top: 2rem;
      font-size: 1.05rem;
    }
    #headerContainer2 {
      background-repeat: no-repeat;
      background-size: cover;
    }
    #headerContainer2 #innrContainer {
      padding-top: 95px;
      padding-bottom: 5.5rem;
      padding-left: 20px;
    }

    #headerContainer2 .descriptionHeading {
      font-size: 1.15rem;
      font-weight: 400;
    }
    #headerContainer2 .descriptionSubHeading {
      font-weight: 400;
      font-size: 1.65rem;
      line-height: 1.3;
      margin-top: 15px;
    }
    .project-right1 .project_img {
      width: 80%;
    }
  }
  @media only screen and (max-width: 480px) {
    .back-btn {
      padding: 3px 30px;
      margin-top: 2rem;
      font-size: 1rem;
    }
    .content {
      font-size: 0.85rem;
    }

    #headerContainer2 #headerContainer2 {
      background-position-x: right;
      background-position-y: top;
    }

    #headerContainer2 #innrContainer {
      padding-top: 95px;
      padding-bottom: 7.5rem;
      padding-left: 25px;
    }

    #headerContainer2 .descriptionHeading {
      font-size: 1.15rem;
      font-weight: 400;
    }

    #descriptionContainer {
      background-color: #000;
    }

    #headerContainer2 .descriptionSubHeading {
      font-weight: 400;
      font-size: 1.65rem;
      line-height: 1.3;
      margin-top: 25px;
    }
    #headerContainer2 .hero-content {
      /* max-width: 35ch; */
      max-width: 100%;
    }
    .project-right1 .project_img {
      width: 80%;
    }
    .no-bg-img {
      display: block;
    }
    .mobile-hide #innrContainer section {
      display: none;
    }
    .project {
      padding-top: 10px;
    }
  }
  .no-bg-img {
    background-image: none !important;
    margin: 0 !important;
    margin-top: 2rem !important;
  }

  .no-bg-img #innrContainer {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
</style>
