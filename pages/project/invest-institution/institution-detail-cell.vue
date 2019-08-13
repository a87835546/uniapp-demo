<template>
	<view class="cell-container">
		<text class="title">{{title}}</text>
		<view class="middle-line">
			<text class="detail">{{size}}</text>
			<text class="detail">{{creator}}</text>
			<text class="detail">{{time}}</text>
		</view>
		<text class="detail">{{area}}</text>
	</view>
</template>

<script>
	export default {
		props: {
			title: String,
			size: String,
			creator: String,
			time: String,
			area: String
		}
	}
 </script>

<style scoped>
	.cell-container {
		display: flex;
		flex-direction: column;
		border: 0 #999999;
		border-style: solid;
		border-bottom-width: 1px;
		height: auto;
	}
	
	.middle-line {
		text-align: center;
		display: flex;
		flex-direction: row;
	}
	
	.title {
		margin: 10px;
		font-size: 15px;
		color: #000000;
	}
	
	.detail {
		margin: 10px;
		margin-top: 0;
		font-size: 11px;
		color: #555555;
	}
</style>
