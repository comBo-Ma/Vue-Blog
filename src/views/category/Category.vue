<template>
<div>
  <nav-bar></nav-bar>
  <jumbotron>
    <category-header slot="header"></category-header>
  </jumbotron>
  <category-body></category-body>
</div>
</template>

<script>
import NavBar from "@/components/content/navbar/NavBar";
import Jumbotron from "@/components/content/header/Jumbotron";
import CategoryHeader from "@/views/category/childComps/CategoryHeader";
import CategoryBody from "@/views/category/childComps/CategoryBody";
export default {
name: "Category",
  components: {CategoryBody, CategoryHeader, Jumbotron, NavBar}
}
</script>

<style scoped>

</style>
