<template>
  <div class="media mt-3">
    <div class="row">
      <div class="col-md-1 hidden-xs">
        <img src="https://cn.vuejs.org/images/logo.png" class="mr-3 img-fluid" alt="...">
      </div>
      <div class="col-md-11">
        <div class="media-body">
          <h5 class="mt-0">Media heading</h5>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          <div class="row">
            <div class="col-md-12">
              <span role="button" class="text-black-50"><small>回复</small></span>
            </div>
          </div>
          <slot name="childComment"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "CommentItem"
}
</script>

<style scoped>
span{
  padding: 0 5px;
}
</style>
