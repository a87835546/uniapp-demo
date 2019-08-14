<template>
	<view class="content">
		上一个页面传过来的ID值:{{id}}
		<button type="primary" @click="test()">输出接收到的ID值</button>
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
				console.log('接收到的ID:',this.id);
			}
		},
		onLoad:function(params){
			this.id = params.id
			console.log('页面参数', params);
			uni.setNavigationBarTitle({
				title:params.title?params.title:''
			})
		}
		
	}
</script>

<style>
</style>
