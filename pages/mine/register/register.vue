<template>
	<view class="page">
		<view class="phone">
			<view class="area" @click="changeArea">
				<text class="area_text">+86</text>
				<text class="iconfont">&#xe617;</text>
			</view>
			<view class="input">
				<v-input type="text" 
				class="phone_input" 
				v-model="phone" 
				placeholder="手机注册">
				</v-input>
			</view>
		</view>
		<view class="getCode">
			<v-input  class="code_input" placeholder="请输入手机验证码(默认值1234)" v-model="code"></v-input>
			<view class="btn_view">
				<button class="code_btn"  @click="showCodeBtn ? getCode($event) : null">{{btnTitle}}</button>
			</view>
		</view>
		<view class="next">
			<button type="warn" 
			:disabled="nextBtnShow"
			@click="next">下一步</button>
		</view>
		
		<!-- 测试自定义组件 使用v-model绑定获取子组件的值的改变 -->
		<!-- <Input placeholder="测试1" v-model="test1">123</Input>
		<Input placeholder="测试2" v-model="test2"></Input>
		
		<button type="primary" @click="testFunc">测试</button> -->
	</view>
</template>

<script>
	import vInput from '../../../components/input.vue'
	export default {
		components:{
			vInput
		},
		data(){
			return {
				nextBtnShow : true,
				phone:'',
				test1:'',
				test2:'',
				code:'',
				btnTitle:'获取验证码',
				showCodeBtn:true
			}
		},
		watch:{
			phone:(v)=>{
				console.log(v);
			}
		},
		methods:{
			next(){
				uni.showToast({
					title:"获取短信成功",
					icon:"none"
				}),
				this.post('http://120.77.85.169:8082/register',{'phone':this.phone,'code':this.code})
				.then(result=>{
					console.log(result);
				}).catch(err=>{
					console.log(err);
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
				if(v.detail.value.length === 11 && this.isPoneAvailable(v.detail.value)){
					this.nextBtnShow = false;
				}else{
					this.nextBtnShow = true;
				}
			},
			didChange(v){
				console.log('val',v);
			},
			getCode(v){
				console.log(v.target);
				this.showCodeBtn = false
				let i = 60;
				var interval = setInterval(()=>{
					i--;
					this.btnTitle = `${i}秒后重试`
					console.log('定时器');
					if(i == 0){
						clearInterval(interval);
						this.btnTitle = '获取验证'
						this.showCodeBtn = true
					}
				},1000)
			},
			testFunc(){
				console.log(`test1:${this.test1}`);
				console.log(`test2:${this.test2}`);
			},
			//判断是否是正确的手机号码的正则
			isPoneAvailable(v) {
				var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
				if (!myreg.test(v)) {
					return false;
				} else {
					return true;
				}
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
		// border-bottom: #eee 1rpx solid;
	}
	.area {
		flex: 0;
		margin: 0 10px;
	}
	.input {
		flex: 1;
		text-align: left;
		height: 50px;
	}
	.phone_input {
		height: 50px;
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
		height: 50px;
		margin: 10px 0;
	}
	.btn_view {
		flex: 0;
		width: 100px;
		padding: 0 5px;
	}
	.code_btn {
		height: 30px;
		border-radius: 15px;
		border: red 1rpx solid;
		font-size: 14px;
		color: #e2231a;
		background-color: rgba(226,35,30,.2);
		width: 95px;
	}

	.code_input {
		margin-right: 10px;
		line-height: 50px;
		height: 50px;
		flex: 1;
	}

</style>
