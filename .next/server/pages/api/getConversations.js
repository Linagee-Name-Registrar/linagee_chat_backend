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
exports.id = "pages/api/getConversations";
exports.ids = ["pages/api/getConversations"];
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

/***/ "(api)/./lib/conversationSchema.js":
/*!***********************************!*\
  !*** ./lib/conversationSchema.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst conversationsSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    roomName: {\n        type: String\n    },\n    roomId: {\n        type: String\n    },\n    isDm: {\n        type: Boolean\n    },\n    userReference: [\n        {\n            primary: {\n                type: String\n            },\n            addr: {\n                type: String\n            }\n        }\n    ]\n}, {\n    timestamps: true\n});\nlet Conversations = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.conversations) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"conversations\", conversationsSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Conversations);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvY29udmVyc2F0aW9uU2NoZW1hLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUU5QixNQUFNQyxzQkFBc0IsSUFBSUQsd0RBQWUsQ0FDN0M7SUFDRUcsVUFBVTtRQUNSQyxNQUFNQztJQUNSO0lBQ0FDLFFBQVE7UUFDTkYsTUFBTUM7SUFDUjtJQUNBRSxNQUFNO1FBQ0pILE1BQU1JO0lBQ1I7SUFDQUMsZUFBZTtRQUFDO1lBQ2RDLFNBQVM7Z0JBQ0xOLE1BQU1DO1lBQ1Y7WUFDQU0sTUFBTTtnQkFDRlAsTUFBTUM7WUFDVjtRQUNGO0tBQUU7QUFDSixHQUNBO0lBQUVPLFlBQVksSUFBSTtBQUFDO0FBR3JCLElBQUlDLGdCQUFnQmIsc0VBQTZCLElBQUlBLHFEQUFjLENBQUMsaUJBQWlCQztBQUVyRixpRUFBZVksYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqc19tb3JhbGlzX2F1dGgvLi9saWIvY29udmVyc2F0aW9uU2NoZW1hLmpzP2VkYmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuICBjb25zdCBjb252ZXJzYXRpb25zU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYShcclxuICAgIHtcclxuICAgICAgcm9vbU5hbWU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHJvb21JZDoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgfSxcclxuICAgICAgaXNEbToge1xyXG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgIH0sXHJcbiAgICAgIHVzZXJSZWZlcmVuY2U6IFt7XHJcbiAgICAgICAgcHJpbWFyeToge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFkZHI6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nXHJcbiAgICAgICAgfVxyXG4gICAgICB9XSxcclxuICAgIH0sXHJcbiAgICB7IHRpbWVzdGFtcHM6IHRydWUgfVxyXG4gICk7XHJcbiAgXHJcbiAgbGV0IENvbnZlcnNhdGlvbnMgPSBtb25nb29zZS5tb2RlbHMuY29udmVyc2F0aW9ucyB8fCBtb25nb29zZS5tb2RlbChcImNvbnZlcnNhdGlvbnNcIiwgY29udmVyc2F0aW9uc1NjaGVtYSk7XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgQ29udmVyc2F0aW9ucztcclxuICAiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjb252ZXJzYXRpb25zU2NoZW1hIiwiU2NoZW1hIiwicm9vbU5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicm9vbUlkIiwiaXNEbSIsIkJvb2xlYW4iLCJ1c2VyUmVmZXJlbmNlIiwicHJpbWFyeSIsImFkZHIiLCJ0aW1lc3RhbXBzIiwiQ29udmVyc2F0aW9ucyIsIm1vZGVscyIsImNvbnZlcnNhdGlvbnMiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/conversationSchema.js\n");

/***/ }),

