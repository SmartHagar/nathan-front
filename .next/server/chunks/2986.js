"use strict";
exports.id = 2986;
exports.ids = [2986];
exports.modules = {

/***/ 39902:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13998);
/* harmony import */ var zustand_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88658);
/* harmony import */ var _services_baseURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94437);
/** @format */ 


const useJabatanApi = (0,zustand__WEBPACK_IMPORTED_MODULE_1__/* .create */ .Ue)((0,zustand_middleware__WEBPACK_IMPORTED_MODULE_2__/* .devtools */ .mW)((set, get)=>({
        dtJabatan: [],
        setJabatan: async ({ search })=>{
            try {
                const response = await (0,_services_baseURL__WEBPACK_IMPORTED_MODULE_0__/* .api */ .hi)({
                    method: "get",
                    url: `/personalia/jabatan`,
                    params: {
                        search
                    }
                });
                set((state)=>({
                        ...state,
                        dtJabatan: response.data
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useJabatanApi);


/***/ }),

/***/ 60888:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13998);
/* harmony import */ var zustand_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88658);
/* harmony import */ var _services_baseURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94437);
/* harmony import */ var _stores_auth_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53835);
/** @format */ 



const useRiwayatJabatan = (0,zustand__WEBPACK_IMPORTED_MODULE_2__/* .create */ .Ue)((0,zustand_middleware__WEBPACK_IMPORTED_MODULE_3__/* .devtools */ .mW)((set, get)=>({
        dtRiwayatJabatan: [],
        showRiwayatJabatan: [],
        setRiwayatJabatan: async ({ page = 1, limit = 10, search, jenis })=>{
            try {
                const token = await _stores_auth_login__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getState().setToken();
                const response = await (0,_services_baseURL__WEBPACK_IMPORTED_MODULE_0__/* .crud */ .Sj)({
                    method: "get",
                    url: `/personalia/riwayat_jabatan`,
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                    params: {
                        limit,
                        page,
                        search,
                        jenis
                    }
                });
                set((state)=>({
                        ...state,
                        dtRiwayatJabatan: response.data.data
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
        setShowRiwayatJabatan: async (id)=>{
            try {
                const token = await _stores_auth_login__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getState().setToken();
                const response = await (0,_services_baseURL__WEBPACK_IMPORTED_MODULE_0__/* .crud */ .Sj)({
                    method: "get",
                    url: `/personalia/riwayat_jabatan/${id}`,
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                set((state)=>({
                        ...state,
                        dtRiwayatJabatan: response.data.data
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
            try {
                const token = await _stores_auth_login__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getState().setToken();
                const res = await (0,_services_baseURL__WEBPACK_IMPORTED_MODULE_0__/* .crud */ .Sj)({
                    method: "post",
                    url: `/personalia/riwayat_jabatan`,
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                    data: row
                });
                set((prevState)=>({
                        dtRiwayatJabatan: {
                            last_page: prevState.dtRiwayatJabatan.last_page,
                            current_page: prevState.dtRiwayatJabatan.current_page,
                            data: [
                                res.data.data,
                                ...prevState.dtRiwayatJabatan.data
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
                    data: error.response?.data
                };
            }
        },
        removeData: async (id)=>{
            try {
                const token = await _stores_auth_login__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getState().setToken();
                const res = await (0,_services_baseURL__WEBPACK_IMPORTED_MODULE_0__/* .crud */ .Sj)({
                    method: "delete",
                    url: `/personalia/riwayat_jabatan/${id}`,
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                set((prevState)=>({
                        dtRiwayatJabatan: {
                            last_page: prevState.dtRiwayatJabatan.last_page,
                            current_page: prevState.dtRiwayatJabatan.current_page,
                            data: prevState.dtRiwayatJabatan.data.filter((item)=>item.id !== id)
                        }
                    }));
                return {
                    status: "berhasil hapus",
                    data: res.data
                };
            } catch (error) {
                return {
                    status: "error",
                    data: error.response?.data
                };
            }
        },
        updateData: async (id, row)=>{
            try {
                const token = await _stores_auth_login__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getState().setToken();
                const response = await (0,_services_baseURL__WEBPACK_IMPORTED_MODULE_0__/* .crud */ .Sj)({
                    method: "PUT",
                    url: `/personalia/riwayat_jabatan/${id}`,
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                    data: row
                });
                set((prevState)=>({
                        dtRiwayatJabatan: {
                            last_page: prevState.dtRiwayatJabatan.last_page,
                            current_page: prevState.dtRiwayatJabatan.current_page,
                            data: prevState.dtRiwayatJabatan.data.map((item)=>{
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
                    data: response?.data
                };
            } catch (error) {
                return {
                    status: "error",
                    data: error.response.data
                };
            }
        }
    })));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useRiwayatJabatan);


/***/ })

};
;