<template>
<div class="container">
  <blog-list-item></blog-list-item>
  <blog-list-item></blog-list-item>
  <blog-list-item></blog-list-item>
  <blog-list-item></blog-list-item>
  <blog-list-item></blog-list-item>
</div>
</template>

<script>
import BlogListItem from "@/views/home/childComps/BlogListItem";
export default {
name: "BlogList",
  components: {BlogListItem}
}
</script>

<style scoped>

</style>