/***/ "(api)/./lib/userSchema.js":
/*!***************************!*\
  !*** ./lib/userSchema.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    profileId: {\n        type: String\n    },\n    bio: {\n        type: String,\n        default: \"This is my Bio\"\n    },\n    ext: {\n        type: String,\n        default: \"null\"\n    },\n    addr: {\n        type: String\n    },\n    primary: {\n        type: String\n    }\n}, {\n    timestamps: true\n});\nlet Users = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.users) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"users\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Users);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvdXNlclNjaGVtYS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsYUFBYSxJQUFJRCx3REFBZSxDQUNwQztJQUNFRyxXQUFXO1FBQ1RDLE1BQU1DO0lBQ1I7SUFDQUMsS0FBSztRQUNIRixNQUFNQztRQUNORSxTQUFTO0lBQ1g7SUFDQUMsS0FBSztRQUNISixNQUFNQztRQUNORSxTQUFTO0lBQ1g7SUFDQUUsTUFBTTtRQUNKTCxNQUFNQztJQUNSO0lBQ0FLLFNBQVM7UUFDUE4sTUFBTUM7SUFDUjtBQUNGLEdBQ0E7SUFBRU0sWUFBWSxJQUFJO0FBQUM7QUFHckIsSUFBSUMsUUFBUVosOERBQXFCLElBQUlBLHFEQUFjLENBQUMsU0FBU0M7QUFFN0QsaUVBQWVXLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anNfbW9yYWxpc19hdXRoLy4vbGliL3VzZXJTY2hlbWEuanM/ZmZmMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCB1c2VyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYShcclxuICB7XHJcbiAgICBwcm9maWxlSWQ6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgfSxcclxuICAgIGJpbzoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIGRlZmF1bHQ6IFwiVGhpcyBpcyBteSBCaW9cIixcclxuICAgIH0sXHJcbiAgICBleHQ6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICBkZWZhdWx0OiBcIm51bGxcIixcclxuICAgIH0sXHJcbiAgICBhZGRyOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgIH0sXHJcbiAgICBwcmltYXJ5OiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgIH0sXHJcbiAgfSxcclxuICB7IHRpbWVzdGFtcHM6IHRydWUgfVxyXG4pO1xyXG5cclxubGV0IFVzZXJzID0gbW9uZ29vc2UubW9kZWxzLnVzZXJzIHx8IG1vbmdvb3NlLm1vZGVsKFwidXNlcnNcIiwgdXNlclNjaGVtYSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VycztcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwidXNlclNjaGVtYSIsIlNjaGVtYSIsInByb2ZpbGVJZCIsInR5cGUiLCJTdHJpbmciLCJiaW8iLCJkZWZhdWx0IiwiZXh0IiwiYWRkciIsInByaW1hcnkiLCJ0aW1lc3RhbXBzIiwiVXNlcnMiLCJtb2RlbHMiLCJ1c2VycyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/userSchema.js\n");

/***/ }),

