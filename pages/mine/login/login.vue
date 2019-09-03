<template>
	<view class="page">
		<view class="login">
			<view class="login_user">
				<input type="text" value="" placeholder="用户名/邮箱/已验证手机" 
				class="user_input"
				v-model="user"
				@input="userInput"
				@blur="didEndEdit(1)"
				placeholder-style = "font-size:14px"
				 />
				<text class="iconfont user_clear" v-if="usernameShow" @click="user_clear">&#xeb6a;</text>
			</view>
			
			<view class="login_pwd">
				<input type="password" value="" placeholder="密码" 
				v-model="pwd"
				class="user_input"
				@input="pwdInput"
				@blur="didEndEdit(2)"
				ref = "pwd"
				placeholder-style = "font-size:14px"
				/>
				<text class="iconfont user_clear" v-if="pwdShow" @click="pwd_clear">&#xeb6a;</text>
				<text class="iconfont pwd_secret" @click="secret">&#xe813;</text>
			</view>
			<view class="login_login">
				<button type="warn" class="login_btn" :disabled="loginBtnDisable" @click="login">登录</button>
				<button type="warn" class="shortcut_btn">一键登录</button>
				<view class="login_forget">
					<view>短信验证码登录</view>
					<view class="phone_shortcut" @click="register">手机快速注册</view>
				</view>
			</view>
			<view class="quick_login">
				<text>其他登录</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data (){
			return {
				usernameShow : false,
				pwdShow : false,
				user:'',
				pwd:'',
				loginBtnDisable:true
			}
		},
		methods:{
			user_clear(){
				this.user = ''
				this.usernameShow = false;
			},
			pwd_clear(){
				this.pwd = ''
				this.pwdShow = false;
			},
			userInput(v){
				if(v.detail.value){
					this.usernameShow = true;
					this.loginBtnDisable = false;
				}
			},
			pwdInput(v){
				if(v.detail.value){
					this.pwdShow = true;
				}
			},
			didEndEdit(v){
				if(v === 1) this.usernameShow = false; else this.pwdShow = false;
			},
			secret(){
				console.log(this.$refs.pwd.type);
				if(this.$refs.pwd.type == 'password'){
					this.$refs.pwd.type = 'text'
				}else{
					this.$refs.pwd.type = 'password'
				}
			},
			login(){
				this.get('http://120.77.85.169:8082/login',{'userName':this.user,'pwd':this.pwd}).then(result=>{
					console.log(result);
				}).catch(e=>{
					console.log(e);
				})
			},
			register(){
				uni.navigateTo({
					url:'../register/register'
				})
			}
		}
		
	}
</script>

<style scoped lang="less">
@font-face {
  font-family: 'iconfont';  /* project id 1363236 */
  src: url('//at.alicdn.com/t/font_1363236_0k4kdzv6z0mb.eot');
  src: url('//at.alicdn.com/t/font_1363236_0k4kdzv6z0mb.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1363236_0k4kdzv6z0mb.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1363236_0k4kdzv6z0mb.woff') format('woff'),
  url('//at.alicdn.com/t/font_1363236_0k4kdzv6z0mb.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1363236_0k4kdzv6z0mb.svg#iconfont') format('svg');
}
.page {
	// width: 80%;
	margin: 0 5%;
}
.iconfont {
	font-family: 'iconfont' !important;
	color: #999;
	font-size: 16px;
}
.input-placeholder {
	font-size: 16px;
	color: red;
}
.login_user,.login_pwd {
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 60px;
	margin-left: 5%;
	border-bottom: #eee 1rpx solid;
}
.user_input {
	flex: 1;
	font-size: 14px;
}
.user_clear,.pwd_secret {
	width: 30px;
}
.login_login {
}
.login_btn {
	width: 80%;
	margin-top: 20px;
}
.shortcut_btn {
	width: 80%;
	margin-top: 10px;
	border: red 1px solid;
	// border-color: red;
	background-color: white;
	color: red;
}
.login_forget {
	margin: 10px ;
	color: #999;
	font-size: 14px;
	display: flex;
	flex-direction: row;
	view {
		width: 50%;
		cursor: pointer;
	}
}
.phone_shortcut {
	text-align: right;
}
.quick_login {
	margin-top: 50px;
	border-top: #eee 1px  solid;
	position: relative;
	text {
		left: 50%;
		position: absolute;
		line-height: 30px;
		background-color: white;
		top: -15px;
		// padding: 0 10px;
		width: 70px;
		color: #999;
		font-size: 16px;
		margin-left: -35px;
	}
}

</style>
