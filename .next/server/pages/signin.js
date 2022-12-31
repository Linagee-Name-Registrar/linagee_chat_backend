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
exports.id = "pages/signin";
exports.ids = ["pages/signin"];
exports.modules = {

/***/ "./pages/signin.jsx":
/*!**************************!*\
  !*** ./pages/signin.jsx ***!
  \**************************/
/***/ (() => {

eval("// import { ConnectButton } from '@rainbow-me/rainbowkit'\n// import { signIn, useSession } from 'next-auth/react'\n// import { useAccount, useSignMessage, useNetwork } from 'wagmi'\n// import { useEffect } from 'react'\n// import { useRouter } from 'next/router'\n// import axios from 'axios'\n// function SignIn() {\n//   const { isConnected, address } = useAccount()\n//   const { chain } = useNetwork()\n//   const { status } = useSession()\n//   const { signMessageAsync } = useSignMessage()\n//   const { push } = useRouter()\n//   useEffect(() => {\n//     const handleAuth = async () => {\n//       const userData = { address, chain: chain.id, network: 'evm' }\n//       const { data } = await axios.post('/api/auth/request-message', userData, {\n//         headers: {\n//           'content-type': 'application/json',\n//         },\n//       })\n//       const message = data.message\n//       const signature = await signMessageAsync({ message })\n//       // redirect user after success authentication to '/user' page\n//       const { url } = await signIn('credentials', {\n//         message,\n//         signature,\n//         redirect: false,\n//         callbackUrl: '/user',\n//       })\n//       /**\n//        * instead of using signIn(..., redirect: \"/user\")\n//        * we get the url from callback and push it to the router to avoid page refreshing\n//        */\n//       push(url)\n//     }\n//     if (status === 'unauthenticated' && isConnected) {\n//       handleAuth()\n//     }\n//   }, [status, isConnected])\n//   return (\n//     <div>\n//       <h3>Web3 Authentication</h3>\n//       <ConnectButton />\n//     </div>\n//   )\n// }\n// export default SignIn\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anNfbW9yYWxpc19hdXRoLy4vcGFnZXMvc2lnbmluLmpzeD8wNTNhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IENvbm5lY3RCdXR0b24gfSBmcm9tICdAcmFpbmJvdy1tZS9yYWluYm93a2l0J1xyXG4vLyBpbXBvcnQgeyBzaWduSW4sIHVzZVNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnXHJcbi8vIGltcG9ydCB7IHVzZUFjY291bnQsIHVzZVNpZ25NZXNzYWdlLCB1c2VOZXR3b3JrIH0gZnJvbSAnd2FnbWknXHJcbi8vIGltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG4vLyBpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuLy8gaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuLy8gZnVuY3Rpb24gU2lnbkluKCkge1xyXG4vLyAgIGNvbnN0IHsgaXNDb25uZWN0ZWQsIGFkZHJlc3MgfSA9IHVzZUFjY291bnQoKVxyXG4vLyAgIGNvbnN0IHsgY2hhaW4gfSA9IHVzZU5ldHdvcmsoKVxyXG4vLyAgIGNvbnN0IHsgc3RhdHVzIH0gPSB1c2VTZXNzaW9uKClcclxuLy8gICBjb25zdCB7IHNpZ25NZXNzYWdlQXN5bmMgfSA9IHVzZVNpZ25NZXNzYWdlKClcclxuLy8gICBjb25zdCB7IHB1c2ggfSA9IHVzZVJvdXRlcigpXHJcblxyXG4vLyAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbi8vICAgICBjb25zdCBoYW5kbGVBdXRoID0gYXN5bmMgKCkgPT4ge1xyXG4vLyAgICAgICBjb25zdCB1c2VyRGF0YSA9IHsgYWRkcmVzcywgY2hhaW46IGNoYWluLmlkLCBuZXR3b3JrOiAnZXZtJyB9XHJcblxyXG4vLyAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvYXV0aC9yZXF1ZXN0LW1lc3NhZ2UnLCB1c2VyRGF0YSwge1xyXG4vLyAgICAgICAgIGhlYWRlcnM6IHtcclxuLy8gICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgfSlcclxuXHJcbi8vICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBkYXRhLm1lc3NhZ2VcclxuXHJcbi8vICAgICAgIGNvbnN0IHNpZ25hdHVyZSA9IGF3YWl0IHNpZ25NZXNzYWdlQXN5bmMoeyBtZXNzYWdlIH0pXHJcblxyXG4vLyAgICAgICAvLyByZWRpcmVjdCB1c2VyIGFmdGVyIHN1Y2Nlc3MgYXV0aGVudGljYXRpb24gdG8gJy91c2VyJyBwYWdlXHJcbi8vICAgICAgIGNvbnN0IHsgdXJsIH0gPSBhd2FpdCBzaWduSW4oJ2NyZWRlbnRpYWxzJywge1xyXG4vLyAgICAgICAgIG1lc3NhZ2UsXHJcbi8vICAgICAgICAgc2lnbmF0dXJlLFxyXG4vLyAgICAgICAgIHJlZGlyZWN0OiBmYWxzZSxcclxuLy8gICAgICAgICBjYWxsYmFja1VybDogJy91c2VyJyxcclxuLy8gICAgICAgfSlcclxuLy8gICAgICAgLyoqXHJcbi8vICAgICAgICAqIGluc3RlYWQgb2YgdXNpbmcgc2lnbkluKC4uLiwgcmVkaXJlY3Q6IFwiL3VzZXJcIilcclxuLy8gICAgICAgICogd2UgZ2V0IHRoZSB1cmwgZnJvbSBjYWxsYmFjayBhbmQgcHVzaCBpdCB0byB0aGUgcm91dGVyIHRvIGF2b2lkIHBhZ2UgcmVmcmVzaGluZ1xyXG4vLyAgICAgICAgKi9cclxuLy8gICAgICAgcHVzaCh1cmwpXHJcbi8vICAgICB9XHJcbi8vICAgICBpZiAoc3RhdHVzID09PSAndW5hdXRoZW50aWNhdGVkJyAmJiBpc0Nvbm5lY3RlZCkge1xyXG4vLyAgICAgICBoYW5kbGVBdXRoKClcclxuLy8gICAgIH1cclxuLy8gICB9LCBbc3RhdHVzLCBpc0Nvbm5lY3RlZF0pXHJcblxyXG4vLyAgIHJldHVybiAoXHJcbi8vICAgICA8ZGl2PlxyXG4vLyAgICAgICA8aDM+V2ViMyBBdXRoZW50aWNhdGlvbjwvaDM+XHJcbi8vICAgICAgIDxDb25uZWN0QnV0dG9uIC8+XHJcbi8vICAgICA8L2Rpdj5cclxuLy8gICApXHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IFNpZ25JbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5REFBeUQ7QUFDekQsdURBQXVEO0FBQ3ZELGlFQUFpRTtBQUNqRSxvQ0FBb0M7QUFDcEMsMENBQTBDO0FBQzFDLDRCQUE0QjtBQUU1QixzQkFBc0I7QUFDdEIsa0RBQWtEO0FBQ2xELG1DQUFtQztBQUNuQyxvQ0FBb0M7QUFDcEMsa0RBQWtEO0FBQ2xELGlDQUFpQztBQUVqQyxzQkFBc0I7QUFDdEIsdUNBQXVDO0FBQ3ZDLHNFQUFzRTtBQUV0RSxtRkFBbUY7QUFDbkYscUJBQXFCO0FBQ3JCLGdEQUFnRDtBQUNoRCxhQUFhO0FBQ2IsV0FBVztBQUVYLHFDQUFxQztBQUVyQyw4REFBOEQ7QUFFOUQsc0VBQXNFO0FBQ3RFLHNEQUFzRDtBQUN0RCxtQkFBbUI7QUFDbkIscUJBQXFCO0FBQ3JCLDJCQUEyQjtBQUMzQixnQ0FBZ0M7QUFDaEMsV0FBVztBQUNYLFlBQVk7QUFDWiwyREFBMkQ7QUFDM0QsMkZBQTJGO0FBQzNGLFlBQVk7QUFDWixrQkFBa0I7QUFDbEIsUUFBUTtBQUNSLHlEQUF5RDtBQUN6RCxxQkFBcUI7QUFDckIsUUFBUTtBQUNSLDhCQUE4QjtBQUU5QixhQUFhO0FBQ2IsWUFBWTtBQUNaLHFDQUFxQztBQUNyQywwQkFBMEI7QUFDMUIsYUFBYTtBQUNiLE1BQU07QUFDTixJQUFJO0FBRUosd0JBQXdCIiwiZmlsZSI6Ii4vcGFnZXMvc2lnbmluLmpzeC5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/signin.jsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/signin.jsx"));
module.exports = __webpack_exports__;

})();