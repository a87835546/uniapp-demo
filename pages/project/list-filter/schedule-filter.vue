<template>
	<view class="container">
		<view class="section-title">承运人</view>
		<uni-list>
			<uni-list-item
			:title="carrier"
			showArrow="true"
			@click="selectCarrier">
			</uni-list-item>
		</uni-list>
		<view class="section-title">最小运输时间</view>
		<uni-list>
			<view class="slider">
				<slider
				:value="minTransition"
				block-color="#18B4FE"
				block-size="20"
				@change="minTransitionTimeChange"
				></slider>	
				<text>{{minTransition}}</text>
			</view>
		</uni-list>
		<view class="section-title">最大运输时间</view>
		<uni-list>
			<view class="slider">
				<slider
				:value="maxTransition"
				block-color="#18B4FE"
				block-size="20"
				@change="maxTransitionTimeChange"
				></slider>	
				<text>{{maxTransition}}</text>
			</view>
		</uni-list>
		<view class="section-title">直航/转运</view>
		<uni-list>
			<uni-list-item
			title="只显示直航"
			:showArrow="false"
			:showSwitch="true"
			:switch-checked="showDirectOnly"
			@switchChange="switchChange">
			</uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	import {uniList, uniListItem} from '@dcloudio/uni-ui'
	export default {
		data() {
			return {
				carrier: "OOLU",
				minTransition: 0,
				maxTransition: 100,
				showDirectOnly: false,
				availableCarriers: []
			}
		},
		props: {
			originCondition: Object
		},
		methods: {
			selectCarrier() {
				console.log("select carrier");
				let self = this;
				let carriers = self.$data.availableCarriers;
				uni.showActionSheet({
				    itemList: carriers,
				    success: function (res) {
						self.carrier = carriers[res.tapIndex];
				    },
				    fail: function (res) {
				        console.log(res.errMsg);
				    }
				});
			},
			minTransitionTimeChange(e) {
				this.minTransition = e.detail.value;
			},
			maxTransitionTimeChange(e) {
				this.maxTransition = e.detail.value;
			},
			switchChange() {
				console.log("switch");
			},
			applyOriginConditions(conditions) {
				// 深拷贝
				let currentCondition = JSON.parse(JSON.stringify(conditions));
				this.$data.carrier = currentCondition.carrier;
				this.$data.minTransition = currentCondition.minTransition;
				this.$data.maxTransition = currentCondition.maxTransition;
				this.$data.showDirectOnly = currentCondition.showDirectOnly;
			}
		},
		components: {
			uniList,
			uniListItem
		},
		onShow() {
			console.log("filter page on show");
			let filterCondition = getApp().globalData.scheduleFilterCondition;
			this.applyOriginConditions(filterCondition);
			this.availableCarriers = getApp().globalData.availableCarriers;
		},
		onNavigationBarButtonTap(e) {
			let condition = {
				carrier: this.$data.carrier,
				minTransition: this.$data.minTransition,
				maxTransition: this.$data.maxTransition,
				showDirectOnly: this.$data.showDirectOnly
			}
			// 通过全局变量传值
			getApp().globalData.scheduleFilterCondition = condition;
			uni.navigateBack();
		}
	}
</script>

<style>
	.container {
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	
	.section-title {
		font-size: 32upx;
		line-height: 32upx;
		color: #777;
		margin: 40upx 25upx;
		position: relative
	}
	
	.slider {
		display: flex;
		height: 50px;
		flex-direction: row;
		align-content: center;
		align-items: center;
	}
	
	slider {
		width: 300px;
	}
</style>
