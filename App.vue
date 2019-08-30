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
		}
	}
</script>

<style>
	/*每个页面公共css */
	@font-face {
	  font-family: 'iconfont';  /* project id 1363236 */
	  src: url('./static/iconfont/iconfont.eot');
	  src: url('./static/iconfont/iconfont.eot?#iefix') format('embedded-opentype'),
	  /* url('./static/iconfont/iconfont.woff2') format('woff2'), */
	  url('./static/iconfont/iconfont.woff') format('woff'),
	  url('./static/iconfont/iconfont.ttf') format('truetype'),
	  url('./static/iconfont/iconfont.svg#iconfont') format('svg');
	}
	.iconfont {
		 font-family:"iconfont" !important;
		 font-size: 14px;
	}
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
