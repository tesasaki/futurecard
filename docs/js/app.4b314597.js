(function(t){function e(e){for(var r,s,c=e[0],o=e[1],u=e[2],p=0,d=[];p<c.length;p++)s=c[p],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&d.push(i[s][0]),i[s]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,c=1;c<n.length;c++){var o=n[c];0!==i[o]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},i={app:0},a=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=o;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},1059:function(t,e,n){"use strict";var r=n("f135"),i=n.n(r);i.a},"1f16":function(t,e,n){"use strict";var r=n("c049"),i=n.n(r);i.a},"2d6a":function(t,e,n){},"37eb":function(t,e,n){"use strict";var r=n("2d6a"),i=n.n(r);i.a},3988:function(t,e,n){},"5cc0":function(t,e,n){"use strict";var r=n("e2df"),i=n.n(r);i.a},"7a88":function(t,e,n){"use strict";var r=n("3988"),i=n.n(r);i.a},"82e9":function(t,e,n){},"97d9":function(t,e,n){},"9ce8":function(t,e,n){"use strict";var r=n("82e9"),i=n.n(r);i.a},b545:function(t,e,n){},c049:function(t,e,n){},c687:function(t,e,n){"use strict";var r=n("b545"),i=n.n(r);i.a},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("AppHeader",{staticClass:"header"}),n("main",[n("router-view",{staticClass:"page"})],1),n("AppFooter",{staticClass:"footer",on:{about:t.showAbout}}),n("AboutDialog",{directives:[{name:"show",rawName:"v-show",value:t.viewState.isAboutShown,expression:"viewState.isAboutShown"}],on:{close:t.hideAbout}})],1)},a=[],s=n("750b"),c=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"app-header-root"},[n("div",{staticClass:"subtitle"},[t._v(" 働 き 方 の 未 来 を 考 え る ")]),n("div",{staticClass:"title"},[t._v(" FUTURE CARD "),n("div",{staticClass:"ruby"},[t._v("powered by CHA-CHAT!")])])])}],u=Object(s["c"])({props:{},setup:function(){return{}}}),l=u,p=(n("fdc7"),n("2877")),d=Object(p["a"])(l,c,o,!1,null,"2ee51194",null),f=d.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"app-footer-root"},[n("button",{staticClass:"about",attrs:{title:"how to play"},on:{click:function(e){return t.$emit("about")}}},[t._v("?")])])},v=[],h=Object(s["c"])({props:{},setup:function(){return{}}}),b=h,g=(n("9ce8"),Object(p["a"])(b,C,v,!1,null,"6e413c49",null)),x=g.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[n("div",{staticClass:"about-dialog-root"},[n("div",{staticClass:"dialog"},[n("div",{staticClass:"main"},[n("h1",[t._v("About")]),n("div",{staticClass:"subtitle"},[t._v("働き方の未来を考える")]),n("h2",[t._v("どんなツール？")]),n("p",[t._v(" フューチャーカードは働き方の未来を考えるアイデアカードです。 ")]),n("h2",[t._v("使い方")]),n("p",[t._v(" 個人や複数人でのアイデア出しに。 ")]),n("ol",[n("li",[t._v("「シーン」「課題」「テクノロジー」「視点」のカードをシャッフル。")]),n("li",[t._v("20秒でまず最初に思いついた解決のアイデアをメモします。")]),n("li",[t._v("こんなことができたらもっと良いのに、というアイデアをさらに考えます。"),n("br"),t._v(" 4枚のカードすべてを使い切る必要はありません。次々にシャッフルしてアイデアを広げます。 ")])]),n("h2",[t._v("ワークショップでの使い方")]),n("p",[t._v(" アイスブレイクから、具体検討まで、いろいろな場面で活用してもらえると嬉しいです。 ")]),n("h2",[t._v("ライセンス")]),n("p",[t._v(" このプロジェクトは"),n("a",{attrs:{href:"https://github.com/tesasaki/futurecard",target:"_blank"}},[t._v("GitHubのリポジトリ")]),t._v("でOSS（オープンソースソフトウエア）として公開されており、誰でも自由に利用・改変することが許諾されています。 このプロジェクトの背景や活用に関しては上記のリポジトリの説明をご参照ください。 ")])]),n("div",{staticClass:"btns"},[n("button",{staticClass:"close",on:{click:function(e){return t.$emit("close")}}},[t._v("とじる")])])])])])},O=[],w=Object(s["c"])({props:{},setup:function(){return{}}}),_=w,y=(n("37eb"),Object(p["a"])(_,m,O,!1,null,"17e6287d",null)),S=y.exports,k=Object(s["c"])({components:{AppHeader:f,AppFooter:x,AboutDialog:S},props:{},setup:function(){var t=Object(s["e"])({isAboutShown:!1}),e=function(){t.isAboutShown=!0},n=function(){t.isAboutShown=!1};return{viewState:t,showAbout:e,hideAbout:n}}}),j=k,A=(n("5cc0"),Object(p["a"])(j,i,a,!1,null,"04f0736c",null)),H=A.exports,F=n("8c4f"),q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("router-link",{staticClass:"start",attrs:{to:"talk"}},[t._v("はじめる")])],1)},T=[],R={name:"Home",components:{}},$=R,P=(n("c687"),Object(p["a"])($,q,T,!1,null,"592ccef4",null)),E=P.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"talk-page-root"},[n("CardStage")],1)},N=[],M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-stage-root"},[n("div",{staticClass:"card-box scene-card-box",style:{filter:"drop-shadow(0 5px 15px "+t.cardState.sceneCard.shadow+")"}},[n("div",{staticClass:"box-title",class:{flipping:t.cardState.sceneCard.isFlipping},style:{backgroundColor:t.cardState.sceneCard.color}},[t._v("どんなシーンで？")]),n("TalkCard",{attrs:{text:t.cardState.sceneCard.text,bgcolor:t.cardState.sceneCard.color,isOpen:t.cardState.sceneCard.isOpen},on:{click:t.clickSceneCard}})],1),n("div",{staticClass:"card-box issue-card-box",style:{filter:"drop-shadow(0 5px 15px "+t.cardState.issueCard.shadow+")"}},[n("div",{staticClass:"box-title",class:{flipping:t.cardState.issueCard.isFlipping},style:{backgroundColor:t.cardState.issueCard.color}},[t._v("どんな課題を？")]),n("TalkCard",{attrs:{text:t.cardState.issueCard.text,bgcolor:t.cardState.issueCard.color,isOpen:t.cardState.issueCard.isOpen},on:{click:t.clickIssueCard}})],1),n("div",{staticClass:"card-box technology-card-box",style:{filter:"drop-shadow(0 5px 15px "+t.cardState.technologyCard.shadow+")"}},[n("div",{staticClass:"box-title",class:{flipping:t.cardState.technologyCard.isFlipping},style:{backgroundColor:t.cardState.technologyCard.color}},[t._v("どんなテクノロジーを活用して？")]),n("TalkCard",{attrs:{text:t.cardState.technologyCard.text,bgcolor:t.cardState.technologyCard.color,isOpen:t.cardState.technologyCard.isOpen},on:{click:t.clickTechnologyCard}})],1),n("div",{staticClass:"card-box technique-card-box",style:{filter:"drop-shadow(0 5px 15px "+t.cardState.techniqueCard.shadow+")"}},[n("div",{staticClass:"box-title",class:{flipping:t.cardState.techniqueCard.isFlipping},style:{backgroundColor:t.cardState.techniqueCard.color}},[t._v("アイデアを考える視点")]),n("TalkCard",{attrs:{text:t.cardState.techniqueCard.text,bgcolor:t.cardState.techniqueCard.color,isOpen:t.cardState.techniqueCard.isOpen},on:{click:t.clickTechniqueCard}})],1),n("div",{staticClass:"control"},[n("button",{directives:[{name:"show",rawName:"v-show",value:t.isCardOpen,expression:"isCardOpen"}],staticClass:"cancel-button",attrs:{title:"change cards"},on:{click:t.closeCard}}),n("button",{directives:[{name:"show",rawName:"v-show",value:t.isAllCardOpen&&!t.timerState.isActive,expression:"isAllCardOpen && !timerState.isActive"}],staticClass:"ok-button",attrs:{title:"start talk"},on:{click:t.startCount}}),n("CountDown",{directives:[{name:"show",rawName:"v-show",value:t.timerState.isActive,expression:"timerState.isActive"}],staticClass:"timer",class:{popping:t.timerState.isPopping},attrs:{time:t.timerState.time},on:{sec:function(e){t.timerState.time-=1},retry:t.startCount}})],1)])},I=[],B=(n("96cf"),n("1da1")),G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"talk-card-root",class:{open:t.isOpen},style:{backgroundColor:t.bgcolor},on:{click:function(e){return t.$emit("click")}}},[t._m(0),n("div",{staticClass:"text-box"},[n("span",{staticClass:"text"},[t._v(t._s(t.displayText))])])])},J=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-box"},[n("span",{staticClass:"text"},[t._v("タップしてカードをひらく")])])}],U=(n("ac1f"),n("5319"),Object(s["c"])({props:{text:{type:String,default:"???"},bgcolor:{type:String,default:"#eb73a3"},isOpen:{type:Boolean,default:!1}},setup:function(t){var e=Object(s["a"])((function(){return t.text.replace(/\/\//g,"\n")}));return{displayText:e}}})),V=U,z=(n("1f16"),Object(p["a"])(V,G,J,!1,null,"542bcef6",null)),Q=z.exports,X="#30cfb4",K="#86c5f9",L="#ff8040",W="#ff80c0",Y="#30cfb4",Z="#86c5f9",tt="#ff8040",et="#ff80c0",nt=n("d454"),rt=(n("d3b7"),function(t){return t[Math.floor(Math.random()*t.length)]}),it=function(t){return new Promise((function(e){return setTimeout(e,t)}))},at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"count-down-root"},[t.time>0?[n("div",{staticClass:"title"},[t._v("のこりじかん")]),n("div",{staticClass:"time"},[n("span",{staticClass:"sec"},[t._v(t._s(t.time))]),n("span",{staticClass:"suffix"},[t._v("びょう")])])]:t._e(),t.time<=0?[n("div",{staticClass:"retry",on:{click:function(e){return t.$emit("retry")}}},[t._v(" もういちど！ ")])]:t._e()],2)},st=[],ct=(n("a9e3"),Object(s["c"])({props:{time:{type:Number,default:0}},setup:function(t,e){var n=Date.now(),r=!1,i=function t(){if(r){var i=Date.now();i-n>1e3&&(n+=1e3,e.emit("sec")),requestAnimationFrame(t)}};return Object(s["f"])((function(){return t.time}),(function(){var e=t.time>0;r!==e&&(r=e,r&&(n=Date.now(),i()))})),Object(s["d"])((function(){r=!1})),{}}})),ot=ct,ut=(n("7a88"),Object(p["a"])(ot,at,st,!1,null,"a05bcfa2",null)),lt=ut.exports,pt=Object(s["c"])({components:{TalkCard:Q,CountDown:lt},props:{},setup:function(){var t=Object(s["e"])({sceneCard:{text:"100にん//あつまったら//できそうなこと",color:X,shadow:Y,isOpen:!1,isFlipping:!1},issueCard:{text:"ゆ〜っくり//しゃべってみよう",color:K,shadow:Z,isOpen:!1,isFlipping:!1},technologyCard:{text:"だれに//たいして",color:L,shadow:tt,isOpen:!1,isFlipping:!1},techniqueCard:{text:"いつが//いいかな",color:W,shadow:et,isOpen:!1,isFlipping:!1}}),e=Object(s["e"])({time:0,isActive:!1,isPopping:!1}),n=Object(s["a"])((function(){return t.sceneCard.isOpen||t.issueCard.isOpen||t.technologyCard.isOpen||t.techniqueCard.isOpen})),r=Object(s["a"])((function(){return t.sceneCard.isOpen&&t.issueCard.isOpen&&t.technologyCard.isOpen&&t.techniqueCard.isOpen})),i=Object(s["a"])((function(){return e.isActive&&0===e.time})),a=function(){var e=Object(B["a"])(regeneratorRuntime.mark((function e(){var n,r,i,a,s=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=!(s.length>0&&void 0!==s[0])||s[0],r=!(s.length>1&&void 0!==s[1])||s[1],i=!(s.length>2&&void 0!==s[2])||s[2],a=!(s.length>3&&void 0!==s[3])||s[3],!n){e.next=13;break}return t.sceneCard.text=rt(nt.scenes),t.sceneCard.isOpen=!0,t.sceneCard.isFlipping=!0,e.next=10,it(300);case 10:return t.sceneCard.isFlipping=!1,e.next=13,it(250);case 13:if(!r){e.next=22;break}return t.issueCard.text=rt(nt.issues),t.issueCard.isOpen=!0,t.issueCard.isFlipping=!0,e.next=19,it(300);case 19:return t.issueCard.isFlipping=!1,e.next=22,it(250);case 22:if(!i){e.next=31;break}return t.technologyCard.text=rt(nt.technologies),t.technologyCard.isOpen=!0,t.technologyCard.isFlipping=!0,e.next=28,it(300);case 28:return t.technologyCard.isFlipping=!1,e.next=31,it(250);case 31:if(!a){e.next=40;break}return t.techniqueCard.text=rt(nt.techniques),t.techniqueCard.isOpen=!0,t.techniqueCard.isFlipping=!0,e.next=37,it(300);case 37:return t.techniqueCard.isFlipping=!1,e.next=40,it(250);case 40:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var n=Object(B["a"])(regeneratorRuntime.mark((function n(){var i,a,s,c,o=arguments;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(i=!(o.length>0&&void 0!==o[0])||o[0],a=!(o.length>1&&void 0!==o[1])||o[1],s=!(o.length>2&&void 0!==o[2])||o[2],c=!(o.length>3&&void 0!==o[3])||o[3],!i||!t.sceneCard.isOpen){n.next=10;break}return t.sceneCard.isOpen=!1,t.sceneCard.isFlipping=!0,n.next=9,it(300);case 9:t.sceneCard.isFlipping=!1;case 10:if(!a||!t.issueCard.isOpen){n.next=16;break}return t.issueCard.isOpen=!1,t.issueCard.isFlipping=!0,n.next=15,it(300);case 15:t.issueCard.isFlipping=!1;case 16:if(!s||!t.technologyCard.isOpen){n.next=22;break}return t.technologyCard.isOpen=!1,t.technologyCard.isFlipping=!0,n.next=21,it(300);case 21:t.technologyCard.isFlipping=!1;case 22:if(!c||!t.techniqueCard.isOpen){n.next=28;break}return t.techniqueCard.isOpen=!1,t.techniqueCard.isFlipping=!0,n.next=27,it(300);case 27:t.techniqueCard.isFlipping=!1;case 28:r.value||(e.time=0,e.isActive=!1);case 29:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var t=Object(B["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n.value){t.next=5;break}return t.next=3,c();case 3:return t.next=5,it(500);case 5:return t.next=7,a();case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),u=function(){t.sceneCard.isOpen||a(!0,!1,!1,!1)},l=function(){t.issueCard.isOpen||a(!1,!0,!1,!1)},p=function(){t.technologyCard.isOpen||a(!1,!1,!0,!1)},d=function(){t.techniqueCard.isOpen||a(!1,!1,!1,!0)},f=function(){var t=Object(B["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.time=90,e.isActive=!0,t.next=4,it(0);case 4:return e.isPopping=!0,t.next=7,it(250);case 7:e.isPopping=!1;case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return{cardState:t,isCardOpen:n,isAllCardOpen:r,isTimeup:i,setNewCard:o,openCard:a,closeCard:c,clickSceneCard:u,clickIssueCard:l,clickTechnologyCard:p,clickTechniqueCard:d,timerState:e,startCount:f}}}),dt=pt,ft=(n("1059"),Object(p["a"])(dt,M,I,!1,null,"638cad9c",null)),Ct=ft.exports,vt=Object(s["c"])({components:{CardStage:Ct},props:{},setup:function(){return{}}}),ht=vt,bt=Object(p["a"])(ht,D,N,!1,null,"38f5a33e",null),gt=bt.exports;r["a"].use(F["a"]);var xt=[{path:"/",name:"Home",component:E},{path:"/talk",name:"Talk",component:gt}],mt=new F["a"]({mode:"hash",base:"",routes:xt}),Ot=mt;r["a"].config.productionTip=!1,r["a"].use(s["b"]),new r["a"]({router:Ot,render:function(t){return t(H)}}).$mount("#app")},d454:function(t){t.exports=JSON.parse('{"scenes":["アイデア創出","調査・情報収集","会議進行・ファシリテーション","ワークプランニング・ミーティング設計","顧客への提案・プレゼンテーション","ステークホルダーとの関係構築","状況の報告・情報共有","セミナーなどによる情報発信","メンバーアサイン・体制構築のための調整","日程調整・スケジュール立案","商談推進","インフォーマルな情報交換・雑談","社内のナレッジ検索","資料作成・情報整理","資料の共有・格納","ナレッジの形式知化・伝承","申請・承認","契約・法務手続き","データ入力","報告書作成","意思決定・承認","業績評価・成果評価","気遣いをする・お互いを思いやる","社外の人との交流","顧客ニーズの把握","特許調査・申請","実験・検証・テスト","設計・開発","現物（在庫・設備・環境等）の確認","業績評価","安全衛生","健康管理","キャリア開発","教育研修","勤怠管理","タフなネゴシエーション"],"issues":["時間や場所の制約がなくなったらどうなるだろう？","考える・創造する作業をもっと高めるには？","メンバー同士が安心して創造的になれる環境を作るには？","より自然に、思考やコミュニケーションに集中するには？","人間関係を円滑に保ちつつ議論をどう活性化させるか？","どうすれば言語以外の感情や考え、状況を捉えられるか？","ブラックボックスだったものが可視化されたら？","自分に寄り添ってくれる技術があったら何を求める？","デジタルでも直感的で自然なコミュニケーションを実現するには？","気軽・気楽に誰とでもコレボレーションできるには？","情報共有や状況再現を超臨場感・タイムリーにするには？","人と人の関係構築・深化を行うには？","情報発信を、より的確に、より個人に寄り添う形にするには？","顧客とのつながりをより深めるために何ができる？","意思決定のスピードを劇的に短くするためには？","誰とでも気軽にコラボレーションできるようになるには？","全員で未来に希望を持ち、チャレンジできるようにするには？","多様な分野のプロフェッショナルが力を合わせて取り組むためには？","環境・社会的な側面への対応も意識したこれからの働き方とは？","個人の意識や組織の風土を変えていくには？","これまでの制度を抜本的に変える・思い切って廃止したら？","現場に行かなくてもできるようにするには？","問題が発生する前に感知・対応するには？","話しやすさ・意見の出しやすさを高めるには？","お互いを助け合うことを促進するには？","常に高い目標に挑戦する組織にするには？","新しいもの、前例のないものを積極的に取り入れるには？","異能や異質をむしろ歓迎するには？"],"technologies":["機械学習：最適な判断の支援、画像やデザインの自動生成","自然言語処理：高い精度の文章翻訳や文章の自動生成","話者認識：誰が発言しているかを機械側で判断","感情認識：音声や表情から喜怒哀楽を推定","拡張現実/AR：現実空間にバーチャルコンテンツを投影","仮想現実/VR：没入感のあるバーチャル体験","複合現実/MR：現実空間から操作できるバーチャルコンテンツ体験","IoT：モノの状態を取得したり、動作をコントロール","RPA：マニュアル作業の自動化","スマートウォッチ：装着者や周囲環境情報の可視化やアラート","スマートグラス：周辺環境情報の可視化やAR情報付与","スマートカメラ：人物の自動認識、周辺環境の異常検知","ナレッジマネジメントツール：社内外ナレッジの体系的管理とコラボレーション促進","社内SNS：社内での情報共有やコミュニケーションをSNSライクに可能","プロジェクト管理ツール：プロジェクトの進捗やタスクを見える化","リモート会議ツール：離れた場所にいても会議が可能","オンラインホワイトボードツール：オンライン上でホワイトボードを使用","仮想オフィスサービス：バーチャルなオフィスに出社、コミュニケーション","ウェビナーツール：オンラインでセミナー配信/ライブ","イベントプラットフォーム：イベントへの参加状況やQAなどを一元的に管理","モックアップ/プロトタイピングツール：素早くデモ製品を製作","ノーコード・ローコード開発：コーディングなしでもアプリ開発","情報共有ツール：リアルタイムに情報・資料を共有し共同作業","コミュニケーションチャットツール：非同期でも円滑なコミュニケーション","生体認証","動態検知","拡張現実：AR／仮想現実：VR","5G活用（超高速・超低遅延・多数同時接続）","デジタルツイン","ロボット","ドローン","パワードスーツ/アシストスーツ","ブレインマシンインターフェース（BMI)","ブロックチェーン","クラウド","オンラインストレージ","コミュニケーションツール（Slack、Teams等）","情報共有ツール（BOX、Google Drive）等が","タレントマネジメントツール","電子ファイル管理"],"techniques":["Hint：他のシーンや課題に置き換えてみたら","Hint：他のテクノロジーと組み合わせてみたら","Hint：Amazon、uber、tinderなど他のアイデアを参考に","Hint：思い切ってやめる・取り除いてみたら","Hint：要素を逆にしたり入れ替えてみたら","Hint：予算に制約がなく何でもできるとしたら","Hint：達成可能なレベルで","Hint：経営目標に関連して","Hint：最小限の単位で実現するとしたら","Hint：関連するものをすべて一つに集約してみたら","Hint：使われていない遊休資産を使って解決すると","Hint：需要と供給をマッチさせると嬉しいことはないか","Hint：突発的だったものを定常化してみると","Hint：圧倒的に省力化・低コストで実施するには","Hint：すべてリモート・デジタルで実現するなら","Hint：今だけ、自分の立場を忘れて考えてみると","Hint：経営者の立場になって考えてみると","Hint：マネージャーの立場になって考えてみると","Hint：顧客の立場になって考えてみると","Hint：経験の浅いメンバーの立場になって考えてみると","Hint：あえて異質なものを混ぜてみたら","Hint：サプライヤー・パートナーの立場になって考えてみると","Hint：これまでの制度を抜本的に変える・思い切って廃止したら？"]}')},e2df:function(t,e,n){},f135:function(t,e,n){},fdc7:function(t,e,n){"use strict";var r=n("97d9"),i=n.n(r);i.a}});
//# sourceMappingURL=app.4b314597.js.map