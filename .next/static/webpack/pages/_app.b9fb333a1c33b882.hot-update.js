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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ \"./pages/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_family_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/family.jpeg */ \"./assets/family.jpeg\");\n/* harmony import */ var _assets_home_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/home.jpg */ \"./assets/home.jpg\");\n/* harmony import */ var _assets_keroarts_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/keroarts.jpeg */ \"./assets/keroarts.jpeg\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [clicked, setClicked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [position, setPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const imageList = [\n        _assets_home_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        _assets_family_jpeg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        _assets_keroarts_jpeg__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setTimeout(()=>{}, timeout);\n    }, [\n        position\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"main\",\n        children: !clicked ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Ol\\xe1 mundo!\"\n                }, void 0, false, {\n                    fileName: \"/workspaces/tabnews-clone/pages/_app.js\",\n                    lineNumber: 25,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"button\",\n                    onClick: ()=>setClicked(true),\n                    children: \"Clique aqui para ver o futuro acontecer\"\n                }, void 0, false, {\n                    fileName: \"/workspaces/tabnews-clone/pages/_app.js\",\n                    lineNumber: 26,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"image-container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {\n                src: imageList[position],\n                onClick: ()=>setClicked(false)\n            }, void 0, false, {\n                fileName: \"/workspaces/tabnews-clone/pages/_app.js\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"/workspaces/tabnews-clone/pages/_app.js\",\n            lineNumber: 29,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/workspaces/tabnews-clone/pages/_app.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"3kq5y/W+EIEat8wYPZcD0+4eg6Q=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ3RCO0FBQ29CO0FBQ0w7QUFDUztBQUNoQjtBQUVmLFNBQVNNLE9BQU87O0lBQzNCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHUCwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzVDLE1BQU0sQ0FBQ1EsVUFBVUMsWUFBWSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUV6QyxNQUFNVSxZQUFZO1FBQUNSLHdEQUFJQTtRQUFFRCwyREFBTUE7UUFBRUUsNkRBQVFBO0tBQUM7SUFFMUNKLGdEQUFTQSxDQUFDLElBQUs7UUFDWFksV0FBVyxJQUFNLENBRWpCLEdBQUdDO0lBRVAsR0FBRTtRQUFDSjtLQUFTO0lBRVoscUJBQ0EsOERBQUNLO1FBQUlDLFdBQVU7a0JBQ1YsQ0FBQ1Isd0JBQ0Y7OzhCQUNJLDhEQUFDUzs4QkFBRzs7Ozs7OzhCQUNKLDhEQUFDRjtvQkFBSUMsV0FBVTtvQkFBU0UsU0FBUyxJQUFNVCxXQUFXLElBQUk7OEJBQUc7Ozs7Ozs7eUNBRzdELDhEQUFDTTtZQUFJQyxXQUFVO3NCQUNYLDRFQUFDVixtREFBS0E7Z0JBQUNhLEtBQUtQLFNBQVMsQ0FBQ0YsU0FBUztnQkFBR1EsU0FBUyxJQUFNVCxXQUFXLEtBQUs7Ozs7Ozs7Ozs7Z0JBQy9EOzs7Ozs7QUFJZCxDQUFDO0dBM0J1QkY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgZmFtaWx5IGZyb20gJy4uL2Fzc2V0cy9mYW1pbHkuanBlZydcbmltcG9ydCBob21lIGZyb20gJy4uL2Fzc2V0cy9ob21lLmpwZydcbmltcG9ydCBrZXJvYXJ0cyBmcm9tICcuLi9hc3NldHMva2Vyb2FydHMuanBlZydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAgIGNvbnN0IFtjbGlja2VkLCBzZXRDbGlja2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbcG9zaXRpb24sIHNldFBvc2l0aW9uXSA9IHVzZVN0YXRlKDApO1xuXG4gICAgY29uc3QgaW1hZ2VMaXN0ID0gW2hvbWUsIGZhbWlseSwga2Vyb2FydHNdO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+e1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICB9LCB0aW1lb3V0KTtcblxuICAgIH0sW3Bvc2l0aW9uXSlcblxuICAgIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgICAgeyFjbGlja2VkID9cbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxoMT5PbMOhIG11bmRvITwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYnV0dG9uJyBvbkNsaWNrPXsoKSA9PiBzZXRDbGlja2VkKHRydWUpfT5DbGlxdWUgYXF1aSBwYXJhIHZlciBvIGZ1dHVybyBhY29udGVjZXI8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgICAgIDpcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ltYWdlLWNvbnRhaW5lcic+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpbWFnZUxpc3RbcG9zaXRpb25dfSAgb25DbGljaz17KCkgPT4gc2V0Q2xpY2tlZChmYWxzZSl9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgfVxuICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJmYW1pbHkiLCJob21lIiwia2Vyb2FydHMiLCJJbWFnZSIsIkhvbWUiLCJjbGlja2VkIiwic2V0Q2xpY2tlZCIsInBvc2l0aW9uIiwic2V0UG9zaXRpb24iLCJpbWFnZUxpc3QiLCJzZXRUaW1lb3V0IiwidGltZW91dCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwib25DbGljayIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});