<template>
  <footer>
    <nav>
      <h5 class="footer-title">Contact Us</h5>
      <ul class="contact-info">
        <li class="phone">
          <span class="icon">
            <b-icon variant="info" icon="phone" />
          </span>
          <a href="tel:+919354024450">(+91) 9354024450</a>
        </li>
        <li class="email">
          <span class="icon">
            <b-icon variant="info" icon="envelope" />
          </span>
          <a href="#">info@decabits.com</a>
        </li>
      </ul>
    </nav>
    <p class="text-center">Copyright &copy; Decabits Software</p>
  </footer>
</template>

<script>
</script>
<style>
@import url("https://use.fontawesome.com/releases/v5.8.2/css/all.css");
@import url("https://fonts.googleapis.com/css?family=Roboto|Roboto+Slab&display=swap");
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding:wght@400;700&display=swap");

footer {
  background: rgb(13,13,13);
  background-image: linear-gradient(0deg, rgba(3,3,3,1) 30%, rgba(0,0,0,1) 100%);
  padding: 30px 5vw 20px 5vw ;
  border-top: 1px solid #cccccccc;
}

.footer-title {
  color: #ffffff;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  margin-bottom: 30px;
  letter-spacing: 0.5px;
  position: relative;
  padding-bottom: 15px;
}
.footer-title::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  width: 100px;
  background: #13bfb1;
}

.contact-info {
  list-style: none;
}

.contact-info li{
  display: flex;
  padding: 1rem 0;
  align-items: center;
}

.contact-info .icon{
  margin-right: 1.25rem;
  font-size: 14px;
  color: #ffffff;
  border: 2px solid #cccccc;
  border-radius: 3px;
  height: 32px;
  width: 32px;
  display: inline-block;
  line-height: 28px;
  text-align: center;
  margin-right: 20px;
}

.contact-info a{
  color: #fff;
  font-size: 14px;
}


@media only screen and (max-width: 400px) {
  footer {
    /* padding: 30px 20px 20px 20px ; */
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
