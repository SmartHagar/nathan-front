(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7892],{2479:function(e,a,l){Promise.resolve().then(l.bind(l,1079))},1079:function(e,a,l){"use strict";l.r(a),l.d(a,{default:function(){return C}});var t=l(9268),s=l(6006),i=l(593),n=l(5437),r=l(9639),d=l(5683),o=l(5366),u=e=>{let{setDelete:a,setEdit:l,search:u}=e,{setRiwayatPekerjaan:c,dtRiwayatPekerjaan:m}=(0,d.Z)(),[x,h]=(0,s.useState)(1),[p,j]=(0,s.useState)(10),[f,g]=(0,s.useState)(!0),[v,b]=(0,s.useState)(""),{role:w}=(0,s.useContext)(o.N),S=async()=>{await c({page:x,limit:p,search:u,tipe:v}),g(!1)};(0,s.useEffect)(()=>(S(),()=>{}),[x,p]),(0,s.useEffect)(()=>{h(1),S()},[u]);let Z=["No","Nama","Jabatan","Instansi","Masuk","Selesai","Aksi"];return"personalia"!==w&&Z.splice(6),(0,t.jsx)("div",{className:"flex-1 flex-col max-w-full h-full overflow-auto",children:f?(0,t.jsx)(i.Z,{}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"",children:(0,t.jsx)(r.Z,{headTable:Z,tableBodies:["pegawai.nama","jabatan","instansi","mulai","seles"],dataTable:m.data,page:x,limit:p,setEdit:l,setDelete:a,ubah:"personalia"===w,hapus:"personalia"===w})}),(null==m?void 0:m.last_page)>1&&(0,t.jsx)("div",{className:"mt-4",children:(0,t.jsx)(n.Z,{currentPage:null==m?void 0:m.current_page,totalPages:null==m?void 0:m.last_page,setPage:h})})]})})},c=l(366),m=l(2985),x=l(7808),h=l(9442),p=l(9700),j=l(5407),f=l(4496),g=l(2743);l(6760);var v=e=>{let{register:a,errors:l,control:i,dtEdit:n,watch:r,setValue:d,showModal:o,mulai:u,setMulai:c,seles:x,setSeles:h}=e,{setPegawai:p,dtPegawai:v}=(0,g.Z)(),b=async e=>{let{search:a}=e;await p({search:a,tipe:"dosen"})};return(0,s.useEffect)(()=>{b({})},[o]),(0,t.jsxs)(t.Fragment,{children:[(null==v?void 0:v.data)&&(0,t.jsx)(f.Z,{label:"Pegawai",placeholder:"Pilih Pegawai",name:"pegawai_id",dataDb:null==v?void 0:v.data,body:["id","NIK","nama"],control:i,required:!0,errors:l.pegawai_id,addClass:"col-span-4"}),(0,t.jsx)(m.Z,{label:"Jabatan",name:"jabatan",register:a,required:!0,minLength:3,errors:l.jabatan,addClass:"col-span-4 lg:col-span-2"}),(0,t.jsx)(m.Z,{label:"Instansi",name:"instansi",register:a,required:!0,minLength:3,errors:l.instansi,addClass:"col-span-4 lg:col-span-2"}),(0,t.jsx)(j.Z,{label:"Masuk",name:"mulai",control:i,startDate:u,setStartDate:c,required:!0,errors:l.mulai,addClass:"col-span-4 lg:col-span-2"}),(0,t.jsx)(j.Z,{label:"Selesai",name:"seles",control:i,startDate:x,setStartDate:h,required:!0,errors:l.seles,addClass:"col-span-4 lg:col-span-2"})]})},b=e=>{let{showModal:a,setShowModal:l,dtEdit:n}=e,[r,o]=(0,s.useState)(""),[u,j]=(0,s.useState)(""),[f,g]=(0,s.useState)(!1),{addData:b,updateData:w}=(0,d.Z)(),{register:S,handleSubmit:Z,setValue:C,control:N,formState:{errors:k},watch:y}=(0,p.cI)(),P=()=>{C("id",""),C("pegawai_id",""),C("jabatan",""),C("instansi",""),o(""),C("mulai",""),j(""),C("seles","")};(0,s.useEffect)(()=>{n?(C("id",n.id),C("pegawai_id",n.pegawai_id),C("jabatan",n.jabatan),C("instansi",n.instansi),C("mulai",n.mulai),o(new Date(n.mulai)),C("seles",n.seles),j(new Date(n.seles))):P()},[a,n]);let _=async e=>{if(g(!0),console.log({row:e}),n){let{data:a}=await w(n.id,e);(0,h.Z)({event:a}),l(!1)}else{let{data:a}=await b(e);console.log({data:a}),(0,h.Z)({event:a}),(null==a?void 0:a.type)!=="success"||P()}setTimeout(()=>{g(!1)},1500)};return(0,t.jsx)(x.Z,{title:"Form RiwayatPekerjaan",showModal:a,setShowModal:l,children:(0,t.jsxs)("form",{onSubmit:Z(_),children:[(0,t.jsx)(m.Z,{name:"id",register:S,type:"hidden"}),(0,t.jsx)("div",{className:"grid grid-cols-4 gap-2 mb-4",children:(0,t.jsx)(v,{register:S,errors:k,dtEdit:n,control:N,watch:y,setValue:C,showModal:a,mulai:r,setMulai:o,seles:u,setSeles:j})}),(0,t.jsx)("div",{children:f?(0,t.jsx)(i.Z,{}):(0,t.jsx)(c.Z,{text:"Simpan",onClick:Z(_)})})]})})},w=l(686),S=l(8919),Z=l(8350),C=()=>{let{removeData:e}=(0,d.Z)(),[a,l]=(0,s.useState)(!1),[i,n]=(0,s.useState)(!1),[r,m]=(0,s.useState)(),[x,p]=(0,s.useState)(),[j,f]=(0,s.useState)(""),{role:g}=(0,s.useContext)(o.N),v=async a=>{let{id:l,isDelete:t}=a;if(m(l),t){let{data:a}=await e(r);(0,h.Z)({event:a}),n(!1)}else n(!0)};return(0,t.jsxs)("div",{className:"flex flex-col h-full",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)(S.Toaster,{}),(0,t.jsx)(b,{dtEdit:x,showModal:a,setShowModal:l}),(0,t.jsx)(w.Z,{showDel:i,setShowDel:n,setDelete:v}),"personalia"===g&&(0,t.jsxs)("div",{className:"mb-4 flex justify-between",children:[(0,t.jsx)("div",{children:(0,t.jsx)("p",{children:(0,t.jsx)("span",{className:"capitalize",children:"Silahkan Mengolah data pendidikan pegawai"})})}),(0,t.jsx)("div",{children:(0,t.jsx)(c.Z,{addClass:"capitalize",text:"Tambah Pendidikan",onClick:()=>{l(!0),p(null)}})})]}),(0,t.jsx)(Z.Z,{placeholder:"Cari Pegawai",onChange:e=>f(e)})]}),(0,t.jsx)(u,{setDelete:v,setEdit:e=>{l(!0),p(e)},search:j})]})}},4496:function(e,a,l){"use strict";var t=l(9268);l(6006);var s=l(7133),i=l(9700);a.Z=e=>{let{dataDb:a,body:l,control:n,required:r,name:d,errors:o,placeholder:u,addClass:c,label:m,defaultOptions:x=!0}=e,h={multiValue:(e,a)=>a.data.isFixed?{...e,backgroundColor:"gray"}:e,multiValueLabel:(e,a)=>a.data.isFixed?{...e,fontWeight:"bold",color:"white",paddingRight:6}:e,multiValueRemove:(e,a)=>a.data.isFixed?{...e,display:"none"}:e},p=(e,a)=>{let l=e[a];if("id"===a)return{value:l,label:""};if(!a.includes("."))return{value:"",label:l};{let[l,...t]=a.split("."),s=e[l];return p(s,t.join("."))}},j=()=>{let e=a&&a.map((e,a)=>{let t=l.map(a=>p(e,a)),s=t.map(e=>e.label).filter(e=>""!==e),i=s.join(s.length>1?" - ":"");return{value:t.find(e=>""!==e.value).value,label:i}});return e},f=e=>{var a;return null===(a=j())||void 0===a?void 0:a.filter(a=>a.label.toLowerCase().includes(e.toLowerCase()))},g=(e,a)=>{setTimeout(()=>{a(f(e))},1e3)};return(0,t.jsxs)("div",{className:c,children:[m&&(0,t.jsx)("label",{className:"text-sm font-medium text-gray-700 tracking-wide",children:m}),r&&(0,t.jsx)("span",{className:"ml-1 text-red-600",children:"*"}),(0,t.jsx)(i.Qr,{name:d,control:n,rules:{required:r},render:e=>{var a;let{field:{onChange:l,value:i,ref:n}}=e;return(0,t.jsx)(s.Z,{cacheOptions:!0,defaultOptions:x,isClearable:!0,isSearchable:!0,loadOptions:g,placeholder:u,menuPlacement:"auto",menuPosition:"fixed",menuPortalTarget:document.body,styles:h,ref:n,value:(null===(a=j())||void 0===a?void 0:a.find(e=>e.value===i))||null,onChange:e=>l(e?e.value:e)})}}),(null==o?void 0:o.type)==="required"&&(0,t.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[m," tidak boleh kosong"]})]})}},5366:function(e,a,l){"use strict";l.d(a,{N:function(){return n}});var t=l(9268),s=l(6006),i=l(1712);let n=(0,s.createContext)({role:null});a.Z=e=>{let{children:a}=e,[l,r]=(0,s.useState)(null);return(0,s.useEffect)(()=>{let e=i.Z.get("role");return r(e||null),()=>{r(null)}},[]),(0,t.jsx)(n.Provider,{value:{role:l},children:a})}}},function(e){e.O(0,[6680,4550,5678,6394,9700,3088,3861,7133,3729,6907,9253,7698,1744],function(){return e(e.s=2479)}),_N_E=e.O()}]);