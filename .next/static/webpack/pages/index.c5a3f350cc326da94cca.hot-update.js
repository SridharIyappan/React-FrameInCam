self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/_App/Customer/CustomerLoginForm.js":
/*!*******************************************************!*\
  !*** ./components/_App/Customer/CustomerLoginForm.js ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Frame_incam_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Frame_incam_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_Frame_incam_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_Frame_incam_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "D:\\Frame-incam\\components\\_App\\Customer\\CustomerLoginForm.js",
    _this = undefined,
    _s = $RefreshSig$();




var CustomerLoginForm = function CustomerLoginForm(props) {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      loginMobileNo = _useState[0],
      setLoginMobileNo = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      loginPassword = _useState2[0],
      setLoginPassword = _useState2[1];

  var nameChange = function nameChange(e) {
    setLoginMobileNo(e.target.value);
  };

  var passwordChange = function passwordChange(e) {
    setLoginPassword(e.target.value);
  };

  var loginSubmit = /*#__PURE__*/function () {
    var _ref = (0,D_Frame_incam_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/D_Frame_incam_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {
      var data, customerLogin, token;
      return D_Frame_incam_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              data = {
                username: loginMobileNo,
                password: loginPassword,
                scope: "Customer"
              };
              _context.prev = 2;
              _context.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_4___default().post("https://apiv1.frameincam.com/api/account/connect", data);

            case 5:
              customerLogin = _context.sent;
              token = customerLogin.data.token;
              console.log(customerLogin.data);
              console.log(token);
              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](2);
              console.log(_context.t0);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 11]]);
    }));

    return function loginSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "login-with-account",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "Login with"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#",
            className: "facebook",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "bx bxl-facebook"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 15
            }, _this), " Facebook"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#",
            className: "twitter",
            style: {
              display: "flex",
              justifyContent: "center"
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: "/images/google.png",
              width: 25
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 15
            }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              style: {
                color: "#4686f7"
              },
              children: "G"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              style: {
                color: "#e74137"
              },
              children: "o"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              style: {
                color: "#f2bb13"
              },
              children: "o"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              style: {
                color: "#4686f7"
              },
              children: "g"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              style: {
                color: "#50a856"
              },
              children: "l"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              style: {
                color: "#e74f40"
              },
              children: "e"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      className: "sub-title",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "Or login with"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      onSubmit: loginSubmit,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "form-group",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "text",
          placeholder: "Mobile No",
          className: "form-control",
          onChange: nameChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "form-group",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "password",
          placeholder: "Password",
          className: "form-control",
          onChange: passwordChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "submit",
        children: "Login Now"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(CustomerLoginForm, "xU9H4vf6Z3yQOjstgHxDTFDh8cw=");

_c = CustomerLoginForm;
/* harmony default export */ __webpack_exports__["default"] = (CustomerLoginForm);

var _c;

