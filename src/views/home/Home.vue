<template>
<div id="home">
  <nav-bar></nav-bar>
  <jumbotron></jumbotron>
  <blog-top></blog-top>
  <blog-list></blog-list>
  <photo></photo>
  <music></music>
  <Footer></Footer>
</div>
</template>

<script>
import NavBar from "@/components/content/navbar/NavBar";
import Jumbotron from "@/views/home/childComps/Jumbotron";
import BlogTop from "@/views/home/childComps/BlogTop";
import BlogList from "@/views/home/childComps/BlogList";
import Photo from "@/views/home/childComps/Photo";
import Music from "@/components/common/music/Music";
import Scroll from "@/components/common/scroll/Scroll";

import Footer from "@/components/content/footer/Footer";
export default {
  name: "Home",
  components: {Photo, Footer, BlogList, Scroll, BlogTop, Jumbotron, NavBar, Music}
}
</script>

<style scoped>
#home{
  position: relative;
  height: 100vh;
}
.content{
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
</style>
