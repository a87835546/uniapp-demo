<template>
	<view class="input">
		<input type="text" value="" :placeholder="placeholder" 
		class="user_input"
		v-model="user"
		placeholder-style = "font-size:14px"
		@input="input"
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
				user:"",
			}
		},
		props:{
			placeholder:{
				type:String,
				default:null
			},
			value:{
				type:String,
				default:null
			},
			inputValue:{
				type:String,
				default:null
			}
			
		},
		model:{
			prop:'inputValue',
			event:'inputChange'
		},
		watch:{
			value:function(val, oldVal) {
				this.user = val
            },
			inputValue:function(v){
				this.user = v;
			}
		},
		
		methods:{
			user_clear(){
				this.usernameShow = false;
				this.user = ''
			},
			input(v){
				console.log(v.detail.value);
				this.user = v.detail.value
				this.usernameShow = true;
				if(this.user.length > 0){
					this.usernameShow = true;
				}else{
					this.usernameShow = false;
				}
				//也可以使用inputDidChange方法来获取值
				this.$emit('inputDidChange',this.user)
				//可以直接使用v-model="",绑定一个值来获取值
				this.$emit('input',this.user)
				this.$emit('inputChange',this.user)

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
