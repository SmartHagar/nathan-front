"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9700],{9700:function(e,t,r){r.d(t,{KN:function(){return B},Qr:function(){return j},U2:function(){return p},cI:function(){return e_},t8:function(){return U}});var s=r(6006),a=e=>"checkbox"===e.type,i=e=>e instanceof Date,l=e=>null==e;let u=e=>"object"==typeof e;var n=e=>!l(e)&&!Array.isArray(e)&&u(e)&&!i(e),o=e=>n(e)&&e.target?a(e.target)?e.target.checked:e.target.value:e,d=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,f=(e,t)=>e.has(d(t)),c=e=>{let t=e.constructor&&e.constructor.prototype;return n(t)&&t.hasOwnProperty("isPrototypeOf")},y="undefined"!=typeof window&&void 0!==window.HTMLElement&&"undefined"!=typeof document;function m(e){let t;let r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(!(y&&(e instanceof Blob||e instanceof FileList))&&(r||n(e))))return e;else if(t=r?[]:{},r||c(e))for(let r in e)e.hasOwnProperty(r)&&(t[r]=m(e[r]));else t=e;return t}var h=e=>Array.isArray(e)?e.filter(Boolean):[],v=e=>void 0===e,p=(e,t,r)=>{if(!t||!n(e))return r;let s=h(t.split(/[,[\].]+?/)).reduce((e,t)=>l(e)?e:e[t],e);return v(s)||s===e?v(e[t])?r:e[t]:s},g=e=>"boolean"==typeof e;let b={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},_={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},V={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},A=s.createContext(null),S=()=>s.useContext(A);var w=(e,t,r,s=!0)=>{let a={defaultValues:t._defaultValues};for(let i in e)Object.defineProperty(a,i,{get:()=>(t._proxyFormState[i]!==_.all&&(t._proxyFormState[i]=!s||_.all),r&&(r[i]=!0),e[i])});return a},F=e=>n(e)&&!Object.keys(e).length,x=(e,t,r,s)=>{r(e);let{name:a,...i}=e;return F(i)||Object.keys(i).length>=Object.keys(t).length||Object.keys(i).find(e=>t[e]===(!s||_.all))},k=e=>Array.isArray(e)?e:[e],D=(e,t,r)=>!e||!t||e===t||k(e).some(e=>e&&(r?e===t:e.startsWith(t)||t.startsWith(e)));function C(e){let t=s.useRef(e);t.current=e,s.useEffect(()=>{let r=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{r&&r.unsubscribe()}},[e.disabled])}var O=e=>"string"==typeof e,E=(e,t,r,s,a)=>O(e)?(s&&t.watch.add(e),p(r,e,a)):Array.isArray(e)?e.map(e=>(s&&t.watch.add(e),p(r,e))):(s&&(t.watchAll=!0),r),L=e=>/^\w*$/.test(e),T=e=>h(e.replace(/["|']|\]/g,"").split(/\.|\[/)),U=(e,t,r)=>{let s=-1,a=L(t)?[t]:T(t),i=a.length,l=i-1;for(;++s<i;){let t=a[s],i=r;if(s!==l){let r=e[t];i=n(r)||Array.isArray(r)?r:isNaN(+a[s+1])?{}:[]}e[t]=i,e=e[t]}return e};let j=e=>e.render(function(e){let t=S(),{name:r,disabled:a,control:i=t.control,shouldUnregister:l}=e,u=f(i._names.array,r),n=function(e){let t=S(),{control:r=t.control,name:a,defaultValue:i,disabled:l,exact:u}=e||{},n=s.useRef(a);n.current=a,C({disabled:l,subject:r._subjects.values,next:e=>{D(n.current,e.name,u)&&d(m(E(n.current,r._names,e.values||r._formValues,!1,i)))}});let[o,d]=s.useState(r._getWatch(a,i));return s.useEffect(()=>r._removeUnmounted()),o}({control:i,name:r,defaultValue:p(i._formValues,r,p(i._defaultValues,r,e.defaultValue)),exact:!0}),d=function(e){let t=S(),{control:r=t.control,disabled:a,name:i,exact:l}=e||{},[u,n]=s.useState(r._formState),o=s.useRef(!0),d=s.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),f=s.useRef(i);return f.current=i,C({disabled:a,next:e=>o.current&&D(f.current,e.name,l)&&x(e,d.current,r._updateFormState)&&n({...r._formState,...e}),subject:r._subjects.state}),s.useEffect(()=>(o.current=!0,d.current.isValid&&r._updateValid(!0),()=>{o.current=!1}),[r]),w(u,r,d.current,!1)}({control:i,name:r}),c=s.useRef(i.register(r,{...e.rules,value:n,...g(e.disabled)?{disabled:e.disabled}:{}}));return s.useEffect(()=>{let e=i._options.shouldUnregister||l,t=(e,t)=>{let r=p(i._fields,e);r&&(r._f.mount=t)};if(t(r,!0),e){let e=m(p(i._options.defaultValues,r));U(i._defaultValues,r,e),v(p(i._formValues,r))&&U(i._formValues,r,e)}return()=>{(u?e&&!i._state.action:e)?i.unregister(r):t(r,!1)}},[r,i,u,l]),s.useEffect(()=>{p(i._fields,r)&&i._updateDisabledField({disabled:a,fields:i._fields,name:r,value:p(i._fields,r)._f.value})},[a,r,i]),{field:{name:r,value:n,...g(a)||g(d.disabled)?{disabled:d.disabled||a}:{},onChange:s.useCallback(e=>c.current.onChange({target:{value:o(e),name:r},type:b.CHANGE}),[r]),onBlur:s.useCallback(()=>c.current.onBlur({target:{value:p(i._formValues,r),name:r},type:b.BLUR}),[r,i]),ref:e=>{let t=p(i._fields,r);t&&e&&(t._f.ref={focus:()=>e.focus(),select:()=>e.select(),setCustomValidity:t=>e.setCustomValidity(t),reportValidity:()=>e.reportValidity()})}},formState:d,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!p(d.errors,r)},isDirty:{enumerable:!0,get:()=>!!p(d.dirtyFields,r)},isTouched:{enumerable:!0,get:()=>!!p(d.touchedFields,r)},error:{enumerable:!0,get:()=>p(d.errors,r)}})}}(e));var B=(e,t,r,s,a)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[s]:a||!0}}:{},N=e=>({isOnSubmit:!e||e===_.onSubmit,isOnBlur:e===_.onBlur,isOnChange:e===_.onChange,isOnAll:e===_.all,isOnTouch:e===_.onTouched}),M=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length))));let R=(e,t,r,s)=>{for(let a of r||Object.keys(e)){let r=p(e,a);if(r){let{_f:e,...i}=r;if(e){if(e.refs&&e.refs[0]&&t(e.refs[0],a)&&!s||e.ref&&t(e.ref,e.name)&&!s)break;R(i,t)}else n(i)&&R(i,t)}}};var q=(e,t,r)=>{let s=h(p(e,r));return U(s,"root",t[r]),U(e,r,s),e},P=e=>"file"===e.type,H=e=>"function"==typeof e,I=e=>{if(!y)return!1;let t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},W=e=>O(e),$=e=>"radio"===e.type,G=e=>e instanceof RegExp;let K={value:!1,isValid:!1},Q={value:!0,isValid:!0};var z=e=>{if(Array.isArray(e)){if(e.length>1){let t=e.filter(e=>e&&e.checked&&!e.disabled).map(e=>e.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!v(e[0].attributes.value)?v(e[0].value)||""===e[0].value?Q:{value:e[0].value,isValid:!0}:Q:K}return K};let J={isValid:!1,value:null};var X=e=>Array.isArray(e)?e.reduce((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e,J):J;function Y(e,t,r="validate"){if(W(e)||Array.isArray(e)&&e.every(W)||g(e)&&!e)return{type:r,message:W(e)?e:"",ref:t}}var Z=e=>n(e)&&!G(e)?e:{value:e,message:""},ee=async(e,t,r,s,i)=>{let{ref:u,refs:o,required:d,maxLength:f,minLength:c,min:y,max:m,pattern:h,validate:b,name:_,valueAsNumber:A,mount:S,disabled:w}=e._f,x=p(t,_);if(!S||w)return{};let k=o?o[0]:u,D=e=>{s&&k.reportValidity&&(k.setCustomValidity(g(e)?"":e||""),k.reportValidity())},C={},E=$(u),L=a(u),T=(A||P(u))&&v(u.value)&&v(x)||I(u)&&""===u.value||""===x||Array.isArray(x)&&!x.length,U=B.bind(null,_,r,C),j=(e,t,r,s=V.maxLength,a=V.minLength)=>{let i=e?t:r;C[_]={type:e?s:a,message:i,ref:u,...U(e?s:a,i)}};if(i?!Array.isArray(x)||!x.length:d&&(!(E||L)&&(T||l(x))||g(x)&&!x||L&&!z(o).isValid||E&&!X(o).isValid)){let{value:e,message:t}=W(d)?{value:!!d,message:d}:Z(d);if(e&&(C[_]={type:V.required,message:t,ref:k,...U(V.required,t)},!r))return D(t),C}if(!T&&(!l(y)||!l(m))){let e,t;let s=Z(m),a=Z(y);if(l(x)||isNaN(x)){let r=u.valueAsDate||new Date(x),i=e=>new Date(new Date().toDateString()+" "+e),l="time"==u.type,n="week"==u.type;O(s.value)&&x&&(e=l?i(x)>i(s.value):n?x>s.value:r>new Date(s.value)),O(a.value)&&x&&(t=l?i(x)<i(a.value):n?x<a.value:r<new Date(a.value))}else{let r=u.valueAsNumber||(x?+x:x);l(s.value)||(e=r>s.value),l(a.value)||(t=r<a.value)}if((e||t)&&(j(!!e,s.message,a.message,V.max,V.min),!r))return D(C[_].message),C}if((f||c)&&!T&&(O(x)||i&&Array.isArray(x))){let e=Z(f),t=Z(c),s=!l(e.value)&&x.length>+e.value,a=!l(t.value)&&x.length<+t.value;if((s||a)&&(j(s,e.message,t.message),!r))return D(C[_].message),C}if(h&&!T&&O(x)){let{value:e,message:t}=Z(h);if(G(e)&&!x.match(e)&&(C[_]={type:V.pattern,message:t,ref:u,...U(V.pattern,t)},!r))return D(t),C}if(b){if(H(b)){let e=await b(x,t),s=Y(e,k);if(s&&(C[_]={...s,...U(V.validate,s.message)},!r))return D(s.message),C}else if(n(b)){let e={};for(let s in b){if(!F(e)&&!r)break;let a=Y(await b[s](x,t),k,s);a&&(e={...a,...U(s,a.message)},D(a.message),r&&(C[_]=e))}if(!F(e)&&(C[_]={ref:k,...e},!r))return C}}return D(!0),C};function et(e,t){let r=Array.isArray(t)?t:L(t)?[t]:T(t),s=1===r.length?e:function(e,t){let r=t.slice(0,-1).length,s=0;for(;s<r;)e=v(e)?s++:e[t[s++]];return e}(e,r),a=r.length-1,i=r[a];return s&&delete s[i],0!==a&&(n(s)&&F(s)||Array.isArray(s)&&function(e){for(let t in e)if(e.hasOwnProperty(t)&&!v(e[t]))return!1;return!0}(s))&&et(e,r.slice(0,-1)),e}var er=()=>{let e=[];return{get observers(){return e},next:t=>{for(let r of e)r.next&&r.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter(e=>e!==t)}}),unsubscribe:()=>{e=[]}}},es=e=>l(e)||!u(e);function ea(e,t){if(es(e)||es(t))return e===t;if(i(e)&&i(t))return e.getTime()===t.getTime();let r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(let a of r){let r=e[a];if(!s.includes(a))return!1;if("ref"!==a){let e=t[a];if(i(r)&&i(e)||n(r)&&n(e)||Array.isArray(r)&&Array.isArray(e)?!ea(r,e):r!==e)return!1}}return!0}var ei=e=>"select-multiple"===e.type,el=e=>$(e)||a(e),eu=e=>I(e)&&e.isConnected,en=e=>{for(let t in e)if(H(e[t]))return!0;return!1};function eo(e,t={}){let r=Array.isArray(e);if(n(e)||r)for(let r in e)Array.isArray(e[r])||n(e[r])&&!en(e[r])?(t[r]=Array.isArray(e[r])?[]:{},eo(e[r],t[r])):l(e[r])||(t[r]=!0);return t}var ed=(e,t)=>(function e(t,r,s){let a=Array.isArray(t);if(n(t)||a)for(let a in t)Array.isArray(t[a])||n(t[a])&&!en(t[a])?v(r)||es(s[a])?s[a]=Array.isArray(t[a])?eo(t[a],[]):{...eo(t[a])}:e(t[a],l(r)?{}:r[a],s[a]):s[a]=!ea(t[a],r[a]);return s})(e,t,eo(t)),ef=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:s})=>v(e)?e:t?""===e?NaN:e?+e:e:r&&O(e)?new Date(e):s?s(e):e;function ec(e){let t=e.ref;return(e.refs?e.refs.every(e=>e.disabled):t.disabled)?void 0:P(t)?t.files:$(t)?X(e.refs).value:ei(t)?[...t.selectedOptions].map(({value:e})=>e):a(t)?z(e.refs).value:ef(v(t.value)?e.ref.value:t.value,e)}var ey=(e,t,r,s)=>{let a={};for(let r of e){let e=p(t,r);e&&U(a,r,e._f)}return{criteriaMode:r,names:[...e],fields:a,shouldUseNativeValidation:s}},em=e=>v(e)?e:G(e)?e.source:n(e)?G(e.value)?e.value.source:e.value:e,eh=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function ev(e,t,r){let s=p(e,r);if(s||L(r))return{error:s,name:r};let a=r.split(".");for(;a.length;){let s=a.join("."),i=p(t,s),l=p(e,s);if(i&&!Array.isArray(i)&&r!==s)break;if(l&&l.type)return{name:s,error:l};a.pop()}return{name:r}}var ep=(e,t,r,s,a)=>!a.isOnAll&&(!r&&a.isOnTouch?!(t||e):(r?s.isOnBlur:a.isOnBlur)?!e:(r?!s.isOnChange:!a.isOnChange)||e),eg=(e,t)=>!h(p(e,t)).length&&et(e,t);let eb={mode:_.onSubmit,reValidateMode:_.onChange,shouldFocusError:!0};function e_(e={}){let t=s.useRef(),r=s.useRef(),[u,d]=s.useState({isDirty:!1,isValidating:!1,isLoading:H(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:e.errors||{},disabled:!1,defaultValues:H(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...function(e={},t){let r,s={...eb,...e},u={submitCount:0,isDirty:!1,isLoading:H(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:s.errors||{},disabled:!1},d={},c=(n(s.defaultValues)||n(s.values))&&m(s.defaultValues||s.values)||{},V=s.shouldUnregister?{}:m(c),A={action:!1,mount:!1,watch:!1},S={mount:new Set,unMount:new Set,array:new Set,watch:new Set},w=0,x={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},D={values:er(),array:er(),state:er()},C=e.resetOptions&&e.resetOptions.keepDirtyValues,L=N(s.mode),T=N(s.reValidateMode),j=s.criteriaMode===_.all,B=e=>t=>{clearTimeout(w),w=setTimeout(e,t)},W=async e=>{if(x.isValid||e){let e=s.resolver?F((await J()).errors):await Y(d,!0);e!==u.isValid&&D.state.next({isValid:e})}},$=e=>x.isValidating&&D.state.next({isValidating:e}),G=(e,t)=>{U(u.errors,e,t),D.state.next({errors:u.errors})},K=(e,t,r,s)=>{let a=p(d,e);if(a){let i=p(V,e,v(r)?p(c,e):r);v(i)||s&&s.defaultChecked||t?U(V,e,t?i:ec(a._f)):eo(e,i),A.mount&&W()}},Q=(e,t,r,s,a)=>{let i=!1,l=!1,n={name:e},o=!!(p(d,e)&&p(d,e)._f.disabled);if(!r||s){x.isDirty&&(l=u.isDirty,u.isDirty=n.isDirty=Z(),i=l!==n.isDirty);let r=o||ea(p(c,e),t);l=!!(!o&&p(u.dirtyFields,e)),r||o?et(u.dirtyFields,e):U(u.dirtyFields,e,!0),n.dirtyFields=u.dirtyFields,i=i||x.dirtyFields&&!r!==l}if(r){let t=p(u.touchedFields,e);t||(U(u.touchedFields,e,r),n.touchedFields=u.touchedFields,i=i||x.touchedFields&&t!==r)}return i&&a&&D.state.next(n),i?n:{}},z=(t,s,a,i)=>{let l=p(u.errors,t),n=x.isValid&&g(s)&&u.isValid!==s;if(e.delayError&&a?(r=B(()=>G(t,a)))(e.delayError):(clearTimeout(w),r=null,a?U(u.errors,t,a):et(u.errors,t)),(a?!ea(l,a):l)||!F(i)||n){let e={...i,...n&&g(s)?{isValid:s}:{},errors:u.errors,name:t};u={...u,...e},D.state.next(e)}$(!1)},J=async e=>s.resolver(V,s.context,ey(e||S.mount,d,s.criteriaMode,s.shouldUseNativeValidation)),X=async e=>{let{errors:t}=await J(e);if(e)for(let r of e){let e=p(t,r);e?U(u.errors,r,e):et(u.errors,r)}else u.errors=t;return t},Y=async(e,t,r={valid:!0})=>{for(let a in e){let i=e[a];if(i){let{_f:e,...a}=i;if(e){let a=S.array.has(e.name),l=await ee(i,V,j,s.shouldUseNativeValidation&&!t,a);if(l[e.name]&&(r.valid=!1,t))break;t||(p(l,e.name)?a?q(u.errors,l,e.name):U(u.errors,e.name,l[e.name]):et(u.errors,e.name))}a&&await Y(a,t,r)}}return r.valid},Z=(e,t)=>(e&&t&&U(V,e,t),!ea(eF(),c)),en=(e,t,r)=>E(e,S,{...A.mount?V:v(t)?c:O(e)?{[e]:t}:t},r,t),eo=(e,t,r={})=>{let s=p(d,e),i=t;if(s){let r=s._f;r&&(r.disabled||U(V,e,ef(t,r)),i=I(r.ref)&&l(t)?"":t,ei(r.ref)?[...r.ref.options].forEach(e=>e.selected=i.includes(e.value)):r.refs?a(r.ref)?r.refs.length>1?r.refs.forEach(e=>(!e.defaultChecked||!e.disabled)&&(e.checked=Array.isArray(i)?!!i.find(t=>t===e.value):i===e.value)):r.refs[0]&&(r.refs[0].checked=!!i):r.refs.forEach(e=>e.checked=e.value===i):P(r.ref)?r.ref.value="":(r.ref.value=i,r.ref.type||D.values.next({name:e,values:{...V}})))}(r.shouldDirty||r.shouldTouch)&&Q(e,i,r.shouldTouch,r.shouldDirty,!0),r.shouldValidate&&ew(e)},e_=(e,t,r)=>{for(let s in t){let a=t[s],l=`${e}.${s}`,u=p(d,l);!S.array.has(e)&&es(a)&&(!u||u._f)||i(a)?eo(l,a,r):e_(l,a,r)}},eV=(e,r,s={})=>{let a=p(d,e),i=S.array.has(e),n=m(r);U(V,e,n),i?(D.array.next({name:e,values:{...V}}),(x.isDirty||x.dirtyFields)&&s.shouldDirty&&D.state.next({name:e,dirtyFields:ed(c,V),isDirty:Z(e,n)})):!a||a._f||l(n)?eo(e,n,s):e_(e,n,s),M(e,S)&&D.state.next({...u}),D.values.next({name:e,values:{...V}}),A.mount||t()},eA=async e=>{let t=e.target,a=t.name,i=!0,l=p(d,a),n=e=>{i=Number.isNaN(e)||e===p(V,a,e)};if(l){let f,c;let y=t.type?ec(l._f):o(e),m=e.type===b.BLUR||e.type===b.FOCUS_OUT,h=!eh(l._f)&&!s.resolver&&!p(u.errors,a)&&!l._f.deps||ep(m,p(u.touchedFields,a),u.isSubmitted,T,L),v=M(a,S,m);U(V,a,y),m?(l._f.onBlur&&l._f.onBlur(e),r&&r(0)):l._f.onChange&&l._f.onChange(e);let g=Q(a,y,m,!1),_=!F(g)||v;if(m||D.values.next({name:a,type:e.type,values:{...V}}),h)return x.isValid&&W(),_&&D.state.next({name:a,...v?{}:g});if(!m&&v&&D.state.next({...u}),$(!0),s.resolver){let{errors:e}=await J([a]);if(n(y),i){let t=ev(u.errors,d,a),r=ev(e,d,t.name||a);f=r.error,a=r.name,c=F(e)}}else f=(await ee(l,V,j,s.shouldUseNativeValidation))[a],n(y),i&&(f?c=!1:x.isValid&&(c=await Y(d,!0)));i&&(l._f.deps&&ew(l._f.deps),z(a,c,f,g))}},eS=(e,t)=>{if(p(u.errors,t)&&e.focus)return e.focus(),1},ew=async(e,t={})=>{let r,a;let i=k(e);if($(!0),s.resolver){let t=await X(v(e)?e:i);r=F(t),a=e?!i.some(e=>p(t,e)):r}else e?((a=(await Promise.all(i.map(async e=>{let t=p(d,e);return await Y(t&&t._f?{[e]:t}:t)}))).every(Boolean))||u.isValid)&&W():a=r=await Y(d);return D.state.next({...!O(e)||x.isValid&&r!==u.isValid?{}:{name:e},...s.resolver||!e?{isValid:r}:{},errors:u.errors,isValidating:!1}),t.shouldFocus&&!a&&R(d,eS,e?i:S.mount),a},eF=e=>{let t={...c,...A.mount?V:{}};return v(e)?t:O(e)?p(t,e):e.map(e=>p(t,e))},ex=(e,t)=>({invalid:!!p((t||u).errors,e),isDirty:!!p((t||u).dirtyFields,e),isTouched:!!p((t||u).touchedFields,e),error:p((t||u).errors,e)}),ek=(e,t,r)=>{let s=(p(d,e,{_f:{}})._f||{}).ref;U(u.errors,e,{...t,ref:s}),D.state.next({name:e,errors:u.errors,isValid:!1}),r&&r.shouldFocus&&s&&s.focus&&s.focus()},eD=(e,t={})=>{for(let r of e?k(e):S.mount)S.mount.delete(r),S.array.delete(r),t.keepValue||(et(d,r),et(V,r)),t.keepError||et(u.errors,r),t.keepDirty||et(u.dirtyFields,r),t.keepTouched||et(u.touchedFields,r),s.shouldUnregister||t.keepDefaultValue||et(c,r);D.values.next({values:{...V}}),D.state.next({...u,...t.keepDirty?{isDirty:Z()}:{}}),t.keepIsValid||W()},eC=({disabled:e,name:t,field:r,fields:s,value:a})=>{if(g(e)){let i=e?void 0:v(a)?ec(r?r._f:p(s,t)._f):a;U(V,t,i),Q(t,i,!1,!1,!0)}},eO=(e,t={})=>{let r=p(d,e),a=g(t.disabled);return U(d,e,{...r||{},_f:{...r&&r._f?r._f:{ref:{name:e}},name:e,mount:!0,...t}}),S.mount.add(e),r?eC({field:r,disabled:t.disabled,name:e,value:t.value}):K(e,!0,t.value),{...a?{disabled:t.disabled}:{},...s.progressive?{required:!!t.required,min:em(t.min),max:em(t.max),minLength:em(t.minLength),maxLength:em(t.maxLength),pattern:em(t.pattern)}:{},name:e,onChange:eA,onBlur:eA,ref:a=>{if(a){eO(e,t),r=p(d,e);let s=v(a.value)&&a.querySelectorAll&&a.querySelectorAll("input,select,textarea")[0]||a,i=el(s),l=r._f.refs||[];(i?l.find(e=>e===s):s===r._f.ref)||(U(d,e,{_f:{...r._f,...i?{refs:[...l.filter(eu),s,...Array.isArray(p(c,e))?[{}]:[]],ref:{type:s.type,name:e}}:{ref:s}}}),K(e,!1,void 0,s))}else(r=p(d,e,{}))._f&&(r._f.mount=!1),(s.shouldUnregister||t.shouldUnregister)&&!(f(S.array,e)&&A.action)&&S.unMount.add(e)}}},eE=()=>s.shouldFocusError&&R(d,eS,S.mount),eL=(e,t)=>async r=>{r&&(r.preventDefault&&r.preventDefault(),r.persist&&r.persist());let a=m(V);if(D.state.next({isSubmitting:!0}),s.resolver){let{errors:e,values:t}=await J();u.errors=e,a=t}else await Y(d);et(u.errors,"root"),F(u.errors)?(D.state.next({errors:{}}),await e(a,r)):(t&&await t({...u.errors},r),eE(),setTimeout(eE)),D.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:F(u.errors),submitCount:u.submitCount+1,errors:u.errors})},eT=(r,s={})=>{let a=r?m(r):c,i=m(a),l=r&&!F(r)?i:c;if(s.keepDefaultValues||(c=a),!s.keepValues){if(s.keepDirtyValues||C)for(let e of S.mount)p(u.dirtyFields,e)?U(l,e,p(V,e)):eV(e,p(l,e));else{if(y&&v(r))for(let e of S.mount){let t=p(d,e);if(t&&t._f){let e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;if(I(e)){let t=e.closest("form");if(t){t.reset();break}}}}d={}}V=e.shouldUnregister?s.keepDefaultValues?m(c):{}:m(l),D.array.next({values:{...l}}),D.values.next({values:{...l}})}S={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},A.mount||t(),A.mount=!x.isValid||!!s.keepIsValid,A.watch=!!e.shouldUnregister,D.state.next({submitCount:s.keepSubmitCount?u.submitCount:0,isDirty:s.keepDirty?u.isDirty:!!(s.keepDefaultValues&&!ea(r,c)),isSubmitted:!!s.keepIsSubmitted&&u.isSubmitted,dirtyFields:s.keepDirtyValues?u.dirtyFields:s.keepDefaultValues&&r?ed(c,r):{},touchedFields:s.keepTouched?u.touchedFields:{},errors:s.keepErrors?u.errors:{},isSubmitSuccessful:!!s.keepIsSubmitSuccessful&&u.isSubmitSuccessful,isSubmitting:!1})},eU=(e,t)=>eT(H(e)?e(V):e,t);return{control:{register:eO,unregister:eD,getFieldState:ex,handleSubmit:eL,setError:ek,_executeSchema:J,_getWatch:en,_getDirty:Z,_updateValid:W,_removeUnmounted:()=>{for(let e of S.unMount){let t=p(d,e);t&&(t._f.refs?t._f.refs.every(e=>!eu(e)):!eu(t._f.ref))&&eD(e)}S.unMount=new Set},_updateFieldArray:(e,t=[],r,s,a=!0,i=!0)=>{if(s&&r){if(A.action=!0,i&&Array.isArray(p(d,e))){let t=r(p(d,e),s.argA,s.argB);a&&U(d,e,t)}if(i&&Array.isArray(p(u.errors,e))){let t=r(p(u.errors,e),s.argA,s.argB);a&&U(u.errors,e,t),eg(u.errors,e)}if(x.touchedFields&&i&&Array.isArray(p(u.touchedFields,e))){let t=r(p(u.touchedFields,e),s.argA,s.argB);a&&U(u.touchedFields,e,t)}x.dirtyFields&&(u.dirtyFields=ed(c,V)),D.state.next({name:e,isDirty:Z(e,t),dirtyFields:u.dirtyFields,errors:u.errors,isValid:u.isValid})}else U(V,e,t)},_updateDisabledField:eC,_getFieldArray:t=>h(p(A.mount?V:c,t,e.shouldUnregister?p(c,t,[]):[])),_reset:eT,_resetDefaultValues:()=>H(s.defaultValues)&&s.defaultValues().then(e=>{eU(e,s.resetOptions),D.state.next({isLoading:!1})}),_updateFormState:e=>{u={...u,...e}},_disableForm:e=>{g(e)&&(D.state.next({disabled:e}),R(d,(t,r)=>{let s=e,a=p(d,r);a&&g(a._f.disabled)&&(s||(s=a._f.disabled)),t.disabled=s},0,!1))},_subjects:D,_proxyFormState:x,_setErrors:e=>{u.errors=e,D.state.next({errors:u.errors,isValid:!1})},get _fields(){return d},get _formValues(){return V},get _state(){return A},set _state(value){A=value},get _defaultValues(){return c},get _names(){return S},set _names(value){S=value},get _formState(){return u},set _formState(value){u=value},get _options(){return s},set _options(value){s={...s,...value}}},trigger:ew,register:eO,handleSubmit:eL,watch:(e,t)=>H(e)?D.values.subscribe({next:r=>e(en(void 0,t),r)}):en(e,t,!0),setValue:eV,getValues:eF,reset:eU,resetField:(e,t={})=>{p(d,e)&&(v(t.defaultValue)?eV(e,p(c,e)):(eV(e,t.defaultValue),U(c,e,t.defaultValue)),t.keepTouched||et(u.touchedFields,e),t.keepDirty||(et(u.dirtyFields,e),u.isDirty=t.defaultValue?Z(e,p(c,e)):Z()),!t.keepError&&(et(u.errors,e),x.isValid&&W()),D.state.next({...u}))},clearErrors:e=>{e&&k(e).forEach(e=>et(u.errors,e)),D.state.next({errors:e?u.errors:{}})},unregister:eD,setError:ek,setFocus:(e,t={})=>{let r=p(d,e),s=r&&r._f;if(s){let e=s.refs?s.refs[0]:s.ref;e.focus&&(e.focus(),t.shouldSelect&&e.select())}},getFieldState:ex}}(e,()=>d(e=>({...e}))),formState:u});let c=t.current.control;return c._options=e,C({subject:c._subjects.state,next:e=>{x(e,c._proxyFormState,c._updateFormState,!0)&&d({...c._formState})}}),s.useEffect(()=>c._disableForm(e.disabled),[c,e.disabled]),s.useEffect(()=>{if(c._proxyFormState.isDirty){let e=c._getDirty();e!==u.isDirty&&c._subjects.state.next({isDirty:e})}},[c,u.isDirty]),s.useEffect(()=>{e.values&&!ea(e.values,r.current)?(c._reset(e.values,c._options.resetOptions),r.current=e.values,d(e=>({...e}))):c._resetDefaultValues()},[e.values,c]),s.useEffect(()=>{e.errors&&c._setErrors(e.errors)},[e.errors,c]),s.useEffect(()=>{c._state.mount||(c._updateValid(),c._state.mount=!0),c._state.watch&&(c._state.watch=!1,c._subjects.state.next({...c._formState})),c._removeUnmounted()}),t.current.formState=w(u,c),t.current}}}]);