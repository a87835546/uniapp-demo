<template>
	<view v-show="show">
		<view :style="{ top: offsetTop + 'px' }" class="ad-popup-mask" :class="{'ad-popup-mask--show': showMask}" @tap="hide"
		 @touchmove.stop.prevent="moveHandle" />
		<view class="ad-popup-content">
			<!-- {{'广告弹窗'}} -->
			<!-- <slot /> -->
			<image class="ad-image" src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" mode="aspectFit" @tap="tapAd"></image>
			<image class="ad-close-bottom" src="/static/ad-close.png" mode="aspectFit" @tap="closeMask" />
		</view>
	</view>
</template>

<script>
	export default {
		name: 'UniPopup',
		props: {
			/**
			 * 页面显示
			 */
			show: {
				type: Boolean,
				default: false
			},
			/**
			 * h5遮罩是否到顶
			 */
			h5Top: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				offsetTop: 0,
				showMask: false
			}
		},
		watch: {
			h5Top(newVal) {
				if (newVal) {
					this.offsetTop = 44
				} else {
					this.offsetTop = 0
				}
			},
			// show(newVal) {
			// 	this.showMask = newVal
			// 	console.log("this.showMask:", this.showMask)
			// 	if (newVal == 1) {
			// 		this.animation.opacity(1)
			// 		this.fadeAnimationData = this.animation.export()
			// 		consolo.log("this.fadeAnimationData:", this.fadeAnimationData)
			// 	}
			// }
		},
		created() {
			let offsetTop = 0
			// #ifdef H5
			if (!this.h5Top) {
				offsetTop = 44
			} else {
				offsetTop = 0
			}
			// #endif
			this.offsetTop = offsetTop
			let that = this
			// this.$nextTick(function(){
				that.showMask = true
			// })
		},
		methods: {
			tapAd() {
				uni.navigateTo({
					url: '/pages/index/SegmentedBar/SegmentedBar',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
				this.$emit('hidePopup')
			},
			hide() {
				// this.$emit('hidePopup')
			},
			closeMask() {
				this.$emit('hidePopup')
				// this.showMask = !this.showMask
			},
			moveHandle() {}
		}
	}
</script>

<style>
	.ad-popup-mask {
		position: fixed;
		z-index: 998;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		transition-property: opacity;
		transition-duration: 1.25s;
		background-color: rgba(0, 0, 0, 0.3);
		opacity: 0;
	}

	.ad-popup-mask--show {
		opacity: 1;
	}

	.ad-popup-content {
		position: fixed;
		z-index: 999;
		/* background-color: #ffffff; */
		min-width: 100upx;
		max-width: 90%;
		min-height: 100upx;
		max-height: 80%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.ad-close-bottom {
		position: absolute;
		bottom: -60upx;
		z-index: -1;
		width: 60px;
		height: 60upx;
		/* 	flex-shrink:0; */
	}
</style>
