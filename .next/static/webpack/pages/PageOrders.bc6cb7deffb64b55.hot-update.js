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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/_/_object_spread */ \"./node_modules/@swc/helpers/esm/_object_spread.js\");\n/* harmony import */ var _swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/_/_object_spread_props */ \"./node_modules/@swc/helpers/esm/_object_spread_props.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducer_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../reducer/hooks */ \"./src/reducer/hooks.ts\");\n/* harmony import */ var _ListItemsOrders_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ListItemsOrders.module.scss */ \"./src/components/Orders/ListItemsOrders.module.scss\");\n/* harmony import */ var _ListItemsOrders_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ListItemsOrders_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _thunk_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../thunk/thunk */ \"./src/thunk/thunk.ts\");\n/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-window */ \"./node_modules/react-window/dist/index.esm.js\");\n/* harmony import */ var _ListItemsOrders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ListItemsOrders */ \"./src/components/Orders/ListItemsOrders.tsx\");\n/* harmony import */ var _Utils_CalculateTotalPrice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Utils/CalculateTotalPrice */ \"./src/Utils/CalculateTotalPrice.ts\");\n/* harmony import */ var _ListProductsInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ListProductsInfo */ \"./src/components/Orders/ListProductsInfo.tsx\");\n/* harmony import */ var _reducer_productsSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../reducer/productsSlice */ \"./src/reducer/productsSlice.ts\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar Orders = function() {\n    _s();\n    var dispatch = (0,_reducer_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    var orders = (0,_reducer_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(function(state) {\n        return state.orders;\n    });\n    var products = (0,_reducer_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(function(state) {\n        return state.products;\n    });\n    var selectedOrder = (0,_reducer_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(function(state) {\n        return state.selectedOrder;\n    });\n    var ordersWithProducts = (0,_reducer_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(function(state) {\n        return state.ordersWithProducts;\n    });\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_9__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), isOpen = _useState[0], setIsOpen = _useState[1];\n    var itemHeight = 150;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        dispatch((0,_thunk_thunk__WEBPACK_IMPORTED_MODULE_4__.fetchOrders)());\n        dispatch((0,_thunk_thunk__WEBPACK_IMPORTED_MODULE_4__.fetchProducts)());\n    }, [\n        dispatch\n    ]);\n    // Orders with products\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        dispatch((0,_reducer_productsSlice__WEBPACK_IMPORTED_MODULE_8__.setOrdersWithProducts)());\n    }, [\n        orders,\n        products,\n        dispatch\n    ]);\n    var handleRemoveProductFromOrder = function(productId) {\n        if (selectedOrder) {\n            dispatch((0,_reducer_productsSlice__WEBPACK_IMPORTED_MODULE_8__.removeProductFromOrder)({\n                orderId: selectedOrder.id,\n                productId: productId\n            }));\n            var updatedProducts = selectedOrder.products.filter(function(product) {\n                return product.id !== productId;\n            });\n            var updatedOrder = (0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_10__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_11__._)({}, selectedOrder), {\n                products: updatedProducts\n            });\n            dispatch((0,_reducer_productsSlice__WEBPACK_IMPORTED_MODULE_8__.setSelectedOrder)(updatedOrder));\n            dispatch((0,_reducer_productsSlice__WEBPACK_IMPORTED_MODULE_8__.setOrdersWithProducts)());\n        }\n    };\n    var Row = function(param) {\n        var index = param.index;\n        var item = selectedOrder[index];\n        var productsCount = item;\n        var priceUSD = (0,_Utils_CalculateTotalPrice__WEBPACK_IMPORTED_MODULE_6__.calculateTotalPrice)(item.products, \"USD\");\n        var priceUAH = (0,_Utils_CalculateTotalPrice__WEBPACK_IMPORTED_MODULE_6__.calculateTotalPrice)(item.products, \"UAH\");\n        var openProductsInfo = function() {\n            setIsOpen(true);\n            dispatch((0,_reducer_productsSlice__WEBPACK_IMPORTED_MODULE_8__.setSelectedOrder)(item));\n        };\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ListItemsOrders__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                item: item,\n                priceUSD: priceUSD,\n                priceUAH: priceUAH,\n                productsCount: productsCount,\n                openProductsInfo: openProductsInfo,\n                isOpen: isOpen\n            }, item.id, false, {\n                fileName: \"C:\\\\ReactTasks\\\\orders-product\\\\src\\\\components\\\\Orders\\\\Orders.tsx\",\n                lineNumber: 66,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\ReactTasks\\\\orders-product\\\\src\\\\components\\\\Orders\\\\Orders.tsx\",\n            lineNumber: 65,\n            columnNumber: 7\n        }, _this);\n    };\n    var closeModal = function() {\n        setIsOpen(false);\n        (0,_reducer_productsSlice__WEBPACK_IMPORTED_MODULE_8__.setSelectedOrder)(null);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_ListItemsOrders_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_ListItemsOrders_module_scss__WEBPACK_IMPORTED_MODULE_3___default().count),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/images/logo/round.png\",\n                        alt: \"plus\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\ReactTasks\\\\orders-product\\\\src\\\\components\\\\Orders\\\\Orders.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Приходы / \",\n                            orders.length\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\ReactTasks\\\\orders-product\\\\src\\\\components\\\\Orders\\\\Orders.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\ReactTasks\\\\orders-product\\\\src\\\\components\\\\Orders\\\\Orders.tsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat((_ListItemsOrders_module_scss__WEBPACK_IMPORTED_MODULE_3___default().listContainer), \" \").concat(isOpen ? (_ListItemsOrders_module_scss__WEBPACK_IMPORTED_MODULE_3___default().open) : \"\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_window__WEBPACK_IMPORTED_MODULE_12__.FixedSizeList, {\n                        className: (_ListItemsOrders_module_scss__WEBPACK_IMPORTED_MODULE_3___default().list),\n                        height: 600,\n                        itemCount: ordersWithProducts.length,\n                        itemSize: itemHeight,\n                        width: \"\".concat(isOpen ? \"50%\" : \"100%\"),\n                        children: Row\n                    }, void 0, false, {\n                        fileName: \"C:\\\\ReactTasks\\\\orders-product\\\\src\\\\components\\\\Orders\\\\Orders.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, _this),\n                    isOpen && selectedOrder && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ListProductsInfo__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        selected: selectedOrder,\n                        products: selectedOrder.products,\n                        closeModal: closeModal,\n                        remove: handleRemoveProductFromOrder\n                    }, void 0, false, {\n                        fileName: \"C:\\\\ReactTasks\\\\orders-product\\\\src\\\\components\\\\Orders\\\\Orders.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\ReactTasks\\\\orders-product\\\\src\\\\components\\\\Orders\\\\Orders.tsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\ReactTasks\\\\orders-product\\\\src\\\\components\\\\Orders\\\\Orders.tsx\",\n        lineNumber: 83,\n        columnNumber: 5\n    }, _this);\n};\n_s(Orders, \"W+ch+Zisyy91aQkoWJpiCJ0ERZ4=\", false, function() {\n    return [\n        _reducer_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch,\n        _reducer_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _reducer_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _reducer_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _reducer_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector\n    ];\n});\n_c = Orders;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Orders);\nvar _c;\n$RefreshReg$(_c, \"Orders\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MkIsT0FBeEJsQyxTQUFTLFFBQVE7a0NBRTFCVzs7Ozs7O29CQUVGWCxVQUFVRiwrQkFDVCw4REFBQ1QseURBQWdCQTt3QkFDZjhDLFVBQVVyQzt3QkFDVkQsVUFBVUMsY0FBY0QsUUFBUTt3QkFDaENzQixZQUFZQTt3QkFDWmlCLFFBQVFqQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXBCO0dBN0ZNVjs7UUFDYWIsMERBQWNBO1FBQ2hCQywwREFBY0E7UUFDWkEsMERBQWNBO1FBQ1RBLDBEQUFjQTtRQUNUQSwwREFBY0E7OztLQUxyQ1k7QUE4Rk4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvT3JkZXJzL09yZGVycy50c3g/OWUyZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCwgdXNlQXBwU2VsZWN0b3IgfSBmcm9tIFwiLi4vLi4vcmVkdWNlci9ob29rc1wiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9MaXN0SXRlbXNPcmRlcnMubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHsgZmV0Y2hPcmRlcnMsIGZldGNoUHJvZHVjdHMgfSBmcm9tIFwiLi4vLi4vdGh1bmsvdGh1bmtcIjtcclxuaW1wb3J0IHsgRml4ZWRTaXplTGlzdCBhcyBMaXN0LCBMaXN0Q2hpbGRDb21wb25lbnRQcm9wcyB9IGZyb20gXCJyZWFjdC13aW5kb3dcIjtcclxuaW1wb3J0IExpc3RJdGVtc09yZGVycyBmcm9tIFwiLi9MaXN0SXRlbXNPcmRlcnNcIjtcclxuaW1wb3J0IHsgSU9yZGVycywgSVByb2R1Y3RzIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXIvdHlwZXNcIjtcclxuaW1wb3J0IHsgY2FsY3VsYXRlVG90YWxQcmljZSB9IGZyb20gXCIuLi8uLi9VdGlscy9DYWxjdWxhdGVUb3RhbFByaWNlXCI7XHJcbmltcG9ydCBMaXN0UHJvZHVjdHNJbmZvIGZyb20gXCIuL0xpc3RQcm9kdWN0c0luZm9cIjtcclxuaW1wb3J0IHtcclxuICByZW1vdmVQcm9kdWN0RnJvbU9yZGVyLFxyXG4gIHNldE9yZGVyc1dpdGhQcm9kdWN0cyxcclxuICBzZXRTZWxlY3RlZE9yZGVyLFxyXG59IGZyb20gXCIuLi8uLi9yZWR1Y2VyL3Byb2R1Y3RzU2xpY2VcIjtcclxuXHJcbmNvbnN0IE9yZGVyczogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IG9yZGVycyA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUub3JkZXJzKTtcclxuICBjb25zdCBwcm9kdWN0cyA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucHJvZHVjdHMpO1xyXG4gIGNvbnN0IHNlbGVjdGVkT3JkZXIgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnNlbGVjdGVkT3JkZXIpO1xyXG4gIGNvbnN0IG9yZGVyc1dpdGhQcm9kdWN0cyA9IHVzZUFwcFNlbGVjdG9yKFxyXG4gICAgKHN0YXRlKSA9PiBzdGF0ZS5vcmRlcnNXaXRoUHJvZHVjdHNcclxuICApO1xyXG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgaXRlbUhlaWdodDogbnVtYmVyID0gMTUwO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goZmV0Y2hPcmRlcnMoKSk7XHJcbiAgICBkaXNwYXRjaChmZXRjaFByb2R1Y3RzKCkpO1xyXG4gIH0sIFtkaXNwYXRjaF0pO1xyXG5cclxuICAvLyBPcmRlcnMgd2l0aCBwcm9kdWN0c1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChzZXRPcmRlcnNXaXRoUHJvZHVjdHMoKSk7XHJcbiAgfSwgW29yZGVycywgcHJvZHVjdHMsIGRpc3BhdGNoXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVJlbW92ZVByb2R1Y3RGcm9tT3JkZXIgPSAocHJvZHVjdElkOiBudW1iZXIpID0+IHtcclxuICAgIGlmIChzZWxlY3RlZE9yZGVyKSB7XHJcbiAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgIHJlbW92ZVByb2R1Y3RGcm9tT3JkZXIoeyBvcmRlcklkOiBzZWxlY3RlZE9yZGVyLmlkLCBwcm9kdWN0SWQgfSlcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgdXBkYXRlZFByb2R1Y3RzID0gc2VsZWN0ZWRPcmRlci5wcm9kdWN0cy5maWx0ZXIoXHJcbiAgICAgICAgKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgIT09IHByb2R1Y3RJZFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCB1cGRhdGVkT3JkZXIgPSB7IC4uLnNlbGVjdGVkT3JkZXIsIHByb2R1Y3RzOiB1cGRhdGVkUHJvZHVjdHMgfTtcclxuICAgICAgZGlzcGF0Y2goc2V0U2VsZWN0ZWRPcmRlcih1cGRhdGVkT3JkZXIpKTtcclxuXHJcbiAgICAgIGRpc3BhdGNoKHNldE9yZGVyc1dpdGhQcm9kdWN0cygpKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBSb3cgPSAoeyBpbmRleCB9OiBMaXN0Q2hpbGRDb21wb25lbnRQcm9wcykgPT4ge1xyXG4gICAgY29uc3QgaXRlbTogSU9yZGVycyA9IHNlbGVjdGVkT3JkZXJbaW5kZXhdO1xyXG4gICAgY29uc3QgcHJvZHVjdHNDb3VudCA9IGl0ZW1cclxuXHJcbiAgICBjb25zdCBwcmljZVVTRCA9IGNhbGN1bGF0ZVRvdGFsUHJpY2UoaXRlbS5wcm9kdWN0cywgXCJVU0RcIik7XHJcbiAgICBjb25zdCBwcmljZVVBSCA9IGNhbGN1bGF0ZVRvdGFsUHJpY2UoaXRlbS5wcm9kdWN0cywgXCJVQUhcIik7XHJcblxyXG4gICAgY29uc3Qgb3BlblByb2R1Y3RzSW5mbyA9ICgpID0+IHtcclxuICAgICAgc2V0SXNPcGVuKHRydWUpO1xyXG4gICAgICBkaXNwYXRjaChzZXRTZWxlY3RlZE9yZGVyKGl0ZW0pKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8TGlzdEl0ZW1zT3JkZXJzXHJcbiAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICBpdGVtPXtpdGVtfVxyXG4gICAgICAgICAgcHJpY2VVU0Q9e3ByaWNlVVNEfVxyXG4gICAgICAgICAgcHJpY2VVQUg9e3ByaWNlVUFIfVxyXG4gICAgICAgICAgcHJvZHVjdHNDb3VudD17cHJvZHVjdHNDb3VudH1cclxuICAgICAgICAgIG9wZW5Qcm9kdWN0c0luZm89e29wZW5Qcm9kdWN0c0luZm99XHJcbiAgICAgICAgICBpc09wZW49e2lzT3Blbn1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxuICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0SXNPcGVuKGZhbHNlKTtcclxuICAgIHNldFNlbGVjdGVkT3JkZXIobnVsbCk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuQ29udGFpbmVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY291bnR9PlxyXG4gICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2dvL3JvdW5kLnBuZ1wiIGFsdD1cInBsdXNcIiAvPlxyXG4gICAgICAgIDxwPtCf0YDQuNGF0L7QtNGLIC8ge29yZGVycy5sZW5ndGh9PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzZXMubGlzdENvbnRhaW5lcn0gJHtpc09wZW4gPyBjbGFzc2VzLm9wZW4gOiBcIlwifWB9PlxyXG4gICAgICAgIDxMaXN0XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubGlzdH1cclxuICAgICAgICAgIGhlaWdodD17NjAwfVxyXG4gICAgICAgICAgaXRlbUNvdW50PXtvcmRlcnNXaXRoUHJvZHVjdHMubGVuZ3RofVxyXG4gICAgICAgICAgaXRlbVNpemU9e2l0ZW1IZWlnaHR9XHJcbiAgICAgICAgICB3aWR0aD17YCR7aXNPcGVuID8gXCI1MCVcIiA6IFwiMTAwJVwifWB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge1Jvd31cclxuICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAge2lzT3BlbiAmJiBzZWxlY3RlZE9yZGVyICYmIChcclxuICAgICAgICAgIDxMaXN0UHJvZHVjdHNJbmZvXHJcbiAgICAgICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZE9yZGVyfVxyXG4gICAgICAgICAgICBwcm9kdWN0cz17c2VsZWN0ZWRPcmRlci5wcm9kdWN0c31cclxuICAgICAgICAgICAgY2xvc2VNb2RhbD17Y2xvc2VNb2RhbH1cclxuICAgICAgICAgICAgcmVtb3ZlPXtoYW5kbGVSZW1vdmVQcm9kdWN0RnJvbU9yZGVyfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IE9yZGVycztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VBcHBEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIiwiY2xhc3NlcyIsImZldGNoT3JkZXJzIiwiZmV0Y2hQcm9kdWN0cyIsIkZpeGVkU2l6ZUxpc3QiLCJMaXN0IiwiTGlzdEl0ZW1zT3JkZXJzIiwiY2FsY3VsYXRlVG90YWxQcmljZSIsIkxpc3RQcm9kdWN0c0luZm8iLCJyZW1vdmVQcm9kdWN0RnJvbU9yZGVyIiwic2V0T3JkZXJzV2l0aFByb2R1Y3RzIiwic2V0U2VsZWN0ZWRPcmRlciIsIk9yZGVycyIsImRpc3BhdGNoIiwib3JkZXJzIiwic3RhdGUiLCJwcm9kdWN0cyIsInNlbGVjdGVkT3JkZXIiLCJvcmRlcnNXaXRoUHJvZHVjdHMiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJpdGVtSGVpZ2h0IiwiaGFuZGxlUmVtb3ZlUHJvZHVjdEZyb21PcmRlciIsInByb2R1Y3RJZCIsIm9yZGVySWQiLCJpZCIsInVwZGF0ZWRQcm9kdWN0cyIsImZpbHRlciIsInByb2R1Y3QiLCJ1cGRhdGVkT3JkZXIiLCJSb3ciLCJpbmRleCIsIml0ZW0iLCJwcm9kdWN0c0NvdW50IiwicHJpY2VVU0QiLCJwcmljZVVBSCIsIm9wZW5Qcm9kdWN0c0luZm8iLCJkaXYiLCJjbG9zZU1vZGFsIiwiY2xhc3NOYW1lIiwiQ29udGFpbmVyIiwiY291bnQiLCJpbWciLCJzcmMiLCJhbHQiLCJwIiwibGVuZ3RoIiwibGlzdENvbnRhaW5lciIsIm9wZW4iLCJsaXN0IiwiaGVpZ2h0IiwiaXRlbUNvdW50IiwiaXRlbVNpemUiLCJ3aWR0aCIsInNlbGVjdGVkIiwicmVtb3ZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Orders/Orders.tsx\n"));

/***/ })

});