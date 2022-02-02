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
  }; // OTP


  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      otp = _useState3[0],
      setOtp = _useState3[1];

  var otpChange = function otpChange(e) {
    setOtp(e.target.value);
  };

  console.log(props.tok, "token");

  var verifyOTPSubmit = /*#__PURE__*/function () {
    var _ref = (0,D_Frame_incam_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/D_Frame_incam_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {
      var verifyOTP;
      return D_Frame_incam_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              console.log(otp);
              _context.prev = 2;
              _context.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_4___default().post("https://apiv1.frameincam.com/api/transaction/project/confirmotp/".concat(otp, "?t=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMDgiLCJqdGkiOiI0MjkzNWQ1OS1hZWVmLTQ0NjItYjNiYi0wMjIwYWI4NTZjNzAiLCJuYW1lIjoiYXNob2siLCJ1c2VybmFtZSI6ImFzaG9rMDAyQGdtYWlsLmNvbSIsImVtYWlsIjoiYXNob2swMDJAZ21haWwuY29tIiwiSXNDdXN0b21lciI6IlRydWUiLCJDdXN0b21lcklkIjoiNTMiLCJhdWQiOlsiaHR0cHM6Ly9sb2NhbGhvc3Q6NDQzOTMvIiwiaHR0cHM6Ly9sb2NhbGhvc3Q6NDQzOTMvIl0sImV4cCI6MTY0MzgxMTk5NywiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NDQzNDgvIn0.scfl0CLDYGgCA2Cce3Qh3A7osynZIWGxBv9PRiLCk1o"));

            case 5:
              verifyOTP = _context.sent;
              console.log(verifyOTP);
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](2);
              console.log(_context.t0);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 9]]);
    }));

    return function verifyOTPSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }(); //   OTP


  var loginSubmit = /*#__PURE__*/function () {
    var _ref2 = (0,D_Frame_incam_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/D_Frame_incam_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(e) {
      var data, customerLogin, token;
      return D_Frame_incam_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault();
              data = {
                username: loginUserName,
                password: loginPassword,
                scope: "Customer"
              };
              _context2.prev = 2;
              _context2.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_4___default().post("https://apiv1.frameincam.com/api/account/connect", data);

            case 5:
              customerLogin = _context2.sent;
              token = customerLogin.data.token;
              console.log(custmerLogin.data);
              _context2.next = 13;
              break;

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](2);
              console.log(_context2.t0);

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 10]]);
    }));

    return function loginSubmit(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "login-with-account",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "Login with"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
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
              lineNumber: 63,
              columnNumber: 15
            }, _this), " Facebook"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
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
              lineNumber: 72,
              columnNumber: 15
            }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              style: {
                color: "#4686f7"
              },
              children: "G"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              style: {
                color: "#e74137"
              },
              children: "o"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              style: {
                color: "#f2bb13"
              },
              children: "o"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              style: {
                color: "#4686f7"
              },
              children: "g"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              style: {
                color: "#50a856"
              },
              children: "l"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              style: {
                color: "#e74f40"
              },
              children: "e"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      className: "sub-title",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "Or login with"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
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
          lineNumber: 89,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
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
          lineNumber: 98,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "submit",
        children: "Login Now"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(CustomerLoginForm, "cbvCiiMn5QUyVg+x8QrP3dJDjUU=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9fQXBwL0N1c3RvbWVyL0N1c3RvbWVyTG9naW5Gb3JtLmpzIl0sIm5hbWVzIjpbIkN1c3RvbWVyTG9naW5Gb3JtIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImxvZ2luTW9iaWxlTm8iLCJzZXRMb2dpbk1vYmlsZU5vIiwibG9naW5QYXNzd29yZCIsInNldExvZ2luUGFzc3dvcmQiLCJuYW1lQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwicGFzc3dvcmRDaGFuZ2UiLCJvdHAiLCJzZXRPdHAiLCJvdHBDaGFuZ2UiLCJjb25zb2xlIiwibG9nIiwidG9rIiwidmVyaWZ5T1RQU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJheGlvcyIsInZlcmlmeU9UUCIsImxvZ2luU3VibWl0IiwiZGF0YSIsInVzZXJuYW1lIiwibG9naW5Vc2VyTmFtZSIsInBhc3N3b3JkIiwic2NvcGUiLCJjdXN0b21lckxvZ2luIiwidG9rZW4iLCJjdXN0bWVyTG9naW4iLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ09DLCtDQUFRLENBQUMsRUFBRCxDQURmO0FBQUEsTUFDNUJDLGFBRDRCO0FBQUEsTUFDYkMsZ0JBRGE7O0FBQUEsbUJBRU9GLCtDQUFRLENBQUMsRUFBRCxDQUZmO0FBQUEsTUFFNUJHLGFBRjRCO0FBQUEsTUFFYkMsZ0JBRmE7O0FBSW5DLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLENBQUQsRUFBTztBQUN4Qkosb0JBQWdCLENBQUNJLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWhCO0FBQ0QsR0FGRDs7QUFHQSxNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlC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QUhaO0FBSUUsa0JBQVEsRUFBRUk7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVZGLGVBbUJFO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFuQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBOUJGO0FBQUEsa0JBREY7QUFzREQsQ0ExR0Q7O0dBQU1YLGlCOztLQUFBQSxpQjtBQTRHTiwrREFBZUEsaUJBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTE5YjgwNWNiZGY0MDk2MmViMzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IEN1c3RvbWVyTG9naW5Gb3JtID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2xvZ2luTW9iaWxlTm8sIHNldExvZ2luTW9iaWxlTm9dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xvZ2luUGFzc3dvcmQsIHNldExvZ2luUGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IG5hbWVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0TG9naW5Nb2JpbGVObyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBwYXNzd29yZENoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRMb2dpblBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICAvLyBPVFBcclxuICBjb25zdCBbb3RwLCBzZXRPdHBdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IG90cENoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRPdHAoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcbiAgY29uc29sZS5sb2cocHJvcHMudG9rLCBcInRva2VuXCIpO1xyXG5cclxuICBjb25zdCB2ZXJpZnlPVFBTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc29sZS5sb2cob3RwKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHZlcmlmeU9UUCA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgYGh0dHBzOi8vYXBpdjEuZnJhbWVpbmNhbS5jb20vYXBpL3RyYW5zYWN0aW9uL3Byb2plY3QvY29uZmlybW90cC8ke290cH0/dD1leUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKemRXSWlPaUl4TURnaUxDSnFkR2tpT2lJME1qa3pOV1ExT1MxaFpXVm1MVFEwTmpJdFlqTmlZaTB3TWpJd1lXSTROVFpqTnpBaUxDSnVZVzFsSWpvaVlYTm9iMnNpTENKMWMyVnlibUZ0WlNJNkltRnphRzlyTURBeVFHZHRZV2xzTG1OdmJTSXNJbVZ0WVdsc0lqb2lZWE5vYjJzd01ESkFaMjFoYVd3dVkyOXRJaXdpU1hORGRYTjBiMjFsY2lJNklsUnlkV1VpTENKRGRYTjBiMjFsY2tsa0lqb2lOVE1pTENKaGRXUWlPbHNpYUhSMGNITTZMeTlzYjJOaGJHaHZjM1E2TkRRek9UTXZJaXdpYUhSMGNITTZMeTlzYjJOaGJHaHZjM1E2TkRRek9UTXZJbDBzSW1WNGNDSTZNVFkwTXpneE1UazVOeXdpYVhOeklqb2lhSFIwY0hNNkx5OXNiMk5oYkdodmMzUTZORFF6TkRndkluMC5zY2ZsMENMRFlHZ0NBMkNjZTNRaDNBN29zeW5aSVdHeEJ2OVBSaUxDazFvYFxyXG4gICAgICApO1xyXG4gICAgICBjb25zb2xlLmxvZyh2ZXJpZnlPVFApO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgLy8gICBPVFBcclxuXHJcbiAgY29uc3QgbG9naW5TdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgdXNlcm5hbWU6IGxvZ2luVXNlck5hbWUsXHJcbiAgICAgIHBhc3N3b3JkOiBsb2dpblBhc3N3b3JkLFxyXG4gICAgICBzY29wZTogXCJDdXN0b21lclwiLFxyXG4gICAgfTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGN1c3RvbWVyTG9naW4gPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgIFwiaHR0cHM6Ly9hcGl2MS5mcmFtZWluY2FtLmNvbS9hcGkvYWNjb3VudC9jb25uZWN0XCIsXHJcbiAgICAgICAgZGF0YVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCB0b2tlbiA9IGN1c3RvbWVyTG9naW4uZGF0YS50b2tlbjtcclxuICAgICAgY29uc29sZS5sb2coY3VzdG1lckxvZ2luLmRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLXdpdGgtYWNjb3VudFwiPlxyXG4gICAgICAgIDxzcGFuPkxvZ2luIHdpdGg8L3NwYW4+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImZhY2Vib29rXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYnggYnhsLWZhY2Vib29rXCI+PC9pPiBGYWNlYm9va1xyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0d2l0dGVyXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9nb29nbGUucG5nXCIgd2lkdGg9ezI1fSAvPntcIiBcIn1cclxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCIjNDY4NmY3XCIgfX0+Rzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCIjZTc0MTM3XCIgfX0+bzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCIjZjJiYjEzXCIgfX0+bzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCIjNDY4NmY3XCIgfX0+Zzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCIjNTBhODU2XCIgfX0+bDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCIjZTc0ZjQwXCIgfX0+ZTwvc3Bhbj5cclxuICAgICAgICAgICAgICB7LyogPGkgY2xhc3M9XCJieCBieGwtZ29vZ2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiBHb29nbGUgKi99XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN1Yi10aXRsZVwiPlxyXG4gICAgICAgIDxzcGFuPk9yIGxvZ2luIHdpdGg8L3NwYW4+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2xvZ2luU3VibWl0fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTW9iaWxlIE5vXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e25hbWVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e3Bhc3N3b3JkQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+TG9naW4gTm93PC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDdXN0b21lckxvZ2luRm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==