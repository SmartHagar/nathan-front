(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7892],{2479:function(a,e,t){Promise.resolve().then(t.bind(t,1079))},1079:function(a,e,t){"use strict";t.r(e),t.d(e,{default:function(){return f}});var r=t(9268),s=t(6006),n=t(593),i=t(5437),l=t(9639),d=t(5683),o=a=>{let{setDelete:e,setEdit:t,search:o}=a,{setRiwayatPekerjaan:u,dtRiwayatPekerjaan:c}=(0,d.Z)(),[p,m]=(0,s.useState)(1),[h,g]=(0,s.useState)(10),[w,j]=(0,s.useState)(!0),[k,y]=(0,s.useState)(""),x=async()=>{await u({page:p,limit:h,search:o,tipe:k}),j(!1)};return(0,s.useEffect)(()=>(x(),()=>{}),[p,h]),(0,s.useEffect)(()=>{m(1),x()},[o]),(0,r.jsx)("div",{className:"flex-1 flex-col max-w-full h-full overflow-auto",children:w?(0,r.jsx)(n.Z,{}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"",children:(0,r.jsx)(l.Z,{headTable:["No","Nama","Jabatan","Instansi","Masuk","Selesai","Aksi"],tableBodies:["pegawai.nama","jabatan","instansi","mulai","seles"],dataTable:c.data,page:p,limit:h,setEdit:t,setDelete:e,ubah:!0,hapus:!0})}),(null==c?void 0:c.last_page)>1&&(0,r.jsx)("div",{className:"mt-4",children:(0,r.jsx)(i.Z,{currentPage:null==c?void 0:c.current_page,totalPages:null==c?void 0:c.last_page,setPage:m})})]})})},u=t(366),c=t(2985),p=t(7808),m=t(9442),h=t(9700),g=t(5407),w=t(4496),j=t(2743);t(6760);var k=a=>{let{register:e,errors:t,control:n,dtEdit:i,watch:l,setValue:d,showModal:o,mulai:u,setMulai:p,seles:m,setSeles:h}=a,{setPegawai:k,dtPegawai:y}=(0,j.Z)(),x=async a=>{let{search:e}=a;await k({search:e,tipe:"dosen"})};return(0,s.useEffect)(()=>{x({})},[o]),(0,r.jsxs)(r.Fragment,{children:[(null==y?void 0:y.data)&&(0,r.jsx)(w.Z,{label:"Pegawai",placeholder:"Pilih Pegawai",name:"pegawai_id",dataDb:null==y?void 0:y.data,body:["id","NIK","nama"],control:n,required:!0,errors:t.pegawai_id,addClass:"col-span-4"}),(0,r.jsx)(c.Z,{label:"Jabatan",name:"jabatan",register:e,required:!0,minLength:3,errors:t.jabatan,addClass:"col-span-4 lg:col-span-2"}),(0,r.jsx)(c.Z,{label:"Instansi",name:"instansi",register:e,required:!0,minLength:3,errors:t.instansi,addClass:"col-span-4 lg:col-span-2"}),(0,r.jsx)(g.Z,{label:"Masuk",name:"mulai",control:n,startDate:u,setStartDate:p,required:!0,errors:t.mulai,addClass:"col-span-4 lg:col-span-2"}),(0,r.jsx)(g.Z,{label:"Selesai",name:"seles",control:n,startDate:m,setStartDate:h,required:!0,errors:t.seles,addClass:"col-span-4 lg:col-span-2"})]})},y=a=>{let{showModal:e,setShowModal:t,dtEdit:n}=a,[i,l]=(0,s.useState)(""),[o,g]=(0,s.useState)(""),{addData:w,updateData:j}=(0,d.Z)(),{register:y,handleSubmit:x,setValue:v,control:b,formState:{errors:f},watch:_}=(0,h.cI)(),S=()=>{v("id",""),v("pegawai_id",""),v("jabatan",""),v("instansi",""),l(""),v("mulai",""),g(""),v("seles","")};(0,s.useEffect)(()=>{n?(v("id",n.id),v("pegawai_id",n.pegawai_id),v("jabatan",n.jabatan),v("instansi",n.instansi),v("mulai",n.mulai),l(new Date(n.mulai)),v("seles",n.seles),g(new Date(n.seles))):S()},[e,n]);let D=async a=>{if(console.log({row:a}),n){let{data:e}=await j(n.id,a);(0,m.Z)({event:e}),t(!1)}else{let{data:e}=await w(a);console.log({data:e}),(0,m.Z)({event:e}),(null==e?void 0:e.type)!=="success"||S()}};return(0,r.jsx)(p.Z,{title:"Form RiwayatPekerjaan",showModal:e,setShowModal:t,children:(0,r.jsxs)("form",{onSubmit:x(D),children:[(0,r.jsx)(c.Z,{name:"id",register:y,type:"hidden"}),(0,r.jsx)("div",{className:"grid grid-cols-4 gap-2 mb-4",children:(0,r.jsx)(k,{register:y,errors:f,dtEdit:n,control:b,watch:_,setValue:v,showModal:e,mulai:i,setMulai:l,seles:o,setSeles:g})}),(0,r.jsx)("div",{children:(0,r.jsx)(u.Z,{text:"Simpan",onClick:x(D)})})]})})},x=t(686),v=t(8919),b=t(8350),f=()=>{let{removeData:a}=(0,d.Z)(),[e,t]=(0,s.useState)(!1),[n,i]=(0,s.useState)(!1),[l,c]=(0,s.useState)(),[p,h]=(0,s.useState)(),[g,w]=(0,s.useState)(""),j=async e=>{let{id:t,isDelete:r}=e;if(c(t),r){let{data:e}=await a(l);(0,m.Z)({event:e}),i(!1)}else i(!0)};return(0,r.jsxs)("div",{className:"flex flex-col h-full",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(v.x7,{}),(0,r.jsx)(y,{dtEdit:p,showModal:e,setShowModal:t}),(0,r.jsx)(x.Z,{showDel:n,setShowDel:i,setDelete:j}),(0,r.jsxs)("div",{className:"mb-4 flex justify-between",children:[(0,r.jsx)("div",{children:(0,r.jsx)("p",{children:(0,r.jsx)("span",{className:"capitalize",children:"Silahkan Mengolah data pendidikan pegawai"})})}),(0,r.jsx)("div",{children:(0,r.jsx)(u.Z,{addClass:"capitalize",text:"Tambah Pendidikan",onClick:()=>{t(!0),h(null)}})})]}),(0,r.jsx)(b.Z,{placeholder:"Cari Pegawai",onChange:a=>w(a)})]}),(0,r.jsx)(o,{setDelete:j,setEdit:a=>{t(!0),h(a)},search:g})]})}},5407:function(a,e,t){"use strict";var r=t(9268);t(6006);var s=t(9700),n=t(9977),i=t.n(n),l=t(5326),d=t.n(l);e.Z=a=>{let{control:e,required:t,name:n,errors:l,addClass:o,label:u,startDate:c,setStartDate:p}=a;return(0,r.jsxs)("div",{className:o,children:[(0,r.jsxs)("label",{className:"text-sm font-medium text-gray-700 tracking-wide block",children:[u,t&&(0,r.jsx)("span",{className:"ml-1 text-red-600",children:"*"})]}),(0,r.jsx)(s.Qr,{name:n,control:e,rules:{required:t},render:a=>{let{field:e}=a;return(0,r.jsx)(i(),{selected:c,onChange:a=>{if(a){p(a);let t=d()(a).format("YYYY-MM-DD");e.onChange(t)}else p(null),e.onChange("")},dateFormat:"dd/MM/yyyy",value:c||"",peekNextMonth:!0,showMonthDropdown:!0,showYearDropdown:!0,dropdownMode:"select",className:"w-full border rounded-lg py-2 px-4"})}}),(null==l?void 0:l.type)==="required"&&(0,r.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[u," tidak boleh kosong"]})]})}},4496:function(a,e,t){"use strict";var r=t(9268);t(6006);var s=t(7133),n=t(9700);e.Z=a=>{let{dataDb:e,body:t,control:i,required:l,name:d,errors:o,placeholder:u,addClass:c,label:p,defaultOptions:m=!0}=a,h={multiValue:(a,e)=>e.data.isFixed?{...a,backgroundColor:"gray"}:a,multiValueLabel:(a,e)=>e.data.isFixed?{...a,fontWeight:"bold",color:"white",paddingRight:6}:a,multiValueRemove:(a,e)=>e.data.isFixed?{...a,display:"none"}:a},g=(a,e)=>{let t=a[e];if("id"===e)return{value:t,label:""};if(!e.includes("."))return{value:"",label:t};{let[t,...r]=e.split("."),s=a[t];return g(s,r.join("."))}},w=()=>{let a=e&&e.map((a,e)=>{let r=t.map(e=>g(a,e)),s=r.map(a=>a.label).filter(a=>""!==a),n=s.join(s.length>1?" - ":"");return{value:r.find(a=>""!==a.value).value,label:n}});return a},j=a=>{var e;return null===(e=w())||void 0===e?void 0:e.filter(e=>e.label.toLowerCase().includes(a.toLowerCase()))},k=(a,e)=>{setTimeout(()=>{e(j(a))},1e3)};return(0,r.jsxs)("div",{className:c,children:[p&&(0,r.jsx)("label",{className:"text-sm font-medium text-gray-700 tracking-wide",children:p}),l&&(0,r.jsx)("span",{className:"ml-1 text-red-600",children:"*"}),(0,r.jsx)(n.Qr,{name:d,control:i,rules:{required:l},render:a=>{var e;let{field:{onChange:t,value:n,ref:i}}=a;return(0,r.jsx)(s.Z,{cacheOptions:!0,defaultOptions:m,isClearable:!0,isSearchable:!0,loadOptions:k,placeholder:u,menuPlacement:"auto",menuPosition:"fixed",menuPortalTarget:document.body,styles:h,ref:i,value:(null===(e=w())||void 0===e?void 0:e.find(a=>a.value===n))||null,onChange:a=>t(a?a.value:a)})}}),(null==o?void 0:o.type)==="required"&&(0,r.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[p," tidak boleh kosong"]})]})}},2743:function(a,e,t){"use strict";var r=t(2561),s=t(4475),n=t(3415),i=t(3672);let l=(0,r.Ue)((0,s.mW)((a,e)=>({dtPegawai:[],setPegawai:async e=>{let{page:t=1,limit:r=10,search:s,tipe:i}=e;try{let e=await (0,n.hi)({method:"get",url:"/personalia/pegawai",params:{limit:r,page:t,search:s,tipe:i}});return a(a=>({...a,dtPegawai:e.data})),{status:"berhasil",data:e.data}}catch(a){return{status:"error",error:a.response.data}}},setApiDokumenPegawai:async e=>{let{search:t,page:r,id:s}=e;try{let e=await (0,n.hi)({method:"get",url:"/personalia/pegawai/dokumen/".concat(s),params:{search:t,page:r}});return i.Z.getState().setDokumen({page:r,search:t}),a(a=>({...a,dtPegawai:e.data.data})),{status:"berhasil",data:e.data}}catch(a){return{status:"error",error:a.response.data}}}})));e.Z=l},3672:function(a,e,t){"use strict";var r=t(2561),s=t(4475),n=t(3415),i=t(4406),l=t(2743);let d=(0,r.Ue)((0,s.mW)((a,e)=>({setFormData:a=>{let e=new FormData;return e.append("pegawai_id",a.pegawai_id),e.append("judul",a.judul),e.append("gambar",a.gambar),e},dtDokumen:[],showDokumen:[],setDokumen:async e=>{let{page:t=1,limit:r=10,tipe:s,search:l}=e;try{let e=await i.Z.getState().setToken(),d=await (0,n.Sj)({method:"get",url:"/personalia/dokumen_pegawai",headers:{Authorization:"Bearer ".concat(e)},params:{limit:r,page:t,search:l,tipe:s}});return a(a=>({...a,dtDokumen:d.data.data})),{status:"berhasil",data:d.data}}catch(a){var d;return{status:"error",error:null===(d=a.response)||void 0===d?void 0:d.data}}},setShowDokumen:async e=>{try{let t=await i.Z.getState().setToken(),r=await (0,n.Sj)({method:"get",url:"/personalia/dokumen_pegawai/".concat(e),headers:{Authorization:"Bearer ".concat(t)}});return a(a=>({...a,showDokumen:r.data.data})),{status:"berhasil",data:r.data}}catch(a){var t;return{status:"error",error:null===(t=a.response)||void 0===t?void 0:t.data}}},addData:async t=>{let r=(null==t?void 0:t.gambar)?e().setFormData(t):t;try{let e=await i.Z.getState().setToken(),s=await (0,n.Sj)({method:"post",url:"/personalia/dokumen_pegawai",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"multipart/form-data"},data:r});return a(a=>({dtDokumen:{last_page:a.dtDokumen.last_page,current_page:a.dtDokumen.current_page,data:[s.data.data,...a.dtDokumen.data]}})),l.Z.getState().setApiDokumenPegawai({id:t.pegawai_id}),{status:"berhasil tambah",data:s.data}}catch(a){return console.log({error:a}),{status:"error",data:a.response.data}}},removeData:async e=>{try{let t=await i.Z.getState().setToken(),r=await (0,n.Sj)({method:"delete",url:"/personalia/dokumen_pegawai/".concat(e),headers:{Authorization:"Bearer ".concat(t)}});return a(a=>({dtDokumen:{last_page:a.dtDokumen.last_page,current_page:a.dtDokumen.current_page,data:a.dtDokumen.data.filter(a=>a.id!==e)}})),l.Z.getState().setApiDokumenPegawai({id:r.data.data.pegawai_id}),{status:"berhasil hapus",data:r.data}}catch(a){return{status:"error",data:a.response.data}}},updateData:async(t,r)=>{delete r.id;let s=(null==r?void 0:r.gambar)?e().setFormData(r):r,d=await i.Z.getState().setToken();try{let e=await (0,n.Sj)({url:"/personalia/dokumen_pegawai/".concat(t),method:"post",headers:(null==r?void 0:r.gambar)?{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(d)}:{Authorization:"Bearer ".concat(d)},data:s,params:{_method:"PUT"}});return a(a=>({dtDokumen:{last_page:a.dtDokumen.last_page,current_page:a.dtDokumen.current_page,data:a.dtDokumen.data.map(a=>a.id===t?{...a,...e.data.data}:a)}})),l.Z.getState().setApiDokumenPegawai({id:e.data.data.pegawai_id}),{status:"berhasil update",data:e.data}}catch(a){return{status:"error",data:a.response.data}}}})));e.Z=d},5683:function(a,e,t){"use strict";var r=t(2561),s=t(4475),n=t(3415),i=t(4406);let l=(0,r.Ue)((0,s.mW)((a,e)=>({dtRiwayatPekerjaan:[],showRiwayatPekerjaan:[],setRiwayatPekerjaan:async e=>{let{page:t=1,limit:r=10,search:s,tipe:l}=e;try{let e=await i.Z.getState().setToken(),d=await (0,n.Sj)({method:"get",url:"/personalia/riwayat_pekerjaan",headers:{Authorization:"Bearer ".concat(e)},params:{limit:r,page:t,search:s,tipe:l}});return a(a=>({...a,dtRiwayatPekerjaan:d.data.data})),{status:"berhasil",data:d.data}}catch(a){var d;return{status:"error",error:null===(d=a.response)||void 0===d?void 0:d.data}}},setShowRiwayatPekerjaan:async e=>{try{let t=await i.Z.getState().setToken(),r=await (0,n.Sj)({method:"get",url:"/personalia/riwayat_pekerjaan/".concat(e),headers:{Authorization:"Bearer ".concat(t)}});return a(a=>({...a,dtRiwayatPekerjaan:r.data.data})),{status:"berhasil",data:r.data}}catch(a){var t;return{status:"error",error:null===(t=a.response)||void 0===t?void 0:t.data}}},addData:async e=>{try{let t=await i.Z.getState().setToken(),r=await (0,n.Sj)({method:"post",url:"/personalia/riwayat_pekerjaan",headers:{Authorization:"Bearer ".concat(t)},data:e});return a(a=>({dtRiwayatPekerjaan:{last_page:a.dtRiwayatPekerjaan.last_page,current_page:a.dtRiwayatPekerjaan.current_page,data:[r.data.data,...a.dtRiwayatPekerjaan.data]}})),{status:"berhasil tambah",data:r.data}}catch(a){return{status:"error",data:a.response.data}}},removeData:async e=>{try{let t=await i.Z.getState().setToken(),r=await (0,n.Sj)({method:"delete",url:"/personalia/riwayat_pekerjaan/".concat(e),headers:{Authorization:"Bearer ".concat(t)}});return a(a=>({dtRiwayatPekerjaan:{last_page:a.dtRiwayatPekerjaan.last_page,current_page:a.dtRiwayatPekerjaan.current_page,data:a.dtRiwayatPekerjaan.data.filter(a=>a.id!==e)}})),{status:"berhasil hapus",data:r.data}}catch(a){return{status:"error",data:a.response.data}}},updateData:async(e,t)=>{try{let r=await i.Z.getState().setToken(),s=await (0,n.Sj)({method:"PUT",url:"/personalia/riwayat_pekerjaan/".concat(e),headers:{Authorization:"Bearer ".concat(r)},data:t});return a(a=>({dtRiwayatPekerjaan:{last_page:a.dtRiwayatPekerjaan.last_page,current_page:a.dtRiwayatPekerjaan.current_page,data:a.dtRiwayatPekerjaan.data.map(a=>a.id===e?{...a,...s.data.data}:a)}})),{status:"berhasil update",data:s.data}}catch(a){return{status:"error",data:a.response.data}}}})));e.Z=l}},function(a){a.O(0,[6680,4550,635,9218,3088,4925,9977,7133,3729,9253,7698,1744],function(){return a(a.s=2479)}),_N_E=a.O()}]);