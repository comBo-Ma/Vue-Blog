<template>
  <div class="container">
    <div class="footer">
      <p>
        <a v-for="(item,index) in footLinks" :href="item.href">{{item.name}}</a>
      </p>
      <p>Copyright © 2020-2020 charon.plus All Rights Reserved </p>
      <p><a href="">陇ICP备20001946号-1</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data(){
    return{
      footLinks:[
        {name:'联系我',href:'#'},
        {name:'常见问题',href:'#'},
        {name:'源码地址',href:'#'},
        {name:'意见反馈',href:'#'},
        {name:'友情链接',href:'#'}
      ]
    }
  }
}
</script>

<style scoped>
.footer{
  margin: 30px;
  padding: 10px;
  text-align: center;
}
.footer p{
  font-size: 12px;
  line-height: 10px;
  color: #888888;
}
.footer p a{
  padding: 0 3px;
  font-size: 12px;
  color: #888888;
}
.footer p a:hover{
  color: #a194c3;
  text-decoration: underline;
}
</style>
