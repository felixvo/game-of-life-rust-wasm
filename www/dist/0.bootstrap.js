(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/wasm_hello.js":
/*!****************************!*\
  !*** ../pkg/wasm_hello.js ***!
  \****************************/
/*! exports provided: greet, Cell, Universe, __wbg_alert_c76ef920691a7581, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wasm_hello_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm_hello_bg.wasm */ \"../pkg/wasm_hello_bg.wasm\");\n/* harmony import */ var _wasm_hello_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wasm_hello_bg.js */ \"../pkg/wasm_hello_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"greet\", function() { return _wasm_hello_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"greet\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Cell\", function() { return _wasm_hello_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Cell\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Universe\", function() { return _wasm_hello_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Universe\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_alert_c76ef920691a7581\", function() { return _wasm_hello_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_alert_c76ef920691a7581\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return _wasm_hello_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_throw\"]; });\n\n\n\n\n//# sourceURL=webpack:///../pkg/wasm_hello.js?");

/***/ }),

/***/ "../pkg/wasm_hello_bg.js":
/*!*******************************!*\
  !*** ../pkg/wasm_hello_bg.js ***!
  \*******************************/
/*! exports provided: greet, Cell, Universe, __wbg_alert_c76ef920691a7581, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"greet\", function() { return greet; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Cell\", function() { return Cell; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Universe\", function() { return Universe; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_alert_c76ef920691a7581\", function() { return __wbg_alert_c76ef920691a7581; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _wasm_hello_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm_hello_bg.wasm */ \"../pkg/wasm_hello_bg.wasm\");\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _wasm_hello_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_wasm_hello_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length);\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len);\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n/**\n* @param {string} name\n*/\nfunction greet(name) {\n    const ptr0 = passStringToWasm0(name, _wasm_hello_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _wasm_hello_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n    const len0 = WASM_VECTOR_LEN;\n    _wasm_hello_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"greet\"](ptr0, len0);\n}\n\nlet cachegetInt32Memory0 = null;\nfunction getInt32Memory0() {\n    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== _wasm_hello_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetInt32Memory0 = new Int32Array(_wasm_hello_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetInt32Memory0;\n}\n/**\n*/\nconst Cell = Object.freeze({ Dead:0,\"0\":\"Dead\",Alive:1,\"1\":\"Alive\", });\n/**\n*/\nclass Universe {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Universe.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        _wasm_hello_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_universe_free\"](ptr);\n    }\n    /**\n    * @param {number} width\n    * @param {number} height\n    * @returns {Universe}\n    */\n    static new(width, height) {\n        const ret = _wasm_hello_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_new\"](width, height);\n        return Universe.__wrap(ret);\n    }\n    /**\n    * @returns {number}\n    */\n    width() {\n        const ret = _wasm_hello_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_width\"](this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    height() {\n        const ret = _wasm_hello_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_height\"](this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    cells() {\n        const ret = _wasm_hello_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_cells\"](this.ptr);\n        return ret;\n    }\n    /**\n    * @param {number} row\n    * @param {number} col\n    */\n    toggle_cell(row, col) {\n        _wasm_hello_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_toggle_cell\"](this.ptr, row, col);\n    }\n    /**\n    * @param {number} row\n    * @param {number} col\n    */\n    set_alive(row, col) {\n        _wasm_hello_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_set_alive\"](this.ptr, row, col);\n    }\n    /**\n    */\n    tick() {\n        _wasm_hello_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_tick\"](this.ptr);\n    }\n    /**\n    * @returns {string}\n    */\n    render() {\n        try {\n            const retptr = _wasm_hello_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](-16);\n            _wasm_hello_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_render\"](retptr, this.ptr);\n            var r0 = getInt32Memory0()[retptr / 4 + 0];\n            var r1 = getInt32Memory0()[retptr / 4 + 1];\n            return getStringFromWasm0(r0, r1);\n        } finally {\n            _wasm_hello_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](16);\n            _wasm_hello_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](r0, r1);\n        }\n    }\n}\n\nfunction __wbg_alert_c76ef920691a7581(arg0, arg1) {\n    alert(getStringFromWasm0(arg0, arg1));\n};\n\nfunction __wbindgen_throw(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../www/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///../pkg/wasm_hello_bg.js?");

