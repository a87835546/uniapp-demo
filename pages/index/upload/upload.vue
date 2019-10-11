<template>
	<view class="page">
		<view class="container">
			<view class="" v-for="(item,index) in lists" :key='index'>
				<uploadItem :title='item'></uploadItem>
			</view>
		</view>
	</view>
</template>

<script>
	import uploadItem from './upload_item'
	export default {
		data(){
			return {
				lists:['123','345','456']
			}
		},
		components:{
			uploadItem
		}
	}
</script>

<style scoped lang="less">
</style>
