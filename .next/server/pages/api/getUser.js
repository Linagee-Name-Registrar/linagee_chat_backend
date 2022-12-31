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
exports.id = "pages/api/getUser";
exports.ids = ["pages/api/getUser"];
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

/***/ "(api)/./pages/api/getUser.js":
/*!******************************!*\
  !*** ./pages/api/getUser.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_connectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/connectDB */ \"(api)/./lib/connectDB.js\");\n/* harmony import */ var _lib_userSchema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/userSchema */ \"(api)/./lib/userSchema.js\");\n/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/jwt */ \"next-auth/jwt\");\n/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_jwt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! crypto-js */ \"crypto-js\");\n/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nconst secret = process.env.NEXTAUTH_SECRET;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    console.log(\"ugh\");\n    const { ext  } = req.body;\n    await (0,_lib_connectDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    try {\n        const user = await _lib_userSchema__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n            ext: ext\n        });\n        console.log(\"user api\", user);\n        res.status(200).json({\n            user\n        });\n    } catch (error) {\n        res.status(400).json({\n            error\n        });\n        console.error(error);\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0VXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTRDO0FBQ0g7QUFDQTtBQUNSO0FBQ0Q7QUFFaEMsTUFBTUssU0FBU0MsUUFBUUMsR0FBRyxDQUFDQyxlQUFlO0FBRzFDLGlFQUFlLE9BQU9DLEtBQUtDLE1BQVE7SUFDbkNDLFFBQVFDLEdBQUcsQ0FBQztJQUlSLE1BQU0sRUFBRUMsSUFBRyxFQUFFLEdBQUdKLElBQUlLLElBQUk7SUFDeEIsTUFBTWQsMERBQVNBO0lBRWYsSUFBSTtRQUVBLE1BQU1lLE9BQU8sTUFBTWQsK0RBQWEsQ0FBQztZQUFFWSxLQUFLQTtRQUFJO1FBQzVDRixRQUFRQyxHQUFHLENBQUMsWUFBWUc7UUFDeEJMLElBQUlPLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBQ0g7UUFBSTtJQUU5QixFQUFFLE9BQU9JLE9BQU87UUFDWlQsSUFBSU8sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQztRQUFNO1FBQzdCUixRQUFRUSxLQUFLLENBQUNBO0lBQ2xCO0FBRUosR0FBRSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqc19tb3JhbGlzX2F1dGgvLi9wYWdlcy9hcGkvZ2V0VXNlci5qcz8yNjNjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25uZWN0REIgZnJvbSBcIi4uLy4uL2xpYi9jb25uZWN0REJcIjtcclxuaW1wb3J0IFVzZXJzIGZyb20gXCIuLi8uLi9saWIvdXNlclNjaGVtYVwiO1xyXG5pbXBvcnQgeyBnZXRUb2tlbiB9IGZyb20gXCJuZXh0LWF1dGgvand0XCI7XHJcbmltcG9ydCBDcnlwdG9KUyBmcm9tICdjcnlwdG8tanMnO1xyXG5pbXBvcnQgand0IGZyb20gJ25leHQtYXV0aC9qd3QnO1xyXG5cclxuY29uc3Qgc2VjcmV0ID0gcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVUXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbmNvbnNvbGUubG9nKCd1Z2gnKVxyXG5cclxuICAgIFxyXG5cclxuICAgIGNvbnN0IHsgZXh0IH0gPSByZXEuYm9keTtcclxuICAgIGF3YWl0IGNvbm5lY3REQigpO1xyXG5cclxuICAgIHRyeSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2Vycy5maW5kT25lKHsgZXh0OiBleHQgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3VzZXIgYXBpJywgdXNlcilcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7dXNlcn0pO1xyXG4gICAgICAgIFxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yIH0pO1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG5cclxufTtcclxuIl0sIm5hbWVzIjpbImNvbm5lY3REQiIsIlVzZXJzIiwiZ2V0VG9rZW4iLCJDcnlwdG9KUyIsImp3dCIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJORVhUQVVUSF9TRUNSRVQiLCJyZXEiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZXh0IiwiYm9keSIsInVzZXIiLCJmaW5kT25lIiwic3RhdHVzIiwianNvbiIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/getUser.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getUser.js"));
module.exports = __webpack_exports__;

})();