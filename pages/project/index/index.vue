// 首页列表，主要知识点为网格布局和使用字体图标
<template>
	<view class="content">
		<view class="section">
			<view class="section-title">
				<text>常用功能</text>
			</view>
			<UniGrid class="module-grid" :column=4 @change="onCommonModuleClick">
				<uni-grid-item v-for="(item,index) in commonModules">
					<text class="iconfont" :class="item.iconName"></text>
					<text class="text">{{item.title}}</text>
				</uni-grid-item>
			</UniGrid>
		</view>
		<view class="separator"></view>
		<view class="section">
			<view class="section-title">
				<text>更多功能</text>
			</view>
			<UniGrid class="module-grid" :column=4 @change="onMoreModuleClick">
				<uni-grid-item v-for="(item,index) in moreModules">
					<text class="iconfont" :class="item.iconName"></text>
					<text class="text">{{item.title}}</text>
				</uni-grid-item>
			</UniGrid>
		</view>
	</view>
</template>

<script>
	import UniGrid from "../../../components/uni-grid/uni-grid.vue"
	import UniGridItem from "../../../components/uni-grid-item/uni-grid-item.vue"
	import moduleList from "./module-data.js"

	export default {
		components: {
			UniGrid,
			UniGridItem
		},
		data() {
			return {
				commonModules: moduleList.commonModules,
				moreModules: moduleList.moreModules
			}
		},
		onLoad() {
			console.log("on index load");
		},
		methods: {
			// event={detail:{index:0}},
			onCommonModuleClick(event) {
				console.log("common module " + event.detail.index);
				let index = event.detail.index;
				let title = this.$data.commonModules[index].title
				if (title === '投资制度') {
					console.log("forward!");
					uni.navigateTo({
						url: '/pages/project/invest-institution/invest-institution'
					});
				} else if (title === '消息通知') {
					uni.navigateTo({
						url: '/pages/project/message-center/message-center'
					});
				}
			},
			onMoreModuleClick(event) {
				console.log("more module " + event.detail.index);
				let index = event.detail.index;
				if (this.$data.moreModules[index].title === '竞品清单') {
					console.log("forward!");
					uni.navigateTo({
						url: '/pages/project/competive-product/competive-product'
					});
				}
			}
		}
	}
</script>

<style scoped>
	@import "../../../common/css/icon-font.css";

	.section {
		background: #FFFFFF;
	}

	.section-title {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 16px;
		padding-bottom: 10px;
	}

	.module-grid {
		margin-top: 20px;
	}

	.separator {
		height: 10px;
		opacity: 0;
	}

	.content {
		background: #f6f6f6;
	}
</style>
