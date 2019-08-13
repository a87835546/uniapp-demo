<template>
    <view class="container">
		<image class="login-img" src="../../../static/img_login_logo.png"></image>
		<input placeholder="请输入账号" />
		<input placeholder="请输入密码" password="true" />
		<button @click="onLoginButtonClick()">登录</button>
	</view>
</template>

<script>
export default {
    methods: {
		onLoginButtonClick() {
			console.log("on login button click");
		}
	}
}
</script>

<style scoped>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #D1EFFF;
		height: 100vh;
	}
	
	.login-img {
		width: 100px;
		height: 100px;
		margin-top: 20%;
		margin-bottom: 30px;
	}
	
	input {
		box-sizing: border-box;
		width: 80%;
		background-color: #FFFFFF;
		margin-top: 10px;
		padding-left: 10px;
		padding-top: 5px;
		padding-bottom: 5px;
		border-radius: 5px;
		height: 45px;
	}
	
	button {
		background-color: #35B5C4;
		width: 80%;
		height: 45px;
		color: #FFFFFF;
		margin-top: 100px;
	}

</style>