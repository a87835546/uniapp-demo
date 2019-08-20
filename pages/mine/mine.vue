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
		
		<view class="tool">
			<text>工具与服务</text>
			<view class="tool_content">
				<view class="list" v-for="(item,index) in tools" :key='index'>
					<view class="list_item" @click="clickTool(index)">
						<image :src="item.imageUrl" mode="scaleToFill"></image>
						<text>{{item.title}}</text>
					</view>
				</view>
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
				],
				tools:[
					{
						title:'客户服务',
						url:'/pages/mine/message/msg',
						imageUrl:'//m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png'
						
					},
					{
						title:'客户服务',
						url:'/pages/mine/message/msg',
						imageUrl:'//m.360buyimg.com/mobilecms/s120x120_jfs/t1/39401/17/2391/5859/5cc06fcfE2ad40668/28cda0a571b4a576.png'
						
					},
					{
						title:'客户服务',
						url:'/pages/mine/message/msg',
						imageUrl:'//m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png'
						
					},
					{
						title:'客户服务',
						url:'/pages/mine/message/msg',
						imageUrl:'//m.360buyimg.com/mobilecms/s120x120_jfs/t1/39401/17/2391/5859/5cc06fcfE2ad40668/28cda0a571b4a576.png'
						
					},
					{
						title:'客户服务',
						url:'/pages/mine/message/msg',
						imageUrl:'//m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png'
						
					},
					{
						title:'客户服务',
						url:'/pages/mine/message/msg',
						imageUrl:'//m.360buyimg.com/mobilecms/s120x120_jfs/t1/39401/17/2391/5859/5cc06fcfE2ad40668/28cda0a571b4a576.png'
						
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
			},
			clickTool(index){
				console.log(index);
			}
		},
		onPullDownRefresh: () => {
			uni.showToast({
				icon:"loading",
				mask:true
			})
			uni.stopPullDownRefresh()
		},
		
	}
</script>

<style scoped lang="less">
	page {
	}
	image {
		width: 30px;
		height: 30px;
	}
	.content{
		/* display: flex; */
	}
	.mine_item {
		flex-direction: column;
		width: 100vw;
		text-align: left;
		line-height: 100rpx;
		display: flex;
		height: 100rpx;
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
	.tool {
		width: 100vw;
	}
	.tool_content {
		display: flex;
		flex-wrap: wrap;
		
	}
	.list {
		display: flex;
		flex-wrap: wrap;
		font-size: 16px;
		color: #444444;
	}
	.list_item {
		width: calc(100vw/4);
		background-color: #D1EFFF;
		line-height: 50px;
		align-items: center;
		justify-content: center;
		display: flex;
		flex-direction: column;	
	}

</style>
