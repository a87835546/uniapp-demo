<template>
	<view class="content">
		 <!-- scroll-top 这个值是不带单位  内容视图距离scrollview 头部的距离-->
			<scroll-view scroll-y='true' @scroll="scroll" :scroll-top="top" scroll-with-animation="true">
				<view class="item">A</view>
				<view class="item">B</view>
				<view class="item">C</view>
				<view class="item">D</view>
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
			function fun (){
				for (let box of document.querySelectorAll('.item')) {
					box.style.backgroundColor = getColor()
				}
			}
			fun()
			
			function getColor(){
				let r = Math.random()*255
				let g = Math.random()*255
				let b = Math.random()*255
				return `rgba(${r},${b},${b},1)`;
			}
		}
	}
</script>

<style>
	scroll-view {
		height: 300rpx;
		width: 100vw;
		background-clip: red;
	}
	.item {
		height: 200rpx;
	}
	button {
		width: 60vw;
	}
</style>
