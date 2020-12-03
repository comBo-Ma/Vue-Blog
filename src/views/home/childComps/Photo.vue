<template>
<div class="container-fluid bg-light">
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="row">
          <div class="col-2">
            <img class="img-fluid" src="@/assets/img/1.jpg" alt="">
          </div>
          <div class="col-2">
            <img class="img-fluid" src="https://cn.vuejs.org/images/logo.png" alt="">
          </div>
          <div class="col-2">
            <img class="img-fluid" src="https://cn.vuejs.org/images/logo.png" alt="">
          </div>
          <div class="col-2">
            <img class="img-fluid" src="https://cn.vuejs.org/images/logo.png" alt="">
          </div>
          <div class="col-2">
            <img class="img-fluid" src="https://cn.vuejs.org/images/logo.png" alt="">
          </div>
          <div class="col-2">
            <img class="img-fluid" src="https://cn.vuejs.org/images/logo.png" alt="">
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="row">
          <div class="col-6">
            <img class="img-fluid" src="https://cn.vuejs.org/images/logo.png" alt="">
          </div>
          <div class="col-6">
            <img class="img-fluid" src="https://cn.vuejs.org/images/logo.png" alt="">
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="row">
          <div class="col-6">
            <img class="img-fluid" src="https://cn.vuejs.org/images/logo.png" alt="">
          </div>
          <div class="col-6">
            <img class="img-fluid" src="https://cn.vuejs.org/images/logo.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
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
