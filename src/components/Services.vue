<template>
    <div class="services">
        <v-app-bar
      color="FFFFFF"
      fixed
      >
      <v-app-bar-nav-icon @click="drawer =! drawer"> </v-app-bar-nav-icon>
      <v-img src="../assets/decabitslogo.svg"
        max-height="60"
        contain
        class=icon>
        </v-img>
        
        </v-app-bar>
        <v-navigation-drawer   v-model="drawer" app class="indogo navdrawer" color="#2496FF" width="80px"> 
        <v-app-bar-nav-icon @click="drawer =! drawer" color="white" class="navicon mx-4 my-4"> </v-app-bar-nav-icon>
          <v-list  class="list">
        <v-list-item-group v-model="item" color="primary">
          <v-list-item
            v-for="(item, i) in items"
            :key="i" router :to="item.route"
            @click="showContact(item.name)"
          >
            <v-list-item-icon>
              <v-icon nav min-width color="white" light v-text="item.icon" class=icons ></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-item-group>
      </v-list>
        </v-navigation-drawer>
        <b-modal  class="contactUS"  ref="my-modal" size="lg" centered hide-footer title="Contact Us !">
      <div class="d-block text-center">
        <p>Want to discuss some work? Just drop a message below</p>
      </div>
      <form action="https://formspree.io/xgezgyyw" ref="form" class="contactModal" method="POST">
        
        <div>
          <b-form-input 
            id="name-input"
            required 
            placeholder="  Name"
          ></b-form-input>
          <b-form-input
            id="email-input"
            v-model="email"
            required 
            placeholder="  Email"
          ></b-form-input>
          <b-form-input
            id="phone-input"
            v-model="name"
            required 
            placeholder=" Phone No."
          ></b-form-input>
        </div>
        <div>
        <b-form-textarea
      id="textarea"
      v-model="text"
      placeholder="Your message..."
      rows="5"
    ></b-form-textarea>
    </div>
      </form>
      <b-button class="mt-3 mx-auto" variant="primary">Submit</b-button>
    </b-modal>
  <div style="margin-top:100px;">
     <div class="container-fluid service" style="text-align:center;">
        <div class="row" style=" width:50%; text-align:center; margin:0 auto;">
            <div class="col-md-12">
                <h1>Services</h1>
                <p>We are a startup incubator and we strictly follow Agile and test driven development.</p>
            </div>
            
        </div>
    </div>
     <div class="container-fluid">
        <div class="row">
            <div class="col-md-4">
                <img src="../assets/webdevelopment.svg" class="column-image img-responsive" alt="Web Development">
                <h3 class="service-content">Web Development</h3>
                <p class="service-content">We develop Scalable Web Applications that can handle traffic of million
                    users, Cloud
                    based Web Apps on AWS/Google Services. We also provide Hosting on Cloud Based Solutions.</p>
            </div>
            <div class="col-md-4">
                <img src="../assets/webdesign.svg" class="column-image img-responsive" alt="Web Design">
                <h3 class="service-content">Web Designing</h3>
                <p class="service-content">Our Goal is to provide Simple and Smart Websites which are Easy To Navigate
                    and
                    Responsive in Nature. We use Atomic Design Methodology to publish the best possible Results.</p>
            </div>
            <div class="col-md-4">
                <img src="../assets/mobiledevelopment.svg" class="column-image img-responsive"
                    alt="Mobile Development">
                <h3 class="service-content">Mobile Developement</h3>
                <p class="service-content">We provide Application development across Android and iOS with agile UI/UX
                    solutions.
                </p>
            </div>
        </div>
    </div>
  </div>

    </div>
</template>
<style>
.navdrawer{
        box-shadow: 2px 0px 4px rgba(78, 78, 78, 0.25);
        border-radius : 0px;
        border:0; 
          }
.navicon{
        transform : rotate(90deg);
        }
        .list{
        width: 70%;
        margin: 6px;
      }
  .icons{
    margin-bottom: 20px;
    color: #FFFFFF;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    text-align: center;
}
.column-image {
  width: 90%;
  height: 40%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-top: 1%;
  margin-bottom: 4%;
}
.service-content {
  text-align: center;
  padding-top: 5px;
}
</style>

<script>

    export default{
        data(){
            return{
                drawer: false,
                items: [
                    { icon: 'mdi-home', route: '/',name:'home' },
                    {icon: 'mdi-account',name:'contactus' },
                    { icon: 'mdi-cogs', route: '/services',name:'services' },
                ]
            }
        },
        methods:{
            showContact(name){
            console.log(name);
            if(name == 'contactus'){
            this.$refs['my-modal'].show()
            }
            }
        }
    }
    
</script>
