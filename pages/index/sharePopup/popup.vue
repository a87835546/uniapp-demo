<template>
	<!-- 常用的分享弹窗 -->
	<view class="page">
		<button @click="openPopup">打开弹出层</button>
		<button type="primary" @click="openBottom">打开底部弹窗</button>
		<button type="primary" @click="openBottonPopup">打开分享弹窗</button>
		<uni-popup ref="popup" type="center">
			弹出层示例
			<button @click="closePopup">关闭弹出层</button>
		</uni-popup>
		<uni-popup ref="bootmoPopup" type="bottom">
			弹出层示例
			<button @click="closePopup">关闭弹出层</button>
		</uni-popup>
	</view>
</template>

<script>
	import { uniPopup } from '@dcloudio/uni-ui'
	import share from '../../common/share.js'
	export default {
		data() {
			return {
				type: 'center',
			}
		},
		components: {
			uniPopup
		},
		methods: {
			openPopup() {
				// this.type = 'center'
				this.$refs.popup.open()
				console.log(this.$refs.popup);
			},
			closePopup() {
				this.$refs.popup.close()
				this.$refs.bootmoPopup.close()
			},
			openBottom(){
				this.$refs.bootmoPopup.open()
			},
			openBottonPopup() {
				let shareInfo={
					href:"https://uniapp.dcloud.io",
					title:"分享测试",
					desc:"分享测试",
					imgUrl:"/static/logo.png"
				};
				let shareList=[
					{
						icon:"/static/logo.png",
						text:"微信好友",
					},
					{
						icon:"/static/logo.png",
						text:"朋友圈"
					},
					{
						icon:"/static/logo.png",
						text:"微博"
					},
					{
						icon:"/static/logo.png",
						text:"QQ"
					},
					{
						icon:"/static/logo.png",
						text:"复制"
					},
					{
						icon:"/static/logo.png",
						text:"更多"
					},
				];
				this.shareObj=share(shareInfo,shareList,function(index){
					console.log("点击按钮的序号: " + index);
		
					let shareObj={
						href:shareInfo.href||"",
						title:shareInfo.title||"",
						summary:shareInfo.desc||"",
						success:(res)=>{
							console.log("success:" + JSON.stringify(res));
						},
						fail:(err)=>{
							console.log("fail:" + JSON.stringify(err));
						}
					};
				});
				this.$nextTick(()=>{
					this.shareObj.alphaBg.show();
					this.shareObj.shareMenu.show();
				})
			}
		
		},
		}
</script>

<style>
	uni-popup {
		background-color: #4CD964;
		width: 100vw;
		height: 100vw;
	}
</style>
