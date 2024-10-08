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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   removeProductFromOrder: function() { return /* binding */ removeProductFromOrder; },\n/* harmony export */   setIsShowModal: function() { return /* binding */ setIsShowModal; },\n/* harmony export */   setItemToDelete: function() { return /* binding */ setItemToDelete; },\n/* harmony export */   setOrdersWithProducts: function() { return /* binding */ setOrdersWithProducts; },\n/* harmony export */   setRemoveCurrentDeleteItem: function() { return /* binding */ setRemoveCurrentDeleteItem; },\n/* harmony export */   setRemoveItemOrder: function() { return /* binding */ setRemoveItemOrder; },\n/* harmony export */   setRemoveItemProduct: function() { return /* binding */ setRemoveItemProduct; },\n/* harmony export */   setSelectedOrder: function() { return /* binding */ setSelectedOrder; },\n/* harmony export */   setSelectedType: function() { return /* binding */ setSelectedType; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_object_spread */ \"./node_modules/@swc/helpers/esm/_object_spread.js\");\n/* harmony import */ var _swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_object_spread_props */ \"./node_modules/@swc/helpers/esm/_object_spread_props.js\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var _thunk_thunk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../thunk/thunk */ \"./src/thunk/thunk.ts\");\n\n\n\n\nvar initialState = {\n    orders: [],\n    products: [],\n    status: \"idle\",\n    error: null,\n    selctedType: \"All\",\n    filteredProducts: [],\n    selectedOrder: null,\n    ordersWithProducts: [],\n    isShowModal: false,\n    itemToDelete: null,\n    currentDeleteItem: null\n};\nvar productsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"products\",\n    initialState: initialState,\n    reducers: {\n        setSelectedType: function(state, action) {\n            state.selctedType = action.payload;\n            state.filteredProducts = state.selctedType === \"All\" ? state.products : state.products.filter(function(product) {\n                return product.type === state.selctedType;\n            });\n        },\n        setRemoveItemProduct: function(state, action) {\n            state.filteredProducts = state.filteredProducts.filter(function(product) {\n                return product.id !== action.payload;\n            });\n            state.currentDeleteItem = null;\n        },\n        setRemoveItemOrder: function(state, action) {\n            if (action.type === \"order\") {\n                state.orders = state.orders.filter(function(order) {\n                    return order.id !== action.payload;\n                });\n            }\n            state.currentDeleteItem = null;\n        },\n        setSelectedOrder: function(state, action) {\n            state.selectedOrder = action.payload;\n        },\n        setOrdersWithProducts: function(state) {\n            var updatedOrdersWithProducts = state.orders.map(function(order) {\n                return (0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_2__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_3__._)({}, order), {\n                    products: state.products.filter(function(product) {\n                        return product.order === order.id;\n                    })\n                });\n            });\n            state.ordersWithProducts = updatedOrdersWithProducts;\n        },\n        removeProductFromOrder: function(state, action) {\n            var _action_payload = action.payload, orderId = _action_payload.orderId, productId = _action_payload.productId;\n            state.ordersWithProducts = state.ordersWithProducts.map(function(order) {\n                return order.id === orderId ? (0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_2__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_3__._)({}, order), {\n                    products: order.products.filter(function(product) {\n                        return product.id !== productId;\n                    })\n                }) : order;\n            });\n        },\n        setIsShowModal: function(state, action) {\n            state.isShowModal = action.payload;\n        },\n        setItemToDelete: function(state, action) {},\n        setRemoveCurrentDeleteItem: function(state, action) {\n            state.currentDeleteItem = action.payload;\n        }\n    },\n    extraReducers: function(builder) {\n        builder.addCase(_thunk_thunk__WEBPACK_IMPORTED_MODULE_0__.fetchProducts.pending, function(state) {\n            state.status = \"loading\";\n        });\n        builder.addCase(_thunk_thunk__WEBPACK_IMPORTED_MODULE_0__.fetchProducts.fulfilled, function(state, action) {\n            state.status = \"success\";\n            state.products = action.payload || [];\n            state.filteredProducts = state.products;\n        });\n        builder.addCase(_thunk_thunk__WEBPACK_IMPORTED_MODULE_0__.fetchProducts.rejected, function(state, action) {\n            var _action_payload;\n            state.status = \"failed\";\n            state.error = ((_action_payload = action.payload) === null || _action_payload === void 0 ? void 0 : _action_payload.message) || \"Failed to fetch\";\n        });\n        builder.addCase(_thunk_thunk__WEBPACK_IMPORTED_MODULE_0__.fetchOrders.pending, function(state) {\n            state.status = \"loading\";\n        });\n        builder.addCase(_thunk_thunk__WEBPACK_IMPORTED_MODULE_0__.fetchOrders.fulfilled, function(state, action) {\n            state.status = \"success\";\n            state.orders = action.payload || [];\n        });\n        builder.addCase(_thunk_thunk__WEBPACK_IMPORTED_MODULE_0__.fetchOrders.rejected, function(state, action) {\n            var _action_payload;\n            state.status = \"failed\";\n            state.error = ((_action_payload = action.payload) === null || _action_payload === void 0 ? void 0 : _action_payload.message) || \"Failed to fetch\";\n        });\n    }\n});\nvar _productsSlice_actions = productsSlice.actions;\nvar setSelectedType = _productsSlice_actions.setSelectedType, setRemoveItemProduct = _productsSlice_actions.setRemoveItemProduct, setRemoveItemOrder = _productsSlice_actions.setRemoveItemOrder, setSelectedOrder = _productsSlice_actions.setSelectedOrder, setOrdersWithProducts = _productsSlice_actions.setOrdersWithProducts, removeProductFromOrder = _productsSlice_actions.removeProductFromOrder, setIsShowModal = _productsSlice_actions.setIsShowModal, setItemToDelete = _productsSlice_actions.setItemToDelete, setRemoveCurrentDeleteItem = _productsSlice_actions.setRemoveCurrentDeleteItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (productsSlice.reducer); //  const itemProduct = state.products.find(\n //    (item) => item.id === action.payload?.id\n //  );\n //  const itemOrder = state.orders.find((item) => item.id === action.payload?.id);\n //  if (action.payload?.type === \"product\") {\n //    state.currentDeleteItem = itemProduct || null;\n //  } else if (action.payload?.type === \"order\") {\n //    state.currentDeleteItem = itemOrder || null;\n //  }\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsNkJBQ0V2Qix1QkFERnVCLDJCQUN3QjtBQUMxQiwrREFBZXZCLGNBQWNnQyxPQUFPLEVBQUMsQ0FHckMsNENBQTRDO0NBQzVDLDhDQUE4QztDQUM5QyxNQUFNO0NBQ04sa0ZBQWtGO0NBQ2xGLDZDQUE2QztDQUM3QyxvREFBb0Q7Q0FDcEQsa0RBQWtEO0NBQ2xELGtEQUFrRDtDQUNsRCxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9yZWR1Y2VyL3Byb2R1Y3RzU2xpY2UudHM/MGU3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7IElPcmRlcnMsIElQcm9kdWN0cywgU2VsZWN0VHlwZSB9IGZyb20gXCIuL3R5cGVzXCI7XHJcbmltcG9ydCB7IGZldGNoT3JkZXJzLCBmZXRjaFByb2R1Y3RzIH0gZnJvbSBcIi4uL3RodW5rL3RodW5rXCI7XHJcblxyXG5pbnRlcmZhY2UgUHJvZHVjdHNTdGF0ZSB7XHJcbiAgb3JkZXJzOiBJT3JkZXJzW107XHJcbiAgcHJvZHVjdHM6IElQcm9kdWN0c1tdO1xyXG4gIHN0YXR1czogXCJpZGxlXCIgfCBcImxvYWRpbmdcIiB8IFwiZmFpbGVkXCIgfCBcInN1Y2Nlc3NcIjtcclxuICBlcnJvcjogc3RyaW5nIHwgbnVsbDtcclxuICBzZWxjdGVkVHlwZTogU2VsZWN0VHlwZTtcclxuICBmaWx0ZXJlZFByb2R1Y3RzOiBJUHJvZHVjdHNbXTtcclxuICBzZWxlY3RlZE9yZGVyOiBJT3JkZXJzIHwgbnVsbDtcclxuICBvcmRlcnNXaXRoUHJvZHVjdHM6IElPcmRlcnNbXTtcclxuICBpc1Nob3dNb2RhbDogYm9vbGVhbjtcclxuICBpdGVtVG9EZWxldGU6IHsgaWQ6IG51bWJlcjsgdHlwZTogc3RyaW5nIH0gfCBudWxsO1xyXG4gIGN1cnJlbnREZWxldGVJdGVtOiBJUHJvZHVjdHMgfCBJT3JkZXJzIHwgbnVsbDtcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBQcm9kdWN0c1N0YXRlID0ge1xyXG4gIG9yZGVyczogW10sXHJcbiAgcHJvZHVjdHM6IFtdLFxyXG4gIHN0YXR1czogXCJpZGxlXCIsXHJcbiAgZXJyb3I6IG51bGwsXHJcbiAgc2VsY3RlZFR5cGU6IFwiQWxsXCIsXHJcbiAgZmlsdGVyZWRQcm9kdWN0czogW10sXHJcbiAgc2VsZWN0ZWRPcmRlcjogbnVsbCxcclxuICBvcmRlcnNXaXRoUHJvZHVjdHM6IFtdLFxyXG4gIGlzU2hvd01vZGFsOiBmYWxzZSxcclxuICBpdGVtVG9EZWxldGU6IG51bGwsXHJcbiAgY3VycmVudERlbGV0ZUl0ZW06IG51bGwsXHJcbn07XHJcblxyXG5jb25zdCBwcm9kdWN0c1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwicHJvZHVjdHNcIixcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIHNldFNlbGVjdGVkVHlwZTogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nPikgPT4ge1xyXG4gICAgICBzdGF0ZS5zZWxjdGVkVHlwZSA9IGFjdGlvbi5wYXlsb2FkIGFzIFNlbGVjdFR5cGU7XHJcbiAgICAgIHN0YXRlLmZpbHRlcmVkUHJvZHVjdHMgPVxyXG4gICAgICAgIHN0YXRlLnNlbGN0ZWRUeXBlID09PSBcIkFsbFwiXHJcbiAgICAgICAgICA/IHN0YXRlLnByb2R1Y3RzXHJcbiAgICAgICAgICA6IHN0YXRlLnByb2R1Y3RzLmZpbHRlcihcclxuICAgICAgICAgICAgICAocHJvZHVjdCkgPT4gcHJvZHVjdC50eXBlID09PSBzdGF0ZS5zZWxjdGVkVHlwZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfSxcclxuICAgIHNldFJlbW92ZUl0ZW1Qcm9kdWN0OiAoXHJcbiAgICAgIHN0YXRlLFxyXG4gICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248bnVtYmVyIHwgdW5kZWZpbmVkPlxyXG4gICAgKSA9PiB7XHJcbiAgICAgIHN0YXRlLmZpbHRlcmVkUHJvZHVjdHMgPSBzdGF0ZS5maWx0ZXJlZFByb2R1Y3RzLmZpbHRlcihcclxuICAgICAgICAocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCAhPT0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgKTtcclxuICAgICAgc3RhdGUuY3VycmVudERlbGV0ZUl0ZW0gPSBudWxsO1xyXG4gICAgfSxcclxuICAgIHNldFJlbW92ZUl0ZW1PcmRlcjogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248bnVtYmVyIHwgdW5kZWZpbmVkPikgPT4ge1xyXG4gICAgICBpZiAoYWN0aW9uLnR5cGUgPT09IFwib3JkZXJcIikge1xyXG4gICAgICAgIHN0YXRlLm9yZGVycyA9IHN0YXRlLm9yZGVycy5maWx0ZXIoXHJcbiAgICAgICAgICAob3JkZXIpID0+IG9yZGVyLmlkICE9PSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHN0YXRlLmN1cnJlbnREZWxldGVJdGVtID0gbnVsbDtcclxuICAgIH0sXHJcbiAgICBzZXRTZWxlY3RlZE9yZGVyOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxJT3JkZXJzIHwgbnVsbD4pID0+IHtcclxuICAgICAgc3RhdGUuc2VsZWN0ZWRPcmRlciA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfSxcclxuICAgIHNldE9yZGVyc1dpdGhQcm9kdWN0czogKHN0YXRlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHVwZGF0ZWRPcmRlcnNXaXRoUHJvZHVjdHMgPSBzdGF0ZS5vcmRlcnMubWFwKChvcmRlcjogSU9yZGVycykgPT4gKHtcclxuICAgICAgICAuLi5vcmRlcixcclxuICAgICAgICBwcm9kdWN0czogc3RhdGUucHJvZHVjdHMuZmlsdGVyKFxyXG4gICAgICAgICAgKHByb2R1Y3Q6IElQcm9kdWN0cykgPT4gcHJvZHVjdC5vcmRlciA9PT0gb3JkZXIuaWRcclxuICAgICAgICApLFxyXG4gICAgICB9KSk7XHJcbiAgICAgIHN0YXRlLm9yZGVyc1dpdGhQcm9kdWN0cyA9IHVwZGF0ZWRPcmRlcnNXaXRoUHJvZHVjdHM7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlUHJvZHVjdEZyb21PcmRlcihcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7IG9yZGVySWQ6IG51bWJlcjsgcHJvZHVjdElkOiBudW1iZXIgfT5cclxuICAgICkge1xyXG4gICAgICBjb25zdCB7IG9yZGVySWQsIHByb2R1Y3RJZCB9ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgIHN0YXRlLm9yZGVyc1dpdGhQcm9kdWN0cyA9IHN0YXRlLm9yZGVyc1dpdGhQcm9kdWN0cy5tYXAoKG9yZGVyKSA9PlxyXG4gICAgICAgIG9yZGVyLmlkID09PSBvcmRlcklkXHJcbiAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgICAuLi5vcmRlcixcclxuICAgICAgICAgICAgICBwcm9kdWN0czogb3JkZXIucHJvZHVjdHMuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgIT09IHByb2R1Y3RJZFxyXG4gICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDogb3JkZXJcclxuICAgICAgKTtcclxuICAgIH0sXHJcbiAgICBzZXRJc1Nob3dNb2RhbDogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248Ym9vbGVhbj4pID0+IHtcclxuICAgICAgc3RhdGUuaXNTaG93TW9kYWwgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0sXHJcbiAgICBzZXRJdGVtVG9EZWxldGU6IChcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7IGlkOiBudW1iZXI7IHR5cGU6IHN0cmluZyB9IHwgbnVsbD5cclxuICAgICkgPT4ge1xyXG4gICAgIFxyXG4gICAgfSxcclxuICAgIHNldFJlbW92ZUN1cnJlbnREZWxldGVJdGVtOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxudWxsPikgPT4ge1xyXG4gICAgICBzdGF0ZS5jdXJyZW50RGVsZXRlSXRlbSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfSxcclxuICB9LFxyXG4gIGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PiB7XHJcbiAgICBidWlsZGVyLmFkZENhc2UoZmV0Y2hQcm9kdWN0cy5wZW5kaW5nLCAoc3RhdGUpID0+IHtcclxuICAgICAgc3RhdGUuc3RhdHVzID0gXCJsb2FkaW5nXCI7XHJcbiAgICB9KTtcclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShmZXRjaFByb2R1Y3RzLmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUuc3RhdHVzID0gXCJzdWNjZXNzXCI7XHJcbiAgICAgIHN0YXRlLnByb2R1Y3RzID0gYWN0aW9uLnBheWxvYWQgfHwgW107XHJcbiAgICAgIHN0YXRlLmZpbHRlcmVkUHJvZHVjdHMgPSBzdGF0ZS5wcm9kdWN0cztcclxuICAgIH0pO1xyXG4gICAgYnVpbGRlci5hZGRDYXNlKGZldGNoUHJvZHVjdHMucmVqZWN0ZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLnN0YXR1cyA9IFwiZmFpbGVkXCI7XHJcbiAgICAgIHN0YXRlLmVycm9yID0gYWN0aW9uLnBheWxvYWQ/Lm1lc3NhZ2UgfHwgXCJGYWlsZWQgdG8gZmV0Y2hcIjtcclxuICAgIH0pO1xyXG4gICAgYnVpbGRlci5hZGRDYXNlKGZldGNoT3JkZXJzLnBlbmRpbmcsIChzdGF0ZSkgPT4ge1xyXG4gICAgICBzdGF0ZS5zdGF0dXMgPSBcImxvYWRpbmdcIjtcclxuICAgIH0pO1xyXG4gICAgYnVpbGRlci5hZGRDYXNlKGZldGNoT3JkZXJzLmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUuc3RhdHVzID0gXCJzdWNjZXNzXCI7XHJcbiAgICAgIHN0YXRlLm9yZGVycyA9IGFjdGlvbi5wYXlsb2FkIHx8IFtdO1xyXG4gICAgfSk7XHJcbiAgICBidWlsZGVyLmFkZENhc2UoZmV0Y2hPcmRlcnMucmVqZWN0ZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLnN0YXR1cyA9IFwiZmFpbGVkXCI7XHJcbiAgICAgIHN0YXRlLmVycm9yID0gYWN0aW9uLnBheWxvYWQ/Lm1lc3NhZ2UgfHwgXCJGYWlsZWQgdG8gZmV0Y2hcIjtcclxuICAgIH0pO1xyXG4gIH0sXHJcbn0pO1xyXG5leHBvcnQgY29uc3Qge1xyXG4gIHNldFNlbGVjdGVkVHlwZSxcclxuICBzZXRSZW1vdmVJdGVtUHJvZHVjdCxcclxuICBzZXRSZW1vdmVJdGVtT3JkZXIsXHJcbiAgc2V0U2VsZWN0ZWRPcmRlcixcclxuICBzZXRPcmRlcnNXaXRoUHJvZHVjdHMsXHJcbiAgcmVtb3ZlUHJvZHVjdEZyb21PcmRlcixcclxuICBzZXRJc1Nob3dNb2RhbCxcclxuICBzZXRJdGVtVG9EZWxldGUsXHJcbiAgc2V0UmVtb3ZlQ3VycmVudERlbGV0ZUl0ZW0sXHJcbn0gPSBwcm9kdWN0c1NsaWNlLmFjdGlvbnM7XHJcbmV4cG9ydCBkZWZhdWx0IHByb2R1Y3RzU2xpY2UucmVkdWNlcjtcclxuXHJcblxyXG4vLyAgY29uc3QgaXRlbVByb2R1Y3QgPSBzdGF0ZS5wcm9kdWN0cy5maW5kKFxyXG4vLyAgICAoaXRlbSkgPT4gaXRlbS5pZCA9PT0gYWN0aW9uLnBheWxvYWQ/LmlkXHJcbi8vICApO1xyXG4vLyAgY29uc3QgaXRlbU9yZGVyID0gc3RhdGUub3JkZXJzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5wYXlsb2FkPy5pZCk7XHJcbi8vICBpZiAoYWN0aW9uLnBheWxvYWQ/LnR5cGUgPT09IFwicHJvZHVjdFwiKSB7XHJcbi8vICAgIHN0YXRlLmN1cnJlbnREZWxldGVJdGVtID0gaXRlbVByb2R1Y3QgfHwgbnVsbDtcclxuLy8gIH0gZWxzZSBpZiAoYWN0aW9uLnBheWxvYWQ/LnR5cGUgPT09IFwib3JkZXJcIikge1xyXG4vLyAgICBzdGF0ZS5jdXJyZW50RGVsZXRlSXRlbSA9IGl0ZW1PcmRlciB8fCBudWxsO1xyXG4vLyAgfSJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImZldGNoT3JkZXJzIiwiZmV0Y2hQcm9kdWN0cyIsImluaXRpYWxTdGF0ZSIsIm9yZGVycyIsInByb2R1Y3RzIiwic3RhdHVzIiwiZXJyb3IiLCJzZWxjdGVkVHlwZSIsImZpbHRlcmVkUHJvZHVjdHMiLCJzZWxlY3RlZE9yZGVyIiwib3JkZXJzV2l0aFByb2R1Y3RzIiwiaXNTaG93TW9kYWwiLCJpdGVtVG9EZWxldGUiLCJjdXJyZW50RGVsZXRlSXRlbSIsInByb2R1Y3RzU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJzZXRTZWxlY3RlZFR5cGUiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJmaWx0ZXIiLCJwcm9kdWN0IiwidHlwZSIsInNldFJlbW92ZUl0ZW1Qcm9kdWN0IiwiaWQiLCJzZXRSZW1vdmVJdGVtT3JkZXIiLCJvcmRlciIsInNldFNlbGVjdGVkT3JkZXIiLCJzZXRPcmRlcnNXaXRoUHJvZHVjdHMiLCJ1cGRhdGVkT3JkZXJzV2l0aFByb2R1Y3RzIiwibWFwIiwicmVtb3ZlUHJvZHVjdEZyb21PcmRlciIsIm9yZGVySWQiLCJwcm9kdWN0SWQiLCJzZXRJc1Nob3dNb2RhbCIsInNldEl0ZW1Ub0RlbGV0ZSIsInNldFJlbW92ZUN1cnJlbnREZWxldGVJdGVtIiwiZXh0cmFSZWR1Y2VycyIsImJ1aWxkZXIiLCJhZGRDYXNlIiwicGVuZGluZyIsImZ1bGZpbGxlZCIsInJlamVjdGVkIiwibWVzc2FnZSIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/reducer/productsSlice.ts\n"));

/***/ })

});