/***/ "(api)/./pages/api/getConversations.js":
/*!***************************************!*\
  !*** ./pages/api/getConversations.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_connectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/connectDB */ \"(api)/./lib/connectDB.js\");\n/* harmony import */ var _lib_userSchema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/userSchema */ \"(api)/./lib/userSchema.js\");\n/* harmony import */ var _lib_conversationSchema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/conversationSchema */ \"(api)/./lib/conversationSchema.js\");\n/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/jwt */ \"next-auth/jwt\");\n/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_jwt__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! crypto-js */ \"crypto-js\");\n/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nconst secret = process.env.NEXTAUTH_SECRET;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    console.log(\"ugh\");\n    const { ext  } = req.body;\n    await (0,_lib_connectDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    try {\n        const user = await _lib_userSchema__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n            ext: ext\n        });\n        console.log(\"user is\", user);\n        const convos = await _lib_conversationSchema__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find({\n            \"userReference.addr\": {\n                \"$all\": [\n                    `${user.addr}`\n                ]\n            }\n        });\n        if (!convos.length) {\n            res.status(200);\n        }\n        console.log(\"returning convos\", convos);\n        res.status(200).json(convos);\n    } catch (error) {\n        res.status(400).json({\n            error\n        });\n        console.error(error);\n    }\n}); // db.collection.find({\n //     \"members\": {\n //       \"$all\": [\n //         \"61e4f988b92b443b29c87c38\",\n //         \"61f0dd62e21a45de185854e9\"\n //       ]\n //     },\n //     isGroup: false\n //   })\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0Q29udmVyc2F0aW9ucy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE0QztBQUNIO0FBQ2dCO0FBQ2hCO0FBQ1I7QUFDRDtBQUVoQyxNQUFNTSxTQUFTQyxRQUFRQyxHQUFHLENBQUNDLGVBQWU7QUFHMUMsaUVBQWUsT0FBT0MsS0FBS0MsTUFBUTtJQUNuQ0MsUUFBUUMsR0FBRyxDQUFDO0lBR1IsTUFBTSxFQUFFQyxJQUFHLEVBQUUsR0FBR0osSUFBSUssSUFBSTtJQUN4QixNQUFNZiwwREFBU0E7SUFFZixJQUFJO1FBQ0EsTUFBTWdCLE9BQU8sTUFBTWYsK0RBQWEsQ0FBQztZQUFFYSxLQUFLQTtRQUFJO1FBQzVDRixRQUFRQyxHQUFHLENBQUMsV0FBV0c7UUFFdkIsTUFBTUUsU0FBUyxNQUFNaEIsb0VBQWtCLENBQUM7WUFDcEMsc0JBQXNCO2dCQUNwQixRQUFRO29CQUNOLENBQUMsRUFBRWMsS0FBS0ksSUFBSSxDQUFDLENBQUM7aUJBQ2Y7WUFDSDtRQUNGO1FBRUEsSUFBRyxDQUFDRixPQUFPRyxNQUFNLEVBQUM7WUFDaEJWLElBQUlXLE1BQU0sQ0FBQztRQUNiLENBQUM7UUFHSFYsUUFBUUMsR0FBRyxDQUFDLG9CQUFvQks7UUFDaENQLElBQUlXLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNMO0lBRXpCLEVBQUUsT0FBT00sT0FBTztRQUNaYixJQUFJVyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDO1FBQU07UUFDN0JaLFFBQVFZLEtBQUssQ0FBQ0E7SUFDbEI7QUFFSixHQUFFLENBRUYsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQixrQkFBa0I7Q0FDbEIsc0NBQXNDO0NBQ3RDLHFDQUFxQztDQUNyQyxVQUFVO0NBQ1YsU0FBUztDQUNULHFCQUFxQjtDQUNyQixPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzX21vcmFsaXNfYXV0aC8uL3BhZ2VzL2FwaS9nZXRDb252ZXJzYXRpb25zLmpzP2MzYjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbm5lY3REQiBmcm9tIFwiLi4vLi4vbGliL2Nvbm5lY3REQlwiO1xyXG5pbXBvcnQgVXNlcnMgZnJvbSBcIi4uLy4uL2xpYi91c2VyU2NoZW1hXCI7XHJcbmltcG9ydCBDb252ZXJzYXRpb25zIGZyb20gXCIuLi8uLi9saWIvY29udmVyc2F0aW9uU2NoZW1hXCI7XHJcbmltcG9ydCB7IGdldFRva2VuIH0gZnJvbSBcIm5leHQtYXV0aC9qd3RcIjtcclxuaW1wb3J0IENyeXB0b0pTIGZyb20gJ2NyeXB0by1qcyc7XHJcbmltcG9ydCBqd3QgZnJvbSAnbmV4dC1hdXRoL2p3dCc7XHJcblxyXG5jb25zdCBzZWNyZXQgPSBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVRcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuY29uc29sZS5sb2coJ3VnaCcpXHJcblxyXG4gICAgXHJcbiAgICBjb25zdCB7IGV4dCB9ID0gcmVxLmJvZHk7XHJcbiAgICBhd2FpdCBjb25uZWN0REIoKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2Vycy5maW5kT25lKHsgZXh0OiBleHQgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ1c2VyIGlzXCIsIHVzZXIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNvbnZvcyA9IGF3YWl0IENvbnZlcnNhdGlvbnMuZmluZCh7XHJcbiAgICAgICAgICAgIFwidXNlclJlZmVyZW5jZS5hZGRyXCI6IHtcclxuICAgICAgICAgICAgICBcIiRhbGxcIjogW1xyXG4gICAgICAgICAgICAgICAgYCR7dXNlci5hZGRyfWAsXHJcbiAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgIGlmKCFjb252b3MubGVuZ3RoKXtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApXHJcbiAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcInJldHVybmluZyBjb252b3NcIiwgY29udm9zKTtcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihjb252b3MpO1xyXG4gICAgICAgIFxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yIH0pO1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbi8vIGRiLmNvbGxlY3Rpb24uZmluZCh7XHJcbi8vICAgICBcIm1lbWJlcnNcIjoge1xyXG4vLyAgICAgICBcIiRhbGxcIjogW1xyXG4vLyAgICAgICAgIFwiNjFlNGY5ODhiOTJiNDQzYjI5Yzg3YzM4XCIsXHJcbi8vICAgICAgICAgXCI2MWYwZGQ2MmUyMWE0NWRlMTg1ODU0ZTlcIlxyXG4vLyAgICAgICBdXHJcbi8vICAgICB9LFxyXG4vLyAgICAgaXNHcm91cDogZmFsc2VcclxuLy8gICB9KVxyXG5cclxuIl0sIm5hbWVzIjpbImNvbm5lY3REQiIsIlVzZXJzIiwiQ29udmVyc2F0aW9ucyIsImdldFRva2VuIiwiQ3J5cHRvSlMiLCJqd3QiLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVEFVVEhfU0VDUkVUIiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsImV4dCIsImJvZHkiLCJ1c2VyIiwiZmluZE9uZSIsImNvbnZvcyIsImZpbmQiLCJhZGRyIiwibGVuZ3RoIiwic3RhdHVzIiwianNvbiIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/getConversations.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getConversations.js"));
module.exports = __webpack_exports__;

})();