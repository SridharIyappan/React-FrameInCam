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
      var data, vendorRegistration, sendOTP;
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
              return axios__WEBPACK_IMPORTED_MODULE_5___default().post('https://apiv1.frameincam.com/api/account/register-vendor', data);

            case 5:
              vendorRegistration = _context.sent;

              if (!(vendorRegistration.data.token !== null)) {
                _context.next = 23;
                break;
              }

              setDisplayPopupOtp(!displaypopupotp);
              console.log('token error otp');
              setToken(vendorRegistration.data.token);
              _context.prev = 10;
              _context.next = 13;
              return axios__WEBPACK_IMPORTED_MODULE_5___default().post("https://apiv1.frameincam.com/api/transaction/project/sendotp?t=".concat(vendorRegistration.data.token));

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
              setVendorRegisterError(vendorRegistration.data.errorMsgs);
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
                lineNumber: 126,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
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
                      lineNumber: 132,
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
                          lineNumber: 137,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 136,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                        type: "submit",
                        children: "Submit"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 143,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 135,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 131,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 130,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 114,
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
                  lineNumber: 159,
                  columnNumber: 17
                }, _this), " Facebook"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 158,
                columnNumber: 15
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
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
                  lineNumber: 168,
                  columnNumber: 17
                }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  style: {
                    color: "#4686f7"
                  },
                  children: "G"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 169,
                  columnNumber: 17
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  style: {
                    color: "#e74137"
                  },
                  children: "o"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 170,
                  columnNumber: 17
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  style: {
                    color: "#f2bb13"
                  },
                  children: "o"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 171,
                  columnNumber: 17
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  style: {
                    color: "#4686f7"
                  },
                  children: "g"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 172,
                  columnNumber: 17
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  style: {
                    color: "#50a856"
                  },
                  children: "l"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 173,
                  columnNumber: 17
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  style: {
                    color: "#e74f40"
                  },
                  children: "e"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 174,
                  columnNumber: 17
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 163,
                columnNumber: 15
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "popup-opt",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "Or Register with"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 180,
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
              type: "email",
              placeholder: "Email",
              className: "form-control",
              onChange: registerEmailChange
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
              type: "text",
              placeholder: "Mobile number",
              className: "form-control",
              onChange: registerNumberChange,
              minLength: 10,
              maxLength: 10
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 203,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 202,
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
              lineNumber: 214,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 213,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
            children: isOpen && registerError[0]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 222,
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
          lineNumber: 183,
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
        lineNumber: 154,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 153,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9fQXBwL0N1c3RvbWVyL0N1c3RvbWVyUmVnaXN0cmF0aW9uRm9ybS5qcyJdLCJuYW1lcyI6WyJUYWJzIiwiZHluYW1pYyIsInRoZW4iLCJtb2QiLCJzc3IiLCJDdXN0b2VtclJlZ2lzdHJhdGlvbkZvcm0iLCJ1c2VTdGF0ZSIsInJlZ2lzdGVyTmFtZSIsInNldFJlZ2lzdGVyTmFtZSIsInJlZ2lzdGVyRW1haWwiLCJzZXRSZWdpc3RlckVtYWlsIiwicmVnaXN0ZXJNb2JpbGUiLCJzZXRSZWdpc3Rlck1vYmlsZSIsInJlZ2lzdGVyUGFzc3dvcmQiLCJzZXRSZWdpc3RlclBhc3N3b3JkIiwicmVnaXN0ZXJFcnJvciIsInNldFJlZ2lzdGVyRXJyb3IiLCJkaXNwbGF5cG9wdXBvdHAiLCJzZXREaXNwbGF5UG9wdXBPdHAiLCJ0b2tlbiIsInNldFRva2VuIiwiZXJyb3IiLCJzZXRFcnJvciIsImlzT3BlbiIsInNldElzT3BlbiIsInRvZ2dsZVBvcHVwIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsInJlZ2lzdGVyRnVsbE5hbWVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJyZWdpc3RlckVtYWlsQ2hhbmdlIiwicmVnaXN0ZXJOdW1iZXJDaGFuZ2UiLCJyZWdpc3RlclBhc3N3b3JkQ2hhbmdlIiwidG9nZ2xlUG9wdXBPdHAiLCJjdXN0b21lclJlZ2lzdGVyU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwiYWRkcmVzc0xpbmUxIiwiYWRkcmVzc0xpbmUyIiwiYWx0ZXJuYXRlTW9iaWxlIiwiY2l0eSIsImNpdHlHZW9JZCIsImNvZGUiLCJlbWFpbCIsIm5hbWUiLCJpZCIsImlzYWN0aXZlIiwibW9iaWxlIiwicGFzc3dvcmQiLCJwaW5jb2RlIiwic3RhdGUiLCJzdGF0ZUdlb0lkIiwiYXhpb3MiLCJ2ZW5kb3JSZWdpc3RyYXRpb24iLCJzZW5kT1RQIiwiZXJyIiwic2V0VmVuZG9yUmVnaXN0ZXJFcnJvciIsImVycm9yTXNncyIsInZlcmlmeU9UUFN1Ym1pdCIsIm90cCIsInZlcmlmeU9UUCIsInJlc3VsdCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLElBQUksR0FBR0MsbURBQU87QUFBQSxTQUNsQixpSkFBcUJDLElBQXJCLENBQTBCLFVBQUNDLEdBQUQ7QUFBQSxXQUFTQSxHQUFHLENBQUNILElBQWI7QUFBQSxHQUExQixDQURrQjtBQUFBLEdBRWxCO0FBQUVJLEtBQUcsRUFBRSxLQUFQO0FBQUE7QUFBQTtBQUFBLGtDQURPLDBEQUNQO0FBQUE7QUFBQSxrRkFETyxZQUNQO0FBQUE7QUFBQSxDQUZrQixDQUFwQjtNQUFNSixJO0FBSU47QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUssd0JBQXdCLEdBQUcsU0FBM0JBLHdCQUEyQixHQUFNO0FBQUE7O0FBQUEsa0JBQ0dDLCtDQUFRLENBQUMsRUFBRCxDQURYO0FBQUEsTUFDOUJDLFlBRDhCO0FBQUEsTUFDaEJDLGVBRGdCOztBQUFBLG1CQUVLRiwrQ0FBUSxDQUFDLEVBQUQsQ0FGYjtBQUFBLE1BRTlCRyxhQUY4QjtBQUFBLE1BRWZDLGdCQUZlOztBQUFBLG1CQUdPSiwrQ0FBUSxDQUFDLEVBQUQsQ0FIZjtBQUFBLE1BRzlCSyxjQUg4QjtBQUFBLE1BR2RDLGlCQUhjOztBQUFBLG1CQUlXTiwrQ0FBUSxDQUFDLEVBQUQsQ0FKbkI7QUFBQSxNQUk5Qk8sZ0JBSjhCO0FBQUEsTUFJWkMsbUJBSlk7O0FBQUEsbUJBS0tSLCtDQUFRLENBQUMsRUFBRCxDQUxiO0FBQUEsTUFLOUJTLGFBTDhCO0FBQUEsTUFLZkMsZ0JBTGU7O0FBQUEsbUJBT1FWLCtDQUFRLENBQUMsS0FBRCxDQVBoQjtBQUFBLE1BTzlCVyxlQVA4QjtBQUFBLE1BT2JDLGtCQVBhOztBQUFBLG1CQVNYWiwrQ0FBUSxDQUFDLEVB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LGVBRmQ7QUFHRSx1QkFBUyxFQUFDLGNBSFo7QUFJRSxzQkFBUSxFQUFFQyxvQkFKWjtBQUtFLHVCQUFTLEVBQUUsRUFMYjtBQU1FLHVCQUFTLEVBQUU7QUFOYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFuQkYsZUE4QkU7QUFBSyxxQkFBUyxFQUFDLFlBQWY7QUFBQSxtQ0FDRTtBQUNFLGtCQUFJLEVBQUMsVUFEUDtBQUVFLHlCQUFXLEVBQUMsVUFGZDtBQUdFLHVCQUFTLEVBQUMsY0FIWjtBQUlFLHNCQUFRLEVBQUVDO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBOUJGLGVBdUNFO0FBQUEsc0JBQUtaLE1BQU0sSUFBSVIsYUFBYSxDQUFDLENBQUQ7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkF2Q0YsZUEwQ0U7QUFBUSxnQkFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBMUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE3QkYsZUF5RUU7QUFBTSxtQkFBUyxFQUFDLGlCQUFoQjtBQUFBLCtEQUMyQjtBQUFHLGdCQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXpFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBekNBO0FBQUEsa0JBREY7QUEySEQsQ0E1TkQ7O0dBQU1WLHdCOztNQUFBQSx3QjtBQThOTiwrREFBZUEsd0JBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTViMWQxNjFjN2VjMTNiODVjMGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgVGFicyA9IGR5bmFtaWMoXHJcbiAgaW1wb3J0KCdyZWFjdC10YWJzJykudGhlbigobW9kKSA9PiBtb2QuVGFicyksXHJcbiAgeyBzc3I6IGZhbHNlIH1cclxuKTtcclxuaW1wb3J0IHsgcmVzZXRJZENvdW50ZXIsIFRhYiwgVGFiTGlzdCwgVGFiUGFuZWwgfSBmcm9tICdyZWFjdC10YWJzJztcclxuaW1wb3J0IFBvcHVwIGZyb20gXCIuLi8uLi9Qb3B1cC9PdHBwb3B1cFwiO1xyXG5pbXBvcnQgT3RwVmVyaWZpY2F0aW9uIGZyb20gXCIuLi9PcHRWZXJpZmljYXRpb25cIjtcclxuaW1wb3J0IEN1c3RvbWVyTG9naW5Gb3JtIGZyb20gXCIuL0N1c3RvbWVyTG9naW5Gb3JtXCI7XHJcblxyXG5jb25zdCBDdXN0b2VtclJlZ2lzdHJhdGlvbkZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgW3JlZ2lzdGVyTmFtZSwgc2V0UmVnaXN0ZXJOYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtyZWdpc3RlckVtYWlsLCBzZXRSZWdpc3RlckVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtyZWdpc3Rlck1vYmlsZSwgc2V0UmVnaXN0ZXJNb2JpbGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3JlZ2lzdGVyUGFzc3dvcmQsIHNldFJlZ2lzdGVyUGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3JlZ2lzdGVyRXJyb3IsIHNldFJlZ2lzdGVyRXJyb3JdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBbZGlzcGxheXBvcHVwb3RwLCBzZXREaXNwbGF5UG9wdXBPdHBdID11c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFt0b2tlbiwgc2V0VG9rZW5dID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAvLyAgIGxldCByZWdpc3RlckVycm9yID0gW107XHJcbiAgY29uc3QgdG9nZ2xlUG9wdXAgPSAoKSA9PiB7XHJcbiAgICBzZXRJc09wZW4oIWlzT3Blbik7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHJlZ2lzdGVyRXJyb3IpO1xyXG4gIH0sIFtyZWdpc3RlckVycm9yXSk7XHJcblxyXG4gIGNvbnN0IHJlZ2lzdGVyRnVsbE5hbWVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0UmVnaXN0ZXJOYW1lKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG4gIGNvbnN0IHJlZ2lzdGVyRW1haWxDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0UmVnaXN0ZXJFbWFpbChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuICBjb25zdCByZWdpc3Rlck51bWJlckNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRSZWdpc3Rlck1vYmlsZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuICBjb25zdCByZWdpc3RlclBhc3N3b3JkQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIHNldFJlZ2lzdGVyUGFzc3dvcmQoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRvZ2dsZVBvcHVwT3RwID0gKCkgPT57XHJcbiAgICBzZXREaXNwbGF5UG9wdXBPdHAoIWRpc3BsYXlwb3B1cG90cCk7XHJcbiAgICBjb25zb2xlLmxvZyhkaXNwbGF5cG9wdXBvdHApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY3VzdG9tZXJSZWdpc3RlclN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBhZGRyZXNzTGluZTE6IG51bGwsXHJcbiAgICAgIGFkZHJlc3NMaW5lMjogbnVsbCxcclxuICAgICAgYWx0ZXJuYXRlTW9iaWxlOiBudWxsLFxyXG4gICAgICBjaXR5OiBudWxsLFxyXG4gICAgICBjaXR5R2VvSWQ6IDAsXHJcbiAgICAgIGNvZGU6IDAsXHJcbiAgICAgIGVtYWlsOiByZWdpc3RlckVtYWlsLFxyXG4gICAgICBuYW1lOiByZWdpc3Rlck5hbWUsXHJcbiAgICAgIGlkOiAwLFxyXG4gICAgICBpc2FjdGl2ZTogMCxcclxuICAgICAgbW9iaWxlOiByZWdpc3Rlck1vYmlsZSxcclxuICAgICAgcGFzc3dvcmQ6IHJlZ2lzdGVyUGFzc3dvcmQsXHJcbiAgICAgIHBpbmNvZGU6IG51bGwsXHJcbiAgICAgIHN0YXRlOiBudWxsLFxyXG4gICAgICBzdGF0ZUdlb0lkOiAwLFxyXG4gICAgfTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHZlbmRvclJlZ2lzdHJhdGlvbiA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHBzOi8vYXBpdjEuZnJhbWVpbmNhbS5jb20vYXBpL2FjY291bnQvcmVnaXN0ZXItdmVuZG9yJywgZGF0YSk7XHJcbiAgICAgIGlmKHZlbmRvclJlZ2lzdHJhdGlvbi5kYXRhLnRva2VuICE9PSBudWxsKSB7ICBcclxuICAgICAgICBzZXREaXNwbGF5UG9wdXBPdHAoIWRpc3BsYXlwb3B1cG90cCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3Rva2VuIGVycm9yIG90cCcpXHJcbiAgICAgICAgc2V0VG9rZW4odmVuZG9yUmVnaXN0cmF0aW9uLmRhdGEudG9rZW4pXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHNlbmRPVFAgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgICAgICBgaHR0cHM6Ly9hcGl2MS5mcmFtZWluY2FtLmNvbS9hcGkvdHJhbnNhY3Rpb24vcHJvamVjdC9zZW5kb3RwP3Q9JHt2ZW5kb3JSZWdpc3RyYXRpb24uZGF0YS50b2tlbn1gXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coc2VuZE9UUCk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyh0b2tlbik7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldFZlbmRvclJlZ2lzdGVyRXJyb3IodmVuZG9yUmVnaXN0cmF0aW9uLmRhdGEuZXJyb3JNc2dzKTtcclxuICAgICAgICBzZXRJc09wZW4oIWlzT3Blbik7XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2codmVuZG9yUmVnaXN0cmF0aW9uLmRhdGEpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHZlcmlmeU9UUFN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbmUucHJldmVudERlZmF1bHQoKTtcclxuY29uc29sZS5sb2cob3RwKTtcclxudHJ5IHtcclxuICBjb25zdCB2ZXJpZnlPVFAgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgYGh0dHBzOi8vYXBpdjEuZnJhbWVpbmNhbS5jb20vYXBpL3RyYW5zYWN0aW9uL3Byb2plY3QvY29uZmlybW90cC8ke290cH0/dD0ke3Rva2VufWBcclxuICApO1xyXG4gIGNvbnNvbGUubG9nKHZlcmlmeU9UUC5kYXRhLnJlc3VsdCk7XHJcbn0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgY29uc29sZS5sb2coZXJyb3IpO1xyXG59XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICB7LyogT3RwIHB1cCBuZXcgdmlldyAqL31cclxuICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgZGlzcGxheXBvcHVwb3RwXHJcbiAgICAgICAgICAgID8gJ21vZGFsIGxvZ2luUmVnaXN0ZXJNb2RhbCBzaG93J1xyXG4gICAgICAgICAgICA6ICdtb2RhbCBsb2dpblJlZ2lzdGVyTW9kYWwnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlkPSdsb2dpblJlZ2lzdGVyTW9kYWwnXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWwtZGlhbG9nIG1vZGFsLWRpYWxvZy1jZW50ZXJlZCc+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWwtY29udGVudCc+XHJcbiAgICAgICAgICAgIDxUYWJzPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzc05hbWU9J2Nsb3NlJyBvbkNsaWNrPXt0b2dnbGVQb3B1cE90cH0+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2J4IGJ4LXgnPjwvaT5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGFiLWNvbnRlbnQnIGlkPSdteVRhYkNvbnRlbnQnPlxyXG4gICAgICAgICAgICAgICAgPFRhYlBhbmVsPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGFiLXBhbmUgZmFkZSBzaG93IGFjdGl2ZScgaWQ9J2MnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtaXJhbi1sb2dpbic+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9naW4td2l0aC1hY2NvdW50Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxzcGFuPkVudGVyIE9UUDwvc3Bhbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIGEgT1RQJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0Jz5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1wYW5lXCIgaWQ9XCJyZWdpc3RlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pcmFuLXJlZ2lzdGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3Rlci13aXRoLWFjY291bnRcIj5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZmFjZWJvb2tcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJ4IGJ4bC1mYWNlYm9va1wiPjwvaT4gRmFjZWJvb2tcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHdpdHRlclwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvZ29vZ2xlLnBuZ1wiIHdpZHRoPXsyNX0gLz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCIjNDY4NmY3XCIgfX0+Rzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcIiNlNzQxMzdcIiB9fT5vPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiI2YyYmIxM1wiIH19Pm88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCIjNDY4NmY3XCIgfX0+Zzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcIiM1MGE4NTZcIiB9fT5sPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiI2U3NGY0MFwiIH19PmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICB7LyogPGkgY2xhc3M9XCJieCBieGwtZ29vZ2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiBHb29nbGUgKi99XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwb3B1cC1vcHRcIj5cclxuICAgICAgICAgIDxzcGFuPk9yIFJlZ2lzdGVyIHdpdGg8L3NwYW4+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtjdXN0b21lclJlZ2lzdGVyU3VibWl0fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VyIE5hbWVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3JlZ2lzdGVyRnVsbE5hbWVDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtyZWdpc3RlckVtYWlsQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1vYmlsZSBudW1iZXJcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3JlZ2lzdGVyTnVtYmVyQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIG1pbkxlbmd0aD17MTB9XHJcbiAgICAgICAgICAgICAgbWF4TGVuZ3RoPXsxMH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3JlZ2lzdGVyUGFzc3dvcmRDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiBFcnJvciBTaG93aW5nIFN0YXJ0ICovfVxyXG4gICAgICAgICAgPGg0Pntpc09wZW4gJiYgcmVnaXN0ZXJFcnJvclswXX08L2g0PiAgICAgXHJcbiAgICAgICAgICB7LyogRXJyb3JFbmQgKi99XHJcblxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+UmVnaXN0ZXIgTm93PC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFscmVhZHktYWNjb3VudFwiPlxyXG4gICAgICAgICAgQWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/IDxhIGhyZWY9XCIjXCI+TG9naW4gTm93PC9hPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDdXN0b2VtclJlZ2lzdHJhdGlvbkZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=