/***/ }),

/***/ "../pkg/wasm_hello_bg.wasm":
/*!*********************************!*\
  !*** ../pkg/wasm_hello_bg.wasm ***!
  \*********************************/
/*! exports provided: memory, greet, __wbg_universe_free, universe_new, universe_width, universe_height, universe_cells, universe_toggle_cell, universe_set_alive, universe_tick, universe_render, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_add_to_stack_pointer, __wbindgen_free */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./wasm_hello_bg.js */ \"../pkg/wasm_hello_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/wasm_hello_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var wasm_hello__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wasm-hello */ \"../pkg/wasm_hello.js\");\n/* harmony import */ var wasm_hello_wasm_hello_bg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wasm-hello/wasm_hello_bg */ \"../pkg/wasm_hello_bg.wasm\");\n\n\n\nconst CELL_SIZE = 10; // px\nconst GRID_COLOR = \"rgba(59,59,59,0.07)\";\nconst DEAD_COLOR = \"#FFFFFF\";\nlet ALIVE_COLOR = \"#e66465\";\nlet speed = document.getElementById('speed').value;\n\nlet aliveCellColorPicker = document.getElementById(\"alive-cell-colorpicker\");\naliveCellColorPicker.addEventListener(\"change\", (event) => {\n    ALIVE_COLOR = event.target.value;\n});\n\nlet width = document.getElementById('width-input').value;\nlet height = document.getElementById('height-input').value;\n\n\nlet universe = wasm_hello__WEBPACK_IMPORTED_MODULE_0__[\"Universe\"].new(width, height);\nconst canvas = document.getElementById(\"game-of-life-canvas\");\n\ncanvas.addEventListener(\"mousedown\", e => {\n    handleClick(e, false)\n});\nmouseMoveWhilstDown(canvas, e => {\n    handleClick(e, true)\n});\n\nconst ctx = canvas.getContext(\"2d\");\n\nfunction handleClick(event, setAlive = false) {\n\n    const boundingRect = canvas.getBoundingClientRect();\n\n    const scaleX = canvas.width / boundingRect.width;\n    const scaleY = canvas.height / boundingRect.height;\n\n    const canvasLeft = (event.clientX - boundingRect.left) * scaleX;\n    const canvasTop = (event.clientY - boundingRect.top) * scaleY;\n\n    const row = Math.min(Math.floor(canvasTop / (CELL_SIZE + 1)), height - 1);\n    const col = Math.min(Math.floor(canvasLeft / (CELL_SIZE + 1)), width - 1);\n\n    if (setAlive) {\n        universe.set_alive(row, col);\n    } else {\n        universe.toggle_cell(row, col);\n    }\n\n    drawGrid();\n    drawCells();\n\n}\n\nconst drawGrid = () => {\n    ctx.beginPath();\n    ctx.strokeStyle = GRID_COLOR;\n\n    // Vertical lines.\n    for (let i = 0; i <= width; i++) {\n        ctx.moveTo(i * (CELL_SIZE + 1) + 1, 0);\n        ctx.lineTo(i * (CELL_SIZE + 1) + 1, (CELL_SIZE + 1) * height + 1);\n    }\n\n    // Horizontal lines.\n    for (let j = 0; j <= height; j++) {\n        ctx.moveTo(0, j * (CELL_SIZE + 1) + 1);\n        ctx.lineTo((CELL_SIZE + 1) * width + 1, j * (CELL_SIZE + 1) + 1);\n    }\n\n    ctx.stroke();\n};\n\nconst getIndex = (row, column) => {\n    return row * width + column;\n};\n\n\nconst drawCells = () => {\n    const cellsPtr = universe.cells();\n    const cells = new Uint8Array(wasm_hello_wasm_hello_bg__WEBPACK_IMPORTED_MODULE_1__[\"memory\"].buffer, cellsPtr, width * height);\n\n    ctx.beginPath();\n\n    for (let row = 0; row < height; row++) {\n        for (let col = 0; col < width; col++) {\n            const idx = getIndex(row, col);\n\n            ctx.fillStyle = cells[idx] === wasm_hello__WEBPACK_IMPORTED_MODULE_0__[\"Cell\"].Dead\n                ? DEAD_COLOR\n                : ALIVE_COLOR;\n\n            ctx.fillRect(\n                col * (CELL_SIZE + 1) + 1,\n                row * (CELL_SIZE + 1) + 1,\n                CELL_SIZE,\n                CELL_SIZE\n            );\n        }\n    }\n\n    ctx.stroke();\n};\n\n\nlet renderLoopInterval = null;\n\nfunction renderLoop() {\n    universe.tick();\n\n    drawCells();\n    drawGrid();\n    renderLoopInterval = setTimeout(() => {\n        requestAnimationFrame(renderLoop)\n    }, 1000 - speed);\n};\n\nconst isPaused = () => {\n    return renderLoopInterval === null;\n};\nconst playPauseButton = document.getElementById(\"play-pause\");\n\nconst play = () => {\n    playPauseButton.textContent = \"⏸\";\n    renderLoop();\n};\n\nconst pause = () => {\n    playPauseButton.textContent = \"▶\";\n    clearInterval(renderLoopInterval);\n    renderLoopInterval = null;\n};\n\nplayPauseButton.addEventListener(\"click\", event => {\n    if (isPaused()) {\n        play();\n    } else {\n        pause();\n    }\n});\n\ndocument\n    .getElementById(\"speed\")\n    .addEventListener(\"change\", (event) => {\n        speed = event.target.value;\n    });\n\nfunction mouseMoveWhilstDown(target, whileMove) {\n    var endMove = function () {\n        window.removeEventListener(\"mousemove\", whileMove);\n        window.removeEventListener(\"mouseup\", endMove);\n    };\n\n    target.addEventListener(\"mousedown\", function (event) {\n        event.stopPropagation(); // remove if you do want it to propagate ..\n        window.addEventListener(\"mousemove\", whileMove);\n        window.addEventListener(\"mouseup\", endMove);\n    });\n}\n\nfunction setup() {\n    pause()\n    width = document.getElementById('width-input').value;\n    height = document.getElementById('height-input').value;\n    universe = wasm_hello__WEBPACK_IMPORTED_MODULE_0__[\"Universe\"].new(width, height);\n    canvas.height = (CELL_SIZE + 1) * height + 1;\n    canvas.width = (CELL_SIZE + 1) * width + 1;\n    drawGrid();\n    drawCells();\n}\n\ndocument.getElementById('reset-btn').onclick = setup;\n\nfunction firstSetup() {\n    pause()\n    width = document.getElementById('width-input').value;\n    height = document.getElementById('height-input').value;\n    universe = wasm_hello__WEBPACK_IMPORTED_MODULE_0__[\"Universe\"].new(width, height);\n    //\n    universe.toggle_cell(20, 10)\n    universe.toggle_cell(20, 11)\n    universe.toggle_cell(20, 12)\n    universe.toggle_cell(19, 12)\n    universe.toggle_cell(18, 11)\n    //\n    universe.toggle_cell(30, 20)\n    universe.toggle_cell(30, 21)\n    universe.toggle_cell(30, 22)\n    universe.toggle_cell(29, 22)\n    universe.toggle_cell(28, 21)\n    //\n    universe.toggle_cell(40, 30)\n    universe.toggle_cell(40, 31)\n    universe.toggle_cell(40, 32)\n    universe.toggle_cell(39, 32)\n    universe.toggle_cell(38, 31)\n    //\n    canvas.height = (CELL_SIZE + 1) * height + 1;\n    canvas.width = (CELL_SIZE + 1) * width + 1;\n    drawGrid();\n    drawCells();\n}\n\nfirstSetup()\nplay();\n\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ })

}]);