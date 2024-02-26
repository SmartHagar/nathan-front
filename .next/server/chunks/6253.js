exports.id = 6253;
exports.ids = [6253];
exports.modules = {

/***/ 72147:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 47734, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 88709, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 62698, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7833, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 29150, 23))

/***/ }),

/***/ 52253:
/***/ (() => {



/***/ }),

/***/ 83439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/** @format */ 

const LoadingSpiner = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: "Loading..."
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadingSpiner);


/***/ }),

/***/ 94437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I8: () => (/* binding */ auth),
/* harmony export */   Sj: () => (/* binding */ crud),
/* harmony export */   _n: () => (/* binding */ BASE_URL),
/* harmony export */   hi: () => (/* binding */ api)
/* harmony export */ });
/* unused harmony exports storage, url_auth, url_api, url_crud, url_storage */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53071);
/** @format */ 
const BASE_URL = "https://nathan.apisparta.my.id";
// const BASE_URL = "http://127.0.0.1:8000";
const url_auth = `${BASE_URL}/auth`;
const url_api = `${BASE_URL}/api`;
const url_crud = `${BASE_URL}/crud`;
const url_storage = `${BASE_URL}/storage`;
const auth = axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.create({
    baseURL: url_auth
});
const crud = axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.create({
    baseURL: url_crud
});
const api = axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.create({
    baseURL: url_api
});
const storage = axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.create({
    baseURL: url_storage
});



/***/ }),

/***/ 53835:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13998);
/* harmony import */ var zustand_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88658);
/* harmony import */ var _services_baseURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94437);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97270);
/** @format */ 



const useLogin = (0,zustand__WEBPACK_IMPORTED_MODULE_2__/* .create */ .Ue)((0,zustand_middleware__WEBPACK_IMPORTED_MODULE_3__/* .devtools */ .mW)((set, get)=>({
        setToken: async ()=>{
            const getToken = js_cookie__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.get("token");
            return getToken;
        },
        setLogin: async (data)=>{
            try {
                const response = await (0,_services_baseURL__WEBPACK_IMPORTED_MODULE_0__/* .auth */ .I8)({
                    method: "post",
                    url: `/login`,
                    data
                });
                return {
                    status: "success",
                    data: response.data
                };
            } catch (error) {
                return {
                    status: "error",
                    error: error.response.data
                };
            }
        },
        cekToken: async ()=>{
            const token = await get().setToken();
            try {
                const response = await (0,_services_baseURL__WEBPACK_IMPORTED_MODULE_0__/* .auth */ .I8)({
                    method: "post",
                    url: `/cek_token`,
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                return {
                    status: "success",
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLogin);


/***/ }),

/***/ 16660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75553);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/** @format */ 

const metadata = {
    title: "Biro SDM Universitas Ottow Geissler",
    description: "Website Biro SDM Universitas Ottow Geissler"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("body", {
            children: children
        })
    });
}


/***/ }),

/***/ 82819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23785);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 75553:
/***/ (() => {



/***/ })

};
;