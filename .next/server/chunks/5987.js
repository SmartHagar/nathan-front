exports.id = 5987;
exports.ids = [5987];
exports.modules = {

/***/ 13259:
/***/ (() => {



/***/ }),

/***/ 1516:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/** @format */ /* __next_internal_client_entry_do_not_use__ default auto */ 

const InputTextSearch = ({ placeholder, addClass, onChange, defaultValue = "" })=>{
    const handleInputChange = (e)=>{
        onChange(e.target.value); // Teruskan nilai input ke fungsi onChange yang diberikan sebagai prop
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: addClass,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
            className: "w-full text-gray-700 px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-secondary",
            placeholder: placeholder,
            onChange: handleInputChange,
            defaultValue: defaultValue
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputTextSearch);


/***/ }),

/***/ 95629:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75484);
/** @format */ 


const ModalDefault = ({ showModal, setShowModal, children, title, width = "" })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "",
        children: showModal && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "fixed inset-0 z-50 mx-auto flex justify-center bg-black/[0.2]",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "bg-white p-5 rounded-xl w-[500px] h-min mt-[10%] max-h-[70%] overflow-hidden flex flex-col lg:w-[700px]",
                style: {
                    width: width
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-row items-center justify-between border-b border-primary/[0.2] mb-4 pb-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                className: "text-xl font-roboto",
                                children: title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__/* .BsXLg */ .C7Q, {
                                className: "cursor-pointer hover:text-primary",
                                onClick: ()=>setShowModal(false)
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "overflow-auto",
                        children: children
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalDefault);


/***/ }),

/***/ 25947:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75484);
/** @format */ 


const ModalDelete = ({ showDel, setShowDel, setDelete })=>{
    return showDel && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "fixed inset-0 z-50 mx-auto flex justify-center bg-black/[0.2]",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "bg-white p-5 rounded-xl lg:ml-64 md:min-w-[500px] h-min mt-[20%] max-h-[70%] overflow-auto",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-row items-center justify-between border-b border-primary/[0.1] mb-4 pb-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                className: "text-xl font-roboto",
                                children: "Hapus Data"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__/* .BsXLg */ .C7Q, {
                                className: "cursor-pointer hover:text-black/[0.5]",
                                onClick: ()=>setShowDel(false)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Apaka Anda Yakin Menghapus Data Ini?"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex justify-center gap-4 mt-4",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "hover:border hover:border-red-600 bg-red-600 w-20 py-2 rounded-xl text-white ",
                                        onClick: ()=>setDelete({
                                                isDelete: true
                                            }),
                                        children: "Hapus"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "w-20 py-2 rounded-xl hover:border-b",
                                        onClick: ()=>setShowDel(false),
                                        children: "Batal"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalDelete);


/***/ }),

/***/ 8453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75484);
/** @format */ 


const PaginationDefault = ({ totalPages, currentPage, setPage })=>{
    let pages = [];
    if (totalPages <= 5) {
        pages = Array.from({
            length: totalPages
        }, (_, i)=>i + 1);
    } else {
        pages = [
            1,
            currentPage - 1,
            currentPage,
            currentPage + 1,
            totalPages
        ];
        pages = Array.from(new Set(pages)).sort((a, b)=>a - b);
        pages = pages.filter((page)=>page > 0 && page <= totalPages);
        for(let i = 1; i < pages.length - 1; i++){
            if (pages[i] - pages[i - 1] > 1) {
                pages.splice(i, 0, "...");
                i++;
            }
        }
        if (totalPages - pages[pages.length - 2] > 1) {
            pages.splice(pages.length - 1, 0, "...");
        }
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "h-full",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ol", {
            className: "flex justify-center gap-1 text-xs font-medium",
            children: [
                currentPage > 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        onClick: ()=>setPage(currentPage - 1),
                        className: "cursor-pointer inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__/* .BsChevronLeft */ .pjk, {})
                    })
                }),
                pages.map((page, index)=>page === "..." ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: "flex items-end text-xl",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `block h-8 w-8 rounded border border-gray-100 text-center leading-8`,
                            children: page
                        })
                    }, index) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            onClick: ()=>setPage(page),
                            className: `cursor-pointer block h-8 w-8 rounded border border-gray-100 text-center leading-8 ${page == currentPage ? "bg-blue-900 text-white" : ""}`,
                            children: page
                        })
                    }, index)),
                currentPage < totalPages && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        onClick: ()=>setPage(currentPage + 1),
                        className: "cursor-pointer inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__/* .BsChevronRight */ .fmn, {})
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaginationDefault);


/***/ }),

