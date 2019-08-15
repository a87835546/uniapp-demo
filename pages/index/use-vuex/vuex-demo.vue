<template>
	<view class="page">
		<text >
			vuex 包含的基本5个对象
			1 state 储存状态 数据源
			2 getters 派生状态 类似于oc中的 get方法
			3 mutations 提交修改状态 类似于oc中 set，， 是唯一可以修改state 数据源的方法，
			4 actions 异步提交修改状态 和mutations 一样，actions最终是会使用mutations 去修改数据
			5 modules 子模块 根据需要可以添加很多子模块
		</text>
		
		<text>
			mapActions,mapGetters,mapState,mapMutations 其作用就是修改vuex方法和数据访问的方法，简单的访问数据和方法
		</text>
		
		<text>{{b}}</text>
		<input type="text" value=""  placeholder="异步(actions)赋值操作" @input="input" />
		<text>{{a}}</text>
		<input type="text" placeholder="同步(mutations)赋值操作" @input="syncInput"/>
	</view>
</template>

<script>
	/**
	 * 
	 */
	import {mapActions,mapGetters,mapState,mapMutations} from 'vuex'
	export default {
		data (){
			return {
			}
		},
		onLoad:function(e){
			/**
			 * 这种方法是通过原生的方法访问数据
			 */
			console.log(this.$store.state.a.show);
			this.$store.commit("changeA",false)
			this.changeA(1000)
			console.log(this.$store.state.a.a);
			/**
			 * 异步修改数据，也只能使用异步中的方法
			 */
			this.$store.dispatch('changeAsync')
			this.switchShow(false)
			this.$store.dispatch('changeAsync')
			console.log(this.notShow)
			console.log(this.show);
			console.log('111');
			this.$store.commit('changeB',10);
		},

		computed:{
			...mapState({
				a : state => state.a.a,
				b : state => state.a.b,
				show : state => state.a.show
			}),
			...mapGetters([
				'notShow'
			]),

		},
		mounted:(e)=> {
			console.log(this);
		},
		methods:{
			...mapActions([
				'changeAsync',
				'changeNumAsync',
				
			]),
			...mapMutations([
				'changeA',
				'changeB',
				'switchShow'
			]),
			input(e){
				console.log(e.detail.value);
				setTimeout(()=>{this.changeNumAsync(e.detail.value)},1000)
			},
			syncInput(e){
				console.log(e.detail.value);
				this.changeA(e.detail.value)
			}
		}
	}
</script>

<style>
</style>
