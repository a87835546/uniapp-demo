<template>
	<view class="container">
		<view 
		v-for="(item,index) in messages"
		class="message-card"
		@click="$emit('onCardClick',index)">
			<text class="title">{{item.title}}</text>
			<text class="detail">{{item.time}}</text>
			<text class="detail">{{item.sender}}</text>
			<text class="detail">{{item.detail}}</text>
			<view class="line"></view>
			<text class="check">查看</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			messages: Array
		},
		methods: {
		}
	}
</script>

<style scoped>
	.container {
		display: flex;
		flex-direction: column;
		background-color: #F6F6F6;
		height: 100%;
	}
	
	.message-card {
		display: flex;
		flex-direction: column;
		background-color: #FFFFFF;
		height: auto;
		margin: 10px;
		margin-bottom: 0;
	}
	
	.title {
		font-size: 18px;
		font-weight: bold;
		margin-top: 8px;
		margin-bottom: 8px;
		margin-left: 16px;
	}
	
	.detail {
		font-size: 13px;
		margin-bottom: 8px;
		margin-left: 16px;
	}
	
	.check {
		font-size: 14px;
		margin-bottom: 8px;
		margin-left: 16px;
		margin-top: 8px;
	}
	
	.line {
		height: 1px;
		background-color: #C0C0C0;
		margin-left: 16px;
		margin-right: 16px;
	}
	
</style>
