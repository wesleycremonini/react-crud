(this.webpackJsonpcrud=this.webpackJsonpcrud||[]).push([[0],{69:function(e,t,a){"use strict";a.r(t);var c=a(4),r=a.n(c),s=a(33),n=a.n(s),l=a(17),i=a(0),o=a.n(i),j=a(2),b=a(12),u=a(78),d=a(76),x=a(77),h=a(71),O=a(79),p=a(72),m=a(54),f=a(31),g=a(30),v=Object(m.a)({apiKey:"AIzaSyDrpLrwrq0i3aWfGdoFply6JsIzpj5WRF4",authDomain:"react-crud-dev.firebaseapp.com",databaseURL:"https://react-crud-dev-default-rtdb.firebaseio.com",projectId:"react-crud-dev",storageBucket:"react-crud-dev.appspot.com",messagingSenderId:"512249191321",appId:"1:512249191321:web:75e43a2400c52dc703d108"}),y=Object(f.b)(v),N=Object(g.f)(v),w=a(1),C=r.a.createContext();function L(){return Object(c.useContext)(C)}function S(e){var t=e.children,a=Object(c.useState)(),r=Object(b.a)(a,2),s=r[0],n=r[1],l=Object(c.useState)(!0),i=Object(b.a)(l,2),o=i[0],j=i[1];Object(c.useEffect)((function(){return y.onAuthStateChanged((function(e){n(e),j(!1)}))}),[]);var u={currentUser:s,signup:function(e,t){return Object(f.a)(y,e,t)},login:function(e,t){return Object(f.d)(y,e,t)},logout:function(){return Object(f.e)(y)},resetPassword:function(e){return Object(f.c)(y,e)},upEmail:function(e){return Object(f.f)(s,e)},upPassword:function(e){return Object(f.g)(s,e)},upProfile:function(e,t){return Object(f.h)(s,e,t)}};return Object(w.jsx)(C.Provider,{value:u,children:!o&&t})}var R=a(18);var k=function(){var e=Object(c.useRef)(),t=Object(c.useRef)(),a=Object(c.useRef)(),r=L().signup,s=Object(c.useState)(""),n=Object(b.a)(s,2),i=n[0],m=n[1],f=Object(c.useState)(!1),g=Object(b.a)(f,2),v=g[0],y=g[1],N=Object(l.g)();function C(){return(C=Object(j.a)(o.a.mark((function c(s){return o.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(s.preventDefault(),t.current.value===a.current.value){c.next=5;break}return c.abrupt("return",m("Senhas n\xe3o s\xe3o iguais"));case 5:if(!(t.current.value.length<6)){c.next=7;break}return c.abrupt("return",m("Senha muito curta"));case 7:return c.prev=8,m(""),y(!0),c.next=13,r(e.current.value,t.current.value);case 13:N("/nome"),c.next=20;break;case 16:c.prev=16,c.t0=c.catch(8),m("N\xe3o foi poss\xedvel criar uma conta"),y(!1);case 20:case 21:case"end":return c.stop()}}),c,null,[[8,16]])})))).apply(this,arguments)}return Object(w.jsx)("div",{className:"bg-primary d-flex align-items-center",style:{minHeight:"100vh"},children:Object(w.jsx)(u.a,{className:"col-8 mx-auto",children:Object(w.jsxs)(u.a.Body,{children:[Object(w.jsx)("h2",{className:"text-center mb-4",children:"Cadastro"}),i&&Object(w.jsx)(d.a,{variant:"danger",children:i}),Object(w.jsxs)(x.a,{onSubmit:function(e){return C.apply(this,arguments)},className:"d-flex flex-column",children:[Object(w.jsxs)(x.a.Group,{className:"mb-3",children:[Object(w.jsx)(x.a.Label,{children:"Email"}),Object(w.jsx)(x.a.Control,{type:"email",ref:e,required:!0})]}),Object(w.jsxs)(x.a.Group,{className:"mb-3",children:[Object(w.jsx)(x.a.Label,{children:"Senha"}),Object(w.jsx)(x.a.Control,{type:"password",ref:t,required:!0})]}),Object(w.jsxs)(x.a.Group,{className:"mb-3",children:[Object(w.jsx)(x.a.Label,{children:"Repita a Senha"}),Object(w.jsx)(x.a.Control,{type:"password",ref:a,required:!0})]}),v?Object(w.jsx)(h.a,{animation:"border align-self-center"}):Object(w.jsxs)(O.a,{gap:2,children:[Object(w.jsx)(p.a,{className:"w-100",type:"submit",children:"Cadastrar"}),Object(w.jsx)(R.b,{to:"/login",children:Object(w.jsx)(p.a,{className:"w-100",variant:"outline-primary",children:"J\xe1 tenho uma conta"})})]})]})]})})})},B=a(73);function P(){var e=Object(c.useState)(""),t=Object(b.a)(e,2),a=t[0],r=t[1],s=L(),n=s.currentUser,i=s.logout,x=Object(l.g)();function h(){return(h=Object(j.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(""),e.prev=1,e.next=4,i();case 4:x("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),r("Falha ao sair");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return Object(w.jsx)("div",{className:"bg-primary d-flex align-items-center",style:{minHeight:"100vh"},children:Object(w.jsx)(u.a,{className:"col-8 mx-auto",children:Object(w.jsxs)(u.a.Body,{className:"d-flex flex-column align-items-center",children:[Object(w.jsx)("h2",{className:"text-center mb-4",children:"Perfil"}),a&&Object(w.jsx)(d.a,{variant:"danger",children:a}),Object(w.jsx)(B.a,{src:n.photoURL,roundedCircle:!0,border:"primary",style:{width:"100%",maxWidth:"128px",height:"100%",maxHeight:"128px"}}),Object(w.jsxs)("p",{className:"mt-4",children:[Object(w.jsx)("strong",{children:"Nome: "}),n.displayName]}),Object(w.jsxs)("p",{children:[Object(w.jsx)("strong",{children:"Email: "}),n.email]}),Object(w.jsxs)(O.a,{gap:2,children:[Object(w.jsx)(R.b,{to:"/posts",className:"btn btn-primary w-100 mt-3",children:"Ir para Posts"}),Object(w.jsx)(R.b,{to:"/update-profile",className:"btn btn-primary w-100 mt-3",children:"Atualizar Perfil"}),Object(w.jsx)(R.b,{to:"/posts",children:Object(w.jsx)(p.a,{className:"w-100",variant:"outline-primary",children:"Voltar"})}),Object(w.jsx)(p.a,{variant:"outline-danger",onClick:function(){return h.apply(this,arguments)},children:"Sair"})]})]})})})}var q=function(){var e=Object(c.useRef)(),t=Object(c.useRef)(),a=L().login,r=Object(c.useState)(""),s=Object(b.a)(r,2),n=s[0],i=s[1],m=Object(c.useState)(!1),f=Object(b.a)(m,2),g=f[0],v=f[1],y=Object(l.g)();function N(){return(N=Object(j.a)(o.a.mark((function c(r){return o.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return r.preventDefault(),c.prev=1,i(""),v(!0),c.next=6,a(e.current.value,t.current.value);case 6:y("/posts"),c.next=13;break;case 9:c.prev=9,c.t0=c.catch(1),i("Algo deu errado"),v(!1);case 13:case"end":return c.stop()}}),c,null,[[1,9]])})))).apply(this,arguments)}return Object(w.jsx)("div",{className:"bg-primary d-flex align-items-center",style:{minHeight:"100vh"},children:Object(w.jsx)(u.a,{className:"col-8 mx-auto",children:Object(w.jsxs)(u.a.Body,{children:[Object(w.jsx)("h2",{className:"text-center mb-4",children:"Entrar"}),n&&Object(w.jsx)(d.a,{variant:"danger",children:n}),Object(w.jsxs)(x.a,{onSubmit:function(e){return N.apply(this,arguments)},className:"d-flex flex-column",children:[Object(w.jsxs)(x.a.Group,{className:"mb-3",children:[Object(w.jsx)(x.a.Label,{children:"Email"}),Object(w.jsx)(x.a.Control,{type:"email",ref:e,required:!0})]}),Object(w.jsxs)(x.a.Group,{className:"mb-3",children:[Object(w.jsx)(x.a.Label,{children:"Senha"}),Object(w.jsx)(x.a.Control,{type:"password",ref:t,required:!0})]}),g?Object(w.jsx)(h.a,{animation:"border align-self-center"}):Object(w.jsxs)(O.a,{gap:2,children:[Object(w.jsx)(p.a,{className:"w-100",type:"submit",children:"Entrar"}),Object(w.jsx)(R.b,{to:"/cadastro",children:Object(w.jsx)(p.a,{className:"w-100",variant:"outline-primary",children:"Criar uma conta"})}),Object(w.jsx)(R.b,{to:"/esqueci-senha",children:Object(w.jsx)(p.a,{className:"w-100",variant:"outline-danger",children:"Esqueci minha senha"})})]})]})]})})})};function D(){var e=Object(c.useRef)(),t=L().resetPassword,a=Object(c.useState)(""),r=Object(b.a)(a,2),s=r[0],n=r[1],l=Object(c.useState)(!1),i=Object(b.a)(l,2),m=i[0],f=i[1],g=Object(c.useState)(""),v=Object(b.a)(g,2),y=v[0],N=v[1];function C(){return(C=Object(j.a)(o.a.mark((function a(c){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c.preventDefault(),a.prev=1,n(""),N(""),f(!0),a.next=7,t(e.current.value);case 7:N("Instru\xe7\xf5es foram enviadas ao seu email"),a.next=14;break;case 10:a.prev=10,a.t0=a.catch(1),n("N\xe3o foi poss\xedvel resetar a senha"),f(!1);case 14:case"end":return a.stop()}}),a,null,[[1,10]])})))).apply(this,arguments)}return Object(w.jsx)("div",{className:"bg-primary d-flex align-items-center",style:{minHeight:"100vh"},children:Object(w.jsx)(u.a,{className:"col-8 mx-auto",children:Object(w.jsxs)(u.a.Body,{children:[Object(w.jsx)("h2",{className:"text-center mb-4",children:"Resetar Senha"}),s&&Object(w.jsx)(d.a,{variant:"danger",children:s}),y&&Object(w.jsx)(d.a,{variant:"success",children:y}),Object(w.jsxs)(x.a,{onSubmit:function(e){return C.apply(this,arguments)},className:"d-flex flex-column",children:[Object(w.jsxs)(x.a.Group,{className:"mb-3",children:[Object(w.jsx)(x.a.Label,{children:"Email"}),Object(w.jsx)(x.a.Control,{type:"email",ref:e,required:!0})]}),m?Object(w.jsx)(h.a,{animation:"border align-self-center"}):Object(w.jsxs)(O.a,{gap:2,children:[Object(w.jsx)(p.a,{className:"w-100",type:"submit",children:"Resetar Senha"}),Object(w.jsx)(R.b,{to:"/login",children:Object(w.jsx)(p.a,{className:"w-100",variant:"outline-primary",children:"Entrar"})}),Object(w.jsx)(R.b,{to:"/cadastro",children:Object(w.jsx)(p.a,{className:"w-100",variant:"outline-danger",children:"Criar uma conta"})})]})]})]})})})}function E(){var e=Object(c.useRef)(),t=Object(c.useRef)(),a=Object(c.useRef)(),r=Object(c.useRef)(),s=L(),n=s.currentUser,i=s.upEmail,o=s.upPassword,j=s.upProfile,m=Object(c.useState)(""),f=Object(b.a)(m,2),g=f[0],v=f[1],y=Object(c.useState)(!1),N=Object(b.a)(y,2),C=N[0],S=N[1],k=Object(l.g)();return Object(w.jsx)("div",{className:"bg-primary d-flex align-items-center",style:{minHeight:"100vh"},children:Object(w.jsx)(u.a,{className:"col-8 mx-auto",children:Object(w.jsxs)(u.a.Body,{children:[Object(w.jsx)("h2",{className:"text-center mb-4",children:"Atualizar Perfil"}),g&&Object(w.jsx)(d.a,{variant:"danger",children:g}),Object(w.jsxs)(x.a,{onSubmit:function(c){if(c.preventDefault(),t.current.value!==a.current.value)return v("Senhas n\xe3o s\xe3o iguais");if(0!==t.current.value.length&&t.current.value.length<6)return v("Senha muito curta");var s=[];S(!0),v(""),e.current.value!==n.email&&s.push(i(e.current.value)),t.current.value&&s.push(o(t.current.value)),r.current.value!==n.photoURL&&s.push(j({displayName:n.displayName,photoURL:r.current.value})),Promise.all(s).then((function(){k("/")})).catch((function(){v("Falha ao atualizar")})).finally((function(){S(!1)}))},className:"d-flex flex-column",children:[Object(w.jsxs)(x.a.Group,{className:"mb-3",children:[Object(w.jsx)(x.a.Label,{children:"Email"}),Object(w.jsx)(x.a.Control,{type:"email",ref:e,required:!0,defaultValue:n.email})]}),Object(w.jsxs)(x.a.Group,{className:"mb-3",children:[Object(w.jsx)(x.a.Label,{children:"Senha"}),Object(w.jsx)(x.a.Control,{type:"password",ref:t,placeholder:"Deixe em branco para manter"})]}),Object(w.jsxs)(x.a.Group,{className:"mb-3",children:[Object(w.jsx)(x.a.Label,{children:"Repita a Senha"}),Object(w.jsx)(x.a.Control,{type:"password",ref:a,placeholder:"Deixe em branco para manter"})]}),Object(w.jsxs)(x.a.Group,{className:"mb-3",children:[Object(w.jsx)(x.a.Label,{children:"Foto de perfil: (URL)"}),Object(w.jsx)(x.a.Control,{type:"url",ref:r,defaultValue:n.photoURL,placeholder:"N\xe3o obrigat\xf3rio"})]}),C?Object(w.jsx)(h.a,{animation:"border align-self-center"}):Object(w.jsxs)(O.a,{gap:2,children:[Object(w.jsx)(p.a,{className:"w-100",type:"submit",children:"Confirmar"}),Object(w.jsx)(R.b,{to:"/",children:Object(w.jsx)(p.a,{className:"w-100",variant:"outline-danger",children:"Cancelar"})})]})]})]})})})}var G=a(74),F=a(80),H=a(75),U=a(58),V=a(8),T=r.a.createContext();function I(){return Object(c.useContext)(T)}function A(e){var t=e.children,a=Object(c.useState)(!0),r=Object(b.a)(a,2),s=r[0],n=r[1],l=Object(c.useState)([]),i=Object(b.a)(l,2),u=i[0],d=i[1],x=Object(g.b)(N,"posts"),h=Object(c.useState)(!1),O=Object(b.a)(h,2),p=O[0],m=O[1];function f(){return(f=Object(j.a)(o.a.mark((function e(t,a,c){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.a)(x,{type:t,info:a,status:"abertos",assigned:c,color:"Bug"===t?"danger":"Tarefa"===t?"primary":"Documenta\xe7\xe3o"===t?"dark":"warning"});case 2:m(1!=p);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=Object(j.a)(o.a.mark((function e(t,a,c,r,s){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(g.d)(N,"posts",t),e.next=3,Object(g.g)(n,{type:a,info:c,status:s,assigned:r,color:"Bug"===a?"danger":"Tarefa"===a?"primary":"Documenta\xe7\xe3o"===a?"dark":"warning"});case 3:m(1!=p);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return(y=Object(j.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(g.d)(N,"posts",t),e.next=3,Object(g.c)(a);case 3:m(1!=p);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(c.useEffect)((function(){function e(){return(e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.e)(x);case 2:t=e.sent,d(t.docs.map((function(e){return Object(V.a)(Object(V.a)({},e.data()),{},{id:e.id})})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),n(!1)}),[p]);var C={posts:u,createPost:function(e,t,a){return f.apply(this,arguments)},editPost:function(e,t,a,c,r){return v.apply(this,arguments)},deletePost:function(e){return y.apply(this,arguments)}};return Object(w.jsx)(T.Provider,{value:C,children:!s&&t})}var z=a(35),J=a(36);function W(){var e=I().posts,t=L().currentUser,a=Object(c.useState)(""),r=Object(b.a)(a,2),s=r[0],n=r[1],l=Object(c.useState)(""),i=Object(b.a)(l,2),o=i[0],j=i[1],d=Object(c.useState)(!0),h=Object(b.a)(d,2),O=h[0],m=h[1];return Object(c.useEffect)((function(){setTimeout((function(){m(!1)}),500)}),[]),Object(w.jsxs)("div",{children:[Object(w.jsxs)("div",{style:{height:"100px"},md:12,className:"text-light justify-content-between align-items-center d-flex bg-dark p-3",children:[Object(w.jsx)(G.a,{bg:"secondary",children:Object(w.jsx)("h3",{children:"BugTracker"})}),Object(w.jsx)(R.b,{to:"/",children:Object(w.jsxs)(p.a,{style:{border:"none"},className:"d-flex flex-row align-items-center bg-transparent",children:[Object(w.jsx)(B.a,{src:t.photoURL,style:{width:"50px",height:"50px",cursor:"pointer"},roundedCircle:!0}),Object(w.jsx)("h5",{className:"ms-3",children:"Meu Perfil"})]})})]}),Object(w.jsx)("div",{style:{minHeight:"150px"},md:12,className:"d-flex bg-light flex-column p-5 pb-0",children:Object(w.jsxs)("div",{className:"col-12 d-flex flex-column gap-3 flex-md-row bg-light align-self-start",children:[Object(w.jsxs)("div",{className:"d-flex flex-row align-items-center ",children:[Object(w.jsx)("h1",{children:"Sum\xe1rio de Bugs"}),Object(w.jsx)(R.b,{to:"/create-post",children:Object(w.jsx)(p.a,{className:"ms-4",children:Object(w.jsx)("h4",{children:"Criar Bug"})})})]}),Object(w.jsxs)("div",{className:"d-flex flex-sm-row flex-column justify-content-center gap-2 align-items-center  ms-auto",children:[Object(w.jsx)(x.a.Group,{className:"w-50",children:Object(w.jsxs)(x.a.Select,{onChange:function(e){return j(e.target.value.toLowerCase())},children:[Object(w.jsx)("option",{value:"",children:"Todos"}),Object(w.jsx)("option",{value:"Bug",children:"Bug"}),Object(w.jsx)("option",{value:"Tarefa",children:"Tarefa"}),Object(w.jsx)("option",{value:"Crash",children:"Crash"}),Object(w.jsx)("option",{value:"Documenta\xe7\xe3o",children:"Documenta\xe7\xe3o"})]})}),Object(w.jsxs)(F.a,{className:"w-100",children:[Object(w.jsx)(x.a.Control,{placeholder:"Buscar...",onChange:function(e){return n(e.target.value.toLowerCase())}}),Object(w.jsx)(p.a,{variant:"primary",disabled:!0,children:Object(w.jsx)(z.a,{icon:J.b})})]}),Object(w.jsx)(p.a,{variant:"success",className:"w-75",onClick:function(){n(""),j("")},children:"Limpar Filtros"})]})]})}),!O&&Object(w.jsxs)(H.a,{xs:12,md:12,style:{minHeight:"72vh"},className:"w-100 bg-light p-3 d-flex flex-row gap-4 justify-content-center",children:[Object(w.jsxs)(U.a,{lg:2,className:"bg-white d-flex flex-column rounded-3 p-3",children:[Object(w.jsx)("h3",{className:"border-bottom border-info border-4",children:"Abertos"}),e.map((function(e,t){return Object(w.jsx)("div",{children:"abertos"===e.status&&e.type.toLowerCase().includes(o)&&(e.assigned.toLowerCase().includes(s)||e.info.toLowerCase().includes(s)||e.type.toLowerCase().includes(s))&&Object(w.jsxs)(u.a,{border:e.color,className:"text-center w-100 mt-2 p-0",children:[Object(w.jsxs)(u.a.Header,{className:"text-light bg-".concat(e.color),children:[e.type,Object(w.jsx)(R.b,{to:"/edit/".concat(e.id),children:Object(w.jsx)(p.a,{className:"position-absolute top-0 end-0",variant:"transparent",children:Object(w.jsx)(z.a,{icon:J.a,color:"white"})})})]}),Object(w.jsx)(u.a.Body,{className:"text-start",children:e.info}),Object(w.jsx)(u.a.Footer,{children:e.assigned})]})},t)}))]}),Object(w.jsxs)(U.a,{lg:2,className:"bg-white d-flex flex-column rounded-3 p-3",children:[Object(w.jsx)("h3",{className:"border-bottom border-info border-4",children:"Reabertos"}),e.map((function(e,t){return Object(w.jsx)("div",{children:"reabertos"===e.status&&e.type.toLowerCase().includes(o)&&(e.assigned.toLowerCase().includes(s)||e.info.toLowerCase().includes(s)||e.type.toLowerCase().includes(s))&&Object(w.jsxs)(u.a,{border:e.color,className:"text-center mt-2 w-100 p-0",children:[Object(w.jsxs)(u.a.Header,{className:"text-light bg-".concat(e.color),children:[e.type,Object(w.jsx)(R.b,{to:"/edit/".concat(e.id),children:Object(w.jsx)(p.a,{className:"position-absolute top-0 end-0",variant:"transparent",children:Object(w.jsx)(z.a,{icon:J.a,color:"white"})})})]}),Object(w.jsx)(u.a.Body,{className:"text-start",children:e.info}),Object(w.jsx)(u.a.Footer,{children:e.assigned})]})},t)}))]}),Object(w.jsxs)(U.a,{lg:2,className:"bg-white d-flex flex-column rounded-3 p-3",children:[Object(w.jsx)("h3",{className:"border-bottom border-info border-4",children:"Em Progresso"}),e.map((function(e,t){return Object(w.jsx)("div",{children:"em progresso"===e.status&&e.type.toLowerCase().includes(o)&&(e.assigned.toLowerCase().includes(s)||e.info.toLowerCase().includes(s)||e.type.toLowerCase().includes(s))&&Object(w.jsxs)(u.a,{border:e.color,className:"text-center mt-2 w-100 p-0",children:[Object(w.jsxs)(u.a.Header,{className:"text-light bg-".concat(e.color),children:[e.type,Object(w.jsx)(R.b,{to:"/edit/".concat(e.id),children:Object(w.jsx)(p.a,{className:"position-absolute top-0 end-0",variant:"transparent",children:Object(w.jsx)(z.a,{icon:J.a,color:"white"})})})]}),Object(w.jsx)(u.a.Body,{className:"text-start",children:e.info}),Object(w.jsx)(u.a.Footer,{children:e.assigned})]})},t)}))]}),Object(w.jsxs)(U.a,{lg:2,className:"bg-white d-flex flex-column rounded-3 p-3",children:[Object(w.jsx)("h3",{className:"border-bottom border-info border-4",children:"Fechados"}),e.map((function(e,t){return Object(w.jsx)("div",{children:"fechados"===e.status&&e.type.toLowerCase().includes(o)&&(e.assigned.toLowerCase().includes(s)||e.info.toLowerCase().includes(s)||e.type.toLowerCase().includes(s))&&Object(w.jsxs)(u.a,{border:e.color,className:"text-center mt-2 w-100 p-0",children:[Object(w.jsxs)(u.a.Header,{className:"text-light bg-".concat(e.color),children:[e.type,Object(w.jsx)(R.b,{to:"/edit/".concat(e.id),children:Object(w.jsx)(p.a,{className:"position-absolute top-0 end-0",variant:"transparent",children:Object(w.jsx)(z.a,{icon:J.a,color:"white"})})})]}),Object(w.jsx)(u.a.Body,{className:"text-start",children:e.info}),Object(w.jsx)(u.a.Footer,{children:e.assigned})]})},t)}))]}),Object(w.jsxs)(U.a,{lg:2,className:"bg-white d-flex flex-column rounded-3 p-3",children:[Object(w.jsx)("h3",{className:"border-bottom border-info border-4",children:"Para mim"}),e.map((function(e,a){return Object(w.jsx)("div",{children:e.assigned===t.displayName&&e.type.toLowerCase().includes(o)&&(e.assigned.toLowerCase().includes(s)||e.info.toLowerCase().includes(s)||e.type.toLowerCase().includes(s))&&Object(w.jsxs)(u.a,{border:e.color,className:"text-center mt-2 w-100 p-0",children:[Object(w.jsxs)(u.a.Header,{className:"text-light bg-".concat(e.color),children:[e.type,Object(w.jsx)(R.b,{to:"/edit/".concat(e.id),children:Object(w.jsx)(p.a,{className:"position-absolute top-0 end-0",variant:"transparent",children:Object(w.jsx)(z.a,{icon:J.a,color:"white"})})})]}),Object(w.jsx)(u.a.Body,{className:"text-start",children:e.info}),Object(w.jsx)(u.a.Footer,{children:e.assigned})]})},a)}))]})]})]})}function M(){var e=Object(c.useRef)(),t=Object(c.useRef)(),a=Object(c.useRef)(),r=I().createPost,s=Object(c.useState)(""),n=Object(b.a)(s,2),i=n[0],m=n[1],f=Object(c.useState)(!1),g=Object(b.a)(f,2),v=g[0],y=g[1],N=Object(l.g)();function C(){return(C=Object(j.a)(o.a.mark((function c(s){return o.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return s.preventDefault(),c.prev=1,m(""),y(!0),c.next=6,r(t.current.value,e.current.value,a.current.value);case 6:N("/posts"),c.next=13;break;case 9:c.prev=9,c.t0=c.catch(1),m("Falha ao criar"),y(!1);case 13:case"end":return c.stop()}}),c,null,[[1,9]])})))).apply(this,arguments)}return Object(w.jsx)("div",{className:"bg-primary d-flex align-items-center",style:{minHeight:"100vh"},children:Object(w.jsx)(u.a,{className:"col-8 mx-auto",children:Object(w.jsxs)(u.a.Body,{children:[Object(w.jsx)("h2",{className:"text-center mb-4",children:"Criar Bug"}),i&&Object(w.jsx)(d.a,{variant:"danger",children:i}),Object(w.jsxs)(x.a,{onSubmit:function(e){return C.apply(this,arguments)},className:"d-flex flex-column",children:[Object(w.jsxs)(x.a.Group,{className:"mb-3",children:[Object(w.jsx)(x.a.Label,{children:"Tipo"}),Object(w.jsxs)(x.a.Select,{ref:t,required:!0,children:[Object(w.jsx)("option",{value:"Bug",children:"Bug"}),Object(w.jsx)("option",{value:"Tarefa",children:"Tarefa"}),Object(w.jsx)("option",{value:"Crash",children:"Crash"}),Object(w.jsx)("option",{value:"Documenta\xe7\xe3o",children:"Documenta\xe7\xe3o"})]})]}),Object(w.jsxs)(x.a.Group,{className:"mb-3",children:[Object(w.jsx)(x.a.Label,{children:"Info"}),Object(w.jsx)(x.a.Control,{type:"text",ref:e,required:!0})]}),Object(w.jsxs)(x.a.Group,{className:"mb-3",required:!0,children:[Object(w.jsx)(x.a.Label,{children:"Para quem?"}),Object(w.jsx)(x.a.Control,{type:"text",ref:a,required:!0})]}),v?Object(w.jsx)(h.a,{animation:"border align-self-center"}):Object(w.jsxs)(O.a,{gap:2,children:[Object(w.jsx)(p.a,{className:"w-100",type:"submit",children:"Criar"}),Object(w.jsx)(R.b,{to:"/posts",children:Object(w.jsx)(p.a,{className:"w-100",variant:"outline-danger",children:"Cancelar"})})]})]})]})})})}function K(){var e=Object(c.useRef)(),t=Object(c.useRef)(),a=L(),r=a.currentUser,s=a.upProfile,n=Object(c.useState)(""),i=Object(b.a)(n,2),m=i[0],f=i[1],g=Object(c.useState)(!1),v=Object(b.a)(g,2),y=v[0],N=v[1],C=Object(l.g)();function S(){return(S=Object(j.a)(o.a.mark((function a(c){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c.preventDefault(),a.prev=1,f(""),N(!0),a.next=6,s({displayName:e.current.value,photoURL:t.current.value});case 6:C("/posts"),a.next=13;break;case 9:a.prev=9,a.t0=a.catch(1),f("Algo deu errado"),N(!1);case 13:case"end":return a.stop()}}),a,null,[[1,9]])})))).apply(this,arguments)}return Object(w.jsx)("div",{className:"bg-primary d-flex align-items-center",style:{minHeight:"100vh"},children:Object(w.jsx)(u.a,{className:"col-8 mx-auto",children:Object(w.jsxs)(u.a.Body,{children:[Object(w.jsx)("h2",{className:"text-center mb-4",children:"Escolha um nome e foto"}),m&&Object(w.jsx)(d.a,{variant:"danger",children:m}),Object(w.jsxs)(x.a,{onSubmit:function(e){return S.apply(this,arguments)},className:"d-flex flex-column",children:[Object(w.jsxs)(x.a.Group,{className:"mb-3",children:[Object(w.jsx)(x.a.Label,{children:"Nome"}),Object(w.jsx)(x.a.Control,{type:"text",ref:e,required:!0})]}),Object(w.jsxs)(x.a.Group,{className:"mb-3",children:[Object(w.jsx)(x.a.Label,{children:"Foto de perfil (URL)"}),Object(w.jsx)(x.a.Control,{type:"url",ref:t,defaultValue:r.photoURL,placeholder:"N\xe3o obrigat\xf3rio"})]}),y?Object(w.jsx)(h.a,{animation:"border align-self-center"}):Object(w.jsx)(O.a,{gap:2,children:Object(w.jsx)(p.a,{className:"w-100",type:"submit",children:"Confirmar"})})]})]})})})}function Q(e){var t=e.postRef,a=e.typeValue,r=e.infoValue,s=e.assignedValue,n=e.statusValue,i=Object(c.useRef)(),m=Object(c.useRef)(),f=Object(c.useRef)(),g=Object(c.useRef)(),v=I(),y=v.editPost,N=v.deletePost,C=Object(c.useState)(""),L=Object(b.a)(C,2),S=L[0],k=L[1],B=Object(c.useState)(!1),P=Object(b.a)(B,2),q=P[0],D=P[1],E=Object(l.g)();function G(){return(G=Object(j.a)(o.a.mark((function e(a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,k(""),D(!0),e.next=6,y(t,m.current.value,i.current.value,f.current.value,g.current.value);case 6:E("/posts"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),k("Falha ao editar"),D(!1);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function F(){return(F=Object(j.a)(o.a.mark((function e(a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,k(""),D(!0),e.next=6,N(t);case 6:E("/posts"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),k("Falha ao deletar"),D(!1);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}return Object(w.jsx)("div",{className:"bg-primary d-flex align-items-center",style:{minHeight:"100vh"},children:Object(w.jsx)(u.a,{className:"col-8 mx-auto",children:Object(w.jsxs)(u.a.Body,{children:[Object(w.jsx)("h2",{className:"text-center mb-4",children:"Editar Bug"}),S&&Object(w.jsx)(d.a,{variant:"danger",children:S}),Object(w.jsxs)(x.a,{onSubmit:function(e){return G.apply(this,arguments)},className:"d-flex flex-column",children:[Object(w.jsxs)(x.a.Group,{className:"mb-3",children:[Object(w.jsx)(x.a.Label,{children:"Tipo"}),Object(w.jsxs)(x.a.Select,{defaultValue:a,ref:m,required:!0,children:[Object(w.jsx)("option",{value:"Bug",children:"Bug"}),Object(w.jsx)("option",{value:"Tarefa",children:"Tarefa"}),Object(w.jsx)("option",{value:"Crash",children:"Crash"}),Object(w.jsx)("option",{value:"Documenta\xe7\xe3o",children:"Documenta\xe7\xe3o"})]})]}),Object(w.jsxs)(x.a.Group,{className:"mb-3",children:[Object(w.jsx)(x.a.Label,{children:"Info"}),Object(w.jsx)(x.a.Control,{defaultValue:r,type:"text",ref:i,required:!0})]}),Object(w.jsxs)(x.a.Group,{className:"mb-3",required:!0,children:[Object(w.jsx)(x.a.Label,{children:"Para quem?"}),Object(w.jsx)(x.a.Control,{defaultValue:s,type:"text",ref:f,required:!0})]}),Object(w.jsxs)(x.a.Group,{className:"mb-3",children:[Object(w.jsx)(x.a.Label,{children:"Estado"}),Object(w.jsxs)(x.a.Select,{defaultValue:n,ref:g,required:!0,children:[Object(w.jsx)("option",{value:"abertos",children:"Aberto"}),Object(w.jsx)("option",{value:"reabertos",children:"Reaberto"}),Object(w.jsx)("option",{value:"em progresso",children:"Em Progresso"}),Object(w.jsx)("option",{value:"fechados",children:"Fechado"})]})]}),q?Object(w.jsx)(h.a,{animation:"border align-self-center"}):Object(w.jsxs)(O.a,{gap:2,children:[Object(w.jsx)(p.a,{className:"w-100",type:"submit",children:"Editar"}),Object(w.jsx)(R.b,{to:"/posts",children:Object(w.jsx)(p.a,{className:"w-100",variant:"outline-danger",children:"Cancelar"})}),Object(w.jsx)(p.a,{className:"w-100",variant:"danger",onClick:function(e){return F.apply(this,arguments)},children:"Deletar"})]})]})]})})})}var X=function(){var e=L().currentUser,t=I().posts;return Object(w.jsxs)(l.d,{basename:"/react-crud",children:[Object(w.jsx)(l.b,{exact:!0,path:"/",element:null==e?Object(w.jsx)(l.a,{to:"/login"}):Object(w.jsx)(P,{})}),Object(w.jsx)(l.b,{path:"/cadastro",element:Object(w.jsx)(k,{})}),Object(w.jsx)(l.b,{path:"/nome",element:null==e?Object(w.jsx)(l.a,{to:"/login"}):Object(w.jsx)(K,{})}),Object(w.jsx)(l.b,{path:"/login",element:null!=e?Object(w.jsx)(l.a,{to:"/"}):Object(w.jsx)(q,{})}),Object(w.jsx)(l.b,{path:"/esqueci-senha",element:null!=e?Object(w.jsx)(l.a,{to:"/"}):Object(w.jsx)(D,{})}),Object(w.jsx)(l.b,{path:"/update-profile",element:null==e?Object(w.jsx)(l.a,{to:"/login"}):Object(w.jsx)(E,{})}),Object(w.jsx)(l.b,{path:"/posts",element:null==e?Object(w.jsx)(l.a,{to:"/login"}):Object(w.jsx)(W,{})}),Object(w.jsx)(l.b,{path:"/create-post",element:null==e?Object(w.jsx)(l.a,{to:"/login"}):Object(w.jsx)(M,{})}),t.map((function(t){return Object(w.jsx)(l.b,{path:"/edit/".concat(t.id),element:null==e?Object(w.jsx)(l.a,{to:"/login"}):Object(w.jsx)(Q,{postRef:t.id,typeValue:t.type,infoValue:t.info,assignedValue:t.assigned,statusValue:t.status})},t.id)}))]})};n.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(S,{children:Object(w.jsx)(A,{children:Object(w.jsx)(R.a,{children:Object(w.jsx)(X,{})})})})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.fea172f0.chunk.js.map