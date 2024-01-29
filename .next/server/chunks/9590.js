"use strict";
exports.id = 9590;
exports.ids = [9590];
exports.modules = {

/***/ 39590:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_select_async__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31072);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71031);
/** @format */ 



const SelectFromDb = ({ dataDb, body, control, required, name, errors, placeholder, addClass, label, defaultOptions = true })=>{
    // style
    const styles = {
        multiValue: (base, state)=>{
            return state.data.isFixed ? {
                ...base,
                backgroundColor: "gray"
            } : base;
        },
        multiValueLabel: (base, state)=>{
            return state.data.isFixed ? {
                ...base,
                fontWeight: "bold",
                color: "white",
                paddingRight: 6
            } : base;
        },
        multiValueRemove: (base, state)=>{
            return state.data.isFixed ? {
                ...base,
                display: "none"
            } : base;
        }
    };
    const getProperty = (obj, prop)=>{
        const value = obj[prop];
        if (prop === "id") {
            return {
                value: value,
                label: ""
            };
        } else if (prop.includes(".")) {
            // melakukan pengecekan jika prop memiliki "." (titik)
            const [head, ...tail] = prop.split(".");
            const nestedObj = obj[head];
            return getProperty(nestedObj, tail.join(".")); // melakukan rekursi untuk mengambil property selanjutnya
        } else {
            return {
                value: "",
                label: value
            };
        }
    };
    const myOptions = ()=>{
        const result = dataDb && dataDb.map((row, index)=>{
            const rowResult = body.map((column)=>{
                return getProperty(row, column);
            });
            const labels = rowResult.map((item)=>item.label).filter((label)=>label !== "");
            const labelString = labels.join(labels.length > 1 ? " - " : "");
            return {
                value: rowResult.find((item)=>item.value !== "").value,
                label: labelString
            };
        });
        return result;
    };
    const filterData = (inputValue)=>{
        return myOptions()?.filter((i)=>i.label.toLowerCase().includes(inputValue.toLowerCase()));
    };
    const loadOptions = (inputValue, callback)=>{
        setTimeout(()=>{
            callback(filterData(inputValue));
        }, 1000);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: addClass,
        children: [
            label && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
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
                render: ({ field: { onChange, value, ref } })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_select_async__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        cacheOptions: true,
                        defaultOptions: defaultOptions,
                        isClearable: true,
                        isSearchable: true,
                        loadOptions: loadOptions,
                        placeholder: placeholder,
                        menuPlacement: "auto",
                        menuPosition: "fixed",
                        menuPortalTarget: document.body,
                        styles: styles,
                        ref: ref,
                        value: myOptions()?.find((x)=>x.value === value) || null,
                        onChange: (option)=>onChange(option ? option.value : option)
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectFromDb);


/***/ })

};
;