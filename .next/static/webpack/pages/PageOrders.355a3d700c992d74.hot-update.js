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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/_/_object_spread */ \"./node_modules/@swc/helpers/esm/_object_spread.js\");\n/* harmony import */ var _swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/_/_object_spread_props */ \"./node_modules/@swc/helpers/esm/_object_spread_props.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducer_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../reducer/hooks */ \"./src/reducer/hooks.ts\");\n/* harmony import */ var _ListItemsOrders_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ListItemsOrders.module.scss */ \"./src/components/Orders/ListItemsOrders.module.scss\");\n/* harmony import */ var _ListItemsOrders_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ListItemsOrders_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _thunk_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../thunk/thunk */ \"./src/thunk/thunk.ts\");\n/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-window */ \"./node_modules/react-window/dist/index.esm.js\");\n/* harmony import */ var _ListItemsOrders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ListItemsOrders */ \"./src/components/Orders/ListItemsOrders.tsx\");\n/* harmony import */ var _Utils_CalculateTotalPrice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Utils/CalculateTotalPrice */ \"./src/Utils/CalculateTotalPrice.ts\");\n/* harmony import */ var _ListProductsInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ListProductsInfo */ \"./src/components/Orders/ListProductsInfo.tsx\");\n/* harmony import */ var _reducer_productsSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../reducer/productsSlice */ \"./src/reducer/productsSlice.ts\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar Orders = function() {\n    _s();\n    var dispatch = (0,_reducer_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    var orders = (0,_reducer_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(function(state) {\n        return state.orders;\n    });\n    var products = (0,_reducer_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(function(state) {\n        return state.products;\n    });\n    var selectedOrder = (0,_reducer_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(function(state) {\n        return state.selectedOrder;\n    });\n    var ordersWithProducts = (0,_reducer_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(function(state) {\n        return state.ordersWithProducts;\n    });\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_9__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), isOpen = _useState[0], setIsOpen = _useState[1];\n    var itemHeight = 150;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        dispatch((0,_thunk_thunk__WEBPACK_IMPORTED_MODULE_4__.fetchOrders)());\n        dispatch((0,_thunk_thunk__WEBPACK_IMPORTED_MODULE_4__.fetchProducts)());\n    }, [\n        dispatch\n    ]);\n    // Orders with products\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        dispatch((0,_reducer_productsSlice__WEBPACK_IMPORTED_MODULE_8__.setOrdersWithProducts)());\n    }, [\n        orders,\n        products,\n        dispatch\n    ]);\n    var handleRemoveProductFromOrder = function(productId) {\n        if (selectedOrder) {\n            dispatch((0,_reducer_productsSlice__WEBPACK_IMPORTED_MODULE_8__.removeProductFromOrder)({\n                orderId: selectedOrder.id,\n                productId: productId\n            }));\n            var updatedProducts = selectedOrder.products.filter(function(product) {\n                return product.id !== productId;\n            });\n            var updatedOrder = (0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_10__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_11__._)({}, selectedOrder), {\n                products: updatedProducts\n            });\n            dispatch((0,_reducer_productsSlice__WEBPACK_IMPORTED_MODULE_8__.setSelectedOrder)(updatedOrder));\n            dispatch((0,_reducer_productsSlice__WEBPACK_IMPORTED_MODULE_8__.setOrdersWithProducts)());\n        }\n    };\n    var Row = function(param) {\n        var index = param.index;\n        var item = ordersWithProducts[index];\n        var productsCount = item;\n        var priceUSD = (0,_Utils_CalculateTotalPrice__WEBPACK_IMPORTED_MODULE_6__.calculateTotalPrice)(item.products, \"USD\");\n        var priceUAH = (0,_Utils_CalculateTotalPrice__WEBPACK_IMPORTED_MODULE_6__.calculateTotalPrice)(item.products, \"UAH\");\n        var openProductsInfo = function() {\n            setIsOpen(true);\n            dispatch((0,_reducer_productsSlice__WEBPACK_IMPORTED_MODULE_8__.setSelectedOrder)(item));\n        };\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ListItemsOrders__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                item: item,\n                priceUSD: priceUSD,\n                priceUAH: priceUAH,\n                productsCount: productsCount,\n                openProductsInfo: openProductsInfo,\n                isOpen: isOpen\n            }, item.id, false, {\n                fileName: \"C:\\\\ReactTasks\\\\orders-product\\\\src\\\\components\\\\Orders\\\\Orders.tsx\",\n                lineNumber: 66,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\ReactTasks\\\\orders-product\\\\src\\\\components\\\\Orders\\\\Orders.tsx\",\n            lineNumber: 65,\n            columnNumber: 7\n        }, _this);\n    };\n    var closeModal = function() {\n        setIsOpen(false);\n        (0,_reducer_productsSlice__WEBPACK_IMPORTED_MODULE_8__.setSelectedOrder)(null);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_ListItemsOrders_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_ListItemsOrders_module_scss__WEBPACK_IMPORTED_MODULE_3___default().count),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/images/logo/round.png\",\n                        alt: \"plus\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\ReactTasks\\\\orders-product\\\\src\\\\components\\\\Orders\\\\Orders.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Приходы / \",\n                            orders.length\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\ReactTasks\\\\orders-product\\\\src\\\\components\\\\Orders\\\\Orders.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\ReactTasks\\\\orders-product\\\\src\\\\components\\\\Orders\\\\Orders.tsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat((_ListItemsOrders_module_scss__WEBPACK_IMPORTED_MODULE_3___default().listContainer), \" \").concat(isOpen ? (_ListItemsOrders_module_scss__WEBPACK_IMPORTED_MODULE_3___default().open) : \"\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_window__WEBPACK_IMPORTED_MODULE_12__.FixedSizeList, {\n                        className: (_ListItemsOrders_module_scss__WEBPACK_IMPORTED_MODULE_3___default().list),\n                        height: 600,\n                        itemCount: ordersWithProducts.length,\n                        itemSize: itemHeight,\n                        width: \"\".concat(isOpen ? \"50%\" : \"100%\"),\n                        children: Row\n                    }, void 0, false, {\n                        fileName: \"C:\\\\ReactTasks\\\\orders-product\\\\src\\\\components\\\\Orders\\\\Orders.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, _this),\n                    isOpen && selectedOrder && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ListProductsInfo__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        selected: selectedOrder,\n                        products: selectedOrder.products,\n                        closeModal: closeModal,\n                        remove: handleRemoveProductFromOrder\n                    }, void 0, false, {\n                        fileName: \"C:\\\\ReactTasks\\\\orders-product\\\\src\\\\components\\\\Orders\\\\Orders.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\ReactTasks\\\\orders-product\\\\src\\\\components\\\\Orders\\\\Orders.tsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\ReactTasks\\\\orders-product\\\\src\\\\components\\\\Orders\\\\Orders.tsx\",\n        lineNumber: 83,\n        columnNumber: 5\n    }, _this);\n};\n_s(Orders, \"W+ch+Zisyy91aQkoWJpiCJ0ERZ4=\", false, function() {\n    return [\n        _reducer_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch,\n        _reducer_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _reducer_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _reducer_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _reducer_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector\n    ];\n});\n_c = Orders;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Orders);\nvar _c;\n$RefreshReg$(_c, \"Orders\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEyQixPQUF4QmxDLFNBQVMsUUFBUTtrQ0FFMUJXOzs7Ozs7b0JBRUZYLFVBQVVGLCtCQUNULDhEQUFDVCx5REFBZ0JBO3dCQUNmOEMsVUFBVXJDO3dCQUNWRCxVQUFVQyxjQUFjRCxRQUFRO3dCQUNoQ3NCLFlBQVlBO3dCQUNaaUIsUUFBUWpDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNcEI7R0E3Rk1WOztRQUNhYiwwREFBY0E7UUFDaEJDLDBEQUFjQTtRQUNaQSwwREFBY0E7UUFDVEEsMERBQWNBO1FBQ1RBLDBEQUFjQTs7O0tBTHJDWTtBQThGTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9PcmRlcnMvT3JkZXJzLnRzeD85ZTJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoLCB1c2VBcHBTZWxlY3RvciB9IGZyb20gXCIuLi8uLi9yZWR1Y2VyL2hvb2tzXCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL0xpc3RJdGVtc09yZGVycy5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgeyBmZXRjaE9yZGVycywgZmV0Y2hQcm9kdWN0cyB9IGZyb20gXCIuLi8uLi90aHVuay90aHVua1wiO1xyXG5pbXBvcnQgeyBGaXhlZFNpemVMaXN0IGFzIExpc3QsIExpc3RDaGlsZENvbXBvbmVudFByb3BzIH0gZnJvbSBcInJlYWN0LXdpbmRvd1wiO1xyXG5pbXBvcnQgTGlzdEl0ZW1zT3JkZXJzIGZyb20gXCIuL0xpc3RJdGVtc09yZGVyc1wiO1xyXG5pbXBvcnQgeyBJT3JkZXJzLCBJUHJvZHVjdHMgfSBmcm9tIFwiLi4vLi4vcmVkdWNlci90eXBlc1wiO1xyXG5pbXBvcnQgeyBjYWxjdWxhdGVUb3RhbFByaWNlIH0gZnJvbSBcIi4uLy4uL1V0aWxzL0NhbGN1bGF0ZVRvdGFsUHJpY2VcIjtcclxuaW1wb3J0IExpc3RQcm9kdWN0c0luZm8gZnJvbSBcIi4vTGlzdFByb2R1Y3RzSW5mb1wiO1xyXG5pbXBvcnQge1xyXG4gIHJlbW92ZVByb2R1Y3RGcm9tT3JkZXIsXHJcbiAgc2V0T3JkZXJzV2l0aFByb2R1Y3RzLFxyXG4gIHNldFNlbGVjdGVkT3JkZXIsXHJcbn0gZnJvbSBcIi4uLy4uL3JlZHVjZXIvcHJvZHVjdHNTbGljZVwiO1xyXG5cclxuY29uc3QgT3JkZXJzOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XHJcbiAgY29uc3Qgb3JkZXJzID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5vcmRlcnMpO1xyXG4gIGNvbnN0IHByb2R1Y3RzID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wcm9kdWN0cyk7XHJcbiAgY29uc3Qgc2VsZWN0ZWRPcmRlciA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuc2VsZWN0ZWRPcmRlcik7XHJcbiAgY29uc3Qgb3JkZXJzV2l0aFByb2R1Y3RzID0gdXNlQXBwU2VsZWN0b3IoXHJcbiAgICAoc3RhdGUpID0+IHN0YXRlLm9yZGVyc1dpdGhQcm9kdWN0c1xyXG4gICk7XHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICBjb25zdCBpdGVtSGVpZ2h0OiBudW1iZXIgPSAxNTA7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChmZXRjaE9yZGVycygpKTtcclxuICAgIGRpc3BhdGNoKGZldGNoUHJvZHVjdHMoKSk7XHJcbiAgfSwgW2Rpc3BhdGNoXSk7XHJcblxyXG4gIC8vIE9yZGVycyB3aXRoIHByb2R1Y3RzXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHNldE9yZGVyc1dpdGhQcm9kdWN0cygpKTtcclxuICB9LCBbb3JkZXJzLCBwcm9kdWN0cywgZGlzcGF0Y2hdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmVtb3ZlUHJvZHVjdEZyb21PcmRlciA9IChwcm9kdWN0SWQ6IG51bWJlcikgPT4ge1xyXG4gICAgaWYgKHNlbGVjdGVkT3JkZXIpIHtcclxuICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgcmVtb3ZlUHJvZHVjdEZyb21PcmRlcih7IG9yZGVySWQ6IHNlbGVjdGVkT3JkZXIuaWQsIHByb2R1Y3RJZCB9KVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCB1cGRhdGVkUHJvZHVjdHMgPSBzZWxlY3RlZE9yZGVyLnByb2R1Y3RzLmZpbHRlcihcclxuICAgICAgICAocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCAhPT0gcHJvZHVjdElkXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHVwZGF0ZWRPcmRlciA9IHsgLi4uc2VsZWN0ZWRPcmRlciwgcHJvZHVjdHM6IHVwZGF0ZWRQcm9kdWN0cyB9O1xyXG4gICAgICBkaXNwYXRjaChzZXRTZWxlY3RlZE9yZGVyKHVwZGF0ZWRPcmRlcikpO1xyXG5cclxuICAgICAgZGlzcGF0Y2goc2V0T3JkZXJzV2l0aFByb2R1Y3RzKCkpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IFJvdyA9ICh7IGluZGV4IH06IExpc3RDaGlsZENvbXBvbmVudFByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBpdGVtOiBJT3JkZXJzID0gb3JkZXJzV2l0aFByb2R1Y3RzW2luZGV4XTtcclxuICAgIGNvbnN0IHByb2R1Y3RzQ291bnQgPSBpdGVtXHJcblxyXG4gICAgY29uc3QgcHJpY2VVU0QgPSBjYWxjdWxhdGVUb3RhbFByaWNlKGl0ZW0ucHJvZHVjdHMsIFwiVVNEXCIpO1xyXG4gICAgY29uc3QgcHJpY2VVQUggPSBjYWxjdWxhdGVUb3RhbFByaWNlKGl0ZW0ucHJvZHVjdHMsIFwiVUFIXCIpO1xyXG5cclxuICAgIGNvbnN0IG9wZW5Qcm9kdWN0c0luZm8gPSAoKSA9PiB7XHJcbiAgICAgIHNldElzT3Blbih0cnVlKTtcclxuICAgICAgZGlzcGF0Y2goc2V0U2VsZWN0ZWRPcmRlcihpdGVtKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPExpc3RJdGVtc09yZGVyc1xyXG4gICAgICAgICAga2V5PXtpdGVtLmlkfVxyXG4gICAgICAgICAgaXRlbT17aXRlbX1cclxuICAgICAgICAgIHByaWNlVVNEPXtwcmljZVVTRH1cclxuICAgICAgICAgIHByaWNlVUFIPXtwcmljZVVBSH1cclxuICAgICAgICAgIHByb2R1Y3RzQ291bnQ9e3Byb2R1Y3RzQ291bnR9XHJcbiAgICAgICAgICBvcGVuUHJvZHVjdHNJbmZvPXtvcGVuUHJvZHVjdHNJbmZvfVxyXG4gICAgICAgICAgaXNPcGVuPXtpc09wZW59XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcbiAgY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcclxuICAgIHNldElzT3BlbihmYWxzZSk7XHJcbiAgICBzZXRTZWxlY3RlZE9yZGVyKG51bGwpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLkNvbnRhaW5lcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvdW50fT5cclxuICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbG9nby9yb3VuZC5wbmdcIiBhbHQ9XCJwbHVzXCIgLz5cclxuICAgICAgICA8cD7Qn9GA0LjRhdC+0LTRiyAvIHtvcmRlcnMubGVuZ3RofTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmxpc3RDb250YWluZXJ9ICR7aXNPcGVuID8gY2xhc3Nlcy5vcGVuIDogXCJcIn1gfT5cclxuICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3R9XHJcbiAgICAgICAgICBoZWlnaHQ9ezYwMH1cclxuICAgICAgICAgIGl0ZW1Db3VudD17b3JkZXJzV2l0aFByb2R1Y3RzLmxlbmd0aH1cclxuICAgICAgICAgIGl0ZW1TaXplPXtpdGVtSGVpZ2h0fVxyXG4gICAgICAgICAgd2lkdGg9e2Ake2lzT3BlbiA/IFwiNTAlXCIgOiBcIjEwMCVcIn1gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtSb3d9XHJcbiAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIHtpc09wZW4gJiYgc2VsZWN0ZWRPcmRlciAmJiAoXHJcbiAgICAgICAgICA8TGlzdFByb2R1Y3RzSW5mb1xyXG4gICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWRPcmRlcn1cclxuICAgICAgICAgICAgcHJvZHVjdHM9e3NlbGVjdGVkT3JkZXIucHJvZHVjdHN9XHJcbiAgICAgICAgICAgIGNsb3NlTW9kYWw9e2Nsb3NlTW9kYWx9XHJcbiAgICAgICAgICAgIHJlbW92ZT17aGFuZGxlUmVtb3ZlUHJvZHVjdEZyb21PcmRlcn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBPcmRlcnM7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQXBwRGlzcGF0Y2giLCJ1c2VBcHBTZWxlY3RvciIsImNsYXNzZXMiLCJmZXRjaE9yZGVycyIsImZldGNoUHJvZHVjdHMiLCJGaXhlZFNpemVMaXN0IiwiTGlzdCIsIkxpc3RJdGVtc09yZGVycyIsImNhbGN1bGF0ZVRvdGFsUHJpY2UiLCJMaXN0UHJvZHVjdHNJbmZvIiwicmVtb3ZlUHJvZHVjdEZyb21PcmRlciIsInNldE9yZGVyc1dpdGhQcm9kdWN0cyIsInNldFNlbGVjdGVkT3JkZXIiLCJPcmRlcnMiLCJkaXNwYXRjaCIsIm9yZGVycyIsInN0YXRlIiwicHJvZHVjdHMiLCJzZWxlY3RlZE9yZGVyIiwib3JkZXJzV2l0aFByb2R1Y3RzIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwiaXRlbUhlaWdodCIsImhhbmRsZVJlbW92ZVByb2R1Y3RGcm9tT3JkZXIiLCJwcm9kdWN0SWQiLCJvcmRlcklkIiwiaWQiLCJ1cGRhdGVkUHJvZHVjdHMiLCJmaWx0ZXIiLCJwcm9kdWN0IiwidXBkYXRlZE9yZGVyIiwiUm93IiwiaW5kZXgiLCJpdGVtIiwicHJvZHVjdHNDb3VudCIsInByaWNlVVNEIiwicHJpY2VVQUgiLCJvcGVuUHJvZHVjdHNJbmZvIiwiZGl2IiwiY2xvc2VNb2RhbCIsImNsYXNzTmFtZSIsIkNvbnRhaW5lciIsImNvdW50IiwiaW1nIiwic3JjIiwiYWx0IiwicCIsImxlbmd0aCIsImxpc3RDb250YWluZXIiLCJvcGVuIiwibGlzdCIsImhlaWdodCIsIml0ZW1Db3VudCIsIml0ZW1TaXplIiwid2lkdGgiLCJzZWxlY3RlZCIsInJlbW92ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Orders/Orders.tsx\n"));

/***/ })

});