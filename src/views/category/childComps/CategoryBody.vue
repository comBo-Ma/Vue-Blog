<template>
<div class="container">
  <div class="card">
    <div class="card-body">
      <div class="row">
        <div class="col-md-3 bg-light">
          <category-list></category-list>
        </div>
        <div class="col-md-9 overflow-auto">
          <router-view :key="Math.random().toString()"></router-view>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import CategoryList from "@/views/category/childComps/CategoryList";
import CategoryContent from "@/views/category/childComps/CategoryContent";
export default {
name: "CategoryBody",
  components: {CategoryContent, CategoryList}
}
</script>

<style scoped>
</style>
