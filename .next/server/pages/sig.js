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
exports.id = "pages/sig";
exports.ids = ["pages/sig"];
exports.modules = {

/***/ "./pages/sig.jsx":
/*!***********************!*\
  !*** ./pages/sig.jsx ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wagmi/connectors/metaMask */ \"wagmi/connectors/metaMask\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _moralisweb3_next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @moralisweb3/next */ \"@moralisweb3/next\");\n/* harmony import */ var _moralisweb3_next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_moralisweb3_next__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_1__, wagmi__WEBPACK_IMPORTED_MODULE_3__]);\n([wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_1__, wagmi__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nfunction Sig() {\n    const { connectAsync  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useConnect)();\n    const { disconnectAsync  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useDisconnect)();\n    const { isConnected  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useAccount)();\n    const { signMessageAsync  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useSignMessage)();\n    const { requestChallengeAsync  } = (0,_moralisweb3_next__WEBPACK_IMPORTED_MODULE_5__.useAuthRequestChallengeEvm)();\n    const { push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const handleAuth = async ()=>{\n        if (isConnected) {\n            await disconnectAsync();\n        }\n        const { account , chain  } = await connectAsync({\n            connector: new wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_1__.MetaMaskConnector()\n        });\n        const { message  } = await requestChallengeAsync({\n            address: account,\n            chainId: chain.id\n        });\n        const signature = await signMessageAsync({\n            message\n        });\n        // redirect user after success authentication to '/user' page\n        const { url  } = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signIn)(\"moralis-auth\", {\n            message,\n            signature,\n            redirect: false,\n            callbackUrl: \"/user\"\n        });\n        /**\r\n         * instead of using signIn(..., redirect: \"/user\")\r\n         * we get the url from callback and push it to the router to avoid page refreshing\r\n         */ push(url);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"page\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Web3 Authentication\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mason\\\\Desktop\\\\Linagee_chat_backend\\\\web3auth_database\\\\pages\\\\sig.jsx\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleAuth,\n                children: \"Authenticate via Metamask\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mason\\\\Desktop\\\\Linagee_chat_backend\\\\web3auth_database\\\\pages\\\\sig.jsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mason\\\\Desktop\\\\Linagee_chat_backend\\\\web3auth_database\\\\pages\\\\sig.jsx\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sig);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaWcuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBOEQ7QUFDckI7QUFDcUM7QUFDdEM7QUFDdUI7QUFFL0QsU0FBU1EsTUFBTTtJQUNYLE1BQU0sRUFBRUMsYUFBWSxFQUFFLEdBQUdOLGlEQUFVQTtJQUNuQyxNQUFNLEVBQUVPLGdCQUFlLEVBQUUsR0FBR0wsb0RBQWFBO0lBQ3pDLE1BQU0sRUFBRU0sWUFBVyxFQUFFLEdBQUdULGlEQUFVQTtJQUNsQyxNQUFNLEVBQUVVLGlCQUFnQixFQUFFLEdBQUdSLHFEQUFjQTtJQUMzQyxNQUFNLEVBQUVTLHNCQUFxQixFQUFFLEdBQUdOLDZFQUEwQkE7SUFDNUQsTUFBTSxFQUFFTyxLQUFJLEVBQUUsR0FBR1Isc0RBQVNBO0lBRTFCLE1BQU1TLGFBQWEsVUFBWTtRQUMzQixJQUFJSixhQUFhO1lBQ2IsTUFBTUQ7UUFDVixDQUFDO1FBRUQsTUFBTSxFQUFFTSxRQUFPLEVBQUVDLE1BQUssRUFBRSxHQUFHLE1BQU1SLGFBQWE7WUFBRVMsV0FBVyxJQUFJbEIsd0VBQWlCQTtRQUFHO1FBRW5GLE1BQU0sRUFBRW1CLFFBQU8sRUFBRSxHQUFHLE1BQU1OLHNCQUFzQjtZQUFFTyxTQUFTSjtZQUFTSyxTQUFTSixNQUFNSyxFQUFFO1FBQUM7UUFFdEYsTUFBTUMsWUFBWSxNQUFNWCxpQkFBaUI7WUFBRU87UUFBUTtRQUVuRCw2REFBNkQ7UUFDN0QsTUFBTSxFQUFFSyxJQUFHLEVBQUUsR0FBRyxNQUFNdkIsdURBQU1BLENBQUMsZ0JBQWdCO1lBQUVrQjtZQUFTSTtZQUFXRSxVQUFVLEtBQUs7WUFBRUMsYUFBYTtRQUFRO1FBQ3pHO0lBS0o7SUFFQSxxQkFDSSxRQUFDQztRQUFJQyxXQUFVOztzRkFDWCxFQUFDQzswQkFBRzs7Ozs7OzBCQUNKO2dCQUFRRSxTQUFTaEI7Ozs7Ozs7Ozs7Ozs7QUFHN0I7QUFFQSxlQUFlUCxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzX21vcmFsaXNfYXV0aC8uL3BhZ2VzL3NpZy5qc3g/NGY2MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZXRhTWFza0Nvbm5lY3RvciB9IGZyb20gJ3dhZ21pL2Nvbm5lY3RvcnMvbWV0YU1hc2snO1xyXG5pbXBvcnQgeyBzaWduSW4gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VBY2NvdW50LCB1c2VDb25uZWN0LCB1c2VTaWduTWVzc2FnZSwgdXNlRGlzY29ubmVjdCB9IGZyb20gJ3dhZ21pJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VBdXRoUmVxdWVzdENoYWxsZW5nZUV2bSB9IGZyb20gJ0Btb3JhbGlzd2ViMy9uZXh0JztcclxuXHJcbmZ1bmN0aW9uIFNpZygpIHtcclxuICAgIGNvbnN0IHsgY29ubmVjdEFzeW5jIH0gPSB1c2VDb25uZWN0KCk7XHJcbiAgICBjb25zdCB7IGRpc2Nvbm5lY3RBc3luYyB9ID0gdXNlRGlzY29ubmVjdCgpO1xyXG4gICAgY29uc3QgeyBpc0Nvbm5lY3RlZCB9ID0gdXNlQWNjb3VudCgpO1xyXG4gICAgY29uc3QgeyBzaWduTWVzc2FnZUFzeW5jIH0gPSB1c2VTaWduTWVzc2FnZSgpO1xyXG4gICAgY29uc3QgeyByZXF1ZXN0Q2hhbGxlbmdlQXN5bmMgfSA9IHVzZUF1dGhSZXF1ZXN0Q2hhbGxlbmdlRXZtKCk7XHJcbiAgICBjb25zdCB7IHB1c2ggfSA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUF1dGggPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGlzQ29ubmVjdGVkKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IGRpc2Nvbm5lY3RBc3luYygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgeyBhY2NvdW50LCBjaGFpbiB9ID0gYXdhaXQgY29ubmVjdEFzeW5jKHsgY29ubmVjdG9yOiBuZXcgTWV0YU1hc2tDb25uZWN0b3IoKSB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgeyBtZXNzYWdlIH0gPSBhd2FpdCByZXF1ZXN0Q2hhbGxlbmdlQXN5bmMoeyBhZGRyZXNzOiBhY2NvdW50LCBjaGFpbklkOiBjaGFpbi5pZCB9KTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2lnbmF0dXJlID0gYXdhaXQgc2lnbk1lc3NhZ2VBc3luYyh7IG1lc3NhZ2UgfSk7XHJcblxyXG4gICAgICAgIC8vIHJlZGlyZWN0IHVzZXIgYWZ0ZXIgc3VjY2VzcyBhdXRoZW50aWNhdGlvbiB0byAnL3VzZXInIHBhZ2VcclxuICAgICAgICBjb25zdCB7IHVybCB9ID0gYXdhaXQgc2lnbkluKCdtb3JhbGlzLWF1dGgnLCB7IG1lc3NhZ2UsIHNpZ25hdHVyZSwgcmVkaXJlY3Q6IGZhbHNlLCBjYWxsYmFja1VybDogJy91c2VyJyB9KTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBpbnN0ZWFkIG9mIHVzaW5nIHNpZ25JbiguLi4sIHJlZGlyZWN0OiBcIi91c2VyXCIpXHJcbiAgICAgICAgICogd2UgZ2V0IHRoZSB1cmwgZnJvbSBjYWxsYmFjayBhbmQgcHVzaCBpdCB0byB0aGUgcm91dGVyIHRvIGF2b2lkIHBhZ2UgcmVmcmVzaGluZ1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1c2godXJsKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIj5cclxuICAgICAgICAgICAgPGgzPldlYjMgQXV0aGVudGljYXRpb248L2gzPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUF1dGh9PkF1dGhlbnRpY2F0ZSB2aWEgTWV0YW1hc2s8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZztcclxuIl0sIm5hbWVzIjpbIk1ldGFNYXNrQ29ubmVjdG9yIiwic2lnbkluIiwidXNlQWNjb3VudCIsInVzZUNvbm5lY3QiLCJ1c2VTaWduTWVzc2FnZSIsInVzZURpc2Nvbm5lY3QiLCJ1c2VSb3V0ZXIiLCJ1c2VBdXRoUmVxdWVzdENoYWxsZW5nZUV2bSIsIlNpZyIsImNvbm5lY3RBc3luYyIsImRpc2Nvbm5lY3RBc3luYyIsImlzQ29ubmVjdGVkIiwic2lnbk1lc3NhZ2VBc3luYyIsInJlcXVlc3RDaGFsbGVuZ2VBc3luYyIsInB1c2giLCJoYW5kbGVBdXRoIiwiYWNjb3VudCIsImNoYWluIiwiY29ubmVjdG9yIiwibWVzc2FnZSIsImFkZHJlc3MiLCJjaGFpbklkIiwiaWQiLCJzaWduYXR1cmUiLCJ1cmwiLCJyZWRpcmVjdCIsImNhbGxiYWNrVXJsIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/sig.jsx\n");

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

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

module.exports = import("wagmi");;

/***/ }),

/***/ "wagmi/connectors/metaMask":
/*!********************************************!*\
  !*** external "wagmi/connectors/metaMask" ***!
  \********************************************/
/***/ ((module) => {

module.exports = import("wagmi/connectors/metaMask");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/sig.jsx"));
module.exports = __webpack_exports__;

})();