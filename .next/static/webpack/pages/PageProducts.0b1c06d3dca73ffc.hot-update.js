"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/PageProducts",{

/***/ "./src/components/UI/ButtonRemove.tsx":
/*!********************************************!*\
  !*** ./src/components/UI/ButtonRemove.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducer_productsSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../reducer/productsSlice */ \"./src/reducer/productsSlice.ts\");\n/* harmony import */ var _reducer_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../reducer/hooks */ \"./src/reducer/hooks.ts\");\n/* harmony import */ var _ButtonRemove_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ButtonRemove.module.scss */ \"./src/components/UI/ButtonRemove.module.scss\");\n/* harmony import */ var _ButtonRemove_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ButtonRemove_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction ButtonRemove(param) {\n    var id = param.id, type = param.type;\n    _s();\n    var dispatch = (0,_reducer_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();\n    var deleteItem = function() {\n        console.log(\"Cancelling deletion\");\n        dispatch((0,_reducer_productsSlice__WEBPACK_IMPORTED_MODULE_2__.setIsShowModal)(true));\n        dispatch((0,_reducer_productsSlice__WEBPACK_IMPORTED_MODULE_2__.setItemToDelete)({\n            id: id,\n            type: type\n        })); // Зберігаємо елемент для видалення\n    // if (type === \"product\") dispatch(setRemoveItemProduct(id));\n    // else if (type === \"order\") dispatch(setRemoveItemOrder(id));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: (_ButtonRemove_module_scss__WEBPACK_IMPORTED_MODULE_4___default().del),\n        onClick: deleteItem,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            className: (_ButtonRemove_module_scss__WEBPACK_IMPORTED_MODULE_4___default().logo),\n            src: \"/images/logo/delete.png\",\n            alt: \"delete\"\n        }, void 0, false, {\n            fileName: \"C:\\\\ReactTasks\\\\orders-product\\\\src\\\\components\\\\UI\\\\ButtonRemove.tsx\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\ReactTasks\\\\orders-product\\\\src\\\\components\\\\UI\\\\ButtonRemove.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(ButtonRemove, \"BJQ1DUn/XFEl2NsQ3DWyHAXfnkY=\", false, function() {\n    return [\n        _reducer_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch\n    ];\n});\n_c = ButtonRemove;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ButtonRemove);\nvar _c;\n$RefreshReg$(_c, \"ButtonRemove\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9VSS9CdXR0b25SZW1vdmUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFNVztBQUNnQjtBQUNKO0FBT2pELFNBQVNLLGFBQWEsS0FBdUI7UUFBckJDLEtBQUYsTUFBRUEsSUFBSUMsT0FBTixNQUFNQTs7SUFDMUIsSUFBTUMsV0FBV0wsOERBQWNBO0lBRS9CLElBQU1NLGFBQWE7UUFDakJDLFFBQVFDLEdBQUcsQ0FBQztRQUNaSCxTQUFTUCxzRUFBY0EsQ0FBQztRQUN4Qk8sU0FBU04sdUVBQWVBLENBQUM7WUFBRUksSUFBQUE7WUFBSUMsTUFBQUE7UUFBSyxLQUFLLG1DQUFtQztJQUU1RSw4REFBOEQ7SUFDOUQsK0RBQStEO0lBQ2pFO0lBQ0EscUJBQ0UsOERBQUNLO1FBQU9DLFdBQVdULHNFQUFXO1FBQUVXLFNBQVNOO2tCQUN2Qyw0RUFBQ087WUFDQ0gsV0FBV1QsdUVBQVk7WUFDdkJjLEtBQUk7WUFDSkMsS0FBSTs7Ozs7Ozs7Ozs7QUFJWjtHQXBCU2Q7O1FBQ1VGLDBEQUFjQTs7O0tBRHhCRTtBQXFCVCwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9VSS9CdXR0b25SZW1vdmUudHN4PzhhOTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIHNldFJlbW92ZUl0ZW1Qcm9kdWN0LFxyXG4gIHNldFJlbW92ZUl0ZW1PcmRlcixcclxuICBzZXRJc1Nob3dNb2RhbCxcclxuICBzZXRJdGVtVG9EZWxldGUsXHJcbn0gZnJvbSBcIi4uLy4uL3JlZHVjZXIvcHJvZHVjdHNTbGljZVwiO1xyXG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCB9IGZyb20gXCIuLi8uLi9yZWR1Y2VyL2hvb2tzXCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL0J1dHRvblJlbW92ZS5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuaW50ZXJmYWNlIEl0ZW1Qcm9wcyB7XHJcbiAgaWQ6IG51bWJlcjtcclxuICB0eXBlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEJ1dHRvblJlbW92ZSh7IGlkLCB0eXBlIH06IEl0ZW1Qcm9wcykge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKTtcclxuXHJcbiAgY29uc3QgZGVsZXRlSXRlbSA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiQ2FuY2VsbGluZyBkZWxldGlvblwiKTtcclxuICAgIGRpc3BhdGNoKHNldElzU2hvd01vZGFsKHRydWUpKTtcclxuICAgIGRpc3BhdGNoKHNldEl0ZW1Ub0RlbGV0ZSh7IGlkLCB0eXBlIH0pKTsgLy8g0JfQsdC10YDRltCz0LDRlNC80L4g0LXQu9C10LzQtdC90YIg0LTQu9GPINCy0LjQtNCw0LvQtdC90L3Rj1xyXG5cclxuICAgIC8vIGlmICh0eXBlID09PSBcInByb2R1Y3RcIikgZGlzcGF0Y2goc2V0UmVtb3ZlSXRlbVByb2R1Y3QoaWQpKTtcclxuICAgIC8vIGVsc2UgaWYgKHR5cGUgPT09IFwib3JkZXJcIikgZGlzcGF0Y2goc2V0UmVtb3ZlSXRlbU9yZGVyKGlkKSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuZGVsfSBvbkNsaWNrPXtkZWxldGVJdGVtfT5cclxuICAgICAgPGltZ1xyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvfVxyXG4gICAgICAgIHNyYz1cIi9pbWFnZXMvbG9nby9kZWxldGUucG5nXCJcclxuICAgICAgICBhbHQ9XCJkZWxldGVcIlxyXG4gICAgICAvPlxyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b25SZW1vdmU7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInNldElzU2hvd01vZGFsIiwic2V0SXRlbVRvRGVsZXRlIiwidXNlQXBwRGlzcGF0Y2giLCJjbGFzc2VzIiwiQnV0dG9uUmVtb3ZlIiwiaWQiLCJ0eXBlIiwiZGlzcGF0Y2giLCJkZWxldGVJdGVtIiwiY29uc29sZSIsImxvZyIsImJ1dHRvbiIsImNsYXNzTmFtZSIsImRlbCIsIm9uQ2xpY2siLCJpbWciLCJsb2dvIiwic3JjIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/UI/ButtonRemove.tsx\n"));

/***/ })

});