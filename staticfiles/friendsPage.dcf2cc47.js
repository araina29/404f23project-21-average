import d from"./sidebar.0135b395.js";import{_ as c,s as _,c as s,b as p,a as n,F as l,u as m,o as t,t as f,p as u,e as v}from"./entry.448beef3.js";import"./nuxt-link.45edca7a.js";const g={name:"SocialDistributionApp",components:{SidebarComponent:d},data(){return{friends:[{id:1,name:"User_1"},{id:2,name:"User_2"},{id:3,name:"User_3"},{id:4,name:"User_4"},{id:5,name:"User_5"}]}},methods:{gotoProfile(e){console.log("Navigating to profile of User ID: ${id}")}}},h=e=>(u("data-v-9fb2879d"),e=e(),v(),e),b={class:"app-container"},S={class:"main-content"},C=h(()=>n("div",{class:"header"},"FRIENDS",-1)),I={class:"friend-list"},U=["onClick"];function k(e,x,y,D,a,i){const r=_("SidebarComponent");return t(),s("div",b,[p(r),n("div",S,[C,n("div",I,[(t(!0),s(l,null,m(a.friends,o=>(t(),s("button",{key:o.id,onClick:N=>i.gotoProfile(o.id)},f(o.name),9,U))),128))])])])}const F=c(g,[["render",k],["__scopeId","data-v-9fb2879d"]]);export{F as default};
