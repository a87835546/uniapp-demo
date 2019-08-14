<template>
	<view class="container">
		<top-tab-bar
		class="tabbar"
		:tabNames="tabNames"
		:showSlider="true"
		@onTabClick="onTabClick">
		</top-tab-bar>
		<land-basic-info></land-basic-info>
	</view>
</template>

<script>
	import TopTabBar from "../../../../components/top-tab-bar/top-tab-bar.vue"
	import LandBasicInfo from "./land-basic-info.vue"
	
	export default {
		components: {
			TopTabBar,
			LandBasicInfo
		},
		data() {
			return {
				tabNames: ["基础信息","进度管理","流程","附件"]
			}
		},
		methods: {
			onTabClick(index) {
				console.log("parent receive on tab click! ");
			}
		}
	}
</script>

<style scoped>
	.container {
		background-color: #F6F6F6;
	}
	
	.tabbar {
		background-color: #FFFFFF;
		margin-bottom: 8px;
	}

</style>
