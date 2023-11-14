"use strict";(self.webpackChunkgadget_glamour=self.webpackChunkgadget_glamour||[]).push([[832],{7413:function(e,i,n){n.d(i,{Z:function(){return d}});var s=n(7022),c=n(9743),r=n(2677),l=n(3116),t=n(184),d=function(e){var i=e.title,n=e.productBgImg;return(0,t.jsxs)("div",{className:"image-container",children:[(0,t.jsx)("img",{src:n||l,alt:"Product-bg"}),(0,t.jsx)("div",{className:i?"overlay":"",children:(0,t.jsx)(s.Z,{children:(0,t.jsx)(c.Z,{children:(0,t.jsx)(r.Z,{children:(0,t.jsx)("h2",{children:i})})})})})]})}},9135:function(e,i,n){var s=n(9743),c=n(2791),r=n(3622),l=n(184);i.Z=function(e){var i=e.productItems,n=e.addToCart;return(0,c.useEffect)((function(){}),[i]),0===i.length?(0,l.jsx)("h1",{className:"not-found",children:"Product Not Found !!"}):(0,l.jsx)(s.Z,{className:"justify-content-center",children:i.map((function(e){return(0,l.jsx)(r.Z,{title:null,productItem:e,addToCart:n},e.id)}))})}},8832:function(e,i,n){n.r(i),n.d(i,{default:function(){return g}});var s=n(9439),c=n(2791),r=n(7413),l=n(7134),t=n(7022),d=n(9743),o=n(2677),a=n(9135),u=n(4835),h=n(7689),x=n(9085),j=n(1662),p=n(9806),v=n(1632),m=n(184),g=function(){var e=(0,c.useState)("desc"),i=(0,s.Z)(e,2),n=i[0],g=i[1],f=(0,c.useState)([]),b=(0,s.Z)(f,2),N=b[0],y=b[1],C=(0,c.useContext)(l.c),Z=C.selectedProduct,k=C.setSelectedProduct,D=C.addToCart,P=(0,h.UO)().id;if(!Z){var T=localStorage.getItem("selectedProduct-".concat(P));k(JSON.parse(T))}var I=(0,c.useState)(1),w=(0,s.Z)(I,2),G=w[0],S=w[1];return(0,c.useEffect)((function(){window.scrollTo(0,0),y(u.RB.filter((function(e){return e.category===(null===Z||void 0===Z?void 0:Z.category)&&e.id!==(null===Z||void 0===Z?void 0:Z.id)})))}),[Z]),(0,m.jsxs)(c.Fragment,{children:[(0,m.jsx)(r.Z,{title:null===Z||void 0===Z?void 0:Z.productName,productBgImg:"https://priceoye.pk/assets/images/home/dk-banner-static.jpg"}),(0,m.jsx)("section",{className:"product-page",children:(0,m.jsx)(t.Z,{children:(0,m.jsxs)(d.Z,{className:"justify-content-center",children:[(0,m.jsx)(o.Z,{md:6,children:(0,m.jsx)("img",{loading:"lazy",src:null===Z||void 0===Z?void 0:Z.imgUrl,alt:""})}),(0,m.jsxs)(o.Z,{md:6,children:[(0,m.jsx)("h2",{children:null===Z||void 0===Z?void 0:Z.productName}),(0,m.jsxs)("div",{className:"rate",children:[(0,m.jsxs)("div",{className:"stars",children:[(0,m.jsx)(p.G,{icon:v.Tab}),(0,m.jsx)(p.G,{icon:v.Tab}),(0,m.jsx)(p.G,{icon:v.Tab}),(0,m.jsx)(p.G,{icon:v.Tab}),(0,m.jsx)(p.G,{icon:v.Tab})]}),(0,m.jsxs)("span",{children:[null===Z||void 0===Z?void 0:Z.avgRating," ratings"]})]}),(0,m.jsxs)("div",{className:"info",children:[(0,m.jsxs)("span",{className:"price",children:["$",null===Z||void 0===Z?void 0:Z.price]}),(0,m.jsx)("h4",{children:"Category: "}),(0,m.jsx)("h5",{children:null===Z||void 0===Z?void 0:Z.category})]}),(0,m.jsx)("p",{children:null===Z||void 0===Z?void 0:Z.shortDesc}),(0,m.jsxs)("span",{className:"qty-counter",children:[(0,m.jsx)("button",{className:"incCart",onClick:function(){S((function(e){return e+1}))},children:(0,m.jsx)(p.G,{icon:v.r8p})}),(0,m.jsx)("input",{className:"qty-input",type:"number",placeholder:"Qty",value:G,onChange:function(e){S(parseInt(e.target.value))}}),(0,m.jsx)("button",{className:"desCart",onClick:function(){S((function(e){return e>0?e-1:0}))},children:(0,m.jsx)(p.G,{icon:v.Kl4})})]}),(0,m.jsx)("button",{"aria-label":"Add",type:"submit",className:"add",onClick:function(){return function(e,i){D(e,i),x.Am.success("Product has been added to cart!")}(Z,G)},children:"Add To Cart"}),(0,m.jsx)("section",{className:"product-description",children:(0,m.jsxs)(t.Z,{children:[(0,m.jsx)("h3",{children:"Details"}),(0,m.jsx)("p",{children:"Key Features for Purchasing this case?"}),(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{children:"360-degree protection"}),(0,m.jsx)("li",{children:"Wallet case"}),(0,m.jsx)("li",{children:"Premium gold"}),(0,m.jsx)("li",{children:"Magnetic clasp"}),(0,m.jsx)("li",{children:"PU leather"}),(0,m.jsx)("li",{children:"Strong durability"}),(0,m.jsx)("li",{children:"Integrated card slots"})]}),(0,m.jsx)("hr",{}),(0,m.jsx)("h4",{children:"Product Description"}),(0,m.jsx)("h6",{children:"Protection"}),(0,m.jsx)("p",{children:null===Z||void 0===Z?void 0:Z.protectionDescription}),(0,m.jsx)("h6",{children:"Durability"}),(0,m.jsx)("p",{children:null===Z||void 0===Z?void 0:Z.durabilityDescription}),(0,m.jsx)("h6",{children:"Material"}),(0,m.jsx)("p",{children:null===Z||void 0===Z?void 0:Z.materialDescription}),(0,m.jsx)("h6",{children:"Packing and Brand"}),(0,m.jsx)("p",{children:null===Z||void 0===Z?void 0:Z.packingDescription}),(0,m.jsx)("h6",{children:"Key Details"}),(0,m.jsx)("p",{children:null===Z||void 0===Z?void 0:Z.brandKeyDetails}),(0,m.jsx)("p",{children:"Mobile Lyme ID: L-5982"}),(0,m.jsx)("p",{children:"Brand Name: Dux Ducis"}),(0,m.jsx)("p",{children:"EAN: 5060974442218"}),(0,m.jsx)("p",{children:"Colour: Gold"}),(0,m.jsx)("h6",{children:"Box Contains"}),(0,m.jsx)("p",{children:null===Z||void 0===Z?void 0:Z.boxContainsDescription})]})})]})]})})}),(0,m.jsx)("section",{className:"product-reviews",children:(0,m.jsxs)(t.Z,{children:[(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{style:{color:"desc"===n?"black":"#9c9b9b"},onClick:function(){return g("desc")},children:"Description"}),(0,m.jsxs)("li",{style:{color:"rev"===n?"black":"#9c9b9b"},onClick:function(){return g("rev")},children:["Reviews (",null===Z||void 0===Z?void 0:Z.reviews.length,")"]})]}),"desc"===n?(0,m.jsx)("p",{children:null===Z||void 0===Z?void 0:Z.description}):(0,m.jsx)("div",{className:"rates",children:null===Z||void 0===Z?void 0:Z.reviews.map((function(e){return(0,m.jsxs)("div",{className:"rate-comment",children:[(0,m.jsx)("span",{children:"Jhon Doe"}),(0,m.jsxs)("span",{children:[e.rating," (rating)"]}),(0,m.jsx)("p",{children:e.text})]},e.rating)}))})]})}),(0,m.jsx)(j.Z,{}),(0,m.jsxs)("section",{className:"related-products",children:[(0,m.jsx)(t.Z,{children:(0,m.jsx)("h3",{children:"You might also like"})}),(0,m.jsx)(a.Z,{productItems:N,addToCart:D})]})]})}}}]);
//# sourceMappingURL=832.7405f37d.chunk.js.map