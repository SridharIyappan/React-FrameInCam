(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Shared/GoTop.js":
/*!************************************!*\
  !*** ./components/Shared/GoTop.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "D:\\Frame-incam\\components\\Shared\\GoTop.js";


const GoTop = () => {
  const {
    0: isVisible,
    1: setisVisible
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    document.addEventListener('scroll', function (e) {
      toggleVisibility();
    });
  }, []);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setisVisible(true);
    } else {
      setisVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: isVisible && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "go-top active",
      onClick: () => scrollToTop(),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        className: "bx bx-up-arrow-alt"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (GoTop);

/***/ }),

/***/ "./components/Shared/Loader.js":
/*!*************************************!*\
  !*** ./components/Shared/Loader.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);


var _jsxFileName = "D:\\Frame-incam\\components\\Shared\\Loader.js";

const Loader = ({
  loading
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "preloader",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "preloader",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 7,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 15
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 11
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),

/***/ "./components/_App/Layout.js":
/*!***********************************!*\
  !*** ./components/_App/Layout.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "D:\\Frame-incam\\components\\_App\\Layout.js";


const Layout = ({
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        charSet: "utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Indice - Directory & Listing React Next Template"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, undefined), children]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./contexts/index.js":
/*!***************************!*\
  !*** ./contexts/index.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndiceProvider": function() { return /* binding */ IndiceProvider; },
/* harmony export */   "IndiceContext": function() { return /* binding */ IndiceContext; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\Frame-incam\\contexts\\index.js";
// import { createContext, useContext,useState } from 'react';
// const AppContext = createContext();
// export function AppWrapper({ children }) {
//     const [ displaySideMenu,setDisplaySideMenu ] = useState(false);
//     const toggleSideMenu = () => {
//         setDisplaySideMenu(!displaySideMenu);
//     }
//   return (
//     <AppContext.Provider value={{displaySideMenu,toggleSideMenu}}>
//       {children}
//     </AppContext.Provider>
//   );
// }
// export function useAppContext() {
//   return useContext(AppContext);
// }

const IndiceContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();

const IndiceProvider = ({
  children
}) => {
  const {
    0: displaySideMenu,
    1: setDisplaySideMenu
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const toggleSideMenu = () => {
    setDisplaySideMenu(!displaySideMenu);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(IndiceContext.Provider, {
    value: {
      displaySideMenu,
      toggleSideMenu
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, undefined);
};



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts */ "./contexts/index.js");
/* harmony import */ var _public_css_animate_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/css/animate.min.css */ "./public/css/animate.min.css");
/* harmony import */ var _public_css_animate_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_css_animate_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/css/bootstrap.min.css */ "./public/css/bootstrap.min.css");
/* harmony import */ var _public_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_css_meanmenu_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/css/meanmenu.min.css */ "./public/css/meanmenu.min.css");
/* harmony import */ var _public_css_meanmenu_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_css_meanmenu_min_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_css_boxicons_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/css/boxicons.min.css */ "./public/css/boxicons.min.css");
/* harmony import */ var _public_css_boxicons_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_css_boxicons_min_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_css_flaticon_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/css/flaticon.css */ "./public/css/flaticon.css");
/* harmony import */ var _public_css_flaticon_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_css_flaticon_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_css_nice_select_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/css/nice-select.min.css */ "./public/css/nice-select.min.css");
/* harmony import */ var _public_css_nice_select_min_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_css_nice_select_min_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_css_style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/css/style.css */ "./public/css/style.css");
/* harmony import */ var _public_css_style_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_css_style_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_css_responsive_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../public/css/responsive.css */ "./public/css/responsive.css");
/* harmony import */ var _public_css_responsive_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_css_responsive_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_App_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/_App/Layout */ "./components/_App/Layout.js");
/* harmony import */ var _components_Shared_Loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Shared/Loader */ "./components/Shared/Loader.js");
/* harmony import */ var _components_Shared_GoTop__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Shared/GoTop */ "./components/Shared/GoTop.js");


var _jsxFileName = "D:\\Frame-incam\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















