<template>
	<view>
		<swiper indicator-dots="true" indicator-active-color="red" autoplay="true" circular="true" @change="change">
			<swiper-item class="bg-blue">A</swiper-item>
			<swiper-item class="bg-red">B</swiper-item>
			<swiper-item class="bg-red">C</swiper-item>
			<swiper-item class="bg-yellow">D</swiper-item>
		</swiper>
		 <image src="/static/logo.png" mode="center"></image>
	</view>
</template>

<script>
	export default 
	{
		data(){
			return {
				a : ''
			}
		},
		methods:{
			change(e){
				console.log(e.detail);
				console.log('banner 滑动时 的回调方法');
			}
		},
	}
	
</script>

<style lang="scss" scoped>
	@import 'uni.scss'
</style>
