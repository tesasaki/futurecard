(function(t){function e(e){for(var r,s,c=e[0],o=e[1],l=e[2],p=0,d=[];p<c.length;p++)s=c[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var o=n[c];0!==a[o]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},i=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"10a6":function(t,e,n){"use strict";var r=n("917f"),a=n.n(r);a.a},3703:function(t,e,n){"use strict";var r=n("fc68"),a=n.n(r);a.a},"37f1":function(t,e,n){"use strict";var r=n("385d"),a=n.n(r);a.a},"385d":function(t,e,n){},3988:function(t,e,n){},"5cc0":function(t,e,n){"use strict";var r=n("e2df"),a=n.n(r);a.a},"6e3d":function(t,e,n){"use strict";var r=n("bdc0"),a=n.n(r);a.a},"7a88":function(t,e,n){"use strict";var r=n("3988"),a=n.n(r);a.a},"82e9":function(t,e,n){},"917f":function(t,e,n){},"9ce8":function(t,e,n){"use strict";var r=n("82e9"),a=n.n(r);a.a},b545:function(t,e,n){},bdc0:function(t,e,n){},c687:function(t,e,n){"use strict";var r=n("b545"),a=n.n(r);a.a},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("AppHeader",{staticClass:"header"}),n("main",[n("router-view",{staticClass:"page"})],1),n("AppFooter",{staticClass:"footer",on:{about:t.showAbout}}),n("AboutDialog",{directives:[{name:"show",rawName:"v-show",value:t.viewState.isAboutShown,expression:"viewState.isAboutShown"}],on:{close:t.hideAbout}})],1)},i=[],s=n("750b"),c=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"app-header-root"},[n("div",{staticClass:"subtitle"},[t._v(" みんなで きがるに おはなししよう ")]),n("div",{staticClass:"title"},[t._v(" CHA-CHAT! "),n("div",{staticClass:"ruby"},[t._v("チャチャット!")])])])}],l=Object(s["c"])({props:{},setup:function(){return{}}}),u=l,p=(n("3703"),n("2877")),d=Object(p["a"])(u,c,o,!1,null,"65aad0b8",null),f=d.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"app-footer-root"},[n("button",{staticClass:"about",attrs:{title:"how to play"},on:{click:function(e){return t.$emit("about")}}},[t._v("?")])])},v=[],h=Object(s["c"])({props:{},setup:function(){return{}}}),m=h,b=(n("9ce8"),Object(p["a"])(m,C,v,!1,null,"6e413c49",null)),x=b.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[n("div",{staticClass:"about-dialog-root"},[n("div",{staticClass:"dialog"},[n("div",{staticClass:"main"},[n("h1",[t._v("あそびかた")]),n("div",{staticClass:"subtitle"},[t._v("みんなであつまって、おはなししよう！")]),n("h2",[t._v("どんなゲーム？")]),n("p",[t._v(" CHA-CHAT（ちゃちゃっと）はともだちと、かぞくと、なかまといっしょにあいてをしる、じぶんをしってもらうゲームです。 ")]),n("h2",[t._v("どうやってあそぶ？")]),n("p",[t._v(" ルールはかんたん、じゅんばんに じこしょうかいを するだけ。 ")]),n("ol",[n("li",[t._v("カードをシャッフルして「なんのことを」「どのように」はなすかきめる")]),n("li",[t._v("はなせるひとから じゅんばんに じぶんのことを ひとり２０びょうではなす")]),n("li",[t._v("ぜんいんがはなしたら、カードをシャッフルしてちがうテーマではなす"),n("br"),t._v(" おもいつかなかったら「パス」をしてもだいじょうぶです。 ")])]),n("h2",[t._v("どんなときにつかうとよい？")]),n("p",[t._v(" はじめてのあいてや これからなかよくなりたい あいてももちろん、ふだんいっしょに いるひととやっても しらなかったことが おたがいしりあえる かもしれませんよ。 ")]),n("h2",[t._v("大人の方へ：ライセンス")]),n("p",[t._v(" このプロジェクトは"),n("a",{attrs:{href:"https://github.com/yuneco/cha-chat",target:"_blank"}},[t._v("GitHubのリポジトリ")]),t._v("でOSS（オープンソースソフトウエア）として公開されており、誰でも自由に利用・改変することが許諾されています。 このプロジェクトの背景や活用に関しては上記のリポジトリの説明をご参照ください。 ")])]),n("div",{staticClass:"btns"},[n("button",{staticClass:"close",on:{click:function(e){return t.$emit("close")}}},[t._v("とじる")])])])])])},w=[],O=Object(s["c"])({props:{},setup:function(){return{}}}),_=O,y=(n("10a6"),Object(p["a"])(_,g,w,!1,null,"1b5a1ec2",null)),S=y.exports,k=Object(s["c"])({components:{AppHeader:f,AppFooter:x,AboutDialog:S},props:{},setup:function(){var t=Object(s["e"])({isAboutShown:!1}),e=function(){t.isAboutShown=!0},n=function(){t.isAboutShown=!1};return{viewState:t,showAbout:e,hideAbout:n}}}),j=k,A=(n("5cc0"),Object(p["a"])(j,a,i,!1,null,"04f0736c",null)),F=A.exports,T=n("8c4f"),$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("router-link",{staticClass:"start",attrs:{to:"talk"}},[t._v("はじめる")])],1)},P=[],E={name:"Home",components:{}},H=E,R=(n("c687"),Object(p["a"])(H,$,P,!1,null,"592ccef4",null)),D=R.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"talk-page-root"},[n("CardStage")],1)},M=[],J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-stage-root"},[n("div",{staticClass:"card-box theme-card-box",style:{filter:"drop-shadow(0 5px 15px "+t.cardState.themeCard.shadow+")"}},[n("div",{staticClass:"box-title",class:{flipping:t.cardState.themeCard.isFlipping},style:{backgroundColor:t.cardState.themeCard.color}},[t._v("なんのことをはなす？")]),n("TalkCard",{attrs:{text:t.cardState.themeCard.text,bgcolor:t.cardState.themeCard.color,isOpen:t.cardState.themeCard.isOpen},on:{click:t.clickThemeCard}})],1),n("div",{staticClass:"card-box style-card-box",style:{filter:"drop-shadow(0 5px 15px "+t.cardState.styleCard.shadow+")"}},[n("div",{staticClass:"box-title",class:{flipping:t.cardState.styleCard.isFlipping},style:{backgroundColor:t.cardState.styleCard.color}},[t._v("どんなふうにはなす？")]),n("TalkCard",{attrs:{text:t.cardState.styleCard.text,bgcolor:t.cardState.styleCard.color,isOpen:t.cardState.styleCard.isOpen},on:{click:t.clickStyleCard}})],1),n("div",{staticClass:"card-box whom-card-box",style:{filter:"drop-shadow(0 5px 15px "+t.cardState.whomCard.shadow+")"}},[n("div",{staticClass:"box-title",class:{flipping:t.cardState.whomCard.isFlipping},style:{backgroundColor:t.cardState.whomCard.color}},[t._v("だれにむけてはなす？")]),n("TalkCard",{attrs:{text:t.cardState.whomCard.text,bgcolor:t.cardState.whomCard.color,isOpen:t.cardState.whomCard.isOpen},on:{click:t.clickWhomCard}})],1),n("div",{staticClass:"card-box scene-card-box",style:{filter:"drop-shadow(0 5px 15px "+t.cardState.sceneCard.shadow+")"}},[n("div",{staticClass:"box-title",class:{flipping:t.cardState.sceneCard.isFlipping},style:{backgroundColor:t.cardState.sceneCard.color}},[t._v("どんなときにはなす？")]),n("TalkCard",{attrs:{text:t.cardState.sceneCard.text,bgcolor:t.cardState.sceneCard.color,isOpen:t.cardState.sceneCard.isOpen},on:{click:t.clicksceneCard}})],1),n("div",{staticClass:"control"},[n("button",{directives:[{name:"show",rawName:"v-show",value:t.isCardOpen,expression:"isCardOpen"}],staticClass:"cancel-button",attrs:{title:"change cards"},on:{click:t.closeCard}}),n("button",{directives:[{name:"show",rawName:"v-show",value:t.isAllCardOpen&&!t.timerState.isActive,expression:"isAllCardOpen && !timerState.isActive"}],staticClass:"ok-button",attrs:{title:"start talk"},on:{click:t.startCount}}),n("CountDown",{directives:[{name:"show",rawName:"v-show",value:t.timerState.isActive,expression:"timerState.isActive"}],staticClass:"timer",class:{popping:t.timerState.isPopping},attrs:{time:t.timerState.time},on:{sec:function(e){t.timerState.time-=1},retry:t.startCount}})],1)])},W=[],q=(n("96cf"),n("1da1")),B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"talk-card-root",class:{open:t.isOpen},style:{backgroundColor:t.bgcolor},on:{click:function(e){return t.$emit("click")}}},[t._m(0),n("div",{staticClass:"text-box"},[n("span",{staticClass:"text"},[t._v(t._s(t.displayText))])])])},G=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-box"},[n("span",{staticClass:"text"},[t._v("タップして"),n("br"),t._v("カードをひらく")])])}],z=(n("ac1f"),n("5319"),Object(s["c"])({props:{text:{type:String,default:"???"},bgcolor:{type:String,default:"#eb73a3"},isOpen:{type:Boolean,default:!1}},setup:function(t){var e=Object(s["a"])((function(){return t.text.replace(/\/\//g,"\n")}));return{displayText:e}}})),I=z,K=(n("37f1"),Object(p["a"])(I,B,G,!1,null,"539bac0e",null)),L=K.exports,Q="#eb73a3",U="#61c8d4",V="#6777d4",X="#dd28d4",Y="#82144977",Z="#24688a77",tt="#a1ba77",et="#bb8a77",nt=n("d454"),rt=(n("d3b7"),function(t){return t[Math.floor(Math.random()*t.length)]}),at=function(t){return new Promise((function(e){return setTimeout(e,t)}))},it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"count-down-root"},[t.time>0?[n("div",{staticClass:"title"},[t._v("のこりじかん")]),n("div",{staticClass:"time"},[n("span",{staticClass:"sec"},[t._v(t._s(t.time))]),n("span",{staticClass:"suffix"},[t._v("びょう")])])]:t._e(),t.time<=0?[n("div",{staticClass:"retry",on:{click:function(e){return t.$emit("retry")}}},[t._v(" もういちど！ ")])]:t._e()],2)},st=[],ct=(n("a9e3"),Object(s["c"])({props:{time:{type:Number,default:0}},setup:function(t,e){var n=Date.now(),r=!1,a=function t(){if(r){var a=Date.now();a-n>1e3&&(n+=1e3,e.emit("sec")),requestAnimationFrame(t)}};return Object(s["f"])((function(){return t.time}),(function(){var e=t.time>0;r!==e&&(r=e,r&&(n=Date.now(),a()))})),Object(s["d"])((function(){r=!1})),{}}})),ot=ct,lt=(n("7a88"),Object(p["a"])(ot,it,st,!1,null,"a05bcfa2",null)),ut=lt.exports,pt=Object(s["c"])({components:{TalkCard:L,CountDown:ut},props:{},setup:function(){var t=Object(s["e"])({themeCard:{text:"100にん//あつまったら//できそうなこと",color:Q,shadow:Y,isOpen:!1,isFlipping:!1},styleCard:{text:"ゆ〜っくり//しゃべってみよう",color:U,shadow:Z,isOpen:!1,isFlipping:!1},whomCard:{text:"だれに//たいして",color:V,shadow:tt,isOpen:!1,isFlipping:!1},sceneCard:{text:"いつが//いいかな",color:X,shadow:et,isOpen:!1,isFlipping:!1}}),e=Object(s["e"])({time:0,isActive:!1,isPopping:!1}),n=Object(s["a"])((function(){return t.themeCard.isOpen||t.styleCard.isOpen||t.whomCard.isOpen||t.sceneCard.isOpen})),r=Object(s["a"])((function(){return t.themeCard.isOpen&&t.styleCard.isOpen&&t.whomCard.isOpen&&t.sceneCard.isOpen})),a=Object(s["a"])((function(){return e.isActive&&0===e.time})),i=function(){var e=Object(q["a"])(regeneratorRuntime.mark((function e(){var n,r,a,i,s=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=!(s.length>0&&void 0!==s[0])||s[0],r=!(s.length>1&&void 0!==s[1])||s[1],a=!(s.length>2&&void 0!==s[2])||s[2],i=!(s.length>3&&void 0!==s[3])||s[3],!n){e.next=13;break}return t.themeCard.text=rt(nt.themes),t.themeCard.isOpen=!0,t.themeCard.isFlipping=!0,e.next=10,at(300);case 10:return t.themeCard.isFlipping=!1,e.next=13,at(250);case 13:if(!r){e.next=22;break}return t.styleCard.text=rt(nt.styles),t.styleCard.isOpen=!0,t.styleCard.isFlipping=!0,e.next=19,at(300);case 19:return t.styleCard.isFlipping=!1,e.next=22,at(250);case 22:if(!a){e.next=31;break}return t.whomCard.text=rt(nt.whom),t.whomCard.isOpen=!0,t.whomCard.isFlipping=!0,e.next=28,at(300);case 28:return t.whomCard.isFlipping=!1,e.next=31,at(250);case 31:if(!i){e.next=40;break}return t.sceneCard.text=rt(nt.scene),t.sceneCard.isOpen=!0,t.sceneCard.isFlipping=!0,e.next=37,at(300);case 37:return t.sceneCard.isFlipping=!1,e.next=40,at(250);case 40:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var n=Object(q["a"])(regeneratorRuntime.mark((function n(){var a,i,s,c,o=arguments;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(a=!(o.length>0&&void 0!==o[0])||o[0],i=!(o.length>1&&void 0!==o[1])||o[1],s=!(o.length>2&&void 0!==o[2])||o[2],c=!(o.length>3&&void 0!==o[3])||o[3],!a||!t.themeCard.isOpen){n.next=10;break}return t.themeCard.isOpen=!1,t.themeCard.isFlipping=!0,n.next=9,at(300);case 9:t.themeCard.isFlipping=!1;case 10:if(!i||!t.styleCard.isOpen){n.next=16;break}return t.styleCard.isOpen=!1,t.styleCard.isFlipping=!0,n.next=15,at(300);case 15:t.styleCard.isFlipping=!1;case 16:if(!s||!t.whomCard.isOpen){n.next=22;break}return t.whomCard.isOpen=!1,t.whomCard.isFlipping=!0,n.next=21,at(300);case 21:t.whomCard.isFlipping=!1;case 22:if(!c||!t.sceneCard.isOpen){n.next=28;break}return t.sceneCard.isOpen=!1,t.sceneCard.isFlipping=!0,n.next=27,at(300);case 27:t.sceneCard.isFlipping=!1;case 28:r.value||(e.time=0,e.isActive=!1);case 29:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var t=Object(q["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n.value){t.next=5;break}return t.next=3,c();case 3:return t.next=5,at(500);case 5:return t.next=7,i();case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),l=function(){t.themeCard.isOpen||i(!0,!1)},u=function(){t.styleCard.isOpen||i(!1,!0)},p=function(){t.whomCard.isOpen||i(!0,!1)},d=function(){t.sceneCard.isOpen||i(!1,!0)},f=function(){var t=Object(q["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.time=20,e.isActive=!0,t.next=4,at(0);case 4:return e.isPopping=!0,t.next=7,at(250);case 7:e.isPopping=!1;case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return{cardState:t,isCardOpen:n,isAllCardOpen:r,isTimeup:a,setNewCard:o,openCard:i,closeCard:c,clickThemeCard:l,clickStyleCard:u,clickWhomCard:p,clickSceneCard:d,timerState:e,startCount:f}}}),dt=pt,ft=(n("6e3d"),Object(p["a"])(dt,J,W,!1,null,"1364d18a",null)),Ct=ft.exports,vt=Object(s["c"])({components:{CardStage:Ct},props:{},setup:function(){return{}}}),ht=vt,mt=Object(p["a"])(ht,N,M,!1,null,"38f5a33e",null),bt=mt.exports;r["a"].use(T["a"]);var xt=[{path:"/",name:"Home",component:D},{path:"/talk",name:"Talk",component:bt}],gt=new T["a"]({mode:"hash",base:"",routes:xt}),wt=gt;r["a"].config.productionTip=!1,r["a"].use(s["b"]),new r["a"]({router:wt,render:function(t){return t(F)}}).$mount("#app")},d454:function(t){t.exports=JSON.parse('{"themes":["わたしだけが//しっているヒミツ","おすすめしたいもの","たのしかった//おもいで","いまほしいもの//やりたいこと","ちょっと//こまってます！","たのしかったこと","わたしにとって//◯◯とは","ほんとはもっと//◯◯したい","こんなことで//せいこうしました","こんなことで//しっぱいしました","おしえてほしいこと","やってみたいこと","きになること","くふうしていること","うれしかったこと","おススメしたいヒト","あたらしい◯◯について//かんがえてみよう","◯◯のスキなところ","◯◯がやめられない","ジマンしたいこと","カンドウしたこと","いまハマってること","こだわりのポイント","◯◯がうまくなりたい","なんでだろう？？//っておもうこと","ニガテだけど//できるようになりたいこと","なんでこれが//にんきじゃないんだろう？","はじめて◯◯に//であったときのこと","100にん//あつまったら//できそうなこと","もし//そうりだいじんになったら//どうしたい？","ふしぎに//おもっていること","これだけは//なくなったら//こまるもの","いってみたいところ","あつめているもの","じぶんにとって//きもちが//おちつくのは？","ちょうのうりょくを//1つだけつかえたら？","◯◯を//どうぶつにたとえると？"],"styles":["ふつうにはなす","ふつうにはなす","ふつうにはなす","ふつうにはなす","ふつうにはなす","ふつうにはなす","みぶりてぶりを//おおきく","きもちをこめて！","あかちゃんことばで","すっごくおおげさに","とってもえらそうに","ないしょばなし//みたいに","おとなっぽく","てびょうしに//あわせて","おとうさん・おかあさん//みたいに","うたいながら","おどりながら","おじいちゃん・おばあちゃん//みたいに","ゆ〜っくりと//しゃべってみよう","はやくちで//しゃべってみよう","どうぶつになりきって","ポーズをかえて","うちゅうじんみたいなこえで"],"whom":["おとうさんに","おかあさんに","ともだちに","せんせいに"],"scene":["あさ","ひる","よる"]}')},e2df:function(t,e,n){},fc68:function(t,e,n){}});
//# sourceMappingURL=app.5b6cd1c6.js.map