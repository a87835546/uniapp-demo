<template>
	<!-- <scroll-view class="index-scroll-view" :style="{height:windowHeight + 'px'}" scroll-y="true"> -->
	<view class="index-content">
		<segmented-bar :tabs="tabs" :index="curIndex" @selectIndexChanged="selectIndexChanged"></segmented-bar>
		<swiper class="index-content__swiper" :style="{height:swiperHeight + 'px'}" :current="curIndex" @change="swiperChange">
			<swiper-item v-for="(item, index) in tabs" :key="index">
				<view class="index-content__list" :style="{background:backgrounds[index], height:swiperHeight + 'px'}">{{item}}</view>
			</swiper-item>
		</swiper>
	</view>
	<!-- </scroll-view> -->
</template>

<script>
	/**
	 * 引入选项卡组件
	 */
	import SegmentedBar from "../../../components/segmented-bar.vue"

	export default {
		components: {
			SegmentedBar,
		},
		data() {
			return {
				tabs: ['全部', '奶粉', '面膜', '图书', '女装'], //选项卡的标题
				backgrounds: ["#126598", "#644793", "#896521", "#987686", "#654769"], //列表的颜色
				curIndex: 2, //初始选中的选项卡
				windowHeight: 0,
			}
		},
		onLoad() {
			let that = this
			uni.getSystemInfo({
				success: function(res) {
					that.windowHeight = res.windowHeight
					console.log("that.windowHeight:", that.windowHeight)
				},
				fail() {
					that.windowHeight = 0
					console.log("获取窗口信息失败", that.windowHeight)
				}
			});
		},
		methods: {
			/**
			 * 选择的选项卡变化
			 * @param {Number} index 索引
			 */
			selectIndexChanged(index) {
				this.curIndex = index
			},
			/**
			 * 控件滑动变化后回调
			 * @param {Object} e 事件对象
			 */
			swiperChange(e) {
				this.curIndex = e.detail.current
				console.log("index:", e.detail.current)
			}
		},
		computed: {
			swiperHeight() {
				let height = this.windowHeight - uni.upx2px(80);
				console.log('swiperHeight:', height)
				return height
			}
		}
	}
</script>

<style>
	.index-scroll-view {
		/* height: 700upx; */
	}

	.index-content {
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	.index-content__swiper {
		width: 100%;
	}

	.index-content__list {
		width: 100%;
	}
</style>
