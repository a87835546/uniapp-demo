<template>
	<view class="container">
		<UniGrid
		 class="module-grid"
		 :column=4
		 :showBorder="false"
		 @change="onCommonModuleClick">
			<uni-grid-item v-for="(item,index) in modules">
				<text class="iconfont" :class="item.iconName"></text>
				<text class="text">{{item.title}}</text>
			</uni-grid-item>
		</UniGrid>
		<land-trend class="land-trend"></land-trend>
	</view>
</template>

<script>
	import {UniGrid,UniGridItem} from '@dcloudio/uni-ui'
	import landData from "./land-data.js"
	import LandTrend from "./land-trend.vue"
	
	export default {
		components: {
			UniGrid,
			UniGridItem,
			LandTrend
		},
		data() {
			return {
				modules: landData.landModules
			}
		},
		onLoad() {
			console.log("test for ignore");
		}
	}
</script>

<style scoped>
	@import "../../../common/css/icon-font.css";
	
	.module-grid {
		background-color: #FFFFFF;
	}
	
	.text {
		color: #007AFF;
	}
	
	.land-trend {
		margin-top: 8px;
	}
</style>
