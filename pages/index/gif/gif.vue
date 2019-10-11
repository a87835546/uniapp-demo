<template>
	<view class="page">
		<image src="../../../static/1.gif" mode="scaleToFill" class="bg_image">
			
		</image>
		<button type="primary" class="start" @click="click">立即开始</button>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		},
		methods:{
			click(){
				uni.showModal({
					content: '点击开始按钮',
					showCancel: false
				});
			}
		}
	}
</script>

<style scoped lang="less">
	.page {
		width: 100vw;
		height: 100vh;
		position: relative;
	}
	.bg_image {
		width: 100%;
		height: 100%;
	}
	.start {
		width: 150px;
		height: 40px;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		bottom: 100px;
		text-align: center;
		background-color: #EEEEEE;
		border:  1px solid #EEEEEE;
		color: #000000;
		line-height: 40px;;
		border-radius: 5px;
		
	}
</style>
