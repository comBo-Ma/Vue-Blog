<template>
  <div ref="nav-bar">
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" style="background-color: #e9ecef;">
      <div class="container">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto" >
            <li v-for="(item,index) in navTitles" class="nav-item"  @click="navClick(index)">
              <router-link :class="{'font-weight-bold':index==currentIndex}" class="nav-link" :to="item.href">{{item.name}}</router-link>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data(){
    return{
      currentIndex:0,
      brand:{
        href:'https:charon.plus',
        name:'康博个人博客'
      },
      navTitles:[
        {href: '/home',name:'Home'},
        {href: '/category',name:'Category'},
        {href: '/comment',name:'Comment'},
        {href: '/friendLink',name:'FriendLink'},
      ]
    }
  },
  created() {
  },
  methods:{
    navClick(index){
      this.currentIndex=index;
    }
  }
}
</script>

<style scoped>

</style>
