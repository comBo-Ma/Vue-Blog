<template>
  <form>
    <div class="form-group">
      <textarea class="form-control" placeholder="请输入你的评论信息..." id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    <div class="form-group form-inline">
      <label class="sr-only" for="inlineFormInputGroupUsername1">Username</label>
      <div class="input-group mb-2 mr-sm-2">
        <div class="input-group-prepend">
          <div class="input-group-text">
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
            </svg>
          </div>
        </div>
        <input type="text" class="form-control" id="inlineFormInputGroupUsername1" placeholder="Username">
      </div>
      <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
      <div class="input-group mb-2 mr-sm-2">
        <div class="input-group-prepend">
          <div class="input-group-text">
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-envelope" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
            </svg>
          </div>
        </div>
        <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Username">
      </div>
      <div class="form-check mr-auto">
        <input class="form-check-input" type="checkbox" id="autoSizingCheck2">
        <label class="form-check-label" for="autoSizingCheck2">
          接收邮箱提醒
        </label>
      </div>
      <button type="submit" class="btn btn-primary mb-2">Submit</button>
    </div>
  </form>
</template>

<script>
export default {
name: "CommentForm"
}
</script>

<style scoped>

</style>
