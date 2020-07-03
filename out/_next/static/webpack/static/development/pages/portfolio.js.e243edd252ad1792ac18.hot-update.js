webpackHotUpdate("static/development/pages/portfolio.js",{

/***/ "./components/PortfolioPage/PortfolioItem.js":
/*!***************************************************!*\
  !*** ./components/PortfolioPage/PortfolioItem.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PortfolioItem; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Generic_ReadMore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Generic/ReadMore */ \"./components/Generic/ReadMore.js\");\n/* harmony import */ var _Generic_DateFormatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Generic/DateFormatter */ \"./components/Generic/DateFormatter.js\");\nvar _jsxFileName = \"/Users/james.wallis1@ibm.com/github/ameira.me/components/PortfolioPage/PortfolioItem.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction PortfolioItem(props) {\n  var imgSrc = props.imgSrc,\n      title = props.title,\n      date = props.date,\n      description = props.description,\n      excerpt = props.excerpt,\n      slug = props.slug;\n  console.log(props);\n  return __jsx(\"div\", {\n    className: \"flex flex-col lg:w-33% md:w-50% p-1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"bg-center bg-cover h-50vh relative\",\n    style: {\n      backgroundImage: \"url('\".concat(\"\", \"/assets/portfolio/\").concat(imgSrc, \"')\")\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"absolute top-0 left-0 bg-img-tint h-full w-full flex justify-center items-center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }, __jsx(\"h4\", {\n    className: \"text-2xl p-2 md:px-16 font-title text-center text-white\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 11\n    }\n  }, title))), __jsx(\"div\", {\n    className: \"w-full flex items-center justify-top flex-col text-center bg-grey-custom pb-16 flex-1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    className: \"text-base md:text-lg font-title py-8\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  }, __jsx(_Generic_DateFormatter__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    dateString: date,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 61\n    }\n  })), __jsx(\"p\", {\n    className: \"text-base md:text-lg font-body p-4 md:px-6 lg:px-8\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }, description), __jsx(\"p\", {\n    className: \"text-base md:text-lg font-body p-4 md:px-6 lg:px-8\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  }, \"'\", excerpt, \"'\"), __jsx(_Generic_ReadMore__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    slug: slug,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }\n  })));\n}\n_c = PortfolioItem;\n\nvar _c;\n\n$RefreshReg$(_c, \"PortfolioItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BvcnRmb2xpb1BhZ2UvUG9ydGZvbGlvSXRlbS5qcz8xZGRlIl0sIm5hbWVzIjpbIlBvcnRmb2xpb0l0ZW0iLCJwcm9wcyIsImltZ1NyYyIsInRpdGxlIiwiZGF0ZSIsImRlc2NyaXB0aW9uIiwiZXhjZXJwdCIsInNsdWciLCJjb25zb2xlIiwibG9nIiwiYmFja2dyb3VuZEltYWdlIiwicHJvY2VzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLGFBQVQsQ0FBdUJDLEtBQXZCLEVBQThCO0FBQUEsTUFDbkNDLE1BRG1DLEdBQ2lCRCxLQURqQixDQUNuQ0MsTUFEbUM7QUFBQSxNQUMzQkMsS0FEMkIsR0FDaUJGLEtBRGpCLENBQzNCRSxLQUQyQjtBQUFBLE1BQ3BCQyxJQURvQixHQUNpQkgsS0FEakIsQ0FDcEJHLElBRG9CO0FBQUEsTUFDZEMsV0FEYyxHQUNpQkosS0FEakIsQ0FDZEksV0FEYztBQUFBLE1BQ0RDLE9BREMsR0FDaUJMLEtBRGpCLENBQ0RLLE9BREM7QUFBQSxNQUNRQyxJQURSLEdBQ2lCTixLQURqQixDQUNRTSxJQURSO0FBRTNDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWVIsS0FBWjtBQUNBLFNBQ0U7QUFBSyxhQUFTLEVBQUMscUNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLG9DQUFmO0FBQW9ELFNBQUssRUFBRTtBQUFFUyxxQkFBZSxpQkFBVUMsRUFBViwrQkFBc0RULE1BQXREO0FBQWpCLEtBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxrRkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMseURBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF5RUMsS0FBekUsQ0FERixDQURGLENBREYsRUFNRTtBQUFLLGFBQVMsRUFBQyx1RkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsc0NBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFvRCxNQUFDLDhEQUFEO0FBQWUsY0FBVSxFQUFFQyxJQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQXBELENBREYsRUFFRTtBQUFHLGFBQVMsRUFBQyxvREFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW1FQyxXQUFuRSxDQUZGLEVBR0U7QUFBRyxhQUFTLEVBQUMsb0RBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFvRUMsT0FBcEUsTUFIRixFQUlFLE1BQUMseURBQUQ7QUFBVSxRQUFJLEVBQUVDLElBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixDQU5GLENBREY7QUFlRDtLQWxCdUJQLGEiLCJmaWxlIjoiLi9jb21wb25lbnRzL1BvcnRmb2xpb1BhZ2UvUG9ydGZvbGlvSXRlbS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFkTW9yZSBmcm9tICcuLi9HZW5lcmljL1JlYWRNb3JlJ1xuaW1wb3J0IERhdGVGb3JtYXR0ZXIgZnJvbSAnLi4vR2VuZXJpYy9EYXRlRm9ybWF0dGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3J0Zm9saW9JdGVtKHByb3BzKSB7XG4gIGNvbnN0IHsgaW1nU3JjLCB0aXRsZSwgZGF0ZSwgZGVzY3JpcHRpb24sIGV4Y2VycHQsIHNsdWcgfSA9IHByb3BzO1xuICBjb25zb2xlLmxvZyhwcm9wcyk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGxnOnctMzMlIG1kOnctNTAlIHAtMVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1jZW50ZXIgYmctY292ZXIgaC01MHZoIHJlbGF0aXZlXCIgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCcke3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfS9hc3NldHMvcG9ydGZvbGlvLyR7aW1nU3JjfScpYCB9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgYmctaW1nLXRpbnQgaC1mdWxsIHctZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBwLTIgbWQ6cHgtMTYgZm9udC10aXRsZSB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlXCI+e3RpdGxlfTwvaDQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LXRvcCBmbGV4LWNvbCB0ZXh0LWNlbnRlciBiZy1ncmV5LWN1c3RvbSBwYi0xNiBmbGV4LTFcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIG1kOnRleHQtbGcgZm9udC10aXRsZSBweS04XCI+PERhdGVGb3JtYXR0ZXIgZGF0ZVN0cmluZz17ZGF0ZX0gLz48L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBtZDp0ZXh0LWxnIGZvbnQtYm9keSBwLTQgbWQ6cHgtNiBsZzpweC04XCI+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIG1kOnRleHQtbGcgZm9udC1ib2R5IHAtNCBtZDpweC02IGxnOnB4LThcIj4ne2V4Y2VycHR9JzwvcD5cbiAgICAgICAgPFJlYWRNb3JlIHNsdWc9e3NsdWd9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/PortfolioPage/PortfolioItem.js\n");

/***/ })

})