<template>
  <div>
    <h3 class="display-4">这是一个留言板</h3>
    <div class="alert alert-secondary" role="alert">
      <span class="badge badge-pill badge-danger">:2</span>
      <span class="badge badge-pill badge-warning">留言条数:20</span>
      <span class="badge badge-pill badge-info">最新留言一周前</span>
      <p>
        <small>
          有任何问题可以在这里留言，第一时间会回复
        </small>
      </p>
    </div>
  </div>
</template>

<script>
export default {
name: "CommentHeader"
}
</script>

<style scoped>

</style>
