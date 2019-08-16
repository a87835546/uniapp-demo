export const post=(path,params,headers)=>httpRequest(path,params,'POST',headers)
export const get=(path,params,headers)=>httpRequest(path,params,'GET',headers)
export const base = ''
export function httpRequest(path,params, method, headers) {
	var url = base + path;
	return new Promise((resovle,reject)=>{
		uni.showToast({
			icon:'loading',
			title:'加载中...',
		})
		uni.request({
			url:url,
			method:method,
			header: {'Access-Control-Allow-Origin':'*','userId':'111'},
			data:params,
			success:function(result){
				resovle(result)
			},
			fail:function(err){
				reject(err)
			},
			complete:function(){
				uni.hideToast()
			}
		})
	})
}