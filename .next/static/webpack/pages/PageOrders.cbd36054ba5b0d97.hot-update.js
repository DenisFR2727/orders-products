"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/PageOrders",{

/***/ "./src/components/Orders/Orders.tsx":
/*!******************************************!*\
  !*** ./src/components/Orders/Orders.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/_/_object_spread */ \"./node_modules/@swc/helpers/esm/_object_spread.js\");\n/* harmony import */ var _swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/_/_object_spread_props */ \"./node_modules/@swc/helpers/esm/_object_spread_props.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducer_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../reducer/hooks */ \"./src/reducer/hooks.ts\");\n/* harmony import */ var _ListItemsOrders_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ListItemsOrders.module.scss */ \"./src/components/Orders/ListItemsOrders.module.scss\");\n/* harmony import */ var _ListItemsOrders_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ListItemsOrders_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _thunk_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../thunk/thunk */ \"./src/thunk/thunk.ts\");\n/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-window */ \"./node_modules/react-window/dist/index.esm.js\");\n/* harmony import */ var _ListItemsOrders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ListItemsOrders */ \"./src/components/Orders/ListItemsOrders.tsx\");\n/* harmony import */ var _Utils_CalculateTotalPrice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Utils/CalculateTotalPrice */ \"./src/Utils/CalculateTotalPrice.ts\");\n/* harmony import */ var _ListProductsInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ListProductsInfo */ \"./src/components/Orders/ListProductsInfo.tsx\");\n/* harmony import */ var _reducer_productsSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../reducer/productsSlice */ \"./src/reducer/productsSlice.ts\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar Orders = function() {\n    _s();\n    var dispatch = (0,_reducer_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    var orders = (0,_reducer_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(function(state) {\n        return state.orders;\n    });\n    var products = (0,_reducer_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(function(state) {\n        return state.products;\n    });\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_9__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), isOpen = _useState[0], setIsOpen = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_9__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), selectedOrder = _useState1[0], setSelectedOrder = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_9__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), ordersWithProducts = _useState2[0], setOrdersWithProducts = _useState2[1];\n    var itemHeight = 150;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        dispatch((0,_thunk_thunk__WEBPACK_IMPORTED_MODULE_4__.fetchOrders)());\n        dispatch((0,_thunk_thunk__WEBPACK_IMPORTED_MODULE_4__.fetchProducts)());\n    }, [\n        dispatch\n    ]);\n    // Orders with products\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var updatedOrdersWithProducts = orders.map(function(order) {\n            return (0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_10__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_11__._)({}, order), {\n                products: products.filter(function(product) {\n                    return product.order === order.id;\n                })\n            });\n        });\n        setOrdersWithProducts(updatedOrdersWithProducts);\n    }, [\n        orders,\n        products\n    ]);\n    var handleRemoveProductFromOrder = function(productId) {\n        if (selectedOrder) {\n            dispatch((0,_reducer_productsSlice__WEBPACK_IMPORTED_MODULE_8__.removeProductFromOrder)({\n                orderId: selectedOrder.id,\n                productId: productId\n            }));\n            var updatedProducts = selectedOrder.products.filter(function(product) {\n                return product.id !== productId;\n            });\n            var updatedOrder = (0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_10__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_11__._)({}, selectedOrder), {\n                products: updatedProducts\n            });\n            setSelectedOrder(updatedOrder);\n            var updatedOrders = ordersWithProducts.map(function(order) {\n                return order.id === updatedOrder.id ? updatedOrder : order;\n            });\n            setOrdersWithProducts(updatedOrders);\n        }\n    };\n    var Row = function(param) {\n        var index = param.index;\n        var _item_products;\n        var item = ordersWithProducts[index];\n        var productsCount = ((_item_products = item.products) === null || _item_products === void 0 ? void 0 : _item_products.length) || 0;\n        var priceUSD = (0,_Utils_CalculateTotalPrice__WEBPACK_IMPORTED_MODULE_6__.calculateTotalPrice)(item.products, \"USD\");\n        var priceUAH = (0,_Utils_CalculateTotalPrice__WEBPACK_IMPORTED_MODULE_6__.calculateTotalPrice)(item.products, \"UAH\");\n        var openProductsInfo = function() {\n            setIsOpen(true);\n            setSelectedOrder(item);\n        };\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ListItemsOrders__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                item: item,\n                priceUSD: priceUSD,\n                priceUAH: priceUAH,\n                productsCount: productsCount,\n                openProductsInfo: openProductsInfo,\n                isOpen: isOpen\n            }, item.id, false, {\n                fileName: \"C:\\\\ReactTasks\\\\orders-product\\\\src\\\\components\\\\Orders\\\\Orders.tsx\",\n                lineNumber: 69,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\ReactTasks\\\\orders-product\\\\src\\\\components\\\\Orders\\\\Orders.tsx\",\n            lineNumber: 68,\n            columnNumber: 7\n        }, _this);\n    };\n    var closeModal = function() {\n        setIsOpen(false);\n        setSelectedOrder(null);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_ListItemsOrders_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_ListItemsOrders_module_scss__WEBPACK_IMPORTED_MODULE_3___default().count),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/images/logo/round.png\",\n                        alt: \"plus\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\ReactTasks\\\\orders-product\\\\src\\\\components\\\\Orders\\\\Orders.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Приходы / \",\n                            orders.length\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\ReactTasks\\\\orders-product\\\\src\\\\components\\\\Orders\\\\Orders.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\ReactTasks\\\\orders-product\\\\src\\\\components\\\\Orders\\\\Orders.tsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat((_ListItemsOrders_module_scss__WEBPACK_IMPORTED_MODULE_3___default().listContainer), \" \").concat(isOpen ? (_ListItemsOrders_module_scss__WEBPACK_IMPORTED_MODULE_3___default().open) : \"\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_window__WEBPACK_IMPORTED_MODULE_12__.FixedSizeList, {\n                        className: (_ListItemsOrders_module_scss__WEBPACK_IMPORTED_MODULE_3___default().list),\n                        height: 600,\n                        itemCount: ordersWithProducts.length,\n                        itemSize: itemHeight,\n                        width: \"\".concat(isOpen ? \"50%\" : \"100%\"),\n                        children: Row\n                    }, void 0, false, {\n                        fileName: \"C:\\\\ReactTasks\\\\orders-product\\\\src\\\\components\\\\Orders\\\\Orders.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, _this),\n                    isOpen && selectedOrder && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ListProductsInfo__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        selected: selectedOrder,\n                        products: selectedOrder.products,\n                        closeModal: closeModal,\n                        remove: handleRemoveProductFromOrder\n                    }, void 0, false, {\n                        fileName: \"C:\\\\ReactTasks\\\\orders-product\\\\src\\\\components\\\\Orders\\\\Orders.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\ReactTasks\\\\orders-product\\\\src\\\\components\\\\Orders\\\\Orders.tsx\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\ReactTasks\\\\orders-product\\\\src\\\\components\\\\Orders\\\\Orders.tsx\",\n        lineNumber: 86,\n        columnNumber: 5\n    }, _this);\n};\n_s(Orders, \"Tu/CxI//EiNplV04XiQXY5qE2M8=\", false, function() {\n    return [\n        _reducer_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch,\n        _reducer_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _reducer_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector\n    ];\n});\n_c = Orders;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Orders);\nvar _c;\n$RefreshReg$(_c, \"Orders\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDOEM7d0JBQUlDLEtBQUk7d0JBQXlCQyxLQUFJOzs7Ozs7a0NBQ3RDLDhEQUFDQzs7NEJBQUU7NEJBQVd0QyxPQUFPMEIsTUFBTTs7Ozs7Ozs7Ozs7OzswQkFFN0IsOERBQUNJO2dCQUFJRSxXQUFXLEdBQTRCN0IsT0FBekJkLG1GQUFxQixFQUFDLEtBQThCLE9BQTNCYyxTQUFTZCwwRUFBWSxHQUFHOztrQ0FDbEUsOERBQUNJLHdEQUFJQTt3QkFDSHVDLFdBQVczQywwRUFBWTt3QkFDdkJxRCxRQUFRO3dCQUNSQyxXQUFXcEMsbUJBQW1CbUIsTUFBTTt3QkFDcENrQixVQUFVbkM7d0JBQ1ZvQyxPQUFPLEdBQTJCLE9BQXhCMUMsU0FBUyxRQUFRO2tDQUUxQm1COzs7Ozs7b0JBRUZuQixVQUFVRSwrQkFDVCw4REFBQ1QseURBQWdCQTt3QkFDZmtELFVBQVV6Qzt3QkFDVkgsVUFBVUcsY0FBY0gsUUFBUTt3QkFDaEM2QixZQUFZQTt3QkFDWmdCLFFBQVEvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXBCO0dBcEdNbEI7O1FBQ2FYLDBEQUFjQTtRQUNoQkMsMERBQWNBO1FBQ1pBLDBEQUFjQTs7O0tBSDNCVTtBQXFHTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9PcmRlcnMvT3JkZXJzLnRzeD85ZTJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoLCB1c2VBcHBTZWxlY3RvciB9IGZyb20gXCIuLi8uLi9yZWR1Y2VyL2hvb2tzXCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL0xpc3RJdGVtc09yZGVycy5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgeyBmZXRjaE9yZGVycywgZmV0Y2hQcm9kdWN0cyB9IGZyb20gXCIuLi8uLi90aHVuay90aHVua1wiO1xyXG5pbXBvcnQgeyBGaXhlZFNpemVMaXN0IGFzIExpc3QsIExpc3RDaGlsZENvbXBvbmVudFByb3BzIH0gZnJvbSBcInJlYWN0LXdpbmRvd1wiO1xyXG5pbXBvcnQgTGlzdEl0ZW1zT3JkZXJzIGZyb20gXCIuL0xpc3RJdGVtc09yZGVyc1wiO1xyXG5pbXBvcnQgeyBJT3JkZXJzLCBJUHJvZHVjdHMgfSBmcm9tIFwiLi4vLi4vcmVkdWNlci90eXBlc1wiO1xyXG5pbXBvcnQgeyBjYWxjdWxhdGVUb3RhbFByaWNlIH0gZnJvbSBcIi4uLy4uL1V0aWxzL0NhbGN1bGF0ZVRvdGFsUHJpY2VcIjtcclxuaW1wb3J0IExpc3RQcm9kdWN0c0luZm8gZnJvbSBcIi4vTGlzdFByb2R1Y3RzSW5mb1wiO1xyXG5pbXBvcnQgeyByZW1vdmVQcm9kdWN0RnJvbU9yZGVyIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXIvcHJvZHVjdHNTbGljZVwiO1xyXG5cclxuY29uc3QgT3JkZXJzOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XHJcbiAgY29uc3Qgb3JkZXJzID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5vcmRlcnMpO1xyXG4gIGNvbnN0IHByb2R1Y3RzID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wcm9kdWN0cyk7XHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICBjb25zdCBbc2VsZWN0ZWRPcmRlciwgc2V0U2VsZWN0ZWRPcmRlcl0gPSB1c2VTdGF0ZTxJT3JkZXJzIHwgdW5kZWZpbmVkPihbXSk7XHJcbiAgY29uc3QgW29yZGVyc1dpdGhQcm9kdWN0cywgc2V0T3JkZXJzV2l0aFByb2R1Y3RzXSA9IHVzZVN0YXRlPElPcmRlcnNbXT4oW10pO1xyXG4gIGNvbnN0IGl0ZW1IZWlnaHQ6IG51bWJlciA9IDE1MDtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKGZldGNoT3JkZXJzKCkpO1xyXG4gICAgZGlzcGF0Y2goZmV0Y2hQcm9kdWN0cygpKTtcclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuXHJcbiAgLy8gT3JkZXJzIHdpdGggcHJvZHVjdHNcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdXBkYXRlZE9yZGVyc1dpdGhQcm9kdWN0cyA9IG9yZGVycy5tYXAoKG9yZGVyOiBJT3JkZXJzKSA9PiAoe1xyXG4gICAgICAuLi5vcmRlcixcclxuICAgICAgcHJvZHVjdHM6IHByb2R1Y3RzLmZpbHRlcihcclxuICAgICAgICAocHJvZHVjdDogSVByb2R1Y3RzKSA9PiBwcm9kdWN0Lm9yZGVyID09PSBvcmRlci5pZFxyXG4gICAgICApLFxyXG4gICAgfSkpO1xyXG4gICAgc2V0T3JkZXJzV2l0aFByb2R1Y3RzKHVwZGF0ZWRPcmRlcnNXaXRoUHJvZHVjdHMpO1xyXG4gIH0sIFtvcmRlcnMsIHByb2R1Y3RzXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVJlbW92ZVByb2R1Y3RGcm9tT3JkZXIgPSAocHJvZHVjdElkOiBudW1iZXIpID0+IHtcclxuICAgIGlmIChzZWxlY3RlZE9yZGVyKSB7XHJcbiAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgIHJlbW92ZVByb2R1Y3RGcm9tT3JkZXIoeyBvcmRlcklkOiBzZWxlY3RlZE9yZGVyLmlkLCBwcm9kdWN0SWQgfSlcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgdXBkYXRlZFByb2R1Y3RzID0gc2VsZWN0ZWRPcmRlci5wcm9kdWN0cy5maWx0ZXIoXHJcbiAgICAgICAgKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgIT09IHByb2R1Y3RJZFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCB1cGRhdGVkT3JkZXIgPSB7IC4uLnNlbGVjdGVkT3JkZXIsIHByb2R1Y3RzOiB1cGRhdGVkUHJvZHVjdHMgfTtcclxuICAgICAgc2V0U2VsZWN0ZWRPcmRlcih1cGRhdGVkT3JkZXIpO1xyXG5cclxuICAgICAgY29uc3QgdXBkYXRlZE9yZGVycyA9IG9yZGVyc1dpdGhQcm9kdWN0cy5tYXAoKG9yZGVyKSA9PlxyXG4gICAgICAgIG9yZGVyLmlkID09PSB1cGRhdGVkT3JkZXIuaWQgPyB1cGRhdGVkT3JkZXIgOiBvcmRlclxyXG4gICAgICApO1xyXG4gICAgICBzZXRPcmRlcnNXaXRoUHJvZHVjdHModXBkYXRlZE9yZGVycyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgUm93ID0gKHsgaW5kZXggfTogTGlzdENoaWxkQ29tcG9uZW50UHJvcHMpID0+IHtcclxuICAgIGNvbnN0IGl0ZW06IElPcmRlcnMgPSBvcmRlcnNXaXRoUHJvZHVjdHNbaW5kZXhdO1xyXG4gICAgY29uc3QgcHJvZHVjdHNDb3VudCA9IGl0ZW0ucHJvZHVjdHM/Lmxlbmd0aCB8fCAwO1xyXG5cclxuICAgIGNvbnN0IHByaWNlVVNEID0gY2FsY3VsYXRlVG90YWxQcmljZShpdGVtLnByb2R1Y3RzLCBcIlVTRFwiKTtcclxuICAgIGNvbnN0IHByaWNlVUFIID0gY2FsY3VsYXRlVG90YWxQcmljZShpdGVtLnByb2R1Y3RzLCBcIlVBSFwiKTtcclxuXHJcbiAgICBjb25zdCBvcGVuUHJvZHVjdHNJbmZvID0gKCkgPT4ge1xyXG4gICAgICBzZXRJc09wZW4odHJ1ZSk7XHJcbiAgICAgIHNldFNlbGVjdGVkT3JkZXIoaXRlbSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPExpc3RJdGVtc09yZGVyc1xyXG4gICAgICAgICAga2V5PXtpdGVtLmlkfVxyXG4gICAgICAgICAgaXRlbT17aXRlbX1cclxuICAgICAgICAgIHByaWNlVVNEPXtwcmljZVVTRH1cclxuICAgICAgICAgIHByaWNlVUFIPXtwcmljZVVBSH1cclxuICAgICAgICAgIHByb2R1Y3RzQ291bnQ9e3Byb2R1Y3RzQ291bnR9XHJcbiAgICAgICAgICBvcGVuUHJvZHVjdHNJbmZvPXtvcGVuUHJvZHVjdHNJbmZvfVxyXG4gICAgICAgICAgaXNPcGVuPXtpc09wZW59XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcbiAgY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcclxuICAgIHNldElzT3BlbihmYWxzZSk7XHJcbiAgICBzZXRTZWxlY3RlZE9yZGVyKG51bGwpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLkNvbnRhaW5lcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvdW50fT5cclxuICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbG9nby9yb3VuZC5wbmdcIiBhbHQ9XCJwbHVzXCIgLz5cclxuICAgICAgICA8cD7Qn9GA0LjRhdC+0LTRiyAvIHtvcmRlcnMubGVuZ3RofTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmxpc3RDb250YWluZXJ9ICR7aXNPcGVuID8gY2xhc3Nlcy5vcGVuIDogXCJcIn1gfT5cclxuICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3R9XHJcbiAgICAgICAgICBoZWlnaHQ9ezYwMH1cclxuICAgICAgICAgIGl0ZW1Db3VudD17b3JkZXJzV2l0aFByb2R1Y3RzLmxlbmd0aH1cclxuICAgICAgICAgIGl0ZW1TaXplPXtpdGVtSGVpZ2h0fVxyXG4gICAgICAgICAgd2lkdGg9e2Ake2lzT3BlbiA/IFwiNTAlXCIgOiBcIjEwMCVcIn1gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtSb3d9XHJcbiAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIHtpc09wZW4gJiYgc2VsZWN0ZWRPcmRlciAmJiAoXHJcbiAgICAgICAgICA8TGlzdFByb2R1Y3RzSW5mb1xyXG4gICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWRPcmRlcn1cclxuICAgICAgICAgICAgcHJvZHVjdHM9e3NlbGVjdGVkT3JkZXIucHJvZHVjdHN9XHJcbiAgICAgICAgICAgIGNsb3NlTW9kYWw9e2Nsb3NlTW9kYWx9XHJcbiAgICAgICAgICAgIHJlbW92ZT17aGFuZGxlUmVtb3ZlUHJvZHVjdEZyb21PcmRlcn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBPcmRlcnM7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQXBwRGlzcGF0Y2giLCJ1c2VBcHBTZWxlY3RvciIsImNsYXNzZXMiLCJmZXRjaE9yZGVycyIsImZldGNoUHJvZHVjdHMiLCJGaXhlZFNpemVMaXN0IiwiTGlzdCIsIkxpc3RJdGVtc09yZGVycyIsImNhbGN1bGF0ZVRvdGFsUHJpY2UiLCJMaXN0UHJvZHVjdHNJbmZvIiwicmVtb3ZlUHJvZHVjdEZyb21PcmRlciIsIk9yZGVycyIsImRpc3BhdGNoIiwib3JkZXJzIiwic3RhdGUiLCJwcm9kdWN0cyIsImlzT3BlbiIsInNldElzT3BlbiIsInNlbGVjdGVkT3JkZXIiLCJzZXRTZWxlY3RlZE9yZGVyIiwib3JkZXJzV2l0aFByb2R1Y3RzIiwic2V0T3JkZXJzV2l0aFByb2R1Y3RzIiwiaXRlbUhlaWdodCIsInVwZGF0ZWRPcmRlcnNXaXRoUHJvZHVjdHMiLCJtYXAiLCJvcmRlciIsImZpbHRlciIsInByb2R1Y3QiLCJpZCIsImhhbmRsZVJlbW92ZVByb2R1Y3RGcm9tT3JkZXIiLCJwcm9kdWN0SWQiLCJvcmRlcklkIiwidXBkYXRlZFByb2R1Y3RzIiwidXBkYXRlZE9yZGVyIiwidXBkYXRlZE9yZGVycyIsIlJvdyIsImluZGV4IiwiaXRlbSIsInByb2R1Y3RzQ291bnQiLCJsZW5ndGgiLCJwcmljZVVTRCIsInByaWNlVUFIIiwib3BlblByb2R1Y3RzSW5mbyIsImRpdiIsImNsb3NlTW9kYWwiLCJjbGFzc05hbWUiLCJDb250YWluZXIiLCJjb3VudCIsImltZyIsInNyYyIsImFsdCIsInAiLCJsaXN0Q29udGFpbmVyIiwib3BlbiIsImxpc3QiLCJoZWlnaHQiLCJpdGVtQ291bnQiLCJpdGVtU2l6ZSIsIndpZHRoIiwic2VsZWN0ZWQiLCJyZW1vdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Orders/Orders.tsx\n"));

/***/ })

});