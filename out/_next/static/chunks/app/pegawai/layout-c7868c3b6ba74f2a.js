(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[997],{6349:function(e,a,t){Promise.resolve().then(t.bind(t,3315))},3315:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return b}});var r=t(9268),n=t(6006),s=t(4406),i=t(6008),l=t(1712),o=t(593),d=e=>{let[a,t]=(0,n.useState)(!0),d=(0,i.usePathname)(),c=(0,i.useRouter)(),{cekToken:u}=(0,s.Z)(),m=async()=>{let e=await u();if(null==e?void 0:e.error)c.push("/");else{let e=l.Z.get("role");"pegawai"!==e&&c.push("/".concat(e))}return e};(0,n.useEffect)(()=>(m(),()=>{}),[d]);let h=async()=>{let e=await m();(null==e?void 0:e.error)||t(!1)};if((0,n.useEffect)(()=>(h(),console.log("pertama render"),()=>{}),[]),a)return(0,r.jsx)("div",{className:"flex min-h-screen h-screen justify-center items-center",children:(0,r.jsx)(o.Z,{})})},c=t(6639),u=t(5846),m=t.n(u),h=t(9032),p=t(6394),g=t.n(p);let f=e=>{let{subMenus:a,name:t,icon:n,slug:s,index:i,pathname:l,openMenus:o}=e,d=o.includes(s);return(0,r.jsx)("div",{children:(0,r.jsxs)("details",{className:"group [&_summary::-webkit-details-marker]:hidden",open:d,children:[(0,r.jsxs)("summary",{className:"flex items-center justify-between px-3 py-2 transition-colors duration-300 transform rounded-lg hover:bg-primary hover:text-gray-200 }",children:[(0,r.jsxs)("div",{className:"flex items-center cursor-pointer",children:[(0,r.jsx)("span",{children:n}),(0,r.jsx)("span",{className:"mx-2 text-sm font-medium",children:t})]}),(0,r.jsx)("span",{className:"shrink-0 transition duration-300 group-open:-rotate-180",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})})]}),a&&a.map((e,a)=>{let t=l===e.href;return(0,r.jsxs)("div",{className:"ml-4",children:[!e.subMenus&&(0,r.jsx)(m(),{href:e.href,className:"flex items-center mx-3 py-2 transition-colors duration-300 transform rounded-lg hover:bg-primary/50 hover:text-gray-200 ".concat(t&&"border-b-2 border-primary text-primary bg-white/50"),children:(0,r.jsx)("span",{className:"mx-2 text-sm font-medium",children:e.name})}),e.subMenus&&f({subMenus:e.subMenus,name:e.name,icon:e.icon,slug:e.slug,index:a,pathname:l,openMenus:o})]},a)})]})},i)};var x=()=>{let[e,a]=(0,n.useState)(!1),[t,s]=(0,n.useState)([]),o=(0,i.useRouter)(),d=(0,i.usePathname)(),c=e=>{for(let a of e){if(a.href===d){let e=null==d?void 0:d.split("/");e.splice(0,1),s(e)}a.subMenus&&c(a.subMenus)}};(0,n.useEffect)(()=>(c(h.l),()=>{}),[d]);let u=async()=>{a(!0),l.Z.remove("token"),l.Z.remove("role"),o.push("/"),a(!1)};return(0,r.jsxs)("aside",{className:"flex flex-col w-64 h-screen px-5 overflow-y-auto",children:[(0,r.jsx)("div",{className:"flex items-center mt-2 gap-2 justify-center",children:(0,r.jsx)("div",{className:"relative h-[75px] w-20",children:(0,r.jsx)(g(),{alt:"logo",fill:!0,sizes:"(100vw, 100vh)",style:{objectFit:"contain",objectPosition:"center",width:"100%",height:"100%"},src:"/images/uogp.png"})})}),(0,r.jsx)("div",{className:"mt-4 mb-2 mx-auto",children:(0,r.jsx)("span",{className:"px-3 text-sm font-semibold text-black uppercasetext-gray-400",children:"Menu"})}),(0,r.jsxs)("div",{className:"flex flex-col justify-between flex-1 pt-2 border-t",children:[(0,r.jsx)("nav",{className:"-mx-3 space-y-6 ",children:(0,r.jsx)("div",{className:"space-y-3 text-slate-800",children:h.l.map((e,a)=>{let{name:n,href:s,icon:i,subMenus:l,slug:o}=e,c=d===s;return l?f({subMenus:l,name:n,icon:i,slug:o,index:a,pathname:d,openMenus:t}):(0,r.jsx)("div",{children:(0,r.jsxs)(m(),{href:s,className:"flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg hover:bg-primary/50 hover:text-gray-200 ".concat(c&&"border-b-2 border-primary text-primary bg-white/50"),children:[(0,r.jsx)("span",{children:i}),(0,r.jsx)("span",{className:"mx-2 text-sm font-medium",children:n})]})},a)})})}),(0,r.jsx)("div",{children:e?(0,r.jsx)("p",{children:"Loading..."}):(0,r.jsx)("button",{onClick:u,className:"flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg text-primary hover:underline hover:text-gray-200",children:(0,r.jsx)("span",{children:"Sign Out"})})})]})]})},w=t(5282),j=t(8136),b=e=>{let[a,t]=(0,n.useState)(!1),s=(0,i.usePathname)();return(0,n.useEffect)(()=>(t(!1),()=>{}),[s]),(0,r.jsxs)("div",{children:[(0,r.jsx)(d,{}),(0,r.jsx)(w.Z,{children:(0,r.jsxs)("div",{className:"flex min-h-screen h-screen text-black bg-bg",children:[(0,r.jsx)("aside",{className:"w-[18rem] z-50 lg:block ".concat(a?"block absolute bg-bg":"hidden"),children:(0,r.jsx)(x,{})}),(0,r.jsxs)("div",{className:"flex h-full w-full overflow-hidden p-1 rounded-lg flex-col",children:[(0,r.jsxs)("div",{className:"mb-1 flex items-center justify-between lg:-mx-4 lg:-mt-2 lg:block",children:[(0,r.jsx)(c.Z,{}),(0,r.jsx)("div",{className:"lg:hidden mr-2 text-xl cursor-pointer",onClick:()=>{t(!a)},children:(0,r.jsx)(j.vSj,{})})]}),(0,r.jsx)("div",{className:"bg-white h-full overflow-hidden p-2 drop-shadow-2xl shadow-black rounded-lg",children:e.children})]})]})})]})}},6639:function(e,a,t){"use strict";var r=t(9268);a.Z=()=>(0,r.jsxs)("div",{className:"backdrop-blur-sm py-2",children:[(0,r.jsx)("h4",{className:"text-gray-700 font-semibold text-center hidden lg:block",children:"Biro SDM Universitas Ottow Geissler"}),(0,r.jsx)("h6",{className:"text-gray-700 font-semibold text-start lg:hidden",children:"Biro SDM UOGP"})]})},593:function(e,a,t){"use strict";var r=t(9268);t(6006),a.Z=()=>(0,r.jsx)("div",{children:"Loading..."})},9032:function(e,a,t){"use strict";t.d(a,{l:function(){return i}});var r=t(9268),n=t(8136);let s=[{name:"Home",href:"/admin",icon:(0,r.jsx)(n.ufG,{})},{name:"Tata Usaha",href:"#",slug:"tata-usaha",icon:(0,r.jsx)(n._19,{}),subMenus:[{name:"Jenis",href:"/admin/tata-usaha/jenis"},{name:"Surat Masuk",href:"/admin/tata-usaha/surat/masuk"},{name:"Surat Keluar",href:"/admin/tata-usaha/surat/keluar"},{name:"Dokumen Lainnya",href:"/admin/tata-usaha/dokumen"}]},{name:"Pangkat",href:"/admin/pangkat",icon:(0,r.jsx)(n.FaF,{})},{name:"Jabatan",href:"/admin/jabatan",icon:(0,r.jsx)(n.YNX,{})},{name:"Personalia",href:"#",slug:"personalia",icon:(0,r.jsx)(n.pZ5,{}),subMenus:[{name:"Pegawai",href:"#",slug:"pegawai",subMenus:[{name:"Dosen",href:"/admin/personalia/pegawai/dosen"},{name:"Tendik",href:"/admin/personalia/pegawai/tendik"},{name:"Pekarya",href:"/admin/personalia/pegawai/pekarya"}]},{name:"Riwayat",href:"#",slug:"riwayat",subMenus:[{name:"Jabatan",href:"/admin/personalia/riwayat/jabatan"},{name:"Pendidikan",href:"/admin/personalia/riwayat/pendidikan"},{name:"Pekerjaan",href:"/admin/personalia/riwayat/pekerjaan"}]},{name:"Dokumen",href:"/admin/personalia/dokumen"}]}],i=[{name:"Home",href:"/pegawai",icon:(0,r.jsx)(n.ufG,{})},{name:"Riwayat",href:"#",slug:"riwayat",icon:(0,r.jsx)(n._19,{}),subMenus:[{name:"Jabatan",href:"/pegawai/riwayat/jabatan"},{name:"Pendidikan",href:"/pegawai/riwayat/pendidikan"},{name:"Pekerjaan",href:"/pegawai/riwayat/pekerjaan"}]},{name:"Dokumen",href:"/pegawai/dokumen",icon:(0,r.jsx)(n.FaF,{})}];a.Z=s},5282:function(e,a,t){"use strict";t.d(a,{T:function(){return l}});var r=t(9268),n=t(6006),s=t(1712),i=t(8468);let l=(0,n.createContext)({showPegawai:null});a.Z=e=>{let{children:a}=e,t=parseInt(s.Z.get("user_id")),{setShowPegawai:o,showPegawai:d}=(0,i.Z)();return(0,n.useEffect)(()=>(o(t),()=>{o(0)}),[t,o]),(0,r.jsx)(l.Provider,{value:{showPegawai:d},children:a})}},3415:function(e,a,t){"use strict";t.d(a,{I8:function(){return s},Sj:function(){return i},_n:function(){return n},hi:function(){return l}});var r=t(5953);let n="https://nathan.apisparta.my.id",s=r.Z.create({baseURL:"".concat(n,"/auth")}),i=r.Z.create({baseURL:"".concat(n,"/crud")}),l=r.Z.create({baseURL:"".concat(n,"/api")});r.Z.create({baseURL:"".concat(n,"/storage")})},4406:function(e,a,t){"use strict";var r=t(2561),n=t(4475),s=t(3415),i=t(1712);let l=(0,r.Ue)((0,n.mW)((e,a)=>({setToken:async()=>{let e=i.Z.get("token");return e},setLogin:async e=>{try{let a=await (0,s.I8)({method:"post",url:"/login",data:e});return{status:"success",data:a.data}}catch(e){return{status:"error",error:e.response.data}}},cekToken:async()=>{let e=await a().setToken();try{let a=await (0,s.I8)({method:"post",url:"/cek_token",headers:{Authorization:"Bearer ".concat(e)}});return{status:"success",data:a.data}}catch(e){return{status:"error",error:e.response.data}}}})));a.Z=l},8468:function(e,a,t){"use strict";var r=t(2561),n=t(4475),s=t(3415),i=t(4406);let l=(0,r.Ue)((0,n.mW)((e,a)=>({setFormData:e=>{let a=new FormData;return a.append("pangkat_id",e.pangkat_id),a.append("tipe",e.tipe),a.append("NIK",e.NIK),a.append("NIDN",e.NIDN),a.append("nama",e.nama),a.append("tempat_lahir",e.tempat_lahir),a.append("tgl_lahir",e.tgl_lahir),a.append("no_hp",e.no_hp),a.append("jumlah_anak",e.jumlah_anak),a.append("jenkel",e.jenkel),a.append("pend_terakhir",e.pend_terakhir),a.append("alamat",e.alamat),a.append("thn_terima",e.thn_terima),a.append("foto",e.foto),a},dtPegawai:[],showPegawai:[],setPegawai:async a=>{let{page:t=1,limit:r=10,search:n,tipe:l}=a;try{let a=await i.Z.getState().setToken(),o=await (0,s.Sj)({method:"get",url:"/personalia/pegawai",headers:{Authorization:"Bearer ".concat(a)},params:{limit:r,page:t,search:n,tipe:l}});return e(e=>({...e,dtPegawai:o.data.data})),{status:"berhasil",data:o.data}}catch(e){var o;return{status:"error",error:null===(o=e.response)||void 0===o?void 0:o.data}}},setShowPegawai:async a=>{try{let t=await i.Z.getState().setToken(),r=await (0,s.Sj)({method:"get",url:"/personalia/pegawai/".concat(a),headers:{Authorization:"Bearer ".concat(t)}});return e(e=>({...e,showPegawai:r.data.data})),{status:"berhasil",data:r.data}}catch(e){var t;return{status:"error",error:null===(t=e.response)||void 0===t?void 0:t.data}}},addData:async t=>{let r=(null==t?void 0:t.foto)?a().setFormData(t):t;try{let a=await i.Z.getState().setToken(),t=await (0,s.Sj)({method:"post",url:"/personalia/pegawai",headers:{Authorization:"Bearer ".concat(a),"Content-Type":"multipart/form-data"},data:r});return e(e=>({dtPegawai:{last_page:e.dtPegawai.last_page,current_page:e.dtPegawai.current_page,data:[t.data.data,...e.dtPegawai.data]}})),{status:"berhasil tambah",data:t.data}}catch(e){return{status:"error",data:e.response.data}}},removeData:async a=>{try{let t=await i.Z.getState().setToken(),r=await (0,s.Sj)({method:"delete",url:"/personalia/pegawai/".concat(a),headers:{Authorization:"Bearer ".concat(t)}});return e(e=>({dtPegawai:{last_page:e.dtPegawai.last_page,current_page:e.dtPegawai.current_page,data:e.dtPegawai.data.filter(e=>e.id!==a)}})),{status:"berhasil hapus",data:r.data}}catch(e){return{status:"error",data:e.response.data}}},updateData:async(t,r)=>{delete r.id;let n=(null==r?void 0:r.foto)?a().setFormData(r):r,l=await i.Z.getState().setToken();try{let a=await (0,s.Sj)({url:"/personalia/pegawai/".concat(t),method:"post",headers:(null==r?void 0:r.foto)?{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(l)}:{Authorization:"Bearer ".concat(l)},data:n,params:{_method:"PUT"}});return e(e=>({dtPegawai:{last_page:e.dtPegawai.last_page,current_page:e.dtPegawai.current_page,data:e.dtPegawai.data.map(e=>e.id===t?{...e,...a.data.data}:e)}})),{status:"berhasil update",data:a.data}}catch(e){return{status:"error",data:e.response.data}}}})));a.Z=l}},function(e){e.O(0,[6680,635,6380,9253,7698,1744],function(){return e(e.s=6349)}),_N_E=e.O()}]);