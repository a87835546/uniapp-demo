<template>
	<view class="container">
		<uni-list>
			<uni-list-item 
			v-for="(item,index) in projects"
			title="item.name"
			:showArrow="ture"
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
					}
				]
			}
		},
		methods: {
			onItemClick() {
				console.log("on item cilck");
			}
		}
	}
</script>

<style>
</style>
