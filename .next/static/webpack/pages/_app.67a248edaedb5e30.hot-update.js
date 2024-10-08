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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   removeProductFromOrder: function() { return /* binding */ removeProductFromOrder; },\n/* harmony export */   setOrdersWithProducts: function() { return /* binding */ setOrdersWithProducts; },\n/* harmony export */   setRemoveItemOrder: function() { return /* binding */ setRemoveItemOrder; },\n/* harmony export */   setRemoveItemProduct: function() { return /* binding */ setRemoveItemProduct; },\n/* harmony export */   setSelectedOrder: function() { return /* binding */ setSelectedOrder; },\n/* harmony export */   setSelectedType: function() { return /* binding */ setSelectedType; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_object_spread */ \"./node_modules/@swc/helpers/esm/_object_spread.js\");\n/* harmony import */ var _swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_object_spread_props */ \"./node_modules/@swc/helpers/esm/_object_spread_props.js\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var _thunk_thunk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../thunk/thunk */ \"./src/thunk/thunk.ts\");\n\n\n\n\nvar initialState = {\n    orders: [],\n    products: [],\n    status: \"idle\",\n    error: null,\n    selctedType: \"All\",\n    filteredProducts: [],\n    selectedOrder: null,\n    ordersWithProducts: [],\n    isShowModal: false\n};\nvar productsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"products\",\n    initialState: initialState,\n    reducers: {\n        setSelectedType: function(state, action) {\n            state.selctedType = action.payload;\n            state.filteredProducts = state.selctedType === \"All\" ? state.products : state.products.filter(function(product) {\n                return product.type === state.selctedType;\n            });\n        },\n        setRemoveItemProduct: function(state, action) {\n            state.filteredProducts = state.filteredProducts.filter(function(product) {\n                return product.id !== action.payload;\n            });\n        },\n        setRemoveItemOrder: function(state, action) {\n            state.orders = state.orders.filter(function(order) {\n                return order.id !== action.payload;\n            });\n        },\n        setSelectedOrder: function(state, action) {\n            state.selectedOrder = action.payload;\n        },\n        setOrdersWithProducts: function(state) {\n            var updatedOrdersWithProducts = state.orders.map(function(order) {\n                return (0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_2__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_3__._)({}, order), {\n                    products: state.products.filter(function(product) {\n                        return product.order === order.id;\n                    })\n                });\n            });\n            state.ordersWithProducts = updatedOrdersWithProducts;\n        },\n        removeProductFromOrder: function(state, action) {\n            var _action_payload = action.payload, orderId = _action_payload.orderId, productId = _action_payload.productId;\n            state.ordersWithProducts = state.ordersWithProducts.map(function(order) {\n                return order.id === orderId ? (0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_2__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_3__._)({}, order), {\n                    products: order.products.filter(function(product) {\n                        return product.id !== productId;\n                    })\n                }) : order;\n            });\n        },\n        setIsShowModal: function(state, action) {\n            s;\n        }\n    },\n    extraReducers: function(builder) {\n        builder.addCase(_thunk_thunk__WEBPACK_IMPORTED_MODULE_0__.fetchProducts.pending, function(state) {\n            state.status = \"loading\";\n        });\n        builder.addCase(_thunk_thunk__WEBPACK_IMPORTED_MODULE_0__.fetchProducts.fulfilled, function(state, action) {\n            state.status = \"success\";\n            state.products = action.payload || [];\n            state.filteredProducts = state.products;\n        });\n        builder.addCase(_thunk_thunk__WEBPACK_IMPORTED_MODULE_0__.fetchProducts.rejected, function(state, action) {\n            var _action_payload;\n            state.status = \"failed\";\n            state.error = ((_action_payload = action.payload) === null || _action_payload === void 0 ? void 0 : _action_payload.message) || \"Failed to fetch\";\n        });\n        builder.addCase(_thunk_thunk__WEBPACK_IMPORTED_MODULE_0__.fetchOrders.pending, function(state) {\n            state.status = \"loading\";\n        });\n        builder.addCase(_thunk_thunk__WEBPACK_IMPORTED_MODULE_0__.fetchOrders.fulfilled, function(state, action) {\n            state.status = \"success\";\n            state.orders = action.payload || [];\n        });\n        builder.addCase(_thunk_thunk__WEBPACK_IMPORTED_MODULE_0__.fetchOrders.rejected, function(state, action) {\n            var _action_payload;\n            state.status = \"failed\";\n            state.error = ((_action_payload = action.payload) === null || _action_payload === void 0 ? void 0 : _action_payload.message) || \"Failed to fetch\";\n        });\n    }\n});\nvar _productsSlice_actions = productsSlice.actions;\nvar setSelectedType = _productsSlice_actions.setSelectedType, setRemoveItemProduct = _productsSlice_actions.setRemoveItemProduct, setRemoveItemOrder = _productsSlice_actions.setRemoveItemOrder, setSelectedOrder = _productsSlice_actions.setSelectedOrder, setOrdersWithProducts = _productsSlice_actions.setOrdersWithProducts, removeProductFromOrder = _productsSlice_actions.removeProductFromOrder;\n/* harmony default export */ __webpack_exports__[\"default\"] = (productsSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBLGdCQUFnQndCLE9BQU8sS0FBSTtRQUMzQztRQUNBTCxRQUFRQyxPQUFPLENBQUNyQyxxREFBV0EsQ0FBQ3NDLE9BQU8sRUFBRSxTQUFDdEI7WUFDcENBLE1BQU1YLE1BQU0sR0FBRztRQUNqQjtRQUNBK0IsUUFBUUMsT0FBTyxDQUFDckMscURBQVdBLENBQUN1QyxTQUFTLEVBQUUsU0FBQ3ZCLE9BQU9DO1lBQzdDRCxNQUFNWCxNQUFNLEdBQUc7WUFDZlcsTUFBTWIsTUFBTSxHQUFHYyxPQUFPQyxPQUFPLElBQUksRUFBRTtRQUNyQztRQUNBa0IsUUFBUUMsT0FBTyxDQUFDckMscURBQVdBLENBQUN3QyxRQUFRLEVBQUUsU0FBQ3hCLE9BQU9DO2dCQUU5QkE7WUFEZEQsTUFBTVgsTUFBTSxHQUFHO1lBQ2ZXLE1BQU1WLEtBQUssR0FBR1csRUFBQUEsa0JBQUFBLE9BQU9DLE9BQU8sY0FBZEQsc0NBQUFBLGdCQUFnQndCLE9BQU8sS0FBSTtRQUMzQztJQUNGO0FBQ0Y7SUFRSTdCLHlCQUFBQSxjQUFjOEIsT0FBTztBQVBsQixJQUNMM0Isa0JBTUVILHVCQU5GRyxpQkFDQU8sdUJBS0VWLHVCQUxGVSxzQkFDQUUscUJBSUVaLHVCQUpGWSxvQkFDQUUsbUJBR0VkLHVCQUhGYyxrQkFDQUMsd0JBRUVmLHVCQUZGZSx1QkFDQUcseUJBQ0VsQix1QkFERmtCLHVCQUN3QjtBQUMxQiwrREFBZWxCLGNBQWMrQixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHVjZXIvcHJvZHVjdHNTbGljZS50cz8wZTdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHsgSU9yZGVycywgSVByb2R1Y3RzLCBTZWxlY3RUeXBlIH0gZnJvbSBcIi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgZmV0Y2hPcmRlcnMsIGZldGNoUHJvZHVjdHMgfSBmcm9tIFwiLi4vdGh1bmsvdGh1bmtcIjtcclxuXHJcbmludGVyZmFjZSBQcm9kdWN0c1N0YXRlIHtcclxuICBvcmRlcnM6IElPcmRlcnNbXTtcclxuICBwcm9kdWN0czogSVByb2R1Y3RzW107XHJcbiAgc3RhdHVzOiBcImlkbGVcIiB8IFwibG9hZGluZ1wiIHwgXCJmYWlsZWRcIiB8IFwic3VjY2Vzc1wiO1xyXG4gIGVycm9yOiBzdHJpbmcgfCBudWxsO1xyXG4gIHNlbGN0ZWRUeXBlOiBTZWxlY3RUeXBlO1xyXG4gIGZpbHRlcmVkUHJvZHVjdHM6IElQcm9kdWN0c1tdO1xyXG4gIHNlbGVjdGVkT3JkZXI6IElPcmRlcnMgfCBudWxsO1xyXG4gIG9yZGVyc1dpdGhQcm9kdWN0czogSU9yZGVyc1tdO1xyXG4gIGlzU2hvd01vZGFsOiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFByb2R1Y3RzU3RhdGUgPSB7XHJcbiAgb3JkZXJzOiBbXSxcclxuICBwcm9kdWN0czogW10sXHJcbiAgc3RhdHVzOiBcImlkbGVcIixcclxuICBlcnJvcjogbnVsbCxcclxuICBzZWxjdGVkVHlwZTogXCJBbGxcIixcclxuICBmaWx0ZXJlZFByb2R1Y3RzOiBbXSxcclxuICBzZWxlY3RlZE9yZGVyOiBudWxsLFxyXG4gIG9yZGVyc1dpdGhQcm9kdWN0czogW10sXHJcbiAgaXNTaG93TW9kYWw6IGZhbHNlLFxyXG59O1xyXG5cclxuY29uc3QgcHJvZHVjdHNTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiBcInByb2R1Y3RzXCIsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBzZXRTZWxlY3RlZFR5cGU6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZz4pID0+IHtcclxuICAgICAgc3RhdGUuc2VsY3RlZFR5cGUgPSBhY3Rpb24ucGF5bG9hZCBhcyBTZWxlY3RUeXBlO1xyXG4gICAgICBzdGF0ZS5maWx0ZXJlZFByb2R1Y3RzID1cclxuICAgICAgICBzdGF0ZS5zZWxjdGVkVHlwZSA9PT0gXCJBbGxcIlxyXG4gICAgICAgICAgPyBzdGF0ZS5wcm9kdWN0c1xyXG4gICAgICAgICAgOiBzdGF0ZS5wcm9kdWN0cy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgKHByb2R1Y3QpID0+IHByb2R1Y3QudHlwZSA9PT0gc3RhdGUuc2VsY3RlZFR5cGVcclxuICAgICAgICAgICAgKTtcclxuICAgIH0sXHJcbiAgICBzZXRSZW1vdmVJdGVtUHJvZHVjdDogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248bnVtYmVyPikgPT4ge1xyXG4gICAgICBzdGF0ZS5maWx0ZXJlZFByb2R1Y3RzID0gc3RhdGUuZmlsdGVyZWRQcm9kdWN0cy5maWx0ZXIoXHJcbiAgICAgICAgKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgIT09IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG4gICAgc2V0UmVtb3ZlSXRlbU9yZGVyOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxudW1iZXI+KSA9PiB7XHJcbiAgICAgIHN0YXRlLm9yZGVycyA9IHN0YXRlLm9yZGVycy5maWx0ZXIoXHJcbiAgICAgICAgKG9yZGVyKSA9PiBvcmRlci5pZCAhPT0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgKTtcclxuICAgIH0sXHJcbiAgICBzZXRTZWxlY3RlZE9yZGVyOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxJT3JkZXJzIHwgbnVsbD4pID0+IHtcclxuICAgICAgc3RhdGUuc2VsZWN0ZWRPcmRlciA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfSxcclxuICAgIHNldE9yZGVyc1dpdGhQcm9kdWN0czogKHN0YXRlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHVwZGF0ZWRPcmRlcnNXaXRoUHJvZHVjdHMgPSBzdGF0ZS5vcmRlcnMubWFwKChvcmRlcjogSU9yZGVycykgPT4gKHtcclxuICAgICAgICAuLi5vcmRlcixcclxuICAgICAgICBwcm9kdWN0czogc3RhdGUucHJvZHVjdHMuZmlsdGVyKFxyXG4gICAgICAgICAgKHByb2R1Y3Q6IElQcm9kdWN0cykgPT4gcHJvZHVjdC5vcmRlciA9PT0gb3JkZXIuaWRcclxuICAgICAgICApLFxyXG4gICAgICB9KSk7XHJcbiAgICAgIHN0YXRlLm9yZGVyc1dpdGhQcm9kdWN0cyA9IHVwZGF0ZWRPcmRlcnNXaXRoUHJvZHVjdHM7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlUHJvZHVjdEZyb21PcmRlcihcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7IG9yZGVySWQ6IG51bWJlcjsgcHJvZHVjdElkOiBudW1iZXIgfT5cclxuICAgICkge1xyXG4gICAgICBjb25zdCB7IG9yZGVySWQsIHByb2R1Y3RJZCB9ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgIHN0YXRlLm9yZGVyc1dpdGhQcm9kdWN0cyA9IHN0YXRlLm9yZGVyc1dpdGhQcm9kdWN0cy5tYXAoKG9yZGVyKSA9PlxyXG4gICAgICAgIG9yZGVyLmlkID09PSBvcmRlcklkXHJcbiAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgICAuLi5vcmRlcixcclxuICAgICAgICAgICAgICBwcm9kdWN0czogb3JkZXIucHJvZHVjdHMuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgIT09IHByb2R1Y3RJZFxyXG4gICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDogb3JkZXJcclxuICAgICAgKTtcclxuICAgIH0sXHJcbiAgICBzZXRJc1Nob3dNb2RhbDogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248Ym9vbGVhbj4pID0+IHtcclxuICAgICAgc1xyXG4gICAgfSxcclxuICB9LFxyXG4gIGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PiB7XHJcbiAgICBidWlsZGVyLmFkZENhc2UoZmV0Y2hQcm9kdWN0cy5wZW5kaW5nLCAoc3RhdGUpID0+IHtcclxuICAgICAgc3RhdGUuc3RhdHVzID0gXCJsb2FkaW5nXCI7XHJcbiAgICB9KTtcclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShmZXRjaFByb2R1Y3RzLmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUuc3RhdHVzID0gXCJzdWNjZXNzXCI7XHJcbiAgICAgIHN0YXRlLnByb2R1Y3RzID0gYWN0aW9uLnBheWxvYWQgfHwgW107XHJcbiAgICAgIHN0YXRlLmZpbHRlcmVkUHJvZHVjdHMgPSBzdGF0ZS5wcm9kdWN0cztcclxuICAgIH0pO1xyXG4gICAgYnVpbGRlci5hZGRDYXNlKGZldGNoUHJvZHVjdHMucmVqZWN0ZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLnN0YXR1cyA9IFwiZmFpbGVkXCI7XHJcbiAgICAgIHN0YXRlLmVycm9yID0gYWN0aW9uLnBheWxvYWQ/Lm1lc3NhZ2UgfHwgXCJGYWlsZWQgdG8gZmV0Y2hcIjtcclxuICAgIH0pO1xyXG4gICAgYnVpbGRlci5hZGRDYXNlKGZldGNoT3JkZXJzLnBlbmRpbmcsIChzdGF0ZSkgPT4ge1xyXG4gICAgICBzdGF0ZS5zdGF0dXMgPSBcImxvYWRpbmdcIjtcclxuICAgIH0pO1xyXG4gICAgYnVpbGRlci5hZGRDYXNlKGZldGNoT3JkZXJzLmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUuc3RhdHVzID0gXCJzdWNjZXNzXCI7XHJcbiAgICAgIHN0YXRlLm9yZGVycyA9IGFjdGlvbi5wYXlsb2FkIHx8IFtdO1xyXG4gICAgfSk7XHJcbiAgICBidWlsZGVyLmFkZENhc2UoZmV0Y2hPcmRlcnMucmVqZWN0ZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLnN0YXR1cyA9IFwiZmFpbGVkXCI7XHJcbiAgICAgIHN0YXRlLmVycm9yID0gYWN0aW9uLnBheWxvYWQ/Lm1lc3NhZ2UgfHwgXCJGYWlsZWQgdG8gZmV0Y2hcIjtcclxuICAgIH0pO1xyXG4gIH0sXHJcbn0pO1xyXG5leHBvcnQgY29uc3Qge1xyXG4gIHNldFNlbGVjdGVkVHlwZSxcclxuICBzZXRSZW1vdmVJdGVtUHJvZHVjdCxcclxuICBzZXRSZW1vdmVJdGVtT3JkZXIsXHJcbiAgc2V0U2VsZWN0ZWRPcmRlcixcclxuICBzZXRPcmRlcnNXaXRoUHJvZHVjdHMsXHJcbiAgcmVtb3ZlUHJvZHVjdEZyb21PcmRlcixcclxufSA9IHByb2R1Y3RzU2xpY2UuYWN0aW9ucztcclxuZXhwb3J0IGRlZmF1bHQgcHJvZHVjdHNTbGljZS5yZWR1Y2VyO1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJmZXRjaE9yZGVycyIsImZldGNoUHJvZHVjdHMiLCJpbml0aWFsU3RhdGUiLCJvcmRlcnMiLCJwcm9kdWN0cyIsInN0YXR1cyIsImVycm9yIiwic2VsY3RlZFR5cGUiLCJmaWx0ZXJlZFByb2R1Y3RzIiwic2VsZWN0ZWRPcmRlciIsIm9yZGVyc1dpdGhQcm9kdWN0cyIsImlzU2hvd01vZGFsIiwicHJvZHVjdHNTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsInNldFNlbGVjdGVkVHlwZSIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsImZpbHRlciIsInByb2R1Y3QiLCJ0eXBlIiwic2V0UmVtb3ZlSXRlbVByb2R1Y3QiLCJpZCIsInNldFJlbW92ZUl0ZW1PcmRlciIsIm9yZGVyIiwic2V0U2VsZWN0ZWRPcmRlciIsInNldE9yZGVyc1dpdGhQcm9kdWN0cyIsInVwZGF0ZWRPcmRlcnNXaXRoUHJvZHVjdHMiLCJtYXAiLCJyZW1vdmVQcm9kdWN0RnJvbU9yZGVyIiwib3JkZXJJZCIsInByb2R1Y3RJZCIsInNldElzU2hvd01vZGFsIiwicyIsImV4dHJhUmVkdWNlcnMiLCJidWlsZGVyIiwiYWRkQ2FzZSIsInBlbmRpbmciLCJmdWxmaWxsZWQiLCJyZWplY3RlZCIsIm1lc3NhZ2UiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/reducer/productsSlice.ts\n"));

/***/ })

});