<template>
	<page>
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
				<text class="tool_title">工具与服务</text>
				<view class="tool_row">
				</view>
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
	</page>
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
						title:'主题换肤',
						url:'/pages/mine/message/msg',
						imageUrl:'//m.360buyimg.com/mobilecms/s120x120_jfs/t1/39401/17/2391/5859/5cc06fcfE2ad40668/28cda0a571b4a576.png'
						
					},
					{
						title:'闲置管家',
						url:'/pages/mine/message/msg',
						imageUrl:'//m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png'
						
					},
					{
						title:'我的预约',
						url:'/pages/mine/message/msg',
						imageUrl:'//m.360buyimg.com/mobilecms/s120x120_jfs/t1/39401/17/2391/5859/5cc06fcfE2ad40668/28cda0a571b4a576.png'
						
					},
					{
						title:'我的试用',
						url:'/pages/mine/message/msg',
						imageUrl:'//m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png'
						
					},
					{
						title:'我的拼购',
						url:'/pages/mine/message/msg',
						imageUrl:'//m.360buyimg.com/mobilecms/s120x120_jfs/t1/39401/17/2391/5859/5cc06fcfE2ad40668/28cda0a571b4a576.png'
						
					},
					{
						title:'我的必购码',
						url:'/pages/mine/message/msg',
						imageUrl:'//m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png'
						
					},
					{
						title:'更多',
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

<style lang="less">
	template {
		background-color: yellow
	}
	image {
		width: 30px;
		height: 30px;
	}
	page {
		background-color: #f1f1f1;
	}
	.mine_item {
		flex-direction: column;
		width: 100vw;
		text-align: left;
		line-height: 100rpx;
		display: flex;
		height: 100rpx;
		background-color: white
	}
	.mine_item_content {
		display: inline-flex;
		align-items: center;
		overflow: hidden;
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
		margin: 10px 0;
		border-radius: 5px;
		background-color: white;
	}
	.tool_title {
		font-size: 14px;
		line-height: 30px;
		font-weight: 400;
		padding-left: 10px;
	}
	.tool_row {
		height: 1rpx;
		background-color: #f1f1f1;
	}
	.tool_content {
		display: flex;
		flex-wrap: wrap;
		margin-top: 10px;
	}
	.list {
		display: flex;
		flex-wrap: wrap;
		font-size: 16px;
		color: #444444;
	}
	.list_item {
		width: calc(100vw/4);
		align-items: center;
		justify-content: center;
		display: flex;
		flex-direction: column;	
		text {
			font-size: 11px;
			font-weight: 100;
			line-height: 30px;
		}
	}

</style>
