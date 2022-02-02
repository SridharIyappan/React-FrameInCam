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

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true),
      customerError = _useState8[0],
      setCustomerError = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      isOpen = _useState9[0],
      setIsOpen = _useState9[1];

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
              setVendorRegisterError(customerRegistration.data.errorMsgs);
              setIsOpen(!isOpen);

            case 25:
              console.log(vendorRegistration.data);
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
                lineNumber: 123,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
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
                      lineNumber: 129,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
                      onSubmit: verifyOTPSubmit,
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "form-group",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                          type: "text",
                          placeholder: "Enter a OTP",
                          className: "form-control"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 134,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 133,
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
                      lineNumber: 132,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 128,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 127,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 126,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 111,
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
            children: isOpen && customerError
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

_s(CustoemrRegistrationForm, "VbEXHQqzOd2wOYVbQK9hFVcVIXI=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9fQXBwL0N1c3RvbWVyL0N1c3RvbWVyUmVnaXN0cmF0aW9uRm9ybS5qcyJdLCJuYW1lcyI6WyJUYWJzIiwiZHluYW1pYyIsInRoZW4iLCJtb2QiLCJzc3IiLCJDdXN0b2VtclJlZ2lzdHJhdGlvbkZvcm0iLCJ1c2VTdGF0ZSIsInJlZ2lzdGVyTmFtZSIsInNldFJlZ2lzdGVyTmFtZSIsInJlZ2lzdGVyRW1haWwiLCJzZXRSZWdpc3RlckVtYWlsIiwicmVnaXN0ZXJNb2JpbGUiLCJzZXRSZWdpc3Rlck1vYmlsZSIsInJlZ2lzdGVyUGFzc3dvcmQiLCJzZXRSZWdpc3RlclBhc3N3b3JkIiwiY3VzdG9tZXJSZWdpc3RlckVycm9yIiwic2V0Q3VzdG9tZXJSZWdpc3RlckVycm9yIiwiZGlzcGxheXBvcHVwb3RwIiwic2V0RGlzcGxheVBvcHVwT3RwIiwidG9rZW4iLCJzZXRUb2tlbiIsImN1c3RvbWVyRXJyb3IiLCJzZXRDdXN0b21lckVycm9yIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsInJlZ2lzdGVyRnVsbE5hbWVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJyZWdpc3RlckVtYWlsQ2hhbmdlIiwicmVnaXN0ZXJOdW1iZXJDaGFuZ2UiLCJyZWdpc3RlclBhc3N3b3JkQ2hhbmdlIiwidG9nZ2xlUG9wdXBPdHAiLCJjdXN0b21lclJlZ2lzdGVyU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwiYWRkcmVzc0xpbmUxIiwiYWRkcmVzc0xpbmUyIiwiYWx0ZXJuYXRlTW9iaWxlIiwiY2l0eSIsImNpdHlHZW9JZCIsImNvZGUiLCJlbWFpbCIsIm5hbWUiLCJpZCIsImlzYWN0aXZlIiwibW9iaWxlIiwicGFzc3dvcmQiLCJwaW5jb2RlIiwic3RhdGUiLCJzdGF0ZUdlb0lkIiwiYXhpb3MiLCJjdXN0b21lclJlZ2lzdHJhdGlvbiIsInZlbmRvclJlZ2lzdHJhdGlvbiIsInNlbmRPVFAiLCJlcnIiLCJzZXRWZW5kb3JSZWdpc3RlckVycm9yIiwiZXJyb3JNc2dzIiwidmVyaWZ5T1RQU3VibWl0Iiwib3RwIiwidmVyaWZ5T1RQIiwicmVzdWx0IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHQyxtREFBTztBQUFBLFNBQ2xCLGlKQUFxQkMsSUFBckIsQ0FBMEIsVUFBQ0MsR0FBRDtBQUFBLFdBQVNBLEdBQUcsQ0FBQ0gsSUFBYjtBQUFBLEdBQTFCLENBRGtCO0FBQUEsR0FFbEI7QUFBRUksS0FBRyxFQUFFLEtBQVA7QUFBQTtBQUFBO0FBQUEsa0NBRE8sMERBQ1A7QUFBQTtBQUFBLGtGQURPLFlBQ1A7QUFBQTtBQUFBLENBRmtCLENBQXBCO01BQU1KLEk7QUFJTjs7QUFFQSxJQUFNSyx3QkFBd0IsR0FBRyxTQUEzQkEsd0JBQTJCLEdBQU07QUFBQTs7QUFBQSxrQkFFR0MsK0NBQVEsQ0FBQyxFQUFELENBRlg7QUFBQSxNQUU5QkMsWUFGOEI7QUFBQSxNQUVoQkMsZUFGZ0I7O0FBQUEsbUJBR0tGLCtDQUFRLENBQUMsRUFBRCxDQUhiO0FBQUEsTUFHOUJHLGFBSDhCO0FBQUEsTUFHZkMsZ0JBSGU7O0FBQUEsbUJBSU9KLCtDQUFRLENBQUMsRUFBRCxDQUpmO0FBQUEsTUFJOUJLLGNBSjhCO0FBQUEsTUFJZEMsaUJBSmM7O0FBQUEsbUJBS1dOLCtDQUFRLENBQUMsRUFBRCxDQUxuQjtBQUFBLE1BSzlCTyxnQkFMOEI7QUFBQSxNQUtaQyxtQkFMWTs7QUFBQSxtQkFNcUJSLCtDQUFRLENBQUMsRUFBRCxDQU43QjtBQUFBLE1BTTlCUyxxQkFOOEI7QUFBQSxNQU1QQyx3QkFOTzs7QUFBQSxtQkFRU1YsK0NBQVEsQ0FBQyxLQUFELENBUmpCO0FBQUEsTUFROUJXLGVBUjhCO0FBQUEsTUFRYkMsa0JBUmE7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QUVDLG9CQUpaO0FBS0UsdUJBQVMsRUFBRSxFQUxiO0FBTUUsdUJBQVMsRUFBRTtBQU5iO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQW5CRixlQThCRTtBQUFLLHFCQUFTLEVBQUMsWUFBZjtBQUFBLG1DQUNFO0FBQ0Usa0JBQUksRUFBQyxVQURQO0FBRUUseUJBQVcsRUFBQyxVQUZkO0FBR0UsdUJBQVMsRUFBQyxjQUhaO0FBSUUsc0JBQVEsRUFBRUM7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkE5QkYsZUF1Q0U7QUFBQSxzQkFBS1gsTUFBTSxJQUFJRjtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBdkNGLGVBMENFO0FBQVEsZ0JBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTFDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBN0JGLGVBeUVFO0FBQU0sbUJBQVMsRUFBQyxpQkFBaEI7QUFBQSwrREFDMkI7QUFBRyxnQkFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRDNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF6RUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXpDRjtBQUFBLGtCQURGO0FBMkhELENBNU5EOztHQUFNaEIsd0I7O01BQUFBLHdCO0FBOE5OLCtEQUFlQSx3QkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40ZmZiMzlkYTA1N2ZjMTIyYmU4NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IFRhYnMgPSBkeW5hbWljKFxyXG4gIGltcG9ydChcInJlYWN0LXRhYnNcIikudGhlbigobW9kKSA9PiBtb2QuVGFicyksXHJcbiAgeyBzc3I6IGZhbHNlIH1cclxuKTtcclxuaW1wb3J0IHsgcmVzZXRJZENvdW50ZXIsIFRhYiwgVGFiTGlzdCwgVGFiUGFuZWwgfSBmcm9tIFwicmVhY3QtdGFic1wiO1xyXG5cclxuY29uc3QgQ3VzdG9lbXJSZWdpc3RyYXRpb25Gb3JtID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBbcmVnaXN0ZXJOYW1lLCBzZXRSZWdpc3Rlck5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3JlZ2lzdGVyRW1haWwsIHNldFJlZ2lzdGVyRW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3JlZ2lzdGVyTW9iaWxlLCBzZXRSZWdpc3Rlck1vYmlsZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcmVnaXN0ZXJQYXNzd29yZCwgc2V0UmVnaXN0ZXJQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY3VzdG9tZXJSZWdpc3RlckVycm9yLCBzZXRDdXN0b21lclJlZ2lzdGVyRXJyb3JdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBbZGlzcGxheXBvcHVwb3RwLCBzZXREaXNwbGF5UG9wdXBPdHBdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBbdG9rZW4sIHNldFRva2VuXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBbY3VzdG9tZXJFcnJvciwgc2V0Q3VzdG9tZXJFcnJvcl0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coY3VzdG9tZXJSZWdpc3RlckVycm9yKTtcclxuICB9LCBbY3VzdG9tZXJSZWdpc3RlckVycm9yXSk7XHJcblxyXG4gIGNvbnN0IHJlZ2lzdGVyRnVsbE5hbWVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0UmVnaXN0ZXJOYW1lKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG4gIGNvbnN0IHJlZ2lzdGVyRW1haWxDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0UmVnaXN0ZXJFbWFpbChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuICBjb25zdCByZWdpc3Rlck51bWJlckNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRSZWdpc3Rlck1vYmlsZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuICBjb25zdCByZWdpc3RlclBhc3N3b3JkQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIHNldFJlZ2lzdGVyUGFzc3dvcmQoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRvZ2dsZVBvcHVwT3RwID0gKCkgPT4ge1xyXG4gICAgc2V0RGlzcGxheVBvcHVwT3RwKCFkaXNwbGF5cG9wdXBvdHApO1xyXG4gICAgY29uc29sZS5sb2coZGlzcGxheXBvcHVwb3RwKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjdXN0b21lclJlZ2lzdGVyU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGFkZHJlc3NMaW5lMTogbnVsbCxcclxuICAgICAgYWRkcmVzc0xpbmUyOiBudWxsLFxyXG4gICAgICBhbHRlcm5hdGVNb2JpbGU6IG51bGwsXHJcbiAgICAgIGNpdHk6IG51bGwsXHJcbiAgICAgIGNpdHlHZW9JZDogMCxcclxuICAgICAgY29kZTogMCxcclxuICAgICAgZW1haWw6IHJlZ2lzdGVyRW1haWwsXHJcbiAgICAgIG5hbWU6IHJlZ2lzdGVyTmFtZSxcclxuICAgICAgaWQ6IDAsXHJcbiAgICAgIGlzYWN0aXZlOiAwLFxyXG4gICAgICBtb2JpbGU6IHJlZ2lzdGVyTW9iaWxlLFxyXG4gICAgICBwYXNzd29yZDogcmVnaXN0ZXJQYXNzd29yZCxcclxuICAgICAgcGluY29kZTogbnVsbCxcclxuICAgICAgc3RhdGU6IG51bGwsXHJcbiAgICAgIHN0YXRlR2VvSWQ6IDAsXHJcbiAgICB9O1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgY3VzdG9tZXJSZWdpc3RyYXRpb24gPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgIFwiaHR0cHM6Ly9hcGl2MS5mcmFtZWluY2FtLmNvbS9hcGkvYWNjb3VudC9yZWdpc3Rlci12ZW5kb3JcIixcclxuICAgICAgICBkYXRhXHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChjdXN0b21lclJlZ2lzdHJhdGlvbi5kYXRhLnRva2VuICE9PSBudWxsKSB7XHJcbiAgICAgICAgc2V0RGlzcGxheVBvcHVwT3RwKCFkaXNwbGF5cG9wdXBvdHApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidG9rZW4gZXJyb3Igb3RwXCIpO1xyXG4gICAgICAgIHNldFRva2VuKHZlbmRvclJlZ2lzdHJhdGlvbi5kYXRhLnRva2VuKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3Qgc2VuZE9UUCA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgICAgIGBodHRwczovL2FwaXYxLmZyYW1laW5jYW0uY29tL2FwaS90cmFuc2FjdGlvbi9wcm9qZWN0L3NlbmRvdHA/dD0ke2N1c3RvbWVyUmVnaXN0cmF0aW9uLmRhdGEudG9rZW59YFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHNlbmRPVFApO1xyXG4gICAgICAgICAgY29uc29sZS5sb2codG9rZW4pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRWZW5kb3JSZWdpc3RlckVycm9yKGN1c3RvbWVyUmVnaXN0cmF0aW9uLmRhdGEuZXJyb3JNc2dzKTtcclxuICAgICAgICBzZXRJc09wZW4oIWlzT3Blbik7XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2codmVuZG9yUmVnaXN0cmF0aW9uLmRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHZlcmlmeU9UUFN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhvdHApO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdmVyaWZ5T1RQID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICBgaHR0cHM6Ly9hcGl2MS5mcmFtZWluY2FtLmNvbS9hcGkvdHJhbnNhY3Rpb24vcHJvamVjdC9jb25maXJtb3RwLyR7b3RwfT90PSR7dG9rZW59YFxyXG4gICAgICApO1xyXG4gICAgICBjb25zb2xlLmxvZyh2ZXJpZnlPVFAuZGF0YS5yZXN1bHQpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7LyogT3RwIHB1cCBuZXcgdmlldyAqL31cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICBkaXNwbGF5cG9wdXBvdHBcclxuICAgICAgICAgICAgPyBcIm1vZGFsIGxvZ2luUmVnaXN0ZXJNb2RhbCBzaG93XCJcclxuICAgICAgICAgICAgOiBcIm1vZGFsIGxvZ2luUmVnaXN0ZXJNb2RhbFwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlkPVwibG9naW5SZWdpc3Rlck1vZGFsXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nIG1vZGFsLWRpYWxvZy1jZW50ZXJlZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxUYWJzPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgb25DbGljaz17dG9nZ2xlUG9wdXBPdHB9PlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYnggYngteFwiPjwvaT5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1jb250ZW50XCIgaWQ9XCJteVRhYkNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxUYWJQYW5lbD5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWItcGFuZSBmYWRlIHNob3cgYWN0aXZlXCIgaWQ9XCJjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaXJhbi1sb2dpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi13aXRoLWFjY291bnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxzcGFuPkVudGVyIE9UUDwvc3Bhbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt2ZXJpZnlPVFBTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgYSBPVFBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1wYW5lXCIgaWQ9XCJyZWdpc3RlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWlyYW4tcmVnaXN0ZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXItd2l0aC1hY2NvdW50XCI+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImZhY2Vib29rXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJ4IGJ4bC1mYWNlYm9va1wiPjwvaT4gRmFjZWJvb2tcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHdpdHRlclwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvZ29vZ2xlLnBuZ1wiIHdpZHRoPXsyNX0gLz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcIiM0Njg2ZjdcIiB9fT5HPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCIjZTc0MTM3XCIgfX0+bzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiI2YyYmIxM1wiIH19Pm88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcIiM0Njg2ZjdcIiB9fT5nPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCIjNTBhODU2XCIgfX0+bDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiI2U3NGY0MFwiIH19PmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8aSBjbGFzcz1cImJ4IGJ4bC1nb29nbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IEdvb2dsZSAqL31cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwb3B1cC1vcHRcIj5cclxuICAgICAgICAgICAgPHNwYW4+T3IgUmVnaXN0ZXIgd2l0aDwvc3Bhbj5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtjdXN0b21lclJlZ2lzdGVyU3VibWl0fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVzZXIgTmFtZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3JlZ2lzdGVyRnVsbE5hbWVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17cmVnaXN0ZXJFbWFpbENoYW5nZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNb2JpbGUgbnVtYmVyXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17cmVnaXN0ZXJOdW1iZXJDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBtaW5MZW5ndGg9ezEwfVxyXG4gICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXsxMH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtyZWdpc3RlclBhc3N3b3JkQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogRXJyb3IgU2hvd2luZyBTdGFydCAqL31cclxuICAgICAgICAgICAgPGg0Pntpc09wZW4gJiYgY3VzdG9tZXJFcnJvcn08L2g0PlxyXG4gICAgICAgICAgICB7LyogRXJyb3JFbmQgKi99XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5SZWdpc3RlciBOb3c8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFscmVhZHktYWNjb3VudFwiPlxyXG4gICAgICAgICAgICBBbHJlYWR5IGhhdmUgYW4gYWNjb3VudD8gPGEgaHJlZj1cIiNcIj5Mb2dpbiBOb3c8L2E+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEN1c3RvZW1yUmVnaXN0cmF0aW9uRm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==