/***/ 44334:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ tables_TablesDefault)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./src/services/baseURL.ts
var baseURL = __webpack_require__(94437);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(48421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(17370);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
// EXTERNAL MODULE: ./node_modules/moment/locale/id.js
var id = __webpack_require__(2357);
;// CONCATENATED MODULE: ./src/services/getProperty.tsx
/** @format */ 





moment_default().locale("id");
const getProperty = (obj, prop)=>{
    let parts = prop.split(".");
    if (Array.isArray(parts)) {
        let last = parts.length > 1 ? parts.pop() : parts;
        // jika gabungan antara pangkat golongan dan ruang
        if (last.includes("pangkat_gol_ru")) {
            return `${obj["pangkat"]["gol"]} ${obj["pangkat"]["ruang"]}`;
        }
        let l = parts.length, i = 1, current = parts[0];
        while((obj = obj[current]) && i < l){
            current = parts[i];
            i++;
        }
        if (typeof obj === "object") {
            return obj ? obj[last] : "";
        }
        if (prop === "tgl_mulai" || prop === "tgl_selesai" || prop === "mulai" || prop === "seles") {
            return moment_default()(obj).format("DD/MMM/YYYY");
        }
        if (prop === "gambar" || prop === "foto" || prop === "file") {
            // mengambil extension dari obj
            const extension = obj.split(".").pop();
            return obj && (extension === "pdf" ? /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: `${baseURL/* BASE_URL */._n}/${obj}`,
                target: "_blank",
                rel: "noreferrer",
                className: "text-blue-700",
                children: "Lihat File"
            }) : /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: `${baseURL/* BASE_URL */._n}/${obj}`,
                width: 100,
                height: 100,
                alt: ""
            }));
        }
        return /*#__PURE__*/ jsx_runtime_.jsx("p", {
            className: "capitalize",
            children: obj
        });
    } else {
        // eslint-disable-next-line no-throw-literal
        throw "parts is not valid array";
    }
};
/* harmony default export */ const services_getProperty = (getProperty);

// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(59483);
// EXTERNAL MODULE: ./node_modules/react-icons/bs/index.esm.js
var index_esm = __webpack_require__(75484);
;// CONCATENATED MODULE: ./src/components/tables/TablesDefault.tsx
/** @format */ 



const TablesDefault = (props)=>{
    const router = (0,navigation.useRouter)();
    const showNo = (index)=>{
        let noUrut = (props.page - 1) * props.limit + index;
        return noUrut + 1;
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
        className: "w-full border-collapse text-left",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                className: "",
                children: /*#__PURE__*/ jsx_runtime_.jsx("tr", {
                    children: props.headTable && props.headTable.map((row, index)=>/*#__PURE__*/ jsx_runtime_.jsx("th", {
                            scope: "col",
                            className: `px-6 py-4`,
                            children: row
                        }, index))
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                className: "divide-y divide-gray-100 border-t border-gray-100 ",
                children: props.dataTable && props.dataTable.map((row, index)=>{
                    const { id } = row;
                    const prodi_id = row?.prodi_id;
                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                        className: ` ${prodi_id && prodi_id === 1 ? "bg-blue-100" : prodi_id === 2 ? "bg-green-100" : prodi_id === 3 ? "bg-orange-100" : "hover:bg-gray-50 hover:text-secondary"}`,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                className: "px-6 py-4 rounded-l-xl",
                                children: showNo(index)
                            }),
                            props.tableBodies.map((column, index)=>{
                                return /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                    className: `px-6 py-4 whitespace-nowrap`,
                                    children: services_getProperty(row, column)
                                }, index);
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                className: "px-6 py-4 rounded-r-xl",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex flex-row gap-2",
                                    children: [
                                        props.costume && props.costume(row),
                                        props.pekerjaan && /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* BsFillEmojiSunglassesFill */.B_A, {
                                            onClick: ()=>router.push(`/admin/pekerjaan/${id}`),
                                            size: 20,
                                            className: "cursor-pointer hover:text-blue-600",
                                            title: "Pekerjaan"
                                        }),
                                        props.ubah && /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* BsFillPencilFill */.Ph1, {
                                            onClick: ()=>props.setEdit(row),
                                            size: 20,
                                            className: "cursor-pointer hover:text-yellow-500",
                                            title: "Ubah"
                                        }),
                                        props.hapus && /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* BsFillTrashFill */.AuQ, {
                                            onClick: ()=>props?.setDelete && props?.setDelete({
                                                    id,
                                                    isDelete: false
                                                }),
                                            size: 20,
                                            className: "cursor-pointer hover:text-red-700",
                                            title: "Hapus"
                                        })
                                    ]
                                })
                            })
                        ]
                    }, index);
                })
            })
        ]
    });
};
/* harmony default export */ const tables_TablesDefault = (TablesDefault);


/***/ }),

/***/ 17806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33518);
/** @format */ 
const toastShow = ({ event, position })=>{
    switch(event.type){
        case "success":
            react_hot_toast__WEBPACK_IMPORTED_MODULE_0__["default"].success(event.message, {
                duration: 4000,
                position
            });
            break;
        case "error":
            react_hot_toast__WEBPACK_IMPORTED_MODULE_0__["default"].error(event.message, {
                duration: 4000,
                position
            });
            break;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toastShow);


/***/ })

};
;