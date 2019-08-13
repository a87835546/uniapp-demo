<template>
	<scroll-view class="index-scroll-view" :style="{height:windowHeight + 'px'}" scroll-y="true">
		<view class="index-content">
			<index-switch-bar :tabs="tabs" :index="curIndex" @selectIndexChanged="selectIndexChanged"></index-switch-bar>
			<swiper class="index-content__swiper" :current="curIndex" @change="swiperChange">
				<swiper-item v-for="(item, index) in tabs" :key="index">
					<view class="index-content__list" :style="{background:backgrounds[index]}">{{item}}</view>
				</swiper-item>
			</swiper>
		</view>
	</scroll-view>
</template>

<script>
	/**
	 * 引入选项卡组件
	 */
	import IndexSwitchBar from "../../../../components/index-switch-bar.vue"

	export default {
		components: {
			IndexSwitchBar,
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
			selectIndexChanged(index) {
				this.curIndex = index
			},
			swiperChange(e) {
				this.curIndex = e.detail.current
				console.log("index:", e.detail.current)
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
		height: 1000upx;
	}
	
	.index-content__list {
		width: 100%;
		height: 1000upx;
	}
	
</style>
