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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   removeProductFromOrder: function() { return /* binding */ removeProductFromOrder; },\n/* harmony export */   setIsShowModal: function() { return /* binding */ setIsShowModal; },\n/* harmony export */   setItemToDelete: function() { return /* binding */ setItemToDelete; },\n/* harmony export */   setOrdersWithProducts: function() { return /* binding */ setOrdersWithProducts; },\n/* harmony export */   setRemoveItemOrder: function() { return /* binding */ setRemoveItemOrder; },\n/* harmony export */   setRemoveItemProduct: function() { return /* binding */ setRemoveItemProduct; },\n/* harmony export */   setSelectedOrder: function() { return /* binding */ setSelectedOrder; },\n/* harmony export */   setSelectedType: function() { return /* binding */ setSelectedType; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_object_spread */ \"./node_modules/@swc/helpers/esm/_object_spread.js\");\n/* harmony import */ var _swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_object_spread_props */ \"./node_modules/@swc/helpers/esm/_object_spread_props.js\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var _thunk_thunk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../thunk/thunk */ \"./src/thunk/thunk.ts\");\n\n\n\n\nvar initialState = {\n    orders: [],\n    products: [],\n    status: \"idle\",\n    error: null,\n    selctedType: \"All\",\n    filteredProducts: [],\n    selectedOrder: null,\n    ordersWithProducts: [],\n    isShowModal: false,\n    itemToDelete: null,\n    currentDeleteItem: null\n};\nvar productsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"products\",\n    initialState: initialState,\n    reducers: {\n        setSelectedType: function(state, action) {\n            state.selctedType = action.payload;\n            state.filteredProducts = state.selctedType === \"All\" ? state.products : state.products.filter(function(product) {\n                return product.type === state.selctedType;\n            });\n        },\n        setRemoveItemProduct: function(state, action) {\n            state.filteredProducts = state.filteredProducts.filter(function(product) {\n                return product.id !== action.payload;\n            });\n        },\n        setRemoveItemOrder: function(state, action) {\n            state.orders = state.orders.filter(function(order) {\n                return order.id !== action.payload;\n            });\n        },\n        setSelectedOrder: function(state, action) {\n            state.selectedOrder = action.payload;\n        },\n        setOrdersWithProducts: function(state) {\n            var updatedOrdersWithProducts = state.orders.map(function(order) {\n                return (0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_2__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_3__._)({}, order), {\n                    products: state.products.filter(function(product) {\n                        return product.order === order.id;\n                    })\n                });\n            });\n            state.ordersWithProducts = updatedOrdersWithProducts;\n        },\n        removeProductFromOrder: function(state, action) {\n            var _action_payload = action.payload, orderId = _action_payload.orderId, productId = _action_payload.productId;\n            state.ordersWithProducts = state.ordersWithProducts.map(function(order) {\n                return order.id === orderId ? (0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_2__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_3__._)({}, order), {\n                    products: order.products.filter(function(product) {\n                        return product.id !== productId;\n                    })\n                }) : order;\n            });\n        },\n        setIsShowModal: function(state, action) {\n            state.isShowModal = action.payload;\n        },\n        setItemToDelete: function(state, action) {\n            state.itemToDelete = action.payload;\n        }\n    },\n    extraReducers: function(builder) {\n        builder.addCase(_thunk_thunk__WEBPACK_IMPORTED_MODULE_0__.fetchProducts.pending, function(state) {\n            state.status = \"loading\";\n        });\n        builder.addCase(_thunk_thunk__WEBPACK_IMPORTED_MODULE_0__.fetchProducts.fulfilled, function(state, action) {\n            state.status = \"success\";\n            state.products = action.payload || [];\n            state.filteredProducts = state.products;\n        });\n        builder.addCase(_thunk_thunk__WEBPACK_IMPORTED_MODULE_0__.fetchProducts.rejected, function(state, action) {\n            var _action_payload;\n            state.status = \"failed\";\n            state.error = ((_action_payload = action.payload) === null || _action_payload === void 0 ? void 0 : _action_payload.message) || \"Failed to fetch\";\n        });\n        builder.addCase(_thunk_thunk__WEBPACK_IMPORTED_MODULE_0__.fetchOrders.pending, function(state) {\n            state.status = \"loading\";\n        });\n        builder.addCase(_thunk_thunk__WEBPACK_IMPORTED_MODULE_0__.fetchOrders.fulfilled, function(state, action) {\n            state.status = \"success\";\n            state.orders = action.payload || [];\n        });\n        builder.addCase(_thunk_thunk__WEBPACK_IMPORTED_MODULE_0__.fetchOrders.rejected, function(state, action) {\n            var _action_payload;\n            state.status = \"failed\";\n            state.error = ((_action_payload = action.payload) === null || _action_payload === void 0 ? void 0 : _action_payload.message) || \"Failed to fetch\";\n        });\n    }\n});\nvar _productsSlice_actions = productsSlice.actions;\nvar setSelectedType = _productsSlice_actions.setSelectedType, setRemoveItemProduct = _productsSlice_actions.setRemoveItemProduct, setRemoveItemOrder = _productsSlice_actions.setRemoveItemOrder, setSelectedOrder = _productsSlice_actions.setSelectedOrder, setOrdersWithProducts = _productsSlice_actions.setOrdersWithProducts, removeProductFromOrder = _productsSlice_actions.removeProductFromOrder, setIsShowModal = _productsSlice_actions.setIsShowModal, setItemToDelete = _productsSlice_actions.setItemToDelete;\n/* harmony default export */ __webpack_exports__[\"default\"] = (productsSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDdEMsdURBQWFBLENBQUN5QyxRQUFRLEVBQUUsU0FBQ3hCLE9BQU9DO2dCQUVoQ0E7WUFEZEQsTUFBTWIsTUFBTSxHQUFHO1lBQ2ZhLE1BQU1aLEtBQUssR0FBR2EsRUFBQUEsa0JBQUFBLE9BQU9DLE9BQU8sY0FBZEQsc0NBQUFBLGdCQUFnQndCLE9BQU8sS0FBSTtRQUMzQztRQUNBTCxRQUFRQyxPQUFPLENBQUN2QyxxREFBV0EsQ0FBQ3dDLE9BQU8sRUFBRSxTQUFDdEI7WUFDcENBLE1BQU1iLE1BQU0sR0FBRztRQUNqQjtRQUNBaUMsUUFBUUMsT0FBTyxDQUFDdkMscURBQVdBLENBQUN5QyxTQUFTLEVBQUUsU0FBQ3ZCLE9BQU9DO1lBQzdDRCxNQUFNYixNQUFNLEdBQUc7WUFDZmEsTUFBTWYsTUFBTSxHQUFHZ0IsT0FBT0MsT0FBTyxJQUFJLEVBQUU7UUFDckM7UUFDQWtCLFFBQVFDLE9BQU8sQ0FBQ3ZDLHFEQUFXQSxDQUFDMEMsUUFBUSxFQUFFLFNBQUN4QixPQUFPQztnQkFFOUJBO1lBRGRELE1BQU1iLE1BQU0sR0FBRztZQUNmYSxNQUFNWixLQUFLLEdBQUdhLEVBQUFBLGtCQUFBQSxPQUFPQyxPQUFPLGNBQWRELHNDQUFBQSxnQkFBZ0J3QixPQUFPLEtBQUk7UUFDM0M7SUFDRjtBQUNGO0lBVUk3Qix5QkFBQUEsY0FBYzhCLE9BQU87QUFUbEIsSUFDTDNCLGtCQVFFSCx1QkFSRkcsaUJBQ0FPLHVCQU9FVix1QkFQRlUsc0JBQ0FFLHFCQU1FWix1QkFORlksb0JBQ0FFLG1CQUtFZCx1QkFMRmMsa0JBQ0FDLHdCQUlFZix1QkFKRmUsdUJBQ0FHLHlCQUdFbEIsdUJBSEZrQix3QkFDQUcsaUJBRUVyQix1QkFGRnFCLGdCQUNBQyxrQkFDRXRCLHVCQURGc0IsZ0JBQ3dCO0FBQzFCLCtEQUFldEIsY0FBYytCLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcmVkdWNlci9wcm9kdWN0c1NsaWNlLnRzPzBlN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgeyBJT3JkZXJzLCBJUHJvZHVjdHMsIFNlbGVjdFR5cGUgfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5pbXBvcnQgeyBmZXRjaE9yZGVycywgZmV0Y2hQcm9kdWN0cyB9IGZyb20gXCIuLi90aHVuay90aHVua1wiO1xyXG5cclxuaW50ZXJmYWNlIFByb2R1Y3RzU3RhdGUge1xyXG4gIG9yZGVyczogSU9yZGVyc1tdO1xyXG4gIHByb2R1Y3RzOiBJUHJvZHVjdHNbXTtcclxuICBzdGF0dXM6IFwiaWRsZVwiIHwgXCJsb2FkaW5nXCIgfCBcImZhaWxlZFwiIHwgXCJzdWNjZXNzXCI7XHJcbiAgZXJyb3I6IHN0cmluZyB8IG51bGw7XHJcbiAgc2VsY3RlZFR5cGU6IFNlbGVjdFR5cGU7XHJcbiAgZmlsdGVyZWRQcm9kdWN0czogSVByb2R1Y3RzW107XHJcbiAgc2VsZWN0ZWRPcmRlcjogSU9yZGVycyB8IG51bGw7XHJcbiAgb3JkZXJzV2l0aFByb2R1Y3RzOiBJT3JkZXJzW107XHJcbiAgaXNTaG93TW9kYWw6IGJvb2xlYW47XHJcbiAgaXRlbVRvRGVsZXRlOiB7IGlkOiBudW1iZXI7IHR5cGU6IHN0cmluZyB9IHwgbnVsbDtcclxuICBjdXJyZW50RGVsZXRlSXRlbTogSVByb2R1Y3RzIHwgSU9yZGVycyB8IG51bGw7XHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogUHJvZHVjdHNTdGF0ZSA9IHtcclxuICBvcmRlcnM6IFtdLFxyXG4gIHByb2R1Y3RzOiBbXSxcclxuICBzdGF0dXM6IFwiaWRsZVwiLFxyXG4gIGVycm9yOiBudWxsLFxyXG4gIHNlbGN0ZWRUeXBlOiBcIkFsbFwiLFxyXG4gIGZpbHRlcmVkUHJvZHVjdHM6IFtdLFxyXG4gIHNlbGVjdGVkT3JkZXI6IG51bGwsXHJcbiAgb3JkZXJzV2l0aFByb2R1Y3RzOiBbXSxcclxuICBpc1Nob3dNb2RhbDogZmFsc2UsXHJcbiAgaXRlbVRvRGVsZXRlOiBudWxsLFxyXG4gIGN1cnJlbnREZWxldGVJdGVtOiBudWxsLFxyXG59O1xyXG5cclxuY29uc3QgcHJvZHVjdHNTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiBcInByb2R1Y3RzXCIsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBzZXRTZWxlY3RlZFR5cGU6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZz4pID0+IHtcclxuICAgICAgc3RhdGUuc2VsY3RlZFR5cGUgPSBhY3Rpb24ucGF5bG9hZCBhcyBTZWxlY3RUeXBlO1xyXG4gICAgICBzdGF0ZS5maWx0ZXJlZFByb2R1Y3RzID1cclxuICAgICAgICBzdGF0ZS5zZWxjdGVkVHlwZSA9PT0gXCJBbGxcIlxyXG4gICAgICAgICAgPyBzdGF0ZS5wcm9kdWN0c1xyXG4gICAgICAgICAgOiBzdGF0ZS5wcm9kdWN0cy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgKHByb2R1Y3QpID0+IHByb2R1Y3QudHlwZSA9PT0gc3RhdGUuc2VsY3RlZFR5cGVcclxuICAgICAgICAgICAgKTtcclxuICAgIH0sXHJcbiAgICBzZXRSZW1vdmVJdGVtUHJvZHVjdDogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248bnVtYmVyPikgPT4ge1xyXG4gICAgICBzdGF0ZS5maWx0ZXJlZFByb2R1Y3RzID0gc3RhdGUuZmlsdGVyZWRQcm9kdWN0cy5maWx0ZXIoXHJcbiAgICAgICAgKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgIT09IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG4gICAgc2V0UmVtb3ZlSXRlbU9yZGVyOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxudW1iZXI+KSA9PiB7XHJcbiAgICAgIHN0YXRlLm9yZGVycyA9IHN0YXRlLm9yZGVycy5maWx0ZXIoXHJcbiAgICAgICAgKG9yZGVyKSA9PiBvcmRlci5pZCAhPT0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgKTtcclxuICAgIH0sXHJcbiAgICBzZXRTZWxlY3RlZE9yZGVyOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxJT3JkZXJzIHwgbnVsbD4pID0+IHtcclxuICAgICAgc3RhdGUuc2VsZWN0ZWRPcmRlciA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfSxcclxuICAgIHNldE9yZGVyc1dpdGhQcm9kdWN0czogKHN0YXRlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHVwZGF0ZWRPcmRlcnNXaXRoUHJvZHVjdHMgPSBzdGF0ZS5vcmRlcnMubWFwKChvcmRlcjogSU9yZGVycykgPT4gKHtcclxuICAgICAgICAuLi5vcmRlcixcclxuICAgICAgICBwcm9kdWN0czogc3RhdGUucHJvZHVjdHMuZmlsdGVyKFxyXG4gICAgICAgICAgKHByb2R1Y3Q6IElQcm9kdWN0cykgPT4gcHJvZHVjdC5vcmRlciA9PT0gb3JkZXIuaWRcclxuICAgICAgICApLFxyXG4gICAgICB9KSk7XHJcbiAgICAgIHN0YXRlLm9yZGVyc1dpdGhQcm9kdWN0cyA9IHVwZGF0ZWRPcmRlcnNXaXRoUHJvZHVjdHM7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlUHJvZHVjdEZyb21PcmRlcihcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7IG9yZGVySWQ6IG51bWJlcjsgcHJvZHVjdElkOiBudW1iZXIgfT5cclxuICAgICkge1xyXG4gICAgICBjb25zdCB7IG9yZGVySWQsIHByb2R1Y3RJZCB9ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgIHN0YXRlLm9yZGVyc1dpdGhQcm9kdWN0cyA9IHN0YXRlLm9yZGVyc1dpdGhQcm9kdWN0cy5tYXAoKG9yZGVyKSA9PlxyXG4gICAgICAgIG9yZGVyLmlkID09PSBvcmRlcklkXHJcbiAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgICAuLi5vcmRlcixcclxuICAgICAgICAgICAgICBwcm9kdWN0czogb3JkZXIucHJvZHVjdHMuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgIT09IHByb2R1Y3RJZFxyXG4gICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDogb3JkZXJcclxuICAgICAgKTtcclxuICAgIH0sXHJcbiAgICBzZXRJc1Nob3dNb2RhbDogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248Ym9vbGVhbj4pID0+IHtcclxuICAgICAgc3RhdGUuaXNTaG93TW9kYWwgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0sXHJcbiAgICBzZXRJdGVtVG9EZWxldGU6IChcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjwgICBJT3JkZXJzW10sXHJcbiAgICAgICAgSVByb2R1Y3RzW10sXHJcbiAgICAgICAgeyBpZDogbnVtYmVyOyB0eXBlOiBzdHJpbmcgfSB8IG51bGwsXHJcbiAgICAgXHJcbiAgICAgID5cclxuICAgICkgPT4ge1xyXG4gICAgICBzdGF0ZS5pdGVtVG9EZWxldGUgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0sXHJcbiAgfSxcclxuICBleHRyYVJlZHVjZXJzOiAoYnVpbGRlcikgPT4ge1xyXG4gICAgYnVpbGRlci5hZGRDYXNlKGZldGNoUHJvZHVjdHMucGVuZGluZywgKHN0YXRlKSA9PiB7XHJcbiAgICAgIHN0YXRlLnN0YXR1cyA9IFwibG9hZGluZ1wiO1xyXG4gICAgfSk7XHJcbiAgICBidWlsZGVyLmFkZENhc2UoZmV0Y2hQcm9kdWN0cy5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLnN0YXR1cyA9IFwic3VjY2Vzc1wiO1xyXG4gICAgICBzdGF0ZS5wcm9kdWN0cyA9IGFjdGlvbi5wYXlsb2FkIHx8IFtdO1xyXG4gICAgICBzdGF0ZS5maWx0ZXJlZFByb2R1Y3RzID0gc3RhdGUucHJvZHVjdHM7XHJcbiAgICB9KTtcclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShmZXRjaFByb2R1Y3RzLnJlamVjdGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5zdGF0dXMgPSBcImZhaWxlZFwiO1xyXG4gICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5wYXlsb2FkPy5tZXNzYWdlIHx8IFwiRmFpbGVkIHRvIGZldGNoXCI7XHJcbiAgICB9KTtcclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShmZXRjaE9yZGVycy5wZW5kaW5nLCAoc3RhdGUpID0+IHtcclxuICAgICAgc3RhdGUuc3RhdHVzID0gXCJsb2FkaW5nXCI7XHJcbiAgICB9KTtcclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShmZXRjaE9yZGVycy5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLnN0YXR1cyA9IFwic3VjY2Vzc1wiO1xyXG4gICAgICBzdGF0ZS5vcmRlcnMgPSBhY3Rpb24ucGF5bG9hZCB8fCBbXTtcclxuICAgIH0pO1xyXG4gICAgYnVpbGRlci5hZGRDYXNlKGZldGNoT3JkZXJzLnJlamVjdGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5zdGF0dXMgPSBcImZhaWxlZFwiO1xyXG4gICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5wYXlsb2FkPy5tZXNzYWdlIHx8IFwiRmFpbGVkIHRvIGZldGNoXCI7XHJcbiAgICB9KTtcclxuICB9LFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IHtcclxuICBzZXRTZWxlY3RlZFR5cGUsXHJcbiAgc2V0UmVtb3ZlSXRlbVByb2R1Y3QsXHJcbiAgc2V0UmVtb3ZlSXRlbU9yZGVyLFxyXG4gIHNldFNlbGVjdGVkT3JkZXIsXHJcbiAgc2V0T3JkZXJzV2l0aFByb2R1Y3RzLFxyXG4gIHJlbW92ZVByb2R1Y3RGcm9tT3JkZXIsXHJcbiAgc2V0SXNTaG93TW9kYWwsXHJcbiAgc2V0SXRlbVRvRGVsZXRlLFxyXG59ID0gcHJvZHVjdHNTbGljZS5hY3Rpb25zO1xyXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0c1NsaWNlLnJlZHVjZXI7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImZldGNoT3JkZXJzIiwiZmV0Y2hQcm9kdWN0cyIsImluaXRpYWxTdGF0ZSIsIm9yZGVycyIsInByb2R1Y3RzIiwic3RhdHVzIiwiZXJyb3IiLCJzZWxjdGVkVHlwZSIsImZpbHRlcmVkUHJvZHVjdHMiLCJzZWxlY3RlZE9yZGVyIiwib3JkZXJzV2l0aFByb2R1Y3RzIiwiaXNTaG93TW9kYWwiLCJpdGVtVG9EZWxldGUiLCJjdXJyZW50RGVsZXRlSXRlbSIsInByb2R1Y3RzU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJzZXRTZWxlY3RlZFR5cGUiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJmaWx0ZXIiLCJwcm9kdWN0IiwidHlwZSIsInNldFJlbW92ZUl0ZW1Qcm9kdWN0IiwiaWQiLCJzZXRSZW1vdmVJdGVtT3JkZXIiLCJvcmRlciIsInNldFNlbGVjdGVkT3JkZXIiLCJzZXRPcmRlcnNXaXRoUHJvZHVjdHMiLCJ1cGRhdGVkT3JkZXJzV2l0aFByb2R1Y3RzIiwibWFwIiwicmVtb3ZlUHJvZHVjdEZyb21PcmRlciIsIm9yZGVySWQiLCJwcm9kdWN0SWQiLCJzZXRJc1Nob3dNb2RhbCIsInNldEl0ZW1Ub0RlbGV0ZSIsImV4dHJhUmVkdWNlcnMiLCJidWlsZGVyIiwiYWRkQ2FzZSIsInBlbmRpbmciLCJmdWxmaWxsZWQiLCJyZWplY3RlZCIsIm1lc3NhZ2UiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/reducer/productsSlice.ts\n"));

/***/ })

});