$RefreshReg$(_c, "CustomerLoginForm");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9fQXBwL0N1c3RvbWVyL0N1c3RvbWVyTG9naW5Gb3JtLmpzIl0sIm5hbWVzIjpbIkN1c3RvbWVyTG9naW5Gb3JtIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImxvZ2luTW9iaWxlTm8iLCJzZXRMb2dpbk1vYmlsZU5vIiwibG9naW5QYXNzd29yZCIsInNldExvZ2luUGFzc3dvcmQiLCJuYW1lQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwicGFzc3dvcmRDaGFuZ2UiLCJsb2dpblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJzY29wZSIsImF4aW9zIiwiY3VzdG9tZXJMb2dpbiIsInRva2VuIiwiY29uc29sZSIsImxvZyIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDT0MsK0NBQVEsQ0FBQyxFQUFELENBRGY7QUFBQSxNQUM1QkMsYUFENEI7QUFBQSxNQUNiQyxnQkFEYTs7QUFBQSxtQkFFT0YsK0NBQVEsQ0FBQyxFQUFELENBRmY7QUFBQSxNQUU1QkcsYUFGNEI7QUFBQSxNQUViQyxnQkFGYTs7QUFJbkMsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3hCSixvQkFBZ0IsQ0FBQ0ksQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBaEI7QUFDRCxHQUZEOztBQUdBLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0gsQ0FBRCxFQUFPO0FBQzVCRixvQkFBZ0IsQ0FBQ0UsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBaEI7QUFDRCxHQUZEOztBQUlBLE1BQU1FLFdB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QyxNQURQO0FBRUUscUJBQVcsRUFBQyxXQUZkO0FBR0UsbUJBQVMsRUFBQyxjQUhaO0FBSUUsa0JBQVEsRUFBRUw7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBVUU7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQSwrQkFDRTtBQUNFLGNBQUksRUFBQyxVQURQO0FBRUUscUJBQVcsRUFBQyxVQUZkO0FBR0UsbUJBQVMsRUFBQyxjQUhaO0FBSUUsa0JBQVEsRUFBRUk7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVZGLGVBbUJFO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFuQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBOUJGO0FBQUEsa0JBREY7QUFzREQsQ0FyRkQ7O0dBQU1YLGlCOztLQUFBQSxpQjtBQXVGTiwrREFBZUEsaUJBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzVhM2YzNTBjYzMyNmRhOTRjY2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IEN1c3RvbWVyTG9naW5Gb3JtID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2xvZ2luTW9iaWxlTm8sIHNldExvZ2luTW9iaWxlTm9dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xvZ2luUGFzc3dvcmQsIHNldExvZ2luUGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IG5hbWVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0TG9naW5Nb2JpbGVObyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBwYXNzd29yZENoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRMb2dpblBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBsb2dpblN1Ym1pdCA9IGFzeW5jKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIHVzZXJuYW1lOiBsb2dpbk1vYmlsZU5vLFxyXG4gICAgICBwYXNzd29yZDogbG9naW5QYXNzd29yZCxcclxuICAgICAgc2NvcGU6IFwiQ3VzdG9tZXJcIixcclxuICAgIH07XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBjdXN0b21lckxvZ2luID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICBcImh0dHBzOi8vYXBpdjEuZnJhbWVpbmNhbS5jb20vYXBpL2FjY291bnQvY29ubmVjdFwiLFxyXG4gICAgICAgIGRhdGFcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgdG9rZW4gPSBjdXN0b21lckxvZ2luLmRhdGEudG9rZW47XHJcbiAgICAgIGNvbnNvbGUubG9nKGN1c3RvbWVyTG9naW4uZGF0YSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRva2VuKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi13aXRoLWFjY291bnRcIj5cclxuICAgICAgICA8c3Bhbj5Mb2dpbiB3aXRoPC9zcGFuPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJmYWNlYm9va1wiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJ4IGJ4bC1mYWNlYm9va1wiPjwvaT4gRmFjZWJvb2tcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHdpdHRlclwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvZ29vZ2xlLnBuZ1wiIHdpZHRoPXsyNX0gLz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiIzQ2ODZmN1wiIH19Pkc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiI2U3NDEzN1wiIH19Pm88L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiI2YyYmIxM1wiIH19Pm88L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiIzQ2ODZmN1wiIH19Pmc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiIzUwYTg1NlwiIH19Pmw8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiI2U3NGY0MFwiIH19PmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgey8qIDxpIGNsYXNzPVwiYnggYnhsLWdvb2dsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gR29vZ2xlICovfVxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdWItdGl0bGVcIj5cclxuICAgICAgICA8c3Bhbj5PciBsb2dpbiB3aXRoPC9zcGFuPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtsb2dpblN1Ym1pdH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1vYmlsZSBOb1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtuYW1lQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtwYXNzd29yZENoYW5nZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkxvZ2luIE5vdzwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tZXJMb2dpbkZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=