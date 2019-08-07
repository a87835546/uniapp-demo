<template>
	<view class="test">
		<input :class="{color:isShow}" type="text" value="" placeholder="vue 组件 测试 focus" v-focus ref="abc"/>
	</view>
</template>

<script>
	import Vue from 'vue'
	Vue.directive('focus',{
		inserted:function(el){
			console.log('get focus');
			console.log(el);
			el.focus()
			el.style.backgroundColor = 'red';
		}
	})
	
	export default {
		name:'test',
		data() {
			return {
				isShow:false
			}
		}
	}
</script>

<style>
  .color {
	  background-color: red;
  }
</style>
