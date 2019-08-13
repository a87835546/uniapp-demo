# uni-demo
 原生app开发者，初次学习vue/uniapp 时的一些个人心得记录。
 
 
## 基础知识链接
    
快速上手  
[Uni-app快速上手](https://uniapp.dcloud.io/quickstart)  
[学习手记](https://segmentfault.com/a/1190000017020710)
	
代码风格  
[vue风格指南](https://cn.vuejs.org/v2/style-guide/index.html)  

flex布局教程（某些属性在uni-app上没效，稍改一下就行）  
[flex布局](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)  
[flex布局实战](http://www.ruanyifeng.com/blog/2015/07/flex-examples.html)
    
学会JS的this，类似objc_msgSend（非必需，原生思维写js容易在this上踩坑）  
[学会JS的this](http://www.imooc.com/article/1758)

CSS BEM规范（非必需）  
[BEM规范入门](https://www.jianshu.com/p/5e018c7f0bc6)  
[编写模块化CSS：BEM](https://www.w3cplus.com/css/css-architecture-1.html)  
[编写模块化的CSS:命名空间](https://www.w3cplus.com/css/css-architecture-2.html)  

	
## 常见需要注意的事项
	1. 在设置控件宽度的时候，不要使用100%，此时在app端会不生效。要使用100vw.
	2. 在使用uni-ui的ui控件时，要以对象的角度去看，注意它的ui组件都是封装过后的，你可能使用原有的方法会不生效.例如input标签的.focus()
	3. uni-ui 的 uni-list/uni-list-item 列表控件是不支持v-for指令。所以在使用非固定的列表时需要使用自定义控件
	4. scroll-view
	5. 组件的css定义会被页面的同名css定义覆盖，推荐使用BEM命名规范

## ![](/static/1.jpeg)