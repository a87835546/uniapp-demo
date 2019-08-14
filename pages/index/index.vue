<template>
	<view class="content">
		<uni-badge text="1" type=""></uni-badge>
		<view class="text-area" v-on:click="test()">
			<text class="title">{{title}}</text>
		</view>
		
		<view class="content_item" v-for="(newitem,index) in dataList" :key='index' @click="clickItem(newitem.url)">
			<item :title="index" :model="newitem" class="home" :showBadge="index === 1 ? true : false" ></item>
		</view>
		<!-- <input type="text" value="123" placeholder="测试一下" focus="true" /> -->
		<view class="test">
			<!-- <test></test> -->
		</view>
	</view>
</template>

<script>
	import item from './home-item.vue'	
	import test from './test.vue'
	import {post,get} from '../utils/httpRequest.js'
	import {uniBadge,uniCollapse,uniCollapseItem,uniList,uniListItem } from '@dcloudio/uni-ui'
	export default {
		data() {
			return {
				title: 'Hello',
				dataList:[
					{
						title:"下拉刷新的使用（自定义和系统组件）",
						url:'./refresh/refresh'
					}
					,
					{
						title:'折叠效果 和badge使用',
						url:'./collapse/collapse'
					}
					,
					{
						title:'滑动视图的使用',
						url:'./scrollView/scrollView'
					}
					,
					{
						title:'左右滑动的banner使用',
						url:'./swiper/swiper'
					}
					,
					{
						title:'常用的多媒体应用',
						url:'./media/media'
					}
					,
					{
						title:'地图的使用,高德地图和系统地图',
						url:'./map/map'
					}
					,
					{
						title:'webview使用',
						url:'./webview/webview'
					}
					,
					{
						title:'九宫格视图',
						url:'./collectionView/collectionView'
					}
					,
					{
						title:'常用的弹窗和分享',
						url:'./sharePopup/popup'
					}
					,
					{
						title:'promise 的网络请求',
						url:'./request/request'
					},
					{
						title:'选项条和列表',
						subtitle:'选项条，动画，watch和computed用法',
						url:'./SegmentedBar/SegmentedBar'
					}
					
					],
			}
		},
		onLoad:function(e){
			console.log('111');
			// 接受自带的空间点击事件回传
			this.$on('collapse-item-click',function(valuue){
				console.log(valuue);
			})
			// 设置tabbar 的脚标
			uni.setTabBarBadge({
				index:0,
				text:'10'
			})
		},
		components:{
			item,
			uniCollapse,
			uniCollapseItem,
			uniBadge,
			test,
		},
		methods: {
			clickItem(url){
				console.log(url);
				uni.navigateTo({
					url:url
				})
			},
			test(){
				console.log('test');
				get('https://www.baidu.com').then(result=>{
					console.log(result);
				}).catch(e=>{
					console.log(e);
				})
			},
		},
		onPullDownRefresh:function(){
			console.log('refresh');
			setTimeout(function() {
				uni.stopPullDownRefresh()
			}, 1000);
		},
		
	}
</script>

<style scoped lang="less">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50upx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
	.content_item {
		width: 100vw;
	}
.home {
		border-bottom: 1rpx solid #fff;
	}
	.collapse {
		width: 100vw;

	}
	
	uni-collapse-item {
		height: 100%;;
		width: 100vw;
	}
	uni-list-item {
		width: 100vw;
	}
	.content /deep/ .uni-tabbar .uni-tabbar__reddot {
		left: 26px;
		background-color: aqua
	}
</style>
