"use strict";
exports.id = 2868;
exports.ids = [2868];
exports.modules = {

/***/ 95629:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 17806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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