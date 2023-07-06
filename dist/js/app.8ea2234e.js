(function(){"use strict";var e={1078:function(e,n,t){var a=t(9242),o=t(3396);function r(e,n){const t=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(t)}var i=t(89);const l={},c=(0,i.Z)(l,[["render",r]]);var s=c,p=t(2483);const d={class:"home"},u={class:"main"};function m(e,n,t,a,r,i){const l=(0,o.up)("Header"),c=(0,o.up)("Carousel"),s=(0,o.up)("FoodGallery"),p=(0,o.up)("MenuBox"),m=(0,o.up)("SectionBox"),v=(0,o.up)("AdressBox"),f=(0,o.up)("Footer");return(0,o.wg)(),(0,o.iD)("div",d,[(0,o.Wm)(l,{class:"header"}),(0,o._)("div",u,[(0,o.Wm)(c,{id:"top"}),(0,o.Wm)(s,{id:"specialDish"}),(0,o.Wm)(p,{id:"menu"}),(0,o.Wm)(m),(0,o.Wm)(v,{id:"contact"})]),(0,o.Wm)(f)])}var v=t(7139);const f=e=>((0,o.dD)("data-v-35621452"),e=e(),(0,o.Cn)(),e),_={class:"header-container"},g=f((()=>(0,o._)("div",{class:"header-container__logo"}," 북경반점 ",-1))),y={class:"header-container__bar"},b=["onClick"],h={class:"mobile-header-container__bar"},w=["onClick"];function K(e,n,t,a,r,i){return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("div",_,[g,(0,o._)("nav",y,[(0,o._)("ul",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.navbarList,((e,n)=>((0,o.wg)(),(0,o.iD)("li",{class:(0,v.C_)(a.activeClass==n?"active":""),key:n,onClick:t=>a.link(e.id,n)},(0,v.zw)(e.name),11,b)))),128))])])]),(0,o._)("nav",h,[(0,o._)("ul",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.navbarList,((e,n)=>((0,o.wg)(),(0,o.iD)("li",{class:(0,v.C_)(a.activeClass==n?"active":""),key:n,onClick:t=>a.link(e.id,n)},(0,v.zw)(e.name),11,w)))),128))])])])}var k=t(4870),x={name:"Header",setup(){const e=[{name:"回到顶部",id:"top"},{name:"招牌特色",id:"specialDish"},{name:"全部菜单",id:"menu"},{name:"联系我们",id:"contact"}];let n=(0,k.iH)(-1);const t=(e,t)=>{console.log(e),n.value=t,console.log(n.value);let a=document.getElementById(e);a.scrollIntoView(!0);let o=document.getElementsByClassName("header-container")[0].offsetHeight;console.log("scrollParameter",o),screen.availWidth<768&&(o+=50),window.scrollBy(0,-o)};return{link:t,navbarList:e,activeClass:n}}};const C=(0,i.Z)(x,[["render",K],["__scopeId","data-v-35621452"]]);var B=C;const D={class:"carousel-container"},I=["src"];function W(e,n,t,a,r,i){const l=(0,o.up)("el-carousel-item"),c=(0,o.up)("el-carousel");return(0,o.wg)(),(0,o.iD)("div",D,[(0,o.Wm)(c,{height:a.bannerHeight,"initial-index":0,autoplay:!0,interval:3e3,trigger:"click","indicator-position":"none",arrow:"hover"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.CarouselData,((e,n)=>((0,o.wg)(),(0,o.j4)(l,{key:`CarouselImage-${n}`},{default:(0,o.w5)((()=>[(0,o._)("img",{ref_for:!0,ref:"bannerImg",class:"carousel-container__image",src:e.url},null,8,I)])),_:2},1024)))),128))])),_:1},8,["height"])])}var H={name:"Carousel",setup(){let e=(0,k.iH)("40vw"),n=null;(0,o.bv)((()=>{let n=document.body.clientWidth;n<768&&(e.value="80vw")}));const a=(0,k.qj)([{url:t(975)},{url:t(5410)},{url:t(241)},{url:t(2977)}]);return{CarouselData:a,bannerHeight:e,screenWidth:n}}};const S=(0,i.Z)(H,[["render",W],["__scopeId","data-v-7d410b76"]]);var Z=S;const z=e=>((0,o.dD)("data-v-a76b2f14"),e=e(),(0,o.Cn)(),e),j={class:"foodGallery-container"},M=z((()=>(0,o._)("h2",{class:"foodGallery-container__header"}," | 招牌特色 | ",-1)));function T(e,n,t,a,r,i){const l=(0,o.up)("Menu");return(0,o.wg)(),(0,o.iD)("div",j,[M,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.MenuType,((e,n)=>((0,o.wg)(),(0,o.j4)(l,{class:"foodGallery-container__content",key:`menu-${e}-${n}`,title:e},null,8,["title"])))),128))])}const O=e=>((0,o.dD)("data-v-da4ebf9a"),e=e(),(0,o.Cn)(),e),E={class:"menu-container"},G={class:"menu-container__imageBar"},F={href:""},P={class:"foodImage"},L={class:"overlay"},A=O((()=>(0,o._)("br",null,null,-1)));function V(e,n,t,a,r,i){const l=(0,o.up)("SpecialTitle"),c=(0,o.Q2)("lazy");return(0,o.wg)(),(0,o.iD)("div",E,[(0,o.Wm)(l,{title:a.specialTitle},null,8,["title"]),(0,o._)("div",G,[(0,o._)("ul",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.foodGallery,((e,n)=>((0,o.wg)(),(0,o.iD)("li",{id:"image_li",key:`menu-${e.title}-${n}`},[(0,o._)("a",F,[(0,o.wy)((0,o._)("img",P,null,512),[[c,e.url]]),(0,o._)("div",L,[(0,o._)("p",null,[(0,o.Uk)((0,v.zw)(e.title),1),A,(0,o.Uk)(" "+(0,v.zw)(e.titleKr),1)])])])])))),128))])])])}t(7658);const q=[{title:"炸酱面",titleKr:"짜장면",url:t(4699),type:"noodle"},{title:"四川炸酱面",titleKr:"사천짜장",url:t(6615),type:"noodle"},{title:"火辣炸酱面",titleKr:"불짜장",url:t(2163),type:"noodle"},{title:"百年炸酱面",titleKr:"백년짜장",url:t(3054),type:"noodle"},{title:"海鲜炒码面",titleKr:"짬뽕",url:t(1861),type:"noodle"},{title:"糖醋肉",titleKr:"탕수육",url:t(2020),type:"main"},{title:"干烹鸡",titleKr:"깐풍기",url:t(3450),type:"main"},{title:"白菜杂菜",titleKr:"배추잡채",url:t(6004),type:"main"},{title:"干烹虾仁",titleKr:"깐풍새우",url:t(1204),type:"main"},{title:"三鲜锅巴汤",titleKr:"해물누룽지탕",url:t(3938),type:"main"},{title:"炸酱饭",titleKr:"짜장밥",url:t(532),type:"rice"},{title:"杂拌饭",titleKr:"잡탕밥",url:t(7454),type:"rice"}],Y={class:"specialTitle-container"},$={class:"specialTitle-container__title"};function N(e,n,t,a,r,i){return(0,o.wg)(),(0,o.iD)("div",Y,[(0,o._)("div",$,[(0,o._)("h2",null,(0,v.zw)(t.title),1)])])}var U={name:"SpecialTitle",props:{title:String},setup(){}};const Q=(0,i.Z)(U,[["render",N],["__scopeId","data-v-16e5b34f"]]);var R=Q,X={name:"FoodGallery",components:{SpecialTitle:R},props:{title:String},setup(e){let n=(0,k.iH)();switch(e.title){case"noodle":n="面类";break;case"main":n="料理类";break;case"rice":n="饭类";break}let t=(0,k.iH)([]);return q.forEach((n=>{n.type==e.title&&t.value.push(n)})),{foodGallery:t,specialTitle:n}}};const J=(0,i.Z)(X,[["render",V],["__scopeId","data-v-da4ebf9a"]]);var ee=J,ne={name:"FoodGallery",components:{Menu:ee},setup(){const e=["noodle","main","rice"];return{MenuType:e}}};const te=(0,i.Z)(ne,[["render",T],["__scopeId","data-v-a76b2f14"]]);var ae=te;const oe={class:"footer-container"},re=(0,o.uE)('<span class="footer-container__about" data-v-5b327d38><p style="margin-bottom:10px;" data-v-5b327d38>关于我们</p><p class="content" data-v-5b327d38>北景韩式炸酱面(북경반점)</p></span><span class="footer-container__bshours" data-v-5b327d38><p style="margin-bottom:10px;" data-v-5b327d38>营业时间</p><p data-v-5b327d38>10:00-21:00</p></span><span class="footer-container__address" data-v-5b327d38><p style="margin-bottom:10px;" data-v-5b327d38>地址</p><p data-v-5b327d38>辽宁省大连市金普新区抚顺街11号</p></span><span class="footer-container__phone" data-v-5b327d38><p style="margin-bottom:10px;" data-v-5b327d38>订餐电话</p><p data-v-5b327d38>0411-87618434</p></span>',4),ie=[re];function le(e,n,t,a,r,i){return(0,o.wg)(),(0,o.iD)("div",oe,ie)}var ce={name:"Footer"};const se=(0,i.Z)(ce,[["render",le],["__scopeId","data-v-5b327d38"]]);var pe=se;const de=e=>((0,o.dD)("data-v-2086edd0"),e=e(),(0,o.Cn)(),e),ue={class:"adressBox-container"},me=de((()=>(0,o._)("h2",{class:"adressBox-container__header"}," | 联系我们 | ",-1))),ve={class:"adressBox-container__content"},fe={class:"adressBox-container__content__infoContainer"},_e=de((()=>(0,o._)("div",{class:"adressBox-container__content__infoContainer__info",id:"adress"},[(0,o._)("p",{class:"title"},"韩式炸酱面 북경반점"),(0,o._)("p",{class:"value"},"辽宁省大连市开发区抚顺街11号")],-1))),ge={class:"adressBox-container__content__infoContainer__info"},ye=de((()=>(0,o._)("p",{class:"title"},"详细地址",-1))),be={href:"https://router.map.qq.com/short?l=685798e850e2f9dd4e861d5bdb7a9ca3&tempSource=pcMap",target:"_blank",class:"value",style:{display:"block"}},he=(0,o.uE)('<div class="adressBox-container__content__infoContainer__info" id="phone" data-v-2086edd0><p class="title" data-v-2086edd0>订餐电话</p><p class="value" data-v-2086edd0>0411-87618434</p></div><div class="adressBox-container__content__infoContainer__info" id="time" data-v-2086edd0><p class="title" data-v-2086edd0>营业时间</p><p class="value" data-v-2086edd0>10:00~21:30</p></div><div class="adressBox-container__content__infoContainer__info" id="about" data-v-2086edd0><p class="title" data-v-2086edd0>介绍</p><p class="value" data-v-2086edd0>北景饭店(북경반점)，2003年成立于大连，专注于韩式炸酱面、糖醋肉等韩式中华料理，致力于提供高质量的美食体验，曾荣获大众点评2020、2021、2022年度星级商户。 </p></div>',3);function we(e,n,t,a,r,i){const l=(0,o.up)("MapBox"),c=(0,o.up)("el-button");return(0,o.wg)(),(0,o.iD)("div",ue,[me,(0,o._)("div",ve,[(0,o.Wm)(l,{class:"adressBox-container__content__map"}),(0,o._)("div",fe,[_e,(0,o._)("div",ge,[ye,(0,o._)("a",be,[(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o.Uk)("腾讯地图")])),_:1})])]),he])])])}const Ke={class:"map-container"};function ke(e,n,t,a,r,i){const l=(0,o.up)("tmap-info-window"),c=(0,o.up)("tmap-multi-marker"),s=(0,o.up)("tmap-map");return(0,o.wg)(),(0,o.iD)("div",Ke,[(0,o.Wm)(s,{mapKey:"462BZ-7VW3T-LIFXO-V3HUE-CZG57-MLBFF",events:e.events,center:e.center,zoom:e.zoom,doubleClickZoom:e.doubleClickZoom,control:e.control,minZoom:7},{default:(0,o.w5)((()=>[(0,o.Wm)(l,{position:e.center,content:e.content,visible:e.visible,onCloseClick:e.onClose,offset:{x:0,y:-40}},null,8,["position","content","visible","onCloseClick"]),(0,o.Wm)(c,{styles:e.markerStyles,geometries:e.markerGeometries,ref:"markers",onClick:e.print,onDblclick:e.print},null,8,["styles","geometries","onClick","onDblclick"])])),_:1},8,["events","center","zoom","doubleClickZoom","control"])])}var xe=(0,o.aZ)({name:"MapBox",setup(){const e=(0,k.iH)({lat:39.04677744883,lng:121.76567169194}),n=(0,k.iH)({lat:39.04677744883,lng:121.76567169194}),t=(0,k.iH)(16),a=(0,k.iH)(!0),o=e=>{console.log(e)},r=(0,k.iH)(),i=[{id:"pl_1",styleId:"styleBlue"}],l="韩式炸酱面<br/>북경반점";return{infoPosition:e,content:l,geometries:i,markers:r,markerStyles:{end:{width:25,height:35,anchor:{x:12,y:35},src:"https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/markerDefault.png"}},markerGeometries:[{id:"end",styleId:"end",position:{lat:39.04677744883,lng:121.76567169194}}],events:{dblclick:o},center:n,zoom:t,doubleClickZoom:a,control:{scale:{},zoom:{position:"bottomRight"}}}}});const Ce=(0,i.Z)(xe,[["render",ke],["__scopeId","data-v-c32b1db2"]]);var Be=Ce,De={name:"AddressBox",components:{MapBox:Be}};const Ie=(0,i.Z)(De,[["render",we],["__scopeId","data-v-2086edd0"]]);var We=Ie;const He=e=>((0,o.dD)("data-v-424f4e2a"),e=e(),(0,o.Cn)(),e),Se={class:"MenuBox-container"},Ze=He((()=>(0,o._)("h2",{class:"MenuBox-container__header"}," | 全部菜单 | ",-1))),ze={style:{"font-size":"30px"}};function je(e,n,t,a,r,i){const l=(0,o.up)("el-table-column"),c=(0,o.up)("el-table"),s=(0,o.up)("el-carousel-item"),p=(0,o.up)("el-carousel");return(0,o.wg)(),(0,o.iD)("div",Se,[Ze,(0,o.Wm)(p,{interval:!1,type:"card",height:"600px"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.menuData,(n=>((0,o.wg)(),(0,o.j4)(s,{key:n},{default:(0,o.w5)((()=>[(0,o._)("div",null,[(0,o._)("div",ze,(0,v.zw)(n.value[0]),1),(0,o.Wm)(c,{class:"table","show-header":!1,"row-style":{height:"80px"},"max-height":600,data:n.value.slice(1),stripe:"",style:{width:"100%"}},{default:(0,o.w5)((()=>[(0,o.Wm)(l,{prop:"name"}),(0,o.Wm)(l,{prop:"nameKr"}),(0,o.Wm)(l,{prop:"price","header-align":e.center,width:"100"},null,8,["header-align"])])),_:2},1032,["data"])])])),_:2},1024)))),128))])),_:1})])}const Me=[[{name:"炸酱面(小/大)",nameKr:"짜장면(小/大)",price:"￥20/25",type:"noodle"},{name:"干炸酱面(小/大)",nameKr:"간짜장(小/大)",price:"￥25/30",type:"noodle"},{name:"三鲜炸酱面(小/大)",nameKr:"삼선짜장(小/大)",price:"￥30/35",type:"noodle"},{name:"火辣炸酱面(小/大)",nameKr:"불짜장(小/大)",price:"￥30/35",type:"noodle"},{name:"四川炸酱面(小/大)",nameKr:"사천짜장(小/大)",price:"￥25/30",type:"noodle"},{name:"百年炸酱面(小/大)",nameKr:"백년짜장(小/大)",price:"￥30/35",type:"noodle"},{name:"盘子炸酱面(小/大)",nameKr:"쟁반짜장(小/大)",price:"￥30/50",type:"noodle"},{name:"盘子炸酱面(小/大)",nameKr:"쟁반짜장(小/大)",price:"￥30/50",type:"noodle"},{name:"炒码面(小/大)",nameKr:"짬뽕(小/大)",price:"￥25/30",type:"noodle"},{name:"三鲜炒码面(小/大)",nameKr:"삼선짬뽕(小/大)",price:"￥30/35",type:"noodle"},{name:"海虹炒码面(小/大)",nameKr:"홍합짬뽕(小/大)",price:"￥30/35",type:"noodle"},{name:"海鲜火辣汤面(小/大)",nameKr:"고추짬뽕(小/大)",price:"￥35/40",type:"noodle"},{name:"白炒码面(小/大)",nameKr:"백짬뽕(小/大)",price:"￥25/30",type:"noodle"},{name:"无汤炒码面(小/大)",nameKr:"볶음짬뽕(小/大)",price:"￥30/50",type:"noodle"}],[{name:"糖醋肉(小/大)",nameKr:"탕수육(小/大)",price:"￥45/70",type:"main"},{name:"炒肉两张皮",nameKr:"양장피",price:"￥50",type:"main"},{name:"八宝菜",nameKr:"팔보채",price:"￥60",type:"main"},{name:"杂菜",nameKr:"잡채",price:"￥30",type:"main"},{name:"青椒杂菜",nameKr:"고추잡채",price:"￥40",type:"main"},{name:"杂拌菜",nameKr:"잡탕",price:"￥60",type:"main"},{name:"干烹鸡",nameKr:"깐풍기",price:"￥50",type:"main"},{name:"辣椒鸡",nameKr:"라조기",price:"￥50",type:"main"},{name:"流三丝",nameKr:"유산슬",price:"￥50",type:"main"},{name:"干烹虾仁",nameKr:"깐풍새우",price:"￥60",type:"main"},{name:"干烧虾仁",nameKr:"깐쇼새우",price:"￥60",type:"main"},{name:"南煎丸子",nameKr:"난자완스",price:"￥60",type:"main"},{name:"麻婆豆腐",nameKr:"마파두부",price:"￥30",type:"main"},{name:"凉拌蜇皮",nameKr:"해파리냉채",price:"￥40",type:"main"},{name:"炒海参",nameKr:"해삼탕",price:"￥100",type:"main"},{name:"海参肉片",nameKr:"해삼쥬스",price:"￥100",type:"main"},{name:"四川辣椒鸡",nameKr:"사천라조기",price:"￥50",type:"main"},{name:"炸鱿鱼",nameKr:"오징어튀김",price:"￥40",type:"main"},{name:"原味炸鸡",nameKr:"치킨볼",price:"￥50",type:"main"},{name:"韭菜杂菜",nameKr:"부추잡채",price:"￥40",type:"main"},{name:"三鲜鸡蛋汤",nameKr:"삼선계란탕",price:"￥30",type:"main"},{name:"三鲜锅巴汤",nameKr:"해물누릉지탕",price:"￥40",type:"main"},{name:"海鲜辣汤",nameKr:"안주짬뽕탕",price:"￥30",type:"main"}],[{name:"炸酱饭",nameKr:"짜장밥",price:"￥25",type:"rice"},{name:"炒码饭",nameKr:"짬뽕밥",price:"￥25",type:"rice"},{name:"炒饭",nameKr:"볶음밥",price:"￥25",type:"rice"},{name:"三鲜炒饭",nameKr:"삼선볶음밥",price:"￥30",type:"rice"},{name:"虾仁炒饭",nameKr:"새우볶음밥",price:"￥25",type:"rice"},{name:"辣白菜炒饭",nameKr:"김치볶음밥",price:"￥25",type:"rice"},{name:"三鲜炒饭",nameKr:"삼선볶음밥",price:"￥25",type:"rice"}]];var Te={name:"MenuBox",setup(){let e=(0,k.iH)([]);return Me.forEach((n=>{let t=(0,k.iH)([]);switch(n[0].type){case"noodle":t.value.push("面类");break;case"main":t.value.push("料理");break;case"rice":t.value.push("饭类");break}n.forEach((e=>{t.value.push(e)})),e.value.push(t)})),console.log("a",e),console.log(e.value[0]._rawValue),{menuData:e}}};const Oe=(0,i.Z)(Te,[["render",je],["__scopeId","data-v-424f4e2a"]]);var Ee=Oe;const Ge={class:"SectionBox"};function Fe(e,n,t,a,r,i){const l=(0,o.up)("SectionItemVue");return(0,o.wg)(),(0,o.iD)("div",Ge,[(0,o.Wm)(l,{size:100,data:"2020大众点评年度星级商户"}),(0,o.Wm)(l,{size:100,data:"2021大众点评年度星级商户"}),(0,o.Wm)(l,{size:100,data:"2022大众点评年度星级商户"})])}function Pe(e,n,t,a,r,i){const l=(0,o.up)("Bowl"),c=(0,o.up)("el-icon"),s=(0,o.up)("el-card");return(0,o.wg)(),(0,o.j4)(s,{shadow:"hover",class:"SectionItem"},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{color:"grey",size:t.size},{default:(0,o.w5)((()=>[(0,o.Wm)(l)])),_:1},8,["size"]),(0,o._)("p",null,(0,v.zw)(t.data),1)])),_:1})}var Le=t(2748),Ae={name:"SectionItem",props:{data:String,size:String},components:{Bowl:Le.kwS},setup(){}};const Ve=(0,i.Z)(Ae,[["render",Pe],["__scopeId","data-v-65a4b583"]]);var qe=Ve,Ye={name:"SectionBox",components:{SectionItemVue:qe}};const $e=(0,i.Z)(Ye,[["render",Fe],["__scopeId","data-v-a680360e"]]);var Ne=$e,Ue={name:"HomeView",components:{Header:B,Carousel:Z,FoodGallery:ae,Footer:pe,AdressBox:We,MenuBox:Ee,SectionBox:Ne}};const Qe=(0,i.Z)(Ue,[["render",m],["__scopeId","data-v-1c3e2497"]]);var Re=Qe;const Xe=[{path:"/",name:"home",component:Re},{path:"/about",name:"about",component:()=>t.e(443).then(t.bind(t,7381))}],Je=(0,p.p7)({history:(0,p.PO)(""),routes:Xe});var en=Je,nn=t(65),tn=(0,nn.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}}),an=t(3765);const on=e=>{e.directive("lazy",{mounted(e,n){const t=new IntersectionObserver((([{isIntersecting:a}])=>{a&&(e.src=n.value,t.unobserve(e))}));t.observe(e)}})};var rn={install(e){on(e)}},ln=(t(4415),t(6139));const cn=(0,a.ri)(s);cn.use(tn).use(en).use(an.Z).use(ln.ZP).use(rn).mount("#app")},975:function(e,n,t){e.exports=t.p+"img/Image1.a0a58b30.png"},5410:function(e,n,t){e.exports=t.p+"img/Image2.94a31b80.png"},241:function(e,n,t){e.exports=t.p+"img/Image3.7524fda7.png"},2977:function(e,n,t){e.exports=t.p+"img/Image4.adb2d325.png"},2020:function(e,n,t){e.exports=t.p+"img/main01.b0d775d1.png"},3450:function(e,n,t){e.exports=t.p+"img/main02.02aea9f4.png"},6004:function(e,n,t){e.exports=t.p+"img/main03.ab145e81.png"},1204:function(e,n,t){e.exports=t.p+"img/main04.28a303c8.png"},3938:function(e,n,t){e.exports=t.p+"img/main05.8d1c7f68.png"},4699:function(e,n,t){e.exports=t.p+"img/noodle01.8e63373f.png"},6615:function(e,n,t){e.exports=t.p+"img/noodle02.b7825f16.png"},2163:function(e,n,t){e.exports=t.p+"img/noodle03.13e2d30a.png"},3054:function(e,n,t){e.exports=t.p+"img/noodle04.ef6687cd.png"},1861:function(e,n,t){e.exports=t.p+"img/noodle05.c41792ad.png"},532:function(e,n,t){e.exports=t.p+"img/rice01.7003be2d.png"},7454:function(e,n,t){e.exports=t.p+"img/rice02.96f03d83.png"}},n={};function t(a){var o=n[a];if(void 0!==o)return o.exports;var r=n[a]={exports:{}};return e[a].call(r.exports,r,r.exports,t),r.exports}t.m=e,function(){var e=[];t.O=function(n,a,o,r){if(!a){var i=1/0;for(p=0;p<e.length;p++){a=e[p][0],o=e[p][1],r=e[p][2];for(var l=!0,c=0;c<a.length;c++)(!1&r||i>=r)&&Object.keys(t.O).every((function(e){return t.O[e](a[c])}))?a.splice(c--,1):(l=!1,r<i&&(i=r));if(l){e.splice(p--,1);var s=o();void 0!==s&&(n=s)}}return n}r=r||0;for(var p=e.length;p>0&&e[p-1][2]>r;p--)e[p]=e[p-1];e[p]=[a,o,r]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,a){return t.f[a](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/about.030d4f30.js"}}(),function(){t.miniCssF=function(e){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="homepage:";t.l=function(a,o,r,i){if(e[a])e[a].push(o);else{var l,c;if(void 0!==r)for(var s=document.getElementsByTagName("script"),p=0;p<s.length;p++){var d=s[p];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==n+r){l=d;break}}l||(c=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,t.nc&&l.setAttribute("nonce",t.nc),l.setAttribute("data-webpack",n+r),l.src=a),e[a]=[o];var u=function(n,t){l.onerror=l.onload=null,clearTimeout(m);var o=e[a];if(delete e[a],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((function(e){return e(t)})),n)return n(t)},m=setTimeout(u.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=u.bind(null,l.onerror),l.onload=u.bind(null,l.onload),c&&document.head.appendChild(l)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p=""}(),function(){var e={143:0};t.f.j=function(n,a){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)a.push(o[2]);else{var r=new Promise((function(t,a){o=e[n]=[t,a]}));a.push(o[2]=r);var i=t.p+t.u(n),l=new Error,c=function(a){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var r=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;l.message="Loading chunk "+n+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,o[1](l)}};t.l(i,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,a){var o,r,i=a[0],l=a[1],c=a[2],s=0;if(i.some((function(n){return 0!==e[n]}))){for(o in l)t.o(l,o)&&(t.m[o]=l[o]);if(c)var p=c(t)}for(n&&n(a);s<i.length;s++)r=i[s],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(p)},a=self["webpackChunkhomepage"]=self["webpackChunkhomepage"]||[];a.forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a))}();var a=t.O(void 0,[998],(function(){return t(1078)}));a=t.O(a)})();
//# sourceMappingURL=app.8ea2234e.js.map