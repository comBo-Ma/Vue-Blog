<template>
<div>
  <li class="active mb-1" v-for="(item,index) in categoryList" @click="itemClick(index)">
    <router-link class="text-body" :class="{'font-weight-bold':index==currentIndex}" :to="{path:'/category',query:{name:item.name}}">{{item.name}}</router-link>
  </li>
</div>
</template>

<script>
export default {
  name: "CategoryListItem",
  data(){
    return{
      currentIndex:0
    }
  },
  props:{
    categoryList:{
      type:Array,
      default:[]
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex=index;
    }
  }
}
</script>

<style scoped>
a{
  text-decoration-line: none;
}
</style>
