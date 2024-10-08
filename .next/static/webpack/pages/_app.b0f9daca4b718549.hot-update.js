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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   removeProductFromOrder: function() { return /* binding */ removeProductFromOrder; },\n/* harmony export */   setIsShowModal: function() { return /* binding */ setIsShowModal; },\n/* harmony export */   setItemToDelete: function() { return /* binding */ setItemToDelete; },\n/* harmony export */   setOrdersWithProducts: function() { return /* binding */ setOrdersWithProducts; },\n/* harmony export */   setRemoveCurrentDeleteItem: function() { return /* binding */ setRemoveCurrentDeleteItem; },\n/* harmony export */   setRemoveItemOrder: function() { return /* binding */ setRemoveItemOrder; },\n/* harmony export */   setRemoveItemProduct: function() { return /* binding */ setRemoveItemProduct; },\n/* harmony export */   setSelectedOrder: function() { return /* binding */ setSelectedOrder; },\n/* harmony export */   setSelectedType: function() { return /* binding */ setSelectedType; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_object_spread */ \"./node_modules/@swc/helpers/esm/_object_spread.js\");\n/* harmony import */ var _swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_object_spread_props */ \"./node_modules/@swc/helpers/esm/_object_spread_props.js\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var _thunk_thunk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../thunk/thunk */ \"./src/thunk/thunk.ts\");\n\n\n\n\nvar initialState = {\n    orders: [],\n    products: [],\n    status: \"idle\",\n    error: null,\n    selctedType: \"All\",\n    filteredProducts: [],\n    selectedOrder: null,\n    ordersWithProducts: [],\n    isShowModal: false,\n    itemToDelete: null,\n    currentDeleteItem: null\n};\nvar productsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"products\",\n    initialState: initialState,\n    reducers: {\n        setSelectedType: function(state, action) {\n            state.selctedType = action.payload;\n            state.filteredProducts = state.selctedType === \"All\" ? state.products : state.products.filter(function(product) {\n                return product.type === state.selctedType;\n            });\n        },\n        setRemoveItemProduct: function(state, action) {\n            state.filteredProducts = state.filteredProducts.filter(function(product) {\n                return product.id !== action.payload;\n            });\n            state.currentDeleteItem = null;\n        },\n        setRemoveItemOrder: function(state, action) {\n            state.orders = state.orders.filter(function(order) {\n                return order.id !== action.payload;\n            });\n            state.currentDeleteItem = null;\n        },\n        setSelectedOrder: function(state, action) {\n            state.selectedOrder = action.payload;\n        },\n        setOrdersWithProducts: function(state) {\n            var updatedOrdersWithProducts = state.orders.map(function(order) {\n                return (0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_2__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_3__._)({}, order), {\n                    products: state.products.filter(function(product) {\n                        return product.order === order.id;\n                    })\n                });\n            });\n            state.ordersWithProducts = updatedOrdersWithProducts;\n        },\n        removeProductFromOrder: function(state, action) {\n            var _action_payload = action.payload, orderId = _action_payload.orderId, productId = _action_payload.productId;\n            state.ordersWithProducts = state.ordersWithProducts.map(function(order) {\n                return order.id === orderId ? (0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_2__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_3__._)({}, order), {\n                    products: order.products.filter(function(product) {\n                        return product.id !== productId;\n                    })\n                }) : order;\n            });\n        },\n        setIsShowModal: function(state, action) {\n            state.isShowModal = action.payload;\n        },\n        setItemToDelete: function(state, action) {\n            var itemProduct = state.products.find(function(item) {\n                var _action_payload;\n                return item.id === ((_action_payload = action.payload) === null || _action_payload === void 0 ? void 0 : _action_payload.id);\n            });\n            var itemOrder = state.orders.find(function(item) {\n                var _action_payload;\n                return item.id === ((_action_payload = action.payload) === null || _action_payload === void 0 ? void 0 : _action_payload.id);\n            });\n            state.currentDeleteItem = itemProduct || itemOrder || null;\n        },\n        setRemoveCurrentDeleteItem: function(state, action) {\n            state.currentDeleteItem = action.payload;\n        }\n    },\n    extraReducers: function(builder) {\n        builder.addCase(_thunk_thunk__WEBPACK_IMPORTED_MODULE_0__.fetchProducts.pending, function(state) {\n            state.status = \"loading\";\n        });\n        builder.addCase(_thunk_thunk__WEBPACK_IMPORTED_MODULE_0__.fetchProducts.fulfilled, function(state, action) {\n            state.status = \"success\";\n            state.products = action.payload || [];\n            state.filteredProducts = state.products;\n        });\n        builder.addCase(_thunk_thunk__WEBPACK_IMPORTED_MODULE_0__.fetchProducts.rejected, function(state, action) {\n            var _action_payload;\n            state.status = \"failed\";\n            state.error = ((_action_payload = action.payload) === null || _action_payload === void 0 ? void 0 : _action_payload.message) || \"Failed to fetch\";\n        });\n        builder.addCase(_thunk_thunk__WEBPACK_IMPORTED_MODULE_0__.fetchOrders.pending, function(state) {\n            state.status = \"loading\";\n        });\n        builder.addCase(_thunk_thunk__WEBPACK_IMPORTED_MODULE_0__.fetchOrders.fulfilled, function(state, action) {\n            state.status = \"success\";\n            state.orders = action.payload || [];\n        });\n        builder.addCase(_thunk_thunk__WEBPACK_IMPORTED_MODULE_0__.fetchOrders.rejected, function(state, action) {\n            var _action_payload;\n            state.status = \"failed\";\n            state.error = ((_action_payload = action.payload) === null || _action_payload === void 0 ? void 0 : _action_payload.message) || \"Failed to fetch\";\n        });\n    }\n});\nvar _productsSlice_actions = productsSlice.actions;\nvar setSelectedType = _productsSlice_actions.setSelectedType, setRemoveItemProduct = _productsSlice_actions.setRemoveItemProduct, setRemoveItemOrder = _productsSlice_actions.setRemoveItemOrder, setSelectedOrder = _productsSlice_actions.setSelectedOrder, setOrdersWithProducts = _productsSlice_actions.setOrdersWithProducts, removeProductFromOrder = _productsSlice_actions.removeProductFromOrder, setIsShowModal = _productsSlice_actions.setIsShowModal, setItemToDelete = _productsSlice_actions.setItemToDelete, setRemoveCurrentDeleteItem = _productsSlice_actions.setRemoveCurrentDeleteItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (productsSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxPQUFPLGNBQWRELHNDQUFBQSxnQkFBZ0I2QixPQUFPLEtBQUk7UUFDM0M7SUFDRjtBQUNGO0lBV0lsQyx5QkFBQUEsY0FBY21DLE9BQU87QUFWbEIsSUFDTGhDLGtCQVNFSCx1QkFURkcsaUJBQ0FPLHVCQVFFVix1QkFSRlUsc0JBQ0FFLHFCQU9FWix1QkFQRlksb0JBQ0FFLG1CQU1FZCx1QkFORmMsa0JBQ0FDLHdCQUtFZix1QkFMRmUsdUJBQ0FHLHlCQUlFbEIsdUJBSkZrQix3QkFDQUcsaUJBR0VyQix1QkFIRnFCLGdCQUNBQyxrQkFFRXRCLHVCQUZGc0IsaUJBQ0FLLDZCQUNFM0IsdUJBREYyQiwyQkFDd0I7QUFDMUIsK0RBQWUzQixjQUFjb0MsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9yZWR1Y2VyL3Byb2R1Y3RzU2xpY2UudHM/MGU3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7IElPcmRlcnMsIElQcm9kdWN0cywgU2VsZWN0VHlwZSB9IGZyb20gXCIuL3R5cGVzXCI7XHJcbmltcG9ydCB7IGZldGNoT3JkZXJzLCBmZXRjaFByb2R1Y3RzIH0gZnJvbSBcIi4uL3RodW5rL3RodW5rXCI7XHJcblxyXG5pbnRlcmZhY2UgUHJvZHVjdHNTdGF0ZSB7XHJcbiAgb3JkZXJzOiBJT3JkZXJzW107XHJcbiAgcHJvZHVjdHM6IElQcm9kdWN0c1tdO1xyXG4gIHN0YXR1czogXCJpZGxlXCIgfCBcImxvYWRpbmdcIiB8IFwiZmFpbGVkXCIgfCBcInN1Y2Nlc3NcIjtcclxuICBlcnJvcjogc3RyaW5nIHwgbnVsbDtcclxuICBzZWxjdGVkVHlwZTogU2VsZWN0VHlwZTtcclxuICBmaWx0ZXJlZFByb2R1Y3RzOiBJUHJvZHVjdHNbXTtcclxuICBzZWxlY3RlZE9yZGVyOiBJT3JkZXJzIHwgbnVsbDtcclxuICBvcmRlcnNXaXRoUHJvZHVjdHM6IElPcmRlcnNbXTtcclxuICBpc1Nob3dNb2RhbDogYm9vbGVhbjtcclxuICBpdGVtVG9EZWxldGU6IHsgaWQ6IG51bWJlcjsgdHlwZTogc3RyaW5nIH0gfCBudWxsO1xyXG4gIGN1cnJlbnREZWxldGVJdGVtOiBJUHJvZHVjdHMgfCBJT3JkZXJzIHwgbnVsbDtcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBQcm9kdWN0c1N0YXRlID0ge1xyXG4gIG9yZGVyczogW10sXHJcbiAgcHJvZHVjdHM6IFtdLFxyXG4gIHN0YXR1czogXCJpZGxlXCIsXHJcbiAgZXJyb3I6IG51bGwsXHJcbiAgc2VsY3RlZFR5cGU6IFwiQWxsXCIsXHJcbiAgZmlsdGVyZWRQcm9kdWN0czogW10sXHJcbiAgc2VsZWN0ZWRPcmRlcjogbnVsbCxcclxuICBvcmRlcnNXaXRoUHJvZHVjdHM6IFtdLFxyXG4gIGlzU2hvd01vZGFsOiBmYWxzZSxcclxuICBpdGVtVG9EZWxldGU6IG51bGwsXHJcbiAgY3VycmVudERlbGV0ZUl0ZW06IG51bGwsXHJcbn07XHJcblxyXG5jb25zdCBwcm9kdWN0c1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwicHJvZHVjdHNcIixcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIHNldFNlbGVjdGVkVHlwZTogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nPikgPT4ge1xyXG4gICAgICBzdGF0ZS5zZWxjdGVkVHlwZSA9IGFjdGlvbi5wYXlsb2FkIGFzIFNlbGVjdFR5cGU7XHJcbiAgICAgIHN0YXRlLmZpbHRlcmVkUHJvZHVjdHMgPVxyXG4gICAgICAgIHN0YXRlLnNlbGN0ZWRUeXBlID09PSBcIkFsbFwiXHJcbiAgICAgICAgICA/IHN0YXRlLnByb2R1Y3RzXHJcbiAgICAgICAgICA6IHN0YXRlLnByb2R1Y3RzLmZpbHRlcihcclxuICAgICAgICAgICAgICAocHJvZHVjdCkgPT4gcHJvZHVjdC50eXBlID09PSBzdGF0ZS5zZWxjdGVkVHlwZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfSxcclxuICAgIHNldFJlbW92ZUl0ZW1Qcm9kdWN0OiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxudW1iZXI+KSA9PiB7XHJcbiAgICAgIHN0YXRlLmZpbHRlcmVkUHJvZHVjdHMgPSBzdGF0ZS5maWx0ZXJlZFByb2R1Y3RzLmZpbHRlcihcclxuICAgICAgICAocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCAhPT0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgKTtcclxuICAgICAgc3RhdGUuY3VycmVudERlbGV0ZUl0ZW0gPSBudWxsO1xyXG4gICAgfSxcclxuICAgIHNldFJlbW92ZUl0ZW1PcmRlcjogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248bnVtYmVyPikgPT4ge1xyXG4gICAgICBzdGF0ZS5vcmRlcnMgPSBzdGF0ZS5vcmRlcnMuZmlsdGVyKFxyXG4gICAgICAgIChvcmRlcikgPT4gb3JkZXIuaWQgIT09IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICk7XHJcbiAgICAgIHN0YXRlLmN1cnJlbnREZWxldGVJdGVtID0gbnVsbDtcclxuICAgIH0sXHJcbiAgICBzZXRTZWxlY3RlZE9yZGVyOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxJT3JkZXJzIHwgbnVsbD4pID0+IHtcclxuICAgICAgc3RhdGUuc2VsZWN0ZWRPcmRlciA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfSxcclxuICAgIHNldE9yZGVyc1dpdGhQcm9kdWN0czogKHN0YXRlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHVwZGF0ZWRPcmRlcnNXaXRoUHJvZHVjdHMgPSBzdGF0ZS5vcmRlcnMubWFwKChvcmRlcjogSU9yZGVycykgPT4gKHtcclxuICAgICAgICAuLi5vcmRlcixcclxuICAgICAgICBwcm9kdWN0czogc3RhdGUucHJvZHVjdHMuZmlsdGVyKFxyXG4gICAgICAgICAgKHByb2R1Y3Q6IElQcm9kdWN0cykgPT4gcHJvZHVjdC5vcmRlciA9PT0gb3JkZXIuaWRcclxuICAgICAgICApLFxyXG4gICAgICB9KSk7XHJcbiAgICAgIHN0YXRlLm9yZGVyc1dpdGhQcm9kdWN0cyA9IHVwZGF0ZWRPcmRlcnNXaXRoUHJvZHVjdHM7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlUHJvZHVjdEZyb21PcmRlcihcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7IG9yZGVySWQ6IG51bWJlcjsgcHJvZHVjdElkOiBudW1iZXIgfT5cclxuICAgICkge1xyXG4gICAgICBjb25zdCB7IG9yZGVySWQsIHByb2R1Y3RJZCB9ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgIHN0YXRlLm9yZGVyc1dpdGhQcm9kdWN0cyA9IHN0YXRlLm9yZGVyc1dpdGhQcm9kdWN0cy5tYXAoKG9yZGVyKSA9PlxyXG4gICAgICAgIG9yZGVyLmlkID09PSBvcmRlcklkXHJcbiAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgICAuLi5vcmRlcixcclxuICAgICAgICAgICAgICBwcm9kdWN0czogb3JkZXIucHJvZHVjdHMuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgIT09IHByb2R1Y3RJZFxyXG4gICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDogb3JkZXJcclxuICAgICAgKTtcclxuICAgIH0sXHJcbiAgICBzZXRJc1Nob3dNb2RhbDogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248Ym9vbGVhbj4pID0+IHtcclxuICAgICAgc3RhdGUuaXNTaG93TW9kYWwgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0sXHJcbiAgICBzZXRJdGVtVG9EZWxldGU6IChcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7IGlkOiBudW1iZXI7IHR5cGU6IHN0cmluZyB9IHwgbnVsbD5cclxuICAgICkgPT4ge1xyXG4gICAgICBjb25zdCBpdGVtUHJvZHVjdCA9IHN0YXRlLnByb2R1Y3RzLmZpbmQoXHJcbiAgICAgICAgKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5wYXlsb2FkPy5pZFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBpdGVtT3JkZXIgPSBzdGF0ZS5vcmRlcnMuZmluZChcclxuICAgICAgICAoaXRlbSkgPT4gaXRlbS5pZCA9PT0gYWN0aW9uLnBheWxvYWQ/LmlkXHJcbiAgICAgICk7XHJcbiAgICAgIHN0YXRlLmN1cnJlbnREZWxldGVJdGVtID0gaXRlbVByb2R1Y3QgfHwgaXRlbU9yZGVyIHx8IG51bGw7XHJcbiAgICB9LFxyXG4gICAgc2V0UmVtb3ZlQ3VycmVudERlbGV0ZUl0ZW06IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPG51bGw+KSA9PiB7XHJcbiAgICAgIHN0YXRlLmN1cnJlbnREZWxldGVJdGVtID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+IHtcclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShmZXRjaFByb2R1Y3RzLnBlbmRpbmcsIChzdGF0ZSkgPT4ge1xyXG4gICAgICBzdGF0ZS5zdGF0dXMgPSBcImxvYWRpbmdcIjtcclxuICAgIH0pO1xyXG4gICAgYnVpbGRlci5hZGRDYXNlKGZldGNoUHJvZHVjdHMuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5zdGF0dXMgPSBcInN1Y2Nlc3NcIjtcclxuICAgICAgc3RhdGUucHJvZHVjdHMgPSBhY3Rpb24ucGF5bG9hZCB8fCBbXTtcclxuICAgICAgc3RhdGUuZmlsdGVyZWRQcm9kdWN0cyA9IHN0YXRlLnByb2R1Y3RzO1xyXG4gICAgfSk7XHJcbiAgICBidWlsZGVyLmFkZENhc2UoZmV0Y2hQcm9kdWN0cy5yZWplY3RlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUuc3RhdHVzID0gXCJmYWlsZWRcIjtcclxuICAgICAgc3RhdGUuZXJyb3IgPSBhY3Rpb24ucGF5bG9hZD8ubWVzc2FnZSB8fCBcIkZhaWxlZCB0byBmZXRjaFwiO1xyXG4gICAgfSk7XHJcbiAgICBidWlsZGVyLmFkZENhc2UoZmV0Y2hPcmRlcnMucGVuZGluZywgKHN0YXRlKSA9PiB7XHJcbiAgICAgIHN0YXRlLnN0YXR1cyA9IFwibG9hZGluZ1wiO1xyXG4gICAgfSk7XHJcbiAgICBidWlsZGVyLmFkZENhc2UoZmV0Y2hPcmRlcnMuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5zdGF0dXMgPSBcInN1Y2Nlc3NcIjtcclxuICAgICAgc3RhdGUub3JkZXJzID0gYWN0aW9uLnBheWxvYWQgfHwgW107XHJcbiAgICB9KTtcclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShmZXRjaE9yZGVycy5yZWplY3RlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUuc3RhdHVzID0gXCJmYWlsZWRcIjtcclxuICAgICAgc3RhdGUuZXJyb3IgPSBhY3Rpb24ucGF5bG9hZD8ubWVzc2FnZSB8fCBcIkZhaWxlZCB0byBmZXRjaFwiO1xyXG4gICAgfSk7XHJcbiAgfSxcclxufSk7XHJcbmV4cG9ydCBjb25zdCB7XHJcbiAgc2V0U2VsZWN0ZWRUeXBlLFxyXG4gIHNldFJlbW92ZUl0ZW1Qcm9kdWN0LFxyXG4gIHNldFJlbW92ZUl0ZW1PcmRlcixcclxuICBzZXRTZWxlY3RlZE9yZGVyLFxyXG4gIHNldE9yZGVyc1dpdGhQcm9kdWN0cyxcclxuICByZW1vdmVQcm9kdWN0RnJvbU9yZGVyLFxyXG4gIHNldElzU2hvd01vZGFsLFxyXG4gIHNldEl0ZW1Ub0RlbGV0ZSxcclxuICBzZXRSZW1vdmVDdXJyZW50RGVsZXRlSXRlbSxcclxufSA9IHByb2R1Y3RzU2xpY2UuYWN0aW9ucztcclxuZXhwb3J0IGRlZmF1bHQgcHJvZHVjdHNTbGljZS5yZWR1Y2VyO1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJmZXRjaE9yZGVycyIsImZldGNoUHJvZHVjdHMiLCJpbml0aWFsU3RhdGUiLCJvcmRlcnMiLCJwcm9kdWN0cyIsInN0YXR1cyIsImVycm9yIiwic2VsY3RlZFR5cGUiLCJmaWx0ZXJlZFByb2R1Y3RzIiwic2VsZWN0ZWRPcmRlciIsIm9yZGVyc1dpdGhQcm9kdWN0cyIsImlzU2hvd01vZGFsIiwiaXRlbVRvRGVsZXRlIiwiY3VycmVudERlbGV0ZUl0ZW0iLCJwcm9kdWN0c1NsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwic2V0U2VsZWN0ZWRUeXBlIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiZmlsdGVyIiwicHJvZHVjdCIsInR5cGUiLCJzZXRSZW1vdmVJdGVtUHJvZHVjdCIsImlkIiwic2V0UmVtb3ZlSXRlbU9yZGVyIiwib3JkZXIiLCJzZXRTZWxlY3RlZE9yZGVyIiwic2V0T3JkZXJzV2l0aFByb2R1Y3RzIiwidXBkYXRlZE9yZGVyc1dpdGhQcm9kdWN0cyIsIm1hcCIsInJlbW92ZVByb2R1Y3RGcm9tT3JkZXIiLCJvcmRlcklkIiwicHJvZHVjdElkIiwic2V0SXNTaG93TW9kYWwiLCJzZXRJdGVtVG9EZWxldGUiLCJpdGVtUHJvZHVjdCIsImZpbmQiLCJpdGVtIiwiaXRlbU9yZGVyIiwic2V0UmVtb3ZlQ3VycmVudERlbGV0ZUl0ZW0iLCJleHRyYVJlZHVjZXJzIiwiYnVpbGRlciIsImFkZENhc2UiLCJwZW5kaW5nIiwiZnVsZmlsbGVkIiwicmVqZWN0ZWQiLCJtZXNzYWdlIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/reducer/productsSlice.ts\n"));

/***/ })

});