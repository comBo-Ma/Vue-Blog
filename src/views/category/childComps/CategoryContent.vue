<template>
  <div>
    <div class="tab-content" id="v-pills-tabContent">
        <category-content-item></category-content-item>
        <category-content-item></category-content-item>
        <category-content-item></category-content-item>
    </div>
  </div>
</template>

<script>
import CategoryContentItem from "@/views/category/childComps/CategoryContentItem";
export default {
  name: "CategoryContent",
  components: {CategoryContentItem},
  data(){
    return{
      name:this.$route.query.name
    }
  }
}
</script>

<style scoped>

</style>
