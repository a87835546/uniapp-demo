<template>
	<view class="page">
		<!-- #ifdef MP-WEIXIN -->
		<!-- camera标签只能在微信小程序和百度上使用 这是只是调用摄像头 -->
				<camera @error="error" ></camera>
				<button type="primary" @click="takePhoto">拍照</button>
				<view>预览</view>
				<image mode="widthFix" :src="src"></image>
		<!-- #endif -->
		
		<!-- image 的model 和ios中的contentModel基本一样 -->
		<image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565331684237&di=4de25ba32db03088d18736a1c36cf28c&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fa5c27d1ed21b0ef4a1b6b7eaddc451da81cb3e23.jpg" mode="aspectFit"></image>
		
		<button type="primary" @click="getAlbum">调用相册</button>
		<img :src="cameraSrc" mode="center" @error="err"></img>
		<image :src="cameraSrc" mode="center" @error="err"></image>

	</view>
</template>

<script>
	
	export default {
		data(){
			return {
				src:'',
				cameraSrc:{
					type:String,
					default:''
				}
			}
		},
		components:{
		},
		methods:{
			error(e){
				console.log(e);
			},
			takePhoto(){
				// 获取图片的上下文
				const ctx = uni.createCameraContext();
				ctx.takePhoto({
					success:function(e){
						console.log(e);
						this.src = e.tempImagePath;
					}
				})
			},
			
			getAlbum(){
				console.log(this);
				uni.chooseImage({
					complete:function(e){
						console.log(this);
					},
					// 常用的bug 此时赋值需要用箭头函数，如果不用箭头函数，会访问不到cameraSrc 会报undefined
					// 需要知道this的指向问题。 上面comlete中的this，就会指向这个函数。
					success:(e)=>{
						this.cameraSrc =e.tempFilePaths[0];
						console.log(this);
					},
					
					fail:function(err){
						console.log(err);
					}
				})
			},
			err(e){
				console.log(e);
			}
		}
	}
</script>

<style>
	camera {
		width: 100vw;
		height: 300px;
	}
	image {
		width: 100vw;
	}
</style>
