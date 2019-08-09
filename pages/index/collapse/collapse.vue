<template>
	<view class="content">
		<uni-collapse @change="change()" class='collapse'>
			<uni-collapse-item title="折叠效果(默认关闭)">
				<uni-list>
					<uni-list-item title="使用uniapp提供的list item" note="描述信息" show-extra-icon="false">23</uni-list-item>
					<uni-list-item title="item2" note="描述信息" show-badge="true" badge-text = "990">12</uni-list-item>
					<uni-list-item title="测试 3"></uni-list-item>
				</uni-list>
			</uni-collapse-item>
			<uni-collapse-item title="折叠效果(默认开启)" open="true">
				<view style="padding: 30upx;"> 折叠内容主体，可自定义内容及样式 </view>
				<view style="padding: 30upx;"> 折叠内容主体，可自定义内容及样式 </view>
			</uni-collapse-item>
			<uni-collapse-item title="折叠效果(禁用状态)" disabled="true">
				<view style="padding: 30upx;"> 禁用状态 </view>
			</uni-collapse-item>
			<uni-collapse-item title = "折叠效果-使用自定义组件展示">
				<collapseItem :obj="dataList" @collapse-item-click="reciveData"></collapseItem>
			</uni-collapse-item>
		</uni-collapse>
	</view>
</template>

<script>
	import collapseItem from './collapse-item.vue'
	import {uniBadge,uniCollapse,uniCollapseItem,uniList,uniListItem } from '@dcloudio/uni-ui'

	export default {
		data(){
			return {
				dataList:['','','']
			}
		},
		components:{
			collapseItem,
			uniCollapse,
			uniCollapseItem,
			uniBadge,
			uniListItem,
			uniList,
		},
		methods:{
			change(e){
				console.log(e);
			},
			/**
			 * 子组件传递值给父组件  this.$emit('方法名'，’参数‘)
			 * */
			reciveData(index){
				console.log(index);
			}
		}
	}
</script>

<style>
</style>
