/**
* 强大的日历库https://vcalendar.io/
*/
<template>
	<view class="container">
		<v-calendar :attributes='attrs' is-expanded>
		</v-calendar>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				attrs: [{
					key: 'today',
					highlight: true,
					dates: new Date()
				}]
			}
		},
		methods: {
			monthChange(month) {
				console.log(month)
			},
			dayChange(day) {
				console.log(day)
			}
		}
	}
</script>

<style scoped>

</style>
