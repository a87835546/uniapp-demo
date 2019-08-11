<template>
	<!-- 九宫格的视图，类似于iOS中collectionView uni-grid-item 和 list-item类似 不能使用v-for指令，只能在固定的时候使用，如需使用v-for指令需自定义组件 -->
	<view class="page">
		<!-- #ifndef APP-PLUS -->
			<mescroll-uni @down="refresh"  @up="loadingMore">
		<!-- #endif -->
		<uni-grid :data="dataList" :column='3' @touchstart="start" @touchend="end">
			<uni-grid-item text="测试">
				ss111
			</uni-grid-item>
			<uni-grid-item marker="dot">
				<text class="text">文本</text>
			</uni-grid-item>
			<uni-grid-item marker="badge" text="99" type="success">
				<text class="text">文本</text>
			</uni-grid-item>
			<uni-grid-item marker="image" :hor="35" :ver="-45" :img-width="25" src="https://img-cdn-qiniu.dcloud.net.cn/uni-ui/recommend.png">
				<text class="text">文本</text>
			</uni-grid-item>
			<uni-grid-item text="测试">
				ss111
			</uni-grid-item>
			<uni-grid-item text="测试">
				ss111
			</uni-grid-item>
			<uni-grid-item text="测试">
				ss111
			</uni-grid-item>
			<uni-grid-item text="测试">
				ss111
			</uni-grid-item>
			<uni-grid-item text="测试">
				ss111
			</uni-grid-item>
		</uni-grid>
		<!-- #ifndef APP-PLUS -->
		</mescroll-uni>
		<!-- #endif -->
	</view>
</template>

<script>
	import {uniGrid,uniGridItem} from '@dcloudio/uni-ui'
	import MescrollUni from 'mescroll-uni'
	export default {
		data (){
			return {
				dataList:[]
			}
		},
		components:{
			uniGrid,
			uniGridItem,
			MescrollUni
		},
		onLoad:function(e){
			console.log(e);
		},
		methods:{
			refresh(refresh){
				console.log('111');
				setTimeout(()=>refresh.endDownScroll(),1000)
				
			},
			loadingMore(refresh){
				console.log('123');
			},
			start(e){
				console.log(e);
			},
			end(e){
				console.log(e);
			},
			// app 有专有的下拉刷新控件
			onPullDownRefresh:function(){
				console.log('refresh');
				setTimeout(function() {
					uni.stopPullDownRefresh()
				}, 1000);
			},
		}
	}
</script>

<style>
</style>
