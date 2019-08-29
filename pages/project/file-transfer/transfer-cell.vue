<template>
	<view class="container">
		<image class="icon" src="../../../static/file_mov.png"></image>
		<view class="middle">
			<text class="title">{{fileName}}</text>
			<progress :percent="progress"
			 activeColor="#007AFF" 
			 style="width: 90%; margin-top: 5px; margin-bottom: 5px; border-radius: 5px;"></progress>
			<text class="detail">{{size}}</text>
		</view>
		<image class="action" src="../../../static/tasklist_pause.png"></image>
	</view>
</template>

<script>
	export default {
		props: {
			fileName: String,
			size: String,
			progress: [String, Number]
		}
	}
</script>

<style scoped>
	.container {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
	
	.icon {
		width: 40px;
		height: 40px;
		margin-left: 16px;
	}
	
	.middle {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 65%;
		justify-content: space-between;
	}
	
	.action {
		width: 30px;
		height: 30px;
		margin-right: 16px;
	}
	
	.title {
		font-size: 14px;
	}
	
	.detail {
		font-size: 11px;
		color: #666666;
	}
	
</style>
