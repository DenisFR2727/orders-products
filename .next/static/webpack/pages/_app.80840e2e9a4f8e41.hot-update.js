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

/***/ "./src/components/Card/CardDeleteItem.tsx":
/*!************************************************!*\
  !*** ./src/components/Card/CardDeleteItem.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducer_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../reducer/hooks */ \"./src/reducer/hooks.ts\");\n/* harmony import */ var _UI_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UI/Modal */ \"./src/components/UI/Modal.tsx\");\n/* harmony import */ var _reducer_productsSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../reducer/productsSlice */ \"./src/reducer/productsSlice.ts\");\n/* harmony import */ var _CardDeleteItem_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CardDeleteItem.module.scss */ \"./src/components/Card/CardDeleteItem.module.scss\");\n/* harmony import */ var _CardDeleteItem_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_CardDeleteItem_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction CardDeleteItem() {\n    _s();\n    var dispatch = (0,_reducer_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    var showModalDelItem = (0,_reducer_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(function(state) {\n        return state.isShowModal;\n    });\n    var itemToDelete = (0,_reducer_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(function(state) {\n        return state.itemToDelete;\n    });\n    var currentDeleteItem = (0,_reducer_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(function(state) {\n        return state.currentDeleteItem;\n    });\n    var closeModalHandler = function() {\n        dispatch((0,_reducer_productsSlice__WEBPACK_IMPORTED_MODULE_4__.setIsShowModal)(false));\n        dispatch((0,_reducer_productsSlice__WEBPACK_IMPORTED_MODULE_4__.setItemToDelete)(null));\n        dispatch((0,_reducer_productsSlice__WEBPACK_IMPORTED_MODULE_4__.setRemoveCurrentDeleteItem)(null));\n    };\n    var СancellationItem = function() {\n        closeModalHandler();\n        dispatch((0,_reducer_productsSlice__WEBPACK_IMPORTED_MODULE_4__.setRemoveCurrentDeleteItem)(null));\n    };\n    var DeleteItem = function() {\n        if (itemToDelete) {\n            if (itemToDelete.type === \"product\") {\n                dispatch((0,_reducer_productsSlice__WEBPACK_IMPORTED_MODULE_4__.setRemoveItemProduct)(itemToDelete.id));\n            } else if (itemToDelete.type === \"order\") {\n                dispatch((0,_reducer_productsSlice__WEBPACK_IMPORTED_MODULE_4__.setRemoveItemOrder)(itemToDelete.id));\n            }\n            closeModalHandler();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: showModalDelItem && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_Modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            onClose: closeModalHandler,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_CardDeleteItem_module_scss__WEBPACK_IMPORTED_MODULE_5___default().modalDelete),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Вы уверены, что хотите удалить этот приход ?\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\ReactTasks\\\\orders-product\\\\src\\\\components\\\\Card\\\\CardDeleteItem.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: currentDeleteItem === null || currentDeleteItem === void 0 ? void 0 : currentDeleteItem.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\ReactTasks\\\\orders-product\\\\src\\\\components\\\\Card\\\\CardDeleteItem.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: СancellationItem,\n                        children: \"Отменить\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\ReactTasks\\\\orders-product\\\\src\\\\components\\\\Card\\\\CardDeleteItem.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: DeleteItem,\n                        children: \"Удалить\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\ReactTasks\\\\orders-product\\\\src\\\\components\\\\Card\\\\CardDeleteItem.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\ReactTasks\\\\orders-product\\\\src\\\\components\\\\Card\\\\CardDeleteItem.tsx\",\n                lineNumber: 44,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\ReactTasks\\\\orders-product\\\\src\\\\components\\\\Card\\\\CardDeleteItem.tsx\",\n            lineNumber: 43,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\ReactTasks\\\\orders-product\\\\src\\\\components\\\\Card\\\\CardDeleteItem.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n_s(CardDeleteItem, \"vtuRW1W5q/k69G6XFOBnjAtJNGg=\", false, function() {\n    return [\n        _reducer_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch,\n        _reducer_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _reducer_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _reducer_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector\n    ];\n});\n_c = CardDeleteItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardDeleteItem);\nvar _c;\n$RefreshReg$(_c, \"CardDeleteItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJkL0NhcmREZWxldGVJdGVtLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF3QztBQUM2QjtBQUNyQztBQU9LO0FBQ2M7QUFFbkQsU0FBU1c7O0lBQ1AsSUFBTUMsV0FBV1YsOERBQWNBO0lBQy9CLElBQU1XLG1CQUFtQlYsOERBQWNBLENBQUMsU0FBQ1c7ZUFBVUEsTUFBTUMsV0FBVzs7SUFDcEUsSUFBTUMsZUFBZWIsOERBQWNBLENBQUMsU0FBQ1c7ZUFBVUEsTUFBTUUsWUFBWTs7SUFDakUsSUFBTUMsb0JBQW9CZCw4REFBY0EsQ0FBQyxTQUFDVztlQUFVQSxNQUFNRyxpQkFBaUI7O0lBRTNFLElBQU1DLG9CQUFvQjtRQUN4Qk4sU0FBU1Asc0VBQWNBLENBQUM7UUFDeEJPLFNBQVNOLHVFQUFlQSxDQUFDO1FBQ3pCTSxTQUFTTCxrRkFBMEJBLENBQUM7SUFDdEM7SUFFQSxJQUFNWSxtQkFBbUI7UUFDdkJEO1FBQ0FOLFNBQVNMLGtGQUEwQkEsQ0FBQztJQUN0QztJQUVBLElBQU1hLGFBQWE7UUFDakIsSUFBSUosY0FBYztZQUNoQixJQUFJQSxhQUFhSyxJQUFJLEtBQUssV0FBVztnQkFDbkNULFNBQVNILDRFQUFvQkEsQ0FBQ08sYUFBYU0sRUFBRTtZQUMvQyxPQUFPLElBQUlOLGFBQWFLLElBQUksS0FBSyxTQUFTO2dCQUN4Q1QsU0FBU0osMEVBQWtCQSxDQUFDUSxhQUFhTSxFQUFFO1lBQzdDO1lBQ0FKO1FBQ0Y7SUFDRjtJQUNBLHFCQUNFLDhEQUFDakIsMkNBQVFBO2tCQUNOWSxrQ0FDQyw4REFBQ1QsaURBQUtBO1lBQUNtQixTQUFTTDtzQkFDZCw0RUFBQ007Z0JBQUlDLFdBQVdmLGdGQUFtQjs7a0NBQ2pDLDhEQUFDaUI7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ0g7a0NBQUtQLDhCQUFBQSx3Q0FBQUEsa0JBQW1CVyxLQUFLOzs7Ozs7a0NBQzlCLDhEQUFDQzt3QkFBT0MsU0FBU1g7a0NBQWtCOzs7Ozs7a0NBQ25DLDhEQUFDVTt3QkFBT0MsU0FBU1Y7a0NBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNekM7R0F6Q1NUOztRQUNVVCwwREFBY0E7UUFDTkMsMERBQWNBO1FBQ2xCQSwwREFBY0E7UUFDVEEsMERBQWNBOzs7S0FKakNRO0FBMkNULCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NhcmQvQ2FyZERlbGV0ZUl0ZW0udHN4PzJkZmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoLCB1c2VBcHBTZWxlY3RvciB9IGZyb20gXCIuLi8uLi9yZWR1Y2VyL2hvb2tzXCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwiLi4vVUkvTW9kYWxcIjtcclxuaW1wb3J0IHtcclxuICBzZXRJc1Nob3dNb2RhbCxcclxuICBzZXRJdGVtVG9EZWxldGUsXHJcbiAgc2V0UmVtb3ZlQ3VycmVudERlbGV0ZUl0ZW0sXHJcbiAgc2V0UmVtb3ZlSXRlbU9yZGVyLFxyXG4gIHNldFJlbW92ZUl0ZW1Qcm9kdWN0LFxyXG59IGZyb20gXCIuLi8uLi9yZWR1Y2VyL3Byb2R1Y3RzU2xpY2VcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vQ2FyZERlbGV0ZUl0ZW0ubW9kdWxlLnNjc3NcIjtcclxuXHJcbmZ1bmN0aW9uIENhcmREZWxldGVJdGVtKCkge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKTtcclxuICBjb25zdCBzaG93TW9kYWxEZWxJdGVtID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5pc1Nob3dNb2RhbCk7XHJcbiAgY29uc3QgaXRlbVRvRGVsZXRlID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5pdGVtVG9EZWxldGUpO1xyXG4gIGNvbnN0IGN1cnJlbnREZWxldGVJdGVtID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jdXJyZW50RGVsZXRlSXRlbSk7XHJcblxyXG4gIGNvbnN0IGNsb3NlTW9kYWxIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goc2V0SXNTaG93TW9kYWwoZmFsc2UpKTtcclxuICAgIGRpc3BhdGNoKHNldEl0ZW1Ub0RlbGV0ZShudWxsKSk7XHJcbiAgICBkaXNwYXRjaChzZXRSZW1vdmVDdXJyZW50RGVsZXRlSXRlbShudWxsKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qg0KFhbmNlbGxhdGlvbkl0ZW0gPSAoKSA9PiB7XHJcbiAgICBjbG9zZU1vZGFsSGFuZGxlcigpO1xyXG4gICAgZGlzcGF0Y2goc2V0UmVtb3ZlQ3VycmVudERlbGV0ZUl0ZW0obnVsbCkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IERlbGV0ZUl0ZW0gPSAoKSA9PiB7XHJcbiAgICBpZiAoaXRlbVRvRGVsZXRlKSB7XHJcbiAgICAgIGlmIChpdGVtVG9EZWxldGUudHlwZSA9PT0gXCJwcm9kdWN0XCIpIHtcclxuICAgICAgICBkaXNwYXRjaChzZXRSZW1vdmVJdGVtUHJvZHVjdChpdGVtVG9EZWxldGUuaWQpKTtcclxuICAgICAgfSBlbHNlIGlmIChpdGVtVG9EZWxldGUudHlwZSA9PT0gXCJvcmRlclwiKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goc2V0UmVtb3ZlSXRlbU9yZGVyKGl0ZW1Ub0RlbGV0ZS5pZCkpO1xyXG4gICAgICB9XHJcbiAgICAgIGNsb3NlTW9kYWxIYW5kbGVyKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICB7c2hvd01vZGFsRGVsSXRlbSAmJiAoXHJcbiAgICAgICAgPE1vZGFsIG9uQ2xvc2U9e2Nsb3NlTW9kYWxIYW5kbGVyfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1vZGFsRGVsZXRlfT5cclxuICAgICAgICAgICAgPGgyPtCS0Ysg0YPQstC10YDQtdC90YssINGH0YLQviDRhdC+0YLQuNGC0LUg0YPQtNCw0LvQuNGC0Ywg0Y3RgtC+0YIg0L/RgNC40YXQvtC0ID88L2gyPlxyXG4gICAgICAgICAgICA8ZGl2PntjdXJyZW50RGVsZXRlSXRlbT8udGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz170KFhbmNlbGxhdGlvbkl0ZW19PtCe0YLQvNC10L3QuNGC0Yw8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtEZWxldGVJdGVtfT7Qo9C00LDQu9C40YLRjDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgKX1cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZERlbGV0ZUl0ZW07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkZyYWdtZW50IiwidXNlQXBwRGlzcGF0Y2giLCJ1c2VBcHBTZWxlY3RvciIsIk1vZGFsIiwic2V0SXNTaG93TW9kYWwiLCJzZXRJdGVtVG9EZWxldGUiLCJzZXRSZW1vdmVDdXJyZW50RGVsZXRlSXRlbSIsInNldFJlbW92ZUl0ZW1PcmRlciIsInNldFJlbW92ZUl0ZW1Qcm9kdWN0IiwiY2xhc3NlcyIsIkNhcmREZWxldGVJdGVtIiwiZGlzcGF0Y2giLCJzaG93TW9kYWxEZWxJdGVtIiwic3RhdGUiLCJpc1Nob3dNb2RhbCIsIml0ZW1Ub0RlbGV0ZSIsImN1cnJlbnREZWxldGVJdGVtIiwiY2xvc2VNb2RhbEhhbmRsZXIiLCLQoWFuY2VsbGF0aW9uSXRlbSIsIkRlbGV0ZUl0ZW0iLCJ0eXBlIiwiaWQiLCJvbkNsb3NlIiwiZGl2IiwiY2xhc3NOYW1lIiwibW9kYWxEZWxldGUiLCJoMiIsInRpdGxlIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Card/CardDeleteItem.tsx\n"));

/***/ })

});