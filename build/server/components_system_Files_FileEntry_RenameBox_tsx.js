"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "components_system_Files_FileEntry_RenameBox_tsx";
exports.ids = ["components_system_Files_FileEntry_RenameBox_tsx"];
exports.modules = {

/***/ "./components/system/Files/FileEntry/RenameBox.tsx":
/*!*********************************************************!*\
  !*** ./components/system/Files/FileEntry/RenameBox.tsx ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components_system_Files_FileEntry_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/system/Files/FileEntry/functions */ \"./components/system/Files/FileEntry/functions.ts\");\n/* harmony import */ var components_system_Files_FileEntry_StyledRenameBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/system/Files/FileEntry/StyledRenameBox */ \"./components/system/Files/FileEntry/StyledRenameBox.ts\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/constants */ \"./utils/constants.ts\");\n/* harmony import */ var utils_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/functions */ \"./utils/functions.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_system_Files_FileEntry_functions__WEBPACK_IMPORTED_MODULE_1__]);\ncomponents_system_Files_FileEntry_functions__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\nconst RenameBox = ({ name , path , renameFile  })=>{\n    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    const saveRename = ()=>renameFile(path, inputRef.current?.value);\n    const { formats , sizes  } = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__.useTheme)();\n    const updateDimensions = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((textArea)=>{\n        if (textArea instanceof HTMLTextAreaElement) {\n            const { width  } = (0,components_system_Files_FileEntry_functions__WEBPACK_IMPORTED_MODULE_1__.getTextWrapData)(textArea.value, sizes.fileEntry.fontSize, formats.systemFont);\n            // Force height to re-calculate\n            textArea.setAttribute(\"style\", \"height: 1px\");\n            textArea.setAttribute(\"style\", `height: ${textArea.scrollHeight + 2}px; width: ${width + 22}px`);\n        }\n    }, [\n        formats.systemFont,\n        sizes.fileEntry.fontSize\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useLayoutEffect)(()=>{\n        updateDimensions(inputRef.current);\n        inputRef.current?.focus(utils_constants__WEBPACK_IMPORTED_MODULE_6__.PREVENT_SCROLL);\n        inputRef.current?.setSelectionRange(0, name.length - (0,path__WEBPACK_IMPORTED_MODULE_3__.extname)(name).length);\n    }, [\n        name,\n        updateDimensions\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_system_Files_FileEntry_StyledRenameBox__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        ref: inputRef,\n        defaultValue: name,\n        onBlurCapture: saveRename,\n        onClick: utils_functions__WEBPACK_IMPORTED_MODULE_7__.haltEvent,\n        onDragStart: utils_functions__WEBPACK_IMPORTED_MODULE_7__.haltEvent,\n        onKeyDown: ({ key  })=>{\n            if (key === \"Enter\") saveRename();\n        },\n        onKeyUp: (event)=>{\n            updateDimensions(event.target);\n            (0,utils_functions__WEBPACK_IMPORTED_MODULE_7__.haltEvent)(event);\n        }\n    }, void 0, false, {\n        fileName: \"/Users/stevearnott/node/steffm2/components/system/Files/FileEntry/RenameBox.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RenameBox);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3N5c3RlbS9GaWxlcy9GaWxlRW50cnkvUmVuYW1lQm94LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBOEU7QUFDRTtBQUNqRDtBQUM4QjtBQUNoQjtBQUNJO0FBQ0w7QUFRNUMsTUFBTVMsU0FBUyxHQUF1QixDQUFDLEVBQUVDLElBQUksR0FBRUMsSUFBSSxHQUFFQyxVQUFVLEdBQUUsR0FBSztJQUNwRSxNQUFNQyxRQUFRLEdBQUdSLDZDQUFNLENBQTZCLElBQUksQ0FBQztJQUN6RCxNQUFNUyxVQUFVLEdBQUcsSUFBWUYsVUFBVSxDQUFDRCxJQUFJLEVBQUVFLFFBQVEsQ0FBQ0UsT0FBTyxFQUFFQyxLQUFLLENBQUM7SUFDeEUsTUFBTSxFQUFFQyxPQUFPLEdBQUVDLEtBQUssR0FBRSxHQUFHWiwyREFBUSxFQUFFO0lBQ3JDLE1BQU1hLGdCQUFnQixHQUFHaEIsa0RBQVcsQ0FDbEMsQ0FBQ2lCLFFBQWtELEdBQVc7UUFDNUQsSUFBSUEsUUFBUSxZQUFZQyxtQkFBbUIsRUFBRTtZQUMzQyxNQUFNLEVBQUVDLEtBQUssR0FBRSxHQUFHdEIsNEZBQWUsQ0FDL0JvQixRQUFRLENBQUNKLEtBQUssRUFDZEUsS0FBSyxDQUFDSyxTQUFTLENBQUNDLFFBQVEsRUFDeEJQLE9BQU8sQ0FBQ1EsVUFBVSxDQUNuQjtZQUVELCtCQUErQjtZQUMvQkwsUUFBUSxDQUFDTSxZQUFZLENBQUMsT0FBTyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1lBQzlDTixRQUFRLENBQUNNLFlBQVksQ0FDbkIsT0FBTyxFQUNQLENBQUMsUUFBUSxFQUFFTixRQUFRLENBQUNPLFlBQVksR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFTCxLQUFLLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUNqRSxDQUFDO1FBQ0osQ0FBQztJQUNILENBQUMsRUFDRDtRQUFDTCxPQUFPLENBQUNRLFVBQVU7UUFBRVAsS0FBSyxDQUFDSyxTQUFTLENBQUNDLFFBQVE7S0FBQyxDQUMvQztJQUVEcEIsc0RBQWUsQ0FBQyxJQUFNO1FBQ3BCZSxnQkFBZ0IsQ0FBQ04sUUFBUSxDQUFDRSxPQUFPLENBQUMsQ0FBQztRQUNuQ0YsUUFBUSxDQUFDRSxPQUFPLEVBQUVhLEtBQUssQ0FBQ3JCLDJEQUFjLENBQUMsQ0FBQztRQUN4Q00sUUFBUSxDQUFDRSxPQUFPLEVBQUVjLGlCQUFpQixDQUFDLENBQUMsRUFBRW5CLElBQUksQ0FBQ29CLE1BQU0sR0FBRzVCLDZDQUFPLENBQUNRLElBQUksQ0FBQyxDQUFDb0IsTUFBTSxDQUFDLENBQUM7SUFDN0UsQ0FBQyxFQUFFO1FBQUNwQixJQUFJO1FBQUVTLGdCQUFnQjtLQUFDLENBQUMsQ0FBQztJQUU3QixxQkFDRSw4REFBQ2xCLHlGQUFlO1FBQ2Q4QixHQUFHLEVBQUVsQixRQUFRO1FBQ2JtQixZQUFZLEVBQUV0QixJQUFJO1FBQ2xCdUIsYUFBYSxFQUFFbkIsVUFBVTtRQUN6Qm9CLE9BQU8sRUFBRTFCLHNEQUFTO1FBQ2xCMkIsV0FBVyxFQUFFM0Isc0RBQVM7UUFDdEI0QixTQUFTLEVBQUUsQ0FBQyxFQUFFQyxHQUFHLEdBQUUsR0FBSztZQUN0QixJQUFJQSxHQUFHLEtBQUssT0FBTyxFQUFFdkIsVUFBVSxFQUFFLENBQUM7UUFDcEMsQ0FBQztRQUNEd0IsT0FBTyxFQUFFLENBQUNDLEtBQUssR0FBSztZQUNsQnBCLGdCQUFnQixDQUFDb0IsS0FBSyxDQUFDQyxNQUFNLENBQUMsQ0FBQztZQUMvQmhDLDBEQUFTLENBQUMrQixLQUFLLENBQUMsQ0FBQztRQUNuQixDQUFDOzs7OztpQkFDRCxDQUNGO0FBQ0osQ0FBQztBQUVELGlFQUFlOUIsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RlZmZtMi8uL2NvbXBvbmVudHMvc3lzdGVtL0ZpbGVzL0ZpbGVFbnRyeS9SZW5hbWVCb3gudHN4P2I4NmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0VGV4dFdyYXBEYXRhIH0gZnJvbSBcImNvbXBvbmVudHMvc3lzdGVtL0ZpbGVzL0ZpbGVFbnRyeS9mdW5jdGlvbnNcIjtcclxuaW1wb3J0IFN0eWxlZFJlbmFtZUJveCBmcm9tIFwiY29tcG9uZW50cy9zeXN0ZW0vRmlsZXMvRmlsZUVudHJ5L1N0eWxlZFJlbmFtZUJveFwiO1xyXG5pbXBvcnQgeyBleHRuYW1lIH0gZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUxheW91dEVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IFBSRVZFTlRfU0NST0xMIH0gZnJvbSBcInV0aWxzL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBoYWx0RXZlbnQgfSBmcm9tIFwidXRpbHMvZnVuY3Rpb25zXCI7XHJcblxyXG50eXBlIFJlbmFtZUJveFByb3BzID0ge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBwYXRoOiBzdHJpbmc7XHJcbiAgcmVuYW1lRmlsZTogKHBhdGg6IHN0cmluZywgbmFtZT86IHN0cmluZykgPT4gdm9pZDtcclxufTtcclxuXHJcbmNvbnN0IFJlbmFtZUJveDogRkM8UmVuYW1lQm94UHJvcHM+ID0gKHsgbmFtZSwgcGF0aCwgcmVuYW1lRmlsZSB9KSA9PiB7XHJcbiAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWY8SFRNTFRleHRBcmVhRWxlbWVudCB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IHNhdmVSZW5hbWUgPSAoKTogdm9pZCA9PiByZW5hbWVGaWxlKHBhdGgsIGlucHV0UmVmLmN1cnJlbnQ/LnZhbHVlKTtcclxuICBjb25zdCB7IGZvcm1hdHMsIHNpemVzIH0gPSB1c2VUaGVtZSgpO1xyXG4gIGNvbnN0IHVwZGF0ZURpbWVuc2lvbnMgPSB1c2VDYWxsYmFjayhcclxuICAgICh0ZXh0QXJlYTogRXZlbnRUYXJnZXQgfCBIVE1MVGV4dEFyZWFFbGVtZW50IHwgbnVsbCk6IHZvaWQgPT4ge1xyXG4gICAgICBpZiAodGV4dEFyZWEgaW5zdGFuY2VvZiBIVE1MVGV4dEFyZWFFbGVtZW50KSB7XHJcbiAgICAgICAgY29uc3QgeyB3aWR0aCB9ID0gZ2V0VGV4dFdyYXBEYXRhKFxyXG4gICAgICAgICAgdGV4dEFyZWEudmFsdWUsXHJcbiAgICAgICAgICBzaXplcy5maWxlRW50cnkuZm9udFNpemUsXHJcbiAgICAgICAgICBmb3JtYXRzLnN5c3RlbUZvbnRcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyBGb3JjZSBoZWlnaHQgdG8gcmUtY2FsY3VsYXRlXHJcbiAgICAgICAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJoZWlnaHQ6IDFweFwiKTtcclxuICAgICAgICB0ZXh0QXJlYS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICBcInN0eWxlXCIsXHJcbiAgICAgICAgICBgaGVpZ2h0OiAke3RleHRBcmVhLnNjcm9sbEhlaWdodCArIDJ9cHg7IHdpZHRoOiAke3dpZHRoICsgMjJ9cHhgXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFtmb3JtYXRzLnN5c3RlbUZvbnQsIHNpemVzLmZpbGVFbnRyeS5mb250U2l6ZV1cclxuICApO1xyXG5cclxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgdXBkYXRlRGltZW5zaW9ucyhpbnB1dFJlZi5jdXJyZW50KTtcclxuICAgIGlucHV0UmVmLmN1cnJlbnQ/LmZvY3VzKFBSRVZFTlRfU0NST0xMKTtcclxuICAgIGlucHV0UmVmLmN1cnJlbnQ/LnNldFNlbGVjdGlvblJhbmdlKDAsIG5hbWUubGVuZ3RoIC0gZXh0bmFtZShuYW1lKS5sZW5ndGgpO1xyXG4gIH0sIFtuYW1lLCB1cGRhdGVEaW1lbnNpb25zXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVkUmVuYW1lQm94XHJcbiAgICAgIHJlZj17aW5wdXRSZWZ9XHJcbiAgICAgIGRlZmF1bHRWYWx1ZT17bmFtZX1cclxuICAgICAgb25CbHVyQ2FwdHVyZT17c2F2ZVJlbmFtZX1cclxuICAgICAgb25DbGljaz17aGFsdEV2ZW50fVxyXG4gICAgICBvbkRyYWdTdGFydD17aGFsdEV2ZW50fVxyXG4gICAgICBvbktleURvd249eyh7IGtleSB9KSA9PiB7XHJcbiAgICAgICAgaWYgKGtleSA9PT0gXCJFbnRlclwiKSBzYXZlUmVuYW1lKCk7XHJcbiAgICAgIH19XHJcbiAgICAgIG9uS2V5VXA9eyhldmVudCkgPT4ge1xyXG4gICAgICAgIHVwZGF0ZURpbWVuc2lvbnMoZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICBoYWx0RXZlbnQoZXZlbnQpO1xyXG4gICAgICB9fVxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVuYW1lQm94O1xyXG4iXSwibmFtZXMiOlsiZ2V0VGV4dFdyYXBEYXRhIiwiU3R5bGVkUmVuYW1lQm94IiwiZXh0bmFtZSIsInVzZUNhbGxiYWNrIiwidXNlTGF5b3V0RWZmZWN0IiwidXNlUmVmIiwidXNlVGhlbWUiLCJQUkVWRU5UX1NDUk9MTCIsImhhbHRFdmVudCIsIlJlbmFtZUJveCIsIm5hbWUiLCJwYXRoIiwicmVuYW1lRmlsZSIsImlucHV0UmVmIiwic2F2ZVJlbmFtZSIsImN1cnJlbnQiLCJ2YWx1ZSIsImZvcm1hdHMiLCJzaXplcyIsInVwZGF0ZURpbWVuc2lvbnMiLCJ0ZXh0QXJlYSIsIkhUTUxUZXh0QXJlYUVsZW1lbnQiLCJ3aWR0aCIsImZpbGVFbnRyeSIsImZvbnRTaXplIiwic3lzdGVtRm9udCIsInNldEF0dHJpYnV0ZSIsInNjcm9sbEhlaWdodCIsImZvY3VzIiwic2V0U2VsZWN0aW9uUmFuZ2UiLCJsZW5ndGgiLCJyZWYiLCJkZWZhdWx0VmFsdWUiLCJvbkJsdXJDYXB0dXJlIiwib25DbGljayIsIm9uRHJhZ1N0YXJ0Iiwib25LZXlEb3duIiwia2V5Iiwib25LZXlVcCIsImV2ZW50IiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/system/Files/FileEntry/RenameBox.tsx\n");

