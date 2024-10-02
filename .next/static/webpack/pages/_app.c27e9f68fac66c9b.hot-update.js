"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/reducer/productsSlice.ts":
/*!**************************************!*\
  !*** ./src/reducer/productsSlice.ts ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchOrders: function() { return /* binding */ fetchOrders; },\n/* harmony export */   ref: function() { return /* binding */ ref; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_object_destructuring_empty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_object_destructuring_empty */ \"./node_modules/@swc/helpers/esm/_object_destructuring_empty.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/tslib/tslib.es6.mjs\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hooks */ \"./src/reducer/hooks.ts\");\n\n\n\n\n\nvar fetchOrders = (0,_hooks__WEBPACK_IMPORTED_MODULE_0__.createAppAsyncThunk)(\"orders/fetchOrders\", function() {\n    var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_1__._)(function(_, thunkApi) {\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function(_state) {\n            return [\n                2,\n                new Promise(function(resolve) {\n                    setTimeout(function() {\n                        resolve(orders);\n                    }, 1000);\n                })\n            ];\n        });\n    });\n    return function(_, thunkApi) {\n        return _ref.apply(this, arguments);\n    };\n}());\nvar initialState = {\n    orders: [],\n    products: [],\n    status: \"idle\",\n    error: null\n};\nvar productsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.createSlice)({\n    name: \"products\",\n    initialState: initialState,\n    reducers: {}\n});\nvar ref = (0,_swc_helpers_object_destructuring_empty__WEBPACK_IMPORTED_MODULE_4__._)(productsSlice.actions);\n/* harmony default export */ __webpack_exports__[\"default\"] = (productsSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdWNlci9wcm9kdWN0c1NsaWNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBaUU7QUFDbkI7QUFLdkMsSUFBTUUsY0FBY0QsMkRBQW1CQSxDQUM1QztlQUNBLDRFQUFPRSxHQUFHQzs7WUFDUjs7Z0JBQU8sSUFBSUMsUUFBbUIsU0FBQ0M7b0JBQzdCQyxXQUFXO3dCQUNURCxRQUFRRTtvQkFDVixHQUFHO2dCQUNMOzs7SUFDRjtvQkFOT0wsR0FBR0M7OztLQU9WO0FBT0YsSUFBTUssZUFBZTtJQUNuQkQsUUFBUSxFQUFFO0lBQ1ZFLFVBQVUsRUFBRTtJQUNaQyxRQUFRO0lBQ1JDLE9BQU87QUFDVDtBQUVBLElBQU1DLGdCQUFnQmIsNkRBQVdBLENBQUM7SUFDaENjLE1BQU07SUFDTkwsY0FBQUE7SUFDQU0sVUFBVSxDQUFDO0FBQ2I7QUFDTyxJQUFNLGlGQUFLRixjQUFjRyxPQUFPLEVBQUM7QUFDeEMsK0RBQWVILGNBQWNJLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcmVkdWNlci9wcm9kdWN0c1NsaWNlLnRzPzBlN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQXN5bmNUaHVuaywgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVBcHBBc3luY1RodW5rIH0gZnJvbSBcIi4vaG9va3NcIjtcclxuaW1wb3J0IHsgSU9yZGVycyB9IGZyb20gXCIuL3R5cGVzXCI7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaE9yZGVycyA9IGNyZWF0ZUFwcEFzeW5jVGh1bms8SU9yZGVyc1tdIHwgdW5kZWZpbmVkPihcclxuICBcIm9yZGVycy9mZXRjaE9yZGVyc1wiLFxyXG4gIGFzeW5jIChfLCB0aHVua0FwaSkgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPElPcmRlcnNbXT4oKHJlc29sdmUpID0+IHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgcmVzb2x2ZShvcmRlcnMpO1xyXG4gICAgICB9LCAxMDAwKTtcclxuICAgIH0pO1xyXG4gIH1cclxuKTtcclxuXHJcbmludGVyZmFjZSBQcm9kdWN0c1N0YXRlIHtcclxuICBvcmRlcnM6IElPcmRlcnNbXTtcclxuICBcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIG9yZGVyczogW10sXHJcbiAgcHJvZHVjdHM6IFtdLFxyXG4gIHN0YXR1czogXCJpZGxlXCIsXHJcbiAgZXJyb3I6IG51bGwsXHJcbn07XHJcblxyXG5jb25zdCBwcm9kdWN0c1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwicHJvZHVjdHNcIixcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHt9LFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IHt9ID0gcHJvZHVjdHNTbGljZS5hY3Rpb25zO1xyXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0c1NsaWNlLnJlZHVjZXI7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImNyZWF0ZUFwcEFzeW5jVGh1bmsiLCJmZXRjaE9yZGVycyIsIl8iLCJ0aHVua0FwaSIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsIm9yZGVycyIsImluaXRpYWxTdGF0ZSIsInByb2R1Y3RzIiwic3RhdHVzIiwiZXJyb3IiLCJwcm9kdWN0c1NsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/reducer/productsSlice.ts\n"));

/***/ })

});