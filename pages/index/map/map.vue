<template>
	<view class="page">
		<uni-nav-bar left-icon="back" left-text="返回" right-text="菜单" title="测试导航"></uni-nav-bar>
		<!-- map 只是在app端才可以用 -->
		<!-- 详细的使用 -->
		<!-- https://blog.csdn.net/weixin_43968043/article/details/86642657  -->
		<map 
			:latitude="latitude" 
			:circles="circles"  
			:longitude="longitude" 
			:show-location="true" 
			@markertap="click" 
			:markers="point?point:marks" 
			@controltap="clickMap" 
			@tap="tap"
			@regionchange="change"></map>
		<!-- <map :latitude="latitude" :longitude="longitude"></map> -->
		<!-- #ifdef APP-PLUS -->
		<button type="primary" @click="getPOI">获取周边的POI数据</button>
		 * 静态图展示
		<image :src="src" mode="center"></image>
		<!-- #endif -->
		
	</view>
</template>

<script>
	import amap  from '../../../common/amap-wx.js'
	import {uniNavBar} from '@dcloudio/uni-ui'
	export default {
		data(){
			return {
				latitude:23.120471,
				longitude:113.330714,
				targetLatitude:0,
				targetLontitude:0,
				point:null,
				src:null
			}
	
		},
		components:{
			uniNavBar
		},
		/**
		 *  @description  计算属性，不能在data中定义相同的属性，计算属性可以使用data中的属性，
		 * 使用的时候和在data中一样的方式。和watch差不多类似。watch 里面就是oc中的kvo，观察某一个属性
		 * */
		computed:{
			
			marks(){

				return [
				{
					latitude:23.120471,
					longitude:113.330714,
					iconPath:'/static/location'
				},
				{
					latitude:this.latitude,
					longitude:this.longitude,
					iconPath:'/static/location',
					title:'当前位置',
					anchor:true
				},
				]
				
			},
			circles(){
				return
					[{//在地图上显示圆
						latitude: this.latitude,
						longitude: this.longitude,
						fillColor:"#FFC41F",//填充颜色
						color:"#12A1DD",//描边的颜色
						radius:25,//半径
						strokeWidth:2//描边的宽度
					}]
			}
		},

		methods:{
			click(e){
				console.log(e);
			},
			clickMap (){
				console.log('asda');
			},
			tap(e){
				console.log(e);
			},
			change(e){
			},
			getPOI(){
				let amapPlugin = new amap.AMapWX({
					key:"3dab3b1cab661b7d908049adf9c54f0b"
				});
				amapPlugin.getPoiAround({
					success:result=>{
						console.log(result);
						this.point = result.markers
					},
					fail:err=>{
						console.log(err);
					}
				});
			}
		},
		onLoad:function(e){
			let amapPlugin = new amap.AMapWX({
				key:"3dab3b1cab661b7d908049adf9c54f0b"
			});
			uni.getSystemInfo({
				success:result=>{
					var width = result.windowWidth
					var height = result.windowHeight
					var size = width + "*" + height
					amapPlugin.getStaticmap({
						zoom:8,
						size:size,
						scale:2,
						success:data=>{
							console.log(data);
							this.src = data.url
						},
						fail:err=>{
							console.log(err);
						}
					})
				},
				fail:err=>{
				}
			});
			uni.getLocation({
				type: 'wgs84',
				success: res => {
					console.log(res.latitude)
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
	image {
		width: 100%;
	}
</style>
