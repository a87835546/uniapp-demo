<template>
	<view class="input">
		<input :type="type" value="" :placeholder="placeholder" 
		class="user_input"
		v-model="user"
		placeholder-style = "font-size:14px"
		@input="input"
		
		@mouseenter="enter()" 
		@mouseleave="leave()"
		/>
		<text class="iconfont user_clear" 
		v-if="show" 
		@click="user_clear"
		@mouseenter="enterBtn()" 
		@mouseleave="leaveBtn()"
		>&#xeb6a;</text>
	</view>
</template>

<script>
	export default {
		name:'Input',
		data(){
			return {
				user:"",
				show:''
			}
		},
		props:{
			placeholder:{
				type:String,
				default:null
			},
			showClose:{
				type:Boolean,
				default:false
			},
			value:{
				type:String,
				default:null
			},
			inputValue:{
				type:String,
				default:null
			},
			type:{
				type:String,
				default:'text'
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
		mounted:function(){
			this.show = this.showClose
		},
		methods:{
			user_clear(){
				console.log('点击删除');
				this.show = false;
				this.user = ''
			},
			input(v){
				console.log(this.user);
				this.show = true;
				if(this.user.length > 0){
					this.show = true;
				}else{
					this.show = false;
				}
				//也可以使用inputDidChange方法来获取值
				this.$emit('inputDidChange',this.user)
				//可以直接使用v-model="",绑定一个值来获取值
				this.$emit('input',this.user)
				this.$emit('inputChange',this.user)
			},
			endDidInput(){
				this.show = false
				console.log('编辑完成')
			},
			enter(){
				if(this.user.length > 0) this.show = true
				console.log('enter');
			},
			leave(){
				this.show = false
				console.log('leave');
			},
			enterBtn(){
				console.log('11');
				this.user_clear()
			},
			leaveBtn(){
				console.log('23');
			}
		}
	}
</script>

<style scoped>
	.show {
		opacity: 1;
	}
	.hidden{
		opacity: 0;
	}
	.input {
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 50px;
		border-bottom: #E0E0E0 1rpx solid;
		align-items: center;
		justify-content: center;
		
	}
	.user_input {
		flex: 1 0 auto;
		font-size: 14px;
		/* #ifndef APP-PLUS */
		height: 80%;
		outline: none;
		/* #endif */
	}
	.user_clear {
		width: 30px;
		align-items: center;
		justify-content: center;
		height: 100%;
		flex: 0 0 auto;
		display: flex;

	}
</style>
