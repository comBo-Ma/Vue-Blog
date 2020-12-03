<template>
	<div id="jumbotron" :style="{height:screenHeight}">
		<div class="jumbotron mt-3">
			<div class="container" style="text-align: center;">
				<div class="row">
					<div class="col-md-12">
            <img class="logo" src="https://cn.vuejs.org/images/logo.png" alt="">
					</div>
				</div>
				<div class="row">
					<div class="col-md-12">
						<h1>康博个人博客</h1>
						<p class="lead">由职业前端倾情打造，面向全层次的前后端开发者，低门槛开箱即用的前端 UI 解决方案</p>
						<button type="button" class="btn btn-success btn-lg">阅读博客</button>
						<p><small>阅读量：1000次，更新日志</small></p>
						<button type="button" class="btn btn-outline-warning btn-sm mr-3">点赞收藏</button>	
						<button type="button" class="btn btn-outline-warning btn-sm">源码地址</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "HomeHeader",
		data() {
			return {
			  screenHeight:'0px'
      }
		},
    created() {
      this.screenHeight=screen.availHeight-(screen.availHeight*0.25)+'px';
    }
  }
</script>

<style scoped>
	.logo{
		width: 200px;
		height: 200px;
	}
</style>
