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

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ \"./pages/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_family_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/family.jpeg */ \"./assets/family.jpeg\");\n/* harmony import */ var _assets_home_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/home.jpg */ \"./assets/home.jpg\");\n/* harmony import */ var _assets_keroarts_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/keroarts.jpeg */ \"./assets/keroarts.jpeg\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [clicked, setClicked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [position, setPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const imageList = [\n        _assets_home_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        _assets_family_jpeg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        _assets_keroarts_jpeg__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setTimeout(()=>{\n            if (position >= imageList.length) {\n                setClicked(false);\n                return;\n            }\n            setPosition(position + 1);\n        }, 3000);\n    }, [\n        position\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"main\",\n        children: !clicked ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Ol\\xe1 mundo!\"\n                }, void 0, false, {\n                    fileName: \"/workspaces/tabnews-clone/pages/_app.js\",\n                    lineNumber: 30,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"button\",\n                    onClick: ()=>setClicked(true),\n                    children: \"Clique aqui para ver o futuro acontecer\"\n                }, void 0, false, {\n                    fileName: \"/workspaces/tabnews-clone/pages/_app.js\",\n                    lineNumber: 31,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"image-container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {\n                src: imageList[position],\n                onClick: ()=>setClicked(false)\n            }, void 0, false, {\n                fileName: \"/workspaces/tabnews-clone/pages/_app.js\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"/workspaces/tabnews-clone/pages/_app.js\",\n            lineNumber: 34,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/workspaces/tabnews-clone/pages/_app.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"3kq5y/W+EIEat8wYPZcD0+4eg6Q=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ3RCO0FBQ3FCO0FBQ0w7QUFDUztBQUNoQjtBQUVoQixTQUFTTSxPQUFPOztJQUMzQixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1AsK0NBQVFBLENBQUMsS0FBSztJQUM1QyxNQUFNLENBQUNRLFVBQVVDLFlBQVksR0FBR1QsK0NBQVFBLENBQUM7SUFFekMsTUFBTVUsWUFBWTtRQUFDUix3REFBSUE7UUFBRUQsMkRBQU1BO1FBQUVFLDZEQUFRQTtLQUFDO0lBRTFDSixnREFBU0EsQ0FBQyxJQUFLO1FBQ1hZLFdBQVcsSUFBTTtZQUNiLElBQUdILFlBQVlFLFVBQVVFLE1BQU0sRUFBQztnQkFDNUJMLFdBQVcsS0FBSztnQkFDaEI7WUFDSixDQUFDO1lBRURFLFlBQVlELFdBQVM7UUFDekIsR0FBRztJQUVQLEdBQUU7UUFBQ0E7S0FBUztJQUVaLHFCQUNBLDhEQUFDSztRQUFJQyxXQUFVO2tCQUNWLENBQUNSLHdCQUNGOzs4QkFDSSw4REFBQ1M7OEJBQUc7Ozs7Ozs4QkFDSiw4REFBQ0Y7b0JBQUlDLFdBQVU7b0JBQVNFLFNBQVMsSUFBTVQsV0FBVyxJQUFJOzhCQUFHOzs7Ozs7O3lDQUc3RCw4REFBQ007WUFBSUMsV0FBVTtzQkFDWCw0RUFBQ1YsbURBQUtBO2dCQUFDYSxLQUFLUCxTQUFTLENBQUNGLFNBQVM7Z0JBQUdRLFNBQVMsSUFBTVQsV0FBVyxLQUFLOzs7Ozs7Ozs7O2dCQUMvRDs7Ozs7O0FBSWQsQ0FBQztHQWhDdUJGO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IGZhbWlseSBmcm9tICcuLi9hc3NldHMvZmFtaWx5LmpwZWcnO1xuaW1wb3J0IGhvbWUgZnJvbSAnLi4vYXNzZXRzL2hvbWUuanBnJztcbmltcG9ydCBrZXJvYXJ0cyBmcm9tICcuLi9hc3NldHMva2Vyb2FydHMuanBlZyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgY29uc3QgW2NsaWNrZWQsIHNldENsaWNrZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtwb3NpdGlvbiwgc2V0UG9zaXRpb25dID0gdXNlU3RhdGUoMCk7XG5cbiAgICBjb25zdCBpbWFnZUxpc3QgPSBbaG9tZSwgZmFtaWx5LCBrZXJvYXJ0c107XG5cbiAgICB1c2VFZmZlY3QoKCkgPT57XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYocG9zaXRpb24gPj0gaW1hZ2VMaXN0Lmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgc2V0Q2xpY2tlZChmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZXRQb3NpdGlvbihwb3NpdGlvbisxKTtcbiAgICAgICAgfSwgMzAwMCk7XG5cbiAgICB9LFtwb3NpdGlvbl0pO1xuXG4gICAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICB7IWNsaWNrZWQgP1xuICAgICAgICA8PlxuICAgICAgICAgICAgPGgxPk9sw6EgbXVuZG8hPC9oMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b24nIG9uQ2xpY2s9eygpID0+IHNldENsaWNrZWQodHJ1ZSl9PkNsaXF1ZSBhcXVpIHBhcmEgdmVyIG8gZnV0dXJvIGFjb250ZWNlcjwvZGl2PlxuICAgICAgICA8Lz5cbiAgICAgICAgOlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW1hZ2UtY29udGFpbmVyJz5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e2ltYWdlTGlzdFtwb3NpdGlvbl19ICBvbkNsaWNrPXsoKSA9PiBzZXRDbGlja2VkKGZhbHNlKX0vPlxuICAgICAgICA8L2Rpdj5cbiAgICB9XG4gICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImZhbWlseSIsImhvbWUiLCJrZXJvYXJ0cyIsIkltYWdlIiwiSG9tZSIsImNsaWNrZWQiLCJzZXRDbGlja2VkIiwicG9zaXRpb24iLCJzZXRQb3NpdGlvbiIsImltYWdlTGlzdCIsInNldFRpbWVvdXQiLCJsZW5ndGgiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIm9uQ2xpY2siLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});