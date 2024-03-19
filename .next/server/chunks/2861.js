"use strict";
exports.id = 2861;
exports.ids = [2861];
exports.modules = {

/***/ 89456:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13998);
/* harmony import */ var zustand_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88658);
/* harmony import */ var _services_baseURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94437);
/* harmony import */ var _crud_personalia_DokumenPegawai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4628);
/** @format */ 



const usePegawaiApi = (0,zustand__WEBPACK_IMPORTED_MODULE_2__/* .create */ .Ue)((0,zustand_middleware__WEBPACK_IMPORTED_MODULE_3__/* .devtools */ .mW)((set, get)=>({
        dtPegawai: [],
        setPegawai: async ({ page = 1, limit = 10, search, tipe })=>{
            try {
                const response = await (0,_services_baseURL__WEBPACK_IMPORTED_MODULE_0__/* .api */ .hi)({
                    method: "get",
                    url: `/personalia/pegawai`,
                    params: {
                        limit,
                        page,
                        search,
                        tipe
                    }
                });
                set((state)=>({
                        ...state,
                        dtPegawai: response.data
                    }));
                return {
                    status: "berhasil",
                    data: response.data
                };
            } catch (error) {
                return {
                    status: "error",
                    error: error.response.data
                };
            }
        },
        setApiDokumenPegawai: async ({ search, page, id })=>{
            try {
                const response = await (0,_services_baseURL__WEBPACK_IMPORTED_MODULE_0__/* .api */ .hi)({
                    method: "get",
                    url: `/personalia/pegawai/dokumen/${id}`,
                    params: {
                        search,
                        page
                    }
                });
                _crud_personalia_DokumenPegawai__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getState().setDokumen({
                    page,
                    search
                });
                set((state)=>({
                        ...state,
                        dtPegawai: response.data.data
                    }));
                return {
                    status: "berhasil",
                    data: response.data
                };
            } catch (error) {
                return {
                    status: "error",
                    error: error.response.data
                };
            }
        },
        setTotalTipe: async ()=>{
            try {
                const response = await (0,_services_baseURL__WEBPACK_IMPORTED_MODULE_0__/* .api */ .hi)({
                    method: "get",
                    url: `/personalia/pegawai/total_tipe`
                });
                set((state)=>({
                        ...state,
                        dtPegawai: response.data.data
                    }));
                return {
                    status: "berhasil",
                    data: response.data
                };
            } catch (error) {
                return {
                    status: "error",
                    error: error.response.data
                };
            }
        }
    })));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usePegawaiApi);


/***/ }),

/***/ 4628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13998);
/* harmony import */ var zustand_middleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88658);
/* harmony import */ var _services_baseURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94437);
/* harmony import */ var _stores_auth_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53835);
/* harmony import */ var _stores_api_Pegawai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89456);
/** @format */ 




