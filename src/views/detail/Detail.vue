<template>
<div>
  <nav-bar></nav-bar>
  <jumbotron>
    <detail-header slot="header"></detail-header>
  </jumbotron>
  <blog></blog>
  <operate></operate>
  <copy-right></copy-right>
  <comment></comment>
</div>
</template>

<script>
import NavBar from "@/components/content/navbar/NavBar";
import Jumbotron from "@/components/content/header/Jumbotron";
import DetailHeader from "@/views/detail/childComps/DetailHeader";
import Blog from "@/views/detail/childComps/Blog";
import CopyRight from "@/views/detail/childComps/CopyRight";
import Operate from "@/views/detail/childComps/Operate";
import Comment from "@/views/detail/childComps/Comment";
export default {
  name: "Detail",
  components: {DetailHeader, Comment, Operate, CopyRight, Blog, Jumbotron, NavBar},
  data(){
    return{
      id:null
    }
  },
  created() {
    this.id=this.$route.query.id
  }
}
</script>

<style scoped>

</style>
