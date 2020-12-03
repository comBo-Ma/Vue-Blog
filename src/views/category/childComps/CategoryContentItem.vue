<template>
  <ul class="list-unstyled">
    <li>
      <div class="row ml-4">
        <div class="col-md-10"><router-link :to="{path:'/detail',query:{id:'12'}}">SpringMVC框架学习笔记</router-link></div>
        <div class="col-md-2"><footer class="blockquote-footer">2020-12-20</footer></div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
name: "CategoryContentItem"
}
</script>

<style scoped>

</style>
