<template>
	<view class="container">
		<view class="top">
			<view class="top-left">
				<text>项目动态</text>
			</view>
			<uni-notice-bar
			class="notice-bar"
			:scrollable="true"
			:text="notice"
			:backgroundColor="backgroundColor">
			</uni-notice-bar>
			<text class="time">{{time}}</text>
		</view>
		<view class="map">
			<map style="width: 100%;"
			:latitude="latitude" 
			:longitude="longitude">
			</map>
		</view>
	</view>
</template>

<script>
	import uniNoticeBar from "@dcloudio/uni-ui"
	export default {
		components: {
			uniNoticeBar
		},
		data() {
			return {
				notice: "关于【安徽区域】地块测试象奴的定案审批流程测试数据",
				time: "2019-8-12",
				backgroundColor: "#FFFFFF",
				latitude: 39.909,
				longitude: 116.39742
			}
		}
	}
</script>

<style scoped>
	.container {
		background-color: #FFFFFF;
	}
	
	.top {
		padding-top: 10px;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		align-items: center;
	}
	
	.top-left {
		font-style: italic;
		font-size: 16;
		color: #DD524D;
		width: 40px;
		margin-left: 16px;
	}
	
	.notice-bar {
		margin-left: 8px;
		width: 55%;
	}
	
	.time {
		margin-left: 8px;
		font-size: 12px;
		color: #666666;
	}
	
	.map {
		margin-left: 10px;
		margin-right: 10px;
		height: 300px;
		width: 100%;
	}
</style>
