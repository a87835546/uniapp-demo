<template>
	<view class="container">
		<!--头部按钮-->
		<view class="header">
			<view class="icon-text-item">
				<view class="iconfont icon-iconfontsaoyisao title-icon"></view>
				<text class="title">扫一扫</text>
			</view>
			<view class="icon-text-item">
				<view class="iconfont icon-shouzhiliushui title-icon"></view>
				<text class="title">收支明细</text>
			</view>
			<view class="icon-text-item">
				<view class="iconfont icon-zhuanzhang title-icon"></view>
				<text class="title">转账</text>
			</view>
			<view class="icon-text-item">
				<view class="iconfont icon-shujuzonglan title-icon"></view>
				<text class="title">账户总览</text>
			</view>
		</view>
		<!-- 功能列表 -->
		<view class="funciton-list">
			<view 
			class="icon-text-item function-item"
			v-for="(item,index) in services"
			:key="index">
				<view
				class="iconfont detail-icon"
				:class="item.icontype"
				:style="{color: item.color}">
				</view>
				<text class="detail">{{item.name}}</text>
			</view>
		</view>
		<!-- 滑动视图 -->
		<view class="banner">
			<swiper class="swiper" 
			autoplay="true"
			interval="5000"
			duration="500">
				<swiper-item>
					<image
					class="swiper-item"
					src="../../../static/banner1.jpeg"
					mode="scaleToFill"
					>
					</image>
				</swiper-item>
				<swiper-item>
					<image
					src="../../../static/banner2.jpeg"
					mode="scaleToFill"
					class="swiper-item">
					</image>
				</swiper-item>
				<swiper-item>
					<image
					src="../../../static/banner3.jpeg"
					mode="scaleToFill"
					class="swiper-item">
					</image>
				</swiper-item>
			</swiper>
		</view>
		<!-- 借贷信息 -->
		<view class="card">
			<view class="card-top">
				<text class="card-title">闪电贷</text>
				<text class="card-detail">按日计息，随借随还</text>
			</view>
			<view class="card-bottom">
				<view class="card-bottom-item">
					<text class="card-detail">可借额度</text>
					<text class="card-red">150,000.00</text>
				</view>
				<view class="card-bottom-item">
					<text class="card-detail">年利率</text>
					<text class="card-red">10.08%</text>
				</view>
			</view>
		</view>
		
		<view class="suggest">
			<text class="section-title">为您推荐</text>
			<text class="section-right">更多</text>
		</view>
		
		<view class="suggest-list">
			<view 
			class="sugguest-item"
			v-for="(item, index) in suggestItems"
			:key="index">
				<text class="suggest-title">{{item.title}}</text>
				<text class="suggest-name">{{item.name}}</text>
				<text class="suggest-rate">{{item.rate}}</text>
				<text class="suggest-desc">{{item.desc}}</text>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				suggestItems: [
					{
						title: "火爆开售",
						name: "招财盈利",
						rate: "2.23%",
						desc: "最高七日年化"
					},
					{
						title: "能涨抗跌",
						name: "工银瑞信",
						rate: "10.68%",
						desc: "近一年收益率"
					},
					{
						title: "绩效优选",
						name: "huazhai",
						rate: "2.23%",
						desc: "最高七日年化"
					}
				],
				services: [
					{
						icontype: "icon-xinyongqia",
						name: "信用卡",
						color: "#F24A00"
					},
					{
						icontype: "icon-zhuanru",
						name: "他行转入",
						color: "#9BD55B"
					},
					{
						icontype: "icon-jieqian",
						name: "借钱",
						color: "#F9AB00"
					},
					{
						icontype: "icon-chengshi",
						name: "城市服务",
						color: "#00A69C"
					},
					{
						icontype: "icon-huodong",
						name: "热门活动",
						color: "#1000E8"
					},
					{
						icontype: "icon-lipin",
						name: "开卡有礼",
						color: "#F24A00"
					},
					{
						icontype: "icon-shezhi",
						name: "银行卡设置",
						color: "#F9AB00"
					},
					{
						icontype: "icon-yuyue",
						name: "网点预约",
						color: "#048FEF"
					},
					{
						icontype: "icon-daikuan",
						name: "我的贷款",
						color: "#F9AB00"
					},
					{
						icontype: "icon-quanbu",
						name: "全部",
						color: "#048FEF"
					}
				]
			}
		}
	}
</script>

<style scoped>
	@import "../../../common/css/iconfont.css";
	
	.container {
		background-color: #FEFEFE;
		height: 100hv;
	}
	
	.header {
		background: linear-gradient(#A883C3, #C579AD);
		display: flex;
		justify-content: space-around;
		height: 100px;
		align-items: center;
	}
	
	.icon-text-item {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	.title {
		margin-top: 5px;
		font-size: 14px;
		color: #FFFFFF;
	}
	
	.title-icon {
		font-size: 30px;
		color: #FFFFFF;
	}
	
	.funciton-list {
		height: 140px;
		display: flex;
		align-content: flex-start;
		align-items: center;
		flex-wrap: wrap;
		border-bottom-color: #99999989;
		border-bottom-width: 1px;
		border-bottom-style: solid;
	}
	
	.function-item {
		width: 20%;
		height: 60px;
		margin-top: 10px;
	}
	
	.detail {
		font-size: 12px;
		color: #444444;
	}
	
	.detail-icon {
		font-size: 25px;
	}
	
	.banner {
		height: 160px;
	}
	
	.swiper-item {
		width: 100%;
		height: 100%;
	}
	
	.card {
		margin-left: 12px;
		margin-right: 12px;
		height: 110px;
		border: 1px solid #FFFFFF;
		border-radius: 5px;
		background-color: #FFFFFF;
		box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
		display: flex;
		flex-direction: column;
	}
	
	.card-top {
		display: flex;
		align-items: center;
	}
	
	.card-title {
		font-size: 19px;
		color: #000000;
		margin: 10px;
	}
	
	.card-detail {
		font-size: 14px;
		color: #777777;
		margin-left: 10px;
	}
	
	.card-bottom {
		display: flex;
	}
	
	.card-bottom-item {
		display: flex;
		flex-direction: column;
		margin-right: 60px;
	}
	
	.card-red {
		font-size: 25px;
		color: red;
		margin-left: 10px;
	}
	
	.suggest {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 16px;
		margin-bottom: 16px;
	}
	
	.section-title {
		font-size: 18px;
		color: #000000;
		margin-left: 16px;
	}
	
	.section-right {
		font-size: 14px;
		color: #6C6C6C;
		margin-right: 16px;
	}
	
	.suggest-list {
		display: flex;
		justify-content: space-around;
	}
	
	.sugguest-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 120px;
		border: 1px solid #FFFFFF;
		border-radius: 3px;
		background-color: #FFFFFF;
		box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
		width: 28%;
	}
	
	.suggest-title {
		margin-left: 5px;
		font-size: 14px;
		color: #333333;
		margin-top: 10px;
		margin-bottom: 5px;
	}
	
	.suggest-name {
		margin-left: 5px;
		font-size: 12px;
		color: #777777;
	}
	
	.suggest-rate {
		margin-left: 5px;
		font-size: 16px;
		color: red;
		margin-top: 10px;
	}
	
	.suggest-desc {
		margin-left: 5px;
		font-size: 12px;
		color: red;
	}
	
	
</style>
