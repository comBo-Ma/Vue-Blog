<template>
<div id="home">
  <nav-bar></nav-bar>
  <home-header></home-header>
  <blog-top></blog-top>
  <blog-list></blog-list>
  <music></music>
  <Footer></Footer>
</div>
</template>

<script>
import NavBar from "@/components/content/navbar/NavBar";
import HomeHeader from "@/views/home/childComps/HomeHeader";
import BlogTop from "@/views/home/childComps/BlogTop";
import BlogList from "@/views/home/childComps/BlogList";
import Photo from "@/views/home/childComps/Photo";
import Music from "@/components/common/music/Music";
import Scroll from "@/components/common/scroll/Scroll";
import Footer from "@/components/content/footer/Footer";
export default {
  name: "Home",
  components: {HomeHeader, Photo, Footer, BlogList, Scroll, BlogTop, NavBar, Music}
}
</script>

<style scoped>

</style>
