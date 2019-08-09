# uni-demo
 原生app开发者，初次学习vue/uniapp 时的一些个人心得记录。
	
##常见需要注意的事项
	+. 在设置控件宽度的时候，不要使用100%，此时在app端会不生效。要使用100vw.
	+.在使用uni-ui的ui控件时，要以对象的角度去看，注意它的ui组件都是封装过后的，你可能使用原有的方法会不生效.例如input标签的.focus()
	+.uni-ui 的 uni-list/uni-list-item 列表控件是不支持v-for指令。所以在使用非固定的列表时需要使用自定义控件
	+.scroll-view