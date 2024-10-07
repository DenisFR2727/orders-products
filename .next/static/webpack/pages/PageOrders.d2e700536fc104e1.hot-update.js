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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/_/_object_spread */ \"./node_modules/@swc/helpers/esm/_object_spread.js\");\n/* harmony import */ var _swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/_/_object_spread_props */ \"./node_modules/@swc/helpers/esm/_object_spread_props.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducer_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../reducer/hooks */ \"./src/reducer/hooks.ts\");\n/* harmony import */ var _ListItemsOrders_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ListItemsOrders.module.scss */ \"./src/components/Orders/ListItemsOrders.module.scss\");\n/* harmony import */ var _ListItemsOrders_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ListItemsOrders_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _thunk_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../thunk/thunk */ \"./src/thunk/thunk.ts\");\n/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-window */ \"./node_modules/react-window/dist/index.esm.js\");\n/* harmony import */ var _ListItemsOrders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ListItemsOrders */ \"./src/components/Orders/ListItemsOrders.tsx\");\n/* harmony import */ var _Utils_CalculateTotalPrice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Utils/CalculateTotalPrice */ \"./src/Utils/CalculateTotalPrice.ts\");\n/* harmony import */ var _ListProductsInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ListProductsInfo */ \"./src/components/Orders/ListProductsInfo.tsx\");\n/* harmony import */ var _reducer_productsSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../reducer/productsSlice */ \"./src/reducer/productsSlice.ts\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar Orders = function() {\n    _s();\n    var dispatch = (0,_reducer_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    var orders = (0,_reducer_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(function(state) {\n        return state.orders;\n    });\n    var products = (0,_reducer_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(function(state) {\n        return state.products;\n    });\n    var selectedOrder = (0,_reducer_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(function(state) {\n        return state.selectedOrder;\n    });\n    var ordersWithProducts = (0,_reducer_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(function(state) {\n        return state.ordersWithProducts;\n    });\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_9__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), isOpen = _useState[0], setIsOpen = _useState[1];\n    // const [ordersWithProducts, setOrdersWithProducts] = useState<IOrders[]>([]);\n    var itemHeight = 150;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        dispatch((0,_thunk_thunk__WEBPACK_IMPORTED_MODULE_4__.fetchOrders)());\n        dispatch((0,_thunk_thunk__WEBPACK_IMPORTED_MODULE_4__.fetchProducts)());\n    }, [\n        dispatch\n    ]);\n    // Orders with products\n    // useEffect(() => {\n    //   setOrdersWithProducts(updatedOrdersWithProducts);\n    // }, [orders, products]);\n    var handleRemoveProductFromOrder = function(productId) {\n        if (selectedOrder) {\n            dispatch((0,_reducer_productsSlice__WEBPACK_IMPORTED_MODULE_8__.removeProductFromOrder)({\n                orderId: selectedOrder.id,\n                productId: productId\n            }));\n            var updatedProducts = selectedOrder.products.filter(function(product) {\n                return product.id !== productId;\n            });\n            var updatedOrder = (0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_10__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_11__._)({}, selectedOrder), {\n                products: updatedProducts\n            });\n            dispatch((0,_reducer_productsSlice__WEBPACK_IMPORTED_MODULE_8__.setSelectedOrder)(updatedOrder));\n            var updatedOrders = ordersWithProducts.map(function(order) {\n                return order.id === updatedOrder.id ? updatedOrder : order;\n            });\n            dispatch(setOrdersWithProducts(updatedOrders));\n        }\n    };\n    var Row = function(param) {\n        var index = param.index;\n        var _item_products;\n        var item = ordersWithProducts[index];\n        var productsCount = ((_item_products = item.products) === null || _item_products === void 0 ? void 0 : _item_products.length) || 0;\n        var priceUSD = (0,_Utils_CalculateTotalPrice__WEBPACK_IMPORTED_MODULE_6__.calculateTotalPrice)(item.products, \"USD\");\n        var priceUAH = (0,_Utils_CalculateTotalPrice__WEBPACK_IMPORTED_MODULE_6__.calculateTotalPrice)(item.products, \"UAH\");\n        var openProductsInfo = function() {\n            setIsOpen(true);\n            dispatch((0,_reducer_productsSlice__WEBPACK_IMPORTED_MODULE_8__.setSelectedOrder)(item));\n        };\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ListItemsOrders__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                item: item,\n                priceUSD: priceUSD,\n                priceUAH: priceUAH,\n                productsCount: productsCount,\n                openProductsInfo: openProductsInfo,\n                isOpen: isOpen\n            }, item.id, false, {\n                fileName: \"C:\\\\ReactTasks\\\\orders-product\\\\src\\\\components\\\\Orders\\\\Orders.tsx\",\n                lineNumber: 70,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\ReactTasks\\\\orders-product\\\\src\\\\components\\\\Orders\\\\Orders.tsx\",\n            lineNumber: 69,\n            columnNumber: 7\n        }, _this);\n    };\n    var closeModal = function() {\n        setIsOpen(false);\n        (0,_reducer_productsSlice__WEBPACK_IMPORTED_MODULE_8__.setSelectedOrder)(null);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_ListItemsOrders_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_ListItemsOrders_module_scss__WEBPACK_IMPORTED_MODULE_3___default().count),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/images/logo/round.png\",\n                        alt: \"plus\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\ReactTasks\\\\orders-product\\\\src\\\\components\\\\Orders\\\\Orders.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Приходы / \",\n                            orders.length\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\ReactTasks\\\\orders-product\\\\src\\\\components\\\\Orders\\\\Orders.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\ReactTasks\\\\orders-product\\\\src\\\\components\\\\Orders\\\\Orders.tsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat((_ListItemsOrders_module_scss__WEBPACK_IMPORTED_MODULE_3___default().listContainer), \" \").concat(isOpen ? (_ListItemsOrders_module_scss__WEBPACK_IMPORTED_MODULE_3___default().open) : \"\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_window__WEBPACK_IMPORTED_MODULE_12__.FixedSizeList, {\n                        className: (_ListItemsOrders_module_scss__WEBPACK_IMPORTED_MODULE_3___default().list),\n                        height: 600,\n                        itemCount: ordersWithProducts.length,\n                        itemSize: itemHeight,\n                        width: \"\".concat(isOpen ? \"50%\" : \"100%\"),\n                        children: Row\n                    }, void 0, false, {\n                        fileName: \"C:\\\\ReactTasks\\\\orders-product\\\\src\\\\components\\\\Orders\\\\Orders.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, _this),\n                    isOpen && selectedOrder && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ListProductsInfo__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        selected: selectedOrder,\n                        products: selectedOrder.products,\n                        closeModal: closeModal,\n                        remove: handleRemoveProductFromOrder\n                    }, void 0, false, {\n                        fileName: \"C:\\\\ReactTasks\\\\orders-product\\\\src\\\\components\\\\Orders\\\\Orders.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\ReactTasks\\\\orders-product\\\\src\\\\components\\\\Orders\\\\Orders.tsx\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\ReactTasks\\\\orders-product\\\\src\\\\components\\\\Orders\\\\Orders.tsx\",\n        lineNumber: 87,\n        columnNumber: 5\n    }, _this);\n};\n_s(Orders, \"6DShsSbTHKlazrg7UONj7pOdBO0=\", false, function() {\n    return [\n        _reducer_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch,\n        _reducer_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _reducer_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _reducer_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _reducer_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector\n    ];\n});\n_c = Orders;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Orders);\nvar _c;\n$RefreshReg$(_c, \"Orders\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVNqQiwwRUFBWSxHQUFHOztrQ0FDbEUsOERBQUNJLHdEQUFJQTt3QkFDSHNDLFdBQVcxQywwRUFBWTt3QkFDdkJvRCxRQUFRO3dCQUNSQyxXQUFXckMsbUJBQW1Cb0IsTUFBTTt3QkFDcENrQixVQUFVbkM7d0JBQ1ZvQyxPQUFPLEdBQTJCLE9BQXhCdEMsU0FBUyxRQUFRO2tDQUUxQmU7Ozs7OztvQkFFRmYsVUFBVUYsK0JBQ1QsOERBQUNSLHlEQUFnQkE7d0JBQ2ZpRCxVQUFVekM7d0JBQ1ZELFVBQVVDLGNBQWNELFFBQVE7d0JBQ2hDMkIsWUFBWUE7d0JBQ1pnQixRQUFRckM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1wQjtHQWxHTVY7O1FBQ2FaLDBEQUFjQTtRQUNoQkMsMERBQWNBO1FBQ1pBLDBEQUFjQTtRQUNUQSwwREFBY0E7UUFDVEEsMERBQWNBOzs7S0FMckNXO0FBbUdOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL09yZGVycy9PcmRlcnMudHN4PzllMmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2gsIHVzZUFwcFNlbGVjdG9yIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXIvaG9va3NcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vTGlzdEl0ZW1zT3JkZXJzLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB7IGZldGNoT3JkZXJzLCBmZXRjaFByb2R1Y3RzIH0gZnJvbSBcIi4uLy4uL3RodW5rL3RodW5rXCI7XHJcbmltcG9ydCB7IEZpeGVkU2l6ZUxpc3QgYXMgTGlzdCwgTGlzdENoaWxkQ29tcG9uZW50UHJvcHMgfSBmcm9tIFwicmVhY3Qtd2luZG93XCI7XHJcbmltcG9ydCBMaXN0SXRlbXNPcmRlcnMgZnJvbSBcIi4vTGlzdEl0ZW1zT3JkZXJzXCI7XHJcbmltcG9ydCB7IElPcmRlcnMsIElQcm9kdWN0cyB9IGZyb20gXCIuLi8uLi9yZWR1Y2VyL3R5cGVzXCI7XHJcbmltcG9ydCB7IGNhbGN1bGF0ZVRvdGFsUHJpY2UgfSBmcm9tIFwiLi4vLi4vVXRpbHMvQ2FsY3VsYXRlVG90YWxQcmljZVwiO1xyXG5pbXBvcnQgTGlzdFByb2R1Y3RzSW5mbyBmcm9tIFwiLi9MaXN0UHJvZHVjdHNJbmZvXCI7XHJcbmltcG9ydCB7XHJcbiAgcmVtb3ZlUHJvZHVjdEZyb21PcmRlcixcclxuICBzZXRTZWxlY3RlZE9yZGVyLFxyXG59IGZyb20gXCIuLi8uLi9yZWR1Y2VyL3Byb2R1Y3RzU2xpY2VcIjtcclxuXHJcbmNvbnN0IE9yZGVyczogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IG9yZGVycyA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUub3JkZXJzKTtcclxuICBjb25zdCBwcm9kdWN0cyA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucHJvZHVjdHMpO1xyXG4gIGNvbnN0IHNlbGVjdGVkT3JkZXIgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnNlbGVjdGVkT3JkZXIpO1xyXG4gIGNvbnN0IG9yZGVyc1dpdGhQcm9kdWN0cyA9IHVzZUFwcFNlbGVjdG9yKFxyXG4gICAgKHN0YXRlKSA9PiBzdGF0ZS5vcmRlcnNXaXRoUHJvZHVjdHNcclxuICApO1xyXG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gIC8vIGNvbnN0IFtvcmRlcnNXaXRoUHJvZHVjdHMsIHNldE9yZGVyc1dpdGhQcm9kdWN0c10gPSB1c2VTdGF0ZTxJT3JkZXJzW10+KFtdKTtcclxuICBjb25zdCBpdGVtSGVpZ2h0OiBudW1iZXIgPSAxNTA7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChmZXRjaE9yZGVycygpKTtcclxuICAgIGRpc3BhdGNoKGZldGNoUHJvZHVjdHMoKSk7XHJcbiAgfSwgW2Rpc3BhdGNoXSk7XHJcblxyXG4gIC8vIE9yZGVycyB3aXRoIHByb2R1Y3RzXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIHNldE9yZGVyc1dpdGhQcm9kdWN0cyh1cGRhdGVkT3JkZXJzV2l0aFByb2R1Y3RzKTtcclxuICAvLyB9LCBbb3JkZXJzLCBwcm9kdWN0c10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVSZW1vdmVQcm9kdWN0RnJvbU9yZGVyID0gKHByb2R1Y3RJZDogbnVtYmVyKSA9PiB7XHJcbiAgICBpZiAoc2VsZWN0ZWRPcmRlcikge1xyXG4gICAgICBkaXNwYXRjaChcclxuICAgICAgICByZW1vdmVQcm9kdWN0RnJvbU9yZGVyKHsgb3JkZXJJZDogc2VsZWN0ZWRPcmRlci5pZCwgcHJvZHVjdElkIH0pXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHVwZGF0ZWRQcm9kdWN0cyA9IHNlbGVjdGVkT3JkZXIucHJvZHVjdHMuZmlsdGVyKFxyXG4gICAgICAgIChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkICE9PSBwcm9kdWN0SWRcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgdXBkYXRlZE9yZGVyID0geyAuLi5zZWxlY3RlZE9yZGVyLCBwcm9kdWN0czogdXBkYXRlZFByb2R1Y3RzIH07XHJcbiAgICAgIGRpc3BhdGNoKHNldFNlbGVjdGVkT3JkZXIodXBkYXRlZE9yZGVyKSk7XHJcblxyXG4gICAgICBjb25zdCB1cGRhdGVkT3JkZXJzID0gb3JkZXJzV2l0aFByb2R1Y3RzLm1hcCgob3JkZXIpID0+XHJcbiAgICAgICAgb3JkZXIuaWQgPT09IHVwZGF0ZWRPcmRlci5pZCA/IHVwZGF0ZWRPcmRlciA6IG9yZGVyXHJcbiAgICAgICk7XHJcbiAgICAgIGRpc3BhdGNoKHNldE9yZGVyc1dpdGhQcm9kdWN0cyh1cGRhdGVkT3JkZXJzKSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgUm93ID0gKHsgaW5kZXggfTogTGlzdENoaWxkQ29tcG9uZW50UHJvcHMpID0+IHtcclxuICAgIGNvbnN0IGl0ZW06IElPcmRlcnMgPSBvcmRlcnNXaXRoUHJvZHVjdHNbaW5kZXhdO1xyXG4gICAgY29uc3QgcHJvZHVjdHNDb3VudCA9IGl0ZW0ucHJvZHVjdHM/Lmxlbmd0aCB8fCAwO1xyXG5cclxuICAgIGNvbnN0IHByaWNlVVNEID0gY2FsY3VsYXRlVG90YWxQcmljZShpdGVtLnByb2R1Y3RzLCBcIlVTRFwiKTtcclxuICAgIGNvbnN0IHByaWNlVUFIID0gY2FsY3VsYXRlVG90YWxQcmljZShpdGVtLnByb2R1Y3RzLCBcIlVBSFwiKTtcclxuXHJcbiAgICBjb25zdCBvcGVuUHJvZHVjdHNJbmZvID0gKCkgPT4ge1xyXG4gICAgICBzZXRJc09wZW4odHJ1ZSk7XHJcbiAgICAgIGRpc3BhdGNoKHNldFNlbGVjdGVkT3JkZXIoaXRlbSkpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxMaXN0SXRlbXNPcmRlcnNcclxuICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgIGl0ZW09e2l0ZW19XHJcbiAgICAgICAgICBwcmljZVVTRD17cHJpY2VVU0R9XHJcbiAgICAgICAgICBwcmljZVVBSD17cHJpY2VVQUh9XHJcbiAgICAgICAgICBwcm9kdWN0c0NvdW50PXtwcm9kdWN0c0NvdW50fVxyXG4gICAgICAgICAgb3BlblByb2R1Y3RzSW5mbz17b3BlblByb2R1Y3RzSW5mb31cclxuICAgICAgICAgIGlzT3Blbj17aXNPcGVufVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9O1xyXG4gIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRJc09wZW4oZmFsc2UpO1xyXG4gICAgc2V0U2VsZWN0ZWRPcmRlcihudWxsKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5Db250YWluZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb3VudH0+XHJcbiAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xvZ28vcm91bmQucG5nXCIgYWx0PVwicGx1c1wiIC8+XHJcbiAgICAgICAgPHA+0J/RgNC40YXQvtC00YsgLyB7b3JkZXJzLmxlbmd0aH08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5saXN0Q29udGFpbmVyfSAke2lzT3BlbiA/IGNsYXNzZXMub3BlbiA6IFwiXCJ9YH0+XHJcbiAgICAgICAgPExpc3RcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0fVxyXG4gICAgICAgICAgaGVpZ2h0PXs2MDB9XHJcbiAgICAgICAgICBpdGVtQ291bnQ9e29yZGVyc1dpdGhQcm9kdWN0cy5sZW5ndGh9XHJcbiAgICAgICAgICBpdGVtU2l6ZT17aXRlbUhlaWdodH1cclxuICAgICAgICAgIHdpZHRoPXtgJHtpc09wZW4gPyBcIjUwJVwiIDogXCIxMDAlXCJ9YH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7Um93fVxyXG4gICAgICAgIDwvTGlzdD5cclxuICAgICAgICB7aXNPcGVuICYmIHNlbGVjdGVkT3JkZXIgJiYgKFxyXG4gICAgICAgICAgPExpc3RQcm9kdWN0c0luZm9cclxuICAgICAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkT3JkZXJ9XHJcbiAgICAgICAgICAgIHByb2R1Y3RzPXtzZWxlY3RlZE9yZGVyLnByb2R1Y3RzfVxyXG4gICAgICAgICAgICBjbG9zZU1vZGFsPXtjbG9zZU1vZGFsfVxyXG4gICAgICAgICAgICByZW1vdmU9e2hhbmRsZVJlbW92ZVByb2R1Y3RGcm9tT3JkZXJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgT3JkZXJzO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUFwcERpc3BhdGNoIiwidXNlQXBwU2VsZWN0b3IiLCJjbGFzc2VzIiwiZmV0Y2hPcmRlcnMiLCJmZXRjaFByb2R1Y3RzIiwiRml4ZWRTaXplTGlzdCIsIkxpc3QiLCJMaXN0SXRlbXNPcmRlcnMiLCJjYWxjdWxhdGVUb3RhbFByaWNlIiwiTGlzdFByb2R1Y3RzSW5mbyIsInJlbW92ZVByb2R1Y3RGcm9tT3JkZXIiLCJzZXRTZWxlY3RlZE9yZGVyIiwiT3JkZXJzIiwiZGlzcGF0Y2giLCJvcmRlcnMiLCJzdGF0ZSIsInByb2R1Y3RzIiwic2VsZWN0ZWRPcmRlciIsIm9yZGVyc1dpdGhQcm9kdWN0cyIsImlzT3BlbiIsInNldElzT3BlbiIsIml0ZW1IZWlnaHQiLCJoYW5kbGVSZW1vdmVQcm9kdWN0RnJvbU9yZGVyIiwicHJvZHVjdElkIiwib3JkZXJJZCIsImlkIiwidXBkYXRlZFByb2R1Y3RzIiwiZmlsdGVyIiwicHJvZHVjdCIsInVwZGF0ZWRPcmRlciIsInVwZGF0ZWRPcmRlcnMiLCJtYXAiLCJvcmRlciIsInNldE9yZGVyc1dpdGhQcm9kdWN0cyIsIlJvdyIsImluZGV4IiwiaXRlbSIsInByb2R1Y3RzQ291bnQiLCJsZW5ndGgiLCJwcmljZVVTRCIsInByaWNlVUFIIiwib3BlblByb2R1Y3RzSW5mbyIsImRpdiIsImNsb3NlTW9kYWwiLCJjbGFzc05hbWUiLCJDb250YWluZXIiLCJjb3VudCIsImltZyIsInNyYyIsImFsdCIsInAiLCJsaXN0Q29udGFpbmVyIiwib3BlbiIsImxpc3QiLCJoZWlnaHQiLCJpdGVtQ291bnQiLCJpdGVtU2l6ZSIsIndpZHRoIiwic2VsZWN0ZWQiLCJyZW1vdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Orders/Orders.tsx\n"));

/***/ })

});