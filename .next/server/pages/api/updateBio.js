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
exports.id = "pages/api/updateBio";
exports.ids = ["pages/api/updateBio"];
exports.modules = {

/***/ "crypto-js":
/*!****************************!*\
  !*** external "crypto-js" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("crypto-js");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next-auth/jwt":
/*!********************************!*\
  !*** external "next-auth/jwt" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("next-auth/jwt");

/***/ }),

/***/ "(api)/./lib/connectDB.js":
/*!**************************!*\
  !*** ./lib/connectDB.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectDB = async ()=>{\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState)) {\n        console.log(\"Already connected.\");\n        return;\n    }\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI, {}, (err)=>{\n        if (err) throw err;\n        console.log(\"Connected to mongodb.\");\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvY29ubmVjdERCLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxZQUFZLFVBQVk7SUFFMUIsSUFBSUQsMkVBQWtDLEVBQUU7UUFDcENJLFFBQVFDLEdBQUcsQ0FBQztRQUNaO0lBQ0osQ0FBQztJQUVETCx1REFBZ0IsQ0FBQ08sUUFBUUMsR0FBRyxDQUFDQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUNDLE1BQVE7UUFDbkQsSUFBSUEsS0FBSyxNQUFNQSxJQUFJO1FBQ25CTixRQUFRQyxHQUFHLENBQUM7SUFDaEI7QUFHSjtBQUVBLGlFQUFlSixTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzX21vcmFsaXNfYXV0aC8uL2xpYi9jb25uZWN0REIuanM/YTQxNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBjb25uZWN0REIgPSBhc3luYyAoKSA9PiB7XHJcblxyXG4gICAgaWYgKG1vbmdvb3NlLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkFscmVhZHkgY29ubmVjdGVkLlwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT0RCX1VSSSwge30sIChlcnIpID0+IHtcclxuICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJDb25uZWN0ZWQgdG8gbW9uZ29kYi5cIik7XHJcbiAgICB9KTtcclxuXHJcbiAgXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0REI7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdERCIiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIiwiY29uc29sZSIsImxvZyIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJlcnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/connectDB.js\n");

/***/ }),

/***/ "(api)/./lib/userSchema.js":
/*!***************************!*\
  !*** ./lib/userSchema.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    profileId: {\n        type: String\n    },\n    bio: {\n        type: String,\n        default: \"This is my Bio\"\n    },\n    ext: {\n        type: String,\n        default: \"null\"\n    },\n    addr: {\n        type: String\n    },\n    primary: {\n        type: String\n    }\n}, {\n    timestamps: true\n});\nlet Users = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.users) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"users\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Users);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvdXNlclNjaGVtYS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsYUFBYSxJQUFJRCx3REFBZSxDQUNwQztJQUNFRyxXQUFXO1FBQ1RDLE1BQU1DO0lBQ1I7SUFDQUMsS0FBSztRQUNIRixNQUFNQztRQUNORSxTQUFTO0lBQ1g7SUFDQUMsS0FBSztRQUNISixNQUFNQztRQUNORSxTQUFTO0lBQ1g7SUFDQUUsTUFBTTtRQUNKTCxNQUFNQztJQUNSO0lBQ0FLLFNBQVM7UUFDUE4sTUFBTUM7SUFDUjtBQUNGLEdBQ0E7SUFBRU0sWUFBWSxJQUFJO0FBQUM7QUFHckIsSUFBSUMsUUFBUVosOERBQXFCLElBQUlBLHFEQUFjLENBQUMsU0FBU0M7QUFFN0QsaUVBQWVXLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anNfbW9yYWxpc19hdXRoLy4vbGliL3VzZXJTY2hlbWEuanM/ZmZmMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCB1c2VyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYShcclxuICB7XHJcbiAgICBwcm9maWxlSWQ6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgfSxcclxuICAgIGJpbzoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIGRlZmF1bHQ6IFwiVGhpcyBpcyBteSBCaW9cIixcclxuICAgIH0sXHJcbiAgICBleHQ6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICBkZWZhdWx0OiBcIm51bGxcIixcclxuICAgIH0sXHJcbiAgICBhZGRyOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgIH0sXHJcbiAgICBwcmltYXJ5OiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgIH0sXHJcbiAgfSxcclxuICB7IHRpbWVzdGFtcHM6IHRydWUgfVxyXG4pO1xyXG5cclxubGV0IFVzZXJzID0gbW9uZ29vc2UubW9kZWxzLnVzZXJzIHx8IG1vbmdvb3NlLm1vZGVsKFwidXNlcnNcIiwgdXNlclNjaGVtYSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VycztcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwidXNlclNjaGVtYSIsIlNjaGVtYSIsInByb2ZpbGVJZCIsInR5cGUiLCJTdHJpbmciLCJiaW8iLCJkZWZhdWx0IiwiZXh0IiwiYWRkciIsInByaW1hcnkiLCJ0aW1lc3RhbXBzIiwiVXNlcnMiLCJtb2RlbHMiLCJ1c2VycyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/userSchema.js\n");

/***/ }),

