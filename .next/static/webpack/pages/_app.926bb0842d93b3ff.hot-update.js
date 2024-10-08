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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   removeProductFromOrder: function() { return /* binding */ removeProductFromOrder; },\n/* harmony export */   setIsShowModal: function() { return /* binding */ setIsShowModal; },\n/* harmony export */   setItemToDelete: function() { return /* binding */ setItemToDelete; },\n/* harmony export */   setOrdersWithProducts: function() { return /* binding */ setOrdersWithProducts; },\n/* harmony export */   setRemoveCurrentDeleteItem: function() { return /* binding */ setRemoveCurrentDeleteItem; },\n/* harmony export */   setRemoveItemOrder: function() { return /* binding */ setRemoveItemOrder; },\n/* harmony export */   setRemoveItemProduct: function() { return /* binding */ setRemoveItemProduct; },\n/* harmony export */   setSelectedOrder: function() { return /* binding */ setSelectedOrder; },\n/* harmony export */   setSelectedType: function() { return /* binding */ setSelectedType; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_object_spread */ \"./node_modules/@swc/helpers/esm/_object_spread.js\");\n/* harmony import */ var _swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_object_spread_props */ \"./node_modules/@swc/helpers/esm/_object_spread_props.js\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var _thunk_thunk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../thunk/thunk */ \"./src/thunk/thunk.ts\");\n\n\n\n\nvar initialState = {\n    orders: [],\n    products: [],\n    status: \"idle\",\n    error: null,\n    selctedType: \"All\",\n    filteredProducts: [],\n    selectedOrder: null,\n    ordersWithProducts: [],\n    isShowModal: false,\n    itemToDelete: null,\n    currentDeleteItem: null\n};\nvar productsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"products\",\n    initialState: initialState,\n    reducers: {\n        setSelectedType: function(state, action) {\n            state.selctedType = action.payload;\n            state.filteredProducts = state.selctedType === \"All\" ? state.products : state.products.filter(function(product) {\n                return product.type === state.selctedType;\n            });\n        },\n        setRemoveItemProduct: function(state, action) {\n            state.filteredProducts = state.filteredProducts.filter(function(product) {\n                return product.id !== action.payload;\n            });\n            state.currentDeleteItem = null;\n        },\n        setRemoveItemOrder: function(state, action) {\n            if (action.type === \"order\") {\n                state.orders = state.orders.filter(function(order) {\n                    return order.id !== action.payload;\n                });\n            }\n            state.currentDeleteItem = null;\n        },\n        setSelectedOrder: function(state, action) {\n            state.selectedOrder = action.payload;\n        },\n        setOrdersWithProducts: function(state) {\n            var updatedOrdersWithProducts = state.orders.map(function(order) {\n                return (0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_2__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_3__._)({}, order), {\n                    products: state.products.filter(function(product) {\n                        return product.order === order.id;\n                    })\n                });\n            });\n            state.ordersWithProducts = updatedOrdersWithProducts;\n        },\n        removeProductFromOrder: function(state, action) {\n            var _action_payload = action.payload, orderId = _action_payload.orderId, productId = _action_payload.productId;\n            state.ordersWithProducts = state.ordersWithProducts.map(function(order) {\n                return order.id === orderId ? (0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_2__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_3__._)({}, order), {\n                    products: order.products.filter(function(product) {\n                        return product.id !== productId;\n                    })\n                }) : order;\n            });\n        },\n        setIsShowModal: function(state, action) {\n            state.isShowModal = action.payload;\n        },\n        setItemToDelete: function(state, action) {},\n        setRemoveCurrentDeleteItem: function(state, action) {\n            state.currentDeleteItem = action.payload;\n        }\n    },\n    extraReducers: function(builder) {\n        builder.addCase(_thunk_thunk__WEBPACK_IMPORTED_MODULE_0__.fetchProducts.pending, function(state) {\n            state.status = \"loading\";\n        });\n        builder.addCase(_thunk_thunk__WEBPACK_IMPORTED_MODULE_0__.fetchProducts.fulfilled, function(state, action) {\n            state.status = \"success\";\n            state.products = action.payload || [];\n            state.filteredProducts = state.products;\n        });\n        builder.addCase(_thunk_thunk__WEBPACK_IMPORTED_MODULE_0__.fetchProducts.rejected, function(state, action) {\n            var _action_payload;\n            state.status = \"failed\";\n            state.error = ((_action_payload = action.payload) === null || _action_payload === void 0 ? void 0 : _action_payload.message) || \"Failed to fetch\";\n        });\n        builder.addCase(_thunk_thunk__WEBPACK_IMPORTED_MODULE_0__.fetchOrders.pending, function(state) {\n            state.status = \"loading\";\n        });\n        builder.addCase(_thunk_thunk__WEBPACK_IMPORTED_MODULE_0__.fetchOrders.fulfilled, function(state, action) {\n            state.status = \"success\";\n            state.orders = action.payload || [];\n        });\n        builder.addCase(_thunk_thunk__WEBPACK_IMPORTED_MODULE_0__.fetchOrders.rejected, function(state, action) {\n            var _action_payload;\n            state.status = \"failed\";\n            state.error = ((_action_payload = action.payload) === null || _action_payload === void 0 ? void 0 : _action_payload.message) || \"Failed to fetch\";\n        });\n    }\n});\nvar _productsSlice_actions = productsSlice.actions;\nvar setSelectedType = _productsSlice_actions.setSelectedType, setRemoveItemProduct = _productsSlice_actions.setRemoveItemProduct, setRemoveItemOrder = _productsSlice_actions.setRemoveItemOrder, setSelectedOrder = _productsSlice_actions.setSelectedOrder, setOrdersWithProducts = _productsSlice_actions.setOrdersWithProducts, removeProductFromOrder = _productsSlice_actions.removeProductFromOrder, setIsShowModal = _productsSlice_actions.setIsShowModal, setItemToDelete = _productsSlice_actions.setItemToDelete, setRemoveCurrentDeleteItem = _productsSlice_actions.setRemoveCurrentDeleteItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (productsSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsNkJBQ0V2Qix1QkFERnVCLDJCQUN3QjtBQUMxQiwrREFBZXZCLGNBQWNnQyxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHVjZXIvcHJvZHVjdHNTbGljZS50cz8wZTdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHsgSU9yZGVycywgSVByb2R1Y3RzLCBTZWxlY3RUeXBlIH0gZnJvbSBcIi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgZmV0Y2hPcmRlcnMsIGZldGNoUHJvZHVjdHMgfSBmcm9tIFwiLi4vdGh1bmsvdGh1bmtcIjtcclxuXHJcbmludGVyZmFjZSBQcm9kdWN0c1N0YXRlIHtcclxuICBvcmRlcnM6IElPcmRlcnNbXTtcclxuICBwcm9kdWN0czogSVByb2R1Y3RzW107XHJcbiAgc3RhdHVzOiBcImlkbGVcIiB8IFwibG9hZGluZ1wiIHwgXCJmYWlsZWRcIiB8IFwic3VjY2Vzc1wiO1xyXG4gIGVycm9yOiBzdHJpbmcgfCBudWxsO1xyXG4gIHNlbGN0ZWRUeXBlOiBTZWxlY3RUeXBlO1xyXG4gIGZpbHRlcmVkUHJvZHVjdHM6IElQcm9kdWN0c1tdO1xyXG4gIHNlbGVjdGVkT3JkZXI6IElPcmRlcnMgfCBudWxsO1xyXG4gIG9yZGVyc1dpdGhQcm9kdWN0czogSU9yZGVyc1tdO1xyXG4gIGlzU2hvd01vZGFsOiBib29sZWFuO1xyXG4gIGl0ZW1Ub0RlbGV0ZTogeyBpZDogbnVtYmVyOyB0eXBlOiBzdHJpbmcgfSB8IG51bGw7XHJcbiAgY3VycmVudERlbGV0ZUl0ZW06IElQcm9kdWN0cyB8IElPcmRlcnMgfCBudWxsO1xyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFByb2R1Y3RzU3RhdGUgPSB7XHJcbiAgb3JkZXJzOiBbXSxcclxuICBwcm9kdWN0czogW10sXHJcbiAgc3RhdHVzOiBcImlkbGVcIixcclxuICBlcnJvcjogbnVsbCxcclxuICBzZWxjdGVkVHlwZTogXCJBbGxcIixcclxuICBmaWx0ZXJlZFByb2R1Y3RzOiBbXSxcclxuICBzZWxlY3RlZE9yZGVyOiBudWxsLFxyXG4gIG9yZGVyc1dpdGhQcm9kdWN0czogW10sXHJcbiAgaXNTaG93TW9kYWw6IGZhbHNlLFxyXG4gIGl0ZW1Ub0RlbGV0ZTogbnVsbCxcclxuICBjdXJyZW50RGVsZXRlSXRlbTogbnVsbCxcclxufTtcclxuXHJcbmNvbnN0IHByb2R1Y3RzU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJwcm9kdWN0c1wiLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgc2V0U2VsZWN0ZWRUeXBlOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxzdHJpbmc+KSA9PiB7XHJcbiAgICAgIHN0YXRlLnNlbGN0ZWRUeXBlID0gYWN0aW9uLnBheWxvYWQgYXMgU2VsZWN0VHlwZTtcclxuICAgICAgc3RhdGUuZmlsdGVyZWRQcm9kdWN0cyA9XHJcbiAgICAgICAgc3RhdGUuc2VsY3RlZFR5cGUgPT09IFwiQWxsXCJcclxuICAgICAgICAgID8gc3RhdGUucHJvZHVjdHNcclxuICAgICAgICAgIDogc3RhdGUucHJvZHVjdHMuZmlsdGVyKFxyXG4gICAgICAgICAgICAgIChwcm9kdWN0KSA9PiBwcm9kdWN0LnR5cGUgPT09IHN0YXRlLnNlbGN0ZWRUeXBlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9LFxyXG4gICAgc2V0UmVtb3ZlSXRlbVByb2R1Y3Q6IChcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxudW1iZXIgfCB1bmRlZmluZWQ+XHJcbiAgICApID0+IHtcclxuICAgICAgc3RhdGUuZmlsdGVyZWRQcm9kdWN0cyA9IHN0YXRlLmZpbHRlcmVkUHJvZHVjdHMuZmlsdGVyKFxyXG4gICAgICAgIChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkICE9PSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICApO1xyXG4gICAgICBzdGF0ZS5jdXJyZW50RGVsZXRlSXRlbSA9IG51bGw7XHJcbiAgICB9LFxyXG4gICAgc2V0UmVtb3ZlSXRlbU9yZGVyOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxudW1iZXIgfCB1bmRlZmluZWQ+KSA9PiB7XHJcbiAgICAgIGlmIChhY3Rpb24udHlwZSA9PT0gXCJvcmRlclwiKSB7XHJcbiAgICAgICAgc3RhdGUub3JkZXJzID0gc3RhdGUub3JkZXJzLmZpbHRlcihcclxuICAgICAgICAgIChvcmRlcikgPT4gb3JkZXIuaWQgIT09IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc3RhdGUuY3VycmVudERlbGV0ZUl0ZW0gPSBudWxsO1xyXG4gICAgfSxcclxuICAgIHNldFNlbGVjdGVkT3JkZXI6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPElPcmRlcnMgfCBudWxsPikgPT4ge1xyXG4gICAgICBzdGF0ZS5zZWxlY3RlZE9yZGVyID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gICAgc2V0T3JkZXJzV2l0aFByb2R1Y3RzOiAoc3RhdGUpID0+IHtcclxuICAgICAgY29uc3QgdXBkYXRlZE9yZGVyc1dpdGhQcm9kdWN0cyA9IHN0YXRlLm9yZGVycy5tYXAoKG9yZGVyOiBJT3JkZXJzKSA9PiAoe1xyXG4gICAgICAgIC4uLm9yZGVyLFxyXG4gICAgICAgIHByb2R1Y3RzOiBzdGF0ZS5wcm9kdWN0cy5maWx0ZXIoXHJcbiAgICAgICAgICAocHJvZHVjdDogSVByb2R1Y3RzKSA9PiBwcm9kdWN0Lm9yZGVyID09PSBvcmRlci5pZFxyXG4gICAgICAgICksXHJcbiAgICAgIH0pKTtcclxuICAgICAgc3RhdGUub3JkZXJzV2l0aFByb2R1Y3RzID0gdXBkYXRlZE9yZGVyc1dpdGhQcm9kdWN0cztcclxuICAgIH0sXHJcbiAgICByZW1vdmVQcm9kdWN0RnJvbU9yZGVyKFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHsgb3JkZXJJZDogbnVtYmVyOyBwcm9kdWN0SWQ6IG51bWJlciB9PlxyXG4gICAgKSB7XHJcbiAgICAgIGNvbnN0IHsgb3JkZXJJZCwgcHJvZHVjdElkIH0gPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgc3RhdGUub3JkZXJzV2l0aFByb2R1Y3RzID0gc3RhdGUub3JkZXJzV2l0aFByb2R1Y3RzLm1hcCgob3JkZXIpID0+XHJcbiAgICAgICAgb3JkZXIuaWQgPT09IG9yZGVySWRcclxuICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgIC4uLm9yZGVyLFxyXG4gICAgICAgICAgICAgIHByb2R1Y3RzOiBvcmRlci5wcm9kdWN0cy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCAhPT0gcHJvZHVjdElkXHJcbiAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgOiBvcmRlclxyXG4gICAgICApO1xyXG4gICAgfSxcclxuICAgIHNldElzU2hvd01vZGFsOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxib29sZWFuPikgPT4ge1xyXG4gICAgICBzdGF0ZS5pc1Nob3dNb2RhbCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfSxcclxuICAgIHNldEl0ZW1Ub0RlbGV0ZTogKFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHsgaWQ6IG51bWJlcjsgdHlwZTogc3RyaW5nIH0gfCBudWxsPlxyXG4gICAgKSA9PiB7XHJcbiAgICAgXHJcbiAgICB9LFxyXG4gICAgc2V0UmVtb3ZlQ3VycmVudERlbGV0ZUl0ZW06IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPG51bGw+KSA9PiB7XHJcbiAgICAgIHN0YXRlLmN1cnJlbnREZWxldGVJdGVtID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+IHtcclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShmZXRjaFByb2R1Y3RzLnBlbmRpbmcsIChzdGF0ZSkgPT4ge1xyXG4gICAgICBzdGF0ZS5zdGF0dXMgPSBcImxvYWRpbmdcIjtcclxuICAgIH0pO1xyXG4gICAgYnVpbGRlci5hZGRDYXNlKGZldGNoUHJvZHVjdHMuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5zdGF0dXMgPSBcInN1Y2Nlc3NcIjtcclxuICAgICAgc3RhdGUucHJvZHVjdHMgPSBhY3Rpb24ucGF5bG9hZCB8fCBbXTtcclxuICAgICAgc3RhdGUuZmlsdGVyZWRQcm9kdWN0cyA9IHN0YXRlLnByb2R1Y3RzO1xyXG4gICAgfSk7XHJcbiAgICBidWlsZGVyLmFkZENhc2UoZmV0Y2hQcm9kdWN0cy5yZWplY3RlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUuc3RhdHVzID0gXCJmYWlsZWRcIjtcclxuICAgICAgc3RhdGUuZXJyb3IgPSBhY3Rpb24ucGF5bG9hZD8ubWVzc2FnZSB8fCBcIkZhaWxlZCB0byBmZXRjaFwiO1xyXG4gICAgfSk7XHJcbiAgICBidWlsZGVyLmFkZENhc2UoZmV0Y2hPcmRlcnMucGVuZGluZywgKHN0YXRlKSA9PiB7XHJcbiAgICAgIHN0YXRlLnN0YXR1cyA9IFwibG9hZGluZ1wiO1xyXG4gICAgfSk7XHJcbiAgICBidWlsZGVyLmFkZENhc2UoZmV0Y2hPcmRlcnMuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5zdGF0dXMgPSBcInN1Y2Nlc3NcIjtcclxuICAgICAgc3RhdGUub3JkZXJzID0gYWN0aW9uLnBheWxvYWQgfHwgW107XHJcbiAgICB9KTtcclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShmZXRjaE9yZGVycy5yZWplY3RlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUuc3RhdHVzID0gXCJmYWlsZWRcIjtcclxuICAgICAgc3RhdGUuZXJyb3IgPSBhY3Rpb24ucGF5bG9hZD8ubWVzc2FnZSB8fCBcIkZhaWxlZCB0byBmZXRjaFwiO1xyXG4gICAgfSk7XHJcbiAgfSxcclxufSk7XHJcbmV4cG9ydCBjb25zdCB7XHJcbiAgc2V0U2VsZWN0ZWRUeXBlLFxyXG4gIHNldFJlbW92ZUl0ZW1Qcm9kdWN0LFxyXG4gIHNldFJlbW92ZUl0ZW1PcmRlcixcclxuICBzZXRTZWxlY3RlZE9yZGVyLFxyXG4gIHNldE9yZGVyc1dpdGhQcm9kdWN0cyxcclxuICByZW1vdmVQcm9kdWN0RnJvbU9yZGVyLFxyXG4gIHNldElzU2hvd01vZGFsLFxyXG4gIHNldEl0ZW1Ub0RlbGV0ZSxcclxuICBzZXRSZW1vdmVDdXJyZW50RGVsZXRlSXRlbSxcclxufSA9IHByb2R1Y3RzU2xpY2UuYWN0aW9ucztcclxuZXhwb3J0IGRlZmF1bHQgcHJvZHVjdHNTbGljZS5yZWR1Y2VyO1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJmZXRjaE9yZGVycyIsImZldGNoUHJvZHVjdHMiLCJpbml0aWFsU3RhdGUiLCJvcmRlcnMiLCJwcm9kdWN0cyIsInN0YXR1cyIsImVycm9yIiwic2VsY3RlZFR5cGUiLCJmaWx0ZXJlZFByb2R1Y3RzIiwic2VsZWN0ZWRPcmRlciIsIm9yZGVyc1dpdGhQcm9kdWN0cyIsImlzU2hvd01vZGFsIiwiaXRlbVRvRGVsZXRlIiwiY3VycmVudERlbGV0ZUl0ZW0iLCJwcm9kdWN0c1NsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwic2V0U2VsZWN0ZWRUeXBlIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiZmlsdGVyIiwicHJvZHVjdCIsInR5cGUiLCJzZXRSZW1vdmVJdGVtUHJvZHVjdCIsImlkIiwic2V0UmVtb3ZlSXRlbU9yZGVyIiwib3JkZXIiLCJzZXRTZWxlY3RlZE9yZGVyIiwic2V0T3JkZXJzV2l0aFByb2R1Y3RzIiwidXBkYXRlZE9yZGVyc1dpdGhQcm9kdWN0cyIsIm1hcCIsInJlbW92ZVByb2R1Y3RGcm9tT3JkZXIiLCJvcmRlcklkIiwicHJvZHVjdElkIiwic2V0SXNTaG93TW9kYWwiLCJzZXRJdGVtVG9EZWxldGUiLCJzZXRSZW1vdmVDdXJyZW50RGVsZXRlSXRlbSIsImV4dHJhUmVkdWNlcnMiLCJidWlsZGVyIiwiYWRkQ2FzZSIsInBlbmRpbmciLCJmdWxmaWxsZWQiLCJyZWplY3RlZCIsIm1lc3NhZ2UiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/reducer/productsSlice.ts\n"));

/***/ })

});