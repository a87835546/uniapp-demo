<template>
	<view class="content">
		{{id}}
		<button type="primary" @click="test()">测试</button>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				id:'',
				titile:''
			}
		},
		props:{
			// id:{
			// 	type:String,
			// 	default:''
			// }
		},
		methods:{
			test(){
				console.log(this.id);
			}
		},
		onLoad:function(params){
			this.id = params.id
			console.log( params);
			uni.setNavigationBarTitle({
				title:params.title?params.title:''
			})
		}
		
	}
</script>

<style>
</style>
