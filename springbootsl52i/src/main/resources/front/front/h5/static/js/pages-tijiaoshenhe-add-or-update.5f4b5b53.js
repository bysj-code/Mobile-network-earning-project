(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tijiaoshenhe-add-or-update"],{"1ca1":function(e,r,t){"use strict";t.r(r);var n=t("96e2"),i=t.n(n);for(var a in n)"default"!==a&&function(e){t.d(r,e,(function(){return n[e]}))}(a);r["default"]=i.a},3694:function(e,r,t){var n=t("c3d9");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=t("4f06").default;i("d285be42",n,!0,{sourceMap:!1,shadowMode:!1})},"7e67":function(e,r,t){"use strict";var n=t("3694"),i=t.n(n);i.a},"96e2":function(e,r,t){"use strict";var n=t("4ea4");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,t("ac6a"),t("96cf");var i=n(t("3b8d")),a=n(t("e2b1")),o={data:function(){return{ruleForm:{zhanghao:"",xingming:"",renwumingcheng:"",renwujifen:"",tijiaoshenhewenjian:"",wanchengshijian:"",sfsh:"",shhf:"",userid:""},user:{},ro:{zhanghao:!1,xingming:!1,renwumingcheng:!1,renwujifen:!1,tijiaoshenhewenjian:!1,wanchengshijian:!1,sfsh:!1,shhf:!1,userid:!1}}},components:{wPicker:a.default},computed:{},onLoad:function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(r){var t,n,i,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.ruleForm.wanchengshijian=this.$utils.getCurDateTime(),t=uni.getStorageSync("nowTable"),e.next=4,this.$api.session(t);case 4:if(n=e.sent,this.user=n.data,this.ruleForm.zhanghao=this.user.zhanghao,this.ruleForm.xingming=this.user.xingming,this.ruleForm.userid=uni.getStorageSync("userid"),r.refid&&(this.ruleForm.refid=r.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!r.id){e.next=16;break}return this.ruleForm.id=r.id,e.next=14,this.$api.info("tijiaoshenhe",this.ruleForm.id);case 14:n=e.sent,this.ruleForm=n.data;case 16:if(!r.cross){e.next=51;break}i=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(i);case 19:if((e.t1=e.t0()).done){e.next=51;break}if(a=e.t1.value,"zhanghao"!=a){e.next=25;break}return this.ruleForm.zhanghao=i[a],this.ro.zhanghao=!0,e.abrupt("continue",19);case 25:if("xingming"!=a){e.next=29;break}return this.ruleForm.xingming=i[a],this.ro.xingming=!0,e.abrupt("continue",19);case 29:if("renwumingcheng"!=a){e.next=33;break}return this.ruleForm.renwumingcheng=i[a],this.ro.renwumingcheng=!0,e.abrupt("continue",19);case 33:if("renwujifen"!=a){e.next=37;break}return this.ruleForm.renwujifen=i[a],this.ro.renwujifen=!0,e.abrupt("continue",19);case 37:if("tijiaoshenhewenjian"!=a){e.next=41;break}return this.ruleForm.tijiaoshenhewenjian=i[a],this.ro.tijiaoshenhewenjian=!0,e.abrupt("continue",19);case 41:if("wanchengshijian"!=a){e.next=45;break}return this.ruleForm.wanchengshijian=i[a],this.ro.wanchengshijian=!0,e.abrupt("continue",19);case 45:if("userid"!=a){e.next=49;break}return this.ruleForm.userid=i[a],this.ro.userid=!0,e.abrupt("continue",19);case 49:e.next=19;break;case 51:this.styleChange();case 52:case"end":return e.stop()}}),e,this)})));function r(r){return e.apply(this,arguments)}return r}(),methods:{styleChange:function(){this.$nextTick((function(){}))},wanchengshijianConfirm:function(e){console.log(e),this.ruleForm.wanchengshijian=e.result,this.$forceUpdate()},tijiaoshenhewenjianTap:function(){var e=this;this.$api.upload((function(r){e.ruleForm.tijiaoshenhewenjian=e.$base.url+"upload/"+r.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.ruleForm.id){e.next=5;break}return e.next=3,this.$api.update("tijiaoshenhe",this.ruleForm);case 3:e.next=7;break;case 5:return e.next=7,this.$api.add("tijiaoshenhe",this.ruleForm);case 7:this.$utils.msgBack("提交成功");case 8:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var r=new Date,t=r.getFullYear(),n=r.getMonth()+1,i=r.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),n=n>9?n:"0"+n,i=i>9?i:"0"+i,"".concat(t,"-").concat(n,"-").concat(i)},toggleTab:function(e){this.$refs[e].show()}}};r.default=o},ae6a:function(e,r,t){"use strict";t.r(r);var n=t("b779"),i=t("1ca1");for(var a in i)"default"!==a&&function(e){t.d(r,e,(function(){return i[e]}))}(a);t("7e67");var o,s=t("f0c5"),u=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"0e114450",null,!1,n["a"],o);r["default"]=u.exports},b779:function(e,r,t){"use strict";var n={"w-picker":t("e2b1").default},i=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("v-uni-view",{staticClass:"content"},[t("v-uni-form",{staticClass:"app-update-pv"},[t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(41, 40, 40, 1)",textAlign:"left"}},[e._v("账号")]),t("v-uni-input",{style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(40, 38, 38, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.zhanghao,placeholder:"账号"},model:{value:e.ruleForm.zhanghao,callback:function(r){e.$set(e.ruleForm,"zhanghao",r)},expression:"ruleForm.zhanghao"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(41, 40, 40, 1)",textAlign:"left"}},[e._v("姓名")]),t("v-uni-input",{style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(40, 38, 38, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.xingming,placeholder:"姓名"},model:{value:e.ruleForm.xingming,callback:function(r){e.$set(e.ruleForm,"xingming",r)},expression:"ruleForm.xingming"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(41, 40, 40, 1)",textAlign:"left"}},[e._v("任务名称")]),t("v-uni-input",{style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(40, 38, 38, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.renwumingcheng,placeholder:"任务名称"},model:{value:e.ruleForm.renwumingcheng,callback:function(r){e.$set(e.ruleForm,"renwumingcheng",r)},expression:"ruleForm.renwumingcheng"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(41, 40, 40, 1)",textAlign:"left"}},[e._v("任务积分")]),t("v-uni-input",{style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(40, 38, 38, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.renwujifen,placeholder:"任务积分"},model:{value:e.ruleForm.renwujifen,callback:function(r){e.$set(e.ruleForm,"renwujifen",r)},expression:"ruleForm.renwujifen"}})],1),t("v-uni-view",{staticClass:"cu-form-group",class:"left"==e.left?"":"active",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.tijiaoshenhewenjianTap.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(23, 22, 22, 1)",textAlign:"left"}},[e._v("提交审核文件")]),t("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"},style:{textAlign:"left"}},[e.ruleForm.tijiaoshenhewenjian?t("v-uni-input",{style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(40, 38, 38, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{placeholder:"提交审核文件"},model:{value:e.ruleForm.tijiaoshenhewenjian,callback:function(r){e.$set(e.ruleForm,"tijiaoshenhewenjian",r)},expression:"ruleForm.tijiaoshenhewenjian"}}):t("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(41, 40, 40, 1)",textAlign:"left"}},[e._v("完成时间")]),t("v-uni-input",{style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(40, 38, 38, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{placeholder:"完成时间"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.toggleTab("wanchengshijian")}},model:{value:e.ruleForm.wanchengshijian,callback:function(r){e.$set(e.ruleForm,"wanchengshijian",r)},expression:"ruleForm.wanchengshijian"}})],1),t("v-uni-view",{staticClass:"btn"},[t("v-uni-button",{staticClass:"bg-red",style:{boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",backgroundColor:"#409EFF",borderColor:"#409EFF",borderRadius:"40rpx",color:"#fff",borderWidth:"1",width:"80%",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1),t("w-picker",{ref:"wanchengshijian",attrs:{mode:"dateTime",step:"1",current:!1,hasSecond:!1,themeColor:"#333333"},on:{confirm:function(r){arguments[0]=r=e.$handleEvent(r),e.wanchengshijianConfirm.apply(void 0,arguments)}}})],1)},a=[];t.d(r,"b",(function(){return i})),t.d(r,"c",(function(){return a})),t.d(r,"a",(function(){return n}))},c3d9:function(e,r,t){var n=t("24fb");r=n(!1),r.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-0e114450]{padding:%?20?%}.content[data-v-0e114450]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-0e114450]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-0e114450]{width:%?180?%}.avator[data-v-0e114450]{width:%?150?%;height:%?60?%}.right-input[data-v-0e114450]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-0e114450]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-0e114450]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-0e114450]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-0e114450]{border:0}.cu-form-group uni-input[data-v-0e114450]{padding:0 %?30?%}.uni-input[data-v-0e114450]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-0e114450]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-0e114450]::after{line-height:%?88?%}.select .uni-input[data-v-0e114450]{line-height:%?88?%}.input .right-input[data-v-0e114450]{line-height:%?88?%}',""]),e.exports=r}}]);