(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3980],{5359:function(e,a,t){Promise.resolve().then(t.bind(t,8351))},8351:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return N}});var l=t(9268),s=t(6006),i=t(593),n=t(5437),d=t(9639),r=t(7191),o=t(5366),u=e=>{let{setDelete:a,setEdit:t,search:u}=e,{setRiwayatJabatan:c,dtRiwayatJabatan:h}=(0,r.Z)(),[x,j]=(0,s.useState)(1),[m,p]=(0,s.useState)(10),[f,b]=(0,s.useState)(!0),[w,g]=(0,s.useState)(""),{role:v}=(0,s.useContext)(o.N),S=async()=>{await c({page:x,limit:m,search:u,jenis:w}),b(!1)};(0,s.useEffect)(()=>(S(),()=>{}),[x,m]),(0,s.useEffect)(()=>{j(1),S()},[u]);let Z=["No","Nama","Jabatan","Mulai","Selesai","Aksi"];return"personalia"!==v&&Z.splice(5),(0,l.jsx)("div",{className:"flex-1 flex-col max-w-full h-full overflow-auto",children:f?(0,l.jsx)(i.Z,{}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"",children:(0,l.jsx)(d.Z,{headTable:Z,tableBodies:["pegawai.nama","jabatan.nama","mulai","seles"],dataTable:h.data,page:x,limit:m,setEdit:t,setDelete:a,ubah:"personalia"===v,hapus:"personalia"===v})}),(null==h?void 0:h.last_page)>1&&(0,l.jsx)("div",{className:"mt-4",children:(0,l.jsx)(n.Z,{currentPage:null==h?void 0:h.current_page,totalPages:null==h?void 0:h.last_page,setPage:j})})]})})},c=t(366),h=t(2985),x=t(7808),j=t(9442),m=t(9700),p=t(5407),f=t(4496),b=t(9879),w=t(2743);t(6760);var g=e=>{let{register:a,errors:t,control:i,dtEdit:n,watch:d,setValue:r,showModal:o,mulai:u,setMulai:c,seles:h,setSeles:x}=e,{setPegawai:j,dtPegawai:m}=(0,w.Z)(),{setJabatan:g,dtJabatan:v}=(0,b.Z)(),S=async e=>{let{search:a}=e;await j({search:a,tipe:"dosen"})},Z=async e=>{let{search:a}=e;await g({search:a})};return(0,s.useEffect)(()=>{S({}),Z({})},[o]),(0,l.jsxs)(l.Fragment,{children:[(null==m?void 0:m.data)&&(0,l.jsx)(f.Z,{label:"Pegawai",placeholder:"Pilih Pegawai",name:"pegawai_id",dataDb:null==m?void 0:m.data,body:["id","NIK","nama"],control:i,required:!0,errors:t.pegawai_id,addClass:"col-span-4"}),(null==v?void 0:v.data)&&(0,l.jsx)(f.Z,{label:"Jabatan",placeholder:"Pilih Jabatan",name:"jabatan_id",dataDb:null==v?void 0:v.data,body:["id","nama"],control:i,required:!0,errors:t.jabatan_id,addClass:"col-span-4"}),(0,l.jsx)(p.Z,{label:"Mulai",name:"mulai",control:i,startDate:u,setStartDate:c,required:!0,errors:t.mulai,addClass:"col-span-4 lg:col-span-2"}),(0,l.jsx)(p.Z,{label:"Selesai",name:"seles",control:i,startDate:h,setStartDate:x,addClass:"col-span-4 lg:col-span-2"})]})},v=e=>{let{showModal:a,setShowModal:t,dtEdit:n}=e,[d,o]=(0,s.useState)(""),[u,p]=(0,s.useState)(""),[f,b]=(0,s.useState)(!1),{addData:w,updateData:v}=(0,r.Z)(),{register:S,handleSubmit:Z,setValue:_,control:N,formState:{errors:C},watch:D}=(0,m.cI)(),E=()=>{_("id",""),_("pegawai_id",""),_("jabatan_id",""),o(""),_("mulai",""),p(""),_("seles","")};(0,s.useEffect)(()=>{n?(_("id",n.id),_("pegawai_id",n.pegawai_id),_("jabatan_id",n.jabatan_id),_("mulai",n.mulai),o(new Date(n.mulai)),_("seles",n.seles),p(new Date(n.seles))):E()},[a,n]);let y=async e=>{if(b(!0),console.log({row:e}),n){let{data:a}=await v(n.id,e);(0,j.Z)({event:a}),t(!1)}else{let{data:a}=await w(e);console.log({data:a}),(0,j.Z)({event:a}),(null==a?void 0:a.type)!=="success"||E()}setTimeout(()=>{b(!1)},1500)};return(0,l.jsx)(x.Z,{title:"Form RiwayatJabatan",showModal:a,setShowModal:t,children:(0,l.jsxs)("form",{onSubmit:Z(y),children:[(0,l.jsx)(h.Z,{name:"id",register:S,type:"hidden"}),(0,l.jsx)("div",{className:"grid grid-cols-4 gap-2 mb-4",children:(0,l.jsx)(g,{register:S,errors:C,dtEdit:n,control:N,watch:D,setValue:_,showModal:a,mulai:d,setMulai:o,seles:u,setSeles:p})}),(0,l.jsx)("div",{children:f?(0,l.jsx)(i.Z,{}):(0,l.jsx)(c.Z,{text:"Simpan",onClick:Z(y)})})]})})},S=t(686),Z=t(8919),_=t(8350),N=()=>{let{removeData:e}=(0,r.Z)(),[a,t]=(0,s.useState)(!1),[i,n]=(0,s.useState)(!1),[d,h]=(0,s.useState)(),[x,m]=(0,s.useState)(),[p,f]=(0,s.useState)(""),{role:b}=(0,s.useContext)(o.N),w=async a=>{let{id:t,isDelete:l}=a;if(h(t),l){let{data:a}=await e(d);(0,j.Z)({event:a}),n(!1)}else n(!0)};return(0,l.jsxs)("div",{className:"flex flex-col h-full",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)(Z.Toaster,{}),(0,l.jsx)(v,{dtEdit:x,showModal:a,setShowModal:t}),(0,l.jsx)(S.Z,{showDel:i,setShowDel:n,setDelete:w}),"personalia"===b&&(0,l.jsxs)("div",{className:"mb-4 flex justify-between",children:[(0,l.jsx)("div",{children:(0,l.jsx)("p",{children:(0,l.jsx)("span",{className:"capitalize",children:"Silahkan Mengolah data jabatan pegawai"})})}),(0,l.jsx)("div",{children:(0,l.jsx)(c.Z,{addClass:"capitalize",text:"Tambah Jabatan",onClick:()=>{t(!0),m(null)}})})]}),(0,l.jsx)(_.Z,{placeholder:"Cari Pegawai",onChange:e=>f(e)})]}),(0,l.jsx)(u,{setDelete:w,setEdit:e=>{t(!0),m(e)},search:p})]})}},5366:function(e,a,t){"use strict";t.d(a,{N:function(){return n}});var l=t(9268),s=t(6006),i=t(1712);let n=(0,s.createContext)({role:null});a.Z=e=>{let{children:a}=e,[t,d]=(0,s.useState)(null);return(0,s.useEffect)(()=>{let e=i.Z.get("role");return d(e||null),()=>{d(null)}},[]),(0,l.jsx)(n.Provider,{value:{role:t},children:a})}}},function(e){e.O(0,[6680,4550,3674,1092,9700,3088,3861,7133,3729,1046,9253,7698,1744],function(){return e(e.s=5359)}),_N_E=e.O()}]);