function MyApp({
  Component,
  pageProps
}) {
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_App_Layout__WEBPACK_IMPORTED_MODULE_11__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts__WEBPACK_IMPORTED_MODULE_2__.IndiceProvider, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Shared_Loader__WEBPACK_IMPORTED_MODULE_12__.default, {
          loading: loading
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Shared_GoTop__WEBPACK_IMPORTED_MODULE_13__.default, {
          scrollStepInPx: "100",
          delayInMs: "10.50"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./public/css/animate.min.css":
/*!************************************!*\
  !*** ./public/css/animate.min.css ***!
  \************************************/
/***/ (function() {



/***/ }),

/***/ "./public/css/bootstrap.min.css":
/*!**************************************!*\
  !*** ./public/css/bootstrap.min.css ***!
  \**************************************/
/***/ (function() {



/***/ }),

/***/ "./public/css/boxicons.min.css":
/*!*************************************!*\
  !*** ./public/css/boxicons.min.css ***!
  \*************************************/
/***/ (function() {



/***/ }),

/***/ "./public/css/flaticon.css":
/*!*********************************!*\
  !*** ./public/css/flaticon.css ***!
  \*********************************/
/***/ (function() {



/***/ }),

/***/ "./public/css/meanmenu.min.css":
/*!*************************************!*\
  !*** ./public/css/meanmenu.min.css ***!
  \*************************************/
/***/ (function() {



/***/ }),

/***/ "./public/css/nice-select.min.css":
/*!****************************************!*\
  !*** ./public/css/nice-select.min.css ***!
  \****************************************/
/***/ (function() {



/***/ }),

/***/ "./public/css/responsive.css":
/*!***********************************!*\
  !*** ./public/css/responsive.css ***!
  \***********************************/
/***/ (function() {



/***/ }),

/***/ "./public/css/style.css":
/*!******************************!*\
  !*** ./public/css/style.css ***!
  \******************************/
/***/ (function() {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRpY2UvLi9jb21wb25lbnRzL1NoYXJlZC9Hb1RvcC5qcyIsIndlYnBhY2s6Ly9pbmRpY2UvLi9jb21wb25lbnRzL1NoYXJlZC9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vaW5kaWNlLy4vY29tcG9uZW50cy9fQXBwL0xheW91dC5qcyIsIndlYnBhY2s6Ly9pbmRpY2UvLi9jb250ZXh0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9pbmRpY2UvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL2luZGljZS9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2luZGljZS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vaW5kaWNlL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiR29Ub3AiLCJpc1Zpc2libGUiLCJzZXRpc1Zpc2libGUiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ0b2dnbGVWaXNpYmlsaXR5Iiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJzY3JvbGxUb1RvcCIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJMb2FkZXIiLCJsb2FkaW5nIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJJbmRpY2VDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkluZGljZVByb3ZpZGVyIiwiZGlzcGxheVNpZGVNZW51Iiwic2V0RGlzcGxheVNpZGVNZW51IiwidG9nZ2xlU2lkZU1lbnUiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInNldExvYWRpbmciLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxLQUFLLEdBQUcsTUFBTTtBQUNsQixRQUFNO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJDLCtDQUFRLENBQUMsS0FBRCxDQUEx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O0FDMUJBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLFNBQVNPLEtBQVQsQ0FBZTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBZixFQUF5QztBQUN2QyxRQUFNO0FBQUEsT0FBQ1gsT0FBRDtBQUFBLE9BQVVZO0FBQVYsTUFBd0J6QiwrQ0FBUSxDQUFDLElBQUQsQ0FBdEM7QUFFQUMsa0RBQVMsQ0FBQyxNQUFNO0FBQ2R5QixjQUFVLENBQUMsTUFBTUQsVUFBVSxDQUFDLEtBQUQsQ0FBakIsRUFBMEIsSUFBMUIsQ0FBVjtBQUNELEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQSxzQkFDRTtBQUFBLDJCQUNFLDhEQUFDLDREQUFEO0FBQUEsNkJBQ0UsOERBQUMscURBQUQ7QUFBQSxnQ0FDRSw4REFBQyxTQUFELG9CQUFlRCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRSw4REFBQywrREFBRDtBQUFRLGlCQUFPLEVBQUVYO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFHRSw4REFBQyw4REFBRDtBQUFPLHdCQUFjLEVBQUMsS0FBdEI7QUFBNEIsbUJBQVMsRUFBQztBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQVdEOztBQUVELCtEQUFlUyxLQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ0EsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBHb1RvcCA9ICgpID0+IHtcbiAgY29uc3QgW2lzVmlzaWJsZSwgc2V0aXNWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICB0b2dnbGVWaXNpYmlsaXR5KCk7XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCB0b2dnbGVWaXNpYmlsaXR5ID0gKCkgPT4ge1xuICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiAzMDApIHtcbiAgICAgIHNldGlzVmlzaWJsZSh0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0aXNWaXNpYmxlKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2Nyb2xsVG9Ub3AgPSAoKSA9PiB7XG4gICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgIHRvcDogMCxcbiAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7aXNWaXNpYmxlICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dvLXRvcCBhY3RpdmUnIG9uQ2xpY2s9eygpID0+IHNjcm9sbFRvVG9wKCl9PlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT0nYnggYngtdXAtYXJyb3ctYWx0Jz48L2k+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdvVG9wO1xuIiwiY29uc3QgTG9hZGVyID0gKHsgbG9hZGluZyB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIHtsb2FkaW5nICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJlbG9hZGVyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcmVsb2FkZXInPlxuICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC8+XG4gICAgKTtcbiAgfTtcbiAgXG4gIGV4cG9ydCBkZWZhdWx0IExvYWRlcjtcbiAgIiwiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXG5cblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICAgIHJldHVybihcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIHsvKiBSZXF1aXJlZCBtZXRhIHRhZ3MgKi99XG4gICAgICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuXG4gICAgICAgICAgICAgICAgPHRpdGxlPkluZGljZSAtIERpcmVjdG9yeSAmIExpc3RpbmcgUmVhY3QgTmV4dCBUZW1wbGF0ZTwvdGl0bGU+XG4gICAgICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgXG4gICAgICAgICAgICBcbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyIsIi8vIGltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbi8vIGNvbnN0IEFwcENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBBcHBXcmFwcGVyKHsgY2hpbGRyZW4gfSkge1xuLy8gICAgIGNvbnN0IFsgZGlzcGxheVNpZGVNZW51LHNldERpc3BsYXlTaWRlTWVudSBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4vLyAgICAgY29uc3QgdG9nZ2xlU2lkZU1lbnUgPSAoKSA9PiB7XG4vLyAgICAgICAgIHNldERpc3BsYXlTaWRlTWVudSghZGlzcGxheVNpZGVNZW51KTtcbi8vICAgICB9XG5cbi8vICAgcmV0dXJuIChcbi8vICAgICA8QXBwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e2Rpc3BsYXlTaWRlTWVudSx0b2dnbGVTaWRlTWVudX19PlxuLy8gICAgICAge2NoaWxkcmVufVxuLy8gICAgIDwvQXBwQ29udGV4dC5Qcm92aWRlcj5cbi8vICAgKTtcbi8vIH1cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIHVzZUFwcENvbnRleHQoKSB7XG4vLyAgIHJldHVybiB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xuLy8gfVxuXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgSW5kaWNlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuY29uc3QgSW5kaWNlUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFtkaXNwbGF5U2lkZU1lbnUsIHNldERpc3BsYXlTaWRlTWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgdG9nZ2xlU2lkZU1lbnUgPSAoKSA9PiB7XG4gICAgc2V0RGlzcGxheVNpZGVNZW51KCFkaXNwbGF5U2lkZU1lbnUpO1xuICB9O1xuXG5cbiAgcmV0dXJuIChcbiAgICA8SW5kaWNlQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgZGlzcGxheVNpZGVNZW51LFxuICAgICAgICB0b2dnbGVTaWRlTWVudSxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvSW5kaWNlQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCB7IEluZGljZVByb3ZpZGVyLCBJbmRpY2VDb250ZXh0IH07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEluZGljZVByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dHMnO1xuXG5pbXBvcnQgJy4uL3B1YmxpYy9jc3MvYW5pbWF0ZS5taW4uY3NzJztcbmltcG9ydCAnLi4vcHVibGljL2Nzcy9ib290c3RyYXAubWluLmNzcyc7XG5pbXBvcnQgJy4uL3B1YmxpYy9jc3MvbWVhbm1lbnUubWluLmNzcyc7XG5pbXBvcnQgJy4uL3B1YmxpYy9jc3MvYm94aWNvbnMubWluLmNzcyc7XG5pbXBvcnQgJy4uL3B1YmxpYy9jc3MvZmxhdGljb24uY3NzJztcbmltcG9ydCAnLi4vcHVibGljL2Nzcy9uaWNlLXNlbGVjdC5taW4uY3NzJztcbmltcG9ydCAnLi4vcHVibGljL2Nzcy9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuLi9wdWJsaWMvY3NzL3Jlc3BvbnNpdmUuY3NzJztcblxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL19BcHAvTGF5b3V0JztcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9TaGFyZWQvTG9hZGVyJztcbmltcG9ydCBHb1RvcCBmcm9tICcuLi9jb21wb25lbnRzL1NoYXJlZC9Hb1RvcCc7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0TG9hZGluZyhmYWxzZSksIDIwMDApO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPExheW91dD5cbiAgICAgICAgPEluZGljZVByb3ZpZGVyPlxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICA8TG9hZGVyIGxvYWRpbmc9e2xvYWRpbmd9IC8+XG4gICAgICAgICAgPEdvVG9wIHNjcm9sbFN0ZXBJblB4PScxMDAnIGRlbGF5SW5Ncz0nMTAuNTAnIC8+XG4gICAgICAgIDwvSW5kaWNlUHJvdmlkZXI+XG4gICAgICA8L0xheW91dD5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=