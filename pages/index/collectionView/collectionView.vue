<template>
	<!-- 九宫格的视图，类似于iOS中collectionView -->
	<view class="page">
		<uni-grid :data="data" :column='3'>
			<uni-grid-item text="测试">
				ss
			</uni-grid-item>
		</uni-grid>
	</view>
</template>

<script>
	import {uniGrid,uniGridItem} from '@dcloudio/uni-ui'
	export default {
		data (){
			return {
				
			}
		},
		components:{
			uniGrid,
			uniGridItem
		},
		onLoad:function(e){
			console.log(e);
		}
	}
</script>

<style>
</style>
