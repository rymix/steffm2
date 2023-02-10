"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "utils_ffmpeg_index_ts";
exports.ids = ["utils_ffmpeg_index_ts"];
exports.modules = {

/***/ "./utils/ffmpeg/index.ts":
/*!*******************************!*\
  !*** ./utils/ffmpeg/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"transcode\": () => (/* binding */ transcode)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var utils_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/functions */ \"./utils/functions.ts\");\n\n\nconst getFFmpeg = async (localEcho)=>{\n    const baseLib = `/Program Files/ffmpeg/${window.crossOriginIsolated ? \"SharedArrayBuffer/\" : \"\"}`;\n    if (!window.FFmpeg) {\n        await (0,utils_functions__WEBPACK_IMPORTED_MODULE_1__.loadFiles)([\n            `${baseLib}/ffmpeg.min.js`\n        ]);\n    }\n    if (window.FFmpeg) {\n        window.FFmpegInstance?.exit();\n        window.FFmpegInstance = window.FFmpeg.createFFmpeg({\n            corePath: `${baseLib}/ffmpeg-core.js`,\n            log: false,\n            logger: ({ message  })=>{\n                localEcho?.println(message);\n                console.info(message);\n            },\n            mainName: \"main\"\n        });\n        await window.FFmpegInstance.load();\n    }\n    return window.FFmpegInstance;\n};\nconst transcode = async (files, extension, localEcho)=>{\n    const ffmpeg = await getFFmpeg(localEcho);\n    const returnFiles = [];\n    await Promise.all(files.map(async ([fileName, fileData])=>{\n        const baseName = (0,path__WEBPACK_IMPORTED_MODULE_0__.basename)(fileName);\n        const newName = `${(0,path__WEBPACK_IMPORTED_MODULE_0__.basename)(fileName, (0,path__WEBPACK_IMPORTED_MODULE_0__.extname)(fileName))}.${extension}`;\n        ffmpeg.FS(\"writeFile\", baseName, fileData);\n        await ffmpeg.run(\"-i\", baseName, newName);\n        returnFiles.push([\n            (0,path__WEBPACK_IMPORTED_MODULE_0__.join)((0,path__WEBPACK_IMPORTED_MODULE_0__.dirname)(fileName), newName),\n            Buffer.from(ffmpeg.FS(\"readFile\", newName)), \n        ]);\n    }));\n    return returnFiles;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9mZm1wZWcvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUN3RDtBQU1aO0FBRTVDLE1BQU1LLFNBQVMsR0FBRyxPQUFPQyxTQUFxQixHQUErQjtJQUMzRSxNQUFNQyxPQUFPLEdBQUcsQ0FBQyxzQkFBc0IsRUFDckNDLE1BQU0sQ0FBQ0MsbUJBQW1CLEdBQUcsb0JBQW9CLEdBQUcsRUFBRSxDQUN2RCxDQUFDO0lBRUYsSUFBSSxDQUFDRCxNQUFNLENBQUNFLE1BQU0sRUFBRTtRQUNsQixNQUFNTiwwREFBUyxDQUFDO1lBQUMsQ0FBQyxFQUFFRyxPQUFPLENBQUMsY0FBYyxDQUFDO1NBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxJQUFJQyxNQUFNLENBQUNFLE1BQU0sRUFBRTtRQUNqQkYsTUFBTSxDQUFDRyxjQUFjLEVBQUVDLElBQUksRUFBRSxDQUFDO1FBQzlCSixNQUFNLENBQUNHLGNBQWMsR0FBR0gsTUFBTSxDQUFDRSxNQUFNLENBQUNHLFlBQVksQ0FBQztZQUNqREMsUUFBUSxFQUFFLENBQUMsRUFBRVAsT0FBTyxDQUFDLGVBQWUsQ0FBQztZQUNyQ1EsR0FBRyxFQUFFLEtBQUs7WUFDVkMsTUFBTSxFQUFFLENBQUMsRUFBRUMsT0FBTyxHQUFjLEdBQUs7Z0JBQ25DWCxTQUFTLEVBQUVZLE9BQU8sQ0FBQ0QsT0FBTyxDQUFDLENBQUM7Z0JBQzVCRSxPQUFPLENBQUNDLElBQUksQ0FBQ0gsT0FBTyxDQUFDLENBQUM7WUFDeEIsQ0FBQztZQUNESSxRQUFRLEVBQUUsTUFBTTtTQUNqQixDQUFDLENBQUM7UUFDSCxNQUFNYixNQUFNLENBQUNHLGNBQWMsQ0FBQ1csSUFBSSxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVELE9BQU9kLE1BQU0sQ0FBQ0csY0FBYyxDQUFDO0FBQy9CLENBQUM7QUFFTSxNQUFNWSxTQUFTLEdBQUcsT0FDdkJDLEtBQTRCLEVBQzVCQyxTQUFpQixFQUNqQm5CLFNBQXFCLEdBQ2M7SUFDbkMsTUFBTW9CLE1BQU0sR0FBRyxNQUFNckIsU0FBUyxDQUFDQyxTQUFTLENBQUM7SUFDekMsTUFBTXFCLFdBQVcsR0FBMEIsRUFBRTtJQUU3QyxNQUFNQyxPQUFPLENBQUNDLEdBQUcsQ0FDZkwsS0FBSyxDQUFDTSxHQUFHLENBQUMsT0FBTyxDQUFDQyxRQUFRLEVBQUVDLFFBQVEsQ0FBQyxHQUFLO1FBQ3hDLE1BQU1DLFFBQVEsR0FBR2pDLDhDQUFRLENBQUMrQixRQUFRLENBQUM7UUFDbkMsTUFBTUcsT0FBTyxHQUFHLENBQUMsRUFBRWxDLDhDQUFRLENBQUMrQixRQUFRLEVBQUU3Qiw2Q0FBTyxDQUFDNkIsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUVOLFNBQVMsQ0FBQyxDQUFDO1FBRXZFQyxNQUFNLENBQUNTLEVBQUUsQ0FBQyxXQUFXLEVBQUVGLFFBQVEsRUFBRUQsUUFBUSxDQUFDLENBQUM7UUFDM0MsTUFBTU4sTUFBTSxDQUFDVSxHQUFHLENBQUMsSUFBSSxFQUFFSCxRQUFRLEVBQUVDLE9BQU8sQ0FBQyxDQUFDO1FBRTFDUCxXQUFXLENBQUNVLElBQUksQ0FBQztZQUNmbEMsMENBQUksQ0FBQ0YsNkNBQU8sQ0FBQzhCLFFBQVEsQ0FBQyxFQUFFRyxPQUFPLENBQUM7WUFDaENJLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDYixNQUFNLENBQUNTLEVBQUUsQ0FBQyxVQUFVLEVBQUVELE9BQU8sQ0FBQyxDQUFlO1NBQzFELENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUNILENBQUM7SUFFRixPQUFPUCxXQUFXLENBQUM7QUFDckIsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RlZmZtMi8uL3V0aWxzL2ZmbXBlZy9pbmRleC50cz80MjFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTG9jYWxFY2hvIH0gZnJvbSBcImNvbXBvbmVudHMvYXBwcy9UZXJtaW5hbC90eXBlc1wiO1xyXG5pbXBvcnQgeyBiYXNlbmFtZSwgZGlybmFtZSwgZXh0bmFtZSwgam9pbiB9IGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCB0eXBlIHtcclxuICBGRm1wZWdUcmFuc2NvZGVGaWxlLFxyXG4gIElGRm1wZWdJbnN0YW5jZSxcclxuICBJRkZtcGVnTG9nLFxyXG59IGZyb20gXCJ1dGlscy9mZm1wZWcvdHlwZXNcIjtcclxuaW1wb3J0IHsgbG9hZEZpbGVzIH0gZnJvbSBcInV0aWxzL2Z1bmN0aW9uc1wiO1xyXG5cclxuY29uc3QgZ2V0RkZtcGVnID0gYXN5bmMgKGxvY2FsRWNobz86IExvY2FsRWNobyk6IFByb21pc2U8SUZGbXBlZ0luc3RhbmNlPiA9PiB7XHJcbiAgY29uc3QgYmFzZUxpYiA9IGAvUHJvZ3JhbSBGaWxlcy9mZm1wZWcvJHtcclxuICAgIHdpbmRvdy5jcm9zc09yaWdpbklzb2xhdGVkID8gXCJTaGFyZWRBcnJheUJ1ZmZlci9cIiA6IFwiXCJcclxuICB9YDtcclxuXHJcbiAgaWYgKCF3aW5kb3cuRkZtcGVnKSB7XHJcbiAgICBhd2FpdCBsb2FkRmlsZXMoW2Ake2Jhc2VMaWJ9L2ZmbXBlZy5taW4uanNgXSk7XHJcbiAgfVxyXG5cclxuICBpZiAod2luZG93LkZGbXBlZykge1xyXG4gICAgd2luZG93LkZGbXBlZ0luc3RhbmNlPy5leGl0KCk7XHJcbiAgICB3aW5kb3cuRkZtcGVnSW5zdGFuY2UgPSB3aW5kb3cuRkZtcGVnLmNyZWF0ZUZGbXBlZyh7XHJcbiAgICAgIGNvcmVQYXRoOiBgJHtiYXNlTGlifS9mZm1wZWctY29yZS5qc2AsXHJcbiAgICAgIGxvZzogZmFsc2UsXHJcbiAgICAgIGxvZ2dlcjogKHsgbWVzc2FnZSB9OiBJRkZtcGVnTG9nKSA9PiB7XHJcbiAgICAgICAgbG9jYWxFY2hvPy5wcmludGxuKG1lc3NhZ2UpO1xyXG4gICAgICAgIGNvbnNvbGUuaW5mbyhtZXNzYWdlKTtcclxuICAgICAgfSxcclxuICAgICAgbWFpbk5hbWU6IFwibWFpblwiLFxyXG4gICAgfSk7XHJcbiAgICBhd2FpdCB3aW5kb3cuRkZtcGVnSW5zdGFuY2UubG9hZCgpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHdpbmRvdy5GRm1wZWdJbnN0YW5jZTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB0cmFuc2NvZGUgPSBhc3luYyAoXHJcbiAgZmlsZXM6IEZGbXBlZ1RyYW5zY29kZUZpbGVbXSxcclxuICBleHRlbnNpb246IHN0cmluZyxcclxuICBsb2NhbEVjaG8/OiBMb2NhbEVjaG9cclxuKTogUHJvbWlzZTxGRm1wZWdUcmFuc2NvZGVGaWxlW10+ID0+IHtcclxuICBjb25zdCBmZm1wZWcgPSBhd2FpdCBnZXRGRm1wZWcobG9jYWxFY2hvKTtcclxuICBjb25zdCByZXR1cm5GaWxlczogRkZtcGVnVHJhbnNjb2RlRmlsZVtdID0gW107XHJcblxyXG4gIGF3YWl0IFByb21pc2UuYWxsKFxyXG4gICAgZmlsZXMubWFwKGFzeW5jIChbZmlsZU5hbWUsIGZpbGVEYXRhXSkgPT4ge1xyXG4gICAgICBjb25zdCBiYXNlTmFtZSA9IGJhc2VuYW1lKGZpbGVOYW1lKTtcclxuICAgICAgY29uc3QgbmV3TmFtZSA9IGAke2Jhc2VuYW1lKGZpbGVOYW1lLCBleHRuYW1lKGZpbGVOYW1lKSl9LiR7ZXh0ZW5zaW9ufWA7XHJcblxyXG4gICAgICBmZm1wZWcuRlMoXCJ3cml0ZUZpbGVcIiwgYmFzZU5hbWUsIGZpbGVEYXRhKTtcclxuICAgICAgYXdhaXQgZmZtcGVnLnJ1bihcIi1pXCIsIGJhc2VOYW1lLCBuZXdOYW1lKTtcclxuXHJcbiAgICAgIHJldHVybkZpbGVzLnB1c2goW1xyXG4gICAgICAgIGpvaW4oZGlybmFtZShmaWxlTmFtZSksIG5ld05hbWUpLFxyXG4gICAgICAgIEJ1ZmZlci5mcm9tKGZmbXBlZy5GUyhcInJlYWRGaWxlXCIsIG5ld05hbWUpIGFzIFVpbnQ4QXJyYXkpLFxyXG4gICAgICBdKTtcclxuICAgIH0pXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHJldHVybkZpbGVzO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiYmFzZW5hbWUiLCJkaXJuYW1lIiwiZXh0bmFtZSIsImpvaW4iLCJsb2FkRmlsZXMiLCJnZXRGRm1wZWciLCJsb2NhbEVjaG8iLCJiYXNlTGliIiwid2luZG93IiwiY3Jvc3NPcmlnaW5Jc29sYXRlZCIsIkZGbXBlZyIsIkZGbXBlZ0luc3RhbmNlIiwiZXhpdCIsImNyZWF0ZUZGbXBlZyIsImNvcmVQYXRoIiwibG9nIiwibG9nZ2VyIiwibWVzc2FnZSIsInByaW50bG4iLCJjb25zb2xlIiwiaW5mbyIsIm1haW5OYW1lIiwibG9hZCIsInRyYW5zY29kZSIsImZpbGVzIiwiZXh0ZW5zaW9uIiwiZmZtcGVnIiwicmV0dXJuRmlsZXMiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwiZmlsZU5hbWUiLCJmaWxlRGF0YSIsImJhc2VOYW1lIiwibmV3TmFtZSIsIkZTIiwicnVuIiwicHVzaCIsIkJ1ZmZlciIsImZyb20iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/ffmpeg/index.ts\n");

/***/ })

};
;