export default {
	state :{
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
		},
		logout(state){
			state.hasLogin = false
			state.userInfo = {}
			state.token = null
		}
	}
}