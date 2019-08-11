<template>
	<view class="page">
		<!-- 系统的下拉刷新会有点显示上的bug在下拉刷新的时候可以滑动视图导致加载的动画覆盖到视图上存在显示上的问题 首页就是可以下拉刷新 -->
		<!-- 使用方法
		1.	npm install --save mescroll-uni 
		2. 	import MescrollUni from "mescroll-uni" 引入组件 MescrollUni;
		3.	在pages 页面中添加"app-plus" : {
				"bounce" : "none" 
				}
		4.	使用， 在使用时方法上拉下拉都回调方法中需要传入MescrollUni 的实例。只有MescrollUni的实例可以停止刷新 -->
		<mescroll-uni  @down="downCallback"  @up="upCallback" >
			<view> @down, @up 必须配置 </view>
			<view> :down, :up 可省略 </view>
			<view v-for="data in dataList"> 数据列表... </view>
		</mescroll-uni>
	</view>
</template>

<script>
	
	import MescrollUni from "mescroll-uni";
	export default {
		data(){
			return {
				dataList :['','','','','','','','','']
			}
		},
		components:{
			MescrollUni
		},
		methods:{
			downCallback(mescroll){
				console.log('下拉刷新');
				setTimeout(()=>{mescroll.endDownScroll()},1000)
				
			},
			upCallback(mescroll){
				console.log('上拉刷新');
				mescroll.showNoMore()
				
			}
		}
		
	}
</script>

<style scoped lang="less">
	view {
		height: 300px;;
		width: 100vw;
		.page{
			height: 100vw;
		}
	}
</style>
