export default {
	state :{
<<<<<<< HEAD
		userInfo : {},
		hasLogin :false
	},
	mutations :{
		login(state,info){
			state.hasLogin = true
			state.userInfo.nickname = info.nickname
			state.userInfo.token = info.token
			state.userInfo.userId = info.userId
=======
		userInfo : {
			id:0,
			nickname:null
		},
		hasLogin :false,
		token:null
	},
	mutations :{
		login(state,info){
			console.log(info);
			state.hasLogin = true
			state.userInfo.nickname = info.nickname
			state.token = info.token
			state.userInfo.userId = info.id
>>>>>>> parent of 1df9148... 自定义输入框组件，修复数据
		},
		logout(state){
			state.hasLogin = false
			state.userInfo = {}
<<<<<<< HEAD
=======
			state.token = null
>>>>>>> parent of 1df9148... 自定义输入框组件，修复数据
		}
	}
}