<template>
	<view class="content">
		<view>页面传参演示</view>
		<view class="mine_item" v-for="(item,index) in dataList" :key="index">
			<view class="mine_item_content"  @click="clickItem(index)">
				<image class="item_image" src="../../static/logo.png" mode="center"></image>
				<text class="item_text">{{item.title}}</text>
				<image class="item_image_right" src="../../static/logo.png" mode="center"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				dataList :[
					{
						title:'消息中心',
					},
					{
						title:'帮助中心',
					},
					{
						title:'关于我们',
					},
					{
						title:'喜欢我们',
					},
				]
			}
		},
		methods:{
			clickItem(index){
				console.log('传过去的值:', index);
				uni.navigateTo({
					url: '/pages/mine/message/msg?id='+index + '&title='+this.dataList[index].title,
					success: res => {},
					fail: () => {},
					complete: () => {

					}
				});
			}
		},
		onPullDownRefresh: () => {
			uni.showToast({
				icon:"loading",
				mask:true
			})
			uni.stopPullDownRefresh()
		}
	}
</script>

<style>
	page {
	}
	.content{
		/* display: flex; */
	}
	.mine_item {
		flex-direction: column;
		width: 100vw;
		text-align: left;
		line-height: 80rpx;
		display: flex;
		height: 80rpx;
	}
	.mine_item_content {
		display: inline-flex;
		align-items: center;
	}
	.item_image {
		flex: 0 0 auto;
		width: 30rpx;
		height: 30rpx;
		padding: 0 10px 0 10px;
	}
	.item_text {
		flex: 1;
	}
	.item_image_right {
		flex: 0 0 auto;
		width: 30rpx;
		height: 30rpx;
		padding: 0 10rpx 0 10rpx;
	}

</style>
