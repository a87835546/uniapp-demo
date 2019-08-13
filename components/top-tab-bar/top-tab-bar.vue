<template>
	<view class="tab-container" ref="container">
		<view class="tabs" ref="tabs">
			<view 
			 class="tab-item"
			 v-for="(item,index) in tabNames"
			 :style="{width: (100/tabNames.length) + '%'}"
			 @click="onTabClick(index)">
				<text 
				class="tab-label"
				:class="selectedIndex===index?'selected':''"
				>{{item}}</text>
			</view>
		</view>
		<view 
		class="slider"
		v-if="showSlider"
		:style="{transform: `translate(${offset})`}">
		</view>
	</view>
</template>

<script>
	export default {
		name: "top-tab-bar",
		props: {
			tabNames: Array,
			showSlider: Boolean
		},
		data() {
			return {
				selectedIndex: 0,
				offset: "0"
			}
		},
		computed: {
			sliderStyle() {
				return {
					// background-color: #
				}
			}
		},
		methods: {
			onTabClick(index) {
				console.log("on tab click! " + index);
				// console.log(this.$parent.onTabClick);
				// this.$parent.onTabClick(index);
				// 获取slider的style
				this.$data.selectedIndex = index;
				let offset = 100*index + '%';
				this.$data.offset = offset;
				this.$emit('onTabClick',index);
			}
		}
	}
</script>

<style scoped>
	.tab-container {
		display: flex;
		flex-direction: column;
		height: 44px;
		width: 100%;
	}
	
	.tabs {
		width: 100%;
		display: flex;
		flex-direction: row;
	}
	
	.tab-item {
		/* width: 25%; */
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.tab-label {
		font-style: normal;
		font-size: 14px;
		color: #666666;
		margin-top: 8px;
		margin-bottom: 8px;
	}
	
	.selected {
		color: #000000;
	}
	
	.slider {
		width: 25%;
		height: 2px;
		background: #007AFF;
		transition: transform 0.4s;
	}
</style>
