export default {
	state :{
		userInfo : {},
		hasLogin :false
	},
	mutations :{
		login(state,info){
			state.hasLogin = true
			state.userInfo.nickname = info.nickname
			state.userInfo.token = info.token
			state.userInfo.userId = info.userId
		},
		logout(state){
			state.hasLogin = false
			state.userInfo = {}
		}
	}
}