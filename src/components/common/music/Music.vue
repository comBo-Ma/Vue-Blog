<template>
	<div class="container">
		<hr>
		<h3>音乐随心听</h3>
		<div class="row">
			<div class="col-md-3">

			</div>
			<div class="col-md-6">
				<aplayer autoplay :music="music[0]" :list="music" repeat="list" listMaxHeight="200px" />
			</div>
			<div class="col-md-3">

			</div>
		</div>
	</div>
</template>

<script>
	import aplayer from 'vue-aplayer';
	//模拟歌单
	import {
		audio
	} from "@/components/common/music/audio";

	export default {
		name: "Music",
		data() {
			return {
				music: {}
			}
		},
		components: {
			aplayer
		},
		created() {
			this.music = audio().audio;
			//this.getSingList();获取真实歌单
		},
		methods: {
			getSingList() {
				getSingList().then(res => {
					this.music = res.data.list;
				})
			}
		}
	}
</script>
<style scoped>

</style>
