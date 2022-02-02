self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/_App/Customer/CustomerRegistrationForm.js":
/*!**************************************************************!*\
  !*** ./components/_App/Customer/CustomerRegistrationForm.js ***!
  \**************************************************************/
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
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-tabs */ "./node_modules/react-tabs/esm/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "D:\\Frame-incam\\components\\_App\\Customer\\CustomerRegistrationForm.js",
    _this = undefined,
    _s = $RefreshSig$();




var Tabs = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(_c = function _c() {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! react-tabs */ "./node_modules/react-tabs/esm/index.js")).then(function (mod) {
    return mod.Tabs;
  });
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-tabs */ "./node_modules/react-tabs/esm/index.js")];
    },
    modules: ["..\\components\\_App\\Customer\\CustomerRegistrationForm.js -> " + "react-tabs"]
  }
});
_c2 = Tabs;


var CustoemrRegistrationForm = function CustoemrRegistrationForm() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      registerName = _useState[0],
      setRegisterName = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      registerEmail = _useState2[0],
      setRegisterEmail = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      registerMobile = _useState3[0],
      setRegisterMobile = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      registerPassword = _useState4[0],
      setRegisterPassword = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      customerRegisterError = _useState5[0],
      setCustomerRegisterError = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      displaypopupotp = _useState6[0],
      setDisplayPopupOtp = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      token = _useState7[0],
      setToken = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      isOpen = _useState8[0],
      setIsOpen = _useState8[1];

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    console.log(customerRegisterError);
  }, [customerRegisterError]);

  var registerFullNameChange = function registerFullNameChange(e) {
    setRegisterName(e.target.value);
  };

  var registerEmailChange = function registerEmailChange(e) {
    setRegisterEmail(e.target.value);
  };

  var registerNumberChange = function registerNumberChange(e) {
    setRegisterMobile(e.target.value);
  };

  var registerPasswordChange = function registerPasswordChange(e) {
    setRegisterPassword(e.target.value);
  };

  var togglePopupOtp = function togglePopupOtp() {
    setDisplayPopupOtp(!displaypopupotp);
    console.log(displaypopupotp);
  };

  var customerRegisterSubmit = /*#__PURE__*/function () {
    var _ref = (0,D_Frame_incam_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/D_Frame_incam_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {
      var data, customerRegistration, sendOTP;
      return D_Frame_incam_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              data = {
                addressLine1: null,
                addressLine2: null,
                alternateMobile: null,
                city: null,
                cityGeoId: 0,
                code: 0,
                email: registerEmail,
                name: registerName,
                id: 0,
                isactive: 0,
                mobile: registerMobile,
                password: registerPassword,
                pincode: null,
                state: null,
                stateGeoId: 0
              };
              _context.prev = 2;
              _context.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_5___default().post("https://apiv1.frameincam.com/api/account/register-vendor", data);

            case 5:
              customerRegistration = _context.sent;

              if (!(customerRegistration.data.token !== null)) {
                _context.next = 23;
                break;
              }

              setDisplayPopupOtp(!displaypopupotp);
              console.log("token error otp");
              setToken(vendorRegistration.data.token);
              _context.prev = 10;
              _context.next = 13;
              return axios__WEBPACK_IMPORTED_MODULE_5___default().post("https://apiv1.frameincam.com/api/transaction/project/sendotp?t=".concat(customerRegistration.data.token));

            case 13:
              sendOTP = _context.sent;
              console.log(sendOTP);
              console.log(token);
              _context.next = 21;
              break;

            case 18:
              _context.prev = 18;
              _context.t0 = _context["catch"](10);
              console.log(err);

            case 21:
              _context.next = 25;
              break;

            case 23:
              setCustomerRegisterError(customerRegistration.data.errorMsgs);
              setIsOpen(!isOpen);

            case 25:
              console.log(customerRegistration.data);
              _context.next = 31;
              break;

            case 28:
              _context.prev = 28;
              _context.t1 = _context["catch"](2);
              console.log(_context.t1);

            case 31:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 28], [10, 18]]);
    }));

    return function customerRegisterSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var verifyOTPSubmit = /*#__PURE__*/function () {
    var _ref2 = (0,D_Frame_incam_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/D_Frame_incam_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(e) {
      var verifyOTP;
      return D_Frame_incam_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault();
              console.log(otp);
              _context2.prev = 2;
              _context2.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_5___default().post("https://apiv1.frameincam.com/api/transaction/project/confirmotp/".concat(otp, "?t=").concat(token));

            case 5:
              verifyOTP = _context2.sent;
              console.log(verifyOTP.data.result);
              _context2.next = 12;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](2);
              console.log(_context2.t0);

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 9]]);
    }));

    return function verifyOTPSubmit(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: displaypopupotp ? "modal loginRegisterModal show" : "modal loginRegisterModal",
      id: "loginRegisterModal",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "modal-dialog modal-dialog-centered",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "modal-content",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tabs, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              type: "button",
              className: "close",
              onClick: togglePopupOtp,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "bx bx-x"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "tab-content",
              id: "myTabContent",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_tabs__WEBPACK_IMPORTED_MODULE_6__.TabPanel, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "tab-pane fade show active",
                  id: "c",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "miran-login",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                      className: "login-with-account"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 128,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
                      onSubmit: verifyOTPSubmit,
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "form-group",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                          type: "text",
                          placeholder: "Enter a OTP",
                          className: "form-control",
                          onChange: function onChange(e) {
                            return setOtp(e.target.value);
                          }
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 133,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 132,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                        type: "submit",
                        children: "Submit"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 140,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 131,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 127,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 126,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "tab-pane",
      id: "register",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "miran-register",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "register-with-account",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "#",
                className: "facebook",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  className: "bx bxl-facebook"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 156,
                  columnNumber: 19
                }, _this), " Facebook"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 155,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 15
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
                  lineNumber: 165,
                  columnNumber: 19
                }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  style: {
                    color: "#4686f7"
                  },
                  children: "G"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 166,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  style: {
                    color: "#e74137"
                  },
                  children: "o"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 167,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  style: {
                    color: "#f2bb13"
                  },
                  children: "o"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 168,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  style: {
                    color: "#4686f7"
                  },
                  children: "g"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 169,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  style: {
                    color: "#50a856"
                  },
                  children: "l"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 170,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  style: {
                    color: "#e74f40"
                  },
                  children: "e"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 171,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 160,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "popup-opt",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "Or Register with"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
          onSubmit: customerRegisterSubmit,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-group",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              type: "text",
              placeholder: "User Name",
              className: "form-control",
              onChange: registerFullNameChange
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 182,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-group",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              type: "email",
              placeholder: "Email",
              className: "form-control",
              onChange: registerEmailChange
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 191,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-group",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              type: "text",
              placeholder: "Mobile number",
              className: "form-control",
              onChange: registerNumberChange,
              minLength: 10,
              maxLength: 10
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 200,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 199,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-group",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              type: "password",
              placeholder: "Password",
              className: "form-control",
              onChange: registerPasswordChange
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 211,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
            children: isOpen && customerRegisterError
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            type: "submit",
            children: "Register Now"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 222,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "already-account",
          children: ["Already have an account? ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#",
            children: "Login Now"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 225,
            columnNumber: 38
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(CustoemrRegistrationForm, "kE5j+0k2tSm8mN34CbSfarQ69To=");

_c3 = CustoemrRegistrationForm;
/* harmony default export */ __webpack_exports__["default"] = (CustoemrRegistrationForm);

var _c, _c2, _c3;

$RefreshReg$(_c, "Tabs$dynamic");
$RefreshReg$(_c2, "Tabs");
$RefreshReg$(_c3, "CustoemrRegistrationForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9fQXBwL0N1c3RvbWVyL0N1c3RvbWVyUmVnaXN0cmF0aW9uRm9ybS5qcyJdLCJuYW1lcyI6WyJUYWJzIiwiZHluYW1pYyIsInRoZW4iLCJtb2QiLCJzc3IiLCJDdXN0b2VtclJlZ2lzdHJhdGlvbkZvcm0iLCJ1c2VTdGF0ZSIsInJlZ2lzdGVyTmFtZSIsInNldFJlZ2lzdGVyTmFtZSIsInJlZ2lzdGVyRW1haWwiLCJzZXRSZWdpc3RlckVtYWlsIiwicmVnaXN0ZXJNb2JpbGUiLCJzZXRSZWdpc3Rlck1vYmlsZSIsInJlZ2lzdGVyUGFzc3dvcmQiLCJzZXRSZWdpc3RlclBhc3N3b3JkIiwiY3VzdG9tZXJSZWdpc3RlckVycm9yIiwic2V0Q3VzdG9tZXJSZWdpc3RlckVycm9yIiwiZGlzcGxheXBvcHVwb3RwIiwic2V0RGlzcGxheVBvcHVwT3RwIiwidG9rZW4iLCJzZXRUb2tlbiIsImlzT3BlbiIsInNldElzT3BlbiIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJyZWdpc3RlckZ1bGxOYW1lQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwicmVnaXN0ZXJFbWFpbENoYW5nZSIsInJlZ2lzdGVyTnVtYmVyQ2hhbmdlIiwicmVnaXN0ZXJQYXNzd29yZENoYW5nZSIsInRvZ2dsZVBvcHVwT3RwIiwiY3VzdG9tZXJSZWdpc3RlclN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsImFkZHJlc3NMaW5lMSIsImFkZHJlc3NMaW5lMiIsImFsdGVybmF0ZU1vYmlsZSIsImNpdHkiLCJjaXR5R2VvSWQiLCJjb2RlIiwiZW1haWwiLCJuYW1lIiwiaWQiLCJpc2FjdGl2ZSIsIm1vYmlsZSIsInBhc3N3b3JkIiwicGluY29kZSIsInN0YXRlIiwic3RhdGVHZW9JZCIsImF4aW9zIiwiY3VzdG9tZXJSZWdpc3RyYXRpb24iLCJ2ZW5kb3JSZWdpc3RyYXRpb24iLCJzZW5kT1RQIiwiZXJyIiwiZXJyb3JNc2dzIiwidmVyaWZ5T1RQU3VibWl0Iiwib3RwIiwidmVyaWZ5T1RQIiwicmVzdWx0Iiwic2V0T3RwIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHQyxtREFBTztBQUFBLFNBQ2xCLGlKQUFxQkMsSUFBckIsQ0FBMEIsVUFBQ0MsR0FBRDtBQUFBLFdBQVNBLEdBQUcsQ0FBQ0gsSUFBYjtBQUFBLEdBQTFCLENBRGtCO0FBQUEsR0FFbEI7QUFBRUksS0FBRyxFQUFFLEtBQVA7QUFBQTtBQUFBO0FBQUEsa0NBRE8sMERBQ1A7QUFBQTtBQUFBLGtGQURPLFlBQ1A7QUFBQTtBQUFBLENBRmtCLENBQXBCO01BQU1KLEk7QUFJTjs7QUFFQSxJQUFNSyx3QkFBd0IsR0FBRyxTQUEzQkEsd0JBQTJCLEdBQU07QUFBQTs7QUFBQSxrQkFFR0MsK0NBQVEsQ0FBQyxFQUFELENBRlg7QUFBQSxNQUU5QkMsWUFGOEI7QUFBQSxNQUVoQkMsZUFGZ0I7O0FBQUEsbUJBR0tGLCtDQUFRLENBQUMsRUFBRCxDQUhiO0FBQUEsTUFHOUJHLGFBSDhCO0FBQUEsTUFHZkMsZ0JBSGU7O0FBQUEsbUJBSU9KLCtDQUFRLENBQUMsRUFBRCxDQUpmO0FBQUEsTUFJOUJLLGNBSjhCO0FBQUEsTUFJZEMsaUJBSmM7O0FBQUEsbUJBS1dOLCtDQUFRLENBQUMsRUFBRCxDQUxuQjtBQUFBLE1BSzlCTyxnQkFMOEI7QUFBQSxNQUtaQyxtQkFMWTs7QUFBQSxtQkFNcUJSLCtDQUFRLENBQUMsRUFBRCxDQU43QjtBQUFBLE1BTTlCUyxxQkFOOEI7QUFBQSxNQU1QQyx3QkFOTzs7QUFBQSxtQkFRU1YsK0NBQVEsQ0FBQyxLQUFELENBUmpCO0FBQUEsTUFROUJXLGVBUjhCO0FBQUEsTUFRYkMsa0JBUmE7O0FBQUEsbUJBVVhaLCtDQUFRLENBQUMsRUFBRCxDQVZHO0FBQUEsTUFVOUJhLEtBVjhC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RUFMYjtBQU1FLHVCQUFTLEVBQUU7QUFOYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFuQkYsZUE4QkU7QUFBSyxxQkFBUyxFQUFDLFlBQWY7QUFBQSxtQ0FDRTtBQUNFLGtCQUFJLEVBQUMsVUFEUDtBQUVFLHlCQUFXLEVBQUMsVUFGZDtBQUdFLHVCQUFTLEVBQUMsY0FIWjtBQUlFLHNCQUFRLEVBQUVDO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBOUJGLGVBdUNFO0FBQUEsc0JBQUtYLE1BQU0sSUFBSU47QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXZDRixlQTBDRTtBQUFRLGdCQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkExQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTdCRixlQXlFRTtBQUFNLG1CQUFTLEVBQUMsaUJBQWhCO0FBQUEsK0RBQzJCO0FBQUcsZ0JBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUQzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBekVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUExQ0Y7QUFBQSxrQkFERjtBQTRIRCxDQTVORDs7R0FBTVYsd0I7O01BQUFBLHdCO0FBOE5OLCtEQUFlQSx3QkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kOTczOWIwZmRlODE5MjBhOTI3OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IFRhYnMgPSBkeW5hbWljKFxyXG4gIGltcG9ydChcInJlYWN0LXRhYnNcIikudGhlbigobW9kKSA9PiBtb2QuVGFicyksXHJcbiAgeyBzc3I6IGZhbHNlIH1cclxuKTtcclxuaW1wb3J0IHsgcmVzZXRJZENvdW50ZXIsIFRhYiwgVGFiTGlzdCwgVGFiUGFuZWwgfSBmcm9tIFwicmVhY3QtdGFic1wiO1xyXG5cclxuY29uc3QgQ3VzdG9lbXJSZWdpc3RyYXRpb25Gb3JtID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBbcmVnaXN0ZXJOYW1lLCBzZXRSZWdpc3Rlck5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3JlZ2lzdGVyRW1haWwsIHNldFJlZ2lzdGVyRW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3JlZ2lzdGVyTW9iaWxlLCBzZXRSZWdpc3Rlck1vYmlsZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcmVnaXN0ZXJQYXNzd29yZCwgc2V0UmVnaXN0ZXJQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY3VzdG9tZXJSZWdpc3RlckVycm9yLCBzZXRDdXN0b21lclJlZ2lzdGVyRXJyb3JdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBbZGlzcGxheXBvcHVwb3RwLCBzZXREaXNwbGF5UG9wdXBPdHBdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBbdG9rZW4sIHNldFRva2VuXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coY3VzdG9tZXJSZWdpc3RlckVycm9yKTtcclxuICB9LCBbY3VzdG9tZXJSZWdpc3RlckVycm9yXSk7XHJcblxyXG4gIGNvbnN0IHJlZ2lzdGVyRnVsbE5hbWVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0UmVnaXN0ZXJOYW1lKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG4gIGNvbnN0IHJlZ2lzdGVyRW1haWxDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0UmVnaXN0ZXJFbWFpbChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuICBjb25zdCByZWdpc3Rlck51bWJlckNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRSZWdpc3Rlck1vYmlsZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuICBjb25zdCByZWdpc3RlclBhc3N3b3JkQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIHNldFJlZ2lzdGVyUGFzc3dvcmQoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRvZ2dsZVBvcHVwT3RwID0gKCkgPT4ge1xyXG4gICAgc2V0RGlzcGxheVBvcHVwT3RwKCFkaXNwbGF5cG9wdXBvdHApO1xyXG4gICAgY29uc29sZS5sb2coZGlzcGxheXBvcHVwb3RwKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjdXN0b21lclJlZ2lzdGVyU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGFkZHJlc3NMaW5lMTogbnVsbCxcclxuICAgICAgYWRkcmVzc0xpbmUyOiBudWxsLFxyXG4gICAgICBhbHRlcm5hdGVNb2JpbGU6IG51bGwsXHJcbiAgICAgIGNpdHk6IG51bGwsXHJcbiAgICAgIGNpdHlHZW9JZDogMCxcclxuICAgICAgY29kZTogMCxcclxuICAgICAgZW1haWw6IHJlZ2lzdGVyRW1haWwsXHJcbiAgICAgIG5hbWU6IHJlZ2lzdGVyTmFtZSxcclxuICAgICAgaWQ6IDAsXHJcbiAgICAgIGlzYWN0aXZlOiAwLFxyXG4gICAgICBtb2JpbGU6IHJlZ2lzdGVyTW9iaWxlLFxyXG4gICAgICBwYXNzd29yZDogcmVnaXN0ZXJQYXNzd29yZCxcclxuICAgICAgcGluY29kZTogbnVsbCxcclxuICAgICAgc3RhdGU6IG51bGwsXHJcbiAgICAgIHN0YXRlR2VvSWQ6IDAsXHJcbiAgICB9O1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgY3VzdG9tZXJSZWdpc3RyYXRpb24gPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgIFwiaHR0cHM6Ly9hcGl2MS5mcmFtZWluY2FtLmNvbS9hcGkvYWNjb3VudC9yZWdpc3Rlci12ZW5kb3JcIixcclxuICAgICAgICBkYXRhXHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChjdXN0b21lclJlZ2lzdHJhdGlvbi5kYXRhLnRva2VuICE9PSBudWxsKSB7XHJcbiAgICAgICAgc2V0RGlzcGxheVBvcHVwT3RwKCFkaXNwbGF5cG9wdXBvdHApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidG9rZW4gZXJyb3Igb3RwXCIpO1xyXG4gICAgICAgIHNldFRva2VuKHZlbmRvclJlZ2lzdHJhdGlvbi5kYXRhLnRva2VuKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3Qgc2VuZE9UUCA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgICAgIGBodHRwczovL2FwaXYxLmZyYW1laW5jYW0uY29tL2FwaS90cmFuc2FjdGlvbi9wcm9qZWN0L3NlbmRvdHA/dD0ke2N1c3RvbWVyUmVnaXN0cmF0aW9uLmRhdGEudG9rZW59YFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHNlbmRPVFApO1xyXG4gICAgICAgICAgY29uc29sZS5sb2codG9rZW4pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRDdXN0b21lclJlZ2lzdGVyRXJyb3IoY3VzdG9tZXJSZWdpc3RyYXRpb24uZGF0YS5lcnJvck1zZ3MpO1xyXG4gICAgICAgIHNldElzT3BlbighaXNPcGVuKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhjdXN0b21lclJlZ2lzdHJhdGlvbi5kYXRhKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCB2ZXJpZnlPVFBTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc29sZS5sb2cob3RwKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHZlcmlmeU9UUCA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgYGh0dHBzOi8vYXBpdjEuZnJhbWVpbmNhbS5jb20vYXBpL3RyYW5zYWN0aW9uL3Byb2plY3QvY29uZmlybW90cC8ke290cH0/dD0ke3Rva2VufWBcclxuICAgICAgKTtcclxuICAgICAgY29uc29sZS5sb2codmVyaWZ5T1RQLmRhdGEucmVzdWx0KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgey8qIE90cCBwdXAgbmV3IHZpZXcgKi99XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgZGlzcGxheXBvcHVwb3RwXHJcbiAgICAgICAgICAgID8gXCJtb2RhbCBsb2dpblJlZ2lzdGVyTW9kYWwgc2hvd1wiXHJcbiAgICAgICAgICAgIDogXCJtb2RhbCBsb2dpblJlZ2lzdGVyTW9kYWxcIlxyXG4gICAgICAgIH1cclxuICAgICAgICBpZD1cImxvZ2luUmVnaXN0ZXJNb2RhbFwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZyBtb2RhbC1kaWFsb2ctY2VudGVyZWRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8VGFicz5cclxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIG9uQ2xpY2s9e3RvZ2dsZVBvcHVwT3RwfT5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJ4IGJ4LXhcIj48L2k+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWItY29udGVudFwiIGlkPVwibXlUYWJDb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8VGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLXBhbmUgZmFkZSBzaG93IGFjdGl2ZVwiIGlkPVwiY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWlyYW4tbG9naW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4td2l0aC1hY2NvdW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8c3Bhbj5FbnRlciBPVFA8L3NwYW4+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dmVyaWZ5T1RQU3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGEgT1RQXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRPdHAoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLXBhbmVcIiBpZD1cInJlZ2lzdGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaXJhbi1yZWdpc3RlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3Rlci13aXRoLWFjY291bnRcIj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZmFjZWJvb2tcIj5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYnggYnhsLWZhY2Vib29rXCI+PC9pPiBGYWNlYm9va1xyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0d2l0dGVyXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9nb29nbGUucG5nXCIgd2lkdGg9ezI1fSAvPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiIzQ2ODZmN1wiIH19Pkc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcIiNlNzQxMzdcIiB9fT5vPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCIjZjJiYjEzXCIgfX0+bzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiIzQ2ODZmN1wiIH19Pmc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcIiM1MGE4NTZcIiB9fT5sPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCIjZTc0ZjQwXCIgfX0+ZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgey8qIDxpIGNsYXNzPVwiYnggYnhsLWdvb2dsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gR29vZ2xlICovfVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBvcHVwLW9wdFwiPlxyXG4gICAgICAgICAgICA8c3Bhbj5PciBSZWdpc3RlciB3aXRoPC9zcGFuPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2N1c3RvbWVyUmVnaXN0ZXJTdWJtaXR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlciBOYW1lXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17cmVnaXN0ZXJGdWxsTmFtZUNoYW5nZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtyZWdpc3RlckVtYWlsQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1vYmlsZSBudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtyZWdpc3Rlck51bWJlckNoYW5nZX1cclxuICAgICAgICAgICAgICAgIG1pbkxlbmd0aD17MTB9XHJcbiAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezEwfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3JlZ2lzdGVyUGFzc3dvcmRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiBFcnJvciBTaG93aW5nIFN0YXJ0ICovfVxyXG4gICAgICAgICAgICA8aDQ+e2lzT3BlbiAmJiBjdXN0b21lclJlZ2lzdGVyRXJyb3J9PC9oND5cclxuICAgICAgICAgICAgey8qIEVycm9yRW5kICovfVxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+UmVnaXN0ZXIgTm93PC9idXR0b24+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhbHJlYWR5LWFjY291bnRcIj5cclxuICAgICAgICAgICAgQWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/IDxhIGhyZWY9XCIjXCI+TG9naW4gTm93PC9hPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDdXN0b2VtclJlZ2lzdHJhdGlvbkZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=