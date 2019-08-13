<template>
    <view id="competition">
        <view class="container" @click="$emit('forwardToDetail')">
            <text class="s-title">{{name}}</text>
            <view class="detailContainer">
                <view class="s-detail">容积率: {{plotRatio}}</view>
                <view class="s-detail">占地面积: {{area}}亩</view>
            </view>
            <view class="separator"></view>
        </view>
    </view>
</template>

<script>
export default {
	props: {
      name: String,
      plotRatio: [Number, String],
      area: [String, Number],
	},
	methods: {
		
	}
}
</script>

<style scoped>
    .container {
        background-color: #FFFFFF;
        display: flex;
        flex-direction: column;
    }

    .detailContainer {
        display: inline-flex;
        flex-direction: row;
    }

    .s-title {
        margin-left: 10px;
		margin-top: 20px;
		margin-bottom: 20px;
        text-align: left;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 16px;
        color: #333333;
        height: 20px;
    }

    .s-detail {
        margin-left: 10px;
        text-align: left;
        width: 50%;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 14px;
        color: #666666;
        margin-bottom: 8px;
    }

    .separator {
        background-color: #f6f6f6;
        height: 10px;
    }
</style>