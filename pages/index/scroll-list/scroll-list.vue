<template>
	<view class="page">
		<view class="tabs">
			<view class="tab">
				<text v-for="(item,index) in naviList" :key='index'
					:class="[index == selectIndex ? 'tab_select':'']"
					@click="clickTab(index,$event)"
				>{{item}}</text>
			</view>
			<view class="border" :style="{transform:'translateX(+'+offsetLeft+'px)'}">
				
			</view>
		</view>
		<swiper 
		:indicator-dots="false" 
		:autoplay="false" 
		:interval="3000" 
		@change="change"
		>
			<swiper-item class="listContanier" v-for="(item,index) in naviList" :key='index'>
				<mescroll-uni  @down="downCallback"  @up="upCallback" :top = '0' :fixed = 'false' :scrollTop='scrollTop'>
				<view class="list">
					<view class="cell" v-for="(item,index) in list" :key="index" @click="clickCell(index)">
						{{item}}
					</view>
				</view>
				</mescroll-uni>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import MescrollUni from "mescroll-uni";
	
	export default {
		components:{
			MescrollUni
		},
		data(){
			return {
				naviList:['全部','列表1','列表2','列表3','列表4','列表5'],
				selectIndex:0,
				offsetLeft:15,
				list:['123','111','2222','3333','444'],
				windowTop:{
					type:Number,
					default:0
				},
				mescroll:null,
				scrollTop:0
			}
		},
		computed:{
			
		},
		onLoad:function(e){
			console.log(this.windowTop);
		},
		created: function(e) {
			let that = this
			uni.getSystemInfo({
				success:function(res){
					console.log(res.windowTop);
					if(res.windowTop) that.windowTop = res.windowTop; // 修正app和H5的top值
				}
			})
		},
		methods:{
			clickTab(index,e){
				this.selectIndex = index;
				console.log(e.currentTarget.offsetLeft);
				this.offsetLeft =  e.currentTarget.offsetLeft + 15;
				this.downCallback(this.mescroll);
			},
			change(e){
				console.log(e.detail.current);
				this.selectIndex = e.detail.current;
				let width = 0;
				const query = uni.createSelectorQuery().select('.tab');
				query.boundingClientRect(data => {
				  console.log("得到布局位置信息" + JSON.stringify(data));
				  console.log("节点离页面顶部的距离为" + data.width);
				  width = data.width;
				  this.offsetLeft =  this.selectIndex * (width/this.naviList.length) + 15;
				  console.log(this.offsetLeft);
				}).exec();
				
				this.scrollTop = 0;
			},
			downCallback(mescroll){
				console.log('下拉刷新');
				this.mescroll = mescroll;
				setTimeout(()=>{mescroll.endDownScroll()},1000)
				
			},
			upCallback(mescroll){
				console.log('上拉刷新');
				mescroll.showNoMore()
				
			},
			clickCell(index){
				console.log(index);
			}
		}
	}
</script>

<style scoped lang="less">
	.page {
		background-color: #f1f1f1;
		height: calc(100vh - 44px);
	}
	.tab{
		display: flex;
		flex-direction: row;
		text-align: center;
		background-color: rgb(246, 246, 246);
		height: 62rpx;
		line-height: 60rpx;
		text {
			flex: 1;
			color: #1a1a1a;
			font-size: 14px;
		}
		.tab_select {
			color: red;
		}
	}
	.border {
		background-color: red;
		width: 60rpx;
		height: 1rpx;
	}
	swiper {
		height: calc(100vh - 62rpx);
	}
	
	swiper-item.listContanier {
		
		.list {

			.cell {
				height: 170px;
				background-color: white;
				margin: 5px;
				border-radius: 5px;
			}
		}
	}
	
</style>
