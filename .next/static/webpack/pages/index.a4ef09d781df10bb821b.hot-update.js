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
/* harmony import */ var _Popup_Otppopup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Popup/Otppopup */ "./components/Popup/Otppopup.js");
/* harmony import */ var _OptVerification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../OptVerification */ "./components/_App/OptVerification.js");
/* harmony import */ var _CustomerLoginForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CustomerLoginForm */ "./components/_App/Customer/CustomerLoginForm.js");
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
    modules: ["..\\components\\_App\\Customer\\CustomerRegistrationForm.js -> " + 'react-tabs']
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
      registerError = _useState5[0],
      setRegisterError = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      displaypopupotp = _useState6[0],
      setDisplayPopupOtp = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      token = _useState7[0],
      setToken = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true),
      error = _useState8[0],
      setError = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      isOpen = _useState9[0],
      setIsOpen = _useState9[1]; //   let registerError = [];


  var togglePopup = function togglePopup() {
    setIsOpen(!isOpen);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    console.log(registerError);
  }, [registerError]);

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
      var data, register, sendOTP;
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
              return axios__WEBPACK_IMPORTED_MODULE_5___default().post("https://apiv1.frameincam.com/api/account/register-customer", data);

            case 5:
              register = _context.sent;
              setRegisterError(register.data.errorMsgs);

              if (!(registerError.length > 0)) {
                _context.next = 12;
                break;
              }

              console.log(registerError, "success");
              setError(true);
              _context.next = 27;
              break;

            case 12:
              console.log("no errors");
              setIsOpen(!isOpen);
              setDisplayPopupOtp(!displaypopupotp);
              setToken(register.data.token);
              _context.prev = 16;
              _context.next = 19;
              return axios__WEBPACK_IMPORTED_MODULE_5___default().post("https://apiv1.frameincam.com/api/transaction/project/sendotp?t=".concat(register.data.token));

            case 19:
              sendOTP = _context.sent;
              console.log(sendOTP);
              console.log(token);
              _context.next = 27;
              break;

            case 24:
              _context.prev = 24;
              _context.t0 = _context["catch"](16);
              console.log(err);

            case 27:
              _context.next = 32;
              break;

            case 29:
              _context.prev = 29;
              _context.t1 = _context["catch"](2);
              console.log(_context.t1);

            case 32:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 29], [16, 24]]);
    }));

    return function customerRegisterSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: displaypopupotp ? 'modal loginRegisterModal show' : 'modal loginRegisterModal',
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
                lineNumber: 117,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
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
                      lineNumber: 123,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "form-group",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                          type: "text",
                          placeholder: "Enter a OTP",
                          className: "form-control"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 128,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 127,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                        type: "submit",
                        children: "Submit"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 134,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 126,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 122,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 121,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 5
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
                  lineNumber: 150,
                  columnNumber: 17
                }, _this), " Facebook"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 149,
                columnNumber: 15
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 13
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
                  lineNumber: 159,
                  columnNumber: 17
                }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  style: {
                    color: "#4686f7"
                  },
                  children: "G"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 160,
                  columnNumber: 17
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  style: {
                    color: "#e74137"
                  },
                  children: "o"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 161,
                  columnNumber: 17
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  style: {
                    color: "#f2bb13"
                  },
                  children: "o"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 162,
                  columnNumber: 17
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  style: {
                    color: "#4686f7"
                  },
                  children: "g"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 163,
                  columnNumber: 17
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  style: {
                    color: "#50a856"
                  },
                  children: "l"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 164,
                  columnNumber: 17
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  style: {
                    color: "#e74f40"
                  },
                  children: "e"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 165,
                  columnNumber: 17
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 154,
                columnNumber: 15
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 153,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "popup-opt",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "Or Register with"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 9
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
              lineNumber: 176,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-group",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              type: "email",
              placeholder: "Email",
              className: "form-control",
              onChange: registerEmailChange
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 185,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 11
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
              lineNumber: 194,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 193,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-group",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              type: "password",
              placeholder: "Password",
              className: "form-control",
              onChange: registerPasswordChange
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 205,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 204,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            "data-toggle": "modal",
            onClick: togglePopupOtp,
            className: "auth-one",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "default-btn button-one",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "flaticon-more"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 221,
                columnNumber: 15
              }, _this), " Otp Popup"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 220,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            type: "submit",
            children: "Register Now"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 225,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "already-account",
          children: ["Already have an account? ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#",
            children: "Login Now"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 228,
            columnNumber: 36
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 5
    }, _this)]
  }, void 0, true);
};

