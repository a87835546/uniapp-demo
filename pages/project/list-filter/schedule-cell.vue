<template>
	<view class="container">
		<text class="carrier">{{carrier}}</text>
		<text class="middle"> from {{fromCity}} to {{toCity}}</text>
		<text class="info">离港时间:{{departure}} 到达时间:{{arrival}}</text>
		<text class="info">航行时间: {{transitTime}}</text>
	</view>
</template>

<script>
	export default {
		props: {
			carrier: String,
			fromCity: String,
			toCity: String,
			departure: String,
			arrival: String,
			transitTime: Number
		}
	}
</script>

<style scoped>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: flex-start;
		height: 120px;
		background-color: #FFFFFF;
		padding-left: 16px;
		border-bottom-style: solid;
		border-bottom-color: #666666AA;
		border-bottom-width: 1px;
	}
	
	.carrier {
		font-size: 18px;
		color: #444444;
	}
	
	.middle {
		font-size: 14px;
		color: #6C6C6C;
	}
	
	.info {
		font-size: 12px;
		color: #808080;
	}
	
</style>
