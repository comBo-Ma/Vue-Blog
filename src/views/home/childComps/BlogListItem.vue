<template>
<div>
  <div class="row mb-3">
    <div class="col-md-12">
      <div class="card" :class="{'shadow':isMouseOver}" @mouseover="mouseOver" @mouseout="mouseOut">
        <div class="card-body">
          <div class="media">
            <div class="row">
              <div class="col-md-2 hidden-xs">
                <img  src="https://cn.vuejs.org/images/logo.png" class="img-fluid" alt="...">
              </div>
              <div class="col-md-10">
                <div class="media-body">
                  <h5 class="mt-0">Media with stretched link</h5>
                  <p class="line-clamp-2">Cras sit amet nibh libero,Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                  <div class="row">
                    <div class="col-md-9">
                      <router-link :to="{path:'/detail',query:{id:'12'}}">Go somewhere</router-link>
                    </div>
                    <div class="col-md-3">
                      <span class="badge badge-pill badge-danger">喜欢:2</span>
                      <span class="badge badge-pill badge-warning">阅读:20</span>
                      <span class="badge badge-pill badge-info">一周前</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import router from "@/router";
export default {
  name: "BlogListItem",
  data(){
    return{
      isMouseOver:false
    }
  },
  methods:{
    mouseOver(){
      this.isMouseOver=true
    },
    mouseOut(){
      this.isMouseOver=false
    }
  }
}
</script>

<style scoped>
span{
  margin: 0 1px;
}
</style>
