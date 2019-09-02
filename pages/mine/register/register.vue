<template>
	<view class="page">
		<view class="phone">
			<view class="area" @click="changeArea">
				<text class="area_text">+86</text>
				<text class="iconfont">&#xe617;</text>
			</view>
			<view class="input">
				<input type="text" v-model="phone" @input="inputChanegValue" placeholder="手机注册"/>
			</view>
			
		</view>
		<view class="getCode">
			<input type="text" class="code_input" placeholder="请输入手机验证码" v-model="code"/>
			<button class="code_btn" @click="getCode">获取验证码</button>
		</view>
		<view class="next">
			<button type="warn" 
			:disabled="nextBtnShow"
			@click="next">下一步</button>
		</view>
		<Input placeholder="测试" v-model="test" @inputDidChange="didChange">123</Input>
	</view>
</template>

<script>
	import Input from '../../../components/input.vue'
	export default {
		components:{
			Input
		},
		data(){
			return {
				nextBtnShow : true,
				phone:'',
				test:'',
				code:''
			}
		},
		methods:{
			next(){
				uni.showToast({
					title:"获取短信成功",
					icon:"none"
				})
			},
			changeArea(){
				uni.showModal({
					title:"切换区域",
					content:"带开发。。。",
					showCancel:false,
				})
			},
			inputChanegValue(v){
				console.log(v.detail.value);
				// this.phone = v.detail.value;
				if(v.detail.value.length === 11){
					this.nextBtnShow = false;
				}else{
					this.nextBtnShow = true;
				}
			},
			didChange(v){
				console.log(v);
			},
			getCode(){
				
			}
		}
	}
</script>

<style scoped lang="less">
	.page{
		width: 90%;
		margin: 0 5% ;
	}
	.phone{
		display: flex;
		flex-direction: row;
		align-items: center;
		color: black;
		height: 60px;
		margin: 10px 0;
		text-align: center;
		border-bottom: #eee 1rpx solid;
	}
	.area {
		flex: 0;
		margin: 0 10px;
	}
	.input {
		flex: 1;
		text-align: left;
	}
	.area_text {
		width: 100px;
	}
	.next {
		padding: 20px 0;
	}
	.getCode {
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 40px;
		margin: 10px 0;
	}
	.code_btn {
		height: 30px;
		border-radius: 15px;
		border: red 1rpx solid;
		font-size: 14px;
		color: #000;
	}
</style>
