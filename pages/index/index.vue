<template>
	<view class="content">
		<uni-badge text="1" type=""></uni-badge>
		<view class="text-area" v-on:click="test()">
			<text class="title">{{title}}</text>
		</view>
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
		<view class="content_item" v-for="(newitem,index) in dataList" :key='index' @click="clickItem(index)">
			<item :title="index" class="home" ></item>
		</view>
		<!-- <input type="text" value="123" placeholder="测试一下" focus="true" /> -->
		<view class="test">
			<test></test>
		</view>
	</view>
</template>

<script>
	import item from './home-item.vue'	
	import test from './test.vue'
	import collapseItem from './collapse-item.vue'
	import {post,get} from '../utils/httpRequest.js'
	import {uniBadge,uniCollapse,uniCollapseItem,uniList,uniListItem } from '@dcloudio/uni-ui'
	export default {
		data() {
			return {
				title: 'Hello',
				dataList:[
					{
						title:"下拉刷新 和上来加载更多"
					}
					,
					{
						title:'1'
					}
					,
					{
						title:'2'
					}
					,
					{
						title:'3'
					}
					,
					{
						title:''
					}
					,
					{
						title:''
					}
					,
					{
						title:''
					}
					,
					{
						title:''
					}
					,
					{
						title:''
					}
					,
					
					],
			}
		},
		onLoad:function(e){
			console.log('111');
			this.$on('collapse-item-click',function(valuue){
				console.log(valuue);
			})
		},
		components:{
			item,
			uniCollapse,
			uniCollapseItem,
			uniBadge,
			uniListItem,
			uniList,
			test,
			collapseItem
		},
		methods: {
			clickItem(index){
				console.log('111');
				uni.navigateTo({
					url:'../mine/message/msg'
				})
			},
			test(){
				console.log('test');
				get('https://www.baidu.com').then(result=>{
					console.log(result);
				}).catch(e=>{
					console.log(e);
				})
			},
			change(){
				console.log('change');
			},
			// 接受子组件传递来的值
			reciveData(index){
				console.log(index);
			}
		},
		onPullDownRefresh:function(){
			console.log('refresh');
			setTimeout(function() {
				uni.stopPullDownRefresh()
			}, 1000);
		},
		
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50upx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
	.content_item {
		width: 100vw;
	}
	.home {
		border-bottom: 1rpx solid #C0C0C0;
	}
	.collapse {
		width: 100vw;

	}
	
	uni-collapse-item {
		height: 100%;;
		width: 100vw;
	}
</style>
