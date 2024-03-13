"use strict";
exports.id = 8346;
exports.ids = [8346];
exports.modules = {

/***/ 68346:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_baseURL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94437);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48421);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_image_file_resizer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71995);
/* harmony import */ var react_image_file_resizer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_image_file_resizer__WEBPACK_IMPORTED_MODULE_4__);
/** @format */ /* __next_internal_client_entry_do_not_use__ default auto */ 




const InputFile = ({ label, register, required, name, errors, addClass, accept, setValue, fileEdit, myFile, setMyFile })=>{
    const [typeFile, setTypeFile] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const resizeFile = (file)=>new Promise(()=>{
            if (file) {
                const splitType = file?.type?.split("/") || [];
                const type = splitType[0];
                if (type !== "image") {
                    return onSelectFile(file);
                }
                console.log({
                    splitType
                });
                react_image_file_resizer__WEBPACK_IMPORTED_MODULE_4___default().imageFileResizer(file, 1500, 1500, splitType[1], 80, 0, (uri)=>{
                    onSelectFile(uri);
                }, "file");
            } else {
                onSelectFile(null);
            }
        });
    const onSelectFile = (file)=>{
        if (file) {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = ()=>{
                setMyFile(reader.result);
            };
        }
        const splitType = file?.type?.split("/") || [];
        setTypeFile(splitType[0]);
        setValue(name, file);
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                className: "w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-secondary",
                id: "fileInput",
                type: "file",
                accept: accept,
                onChange: (event)=>{
                    const selectedFile = event.target?.files[0] || null;
                    resizeFile(selectedFile);
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "hidden",
                id: label,
                ...register(name, {
                    required
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex gap-4 mt-2",
                children: [
                    myFile && typeFile === "image" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        className: "rounded-lg",
                        src: myFile,
                        width: 100,
                        height: 100,
                        alt: ""
                    }),
                    fileEdit && name !== "file" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            src: `${_services_baseURL__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n}/${fileEdit}`,
                            width: 100,
                            height: 100,
                            alt: ""
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
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputFile);


/***/ })

};
;