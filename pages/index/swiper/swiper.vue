<template>
	<view>
		<swiper indicator-dots="true" indicator-color="white" indicator-active-color="red" autoplay="true" circular="true" @change="change">
			<swiper-item class="bg-blue">
				<image style="width: 100%;height: 100%;" src="http://image.biaobaiju.com/uploads/20180801/00/1533054790-DkKVbYgeHy.jpg" mode="scaleToFill"></image>
			</swiper-item>
			<swiper-item class="bg-red">
				<image style="width: 100%;height: 100%;" src="http://b-ssl.duitang.com/uploads/item/201510/05/20151005085353_iF2jh.jpeg" mode="scaleToFill"></image>
			</swiper-item>
			<swiper-item class="bg-red">
				<image style="width: 100%;height: 100%;" src="http://b-ssl.duitang.com/uploads/item/201510/05/20151005085413_nZFk8.jpeg" mode="scaleToFill"></image>
			</swiper-item>
			<swiper-item class="bg-yellow">
				<image style="width: 100%;height: 100%;" src="http://b-ssl.duitang.com/uploads/blog/201506/03/20150603142813_zYEAj.thumb.700_0.jpeg" mode="scaleToFill"></image>
			</swiper-item>
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
