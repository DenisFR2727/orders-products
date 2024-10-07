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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/_/_object_spread */ \"./node_modules/@swc/helpers/esm/_object_spread.js\");\n/* harmony import */ var _swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/_/_object_spread_props */ \"./node_modules/@swc/helpers/esm/_object_spread_props.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducer_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../reducer/hooks */ \"./src/reducer/hooks.ts\");\n/* harmony import */ var _ListItemsOrders_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ListItemsOrders.module.scss */ \"./src/components/Orders/ListItemsOrders.module.scss\");\n/* harmony import */ var _ListItemsOrders_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ListItemsOrders_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _thunk_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../thunk/thunk */ \"./src/thunk/thunk.ts\");\n/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-window */ \"./node_modules/react-window/dist/index.esm.js\");\n/* harmony import */ var _ListItemsOrders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ListItemsOrders */ \"./src/components/Orders/ListItemsOrders.tsx\");\n/* harmony import */ var _Utils_CalculateTotalPrice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Utils/CalculateTotalPrice */ \"./src/Utils/CalculateTotalPrice.ts\");\n/* harmony import */ var _ListProductsInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ListProductsInfo */ \"./src/components/Orders/ListProductsInfo.tsx\");\n/* harmony import */ var _reducer_productsSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../reducer/productsSlice */ \"./src/reducer/productsSlice.ts\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar Orders = function() {\n    _s();\n    var dispatch = (0,_reducer_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    var orders = (0,_reducer_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(function(state) {\n        return state.orders;\n    });\n    var products = (0,_reducer_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(function(state) {\n        return state.products;\n    });\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_9__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), isOpen = _useState[0], setIsOpen = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_9__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), selectedOrder = _useState1[0], setSelectedOrder = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_9__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), ordersWithProducts = _useState2[0], setOrdersWithProducts = _useState2[1];\n    var itemHeight = 150;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        dispatch((0,_thunk_thunk__WEBPACK_IMPORTED_MODULE_4__.fetchOrders)());\n        dispatch((0,_thunk_thunk__WEBPACK_IMPORTED_MODULE_4__.fetchProducts)());\n    }, [\n        dispatch\n    ]);\n    // Orders with products\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var updatedOrdersWithProducts = orders.map(function(order) {\n            return (0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_10__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_11__._)({}, order), {\n                products: products.filter(function(product) {\n                    return product.order === order.id;\n                })\n            });\n        });\n        setOrdersWithProducts(updatedOrdersWithProducts);\n    }, [\n        orders,\n        products\n    ]);\n    var handleRemoveProductFromOrder = function(productId) {\n        if (selectedOrder) {\n            dispatch((0,_reducer_productsSlice__WEBPACK_IMPORTED_MODULE_8__.removeProductFromOrder)({\n                orderId: selectedOrder.id,\n                productId: productId\n            }));\n            var updatedProducts = selectedOrder.products.filter(function(product) {\n                return product.id !== productId;\n            });\n            var updatedOrder = (0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_10__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_11__._)({}, selectedOrder), {\n                products: updatedProducts\n            });\n            setSelectedOrder(updatedOrder);\n            var updatedOrders = ordersWithProducts.map(function(order) {\n                return order.id === updatedOrder.id ? updatedOrder : order;\n            });\n            setOrdersWithProducts(updatedOrders);\n        }\n    };\n    var Row = function(param) {\n        var index = param.index;\n        var _item_products;\n        var item = ordersWithProducts[index];\n        var productsCount = ((_item_products = item.products) === null || _item_products === void 0 ? void 0 : _item_products.length) || 0;\n        var priceUSD = (0,_Utils_CalculateTotalPrice__WEBPACK_IMPORTED_MODULE_6__.calculateTotalPrice)(item.products, \"USD\");\n        var priceUAH = (0,_Utils_CalculateTotalPrice__WEBPACK_IMPORTED_MODULE_6__.calculateTotalPrice)(item.products, \"UAH\");\n        var openProductsInfo = function() {\n            setIsOpen(true);\n            dispatch(setSelectedOrder({\n                item: item\n            }));\n        // setSelectedOrder(item);\n        };\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ListItemsOrders__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                item: item,\n                priceUSD: priceUSD,\n                priceUAH: priceUAH,\n                productsCount: productsCount,\n                openProductsInfo: openProductsInfo,\n                isOpen: isOpen\n            }, item.id, false, {\n                fileName: \"C:\\\\ReactTasks\\\\orders-product\\\\src\\\\components\\\\Orders\\\\Orders.tsx\",\n                lineNumber: 70,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\ReactTasks\\\\orders-product\\\\src\\\\components\\\\Orders\\\\Orders.tsx\",\n            lineNumber: 69,\n            columnNumber: 7\n        }, _this);\n    };\n    var closeModal = function() {\n        setIsOpen(false);\n        setSelectedOrder(null);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_ListItemsOrders_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_ListItemsOrders_module_scss__WEBPACK_IMPORTED_MODULE_3___default().count),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/images/logo/round.png\",\n                        alt: \"plus\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\ReactTasks\\\\orders-product\\\\src\\\\components\\\\Orders\\\\Orders.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Приходы / \",\n                            orders.length\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\ReactTasks\\\\orders-product\\\\src\\\\components\\\\Orders\\\\Orders.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\ReactTasks\\\\orders-product\\\\src\\\\components\\\\Orders\\\\Orders.tsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat((_ListItemsOrders_module_scss__WEBPACK_IMPORTED_MODULE_3___default().listContainer), \" \").concat(isOpen ? (_ListItemsOrders_module_scss__WEBPACK_IMPORTED_MODULE_3___default().open) : \"\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_window__WEBPACK_IMPORTED_MODULE_12__.FixedSizeList, {\n                        className: (_ListItemsOrders_module_scss__WEBPACK_IMPORTED_MODULE_3___default().list),\n                        height: 600,\n                        itemCount: ordersWithProducts.length,\n                        itemSize: itemHeight,\n                        width: \"\".concat(isOpen ? \"50%\" : \"100%\"),\n                        children: Row\n                    }, void 0, false, {\n                        fileName: \"C:\\\\ReactTasks\\\\orders-product\\\\src\\\\components\\\\Orders\\\\Orders.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, _this),\n                    isOpen && selectedOrder && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ListProductsInfo__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        selected: selectedOrder,\n                        products: selectedOrder.products,\n                        closeModal: closeModal,\n                        remove: handleRemoveProductFromOrder\n                    }, void 0, false, {\n                        fileName: \"C:\\\\ReactTasks\\\\orders-product\\\\src\\\\components\\\\Orders\\\\Orders.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\ReactTasks\\\\orders-product\\\\src\\\\components\\\\Orders\\\\Orders.tsx\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\ReactTasks\\\\orders-product\\\\src\\\\components\\\\Orders\\\\Orders.tsx\",\n        lineNumber: 87,\n        columnNumber: 5\n    }, _this);\n};\n_s(Orders, \"LmY8n+RhbWGEbWmD/dMeQNDvvXY=\", false, function() {\n    return [\n        _reducer_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch,\n        _reducer_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _reducer_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector\n    ];\n});\n_c = Orders;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Orders);\nvar _c;\n$RefreshReg$(_c, \"Orders\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9PcmRlcnMvT3JkZXJzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ2tCO0FBQ2pCO0FBQ1c7QUFDZTtBQUM5QjtBQUVzQjtBQUNwQjtBQUNtQjtBQUVyRSxJQUFNYyxTQUFtQjs7SUFDdkIsSUFBTUMsV0FBV1osOERBQWNBO0lBQy9CLElBQU1hLFNBQVNaLDhEQUFjQSxDQUFDLFNBQUNhO2VBQVVBLE1BQU1ELE1BQU07O0lBQ3JELElBQU1FLFdBQVdkLDhEQUFjQSxDQUFDLFNBQUNhO2VBQVVBLE1BQU1DLFFBQVE7O0lBQ3pELElBQTRCaEIsWUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFVLFlBQXZDaUIsU0FBcUJqQixjQUFia0IsWUFBYWxCO0lBQzVCLElBQTBDQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQWlCLFdBQTVEbUIsZ0JBQW1DbkIsZUFBcEJvQixtQkFBb0JwQjtJQUMxQyxJQUFvREEsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFZLEVBQUUsT0FBbkVxQixxQkFBNkNyQixlQUF6QnNCLHdCQUF5QnRCO0lBQ3BELElBQU11QixhQUFxQjtJQUUzQnhCLGdEQUFTQSxDQUFDO1FBQ1JjLFNBQVNULHlEQUFXQTtRQUNwQlMsU0FBU1IsMkRBQWFBO0lBQ3hCLEdBQUc7UUFBQ1E7S0FBUztJQUViLHVCQUF1QjtJQUN2QmQsZ0RBQVNBLENBQUM7UUFDUixJQUFNeUIsNEJBQTRCVixPQUFPVyxHQUFHLENBQUMsU0FBQ0M7bUJBQW9CLHdJQUM3REE7Z0JBQ0hWLFVBQVVBLFNBQVNXLE1BQU0sQ0FDdkIsU0FBQ0M7MkJBQXVCQSxRQUFRRixLQUFLLEtBQUtBLE1BQU1HLEVBQUU7Ozs7UUFHdERQLHNCQUFzQkU7SUFDeEIsR0FBRztRQUFDVjtRQUFRRTtLQUFTO0lBRXJCLElBQU1jLCtCQUErQixTQUFDQztRQUNwQyxJQUFJWixlQUFlO1lBQ2pCTixTQUNFRiw4RUFBc0JBLENBQUM7Z0JBQUVxQixTQUFTYixjQUFjVSxFQUFFO2dCQUFFRSxXQUFBQTtZQUFVO1lBRWhFLElBQU1FLGtCQUFrQmQsY0FBY0gsUUFBUSxDQUFDVyxNQUFNLENBQ25ELFNBQUNDO3VCQUFZQSxRQUFRQyxFQUFFLEtBQUtFOztZQUU5QixJQUFNRyxlQUFlLHdJQUFLZjtnQkFBZUgsVUFBVWlCOztZQUNuRGIsaUJBQWlCYztZQUVqQixJQUFNQyxnQkFBZ0JkLG1CQUFtQkksR0FBRyxDQUFDLFNBQUNDO3VCQUM1Q0EsTUFBTUcsRUFBRSxLQUFLSyxhQUFhTCxFQUFFLEdBQUdLLGVBQWVSOztZQUVoREosc0JBQXNCYTtRQUN4QjtJQUNGO0lBRUEsSUFBTUMsTUFBTTtZQUFHQyxjQUFBQTtZQUVTQztRQUR0QixJQUFNQSxPQUFnQmpCLGtCQUFrQixDQUFDZ0IsTUFBTTtRQUMvQyxJQUFNRSxnQkFBZ0JELEVBQUFBLGlCQUFBQSxLQUFLdEIsUUFBUSxjQUFic0IscUNBQUFBLGVBQWVFLE1BQU0sS0FBSTtRQUUvQyxJQUFNQyxXQUFXaEMsK0VBQW1CQSxDQUFDNkIsS0FBS3RCLFFBQVEsRUFBRTtRQUNwRCxJQUFNMEIsV0FBV2pDLCtFQUFtQkEsQ0FBQzZCLEtBQUt0QixRQUFRLEVBQUU7UUFFcEQsSUFBTTJCLG1CQUFtQjtZQUN2QnpCLFVBQVU7WUFDVkwsU0FBU08saUJBQWlCO2dCQUFDa0IsTUFBS0E7WUFBSTtRQUNwQywwQkFBMEI7UUFDNUI7UUFFQSxxQkFDRSw4REFBQ007c0JBQ0MsNEVBQUNwQyx3REFBZUE7Z0JBRWQ4QixNQUFNQTtnQkFDTkcsVUFBVUE7Z0JBQ1ZDLFVBQVVBO2dCQUNWSCxlQUFlQTtnQkFDZkksa0JBQWtCQTtnQkFDbEIxQixRQUFRQTtlQU5IcUIsS0FBS1QsRUFBRTs7Ozs7Ozs7OztJQVVwQjtJQUNBLElBQU1nQixhQUFhO1FBQ2pCM0IsVUFBVTtRQUNWRSxpQkFBaUI7SUFDbkI7SUFDQSxxQkFDRSw4REFBQ3dCO1FBQUlFLFdBQVczQywrRUFBaUI7OzBCQUMvQiw4REFBQ3lDO2dCQUFJRSxXQUFXM0MsMkVBQWE7O2tDQUMzQiw4REFBQzhDO3dCQUFJQyxLQUFJO3dCQUF5QkMsS0FBSTs7Ozs7O2tDQUN0Qyw4REFBQ0M7OzRCQUFFOzRCQUFXdEMsT0FBTzBCLE1BQU07Ozs7Ozs7Ozs7Ozs7MEJBRTdCLDhEQUFDSTtnQkFBSUUsV0FBVyxHQUE0QjdCLE9BQXpCZCxtRkFBcUIsRUFBQyxLQUE4QixPQUEzQmMsU0FBU2QsMEVBQVksR0FBRzs7a0NBQ2xFLDhEQUFDSSx3REFBSUE7d0JBQ0h1QyxXQUFXM0MsMEVBQVk7d0JBQ3ZCcUQsUUFBUTt3QkFDUkMsV0FBV3BDLG1CQUFtQm1CLE1BQU07d0JBQ3BDa0IsVUFBVW5DO3dCQUNWb0MsT0FBTyxHQUEyQixPQUF4QjFDLFNBQVMsUUFBUTtrQ0FFMUJtQjs7Ozs7O29CQUVGbkIsVUFBVUUsK0JBQ1QsOERBQUNULHlEQUFnQkE7d0JBQ2ZrRCxVQUFVekM7d0JBQ1ZILFVBQVVHLGNBQWNILFFBQVE7d0JBQ2hDNkIsWUFBWUE7d0JBQ1pnQixRQUFRL0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1wQjtHQXJHTWxCOztRQUNhWCwwREFBY0E7UUFDaEJDLDBEQUFjQTtRQUNaQSwwREFBY0E7OztLQUgzQlU7QUFzR04sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvT3JkZXJzL09yZGVycy50c3g/OWUyZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCwgdXNlQXBwU2VsZWN0b3IgfSBmcm9tIFwiLi4vLi4vcmVkdWNlci9ob29rc1wiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9MaXN0SXRlbXNPcmRlcnMubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHsgZmV0Y2hPcmRlcnMsIGZldGNoUHJvZHVjdHMgfSBmcm9tIFwiLi4vLi4vdGh1bmsvdGh1bmtcIjtcclxuaW1wb3J0IHsgRml4ZWRTaXplTGlzdCBhcyBMaXN0LCBMaXN0Q2hpbGRDb21wb25lbnRQcm9wcyB9IGZyb20gXCJyZWFjdC13aW5kb3dcIjtcclxuaW1wb3J0IExpc3RJdGVtc09yZGVycyBmcm9tIFwiLi9MaXN0SXRlbXNPcmRlcnNcIjtcclxuaW1wb3J0IHsgSU9yZGVycywgSVByb2R1Y3RzIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXIvdHlwZXNcIjtcclxuaW1wb3J0IHsgY2FsY3VsYXRlVG90YWxQcmljZSB9IGZyb20gXCIuLi8uLi9VdGlscy9DYWxjdWxhdGVUb3RhbFByaWNlXCI7XHJcbmltcG9ydCBMaXN0UHJvZHVjdHNJbmZvIGZyb20gXCIuL0xpc3RQcm9kdWN0c0luZm9cIjtcclxuaW1wb3J0IHsgcmVtb3ZlUHJvZHVjdEZyb21PcmRlciB9IGZyb20gXCIuLi8uLi9yZWR1Y2VyL3Byb2R1Y3RzU2xpY2VcIjtcclxuXHJcbmNvbnN0IE9yZGVyczogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IG9yZGVycyA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUub3JkZXJzKTtcclxuICBjb25zdCBwcm9kdWN0cyA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucHJvZHVjdHMpO1xyXG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkT3JkZXIsIHNldFNlbGVjdGVkT3JkZXJdID0gdXNlU3RhdGU8SU9yZGVycyB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFtvcmRlcnNXaXRoUHJvZHVjdHMsIHNldE9yZGVyc1dpdGhQcm9kdWN0c10gPSB1c2VTdGF0ZTxJT3JkZXJzW10+KFtdKTtcclxuICBjb25zdCBpdGVtSGVpZ2h0OiBudW1iZXIgPSAxNTA7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChmZXRjaE9yZGVycygpKTtcclxuICAgIGRpc3BhdGNoKGZldGNoUHJvZHVjdHMoKSk7XHJcbiAgfSwgW2Rpc3BhdGNoXSk7XHJcblxyXG4gIC8vIE9yZGVycyB3aXRoIHByb2R1Y3RzXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHVwZGF0ZWRPcmRlcnNXaXRoUHJvZHVjdHMgPSBvcmRlcnMubWFwKChvcmRlcjogSU9yZGVycykgPT4gKHtcclxuICAgICAgLi4ub3JkZXIsXHJcbiAgICAgIHByb2R1Y3RzOiBwcm9kdWN0cy5maWx0ZXIoXHJcbiAgICAgICAgKHByb2R1Y3Q6IElQcm9kdWN0cykgPT4gcHJvZHVjdC5vcmRlciA9PT0gb3JkZXIuaWRcclxuICAgICAgKSxcclxuICAgIH0pKTtcclxuICAgIHNldE9yZGVyc1dpdGhQcm9kdWN0cyh1cGRhdGVkT3JkZXJzV2l0aFByb2R1Y3RzKTtcclxuICB9LCBbb3JkZXJzLCBwcm9kdWN0c10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVSZW1vdmVQcm9kdWN0RnJvbU9yZGVyID0gKHByb2R1Y3RJZDogbnVtYmVyKSA9PiB7XHJcbiAgICBpZiAoc2VsZWN0ZWRPcmRlcikge1xyXG4gICAgICBkaXNwYXRjaChcclxuICAgICAgICByZW1vdmVQcm9kdWN0RnJvbU9yZGVyKHsgb3JkZXJJZDogc2VsZWN0ZWRPcmRlci5pZCwgcHJvZHVjdElkIH0pXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHVwZGF0ZWRQcm9kdWN0cyA9IHNlbGVjdGVkT3JkZXIucHJvZHVjdHMuZmlsdGVyKFxyXG4gICAgICAgIChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkICE9PSBwcm9kdWN0SWRcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgdXBkYXRlZE9yZGVyID0geyAuLi5zZWxlY3RlZE9yZGVyLCBwcm9kdWN0czogdXBkYXRlZFByb2R1Y3RzIH07XHJcbiAgICAgIHNldFNlbGVjdGVkT3JkZXIodXBkYXRlZE9yZGVyKTtcclxuXHJcbiAgICAgIGNvbnN0IHVwZGF0ZWRPcmRlcnMgPSBvcmRlcnNXaXRoUHJvZHVjdHMubWFwKChvcmRlcikgPT5cclxuICAgICAgICBvcmRlci5pZCA9PT0gdXBkYXRlZE9yZGVyLmlkID8gdXBkYXRlZE9yZGVyIDogb3JkZXJcclxuICAgICAgKTtcclxuICAgICAgc2V0T3JkZXJzV2l0aFByb2R1Y3RzKHVwZGF0ZWRPcmRlcnMpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IFJvdyA9ICh7IGluZGV4IH06IExpc3RDaGlsZENvbXBvbmVudFByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBpdGVtOiBJT3JkZXJzID0gb3JkZXJzV2l0aFByb2R1Y3RzW2luZGV4XTtcclxuICAgIGNvbnN0IHByb2R1Y3RzQ291bnQgPSBpdGVtLnByb2R1Y3RzPy5sZW5ndGggfHwgMDtcclxuXHJcbiAgICBjb25zdCBwcmljZVVTRCA9IGNhbGN1bGF0ZVRvdGFsUHJpY2UoaXRlbS5wcm9kdWN0cywgXCJVU0RcIik7XHJcbiAgICBjb25zdCBwcmljZVVBSCA9IGNhbGN1bGF0ZVRvdGFsUHJpY2UoaXRlbS5wcm9kdWN0cywgXCJVQUhcIik7XHJcblxyXG4gICAgY29uc3Qgb3BlblByb2R1Y3RzSW5mbyA9ICgpID0+IHtcclxuICAgICAgc2V0SXNPcGVuKHRydWUpO1xyXG4gICAgICBkaXNwYXRjaChzZXRTZWxlY3RlZE9yZGVyKHtpdGVtOml0ZW19KSk7XHJcbiAgICAgIC8vIHNldFNlbGVjdGVkT3JkZXIoaXRlbSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPExpc3RJdGVtc09yZGVyc1xyXG4gICAgICAgICAga2V5PXtpdGVtLmlkfVxyXG4gICAgICAgICAgaXRlbT17aXRlbX1cclxuICAgICAgICAgIHByaWNlVVNEPXtwcmljZVVTRH1cclxuICAgICAgICAgIHByaWNlVUFIPXtwcmljZVVBSH1cclxuICAgICAgICAgIHByb2R1Y3RzQ291bnQ9e3Byb2R1Y3RzQ291bnR9XHJcbiAgICAgICAgICBvcGVuUHJvZHVjdHNJbmZvPXtvcGVuUHJvZHVjdHNJbmZvfVxyXG4gICAgICAgICAgaXNPcGVuPXtpc09wZW59XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcbiAgY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcclxuICAgIHNldElzT3BlbihmYWxzZSk7XHJcbiAgICBzZXRTZWxlY3RlZE9yZGVyKG51bGwpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLkNvbnRhaW5lcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvdW50fT5cclxuICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbG9nby9yb3VuZC5wbmdcIiBhbHQ9XCJwbHVzXCIgLz5cclxuICAgICAgICA8cD7Qn9GA0LjRhdC+0LTRiyAvIHtvcmRlcnMubGVuZ3RofTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmxpc3RDb250YWluZXJ9ICR7aXNPcGVuID8gY2xhc3Nlcy5vcGVuIDogXCJcIn1gfT5cclxuICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3R9XHJcbiAgICAgICAgICBoZWlnaHQ9ezYwMH1cclxuICAgICAgICAgIGl0ZW1Db3VudD17b3JkZXJzV2l0aFByb2R1Y3RzLmxlbmd0aH1cclxuICAgICAgICAgIGl0ZW1TaXplPXtpdGVtSGVpZ2h0fVxyXG4gICAgICAgICAgd2lkdGg9e2Ake2lzT3BlbiA/IFwiNTAlXCIgOiBcIjEwMCVcIn1gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtSb3d9XHJcbiAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIHtpc09wZW4gJiYgc2VsZWN0ZWRPcmRlciAmJiAoXHJcbiAgICAgICAgICA8TGlzdFByb2R1Y3RzSW5mb1xyXG4gICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWRPcmRlcn1cclxuICAgICAgICAgICAgcHJvZHVjdHM9e3NlbGVjdGVkT3JkZXIucHJvZHVjdHN9XHJcbiAgICAgICAgICAgIGNsb3NlTW9kYWw9e2Nsb3NlTW9kYWx9XHJcbiAgICAgICAgICAgIHJlbW92ZT17aGFuZGxlUmVtb3ZlUHJvZHVjdEZyb21PcmRlcn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBPcmRlcnM7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQXBwRGlzcGF0Y2giLCJ1c2VBcHBTZWxlY3RvciIsImNsYXNzZXMiLCJmZXRjaE9yZGVycyIsImZldGNoUHJvZHVjdHMiLCJGaXhlZFNpemVMaXN0IiwiTGlzdCIsIkxpc3RJdGVtc09yZGVycyIsImNhbGN1bGF0ZVRvdGFsUHJpY2UiLCJMaXN0UHJvZHVjdHNJbmZvIiwicmVtb3ZlUHJvZHVjdEZyb21PcmRlciIsIk9yZGVycyIsImRpc3BhdGNoIiwib3JkZXJzIiwic3RhdGUiLCJwcm9kdWN0cyIsImlzT3BlbiIsInNldElzT3BlbiIsInNlbGVjdGVkT3JkZXIiLCJzZXRTZWxlY3RlZE9yZGVyIiwib3JkZXJzV2l0aFByb2R1Y3RzIiwic2V0T3JkZXJzV2l0aFByb2R1Y3RzIiwiaXRlbUhlaWdodCIsInVwZGF0ZWRPcmRlcnNXaXRoUHJvZHVjdHMiLCJtYXAiLCJvcmRlciIsImZpbHRlciIsInByb2R1Y3QiLCJpZCIsImhhbmRsZVJlbW92ZVByb2R1Y3RGcm9tT3JkZXIiLCJwcm9kdWN0SWQiLCJvcmRlcklkIiwidXBkYXRlZFByb2R1Y3RzIiwidXBkYXRlZE9yZGVyIiwidXBkYXRlZE9yZGVycyIsIlJvdyIsImluZGV4IiwiaXRlbSIsInByb2R1Y3RzQ291bnQiLCJsZW5ndGgiLCJwcmljZVVTRCIsInByaWNlVUFIIiwib3BlblByb2R1Y3RzSW5mbyIsImRpdiIsImNsb3NlTW9kYWwiLCJjbGFzc05hbWUiLCJDb250YWluZXIiLCJjb3VudCIsImltZyIsInNyYyIsImFsdCIsInAiLCJsaXN0Q29udGFpbmVyIiwib3BlbiIsImxpc3QiLCJoZWlnaHQiLCJpdGVtQ291bnQiLCJpdGVtU2l6ZSIsIndpZHRoIiwic2VsZWN0ZWQiLCJyZW1vdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Orders/Orders.tsx\n"));

/***/ })

});