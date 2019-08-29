<template>
	<view class="content">
		 <!-- scroll-top 这个值是不带单位  内容视图距离scrollview 头部的距离-->
			<scroll-view scroll-y='true' @scroll="scroll" :scroll-top="top" scroll-with-animation="true">
				<view class="bg-blue">
					<image src="http://img2.imgtn.bdimg.com/it/u=183631055,2504247705&fm=26&gp=0.jpg" mode="scaleToFill"></image>
				</view>
				<view class="bg-yellow">
					<image src="http://image.biaobaiju.com/uploads/20180801/00/1533054790-DkKVbYgeHy.jpg" mode="center"></image>
				</view>
				<view class="bg-red">C</view>
				<view class="bg-green">D</view>
			</scroll-view>
			<button  @click="gotoTop">点击返回顶部</button>
	</view>
</template>

<script>
	import Vue from 'vue'
	export default {

		data(){
			return {
				top : 100
			}
		},
		methods:{
			gotoTop(){
				console.log('click go to top');
				this.top = 0;
			},
			scroll(e){
				//e.target.scrollTop 获取内容 距离定点的距离 不去修改top值，返回顶部会只生效一次。
				// console.log(e.target.scrollTop);
				this.top = e.target.scrollTop
			}
		},
		onLoad:function(){
		},
		onReady:function(e){
		}
	}
</script>

<style scoped lang="less">
	scroll-view {
		height: 300rpx;
		width: 100vw;
		background-clip: red;
	}
	.content {
		height: 400rpx;
		
	}
	view {
		height: 300rpx;
	}
	button {
		width: 60vw;
	}
</style>
