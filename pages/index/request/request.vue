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
			this.post('http://120.77.85.169:8082').then(result=>{
				console.log(result);
			}).catch(e=>{
				console.log(e);
			})
		}
	}
</script>

<style>
</style>
