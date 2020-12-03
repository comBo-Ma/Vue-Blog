<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Home from "@/views/home/Home";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap'
export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
