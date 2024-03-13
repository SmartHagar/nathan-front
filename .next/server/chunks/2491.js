"use strict";
exports.id = 2491;
exports.ids = [2491];
exports.modules = {

/***/ 14154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/** @format */ 
const HeaderAdmin = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "backdrop-blur-sm py-2",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                className: "text-gray-700 font-semibold text-center hidden lg:block",
                children: "Bidang SDM Universitas Ottow Geissler"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                className: "text-gray-700 font-semibold text-start lg:hidden",
                children: "Bidang SDM UOGP"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderAdmin);


/***/ }),

/***/ 15569:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   l: () => (/* binding */ pegawaiMenus)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75484);
/** @format */ 

const menus = [
    {
        name: "Home",
        href: "/admin",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_1__/* .BsHouseDoorFill */ .ufG, {})
    },
    {
        name: "Tata Usaha",
        href: "#",
        slug: "tata-usaha",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_1__/* .BsFillMagnetFill */ ._19, {}),
        subMenus: [
            {
                name: "Jenis",
                href: "/admin/tata-usaha/jenis"
            },
            {
                name: "Surat Masuk",
                href: "/admin/tata-usaha/surat/masuk"
            },
            {
                name: "Surat Keluar",
                href: "/admin/tata-usaha/surat/keluar"
            },
            {
                name: "Dokumen Lainnya",
                href: "/admin/tata-usaha/dokumen"
            }
        ]
    },
    {
        name: "Pangkat",
        href: "/admin/pangkat",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_1__/* .BsFillSignpost2Fill */ .FaF, {})
    },
    {
        name: "Jabatan",
        href: "/admin/jabatan",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_1__/* .BsFillWrenchAdjustableCircleFill */ .YNX, {})
    },
    {
        name: "Personalia",
        href: "#",
        slug: "personalia",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_1__/* .BsLampFill */ .pZ5, {}),
        subMenus: [
            {
                name: "Pegawai",
                href: "#",
                slug: "pegawai",
                subMenus: [
                    {
                        name: "Dosen",
                        href: "/admin/personalia/pegawai/dosen"
                    },
                    {
                        name: "Tendik",
                        href: "/admin/personalia/pegawai/tendik"
                    },
                    {
                        name: "Pekarya",
                        href: "/admin/personalia/pegawai/pekarya"
                    }
                ]
            },
            {
                name: "Riwayat",
                href: "#",
                slug: "riwayat",
                subMenus: [
                    {
                        name: "Jabatan",
                        href: "/admin/personalia/riwayat/jabatan"
                    },
                    {
                        name: "Pendidikan",
                        href: "/admin/personalia/riwayat/pendidikan"
                    },
                    {
                        name: "Pekerjaan",
                        href: "/admin/personalia/riwayat/pekerjaan"
                    }
                ]
            },
            {
                name: "Dokumen",
                href: "/admin/personalia/dokumen"
            }
        ]
    }
];
// list menu stackholder
const pegawaiMenus = [
    {
        name: "Home",
        href: "/pegawai",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_1__/* .BsHouseDoorFill */ .ufG, {})
    },
    {
        name: "Riwayat",
        href: "#",
        slug: "riwayat",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_1__/* .BsFillMagnetFill */ ._19, {}),
        subMenus: [
            {
                name: "Jabatan",
                href: "/pegawai/riwayat/jabatan"
            },
            {
                name: "Pendidikan",
                href: "/pegawai/riwayat/pendidikan"
            },
            {
                name: "Pekerjaan",
                href: "/pegawai/riwayat/pekerjaan"
            }
        ]
    },
    {
        name: "Dokumen",
        href: "/pegawai/dokumen",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_1__/* .BsFillSignpost2Fill */ .FaF, {})
    },
    {
        name: "Akun",
        href: "/pegawai/akun",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_1__/* .BsPersonFillLock */ .B2N, {})
    }
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menus);



/***/ })

};
;