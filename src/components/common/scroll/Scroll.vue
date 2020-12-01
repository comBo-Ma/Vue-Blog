<template>
<div class="wrapper" ref="wrapper">
  <div>
    <slot></slot>
  </div>
</div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
  name: "Scroll",
  data(){
    return{
      bs:null
    }
  },
  mounted() {
    this.init()
  },
  methods:{
    init(){
      this.bs=new BScroll(this.$refs.wrapper,{

      })
    }
  }
}
</script>

<style scoped>
.wrapper{
  overflow: hidden;
}
</style>
