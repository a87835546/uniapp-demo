// 投资制度，主要是左侧导航的控件
<template>
	<view class="container">
		<view class="page-body">
			<scroll-view scroll-y class="nav-left">
				<view
				 class="left-item"
				 v-for="(item,index) in types"
				 :key="item.ruleTypeId"
				 @click="onLeftItemClick(item.ruleTypeId,index)"
				 :class="index===activeIndex?'active':''">
					<text>{{item.ruleTypeName}}</text>
				</view>
			</scroll-view>
			
			<scroll-view class="nav-right" scroll-y>
				<institution-detail-cell
				v-for="(item,index) in details"
				:title="item.fileName"
				:size="item.size"
				:area="item.areaName"
				:creator="item.creator"
				:time="item.creatimeTime">
				</institution-detail-cell>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import investData from "./invest-data.js"
	import institutionDetailCell from "./institution-detail-cell.vue"
	
	export default {
		components: {
			institutionDetailCell
		},
		data() {
			return {
				types: investData.institutionTypes,
				activeIndex: 0
			}
		},
		computed: {
			details() {
				return investData.institutionDetails[this.$data.activeIndex].data;
			}
		},
		onLoad() {
			console.log("invest onload " + investData.institutionTypes);
		},
		methods: {
			onLeftItemClick(typeID, index) {
				console.log("type id is " + typeID);
				this.$data.activeIndex = index;
			}
		}
	}
</script>

<style>
	.container {
		background: #F6F6F6;
	}
	
	.page-body {
		width: 100%;
		display: flex;
		flex-direction: row;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		top: 0;
	}
	
	.nav-left {
		width: 30%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		background: #F6F6F6;
	}
	
	.left-item {
		border-width: 0;
		border-bottom-width: 1px;
		border-style: solid;
		border-color: #C0C0C0;
		height: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.nav-right {
		border-width: 0;
		border-left-width: 1px;
		border-style: solid;
		border-color: #C0C0C0;
		width: 70%;
	}
	
	.active {
		color: #F0AD4E;
		background: #FFFFFF;
	}
</style>
