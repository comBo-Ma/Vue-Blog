<template>
<div class="container">
  <div class="card text-primary mb-3">
    <div class="card-header">评论区</div>
    <div class="card-body">
      <commentForm></commentForm>
      <hr>
      <comment-item>
        <comment-item slot="childComment"></comment-item>
      </comment-item>
      <comment-item></comment-item>
      <pagination></pagination>
    </div>
  </div>
</div>
</template>

<script>
import CommentForm from "@/components/content/comment/CommentForm";
import CommentItem from "@/components/content/comment/CommentItem";
import Pagination from "@/components/common/pagination/Pagination";
export default {
  name: "Comment",
  components:{
    Pagination,
    CommentItem,
    CommentForm
  }
}
</script>

<style scoped>

</style>