_s(CustoemrRegistrationForm, "Jyh10GEUNMOHrydb+4gY1+ByDe4=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9fQXBwL0N1c3RvbWVyL0N1c3RvbWVyUmVnaXN0cmF0aW9uRm9ybS5qcyJdLCJuYW1lcyI6WyJUYWJzIiwiZHluYW1pYyIsInRoZW4iLCJtb2QiLCJzc3IiLCJDdXN0b2VtclJlZ2lzdHJhdGlvbkZvcm0iLCJ1c2VTdGF0ZSIsInJlZ2lzdGVyTmFtZSIsInNldFJlZ2lzdGVyTmFtZSIsInJlZ2lzdGVyRW1haWwiLCJzZXRSZWdpc3RlckVtYWlsIiwicmVnaXN0ZXJNb2JpbGUiLCJzZXRSZWdpc3Rlck1vYmlsZSIsInJlZ2lzdGVyUGFzc3dvcmQiLCJzZXRSZWdpc3RlclBhc3N3b3JkIiwicmVnaXN0ZXJFcnJvciIsInNldFJlZ2lzdGVyRXJyb3IiLCJkaXNwbGF5cG9wdXBvdHAiLCJzZXREaXNwbGF5UG9wdXBPdHAiLCJ0b2tlbiIsInNldFRva2VuIiwiZXJyb3IiLCJzZXRFcnJvciIsImlzT3BlbiIsInNldElzT3BlbiIsInRvZ2dsZVBvcHVwIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsInJlZ2lzdGVyRnVsbE5hbWVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJyZWdpc3RlckVtYWlsQ2hhbmdlIiwicmVnaXN0ZXJOdW1iZXJDaGFuZ2UiLCJyZWdpc3RlclBhc3N3b3JkQ2hhbmdlIiwidG9nZ2xlUG9wdXBPdHAiLCJjdXN0b21lclJlZ2lzdGVyU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwiYWRkcmVzc0xpbmUxIiwiYWRkcmVzc0xpbmUyIiwiYWx0ZXJuYXRlTW9iaWxlIiwiY2l0eSIsImNpdHlHZW9JZCIsImNvZGUiLCJlbWFpbCIsIm5hbWUiLCJpZCIsImlzYWN0aXZlIiwibW9iaWxlIiwicGFzc3dvcmQiLCJwaW5jb2RlIiwic3RhdGUiLCJzdGF0ZUdlb0lkIiwiYXhpb3MiLCJyZWdpc3RlciIsImVycm9yTXNncyIsImxlbmd0aCIsInNlbmRPVFAiLCJlcnIiLCJkaXNw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QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXpDRixlQW1ERTtBQUFRLGdCQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFuREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTdCRixlQWtGRTtBQUFNLG1CQUFTLEVBQUMsaUJBQWhCO0FBQUEsK0RBQzJCO0FBQUcsZ0JBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUQzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbEZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF6Q0E7QUFBQSxrQkFERjtBQW9JRCxDQTVORDs7R0FBTS9CLHdCOztNQUFBQSx3QjtBQThOTiwrREFBZUEsd0JBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTRlZjA5ZDc4MWRmMTBiYjgyMWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgVGFicyA9IGR5bmFtaWMoXHJcbiAgaW1wb3J0KCdyZWFjdC10YWJzJykudGhlbigobW9kKSA9PiBtb2QuVGFicyksXHJcbiAgeyBzc3I6IGZhbHNlIH1cclxuKTtcclxuaW1wb3J0IHsgcmVzZXRJZENvdW50ZXIsIFRhYiwgVGFiTGlzdCwgVGFiUGFuZWwgfSBmcm9tICdyZWFjdC10YWJzJztcclxuaW1wb3J0IFBvcHVwIGZyb20gXCIuLi8uLi9Qb3B1cC9PdHBwb3B1cFwiO1xyXG5pbXBvcnQgT3RwVmVyaWZpY2F0aW9uIGZyb20gXCIuLi9PcHRWZXJpZmljYXRpb25cIjtcclxuaW1wb3J0IEN1c3RvbWVyTG9naW5Gb3JtIGZyb20gXCIuL0N1c3RvbWVyTG9naW5Gb3JtXCI7XHJcblxyXG5jb25zdCBDdXN0b2VtclJlZ2lzdHJhdGlvbkZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgW3JlZ2lzdGVyTmFtZSwgc2V0UmVnaXN0ZXJOYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtyZWdpc3RlckVtYWlsLCBzZXRSZWdpc3RlckVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtyZWdpc3Rlck1vYmlsZSwgc2V0UmVnaXN0ZXJNb2JpbGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3JlZ2lzdGVyUGFzc3dvcmQsIHNldFJlZ2lzdGVyUGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3JlZ2lzdGVyRXJyb3IsIHNldFJlZ2lzdGVyRXJyb3JdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBbZGlzcGxheXBvcHVwb3RwLCBzZXREaXNwbGF5UG9wdXBPdHBdID11c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFt0b2tlbiwgc2V0VG9rZW5dID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAvLyAgIGxldCByZWdpc3RlckVycm9yID0gW107XHJcbiAgY29uc3QgdG9nZ2xlUG9wdXAgPSAoKSA9PiB7XHJcbiAgICBzZXRJc09wZW4oIWlzT3Blbik7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHJlZ2lzdGVyRXJyb3IpO1xyXG4gIH0sIFtyZWdpc3RlckVycm9yXSk7XHJcblxyXG4gIGNvbnN0IHJlZ2lzdGVyRnVsbE5hbWVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0UmVnaXN0ZXJOYW1lKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG4gIGNvbnN0IHJlZ2lzdGVyRW1haWxDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0UmVnaXN0ZXJFbWFpbChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuICBjb25zdCByZWdpc3Rlck51bWJlckNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRSZWdpc3Rlck1vYmlsZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuICBjb25zdCByZWdpc3RlclBhc3N3b3JkQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIHNldFJlZ2lzdGVyUGFzc3dvcmQoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRvZ2dsZVBvcHVwT3RwID0gKCkgPT57XHJcbiAgICBzZXREaXNwbGF5UG9wdXBPdHAoIWRpc3BsYXlwb3B1cG90cCk7XHJcbiAgICBjb25zb2xlLmxvZyhkaXNwbGF5cG9wdXBvdHApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY3VzdG9tZXJSZWdpc3RlclN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBhZGRyZXNzTGluZTE6IG51bGwsXHJcbiAgICAgIGFkZHJlc3NMaW5lMjogbnVsbCxcclxuICAgICAgYWx0ZXJuYXRlTW9iaWxlOiBudWxsLFxyXG4gICAgICBjaXR5OiBudWxsLFxyXG4gICAgICBjaXR5R2VvSWQ6IDAsXHJcbiAgICAgIGNvZGU6IDAsXHJcbiAgICAgIGVtYWlsOiByZWdpc3RlckVtYWlsLFxyXG4gICAgICBuYW1lOiByZWdpc3Rlck5hbWUsXHJcbiAgICAgIGlkOiAwLFxyXG4gICAgICBpc2FjdGl2ZTogMCxcclxuICAgICAgbW9iaWxlOiByZWdpc3Rlck1vYmlsZSxcclxuICAgICAgcGFzc3dvcmQ6IHJlZ2lzdGVyUGFzc3dvcmQsXHJcbiAgICAgIHBpbmNvZGU6IG51bGwsXHJcbiAgICAgIHN0YXRlOiBudWxsLFxyXG4gICAgICBzdGF0ZUdlb0lkOiAwLFxyXG4gICAgfTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlZ2lzdGVyID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICBcImh0dHBzOi8vYXBpdjEuZnJhbWVpbmNhbS5jb20vYXBpL2FjY291bnQvcmVnaXN0ZXItY3VzdG9tZXJcIixcclxuICAgICAgICBkYXRhXHJcbiAgICAgICk7XHJcbiAgICAgIHNldFJlZ2lzdGVyRXJyb3IocmVnaXN0ZXIuZGF0YS5lcnJvck1zZ3MpO1xyXG4gICAgICBpZiAocmVnaXN0ZXJFcnJvci5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVnaXN0ZXJFcnJvciwgXCJzdWNjZXNzXCIpO1xyXG4gICAgICAgIHNldEVycm9yKHRydWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibm8gZXJyb3JzXCIpO1xyXG4gICAgICAgIHNldElzT3BlbighaXNPcGVuKTtcclxuICAgICAgICBzZXREaXNwbGF5UG9wdXBPdHAoIWRpc3BsYXlwb3B1cG90cCk7XHJcbiAgICAgICAgc2V0VG9rZW4ocmVnaXN0ZXIuZGF0YS50b2tlbik7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHNlbmRPVFAgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgICAgICBgaHR0cHM6Ly9hcGl2MS5mcmFtZWluY2FtLmNvbS9hcGkvdHJhbnNhY3Rpb24vcHJvamVjdC9zZW5kb3RwP3Q9JHtyZWdpc3Rlci5kYXRhLnRva2VufWBcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhzZW5kT1RQKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHRva2VuKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgey8qIE90cCBwdXAgbmV3IHZpZXcgKi99XHJcbiAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgIGRpc3BsYXlwb3B1cG90cFxyXG4gICAgICAgICAgICA/ICdtb2RhbCBsb2dpblJlZ2lzdGVyTW9kYWwgc2hvdydcclxuICAgICAgICAgICAgOiAnbW9kYWwgbG9naW5SZWdpc3Rlck1vZGFsJ1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZD0nbG9naW5SZWdpc3Rlck1vZGFsJ1xyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsLWRpYWxvZyBtb2RhbC1kaWFsb2ctY2VudGVyZWQnPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsLWNvbnRlbnQnPlxyXG4gICAgICAgICAgICA8VGFicz5cclxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3NOYW1lPSdjbG9zZScgb25DbGljaz17dG9nZ2xlUG9wdXBPdHB9PlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieC14Jz48L2k+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RhYi1jb250ZW50JyBpZD0nbXlUYWJDb250ZW50Jz5cclxuICAgICAgICAgICAgICAgIDxUYWJQYW5lbD5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RhYi1wYW5lIGZhZGUgc2hvdyBhY3RpdmUnIGlkPSdjJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWlyYW4tbG9naW4nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvZ2luLXdpdGgtYWNjb3VudCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8c3Bhbj5FbnRlciBPVFA8L3NwYW4+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciBhIE9UUCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCc+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0YWItcGFuZVwiIGlkPVwicmVnaXN0ZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaXJhbi1yZWdpc3RlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXItd2l0aC1hY2NvdW50XCI+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImZhY2Vib29rXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJieCBieGwtZmFjZWJvb2tcIj48L2k+IEZhY2Vib29rXHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR3aXR0ZXJcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2dvb2dsZS5wbmdcIiB3aWR0aD17MjV9IC8+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiIzQ2ODZmN1wiIH19Pkc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCIjZTc0MTM3XCIgfX0+bzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcIiNmMmJiMTNcIiB9fT5vPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiIzQ2ODZmN1wiIH19Pmc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCIjNTBhODU2XCIgfX0+bDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcIiNlNzRmNDBcIiB9fT5lPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgey8qIDxpIGNsYXNzPVwiYnggYnhsLWdvb2dsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gR29vZ2xlICovfVxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicG9wdXAtb3B0XCI+XHJcbiAgICAgICAgICA8c3Bhbj5PciBSZWdpc3RlciB3aXRoPC9zcGFuPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17Y3VzdG9tZXJSZWdpc3RlclN1Ym1pdH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlciBOYW1lXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtyZWdpc3RlckZ1bGxOYW1lQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17cmVnaXN0ZXJFbWFpbENoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNb2JpbGUgbnVtYmVyXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtyZWdpc3Rlck51bWJlckNoYW5nZX1cclxuICAgICAgICAgICAgICBtaW5MZW5ndGg9ezEwfVxyXG4gICAgICAgICAgICAgIG1heExlbmd0aD17MTB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtyZWdpc3RlclBhc3N3b3JkQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyogRXJyb3IgU2hvd2luZyBTdGFydCAqL31cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgey8qIEVycm9yRW5kICovfVxyXG4gICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVBvcHVwT3RwfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhdXRoLW9uZVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRlZmF1bHQtYnRuIGJ1dHRvbi1vbmVcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbGF0aWNvbi1tb3JlXCI+PC9pPiBPdHAgUG9wdXBcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlJlZ2lzdGVyIE5vdzwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhbHJlYWR5LWFjY291bnRcIj5cclxuICAgICAgICAgIEFscmVhZHkgaGF2ZSBhbiBhY2NvdW50PyA8YSBocmVmPVwiI1wiPkxvZ2luIE5vdzwvYT5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9lbXJSZWdpc3RyYXRpb25Gb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9