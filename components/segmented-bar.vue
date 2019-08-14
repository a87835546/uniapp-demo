<template>
	<view class="segmented-bar">
		<view class="segmented-bar__nav">
			<view v-for="(tab, i) in tabs" :key="i" class="segmented-bar__item" :class="{'segmented-bar__item--active':curIndex===i}"
			 @click="changeTab(i)">{{tab}}</view>
		</view>
		<view class="segmented-bar__active-bar" :style="{width:activeBarWidth}" :animation="animationData"></view>
		<view class="segmented-bar__bottom-line"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				curIndex: 0, // 当前tab的下标
				animationData: '',
				windowWidth: 0
			};
		},
		props: {
			tabs: {
				type: Array,
				default () {
					return []
				}
			},
			index: {
				type: Number,
				default: 0
			}
		},
		created() {
			this.animation = uni.createAnimation({
				transformOrigin: "50% 50%",
				duration: 250, //动画时间
				timingFunction: "ease",
				delay: 0
			})
			let that = this
			uni.getSystemInfo({
				success: function(res) {
					that.windowWidth = res.windowWidth
					that.initBar()
				},
				fail() {
					that.windowWidth = 0
					that.initBar()
				}
			});

		},
		methods: {
			/**
			 * 初始化宽度和位置
			 */
			initBar() {
				let tabCount = this.tabs.length;
				if (tabCount == 0) {
					tabCount == 1
				}
				let itemWidth = this.windowWidth * 1.00 / tabCount
				this.curIndex = this.index
				console.log(this.index, itemWidth)
				this.animation.translateX(this.curIndex * itemWidth).step()
				this.animationData = this.animation.export()
			},
			/**
			 * @param {Object} i 点击切换
			 */
			changeTab(i) {
				let tabCount = this.tabs.length;
				if (tabCount == 0) {
					tabCount == 1
				}

				let itemWidth = this.windowWidth * 1.00 / tabCount
				this.curIndex = i
				this.animation.translateX(i * itemWidth).step()
				this.animationData = this.animation.export()
				this.$emit("selectIndexChanged", i) //触发事件
			}

		},
		watch: {
			/**
			 * @param {Object} value 监控选择的索引改变，重新设置底下选择条的位置
			 */
			index(value) {
				this.initBar()
			}
		},
		computed: {
			/**
			 * 计算选项卡的宽度变化
			 */
			activeBarWidth() {
				let tabCount = this.tabs.length;
				if (tabCount == 0) {
					tabCount == 1
				}
				let barWidth = 100 / tabCount;
				console.log(tabCount, 'width:' + barWidth + '%')
				return barWidth + '%'
			}
		}

	}
</script>

<style scoped>
	.segmented-bar {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		align-items: flex-start;
		justify-content: flex-start;
		width: 100%;
		height: 80upx;
	}

	.segmented-bar__nav {
		flex: 1;
		display: flex;
		flex-direction: row;
		text-align: center;
		align-items: center;
		justify-content: center;
		width: 100%;
	}

	.segmented-bar__item {
		flex: 1;
		font-size: 28upx;
		color: #666666;
	}

	.segmented-bar__item--active {
		font-size: 30upx;
		color: #333333;
	}

	.segmented-bar__active-bar {
		flex: 0 0 5upx;
		background: #18B4FE;
	}

	.segmented-bar__bottom-line {
		flex: 0 0 1upx;
		width: 100%;
		background: #DDDDDD;
	}
</style>
