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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/_/_object_spread */ \"./node_modules/@swc/helpers/esm/_object_spread.js\");\n/* harmony import */ var _swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/_/_object_spread_props */ \"./node_modules/@swc/helpers/esm/_object_spread_props.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducer_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../reducer/hooks */ \"./src/reducer/hooks.ts\");\n/* harmony import */ var _ListItemsOrders_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ListItemsOrders.module.scss */ \"./src/components/Orders/ListItemsOrders.module.scss\");\n/* harmony import */ var _ListItemsOrders_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ListItemsOrders_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _thunk_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../thunk/thunk */ \"./src/thunk/thunk.ts\");\n/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-window */ \"./node_modules/react-window/dist/index.esm.js\");\n/* harmony import */ var _ListItemsOrders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ListItemsOrders */ \"./src/components/Orders/ListItemsOrders.tsx\");\n/* harmony import */ var _Utils_CalculateTotalPrice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Utils/CalculateTotalPrice */ \"./src/Utils/CalculateTotalPrice.ts\");\n/* harmony import */ var _ListProductsInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ListProductsInfo */ \"./src/components/Orders/ListProductsInfo.tsx\");\n/* harmony import */ var _reducer_productsSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../reducer/productsSlice */ \"./src/reducer/productsSlice.ts\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar Orders = function() {\n    _s();\n    var dispatch = (0,_reducer_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    var orders = (0,_reducer_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(function(state) {\n        return state.orders;\n    });\n    var products = (0,_reducer_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(function(state) {\n        return state.products;\n    });\n    var selectedOrder = (0,_reducer_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(function(state) {\n        return state.selectedOrder;\n    });\n    var ordersWithProducts = (0,_reducer_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(function(state) {\n        return state.ordersWithProducts;\n    });\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_9__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), isOpen = _useState[0], setIsOpen = _useState[1];\n    // const [ordersWithProducts, setOrdersWithProducts] = useState<IOrders[]>([]);\n    var itemHeight = 150;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        dispatch((0,_thunk_thunk__WEBPACK_IMPORTED_MODULE_4__.fetchOrders)());\n        dispatch((0,_thunk_thunk__WEBPACK_IMPORTED_MODULE_4__.fetchProducts)());\n    }, [\n        dispatch\n    ]);\n    // Orders with products\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        dispatch((0,_reducer_productsSlice__WEBPACK_IMPORTED_MODULE_8__.setOrdersWithProducts)());\n    }, [\n        orders,\n        products,\n        dispatch\n    ]);\n    var handleRemoveProductFromOrder = function(productId) {\n        if (selectedOrder) {\n            dispatch((0,_reducer_productsSlice__WEBPACK_IMPORTED_MODULE_8__.removeProductFromOrder)({\n                orderId: selectedOrder.id,\n                productId: productId\n            }));\n            var updatedProducts = selectedOrder.products.filter(function(product) {\n                return product.id !== productId;\n            });\n            var updatedOrder = (0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_10__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_11__._)({}, selectedOrder), {\n                products: updatedProducts\n            });\n            dispatch((0,_reducer_productsSlice__WEBPACK_IMPORTED_MODULE_8__.setSelectedOrder)(updatedOrder));\n            var updatedOrders = ordersWithProducts.map(function(order) {\n                return order.id === updatedOrder.id ? updatedOrder : order;\n            });\n            dispatch((0,_reducer_productsSlice__WEBPACK_IMPORTED_MODULE_8__.setOrdersWithProducts)(updatedOrders));\n        }\n    };\n    var Row = function(param) {\n        var index = param.index;\n        var _item_products;\n        var item = ordersWithProducts[index];\n        var productsCount = ((_item_products = item.products) === null || _item_products === void 0 ? void 0 : _item_products.length) || 0;\n        var priceUSD = (0,_Utils_CalculateTotalPrice__WEBPACK_IMPORTED_MODULE_6__.calculateTotalPrice)(item.products, \"USD\");\n        var priceUAH = (0,_Utils_CalculateTotalPrice__WEBPACK_IMPORTED_MODULE_6__.calculateTotalPrice)(item.products, \"UAH\");\n        var openProductsInfo = function() {\n            setIsOpen(true);\n            dispatch((0,_reducer_productsSlice__WEBPACK_IMPORTED_MODULE_8__.setSelectedOrder)(item));\n        };\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ListItemsOrders__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                item: item,\n                priceUSD: priceUSD,\n                priceUAH: priceUAH,\n                productsCount: productsCount,\n                openProductsInfo: openProductsInfo,\n                isOpen: isOpen\n            }, item.id, false, {\n                fileName: \"C:\\\\ReactTasks\\\\orders-product\\\\src\\\\components\\\\Orders\\\\Orders.tsx\",\n                lineNumber: 71,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\ReactTasks\\\\orders-product\\\\src\\\\components\\\\Orders\\\\Orders.tsx\",\n            lineNumber: 70,\n            columnNumber: 7\n        }, _this);\n    };\n    var closeModal = function() {\n        setIsOpen(false);\n        (0,_reducer_productsSlice__WEBPACK_IMPORTED_MODULE_8__.setSelectedOrder)(null);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_ListItemsOrders_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_ListItemsOrders_module_scss__WEBPACK_IMPORTED_MODULE_3___default().count),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/images/logo/round.png\",\n                        alt: \"plus\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\ReactTasks\\\\orders-product\\\\src\\\\components\\\\Orders\\\\Orders.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Приходы / \",\n                            orders.length\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\ReactTasks\\\\orders-product\\\\src\\\\components\\\\Orders\\\\Orders.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\ReactTasks\\\\orders-product\\\\src\\\\components\\\\Orders\\\\Orders.tsx\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat((_ListItemsOrders_module_scss__WEBPACK_IMPORTED_MODULE_3___default().listContainer), \" \").concat(isOpen ? (_ListItemsOrders_module_scss__WEBPACK_IMPORTED_MODULE_3___default().open) : \"\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_window__WEBPACK_IMPORTED_MODULE_12__.FixedSizeList, {\n                        className: (_ListItemsOrders_module_scss__WEBPACK_IMPORTED_MODULE_3___default().list),\n                        height: 600,\n                        itemCount: ordersWithProducts.length,\n                        itemSize: itemHeight,\n                        width: \"\".concat(isOpen ? \"50%\" : \"100%\"),\n                        children: Row\n                    }, void 0, false, {\n                        fileName: \"C:\\\\ReactTasks\\\\orders-product\\\\src\\\\components\\\\Orders\\\\Orders.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, _this),\n                    isOpen && selectedOrder && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ListProductsInfo__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        selected: selectedOrder,\n                        products: selectedOrder.products,\n                        closeModal: closeModal,\n                        remove: handleRemoveProductFromOrder\n                    }, void 0, false, {\n                        fileName: \"C:\\\\ReactTasks\\\\orders-product\\\\src\\\\components\\\\Orders\\\\Orders.tsx\",\n                        lineNumber: 104,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\ReactTasks\\\\orders-product\\\\src\\\\components\\\\Orders\\\\Orders.tsx\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\ReactTasks\\\\orders-product\\\\src\\\\components\\\\Orders\\\\Orders.tsx\",\n        lineNumber: 88,\n        columnNumber: 5\n    }, _this);\n};\n_s(Orders, \"W+ch+Zisyy91aQkoWJpiCJ0ERZ4=\", false, function() {\n    return [\n        _reducer_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch,\n        _reducer_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _reducer_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _reducer_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _reducer_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector\n    ];\n});\n_c = Orders;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Orders);\nvar _c;\n$RefreshReg$(_c, \"Orders\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXLEdBQTRCeEIsT0FBekJsQixtRkFBcUIsRUFBQyxLQUE4QixPQUEzQmtCLFNBQVNsQiwwRUFBWSxHQUFHOztrQ0FDbEUsOERBQUNJLHdEQUFJQTt3QkFDSHNDLFdBQVcxQywwRUFBWTt3QkFDdkJvRCxRQUFRO3dCQUNSQyxXQUFXcEMsbUJBQW1CbUIsTUFBTTt3QkFDcENrQixVQUFVbEM7d0JBQ1ZtQyxPQUFPLEdBQTJCLE9BQXhCckMsU0FBUyxRQUFRO2tDQUUxQmM7Ozs7OztvQkFFRmQsVUFBVUYsK0JBQ1QsOERBQUNULHlEQUFnQkE7d0JBQ2ZpRCxVQUFVeEM7d0JBQ1ZELFVBQVVDLGNBQWNELFFBQVE7d0JBQ2hDMEIsWUFBWUE7d0JBQ1pnQixRQUFRcEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1wQjtHQWxHTVY7O1FBQ2FiLDBEQUFjQTtRQUNoQkMsMERBQWNBO1FBQ1pBLDBEQUFjQTtRQUNUQSwwREFBY0E7UUFDVEEsMERBQWNBOzs7S0FMckNZO0FBbUdOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL09yZGVycy9PcmRlcnMudHN4PzllMmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2gsIHVzZUFwcFNlbGVjdG9yIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXIvaG9va3NcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vTGlzdEl0ZW1zT3JkZXJzLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB7IGZldGNoT3JkZXJzLCBmZXRjaFByb2R1Y3RzIH0gZnJvbSBcIi4uLy4uL3RodW5rL3RodW5rXCI7XHJcbmltcG9ydCB7IEZpeGVkU2l6ZUxpc3QgYXMgTGlzdCwgTGlzdENoaWxkQ29tcG9uZW50UHJvcHMgfSBmcm9tIFwicmVhY3Qtd2luZG93XCI7XHJcbmltcG9ydCBMaXN0SXRlbXNPcmRlcnMgZnJvbSBcIi4vTGlzdEl0ZW1zT3JkZXJzXCI7XHJcbmltcG9ydCB7IElPcmRlcnMsIElQcm9kdWN0cyB9IGZyb20gXCIuLi8uLi9yZWR1Y2VyL3R5cGVzXCI7XHJcbmltcG9ydCB7IGNhbGN1bGF0ZVRvdGFsUHJpY2UgfSBmcm9tIFwiLi4vLi4vVXRpbHMvQ2FsY3VsYXRlVG90YWxQcmljZVwiO1xyXG5pbXBvcnQgTGlzdFByb2R1Y3RzSW5mbyBmcm9tIFwiLi9MaXN0UHJvZHVjdHNJbmZvXCI7XHJcbmltcG9ydCB7XHJcbiAgcmVtb3ZlUHJvZHVjdEZyb21PcmRlcixcclxuICBzZXRPcmRlcnNXaXRoUHJvZHVjdHMsXHJcbiAgc2V0U2VsZWN0ZWRPcmRlcixcclxufSBmcm9tIFwiLi4vLi4vcmVkdWNlci9wcm9kdWN0c1NsaWNlXCI7XHJcblxyXG5jb25zdCBPcmRlcnM6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKTtcclxuICBjb25zdCBvcmRlcnMgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLm9yZGVycyk7XHJcbiAgY29uc3QgcHJvZHVjdHMgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnByb2R1Y3RzKTtcclxuICBjb25zdCBzZWxlY3RlZE9yZGVyID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5zZWxlY3RlZE9yZGVyKTtcclxuICBjb25zdCBvcmRlcnNXaXRoUHJvZHVjdHMgPSB1c2VBcHBTZWxlY3RvcihcclxuICAgIChzdGF0ZSkgPT4gc3RhdGUub3JkZXJzV2l0aFByb2R1Y3RzXHJcbiAgKTtcclxuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICAvLyBjb25zdCBbb3JkZXJzV2l0aFByb2R1Y3RzLCBzZXRPcmRlcnNXaXRoUHJvZHVjdHNdID0gdXNlU3RhdGU8SU9yZGVyc1tdPihbXSk7XHJcbiAgY29uc3QgaXRlbUhlaWdodDogbnVtYmVyID0gMTUwO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goZmV0Y2hPcmRlcnMoKSk7XHJcbiAgICBkaXNwYXRjaChmZXRjaFByb2R1Y3RzKCkpO1xyXG4gIH0sIFtkaXNwYXRjaF0pO1xyXG5cclxuICAvLyBPcmRlcnMgd2l0aCBwcm9kdWN0c1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChzZXRPcmRlcnNXaXRoUHJvZHVjdHMoKSk7XHJcbiAgfSwgW29yZGVycywgcHJvZHVjdHMsIGRpc3BhdGNoXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVJlbW92ZVByb2R1Y3RGcm9tT3JkZXIgPSAocHJvZHVjdElkOiBudW1iZXIpID0+IHtcclxuICAgIGlmIChzZWxlY3RlZE9yZGVyKSB7XHJcbiAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgIHJlbW92ZVByb2R1Y3RGcm9tT3JkZXIoeyBvcmRlcklkOiBzZWxlY3RlZE9yZGVyLmlkLCBwcm9kdWN0SWQgfSlcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgdXBkYXRlZFByb2R1Y3RzID0gc2VsZWN0ZWRPcmRlci5wcm9kdWN0cy5maWx0ZXIoXHJcbiAgICAgICAgKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgIT09IHByb2R1Y3RJZFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCB1cGRhdGVkT3JkZXIgPSB7IC4uLnNlbGVjdGVkT3JkZXIsIHByb2R1Y3RzOiB1cGRhdGVkUHJvZHVjdHMgfTtcclxuICAgICAgZGlzcGF0Y2goc2V0U2VsZWN0ZWRPcmRlcih1cGRhdGVkT3JkZXIpKTtcclxuXHJcbiAgICAgIGNvbnN0IHVwZGF0ZWRPcmRlcnM6IElPcmRlcnNbXSA9IG9yZGVyc1dpdGhQcm9kdWN0cy5tYXAoKG9yZGVyKSA9PlxyXG4gICAgICAgIG9yZGVyLmlkID09PSB1cGRhdGVkT3JkZXIuaWQgPyB1cGRhdGVkT3JkZXIgOiBvcmRlclxyXG4gICAgICApO1xyXG4gICAgICBkaXNwYXRjaChzZXRPcmRlcnNXaXRoUHJvZHVjdHModXBkYXRlZE9yZGVycykpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IFJvdyA9ICh7IGluZGV4IH06IExpc3RDaGlsZENvbXBvbmVudFByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBpdGVtOiBJT3JkZXJzID0gb3JkZXJzV2l0aFByb2R1Y3RzW2luZGV4XTtcclxuICAgIGNvbnN0IHByb2R1Y3RzQ291bnQgPSBpdGVtLnByb2R1Y3RzPy5sZW5ndGggfHwgMDtcclxuXHJcbiAgICBjb25zdCBwcmljZVVTRCA9IGNhbGN1bGF0ZVRvdGFsUHJpY2UoaXRlbS5wcm9kdWN0cywgXCJVU0RcIik7XHJcbiAgICBjb25zdCBwcmljZVVBSCA9IGNhbGN1bGF0ZVRvdGFsUHJpY2UoaXRlbS5wcm9kdWN0cywgXCJVQUhcIik7XHJcblxyXG4gICAgY29uc3Qgb3BlblByb2R1Y3RzSW5mbyA9ICgpID0+IHtcclxuICAgICAgc2V0SXNPcGVuKHRydWUpO1xyXG4gICAgICBkaXNwYXRjaChzZXRTZWxlY3RlZE9yZGVyKGl0ZW0pKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8TGlzdEl0ZW1zT3JkZXJzXHJcbiAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICBpdGVtPXtpdGVtfVxyXG4gICAgICAgICAgcHJpY2VVU0Q9e3ByaWNlVVNEfVxyXG4gICAgICAgICAgcHJpY2VVQUg9e3ByaWNlVUFIfVxyXG4gICAgICAgICAgcHJvZHVjdHNDb3VudD17cHJvZHVjdHNDb3VudH1cclxuICAgICAgICAgIG9wZW5Qcm9kdWN0c0luZm89e29wZW5Qcm9kdWN0c0luZm99XHJcbiAgICAgICAgICBpc09wZW49e2lzT3Blbn1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxuICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0SXNPcGVuKGZhbHNlKTtcclxuICAgIHNldFNlbGVjdGVkT3JkZXIobnVsbCk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuQ29udGFpbmVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY291bnR9PlxyXG4gICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2dvL3JvdW5kLnBuZ1wiIGFsdD1cInBsdXNcIiAvPlxyXG4gICAgICAgIDxwPtCf0YDQuNGF0L7QtNGLIC8ge29yZGVycy5sZW5ndGh9PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzZXMubGlzdENvbnRhaW5lcn0gJHtpc09wZW4gPyBjbGFzc2VzLm9wZW4gOiBcIlwifWB9PlxyXG4gICAgICAgIDxMaXN0XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubGlzdH1cclxuICAgICAgICAgIGhlaWdodD17NjAwfVxyXG4gICAgICAgICAgaXRlbUNvdW50PXtvcmRlcnNXaXRoUHJvZHVjdHMubGVuZ3RofVxyXG4gICAgICAgICAgaXRlbVNpemU9e2l0ZW1IZWlnaHR9XHJcbiAgICAgICAgICB3aWR0aD17YCR7aXNPcGVuID8gXCI1MCVcIiA6IFwiMTAwJVwifWB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge1Jvd31cclxuICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAge2lzT3BlbiAmJiBzZWxlY3RlZE9yZGVyICYmIChcclxuICAgICAgICAgIDxMaXN0UHJvZHVjdHNJbmZvXHJcbiAgICAgICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZE9yZGVyfVxyXG4gICAgICAgICAgICBwcm9kdWN0cz17c2VsZWN0ZWRPcmRlci5wcm9kdWN0c31cclxuICAgICAgICAgICAgY2xvc2VNb2RhbD17Y2xvc2VNb2RhbH1cclxuICAgICAgICAgICAgcmVtb3ZlPXtoYW5kbGVSZW1vdmVQcm9kdWN0RnJvbU9yZGVyfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IE9yZGVycztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VBcHBEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIiwiY2xhc3NlcyIsImZldGNoT3JkZXJzIiwiZmV0Y2hQcm9kdWN0cyIsIkZpeGVkU2l6ZUxpc3QiLCJMaXN0IiwiTGlzdEl0ZW1zT3JkZXJzIiwiY2FsY3VsYXRlVG90YWxQcmljZSIsIkxpc3RQcm9kdWN0c0luZm8iLCJyZW1vdmVQcm9kdWN0RnJvbU9yZGVyIiwic2V0T3JkZXJzV2l0aFByb2R1Y3RzIiwic2V0U2VsZWN0ZWRPcmRlciIsIk9yZGVycyIsImRpc3BhdGNoIiwib3JkZXJzIiwic3RhdGUiLCJwcm9kdWN0cyIsInNlbGVjdGVkT3JkZXIiLCJvcmRlcnNXaXRoUHJvZHVjdHMiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJpdGVtSGVpZ2h0IiwiaGFuZGxlUmVtb3ZlUHJvZHVjdEZyb21PcmRlciIsInByb2R1Y3RJZCIsIm9yZGVySWQiLCJpZCIsInVwZGF0ZWRQcm9kdWN0cyIsImZpbHRlciIsInByb2R1Y3QiLCJ1cGRhdGVkT3JkZXIiLCJ1cGRhdGVkT3JkZXJzIiwibWFwIiwib3JkZXIiLCJSb3ciLCJpbmRleCIsIml0ZW0iLCJwcm9kdWN0c0NvdW50IiwibGVuZ3RoIiwicHJpY2VVU0QiLCJwcmljZVVBSCIsIm9wZW5Qcm9kdWN0c0luZm8iLCJkaXYiLCJjbG9zZU1vZGFsIiwiY2xhc3NOYW1lIiwiQ29udGFpbmVyIiwiY291bnQiLCJpbWciLCJzcmMiLCJhbHQiLCJwIiwibGlzdENvbnRhaW5lciIsIm9wZW4iLCJsaXN0IiwiaGVpZ2h0IiwiaXRlbUNvdW50IiwiaXRlbVNpemUiLCJ3aWR0aCIsInNlbGVjdGVkIiwicmVtb3ZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Orders/Orders.tsx\n"));

/***/ })

});