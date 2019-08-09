<template>
	<view class="content">
		<view class="item" v-for="(item,index) in obj" :key="index" @click="clickItem(index)">
			<view class="item_contair">
				<uni-icon type="weixin" size = "30" class = "item_icon"></uni-icon>
				<text class="item_content">测试(左右都是icon图标){{index}}</text>
				<uni-icon type="more" size= "30" class = "item_icon_right"></uni-icon>
			</view>
			<view class="item_row">
			</view>
		</view>
	</view>
</template>

<script>
	import {uniIcon} from "@dcloudio/uni-ui"
	export default {
		props:{
			obj:{
				type:Array,
				default:function(e){
					return{
						
					}
				}
			}
		},
		components:{
			uniIcon
		},
		data(){
			return{
				
			}
		},
		methods:{
			clickItem(index){
				alert('点击' + index)
				this.$emit('collapse-item-click',index)

			}
		}
	}
</script>

<style>
	.content {
		color: red;
	}
	.item {
		display: flex;
		flex-direction: column;
		line-height:  80rpx;
		width: 100vw;
		font-size: 12px;
	}
	.item_contair {
		flex: 0 0 auto;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.item_icon {
		flex: 0 ;
		padding-left: 10rpx;
	}
	.item_content {
		flex: 1;
		padding-left: 10rpx;
		box-sizing: border-box;
		font-size: 12;
	}
	.item_icon_right{
		flex: 0;
		padding-right: 10rpx;
	}
	.item_row {
		flex: 0 0 auto;
		height: 1rpx;
		background-color: #4CD964;
		margin: 0 10rpx;
	}
</style>
