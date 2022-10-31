<template>
  <div class="home" id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
  @import url('http://fonts.cdnfonts.com/css/segoe-ui-4');
* {
  scroll-behavior: smooth !important;
  color: #fff;
  font-family: "Segoe UI", sans-serif;
}
</style>
