<template>
	<view class="content">
		<view class="item_content">
			<text class="item_content_title">{{title}}</text>
			<text class="item_content_desc">description</text>
			<image class="item_content_image" src="/static/logo.png" mode="center"></image>
		</view>
	</view>
</template>

<script>
	export default {
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

<style>
	.content {
		width: 100vw;
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
	.item_content_title {
	}
	.item_content_desc {
		
	}
	.item_content_image {
		width: 30px;;
		height: 30px;;
	}
	
</style>
