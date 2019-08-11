<template>
	<view class="page">
		
	</view>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		},
		//封装的网络请求类似于iOS中的AFNetworking ，并且把请求方法挂载到全局
		onLoad:function(e){
			this.post('https://www.baidu.com').then(result=>{
				console.log(result);
			}).catch(e=>{
				console.log(e);
			})
		}
	}
</script>

<style>
</style>
