<template>
  <div class="Parent">
    <v-img class="backimg" src="../assets/backgroundimage.svg"></v-img>
    <h2 class="text">Welcome to Lab Decabits</h2>
    <p class="para ">
      Your self designed laboratory to create richly detailed, open-source &
      effective tools. Brainstorming, finding ideas & experimenting with the
      latest tech stack is now a click away. Quench your knowledge thirst in
      3,2,1! tab to click
    </p>
  </div>
</template>
<style>
.text {
  position: absolute;
  top: 30%;
  left: 8%;
  font-family: "Roboto Slab", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 3vw;
  line-height: 66px;
  display: flex;
  align-items: center;
}
.para {
  position: absolute;
  top: 45%;
  left: 8%;
  width: 45%;
  font-family: "Roboto Slab", "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #555555;
  font-style: normal;
  font-weight: 100;
  font-size: 1.5vw;
  line-height: 33px;
}
.backimg {
  width: 100%;
  height: 100%;
}
.Parent {
  position: relative;
}
@media only screen and (max-width: 400px){
  .text {
  position: absolute;
  top: 10%;
  left: 8%;
  font-family: "Roboto Slab", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 1.25rem;
  line-height: 66px;
  display: flex;
  align-items: center;
}
.para {
  position: absolute;
  top: 35%;
  width: 90%;
  left: 8%;
  font-family: "Roboto Slab", "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #555555;
  font-style: normal;
  font-weight: 100;
  font-size: 0.825rem;
  margin-top: 30px;
  line-height: 1.2rem;
  margin-right: 10px;
  margin-bottom: 30px;
}
}
</style>
