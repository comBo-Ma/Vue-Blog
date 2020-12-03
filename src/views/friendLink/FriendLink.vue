<template>
<div>
  <nav-bar></nav-bar>
  <jumbotron>
    <friend-link-header slot="header"></friend-link-header>
  </jumbotron>
  <friend-link-body></friend-link-body>
  <friend-link-about></friend-link-about>
</div>
</template>

<script>
import NavBar from "@/components/content/navbar/NavBar";
import Jumbotron from "@/components/content/header/Jumbotron";
import FriendLinkHeader from "@/views/friendLink/childComps/FriendLinkHeader";
import FriendLinkBody from "@/views/friendLink/childComps/FriendLinkBody";
import FriendLinkAbout from "@/views/friendLink/childComps/FriendLinkAbout";
export default {
name: "FriendLink",
  components: {FriendLinkAbout, FriendLinkBody, FriendLinkHeader, Jumbotron, NavBar}
}
</script>

<style scoped>

</style>
