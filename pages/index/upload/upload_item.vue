<template>
	<view class="item_page">
		<view class="item_container">
			<view class="left">
				<text>{{title}}</text>
			</view>
			<view class="right">
				<text @click="upload">上传></text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		},
		props:{
			title:{
				type:String,
				
			}
		},
		methods:{
			upload(){
				uni.chooseImage({
					success: (res) => {
						const tempFilePaths = res.tempFilePaths;
						console.log(tempFilePaths);
						uni.uploadFile({
							url:'',
							filePath:tempFilePaths[0],
							name:'file',
							success: (result) => {
								console.log(result);
							},
							fail: (err) => {
								console.log(err);
							}
						})
					}
				})
				
			}
		}
	}
</script>

<style scoped lang="less">
	.item_page {
		height: 50px;
		align-items: center;
	}
	.item_container {
		display: flex;
		flex-direction: row;
		text-align: center;
		line-height: 30px;
		.left {
			flex: 1 0 auto;
		}
		.right {
			flex: 1 0 auto;
		}
	}
</style>
