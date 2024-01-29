"use strict";
exports.id = 9109;
exports.ids = [9109];
exports.modules = {

/***/ 39109:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71031);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15435);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17370);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/** @format */ 




const InputDate = ({ control, required, name, errors, addClass, label, startDate, setStartDate })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: addClass,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                className: "text-sm font-medium text-gray-700 tracking-wide block",
                children: [
                    label,
                    required && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "ml-1 text-red-600",
                        children: "*"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_3__/* .Controller */ .Qr, {
                name: name,
                control: control,
                rules: {
                    required
                },
                render: ({ field })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
                        selected: startDate,
                        onChange: (date)=>{
                            if (date) {
                                setStartDate(date);
                                const mtDate = moment__WEBPACK_IMPORTED_MODULE_2___default()(date).format("YYYY-MM-DD");
                                field.onChange(mtDate);
                            } else {
                                setStartDate(null); // or set to an empty value that works for your use case
                                field.onChange(""); // Set the value in react-hook-form
                            }
                        },
                        dateFormat: "dd/MM/yyyy",
                        value: startDate || "",
                        peekNextMonth: true,
                        showMonthDropdown: true,
                        showYearDropdown: true,
                        dropdownMode: "select",
                        className: "w-full border rounded-lg py-2 px-4"
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputDate);


/***/ })

};
;