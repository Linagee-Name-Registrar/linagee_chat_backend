"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/user",{

/***/ "./pages/user.jsx":
/*!************************!*\
  !*** ./pages/user.jsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"getPrimary\": function() { return /* binding */ getPrimary; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _lib_resolverabi_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/resolverabi.json */ \"./lib/resolverabi.json\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/TextField */ \"./node_modules/@mui/material/TextField/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar __N_SSP = true;\nasync function getPrimary(address) {\n    // const contractConfig = {\n    //     addressOrName: '0x6023E55814DC00F094386d4eb7e17Ce49ab1A190',\n    //     contractInterface: contractInterface,\n    //   };\n    //   const primaryName = useContractRead({\n    //     ...contractConfig,\n    //     functionName: 'primary',\n    //     args:[address],\n    //   });\n    //   return(primaryName)\n    var url = \"https://mainnet.infura.io/v3/5b26585dfc17437da190dd2117648295\";\n    var provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.JsonRpcProvider(url);\n    const resolverAddress = \"0x6023E55814DC00F094386d4eb7e17Ce49ab1A190\";\n    const resolverContract = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(resolverAddress, _lib_resolverabi_json__WEBPACK_IMPORTED_MODULE_3__, provider);\n    const primary = await resolverContract.primary(address);\n    console.log(\"prime function is\".primary);\n    if (primary && primary.toString() != \"0x0000000000000000000000000000000000000000000000000000000000000000\") {\n        var stringName = ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.utils.parseBytes32String(primary.toString()) + \".og\";\n        return stringName;\n    }\n    return;\n}\nfunction User(param) {\n    let { user , bio  } = param;\n    _s();\n    const [value, changeValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"New image\");\n    const [newvalue, setNewValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    async function updateBio() {\n        console.log(\"updating\");\n        if (isValid && !loading) {\n            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"/api/updateBio\", {\n                profileId: user.profileId,\n                bio: newvalue\n            }, {\n                headers: {\n                    \"content-type\": \"application/json\"\n                }\n            });\n            console.log(\"Bio Updated to: \" + data.bio);\n            location.reload();\n        }\n    }\n    async function getPerson() {\n        const ugh = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"/api/getUser\", {\n            addr: user.address\n        }, {\n            headers: {\n                \"content-type\": \"application/json\"\n            }\n        });\n        console.log(\"Person is\", ugh);\n    }\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    // keep track whether imageurl returns valid result\n    const [isValid, setIsValid] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    // use effect to check for access to imageUrl,\n    // run the effect when the component mounts\n    react__WEBPACK_IMPORTED_MODULE_2__.useEffect(()=>{\n        if (newvalue != null) {\n            fetch(newvalue).then((res)=>{\n                setIsValid(res.status === 200);\n                console.log(\"res is\", res.status);\n                setLoading(false);\n                updateBio();\n            });\n        }\n    }, [\n        newvalue\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"page\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"auth\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: \"User session:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mason\\\\Desktop\\\\Linagee_chat_backend\\\\web3auth_database\\\\pages\\\\user.jsx\",\n                        lineNumber: 222,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            \"Address: \",\n                            user.address\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\mason\\\\Desktop\\\\Linagee_chat_backend\\\\web3auth_database\\\\pages\\\\user.jsx\",\n                        lineNumber: 223,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            \"Bio: \",\n                            bio\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\mason\\\\Desktop\\\\Linagee_chat_backend\\\\web3auth_database\\\\pages\\\\user.jsx\",\n                        lineNumber: 224,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mason\\\\Desktop\\\\Linagee_chat_backend\\\\web3auth_database\\\\pages\\\\user.jsx\",\n                        lineNumber: 225,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        color: \"primary\",\n                        onChange: (e)=>changeValue(e.target.value),\n                        value: value\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mason\\\\Desktop\\\\Linagee_chat_backend\\\\web3auth_database\\\\pages\\\\user.jsx\",\n                        lineNumber: 226,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mason\\\\Desktop\\\\Linagee_chat_backend\\\\web3auth_database\\\\pages\\\\user.jsx\",\n                        lineNumber: 231,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        variant: \"outlined\",\n                        onClick: ()=>setNewValue(value),\n                        children: \"Update Avatar\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mason\\\\Desktop\\\\Linagee_chat_backend\\\\web3auth_database\\\\pages\\\\user.jsx\",\n                        lineNumber: 232,\n                        columnNumber: 13\n                    }, this),\n                    isValid && !loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: bio\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mason\\\\Desktop\\\\Linagee_chat_backend\\\\web3auth_database\\\\pages\\\\user.jsx\",\n                        lineNumber: 235,\n                        columnNumber: 15\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"LNR_L_Icon_White.svg\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mason\\\\Desktop\\\\Linagee_chat_backend\\\\web3auth_database\\\\pages\\\\user.jsx\",\n                        lineNumber: 236,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mason\\\\Desktop\\\\Linagee_chat_backend\\\\web3auth_database\\\\pages\\\\user.jsx\",\n                        lineNumber: 239,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        variant: \"contained\",\n                        onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signOut)({\n                                redirect: \"/signin\"\n                            }),\n                        children: \"Sign out\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mason\\\\Desktop\\\\Linagee_chat_backend\\\\web3auth_database\\\\pages\\\\user.jsx\",\n                        lineNumber: 240,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mason\\\\Desktop\\\\Linagee_chat_backend\\\\web3auth_database\\\\pages\\\\user.jsx\",\n                lineNumber: 221,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\mason\\\\Desktop\\\\Linagee_chat_backend\\\\web3auth_database\\\\pages\\\\user.jsx\",\n            lineNumber: 220,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\mason\\\\Desktop\\\\Linagee_chat_backend\\\\web3auth_database\\\\pages\\\\user.jsx\",\n        lineNumber: 219,\n        columnNumber: 9\n    }, this);\n}\n_s(User, \"iNxYrwWEKxP6vkSb6Fib5RNzRYc=\");\n_c = User;\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);\nvar _c;\n$RefreshReg$(_c, \"User\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O2tDQUNELDhEQUFDL0MsK0RBQVNBO3dCQUNOZ0QsT0FBTTt3QkFDTkMsVUFBVSxDQUFDQyxJQUFNNUIsWUFBWTRCLEVBQUVDLE1BQU0sQ0FBQzlCLEtBQUs7d0JBQzNDQSxPQUFPQTs7Ozs7O2tDQUVYLDhEQUFDMEI7Ozs7O2tDQUNELDhEQUFDaEQsNERBQU1BO3dCQUFDcUQsU0FBUTt3QkFBWUMsU0FBUyxJQUFNN0IsWUFBWUg7a0NBQVE7Ozs7OztvQkFFN0RLLFdBQVcsQ0FBQ0Msd0JBQ1osOERBQUMyQjt3QkFBSUMsS0FBS25DOzs7Ozs2Q0FDViw4REFBQ2tDO3dCQUFJQyxLQUFLOzs7Ozs0QkFBOEI7a0NBRzFDLDhEQUFDUjs7Ozs7a0NBQ0QsOERBQUNoRCw0REFBTUE7d0JBQUNxRCxTQUFRO3dCQUFZQyxTQUFTLElBQU0zRCx3REFBT0EsQ0FBQztnQ0FBRThELFVBQVU7NEJBQVU7a0NBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLekY7R0EvRlN0QztLQUFBQTtBQWtHVCwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91c2VyLmpzeD8yMjU4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFNlc3Npb24sIHNpZ25PdXQgfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xyXG5pbXBvcnQgVXNlcnMgZnJvbSBcIi4uL2xpYi91c2VyU2NoZW1hXCI7XHJcbmltcG9ydCBjb25uZWN0REIgZnJvbSBcIi4uL2xpYi9jb25uZWN0REJcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgbm9va2llcyBmcm9tICdub29raWVzJztcclxuaW1wb3J0IGNyeXB0byBmcm9tICdjcnlwdG8nO1xyXG5pbXBvcnQgQ3J5cHRvSlMgZnJvbSAnY3J5cHRvLWpzJztcclxuaW1wb3J0IGNvbnRyYWN0SW50ZXJmYWNlIGZyb20gJy4uL2xpYi9yZXNvbHZlcmFiaS5qc29uJztcclxuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uJztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbXVpL21hdGVyaWFsL1RleHRGaWVsZCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcmltYXJ5KGFkZHJlc3Mpe1xyXG4gICAgLy8gY29uc3QgY29udHJhY3RDb25maWcgPSB7XHJcbiAgICAvLyAgICAgYWRkcmVzc09yTmFtZTogJzB4NjAyM0U1NTgxNERDMDBGMDk0Mzg2ZDRlYjdlMTdDZTQ5YWIxQTE5MCcsXHJcbiAgICAvLyAgICAgY29udHJhY3RJbnRlcmZhY2U6IGNvbnRyYWN0SW50ZXJmYWNlLFxyXG4gICAgLy8gICB9O1xyXG5cclxuICAgIC8vICAgY29uc3QgcHJpbWFyeU5hbWUgPSB1c2VDb250cmFjdFJlYWQoe1xyXG4gICAgLy8gICAgIC4uLmNvbnRyYWN0Q29uZmlnLFxyXG4gICAgLy8gICAgIGZ1bmN0aW9uTmFtZTogJ3ByaW1hcnknLFxyXG4gICAgLy8gICAgIGFyZ3M6W2FkZHJlc3NdLFxyXG4gICAgLy8gICB9KTtcclxuXHJcbiAgICAvLyAgIHJldHVybihwcmltYXJ5TmFtZSlcclxuICAgIHZhciB1cmwgPSAnaHR0cHM6Ly9tYWlubmV0LmluZnVyYS5pby92My81YjI2NTg1ZGZjMTc0MzdkYTE5MGRkMjExNzY0ODI5NSc7XHJcbiAgICB2YXIgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5Kc29uUnBjUHJvdmlkZXIodXJsKVxyXG4gICAgY29uc3QgcmVzb2x2ZXJBZGRyZXNzID0gXCIweDYwMjNFNTU4MTREQzAwRjA5NDM4NmQ0ZWI3ZTE3Q2U0OWFiMUExOTBcIjtcclxuXHJcbiAgICBjb25zdCByZXNvbHZlckNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChyZXNvbHZlckFkZHJlc3MsIGNvbnRyYWN0SW50ZXJmYWNlLCBwcm92aWRlcik7XHJcbiAgICBjb25zdCBwcmltYXJ5ID0gYXdhaXQgcmVzb2x2ZXJDb250cmFjdC5wcmltYXJ5KGFkZHJlc3MpXHJcbiAgICBjb25zb2xlLmxvZyhcInByaW1lIGZ1bmN0aW9uIGlzXCIuIHByaW1hcnkpXHJcblxyXG4gICAgaWYocHJpbWFyeSAmJiBwcmltYXJ5LnRvU3RyaW5nKCkgIT0gXCIweDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBcIil7XHJcbiAgICAgICAgdmFyIHN0cmluZ05hbWUgPSBldGhlcnMudXRpbHMucGFyc2VCeXRlczMyU3RyaW5nKHByaW1hcnkudG9TdHJpbmcoKSkgKyBcIi5vZ1wiXHJcbiAgICAgICAgcmV0dXJuKHN0cmluZ05hbWUpXHJcbiAgICB9XHJcbiAgICByZXR1cm5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKCdjb250ZXh0IGlzOiAnLCBjb250ZXh0KTtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKGNvbnRleHQpO1xyXG4gICAgLy9jb25zdCBbYWRkSG9vaywgc2V0QWRkSG9va10gPSB1c2VTdGF0ZSgpO1xyXG5cclxuXHJcbiAgICBcclxuICAgIFxyXG5cclxuICAgIFxyXG5cclxuXHJcbiAgICBpZiAoIXNlc3Npb24pIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByZWRpcmVjdDoge1xyXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb246ICcvc2lnbmluJyxcclxuICAgICAgICAgICAgICAgIHBlcm1hbmVudDogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgICBhd2FpdCBjb25uZWN0REIoKTtcclxuXHJcbiAgICBjb25zdCB1c2VyTSA9IGF3YWl0IFVzZXJzLmZpbmRPbmUoeyBwcm9maWxlSWQ6IHNlc3Npb24/LnVzZXIucHJvZmlsZUlkIH0pLmxlYW4oKTtcclxuICAgIGNvbnN0IGtleSA9IGNyeXB0by5yYW5kb21VVUlEKClcclxuICAgIC8vY29uc3Qga2V5ID0gJ2hvd2R5J1xyXG4gICAgY29uc29sZS5sb2coJ2RiIGtleScpXHJcbiAgICBjb25zb2xlLmxvZyhrZXkpXHJcblxyXG4gICAgY29uc29sZS5sb2coJ2FkZHknKVxyXG4gICAgY29uc29sZS5sb2coc2Vzc2lvbj8udXNlci5hZGRyZXNzKVxyXG5cclxuICAgIC8vIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyAgICAgaWYgKHNlc3Npb24/LnVzZXIuYWRkcmVzcykge1xyXG4gICAgLy8gICAgICAgc2V0VG90YWxNaW50ZWQodG90YWxTdXBwbHlEYXRhLnRvTnVtYmVyKCkpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgfSwgW3Nlc3Npb24/LnVzZXIuYWRkcmVzc10pO1xyXG5cclxuXHJcblxyXG4gICAgYXdhaXQgVXNlcnMuZmluZE9uZUFuZFVwZGF0ZSh7IHByb2ZpbGVJZDogc2Vzc2lvbj8udXNlci5wcm9maWxlSWQgfSx7IGV4dDoga2V5IH0gKTtcclxuXHJcbiAgICBhd2FpdCBVc2Vycy5maW5kT25lQW5kVXBkYXRlKHsgcHJvZmlsZUlkOiBzZXNzaW9uPy51c2VyLnByb2ZpbGVJZCB9LCB7YWRkcjogKHNlc3Npb24/LnVzZXIuYWRkcmVzcykudG9TdHJpbmcoKX0pO1xyXG5cclxuICAgIGlmKHNlc3Npb24udXNlci5hZGRyZXNzKSB7XHJcblxyXG4gICAgICAgIHZhciBwcmltYXJ5TmFtZSA9IGF3YWl0IGdldFByaW1hcnkoKHNlc3Npb24udXNlci5hZGRyZXNzKS50b1N0cmluZygpKVxyXG5cclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwicHJpbW8gaXNcIiwgcHJpbWFyeU5hbWUpXHJcbiAgICAgICAgICBpZihwcmltYXJ5TmFtZSl7XHJcblxyXG4gICAgICAgICAgICBhd2FpdCBVc2Vycy5maW5kT25lQW5kVXBkYXRlKHsgcHJvZmlsZUlkOiBzZXNzaW9uPy51c2VyLnByb2ZpbGVJZCB9LCB7cHJpbWFyeTogcHJpbWFyeU5hbWV9KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ1cGRhdGVkIG5hbWVcIilcclxuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHVzZXJNICE9PSBudWxsKSB7XHJcbiAgICAgICAgdXNlck0uYmlvID0gdXNlck0uYmlvLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIFxyXG5cclxuICAgIGNvbnN0IGVuY3J5cHRlZEtleSA9IENyeXB0b0pTLkFFUy5lbmNyeXB0KGtleSwgKHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCkudG9TdHJpbmcoKSkudG9TdHJpbmcoKTtcclxuICAgIGNvbnNvbGUubG9nKCdlbmNycHllZDogJywgZW5jcnlwdGVkS2V5KTtcclxuXHJcblxyXG4gIFxyXG4gICAgdmFyIGRlY3J5cHRlZCA9IENyeXB0b0pTLkFFUy5kZWNyeXB0KChlbmNyeXB0ZWRLZXkpLnRvU3RyaW5nKCksIChwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQpLnRvU3RyaW5nKCkpO1xyXG4gICAgLy80ZDY1NzM3MzYxNjc2NVxyXG4gICAgY29uc29sZS5sb2coXCJkZWNyeXB0ZWRcIilcclxuICAgIGNvbnNvbGUubG9nKGRlY3J5cHRlZC50b1N0cmluZyhDcnlwdG9KUy5lbmMuVXRmOCkpXHJcblxyXG5cclxuXHJcbiAgICBub29raWVzLnNldChjb250ZXh0LCAnbmV4dC1hdXRoLmV4dC10b2tlbicsIGVuY3J5cHRlZEtleS50b1N0cmluZygpLCB7XHJcbiAgICBtYXhBZ2U6IDMwICogMjQgKiA2MCAqIDYwLFxyXG4gICAgcGF0aDogJy8nLFxyXG4gICAgaHR0cE9ubHk6IHRydWVcclxuICAgIH0pXHJcblxyXG4gICAgLy8gYXdhaXQgYXhpb3MucG9zdChcclxuICAgIC8vICAgICBcIi9hcGkvdXBkYXRlRXh0XCIsXHJcbiAgICAvLyAgICAgeyBwcm9maWxlSWQ6IHNlc3Npb24/LnVzZXIucHJvZmlsZUlkLCBleHQ6IGtleSB9LFxyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgIGhlYWRlcnM6IHtcclxuICAgIC8vICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAvLyAgICAgICB9LFxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7IHVzZXI6IHNlc3Npb24udXNlciwgYmlvOiB1c2VyTS5iaW8gfSxcclxuICAgIH07XHJcblxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gVXNlcih7IHVzZXIsIGJpbyB9KSB7XHJcblxyXG5cclxuICAgIGNvbnN0IFt2YWx1ZSwgY2hhbmdlVmFsdWVdID0gdXNlU3RhdGUoXCJOZXcgaW1hZ2VcIik7XHJcbiAgICBjb25zdCBbbmV3dmFsdWUsIHNldE5ld1ZhbHVlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgXHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQmlvKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ1cGRhdGluZ1wiKVxyXG4gICAgICAgIGlmKGlzVmFsaWQgJiYgIWxvYWRpbmcpe1xyXG4gICAgICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgICAgIFwiL2FwaS91cGRhdGVCaW9cIixcclxuICAgICAgICAgICAgeyBwcm9maWxlSWQ6IHVzZXIucHJvZmlsZUlkLCBiaW86IG5ld3ZhbHVlIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiQmlvIFVwZGF0ZWQgdG86IFwiICsgZGF0YS5iaW8pXHJcblxyXG4gICAgICAgICAgbG9jYXRpb24ucmVsb2FkKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0UGVyc29uKCl7XHJcbiAgICAgICAgY29uc3QgdWdoID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICAgICAgXCIvYXBpL2dldFVzZXJcIixcclxuICAgICAgICAgICAgeyBhZGRyOiB1c2VyLmFkZHJlc3MgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnUGVyc29uIGlzJywgdWdoKVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgICAgXHJcbiAgICAgIC8vIGtlZXAgdHJhY2sgd2hldGhlciBpbWFnZXVybCByZXR1cm5zIHZhbGlkIHJlc3VsdFxyXG4gICAgICBjb25zdCBbaXNWYWxpZCwgc2V0SXNWYWxpZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIFxyXG4gICAgICAvLyB1c2UgZWZmZWN0IHRvIGNoZWNrIGZvciBhY2Nlc3MgdG8gaW1hZ2VVcmwsXHJcbiAgICAgIC8vIHJ1biB0aGUgZWZmZWN0IHdoZW4gdGhlIGNvbXBvbmVudCBtb3VudHNcclxuICAgICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihuZXd2YWx1ZSAhPSBudWxsKXtcclxuICAgICAgICAgICAgZmV0Y2gobmV3dmFsdWUpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHNldElzVmFsaWQocmVzLnN0YXR1cyA9PT0gMjAwKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzIGlzXCIsIHJlcy5zdGF0dXMpXHJcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZUJpbygpO1xyXG4gICAgICBcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9LCBbbmV3dmFsdWVdKTtcclxuXHJcbiAgICAgIFxyXG4gICAgXHJcbiAgICAgIFxyXG5cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGhcIj5cclxuICAgICAgICAgICAgPGg0PlVzZXIgc2Vzc2lvbjo8L2g0PlxyXG4gICAgICAgICAgICA8ZGl2PkFkZHJlc3M6IHt1c2VyLmFkZHJlc3N9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+QmlvOiB7YmlvfTwvZGl2PlxyXG4gICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBjaGFuZ2VWYWx1ZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgID48L1RleHRGaWVsZD5cclxuICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiAgb25DbGljaz17KCkgPT4gc2V0TmV3VmFsdWUodmFsdWUpfT5VcGRhdGUgQXZhdGFyPC9CdXR0b24+XHJcbiAgICAgICAgICAgIHsvKiA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGdldFBlcnNvbigpfT5nZXRQZXJzb248L0J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgIHsoaXNWYWxpZCAmJiAhbG9hZGluZylcclxuICAgICAgICAgICAgPyA8aW1nIHNyYz17YmlvfT48L2ltZz5cclxuICAgICAgICAgICAgOiA8aW1nIHNyYz17J0xOUl9MX0ljb25fV2hpdGUuc3ZnJ30+PC9pbWc+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgb25DbGljaz17KCkgPT4gc2lnbk91dCh7IHJlZGlyZWN0OiAnL3NpZ25pbicgfSl9PlNpZ24gb3V0PC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xyXG4iXSwibmFtZXMiOlsic2lnbk91dCIsInVzZVN0YXRlIiwiYXhpb3MiLCJjb250cmFjdEludGVyZmFjZSIsImV0aGVycyIsIkJ1dHRvbiIsIlRleHRGaWVsZCIsIlJlYWN0IiwiZ2V0UHJpbWFyeSIsImFkZHJlc3MiLCJ1cmwiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkpzb25ScGNQcm92aWRlciIsInJlc29sdmVyQWRkcmVzcyIsInJlc29sdmVyQ29udHJhY3QiLCJDb250cmFjdCIsInByaW1hcnkiLCJjb25zb2xlIiwibG9nIiwidG9TdHJpbmciLCJzdHJpbmdOYW1lIiwidXRpbHMiLCJwYXJzZUJ5dGVzMzJTdHJpbmciLCJVc2VyIiwidXNlciIsImJpbyIsInZhbHVlIiwiY2hhbmdlVmFsdWUiLCJuZXd2YWx1ZSIsInNldE5ld1ZhbHVlIiwidXBkYXRlQmlvIiwiaXNWYWxpZCIsImxvYWRpbmciLCJkYXRhIiwicG9zdCIsInByb2ZpbGVJZCIsImhlYWRlcnMiLCJsb2NhdGlvbiIsInJlbG9hZCIsImdldFBlcnNvbiIsInVnaCIsImFkZHIiLCJzZXRMb2FkaW5nIiwic2V0SXNWYWxpZCIsInVzZUVmZmVjdCIsImZldGNoIiwidGhlbiIsInJlcyIsInN0YXR1cyIsImRpdiIsImNsYXNzTmFtZSIsImg0IiwiYnIiLCJjb2xvciIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhcmlhbnQiLCJvbkNsaWNrIiwiaW1nIiwic3JjIiwicmVkaXJlY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/user.jsx\n"));

/***/ })

});