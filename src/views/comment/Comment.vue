<template>
<div>
  <nav-bar></nav-bar>
  <jumbotron>
    <comment-header slot="header"></comment-header>
  </jumbotron>
  <div class="container">
    <div class="card">
      <div class="card-body">
        <comment-form></comment-form>
        <comment-item>
          <comment-item slot="childComment"></comment-item>
        </comment-item>
        <comment-item></comment-item>
        <comment-item></comment-item>
        <comment-item></comment-item>
        <pagination></pagination>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import NavBar from "@/components/content/navbar/NavBar";
import Jumbotron from "@/components/content/header/Jumbotron";
import CommentHeader from "@/views/comment/childComps/CommentHeader";
import CommentForm from "@/components/content/comment/CommentForm";
import CommentItem from "@/components/content/comment/CommentItem";
import Pagination from "@/components/common/pagination/Pagination";
export default {
name: "Comment",
  components: {Pagination, CommentItem, CommentForm, CommentHeader, Jumbotron, NavBar}
}
</script>

<style scoped>

</style>
