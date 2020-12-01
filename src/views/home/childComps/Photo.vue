<template>
<div class="container">
  <div class="card">
    <div class="card-body">
      <div class="row">
        <div class="col-md-2">
          <img class="img-fluid" src="https://cn.vuejs.org/images/logo.png" alt="">
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Photo",
  data(){
    return{
      img:[

      ],
      intervalId: null
    }
  },
  created() {

  }
}
</script>

<style scoped>

</style>
