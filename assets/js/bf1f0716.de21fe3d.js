"use strict";(self.webpackChunkuberlogger_manual=self.webpackChunkuberlogger_manual||[]).push([[88],{52991:(e,t,n)=>{n.d(t,{Z:()=>E});var r=n(67294),i=n(86010),a=n(53438),c=n(39960),s=n(13919),l=n(95999);const o="cardContainer_fWXF",d="cardTitle_rnsV",u="cardDescription_PWke";function m(e){let{href:t,children:n}=e;return r.createElement(c.default,{href:t,className:(0,i.default)("card padding--lg",o)},n)}function p(e){let{href:t,icon:n,title:a,description:c}=e;return r.createElement(m,{href:t},r.createElement("h2",{className:(0,i.default)("text--truncate",d),title:a},n," ",a),c&&r.createElement("p",{className:(0,i.default)("text--truncate",u),title:c},c))}function f(e){let{item:t}=e;const n=(0,a.Wl)(t);return n?r.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const n=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,a.xz)(t.docId??void 0);return r.createElement(p,{href:t.href,icon:n,title:t.label,description:t.description??i?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(h,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const n=(0,a.jA)();return r.createElement(E,{items:n.items,className:t})}function E(e){const{items:t,className:n}=e;if(!t)return r.createElement(y,e);const c=(0,a.MN)(t);return r.createElement("section",{className:(0,i.default)("row",n)},c.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(g,{item:e})))))}},93736:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var r=n(87462),i=(n(67294),n(3905)),a=n(52991),c=n(53438);const s={id:"pet",title:"Pets",description:"Pets",custom_edit_url:null},l=void 0,o={unversionedId:"api/pet",id:"api/pet",title:"Pets",description:"Pets",source:"@site/docs/api/pet.tag.mdx",sourceDirName:"api",slug:"/api/pet",permalink:"/api/pet",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"pet",title:"Pets",description:"Pets",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Introduction",permalink:"/api/swagger-petstore-yaml"},next:{title:"Add a new pet to the store",permalink:"/api/add-pet"}},d={},u=[],m={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Everything about your Pets"),(0,i.kt)(a.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);