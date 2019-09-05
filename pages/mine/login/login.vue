<template>
	<view class="page">
		<view class="login">
			<v-input class="login_user" 
			v-model="user" 
			placeholder="用户名/邮箱/已验证手机" 
			></v-input>
			<v-input class="login_pwd" 
			v-model="pwd" 
			placeholder="密码" 
			type="password"
			></v-input>
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
	import {mapState,mapActions,mapGetters} from 'vuex'
	import vInput from '../../../components/input.vue'
	export default {
		data (){
			return {
				user:'',
				pwd:'',
				loginBtnDisable:true
			}
		},
		components:{
			vInput,
		},
		computed:{
			...mapGetters([
				'token',
				'userInfo',
				'nickname'
			])
		},
		methods:{

			login(){
				this.post('http://120.77.85.169:8082/login',{'userName':this.user,'pwd':this.pwd}).then(result=>{
					this.$store.commit('login',result)
					console.log(this.$store.state.user.userInfo);
					console.log(this.$store.state.user.token);
					console.log(this.nickname);
					console.log(`token:${this.token} id:${this.userInfo.id} nickname:${this.userInfo.nickname}`);
				}).catch(e=>{
					console.log(e);
				})
			},
			register(){
				uni.navigateTo({
					url:'../register/register'
				})
			}
		},
		
		
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
	// border-bottom: #eee 1rpx solid;
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
