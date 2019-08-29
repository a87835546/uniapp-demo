<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		globalData: {
		}
	}
</script>

<style>
	/*每个页面公共css */
	
	/*此时修改badge 但是只能在web端生效 */
	uni-tabbar  .uni-tabbar__reddot {
		left: 20px;
		background-color: aqua
	}
	
	.bg-red {
		background-color: red;
	}
	.bg-yellow {
		background-color: yellow;
	}
	.bg-blue {
		background-color: blue;
	}
	.bg-green {
		background-color: green;
	}
</style>
