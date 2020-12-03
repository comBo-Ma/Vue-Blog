<template>
<div>
  <h3 class="display-4">这是一个博客标题</h3>
  <div class="alert alert-secondary" role="alert">
    <span class="badge badge-pill badge-danger">喜欢:2</span>
    <span class="badge badge-pill badge-warning">阅读:20</span>
    <span class="badge badge-pill badge-info">一周前</span>
    <p>
      <small>
        博客分类: <span class="text-primary mr-3">工具及中间件</span>
        博客标签: <span class="text-primary">vue</span><span class="text-primary">vue-router</span><span class="text-primary">路由跳转</span><span class="text-primary">路由嵌套</span>
      </small>
    </p>
  </div>
</div>
</template>

<script>
export default {
name: "DetailHeader"
}
</script>

<style scoped>
span{
  margin: 0 3px;
}
</style>
