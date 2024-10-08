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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   removeProductFromOrder: function() { return /* binding */ removeProductFromOrder; },\n/* harmony export */   setIsShowModal: function() { return /* binding */ setIsShowModal; },\n/* harmony export */   setItemToDelete: function() { return /* binding */ setItemToDelete; },\n/* harmony export */   setOrdersWithProducts: function() { return /* binding */ setOrdersWithProducts; },\n/* harmony export */   setRemoveItemOrder: function() { return /* binding */ setRemoveItemOrder; },\n/* harmony export */   setRemoveItemProduct: function() { return /* binding */ setRemoveItemProduct; },\n/* harmony export */   setSelectedOrder: function() { return /* binding */ setSelectedOrder; },\n/* harmony export */   setSelectedType: function() { return /* binding */ setSelectedType; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_object_spread */ \"./node_modules/@swc/helpers/esm/_object_spread.js\");\n/* harmony import */ var _swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_object_spread_props */ \"./node_modules/@swc/helpers/esm/_object_spread_props.js\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var _thunk_thunk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../thunk/thunk */ \"./src/thunk/thunk.ts\");\n\n\n\n\nvar initialState = {\n    orders: [],\n    products: [],\n    status: \"idle\",\n    error: null,\n    selctedType: \"All\",\n    filteredProducts: [],\n    selectedOrder: null,\n    ordersWithProducts: [],\n    isShowModal: false,\n    itemToDelete: null,\n    currentDeleteItem: null\n};\nvar productsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"products\",\n    initialState: initialState,\n    reducers: {\n        setSelectedType: function(state, action) {\n            state.selctedType = action.payload;\n            state.filteredProducts = state.selctedType === \"All\" ? state.products : state.products.filter(function(product) {\n                return product.type === state.selctedType;\n            });\n        },\n        setRemoveItemProduct: function(state, action) {\n            state.filteredProducts = state.filteredProducts.filter(function(product) {\n                return product.id !== action.payload;\n            });\n        },\n        setRemoveItemOrder: function(state, action) {\n            state.orders = state.orders.filter(function(order) {\n                return order.id !== action.payload;\n            });\n        },\n        setSelectedOrder: function(state, action) {\n            state.selectedOrder = action.payload;\n        },\n        setOrdersWithProducts: function(state) {\n            var updatedOrdersWithProducts = state.orders.map(function(order) {\n                return (0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_2__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_3__._)({}, order), {\n                    products: state.products.filter(function(product) {\n                        return product.order === order.id;\n                    })\n                });\n            });\n            state.ordersWithProducts = updatedOrdersWithProducts;\n        },\n        removeProductFromOrder: function(state, action) {\n            var _action_payload = action.payload, orderId = _action_payload.orderId, productId = _action_payload.productId;\n            state.ordersWithProducts = state.ordersWithProducts.map(function(order) {\n                return order.id === orderId ? (0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_2__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_3__._)({}, order), {\n                    products: order.products.filter(function(product) {\n                        return product.id !== productId;\n                    })\n                }) : order;\n            });\n        },\n        setIsShowModal: function(state, action) {\n            state.isShowModal = action.payload;\n        },\n        setItemToDelete: function(state, action) {\n            state.itemToDelete = action.payload;\n            var findItemDeleteProduct = state.products.find(function(item) {\n                var _action_payload;\n                return item.id === ((_action_payload = action.payload) === null || _action_payload === void 0 ? void 0 : _action_payload.id);\n            });\n            if (findItemDeleteProduct) {\n                state.currentDeleteItem = findItemDelete;\n            }\n        }\n    },\n    extraReducers: function(builder) {\n        builder.addCase(_thunk_thunk__WEBPACK_IMPORTED_MODULE_0__.fetchProducts.pending, function(state) {\n            state.status = \"loading\";\n        });\n        builder.addCase(_thunk_thunk__WEBPACK_IMPORTED_MODULE_0__.fetchProducts.fulfilled, function(state, action) {\n            state.status = \"success\";\n            state.products = action.payload || [];\n            state.filteredProducts = state.products;\n        });\n        builder.addCase(_thunk_thunk__WEBPACK_IMPORTED_MODULE_0__.fetchProducts.rejected, function(state, action) {\n            var _action_payload;\n            state.status = \"failed\";\n            state.error = ((_action_payload = action.payload) === null || _action_payload === void 0 ? void 0 : _action_payload.message) || \"Failed to fetch\";\n        });\n        builder.addCase(_thunk_thunk__WEBPACK_IMPORTED_MODULE_0__.fetchOrders.pending, function(state) {\n            state.status = \"loading\";\n        });\n        builder.addCase(_thunk_thunk__WEBPACK_IMPORTED_MODULE_0__.fetchOrders.fulfilled, function(state, action) {\n            state.status = \"success\";\n            state.orders = action.payload || [];\n        });\n        builder.addCase(_thunk_thunk__WEBPACK_IMPORTED_MODULE_0__.fetchOrders.rejected, function(state, action) {\n            var _action_payload;\n            state.status = \"failed\";\n            state.error = ((_action_payload = action.payload) === null || _action_payload === void 0 ? void 0 : _action_payload.message) || \"Failed to fetch\";\n        });\n    }\n});\nvar _productsSlice_actions = productsSlice.actions;\nvar setSelectedType = _productsSlice_actions.setSelectedType, setRemoveItemProduct = _productsSlice_actions.setRemoveItemProduct, setRemoveItemOrder = _productsSlice_actions.setRemoveItemOrder, setSelectedOrder = _productsSlice_actions.setSelectedOrder, setOrdersWithProducts = _productsSlice_actions.setOrdersWithProducts, removeProductFromOrder = _productsSlice_actions.removeProductFromOrder, setIsShowModal = _productsSlice_actions.setIsShowModal, setItemToDelete = _productsSlice_actions.setItemToDelete;\n/* harmony default export */ __webpack_exports__[\"default\"] = (productsSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0VsQix1QkFIRmtCLHdCQUNBRyxpQkFFRXJCLHVCQUZGcUIsZ0JBQ0FDLGtCQUNFdEIsdUJBREZzQixnQkFDd0I7QUFDMUIsK0RBQWV0QixjQUFjbUMsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9yZWR1Y2VyL3Byb2R1Y3RzU2xpY2UudHM/MGU3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7IElPcmRlcnMsIElQcm9kdWN0cywgU2VsZWN0VHlwZSB9IGZyb20gXCIuL3R5cGVzXCI7XHJcbmltcG9ydCB7IGZldGNoT3JkZXJzLCBmZXRjaFByb2R1Y3RzIH0gZnJvbSBcIi4uL3RodW5rL3RodW5rXCI7XHJcblxyXG5pbnRlcmZhY2UgUHJvZHVjdHNTdGF0ZSB7XHJcbiAgb3JkZXJzOiBJT3JkZXJzW107XHJcbiAgcHJvZHVjdHM6IElQcm9kdWN0c1tdO1xyXG4gIHN0YXR1czogXCJpZGxlXCIgfCBcImxvYWRpbmdcIiB8IFwiZmFpbGVkXCIgfCBcInN1Y2Nlc3NcIjtcclxuICBlcnJvcjogc3RyaW5nIHwgbnVsbDtcclxuICBzZWxjdGVkVHlwZTogU2VsZWN0VHlwZTtcclxuICBmaWx0ZXJlZFByb2R1Y3RzOiBJUHJvZHVjdHNbXTtcclxuICBzZWxlY3RlZE9yZGVyOiBJT3JkZXJzIHwgbnVsbDtcclxuICBvcmRlcnNXaXRoUHJvZHVjdHM6IElPcmRlcnNbXTtcclxuICBpc1Nob3dNb2RhbDogYm9vbGVhbjtcclxuICBpdGVtVG9EZWxldGU6IHsgaWQ6IG51bWJlcjsgdHlwZTogc3RyaW5nIH0gfCBudWxsO1xyXG4gIGN1cnJlbnREZWxldGVJdGVtOiBJUHJvZHVjdHMgfCBJT3JkZXJzIHwgbnVsbDtcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBQcm9kdWN0c1N0YXRlID0ge1xyXG4gIG9yZGVyczogW10sXHJcbiAgcHJvZHVjdHM6IFtdLFxyXG4gIHN0YXR1czogXCJpZGxlXCIsXHJcbiAgZXJyb3I6IG51bGwsXHJcbiAgc2VsY3RlZFR5cGU6IFwiQWxsXCIsXHJcbiAgZmlsdGVyZWRQcm9kdWN0czogW10sXHJcbiAgc2VsZWN0ZWRPcmRlcjogbnVsbCxcclxuICBvcmRlcnNXaXRoUHJvZHVjdHM6IFtdLFxyXG4gIGlzU2hvd01vZGFsOiBmYWxzZSxcclxuICBpdGVtVG9EZWxldGU6IG51bGwsXHJcbiAgY3VycmVudERlbGV0ZUl0ZW06IG51bGwsXHJcbn07XHJcblxyXG5jb25zdCBwcm9kdWN0c1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwicHJvZHVjdHNcIixcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIHNldFNlbGVjdGVkVHlwZTogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nPikgPT4ge1xyXG4gICAgICBzdGF0ZS5zZWxjdGVkVHlwZSA9IGFjdGlvbi5wYXlsb2FkIGFzIFNlbGVjdFR5cGU7XHJcbiAgICAgIHN0YXRlLmZpbHRlcmVkUHJvZHVjdHMgPVxyXG4gICAgICAgIHN0YXRlLnNlbGN0ZWRUeXBlID09PSBcIkFsbFwiXHJcbiAgICAgICAgICA/IHN0YXRlLnByb2R1Y3RzXHJcbiAgICAgICAgICA6IHN0YXRlLnByb2R1Y3RzLmZpbHRlcihcclxuICAgICAgICAgICAgICAocHJvZHVjdCkgPT4gcHJvZHVjdC50eXBlID09PSBzdGF0ZS5zZWxjdGVkVHlwZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfSxcclxuICAgIHNldFJlbW92ZUl0ZW1Qcm9kdWN0OiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxudW1iZXI+KSA9PiB7XHJcbiAgICAgIHN0YXRlLmZpbHRlcmVkUHJvZHVjdHMgPSBzdGF0ZS5maWx0ZXJlZFByb2R1Y3RzLmZpbHRlcihcclxuICAgICAgICAocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCAhPT0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgKTtcclxuICAgIH0sXHJcbiAgICBzZXRSZW1vdmVJdGVtT3JkZXI6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPG51bWJlcj4pID0+IHtcclxuICAgICAgc3RhdGUub3JkZXJzID0gc3RhdGUub3JkZXJzLmZpbHRlcihcclxuICAgICAgICAob3JkZXIpID0+IG9yZGVyLmlkICE9PSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICApO1xyXG4gICAgfSxcclxuICAgIHNldFNlbGVjdGVkT3JkZXI6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPElPcmRlcnMgfCBudWxsPikgPT4ge1xyXG4gICAgICBzdGF0ZS5zZWxlY3RlZE9yZGVyID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gICAgc2V0T3JkZXJzV2l0aFByb2R1Y3RzOiAoc3RhdGUpID0+IHtcclxuICAgICAgY29uc3QgdXBkYXRlZE9yZGVyc1dpdGhQcm9kdWN0cyA9IHN0YXRlLm9yZGVycy5tYXAoKG9yZGVyOiBJT3JkZXJzKSA9PiAoe1xyXG4gICAgICAgIC4uLm9yZGVyLFxyXG4gICAgICAgIHByb2R1Y3RzOiBzdGF0ZS5wcm9kdWN0cy5maWx0ZXIoXHJcbiAgICAgICAgICAocHJvZHVjdDogSVByb2R1Y3RzKSA9PiBwcm9kdWN0Lm9yZGVyID09PSBvcmRlci5pZFxyXG4gICAgICAgICksXHJcbiAgICAgIH0pKTtcclxuICAgICAgc3RhdGUub3JkZXJzV2l0aFByb2R1Y3RzID0gdXBkYXRlZE9yZGVyc1dpdGhQcm9kdWN0cztcclxuICAgIH0sXHJcbiAgICByZW1vdmVQcm9kdWN0RnJvbU9yZGVyKFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHsgb3JkZXJJZDogbnVtYmVyOyBwcm9kdWN0SWQ6IG51bWJlciB9PlxyXG4gICAgKSB7XHJcbiAgICAgIGNvbnN0IHsgb3JkZXJJZCwgcHJvZHVjdElkIH0gPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgc3RhdGUub3JkZXJzV2l0aFByb2R1Y3RzID0gc3RhdGUub3JkZXJzV2l0aFByb2R1Y3RzLm1hcCgob3JkZXIpID0+XHJcbiAgICAgICAgb3JkZXIuaWQgPT09IG9yZGVySWRcclxuICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgIC4uLm9yZGVyLFxyXG4gICAgICAgICAgICAgIHByb2R1Y3RzOiBvcmRlci5wcm9kdWN0cy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCAhPT0gcHJvZHVjdElkXHJcbiAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgOiBvcmRlclxyXG4gICAgICApO1xyXG4gICAgfSxcclxuICAgIHNldElzU2hvd01vZGFsOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxib29sZWFuPikgPT4ge1xyXG4gICAgICBzdGF0ZS5pc1Nob3dNb2RhbCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfSxcclxuICAgIHNldEl0ZW1Ub0RlbGV0ZTogKFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHsgaWQ6IG51bWJlcjsgdHlwZTogc3RyaW5nIH0gfCBudWxsPlxyXG4gICAgKSA9PiB7XHJcbiAgICAgIHN0YXRlLml0ZW1Ub0RlbGV0ZSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICBjb25zdCBmaW5kSXRlbURlbGV0ZVByb2R1Y3QgPSBzdGF0ZS5wcm9kdWN0cy5maW5kKFxyXG4gICAgICAgIChpdGVtKSA9PiBpdGVtLmlkID09PSBhY3Rpb24ucGF5bG9hZD8uaWRcclxuICAgICAgKTtcclxuICAgICAgaWYgKGZpbmRJdGVtRGVsZXRlUHJvZHVjdCkge1xyXG4gICAgICAgIHN0YXRlLmN1cnJlbnREZWxldGVJdGVtID0gZmluZEl0ZW1EZWxldGU7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfSxcclxuICBleHRyYVJlZHVjZXJzOiAoYnVpbGRlcikgPT4ge1xyXG4gICAgYnVpbGRlci5hZGRDYXNlKGZldGNoUHJvZHVjdHMucGVuZGluZywgKHN0YXRlKSA9PiB7XHJcbiAgICAgIHN0YXRlLnN0YXR1cyA9IFwibG9hZGluZ1wiO1xyXG4gICAgfSk7XHJcbiAgICBidWlsZGVyLmFkZENhc2UoZmV0Y2hQcm9kdWN0cy5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLnN0YXR1cyA9IFwic3VjY2Vzc1wiO1xyXG4gICAgICBzdGF0ZS5wcm9kdWN0cyA9IGFjdGlvbi5wYXlsb2FkIHx8IFtdO1xyXG4gICAgICBzdGF0ZS5maWx0ZXJlZFByb2R1Y3RzID0gc3RhdGUucHJvZHVjdHM7XHJcbiAgICB9KTtcclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShmZXRjaFByb2R1Y3RzLnJlamVjdGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5zdGF0dXMgPSBcImZhaWxlZFwiO1xyXG4gICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5wYXlsb2FkPy5tZXNzYWdlIHx8IFwiRmFpbGVkIHRvIGZldGNoXCI7XHJcbiAgICB9KTtcclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShmZXRjaE9yZGVycy5wZW5kaW5nLCAoc3RhdGUpID0+IHtcclxuICAgICAgc3RhdGUuc3RhdHVzID0gXCJsb2FkaW5nXCI7XHJcbiAgICB9KTtcclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShmZXRjaE9yZGVycy5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLnN0YXR1cyA9IFwic3VjY2Vzc1wiO1xyXG4gICAgICBzdGF0ZS5vcmRlcnMgPSBhY3Rpb24ucGF5bG9hZCB8fCBbXTtcclxuICAgIH0pO1xyXG4gICAgYnVpbGRlci5hZGRDYXNlKGZldGNoT3JkZXJzLnJlamVjdGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5zdGF0dXMgPSBcImZhaWxlZFwiO1xyXG4gICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5wYXlsb2FkPy5tZXNzYWdlIHx8IFwiRmFpbGVkIHRvIGZldGNoXCI7XHJcbiAgICB9KTtcclxuICB9LFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IHtcclxuICBzZXRTZWxlY3RlZFR5cGUsXHJcbiAgc2V0UmVtb3ZlSXRlbVByb2R1Y3QsXHJcbiAgc2V0UmVtb3ZlSXRlbU9yZGVyLFxyXG4gIHNldFNlbGVjdGVkT3JkZXIsXHJcbiAgc2V0T3JkZXJzV2l0aFByb2R1Y3RzLFxyXG4gIHJlbW92ZVByb2R1Y3RGcm9tT3JkZXIsXHJcbiAgc2V0SXNTaG93TW9kYWwsXHJcbiAgc2V0SXRlbVRvRGVsZXRlLFxyXG59ID0gcHJvZHVjdHNTbGljZS5hY3Rpb25zO1xyXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0c1NsaWNlLnJlZHVjZXI7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImZldGNoT3JkZXJzIiwiZmV0Y2hQcm9kdWN0cyIsImluaXRpYWxTdGF0ZSIsIm9yZGVycyIsInByb2R1Y3RzIiwic3RhdHVzIiwiZXJyb3IiLCJzZWxjdGVkVHlwZSIsImZpbHRlcmVkUHJvZHVjdHMiLCJzZWxlY3RlZE9yZGVyIiwib3JkZXJzV2l0aFByb2R1Y3RzIiwiaXNTaG93TW9kYWwiLCJpdGVtVG9EZWxldGUiLCJjdXJyZW50RGVsZXRlSXRlbSIsInByb2R1Y3RzU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJzZXRTZWxlY3RlZFR5cGUiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJmaWx0ZXIiLCJwcm9kdWN0IiwidHlwZSIsInNldFJlbW92ZUl0ZW1Qcm9kdWN0IiwiaWQiLCJzZXRSZW1vdmVJdGVtT3JkZXIiLCJvcmRlciIsInNldFNlbGVjdGVkT3JkZXIiLCJzZXRPcmRlcnNXaXRoUHJvZHVjdHMiLCJ1cGRhdGVkT3JkZXJzV2l0aFByb2R1Y3RzIiwibWFwIiwicmVtb3ZlUHJvZHVjdEZyb21PcmRlciIsIm9yZGVySWQiLCJwcm9kdWN0SWQiLCJzZXRJc1Nob3dNb2RhbCIsInNldEl0ZW1Ub0RlbGV0ZSIsImZpbmRJdGVtRGVsZXRlUHJvZHVjdCIsImZpbmQiLCJpdGVtIiwiZmluZEl0ZW1EZWxldGUiLCJleHRyYVJlZHVjZXJzIiwiYnVpbGRlciIsImFkZENhc2UiLCJwZW5kaW5nIiwiZnVsZmlsbGVkIiwicmVqZWN0ZWQiLCJtZXNzYWdlIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/reducer/productsSlice.ts\n"));

/***/ })

});