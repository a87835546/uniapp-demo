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
				schedules: scheduleData.schedules,
			} 
		},
		methods: {
			getFilterCondition() {
				return {
					carrier: "OOCL",
					minTransition: 10,
					maxTransition: 50,
					showDirectOnly: true,
				}
			}
		},
		onNavigationBarButtonTap(e) {
			// 通过全局变量传值
			getApp().globalData.scheduleFilterCondition = this.getFilterCondition();
			getApp().globalData.availableCarriers = ["OOCL","COSCO","LGD"];
			uni.navigateTo({
				url: "/pages/project/list-filter/schedule-filter"
			})
		},
		onShow() {
			console.log("schedules on show");
			// 通过全局变量取值
			let condition = getApp().globalData.scheduleFilterCondition;
			if (condition !== undefined) {
				console.log("list receive condition: " + JSON.stringify(condition));
				// 这里根据回传的筛选条件对数据源做筛选
				let matchSchedule = scheduleData.schedules.filter(function(item,index,array) {
					let carrierMatch = (item.carrierScac === condition.carrier);
					let transitionMatch = (item.transitTime <= condition.maxTransition && item.transitTime >= condition.minTransition);
					return carrierMatch && transitionMatch;
				});
				this.$data.schedules = matchSchedule;
				getApp().globalData.scheduleFilterCondition = this.getFilterCondition();
			}
		}
	}
</script>

<style scoped>
</style>
