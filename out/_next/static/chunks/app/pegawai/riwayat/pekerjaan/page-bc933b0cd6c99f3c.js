(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[729],{9218:function(a,t,e){Promise.resolve().then(e.bind(e,6931))},6931:function(a,t,e){"use strict";e.r(t),e.d(t,{default:function(){return x}});var r=e(9268),s=e(6006),n=e(593),d=e(5437),i=e(9639),o=e(5282),l=e(5683),u=a=>{let{setDelete:t,setEdit:e,search:u}=a,{showPegawai:c}=(0,s.useContext)(o.T),{setShowRiwayatPekerjaan:p,dtRiwayatPekerjaan:h}=(0,l.Z)(),[g,m]=(0,s.useState)(1),[w,k]=(0,s.useState)(10),[j,_]=(0,s.useState)(!0),y=async()=>{await p(null==c?void 0:c.id),_(!1)};return(0,s.useEffect)(()=>(y(),()=>{}),[g,w,null==c?void 0:c.id]),(0,s.useEffect)(()=>{m(1),y()},[u]),(0,r.jsx)("div",{className:"flex-1 flex-col max-w-full h-full overflow-auto",children:j?(0,r.jsx)(n.Z,{}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"",children:(0,r.jsx)(i.Z,{headTable:["No","Jabatan","Instansi","Masuk","Selesai","Aksi"],tableBodies:["jabatan","instansi","mulai","seles"],dataTable:h.data,page:g,limit:w,setEdit:e,setDelete:t,ubah:!0,hapus:!0})}),(null==h?void 0:h.last_page)>1&&(0,r.jsx)("div",{className:"mt-4",children:(0,r.jsx)(d.Z,{currentPage:null==h?void 0:h.current_page,totalPages:null==h?void 0:h.last_page,setPage:m})})]})})},c=e(366),p=e(2985),h=e(7808),g=e(9442),m=e(9700),w=e(5407),k=e(2743);e(6760);var j=a=>{let{register:t,errors:e,control:n,dtEdit:d,watch:i,setValue:o,showModal:l,mulai:u,setMulai:c,seles:h,setSeles:g}=a,{setPegawai:m,dtPegawai:j}=(0,k.Z)(),_=async a=>{let{search:t}=a;await m({search:t,tipe:"dosen"})};return(0,s.useEffect)(()=>{_({})},[l]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p.Z,{label:"Jabatan",name:"jabatan",register:t,required:!0,minLength:3,errors:e.jabatan,addClass:"col-span-4 lg:col-span-2"}),(0,r.jsx)(p.Z,{label:"Instansi",name:"instansi",register:t,required:!0,minLength:3,errors:e.instansi,addClass:"col-span-4 lg:col-span-2"}),(0,r.jsx)(w.Z,{label:"Masuk",name:"mulai",control:n,startDate:u,setStartDate:c,required:!0,errors:e.mulai,addClass:"col-span-4 lg:col-span-2"}),(0,r.jsx)(w.Z,{label:"Selesai",name:"seles",control:n,startDate:h,setStartDate:g,required:!0,errors:e.seles,addClass:"col-span-4 lg:col-span-2"})]})},_=a=>{let{showModal:t,setShowModal:e,dtEdit:n}=a,{showPegawai:d}=(0,s.useContext)(o.T),[i,u]=(0,s.useState)(""),[w,k]=(0,s.useState)(""),{addData:_,updateData:y}=(0,l.Z)(),{register:v,handleSubmit:S,setValue:x,control:D,formState:{errors:f},watch:P}=(0,m.cI)(),b=()=>{x("id",""),x("jabatan",""),x("instansi",""),u(""),x("mulai",""),k(""),x("seles","")};(0,s.useEffect)(()=>{n?(x("id",n.id),x("jabatan",n.jabatan),x("instansi",n.instansi),x("mulai",n.mulai),u(new Date(n.mulai)),x("seles",n.seles),k(new Date(n.seles))):b()},[t,n]);let Z=async a=>{if(a.pegawai_id=null==d?void 0:d.id,console.log({row:a}),n){let{data:t}=await y(n.id,a);(0,g.Z)({event:t}),e(!1)}else{let{data:t}=await _(a);console.log({data:t}),(0,g.Z)({event:t}),(null==t?void 0:t.type)!=="success"||b()}};return(0,r.jsx)(h.Z,{title:"Form RiwayatPekerjaan",showModal:t,setShowModal:e,children:(0,r.jsxs)("form",{onSubmit:S(Z),children:[(0,r.jsx)(p.Z,{name:"id",register:v,type:"hidden"}),(0,r.jsx)("div",{className:"grid grid-cols-4 gap-2 mb-4",children:(0,r.jsx)(j,{register:v,errors:f,dtEdit:n,control:D,watch:P,setValue:x,showModal:t,mulai:i,setMulai:u,seles:w,setSeles:k})}),(0,r.jsx)("div",{children:(0,r.jsx)(c.Z,{text:"Simpan",onClick:S(Z)})})]})})},y=e(686),v=e(8919),S=e(8350),x=()=>{let{removeData:a}=(0,l.Z)(),[t,e]=(0,s.useState)(!1),[n,d]=(0,s.useState)(!1),[i,o]=(0,s.useState)(),[p,h]=(0,s.useState)(),[m,w]=(0,s.useState)(""),k=async t=>{let{id:e,isDelete:r}=t;if(o(e),r){let{data:t}=await a(i);(0,g.Z)({event:t}),d(!1)}else d(!0)};return(0,r.jsxs)("div",{className:"flex flex-col h-full",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(v.x7,{}),(0,r.jsx)(_,{dtEdit:p,showModal:t,setShowModal:e}),(0,r.jsx)(y.Z,{showDel:n,setShowDel:d,setDelete:k}),(0,r.jsxs)("div",{className:"mb-4 flex justify-between",children:[(0,r.jsx)("div",{children:(0,r.jsx)("p",{children:(0,r.jsx)("span",{className:"capitalize",children:"Silahkan Mengolah data pendidikan pegawai"})})}),(0,r.jsx)("div",{children:(0,r.jsx)(c.Z,{addClass:"capitalize",text:"Tambah Pendidikan",onClick:()=>{e(!0),h(null)}})})]}),(0,r.jsx)(S.Z,{placeholder:"Cari Pegawai",onChange:a=>w(a)})]}),(0,r.jsx)(u,{setDelete:k,setEdit:a=>{e(!0),h(a)},search:m})]})}},5407:function(a,t,e){"use strict";var r=e(9268);e(6006);var s=e(9700),n=e(9977),d=e.n(n),i=e(5326),o=e.n(i);t.Z=a=>{let{control:t,required:e,name:n,errors:i,addClass:l,label:u,startDate:c,setStartDate:p}=a;return(0,r.jsxs)("div",{className:l,children:[(0,r.jsxs)("label",{className:"text-sm font-medium text-gray-700 tracking-wide block",children:[u,e&&(0,r.jsx)("span",{className:"ml-1 text-red-600",children:"*"})]}),(0,r.jsx)(s.Qr,{name:n,control:t,rules:{required:e},render:a=>{let{field:t}=a;return(0,r.jsx)(d(),{selected:c,onChange:a=>{if(a){p(a);let e=o()(a).format("YYYY-MM-DD");t.onChange(e)}else p(null),t.onChange("")},dateFormat:"dd/MM/yyyy",value:c||"",peekNextMonth:!0,showMonthDropdown:!0,showYearDropdown:!0,dropdownMode:"select",className:"w-full border rounded-lg py-2 px-4"})}}),(null==i?void 0:i.type)==="required"&&(0,r.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[u," tidak boleh kosong"]})]})}},5282:function(a,t,e){"use strict";e.d(t,{T:function(){return i}});var r=e(9268),s=e(6006),n=e(1712),d=e(8468);let i=(0,s.createContext)({showPegawai:null});t.Z=a=>{let{children:t}=a,e=parseInt(n.Z.get("user_id")),{setShowPegawai:o,showPegawai:l}=(0,d.Z)();return(0,s.useEffect)(()=>(o(e),()=>{o(0)}),[e,o]),(0,r.jsx)(i.Provider,{value:{showPegawai:l},children:t})}},2743:function(a,t,e){"use strict";var r=e(2561),s=e(4475),n=e(3415),d=e(3672);let i=(0,r.Ue)((0,s.mW)((a,t)=>({dtPegawai:[],setPegawai:async t=>{let{page:e=1,limit:r=10,search:s,tipe:d}=t;try{let t=await (0,n.hi)({method:"get",url:"/personalia/pegawai",params:{limit:r,page:e,search:s,tipe:d}});return a(a=>({...a,dtPegawai:t.data})),{status:"berhasil",data:t.data}}catch(a){return{status:"error",error:a.response.data}}},setApiDokumenPegawai:async t=>{let{search:e,page:r,id:s}=t;try{let t=await (0,n.hi)({method:"get",url:"/personalia/pegawai/dokumen/".concat(s),params:{search:e,page:r}});return d.Z.getState().setDokumen({page:r,search:e}),a(a=>({...a,dtPegawai:t.data.data})),{status:"berhasil",data:t.data}}catch(a){return{status:"error",error:a.response.data}}}})));t.Z=i},3672:function(a,t,e){"use strict";var r=e(2561),s=e(4475),n=e(3415),d=e(4406),i=e(2743);let o=(0,r.Ue)((0,s.mW)((a,t)=>({setFormData:a=>{let t=new FormData;return t.append("pegawai_id",a.pegawai_id),t.append("judul",a.judul),t.append("gambar",a.gambar),t},dtDokumen:[],showDokumen:[],setDokumen:async t=>{let{page:e=1,limit:r=10,tipe:s,search:i}=t;try{let t=await d.Z.getState().setToken(),o=await (0,n.Sj)({method:"get",url:"/personalia/dokumen_pegawai",headers:{Authorization:"Bearer ".concat(t)},params:{limit:r,page:e,search:i,tipe:s}});return a(a=>({...a,dtDokumen:o.data.data})),{status:"berhasil",data:o.data}}catch(a){var o;return{status:"error",error:null===(o=a.response)||void 0===o?void 0:o.data}}},setShowDokumen:async t=>{try{let e=await d.Z.getState().setToken(),r=await (0,n.Sj)({method:"get",url:"/personalia/dokumen_pegawai/".concat(t),headers:{Authorization:"Bearer ".concat(e)}});return a(a=>({...a,showDokumen:r.data.data})),{status:"berhasil",data:r.data}}catch(a){var e;return{status:"error",error:null===(e=a.response)||void 0===e?void 0:e.data}}},addData:async e=>{let r=(null==e?void 0:e.gambar)?t().setFormData(e):e;try{let t=await d.Z.getState().setToken(),s=await (0,n.Sj)({method:"post",url:"/personalia/dokumen_pegawai",headers:{Authorization:"Bearer ".concat(t),"Content-Type":"multipart/form-data"},data:r});return a(a=>({dtDokumen:{last_page:a.dtDokumen.last_page,current_page:a.dtDokumen.current_page,data:[s.data.data,...a.dtDokumen.data]}})),i.Z.getState().setApiDokumenPegawai({id:e.pegawai_id}),{status:"berhasil tambah",data:s.data}}catch(a){return console.log({error:a}),{status:"error",data:a.response.data}}},removeData:async t=>{try{let e=await d.Z.getState().setToken(),r=await (0,n.Sj)({method:"delete",url:"/personalia/dokumen_pegawai/".concat(t),headers:{Authorization:"Bearer ".concat(e)}});return a(a=>({dtDokumen:{last_page:a.dtDokumen.last_page,current_page:a.dtDokumen.current_page,data:a.dtDokumen.data.filter(a=>a.id!==t)}})),i.Z.getState().setApiDokumenPegawai({id:r.data.data.pegawai_id}),{status:"berhasil hapus",data:r.data}}catch(a){return{status:"error",data:a.response.data}}},updateData:async(e,r)=>{delete r.id;let s=(null==r?void 0:r.gambar)?t().setFormData(r):r,o=await d.Z.getState().setToken();try{let t=await (0,n.Sj)({url:"/personalia/dokumen_pegawai/".concat(e),method:"post",headers:(null==r?void 0:r.gambar)?{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(o)}:{Authorization:"Bearer ".concat(o)},data:s,params:{_method:"PUT"}});return a(a=>({dtDokumen:{last_page:a.dtDokumen.last_page,current_page:a.dtDokumen.current_page,data:a.dtDokumen.data.map(a=>a.id===e?{...a,...t.data.data}:a)}})),i.Z.getState().setApiDokumenPegawai({id:t.data.data.pegawai_id}),{status:"berhasil update",data:t.data}}catch(a){return{status:"error",data:a.response.data}}}})));t.Z=o},8468:function(a,t,e){"use strict";var r=e(2561),s=e(4475),n=e(3415),d=e(4406);let i=(0,r.Ue)((0,s.mW)((a,t)=>({setFormData:a=>{let t=new FormData;return t.append("pangkat_id",a.pangkat_id),t.append("tipe",a.tipe),t.append("NIK",a.NIK),t.append("NIDN",a.NIDN),t.append("nama",a.nama),t.append("tempat_lahir",a.tempat_lahir),t.append("tgl_lahir",a.tgl_lahir),t.append("no_hp",a.no_hp),t.append("jumlah_anak",a.jumlah_anak),t.append("jenkel",a.jenkel),t.append("pend_terakhir",a.pend_terakhir),t.append("alamat",a.alamat),t.append("thn_terima",a.thn_terima),t.append("foto",a.foto),t},dtPegawai:[],showPegawai:[],setPegawai:async t=>{let{page:e=1,limit:r=10,search:s,tipe:i}=t;try{let t=await d.Z.getState().setToken(),o=await (0,n.Sj)({method:"get",url:"/personalia/pegawai",headers:{Authorization:"Bearer ".concat(t)},params:{limit:r,page:e,search:s,tipe:i}});return a(a=>({...a,dtPegawai:o.data.data})),{status:"berhasil",data:o.data}}catch(a){var o;return{status:"error",error:null===(o=a.response)||void 0===o?void 0:o.data}}},setShowPegawai:async t=>{try{let e=await d.Z.getState().setToken(),r=await (0,n.Sj)({method:"get",url:"/personalia/pegawai/".concat(t),headers:{Authorization:"Bearer ".concat(e)}});return a(a=>({...a,showPegawai:r.data.data})),{status:"berhasil",data:r.data}}catch(a){var e;return{status:"error",error:null===(e=a.response)||void 0===e?void 0:e.data}}},addData:async e=>{let r=(null==e?void 0:e.foto)?t().setFormData(e):e;try{let t=await d.Z.getState().setToken(),e=await (0,n.Sj)({method:"post",url:"/personalia/pegawai",headers:{Authorization:"Bearer ".concat(t),"Content-Type":"multipart/form-data"},data:r});return a(a=>({dtPegawai:{last_page:a.dtPegawai.last_page,current_page:a.dtPegawai.current_page,data:[e.data.data,...a.dtPegawai.data]}})),{status:"berhasil tambah",data:e.data}}catch(a){return{status:"error",data:a.response.data}}},removeData:async t=>{try{let e=await d.Z.getState().setToken(),r=await (0,n.Sj)({method:"delete",url:"/personalia/pegawai/".concat(t),headers:{Authorization:"Bearer ".concat(e)}});return a(a=>({dtPegawai:{last_page:a.dtPegawai.last_page,current_page:a.dtPegawai.current_page,data:a.dtPegawai.data.filter(a=>a.id!==t)}})),{status:"berhasil hapus",data:r.data}}catch(a){return{status:"error",data:a.response.data}}},updateData:async(e,r)=>{delete r.id;let s=(null==r?void 0:r.foto)?t().setFormData(r):r,i=await d.Z.getState().setToken();try{let t=await (0,n.Sj)({url:"/personalia/pegawai/".concat(e),method:"post",headers:(null==r?void 0:r.foto)?{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(i)}:{Authorization:"Bearer ".concat(i)},data:s,params:{_method:"PUT"}});return a(a=>({dtPegawai:{last_page:a.dtPegawai.last_page,current_page:a.dtPegawai.current_page,data:a.dtPegawai.data.map(a=>a.id===e?{...a,...t.data.data}:a)}})),{status:"berhasil update",data:t.data}}catch(a){return{status:"error",data:a.response.data}}}})));t.Z=i},5683:function(a,t,e){"use strict";var r=e(2561),s=e(4475),n=e(3415),d=e(4406);let i=(0,r.Ue)((0,s.mW)((a,t)=>({dtRiwayatPekerjaan:[],showRiwayatPekerjaan:[],setRiwayatPekerjaan:async t=>{let{page:e=1,limit:r=10,search:s,tipe:i}=t;try{let t=await d.Z.getState().setToken(),o=await (0,n.Sj)({method:"get",url:"/personalia/riwayat_pekerjaan",headers:{Authorization:"Bearer ".concat(t)},params:{limit:r,page:e,search:s,tipe:i}});return a(a=>({...a,dtRiwayatPekerjaan:o.data.data})),{status:"berhasil",data:o.data}}catch(a){var o;return{status:"error",error:null===(o=a.response)||void 0===o?void 0:o.data}}},setShowRiwayatPekerjaan:async t=>{try{let e=await d.Z.getState().setToken(),r=await (0,n.Sj)({method:"get",url:"/personalia/riwayat_pekerjaan/".concat(t),headers:{Authorization:"Bearer ".concat(e)}});return a(a=>({...a,dtRiwayatPekerjaan:r.data.data})),{status:"berhasil",data:r.data}}catch(a){var e;return{status:"error",error:null===(e=a.response)||void 0===e?void 0:e.data}}},addData:async t=>{try{let e=await d.Z.getState().setToken(),r=await (0,n.Sj)({method:"post",url:"/personalia/riwayat_pekerjaan",headers:{Authorization:"Bearer ".concat(e)},data:t});return a(a=>({dtRiwayatPekerjaan:{last_page:a.dtRiwayatPekerjaan.last_page,current_page:a.dtRiwayatPekerjaan.current_page,data:[r.data.data,...a.dtRiwayatPekerjaan.data]}})),{status:"berhasil tambah",data:r.data}}catch(a){return{status:"error",data:a.response.data}}},removeData:async t=>{try{let e=await d.Z.getState().setToken(),r=await (0,n.Sj)({method:"delete",url:"/personalia/riwayat_pekerjaan/".concat(t),headers:{Authorization:"Bearer ".concat(e)}});return a(a=>({dtRiwayatPekerjaan:{last_page:a.dtRiwayatPekerjaan.last_page,current_page:a.dtRiwayatPekerjaan.current_page,data:a.dtRiwayatPekerjaan.data.filter(a=>a.id!==t)}})),{status:"berhasil hapus",data:r.data}}catch(a){return{status:"error",data:a.response.data}}},updateData:async(t,e)=>{try{let r=await d.Z.getState().setToken(),s=await (0,n.Sj)({method:"PUT",url:"/personalia/riwayat_pekerjaan/".concat(t),headers:{Authorization:"Bearer ".concat(r)},data:e});return a(a=>({dtRiwayatPekerjaan:{last_page:a.dtRiwayatPekerjaan.last_page,current_page:a.dtRiwayatPekerjaan.current_page,data:a.dtRiwayatPekerjaan.data.map(a=>a.id===t?{...a,...s.data.data}:a)}})),{status:"berhasil update",data:s.data}}catch(a){return{status:"error",data:a.response.data}}}})));t.Z=i}},function(a){a.O(0,[6680,4550,635,9218,3088,4925,9977,3729,9253,7698,1744],function(){return a(a.s=9218)}),_N_E=a.O()}]);