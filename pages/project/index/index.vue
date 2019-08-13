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
