export default {
	// namespaced : true,
	state :{
		show :false,
		a : 0,
		b : 0
	},
	/**
	 * 在其他地方访问的时候（添加了命名空间）  this.$store.commit('a/change')，如果	this.$store.commit('change') 会报错，没有定义change
	 *  如果不添加命名空间 			this.$store.commit('change')
	 * 同步赋值
	 */
	mutations :{
		switchShow(state){
			state.show = !state.show
		},
		changeA(state,number){
			console.log(number);
			state.a = number
		},
		changeB(state,number) {
			state.b = number
		}
		
	},
	/**
	 * 异步赋值
	 */
	actions :{
		changeAsync(context,val){
			context.commit('changeA',val)
		},
		changeNumAsync(context,newValue){
			console.log(newValue);
			context.commit('changeB',newValue)
		}
	},
	getters:{
		notShow(state){
			return !state.show;
		}
	}
}