(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-27fee631"],{"368e":function(t,e,i){},"3c93":function(t,e,i){},8175:function(t,e,i){"use strict";var n=i("bed1");i.n(n).a},"9e29":function(t,e,i){},bed1:function(t,e,i){},cd45:function(t,e,i){"use strict";i.r(e),i("4160"),i("fb6a"),i("ac1f"),i("1276"),i("159b");var n=i("8cc4"),s=i.n(n),a=i("cffa"),r=i("a5cf"),o=new s.a.Players({C0:"https://lesstk.com/audio/drum/kick.wav",C1:"https://lesstk.com/audio/drum/snare.wav",C2:"https://lesstk.com/audio/drum/hihat.wav",C3:"https://lesstk.com/audio/drum/tom1.wav",C4:"https://lesstk.com/audio/drum/tom2.wav",C5:"https://lesstk.com/audio/drum/tom3.wav",C6:"https://lesstk.com/audio/drum/ride.wav",C7:"https://lesstk.com/audio/drum/splash.wav"}).toMaster(),l={name:"Pads",components:{},data:function(){return{dialog:!1,timeSignIndex:2,timeSignArray:["2/4","3/4","4/4","6/8","7/8"],barArray:[1,2,3,4],animationDuration:2,note:4,beat:4,color:"",isPlaying:!1,index:0,loop:null,active:!1,pressedKeys:[],bpm:80,items:[{row:"0",name:"B.D"},{row:"1",name:"S.D"},{row:"2",name:"H.H"},{row:"3",name:"T1"},{row:"4",name:"T2"},{row:"5",name:"T3"},{row:"6",name:"ride"},{row:"7",name:"Cym"}],block_num_2_2:8,block_num_4_4:16,block_num_6_8:12,block_num_7_8:14,bar:1,barIndicator:2,TIME_FUTURE:.05,currentTimeSign:"4/4",currentDrum:"drum-rock",baseURl:"/audio/",players:null,count:0,chordIdx:0,bassIdx:0,arpCount:0,playedOnce:0,step:0,gen_arp_idx:0,indicator_count:0,count_display_timeline:0,playMode:0,player_length:0,recordCount:0}},created:function(){s.a.Transport.bpm.value=this.bpm,a.a.registerPlugin(r.c),this.init()},mounted:function(){this.initPlayers()},beforeDestroy:function(){},computed:{beatIndicator:function(){return this.currentTimeSign.split("/")[0]},notePerBeat:function(){return"2"===this.beatIndicator?4:"3"===this.beatIndicator?4:"4"===this.beatIndicator?4:"6"===this.beatIndicator?2:"7"===this.beatIndicator?2:4},currentBlockNum:function(){return"2"===this.beatIndicator?8*this.barIndicator:"3"===this.beatIndicator?12*this.barIndicator:"4"===this.beatIndicator?16*this.barIndicator:"6"===this.beatIndicator?12*this.barIndicator:"7"===this.beatIndicator?14*this.barIndicator:16},master_pattern:function(){for(var t=[[1,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0],[1,0,1,0,1,0,1,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],e=[[1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0]],i=[[1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],n=[[1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0],[0,0,1,0,1,0,0,0,1,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0]],s=[[1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,1,0,1,0,0,0,1,0,1,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0]],a=[[],[],[],[],[],[],[],[]],r=0;r<this.barIndicator;r++)if("2"===this.beatIndicator)for(var o=function(e){t[e].slice().forEach((function(t){a[e].push(t)}))},l=0;l<t.length;l++)o(l);else if("3"===this.beatIndicator)for(var c=function(t){e[t].slice().forEach((function(e){a[t].push(e)}))},u=0;u<e.length;u++)c(u);else if("4"===this.beatIndicator)for(var h=function(t){i[t].slice().forEach((function(e){a[t].push(e)}))},d=0;d<i.length;d++)h(d);else if("6"===this.beatIndicator)for(var v=function(t){n[t].slice().forEach((function(e){a[t].push(e)}))},m=0;m<n.length;m++)v(m);else if("7"===this.beatIndicator)for(var p=function(t){s[t].slice().forEach((function(e){a[t].push(e)}))},f=0;f<s.length;f++)p(f);return a}},watch:{},methods:{changeTimeSign:function(t){this.currentTimeSign=t},togglePlayState:function(){void 0!==this.loop&&(this.isPlaying?this.scheduleTimeOff():this.scheduleTimeOn()),this.isPlaying=!this.isPlaying},toggleBlock:function(t){var e=t.target;e.classList.contains("playing")?(e.classList.remove("playing"),e.classList.add("default")):(e.classList.remove("default"),e.classList.add("playing"))},scheduleTimeOn:function(){s.a.Transport.bpm.value=this.bpm,this.playMode,0===this.playedOnce&&(s.a.Transport.scheduleRepeat(this.playPattern,"16n"),this.playedOnce=1),s.a.Transport.start()},playPattern:function(){var t=this,e=document.getElementsByName("block-".concat(t.index));t.flash(e),e.forEach((function(e){e.focus(),e.classList.contains("playing")&&t.play(e.id.split("-")[0])})),t.index<t.currentBlockNum-1?t.index+=1:t.index=0,this.count+=1,this.arpCount+=1,this.recordCount+=1},scheduleTimeOff:function(){s.a.Transport.stop(),this.count=0,this.chordIdx=0,this.bassIdx=0,this.arpCount=0,this.playedOnce=0,this.step=0,this.gen_arp_idx=0,this.indicator_count=0,this.count_display_timeline=0,s.a.Transport.cancel()},init:function(){var t=this;this.loop=new s.a.Loop((function(e){s.a.Draw.schedule((function(){var e=document.getElementsByName("block-".concat(t.index));t.flash(e),e.forEach((function(e){e.focus(),e.classList.contains("playing")&&t.play(e.id.split("-")[0])}))}),e),t.index<t.currentBlockNum-1?t.index+=1:t.index=0}),"16n")},initPlayers:function(){this.players=o},play:function(t){this.players.get("C"+t).start()},bpmChange:function(t){this.bpm=t,s.a.Transport.bpm.value=this.bpm},decrement:function(){this.bpm-=1,s.a.Transport.bpm.value=this.bpm},increment:function(){this.bpm+=1,s.a.Transport.bpm.value=this.bpm},flash:function(t){t.forEach((function(t){r.c.to(t,.05,{opacity:1,onComplete:function(){return r.c.to(t,.2,{opacity:.2})}})}))},prevTimeSign:function(){0===this.timeSignIndex&&(this.timeSignIndex=this.timeSignArray.length),this.timeSignIndex-=1,this.changeTimeSign(this.timeSignArray[this.timeSignIndex])},nextTimeSign:function(){this.timeSignIndex===this.timeSignArray.length-1&&(this.timeSignIndex=-1),this.timeSignIndex+=1,this.changeTimeSign(this.timeSignArray[this.timeSignIndex])},log:function(t){window.console.log(t)}}},c=(i("8175"),i("2877")),u=i("6544"),h=i.n(u),d=i("8336"),v=i("b0af"),m=i("99d9"),p=i("62ad"),f=(i("a4d3"),i("4de4"),i("caad"),i("45fc"),i("a9e3"),i("e439"),i("dbb4"),i("b64b"),i("2532"),i("498a"),i("2fa7")),b=(i("368e"),i("4ad4")),y=i("b848"),g=i("75eb"),w=(i("3c93"),i("a9ad")),k=i("7560"),C=i("f2e7"),x=i("58df");function S(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}var O=Object(x.a)(w.a,k.a,C.a).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes:function(){return function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?S(i,!0).forEach((function(e){Object(f.a)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):S(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(t){var e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",class:this.classes,style:this.styles},e)}}),_=i("80d2"),T=i("2b0e").a.extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data:function(){return{overlay:null}},watch:{hideOverlay:function(t){this.isActive&&(t?this.removeOverlay():this.genOverlay())}},beforeDestroy:function(){this.removeOverlay()},methods:{createOverlay:function(){var t=new O({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});t.$mount();var e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay:function(){var t=this;if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),requestAnimationFrame((function(){t.overlay&&(void 0!==t.activeZIndex?t.overlay.zIndex=String(t.activeZIndex-1):t.$el&&(t.overlay.zIndex=Object(_.r)(t.$el)),t.overlay.value=!0)})),!0},removeOverlay:function(t){var e=this,i=!(0<arguments.length&&void 0!==t)||t;this.overlay&&(Object(_.a)(this.overlay.$el,"transitionend",(function(){e.overlay&&e.overlay.$el&&e.overlay.$el.parentNode&&!e.overlay.value&&(e.overlay.$el.parentNode.removeChild(e.overlay.$el),e.overlay.$destroy(),e.overlay=null)})),this.overlay.value=!1),i&&this.showScroll()},scrollListener:function(t){if("keydown"===t.type){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;var e=[_.t.up,_.t.pageup],i=[_.t.down,_.t.pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!i.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar:function(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;var e=window.getComputedStyle(t);return["auto","scroll"].includes(e.overflowY)&&t.scrollHeight>t.clientHeight},shouldScroll:function(t,e){return 0===t.scrollTop&&e<0||t.scrollTop+t.clientHeight===t.scrollHeight&&0<e},isInside:function(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath:function(t){var e=t.path||this.composedPath(t),i=t.deltaY;if("keydown"===t.type&&e[0]===document.body){var n=this.$refs.dialog,s=window.getSelection().anchorNode;return!(n&&this.hasScrollbar(n)&&this.isInside(s,n))||this.shouldScroll(n,i)}for(var a=0;a<e.length;a++){var r=e[a];if(r===document)return!0;if(r===document.documentElement)return!0;if(r===this.$refs.content)return!0;if(this.hasScrollbar(r))return this.shouldScroll(r,i)}return!0},composedPath:function(t){if(t.composedPath)return t.composedPath();for(var e=[],i=t.target;i;){if(e.push(i),"HTML"===i.tagName)return e.push(document),e.push(window),e;i=i.parentElement}return e},hideScroll:function(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(_.b)(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll:function(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}}),$=i("e4d3"),I=i("21be"),E=i("a293"),j=i("bfc5"),P=i("d9bd");function V(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}var L=Object(x.a)(b.a,y.a,g.a,T,$.a,I.a,C.a).extend({name:"v-dialog",directives:{ClickOutside:E.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200}},computed:{classes:function(){var t;return t={},Object(f.a)(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(f.a)(t,"v-dialog--active",this.isActive),Object(f.a)(t,"v-dialog--persistent",this.persistent),Object(f.a)(t,"v-dialog--fullscreen",this.fullscreen),Object(f.a)(t,"v-dialog--scrollable",this.scrollable),Object(f.a)(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(P.d)("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&(this.$emit("click:outside"),this.persistent?(this.noClickAnimation||this.animateClick(),!1):this.activeZIndex>=this.getMaxZIndex())},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):T.options.methods.hideScroll.call(this)},show:function(){var t=this;this.fullscreen||this.hideOverlay||this.genOverlay(),this.$nextTick((function(){t.$refs.content.focus(),t.bind()}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onKeydown:function(t){if(t.keyCode===_.t.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var i=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');i.length&&i[0].focus()}}}},render:function(t){var e=this,i=[],n={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:function(){e.isActive=!1},args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],on:{click:function(t){t.stopPropagation()}},style:{}};this.fullscreen||(n.style={maxWidth:"none"===this.maxWidth?void 0:Object(_.f)(this.maxWidth),width:"auto"===this.width?void 0:Object(_.f)(this.width)}),i.push(this.genActivator());var s=t("div",n,this.showLazyContent(this.getContentSlot()));return this.transition&&(s=t("transition",{props:{name:this.transition,origin:this.origin}},[s])),i.push(t("div",{class:this.contentClasses,attrs:function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?V(i,!0).forEach((function(e){Object(f.a)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):V(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}({role:"document",tabindex:this.isActive?0:void 0},this.getScopeIdAttrs()),on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.$createElement(j.a,{props:{root:!0,light:this.light,dark:this.dark}},[s])])),t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},i)}}),B=i("132d"),A=i("8e36"),M=i("0fd9"),N=i("b974"),D=(i("99af"),i("c975"),i("d81d"),i("26e9"),i("0d03"),i("b680"),i("d3b7"),i("acd8"),i("25f0"),i("9e29"),i("c37a")),F=i("0789"),z=i("297c");function W(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function K(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?W(i,!0).forEach((function(e){Object(f.a)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):W(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var U=Object(x.a)(D.a,z.a).extend({name:"v-slider",directives:{ClickOutside:E.a},mixins:[z.a],props:{disabled:Boolean,inverseLabel:Boolean,max:{type:[Number,String],default:100},min:{type:[Number,String],default:0},step:{type:[Number,String],default:1},thumbColor:String,thumbLabel:{type:[Boolean,String],default:null,validator:function(t){return"boolean"==typeof t||"always"===t}},thumbSize:{type:[Number,String],default:32},tickLabels:{type:Array,default:function(){return[]}},ticks:{type:[Boolean,String],default:!1,validator:function(t){return"boolean"==typeof t||"always"===t}},tickSize:{type:[Number,String],default:2},trackColor:String,trackFillColor:String,value:[Number,String],vertical:Boolean},data:function(){return{app:null,oldValue:null,keyPressed:0,isFocused:!1,isActive:!1,lazyValue:0,noClick:!1}},computed:{classes:function(){return K({},D.a.options.computed.classes.call(this),{"v-input__slider":!0,"v-input__slider--vertical":this.vertical,"v-input__slider--inverse-label":this.inverseLabel})},internalValue:{get:function(){return this.lazyValue},set:function(t){t=isNaN(t)?this.minValue:t;var e=this.roundValue(Math.min(Math.max(t,this.minValue),this.maxValue));e!==this.lazyValue&&(this.lazyValue=e,this.$emit("input",e))}},trackTransition:function(){return 2<=this.keyPressed?"none":""},minValue:function(){return parseFloat(this.min)},maxValue:function(){return parseFloat(this.max)},stepNumeric:function(){return 0<this.step?parseFloat(this.step):0},inputWidth:function(){return(this.roundValue(this.internalValue)-this.minValue)/(this.maxValue-this.minValue)*100},trackFillStyles:function(){var t,e=this.vertical?"bottom":"left",i=this.vertical?"top":"right",n=this.vertical?"height":"width",s=this.$vuetify.rtl?"auto":"0",a=this.$vuetify.rtl?"0":"auto",r=this.disabled?"calc(".concat(this.inputWidth,"% - 10px)"):"".concat(this.inputWidth,"%");return t={transition:this.trackTransition},Object(f.a)(t,e,s),Object(f.a)(t,i,a),Object(f.a)(t,n,r),t},trackStyles:function(){var t,e=this.vertical?this.$vuetify.rtl?"bottom":"top":this.$vuetify.rtl?"left":"right",i=this.vertical?"height":"width",n=this.disabled?"calc(".concat(100-this.inputWidth,"% - 10px)"):"calc(".concat(100-this.inputWidth,"%)");return t={transition:this.trackTransition},Object(f.a)(t,e,"0px"),Object(f.a)(t,i,n),t},showTicks:function(){return 0<this.tickLabels.length||!(this.disabled||!this.stepNumeric||!this.ticks)},numTicks:function(){return Math.ceil((this.maxValue-this.minValue)/this.stepNumeric)},showThumbLabel:function(){return!(this.disabled||!this.thumbLabel&&!this.$scopedSlots["thumb-label"])},computedTrackColor:function(){if(!this.disabled)return this.trackColor?this.trackColor:this.isDark?this.validationState:this.validationState||"primary lighten-3"},computedTrackFillColor:function(){if(!this.disabled)return this.trackFillColor?this.trackFillColor:this.validationState||this.computedColor},computedThumbColor:function(){return this.thumbColor?this.thumbColor:this.validationState||this.computedColor}},watch:{min:function(t){var e=parseFloat(t);e>this.internalValue&&this.$emit("input",e)},max:function(t){var e=parseFloat(t);e<this.internalValue&&this.$emit("input",e)},value:{handler:function(t){this.internalValue=t}}},beforeMount:function(){this.internalValue=this.value},mounted:function(){this.app=document.querySelector("[data-app]")||Object(P.c)("Missing v-app or a non-body wrapping element with the [data-app] attribute",this)},methods:{genDefaultSlot:function(){var t=[this.genLabel()],e=this.genSlider();return this.inverseLabel?t.unshift(e):t.push(e),t.push(this.genProgress()),t},genSlider:function(){return this.$createElement("div",{class:K({"v-slider":!0,"v-slider--horizontal":!this.vertical,"v-slider--vertical":this.vertical,"v-slider--focused":this.isFocused,"v-slider--active":this.isActive,"v-slider--disabled":this.disabled,"v-slider--readonly":this.readonly},this.themeClasses),directives:[{name:"click-outside",value:this.onBlur}],on:{click:this.onSliderClick}},this.genChildren())},genChildren:function(){return[this.genInput(),this.genTrackContainer(),this.genSteps(),this.genThumbContainer(this.internalValue,this.inputWidth,this.isActive,this.isFocused,this.onThumbMouseDown,this.onFocus,this.onBlur)]},genInput:function(){return this.$createElement("input",{attrs:K({value:this.internalValue,id:this.computedId,disabled:this.disabled,readonly:!0,tabindex:-1},this.$attrs)})},genTrackContainer:function(){var t=[this.$createElement("div",this.setBackgroundColor(this.computedTrackColor,{staticClass:"v-slider__track-background",style:this.trackStyles})),this.$createElement("div",this.setBackgroundColor(this.computedTrackFillColor,{staticClass:"v-slider__track-fill",style:this.trackFillStyles}))];return this.$createElement("div",{staticClass:"v-slider__track-container",ref:"track"},t)},genSteps:function(){var t=this;if(!this.step||!this.showTicks)return null;var e=parseFloat(this.tickSize),i=Object(_.h)(this.numTicks+1),n=this.vertical?"bottom":"left",s=this.vertical?"right":"top";this.vertical&&i.reverse();var a=i.map((function(i){var a,r=t.$vuetify.rtl?t.maxValue-i:i,o=[];t.tickLabels[r]&&o.push(t.$createElement("div",{staticClass:"v-slider__tick-label"},t.tickLabels[r]));var l=i*(100/t.numTicks),c=t.$vuetify.rtl?100-t.inputWidth<l:l<t.inputWidth;return t.$createElement("span",{key:i,staticClass:"v-slider__tick",class:{"v-slider__tick--filled":c},style:(a={width:"".concat(e,"px"),height:"".concat(e,"px")},Object(f.a)(a,n,"calc(".concat(l,"% - ").concat(e/2,"px)")),Object(f.a)(a,s,"calc(50% - ".concat(e/2,"px)")),a)},o)}));return this.$createElement("div",{staticClass:"v-slider__ticks-container",class:{"v-slider__ticks-container--always-show":"always"===this.ticks||0<this.tickLabels.length}},a)},genThumbContainer:function(t,e,i,n,s,a,r,o){var l=7<arguments.length&&void 0!==o?o:"thumb",c=[this.genThumb()],u=this.genThumbLabelContent(t);return this.showThumbLabel&&c.push(this.genThumbLabel(u)),this.$createElement("div",this.setTextColor(this.computedThumbColor,{ref:l,staticClass:"v-slider__thumb-container",class:{"v-slider__thumb-container--active":i,"v-slider__thumb-container--focused":n,"v-slider__thumb-container--show-label":this.showThumbLabel},style:this.getThumbContainerStyles(e),attrs:K({role:"slider",tabindex:this.disabled||this.readonly?-1:this.$attrs.tabindex?this.$attrs.tabindex:0,"aria-label":this.label,"aria-valuemin":this.min,"aria-valuemax":this.max,"aria-valuenow":this.internalValue,"aria-readonly":String(this.readonly),"aria-orientation":this.vertical?"vertical":"horizontal"},this.$attrs),on:{focus:a,blur:r,keydown:this.onKeyDown,keyup:this.onKeyUp,touchstart:s,mousedown:s}}),c)},genThumbLabelContent:function(t){return this.$scopedSlots["thumb-label"]?this.$scopedSlots["thumb-label"]({value:t}):[this.$createElement("span",[String(t)])]},genThumbLabel:function(t){var e=Object(_.f)(this.thumbSize),i=this.vertical?"translateY(20%) translateY(".concat(Number(this.thumbSize)/3-1,"px) translateX(55%) rotate(135deg)"):"translateY(-20%) translateY(-12px) translateX(-50%) rotate(45deg)";return this.$createElement(F.d,{props:{origin:"bottom center"}},[this.$createElement("div",{staticClass:"v-slider__thumb-label-container",directives:[{name:"show",value:this.isFocused||this.isActive||"always"===this.thumbLabel}]},[this.$createElement("div",this.setBackgroundColor(this.computedThumbColor,{staticClass:"v-slider__thumb-label",style:{height:e,width:e,transform:i}}),[this.$createElement("div",t)])])])},genThumb:function(){return this.$createElement("div",this.setBackgroundColor(this.computedThumbColor,{staticClass:"v-slider__thumb"}))},getThumbContainerStyles:function(t){var e=this.vertical?"top":"left",i=this.$vuetify.rtl?100-t:t;return i=this.vertical?100-i:i,Object(f.a)({transition:this.trackTransition},e,"".concat(i,"%"))},onThumbMouseDown:function(t){this.oldValue=this.internalValue,this.keyPressed=2,this.isActive=!0;var e=!_.w||{passive:!0,capture:!0},i=!!_.w&&{passive:!0};"touches"in t?(this.app.addEventListener("touchmove",this.onMouseMove,i),Object(_.a)(this.app,"touchend",this.onSliderMouseUp,e)):(this.app.addEventListener("mousemove",this.onMouseMove,i),Object(_.a)(this.app,"mouseup",this.onSliderMouseUp,e)),this.$emit("start",this.internalValue)},onSliderMouseUp:function(t){t.stopPropagation(),this.keyPressed=0;var e=!!_.w&&{passive:!0};this.app.removeEventListener("touchmove",this.onMouseMove,e),this.app.removeEventListener("mousemove",this.onMouseMove,e),this.$emit("end",this.internalValue),Object(_.k)(this.oldValue,this.internalValue)||(this.$emit("change",this.internalValue),this.noClick=!0),this.isActive=!1},onMouseMove:function(t){var e=this.parseMouseMove(t).value;this.internalValue=e},onKeyDown:function(t){if(!this.disabled&&!this.readonly){var e=this.parseKeyDown(t,this.internalValue);null!=e&&(this.internalValue=e,this.$emit("change",e))}},onKeyUp:function(){this.keyPressed=0},onSliderClick:function(t){this.noClick?this.noClick=!1:(this.$refs.thumb.focus(),this.onMouseMove(t),this.$emit("change",this.internalValue))},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},parseMouseMove:function(t){var e=this.vertical?"top":"left",i=this.vertical?"height":"width",n=this.vertical?"clientY":"clientX",s=this.$refs.track.getBoundingClientRect(),a=s[e],r=s[i],o="touches"in t?t.touches[0][n]:t[n],l=Math.min(Math.max((o-a)/r,0),1)||0;this.vertical&&(l=1-l),this.$vuetify.rtl&&(l=1-l);var c=a<=o&&o<=a+r;return{value:parseFloat(this.min)+l*(this.maxValue-this.minValue),isInsideTrack:c}},parseKeyDown:function(t,e){if(!this.disabled){var i=_.t.pageup,n=_.t.pagedown,s=_.t.end,a=_.t.home,r=_.t.left,o=_.t.right,l=_.t.down,c=_.t.up;if([i,n,s,a,r,o,l,c].includes(t.keyCode)){t.preventDefault();var u=this.stepNumeric||1,h=(this.maxValue-this.minValue)/u;return[r,o,l,c].includes(t.keyCode)?(this.keyPressed+=1,e+=((this.$vuetify.rtl?[r,c]:[o,c]).includes(t.keyCode)?1:-1)*u*(t.shiftKey?3:t.ctrlKey?2:1)):t.keyCode===a?e=this.minValue:t.keyCode===s?e=this.maxValue:e-=(t.keyCode===n?1:-1)*u*(100<h?h/10:10),e}}},roundValue:function(t){if(!this.stepNumeric)return t;var e=this.step.toString().trim(),i=-1<e.indexOf(".")?e.length-e.indexOf(".")-1:0,n=this.minValue%this.stepNumeric,s=Math.round((t-n)/this.stepNumeric)*this.stepNumeric+n;return parseFloat(Math.min(s,this.maxValue).toFixed(i))}}}),Y=i("e0c7"),Z=Object(c.a)(l,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pad-container"},[i("section",{staticStyle:{margin:"10px 0%","box-sizing":"border-box"}},[i("section",{staticStyle:{width:"100%","vertical-align":"top","overflow-x":"auto","box-shadow":"rgb(0, 0, 0) 0px 0px 0px","border-width":"0px","-webkit-overflow-scrolling":"touch"}},[i("section",{staticStyle:{overflow:"hidden","min-width":"1440px","box-sizing":"border-box"}},[i("v-row",[i("v-col",{attrs:{cols:"1"}},[t._l(t.items,(function(e,n){return i("v-row",{key:e.name},[i("v-btn",{staticClass:"indicator",on:{click:function(e){return t.play(n)}}},[t._v(t._s(e.name))])],1)})),i("v-row",[i("div",{staticClass:"indicator"},[i("span",[t._v("Beat")])])]),i("v-row",[i("div",{staticClass:"indicator"},[i("span",[t._v("Bar")])])])],2),i("v-col",{staticClass:"flex-grow-1",attrs:{cols:"15"}},[t._l(t.master_pattern,(function(e,n){return i("v-row",{key:n},t._l(e,(function(e,s){return i("div",{key:n+s,class:(parseInt(s)%t.notePerBeat==0?"block-space ":"")+(1===e?"playing":"default"),attrs:{tabindex:"2",id:n+"-"+s,name:"block-"+s},on:{click:t.toggleBlock}})})),0)})),i("v-row",t._l(parseInt(t.beatIndicator)*parseInt(t.barIndicator),(function(e){return i("div",{key:e,staticClass:"indicator block-space"},[e<10?i("span",[t._v("0")]):t._e(),i("span",[t._v(t._s(e))])])})),0),i("v-row",t._l(t.barIndicator,(function(e){return i("div",{key:e,staticClass:"indicator block-space"},[i("span",[t._v(t._s(e))])])})),0)],2)],1)],1)])]),i("v-card",[i("v-card-text",[i("v-row",{staticClass:"mb-4",attrs:{justify:"space-between"}},[i("v-col",{staticClass:"text-center"},[i("v-btn",{attrs:{color:t.color,dark:"",depressed:"",fab:""},on:{click:t.togglePlayState}},[i("v-icon",{attrs:{large:""}},[t._v(" "+t._s(t.isPlaying?"mdi-pause":"mdi-play")+" ")])],1)],1),i("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"3"}},[i("v-select",{attrs:{items:t.timeSignArray,label:"节奏",outlined:""},model:{value:t.currentTimeSign,callback:function(e){t.currentTimeSign=e},expression:"currentTimeSign"}})],1),i("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"3"}},[i("v-select",{attrs:{items:t.barArray,label:"小节",outlined:""},model:{value:t.barIndicator,callback:function(e){t.barIndicator=e},expression:"barIndicator"}})],1)],1),i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("v-subheader",{staticClass:"pl-0"},[t._v("BPM")]),i("v-slider",{attrs:{color:t.color,"track-color":"grey","thumb-label":"always","always-dirty":"",min:"38",max:"128"},on:{change:t.bpmChange},scopedSlots:t._u([{key:"prepend",fn:function(){return[i("v-icon",{attrs:{color:t.color},on:{click:t.decrement}},[t._v(" mdi-minus ")])]},proxy:!0},{key:"append",fn:function(){return[i("v-icon",{attrs:{color:t.color},on:{click:t.increment}},[t._v(" mdi-plus ")])]},proxy:!0}]),model:{value:t.bpm,callback:function(e){t.bpm=e},expression:"bpm"}})],1)],1)],1)],1),i("v-dialog",{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",{attrs:{color:"primary",dark:""}},[i("v-card-text",[t._v(" Please stand by "),i("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1)],1)],1)}),[],!1,null,"7c9e035f",null);e.default=Z.exports,h()(Z,{VBtn:d.a,VCard:v.a,VCardText:m.b,VCol:p.a,VDialog:L,VIcon:B.a,VProgressLinear:A.a,VRow:M.a,VSelect:N.a,VSlider:U,VSubheader:Y.a})}}]);