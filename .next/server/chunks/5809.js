exports.id = 5809;
exports.ids = [5809];
exports.modules = {

/***/ 86304:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 34904))

/***/ }),

/***/ 34904:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ layout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./src/components/header/HeaderAdmin.tsx
var HeaderAdmin = __webpack_require__(14154);
// EXTERNAL MODULE: ./src/components/loading/LoadingSpiner.tsx
var LoadingSpiner = __webpack_require__(83439);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(31621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/sidebar/Menus.tsx
var Menus = __webpack_require__(15569);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(59483);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(48421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/js-cookie/dist/js.cookie.mjs
var js_cookie = __webpack_require__(97270);
;// CONCATENATED MODULE: ./src/components/sidebar/AdminSide.tsx
/** @format */ /* __next_internal_client_entry_do_not_use__ default auto */ 






const renderMenus = ({ subMenus, name, icon, slug, index, pathname, openMenus })=>{
    const isMenuOpen = openMenus.includes(slug);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("details", {
            className: "group [&_summary::-webkit-details-marker]:hidden",
            open: isMenuOpen,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("summary", {
                    className: `flex items-center justify-between px-3 py-2 transition-colors duration-300 transform rounded-lg hover:bg-primary hover:text-gray-200 }`,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex items-center cursor-pointer",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: icon
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "mx-2 text-sm font-medium",
                                    children: name
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "shrink-0 transition duration-300 group-open:-rotate-180",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    fillRule: "evenodd",
                                    d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                                    clipRule: "evenodd"
                                })
                            })
                        })
                    ]
                }),
                subMenus && subMenus.map((subMenu, index)=>{
                    const isActiveSub = pathname === subMenu.href;
                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "ml-4",
                        children: [
                            !subMenu.subMenus && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: subMenu.href,
                                className: `flex items-center mx-3 py-2 transition-colors duration-300 transform rounded-lg hover:bg-primary/50 hover:text-gray-200 ${isActiveSub && "border-b-2 border-primary text-primary bg-white/50"}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "mx-2 text-sm font-medium",
                                    children: subMenu.name
                                })
                            }),
                            subMenu.subMenus && renderMenus({
                                subMenus: subMenu.subMenus,
                                name: subMenu.name,
                                icon: subMenu.icon,
                                slug: subMenu.slug,
                                index: index,
                                pathname: pathname,
                                openMenus
                            })
                        ]
                    }, index);
                })
            ]
        })
    }, index);
};
const AdminSide = ()=>{
    const [isLoading, setIsLoading] = (0,react_.useState)(false);
    const [openMenus, setOpenMenus] = (0,react_.useState)([]);
    const router = (0,navigation.useRouter)();
    const pathname = (0,navigation.usePathname)();
    const findOpenMenus = (menuList)=>{
        for (const menu of menuList){
            // console.log({ slug, menu });
            if (menu.href === pathname) {
                const second = pathname?.split("/");
                // if second.length > 0 remove index 0
                second.splice(0, 1);
                setOpenMenus(second);
            }
            // console.log({ menu });
            if (menu.subMenus) {
                findOpenMenus(menu.subMenus);
            }
        }
    };
    (0,react_.useEffect)(()=>{
        findOpenMenus(Menus/* default */.Z);
        return ()=>{};
    }, [
        pathname
    ]);
    const handleSingout = async ()=>{
        setIsLoading(true);
        // remove cookie token and role
        js_cookie/* default */.Z.remove("token");
        js_cookie/* default */.Z.remove("role");
        // redirect to roote page
        router.push("/");
        setIsLoading(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("aside", {
        className: "flex flex-col w-64 h-screen px-5 overflow-y-auto",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex items-center mt-2 gap-2 justify-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "relative h-[75px] w-20",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        alt: "logo",
                        fill: true,
                        sizes: "(100vw, 100vh)",
                        style: {
                            objectFit: "contain",
                            objectPosition: "center",
                            width: "100%",
                            height: "100%"
                        },
                        src: "/images/uogp.png"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mt-4 mb-2 mx-auto",
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "px-3 text-sm font-semibold text-black uppercasetext-gray-400",
                    children: "Menu"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col justify-between flex-1 pt-2 border-t",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                        className: "-mx-3 space-y-6 ",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "space-y-3 text-slate-800",
                            children: Menus/* default */.Z.map(({ name, href, icon, subMenus, slug }, index)=>{
                                const isActive = pathname === href;
                                if (!subMenus) {
                                    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                            href: href,
                                            className: `flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg hover:bg-primary/50 hover:text-gray-200 ${isActive && "border-b-2 border-primary text-primary bg-white/50"}`,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: icon
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "mx-2 text-sm font-medium",
                                                    children: name
                                                })
                                            ]
                                        })
                                    }, index);
                                } else {
                                    return renderMenus({
                                        subMenus,
                                        name,
                                        icon,
                                        slug,
                                        index,
                                        pathname,
                                        openMenus
                                    });
                                }
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: isLoading ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "Loading..."
                        }) : /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            onClick: handleSingout,
                            className: "flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg text-primary hover:underline hover:text-gray-200",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "Sign Out"
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const sidebar_AdminSide = (AdminSide);

// EXTERNAL MODULE: ./src/stores/auth/login.ts
var login = __webpack_require__(53835);
// EXTERNAL MODULE: ./node_modules/react-icons/bs/index.esm.js
var index_esm = __webpack_require__(75484);
// EXTERNAL MODULE: ./src/context/roleContext.tsx
var roleContext = __webpack_require__(81134);
;// CONCATENATED MODULE: ./src/app/admin/layout.tsx
/** @format */ /* __next_internal_client_entry_do_not_use__ default auto */ 








const Layout = (props)=>{
    // state
    const [isLoading, setIsLoading] = (0,react_.useState)(true);
    const [isVisible, setIsVisible] = (0,react_.useState)(false);
    // pathname
    const pathname = (0,navigation.usePathname)();
    // route
    const route = (0,navigation.useRouter)();
    const { cekToken } = (0,login/* default */.Z)();
    const getCek = async ()=>{
        const res = await cekToken();
        if (res?.error) {
            // redirect to login
            route.push("/");
        } else {
            const { user } = res?.data?.data;
            console.log({
                user
            });
            if (user.hak === "pegawai") {
                route.push(`pegawai`);
            }
        }
        return res;
    };
    (0,react_.useEffect)(()=>{
        getCek();
        setIsVisible(false);
        return ()=>{};
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        pathname
    ]);
    const loadData = async ()=>{
        const cek = await getCek();
        if (!cek?.error) {
            setIsLoading(false);
        }
    };
    (0,react_.useEffect)(()=>{
        loadData();
        console.log("pertama render");
        return ()=>{};
    }, []);
    if (isLoading) {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "flex min-h-screen h-screen justify-center items-center",
            children: /*#__PURE__*/ jsx_runtime_.jsx(LoadingSpiner/* default */.Z, {})
        });
    }
    const handleClick = ()=>{
        setIsVisible(!isVisible);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(roleContext/* default */.Z, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex min-h-screen h-screen text-black bg-bg",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("aside", {
                        className: `w-[18rem] z-50 lg:block ${isVisible ? "block absolute bg-bg" : "hidden"}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(sidebar_AdminSide, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex h-full w-full overflow-hidden p-1 rounded-lg flex-col",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mb-1 flex items-center justify-between lg:-mx-4 lg:-mt-2 lg:block",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(HeaderAdmin/* default */.Z, {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "lg:hidden mr-2 text-xl cursor-pointer",
                                        onClick: handleClick,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* BsMenuButtonWide */.vSj, {})
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "bg-white h-full overflow-hidden p-2 drop-shadow-2xl shadow-black rounded-lg",
                                children: props.children
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const layout = (Layout);


/***/ }),

/***/ 81134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ RoleContext),
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97270);
/** @format */ 


const RoleContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    role: null
});
const RoleProvider = ({ children })=>{
    const [role, setRole] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const userRole = js_cookie__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.get("role");
        setRole(userRole || null);
        return ()=>{
            setRole(null); // Reset role when unmounting component
        };
    }, []);
    const contextValue = {
        role
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RoleContext.Provider, {
        value: contextValue,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoleProvider);



/***/ }),

/***/ 24642:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21913);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/media/smarthagar/Assets/Project/NextJS/TA/nathan-front/src/app/admin/layout.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;