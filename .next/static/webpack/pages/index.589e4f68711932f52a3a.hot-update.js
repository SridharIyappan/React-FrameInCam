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
                _context.next = 13;
                break;
              }

              console.log(registerError, "success");
              setDisplayPopupOtp(!displaypopupotp);
              setError(true);
              _context.next = 28;
              break;

            case 13:
              console.log("no errors");
              setIsOpen(!isOpen);
              setDisplayPopupOtp(!displaypopupotp);
              setToken(register.data.token);
              _context.prev = 17;
              _context.next = 20;
              return axios__WEBPACK_IMPORTED_MODULE_5___default().post("https://apiv1.frameincam.com/api/transaction/project/sendotp?t=".concat(register.data.token));

            case 20:
              sendOTP = _context.sent;
              console.log(sendOTP);
              console.log(token);
              _context.next = 28;
              break;

            case 25:
              _context.prev = 25;
              _context.t0 = _context["catch"](17);
              console.log(err);

            case 28:
              _context.next = 33;
              break;

            case 30:
              _context.prev = 30;
              _context.t1 = _context["catch"](2);
              console.log(_context.t1);

            case 33:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 30], [17, 25]]);
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
                lineNumber: 118,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
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
                      lineNumber: 124,
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
                          lineNumber: 129,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 128,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                        type: "submit",
                        children: "Submit"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 135,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 127,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 123,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 122,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 121,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
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
                  lineNumber: 151,
                  columnNumber: 17
                }, _this), " Facebook"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 150,
                columnNumber: 15
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 149,
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
                  lineNumber: 160,
                  columnNumber: 17
                }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  style: {
                    color: "#4686f7"
                  },
                  children: "G"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 161,
                  columnNumber: 17
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  style: {
                    color: "#e74137"
                  },
                  children: "o"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 162,
                  columnNumber: 17
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  style: {
                    color: "#f2bb13"
                  },
                  children: "o"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 163,
                  columnNumber: 17
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  style: {
                    color: "#4686f7"
                  },
                  children: "g"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 164,
                  columnNumber: 17
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  style: {
                    color: "#50a856"
                  },
                  children: "l"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 165,
                  columnNumber: 17
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  style: {
                    color: "#e74f40"
                  },
                  children: "e"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 166,
                  columnNumber: 17
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 155,
                columnNumber: 15
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "popup-opt",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "Or Register with"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 172,
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
              lineNumber: 177,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 176,
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
              lineNumber: 186,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 185,
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
              lineNumber: 195,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 194,
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
              lineNumber: 206,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 205,
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
                lineNumber: 222,
                columnNumber: 15
              }, _this), " Otp Popup"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 221,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 216,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            type: "submit",
            children: "Register Now"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "already-account",
          children: ["Already have an account? ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#",
            children: "Login Now"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 229,
            columnNumber: 36
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 145,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9fQXBwL0N1c3RvbWVyL0N1c3RvbWVyUmVnaXN0cmF0aW9uRm9ybS5qcyJdLCJuYW1lcyI6WyJUYWJzIiwiZHluYW1pYyIsInRoZW4iLCJtb2QiLCJzc3IiLCJDdXN0b2VtclJlZ2lzdHJhdGlvbkZvcm0iLCJ1c2VTdGF0ZSIsInJlZ2lzdGVyTmFtZSIsInNldFJlZ2lzdGVyTmFtZSIsInJlZ2lzdGVyRW1haWwiLCJzZXRSZWdpc3RlckVtYWlsIiwicmVnaXN0ZXJNb2JpbGUiLCJzZXRSZWdpc3Rlck1vYmlsZSIsInJlZ2lzdGVyUGFzc3dvcmQiLCJzZXRSZWdpc3RlclBhc3N3b3JkIiwicmVnaXN0ZXJFcnJvciIsInNldFJlZ2lzdGVyRXJyb3IiLCJkaXNwbGF5cG9wdXBvdHAiLCJzZXREaXNwbGF5UG9wdXBPdHAiLCJ0b2tlbiIsInNldFRva2VuIiwiZXJyb3IiLCJzZXRFcnJvciIsImlzT3BlbiIsInNldElzT3BlbiIsInRvZ2dsZVBvcHVwIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsInJlZ2lzdGVyRnVsbE5hbWVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJyZWdpc3RlckVtYWlsQ2hhbmdlIiwicmVnaXN0ZXJOdW1iZXJDaGFuZ2UiLCJyZWdpc3RlclBhc3N3b3JkQ2hhbmdlIiwidG9nZ2xlUG9wdXBPdHAiLCJjdXN0b21lclJlZ2lzdGVyU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwiYWRkcmVzc0xpbmUxIiwiYWRkcmVzc0xpbmUyIiwiYWx0ZXJuYXRlTW9iaWxlIiwiY2l0eSIsImNpdHlHZW9JZCIsImNvZGUiLCJlbWFpbCIsIm5hbWUiLCJpZCIsImlzYWN0aXZlIiwibW9iaWxlIiwicGFzc3dvcmQiLCJwaW5jb2RlIiwic3RhdGUiLCJzdGF0ZUdlb0lkIiwiYXhpb3MiLCJyZWdpc3RlciIsImVycm9yTXNncyIsImxlbmd0aCIsInNlbmRPVFAiLCJlcnIiLCJkaXNw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QUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBekNGLGVBbURFO0FBQVEsZ0JBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQW5ERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBN0JGLGVBa0ZFO0FBQU0sbUJBQVMsRUFBQyxpQkFBaEI7QUFBQSwrREFDMkI7QUFBRyxnQkFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRDNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFsRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXpDQTtBQUFBLGtCQURGO0FBb0lELENBN05EOztHQUFNL0Isd0I7O01BQUFBLHdCO0FBK05OLCtEQUFlQSx3QkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41ODllNGY2ODcxMTkzMmY1MmEzYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBUYWJzID0gZHluYW1pYyhcclxuICBpbXBvcnQoJ3JlYWN0LXRhYnMnKS50aGVuKChtb2QpID0+IG1vZC5UYWJzKSxcclxuICB7IHNzcjogZmFsc2UgfVxyXG4pO1xyXG5pbXBvcnQgeyByZXNldElkQ291bnRlciwgVGFiLCBUYWJMaXN0LCBUYWJQYW5lbCB9IGZyb20gJ3JlYWN0LXRhYnMnO1xyXG5pbXBvcnQgUG9wdXAgZnJvbSBcIi4uLy4uL1BvcHVwL090cHBvcHVwXCI7XHJcbmltcG9ydCBPdHBWZXJpZmljYXRpb24gZnJvbSBcIi4uL09wdFZlcmlmaWNhdGlvblwiO1xyXG5pbXBvcnQgQ3VzdG9tZXJMb2dpbkZvcm0gZnJvbSBcIi4vQ3VzdG9tZXJMb2dpbkZvcm1cIjtcclxuXHJcbmNvbnN0IEN1c3RvZW1yUmVnaXN0cmF0aW9uRm9ybSA9ICgpID0+IHtcclxuICBjb25zdCBbcmVnaXN0ZXJOYW1lLCBzZXRSZWdpc3Rlck5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3JlZ2lzdGVyRW1haWwsIHNldFJlZ2lzdGVyRW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3JlZ2lzdGVyTW9iaWxlLCBzZXRSZWdpc3Rlck1vYmlsZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcmVnaXN0ZXJQYXNzd29yZCwgc2V0UmVnaXN0ZXJQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcmVnaXN0ZXJFcnJvciwgc2V0UmVnaXN0ZXJFcnJvcl0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IFtkaXNwbGF5cG9wdXBvdHAsIHNldERpc3BsYXlQb3B1cE90cF0gPXVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgW3Rva2VuLCBzZXRUb2tlbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIC8vICAgbGV0IHJlZ2lzdGVyRXJyb3IgPSBbXTtcclxuICBjb25zdCB0b2dnbGVQb3B1cCA9ICgpID0+IHtcclxuICAgIHNldElzT3BlbighaXNPcGVuKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2cocmVnaXN0ZXJFcnJvcik7XHJcbiAgfSwgW3JlZ2lzdGVyRXJyb3JdKTtcclxuXHJcbiAgY29uc3QgcmVnaXN0ZXJGdWxsTmFtZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRSZWdpc3Rlck5hbWUoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcbiAgY29uc3QgcmVnaXN0ZXJFbWFpbENoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRSZWdpc3RlckVtYWlsKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG4gIGNvbnN0IHJlZ2lzdGVyTnVtYmVyQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIHNldFJlZ2lzdGVyTW9iaWxlKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG4gIGNvbnN0IHJlZ2lzdGVyUGFzc3dvcmRDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0UmVnaXN0ZXJQYXNzd29yZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlUG9wdXBPdHAgPSAoKSA9PntcclxuICAgIHNldERpc3BsYXlQb3B1cE90cCghZGlzcGxheXBvcHVwb3RwKTtcclxuICAgIGNvbnNvbGUubG9nKGRpc3BsYXlwb3B1cG90cCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjdXN0b21lclJlZ2lzdGVyU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGFkZHJlc3NMaW5lMTogbnVsbCxcclxuICAgICAgYWRkcmVzc0xpbmUyOiBudWxsLFxyXG4gICAgICBhbHRlcm5hdGVNb2JpbGU6IG51bGwsXHJcbiAgICAgIGNpdHk6IG51bGwsXHJcbiAgICAgIGNpdHlHZW9JZDogMCxcclxuICAgICAgY29kZTogMCxcclxuICAgICAgZW1haWw6IHJlZ2lzdGVyRW1haWwsXHJcbiAgICAgIG5hbWU6IHJlZ2lzdGVyTmFtZSxcclxuICAgICAgaWQ6IDAsXHJcbiAgICAgIGlzYWN0aXZlOiAwLFxyXG4gICAgICBtb2JpbGU6IHJlZ2lzdGVyTW9iaWxlLFxyXG4gICAgICBwYXNzd29yZDogcmVnaXN0ZXJQYXNzd29yZCxcclxuICAgICAgcGluY29kZTogbnVsbCxcclxuICAgICAgc3RhdGU6IG51bGwsXHJcbiAgICAgIHN0YXRlR2VvSWQ6IDAsXHJcbiAgICB9O1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVnaXN0ZXIgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgIFwiaHR0cHM6Ly9hcGl2MS5mcmFtZWluY2FtLmNvbS9hcGkvYWNjb3VudC9yZWdpc3Rlci1jdXN0b21lclwiLFxyXG4gICAgICAgIGRhdGFcclxuICAgICAgKTtcclxuICAgICAgc2V0UmVnaXN0ZXJFcnJvcihyZWdpc3Rlci5kYXRhLmVycm9yTXNncyk7XHJcbiAgICAgIGlmIChyZWdpc3RlckVycm9yLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZWdpc3RlckVycm9yLCBcInN1Y2Nlc3NcIik7XHJcbiAgICAgICAgc2V0RGlzcGxheVBvcHVwT3RwKCFkaXNwbGF5cG9wdXBvdHApO1xyXG4gICAgICAgIHNldEVycm9yKHRydWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibm8gZXJyb3JzXCIpO1xyXG4gICAgICAgIHNldElzT3BlbighaXNPcGVuKTtcclxuICAgICAgICBzZXREaXNwbGF5UG9wdXBPdHAoIWRpc3BsYXlwb3B1cG90cCk7XHJcbiAgICAgICAgc2V0VG9rZW4ocmVnaXN0ZXIuZGF0YS50b2tlbik7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHNlbmRPVFAgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgICAgICBgaHR0cHM6Ly9hcGl2MS5mcmFtZWluY2FtLmNvbS9hcGkvdHJhbnNhY3Rpb24vcHJvamVjdC9zZW5kb3RwP3Q9JHtyZWdpc3Rlci5kYXRhLnRva2VufWBcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhzZW5kT1RQKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHRva2VuKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgey8qIE90cCBwdXAgbmV3IHZpZXcgKi99XHJcbiAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgIGRpc3BsYXlwb3B1cG90cFxyXG4gICAgICAgICAgICA/ICdtb2RhbCBsb2dpblJlZ2lzdGVyTW9kYWwgc2hvdydcclxuICAgICAgICAgICAgOiAnbW9kYWwgbG9naW5SZWdpc3Rlck1vZGFsJ1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZD0nbG9naW5SZWdpc3Rlck1vZGFsJ1xyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsLWRpYWxvZyBtb2RhbC1kaWFsb2ctY2VudGVyZWQnPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsLWNvbnRlbnQnPlxyXG4gICAgICAgICAgICA8VGFicz5cclxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3NOYW1lPSdjbG9zZScgb25DbGljaz17dG9nZ2xlUG9wdXBPdHB9PlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieC14Jz48L2k+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RhYi1jb250ZW50JyBpZD0nbXlUYWJDb250ZW50Jz5cclxuICAgICAgICAgICAgICAgIDxUYWJQYW5lbD5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RhYi1wYW5lIGZhZGUgc2hvdyBhY3RpdmUnIGlkPSdjJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWlyYW4tbG9naW4nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvZ2luLXdpdGgtYWNjb3VudCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8c3Bhbj5FbnRlciBPVFA8L3NwYW4+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciBhIE9UUCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCc+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0YWItcGFuZVwiIGlkPVwicmVnaXN0ZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaXJhbi1yZWdpc3RlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXItd2l0aC1hY2NvdW50XCI+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImZhY2Vib29rXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJieCBieGwtZmFjZWJvb2tcIj48L2k+IEZhY2Vib29rXHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR3aXR0ZXJcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2dvb2dsZS5wbmdcIiB3aWR0aD17MjV9IC8+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiIzQ2ODZmN1wiIH19Pkc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCIjZTc0MTM3XCIgfX0+bzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcIiNmMmJiMTNcIiB9fT5vPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiIzQ2ODZmN1wiIH19Pmc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCIjNTBhODU2XCIgfX0+bDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcIiNlNzRmNDBcIiB9fT5lPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgey8qIDxpIGNsYXNzPVwiYnggYnhsLWdvb2dsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gR29vZ2xlICovfVxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicG9wdXAtb3B0XCI+XHJcbiAgICAgICAgICA8c3Bhbj5PciBSZWdpc3RlciB3aXRoPC9zcGFuPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17Y3VzdG9tZXJSZWdpc3RlclN1Ym1pdH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlciBOYW1lXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtyZWdpc3RlckZ1bGxOYW1lQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17cmVnaXN0ZXJFbWFpbENoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNb2JpbGUgbnVtYmVyXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtyZWdpc3Rlck51bWJlckNoYW5nZX1cclxuICAgICAgICAgICAgICBtaW5MZW5ndGg9ezEwfVxyXG4gICAgICAgICAgICAgIG1heExlbmd0aD17MTB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtyZWdpc3RlclBhc3N3b3JkQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyogRXJyb3IgU2hvd2luZyBTdGFydCAqL31cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgey8qIEVycm9yRW5kICovfVxyXG4gICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVBvcHVwT3RwfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhdXRoLW9uZVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRlZmF1bHQtYnRuIGJ1dHRvbi1vbmVcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbGF0aWNvbi1tb3JlXCI+PC9pPiBPdHAgUG9wdXBcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlJlZ2lzdGVyIE5vdzwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhbHJlYWR5LWFjY291bnRcIj5cclxuICAgICAgICAgIEFscmVhZHkgaGF2ZSBhbiBhY2NvdW50PyA8YSBocmVmPVwiI1wiPkxvZ2luIE5vdzwvYT5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9lbXJSZWdpc3RyYXRpb25Gb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9