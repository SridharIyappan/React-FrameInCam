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
                username: loginMobileNo,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9fQXBwL0N1c3RvbWVyL0N1c3RvbWVyTG9naW5Gb3JtLmpzIl0sIm5hbWVzIjpbIkN1c3RvbWVyTG9naW5Gb3JtIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImxvZ2luTW9iaWxlTm8iLCJzZXRMb2dpbk1vYmlsZU5vIiwibG9naW5QYXNzd29yZCIsInNldExvZ2luUGFzc3dvcmQiLCJuYW1lQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwicGFzc3dvcmRDaGFuZ2UiLCJvdHAiLCJzZXRPdHAiLCJvdHBDaGFuZ2UiLCJjb25zb2xlIiwibG9nIiwidG9rIiwidmVyaWZ5T1RQU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJheGlvcyIsInZlcmlmeU9UUCIsImxvZ2luU3VibWl0IiwiZGF0YSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJzY29wZSIsImN1c3RvbWVyTG9naW4iLCJ0b2tlbiIsImN1c3RtZXJMb2dpbiIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDT0MsK0NBQVEsQ0FBQyxFQUFELENBRGY7QUFBQSxNQUM1QkMsYUFENEI7QUFBQSxNQUNiQyxnQkFEYTs7QUFBQSxtQkFFT0YsK0NBQVEsQ0FBQyxFQUFELENBRmY7QUFBQSxNQUU1QkcsYUFGNEI7QUFBQSxNQUViQyxnQkFGYTs7QUFJbkMsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3hCSixvQkFBZ0IsQ0FBQ0ksQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBaEI7QUFDRCxHQUZEOztBQUdBLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0gsQ0FBRCxFQUFP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LEVBQUVJO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFWRixlQW1CRTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTlCRjtBQUFBLGtCQURGO0FBc0RELENBMUdEOztHQUFNWCxpQjs7S0FBQUEsaUI7QUE0R04sK0RBQWVBLGlCQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljg0Y2I0YzkyMDE5OGVjNmJkN2FkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBDdXN0b21lckxvZ2luRm9ybSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtsb2dpbk1vYmlsZU5vLCBzZXRMb2dpbk1vYmlsZU5vXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsb2dpblBhc3N3b3JkLCBzZXRMb2dpblBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBuYW1lQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIHNldExvZ2luTW9iaWxlTm8oZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcbiAgY29uc3QgcGFzc3dvcmRDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0TG9naW5QYXNzd29yZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gT1RQXHJcbiAgY29uc3QgW290cCwgc2V0T3RwXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBvdHBDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0T3RwKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG4gIGNvbnNvbGUubG9nKHByb3BzLnRvaywgXCJ0b2tlblwiKTtcclxuXHJcbiAgY29uc3QgdmVyaWZ5T1RQU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnNvbGUubG9nKG90cCk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB2ZXJpZnlPVFAgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgIGBodHRwczovL2FwaXYxLmZyYW1laW5jYW0uY29tL2FwaS90cmFuc2FjdGlvbi9wcm9qZWN0L2NvbmZpcm1vdHAvJHtvdHB9P3Q9ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnpkV0lpT2lJeE1EZ2lMQ0pxZEdraU9pSTBNamt6TldRMU9TMWhaV1ZtTFRRME5qSXRZak5pWWkwd01qSXdZV0k0TlRaak56QWlMQ0p1WVcxbElqb2lZWE5vYjJzaUxDSjFjMlZ5Ym1GdFpTSTZJbUZ6YUc5ck1EQXlRR2R0WVdsc0xtTnZiU0lzSW1WdFlXbHNJam9pWVhOb2Iyc3dNREpBWjIxaGFXd3VZMjl0SWl3aVNYTkRkWE4wYjIxbGNpSTZJbFJ5ZFdVaUxDSkRkWE4wYjIxbGNrbGtJam9pTlRNaUxDSmhkV1FpT2xzaWFIUjBjSE02THk5c2IyTmhiR2h2YzNRNk5EUXpPVE12SWl3aWFIUjBjSE02THk5c2IyTmhiR2h2YzNRNk5EUXpPVE12SWwwc0ltVjRjQ0k2TVRZME16Z3hNVGs1Tnl3aWFYTnpJam9pYUhSMGNITTZMeTlzYjJOaGJHaHZjM1E2TkRRek5EZ3ZJbjAuc2NmbDBDTERZR2dDQTJDY2UzUWgzQTdvc3luWklXR3hCdjlQUmlMQ2sxb2BcclxuICAgICAgKTtcclxuICAgICAgY29uc29sZS5sb2codmVyaWZ5T1RQKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG4gIC8vICAgT1RQXHJcblxyXG4gIGNvbnN0IGxvZ2luU3VibWl0ID0gYXN5bmMoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgdXNlcm5hbWU6IGxvZ2luTW9iaWxlTm8sXHJcbiAgICAgIHBhc3N3b3JkOiBsb2dpblBhc3N3b3JkLFxyXG4gICAgICBzY29wZTogXCJDdXN0b21lclwiLFxyXG4gICAgfTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGN1c3RvbWVyTG9naW4gPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgIFwiaHR0cHM6Ly9hcGl2MS5mcmFtZWluY2FtLmNvbS9hcGkvYWNjb3VudC9jb25uZWN0XCIsXHJcbiAgICAgICAgZGF0YVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCB0b2tlbiA9IGN1c3RvbWVyTG9naW4uZGF0YS50b2tlbjtcclxuICAgICAgY29uc29sZS5sb2coY3VzdG1lckxvZ2luLmRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLXdpdGgtYWNjb3VudFwiPlxyXG4gICAgICAgIDxzcGFuPkxvZ2luIHdpdGg8L3NwYW4+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImZhY2Vib29rXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYnggYnhsLWZhY2Vib29rXCI+PC9pPiBGYWNlYm9va1xyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0d2l0dGVyXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9nb29nbGUucG5nXCIgd2lkdGg9ezI1fSAvPntcIiBcIn1cclxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCIjNDY4NmY3XCIgfX0+Rzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCIjZTc0MTM3XCIgfX0+bzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCIjZjJiYjEzXCIgfX0+bzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCIjNDY4NmY3XCIgfX0+Zzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCIjNTBhODU2XCIgfX0+bDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCIjZTc0ZjQwXCIgfX0+ZTwvc3Bhbj5cclxuICAgICAgICAgICAgICB7LyogPGkgY2xhc3M9XCJieCBieGwtZ29vZ2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiBHb29nbGUgKi99XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN1Yi10aXRsZVwiPlxyXG4gICAgICAgIDxzcGFuPk9yIGxvZ2luIHdpdGg8L3NwYW4+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2xvZ2luU3VibWl0fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTW9iaWxlIE5vXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e25hbWVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e3Bhc3N3b3JkQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+TG9naW4gTm93PC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDdXN0b21lckxvZ2luRm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==