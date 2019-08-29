<template>
	<view class="container">
		<uni-list>
			<schedule-cell
			class="cell"
			v-for="(item,index) in schedules"
			:key="index"
			:transitTime="item.transitTime"
			:arrival="item.fnd.eta"
			:departure="item.por.etd"
			:carrier="item.carrierScac"
			:fromCity="item.por.location.name"
			:toCity="item.fnd.location.name"
			>
			</schedule-cell>
		</uni-list>
	</view>
</template>

<script>
	import {uniList, uniListItem} from '@dcloudio/uni-ui'
	import scheduleCell from './schedule-cell.vue'
	import scheduleData from './schedules-data.js'
	export default {
		components: {
			uniList,
			uniListItem,
			scheduleCell
		},
		data() {
			return {
				schedules: scheduleData.schedules
			} 
		},
		onNavigationBarButtonTap(e) {
			uni.navigateTo({
				url: "/pages/project/list-filter/schedule-filter"
			})
		}
	}
</script>

<style scoped>
</style>
