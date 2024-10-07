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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   removeProductFromOrder: function() { return /* binding */ removeProductFromOrder; },\n/* harmony export */   setOrdersWithProducts: function() { return /* binding */ setOrdersWithProducts; },\n/* harmony export */   setRemoveItemOrder: function() { return /* binding */ setRemoveItemOrder; },\n/* harmony export */   setRemoveItemProduct: function() { return /* binding */ setRemoveItemProduct; },\n/* harmony export */   setSelectedOrder: function() { return /* binding */ setSelectedOrder; },\n/* harmony export */   setSelectedType: function() { return /* binding */ setSelectedType; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_object_spread */ \"./node_modules/@swc/helpers/esm/_object_spread.js\");\n/* harmony import */ var _swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_object_spread_props */ \"./node_modules/@swc/helpers/esm/_object_spread_props.js\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var _thunk_thunk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../thunk/thunk */ \"./src/thunk/thunk.ts\");\n\n\n\n\nvar initialState = {\n    orders: [],\n    products: [],\n    status: \"idle\",\n    error: null,\n    selctedType: \"All\",\n    filteredProducts: [],\n    selectedOrder: null,\n    ordersWithProducts: []\n};\nvar productsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"products\",\n    initialState: initialState,\n    reducers: {\n        setSelectedType: function(state, action) {\n            state.selctedType = action.payload;\n            state.filteredProducts = state.selctedType === \"All\" ? state.products : state.products.filter(function(product) {\n                return product.type === state.selctedType;\n            });\n        },\n        setRemoveItemProduct: function(state, action) {\n            state.filteredProducts = state.filteredProducts.filter(function(product) {\n                return product.id !== action.payload;\n            });\n        },\n        setRemoveItemOrder: function(state, action) {\n            state.orders = state.orders.filter(function(order) {\n                return order.id !== action.payload;\n            });\n        },\n        setSelectedOrder: function(state, action) {\n            state.selectedOrder = action.payload;\n        },\n        setOrdersWithProducts: function(state) {\n            var updatedOrdersWithProducts = state.orders.map(function(order) {\n                return (0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_2__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_3__._)({}, order), {\n                    products: state.products.filter(function(product) {\n                        return product.order === order.id;\n                    })\n                });\n            });\n            state.ordersWithProducts = updatedOrdersWithProducts;\n        },\n        removeProductFromOrder: function(state, action) {\n            var _action_payload = action.payload, orderId = _action_payload.orderId, productId = _action_payload.productId;\n            var order = state.orders.find(function(order) {\n                return order.id === orderId;\n            });\n            if (order) {\n                order.products = (order.products || []).filter(function(product) {\n                    return product.id !== productId;\n                });\n            }\n        }\n    },\n    extraReducers: function(builder) {\n        builder.addCase(_thunk_thunk__WEBPACK_IMPORTED_MODULE_0__.fetchProducts.pending, function(state) {\n            state.status = \"loading\";\n        });\n        builder.addCase(_thunk_thunk__WEBPACK_IMPORTED_MODULE_0__.fetchProducts.fulfilled, function(state, action) {\n            state.status = \"success\";\n            state.products = action.payload || [];\n            state.filteredProducts = state.products;\n        });\n        builder.addCase(_thunk_thunk__WEBPACK_IMPORTED_MODULE_0__.fetchProducts.rejected, function(state, action) {\n            var _action_payload;\n            state.status = \"failed\";\n            state.error = ((_action_payload = action.payload) === null || _action_payload === void 0 ? void 0 : _action_payload.message) || \"Failed to fetch\";\n        });\n        builder.addCase(_thunk_thunk__WEBPACK_IMPORTED_MODULE_0__.fetchOrders.pending, function(state) {\n            state.status = \"loading\";\n        });\n        builder.addCase(_thunk_thunk__WEBPACK_IMPORTED_MODULE_0__.fetchOrders.fulfilled, function(state, action) {\n            state.status = \"success\";\n            state.orders = action.payload || [];\n        });\n        builder.addCase(_thunk_thunk__WEBPACK_IMPORTED_MODULE_0__.fetchOrders.rejected, function(state, action) {\n            var _action_payload;\n            state.status = \"failed\";\n            state.error = ((_action_payload = action.payload) === null || _action_payload === void 0 ? void 0 : _action_payload.message) || \"Failed to fetch\";\n        });\n    }\n});\nvar _productsSlice_actions = productsSlice.actions;\nvar setSelectedType = _productsSlice_actions.setSelectedType, setRemoveItemProduct = _productsSlice_actions.setRemoveItemProduct, setRemoveItemOrder = _productsSlice_actions.setRemoveItemOrder, setSelectedOrder = _productsSlice_actions.setSelectedOrder, setOrdersWithProducts = _productsSlice_actions.setOrdersWithProducts, removeProductFromOrder = _productsSlice_actions.removeProductFromOrder;\n/* harmony default export */ __webpack_exports__[\"default\"] = (productsSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQVFDLE9BQU8sQ0FBQ25DLHFEQUFXQSxDQUFDb0MsT0FBTyxFQUFFLFNBQUNyQjtZQUNwQ0EsTUFBTVYsTUFBTSxHQUFHO1FBQ2pCO1FBQ0E2QixRQUFRQyxPQUFPLENBQUNuQyxxREFBV0EsQ0FBQ3FDLFNBQVMsRUFBRSxTQUFDdEIsT0FBT0M7WUFDN0NELE1BQU1WLE1BQU0sR0FBRztZQUNmVSxNQUFNWixNQUFNLEdBQUdhLE9BQU9DLE9BQU8sSUFBSSxFQUFFO1FBQ3JDO1FBQ0FpQixRQUFRQyxPQUFPLENBQUNuQyxxREFBV0EsQ0FBQ3NDLFFBQVEsRUFBRSxTQUFDdkIsT0FBT0M7Z0JBRTlCQTtZQURkRCxNQUFNVixNQUFNLEdBQUc7WUFDZlUsTUFBTVQsS0FBSyxHQUFHVSxFQUFBQSxrQkFBQUEsT0FBT0MsT0FBTyxjQUFkRCxzQ0FBQUEsZ0JBQWdCdUIsT0FBTyxLQUFJO1FBQzNDO0lBQ0Y7QUFDRjtJQVFJNUIseUJBQUFBLGNBQWM2QixPQUFPO0FBUGxCLElBQ0wxQixrQkFNRUgsdUJBTkZHLGlCQUNBTyx1QkFLRVYsdUJBTEZVLHNCQUNBRSxxQkFJRVosdUJBSkZZLG9CQUNBRSxtQkFHRWQsdUJBSEZjLGtCQUNBQyx3QkFFRWYsdUJBRkZlLHVCQUNBRyx5QkFDRWxCLHVCQURGa0IsdUJBQ3dCO0FBQzFCLCtEQUFlbEIsY0FBYzhCLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcmVkdWNlci9wcm9kdWN0c1NsaWNlLnRzPzBlN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgeyBJT3JkZXJzLCBJUHJvZHVjdHMsIFNlbGVjdFR5cGUgfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5pbXBvcnQgeyBmZXRjaE9yZGVycywgZmV0Y2hQcm9kdWN0cyB9IGZyb20gXCIuLi90aHVuay90aHVua1wiO1xyXG5cclxuaW50ZXJmYWNlIFByb2R1Y3RzU3RhdGUge1xyXG4gIG9yZGVyczogSU9yZGVyc1tdO1xyXG4gIHByb2R1Y3RzOiBJUHJvZHVjdHNbXTtcclxuICBzdGF0dXM6IFwiaWRsZVwiIHwgXCJsb2FkaW5nXCIgfCBcImZhaWxlZFwiIHwgXCJzdWNjZXNzXCI7XHJcbiAgZXJyb3I6IHN0cmluZyB8IG51bGw7XHJcbiAgc2VsY3RlZFR5cGU6IFNlbGVjdFR5cGU7XHJcbiAgZmlsdGVyZWRQcm9kdWN0czogSVByb2R1Y3RzW107XHJcbiAgc2VsZWN0ZWRPcmRlcjogSU9yZGVycyB8IG51bGw7XHJcbiAgb3JkZXJzV2l0aFByb2R1Y3RzOiBJT3JkZXJzW107XHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogUHJvZHVjdHNTdGF0ZSA9IHtcclxuICBvcmRlcnM6IFtdLFxyXG4gIHByb2R1Y3RzOiBbXSxcclxuICBzdGF0dXM6IFwiaWRsZVwiLFxyXG4gIGVycm9yOiBudWxsLFxyXG4gIHNlbGN0ZWRUeXBlOiBcIkFsbFwiLFxyXG4gIGZpbHRlcmVkUHJvZHVjdHM6IFtdLFxyXG4gIHNlbGVjdGVkT3JkZXI6IG51bGwsXHJcbiAgb3JkZXJzV2l0aFByb2R1Y3RzOiBbXSxcclxufTtcclxuXHJcbmNvbnN0IHByb2R1Y3RzU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJwcm9kdWN0c1wiLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgc2V0U2VsZWN0ZWRUeXBlOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxzdHJpbmc+KSA9PiB7XHJcbiAgICAgIHN0YXRlLnNlbGN0ZWRUeXBlID0gYWN0aW9uLnBheWxvYWQgYXMgU2VsZWN0VHlwZTtcclxuICAgICAgc3RhdGUuZmlsdGVyZWRQcm9kdWN0cyA9XHJcbiAgICAgICAgc3RhdGUuc2VsY3RlZFR5cGUgPT09IFwiQWxsXCJcclxuICAgICAgICAgID8gc3RhdGUucHJvZHVjdHNcclxuICAgICAgICAgIDogc3RhdGUucHJvZHVjdHMuZmlsdGVyKFxyXG4gICAgICAgICAgICAgIChwcm9kdWN0KSA9PiBwcm9kdWN0LnR5cGUgPT09IHN0YXRlLnNlbGN0ZWRUeXBlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9LFxyXG4gICAgc2V0UmVtb3ZlSXRlbVByb2R1Y3Q6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPG51bWJlcj4pID0+IHtcclxuICAgICAgc3RhdGUuZmlsdGVyZWRQcm9kdWN0cyA9IHN0YXRlLmZpbHRlcmVkUHJvZHVjdHMuZmlsdGVyKFxyXG4gICAgICAgIChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkICE9PSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICApO1xyXG4gICAgfSxcclxuICAgIHNldFJlbW92ZUl0ZW1PcmRlcjogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248bnVtYmVyPikgPT4ge1xyXG4gICAgICBzdGF0ZS5vcmRlcnMgPSBzdGF0ZS5vcmRlcnMuZmlsdGVyKFxyXG4gICAgICAgIChvcmRlcikgPT4gb3JkZXIuaWQgIT09IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG4gICAgc2V0U2VsZWN0ZWRPcmRlcjogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248SU9yZGVycyB8IG51bGw+KSA9PiB7XHJcbiAgICAgIHN0YXRlLnNlbGVjdGVkT3JkZXIgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0sXHJcbiAgICBzZXRPcmRlcnNXaXRoUHJvZHVjdHM6IChzdGF0ZSkgPT4ge1xyXG4gICAgICBjb25zdCB1cGRhdGVkT3JkZXJzV2l0aFByb2R1Y3RzID0gc3RhdGUub3JkZXJzLm1hcCgob3JkZXI6IElPcmRlcnMpID0+ICh7XHJcbiAgICAgICAgLi4ub3JkZXIsXHJcbiAgICAgICAgcHJvZHVjdHM6IHN0YXRlLnByb2R1Y3RzLmZpbHRlcihcclxuICAgICAgICAgIChwcm9kdWN0OiBJUHJvZHVjdHMpID0+IHByb2R1Y3Qub3JkZXIgPT09IG9yZGVyLmlkXHJcbiAgICAgICAgKSxcclxuICAgICAgfSkpO1xyXG4gICAgICBzdGF0ZS5vcmRlcnNXaXRoUHJvZHVjdHMgPSB1cGRhdGVkT3JkZXJzV2l0aFByb2R1Y3RzO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZVByb2R1Y3RGcm9tT3JkZXIoXHJcbiAgICAgIHN0YXRlLFxyXG4gICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248eyBvcmRlcklkOiBudW1iZXI7IHByb2R1Y3RJZDogbnVtYmVyIH0+XHJcbiAgICApIHtcclxuICAgICAgY29uc3QgeyBvcmRlcklkLCBwcm9kdWN0SWQgfSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICBjb25zdCBvcmRlciA9IHN0YXRlLm9yZGVycy5maW5kKChvcmRlcikgPT4gb3JkZXIuaWQgPT09IG9yZGVySWQpO1xyXG4gICAgICBpZiAob3JkZXIpIHtcclxuICAgICAgICBvcmRlci5wcm9kdWN0cyA9IChvcmRlci5wcm9kdWN0cyB8fCBbXSkuZmlsdGVyKFxyXG4gICAgICAgICAgKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgIT09IHByb2R1Y3RJZFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICBcclxuICAgIH0sXHJcbiAgfSxcclxuICBleHRyYVJlZHVjZXJzOiAoYnVpbGRlcikgPT4ge1xyXG4gICAgYnVpbGRlci5hZGRDYXNlKGZldGNoUHJvZHVjdHMucGVuZGluZywgKHN0YXRlKSA9PiB7XHJcbiAgICAgIHN0YXRlLnN0YXR1cyA9IFwibG9hZGluZ1wiO1xyXG4gICAgfSk7XHJcbiAgICBidWlsZGVyLmFkZENhc2UoZmV0Y2hQcm9kdWN0cy5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLnN0YXR1cyA9IFwic3VjY2Vzc1wiO1xyXG4gICAgICBzdGF0ZS5wcm9kdWN0cyA9IGFjdGlvbi5wYXlsb2FkIHx8IFtdO1xyXG4gICAgICBzdGF0ZS5maWx0ZXJlZFByb2R1Y3RzID0gc3RhdGUucHJvZHVjdHM7XHJcbiAgICB9KTtcclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShmZXRjaFByb2R1Y3RzLnJlamVjdGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5zdGF0dXMgPSBcImZhaWxlZFwiO1xyXG4gICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5wYXlsb2FkPy5tZXNzYWdlIHx8IFwiRmFpbGVkIHRvIGZldGNoXCI7XHJcbiAgICB9KTtcclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShmZXRjaE9yZGVycy5wZW5kaW5nLCAoc3RhdGUpID0+IHtcclxuICAgICAgc3RhdGUuc3RhdHVzID0gXCJsb2FkaW5nXCI7XHJcbiAgICB9KTtcclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShmZXRjaE9yZGVycy5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLnN0YXR1cyA9IFwic3VjY2Vzc1wiO1xyXG4gICAgICBzdGF0ZS5vcmRlcnMgPSBhY3Rpb24ucGF5bG9hZCB8fCBbXTtcclxuICAgIH0pO1xyXG4gICAgYnVpbGRlci5hZGRDYXNlKGZldGNoT3JkZXJzLnJlamVjdGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5zdGF0dXMgPSBcImZhaWxlZFwiO1xyXG4gICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5wYXlsb2FkPy5tZXNzYWdlIHx8IFwiRmFpbGVkIHRvIGZldGNoXCI7XHJcbiAgICB9KTtcclxuICB9LFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IHtcclxuICBzZXRTZWxlY3RlZFR5cGUsXHJcbiAgc2V0UmVtb3ZlSXRlbVByb2R1Y3QsXHJcbiAgc2V0UmVtb3ZlSXRlbU9yZGVyLFxyXG4gIHNldFNlbGVjdGVkT3JkZXIsXHJcbiAgc2V0T3JkZXJzV2l0aFByb2R1Y3RzLFxyXG4gIHJlbW92ZVByb2R1Y3RGcm9tT3JkZXIsXHJcbn0gPSBwcm9kdWN0c1NsaWNlLmFjdGlvbnM7XHJcbmV4cG9ydCBkZWZhdWx0IHByb2R1Y3RzU2xpY2UucmVkdWNlcjtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiZmV0Y2hPcmRlcnMiLCJmZXRjaFByb2R1Y3RzIiwiaW5pdGlhbFN0YXRlIiwib3JkZXJzIiwicHJvZHVjdHMiLCJzdGF0dXMiLCJlcnJvciIsInNlbGN0ZWRUeXBlIiwiZmlsdGVyZWRQcm9kdWN0cyIsInNlbGVjdGVkT3JkZXIiLCJvcmRlcnNXaXRoUHJvZHVjdHMiLCJwcm9kdWN0c1NsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwic2V0U2VsZWN0ZWRUeXBlIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiZmlsdGVyIiwicHJvZHVjdCIsInR5cGUiLCJzZXRSZW1vdmVJdGVtUHJvZHVjdCIsImlkIiwic2V0UmVtb3ZlSXRlbU9yZGVyIiwib3JkZXIiLCJzZXRTZWxlY3RlZE9yZGVyIiwic2V0T3JkZXJzV2l0aFByb2R1Y3RzIiwidXBkYXRlZE9yZGVyc1dpdGhQcm9kdWN0cyIsIm1hcCIsInJlbW92ZVByb2R1Y3RGcm9tT3JkZXIiLCJvcmRlcklkIiwicHJvZHVjdElkIiwiZmluZCIsImV4dHJhUmVkdWNlcnMiLCJidWlsZGVyIiwiYWRkQ2FzZSIsInBlbmRpbmciLCJmdWxmaWxsZWQiLCJyZWplY3RlZCIsIm1lc3NhZ2UiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/reducer/productsSlice.ts\n"));

/***/ })

});