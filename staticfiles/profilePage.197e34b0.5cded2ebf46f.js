import d from"./postComponent.7b19cc8d.js";import l from"./sidebar.0135b395.js";import{u as _,a as u}from"./authorStore.17402b56.js";import{_ as f,s as n,c as r,b as m,a as e,F as h,u as v,A as g,o as s,y as S,p as b,e as C}from"./entry.448beef3.js";import"./commentComponent.d9fda011.js";import"./nuxt-link.45edca7a.js";const I=""+new URL("spiderman.53e41ff7.jpeg",import.meta.url).href;const w={name:"SocialDistributionApp",components:{PostComponent:d,SidebarComponent:l},data(){return{posts:[]}},async created(){const o=_();console.log(o.authorId,o.authToken),console.log(o.getAuthToken);try{const t=await u.get(o.BASE_URL+"/authors/"+o.authorId+"/posts/");console.log(t),t.status===200?this.posts=t.data.results:console.error("Error fetching posts:",t)}catch(t){console.error("Error while fetching posts:",t)}}},x=o=>(b("data-v-faa8e143"),o=o(),C(),o),k={class:"app-container"},y={class:"main-content"},B={class:"user-section"},P=g('<img src="'+I+'" class="profile-photo" data-v-faa8e143><h2 data-v-faa8e143>User1</h2><div class="follow-info" data-v-faa8e143><button data-v-faa8e143>Followers: </button><button data-v-faa8e143>Following: </button></div><div class="bio-section" data-v-faa8e143><textarea placeholder="Write a Bio" data-v-faa8e143></textarea></div><button class="edit" data-v-faa8e143>Edit</button>',5),A={class:"posts-section"},E=x(()=>e("h3",null,"MY POSTS:",-1));function F(o,t,D,L,c,N){const i=n("SidebarComponent"),p=n("PostComponent");return s(),r("div",k,[m(i),e("main",y,[e("div",B,[P,e("div",A,[E,(s(!0),r(h,null,v(c.posts,a=>(s(),S(p,{key:a.id,postContent:a.content,postID:a.id},null,8,["postContent","postID"]))),128))])])])])}const M=f(w,[["render",F],["__scopeId","data-v-faa8e143"]]);export{M as default};
