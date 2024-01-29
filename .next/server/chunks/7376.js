"use strict";
exports.id = 7376;
exports.ids = [7376];
exports.modules = {

/***/ 17376:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ SelectDefault)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/** @format */ 

const SelectDefault = ({ label, register, required, name, readOnly, placeholder, defaultOption, options = [], errors, addClass })=>{
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "relative",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                    className: "w-full rounded-lg py-2 px-2 bg-white border border-gray-300 focus:outline-none focus:border-secondary",
                    id: label,
                    readOnly: readOnly,
                    placeholder: placeholder,
                    ...register(name, {
                        required
                    }),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                            value: "",
                            children: defaultOption
                        }),
                        options.map((item, index)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: item.value,
                                children: item.label
                            }, index);
                        })
                    ]
                })
            }),
            errors?.type === "required" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "text-red-500 font-inter italic text-sm",
                children: [
                    label,
                    " tidak boleh kosong"
                ]
            })
        ]
    });
};


/***/ })

};
;