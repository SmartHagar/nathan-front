(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6912],{4373:function(e,a,l){Promise.resolve().then(l.bind(l,4007))},4007:function(e,a,l){"use strict";l.r(a),l.d(a,{default:function(){return k}});var s=l(9268),t=l(6006),i=l(593),n=l(5437),r=l(9639),d=l(7700),o=e=>{let{setDelete:a,setEdit:l,search:o}=e,{setRiwayatPendidikan:u,dtRiwayatPendidikan:c}=(0,d.Z)(),[m,h]=(0,t.useState)(1),[x,j]=(0,t.useState)(10),[g,p]=(0,t.useState)(!0),[v,f]=(0,t.useState)(""),b=async()=>{await u({page:m,limit:x,search:o,tipe:v}),p(!1)};return(0,t.useEffect)(()=>(b(),()=>{}),[m,x]),(0,t.useEffect)(()=>{h(1),b()},[o]),(0,s.jsx)("div",{className:"flex-1 flex-col max-w-full h-full overflow-auto",children:g?(0,s.jsx)(i.Z,{}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"",children:(0,s.jsx)(r.Z,{headTable:["No","Nama","Jenjang","Instansi","Masuk","Selesai","Aksi"],tableBodies:["pegawai.nama","jenjang","instansi","mulai","seles"],dataTable:c.data,page:m,limit:x,setEdit:l,setDelete:a,ubah:!0,hapus:!0})}),(null==c?void 0:c.last_page)>1&&(0,s.jsx)("div",{className:"mt-4",children:(0,s.jsx)(n.Z,{currentPage:null==c?void 0:c.current_page,totalPages:null==c?void 0:c.last_page,setPage:h})})]})})},u=l(366),c=l(2985),m=l(7808),h=l(9442),x=l(9700),j=l(5407),g=l(1281),p=l(4496),v=l(2743);l(6760);var f=e=>{let{register:a,errors:l,control:i,dtEdit:n,watch:r,setValue:d,showModal:o,mulai:u,setMulai:m,seles:h,setSeles:x}=e,{setPegawai:f,dtPegawai:b}=(0,v.Z)(),S=async e=>{let{search:a}=e;await f({search:a,tipe:"dosen"})};return(0,t.useEffect)(()=>{S({})},[o]),(0,s.jsxs)(s.Fragment,{children:[(null==b?void 0:b.data)&&(0,s.jsx)(p.Z,{label:"Pegawai",placeholder:"Pilih Pegawai",name:"pegawai_id",dataDb:null==b?void 0:b.data,body:["id","NIK","nama"],control:i,required:!0,errors:l.pegawai_id,addClass:"col-span-4"}),(0,s.jsx)(g.u,{label:"Jenjang",name:"jenjang",options:[{label:"SD",value:"SD"},{label:"SMP",value:"SMP"},{label:"SMA/SMK",value:"SMA/SMK"},{label:"D3",value:"D3"},{label:"S1",value:"S1"},{label:"S2",value:"S2"},{label:"S3",value:"S3"}],register:a,addClass:"col-span-4 lg:col-span-1",defaultOption:"Pilih",required:!0,errors:l.jenjang}),(0,s.jsx)(c.Z,{label:"Instansi",name:"instansi",register:a,required:!0,minLength:3,errors:l.instansi,addClass:"col-span-4 lg:col-span-3"}),(0,s.jsx)(j.Z,{label:"Masuk",name:"mulai",control:i,startDate:u,setStartDate:m,required:!0,errors:l.mulai,addClass:"col-span-4 lg:col-span-2"}),(0,s.jsx)(j.Z,{label:"Selesai",name:"seles",control:i,startDate:h,setStartDate:x,required:!0,errors:l.seles,addClass:"col-span-4 lg:col-span-2"})]})},b=e=>{let{showModal:a,setShowModal:l,dtEdit:i}=e,[n,r]=(0,t.useState)(""),[o,j]=(0,t.useState)(""),{addData:g,updateData:p}=(0,d.Z)(),{register:v,handleSubmit:b,setValue:S,control:w,formState:{errors:Z},watch:k}=(0,x.cI)(),C=()=>{S("id",""),S("pegawai_id",""),S("jenjang",""),S("instansi",""),r(""),S("mulai",""),j(""),S("seles","")};(0,t.useEffect)(()=>{i?(S("id",i.id),S("pegawai_id",i.pegawai_id),S("jenjang",i.jenjang),S("instansi",i.instansi),S("mulai",i.mulai),r(new Date(i.mulai)),S("seles",i.seles),j(new Date(i.seles))):C()},[a,i]);let N=async e=>{if(console.log({row:e}),i){let{data:a}=await p(i.id,e);(0,h.Z)({event:a}),l(!1)}else{let{data:a}=await g(e);console.log({data:a}),(0,h.Z)({event:a}),(null==a?void 0:a.type)!=="success"||C()}};return(0,s.jsx)(m.Z,{title:"Form RiwayatPendidikan",showModal:a,setShowModal:l,children:(0,s.jsxs)("form",{onSubmit:b(N),children:[(0,s.jsx)(c.Z,{name:"id",register:v,type:"hidden"}),(0,s.jsx)("div",{className:"grid grid-cols-4 gap-2 mb-4",children:(0,s.jsx)(f,{register:v,errors:Z,dtEdit:i,control:w,watch:k,setValue:S,showModal:a,mulai:n,setMulai:r,seles:o,setSeles:j})}),(0,s.jsx)("div",{children:(0,s.jsx)(u.Z,{text:"Simpan",onClick:b(N)})})]})})},S=l(686),w=l(8919),Z=l(8350),k=()=>{let{removeData:e}=(0,d.Z)(),[a,l]=(0,t.useState)(!1),[i,n]=(0,t.useState)(!1),[r,c]=(0,t.useState)(),[m,x]=(0,t.useState)(),[j,g]=(0,t.useState)(""),p=async a=>{let{id:l,isDelete:s}=a;if(c(l),s){let{data:a}=await e(r);(0,h.Z)({event:a}),n(!1)}else n(!0)};return(0,s.jsxs)("div",{className:"flex flex-col h-full",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)(w.x7,{}),(0,s.jsx)(b,{dtEdit:m,showModal:a,setShowModal:l}),(0,s.jsx)(S.Z,{showDel:i,setShowDel:n,setDelete:p}),(0,s.jsxs)("div",{className:"mb-4 flex justify-between",children:[(0,s.jsx)("div",{children:(0,s.jsx)("p",{children:(0,s.jsx)("span",{className:"capitalize",children:"Silahkan Mengolah data pendidikan pegawai"})})}),(0,s.jsx)("div",{children:(0,s.jsx)(u.Z,{addClass:"capitalize",text:"Tambah Pendidikan",onClick:()=>{l(!0),x(null)}})})]}),(0,s.jsx)(Z.Z,{placeholder:"Cari Pegawai",onChange:e=>g(e)})]}),(0,s.jsx)(o,{setDelete:p,setEdit:e=>{l(!0),x(e)},search:j})]})}},4496:function(e,a,l){"use strict";var s=l(9268);l(6006);var t=l(7133),i=l(9700);a.Z=e=>{let{dataDb:a,body:l,control:n,required:r,name:d,errors:o,placeholder:u,addClass:c,label:m,defaultOptions:h=!0}=e,x={multiValue:(e,a)=>a.data.isFixed?{...e,backgroundColor:"gray"}:e,multiValueLabel:(e,a)=>a.data.isFixed?{...e,fontWeight:"bold",color:"white",paddingRight:6}:e,multiValueRemove:(e,a)=>a.data.isFixed?{...e,display:"none"}:e},j=(e,a)=>{let l=e[a];if("id"===a)return{value:l,label:""};if(!a.includes("."))return{value:"",label:l};{let[l,...s]=a.split("."),t=e[l];return j(t,s.join("."))}},g=()=>{let e=a&&a.map((e,a)=>{let s=l.map(a=>j(e,a)),t=s.map(e=>e.label).filter(e=>""!==e),i=t.join(t.length>1?" - ":"");return{value:s.find(e=>""!==e.value).value,label:i}});return e},p=e=>{var a;return null===(a=g())||void 0===a?void 0:a.filter(a=>a.label.toLowerCase().includes(e.toLowerCase()))},v=(e,a)=>{setTimeout(()=>{a(p(e))},1e3)};return(0,s.jsxs)("div",{className:c,children:[m&&(0,s.jsx)("label",{className:"text-sm font-medium text-gray-700 tracking-wide",children:m}),r&&(0,s.jsx)("span",{className:"ml-1 text-red-600",children:"*"}),(0,s.jsx)(i.Qr,{name:d,control:n,rules:{required:r},render:e=>{var a;let{field:{onChange:l,value:i,ref:n}}=e;return(0,s.jsx)(t.Z,{cacheOptions:!0,defaultOptions:h,isClearable:!0,isSearchable:!0,loadOptions:v,placeholder:u,menuPlacement:"auto",menuPosition:"fixed",menuPortalTarget:document.body,styles:x,ref:n,value:(null===(a=g())||void 0===a?void 0:a.find(e=>e.value===i))||null,onChange:e=>l(e?e.value:e)})}}),(null==o?void 0:o.type)==="required"&&(0,s.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[m," tidak boleh kosong"]})]})}}},function(e){e.O(0,[6680,4550,635,9218,3088,4925,9977,7133,3729,2571,9253,7698,1744],function(){return e(e.s=4373)}),_N_E=e.O()}]);