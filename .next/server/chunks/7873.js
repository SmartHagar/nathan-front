"use strict";
exports.id = 7873;
exports.ids = [7873];
exports.modules = {

/***/ 37873:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13998);
/* harmony import */ var zustand_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88658);
/* harmony import */ var _services_baseURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94437);
/* harmony import */ var _stores_auth_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53835);
/** @format */ 



const usePegawai = (0,zustand__WEBPACK_IMPORTED_MODULE_2__/* .create */ .Ue)((0,zustand_middleware__WEBPACK_IMPORTED_MODULE_3__/* .devtools */ .mW)((set, get)=>({
        setFormData: (row)=>{
            const formData = new FormData();
            formData.append("pangkat_id", row.pangkat_id);
            formData.append("tipe", row.tipe);
            formData.append("NIK", row.NIK);
            formData.append("NIDN", row.NIDN);
            formData.append("nama", row.nama);
            formData.append("tempat_lahir", row.tempat_lahir);
            formData.append("tgl_lahir", row.tgl_lahir);
            formData.append("no_hp", row.no_hp);
            formData.append("jumlah_anak", row.jumlah_anak);
            formData.append("jenkel", row.jenkel);
            formData.append("pend_terakhir", row.pend_terakhir);
            formData.append("alamat", row.alamat);
            formData.append("thn_terima", row.thn_terima);
            formData.append("foto", row.foto);
            return formData;
        },
        dtPegawai: [],
        showPegawai: [],
        setPegawai: async ({ page = 1, limit = 10, search, tipe })=>{
            try {
                const token = await _stores_auth_login__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getState().setToken();
                const response = await (0,_services_baseURL__WEBPACK_IMPORTED_MODULE_0__/* .crud */ .Sj)({
                    method: "get",
                    url: `/personalia/pegawai`,
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
                        dtPegawai: response.data.data
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
        setShowPegawai: async (id)=>{
            try {
                const token = await _stores_auth_login__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getState().setToken();
                const response = await (0,_services_baseURL__WEBPACK_IMPORTED_MODULE_0__/* .crud */ .Sj)({
                    method: "get",
                    url: `/personalia/pegawai/${id}`,
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                set((state)=>({
                        ...state,
                        showPegawai: response.data.data
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
            const formData = row?.foto ? get().setFormData(row) : row;
            try {
                const token = await _stores_auth_login__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getState().setToken();
                const res = await (0,_services_baseURL__WEBPACK_IMPORTED_MODULE_0__/* .crud */ .Sj)({
                    method: "post",
                    url: `/personalia/pegawai`,
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "multipart/form-data"
                    },
                    data: formData
                });
                set((prevState)=>({
                        dtPegawai: {
                            last_page: prevState.dtPegawai.last_page,
                            current_page: prevState.dtPegawai.current_page,
                            data: [
                                res.data.data,
                                ...prevState.dtPegawai.data
                            ]
                        }
                    }));
                return {
                    status: "berhasil tambah",
                    data: res.data
                };
            } catch (error) {
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
                    url: `/personalia/pegawai/${id}`,
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                set((prevState)=>({
                        dtPegawai: {
                            last_page: prevState.dtPegawai.last_page,
                            current_page: prevState.dtPegawai.current_page,
                            data: prevState.dtPegawai.data.filter((item)=>item.id !== id)
                        }
                    }));
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
            const formData = row?.foto ? get().setFormData(row) : row;
            const token = await _stores_auth_login__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getState().setToken();
            const headersImg = {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`
            };
            try {
                const response = await (0,_services_baseURL__WEBPACK_IMPORTED_MODULE_0__/* .crud */ .Sj)({
                    url: `/personalia/pegawai/${id}`,
                    method: "post",
                    headers: row?.foto ? headersImg : {
                        Authorization: `Bearer ${token}`
                    },
                    data: formData,
                    params: {
                        _method: "PUT"
                    }
                });
                set((prevState)=>({
                        dtPegawai: {
                            last_page: prevState.dtPegawai.last_page,
                            current_page: prevState.dtPegawai.current_page,
                            data: prevState.dtPegawai.data.map((item)=>{
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
        },
        // update from pegawai
        updatePegawai: async (id, row)=>{
            delete row.id;
            const formData = row?.foto ? get().setFormData(row) : row;
            const token = await _stores_auth_login__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getState().setToken();
            const headersImg = {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`
            };
            try {
                const response = await (0,_services_baseURL__WEBPACK_IMPORTED_MODULE_0__/* .crud */ .Sj)({
                    url: `/personalia/pegawai/${id}`,
                    method: "post",
                    headers: row?.foto ? headersImg : {
                        Authorization: `Bearer ${token}`
                    },
                    data: formData,
                    params: {
                        _method: "PUT"
                    }
                });
                set((state)=>({
                        ...state,
                        showPegawai: response.data.data
                    }));
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usePegawai);


/***/ })

};
;