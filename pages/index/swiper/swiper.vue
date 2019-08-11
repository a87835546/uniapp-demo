<template>
	<view>
		<swiper indicator-dots="true" indicator-active-color="red" autoplay="true" circular="true" @change="change">
			<swiper-item class="uni-bg-color-grey">A</swiper-item>
			<swiper-item>B</swiper-item>
			<swiper-item>A</swiper-item>
			<swiper-item>C</swiper-item>
		</swiper>
		 <image src="../../../static/logo.png" mode="center"></image>
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

<style lang="scss">
	@import 'uni.scss'
</style>