/***/ }),

/***/ "./components/system/Files/FileEntry/StyledRenameBox.ts":
/*!**************************************************************!*\
  !*** ./components/system/Files/FileEntry/StyledRenameBox.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/constants */ \"./utils/constants.ts\");\n\n\nconst StyledRenameBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default().textarea.attrs({\n    autocomplete: \"off\",\n    enterKeyHint: \"done\",\n    maxLength: utils_constants__WEBPACK_IMPORTED_MODULE_1__.MAX_FILE_NAME_LENGTH,\n    rows: 1,\n    spellCheck: false\n})`\r\n  border: 1px solid rgb(100, 100, 100);\r\n  font-family: inherit;\r\n  font-size: 11.5px;\r\n  margin-bottom: 2px;\r\n  max-width: ${({ theme  })=>theme.sizes.fileEntry.renameWidth}px;\r\n  min-height: 19px;\r\n  min-width: 30px;\r\n  overflow: hidden;\r\n  padding: ${({ theme  })=>`1px ${theme.sizes.fileEntry.renamePadding}px`};\r\n  position: relative;\r\n  resize: none;\r\n  text-align: center;\r\n  top: 2px;\r\n  user-select: text;\r\n  white-space: break-spaces;\r\n  z-index: 1;\r\n`;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyledRenameBox);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3N5c3RlbS9GaWxlcy9GaWxlRW50cnkvU3R5bGVkUmVuYW1lQm94LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBdUM7QUFDZ0I7QUFFdkQsTUFBTUUsZUFBZSxHQUFHRix1RUFBcUIsQ0FBQztJQUM1Q0ssWUFBWSxFQUFFLEtBQUs7SUFDbkJDLFlBQVksRUFBRSxNQUFNO0lBQ3BCQyxTQUFTLEVBQUVOLGlFQUFvQjtJQUMvQk8sSUFBSSxFQUFFLENBQUM7SUFDUEMsVUFBVSxFQUFFLEtBQUs7Q0FDbEIsQ0FBQyxDQUFDO0FBbUJILGVBQWVQLGVBQWUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N0ZWZmbTIvLi9jb21wb25lbnRzL3N5c3RlbS9GaWxlcy9GaWxlRW50cnkvU3R5bGVkUmVuYW1lQm94LnRzP2I0MDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgTUFYX0ZJTEVfTkFNRV9MRU5HVEggfSBmcm9tIFwidXRpbHMvY29uc3RhbnRzXCI7XHJcblxyXG5jb25zdCBTdHlsZWRSZW5hbWVCb3ggPSBzdHlsZWQudGV4dGFyZWEuYXR0cnMoe1xyXG4gIGF1dG9jb21wbGV0ZTogXCJvZmZcIixcclxuICBlbnRlcktleUhpbnQ6IFwiZG9uZVwiLFxyXG4gIG1heExlbmd0aDogTUFYX0ZJTEVfTkFNRV9MRU5HVEgsXHJcbiAgcm93czogMSxcclxuICBzcGVsbENoZWNrOiBmYWxzZSxcclxufSlgXHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEwMCwgMTAwLCAxMDApO1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogMTEuNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDJweDtcclxuICBtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc2l6ZXMuZmlsZUVudHJ5LnJlbmFtZVdpZHRofXB4O1xyXG4gIG1pbi1oZWlnaHQ6IDE5cHg7XHJcbiAgbWluLXdpZHRoOiAzMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiBgMXB4ICR7dGhlbWUuc2l6ZXMuZmlsZUVudHJ5LnJlbmFtZVBhZGRpbmd9cHhgfTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcmVzaXplOiBub25lO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0b3A6IDJweDtcclxuICB1c2VyLXNlbGVjdDogdGV4dDtcclxuICB3aGl0ZS1zcGFjZTogYnJlYWstc3BhY2VzO1xyXG4gIHotaW5kZXg6IDE7XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdHlsZWRSZW5hbWVCb3g7XHJcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJNQVhfRklMRV9OQU1FX0xFTkdUSCIsIlN0eWxlZFJlbmFtZUJveCIsInRleHRhcmVhIiwiYXR0cnMiLCJhdXRvY29tcGxldGUiLCJlbnRlcktleUhpbnQiLCJtYXhMZW5ndGgiLCJyb3dzIiwic3BlbGxDaGVjayIsInRoZW1lIiwic2l6ZXMiLCJmaWxlRW50cnkiLCJyZW5hbWVXaWR0aCIsInJlbmFtZVBhZGRpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/system/Files/FileEntry/StyledRenameBox.ts\n");

/***/ })

};
;