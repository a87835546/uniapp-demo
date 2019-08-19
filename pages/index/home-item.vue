<template>
	<view class="content">
		<view class="item_content">
			<view class="item_content_top">
				<uni-icon type="contact" class = "item_content_top_left" size="25"></uni-icon>
				<view class="item_content_contair">
					<text class="item_content_title">主标题:{{model.title}}</text>
					<text class="item_content_desc">副标题:{{model.subtitle ? model.subtitle : title}}</text>
				</view>
				<uni-badge v-if="showBadge"  text="10" type="primary"></uni-badge>
				<uni-icon type="arrowright" class = "item_content_top_right" size="20"></uni-icon>
			</view>
			<view class="item_content_bottom">
			</view>
		</view>
	</view>
</template>

<script>
	import {uniIcon,uniBadge} from '@dcloudio/uni-ui'
	export default {
		components:{
			uniIcon,
			uniBadge
		},
		props:{
			title:{
				type:Number,
				default:0
			},
			model:{
				type:Object,
				default:function (e){
					return{
						
					}
				}
			},
			// 是否显示 badge 
			showBadge:{
				type:Boolean,
				default:false
			}
		},
		data(){
			return {
				
			}
		},
		onLoad:function(e){
			console.log('home-item');
		}
	}
</script>

<style scoped>
	.content {
		width: 100vw;
		height: 120upx;
	}
	.item_content {
		flex-direction: column;
		display: flex;
		/* #ifdef H5 */
		width: 100%;
		/* #endif */
		/* #ifndef H5 */
		width: 100vw;
		/* #endif */
		padding: 0 10rpx 0 10rpx;
		box-sizing: border-box;
		justify-content: flex-start;
		overflow: hidden;
		
	}
	.item_content_top {
		display: flex;
		flex: 1;
		flex-direction: row;
		align-items: center;
	}

	.item_content_bottom {
		flex: 0 0 auto;
		height: 1rpx;
		background-color: #F1F1F1;
		margin: 0 10rpx;
		
	}
	.item_content_top_left {
		flex: 0 0 auto;
	}
	.item_content_top_right {
		flex: 0 0 auto;
	}
	.item_content_contair {
		flex: 1;
		margin: 0 10rpx;
		
	}
	.item_content_title {
		display: block;
		color: black;
		font-size: 14px;
	}
	.item_content_desc {
		color: #C0C0C0;
		font-size: 12px;
	}
	
</style>
