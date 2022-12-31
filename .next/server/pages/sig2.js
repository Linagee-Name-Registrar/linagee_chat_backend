"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/sig2";
exports.ids = ["pages/sig2"];
exports.modules = {

/***/ "./pages/sig2.jsx":
/*!************************!*\
  !*** ./pages/sig2.jsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var _moralisweb3_next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @moralisweb3/next */ \"@moralisweb3/next\");\n/* harmony import */ var _moralisweb3_next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_moralisweb3_next__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([wagmi__WEBPACK_IMPORTED_MODULE_2__, _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__]);\n([wagmi__WEBPACK_IMPORTED_MODULE_2__, _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\nfunction Sig2() {\n    const { isConnected , address  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useAccount)();\n    const { chain  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useNetwork)();\n    const { status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    const { signMessageAsync  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useSignMessage)();\n    const { push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const { requestChallengeAsync  } = (0,_moralisweb3_next__WEBPACK_IMPORTED_MODULE_4__.useAuthRequestChallengeEvm)();\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        const handleAuth = async ()=>{\n            const { message  } = await requestChallengeAsync({\n                address: address,\n                chainId: chain.id\n            });\n            const signature = await signMessageAsync({\n                message\n            });\n            // redirect user after success authentication to '/user' page\n            const { url  } = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(\"moralis-auth\", {\n                message,\n                signature,\n                redirect: false,\n                callbackUrl: \"/user\"\n            });\n            /**\r\n       * instead of using signIn(..., redirect: \"/user\")\r\n       * we get the url from callback and push it to the router to avoid page refreshing\r\n       */ push(url);\n        };\n        if (status === \"unauthenticated\" && isConnected) {\n            handleAuth();\n        }\n    }, [\n        status,\n        isConnected\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"page\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Web3 Authentication\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mason\\\\Desktop\\\\Linagee_chat_backend\\\\web3auth_database\\\\pages\\\\sig2.jsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.ConnectButton, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mason\\\\Desktop\\\\Linagee_chat_backend\\\\web3auth_database\\\\pages\\\\sig2.jsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mason\\\\Desktop\\\\Linagee_chat_backend\\\\web3auth_database\\\\pages\\\\sig2.jsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sig2);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaWcyLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBb0Q7QUFDVTtBQUVSO0FBQ1E7QUFDN0I7QUFDTTtBQUV2QyxTQUFTUyxPQUFPO0lBQ2QsTUFBTSxFQUFFQyxZQUFXLEVBQUVDLFFBQU8sRUFBRSxHQUFHVCxpREFBVUE7SUFDM0MsTUFBTSxFQUFFVSxNQUFLLEVBQUUsR0FBR1QsaURBQVVBO0lBQzVCLE1BQU0sRUFBRVUsT0FBTSxFQUFFLEdBQUdaLDJEQUFVQTtJQUM3QixNQUFNLEVBQUVhLGlCQUFnQixFQUFFLEdBQUdWLHFEQUFjQTtJQUMzQyxNQUFNLEVBQUVXLEtBQUksRUFBRSxHQUFHUCxzREFBU0E7SUFDMUIsTUFBTSxFQUFFUSxzQkFBcUIsRUFBRSxHQUFHViw2RUFBMEJBO0lBRTVEQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTVUsYUFBYSxVQUFZO1lBQzdCLE1BQU0sRUFBRUMsUUFBTyxFQUFFLEdBQUcsTUFBTUYsc0JBQXNCO2dCQUFFTCxTQUFTQTtnQkFBU1EsU0FBU1AsTUFBTVEsRUFBRTtZQUFDO1lBRXRGLE1BQU1DLFlBQVksTUFBTVAsaUJBQWlCO2dCQUFFSTtZQUFRO1lBRW5ELDZEQUE2RDtZQUU3RCxNQUFNLEVBQUVJLElBQUcsRUFBRSxHQUFHLE1BQU10Qix1REFBTUEsQ0FBQyxnQkFBZ0I7Z0JBQzNDa0I7Z0JBQ0FHO2dCQUNBRSxVQUFVLEtBQUs7Z0JBQ2ZDLGFBQWE7WUFDZjtZQUNBO1FBS0Y7UUFDQSxJQUFJWCxXQUFXLHFCQUFxQkgsYUFBYTtZQUMvQ087UUFDRixDQUFDO0lBQ0gsR0FBRztRQUFDSjtRQUFRSDtLQUFZO0lBRXhCO1FBQ09nQixXQUFVOztzRkFDYixFQUFDQzswQkFBRzs7Ozs7OzBCQUNKOzs7Ozs7Ozs7OztBQUdOO0FBRUEsZUFBZWxCLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anNfbW9yYWxpc19hdXRoLy4vcGFnZXMvc2lnMi5qc3g/MGZiNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzaWduSW4sIHVzZVNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnXHJcbmltcG9ydCB7IHVzZUFjY291bnQsIHVzZU5ldHdvcmssIHVzZVNpZ25NZXNzYWdlIH0gZnJvbSAnd2FnbWknXHJcblxyXG5pbXBvcnQgeyBDb25uZWN0QnV0dG9uIH0gZnJvbSAnQHJhaW5ib3ctbWUvcmFpbmJvd2tpdCdcclxuaW1wb3J0IHsgdXNlQXV0aFJlcXVlc3RDaGFsbGVuZ2VFdm0gfSBmcm9tICdAbW9yYWxpc3dlYjMvbmV4dCdcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuZnVuY3Rpb24gU2lnMigpIHtcclxuICBjb25zdCB7IGlzQ29ubmVjdGVkLCBhZGRyZXNzIH0gPSB1c2VBY2NvdW50KClcclxuICBjb25zdCB7IGNoYWluIH0gPSB1c2VOZXR3b3JrKClcclxuICBjb25zdCB7IHN0YXR1cyB9ID0gdXNlU2Vzc2lvbigpXHJcbiAgY29uc3QgeyBzaWduTWVzc2FnZUFzeW5jIH0gPSB1c2VTaWduTWVzc2FnZSgpXHJcbiAgY29uc3QgeyBwdXNoIH0gPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHsgcmVxdWVzdENoYWxsZW5nZUFzeW5jIH0gPSB1c2VBdXRoUmVxdWVzdENoYWxsZW5nZUV2bSgpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVBdXRoID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCB7IG1lc3NhZ2UgfSA9IGF3YWl0IHJlcXVlc3RDaGFsbGVuZ2VBc3luYyh7IGFkZHJlc3M6IGFkZHJlc3MsIGNoYWluSWQ6IGNoYWluLmlkIH0pXHJcblxyXG4gICAgICBjb25zdCBzaWduYXR1cmUgPSBhd2FpdCBzaWduTWVzc2FnZUFzeW5jKHsgbWVzc2FnZSB9KVxyXG5cclxuICAgICAgLy8gcmVkaXJlY3QgdXNlciBhZnRlciBzdWNjZXNzIGF1dGhlbnRpY2F0aW9uIHRvICcvdXNlcicgcGFnZVxyXG5cclxuICAgICAgY29uc3QgeyB1cmwgfSA9IGF3YWl0IHNpZ25JbignbW9yYWxpcy1hdXRoJywge1xyXG4gICAgICAgIG1lc3NhZ2UsXHJcbiAgICAgICAgc2lnbmF0dXJlLFxyXG4gICAgICAgIHJlZGlyZWN0OiBmYWxzZSxcclxuICAgICAgICBjYWxsYmFja1VybDogJy91c2VyJyxcclxuICAgICAgfSlcclxuICAgICAgLyoqXHJcbiAgICAgICAqIGluc3RlYWQgb2YgdXNpbmcgc2lnbkluKC4uLiwgcmVkaXJlY3Q6IFwiL3VzZXJcIilcclxuICAgICAgICogd2UgZ2V0IHRoZSB1cmwgZnJvbSBjYWxsYmFjayBhbmQgcHVzaCBpdCB0byB0aGUgcm91dGVyIHRvIGF2b2lkIHBhZ2UgcmVmcmVzaGluZ1xyXG4gICAgICAgKi9cclxuICAgICAgcHVzaCh1cmwpXHJcbiAgICB9XHJcbiAgICBpZiAoc3RhdHVzID09PSAndW5hdXRoZW50aWNhdGVkJyAmJiBpc0Nvbm5lY3RlZCkge1xyXG4gICAgICBoYW5kbGVBdXRoKClcclxuICAgIH1cclxuICB9LCBbc3RhdHVzLCBpc0Nvbm5lY3RlZF0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIj5cclxuICAgICAgPGgzPldlYjMgQXV0aGVudGljYXRpb248L2gzPlxyXG4gICAgICA8Q29ubmVjdEJ1dHRvbiAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWcyO1xyXG4iXSwibmFtZXMiOlsic2lnbkluIiwidXNlU2Vzc2lvbiIsInVzZUFjY291bnQiLCJ1c2VOZXR3b3JrIiwidXNlU2lnbk1lc3NhZ2UiLCJDb25uZWN0QnV0dG9uIiwidXNlQXV0aFJlcXVlc3RDaGFsbGVuZ2VFdm0iLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJTaWcyIiwiaXNDb25uZWN0ZWQiLCJhZGRyZXNzIiwiY2hhaW4iLCJzdGF0dXMiLCJzaWduTWVzc2FnZUFzeW5jIiwicHVzaCIsInJlcXVlc3RDaGFsbGVuZ2VBc3luYyIsImhhbmRsZUF1dGgiLCJtZXNzYWdlIiwiY2hhaW5JZCIsImlkIiwic2lnbmF0dXJlIiwidXJsIiwicmVkaXJlY3QiLCJjYWxsYmFja1VybCIsImRpdiIsImNsYXNzTmFtZSIsImgzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/sig2.jsx\n");

/***/ }),

/***/ "@moralisweb3/next":
/*!************************************!*\
  !*** external "@moralisweb3/next" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@moralisweb3/next");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@rainbow-me/rainbowkit":
/*!*****************************************!*\
  !*** external "@rainbow-me/rainbowkit" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = import("@rainbow-me/rainbowkit");;

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

module.exports = import("wagmi");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/sig2.jsx"));
module.exports = __webpack_exports__;

})();