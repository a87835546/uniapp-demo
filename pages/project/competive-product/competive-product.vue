// 竞品清单 下拉刷新控件
<template>
	<view class="container">
		<competive-product-cell
		v-for="(item,index) in productList"
		:name="item.competingProductName"
		:plotRatio="item.potRatio"
		:area="item.area"
		@forwardToDetail="fowardToDetail()">
		</competive-product-cell>
	</view>
</template>

<script>
	import productData from "./product-data.js";
	import CompetiveProductCell from "./competive-product-cell.vue";
	
	export default {
		components: {
			CompetiveProductCell
		},
		data() {
			return {
				productList: productData.productList
			}
		},
		onLoad() {
			console.log(productData.productList);
		},
		// 需要在pages.json 配置pulldownrefresh选项
		onPullDownRefresh() {
			console.log('onPullDownRefresh');
			setTimeout(function(){
				uni.stopPullDownRefresh();
			}, 1000);
		},
		methods: {
			fowardToDetail() {
				console.log("forward to detail");
			}
		}
	}
</script>

<style scoped>
	.container {
		background: #F6F6F6;
		height: 100%;
		width: 100%;
	}
	.scroll {
		display: flex;
		flex-direction: column;
	}
</style>
