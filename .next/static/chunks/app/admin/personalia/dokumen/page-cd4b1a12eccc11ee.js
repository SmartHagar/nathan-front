(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3856],{5113:function(a,e,t){Promise.resolve().then(t.bind(t,1015))},1015:function(a,e,t){"use strict";t.r(e),t.d(e,{default:function(){return D}});var r=t(9268),s=t(6006),i=t(593),n=t(5437),l=t(9639),d=t(5366),o=t(3672),u=a=>{let{setDelete:e,setEdit:t,search:u,tipe:c}=a,{setDokumen:p,dtDokumen:m}=(0,o.Z)(),[g,h]=(0,s.useState)(1),[w,v]=(0,s.useState)(10),[f,x]=(0,s.useState)(!0),{role:j}=(0,s.useContext)(d.N),_=async()=>{await p({page:g,search:u,limit:w}),x(!1)};(0,s.useEffect)(()=>(_(),()=>{}),[g,w]),(0,s.useEffect)(()=>{h(1),_()},[u]);let k=["No","Nama","Judul","Gambar / File","Aksi"];return"personalia"!==j&&k.splice(4),(0,r.jsx)("div",{className:"flex-1 flex-col max-w-full h-full overflow-auto",children:f?(0,r.jsx)(i.Z,{}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"",children:(0,r.jsx)(l.Z,{headTable:k,tableBodies:["pegawai.nama","judul","gambar"],dataTable:m.data,page:g,limit:w,setEdit:t,setDelete:e,ubah:"personalia"===j,hapus:"personalia"===j})}),(null==m?void 0:m.last_page)>1&&(0,r.jsx)("div",{className:"mt-4",children:(0,r.jsx)(n.Z,{currentPage:null==m?void 0:m.current_page,totalPages:null==m?void 0:m.last_page,setPage:h})})]})})},c=t(366),p=t(2985),m=t(7808),g=t(9442),h=t(9700),w=t(63),v=t(4496),f=t(2743);t(6760);var x=a=>{let{register:e,errors:t,control:i,dtEdit:n,watch:l,setValue:d,showModal:o,myFile:u,setMyFile:c}=a,{setPegawai:m,dtPegawai:g}=(0,f.Z)(),h=async a=>{let{search:e}=a;await m({search:e})};return(0,s.useEffect)(()=>{h({})},[o]),(0,r.jsxs)(r.Fragment,{children:[(null==g?void 0:g.data)&&(0,r.jsx)(v.Z,{label:"Pegawai",placeholder:"Pilih Pegawai",name:"pegawai_id",dataDb:null==g?void 0:g.data,body:["id","NIK","nama"],control:i,required:!0,errors:t.pegawai_id,addClass:"col-span-4"}),(0,r.jsx)(p.Z,{label:"Judul",name:"judul",register:e,required:!0,minLength:3,errors:t.judul,addClass:"col-span-4"}),(0,r.jsx)(w.Z,{label:"Gambar",name:"gambar",register:e,accept:"image/*, .pdf",required:!0,errors:t.gambar,addClass:"col-span-4",setValue:d,fileEdit:null==n?void 0:n.gambar,myFile:u,setMyFile:c})]})},j=t(5282),_=a=>{let{showModal:e,setShowModal:t,dtEdit:n,tipe:l}=a,{showPegawai:d}=(0,s.useContext)(j.T),[u,w]=(0,s.useState)(),[v,f]=(0,s.useState)(!1),{addData:_,updateData:k}=(0,o.Z)(),{register:b,handleSubmit:y,setValue:D,control:S,formState:{errors:P},watch:Z}=(0,h.cI)(),N=()=>{D("id",""),D("judul",""),D("gambar",""),D("pegawai_id","")};(0,s.useEffect)(()=>{n?(D("id",n.id),D("judul",n.judul),D("pegawai_id",n.pegawai_id),D("gambar",n.gambar)):N()},[e,n]);let T=async a=>{if(f(!0),console.log({row:a}),n){let{data:e}=await k(n.id,a);(0,g.Z)({event:e}),t(!1)}else{let{data:e}=await _(a);console.log({data:e}),(0,g.Z)({event:e}),(null==e?void 0:e.type)!=="success"||N()}setTimeout(()=>{f(!1)},1500)};return(0,r.jsx)(m.Z,{title:"Form Dokumen",showModal:e,setShowModal:t,children:(0,r.jsxs)("form",{onSubmit:y(T),children:[(0,r.jsx)(p.Z,{name:"id",register:b,type:"hidden"}),(0,r.jsx)("div",{className:"grid grid-cols-4 gap-2 mb-4",children:(0,r.jsx)(x,{register:b,errors:P,dtEdit:n,control:S,watch:Z,setValue:D,showModal:e,myFile:u,setMyFile:w})}),(0,r.jsx)("div",{children:v?(0,r.jsx)(i.Z,{}):(0,r.jsx)(c.Z,{text:"Simpan",onClick:y(T)})})]})})},k=t(686),b=t(8919),y=t(8350),D=a=>{let{params:e}=a,{showPegawai:t}=(0,s.useContext)(j.T),{removeData:i}=(0,o.Z)(),[n,l]=(0,s.useState)(!1),[p,m]=(0,s.useState)(!1),[h,w]=(0,s.useState)(),[v,f]=(0,s.useState)(),[x,D]=(0,s.useState)(""),{role:S}=(0,s.useContext)(d.N),P=async a=>{let{id:e,isDelete:t}=a;if(w(e),t){let{data:a}=await i(h);(0,g.Z)({event:a}),m(!1)}else m(!0)};return(0,r.jsxs)("div",{className:"flex flex-col h-full",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(b.Toaster,{}),(0,r.jsx)(_,{dtEdit:v,showModal:n,setShowModal:l,tipe:e.tipe}),(0,r.jsx)(k.Z,{showDel:p,setShowDel:m,setDelete:P}),"personalia"===S&&(0,r.jsxs)("div",{className:"mb-4 flex justify-between",children:[(0,r.jsxs)("p",{className:"capitalize",children:["Silahkan Mengolah data Dokumen ",e.tipe]}),(0,r.jsx)("div",{children:(0,r.jsx)(c.Z,{text:"Tambah Dokumen",onClick:()=>{l(!0),f(null)}})})]}),(0,r.jsx)(y.Z,{placeholder:"Cari Dokumen",onChange:a=>D(a)})]}),(0,r.jsx)(u,{setDelete:P,setEdit:a=>{l(!0),f(a)},search:x,tipe:e.tipe})]})}},63:function(a,e,t){"use strict";var r=t(9268),s=t(3415),i=t(6394),n=t.n(i),l=t(6006),d=t(5883),o=t.n(d);e.Z=a=>{let{label:e,register:t,required:i,name:d,errors:u,addClass:c,accept:p,setValue:m,fileEdit:g,myFile:h,setMyFile:w}=a,[v,f]=(0,l.useState)(),x=a=>new Promise(()=>{if(a){var e;let t=(null==a?void 0:null===(e=a.type)||void 0===e?void 0:e.split("/"))||[],r=t[0];if("image"!==r)return j(a);console.log({splitType:t}),o().imageFileResizer(a,1500,1500,t[1],80,0,a=>{j(a)},"file")}else j(null)}),j=a=>{var e;if(a){let e=new FileReader;e.readAsDataURL(a),e.onloadend=()=>{w(e.result)}}let t=(null==a?void 0:null===(e=a.type)||void 0===e?void 0:e.split("/"))||[];f(t[0]),m(d,a)};return(0,r.jsxs)("div",{className:c,children:[(0,r.jsx)("label",{className:"text-sm font-medium text-gray-700 tracking-wide",children:e}),i&&(0,r.jsx)("span",{className:"ml-1 text-red-600",children:"*"}),(0,r.jsx)("input",{className:"w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-secondary",id:"fileInput",type:"file",accept:p,onChange:a=>{var e;let t=(null===(e=a.target)||void 0===e?void 0:e.files[0])||null;x(t)}}),(0,r.jsx)("input",{type:"hidden",id:e,...t(d,{required:i})}),(0,r.jsxs)("div",{className:"flex gap-4 mt-2",children:[h&&"image"===v&&(0,r.jsx)(n(),{className:"rounded-lg",src:h,width:100,height:100,alt:""}),g&&"file"!==d&&(0,r.jsx)("div",{children:(0,r.jsx)(n(),{src:"".concat(s._n,"/").concat(g),width:100,height:100,alt:""})})]}),(null==u?void 0:u.type)==="required"&&(0,r.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[e," tidak boleh kosong"]})]})}},4496:function(a,e,t){"use strict";var r=t(9268);t(6006);var s=t(7133),i=t(9700);e.Z=a=>{let{dataDb:e,body:t,control:n,required:l,name:d,errors:o,placeholder:u,addClass:c,label:p,defaultOptions:m=!0}=a,g={multiValue:(a,e)=>e.data.isFixed?{...a,backgroundColor:"gray"}:a,multiValueLabel:(a,e)=>e.data.isFixed?{...a,fontWeight:"bold",color:"white",paddingRight:6}:a,multiValueRemove:(a,e)=>e.data.isFixed?{...a,display:"none"}:a},h=(a,e)=>{let t=a[e];if("id"===e)return{value:t,label:""};if(!e.includes("."))return{value:"",label:t};{let[t,...r]=e.split("."),s=a[t];return h(s,r.join("."))}},w=()=>{let a=e&&e.map((a,e)=>{let r=t.map(e=>h(a,e)),s=r.map(a=>a.label).filter(a=>""!==a),i=s.join(s.length>1?" - ":"");return{value:r.find(a=>""!==a.value).value,label:i}});return a},v=a=>{var e;return null===(e=w())||void 0===e?void 0:e.filter(e=>e.label.toLowerCase().includes(a.toLowerCase()))},f=(a,e)=>{setTimeout(()=>{e(v(a))},1e3)};return(0,r.jsxs)("div",{className:c,children:[p&&(0,r.jsx)("label",{className:"text-sm font-medium text-gray-700 tracking-wide",children:p}),l&&(0,r.jsx)("span",{className:"ml-1 text-red-600",children:"*"}),(0,r.jsx)(i.Qr,{name:d,control:n,rules:{required:l},render:a=>{var e;let{field:{onChange:t,value:i,ref:n}}=a;return(0,r.jsx)(s.Z,{cacheOptions:!0,defaultOptions:m,isClearable:!0,isSearchable:!0,loadOptions:f,placeholder:u,menuPlacement:"auto",menuPosition:"fixed",menuPortalTarget:document.body,styles:g,ref:n,value:(null===(e=w())||void 0===e?void 0:e.find(a=>a.value===i))||null,onChange:a=>t(a?a.value:a)})}}),(null==o?void 0:o.type)==="required"&&(0,r.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[p," tidak boleh kosong"]})]})}},5282:function(a,e,t){"use strict";t.d(e,{T:function(){return l}});var r=t(9268),s=t(6006),i=t(1712),n=t(8468);let l=(0,s.createContext)({showPegawai:null});e.Z=a=>{let{children:e}=a,t=parseInt(i.Z.get("user_id")),{setShowPegawai:d,showPegawai:o}=(0,n.Z)();return(0,s.useEffect)(()=>(d(t),()=>{d(0)}),[t,d]),(0,r.jsx)(l.Provider,{value:{showPegawai:o},children:e})}},5366:function(a,e,t){"use strict";t.d(e,{N:function(){return n}});var r=t(9268),s=t(6006),i=t(1712);let n=(0,s.createContext)({role:null});e.Z=a=>{let{children:e}=a,[t,l]=(0,s.useState)(null);return(0,s.useEffect)(()=>{let a=i.Z.get("role");return l(a||null),()=>{l(null)}},[]),(0,r.jsx)(n.Provider,{value:{role:t},children:e})}},2743:function(a,e,t){"use strict";var r=t(2561),s=t(4475),i=t(3415),n=t(3672);let l=(0,r.Ue)((0,s.mW)((a,e)=>({dtPegawai:[],setPegawai:async e=>{let{page:t=1,limit:r=10,search:s,tipe:n}=e;try{let e=await (0,i.hi)({method:"get",url:"/personalia/pegawai",params:{limit:r,page:t,search:s,tipe:n}});return a(a=>({...a,dtPegawai:e.data})),{status:"berhasil",data:e.data}}catch(a){return{status:"error",error:a.response.data}}},setApiDokumenPegawai:async e=>{let{search:t,page:r,id:s}=e;try{let e=await (0,i.hi)({method:"get",url:"/personalia/pegawai/dokumen/".concat(s),params:{search:t,page:r}});return n.Z.getState().setDokumen({page:r,search:t}),a(a=>({...a,dtPegawai:e.data.data})),{status:"berhasil",data:e.data}}catch(a){return{status:"error",error:a.response.data}}},setTotalTipe:async()=>{try{let e=await (0,i.hi)({method:"get",url:"/personalia/pegawai/total_tipe"});return a(a=>({...a,dtPegawai:e.data.data})),{status:"berhasil",data:e.data}}catch(a){return{status:"error",error:a.response.data}}}})));e.Z=l},3672:function(a,e,t){"use strict";var r=t(2561),s=t(4475),i=t(3415),n=t(4406),l=t(2743);let d=(0,r.Ue)((0,s.mW)((a,e)=>({setFormData:a=>{let e=new FormData;return e.append("pegawai_id",a.pegawai_id),e.append("judul",a.judul),e.append("gambar",a.gambar),e},dtDokumen:[],showDokumen:[],setDokumen:async e=>{let{page:t=1,limit:r=10,tipe:s,search:l}=e;try{let e=await n.Z.getState().setToken(),d=await (0,i.Sj)({method:"get",url:"/personalia/dokumen_pegawai",headers:{Authorization:"Bearer ".concat(e)},params:{limit:r,page:t,search:l,tipe:s}});return a(a=>({...a,dtDokumen:d.data.data})),{status:"berhasil",data:d.data}}catch(a){var d;return{status:"error",error:null===(d=a.response)||void 0===d?void 0:d.data}}},setShowDokumen:async e=>{try{let t=await n.Z.getState().setToken(),r=await (0,i.Sj)({method:"get",url:"/personalia/dokumen_pegawai/".concat(e),headers:{Authorization:"Bearer ".concat(t)}});return a(a=>({...a,showDokumen:r.data.data})),{status:"berhasil",data:r.data}}catch(a){var t;return{status:"error",error:null===(t=a.response)||void 0===t?void 0:t.data}}},addData:async t=>{let r=(null==t?void 0:t.gambar)?e().setFormData(t):t;try{let e=await n.Z.getState().setToken(),s=await (0,i.Sj)({method:"post",url:"/personalia/dokumen_pegawai",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"multipart/form-data"},data:r});return a(a=>({dtDokumen:{last_page:a.dtDokumen.last_page,current_page:a.dtDokumen.current_page,data:[s.data.data,...a.dtDokumen.data]}})),l.Z.getState().setApiDokumenPegawai({id:t.pegawai_id}),{status:"berhasil tambah",data:s.data}}catch(a){return console.log({error:a}),{status:"error",data:a.response.data}}},removeData:async e=>{try{let t=await n.Z.getState().setToken(),r=await (0,i.Sj)({method:"delete",url:"/personalia/dokumen_pegawai/".concat(e),headers:{Authorization:"Bearer ".concat(t)}});return a(a=>({dtDokumen:{last_page:a.dtDokumen.last_page,current_page:a.dtDokumen.current_page,data:a.dtDokumen.data.filter(a=>a.id!==e)}})),l.Z.getState().setApiDokumenPegawai({id:r.data.data.pegawai_id}),{status:"berhasil hapus",data:r.data}}catch(a){return{status:"error",data:a.response.data}}},updateData:async(t,r)=>{delete r.id;let s=(null==r?void 0:r.gambar)?e().setFormData(r):r,d=await n.Z.getState().setToken();try{let e=await (0,i.Sj)({url:"/personalia/dokumen_pegawai/".concat(t),method:"post",headers:(null==r?void 0:r.gambar)?{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(d)}:{Authorization:"Bearer ".concat(d)},data:s,params:{_method:"PUT"}});return a(a=>({dtDokumen:{last_page:a.dtDokumen.last_page,current_page:a.dtDokumen.current_page,data:a.dtDokumen.data.map(a=>a.id===t?{...a,...e.data.data}:a)}})),l.Z.getState().setApiDokumenPegawai({id:e.data.data.pegawai_id}),{status:"berhasil update",data:e.data}}catch(a){return{status:"error",data:a.response.data}}}})));e.Z=d},8468:function(a,e,t){"use strict";var r=t(2561),s=t(4475),i=t(3415),n=t(4406);let l=(0,r.Ue)((0,s.mW)((a,e)=>({setFormData:a=>{let e=new FormData;return e.append("pangkat_id",a.pangkat_id),e.append("tipe",a.tipe),e.append("NIK",a.NIK),e.append("NIDN",a.NIDN),e.append("nama",a.nama),e.append("tempat_lahir",a.tempat_lahir),e.append("tgl_lahir",a.tgl_lahir),e.append("no_hp",a.no_hp),e.append("jumlah_anak",a.jumlah_anak),e.append("jenkel",a.jenkel),e.append("pend_terakhir",a.pend_terakhir),e.append("alamat",a.alamat),e.append("thn_terima",a.thn_terima),e.append("foto",a.foto),e},dtPegawai:[],showPegawai:[],setPegawai:async e=>{let{page:t=1,limit:r=10,search:s,tipe:l}=e;try{let e=await n.Z.getState().setToken(),d=await (0,i.Sj)({method:"get",url:"/personalia/pegawai",headers:{Authorization:"Bearer ".concat(e)},params:{limit:r,page:t,search:s,tipe:l}});return a(a=>({...a,dtPegawai:d.data.data})),{status:"berhasil",data:d.data}}catch(a){var d;return{status:"error",error:null===(d=a.response)||void 0===d?void 0:d.data}}},setShowPegawai:async e=>{try{let t=await n.Z.getState().setToken(),r=await (0,i.Sj)({method:"get",url:"/personalia/pegawai/".concat(e),headers:{Authorization:"Bearer ".concat(t)}});return a(a=>({...a,showPegawai:r.data.data})),{status:"berhasil",data:r.data}}catch(a){var t;return{status:"error",error:null===(t=a.response)||void 0===t?void 0:t.data}}},addData:async t=>{let r=(null==t?void 0:t.foto)?e().setFormData(t):t;try{let e=await n.Z.getState().setToken(),t=await (0,i.Sj)({method:"post",url:"/personalia/pegawai",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"multipart/form-data"},data:r});return a(a=>({dtPegawai:{last_page:a.dtPegawai.last_page,current_page:a.dtPegawai.current_page,data:[t.data.data,...a.dtPegawai.data]}})),{status:"berhasil tambah",data:t.data}}catch(a){return{status:"error",data:a.response.data}}},removeData:async e=>{try{let t=await n.Z.getState().setToken(),r=await (0,i.Sj)({method:"delete",url:"/personalia/pegawai/".concat(e),headers:{Authorization:"Bearer ".concat(t)}});return a(a=>({dtPegawai:{last_page:a.dtPegawai.last_page,current_page:a.dtPegawai.current_page,data:a.dtPegawai.data.filter(a=>a.id!==e)}})),{status:"berhasil hapus",data:r.data}}catch(a){return{status:"error",data:a.response.data}}},updateData:async(t,r)=>{delete r.id;let s=(null==r?void 0:r.foto)?e().setFormData(r):r,l=await n.Z.getState().setToken();try{let e=await (0,i.Sj)({url:"/personalia/pegawai/".concat(t),method:"post",headers:(null==r?void 0:r.foto)?{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(l)}:{Authorization:"Bearer ".concat(l)},data:s,params:{_method:"PUT"}});return a(a=>({dtPegawai:{last_page:a.dtPegawai.last_page,current_page:a.dtPegawai.current_page,data:a.dtPegawai.data.map(a=>a.id===t?{...a,...e.data.data}:a)}})),{status:"berhasil update",data:e.data}}catch(a){return{status:"error",data:a.response.data}}},updatePegawai:async(t,r)=>{delete r.id;let s=(null==r?void 0:r.foto)?e().setFormData(r):r,l=await n.Z.getState().setToken();try{let e=await (0,i.Sj)({url:"/personalia/pegawai/".concat(t),method:"post",headers:(null==r?void 0:r.foto)?{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(l)}:{Authorization:"Bearer ".concat(l)},data:s,params:{_method:"PUT"}});return a(a=>({...a,showPegawai:e.data.data})),{status:"berhasil update",data:e.data}}catch(a){return{status:"error",data:a.response.data}}}})));e.Z=l}},function(a){a.O(0,[6680,4550,3674,6394,2629,3088,7133,5954,3729,9253,7698,1744],function(){return a(a.s=5113)}),_N_E=a.O()}]);