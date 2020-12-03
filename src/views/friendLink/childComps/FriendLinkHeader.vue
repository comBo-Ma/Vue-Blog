<template>
  <div>
    <h3 class="display-4">这是一个友情链接</h3>
    <div class="alert alert-secondary" role="alert">
      <span class="badge badge-pill badge-danger">总数:2</span>
      <span class="badge badge-pill badge-warning">总计流量:20</span>
      <span class="badge badge-pill badge-info">一周前</span>
      <p>
        <small>
          欢迎各位博主入驻！
        </small>
      </p>
    </div>
  </div>
</template>

<script>
export default {
name: "FriendLinkHeader"
}
</script>

<style scoped>
span{
  margin: 0 3px;
}
</style>
