<template>
	<view class="page">
		<!-- map 只是在app端才可以用 -->
		<!-- 详细的使用 -->
		<!-- https://blog.csdn.net/weixin_43968043/article/details/86642657  -->
		<map :latitude="latitude" :circles="circles" :longitude="longitude" :show-location="true" @markertap="click" :markers="marks" @controltap="clickMap"></map>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				latitude:23.120471,
				longitude:113.330714,
				circles:[{//在地图上显示圆
					latitude: 39.90,
					longitude: 116.39,
					fillColor:"#FFC41F",//填充颜色
					color:"#12A1DD",//描边的颜色
					radius:500,//半径
					strokeWidth:2//描边的宽度
				}],
				marks:[
					{
						latitude:23.120471,
						longitude:113.330714,
						iconPath:'../../static/tab_mine'
					},
					{
						latitude:23.120471,
						longitude:113.330714,
						iconPath:'../../static/tab_mine',
					},
					]
			}
	
		},
		methods:{
			click(){
				console.log('点击');
			},
			clickMap (){
				console.log('asda');
			}
		},
		onLoad:function(e){
			uni.getLocation({
				type: 'wgs84',
				success: res => {
					console.log(res.address)
					this.latitude = res.latitude
					this.longitude = res.longitude
					
				},
				// success:function(res){
				// 	console.log(res);
				// },
				fail:function(err){
					console.log(err);
				},
				// complete: () => {
				// 	console.log('complete');
				// },
				complete:function(res){
					console.log(res);
				}
				
			});
	
		},
	}
</script>

<style>
	map {
		width: 750rpx;
		height: 750rpx;
	}
	button {
		z-index: 9999;
	}
</style>
