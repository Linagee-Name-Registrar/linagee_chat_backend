"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/signin",{

/***/ "./pages/signin.jsx":
/*!**************************!*\
  !*** ./pages/signin.jsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.js\");\n/* harmony import */ var _moralisweb3_next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @moralisweb3/next */ \"./node_modules/@moralisweb3/next/lib/index.js\");\n/* harmony import */ var _moralisweb3_next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_moralisweb3_next__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Signin() {\n    _s();\n    const { isConnected , address  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount)();\n    const { chain  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useNetwork)();\n    const { status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    const { signMessageAsync  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useSignMessage)();\n    const { push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { requestChallengeAsync  } = (0,_moralisweb3_next__WEBPACK_IMPORTED_MODULE_5__.useAuthRequestChallengeEvm)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const handleAuth = async ()=>{\n            const { message  } = await requestChallengeAsync({\n                address: address,\n                chainId: chain.id\n            });\n            const signature = await signMessageAsync({\n                message\n            });\n            // redirect user after success authentication to '/user' page\n            const { url  } = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(\"moralis-auth\", {\n                message,\n                signature,\n                redirect: false,\n                callbackUrl: \"/user\"\n            });\n            /**\r\n       * instead of using signIn(..., redirect: \"/user\")\r\n       * we get the url from callback and push it to the router to avoid page refreshing\r\n       */ push(url);\n        };\n        if (status === \"unauthenticated\" && isConnected) {\n            handleAuth();\n        }\n    }, [\n        status,\n        isConnected\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"page\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"auth\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"Web3 Authentication\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mason\\\\Desktop\\\\Linagee_chat_backend\\\\web3auth_database\\\\pages\\\\signin.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"conbutton\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_6__.ConnectButton, {\n                            chainStatus: \"none\",\n                            showBalance: false,\n                            accountStatus: \"address\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mason\\\\Desktop\\\\Linagee_chat_backend\\\\web3auth_database\\\\pages\\\\signin.jsx\",\n                            lineNumber: 48,\n                            columnNumber: 7\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mason\\\\Desktop\\\\Linagee_chat_backend\\\\web3auth_database\\\\pages\\\\signin.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mason\\\\Desktop\\\\Linagee_chat_backend\\\\web3auth_database\\\\pages\\\\signin.jsx\",\n                lineNumber: 45,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\mason\\\\Desktop\\\\Linagee_chat_backend\\\\web3auth_database\\\\pages\\\\signin.jsx\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\mason\\\\Desktop\\\\Linagee_chat_backend\\\\web3auth_database\\\\pages\\\\signin.jsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n_s(Signin, \"Ev9wnY2GPNZn4Z7UMFxhRyobYD8=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount,\n        wagmi__WEBPACK_IMPORTED_MODULE_4__.useNetwork,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession,\n        wagmi__WEBPACK_IMPORTED_MODULE_4__.useSignMessage,\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _moralisweb3_next__WEBPACK_IMPORTED_MODULE_5__.useAuthRequestChallengeEvm\n    ];\n});\n_c = Signin;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Signin);\nvar _c;\n$RefreshReg$(_c, \"Signin\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaWduaW4uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBb0Q7QUFDeUI7QUFFdkI7QUFDUTtBQUM3QjtBQUNNO0FBRXZDLFNBQVNVLFNBQVM7O0lBQ2hCLE1BQU0sRUFBRUMsWUFBVyxFQUFFQyxRQUFPLEVBQUUsR0FBR1YsaURBQVVBO0lBQzNDLE1BQU0sRUFBRVcsTUFBSyxFQUFFLEdBQUdWLGlEQUFVQTtJQUM1QixNQUFNLEVBQUVXLE9BQU0sRUFBRSxHQUFHYiwyREFBVUE7SUFDN0IsTUFBTSxFQUFFYyxpQkFBZ0IsRUFBRSxHQUFHWCxxREFBY0E7SUFDM0MsTUFBTSxFQUFFWSxLQUFJLEVBQUUsR0FBR1Asc0RBQVNBO0lBQzFCLE1BQU0sRUFBRVEsc0JBQXFCLEVBQUUsR0FBR1YsNkVBQTBCQTtJQUU1REMsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU1VLGFBQWEsVUFBWTtZQUM3QixNQUFNLEVBQUVDLFFBQU8sRUFBRSxHQUFHLE1BQU1GLHNCQUFzQjtnQkFBRUwsU0FBU0E7Z0JBQVNRLFNBQVNQLE1BQU1RLEVBQUU7WUFBQztZQUV0RixNQUFNQyxZQUFZLE1BQU1QLGlCQUFpQjtnQkFBRUk7WUFBUTtZQUVuRCw2REFBNkQ7WUFFN0QsTUFBTSxFQUFFSSxJQUFHLEVBQUUsR0FBRyxNQUFNdkIsdURBQU1BLENBQUMsZ0JBQWdCO2dCQUMzQ21CO2dCQUNBRztnQkFDQUUsVUFBVSxLQUFLO2dCQUNmQyxhQUFhO1lBQ2Y7WUFDQTtRQUtGO1FBQ0EsSUFBSVgsV0FBVyxxQkFBcUJILGFBQWE7WUFDL0NPO1FBQ0YsQ0FBQztJQUNILEdBQUc7UUFBQ0o7UUFBUUg7S0FBWTtJQUV4QjtRQUNPZ0IsV0FBVTs7WUFDUkEsV0FBVTtzQkFDYjtnQkFBS0EsV0FBVTs7a0NBQ2pCLCtEQUFDQztrQ0FBRzs7Ozs7O2tDQUNKO3dCQUFLRCxXQUFVOzs0QkFDQUUsTUFBQUEsNkRBQVk7NEJBQU9DLGFBQWEsS0FBSzs0QkFBRUMsZUFBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTFFO0dBN0NTckI7OztRQUVXUDtRQUNDRjtRQUNVRyw2Q0FBQUE7UUFDWkssNkNBQUFBO1FBQ2lCRix1REFBQUE7OztLQU4zQkcsR0FBQUEseUVBQUFBO0FBK0NUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NpZ25pbi5qc3g/MDUzYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzaWduSW4sIHVzZVNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnXHJcbmltcG9ydCB7IHVzZUFjY291bnQsIHVzZU5ldHdvcmssIHVzZVNpZ25NZXNzYWdlLCB1c2VEaXNjb25uZWN0IH0gZnJvbSAnd2FnbWknXHJcblxyXG5pbXBvcnQgeyBDb25uZWN0QnV0dG9uIH0gZnJvbSAnQHJhaW5ib3ctbWUvcmFpbmJvd2tpdCdcclxuaW1wb3J0IHsgdXNlQXV0aFJlcXVlc3RDaGFsbGVuZ2VFdm0gfSBmcm9tICdAbW9yYWxpc3dlYjMvbmV4dCdcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuZnVuY3Rpb24gU2lnbmluKCkge1xyXG4gIGNvbnN0IHsgaXNDb25uZWN0ZWQsIGFkZHJlc3MgfSA9IHVzZUFjY291bnQoKVxyXG4gIGNvbnN0IHsgY2hhaW4gfSA9IHVzZU5ldHdvcmsoKVxyXG4gIGNvbnN0IHsgc3RhdHVzIH0gPSB1c2VTZXNzaW9uKClcclxuICBjb25zdCB7IHNpZ25NZXNzYWdlQXN5bmMgfSA9IHVzZVNpZ25NZXNzYWdlKClcclxuICBjb25zdCB7IHB1c2ggfSA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgeyByZXF1ZXN0Q2hhbGxlbmdlQXN5bmMgfSA9IHVzZUF1dGhSZXF1ZXN0Q2hhbGxlbmdlRXZtKClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZUF1dGggPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgbWVzc2FnZSB9ID0gYXdhaXQgcmVxdWVzdENoYWxsZW5nZUFzeW5jKHsgYWRkcmVzczogYWRkcmVzcywgY2hhaW5JZDogY2hhaW4uaWQgfSlcclxuXHJcbiAgICAgIGNvbnN0IHNpZ25hdHVyZSA9IGF3YWl0IHNpZ25NZXNzYWdlQXN5bmMoeyBtZXNzYWdlIH0pXHJcblxyXG4gICAgICAvLyByZWRpcmVjdCB1c2VyIGFmdGVyIHN1Y2Nlc3MgYXV0aGVudGljYXRpb24gdG8gJy91c2VyJyBwYWdlXHJcblxyXG4gICAgICBjb25zdCB7IHVybCB9ID0gYXdhaXQgc2lnbkluKCdtb3JhbGlzLWF1dGgnLCB7XHJcbiAgICAgICAgbWVzc2FnZSxcclxuICAgICAgICBzaWduYXR1cmUsXHJcbiAgICAgICAgcmVkaXJlY3Q6IGZhbHNlLFxyXG4gICAgICAgIGNhbGxiYWNrVXJsOiAnL3VzZXInLFxyXG4gICAgICB9KVxyXG4gICAgICAvKipcclxuICAgICAgICogaW5zdGVhZCBvZiB1c2luZyBzaWduSW4oLi4uLCByZWRpcmVjdDogXCIvdXNlclwiKVxyXG4gICAgICAgKiB3ZSBnZXQgdGhlIHVybCBmcm9tIGNhbGxiYWNrIGFuZCBwdXNoIGl0IHRvIHRoZSByb3V0ZXIgdG8gYXZvaWQgcGFnZSByZWZyZXNoaW5nXHJcbiAgICAgICAqL1xyXG4gICAgICBwdXNoKHVybClcclxuICAgIH1cclxuICAgIGlmIChzdGF0dXMgPT09ICd1bmF1dGhlbnRpY2F0ZWQnICYmIGlzQ29ubmVjdGVkKSB7XHJcbiAgICAgIGhhbmRsZUF1dGgoKVxyXG4gICAgfVxyXG4gIH0sIFtzdGF0dXMsIGlzQ29ubmVjdGVkXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0aFwiPlxyXG4gICAgICA8aDM+V2ViMyBBdXRoZW50aWNhdGlvbjwvaDM+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uYnV0dG9uXCI+XHJcbiAgICAgIDxDb25uZWN0QnV0dG9uIGNoYWluU3RhdHVzPVwibm9uZVwiIHNob3dCYWxhbmNlPXtmYWxzZX0gYWNjb3VudFN0YXR1cz1cImFkZHJlc3NcIi8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25pbjtcclxuIl0sIm5hbWVzIjpbInNpZ25JbiIsInVzZVNlc3Npb24iLCJ1c2VBY2NvdW50IiwidXNlTmV0d29yayIsInVzZVNpZ25NZXNzYWdlIiwidXNlRGlzY29ubmVjdCIsIkNvbm5lY3RCdXR0b24iLCJ1c2VBdXRoUmVxdWVzdENoYWxsZW5nZUV2bSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIlNpZ25pbiIsImlzQ29ubmVjdGVkIiwiYWRkcmVzcyIsImNoYWluIiwic3RhdHVzIiwic2lnbk1lc3NhZ2VBc3luYyIsInB1c2giLCJyZXF1ZXN0Q2hhbGxlbmdlQXN5bmMiLCJoYW5kbGVBdXRoIiwibWVzc2FnZSIsImNoYWluSWQiLCJpZCIsInNpZ25hdHVyZSIsInVybCIsInJlZGlyZWN0IiwiY2FsbGJhY2tVcmwiLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsImNoYWluU3RhdHVzIiwic2hvd0JhbGFuY2UiLCJhY2NvdW50U3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/signin.jsx\n"));

/***/ })

});