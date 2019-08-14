<template>
	<view class="container">
		<view class="container-map">
			<view class="map">
				<map 
				style="width: 100%; height: 300px;" 
				:latitude="latitude" 
				:longitude="longitude"
				:markers="covers">
				</map>
			</view>
		</view>
		<button @click="onButtonClick">签到</button>
	</view>
</template>

<script>
	import LocationUtil from "../../../common/location-util.js"
	
	export default {
		data() {
			return {
				latitude: 39.909,
				longitude: 116.39742,
				covers: []
			}
		},
		methods: {
			onButtonClick() {
				this.getLocation(this.checkin);
			},
			checkin(latitude, longitude) {
				let targetLongtitude = 113.268123;
				let targetLatitude = 22.923749;
				let distance = LocationUtil.getDistance(latitude,longitude,targetLatitude,targetLongtitude);
				console.log("distance is " + distance);
				// 距离小于200m可以签到
				if (distance <= 200) {
					uni.showToast({
						title: "签到成功！"
					});
				} else {
					uni.showModal({
						title: '签到失败',
						content: '不在签到点附近！请确认',
						showCancel: false
					});	
				}
			},
			getLocation(checkin,failHandler) {
				// 获取位置信息
				let self = this;
				uni.getLocation({
					type: 'gcj02',
					success: function(res) {
						console.log("get location success");
						self.$data.latitude = res.latitude;
						self.$data.longitude = res.longitude;
						console.log("latitude is " + res.latitude);
						console.log("longtitude is " + res.longitude);
						let marker = {
							latitude: res.latitude,
							longitude: res.longitude,
							iconPath: "../../../static/location.png"
						}
						self.$data.covers.push(marker)
						if (checkin) {
							checkin(res.latitude,res.longitude)
						}
					},
					fail: function(message) {
						console.log("get location fail" + message);
						failHandler(message);
					}  
				});
			}
		},
		onLoad() {
			console.log("check in onload");
			this.getLocation();
		}
	}
</script>

<style scoped>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	.container-map {
		width: 100%;
		height: 400px;
	}
	
	button {
		background-color: #35B5C4;
		width: 80%;
		height: 45px;
		color: #FFFFFF;
		margin-top: 50px;
	}
	
</style>
