(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4488],{4215:function(e,t,a){!function(e){e.defineLocale("id",{months:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),weekdays:"Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),weekdaysShort:"Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|siang|sore|malam/,meridiemHour:function(e,t){return(12===e&&(e=0),"pagi"===t)?e:"siang"===t?e>=11?e:e+12:"sore"===t||"malam"===t?e+12:void 0},meridiem:function(e,t,a){return e<11?"pagi":e<15?"siang":e<19?"sore":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Besok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kemarin pukul] LT",lastWeek:"dddd [lalu pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lalu",s:"beberapa detik",ss:"%d detik",m:"semenit",mm:"%d menit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:0,doy:6}})}(a(5326))},404:function(e,t,a){Promise.resolve().then(a.bind(a,5579))},5579:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return k}});var s=a(9268),r=a(6006),i=a(593),o=a(5437),n=a(9639),l=a(2561),d=a(4475),u=a(3415),c=a(4406);let p=(0,l.Ue)((0,d.mW)((e,t)=>({dtJenis:[],showJenis:[],setJenis:async t=>{let{page:a=1,limit:s=10,jenis_id:r,search:i}=t;try{let t=await c.Z.getState().setToken(),o=await (0,u.Sj)({method:"get",url:"/tata_usaha/jenis",headers:{Authorization:"Bearer ".concat(t)},params:{limit:s,page:a,search:i,jenis_id:r}});return e(e=>({...e,dtJenis:o.data.data})),{status:"berhasil",data:o.data}}catch(e){var o;return{status:"error",error:null===(o=e.response)||void 0===o?void 0:o.data}}},setShowJenis:async t=>{let{jenis_id:a}=t;try{let t=await c.Z.getState().setToken(),s=await (0,u.Sj)({method:"get",url:"/tata_usaha/jenis/".concat(a),headers:{Authorization:"Bearer ".concat(t)}});return e(e=>({...e,showJenis:s.data.data})),{status:"berhasil",data:s.data}}catch(e){var s;return{status:"error",error:null===(s=e.response)||void 0===s?void 0:s.data}}},addData:async t=>{try{let a=await c.Z.getState().setToken(),s=await (0,u.Sj)({method:"post",url:"/tata_usaha/jenis",headers:{Authorization:"Bearer ".concat(a)},data:t});return e(e=>({dtJenis:{last_page:e.dtJenis.last_page,current_page:e.dtJenis.current_page,data:[s.data.data,...e.dtJenis.data]}})),{status:"berhasil tambah",data:s.data}}catch(e){return{status:"error",data:e.response.data}}},removeData:async t=>{try{let a=await c.Z.getState().setToken(),s=await (0,u.Sj)({method:"delete",url:"/tata_usaha/jenis/".concat(t),headers:{Authorization:"Bearer ".concat(a)}});return e(e=>({dtJenis:{last_page:e.dtJenis.last_page,current_page:e.dtJenis.current_page,data:e.dtJenis.data.filter(e=>e.id!==t)}})),{status:"berhasil hapus",data:s.data}}catch(e){return{status:"error",data:e.response.data}}},updateData:async(t,a)=>{try{let s=await c.Z.getState().setToken(),r=await (0,u.Sj)({method:"PUT",url:"/tata_usaha/jenis/".concat(t),headers:{Authorization:"Bearer ".concat(s)},data:a});return e(e=>({dtJenis:{last_page:e.dtJenis.last_page,current_page:e.dtJenis.current_page,data:e.dtJenis.data.map(e=>e.id===t?{...e,...r.data.data}:e)}})),{status:"berhasil update",data:r.data}}catch(e){return{status:"error",data:e.response.data}}}})));var m=e=>{let{setDelete:t,setEdit:a,search:l}=e,{setJenis:d,dtJenis:u}=p(),[c,m]=(0,r.useState)(1),[h,f]=(0,r.useState)(10),[g,y]=(0,r.useState)(!0),b=async()=>{await d({page:c,limit:h,search:l}),y(!1)};return(0,r.useEffect)(()=>(b(),()=>{}),[c,h]),(0,r.useEffect)(()=>{m(1),b()},[l]),(0,s.jsx)("div",{className:"flex-1 flex-col max-w-full h-full overflow-auto",children:g?(0,s.jsx)(i.Z,{}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"",children:(0,s.jsx)(n.Z,{headTable:["No","Jenis Surat","Aksi"],tableBodies:["nama"],dataTable:u.data,page:c,limit:h,setEdit:a,setDelete:t,ubah:!0,hapus:!0})}),(null==u?void 0:u.last_page)>1&&(0,s.jsx)("div",{className:"mt-4",children:(0,s.jsx)(o.Z,{currentPage:null==u?void 0:u.current_page,totalPages:null==u?void 0:u.last_page,setPage:m})})]})})},h=a(366),f=a(2985),g=a(7808),y=a(9442),b=a(9700);a(6760);var x=e=>{let{register:t,errors:a,control:r,dtEdit:i,watch:o,setValue:n,showModal:l}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(f.Z,{label:"Jenis Surat",name:"nama",register:t,required:!0,minLength:3,errors:a.nama,addClass:"col-span-4"})})},v=e=>{let{showModal:t,setShowModal:a,dtEdit:i}=e,{addData:o,updateData:n}=p(),{register:l,handleSubmit:d,setValue:u,control:c,formState:{errors:m},watch:v}=(0,b.cI)(),_=()=>{u("id",""),u("nama","")};(0,r.useEffect)(()=>{i?(u("id",i.id),u("nama",i.nama)):_()},[t,i]);let w=async e=>{if(console.log({row:e}),i){let{data:t}=await n(i.id,e);(0,y.Z)({event:t}),a(!1)}else{let{data:t}=await o(e);console.log({data:t}),(0,y.Z)({event:t}),(null==t?void 0:t.type)!=="success"||_()}};return(0,s.jsx)(g.Z,{title:"Form Jenis Surat",showModal:t,setShowModal:a,children:(0,s.jsxs)("form",{onSubmit:d(w),children:[(0,s.jsx)(f.Z,{name:"id",register:l,type:"hidden"}),(0,s.jsx)("div",{className:"grid grid-cols-4 gap-2 mb-4",children:(0,s.jsx)(x,{register:l,errors:m,dtEdit:i,control:c,watch:v,setValue:u,showModal:t})}),(0,s.jsx)("div",{children:(0,s.jsx)(h.Z,{text:"Simpan",onClick:d(w)})})]})})},_=a(686),w=a(8919),j=a(8350),k=()=>{let{removeData:e}=p(),[t,a]=(0,r.useState)(!1),[i,o]=(0,r.useState)(!1),[n,l]=(0,r.useState)(),[d,u]=(0,r.useState)(),[c,f]=(0,r.useState)(""),g=async t=>{let{id:a,isDelete:s}=t;if(l(a),s){let{data:t}=await e(n);(0,y.Z)({event:t}),o(!1)}else o(!0)};return(0,s.jsxs)("div",{className:"flex flex-col h-full",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)(w.x7,{}),(0,s.jsx)(v,{dtEdit:d,showModal:t,setShowModal:a}),(0,s.jsx)(_.Z,{showDel:i,setShowDel:o,setDelete:g}),(0,s.jsxs)("div",{className:"mb-4 flex justify-between",children:[(0,s.jsx)("p",{children:"Silahkan Mengolah data Jenis TataUsaha"}),(0,s.jsx)("div",{children:(0,s.jsx)(h.Z,{text:"Tambah Jenis",onClick:()=>{a(!0),u(null)}})})]}),(0,s.jsx)(j.Z,{placeholder:"Cari Jenis",onChange:e=>f(e)})]}),(0,s.jsx)(m,{setDelete:g,setEdit:e=>{a(!0),u(e)},search:c})]})}},6760:function(){},8919:function(e,t,a){"use strict";let s,r;a.d(t,{x7:function(){return er},ZP:function(){return ei}});var i,o=a(6006);let n={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||n,d=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,u=/\/\*[^]*?\*\/|  +/g,c=/\n+/g,p=(e,t)=>{let a="",s="",r="";for(let i in e){let o=e[i];"@"==i[0]?"i"==i[1]?a=i+" "+o+";":s+="f"==i[1]?p(o,i):i+"{"+p(o,"k"==i[1]?"":t)+"}":"object"==typeof o?s+=p(o,t?t.replace(/([^,])+/g,e=>i.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=o&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=p.p?p.p(i,o):i+":"+o+";")}return a+(t&&r?t+"{"+r+"}":r)+s},m={},h=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+h(e[a]);return t}return e},f=(e,t,a,s,r)=>{var i;let o=h(e),n=m[o]||(m[o]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(o));if(!m[n]){let t=o!==e?e:(e=>{let t,a,s=[{}];for(;t=d.exec(e.replace(u,""));)t[4]?s.shift():t[3]?(a=t[3].replace(c," ").trim(),s.unshift(s[0][a]=s[0][a]||{})):s[0][t[1]]=t[2].replace(c," ").trim();return s[0]})(e);m[n]=p(r?{["@keyframes "+n]:t}:t,a?"":"."+n)}let l=a&&m.g?m.g:null;return a&&(m.g=m[n]),i=m[n],l?t.data=t.data.replace(l,i):-1===t.data.indexOf(i)&&(t.data=s?i+t.data:t.data+i),n},g=(e,t,a)=>e.reduce((e,s,r)=>{let i=t[r];if(i&&i.call){let e=i(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":p(e,""):!1===e?"":e}return e+s+(null==i?"":i)},"");function y(e){let t=this||{},a=e.call?e(t.p):e;return f(a.unshift?a.raw?g(a,[].slice.call(arguments,1),t.p):a.reduce((e,a)=>Object.assign(e,a&&a.call?a(t.p):a),{}):a,l(t.target),t.g,t.o,t.k)}y.bind({g:1});let b,x,v,_=y.bind({k:1});function w(e,t){let a=this||{};return function(){let s=arguments;function r(i,o){let n=Object.assign({},i),l=n.className||r.className;a.p=Object.assign({theme:x&&x()},n),a.o=/ *go\d+/.test(l),n.className=y.apply(a,s)+(l?" "+l:""),t&&(n.ref=o);let d=e;return e[0]&&(d=n.as||e,delete n.as),v&&d[0]&&v(n),b(d,n)}return t?t(r):r}}var j=e=>"function"==typeof e,k=(e,t)=>j(e)?e(t):e,S=(s=0,()=>(++s).toString()),M=()=>{if(void 0===r&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");r=!e||e.matches}return r},E=new Map,J=e=>{if(E.has(e))return;let t=setTimeout(()=>{E.delete(e),Z({type:4,toastId:e})},1e3);E.set(e,t)},D=e=>{let t=E.get(e);t&&clearTimeout(t)},L=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&D(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return e.toasts.find(e=>e.id===a.id)?L(e,{type:1,toast:a}):L(e,{type:0,toast:a});case 3:let{toastId:s}=t;return s?J(s):e.toasts.forEach(e=>{J(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let r=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+r}))}}},T=[],N={toasts:[],pausedAt:void 0},Z=e=>{N=L(N,e),T.forEach(e=>{e(N)})},A={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},$=(e={})=>{let[t,a]=(0,o.useState)(N);(0,o.useEffect)(()=>(T.push(a),()=>{let e=T.indexOf(a);e>-1&&T.splice(e,1)}),[t]);let s=t.toasts.map(t=>{var a,s;return{...e,...e[t.type],...t,duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||A[t.type],style:{...e.style,...null==(s=e[t.type])?void 0:s.style,...t.style}}});return{...t,toasts:s}},C=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||S()}),O=e=>(t,a)=>{let s=C(t,e,a);return Z({type:2,toast:s}),s.id},Y=(e,t)=>O("blank")(e,t);Y.error=O("error"),Y.success=O("success"),Y.loading=O("loading"),Y.custom=O("custom"),Y.dismiss=e=>{Z({type:3,toastId:e})},Y.remove=e=>Z({type:4,toastId:e}),Y.promise=(e,t,a)=>{let s=Y.loading(t.loading,{...a,...null==a?void 0:a.loading});return e.then(e=>(Y.success(k(t.success,e),{id:s,...a,...null==a?void 0:a.success}),e)).catch(e=>{Y.error(k(t.error,e),{id:s,...a,...null==a?void 0:a.error})}),e};var z=(e,t)=>{Z({type:1,toast:{id:e,height:t}})},H=()=>{Z({type:5,time:Date.now()})},P=e=>{let{toasts:t,pausedAt:a}=$(e);(0,o.useEffect)(()=>{if(a)return;let e=Date.now(),s=t.map(t=>{if(t.duration===1/0)return;let a=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(a<0){t.visible&&Y.dismiss(t.id);return}return setTimeout(()=>Y.dismiss(t.id),a)});return()=>{s.forEach(e=>e&&clearTimeout(e))}},[t,a]);let s=(0,o.useCallback)(()=>{a&&Z({type:6,time:Date.now()})},[a]),r=(0,o.useCallback)((e,a)=>{let{reverseOrder:s=!1,gutter:r=8,defaultPosition:i}=a||{},o=t.filter(t=>(t.position||i)===(e.position||i)&&t.height),n=o.findIndex(t=>t.id===e.id),l=o.filter((e,t)=>t<n&&e.visible).length;return o.filter(e=>e.visible).slice(...s?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+r,0)},[t]);return{toasts:t,handlers:{updateHeight:z,startPause:H,endPause:s,calculateOffset:r}}},F=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${_`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${_`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${_`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,I=w("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${_`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,B=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${_`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${_`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,U=w("div")`
  position: absolute;
`,K=w("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,R=w("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${_`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,W=({toast:e})=>{let{icon:t,type:a,iconTheme:s}=e;return void 0!==t?"string"==typeof t?o.createElement(R,null,t):t:"blank"===a?null:o.createElement(K,null,o.createElement(I,{...s}),"loading"!==a&&o.createElement(U,null,"error"===a?o.createElement(F,{...s}):o.createElement(B,{...s})))},q=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,V=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,G=w("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Q=w("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,X=(e,t)=>{let a=e.includes("top")?1:-1,[s,r]=M()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[q(a),V(a)];return{animation:t?`${_(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${_(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ee=o.memo(({toast:e,position:t,style:a,children:s})=>{let r=e.height?X(e.position||t||"top-center",e.visible):{opacity:0},i=o.createElement(W,{toast:e}),n=o.createElement(Q,{...e.ariaProps},k(e.message,e));return o.createElement(G,{className:e.className,style:{...r,...a,...e.style}},"function"==typeof s?s({icon:i,message:n}):o.createElement(o.Fragment,null,i,n))});i=o.createElement,p.p=void 0,b=i,x=void 0,v=void 0;var et=({id:e,className:t,style:a,onHeightUpdate:s,children:r})=>{let i=o.useCallback(t=>{if(t){let a=()=>{s(e,t.getBoundingClientRect().height)};a(),new MutationObserver(a).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,s]);return o.createElement("div",{ref:i,className:t,style:a},r)},ea=(e,t)=>{let a=e.includes("top"),s=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:M()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...a?{top:0}:{bottom:0},...s}},es=y`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,er=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:s,children:r,containerStyle:i,containerClassName:n})=>{let{toasts:l,handlers:d}=P(a);return o.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...i},className:n,onMouseEnter:d.startPause,onMouseLeave:d.endPause},l.map(a=>{let i=a.position||t,n=ea(i,d.calculateOffset(a,{reverseOrder:e,gutter:s,defaultPosition:t}));return o.createElement(et,{id:a.id,key:a.id,onHeightUpdate:d.updateHeight,className:a.visible?es:"",style:n},"custom"===a.type?k(a.message,a):r?r(a):o.createElement(ee,{toast:a,position:i}))}))},ei=Y}},function(e){e.O(0,[6680,4550,635,9218,3088,3729,9253,7698,1744],function(){return e(e.s=404)}),_N_E=e.O()}]);