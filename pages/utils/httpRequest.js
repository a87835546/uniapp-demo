export const post=(path,params,headers)=>httpRequest(path,params,'POST',headers)
export const get=(path,params,headers)=>httpRequest(path,params,'GET',headers)
export const base = ''
export function httpRequest(path,params, method, headers) {
	var url = base + path;
	console.log(params);
	return new Promise((resovle,reject)=>{
		uni.showToast({
			icon:'loading',
			title:'加载中...',
			duration:1000
		})
		uni.request({
			url:url,
			method:method,
			header: {'Access-Control-Allow-Origin':'*','userId':'111'},
			data:params,
			success:function(result){
				if(result.data.code === 200){
					resovle(result.data)
				}else{
					console.log(result.data.msg);
					reject(result.data)
				}
				uni.showToast({
					icon:"none",
					title:result.data.msg
				})
			},
			fail:function(err){
				console.log(err);
				reject(err)
			},
			complete:function(){
				// uni.hideToast()
			}
		})
	})
}