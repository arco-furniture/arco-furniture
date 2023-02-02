"use strict";(self.webpackChunkarco_furniture=self.webpackChunkarco_furniture||[]).push([[275],{3669:function(e,r,s){s.r(r),s.d(r,{default:function(){return V}});var t=s(885),n=s(2791),c=s(1413),i=s(5209),a=s(2496),o=s(3811),l=s(4361),u=s(690),d=s(7393),p=s(9466),m=s(770),x=s(5566),_=s(3981),f=s(5389),v=s(5249),h=s(3259),j=s(6969),N=s(1598),g=s(184),w=function(e){var r=e.product,s=(0,n.useState)(!1),w=(0,t.Z)(s,2),b=w[0],C=w[1],Z=(0,_.iB)().currentColor,k=(0,v.m)().favorites,y=(0,f.o)(),S=y.addItemForBasket,I=y.openAlertBar,E=y.setCurrentColor,B=y.setItemIsLiked,O=k.some((function(e){return e._id===r._id})),R=x.O9.map((function(e){var s,t=null===(s=r.colors)||void 0===s?void 0:s.some((function(r){return r.nameColor===e.nameColor}));return{nameColor:e.nameColor,color:e.color,exist:t}}));(0,n.useEffect)((function(){O&&C(!0)}),[]),(0,n.useEffect)((function(){if(Object.keys(r).length){var e=R.find((function(e){return e.exist})),s=R.indexOf(e);E((0,c.Z)({index:s},e))}}),[r]);var z=function(){return(0,g.jsx)(i.Z,{label:"\u0412 \u043d\u0430\u043b\u0438\u0447\u0438\u0438",color:"success",variant:"filled"})},F=function(){return(0,g.jsx)(i.Z,{label:"\u041f\u043e\u0434 \u0437\u0430\u043a\u0430\u0437",color:"error",variant:"filled"})};return(0,g.jsxs)("div",{className:"product__params panel",children:[(0,g.jsxs)("div",{className:"product__top-wrapper",children:[(0,g.jsx)("h2",{children:(0,j.W)(r)}),Z.exist?(0,g.jsx)(z,{}):(0,g.jsx)(F,{})]}),(0,g.jsxs)("div",{className:"product__price-wrapper",children:[(0,g.jsxs)("p",{className:"product__old-price",children:[(0,g.jsx)("span",{className:"old-price",children:(0,d.F)(r.oldPrice)})," \u20bd"]}),(0,g.jsxs)("em",{className:"product__price",children:[(0,d.F)(r.price)," \u20bd"]})]}),(0,g.jsxs)("div",{className:"product__colors",children:[(0,g.jsx)("h3",{className:"product__title",children:"\u0426\u0432\u0435\u0442\u0430 \u0438\u0441\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f:"}),(0,g.jsx)("ul",{children:R.map((function(e,r){var s,t=Z.index===r;return(0,g.jsxs)("li",{children:[(0,g.jsx)("span",{className:"product__light ".concat(t?"product__light_active":"product__light_disabled"),style:{border:"3px solid ".concat(t&&e.exist?"#4675CE":"#d32f2f")}}),(0,g.jsx)(a.Z,{onClick:function(){return E({index:r,color:e.color,nameColor:e.nameColor,exist:e.exist})},style:(s=e,{borderRadius:"5px",backgroundColor:s.color,transition:"transform ease-in-out 0.1s"}),variant:"contained",children:!e.exist&&(0,g.jsx)(N.Z,{className:"product__closeIcon"})})]},r)}))}),!Z.exist&&(0,g.jsx)("p",{className:"product__text-error",children:"\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0446\u0432\u0435\u0442\u0430 \u043d\u0435\u0442 \u0432 \u043d\u0430\u043b\u0438\u0447\u0438\u0438"})]}),(0,g.jsx)("div",{className:"product__description",children:(0,g.jsxs)("p",{children:[(0,g.jsx)("span",{className:"product__title",children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435: "}),r.description]})}),(0,g.jsxs)("div",{className:"product__buttons",children:[(0,g.jsx)(a.Z,{disabled:!Z.exist,style:{fontSize:"18px",fontWeight:700},className:"product__submit",size:"large",type:"submit",variant:"contained",onClick:function(){I({message:r.title,type:"cart"});var e=(0,m.P)(r,Z.color);S(e)},children:"\u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"}),(0,g.jsx)(p.Z,{title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435",placement:"top-start",children:(0,g.jsx)(o.Z,{className:"product__favorite",size:"large",color:"error",onClick:function(){return(0,h.l)({isFavorite:O,item:r}),C(!b),B(),void I({message:r.title,type:"favorite"})},children:b?(0,g.jsx)(l.Z,{}):(0,g.jsx)(u.Z,{})})})]})]})},b=(0,n.memo)(w),C=s(8563),Z=s(2558),k=s(3031),y=function(e){var r=e.thumbsSwiper,s=e.images,t=(0,n.useRef)(null),c=(0,n.useRef)(null),i=null===s||void 0===s?void 0:s.map((function(e,r){return(0,g.jsx)(C.o5,{children:(0,g.jsx)("img",{className:"product__image-preview",src:e.image,alt:"image"})},r)}));return(0,g.jsxs)("li",{className:"product__preview",children:[(0,g.jsx)(C.tq,{loop:!0,spaceBetween:40,thumbs:{swiper:r&&!r.destroyed?r:null},modules:[Z.Rv,Z.W_,Z.o3],navigation:{prevEl:c.current,nextEl:t.current},onBeforeInit:function(e){e.params.navigation.prevEl=c.current,e.params.navigation.nextEl=t.current},children:i}),(0,g.jsx)(k.y5,{prevRef:c,nextRef:t,widthValue:105})]})},S=(0,n.memo)(y),I=function(e){var r=e.setThumbsSwiper,s=e.images,t=null===s||void 0===s?void 0:s.map((function(e,r){return(0,g.jsx)(C.o5,{children:(0,g.jsxs)("div",{className:"product__nav",children:[(0,g.jsx)("span",{className:"product__background"}),(0,g.jsx)("img",{className:"product__nav-preview",src:e.image,alt:"slide"})]})},r)}));return(0,g.jsx)("li",{className:"product__slides",children:(0,g.jsx)("div",{className:"product__slides-wrapper",children:(0,g.jsx)(C.tq,{onSwiper:r,spaceBetween:10,slidesPerView:4,freeMode:!0,watchSlidesProgress:!0,modules:[Z.o3],className:"mySwiper",children:t})})})},E=(0,n.memo)(I),B=function(e){var r=e.specs;return(0,g.jsxs)("li",{className:"product__specs panel",children:[(0,g.jsx)("h3",{className:"subtitle",children:"\u0425\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438"}),(0,g.jsxs)("div",{className:"product__specs-wrapper",children:[(0,g.jsx)("ul",{children:null===x.wp||void 0===x.wp?void 0:x.wp.map((function(e){return(0,g.jsx)("li",{children:"".concat(e.name,":")},e.specsNameId)}))}),(0,g.jsx)("ul",{children:null===r||void 0===r?void 0:r.map((function(e,r){return(0,g.jsx)("li",{children:Object.values(e)},r)}))})]})]})},O=(0,n.memo)(B),R=s(7689),z=s(1933),F=s(4165),P=s(5861),T=s(4532),W=s(8250),q=function(e){return(0,P.Z)((0,F.Z)().mark((function r(){var s,t;return(0,F.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,W.v.get("".concat(T.T5).concat((0,T.$h)("/".concat(e))));case 2:return s=r.sent,t=s.data,r.abrupt("return",t);case 5:case"end":return r.stop()}}),r)})))()},M=function(){var e=(0,n.useState)(null),r=(0,t.Z)(e,2),s=r[0],c=r[1],i=(0,R.UO)().productId,a=(0,z.useQuery)("get product",(function(){return q(i)})),o=a.data;return a.isSuccess&&(0,g.jsx)("section",{className:"product",children:(0,g.jsxs)("ul",{className:"product__wrapper",children:[(0,g.jsx)(S,{thumbsSwiper:s,images:o.productImages}),(0,g.jsx)(b,{product:o}),(0,g.jsx)(E,{setThumbsSwiper:c,images:o.productImages}),(0,g.jsx)(O,{specs:o.specs})]})})},V=(0,n.memo)(M)},1598:function(e,r,s){var t=s(4836);r.Z=void 0;var n=t(s(5649)),c=s(184),i=(0,n.default)((0,c.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"}),"CloseOutlined");r.Z=i}}]);
//# sourceMappingURL=Product.e36df340.chunk.js.map