import{z as b,r as u,s as _,o as I,c as x,a as e,b as m,w as h,d as v,n as p,v as c,p as S,e as y,_ as U}from"./entry.448beef3.js";import{u as E,a as P}from"./authorStore.17402b56.js";const a=n=>(S("data-v-2207095b"),n=n(),y(),n),T={id:"app"},V={class:"container"},k={class:"heading"},A=a(()=>e("br",null,null,-1)),B={class:"registration-box"},C=a(()=>e("h2",null,"REGISTER",-1)),N={class:"input-group"},R=a(()=>e("label",{for:"email"},"Email",-1)),D={class:"input-group"},G=a(()=>e("label",{for:"username"},"Username",-1)),L={class:"input-group"},O=a(()=>e("label",{for:"password"},"Password",-1)),z=b({__name:"signupPage",setup(n){const r=E(),i=u(""),d=u(""),l=u(""),g=async()=>{try{const t={email:i.value,username:d.value,password1:l.value,password2:l.value};try{console.log(t);const o=await P.post(r.BASE_URL+"/api/auth/register/",t);await r.setAuthToken(o.data.access),await r.setAuthorId(o.data.user.pk),window.location.href="/homePage"}catch(o){console.log(o)}}catch(t){console.error("Error during registration:",t)}};return(t,o)=>{const w=_("h1soc"),f=_("h1dis");return I(),x("div",T,[e("div",V,[e("div",k,[m(w,null,{default:h(()=>[v("SOCIAL"),A]),_:1}),m(f,null,{default:h(()=>[v("DISTRIBUTION")]),_:1})]),e("div",B,[C,e("form",null,[e("div",N,[R,p(e("input",{type:"email",id:"email","onUpdate:modelValue":o[0]||(o[0]=s=>i.value=s),placeholder:"Email"},null,512),[[c,i.value]])]),e("div",D,[G,p(e("input",{type:"text",id:"username","onUpdate:modelValue":o[1]||(o[1]=s=>d.value=s),placeholder:"Username"},null,512),[[c,d.value]])]),e("div",L,[O,p(e("input",{type:"password",id:"password","onUpdate:modelValue":o[2]||(o[2]=s=>l.value=s),placeholder:"Password"},null,512),[[c,l.value]])]),e("button",{type:"button",onClick:o[3]||(o[3]=s=>{g()})},"SIGN UP")])])])])}}});const j=U(z,[["__scopeId","data-v-2207095b"]]);export{j as default};
