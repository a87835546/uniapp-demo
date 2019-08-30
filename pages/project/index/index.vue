<template>
	<view class="container">
		<uni-list>
			<uni-list-item 
			v-for="(item,index) in projects"
			:key="index"
			:title="item.name"
			:showArrow="true"
			@click="onItemClick(item)"></uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	import {uniList, uniListItem} from '@dcloudio/uni-ui'
	
	export default {
		components: {
			uniList,
			uniListItem
		},
		data() {
			return {
				projects:[ 
					{
						name: "投策神器",
						url: "/pages/project/touce/index/index"
					},
					{
						name: "登录",
						url: "/pages/project/login/login"
					},
					{
						name: "签到",
						url: "/pages/project/checkin/checkin"
					},
					{
						name: "搜索",
						url: "/pages/project/search/search"
					},
					{
						name: "传输列表",
						url: "/pages/project/file-transfer/file-transfer"
					},
					{
						name: "列表筛选",
						url: "/pages/project/list-filter/schedules"
					},
					{
						name: "仿银行首页",
						url: "/pages/project/bank/home"
					}
				]
			}
		},
		methods: {
			onItemClick(item) {
				uni.navigateTo({
					url: item.url
				})
			}
		}
	}
</script>

<style>
</style>
