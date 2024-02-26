"use strict";
(() => {
var exports = {};
exports.id = 7155;
exports.ids = [7155];
exports.modules = {

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 4221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&isDynamic=0!./src/app/favicon.ico?__next_metadata_route__
var favicon_next_metadata_route_namespaceObject = {};
__webpack_require__.r(favicon_next_metadata_route_namespaceObject);
__webpack_require__.d(favicon_next_metadata_route_namespaceObject, {
  GET: () => (GET),
  dynamic: () => (dynamic)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(36519);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(53488);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
;// CONCATENATED MODULE: external "next/server"
const server_namespaceObject = require("next/server");
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&isDynamic=0!./src/app/favicon.ico?__next_metadata_route__


const contentType = "image/x-icon"
const buffer = Buffer.from("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", 'base64'
  )

function GET() {
  return new server_namespaceObject.NextResponse(buffer, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': "public, max-age=0, must-revalidate",
    },
  })
}

const dynamic = 'force-static'

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Ffavicon.ico%2Froute&name=app%2Ffavicon.ico%2Froute&pagePath=private-next-app-dir%2Ffavicon.ico&appDir=%2Fmedia%2Fsmarthagar%2FAssets%2FProject%2FNextJS%2FTA%2Fnathan-front%2Fsrc%2Fapp&appPaths=%2Ffavicon.ico&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/favicon.ico/route","pathname":"/favicon.ico","filename":"favicon","bundlePath":"app/favicon.ico/route"},"resolvedPagePath":"next-metadata-route-loader?page=%2Ffavicon.ico%2Froute&isDynamic=0!/media/smarthagar/Assets/Project/NextJS/TA/nathan-front/src/app/favicon.ico?__next_metadata_route__","nextConfigOutput":""}
    const routeModule = new (module_default())({
      ...options,
      userland: favicon_next_metadata_route_namespaceObject,
    })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/favicon.ico/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1697,8451], () => (__webpack_exec__(4221)));
module.exports = __webpack_exports__;

})();