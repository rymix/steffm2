"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["utils_imagemagick_index_ts"],{

/***/ "./utils/imagemagick/index.ts":
/*!************************************!*\
  !*** ./utils/imagemagick/index.ts ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"convert\": function() { return /* binding */ convert; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"./node_modules/next/dist/compiled/path-browserify/index.js\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var utils_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/functions */ \"./utils/functions.ts\");\n/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ \"./node_modules/buffer/index.js\")[\"Buffer\"];\n\n\n\n\n\n\nvar convert = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(function(files, extension, localEcho) {\n        var returnFiles, call;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    returnFiles = [];\n                    return [\n                        4,\n                        (0,utils_functions__WEBPACK_IMPORTED_MODULE_1__.loadFiles)([\n                            \"/Program Files/imagemagick/wasm-imagemagick.umd-es5.min.js\"\n                        ])\n                    ];\n                case 1:\n                    _state.sent();\n                    call = window[\"wasm-imagemagick\"].call;\n                    return [\n                        4,\n                        Promise.all(files.map(function() {\n                            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(function(param) {\n                                var _param, fileName, fileData, baseName, newName, ref, tmp, ref1, image, stderr, stdout, output, _, _tmp, _tmp1, _1;\n                                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, function(_state) {\n                                    switch(_state.label){\n                                        case 0:\n                                            _param = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(param, 2), fileName = _param[0], fileData = _param[1];\n                                            baseName = (0,path__WEBPACK_IMPORTED_MODULE_0__.basename)(fileName);\n                                            newName = \"\".concat((0,path__WEBPACK_IMPORTED_MODULE_0__.basename)(fileName, (0,path__WEBPACK_IMPORTED_MODULE_0__.extname)(fileName)), \".\").concat(extension);\n                                            return [\n                                                4,\n                                                call([\n                                                    {\n                                                        content: fileData,\n                                                        name: baseName\n                                                    }\n                                                ], [\n                                                    \"convert\",\n                                                    baseName,\n                                                    \"-verbose\",\n                                                    newName\n                                                ])\n                                            ];\n                                        case 1:\n                                            ref = _state.sent(), tmp = ref.outputFiles, ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(tmp === void 0 ? [] : tmp, 1), image = ref1[0], stderr = ref.stderr, stdout = ref.stdout;\n                                            output = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(stdout).concat((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(stderr)).join(\"\\n\");\n                                            if (output) localEcho === null || localEcho === void 0 ? void 0 : localEcho.println(output);\n                                            _ = returnFiles.push;\n                                            _tmp = [\n                                                (0,path__WEBPACK_IMPORTED_MODULE_0__.join)((0,path__WEBPACK_IMPORTED_MODULE_0__.dirname)(fileName), newName)\n                                            ];\n                                            if (!(image === null || image === void 0 ? void 0 : image.blob)) return [\n                                                3,\n                                                3\n                                            ];\n                                            _1 = Buffer.from;\n                                            return [\n                                                4,\n                                                image.blob.arrayBuffer()\n                                            ];\n                                        case 2:\n                                            _tmp1 = _1.apply(Buffer, [\n                                                _state.sent()\n                                            ]);\n                                            return [\n                                                3,\n                                                4\n                                            ];\n                                        case 3:\n                                            _tmp1 = Buffer.from(\"\");\n                                            _state.label = 4;\n                                        case 4:\n                                            _.apply(returnFiles, [\n                                                _tmp.concat(_tmp1)\n                                            ]);\n                                            return [\n                                                2\n                                            ];\n                                    }\n                                });\n                            });\n                            return function(_) {\n                                return _ref.apply(this, arguments);\n                            };\n                        }()))\n                    ];\n                case 2:\n                    _state.sent();\n                    return [\n                        2,\n                        returnFiles\n                    ];\n            }\n        });\n    });\n    return function convert(files, extension, localEcho) {\n        return _ref.apply(this, arguments);\n    };\n}();\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z2ljay9pbmRleC50cz8zNTk0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTG9jYWxFY2hvIH0gZnJvbSBcImNvbXBvbmVudHMvYXBwcy9UZXJtaW5hbC90eXBlc1wiO1xyXG5pbXBvcnQgeyBiYXNlbmFtZSwgZGlybmFtZSwgZXh0bmFtZSwgam9pbiB9IGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCB7IGxvYWRGaWxlcyB9IGZyb20gXCJ1dGlscy9mdW5jdGlvbnNcIjtcclxuaW1wb3J0IHR5cGUgeyBJbWFnZU1hZ2lja0NvbnZlcnRGaWxlIH0gZnJvbSBcInV0aWxzL2ltYWdlbWFnaWNrL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgY29udmVydCA9IGFzeW5jIChcclxuICBmaWxlczogSW1hZ2VNYWdpY2tDb252ZXJ0RmlsZVtdLFxyXG4gIGV4dGVuc2lvbjogc3RyaW5nLFxyXG4gIGxvY2FsRWNobz86IExvY2FsRWNob1xyXG4pOiBQcm9taXNlPEltYWdlTWFnaWNrQ29udmVydEZpbGVbXT4gPT4ge1xyXG4gIGNvbnN0IHJldHVybkZpbGVzOiBJbWFnZU1hZ2lja0NvbnZlcnRGaWxlW10gPSBbXTtcclxuXHJcbiAgYXdhaXQgbG9hZEZpbGVzKFtcclxuICAgIFwiL1Byb2dyYW0gRmlsZXMvaW1hZ2VtYWdpY2svd2FzbS1pbWFnZW1hZ2ljay51bWQtZXM1Lm1pbi5qc1wiLFxyXG4gIF0pO1xyXG5cclxuICBjb25zdCB7IGNhbGwgfSA9IHdpbmRvd1tcIndhc20taW1hZ2VtYWdpY2tcIl07XHJcblxyXG4gIGF3YWl0IFByb21pc2UuYWxsKFxyXG4gICAgZmlsZXMubWFwKGFzeW5jIChbZmlsZU5hbWUsIGZpbGVEYXRhXSkgPT4ge1xyXG4gICAgICBjb25zdCBiYXNlTmFtZSA9IGJhc2VuYW1lKGZpbGVOYW1lKTtcclxuICAgICAgY29uc3QgbmV3TmFtZSA9IGAke2Jhc2VuYW1lKGZpbGVOYW1lLCBleHRuYW1lKGZpbGVOYW1lKSl9LiR7ZXh0ZW5zaW9ufWA7XHJcbiAgICAgIGNvbnN0IHtcclxuICAgICAgICBvdXRwdXRGaWxlczogW2ltYWdlXSA9IFtdLFxyXG4gICAgICAgIHN0ZGVycixcclxuICAgICAgICBzdGRvdXQsXHJcbiAgICAgIH0gPSBhd2FpdCBjYWxsKFxyXG4gICAgICAgIFt7IGNvbnRlbnQ6IGZpbGVEYXRhLCBuYW1lOiBiYXNlTmFtZSB9XSxcclxuICAgICAgICBbXCJjb252ZXJ0XCIsIGJhc2VOYW1lLCBcIi12ZXJib3NlXCIsIG5ld05hbWVdXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IG91dHB1dCA9IFsuLi5zdGRvdXQsIC4uLnN0ZGVycl0uam9pbihcIlxcblwiKTtcclxuXHJcbiAgICAgIGlmIChvdXRwdXQpIGxvY2FsRWNobz8ucHJpbnRsbihvdXRwdXQpO1xyXG5cclxuICAgICAgcmV0dXJuRmlsZXMucHVzaChbXHJcbiAgICAgICAgam9pbihkaXJuYW1lKGZpbGVOYW1lKSwgbmV3TmFtZSksXHJcbiAgICAgICAgaW1hZ2U/LmJsb2JcclxuICAgICAgICAgID8gQnVmZmVyLmZyb20oYXdhaXQgaW1hZ2UuYmxvYi5hcnJheUJ1ZmZlcigpKVxyXG4gICAgICAgICAgOiBCdWZmZXIuZnJvbShcIlwiKSxcclxuICAgICAgXSk7XHJcbiAgICB9KVxyXG4gICk7XHJcblxyXG4gIHJldHVybiByZXR1cm5GaWxlcztcclxufTtcclxuIl0sIm5hbWVzIjpbImJhc2VuYW1lIiwiZGlybmFtZSIsImV4dG5hbWUiLCJqb2luIiwibG9hZEZpbGVzIiwiY29udmVydCIsImZpbGVzIiwiZXh0ZW5zaW9uIiwibG9jYWxFY2hvIiwicmV0dXJuRmlsZXMiLCJjYWxsIiwid2luZG93IiwiUHJvbWlzZSIsImFsbCIsIm1hcCIsImZpbGVOYW1lIiwiZmlsZURhdGEiLCJiYXNlTmFtZSIsIm5ld05hbWUiLCJpbWFnZSIsInN0ZGVyciIsInN0ZG91dCIsIm91dHB1dCIsImNvbnRlbnQiLCJuYW1lIiwib3V0cHV0RmlsZXMiLCJwcmludGxuIiwicHVzaCIsImJsb2IiLCJCdWZmZXIiLCJmcm9tIiwiYXJyYXlCdWZmZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/imagemagick/index.ts\n"));

/***/ })

}]);