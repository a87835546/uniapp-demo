<template>
	<view class="container">
		<button @click="chooseImage"> 选择图片 </button>
		<transferCell 
		class="status"
		v-if="hasSelectFile"
		:fileName="fileName"
		:size="size"
		:progress="progress"></transferCell>
	</view>
</template>

<script>
	import {uniList} from '@dcloudio/uni-ui'
	import transferCell from './transfer-cell.vue'
	export default {
		components: {
			uniList,
			transferCell
		},
		data() {
			return {
				fileName: 'HelloWorld.mov',
				size: '0B',
				progress: 0,
				hasSelectFile: false
			}
		},
		methods: {
			formatBytes: function(bytes, decimals = 2) {
			    if (bytes === 0) return '0 Bytes';
			
			    const k = 1024;
			    const dm = decimals < 0 ? 0 : decimals;
			    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
			
			    const i = Math.floor(Math.log(bytes) / Math.log(k));
			
			    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
			},
			chooseImage: function() {
				let self = this;
				uni.chooseImage({
					count: 1,
					sizeType: ['compressed'],
					sourceType: ['album'],
					success: (res) => {
						console.log('chooseImage success, temp path is', res.tempFilePaths[0])
						var imageSrc = res.tempFilePaths[0]
						var file = res.tempFiles[0];
						var name = imageSrc.replace(/^.*[\\\/]/, '');
						self.fileName = name;
						self.size = self.formatBytes(file.size);
						self.hasSelectFile = true
						console.log("file name: " + name + " size " + file.size);
						let uploadTask = uni.uploadFile({
							url: 'http://10.187.21.175:3000/upload',
							filePath: imageSrc,
							name: 'file',
							success: (res) => {
								console.log('uploadImage success, res is:', res)
								uni.showToast({
									title: '上传成功',
									icon: 'success',
									duration: 1000
								})
							},
							fail: (err) => {
								console.log('uploadImage fail', err);
								uni.showModal({
									content: err.errMsg,
									showCancel: false
								});
							}
						});
						uploadTask.onProgressUpdate(function(res){
							self.progress = res.progress;
							console.log('上传进度' + res.progress);
							console.log('已经上传的数据长度' + res.totalBytesSent);
							console.log('预期需要上传的数据总长度' + res.totalBytesExpectedToSend);
						});
					},
					fail: (err) => {
						console.log('chooseImage fail', err)
					}
				})
			}
		}
	}
</script>

<style scoped>
	.status {
		margin-top: 10px;
	}
	
	button {
		margin: 10px;
	}
</style>