const useDokumen = (0,zustand__WEBPACK_IMPORTED_MODULE_3__/* .create */ .Ue)((0,zustand_middleware__WEBPACK_IMPORTED_MODULE_4__/* .devtools */ .mW)((set, get)=>({
        setFormData: (row)=>{
            const formData = new FormData();
            formData.append("pegawai_id", row.pegawai_id);
            formData.append("judul", row.judul);
            formData.append("gambar", row.gambar);
            return formData;
        },
        dtDokumen: [],
        showDokumen: [],
        setDokumen: async ({ page = 1, limit = 10, tipe, search })=>{
            try {
                const token = await _stores_auth_login__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getState().setToken();
                const response = await (0,_services_baseURL__WEBPACK_IMPORTED_MODULE_0__/* .crud */ .Sj)({
                    method: "get",
                    url: `/personalia/dokumen_pegawai`,
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                    params: {
                        limit,
                        page,
                        search,
                        tipe
                    }
                });
                set((state)=>({
                        ...state,
                        dtDokumen: response.data.data
                    }));
                return {
                    status: "berhasil",
                    data: response.data
                };
            } catch (error) {
                return {
                    status: "error",
                    error: error.response?.data
                };
            }
        },
        setShowDokumen: async (id)=>{
            try {
                const token = await _stores_auth_login__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getState().setToken();
                const response = await (0,_services_baseURL__WEBPACK_IMPORTED_MODULE_0__/* .crud */ .Sj)({
                    method: "get",
                    url: `/personalia/dokumen_pegawai/${id}`,
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                set((state)=>({
                        ...state,
                        showDokumen: response.data.data
                    }));
                return {
                    status: "berhasil",
                    data: response.data
                };
            } catch (error) {
                return {
                    status: "error",
                    error: error.response?.data
                };
            }
        },
        addData: async (row)=>{
            const formData = row?.gambar ? get().setFormData(row) : row;
            try {
                const token = await _stores_auth_login__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getState().setToken();
                const res = await (0,_services_baseURL__WEBPACK_IMPORTED_MODULE_0__/* .crud */ .Sj)({
                    method: "post",
                    url: `/personalia/dokumen_pegawai`,
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "multipart/form-data"
                    },
                    data: formData
                });
                set((prevState)=>({
                        dtDokumen: {
                            last_page: prevState.dtDokumen.last_page,
                            current_page: prevState.dtDokumen.current_page,
                            data: [
                                res.data.data,
                                ...prevState.dtDokumen.data
                            ]
                        }
                    }));
                // call setApiDokumenPegawai from usePegawaiApi
                _stores_api_Pegawai__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getState().setApiDokumenPegawai({
                    id: row.pegawai_id
                });
                return {
                    status: "berhasil tambah",
                    data: res.data
                };
            } catch (error) {
                console.log({
                    error
                });
                return {
                    status: "error",
                    data: error.response.data
                };
            }
        },
        removeData: async (id)=>{
            try {
                const token = await _stores_auth_login__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getState().setToken();
                const res = await (0,_services_baseURL__WEBPACK_IMPORTED_MODULE_0__/* .crud */ .Sj)({
                    method: "delete",
                    url: `/personalia/dokumen_pegawai/${id}`,
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                set((prevState)=>({
                        dtDokumen: {
                            last_page: prevState.dtDokumen.last_page,
                            current_page: prevState.dtDokumen.current_page,
                            data: prevState.dtDokumen.data.filter((item)=>item.id !== id)
                        }
                    }));
                // call setApiDokumenPegawai from usePegawaiApi
                _stores_api_Pegawai__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getState().setApiDokumenPegawai({
                    id: res.data.data.pegawai_id
                });
                return {
                    status: "berhasil hapus",
                    data: res.data
                };
            } catch (error) {
                return {
                    status: "error",
                    data: error.response.data
                };
            }
        },
        updateData: async (id, row)=>{
            delete row.id;
            const formData = row?.gambar ? get().setFormData(row) : row;
            const token = await _stores_auth_login__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getState().setToken();
            const headersImg = {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`
            };
            try {
                const response = await (0,_services_baseURL__WEBPACK_IMPORTED_MODULE_0__/* .crud */ .Sj)({
                    url: `/personalia/dokumen_pegawai/${id}`,
                    method: "post",
                    headers: row?.gambar ? headersImg : {
                        Authorization: `Bearer ${token}`
                    },
                    data: formData,
                    params: {
                        _method: "PUT"
                    }
                });
                set((prevState)=>({
                        dtDokumen: {
                            last_page: prevState.dtDokumen.last_page,
                            current_page: prevState.dtDokumen.current_page,
                            data: prevState.dtDokumen.data.map((item)=>{
                                if (item.id === id) {
                                    return {
                                        ...item,
                                        ...response.data.data
                                    };
                                } else {
                                    return item;
                                }
                            })
                        }
                    }));
                _stores_api_Pegawai__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getState().setApiDokumenPegawai({
                    id: response.data.data.pegawai_id
                });
                return {
                    status: "berhasil update",
                    data: response.data
                };
            } catch (error) {
                return {
                    status: "error",
                    data: error.response.data
                };
            }
        }
    })));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useDokumen);


/***/ })

};
;