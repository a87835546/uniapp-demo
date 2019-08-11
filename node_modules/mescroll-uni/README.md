## mescroll-uni : 支持uni-app的下拉刷新和上拉加载组件
## http://www.mescroll.com
1. mescroll-uni 是用在uni-app的下拉刷新和上拉加载的组件, 支持一套代码编译到iOS、Android、H5、小程序等多个平台

2. mescroll-uni 采用的是uni官方推荐的新框架编译模式 : <a href="https://ask.dcloud.net.cn/article/35843" target="_blank">自定义组件模式</a>, 实现了更高的性能及更多的 Vue 语法支持

3. mescroll-uni 继承了mescroll.js的实用功能: 自动处理分页, 自动控制无数据, 空布局提示, 回到顶部按钮 ..

4. mescroll-uni 丰富的案例, 自由灵活的api, 超详细的注释, 可让您快速自定义真正属于自己的下拉上拉组件

<br/>
### 快速入门,在线案例,参数说明, 请移步至<a href="http://www.mescroll.com/uni.html">mescroll官网</a>
---

<br/>
#### 关于微信小程序运行报以下异常提示的说明:
[Vue warn]: Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: "xxx"
<br/>该警告提示, 不影响功能, 是旧版HBuilderX编译器的问题, 更新最新版本的HBuilderX即可
<br/>详见: <a href="http://ask.dcloud.net.cn/question/72693">http://ask.dcloud.net.cn/question/72693</a>

#### 关于编译到APP,如果设置mescroll-uni为全局组件导致功能失效的问题说明:
这个也是HBuilderX编辑器的问题, npm安装的所有插件如果设置全局组件都会失效, 而拷贝到components目录再设置全局组件即正常, 期待官方更新修复~
<br/>详见: <a href="http://ask.dcloud.net.cn/question/73950">http://ask.dcloud.net.cn/question/73950</a>
<br/>

#### 关于vue-cli创建的uniapp, 无法正常引入mescroll-uni的问题说明:
这个也..也是编辑器的问题, 要疯了~ 
<br/>详见: <a href="http://ask.dcloud.net.cn/question/73973">http://ask.dcloud.net.cn/question/73973</a>
<br/><br/>


### 更新记录:

---
#### 1.1.5版本 (2019/07/25)
1. up新增isBounce的配置, 默认值为false. 目的是解决H5在ios下拉出现灰色背景和android端无法正常下拉的问题. 详见: <a href="http://www.mescroll.com/qa.html?v=190725#q25">http://www.mescroll.com/qa.html?v=190725#q25</a>
2. 修复setClientHeight某些情况下会提示undefined的问题
3. 修复在mescroll-uni-option.js配置page会导致分页异常的问题

---
#### 1.1.2版本 (2019/07/19)
一. 修复和优化的内容:
1. 修复列表不满屏时,无法上拉的问题
2. 修复列表滚动到底部,有时无法上拉的问题
3. 修复快速滚动到顶部时,滚动条的位置有时不为0的问题
4. 修复配置page.num不生效的问题
5. 修复小程序android端下拉卡顿的问题 (可配置down的supply,复杂的列表可适当调大值)
6. 修复H5多mescroll的情况下回到顶部按钮错位的问题
7. 优化和简化逻辑,去除冗余代码

二. 完善获取节点信息的方式:
1. 获取mescroll的唯一元素id: mescroll.viewId (可通过uni.createSelectorQuery进一步获取更多信息)
2. 获取滚动内容的高度: mescroll.getScrollHeight()
3. 获取mescroll的高度: mescroll.getClientHeight()
4. 获取滚动条位置: mescroll.getScrollTop()
5. 获取到底部的距离: mescroll.getScrollBottom()
6. 获取滚动的方向: mescroll.isScrollUp // true向上滑; false向下滑
7. 更多信息详见mescroll-options的示例

---
#### 1.1.1版本 (2019/07/16)
1. 修复滚动到顶部,有时无法下拉的问题
2. 修复禁止上拉时,列表底部有空白区域的问题

---
#### 1.1.0版本 (重要版本) (2019/07/01)
一. 简化使用:
1. **无需**在page.json中配置onReachBottomDistance<br/>
2. **无需**在页面中注册onReachBottom 和 onPageScroll<br/>
3. 初始化时@init**不再**是必须配置项<br/>
4. 极大的**简化** list-mescroll-more.vue 的案例<br/>
5. 全面**支持swiper**,详见 mescroll-swiper.vue 的案例<br/>
6. 所有基础案例都有所简化, **建议**重新下载参考. (以前版本向下兼容)<br/> 
7. 所有中高级案例自定义的部分,改动比较大, **必须**重新下载参考. (不兼容以前版本)

二. 优化性能:
1. 支持fixed定位,可实现局部**区域滚动**<br/>
2. 支持swiper,scrollview**嵌套**使用<br/>
3. 优化下拉逻辑,修复下拉刷新卡顿和抖动的问题<br/>
4. 优化默认样式,避免某些情况出现双滚动条的问题<br/>
5. up废弃errDistance配置, 内部已优化处理相关问题

三. 新增配置:
1. down和up新增fps节流配置.(默认40fps, 值越大每秒刷新频率越高)<br/>
2. up新增offset配置: 距底部多远时,触发upCallback (默认80, 代替page.json的onReachBottomDistance)<br/>
3. up新增onScroll配置: 是否监听滚动事件,默认false<br/>
4. < mescroll-uni 新增 @scroll="scroll" 获取滚动条的位置和滚动方向, 需配置up的onScroll为true, 详见 mescroll-options.vue 的示例<br/>
5. < mescroll-uni 新增 :fixed="true/false" 是否支持fixed定位, 默认 true. 
<br/> 当:fixed="true", 此时 :top 和 :bottom 为 fixed 的 top 和 bottom
<br/> 当:fixed="false", 此时 :top 和 :bottom 为 padding-top 和 padding-bottom


---
#### 1.0.3版本 (2019/06/13)
1. 默认设置page高度100%,使列表不满屏的时候,仍可下拉刷新<br/>
2. 加入-webkit-overflow-scrolling: touch, 编译到H5和APP,使iOS列表滚动更流畅<br/>
3. mescroll-empty加入box-sizing: border-box, 修复图标和文本不居中的问题<br/>
4. 上拉配置新增errDistance,默认110 // mescroll.endErr()的时候需往上滑动一段距离,使其能再次触发上拉加载 (已在1.1.0版本废弃)<br/>
5. mescroll.endErr(errDistance) 新增的参数 errDistance; 可单独配置异常往上滑动的距离 (已在1.1.0版本废弃)<br/>
6. 修改了list-mescroll-more的160行为mescroll.endErr(0);(已在1.1.0版本优化)<br/>
7. 新增mescroll.scrollTo(y,t) 滚动到指定的位置; 本质调用的是uni.pageScrollTo

---
#### 1.0.2版本 (2019/05/28)  
1. 组件根元素加入mescroll-uni的样式,empty新增fixed等配置项; <br/>
2. 修复list-mescroll-more案例切换tabs,某些情况的page.num会错乱的问题