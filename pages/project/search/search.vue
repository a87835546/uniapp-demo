<template>
	<view class="container">
		<view class="search-box">
			<uni-icon 
			class="search-box__icon"
			type="search" />
			
			<input
			v-model="searchText"
			class="search-box__input"
			placeholder="请输入查找的内容" />
			
			<uni-icon
			v-if="showClear"
			class="search-box__clear"
			size="20"
			type="clear"
			@click="clearSearchText"
			 />
		</view>
		<view class="result">
			<uni-list>
				<uni-list-item 
				v-for="(item,index) in results"
				:key="index"
				:title="item">
				</uni-list-item>
			</uni-list>
		</view>
	</view>
</template>

<script>
	import uniIcon from '@dcloudio/uni-ui/lib/uni-icon/uni-icon.vue'
	import {uniList, uniListItem} from '@dcloudio/uni-ui'
	export default {
		components: {
			uniIcon,
			uniList,
			uniListItem
		},
		data() {
			return {
				searchText: "",
				showClear: false,
				results: ["above","believe","canada","agenda","banana","bee","big","cat", "condition", "eggs","forget"],
				dataSource: ["above","believe","canada","agenda","banana","bee","big","cat", "condition", "eggs","forget"]
			}
		},
		methods: {
			clearSearchText() {
				this.$data.searchText = "";
			}
		},
		watch: {
			searchText(newValue) {
				if (newValue === "") {
					this.$data.results = this.$data.dataSource;
					this.$data.showClear = false;
				} else {
					this.$data.showClear = true;
					this.$data.results = this.$data.results.filter(function(item){
						return item.startsWith(newValue)
					});
				}
			}
		}
	}
</script>

<style scoped>
	.search-box {
		background-color: #DDDDDD;
		display: flex;
		flex-direction: row;
		height: 44px;
		align-items: center;
		margin-left: 16px;
		margin-right: 16px;
		border-radius: 8px;
		margin-top: 16px;
	}
	
	.search-box__icon {
		margin-left: 8px;
	}
	
	.search-box__input {
		margin-left: 8px;
	}
	
	.search-box__clear {
		margin-left: auto;
		margin-right: 8px;
	}
	
	.result {
		margin-top: 16px;
	}

</style>
