<template>
  <div>
    <Header id="header" />
    <button class="back-btn" @click="closeWindow();" > Back </button>
    <div>
      <div id="headerContainer1">
        <div id="innrContainer">
          <div>
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
            <v-card-subtitle class="start-now-btn">
              <a href="https://logomaker.decabits.com/" target="blank">Start Now</a>
            </v-card-subtitle>
            <v-card-subtitle class="hero-content">
              If you're on our website, you're in exactly the right place! We create logos using Logo Maker to build your
              brand identity even if you are a small business or consumer.
            </v-card-subtitle>
          </div>      
        </div>
      </div>
    </div>

    <div class="row project">
      <div class="col-lg-7">
        <ProjectDescriptionNew
          :pname="cardData[0]"
          id="showLogoMaker"
        />
      </div>
      <div class="col-lg-5 project-right">
        <img src="../assets/gif1.gif"
          contain
          class="project_img project_img1"
        >
        <img src="../assets/gif2.gif"
          contain
          class="project_img project_img2"
        >
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
  #headerContainer1 {
    background-image: url("../assets/foldShirt.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #0005;
    background-blend-mode: darken;
    background-position-y: -150px;
    color: #ffff;
    margin-left: 5.25vw;
    margin-right: 5.25vw;
    margin-top:40px;
  }
  .project {
    padding-left: 5.25vw;
    padding-right: 5.25vw;
    padding-top: 4.25rem;
    margin-bottom: 2rem;
  }
  #innrContainer {
    padding: 75px 0 0px 20px;
  }
  .descriptionHeading {
    font-size: 1.25rem;
    font-weight: 400;
  }
  .descriptionSubHeading {
    line-height: 4rem;
    font-weight: 400;
    font-size: 2.75rem;
    margin-top: -30px;
  }
  .start-now-btn {
    color: #fff; 
    margin-top: -45px;
  }
  .start-now-btn a {
    padding: 8px 0px;
    display: flex;
    max-width: 220px;
    justify-content: center;
    font-size: 1.2rem;
    background-color: #0000;
    border: 1px solid #fff;
    border-style: inset;
    color: #fff;
    text-decoration: none;
  }
  .start-now-btn a:hover {
    color: #fff;
    text-decoration: none;
    border: 2px solid #fff;
  }
  #headerContainer1 .hero-content {
    color: #fff; 
    max-width: 53ch;
    padding-bottom: 6rem;
    font-size: 0.9rem;
  }
  .project-right {
    display: flex;
    flex-direction: column;
    padding-top: 15%;
  }
  .project_img {
    width: 80%;
    /* border-radius: 1rem; */
  }
  .project_img1 {
    align-self: flex-start;
    /* margin-top: 3rem; */
  }
  .project_img2 {
    align-self: flex-end;
    margin-top: 10%;
  }

  @media only screen and (max-width: 1200px) {
    .back-btn {
      padding: 3.75px 35px;
      margin-top: 2rem;
      font-size: 1.1rem;
    }
    #headerContainer1 {
      background-repeat: no-repeat;
      background-size: cover;
      color: #ffff;
      background-position: center;
    }
    #innrContainer {
      padding: 80px 0 30px 20px;
    }
    .descriptionHeading {
      font-size: 1.15rem;
      font-weight: 400;
    }
    #innrContainer {
      padding: 80px 0 30px 15px;
    }
    .descriptionSubHeading {
      font-weight: 400;
      font-size: 3vw;
      line-height: 4vw;
    }
    .project-right {
      padding-top: 15%;
    }
    .project_img {
      width: 90%;
    }
    .project_img1 {
      align-self: flex-start;
      margin-top: 3rem;
    }
  }

  @media only screen and (max-width: 992px) {
    .back-btn {
      padding: 3.5px 30px;
      margin-top: 2rem;
      font-size: 1.05rem;
    }
    #headerContainer1 {
      background-repeat: no-repeat;
      background-size: cover;
      color: #ffff;
    }
    .descriptionHeading {
      font-size: 1.15rem;
      font-weight: 400;
    }
    .descriptionSubHeading {
      font-weight: 400;
      font-size: 1.65rem;
      line-height: 1.3;
    }
    .project-right {
      padding-top: 3.5%;
    }
    .project_img1 {
      margin-top: 1rem;
    }
  }
  @media only screen and (max-width: 420px) {
    .back-btn {
      padding: 3px 30px;
      margin-top: 2rem;
      font-size: 1rem;
    }
    #headerContainer1 {
      background-repeat: no-repeat;
      background-size: cover;
      color: #ffff;
    }
    #innrContainer {
      padding: 80px 0 30px 10px;
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
    .project-right {
      padding-top: 0;
    }
    .project_img1 {
      margin-top: 1rem;
    }
  }
</style>
