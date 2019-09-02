<template>
	<view class="input">
		<input type="text" value="" :placeholder="placeholder" 
		class="user_input"
		v-model="user"
		@input="userInput"
		placeholder-style = "font-size:14px"
		 />
		<text class="iconfont user_clear" v-if="usernameShow" @click="user_clear">&#xeb6a;</text>
	</view>
</template>

<script>
	export default {
		name:'Input',
		data(){
			return {
				usernameShow:false,
				user:""
			}
		},
		props:{
			placeholder:{
				type:String,
				default:null
			},
			
		},
		methods:{
			user_clear(){
				this.usernameShow = false;
				this.user = ''
			},
			userInput(v){
				// console.log(v.detail.value);
				this.user = v.detail.value
				this.usernameShow = true;
				if(this.user.length > 0){
					this.usernameShow = true;
				}else{
					this.usernameShow = false;
				}
				this.$emit('inputDidChange',this.user)
			}
		}
	}
</script>

<style scoped>
	.input {
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 50px;
		border-bottom: #E0E0E0 1rpx solid;
		align-items: center;
	}
	.user_input {
		flex: 1;
		font-size: 14px;
	}
	.user_clear {
		width: 30px;
		flex: 0;
	}
</style>
