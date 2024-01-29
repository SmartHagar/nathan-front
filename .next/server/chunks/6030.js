exports.id = 6030;
exports.ids = [6030];
exports.modules = {

/***/ 13259:
/***/ (() => {



/***/ }),

/***/ 5301:
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

const ButtonPrimary = ({ text, onClick, addClass })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        onClick: onClick,
        className: `bg-primary rounded-lg px-4 py-2 text-white w-fit cursor-pointer hover:shadow-sm hover:shadow-primary ${addClass}`,
        children: text
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonPrimary);


/***/ }),

/***/ 6187:
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
/** @format */ /* __next_internal_client_entry_do_not_use__ default auto */ 


const InputTextDefault = ({ label, register, required, name, minLength, maxLength, errors, valueAsNumber, type = "text", readOnly, placeholder, autoComplete = "on", addClass, value })=>{
    const [isTypePassword, setIsTypePassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const tooglePassword = ()=>{
        setIsTypePassword(!isTypePassword);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: addClass,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                htmlFor: name,
                className: "text-sm font-medium text-gray-700 tracking-wide",
                children: label
            }),
            required && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "ml-1 text-red-600",
                children: "*"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        className: "w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-secondary",
                        type: type === "password" ? isTypePassword ? "text" : "password" : type,
                        id: name,
                        readOnly: readOnly,
                        placeholder: placeholder,
                        autoComplete: autoComplete,
                        ...register(name, {
                            required,
                            minLength,
                            maxLength,
                            valueAsNumber
                        }),
                        value: value
                    }),
                    type === "password" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "absolute right-2 top-0 flex items-center h-full cursor-pointer text-blue-600",
                        onClick: tooglePassword,
                        children: isTypePassword ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__/* .BsEye */ .rCC, {
                            size: 20
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__/* .BsEyeSlash */ .I$m, {
                            size: 20
                        })
                    })
                ]
            }),
            errors?.type === "required" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "text-red-500 font-inter italic text-sm",
                children: [
                    label,
                    " tidak boleh kosong"
                ]
            }),
            errors?.type === "minLength" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "text-red-500 font-inter italic text-sm",
                children: [
                    label,
                    " tidak boleh kurang dari ",
                    minLength,
                    " karakter"
                ]
            }),
            errors?.type === "maxLength" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "text-red-500 font-inter italic text-sm",
                children: [
                    label,
                    " tidak boleh lebih dari ",
                    maxLength,
                    " karakter"
                ]
            }),
            errors?.type === "pattern" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "text-red-500 font-inter italic text-sm",
                children: [
                    label,
                    " hanya boleh angka."
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputTextDefault);


/***/ })

};
;