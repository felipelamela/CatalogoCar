"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/Components/GlobalComponents/TagFiltro/TagFiltro.tsx":
/*!*****************************************************************!*\
  !*** ./src/Components/GlobalComponents/TagFiltro/TagFiltro.tsx ***!
  \*****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ButtonTagFiltro_ButtonTagFiltro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ButtonTagFiltro/ButtonTagFiltro */ \"./src/Components/GlobalComponents/ButtonTagFiltro/ButtonTagFiltro.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst TagFiltro = (param)=>{\n    let { Text } = param;\n    _s();\n    const [modalAtivo, SetModalAtivo] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const [valorFiltro, setValorFiltro] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    function handleClick() {\n        SetModalAtivo((modalAtivo)=>!modalAtivo);\n        console.log(modalAtivo);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleClick,\n                    children: Text\n                }, void 0, false, {\n                    fileName: \"/Users/mariacristinalima/Desktop/CatalogoCar/frontend/src/Components/GlobalComponents/TagFiltro/TagFiltro.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ButtonTagFiltro_ButtonTagFiltro__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    ativaModal: modalAtivo,\n                    Text: \"valor\"\n                }, void 0, false, {\n                    fileName: \"/Users/mariacristinalima/Desktop/CatalogoCar/frontend/src/Components/GlobalComponents/TagFiltro/TagFiltro.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mariacristinalima/Desktop/CatalogoCar/frontend/src/Components/GlobalComponents/TagFiltro/TagFiltro.tsx\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(TagFiltro, \"gqUnVb2/ZP+TVuk2ZlamtkIHJYk=\");\n_c = TagFiltro;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TagFiltro);\nvar _c;\n$RefreshReg$(_c, \"TagFiltro\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9HbG9iYWxDb21wb25lbnRzL1RhZ0ZpbHRyby9UYWdGaWx0cm8udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQzBCO0FBQ3NDO0FBS2hFLE1BQU1FLFlBQXVDO1FBQUMsRUFBRUMsSUFBSSxFQUFFOztJQUNwRCxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR0wscURBQWMsQ0FBVTtJQUM1RCxNQUFNLENBQUNPLGFBQWFDLGVBQWUsR0FBR1IscURBQWMsQ0FBVTtJQUU5RCxTQUFTUztRQUNQSixjQUFjLENBQUNELGFBQWUsQ0FBQ0E7UUFDL0JNLFFBQVFDLEdBQUcsQ0FBQ1A7SUFDZDtJQUVBLHFCQUNFO2tCQUNFLDRFQUFDUTs7OEJBQ0MsOERBQUNDO29CQUFPQyxTQUFTTDs4QkFBY047Ozs7Ozs4QkFDL0IsOERBQUNGLHdFQUFlQTtvQkFDZGMsWUFBWVg7b0JBQ1pELE1BQUs7Ozs7Ozs7Ozs7Ozs7QUFNZjtHQXJCTUQ7S0FBQUE7QUF1Qk4sK0RBQWVBLFNBQVNBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvR2xvYmFsQ29tcG9uZW50cy9UYWdGaWx0cm8vVGFnRmlsdHJvLnRzeD9kMDc4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJ1dHRvblRhZ0ZpbHRybyBmcm9tIFwiLi4vQnV0dG9uVGFnRmlsdHJvL0J1dHRvblRhZ0ZpbHRyb1wiXG5cbmludGVyZmFjZSBUYWdGaWx0cm9Qcm9wcnMge1xuICBUZXh0OiBzdHJpbmdcbn1cbmNvbnN0IFRhZ0ZpbHRybzogUmVhY3QuRkM8VGFnRmlsdHJvUHJvcHJzPiA9ICh7IFRleHQgfSkgPT4ge1xuICBjb25zdCBbbW9kYWxBdGl2bywgU2V0TW9kYWxBdGl2b10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcbiAgY29uc3QgW3ZhbG9yRmlsdHJvLCBzZXRWYWxvckZpbHRyb10gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KGBgKVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCkge1xuICAgIFNldE1vZGFsQXRpdm8oKG1vZGFsQXRpdm8pID0+ICFtb2RhbEF0aXZvKVxuICAgIGNvbnNvbGUubG9nKG1vZGFsQXRpdm8pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT57VGV4dH08L2J1dHRvbj5cbiAgICAgICAgPEJ1dHRvblRhZ0ZpbHRyb1xuICAgICAgICAgIGF0aXZhTW9kYWw9e21vZGFsQXRpdm99XG4gICAgICAgICAgVGV4dD1cInZhbG9yXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgXG5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWdGaWx0cm8iXSwibmFtZXMiOlsiUmVhY3QiLCJCdXR0b25UYWdGaWx0cm8iLCJUYWdGaWx0cm8iLCJUZXh0IiwibW9kYWxBdGl2byIsIlNldE1vZGFsQXRpdm8iLCJ1c2VTdGF0ZSIsInZhbG9yRmlsdHJvIiwic2V0VmFsb3JGaWx0cm8iLCJoYW5kbGVDbGljayIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIiwiYXRpdmFNb2RhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Components/GlobalComponents/TagFiltro/TagFiltro.tsx\n"));

/***/ })

});