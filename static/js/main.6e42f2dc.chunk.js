(this["webpackJsonptheycheck-candidate-web"]=this["webpackJsonptheycheck-candidate-web"]||[]).push([[0],{104:function(t,e,r){},162:function(t,e,r){},166:function(t,e,r){"use strict";r.r(e);var n=r(0),a=r.n(n),o=r(9),c=r.n(o),u=(r(102),r(103),r(104),r(22)),i=r(20),s=r(28),p=r(34),l=r(35),f=r(95),b=r(92),d=r(49),m=r(14),v=Object(m.a)(),h=function(t){Object(f.a)(r,t);var e=Object(b.a)(r);function r(){var t;return Object(p.a)(this,r),(t=e.call(this)).history=Object(d.syncHistoryWithStore)(v,Object(l.a)(t)),t}return r}(d.RouterStore),O=r(2),j=r.n(O),g=r(5),y=r(43),w=r(70),E=r(10),S=(r(106),r(50)),k=(r(24),function(t){return new Promise(function(){var e=Object(g.a)(j.a.mark((function e(r,n){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,localStorage.getItem(t);case 3:a=e.sent,r(a),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),n({code:500,message:e.t0.message,data:null});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,r){return e.apply(this,arguments)}}())}),C=r(71),Z=r.n(C);r(124).config();var x,I,M,T,A,F,W,P,V,R,B,K,Q="https://www.jcdinteractiveads.com",X={getCode:{url:Q+"/api/code",method:"GET"},question:{url:Q+"/api/question",method:"POST"},coupons:{url:Q+"/api/list",method:"GET"},login:{url:Q+"/api/login",method:"POST"},register:{url:Q+"/api/register",method:"POST"},verify:{url:Q+"/api/verify",method:"PUT"},submitScore:{url:Q+"/api/score",method:"POST"}},q=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return new Promise(function(){var a=Object(g.a)(j.a.mark((function a(o,c){var u;return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,k("token");case 3:u=a.sent,Z()({method:t,url:e,data:r,headers:Object(S.a)(Object(S.a)({},n),{},{authentication:u||null})}).then((function(t){o(t?t.data:null)})).catch(function(){var t=Object(g.a)(j.a.mark((function t(e){var r,n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=e.response||{},n=r.data,c(n);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),c({code:500,message:"Please try again later",data:null});case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(t,e){return a.apply(this,arguments)}}())},H=r(1),J=r(168),N=(x=H.action.bound,I=H.action.bound,M=H.action.bound,T=H.action.bound,A=H.action.bound,F=H.action.bound,W=H.action.bound,P=H.action.bound,V=function(){function t(){Object(p.a)(this,t),Object(y.a)(this,"code",R,this),Object(y.a)(this,"coupons",B,this),Object(y.a)(this,"errorCode",K,this)}return Object(w.a)(t,[{key:"submitQuestion",value:function(){var t=Object(g.a)(j.a.mark((function t(e){var r,n,a,o;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=(r=X.question).method,a=r.url,t.next=4,q(n,a,e);case 4:return o=t.sent,t.abrupt("return",o);case 8:t.prev=8,t.t0=t.catch(0),this.errorCode=t.t0&&t.t0.code?t.t0.code:503;case 11:case"end":return t.stop()}}),t,this,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},{key:"setErrorCode",value:function(){var t=Object(g.a)(j.a.mark((function t(e){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{this.errorCode=200}catch(e){this.errorCode=200}case 1:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"getCode",value:function(){var t=Object(g.a)(j.a.mark((function t(){var e,r,n,a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=(e=X.getCode).method,n=e.url,t.next=4,q(r,n);case 4:return a=t.sent,this.code=a.data||"Error",t.abrupt("return",a);case 9:t.prev=9,t.t0=t.catch(0),this.errorCode=t.t0&&t.t0.code?t.t0.code:503;case 12:case"end":return t.stop()}}),t,this,[[0,9]])})));return function(){return t.apply(this,arguments)}}()},{key:"getCouponList",value:function(){var t=Object(g.a)(j.a.mark((function t(){var e,r,n,a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=(e=X.coupons).method,n=e.url,t.next=4,q(r,n);case 4:return a=t.sent,this.coupons=a.data||"Error",t.abrupt("return",a);case 9:t.prev=9,t.t0=t.catch(0),this.errorCode=t.t0&&t.t0.code?t.t0.code:503;case 12:case"end":return t.stop()}}),t,this,[[0,9]])})));return function(){return t.apply(this,arguments)}}()},{key:"login",value:function(){var t=Object(g.a)(j.a.mark((function t(e){var r,n,a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.errorCode=200,n=(r=X.login).method,a=r.url,t.next=5,q(n,a,e);case 5:return t.sent,t.abrupt("return",!0);case 9:return t.prev=9,t.t0=t.catch(0),console.log("error",t.t0),this.errorCode=t.t0&&t.t0.code?t.t0.code:503,t.abrupt("return",!1);case 14:case"end":return t.stop()}}),t,this,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},{key:"register",value:function(){var t=Object(g.a)(j.a.mark((function t(e){var r,n,a,o;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.errorCode=200,n=(r=X.register).method,a=r.url,t.next=5,q(n,a,e);case 5:return o=t.sent,console.log("result ",o),J.b.info("Email sent, please verify your account"),t.abrupt("return",o);case 11:return t.prev=11,t.t0=t.catch(0),this.errorCode=t.t0&&t.t0.code?t.t0.code:503,t.abrupt("return",!1);case 15:case"end":return t.stop()}}),t,this,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()},{key:"verify",value:function(){var t=Object(g.a)(j.a.mark((function t(e){var r,n,a,o;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=(r=X.verify).method,a=r.url,t.next=4,q(n,a,e);case 4:return o=t.sent,this.coupons=o.data||"Error",t.abrupt("return",o);case 9:t.prev=9,t.t0=t.catch(0),this.errorCode=t.t0&&t.t0.code?t.t0.code:503;case 12:case"end":return t.stop()}}),t,this,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},{key:"submitScore",value:function(){var t=Object(g.a)(j.a.mark((function t(e){var r,n,a,o;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=(r=X.submitScore).method,a=r.url,t.next=4,q(n,a,e);case 4:return o=t.sent,this.coupons=o.data||"Error",t.abrupt("return",o);case 9:t.prev=9,t.t0=t.catch(0),this.errorCode=t.t0&&t.t0.code?t.t0.code:503;case 12:case"end":return t.stop()}}),t,this,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}]),t}(),R=Object(E.a)(V.prototype,"code",[H.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),B=Object(E.a)(V.prototype,"coupons",[H.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),K=Object(E.a)(V.prototype,"errorCode",[H.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 200}}),Object(E.a)(V.prototype,"submitQuestion",[x],Object.getOwnPropertyDescriptor(V.prototype,"submitQuestion"),V.prototype),Object(E.a)(V.prototype,"setErrorCode",[I],Object.getOwnPropertyDescriptor(V.prototype,"setErrorCode"),V.prototype),Object(E.a)(V.prototype,"getCode",[M],Object.getOwnPropertyDescriptor(V.prototype,"getCode"),V.prototype),Object(E.a)(V.prototype,"getCouponList",[T],Object.getOwnPropertyDescriptor(V.prototype,"getCouponList"),V.prototype),Object(E.a)(V.prototype,"login",[A],Object.getOwnPropertyDescriptor(V.prototype,"login"),V.prototype),Object(E.a)(V.prototype,"register",[F],Object.getOwnPropertyDescriptor(V.prototype,"register"),V.prototype),Object(E.a)(V.prototype,"verify",[W],Object.getOwnPropertyDescriptor(V.prototype,"verify"),V.prototype),Object(E.a)(V.prototype,"submitScore",[P],Object.getOwnPropertyDescriptor(V.prototype,"submitScore"),V.prototype),V);var Y=function(){var t;return t={},Object(s.a)(t,"routerStore",new h),Object(s.a)(t,"authStore",new N),t}(),L=Object(n.createContext)(Y),z=function(){return Object(n.useContext)(L)};function D(){return z().routerStore}var G=r(3),U=r(41),_=r(88),$=r.n(_),tt=(r(162),r(18)),et=r(44),rt=r.n(et),nt=r(6),at=r.n(nt),ot=r(89),ct=r.n(ot),ut=r(90),it=r.n(ut),st=Object(u.b)((function(){var t=D().history,e=Object(n.useState)(!1),r=Object(G.a)(e,2),o=r[0],c=r[1],u=Object(n.useState)(0),i=Object(G.a)(u,2),s=i[0],p=i[1],l=Object(n.useState)(null),f=Object(G.a)(l,2),b=f[0],d=f[1],m=Object(n.useState)(null),v=Object(G.a)(m,2),h=v[0],O=v[1],y=Object(n.useState)(null),w=Object(G.a)(y,2),E=w[0],S=w[1],k=Object(n.useState)(null),C=Object(G.a)(k,2),Z=C[0],x=C[1],I=Object(n.useState)(null),M=Object(G.a)(I,2),T=M[0],A=M[1],F=Object(n.useState)(0),W=Object(G.a)(F,2),P=W[0],V=W[1],R=Object(n.useState)(0),B=Object(G.a)(R,2),K=B[0],Q=B[1],X=Object(n.useState)(0),q=Object(G.a)(X,2),H=q[0],J=q[1],N=Object(n.useState)(0),Y=Object(G.a)(N,2),L=Y[0],z=Y[1],_=Object(n.useState)(0),et=Object(G.a)(_,2),nt=et[0],ot=et[1],ut=Object(n.useState)(!1),st=Object(G.a)(ut,2),pt=st[0],lt=st[1],ft=Object(n.useState)(!1),bt=Object(G.a)(ft,2),dt=bt[0],mt=(bt[1],Object(n.useState)(!1)),vt=Object(G.a)(mt,2),ht=vt[0],Ot=(vt[1],Object(n.useState)(5)),jt=Object(G.a)(Ot,2),gt=jt[0],yt=jt[1],wt=Object(n.useState)(0),Et=Object(G.a)(wt,2),St=Et[0],kt=Et[1],Ct=Object(n.useState)(-1),Zt=Object(G.a)(Ct,2),xt=Zt[0],It=Zt[1],Mt=Object(n.useState)(-1),Tt=Object(G.a)(Mt,2),At=Tt[0],Ft=Tt[1],Wt=Object(n.useState)(!1),Pt=Object(G.a)(Wt,2),Vt=Pt[0],Rt=Pt[1],Bt=Object(n.useState)(-1),Kt=Object(G.a)(Bt,2),Qt=Kt[0],Xt=Kt[1],qt=Object(n.useState)(-1),Ht=Object(G.a)(qt,2),Jt=Ht[0],Nt=Ht[1],Yt=Object(n.useState)(-1),Lt=Object(G.a)(Yt,2),zt=Lt[0],Dt=Lt[1],Gt=Object(n.useState)(-1),Ut=Object(G.a)(Gt,2),_t=Ut[0],$t=Ut[1],te=Object(n.useState)(-1),ee=Object(G.a)(te,2),re=ee[0],ne=ee[1],ae=Object(n.useState)(-1),oe=Object(G.a)(ae,2),ce=oe[0],ue=oe[1],ie=Object(n.useState)(-1),se=Object(G.a)(ie,2),pe=se[0],le=se[1],fe=Object(n.useState)(-1),be=Object(G.a)(fe,2),de=be[0],me=be[1],ve=Object(n.useState)({x:500,y:0}),he=Object(G.a)(ve,2),Oe=he[0],je=he[1],ge=[100,150,200,250,300,300,450,550,600,700,750,800],ye=[at.a,at.a,at.a,at.a,at.a,at.a,at.a],we=[15,10,10,25,5,5,20],Ee=[{left:"15%",top:"74%",height:"8%",width:"70%"}],Se=function(){var e=Object(g.a)(j.a.mark((function e(r,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=n,e.next=0===e.t0?3:5;break;case 3:return t.push("/game/start"),e.abrupt("break",5);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),ke=a.a.useMemo((function(){return a.a.createElement(U.ImageMap,{className:"usage-map",src:rt.a,map:Ee,onMapClick:Se})}),[Ee,rt.a]);return Object(n.useEffect)((function(){var t=setInterval((function(){var t=Oe.x;if(b&&"function"===typeof b.getBoundingClientRect&&Vt){var e=b.getBoundingClientRect().top,r=ge[xt];e>=1300&&It(-1),e>=1080&&t+180>=r&&t<=r&&(It(-1),c(!0),d(null),p(s+P),Object(tt.setTimeout)((function(){c(!1)}),500))}}),10);return function(){return clearInterval(t)}}),[Oe,b,s,P]),Object(n.useEffect)((function(){var t=setInterval((function(){var t=Oe.x;if(h&&"function"===typeof h.getBoundingClientRect&&Vt){var e=ge[Qt],r=h.getBoundingClientRect().top;r>=1300&&Xt(-1),r>=1080&&t+180>=e&&t<=e&&(Xt(-1),c(!0),O(null),p(s+K),Object(tt.setTimeout)((function(){c(!1)}),500))}}),10);return function(){return clearInterval(t)}}),[Oe,s,h,K]),Object(n.useEffect)((function(){var t=setInterval((function(){var t=Oe.x;if(E&&"function"===typeof E.getBoundingClientRect&&Vt){var e=ge[zt],r=E.getBoundingClientRect().top;r>=1300&&Dt(-1),r>=1080&&t+180>=e&&t<=e&&(Dt(-1),c(!0),S(null),p(s+H),Object(tt.setTimeout)((function(){c(!1)}),500))}}),10);return function(){return clearInterval(t)}}),[Oe,s,E,H]),Object(n.useEffect)((function(){var t=setInterval((function(){var t=Oe.x;if(Z&&"function"===typeof Z.getBoundingClientRect&&Vt){var e=ge[re],r=Z.getBoundingClientRect().top;r>=1300&&ne(-1),r>=1080&&t+180>=e&&t<=e&&(ne(-1),c(!0),x(null),p(s+L),Object(tt.setTimeout)((function(){c(!1)}),500))}}),10);return function(){return clearInterval(t)}}),[Oe,s,Z,L]),Object(n.useEffect)((function(){var t=setInterval((function(){var t=Oe.x;if(T&&"function"===typeof T.getBoundingClientRect&&Vt){var e=ge[pe],r=T.getBoundingClientRect().top;r>=1300&&le(-1),r>=1080&&t+180>=e&&t<=e&&(le(-1),c(!0),A(null),p(s+nt),Object(tt.setTimeout)((function(){c(!1)}),500))}}),10);return function(){return clearInterval(t)}}),[Oe,s,T,nt]),Object(n.useEffect)((function(){var t=Object(tt.setTimeout)((function(){0===gt?Rt(!0):yt(gt-1)}),1e3);return function(){return clearTimeout(t)}}),[gt]),Object(n.useEffect)((function(){var e=Object(tt.setTimeout)(Object(g.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Vt&&(30===St&&(Rt(!1),r="score","object"===typeof(n=s)&&(n=JSON.stringify(n)),localStorage.setItem(r,n),t.push("/game/result")),kt(St+1));case 1:case"end":return e.stop()}var r,n}),e)}))),1e3);return function(){return clearTimeout(e)}}),[Vt,St,s]),Object(n.useEffect)((function(){var t=[0,1,2,3],e=Math.floor(6*Math.random()),r=Math.floor(4*Math.random());Vt&&!pt&&(It(t[r]),Ft(e),lt(!0),V(we[e]));var n=setInterval((function(){if(Vt){var e=Math.floor(6*Math.random()),r=Math.floor(4*Math.random());It(t[r]),Ft(e),V(we[e])}}),1700);return function(){return clearInterval(n)}}),[Vt,pt,P]),Object(n.useEffect)((function(){var t=[4,5,6],e=setInterval((function(){if(Vt){var e=Math.floor(6*Math.random()),r=Math.floor(4*Math.random());Xt(t[r]),Nt(e),Q(we[e])}}),1500);return function(){return clearInterval(e)}}),[Vt,dt,K]),Object(n.useEffect)((function(){var t=[7,8,9],e=setInterval((function(){if(Vt){var e=Math.floor(6*Math.random()),r=Math.floor(3*Math.random());Dt(t[r]),$t(e),J(we[e])}}),1900);return function(){return clearInterval(e)}}),[Vt,ht,H]),Object(n.useEffect)((function(){var t=[10,11],e=setInterval((function(){if(Vt){var e=Math.floor(6*Math.random()),r=Math.floor(3*Math.random());ne(t[r]),ue(e),z(we[e])}}),2100);return function(){return clearInterval(e)}}),[Vt,L]),Object(n.useEffect)((function(){var t=setInterval((function(){if(Vt){var t=Math.floor(6*Math.random());le(12),me(t),ot(we[t])}}),2e3);return function(){return clearInterval(t)}}),[Vt,nt]),a.a.createElement("div",{className:"main_wrapper"},a.a.createElement("div",{className:"landing"},a.a.createElement("div",{className:"step step_0",style:{background:"url(".concat(rt.a,") left top no-repeat")}},a.a.createElement("div",{className:"content"},ke,Vt&&a.a.createElement("div",{style:{position:"absolute",top:"14%",width:"100%",height:"10%",fontSize:"6em",fontWeight:1e3,color:"#FFE14C",left:"20%"}},s),!Vt&&a.a.createElement("div",{style:{position:"absolute",top:"25%",width:"100%",height:"10%",display:"flex",justifyContent:"center",fontSize:"10em",fontWeight:1e3,color:"#FFE14C"}},gt),a.a.createElement("div",{style:{position:"absolute",width:"100%",top:"0%",height:"85%"}},ge.map((function(t,e){return ye.map((function(r,n){var o="hide",c=!1,u=!1,i=!1,s=!1,p=!1;return Vt&&(xt===e&&At===n&&(o="move",c=!0),Qt===e&&Jt===n&&(o="move faster",u=!0),zt===e&&_t===n&&(o="move slow",i=!0),re===e&&ce===n&&(o="move slow2",s=!0),pe===e&&de===n&&(o="move slow3",p=!0)),a.a.createElement("img",{ref:function(t){c&&d(t),u&&O(t),i&&S(t),s&&x(t),p&&A(t)},className:o,style:{width:"20%",height:"15%",position:"absolute",top:0,left:t},src:"".concat(r)})}))})),a.a.createElement($.a,{defaultPosition:{x:330,y:0},axis:"x",onDrag:function(t,e){var r=e.lastX;je({x:r<-100?-100:r>800?800:r,y:0})},disabled:!Vt},a.a.createElement("div",{style:{width:"40%",position:"absolute",bottom:0,transform:"translateX(".concat(Oe.x,"px) translateY(").concat(Oe.y,"px)")}},a.a.createElement("img",{src:"".concat(ct.a),style:{position:"absolute",left:-50,top:"2%",display:o?"block":"none"}}),a.a.createElement("img",{src:"".concat(it.a)}))),a.a.createElement("div",{style:{width:"100%",position:"absolute",top:"18.5%",left:"84%",fontSize:"4em",fontWeight:800,color:"#FFE14C"}},a.a.createElement("p",null,30-St)))))))})),pt=r(45),lt=r.n(pt),ft=Object(u.b)((function(){var t=D().history,e=Object(n.useState)("Loading"),r=Object(G.a)(e,2),o=r[0],c=r[1],u=[{left:"15%",top:"74%",height:"8%",width:"65%"}],i=function(){var e=Object(g.a)(j.a.mark((function e(r,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=n,e.next=0===e.t0?3:5;break;case 3:return t.push("/"),e.abrupt("break",5);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),s=a.a.useMemo((function(){return a.a.createElement(U.ImageMap,{className:"usage-map",src:lt.a,map:u,onMapClick:i})}),[u,lt.a]);return Object(n.useEffect)((function(){setTimeout(Object(g.a)(j.a.mark((function t(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=localStorage.getItem("score"),c(parseInt(e));case 2:case"end":return t.stop()}}),t)}))),1e3)}),[]),a.a.createElement("div",{className:"main_wrapper"},a.a.createElement("div",{className:"landing"},a.a.createElement("div",{className:"step step_0",style:{background:"url(".concat(lt.a,") left top no-repeat")}},a.a.createElement("div",{className:"content"},s,"string"===typeof o?a.a.createElement("div",{style:{position:"absolute",top:"39%",width:"100%",height:"10%",fontSize:"8em",left:"50%",fontWeight:1e3,color:"#FFE14C"}},o):a.a.createElement("div",{style:{position:"absolute",top:"37%",width:"100%",height:"10%",fontSize:"13em",left:"50%",fontWeight:1e3,color:"#FFE14C"}},o)))))}));function bt(){return n.createElement(i.c,{history:v},n.createElement(i.d,null,n.createElement(i.b,{path:"/",exact:!0,component:st}),n.createElement(i.b,{path:"/game/result",exact:!0,component:ft}),n.createElement(i.b,{path:"*"},n.createElement(i.a,{from:"/",to:"/"}))))}var dt=function(){return a.a.createElement(u.a,Y,a.a.createElement(L.Provider,{value:Y},a.a.createElement(bt,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(dt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},44:function(t,e,r){t.exports=r.p+"static/media/SC_game_catchstar-03-min.7f2ccb9a.png"},45:function(t,e,r){t.exports=r.p+"static/media/SC_game_catchstar-04-min.69d925d6.png"},6:function(t,e,r){t.exports=r.p+"static/media/SC_game_catchstar-05-min.9597e80e.png"},89:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALYAAABHCAMAAACd4E2KAAAACXBIWXMAAAsSAAALEgHS3X78AAAC61BMVEVHcEz///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8tP2z///////////9RYIX///8bL1////9PXoT///////////////////////8dMWEwQW7///////87THb///////8qPWpNXYMaLl8oO2n///////81RnE7THb///8nOmhRX4XY2+T///9WZYn///8wQm7///////9qd5ZaaIxmc5T///8sPmv///8mOGf///8mOGeJk6zW2uNBUXoiNWR5hKEhNGOkrL9cao2FkKpzf50+T3huepmQmbFCUntxfpw/UHk0RXFMW4EvQG1UY4dJWH////9wfJtmc5RhbpBJWYCHkau7wdBseZiPmLB1gZ49TXe9w9FHVn43SXOnrsFKWYC4vs12gp/JzdlWZYlda43///++xNL///+zucpBUXpfbZCcpLlwfZu0u8suQG1+iaXe4ejh5OqXoLZVY4hkcpPc3+cgM2NgbZDS1t9ib5H///////91gZ+ss8V5haHn6e7Fytb///+ss8Xp6+9+iqU2R3KEjqnT1+CMlq6fp7tJWH9+iaSbo7mXoLbS1t88THaxuMjc3+ass8WqssQ4SXTb3+Z4g6A3SHOVnrUtP2zZ3ORndJW5v86Yobe1vMvb3uapsMKBjKeutcbV2OHn6e7///////+4vs01RnHq7PAwMRv////t//83EXyGPnM8//v/V1QVKVv/4UxQV1eKhVTFs1CnnFKZkVMkNVrTv0/iyk5BTFjw1k1tblUyQFl7elReY1a2qFEuDW+zAAAA4XRSTlMABQ0QBwMKAQQCBggTCxYeKhkJLgw7NiIoSTARHBopJRcdGCMsP0M9DxI1DiEyS1I0QE8VGzpHFEY4ICZERVgvTdUkOY6sU/eLqlSuW0pX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"},90:function(t,e,r){t.exports=r.p+"static/media/SC_game_catchstar-06-min.2a30c9ae.png"},97:function(t,e,r){t.exports=r(166)}},[[97,1,2]]]);
//# sourceMappingURL=main.6e42f2dc.chunk.js.map