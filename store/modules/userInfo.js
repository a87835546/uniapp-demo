export default {
	state :{
		userInfo : {
			nickname: 'abx'
		},
		hasLogin :false,
		token:null
	},
	mutations :{
		login(state,result){
			let info = result.userInfo
			console.log(info);
			state.hasLogin = true
			state.userInfo.nickname = info.name
			state.userInfo.phone = info.phone
			state.userInfo.address = info.address
			state.userInfo.sex = info.sex
			state.userInfo.id = info.id
			state.token = result.token
			
		},
		logout(state){
			state.hasLogin = false
			state.userInfo = {}
			state.token = null
		}
	},
	getters :{
		token:(state)=>{
			return state.token
		},
		userInfo:(state)=>{
			return state.userInfo
		},
		nickname: (state)=>{
			let temp = state.userInfo.nickname
			return temp
		}
	}
}