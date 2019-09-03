<template>
	<view class="container">
		<!-- scollintoview 属性使用必须设置height -->
		<scroll-view
		style="height: 100vh; overflow: visible;" 
		scroll-y
		:scroll-into-view="scrollViewId">
			<block v-for="(category, index) in letters" :key="index">
				<view class="section-header" :id="'section-header-' + category">
					<text>{{category}}</text>
				</view>
				
				<uni-list>
					<uni-list-item
					class="section-content"
					v-for="(city, idx) in cities[category]"
					:key="idx"
					:showArrow="false"
					:title="city.name">
					</uni-list-item>
				</uni-list>
			</block>
		</scroll-view>
		<view
		class="menu"
		id="float-menu"
		@touchstart="touchStart"
		@touchmove.stop.prevent="touchMove"
		@touchend="touchEnd">
			<text 
			class="menu-item"
			v-for="(item,index) in letters"
			:key="index"
			:class="touchmoveIndex === index ? 'active' : '' ">
			{{item}}
			</text>
		</view>
	</view>
</template>

<script>
	import {uniList, uniListItem} from '@dcloudio/uni-ui'
	import cityData from "./city-data.js"
	
	export default {
		components: {
			uniList,
			uniListItem
		},
		data() {
			return {
				letters: [],
				cities: cityData.cities,
				scrollViewId: "",
				touchmove: false,
				touchmoveIndex: -1,
				menuPositionData: null
			}
		},
		methods: {
			getMenuElement(handlePosition) {
				if (this.$data.menuPositionData === null) {
					const query = uni.createSelectorQuery().in(this);
					let self = this;
					query.select('#float-menu').boundingClientRect(data => {
					  console.log("得到布局位置信息" + JSON.stringify(data));
					  self.menuPositionData = data;
					}).exec();
				}
			},
			handleTouchEvent(e) {
				if (this.$data.menuPositionData === null) {
					console.log("null menu position info");
					return;
				}
				
				let height = this.$data.menuPositionData.height;
				let topOffset = this.$data.menuPositionData.top;
				this.touchmove = true
				let pageY = e.touches[0].pageY
				let itemHeight = height / this.$data.letters.length;
				let index = Math.floor((pageY-topOffset) / itemHeight);
				
				let sectionHeader = this.$data.letters[index];
				this.$data.scrollViewId = "section-header-" + sectionHeader;
				this.touchmoveIndex = index;
				console.log("name is " + "section-header-" + sectionHeader);
			},
			touchStart (e) {
				this.touchmove = true;
				this.handleTouchEvent(e);
			},
			touchMove (e) {
				this.handleTouchEvent(e);
			},
			touchEnd () {
			  this.touchmove = false
			  this.touchmoveIndex = -1
			}
		},
		mounted() {
			let letters = Object.keys(cityData.cities);
			this.$data.letters = letters;
			console.log("cities is " + letters);
		},
		updated() {
			/* 获取右侧index列表的布局信息 */
			this.getMenuElement();
		}
	}
</script>

<style scoped>
	.section-header {
		padding-left: 16px;
		height: 44px;
		display: flex;
		align-items: center;
		background-color: #EDEDED;
		position: sticky;
		top: 0;
	}
	
	.menu {
		position: fixed;
		display: flex;
		flex-direction: column;
		right: 10px;
		top: 50%;
		transform: translateY(-50%);
		background-color: #FFFFFF;
		align-items: center;
		z-index: 10;
	}
	
	.menu-item {
		font-size: 10px;
		width: 20px;
		height: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.menu-item.active{
		font-size: 12px;
		color: #18B4FE;
	}
</style>
