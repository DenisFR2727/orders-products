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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   removeProductFromOrder: function() { return /* binding */ removeProductFromOrder; },\n/* harmony export */   setIsShowModal: function() { return /* binding */ setIsShowModal; },\n/* harmony export */   setItemToDelete: function() { return /* binding */ setItemToDelete; },\n/* harmony export */   setOrdersWithProducts: function() { return /* binding */ setOrdersWithProducts; },\n/* harmony export */   setRemoveCurrentDeleteItem: function() { return /* binding */ setRemoveCurrentDeleteItem; },\n/* harmony export */   setRemoveItemOrder: function() { return /* binding */ setRemoveItemOrder; },\n/* harmony export */   setRemoveItemProduct: function() { return /* binding */ setRemoveItemProduct; },\n/* harmony export */   setSelectedOrder: function() { return /* binding */ setSelectedOrder; },\n/* harmony export */   setSelectedType: function() { return /* binding */ setSelectedType; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_object_spread */ \"./node_modules/@swc/helpers/esm/_object_spread.js\");\n/* harmony import */ var _swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_object_spread_props */ \"./node_modules/@swc/helpers/esm/_object_spread_props.js\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var _thunk_thunk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../thunk/thunk */ \"./src/thunk/thunk.ts\");\n\n\n\n\nvar initialState = {\n    orders: [],\n    products: [],\n    status: \"idle\",\n    error: null,\n    selctedType: \"All\",\n    filteredProducts: [],\n    selectedOrder: null,\n    ordersWithProducts: [],\n    isShowModal: false,\n    itemToDelete: null,\n    currentDeleteItem: null\n};\nvar productsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"products\",\n    initialState: initialState,\n    reducers: {\n        setSelectedType: function(state, action) {\n            state.selctedType = action.payload;\n            state.filteredProducts = state.selctedType === \"All\" ? state.products : state.products.filter(function(product) {\n                return product.type === state.selctedType;\n            });\n        },\n        setRemoveItemProduct: function(state, action) {\n            state.filteredProducts = state.filteredProducts.filter(function(product) {\n                return product.id !== action.payload;\n            });\n            state.currentDeleteItem = null;\n        },\n        setRemoveItemOrder: function(state, action) {\n            var _state_itemToDelete;\n            state.orders = state.orders.filter(function(order) {\n                return order.id !== action.payload;\n            });\n            if (((_state_itemToDelete = state.itemToDelete) === null || _state_itemToDelete === void 0 ? void 0 : _state_itemToDelete.type) === \"or\") state.currentDeleteItem = null;\n        },\n        setSelectedOrder: function(state, action) {\n            state.selectedOrder = action.payload;\n        },\n        setOrdersWithProducts: function(state) {\n            var updatedOrdersWithProducts = state.orders.map(function(order) {\n                return (0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_2__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_3__._)({}, order), {\n                    products: state.products.filter(function(product) {\n                        return product.order === order.id;\n                    })\n                });\n            });\n            state.ordersWithProducts = updatedOrdersWithProducts;\n        },\n        removeProductFromOrder: function(state, action) {\n            var _action_payload = action.payload, orderId = _action_payload.orderId, productId = _action_payload.productId;\n            state.ordersWithProducts = state.ordersWithProducts.map(function(order) {\n                return order.id === orderId ? (0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_2__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_3__._)({}, order), {\n                    products: order.products.filter(function(product) {\n                        return product.id !== productId;\n                    })\n                }) : order;\n            });\n        },\n        setIsShowModal: function(state, action) {\n            state.isShowModal = action.payload;\n        },\n        setItemToDelete: function(state, action) {\n            var _state_itemToDelete, _action_payload;\n            var prevItemType = (_state_itemToDelete = state.itemToDelete) === null || _state_itemToDelete === void 0 ? void 0 : _state_itemToDelete.type;\n            // Якщо видаляється новий елемент\n            if (action.payload) {\n                var _action_payload1 = action.payload, id = _action_payload1.id, type = _action_payload1.type;\n                // Оновлення itemToDelete\n                state.itemToDelete = action.payload;\n                var findItemDeleteProduct = state.products.find(function(item) {\n                    return item.id === id // Змініть на item.id для коректної перевірки\n                    ;\n                });\n                var findItemDeleteOrder = state.orders.find(function(item) {\n                    return item.id === id;\n                });\n                if (findItemDeleteProduct) {\n                    state.currentDeleteItem = findItemDeleteProduct; // Встановлюємо поточний продукт\n                } else if (findItemDeleteOrder) {\n                    state.currentDeleteItem = findItemDeleteOrder; // Встановлюємо поточний ордер\n                }\n            } else {\n                // Якщо action.payload є null, то скидаємо стан\n                state.itemToDelete = null;\n                state.currentDeleteItem = null;\n            }\n            // Скидання currentDeleteItem, якщо тип змінився\n            if (prevItemType && prevItemType !== ((_action_payload = action.payload) === null || _action_payload === void 0 ? void 0 : _action_payload.type)) {\n                state.currentDeleteItem = null;\n            }\n        },\n        setRemoveCurrentDeleteItem: function(state, action) {\n            state.currentDeleteItem = action.payload;\n        }\n    },\n    extraReducers: function(builder) {\n        builder.addCase(_thunk_thunk__WEBPACK_IMPORTED_MODULE_0__.fetchProducts.pending, function(state) {\n            state.status = \"loading\";\n        });\n        builder.addCase(_thunk_thunk__WEBPACK_IMPORTED_MODULE_0__.fetchProducts.fulfilled, function(state, action) {\n            state.status = \"success\";\n            state.products = action.payload || [];\n            state.filteredProducts = state.products;\n        });\n        builder.addCase(_thunk_thunk__WEBPACK_IMPORTED_MODULE_0__.fetchProducts.rejected, function(state, action) {\n            var _action_payload;\n            state.status = \"failed\";\n            state.error = ((_action_payload = action.payload) === null || _action_payload === void 0 ? void 0 : _action_payload.message) || \"Failed to fetch\";\n        });\n        builder.addCase(_thunk_thunk__WEBPACK_IMPORTED_MODULE_0__.fetchOrders.pending, function(state) {\n            state.status = \"loading\";\n        });\n        builder.addCase(_thunk_thunk__WEBPACK_IMPORTED_MODULE_0__.fetchOrders.fulfilled, function(state, action) {\n            state.status = \"success\";\n            state.orders = action.payload || [];\n        });\n        builder.addCase(_thunk_thunk__WEBPACK_IMPORTED_MODULE_0__.fetchOrders.rejected, function(state, action) {\n            var _action_payload;\n            state.status = \"failed\";\n            state.error = ((_action_payload = action.payload) === null || _action_payload === void 0 ? void 0 : _action_payload.message) || \"Failed to fetch\";\n        });\n    }\n});\nvar _productsSlice_actions = productsSlice.actions;\nvar setSelectedType = _productsSlice_actions.setSelectedType, setRemoveItemProduct = _productsSlice_actions.setRemoveItemProduct, setRemoveItemOrder = _productsSlice_actions.setRemoveItemOrder, setSelectedOrder = _productsSlice_actions.setSelectedOrder, setOrdersWithProducts = _productsSlice_actions.setOrdersWithProducts, removeProductFromOrder = _productsSlice_actions.removeProductFromOrder, setIsShowModal = _productsSlice_actions.setIsShowModal, setItemToDelete = _productsSlice_actions.setItemToDelete, setRemoveCurrentDeleteItem = _productsSlice_actions.setRemoveCurrentDeleteItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (productsSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cm9kdWN0c1NsaWNlLnRzPzBlN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgeyBJT3JkZXJzLCBJUHJvZHVjdHMsIFNlbGVjdFR5cGUgfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5pbXBvcnQgeyBmZXRjaE9yZGVycywgZmV0Y2hQcm9kdWN0cyB9IGZyb20gXCIuLi90aHVuay90aHVua1wiO1xyXG5cclxuaW50ZXJmYWNlIFByb2R1Y3RzU3RhdGUge1xyXG4gIG9yZGVyczogSU9yZGVyc1tdO1xyXG4gIHByb2R1Y3RzOiBJUHJvZHVjdHNbXTtcclxuICBzdGF0dXM6IFwiaWRsZVwiIHwgXCJsb2FkaW5nXCIgfCBcImZhaWxlZFwiIHwgXCJzdWNjZXNzXCI7XHJcbiAgZXJyb3I6IHN0cmluZyB8IG51bGw7XHJcbiAgc2VsY3RlZFR5cGU6IFNlbGVjdFR5cGU7XHJcbiAgZmlsdGVyZWRQcm9kdWN0czogSVByb2R1Y3RzW107XHJcbiAgc2VsZWN0ZWRPcmRlcjogSU9yZGVycyB8IG51bGw7XHJcbiAgb3JkZXJzV2l0aFByb2R1Y3RzOiBJT3JkZXJzW107XHJcbiAgaXNTaG93TW9kYWw6IGJvb2xlYW47XHJcbiAgaXRlbVRvRGVsZXRlOiB7IGlkOiBudW1iZXI7IHR5cGU6IHN0cmluZyB9IHwgbnVsbDtcclxuICBjdXJyZW50RGVsZXRlSXRlbTogSVByb2R1Y3RzIHwgSU9yZGVycyB8IG51bGw7XHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogUHJvZHVjdHNTdGF0ZSA9IHtcclxuICBvcmRlcnM6IFtdLFxyXG4gIHByb2R1Y3RzOiBbXSxcclxuICBzdGF0dXM6IFwiaWRsZVwiLFxyXG4gIGVycm9yOiBudWxsLFxyXG4gIHNlbGN0ZWRUeXBlOiBcIkFsbFwiLFxyXG4gIGZpbHRlcmVkUHJvZHVjdHM6IFtdLFxyXG4gIHNlbGVjdGVkT3JkZXI6IG51bGwsXHJcbiAgb3JkZXJzV2l0aFByb2R1Y3RzOiBbXSxcclxuICBpc1Nob3dNb2RhbDogZmFsc2UsXHJcbiAgaXRlbVRvRGVsZXRlOiBudWxsLFxyXG4gIGN1cnJlbnREZWxldGVJdGVtOiBudWxsLFxyXG59O1xyXG5cclxuY29uc3QgcHJvZHVjdHNTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiBcInByb2R1Y3RzXCIsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBzZXRTZWxlY3RlZFR5cGU6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZz4pID0+IHtcclxuICAgICAgc3RhdGUuc2VsY3RlZFR5cGUgPSBhY3Rpb24ucGF5bG9hZCBhcyBTZWxlY3RUeXBlO1xyXG4gICAgICBzdGF0ZS5maWx0ZXJlZFByb2R1Y3RzID1cclxuICAgICAgICBzdGF0ZS5zZWxjdGVkVHlwZSA9PT0gXCJBbGxcIlxyXG4gICAgICAgICAgPyBzdGF0ZS5wcm9kdWN0c1xyXG4gICAgICAgICAgOiBzdGF0ZS5wcm9kdWN0cy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgKHByb2R1Y3QpID0+IHByb2R1Y3QudHlwZSA9PT0gc3RhdGUuc2VsY3RlZFR5cGVcclxuICAgICAgICAgICAgKTtcclxuICAgIH0sXHJcbiAgICBzZXRSZW1vdmVJdGVtUHJvZHVjdDogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248bnVtYmVyPikgPT4ge1xyXG4gICAgICBzdGF0ZS5maWx0ZXJlZFByb2R1Y3RzID0gc3RhdGUuZmlsdGVyZWRQcm9kdWN0cy5maWx0ZXIoXHJcbiAgICAgICAgKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgIT09IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICk7XHJcbiAgICAgIHN0YXRlLmN1cnJlbnREZWxldGVJdGVtID0gbnVsbDtcclxuICAgIH0sXHJcbiAgICBzZXRSZW1vdmVJdGVtT3JkZXI6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPG51bWJlcj4pID0+IHtcclxuICAgICAgc3RhdGUub3JkZXJzID0gc3RhdGUub3JkZXJzLmZpbHRlcihcclxuICAgICAgICAob3JkZXIpID0+IG9yZGVyLmlkICE9PSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICApO1xyXG4gICAgICBpZihzdGF0ZS5pdGVtVG9EZWxldGU/LnR5cGUgPT09IFwib3JcIilcclxuICAgICAgc3RhdGUuY3VycmVudERlbGV0ZUl0ZW0gPSBudWxsO1xyXG4gICAgfSxcclxuICAgIHNldFNlbGVjdGVkT3JkZXI6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPElPcmRlcnMgfCBudWxsPikgPT4ge1xyXG4gICAgICBzdGF0ZS5zZWxlY3RlZE9yZGVyID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gICAgc2V0T3JkZXJzV2l0aFByb2R1Y3RzOiAoc3RhdGUpID0+IHtcclxuICAgICAgY29uc3QgdXBkYXRlZE9yZGVyc1dpdGhQcm9kdWN0cyA9IHN0YXRlLm9yZGVycy5tYXAoKG9yZGVyOiBJT3JkZXJzKSA9PiAoe1xyXG4gICAgICAgIC4uLm9yZGVyLFxyXG4gICAgICAgIHByb2R1Y3RzOiBzdGF0ZS5wcm9kdWN0cy5maWx0ZXIoXHJcbiAgICAgICAgICAocHJvZHVjdDogSVByb2R1Y3RzKSA9PiBwcm9kdWN0Lm9yZGVyID09PSBvcmRlci5pZFxyXG4gICAgICAgICksXHJcbiAgICAgIH0pKTtcclxuICAgICAgc3RhdGUub3JkZXJzV2l0aFByb2R1Y3RzID0gdXBkYXRlZE9yZGVyc1dpdGhQcm9kdWN0cztcclxuICAgIH0sXHJcbiAgICByZW1vdmVQcm9kdWN0RnJvbU9yZGVyKFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHsgb3JkZXJJZDogbnVtYmVyOyBwcm9kdWN0SWQ6IG51bWJlciB9PlxyXG4gICAgKSB7XHJcbiAgICAgIGNvbnN0IHsgb3JkZXJJZCwgcHJvZHVjdElkIH0gPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgc3RhdGUub3JkZXJzV2l0aFByb2R1Y3RzID0gc3RhdGUub3JkZXJzV2l0aFByb2R1Y3RzLm1hcCgob3JkZXIpID0+XHJcbiAgICAgICAgb3JkZXIuaWQgPT09IG9yZGVySWRcclxuICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgIC4uLm9yZGVyLFxyXG4gICAgICAgICAgICAgIHByb2R1Y3RzOiBvcmRlci5wcm9kdWN0cy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCAhPT0gcHJvZHVjdElkXHJcbiAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgOiBvcmRlclxyXG4gICAgICApO1xyXG4gICAgfSxcclxuICAgIHNldElzU2hvd01vZGFsOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxib29sZWFuPikgPT4ge1xyXG4gICAgICBzdGF0ZS5pc1Nob3dNb2RhbCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfSxcclxuICAgIHNldEl0ZW1Ub0RlbGV0ZTogKFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHsgaWQ6IG51bWJlcjsgdHlwZTogc3RyaW5nIH0gfCBudWxsPlxyXG4gICAgKSA9PiB7XHJcbiAgICAgIGNvbnN0IHByZXZJdGVtVHlwZSA9IHN0YXRlLml0ZW1Ub0RlbGV0ZT8udHlwZTtcclxuICAgICAgLy8g0K/QutGJ0L4g0LLQuNC00LDQu9GP0ZTRgtGM0YHRjyDQvdC+0LLQuNC5INC10LvQtdC80LXQvdGCXHJcbiAgICAgIGlmIChhY3Rpb24ucGF5bG9hZCkge1xyXG4gICAgICAgIGNvbnN0IHsgaWQsIHR5cGUgfSA9IGFjdGlvbi5wYXlsb2FkO1xyXG5cclxuICAgICAgICAvLyDQntC90L7QstC70LXQvdC90Y8gaXRlbVRvRGVsZXRlXHJcbiAgICAgICAgc3RhdGUuaXRlbVRvRGVsZXRlID0gYWN0aW9uLnBheWxvYWQ7XHJcblxyXG4gICAgICAgIGNvbnN0IGZpbmRJdGVtRGVsZXRlUHJvZHVjdCA9IHN0YXRlLnByb2R1Y3RzLmZpbmQoXHJcbiAgICAgICAgICAoaXRlbSkgPT4gaXRlbS5pZCA9PT0gaWQgLy8g0JfQvNGW0L3RltGC0Ywg0L3QsCBpdGVtLmlkINC00LvRjyDQutC+0YDQtdC60YLQvdC+0Zcg0L/QtdGA0LXQstGW0YDQutC4XHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBmaW5kSXRlbURlbGV0ZU9yZGVyID0gc3RhdGUub3JkZXJzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGlkKTtcclxuXHJcbiAgICAgICAgaWYgKGZpbmRJdGVtRGVsZXRlUHJvZHVjdCkge1xyXG4gICAgICAgICAgc3RhdGUuY3VycmVudERlbGV0ZUl0ZW0gPSBmaW5kSXRlbURlbGV0ZVByb2R1Y3Q7IC8vINCS0YHRgtCw0L3QvtCy0LvRjtGU0LzQviDQv9C+0YLQvtGH0L3QuNC5INC/0YDQvtC00YPQutGCXHJcbiAgICAgICAgfSBlbHNlIGlmIChmaW5kSXRlbURlbGV0ZU9yZGVyKSB7XHJcbiAgICAgICAgICBzdGF0ZS5jdXJyZW50RGVsZXRlSXRlbSA9IGZpbmRJdGVtRGVsZXRlT3JkZXI7IC8vINCS0YHRgtCw0L3QvtCy0LvRjtGU0LzQviDQv9C+0YLQvtGH0L3QuNC5INC+0YDQtNC10YBcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8g0K/QutGJ0L4gYWN0aW9uLnBheWxvYWQg0ZQgbnVsbCwg0YLQviDRgdC60LjQtNCw0ZTQvNC+INGB0YLQsNC9XHJcbiAgICAgICAgc3RhdGUuaXRlbVRvRGVsZXRlID0gbnVsbDtcclxuICAgICAgICBzdGF0ZS5jdXJyZW50RGVsZXRlSXRlbSA9IG51bGw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vINCh0LrQuNC00LDQvdC90Y8gY3VycmVudERlbGV0ZUl0ZW0sINGP0LrRidC+INGC0LjQvyDQt9C80ZbQvdC40LLRgdGPXHJcbiAgICAgIGlmIChwcmV2SXRlbVR5cGUgJiYgcHJldkl0ZW1UeXBlICE9PSBhY3Rpb24ucGF5bG9hZD8udHlwZSkge1xyXG4gICAgICAgIHN0YXRlLmN1cnJlbnREZWxldGVJdGVtID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNldFJlbW92ZUN1cnJlbnREZWxldGVJdGVtOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxudWxsPikgPT4ge1xyXG4gICAgICBzdGF0ZS5jdXJyZW50RGVsZXRlSXRlbSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfSxcclxuICB9LFxyXG4gIGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PiB7XHJcbiAgICBidWlsZGVyLmFkZENhc2UoZmV0Y2hQcm9kdWN0cy5wZW5kaW5nLCAoc3RhdGUpID0+IHtcclxuICAgICAgc3RhdGUuc3RhdHVzID0gXCJsb2FkaW5nXCI7XHJcbiAgICB9KTtcclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShmZXRjaFByb2R1Y3RzLmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUuc3RhdHVzID0gXCJzdWNjZXNzXCI7XHJcbiAgICAgIHN0YXRlLnByb2R1Y3RzID0gYWN0aW9uLnBheWxvYWQgfHwgW107XHJcbiAgICAgIHN0YXRlLmZpbHRlcmVkUHJvZHVjdHMgPSBzdGF0ZS5wcm9kdWN0cztcclxuICAgIH0pO1xyXG4gICAgYnVpbGRlci5hZGRDYXNlKGZldGNoUHJvZHVjdHMucmVqZWN0ZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLnN0YXR1cyA9IFwiZmFpbGVkXCI7XHJcbiAgICAgIHN0YXRlLmVycm9yID0gYWN0aW9uLnBheWxvYWQ/Lm1lc3NhZ2UgfHwgXCJGYWlsZWQgdG8gZmV0Y2hcIjtcclxuICAgIH0pO1xyXG4gICAgYnVpbGRlci5hZGRDYXNlKGZldGNoT3JkZXJzLnBlbmRpbmcsIChzdGF0ZSkgPT4ge1xyXG4gICAgICBzdGF0ZS5zdGF0dXMgPSBcImxvYWRpbmdcIjtcclxuICAgIH0pO1xyXG4gICAgYnVpbGRlci5hZGRDYXNlKGZldGNoT3JkZXJzLmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUuc3RhdHVzID0gXCJzdWNjZXNzXCI7XHJcbiAgICAgIHN0YXRlLm9yZGVycyA9IGFjdGlvbi5wYXlsb2FkIHx8IFtdO1xyXG4gICAgfSk7XHJcbiAgICBidWlsZGVyLmFkZENhc2UoZmV0Y2hPcmRlcnMucmVqZWN0ZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLnN0YXR1cyA9IFwiZmFpbGVkXCI7XHJcbiAgICAgIHN0YXRlLmVycm9yID0gYWN0aW9uLnBheWxvYWQ/Lm1lc3NhZ2UgfHwgXCJGYWlsZWQgdG8gZmV0Y2hcIjtcclxuICAgIH0pO1xyXG4gIH0sXHJcbn0pO1xyXG5leHBvcnQgY29uc3Qge1xyXG4gIHNldFNlbGVjdGVkVHlwZSxcclxuICBzZXRSZW1vdmVJdGVtUHJvZHVjdCxcclxuICBzZXRSZW1vdmVJdGVtT3JkZXIsXHJcbiAgc2V0U2VsZWN0ZWRPcmRlcixcclxuICBzZXRPcmRlcnNXaXRoUHJvZHVjdHMsXHJcbiAgcmVtb3ZlUHJvZHVjdEZyb21PcmRlcixcclxuICBzZXRJc1Nob3dNb2RhbCxcclxuICBzZXRJdGVtVG9EZWxldGUsXHJcbiAgc2V0UmVtb3ZlQ3VycmVudERlbGV0ZUl0ZW0sXHJcbn0gPSBwcm9kdWN0c1NsaWNlLmFjdGlvbnM7XHJcbmV4cG9ydCBkZWZhdWx0IHByb2R1Y3RzU2xpY2UucmVkdWNlcjtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiZmV0Y2hPcmRlcnMiLCJmZXRjaFByb2R1Y3RzIiwiaW5pdGlhbFN0YXRlIiwib3JkZXJzIiwicHJvZHVjdHMiLCJzdGF0dXMiLCJlcnJvciIsInNlbGN0ZWRUeXBlIiwiZmlsdGVyZWRQcm9kdWN0cyIsInNlbGVjdGVkT3JkZXIiLCJvcmRlcnNXaXRoUHJvZHVjdHMiLCJpc1Nob3dNb2RhbCIsIml0ZW1Ub0RlbGV0ZSIsImN1cnJlbnREZWxldGVJdGVtIiwicHJvZHVjdHNTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsInNldFNlbGVjdGVkVHlwZSIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsImZpbHRlciIsInByb2R1Y3QiLCJ0eXBlIiwic2V0UmVtb3ZlSXRlbVByb2R1Y3QiLCJpZCIsInNldFJlbW92ZUl0ZW1PcmRlciIsIm9yZGVyIiwic2V0U2VsZWN0ZWRPcmRlciIsInNldE9yZGVyc1dpdGhQcm9kdWN0cyIsInVwZGF0ZWRPcmRlcnNXaXRoUHJvZHVjdHMiLCJtYXAiLCJyZW1vdmVQcm9kdWN0RnJvbU9yZGVyIiwib3JkZXJJZCIsInByb2R1Y3RJZCIsInNldElzU2hvd01vZGFsIiwic2V0SXRlbVRvRGVsZXRlIiwicHJldkl0ZW1UeXBlIiwiZmluZEl0ZW1EZWxldGVQcm9kdWN0IiwiZmluZCIsIml0ZW0iLCJmaW5kSXRlbURlbGV0ZU9yZGVyIiwic2V0UmVtb3ZlQ3VycmVudERlbGV0ZUl0ZW0iLCJleHRyYVJlZHVjZXJzIiwiYnVpbGRlciIsImFkZENhc2UiLCJwZW5kaW5nIiwiZnVsZmlsbGVkIiwicmVqZWN0ZWQiLCJtZXNzYWdlIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/reducer/productsSlice.ts\n"));

/***/ })

});