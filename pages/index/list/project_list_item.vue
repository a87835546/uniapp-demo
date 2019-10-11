<template>
	<view class="item_page">
		<view class="item_container">
			<view class="level">
				<image src="../../../static/file_mov.png" mode="scaleToFill"></image>
			</view>
			<view class="header">
				<image src="../../../static/img_login_logo.png" mode=""></image>
			</view>
			<view class="user_name">
				<text>11</text>
				<text>22</text>
			</view>
			<view class="total">
				<text>33</text>
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
		methods: {
			
		}
	}
</script>

<style scoped lang="less">
	image {
		width: 40px;
		height: 40px;
	}
	.item_page {
		height: 80px;
	}
	.item_container {
		height: 60px;
		width: 90%;
		padding-top: 10px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		text-align: center;
		
		.level {
			padding-right: 10px;
			width: 40px;
			height: 40px;
			flex: 0 0 auto;
		}
		.header {
			padding-right: 10px;
			width: 40px;
			height: 40px;
			flex: 0 0 auto;
		}
		.user_name {
			padding-right: 10px;
			flex: 1 0 auto;
			display: flex;
			flex-direction: column;
			text {
				line-height: 30px;;
				text-align: left;
			}
		}
		.total {
			flex: 1 0 auto;
			line-height: 80px;
			text-align: right;
		}

	}
</style>
