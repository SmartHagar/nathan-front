(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2729],{9212:function(e,a,t){Promise.resolve().then(t.bind(t,9797))},9797:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return A}});var r=t(9268),l=t(6006),n=t(593),i=t(5437),s=t(9639),o=t(8468),d=t(7808),u=e=>{var a,t;let{showModal:l,setShowModal:n,rowData:i}=e;return(0,r.jsx)(d.Z,{title:"".concat(null==i?void 0:i.nama),showModal:l,setShowModal:n,width:"500px",children:(0,r.jsxs)("table",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Email"}),(0,r.jsx)("td",{className:"px-2",children:":"}),(0,r.jsx)("td",{children:null==i?void 0:null===(a=i.user)||void 0===a?void 0:a.email})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Password"}),(0,r.jsx)("td",{className:"px-2",children:":"}),(0,r.jsx)("td",{children:null==i?void 0:null===(t=i.user)||void 0===t?void 0:t.show_password})]})]})})},c=t(8136),h=t(3415),p=e=>{let{setDelete:a,setEdit:t,search:d,tipe:p}=e,{setPegawai:m,dtPegawai:g}=(0,o.Z)(),[x,f]=(0,l.useState)(1),[v,j]=(0,l.useState)(10),[w,b]=(0,l.useState)(!0),[k,y]=(0,l.useState)(!1),[_,N]=(0,l.useState)(),S=async()=>{await m({page:x,limit:v,search:d,tipe:p}),b(!1)};(0,l.useEffect)(()=>(S(),()=>{}),[x,v]),(0,l.useEffect)(()=>{f(1),S()},[d,p]);let P=["No","NIK","Nama","Golongan","Thn. Terima","Foto","Aksi"],C=["NIK","nama","pangkat_gol_ru","thn_terima","foto"];"dosen"===p&&(P.splice(2,0,"NIDN"),C.splice(1,0,"NIDN"));let D=e=>{window.open("".concat(h._n,"/export/biodata/").concat(e),"_blank")};return(0,r.jsxs)("div",{className:"flex-1 flex-col max-w-full h-full overflow-auto",children:[(0,r.jsx)(u,{showModal:k,setShowModal:y,rowData:_}),w?(0,r.jsx)(n.Z,{}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"",children:(0,r.jsx)(s.Z,{headTable:P,tableBodies:C,dataTable:g.data,page:x,limit:v,setEdit:t,setDelete:a,ubah:!0,hapus:!0,costume:e=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.s$b,{size:20,title:"Cetak Biodata",className:"cursor-pointer hover:text-link",onClick:()=>D(e.id)}),(0,r.jsx)(c.Hfo,{size:20,className:"cursor-pointer hover:text-link",onClick:()=>(N(e),y(!0))})]})})}),(null==g?void 0:g.last_page)>1&&(0,r.jsx)("div",{className:"mt-4",children:(0,r.jsx)(i.Z,{currentPage:null==g?void 0:g.current_page,totalPages:null==g?void 0:g.last_page,setPage:f})})]})]})},m=t(366),g=t(2985),x=t(9442),f=t(9700),v=t(5407),j=t(63),w=e=>{let{value:a,register:t,required:l,name:n,defaultChecked:i,id:s,errors:o}=e;return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"flex gap-1 items-start",children:[(0,r.jsx)("input",{type:"radio",value:a,id:s.toString(),name:n,...t(n,{required:l}),className:"form-radio h-6 w-4 text-primary",defaultChecked:i}),(0,r.jsx)("label",{htmlFor:s.toString(),children:a})]}),(null==o?void 0:o.type)==="required"&&(0,r.jsx)("p",{className:"text-red-500 font-inter italic text-sm",children:"Tidak boleh kosong"})]})},b=t(4496),k=t(9711),y=t(431),_=t(7304);t(3779),t(8431),t(9855);var N=(0,l.forwardRef)(function(e,a){var t=(0,k.u)(e);return l.createElement(_.S,(0,y.Z)({ref:a},t))}),S=t(5326),P=t.n(S),C=e=>{let{label:a,start:t=2012,end:l=P()().format("YYYY"),control:n,required:i,name:s,errors:o,addClass:d,menuPosition:u="fixed",placeholder:c="Pilih Tahun"}=e,h=()=>{let e=[];for(let a=l;a>=t;a--)e.push({value:a,label:a});return e};return(0,r.jsxs)("div",{className:d,children:[(0,r.jsx)("label",{className:"text-sm font-medium text-gray-700 tracking-wide",children:a}),i&&(0,r.jsx)("span",{className:"ml-1 text-red-600",children:"*"}),(0,r.jsx)(f.Qr,{name:s,control:n,rules:{required:i},render:e=>{let{field:{onChange:a,value:t,name:l,ref:n}}=e;return(0,r.jsx)(N,{isClearable:!0,isSearchable:!0,options:h(),placeholder:c,menuPosition:u,menuPortalTarget:document.body,ref:n,value:t?h().find(e=>e.value===t):t,onChange:e=>a(e?e.value:e)})}}),(null==o?void 0:o.type)==="required"&&(0,r.jsx)("p",{className:"text-red-500 font-inter italic text-sm",children:"Tahun tidak boleh kosong"})]})},D=t(2561),Z=t(4475);let F=(0,D.Ue)((0,Z.mW)((e,a)=>({dtPangkat:[],setPangkat:async a=>{let{page:t=1,limit:r=10,search:l}=a;try{let a=await (0,h.hi)({method:"get",url:"/personalia/pangkat",params:{limit:r,page:t,search:l}});return e(e=>({...e,dtPangkat:a.data})),{status:"berhasil",data:a.data}}catch(e){return{status:"error",error:e.response.data}}}})));t(6760);var I=e=>{var a;let{register:t,errors:n,control:i,dtEdit:s,watch:o,setValue:d,showModal:u,tgl_lahir:c,setTgl_lahir:h,tipe:p,myFile:m,setMyFile:x}=e,{setPangkat:f,dtPangkat:k}=F(),y=async e=>{let{search:a}=e;await f({search:a})};return(0,l.useEffect)(()=>{y({})},[u]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(g.Z,{label:"NIK",name:"NIK",register:t,required:!0,minLength:3,errors:n.NIK,addClass:"col-span-4"}),(0,r.jsx)(g.Z,{label:"Nama",name:"nama",register:t,required:!0,minLength:3,errors:n.nama,addClass:"col-span-4"}),"dosen"===p&&(0,r.jsx)(g.Z,{label:"NIDN",name:"NIDN",register:t,addClass:"col-span-4"}),(null==k?void 0:k.data)&&(0,r.jsx)(b.Z,{label:"Pangkat",placeholder:"Pilih Pangkat",name:"pangkat_id",dataDb:null==k?void 0:k.data,body:["id","gol","ruang"],control:i,required:!0,errors:n.pangkat_id,addClass:"col-span-4"}),(0,r.jsx)("div",{className:"col-span-4 lg:col-span-2",children:(0,r.jsxs)("div",{className:"w-[100%]",children:[(0,r.jsx)("label",{className:"block py-2 text-sm font-medium text-gray-700 tracking-wide",children:"Jenis Kelamin"}),(0,r.jsxs)("div",{className:"flex gap-2",children:[(0,r.jsx)(w,{id:"Laki-laki",name:"jenkel",value:"Laki-laki",register:t,required:!0,defaultChecked:(null==s?void 0:s.jenkel)==="Laki-laki"}),(0,r.jsx)(w,{id:"Perempuan",name:"jenkel",value:"Perempuan",register:t,required:!0,defaultChecked:(null==s?void 0:s.jenkel)==="Perempuan"})]}),(null==n?void 0:null===(a=n.jenkel)||void 0===a?void 0:a.type)==="required"&&(0,r.jsx)("p",{className:"text-red-500 font-inter italic text-sm",children:"Jenis kelamin tidak boleh kosong"})]})}),(0,r.jsx)(g.Z,{label:"Tempat Lahir",name:"tempat_lahir",register:t,required:!0,minLength:3,errors:n.tempat_lahir,addClass:"col-span-4 lg:col-span-2"}),(0,r.jsx)(v.Z,{label:"Tgl. Lahir",name:"tgl_lahir",control:i,startDate:c,setStartDate:h,required:!0,errors:n.tgl_lahir,addClass:"col-span-4 lg:col-span-2"}),(0,r.jsx)(g.Z,{label:"No. Hp",name:"no_hp",register:t,required:!0,minLength:3,errors:n.no_hp,addClass:"col-span-4 lg:col-span-2"}),(0,r.jsx)(g.Z,{label:"Pend. Terakhir",name:"pend_terakhir",register:t,required:!0,minLength:1,errors:n.pend_terakhir,addClass:"col-span-4 lg:col-span-2"}),(0,r.jsx)(C,{label:"Tahun Terima",name:"thn_terima",control:i,start:new Date().getFullYear()-50,end:new Date().getFullYear(),required:!0,errors:n.thn_terima,addClass:"col-span-4 lg:col-span-1"}),(0,r.jsx)(g.Z,{label:"Jumlah_anak",name:"jumlah_anak",register:t,required:!0,minLength:1,type:"number",errors:n.jumlah_anak,addClass:"col-span-4 lg:col-span-1"}),(0,r.jsx)(g.Z,{label:"Alamat",name:"alamat",register:t,required:!0,minLength:1,errors:n.alamat,addClass:"col-span-4"}),(0,r.jsx)(j.Z,{label:"Foto",name:"foto",register:t,accept:"image/*",required:!0,errors:n.foto,addClass:"col-span-4",setValue:d,fileEdit:null==s?void 0:s.foto,myFile:m,setMyFile:x})]})},T=e=>{let{showModal:a,setShowModal:t,dtEdit:n,tipe:i}=e,[s,u]=(0,l.useState)(new Date("01-01-1980")),[c,h]=(0,l.useState)(),{addData:p,updateData:v}=(0,o.Z)(),{register:j,handleSubmit:w,setValue:b,control:k,formState:{errors:y},watch:_}=(0,f.cI)(),N=()=>{b("id",""),b("NIK",""),b("pangkat_id",""),b("tipe",i),b("NIDN",""),b("nama",""),b("tempat_lahir",""),u(new Date("01-01-1980")),b("tgl_lahir","1980-01-01"),b("no_hp",""),b("jumlah_anak",0),b("jenkel",""),b("pend_terakhir",""),b("alamat",""),b("thn_terima",""),b("foto",""),h(null)};(0,l.useEffect)(()=>{n?(b("id",n.id),b("pangkat_id",n.pangkat_id),b("NIK",n.NIK),b("tipe",n.tipe),b("NIDN",n.NIDN),b("nama",n.nama),b("tempat_lahir",n.tempat_lahir),b("tgl_lahir",n.tgl_lahir),u(new Date(n.tgl_lahir)),b("no_hp",n.no_hp),b("jumlah_anak",n.jumlah_anak),b("jenkel",n.jenkel),b("pend_terakhir",n.pend_terakhir),b("alamat",n.alamat),b("thn_terima",parseInt(n.thn_terima)),b("foto",n.foto)):N()},[a,n]);let S=async e=>{if(console.log({row:e}),n){let{data:a}=await v(n.id,e);(0,x.Z)({event:a}),t(!1)}else{let{data:a}=await p(e);console.log({data:a}),(0,x.Z)({event:a}),(null==a?void 0:a.type)!=="success"||N()}};return(0,r.jsx)(d.Z,{title:"Form Pegawai",showModal:a,setShowModal:t,children:(0,r.jsxs)("form",{onSubmit:w(S),children:[(0,r.jsx)(g.Z,{name:"id",register:j,type:"hidden"}),(0,r.jsx)("div",{className:"grid grid-cols-4 gap-2 mb-4",children:(0,r.jsx)(I,{register:j,errors:y,dtEdit:n,control:k,watch:_,setValue:b,showModal:a,tgl_lahir:s,setTgl_lahir:u,tipe:i,myFile:c,setMyFile:h})}),(0,r.jsx)("div",{children:(0,r.jsx)(m.Z,{text:"Simpan",onClick:w(S)})})]})})},M=t(686),E=t(8919),q=t(8350),A=e=>{let{params:a}=e,{removeData:t}=(0,o.Z)(),[n,i]=(0,l.useState)(!1),[s,d]=(0,l.useState)(!1),[u,c]=(0,l.useState)(),[h,g]=(0,l.useState)(),[f,v]=(0,l.useState)(""),j=async e=>{let{id:a,isDelete:r}=e;if(c(a),r){let{data:e}=await t(u);(0,x.Z)({event:e}),d(!1)}else d(!0)};return(0,r.jsxs)("div",{className:"flex flex-col h-full",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(E.x7,{}),(0,r.jsx)(T,{dtEdit:h,showModal:n,setShowModal:i,tipe:a.tipe}),(0,r.jsx)(M.Z,{showDel:s,setShowDel:d,setDelete:j}),(0,r.jsxs)("div",{className:"mb-4 flex justify-between",children:[(0,r.jsx)("div",{children:(0,r.jsxs)("p",{children:[(0,r.jsxs)("span",{className:"capitalize",children:["Silahkan Mengolah data ",a.tipe,"."," "]}),(0,r.jsxs)("span",{children:["Klik pada tombol info untuk melihat email dan password"," ",a.tipe," "]})]})}),(0,r.jsx)("div",{children:(0,r.jsx)(m.Z,{addClass:"capitalize",text:"Tambah ".concat(a.tipe),onClick:()=>{i(!0),g(null)}})})]}),(0,r.jsx)(q.Z,{placeholder:"Cari Pegawai",onChange:e=>v(e)})]}),(0,r.jsx)(p,{setDelete:j,setEdit:e=>{i(!0),g(e)},search:f,tipe:a.tipe})]})}},5407:function(e,a,t){"use strict";var r=t(9268);t(6006);var l=t(9700),n=t(9977),i=t.n(n),s=t(5326),o=t.n(s);a.Z=e=>{let{control:a,required:t,name:n,errors:s,addClass:d,label:u,startDate:c,setStartDate:h}=e;return(0,r.jsxs)("div",{className:d,children:[(0,r.jsxs)("label",{className:"text-sm font-medium text-gray-700 tracking-wide block",children:[u,t&&(0,r.jsx)("span",{className:"ml-1 text-red-600",children:"*"})]}),(0,r.jsx)(l.Qr,{name:n,control:a,rules:{required:t},render:e=>{let{field:a}=e;return(0,r.jsx)(i(),{selected:c,onChange:e=>{if(e){h(e);let t=o()(e).format("YYYY-MM-DD");a.onChange(t)}else h(null),a.onChange("")},dateFormat:"dd/MM/yyyy",value:c||"",peekNextMonth:!0,showMonthDropdown:!0,showYearDropdown:!0,dropdownMode:"select",className:"w-full border rounded-lg py-2 px-4"})}}),(null==s?void 0:s.type)==="required"&&(0,r.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[u," tidak boleh kosong"]})]})}},63:function(e,a,t){"use strict";var r=t(9268),l=t(3415),n=t(6394),i=t.n(n),s=t(6006),o=t(5883),d=t.n(o);a.Z=e=>{let{label:a,register:t,required:n,name:o,errors:u,addClass:c,accept:h,setValue:p,fileEdit:m,myFile:g,setMyFile:x}=e,[f,v]=(0,s.useState)(),j=e=>new Promise(()=>{if(e){var a;let t=(null==e?void 0:null===(a=e.type)||void 0===a?void 0:a.split("/"))||[],r=t[0];if("image"!==r)return w(e);console.log({splitType:t}),d().imageFileResizer(e,1500,1500,t[1],80,0,e=>{w(e)},"file")}else w(null)}),w=e=>{var a;if(e){let a=new FileReader;a.readAsDataURL(e),a.onloadend=()=>{x(a.result)}}let t=(null==e?void 0:null===(a=e.type)||void 0===a?void 0:a.split("/"))||[];v(t[0]),p(o,e)};return(0,r.jsxs)("div",{className:c,children:[(0,r.jsx)("label",{className:"text-sm font-medium text-gray-700 tracking-wide",children:a}),n&&(0,r.jsx)("span",{className:"ml-1 text-red-600",children:"*"}),(0,r.jsx)("input",{className:"w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-secondary",id:"fileInput",type:"file",accept:h,onChange:e=>{var a;let t=(null===(a=e.target)||void 0===a?void 0:a.files[0])||null;j(t)}}),(0,r.jsx)("input",{type:"hidden",id:a,...t(o,{required:n})}),(0,r.jsxs)("div",{className:"flex gap-4 mt-2",children:[g&&"image"===f&&(0,r.jsx)(i(),{className:"rounded-lg",src:g,width:100,height:100,alt:""}),m&&"file"!==o&&(0,r.jsx)("div",{children:(0,r.jsx)(i(),{src:"".concat(l._n,"/").concat(m),width:100,height:100,alt:""})})]}),(null==u?void 0:u.type)==="required"&&(0,r.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[a," tidak boleh kosong"]})]})}},4496:function(e,a,t){"use strict";var r=t(9268);t(6006);var l=t(7133),n=t(9700);a.Z=e=>{let{dataDb:a,body:t,control:i,required:s,name:o,errors:d,placeholder:u,addClass:c,label:h,defaultOptions:p=!0}=e,m={multiValue:(e,a)=>a.data.isFixed?{...e,backgroundColor:"gray"}:e,multiValueLabel:(e,a)=>a.data.isFixed?{...e,fontWeight:"bold",color:"white",paddingRight:6}:e,multiValueRemove:(e,a)=>a.data.isFixed?{...e,display:"none"}:e},g=(e,a)=>{let t=e[a];if("id"===a)return{value:t,label:""};if(!a.includes("."))return{value:"",label:t};{let[t,...r]=a.split("."),l=e[t];return g(l,r.join("."))}},x=()=>{let e=a&&a.map((e,a)=>{let r=t.map(a=>g(e,a)),l=r.map(e=>e.label).filter(e=>""!==e),n=l.join(l.length>1?" - ":"");return{value:r.find(e=>""!==e.value).value,label:n}});return e},f=e=>{var a;return null===(a=x())||void 0===a?void 0:a.filter(a=>a.label.toLowerCase().includes(e.toLowerCase()))},v=(e,a)=>{setTimeout(()=>{a(f(e))},1e3)};return(0,r.jsxs)("div",{className:c,children:[h&&(0,r.jsx)("label",{className:"text-sm font-medium text-gray-700 tracking-wide",children:h}),s&&(0,r.jsx)("span",{className:"ml-1 text-red-600",children:"*"}),(0,r.jsx)(n.Qr,{name:o,control:i,rules:{required:s},render:e=>{var a;let{field:{onChange:t,value:n,ref:i}}=e;return(0,r.jsx)(l.Z,{cacheOptions:!0,defaultOptions:p,isClearable:!0,isSearchable:!0,loadOptions:v,placeholder:u,menuPlacement:"auto",menuPosition:"fixed",menuPortalTarget:document.body,styles:m,ref:i,value:(null===(a=x())||void 0===a?void 0:a.find(e=>e.value===n))||null,onChange:e=>t(e?e.value:e)})}}),(null==d?void 0:d.type)==="required"&&(0,r.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[h," tidak boleh kosong"]})]})}},8468:function(e,a,t){"use strict";var r=t(2561),l=t(4475),n=t(3415),i=t(4406);let s=(0,r.Ue)((0,l.mW)((e,a)=>({setFormData:e=>{let a=new FormData;return a.append("pangkat_id",e.pangkat_id),a.append("tipe",e.tipe),a.append("NIK",e.NIK),a.append("NIDN",e.NIDN),a.append("nama",e.nama),a.append("tempat_lahir",e.tempat_lahir),a.append("tgl_lahir",e.tgl_lahir),a.append("no_hp",e.no_hp),a.append("jumlah_anak",e.jumlah_anak),a.append("jenkel",e.jenkel),a.append("pend_terakhir",e.pend_terakhir),a.append("alamat",e.alamat),a.append("thn_terima",e.thn_terima),a.append("foto",e.foto),a},dtPegawai:[],showPegawai:[],setPegawai:async a=>{let{page:t=1,limit:r=10,search:l,tipe:s}=a;try{let a=await i.Z.getState().setToken(),o=await (0,n.Sj)({method:"get",url:"/personalia/pegawai",headers:{Authorization:"Bearer ".concat(a)},params:{limit:r,page:t,search:l,tipe:s}});return e(e=>({...e,dtPegawai:o.data.data})),{status:"berhasil",data:o.data}}catch(e){var o;return{status:"error",error:null===(o=e.response)||void 0===o?void 0:o.data}}},setShowPegawai:async a=>{try{let t=await i.Z.getState().setToken(),r=await (0,n.Sj)({method:"get",url:"/personalia/pegawai/".concat(a),headers:{Authorization:"Bearer ".concat(t)}});return e(e=>({...e,showPegawai:r.data.data})),{status:"berhasil",data:r.data}}catch(e){var t;return{status:"error",error:null===(t=e.response)||void 0===t?void 0:t.data}}},addData:async t=>{let r=(null==t?void 0:t.foto)?a().setFormData(t):t;try{let a=await i.Z.getState().setToken(),t=await (0,n.Sj)({method:"post",url:"/personalia/pegawai",headers:{Authorization:"Bearer ".concat(a),"Content-Type":"multipart/form-data"},data:r});return e(e=>({dtPegawai:{last_page:e.dtPegawai.last_page,current_page:e.dtPegawai.current_page,data:[t.data.data,...e.dtPegawai.data]}})),{status:"berhasil tambah",data:t.data}}catch(e){return{status:"error",data:e.response.data}}},removeData:async a=>{try{let t=await i.Z.getState().setToken(),r=await (0,n.Sj)({method:"delete",url:"/personalia/pegawai/".concat(a),headers:{Authorization:"Bearer ".concat(t)}});return e(e=>({dtPegawai:{last_page:e.dtPegawai.last_page,current_page:e.dtPegawai.current_page,data:e.dtPegawai.data.filter(e=>e.id!==a)}})),{status:"berhasil hapus",data:r.data}}catch(e){return{status:"error",data:e.response.data}}},updateData:async(t,r)=>{delete r.id;let l=(null==r?void 0:r.foto)?a().setFormData(r):r,s=await i.Z.getState().setToken();try{let a=await (0,n.Sj)({url:"/personalia/pegawai/".concat(t),method:"post",headers:(null==r?void 0:r.foto)?{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(s)}:{Authorization:"Bearer ".concat(s)},data:l,params:{_method:"PUT"}});return e(e=>({dtPegawai:{last_page:e.dtPegawai.last_page,current_page:e.dtPegawai.current_page,data:e.dtPegawai.data.map(e=>e.id===t?{...e,...a.data.data}:e)}})),{status:"berhasil update",data:a.data}}catch(e){return{status:"error",data:e.response.data}}}})));a.Z=s},5883:function(e){(()=>{"use strict";var a={d:(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o:(e,a)=>Object.prototype.hasOwnProperty.call(e,a),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};a.r(t),a.d(t,{default:()=>l});var r=function(){var e;function a(){!function(e,a){if(!(e instanceof a))throw TypeError("Cannot call a class as a function")}(this,a)}return e=[{key:"changeHeightWidth",value:function(e,a,t,r,l,n){return t>r&&(e=Math.round(e*r/t),t=r),e>a&&(t=Math.round(t*a/e),e=a),l&&t<l&&(e=Math.round(e*l/t),t=l),n&&e<n&&(t=Math.round(t*n/e),e=n),{height:e,width:t}}},{key:"resizeAndRotateImage",value:function(e,a,t,r,l){var n=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"jpeg",i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:100,s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:0,o=document.createElement("canvas"),d=e.width,u=e.height,c=this.changeHeightWidth(u,t,d,a,r,l);s&&(90===s||270===s)?(o.width=c.height,o.height=c.width):(o.width=c.width,o.height=c.height),d=c.width,u=c.height;var h=o.getContext("2d");return h.fillStyle="rgba(0, 0, 0, 0)",h.fillRect(0,0,d,u),h.imageSmoothingEnabled&&h.imageSmoothingQuality&&(h.imageSmoothingQuality="high"),s&&(h.rotate(s*Math.PI/180),90===s?h.translate(0,-o.width):180===s?h.translate(-o.width,-o.height):270===s?h.translate(-o.height,0):0!==s&&360!==s||h.translate(0,0)),h.drawImage(e,0,0,d,u),o.toDataURL("image/".concat(n),i/100)}},{key:"b64toByteArrays",value:function(e,a){a=a||"image/jpeg";for(var t=atob(e.toString().replace(/^data:image\/(png|jpeg|jpg|webp);base64,/,"")),r=[],l=0;l<t.length;l+=512){for(var n=t.slice(l,l+512),i=Array(n.length),s=0;s<n.length;s++)i[s]=n.charCodeAt(s);var o=new Uint8Array(i);r.push(o)}return r}},{key:"b64toBlob",value:function(e,a){var t=this.b64toByteArrays(e,a);return new Blob(t,{type:a,lastModified:new Date})}},{key:"b64toFile",value:function(e,a,t){var r=this.b64toByteArrays(e,t);return new File(r,a,{type:t,lastModified:new Date})}},{key:"createResizedImage",value:function(e,t,r,l,n,i,s){var o=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"base64",d=arguments.length>8&&void 0!==arguments[8]?arguments[8]:null,u=arguments.length>9&&void 0!==arguments[9]?arguments[9]:null,c=new FileReader;if(!e)throw Error("File Not Found!");if(e.type&&!e.type.includes("image"))throw Error("File Is NOT Image!");c.readAsDataURL(e),c.onload=function(){var h=new Image;h.src=c.result,h.onload=function(){var c=a.resizeAndRotateImage(h,t,r,d,u,l,n,i),p="image/".concat(l);switch(o){case"blob":s(a.b64toBlob(c,p));break;case"base64":default:s(c);break;case"file":var m=e.name.toString().replace(/(png|jpeg|jpg|webp)$/i,"").concat(l.toString());s(a.b64toFile(c,m,p))}}},c.onerror=function(e){throw Error(e)}}}],function(e,a){for(var t=0;t<a.length;t++){var r=a[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(a,e),a}();let l={imageFileResizer:function(e,a,t,l,n,i,s,o,d,u){return r.createResizedImage(e,a,t,l,n,i,s,o,d,u)}};e.exports=t})()}},function(e){e.O(0,[6680,4550,635,9218,3088,4925,9977,7133,3729,9253,7698,1744],function(){return e(e.s=9212)}),_N_E=e.O()}]);