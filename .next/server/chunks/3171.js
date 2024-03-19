"use strict";
exports.id = 3171;
exports.ids = [3171];
exports.modules = {

/***/ 23464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/** @format */ 

const InputRadio = ({ value, register, required, name, defaultChecked, id, errors })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex gap-1 items-start",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "radio",
                        value: value,
                        id: id.toString(),
                        name: name,
                        ...register(name, {
                            required
                        }),
                        className: `form-radio h-6 w-4 text-primary`,
                        defaultChecked: defaultChecked
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        htmlFor: id.toString(),
                        children: value
                    })
                ]
            }),
            errors?.type === "required" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-red-500 font-inter italic text-sm",
                children: "Tidak boleh kosong"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputRadio);


/***/ }),

/***/ 49253:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67646);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17370);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71031);
/** @format */ 




const SelectTahun = ({ label, start = 2012, end = moment__WEBPACK_IMPORTED_MODULE_2___default()().format("YYYY"), control, required, name, errors, addClass, menuPosition = "fixed", placeholder = "Pilih Tahun" })=>{
    const pilihTahun = ()=>{
        const array = [];
        for(let index = end; index >= start; index--){
            array.push({
                value: index,
                label: index
            });
        }
        return array;
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: addClass,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: "text-sm font-medium text-gray-700 tracking-wide",
                children: label
            }),
            required && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "ml-1 text-red-600",
                children: "*"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_3__/* .Controller */ .Qr, {
                name: name,
                control: control,
                rules: {
                    required
                },
                render: ({ field: { onChange, value, name, ref } })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_select__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
                        isClearable: true,
                        isSearchable: true,
                        options: pilihTahun(),
                        placeholder: placeholder,
                        menuPosition: menuPosition,
                        menuPortalTarget: document.body,
                        ref: ref,
                        value: value ? pilihTahun().find((x)=>x.value === value) : value,
                        onChange: (option)=>onChange(option ? option.value : option)
                    })
            }),
            errors?.type === "required" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-red-500 font-inter italic text-sm",
                children: "Tahun tidak boleh kosong"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectTahun);


/***/ }),

/***/ 22933:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13998);
/* harmony import */ var zustand_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88658);
/* harmony import */ var _services_baseURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94437);
/** @format */ 


const usePangkatApi = (0,zustand__WEBPACK_IMPORTED_MODULE_1__/* .create */ .Ue)((0,zustand_middleware__WEBPACK_IMPORTED_MODULE_2__/* .devtools */ .mW)((set, get)=>({
        dtPangkat: [],
        setPangkat: async ({ page = 1, limit = 10, search })=>{
            try {
                const response = await (0,_services_baseURL__WEBPACK_IMPORTED_MODULE_0__/* .api */ .hi)({
                    method: "get",
                    url: `/personalia/pangkat`,
                    params: {
                        limit,
                        page,
                        search
                    }
                });
                set((state)=>({
                        ...state,
                        dtPangkat: response.data
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usePangkatApi);


/***/ })

};
;