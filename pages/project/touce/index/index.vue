// 首页列表，主要知识点为网格布局和使用字体图标
<template>
	<view class="content">
		<view class="tc-section">
			<view class="tc-section-title">
				<text>常用功能</text>
			</view>
			<UniGrid class="module-grid" :column=4 @change="onCommonModuleClick">
				<uni-grid-item
				v-for="(item,index) in commonModules"
				:key=index>
					<text class="iconfont" :class="item.iconName"></text>
					<text class="text">{{item.title}}</text>
				</uni-grid-item>
			</UniGrid>
		</view>
		<view class="separator"></view>
		<view class="tc-section">
			<view class="tc-section-title">
				<text>更多功能</text>
			</view>
			<UniGrid class="module-grid" :column=4 @change="onMoreModuleClick">
				<uni-grid-item
				 v-for="(item,index) in moreModules"
				 :key="index">
					<text class="iconfont" :class="item.iconName"></text>
					<text class="text">{{item.title}}</text>
				</uni-grid-item>
			</UniGrid>
		</view>
	</view>
</template>

<script>
	import {UniGrid,UniGridItem} from '@dcloudio/uni-ui'
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
						url: '/pages/project/touce/invest-institution/invest-institution'
					});
				} else if (title === '消息通知') {
					uni.navigateTo({
						url: '/pages/project/touce/message-center/message-center'
					});
				} else {
					uni.showModal({
						showCancel:false,
						title:"暂未实现",
						content:"暂未实现"
					})
				}
			},
			onMoreModuleClick(event) {
				console.log("more module " + event.detail.index);
				let index = event.detail.index;
				if (this.$data.moreModules[index].title === '竞品清单') {
					console.log("forward!");
					uni.navigateTo({
						url: '/pages/project/touce/competive-product/competive-product'
					});
				} else {
					uni.showModal({
						showCancel:false,
						title:"暂未实现",
						content:""
					})
				}
			}
		}
	}
</script>

<style scoped>
	@import "../../../../common/css/icon-font.css";
	
	.content {
		background: #FFFFFF;
	}
	
	.tc-section {
		background-color: #FFFFFF;
	}

	.tc-section-title {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 16px;
		padding-bottom: 10px;
	}

	.module-grid {
		width: 100%;
	}

	.separator {
		height: 10px;
		background-color: #F6F6F6;
	}
</style>