/***/ "(api)/./pages/api/updateBio.js":
/*!********************************!*\
  !*** ./pages/api/updateBio.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_connectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/connectDB */ \"(api)/./lib/connectDB.js\");\n/* harmony import */ var _lib_userSchema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/userSchema */ \"(api)/./lib/userSchema.js\");\n/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/jwt */ \"next-auth/jwt\");\n/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_jwt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! crypto-js */ \"crypto-js\");\n/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nconst secret = process.env.NEXTAUTH_SECRET;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    console.log(\"req\");\n    //console.log(req.query);\n    // Get token from cookie (names differ on local vs production)\n    //const secureCookieName = '__Secure-next-auth.session-token'\n    //   const insecureCookieName = 'next-auth.ext-token'\n    //   const encryptedToken = req.cookies[insecureCookieName]\n    //   console.log('encrypted')\n    //   console.log(encryptedToken);\n    //   var decrypted = CryptoJS.AES.decrypt((encryptedToken).toString(), (process.env.NEXTAUTH_SECRET).toString());\n    //   //4d657373616765\n    //   console.log(\"decrypted\")\n    //   console.log(decrypted.toString(CryptoJS.enc.Utf8))\n    //   // Decrypt using secret and return as string\n    // //   const decryptedBytes = CryptoJS.AES.decrypt(JSON.stringify(encryptedToken), process.env.NEXTAUTH_SECRET).toString()\n    // //   const decryptedToken = decryptedBytes.toString(CryptoJS.enc.Utf8)\n    //   // Still signed but not encrypted (this is what you want)\n    //   const token = await getToken({ req, secret })\n    //   console.log(\"JSON Web Token\", token)  \n    const { profileId , bio  } = req.body;\n    await (0,_lib_connectDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    try {\n        await _lib_userSchema__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOneAndUpdate({\n            profileId: profileId\n        }, {\n            bio: bio\n        });\n        res.status(200).json({\n            bio\n        });\n    } catch (error) {\n        res.status(400).json({\n            error\n        });\n        console.error(error);\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBkYXRlQmlvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBNEM7QUFDSDtBQUNBO0FBQ1I7QUFDRDtBQUVoQyxNQUFNSyxTQUFTQyxRQUFRQyxHQUFHLENBQUNDLGVBQWU7QUFHMUMsaUVBQWUsT0FBT0MsS0FBS0MsTUFBUTtJQUMvQkMsUUFBUUMsR0FBRyxDQUFDO0lBS1oseUJBQXlCO0lBRTNCLDhEQUE4RDtJQUM5RCw2REFBNkQ7SUFDL0QscURBQXFEO0lBQ3JELDJEQUEyRDtJQUMzRCw2QkFBNkI7SUFDN0IsaUNBQWlDO0lBRWpDLGlIQUFpSDtJQUNqSCxxQkFBcUI7SUFDckIsNkJBQTZCO0lBQzdCLHVEQUF1RDtJQUV2RCxpREFBaUQ7SUFDakQsMkhBQTJIO0lBQzNILHlFQUF5RTtJQUV6RSw4REFBOEQ7SUFHOUQsa0RBQWtEO0lBQ2xELDJDQUEyQztJQUV2QyxNQUFNLEVBQUVDLFVBQVMsRUFBRUMsSUFBRyxFQUFFLEdBQUdMLElBQUlNLElBQUk7SUFFbkMsTUFBTWYsMERBQVNBO0lBRWYsSUFBSTtRQUNBLE1BQU1DLHdFQUFzQixDQUFDO1lBQUVZLFdBQVdBO1FBQVUsR0FBRztZQUFFQyxLQUFLQTtRQUFJO1FBQ2xFSixJQUFJTyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUNKO1FBQUc7SUFDN0IsRUFBRSxPQUFPSyxPQUFPO1FBQ1pULElBQUlPLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUM7UUFBTTtRQUM3QlIsUUFBUVEsS0FBSyxDQUFDQTtJQUNsQjtBQUVKLEdBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anNfbW9yYWxpc19hdXRoLy4vcGFnZXMvYXBpL3VwZGF0ZUJpby5qcz83MGIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25uZWN0REIgZnJvbSBcIi4uLy4uL2xpYi9jb25uZWN0REJcIjtcclxuaW1wb3J0IFVzZXJzIGZyb20gXCIuLi8uLi9saWIvdXNlclNjaGVtYVwiO1xyXG5pbXBvcnQgeyBnZXRUb2tlbiB9IGZyb20gXCJuZXh0LWF1dGgvand0XCI7XHJcbmltcG9ydCBDcnlwdG9KUyBmcm9tICdjcnlwdG8tanMnO1xyXG5pbXBvcnQgand0IGZyb20gJ25leHQtYXV0aC9qd3QnO1xyXG5cclxuY29uc3Qgc2VjcmV0ID0gcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVUXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygncmVxJyk7XHJcblxyXG4gICAgXHJcblxyXG5cclxuICAgIC8vY29uc29sZS5sb2cocmVxLnF1ZXJ5KTtcclxuXHJcbiAgLy8gR2V0IHRva2VuIGZyb20gY29va2llIChuYW1lcyBkaWZmZXIgb24gbG9jYWwgdnMgcHJvZHVjdGlvbilcclxuICAvL2NvbnN0IHNlY3VyZUNvb2tpZU5hbWUgPSAnX19TZWN1cmUtbmV4dC1hdXRoLnNlc3Npb24tdG9rZW4nXHJcbi8vICAgY29uc3QgaW5zZWN1cmVDb29raWVOYW1lID0gJ25leHQtYXV0aC5leHQtdG9rZW4nXHJcbi8vICAgY29uc3QgZW5jcnlwdGVkVG9rZW4gPSByZXEuY29va2llc1tpbnNlY3VyZUNvb2tpZU5hbWVdXHJcbi8vICAgY29uc29sZS5sb2coJ2VuY3J5cHRlZCcpXHJcbi8vICAgY29uc29sZS5sb2coZW5jcnlwdGVkVG9rZW4pO1xyXG5cclxuLy8gICB2YXIgZGVjcnlwdGVkID0gQ3J5cHRvSlMuQUVTLmRlY3J5cHQoKGVuY3J5cHRlZFRva2VuKS50b1N0cmluZygpLCAocHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVUKS50b1N0cmluZygpKTtcclxuLy8gICAvLzRkNjU3MzczNjE2NzY1XHJcbi8vICAgY29uc29sZS5sb2coXCJkZWNyeXB0ZWRcIilcclxuLy8gICBjb25zb2xlLmxvZyhkZWNyeXB0ZWQudG9TdHJpbmcoQ3J5cHRvSlMuZW5jLlV0ZjgpKVxyXG5cclxuLy8gICAvLyBEZWNyeXB0IHVzaW5nIHNlY3JldCBhbmQgcmV0dXJuIGFzIHN0cmluZ1xyXG4vLyAvLyAgIGNvbnN0IGRlY3J5cHRlZEJ5dGVzID0gQ3J5cHRvSlMuQUVTLmRlY3J5cHQoSlNPTi5zdHJpbmdpZnkoZW5jcnlwdGVkVG9rZW4pLCBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQpLnRvU3RyaW5nKClcclxuLy8gLy8gICBjb25zdCBkZWNyeXB0ZWRUb2tlbiA9IGRlY3J5cHRlZEJ5dGVzLnRvU3RyaW5nKENyeXB0b0pTLmVuYy5VdGY4KVxyXG5cclxuLy8gICAvLyBTdGlsbCBzaWduZWQgYnV0IG5vdCBlbmNyeXB0ZWQgKHRoaXMgaXMgd2hhdCB5b3Ugd2FudClcclxuXHJcblxyXG4vLyAgIGNvbnN0IHRva2VuID0gYXdhaXQgZ2V0VG9rZW4oeyByZXEsIHNlY3JldCB9KVxyXG4vLyAgIGNvbnNvbGUubG9nKFwiSlNPTiBXZWIgVG9rZW5cIiwgdG9rZW4pICBcclxuIFxyXG4gICAgY29uc3QgeyBwcm9maWxlSWQsIGJpbyB9ID0gcmVxLmJvZHk7XHJcblxyXG4gICAgYXdhaXQgY29ubmVjdERCKCk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBVc2Vycy5maW5kT25lQW5kVXBkYXRlKHsgcHJvZmlsZUlkOiBwcm9maWxlSWQgfSwgeyBiaW86IGJpbyB9KTtcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7YmlvfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3IgfSk7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICB9XHJcblxyXG59O1xyXG4iXSwibmFtZXMiOlsiY29ubmVjdERCIiwiVXNlcnMiLCJnZXRUb2tlbiIsIkNyeXB0b0pTIiwiand0Iiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIk5FWFRBVVRIX1NFQ1JFVCIsInJlcSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJwcm9maWxlSWQiLCJiaW8iLCJib2R5IiwiZmluZE9uZUFuZFVwZGF0ZSIsInN0YXR1cyIsImpzb24iLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/updateBio.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/updateBio.js"));
module.exports = __webpack_exports__;

})();