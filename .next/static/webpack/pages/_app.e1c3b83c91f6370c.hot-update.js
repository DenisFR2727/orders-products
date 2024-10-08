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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   removeProductFromOrder: function() { return /* binding */ removeProductFromOrder; },\n/* harmony export */   setIsShowModal: function() { return /* binding */ setIsShowModal; },\n/* harmony export */   setItemToDelete: function() { return /* binding */ setItemToDelete; },\n/* harmony export */   setOrdersWithProducts: function() { return /* binding */ setOrdersWithProducts; },\n/* harmony export */   setRemoveCurrentDeleteItem: function() { return /* binding */ setRemoveCurrentDeleteItem; },\n/* harmony export */   setRemoveItemOrder: function() { return /* binding */ setRemoveItemOrder; },\n/* harmony export */   setRemoveItemProduct: function() { return /* binding */ setRemoveItemProduct; },\n/* harmony export */   setSelectedOrder: function() { return /* binding */ setSelectedOrder; },\n/* harmony export */   setSelectedType: function() { return /* binding */ setSelectedType; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_object_spread */ \"./node_modules/@swc/helpers/esm/_object_spread.js\");\n/* harmony import */ var _swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_object_spread_props */ \"./node_modules/@swc/helpers/esm/_object_spread_props.js\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var _thunk_thunk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../thunk/thunk */ \"./src/thunk/thunk.ts\");\n\n\n\n\nvar initialState = {\n    orders: [],\n    products: [],\n    status: \"idle\",\n    error: null,\n    selctedType: \"All\",\n    filteredProducts: [],\n    selectedOrder: null,\n    ordersWithProducts: [],\n    isShowModal: false,\n    itemToDelete: null,\n    currentDeleteItem: null\n};\nvar productsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"products\",\n    initialState: initialState,\n    reducers: {\n        setSelectedType: function(state, action) {\n            state.selctedType = action.payload;\n            state.filteredProducts = state.selctedType === \"All\" ? state.products : state.products.filter(function(product) {\n                return product.type === state.selctedType;\n            });\n        },\n        setRemoveItemProduct: function(state, action) {\n            state.filteredProducts = state.filteredProducts.filter(function(product) {\n                return product.id !== action.payload;\n            });\n            state.currentDeleteItem = null;\n        },\n        setRemoveItemOrder: function(state, action) {\n            state.orders = state.orders.filter(function(order) {\n                return order.id !== action.payload;\n            });\n            // if (state.itemToDelete?.type === \"order\") {\n            //   state.ordersWithProducts = state.ordersWithProducts.filter(\n            //     (order) => order.id !== action.payload\n            //   );\n            // }\n            state.currentDeleteItem = null;\n        },\n        setSelectedOrder: function(state, action) {\n            state.selectedOrder = action.payload;\n        },\n        setOrdersWithProducts: function(state) {\n            var updatedOrdersWithProducts = state.orders.map(function(order) {\n                return (0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_2__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_3__._)({}, order), {\n                    products: state.products.filter(function(product) {\n                        return product.order === order.id;\n                    })\n                });\n            });\n            state.ordersWithProducts = updatedOrdersWithProducts;\n        },\n        removeProductFromOrder: function(state, action) {\n            var _action_payload = action.payload, orderId = _action_payload.orderId, productId = _action_payload.productId;\n            state.ordersWithProducts = state.ordersWithProducts.map(function(order) {\n                return order.id === orderId ? (0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_2__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_3__._)({}, order), {\n                    products: order.products.filter(function(product) {\n                        return product.id !== productId;\n                    })\n                }) : order;\n            });\n        },\n        setIsShowModal: function(state, action) {\n            state.isShowModal = action.payload;\n        },\n        setItemToDelete: function(state, action) {\n            var _state_itemToDelete, _action_payload;\n            var prevItemType = (_state_itemToDelete = state.itemToDelete) === null || _state_itemToDelete === void 0 ? void 0 : _state_itemToDelete.type;\n            // Якщо видаляється новий елемент\n            if (action.payload) {\n                var _action_payload1 = action.payload, id = _action_payload1.id, type = _action_payload1.type;\n                // Оновлення itemToDelete\n                state.itemToDelete = action.payload;\n                var findItemDeleteProduct = state.products.find(function(item) {\n                    return item.id === id // Змініть на item.id для коректної перевірки\n                    ;\n                });\n                var findItemDeleteOrder = state.orders.find(function(item) {\n                    return item.id === id;\n                });\n                if (findItemDeleteProduct) {\n                    state.currentDeleteItem = findItemDeleteProduct; // Встановлюємо поточний продукт\n                } else if (findItemDeleteOrder) {\n                    state.currentDeleteItem = findItemDeleteOrder; // Встановлюємо поточний ордер\n                }\n            } else {\n                // Якщо action.payload є null, то скидаємо стан\n                state.itemToDelete = null;\n                state.currentDeleteItem = null;\n            }\n            // Скидання currentDeleteItem, якщо тип змінився\n            if (prevItemType && prevItemType !== ((_action_payload = action.payload) === null || _action_payload === void 0 ? void 0 : _action_payload.type)) {\n                state.currentDeleteItem = null;\n            }\n        },\n        setRemoveCurrentDeleteItem: function(state, action) {\n            state.currentDeleteItem = action.payload;\n        }\n    },\n    extraReducers: function(builder) {\n        builder.addCase(_thunk_thunk__WEBPACK_IMPORTED_MODULE_0__.fetchProducts.pending, function(state) {\n            state.status = \"loading\";\n        });\n        builder.addCase(_thunk_thunk__WEBPACK_IMPORTED_MODULE_0__.fetchProducts.fulfilled, function(state, action) {\n            state.status = \"success\";\n            state.products = action.payload || [];\n            state.filteredProducts = state.products;\n        });\n        builder.addCase(_thunk_thunk__WEBPACK_IMPORTED_MODULE_0__.fetchProducts.rejected, function(state, action) {\n            var _action_payload;\n            state.status = \"failed\";\n            state.error = ((_action_payload = action.payload) === null || _action_payload === void 0 ? void 0 : _action_payload.message) || \"Failed to fetch\";\n        });\n        builder.addCase(_thunk_thunk__WEBPACK_IMPORTED_MODULE_0__.fetchOrders.pending, function(state) {\n            state.status = \"loading\";\n        });\n        builder.addCase(_thunk_thunk__WEBPACK_IMPORTED_MODULE_0__.fetchOrders.fulfilled, function(state, action) {\n            state.status = \"success\";\n            state.orders = action.payload || [];\n        });\n        builder.addCase(_thunk_thunk__WEBPACK_IMPORTED_MODULE_0__.fetchOrders.rejected, function(state, action) {\n            var _action_payload;\n            state.status = \"failed\";\n            state.error = ((_action_payload = action.payload) === null || _action_payload === void 0 ? void 0 : _action_payload.message) || \"Failed to fetch\";\n        });\n    }\n});\nvar _productsSlice_actions = productsSlice.actions;\nvar setSelectedType = _productsSlice_actions.setSelectedType, setRemoveItemProduct = _productsSlice_actions.setRemoveItemProduct, setRemoveItemOrder = _productsSlice_actions.setRemoveItemOrder, setSelectedOrder = _productsSlice_actions.setSelectedOrder, setOrdersWithProducts = _productsSlice_actions.setOrdersWithProducts, removeProductFromOrder = _productsSlice_actions.removeProductFromOrder, setIsShowModal = _productsSlice_actions.setIsShowModal, setItemToDelete = _productsSlice_actions.setItemToDelete, setRemoveCurrentDeleteItem = _productsSlice_actions.setRemoveCurrentDeleteItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (productsSlice.reducer); //  const itemProduct = state.products.find(\n //    (item) => item.id === action.payload?.id\n //  );\n //  const itemOrder = state.orders.find((item) => item.id === action.payload?.id);\n //  if (action.payload?.type === \"product\") {\n //    state.currentDeleteItem = itemProduct || null;\n //  } else if (action.payload?.type === \"order\") {\n //    state.currentDeleteItem = itemOrder || null;\n //  }\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NkM7Q0FDN0Msb0RBQW9EO0NBQ3BELGtEQUFrRDtDQUNsRCxrREFBa0Q7Q0FDbEQsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcmVkdWNlci9wcm9kdWN0c1NsaWNlLnRzPzBlN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgeyBJT3JkZXJzLCBJUHJvZHVjdHMsIFNlbGVjdFR5cGUgfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5pbXBvcnQgeyBmZXRjaE9yZGVycywgZmV0Y2hQcm9kdWN0cyB9IGZyb20gXCIuLi90aHVuay90aHVua1wiO1xyXG5cclxuaW50ZXJmYWNlIFByb2R1Y3RzU3RhdGUge1xyXG4gIG9yZGVyczogSU9yZGVyc1tdO1xyXG4gIHByb2R1Y3RzOiBJUHJvZHVjdHNbXTtcclxuICBzdGF0dXM6IFwiaWRsZVwiIHwgXCJsb2FkaW5nXCIgfCBcImZhaWxlZFwiIHwgXCJzdWNjZXNzXCI7XHJcbiAgZXJyb3I6IHN0cmluZyB8IG51bGw7XHJcbiAgc2VsY3RlZFR5cGU6IFNlbGVjdFR5cGU7XHJcbiAgZmlsdGVyZWRQcm9kdWN0czogSVByb2R1Y3RzW107XHJcbiAgc2VsZWN0ZWRPcmRlcjogSU9yZGVycyB8IG51bGw7XHJcbiAgb3JkZXJzV2l0aFByb2R1Y3RzOiBJT3JkZXJzW107XHJcbiAgaXNTaG93TW9kYWw6IGJvb2xlYW47XHJcbiAgaXRlbVRvRGVsZXRlOiB7IGlkOiBudW1iZXI7IHR5cGU6IHN0cmluZyB9IHwgbnVsbDtcclxuICBjdXJyZW50RGVsZXRlSXRlbTogSVByb2R1Y3RzIHwgSU9yZGVycyB8IG51bGw7XHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogUHJvZHVjdHNTdGF0ZSA9IHtcclxuICBvcmRlcnM6IFtdLFxyXG4gIHByb2R1Y3RzOiBbXSxcclxuICBzdGF0dXM6IFwiaWRsZVwiLFxyXG4gIGVycm9yOiBudWxsLFxyXG4gIHNlbGN0ZWRUeXBlOiBcIkFsbFwiLFxyXG4gIGZpbHRlcmVkUHJvZHVjdHM6IFtdLFxyXG4gIHNlbGVjdGVkT3JkZXI6IG51bGwsXHJcbiAgb3JkZXJzV2l0aFByb2R1Y3RzOiBbXSxcclxuICBpc1Nob3dNb2RhbDogZmFsc2UsXHJcbiAgaXRlbVRvRGVsZXRlOiBudWxsLFxyXG4gIGN1cnJlbnREZWxldGVJdGVtOiBudWxsLFxyXG59O1xyXG5cclxuY29uc3QgcHJvZHVjdHNTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiBcInByb2R1Y3RzXCIsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBzZXRTZWxlY3RlZFR5cGU6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZz4pID0+IHtcclxuICAgICAgc3RhdGUuc2VsY3RlZFR5cGUgPSBhY3Rpb24ucGF5bG9hZCBhcyBTZWxlY3RUeXBlO1xyXG4gICAgICBzdGF0ZS5maWx0ZXJlZFByb2R1Y3RzID1cclxuICAgICAgICBzdGF0ZS5zZWxjdGVkVHlwZSA9PT0gXCJBbGxcIlxyXG4gICAgICAgICAgPyBzdGF0ZS5wcm9kdWN0c1xyXG4gICAgICAgICAgOiBzdGF0ZS5wcm9kdWN0cy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgKHByb2R1Y3QpID0+IHByb2R1Y3QudHlwZSA9PT0gc3RhdGUuc2VsY3RlZFR5cGVcclxuICAgICAgICAgICAgKTtcclxuICAgIH0sXHJcbiAgICBzZXRSZW1vdmVJdGVtUHJvZHVjdDogKFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPG51bWJlciB8IHVuZGVmaW5lZD5cclxuICAgICkgPT4ge1xyXG4gICAgICBzdGF0ZS5maWx0ZXJlZFByb2R1Y3RzID0gc3RhdGUuZmlsdGVyZWRQcm9kdWN0cy5maWx0ZXIoXHJcbiAgICAgICAgKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgIT09IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICk7XHJcbiAgICAgIHN0YXRlLmN1cnJlbnREZWxldGVJdGVtID0gbnVsbDtcclxuICAgIH0sXHJcbiAgICBzZXRSZW1vdmVJdGVtT3JkZXI6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPG51bWJlciB8IHVuZGVmaW5lZD4pID0+IHtcclxuICAgICAgc3RhdGUub3JkZXJzID0gc3RhdGUub3JkZXJzLmZpbHRlcihcclxuICAgICAgICAob3JkZXIpID0+IG9yZGVyLmlkICE9PSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICApO1xyXG4gICAgICAvLyBpZiAoc3RhdGUuaXRlbVRvRGVsZXRlPy50eXBlID09PSBcIm9yZGVyXCIpIHtcclxuICAgICAgLy8gICBzdGF0ZS5vcmRlcnNXaXRoUHJvZHVjdHMgPSBzdGF0ZS5vcmRlcnNXaXRoUHJvZHVjdHMuZmlsdGVyKFxyXG4gICAgICAvLyAgICAgKG9yZGVyKSA9PiBvcmRlci5pZCAhPT0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgLy8gICApO1xyXG4gICAgICAvLyB9XHJcbiAgICAgIHN0YXRlLmN1cnJlbnREZWxldGVJdGVtID0gbnVsbDtcclxuICAgIH0sXHJcbiAgICBzZXRTZWxlY3RlZE9yZGVyOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxJT3JkZXJzIHwgbnVsbD4pID0+IHtcclxuICAgICAgc3RhdGUuc2VsZWN0ZWRPcmRlciA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfSxcclxuICAgIHNldE9yZGVyc1dpdGhQcm9kdWN0czogKHN0YXRlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHVwZGF0ZWRPcmRlcnNXaXRoUHJvZHVjdHMgPSBzdGF0ZS5vcmRlcnMubWFwKChvcmRlcjogSU9yZGVycykgPT4gKHtcclxuICAgICAgICAuLi5vcmRlcixcclxuICAgICAgICBwcm9kdWN0czogc3RhdGUucHJvZHVjdHMuZmlsdGVyKFxyXG4gICAgICAgICAgKHByb2R1Y3Q6IElQcm9kdWN0cykgPT4gcHJvZHVjdC5vcmRlciA9PT0gb3JkZXIuaWRcclxuICAgICAgICApLFxyXG4gICAgICB9KSk7XHJcbiAgICAgIHN0YXRlLm9yZGVyc1dpdGhQcm9kdWN0cyA9IHVwZGF0ZWRPcmRlcnNXaXRoUHJvZHVjdHM7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlUHJvZHVjdEZyb21PcmRlcihcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7IG9yZGVySWQ6IG51bWJlcjsgcHJvZHVjdElkOiBudW1iZXIgfT5cclxuICAgICkge1xyXG4gICAgICBjb25zdCB7IG9yZGVySWQsIHByb2R1Y3RJZCB9ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgIHN0YXRlLm9yZGVyc1dpdGhQcm9kdWN0cyA9IHN0YXRlLm9yZGVyc1dpdGhQcm9kdWN0cy5tYXAoKG9yZGVyKSA9PlxyXG4gICAgICAgIG9yZGVyLmlkID09PSBvcmRlcklkXHJcbiAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgICAuLi5vcmRlcixcclxuICAgICAgICAgICAgICBwcm9kdWN0czogb3JkZXIucHJvZHVjdHMuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgIT09IHByb2R1Y3RJZFxyXG4gICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDogb3JkZXJcclxuICAgICAgKTtcclxuICAgIH0sXHJcbiAgICBzZXRJc1Nob3dNb2RhbDogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248Ym9vbGVhbj4pID0+IHtcclxuICAgICAgc3RhdGUuaXNTaG93TW9kYWwgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0sXHJcbiAgICBzZXRJdGVtVG9EZWxldGU6IChcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7IGlkOiBudW1iZXI7IHR5cGU6IHN0cmluZyB9IHwgbnVsbD5cclxuICAgICkgPT4ge1xyXG4gICAgICBjb25zdCBwcmV2SXRlbVR5cGUgPSBzdGF0ZS5pdGVtVG9EZWxldGU/LnR5cGU7XHJcbiAgICAgIC8vINCv0LrRidC+INCy0LjQtNCw0LvRj9GU0YLRjNGB0Y8g0L3QvtCy0LjQuSDQtdC70LXQvNC10L3RglxyXG4gICAgICBpZiAoYWN0aW9uLnBheWxvYWQpIHtcclxuICAgICAgICBjb25zdCB7IGlkLCB0eXBlIH0gPSBhY3Rpb24ucGF5bG9hZDtcclxuXHJcbiAgICAgICAgLy8g0J7QvdC+0LLQu9C10L3QvdGPIGl0ZW1Ub0RlbGV0ZVxyXG4gICAgICAgIHN0YXRlLml0ZW1Ub0RlbGV0ZSA9IGFjdGlvbi5wYXlsb2FkO1xyXG5cclxuICAgICAgICBjb25zdCBmaW5kSXRlbURlbGV0ZVByb2R1Y3QgPSBzdGF0ZS5wcm9kdWN0cy5maW5kKFxyXG4gICAgICAgICAgKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGlkIC8vINCX0LzRltC90ZbRgtGMINC90LAgaXRlbS5pZCDQtNC70Y8g0LrQvtGA0LXQutGC0L3QvtGXINC/0LXRgNC10LLRltGA0LrQuFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgZmluZEl0ZW1EZWxldGVPcmRlciA9IHN0YXRlLm9yZGVycy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBpZCk7XHJcblxyXG4gICAgICAgIGlmIChmaW5kSXRlbURlbGV0ZVByb2R1Y3QpIHtcclxuICAgICAgICAgIHN0YXRlLmN1cnJlbnREZWxldGVJdGVtID0gZmluZEl0ZW1EZWxldGVQcm9kdWN0OyAvLyDQktGB0YLQsNC90L7QstC70Y7RlNC80L4g0L/QvtGC0L7Rh9C90LjQuSDQv9GA0L7QtNGD0LrRglxyXG4gICAgICAgIH0gZWxzZSBpZiAoZmluZEl0ZW1EZWxldGVPcmRlcikge1xyXG4gICAgICAgICAgc3RhdGUuY3VycmVudERlbGV0ZUl0ZW0gPSBmaW5kSXRlbURlbGV0ZU9yZGVyOyAvLyDQktGB0YLQsNC90L7QstC70Y7RlNC80L4g0L/QvtGC0L7Rh9C90LjQuSDQvtGA0LTQtdGAXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vINCv0LrRidC+IGFjdGlvbi5wYXlsb2FkINGUIG51bGwsINGC0L4g0YHQutC40LTQsNGU0LzQviDRgdGC0LDQvVxyXG4gICAgICAgIHN0YXRlLml0ZW1Ub0RlbGV0ZSA9IG51bGw7XHJcbiAgICAgICAgc3RhdGUuY3VycmVudERlbGV0ZUl0ZW0gPSBudWxsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyDQodC60LjQtNCw0L3QvdGPIGN1cnJlbnREZWxldGVJdGVtLCDRj9C60YnQviDRgtC40L8g0LfQvNGW0L3QuNCy0YHRj1xyXG4gICAgICBpZiAocHJldkl0ZW1UeXBlICYmIHByZXZJdGVtVHlwZSAhPT0gYWN0aW9uLnBheWxvYWQ/LnR5cGUpIHtcclxuICAgICAgICBzdGF0ZS5jdXJyZW50RGVsZXRlSXRlbSA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZXRSZW1vdmVDdXJyZW50RGVsZXRlSXRlbTogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248bnVsbD4pID0+IHtcclxuICAgICAgc3RhdGUuY3VycmVudERlbGV0ZUl0ZW0gPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0sXHJcbiAgfSxcclxuICBleHRyYVJlZHVjZXJzOiAoYnVpbGRlcikgPT4ge1xyXG4gICAgYnVpbGRlci5hZGRDYXNlKGZldGNoUHJvZHVjdHMucGVuZGluZywgKHN0YXRlKSA9PiB7XHJcbiAgICAgIHN0YXRlLnN0YXR1cyA9IFwibG9hZGluZ1wiO1xyXG4gICAgfSk7XHJcbiAgICBidWlsZGVyLmFkZENhc2UoZmV0Y2hQcm9kdWN0cy5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLnN0YXR1cyA9IFwic3VjY2Vzc1wiO1xyXG4gICAgICBzdGF0ZS5wcm9kdWN0cyA9IGFjdGlvbi5wYXlsb2FkIHx8IFtdO1xyXG4gICAgICBzdGF0ZS5maWx0ZXJlZFByb2R1Y3RzID0gc3RhdGUucHJvZHVjdHM7XHJcbiAgICB9KTtcclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShmZXRjaFByb2R1Y3RzLnJlamVjdGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5zdGF0dXMgPSBcImZhaWxlZFwiO1xyXG4gICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5wYXlsb2FkPy5tZXNzYWdlIHx8IFwiRmFpbGVkIHRvIGZldGNoXCI7XHJcbiAgICB9KTtcclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShmZXRjaE9yZGVycy5wZW5kaW5nLCAoc3RhdGUpID0+IHtcclxuICAgICAgc3RhdGUuc3RhdHVzID0gXCJsb2FkaW5nXCI7XHJcbiAgICB9KTtcclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShmZXRjaE9yZGVycy5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLnN0YXR1cyA9IFwic3VjY2Vzc1wiO1xyXG4gICAgICBzdGF0ZS5vcmRlcnMgPSBhY3Rpb24ucGF5bG9hZCB8fCBbXTtcclxuICAgIH0pO1xyXG4gICAgYnVpbGRlci5hZGRDYXNlKGZldGNoT3JkZXJzLnJlamVjdGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5zdGF0dXMgPSBcImZhaWxlZFwiO1xyXG4gICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5wYXlsb2FkPy5tZXNzYWdlIHx8IFwiRmFpbGVkIHRvIGZldGNoXCI7XHJcbiAgICB9KTtcclxuICB9LFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IHtcclxuICBzZXRTZWxlY3RlZFR5cGUsXHJcbiAgc2V0UmVtb3ZlSXRlbVByb2R1Y3QsXHJcbiAgc2V0UmVtb3ZlSXRlbU9yZGVyLFxyXG4gIHNldFNlbGVjdGVkT3JkZXIsXHJcbiAgc2V0T3JkZXJzV2l0aFByb2R1Y3RzLFxyXG4gIHJlbW92ZVByb2R1Y3RGcm9tT3JkZXIsXHJcbiAgc2V0SXNTaG93TW9kYWwsXHJcbiAgc2V0SXRlbVRvRGVsZXRlLFxyXG4gIHNldFJlbW92ZUN1cnJlbnREZWxldGVJdGVtLFxyXG59ID0gcHJvZHVjdHNTbGljZS5hY3Rpb25zO1xyXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0c1NsaWNlLnJlZHVjZXI7XHJcblxyXG4vLyAgY29uc3QgaXRlbVByb2R1Y3QgPSBzdGF0ZS5wcm9kdWN0cy5maW5kKFxyXG4vLyAgICAoaXRlbSkgPT4gaXRlbS5pZCA9PT0gYWN0aW9uLnBheWxvYWQ/LmlkXHJcbi8vICApO1xyXG4vLyAgY29uc3QgaXRlbU9yZGVyID0gc3RhdGUub3JkZXJzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5wYXlsb2FkPy5pZCk7XHJcbi8vICBpZiAoYWN0aW9uLnBheWxvYWQ/LnR5cGUgPT09IFwicHJvZHVjdFwiKSB7XHJcbi8vICAgIHN0YXRlLmN1cnJlbnREZWxldGVJdGVtID0gaXRlbVByb2R1Y3QgfHwgbnVsbDtcclxuLy8gIH0gZWxzZSBpZiAoYWN0aW9uLnBheWxvYWQ/LnR5cGUgPT09IFwib3JkZXJcIikge1xyXG4vLyAgICBzdGF0ZS5jdXJyZW50RGVsZXRlSXRlbSA9IGl0ZW1PcmRlciB8fCBudWxsO1xyXG4vLyAgfVxyXG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJmZXRjaE9yZGVycyIsImZldGNoUHJvZHVjdHMiLCJpbml0aWFsU3RhdGUiLCJvcmRlcnMiLCJwcm9kdWN0cyIsInN0YXR1cyIsImVycm9yIiwic2VsY3RlZFR5cGUiLCJmaWx0ZXJlZFByb2R1Y3RzIiwic2VsZWN0ZWRPcmRlciIsIm9yZGVyc1dpdGhQcm9kdWN0cyIsImlzU2hvd01vZGFsIiwiaXRlbVRvRGVsZXRlIiwiY3VycmVudERlbGV0ZUl0ZW0iLCJwcm9kdWN0c1NsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwic2V0U2VsZWN0ZWRUeXBlIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiZmlsdGVyIiwicHJvZHVjdCIsInR5cGUiLCJzZXRSZW1vdmVJdGVtUHJvZHVjdCIsImlkIiwic2V0UmVtb3ZlSXRlbU9yZGVyIiwib3JkZXIiLCJzZXRTZWxlY3RlZE9yZGVyIiwic2V0T3JkZXJzV2l0aFByb2R1Y3RzIiwidXBkYXRlZE9yZGVyc1dpdGhQcm9kdWN0cyIsIm1hcCIsInJlbW92ZVByb2R1Y3RGcm9tT3JkZXIiLCJvcmRlcklkIiwicHJvZHVjdElkIiwic2V0SXNTaG93TW9kYWwiLCJzZXRJdGVtVG9EZWxldGUiLCJwcmV2SXRlbVR5cGUiLCJmaW5kSXRlbURlbGV0ZVByb2R1Y3QiLCJmaW5kIiwiaXRlbSIsImZpbmRJdGVtRGVsZXRlT3JkZXIiLCJzZXRSZW1vdmVDdXJyZW50RGVsZXRlSXRlbSIsImV4dHJhUmVkdWNlcnMiLCJidWlsZGVyIiwiYWRkQ2FzZSIsInBlbmRpbmciLCJmdWxmaWxsZWQiLCJyZWplY3RlZCIsIm1lc3NhZ2UiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/reducer/productsSlice.ts\n"));

/***/ })

});