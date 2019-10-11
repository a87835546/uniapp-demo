<template>
	<view class="page">
		<view class="container">
			<text>排行榜</text>
			<view class="listItem" v-for="(item,index) in lists" :key="index" @click="clickItem(index)">
				<projectListItem></projectListItem>
			</view>
			<view class="bottom">
				<text @click="clickMore">跟多好友</text>
			</view>
		</view>
	</view>
</template>

<script>
	import projectListItem from './project_list_item.vue'
	import {uniBadge,uniCollapse,uniCollapseItem,uniList,uniListItem } from '@dcloudio/uni-ui'

	export default {
		data(){
			return {
				lists:['','','','','','']
			}
		},
		components:{
			projectListItem,
			uniList,
			uniListItem
		},
		methods:{
			clickMore(){
				uni.showModal({
					content: '点击更多',
					showCancel: false
				});
			},
			clickItem(index){
				console.log(index);
			}
		}
	}
</script>

<style scoped lang="less">
	.page {
		background-color: #FFCC33;
		width: 100vw;
		// height: 100vh;
	}
	.container {
		background-color: #FFFFFF;
		margin: 20px 20px;
		text {
			font-weight: 800;
		}
		.listItem {
			height: 80px;
			border-bottom: 1px solid #D3D3D3;
		}
		.bottom {
			border-top: 1px solid #000000;
			text-align: center;
			line-height: 30px;
			margin: 10px 10px 0 10px;
			text {
				font-size: 14px;
			}
		}
	}
</style>
