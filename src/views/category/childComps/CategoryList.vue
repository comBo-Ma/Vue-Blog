<template>
  <div class="bd-sidebar">
    <a class="navbar-brand text-dark" href="#">博客分类列表</a>
    <button @click="btnClick" class="btn bd-search-docs-toggle d-md-none p-0 ml-3 float-right" type="button" data-toggle="collapse"
            data-target="#bd-docs-nav" aria-controls="bd-docs-nav" aria-expanded="true"
            aria-label="Toggle docs navigation">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" role="img" focusable="false">
        <title>Menu</title>
        <path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"
              d="M4 7h22M4 15h22M4 23h22"></path>
      </svg>
    </button>
    <nav class="bd-links collapse" :class="{show:isShowNav}" id="bd-docs-nav" aria-label="Main navigation" style="">
      <div class="bd-toc-item active">
        <ul class="nav bd-sidenav flex-column">
          <category-list-item :category-list="categoryList"></category-list-item>
        </ul>
      </div>
    </nav>

  </div>
</template>

<script>
import CategoryListItem from "@/views/category/childComps/CategoryListItem";
export default {
  name: "CategoryList",
  components: {CategoryListItem},
  data() {
    return {
      categoryList: [
        {name: 'Java'},
        {name: '工具及中间价'},
        {name: 'Spring框架'},
        {name: '电脑知识'}
      ],
      isShowNav:true
    }
  },
  methods:{
    btnClick(){

    }
  }
}
</script>

<style scoped>

</style>
