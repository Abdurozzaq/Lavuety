(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~AdminHome~AdminLayout~AdminProfileSettings~AdminSettings~Error404Page~ForgotPassword~Landing~76aa62f1"],{

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify/src/components/VSheet/VSheet.sass":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/dist/cjs.js??ref--10-2!./node_modules/vuetify/src/components/VSheet/VSheet.sass ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".theme--light.v-sheet {\n  background-color: #FFFFFF;\n  border-color: #FFFFFF;\n  color: rgba(0, 0, 0, 0.87);\n}\n.theme--light.v-sheet--outlined {\n  border: thin solid rgba(0, 0, 0, 0.12);\n}\n\n.theme--dark.v-sheet {\n  background-color: #1E1E1E;\n  border-color: #1E1E1E;\n  color: #FFFFFF;\n}\n.theme--dark.v-sheet--outlined {\n  border: thin solid rgba(255, 255, 255, 0.12);\n}\n\n.v-sheet {\n  border-radius: 0;\n}\n.v-sheet:not(.v-sheet--outlined) {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n.v-sheet.v-sheet--shaped {\n  border-radius: 24px 0;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify/src/directives/ripple/VRipple.sass":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/dist/cjs.js??ref--10-2!./node_modules/vuetify/src/directives/ripple/VRipple.sass ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".v-ripple__container {\n  color: inherit;\n  border-radius: inherit;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  overflow: hidden;\n  z-index: 0;\n  pointer-events: none;\n  contain: strict;\n}\n.v-ripple__animation {\n  color: inherit;\n  position: absolute;\n  top: 0;\n  left: 0;\n  border-radius: 50%;\n  background: currentColor;\n  opacity: 0;\n  pointer-events: none;\n  overflow: hidden;\n  will-change: transform, opacity;\n}\n.v-ripple__animation--enter {\n  transition: none;\n}\n.v-ripple__animation--in {\n  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.v-ripple__animation--out {\n  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify/src/styles/main.sass":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/dist/cjs.js??ref--10-2!./node_modules/vuetify/src/styles/main.sass ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n@keyframes v-shake {\n  59% {\n    margin-left: 0;\n  }\n  60%, 80% {\n    margin-left: 2px;\n  }\n  70%, 90% {\n    margin-left: -2px;\n  }\n}\n.v-application .black {\n  background-color: #000000 !important;\n  border-color: #000000 !important;\n}\n\n.v-application .black--text {\n  color: #000000 !important;\n  caret-color: #000000 !important;\n}\n\n.v-application .white {\n  background-color: #FFFFFF !important;\n  border-color: #FFFFFF !important;\n}\n\n.v-application .white--text {\n  color: #FFFFFF !important;\n  caret-color: #FFFFFF !important;\n}\n\n.v-application .transparent {\n  background-color: transparent !important;\n  border-color: transparent !important;\n}\n\n.v-application .transparent--text {\n  color: transparent !important;\n  caret-color: transparent !important;\n}\n\n.v-application .red {\n  background-color: #F44336 !important;\n  border-color: #F44336 !important;\n}\n\n.v-application .red--text {\n  color: #F44336 !important;\n  caret-color: #F44336 !important;\n}\n\n.v-application .red.lighten-5 {\n  background-color: #FFEBEE !important;\n  border-color: #FFEBEE !important;\n}\n\n.v-application .red--text.text--lighten-5 {\n  color: #FFEBEE !important;\n  caret-color: #FFEBEE !important;\n}\n\n.v-application .red.lighten-4 {\n  background-color: #FFCDD2 !important;\n  border-color: #FFCDD2 !important;\n}\n\n.v-application .red--text.text--lighten-4 {\n  color: #FFCDD2 !important;\n  caret-color: #FFCDD2 !important;\n}\n\n.v-application .red.lighten-3 {\n  background-color: #EF9A9A !important;\n  border-color: #EF9A9A !important;\n}\n\n.v-application .red--text.text--lighten-3 {\n  color: #EF9A9A !important;\n  caret-color: #EF9A9A !important;\n}\n\n.v-application .red.lighten-2 {\n  background-color: #E57373 !important;\n  border-color: #E57373 !important;\n}\n\n.v-application .red--text.text--lighten-2 {\n  color: #E57373 !important;\n  caret-color: #E57373 !important;\n}\n\n.v-application .red.lighten-1 {\n  background-color: #EF5350 !important;\n  border-color: #EF5350 !important;\n}\n\n.v-application .red--text.text--lighten-1 {\n  color: #EF5350 !important;\n  caret-color: #EF5350 !important;\n}\n\n.v-application .red.darken-1 {\n  background-color: #E53935 !important;\n  border-color: #E53935 !important;\n}\n\n.v-application .red--text.text--darken-1 {\n  color: #E53935 !important;\n  caret-color: #E53935 !important;\n}\n\n.v-application .red.darken-2 {\n  background-color: #D32F2F !important;\n  border-color: #D32F2F !important;\n}\n\n.v-application .red--text.text--darken-2 {\n  color: #D32F2F !important;\n  caret-color: #D32F2F !important;\n}\n\n.v-application .red.darken-3 {\n  background-color: #C62828 !important;\n  border-color: #C62828 !important;\n}\n\n.v-application .red--text.text--darken-3 {\n  color: #C62828 !important;\n  caret-color: #C62828 !important;\n}\n\n.v-application .red.darken-4 {\n  background-color: #B71C1C !important;\n  border-color: #B71C1C !important;\n}\n\n.v-application .red--text.text--darken-4 {\n  color: #B71C1C !important;\n  caret-color: #B71C1C !important;\n}\n\n.v-application .red.accent-1 {\n  background-color: #FF8A80 !important;\n  border-color: #FF8A80 !important;\n}\n\n.v-application .red--text.text--accent-1 {\n  color: #FF8A80 !important;\n  caret-color: #FF8A80 !important;\n}\n\n.v-application .red.accent-2 {\n  background-color: #FF5252 !important;\n  border-color: #FF5252 !important;\n}\n\n.v-application .red--text.text--accent-2 {\n  color: #FF5252 !important;\n  caret-color: #FF5252 !important;\n}\n\n.v-application .red.accent-3 {\n  background-color: #FF1744 !important;\n  border-color: #FF1744 !important;\n}\n\n.v-application .red--text.text--accent-3 {\n  color: #FF1744 !important;\n  caret-color: #FF1744 !important;\n}\n\n.v-application .red.accent-4 {\n  background-color: #D50000 !important;\n  border-color: #D50000 !important;\n}\n\n.v-application .red--text.text--accent-4 {\n  color: #D50000 !important;\n  caret-color: #D50000 !important;\n}\n\n.v-application .pink {\n  background-color: #e91e63 !important;\n  border-color: #e91e63 !important;\n}\n\n.v-application .pink--text {\n  color: #e91e63 !important;\n  caret-color: #e91e63 !important;\n}\n\n.v-application .pink.lighten-5 {\n  background-color: #fce4ec !important;\n  border-color: #fce4ec !important;\n}\n\n.v-application .pink--text.text--lighten-5 {\n  color: #fce4ec !important;\n  caret-color: #fce4ec !important;\n}\n\n.v-application .pink.lighten-4 {\n  background-color: #f8bbd0 !important;\n  border-color: #f8bbd0 !important;\n}\n\n.v-application .pink--text.text--lighten-4 {\n  color: #f8bbd0 !important;\n  caret-color: #f8bbd0 !important;\n}\n\n.v-application .pink.lighten-3 {\n  background-color: #f48fb1 !important;\n  border-color: #f48fb1 !important;\n}\n\n.v-application .pink--text.text--lighten-3 {\n  color: #f48fb1 !important;\n  caret-color: #f48fb1 !important;\n}\n\n.v-application .pink.lighten-2 {\n  background-color: #f06292 !important;\n  border-color: #f06292 !important;\n}\n\n.v-application .pink--text.text--lighten-2 {\n  color: #f06292 !important;\n  caret-color: #f06292 !important;\n}\n\n.v-application .pink.lighten-1 {\n  background-color: #ec407a !important;\n  border-color: #ec407a !important;\n}\n\n.v-application .pink--text.text--lighten-1 {\n  color: #ec407a !important;\n  caret-color: #ec407a !important;\n}\n\n.v-application .pink.darken-1 {\n  background-color: #d81b60 !important;\n  border-color: #d81b60 !important;\n}\n\n.v-application .pink--text.text--darken-1 {\n  color: #d81b60 !important;\n  caret-color: #d81b60 !important;\n}\n\n.v-application .pink.darken-2 {\n  background-color: #c2185b !important;\n  border-color: #c2185b !important;\n}\n\n.v-application .pink--text.text--darken-2 {\n  color: #c2185b !important;\n  caret-color: #c2185b !important;\n}\n\n.v-application .pink.darken-3 {\n  background-color: #ad1457 !important;\n  border-color: #ad1457 !important;\n}\n\n.v-application .pink--text.text--darken-3 {\n  color: #ad1457 !important;\n  caret-color: #ad1457 !important;\n}\n\n.v-application .pink.darken-4 {\n  background-color: #880e4f !important;\n  border-color: #880e4f !important;\n}\n\n.v-application .pink--text.text--darken-4 {\n  color: #880e4f !important;\n  caret-color: #880e4f !important;\n}\n\n.v-application .pink.accent-1 {\n  background-color: #ff80ab !important;\n  border-color: #ff80ab !important;\n}\n\n.v-application .pink--text.text--accent-1 {\n  color: #ff80ab !important;\n  caret-color: #ff80ab !important;\n}\n\n.v-application .pink.accent-2 {\n  background-color: #ff4081 !important;\n  border-color: #ff4081 !important;\n}\n\n.v-application .pink--text.text--accent-2 {\n  color: #ff4081 !important;\n  caret-color: #ff4081 !important;\n}\n\n.v-application .pink.accent-3 {\n  background-color: #f50057 !important;\n  border-color: #f50057 !important;\n}\n\n.v-application .pink--text.text--accent-3 {\n  color: #f50057 !important;\n  caret-color: #f50057 !important;\n}\n\n.v-application .pink.accent-4 {\n  background-color: #c51162 !important;\n  border-color: #c51162 !important;\n}\n\n.v-application .pink--text.text--accent-4 {\n  color: #c51162 !important;\n  caret-color: #c51162 !important;\n}\n\n.v-application .purple {\n  background-color: #9c27b0 !important;\n  border-color: #9c27b0 !important;\n}\n\n.v-application .purple--text {\n  color: #9c27b0 !important;\n  caret-color: #9c27b0 !important;\n}\n\n.v-application .purple.lighten-5 {\n  background-color: #f3e5f5 !important;\n  border-color: #f3e5f5 !important;\n}\n\n.v-application .purple--text.text--lighten-5 {\n  color: #f3e5f5 !important;\n  caret-color: #f3e5f5 !important;\n}\n\n.v-application .purple.lighten-4 {\n  background-color: #e1bee7 !important;\n  border-color: #e1bee7 !important;\n}\n\n.v-application .purple--text.text--lighten-4 {\n  color: #e1bee7 !important;\n  caret-color: #e1bee7 !important;\n}\n\n.v-application .purple.lighten-3 {\n  background-color: #ce93d8 !important;\n  border-color: #ce93d8 !important;\n}\n\n.v-application .purple--text.text--lighten-3 {\n  color: #ce93d8 !important;\n  caret-color: #ce93d8 !important;\n}\n\n.v-application .purple.lighten-2 {\n  background-color: #ba68c8 !important;\n  border-color: #ba68c8 !important;\n}\n\n.v-application .purple--text.text--lighten-2 {\n  color: #ba68c8 !important;\n  caret-color: #ba68c8 !important;\n}\n\n.v-application .purple.lighten-1 {\n  background-color: #ab47bc !important;\n  border-color: #ab47bc !important;\n}\n\n.v-application .purple--text.text--lighten-1 {\n  color: #ab47bc !important;\n  caret-color: #ab47bc !important;\n}\n\n.v-application .purple.darken-1 {\n  background-color: #8e24aa !important;\n  border-color: #8e24aa !important;\n}\n\n.v-application .purple--text.text--darken-1 {\n  color: #8e24aa !important;\n  caret-color: #8e24aa !important;\n}\n\n.v-application .purple.darken-2 {\n  background-color: #7b1fa2 !important;\n  border-color: #7b1fa2 !important;\n}\n\n.v-application .purple--text.text--darken-2 {\n  color: #7b1fa2 !important;\n  caret-color: #7b1fa2 !important;\n}\n\n.v-application .purple.darken-3 {\n  background-color: #6a1b9a !important;\n  border-color: #6a1b9a !important;\n}\n\n.v-application .purple--text.text--darken-3 {\n  color: #6a1b9a !important;\n  caret-color: #6a1b9a !important;\n}\n\n.v-application .purple.darken-4 {\n  background-color: #4a148c !important;\n  border-color: #4a148c !important;\n}\n\n.v-application .purple--text.text--darken-4 {\n  color: #4a148c !important;\n  caret-color: #4a148c !important;\n}\n\n.v-application .purple.accent-1 {\n  background-color: #ea80fc !important;\n  border-color: #ea80fc !important;\n}\n\n.v-application .purple--text.text--accent-1 {\n  color: #ea80fc !important;\n  caret-color: #ea80fc !important;\n}\n\n.v-application .purple.accent-2 {\n  background-color: #e040fb !important;\n  border-color: #e040fb !important;\n}\n\n.v-application .purple--text.text--accent-2 {\n  color: #e040fb !important;\n  caret-color: #e040fb !important;\n}\n\n.v-application .purple.accent-3 {\n  background-color: #d500f9 !important;\n  border-color: #d500f9 !important;\n}\n\n.v-application .purple--text.text--accent-3 {\n  color: #d500f9 !important;\n  caret-color: #d500f9 !important;\n}\n\n.v-application .purple.accent-4 {\n  background-color: #aa00ff !important;\n  border-color: #aa00ff !important;\n}\n\n.v-application .purple--text.text--accent-4 {\n  color: #aa00ff !important;\n  caret-color: #aa00ff !important;\n}\n\n.v-application .deep-purple {\n  background-color: #673ab7 !important;\n  border-color: #673ab7 !important;\n}\n\n.v-application .deep-purple--text {\n  color: #673ab7 !important;\n  caret-color: #673ab7 !important;\n}\n\n.v-application .deep-purple.lighten-5 {\n  background-color: #ede7f6 !important;\n  border-color: #ede7f6 !important;\n}\n\n.v-application .deep-purple--text.text--lighten-5 {\n  color: #ede7f6 !important;\n  caret-color: #ede7f6 !important;\n}\n\n.v-application .deep-purple.lighten-4 {\n  background-color: #d1c4e9 !important;\n  border-color: #d1c4e9 !important;\n}\n\n.v-application .deep-purple--text.text--lighten-4 {\n  color: #d1c4e9 !important;\n  caret-color: #d1c4e9 !important;\n}\n\n.v-application .deep-purple.lighten-3 {\n  background-color: #b39ddb !important;\n  border-color: #b39ddb !important;\n}\n\n.v-application .deep-purple--text.text--lighten-3 {\n  color: #b39ddb !important;\n  caret-color: #b39ddb !important;\n}\n\n.v-application .deep-purple.lighten-2 {\n  background-color: #9575cd !important;\n  border-color: #9575cd !important;\n}\n\n.v-application .deep-purple--text.text--lighten-2 {\n  color: #9575cd !important;\n  caret-color: #9575cd !important;\n}\n\n.v-application .deep-purple.lighten-1 {\n  background-color: #7e57c2 !important;\n  border-color: #7e57c2 !important;\n}\n\n.v-application .deep-purple--text.text--lighten-1 {\n  color: #7e57c2 !important;\n  caret-color: #7e57c2 !important;\n}\n\n.v-application .deep-purple.darken-1 {\n  background-color: #5e35b1 !important;\n  border-color: #5e35b1 !important;\n}\n\n.v-application .deep-purple--text.text--darken-1 {\n  color: #5e35b1 !important;\n  caret-color: #5e35b1 !important;\n}\n\n.v-application .deep-purple.darken-2 {\n  background-color: #512da8 !important;\n  border-color: #512da8 !important;\n}\n\n.v-application .deep-purple--text.text--darken-2 {\n  color: #512da8 !important;\n  caret-color: #512da8 !important;\n}\n\n.v-application .deep-purple.darken-3 {\n  background-color: #4527a0 !important;\n  border-color: #4527a0 !important;\n}\n\n.v-application .deep-purple--text.text--darken-3 {\n  color: #4527a0 !important;\n  caret-color: #4527a0 !important;\n}\n\n.v-application .deep-purple.darken-4 {\n  background-color: #311b92 !important;\n  border-color: #311b92 !important;\n}\n\n.v-application .deep-purple--text.text--darken-4 {\n  color: #311b92 !important;\n  caret-color: #311b92 !important;\n}\n\n.v-application .deep-purple.accent-1 {\n  background-color: #b388ff !important;\n  border-color: #b388ff !important;\n}\n\n.v-application .deep-purple--text.text--accent-1 {\n  color: #b388ff !important;\n  caret-color: #b388ff !important;\n}\n\n.v-application .deep-purple.accent-2 {\n  background-color: #7c4dff !important;\n  border-color: #7c4dff !important;\n}\n\n.v-application .deep-purple--text.text--accent-2 {\n  color: #7c4dff !important;\n  caret-color: #7c4dff !important;\n}\n\n.v-application .deep-purple.accent-3 {\n  background-color: #651fff !important;\n  border-color: #651fff !important;\n}\n\n.v-application .deep-purple--text.text--accent-3 {\n  color: #651fff !important;\n  caret-color: #651fff !important;\n}\n\n.v-application .deep-purple.accent-4 {\n  background-color: #6200ea !important;\n  border-color: #6200ea !important;\n}\n\n.v-application .deep-purple--text.text--accent-4 {\n  color: #6200ea !important;\n  caret-color: #6200ea !important;\n}\n\n.v-application .indigo {\n  background-color: #3f51b5 !important;\n  border-color: #3f51b5 !important;\n}\n\n.v-application .indigo--text {\n  color: #3f51b5 !important;\n  caret-color: #3f51b5 !important;\n}\n\n.v-application .indigo.lighten-5 {\n  background-color: #e8eaf6 !important;\n  border-color: #e8eaf6 !important;\n}\n\n.v-application .indigo--text.text--lighten-5 {\n  color: #e8eaf6 !important;\n  caret-color: #e8eaf6 !important;\n}\n\n.v-application .indigo.lighten-4 {\n  background-color: #c5cae9 !important;\n  border-color: #c5cae9 !important;\n}\n\n.v-application .indigo--text.text--lighten-4 {\n  color: #c5cae9 !important;\n  caret-color: #c5cae9 !important;\n}\n\n.v-application .indigo.lighten-3 {\n  background-color: #9fa8da !important;\n  border-color: #9fa8da !important;\n}\n\n.v-application .indigo--text.text--lighten-3 {\n  color: #9fa8da !important;\n  caret-color: #9fa8da !important;\n}\n\n.v-application .indigo.lighten-2 {\n  background-color: #7986cb !important;\n  border-color: #7986cb !important;\n}\n\n.v-application .indigo--text.text--lighten-2 {\n  color: #7986cb !important;\n  caret-color: #7986cb !important;\n}\n\n.v-application .indigo.lighten-1 {\n  background-color: #5c6bc0 !important;\n  border-color: #5c6bc0 !important;\n}\n\n.v-application .indigo--text.text--lighten-1 {\n  color: #5c6bc0 !important;\n  caret-color: #5c6bc0 !important;\n}\n\n.v-application .indigo.darken-1 {\n  background-color: #3949ab !important;\n  border-color: #3949ab !important;\n}\n\n.v-application .indigo--text.text--darken-1 {\n  color: #3949ab !important;\n  caret-color: #3949ab !important;\n}\n\n.v-application .indigo.darken-2 {\n  background-color: #303f9f !important;\n  border-color: #303f9f !important;\n}\n\n.v-application .indigo--text.text--darken-2 {\n  color: #303f9f !important;\n  caret-color: #303f9f !important;\n}\n\n.v-application .indigo.darken-3 {\n  background-color: #283593 !important;\n  border-color: #283593 !important;\n}\n\n.v-application .indigo--text.text--darken-3 {\n  color: #283593 !important;\n  caret-color: #283593 !important;\n}\n\n.v-application .indigo.darken-4 {\n  background-color: #1a237e !important;\n  border-color: #1a237e !important;\n}\n\n.v-application .indigo--text.text--darken-4 {\n  color: #1a237e !important;\n  caret-color: #1a237e !important;\n}\n\n.v-application .indigo.accent-1 {\n  background-color: #8c9eff !important;\n  border-color: #8c9eff !important;\n}\n\n.v-application .indigo--text.text--accent-1 {\n  color: #8c9eff !important;\n  caret-color: #8c9eff !important;\n}\n\n.v-application .indigo.accent-2 {\n  background-color: #536dfe !important;\n  border-color: #536dfe !important;\n}\n\n.v-application .indigo--text.text--accent-2 {\n  color: #536dfe !important;\n  caret-color: #536dfe !important;\n}\n\n.v-application .indigo.accent-3 {\n  background-color: #3d5afe !important;\n  border-color: #3d5afe !important;\n}\n\n.v-application .indigo--text.text--accent-3 {\n  color: #3d5afe !important;\n  caret-color: #3d5afe !important;\n}\n\n.v-application .indigo.accent-4 {\n  background-color: #304ffe !important;\n  border-color: #304ffe !important;\n}\n\n.v-application .indigo--text.text--accent-4 {\n  color: #304ffe !important;\n  caret-color: #304ffe !important;\n}\n\n.v-application .blue {\n  background-color: #2196F3 !important;\n  border-color: #2196F3 !important;\n}\n\n.v-application .blue--text {\n  color: #2196F3 !important;\n  caret-color: #2196F3 !important;\n}\n\n.v-application .blue.lighten-5 {\n  background-color: #E3F2FD !important;\n  border-color: #E3F2FD !important;\n}\n\n.v-application .blue--text.text--lighten-5 {\n  color: #E3F2FD !important;\n  caret-color: #E3F2FD !important;\n}\n\n.v-application .blue.lighten-4 {\n  background-color: #BBDEFB !important;\n  border-color: #BBDEFB !important;\n}\n\n.v-application .blue--text.text--lighten-4 {\n  color: #BBDEFB !important;\n  caret-color: #BBDEFB !important;\n}\n\n.v-application .blue.lighten-3 {\n  background-color: #90CAF9 !important;\n  border-color: #90CAF9 !important;\n}\n\n.v-application .blue--text.text--lighten-3 {\n  color: #90CAF9 !important;\n  caret-color: #90CAF9 !important;\n}\n\n.v-application .blue.lighten-2 {\n  background-color: #64B5F6 !important;\n  border-color: #64B5F6 !important;\n}\n\n.v-application .blue--text.text--lighten-2 {\n  color: #64B5F6 !important;\n  caret-color: #64B5F6 !important;\n}\n\n.v-application .blue.lighten-1 {\n  background-color: #42A5F5 !important;\n  border-color: #42A5F5 !important;\n}\n\n.v-application .blue--text.text--lighten-1 {\n  color: #42A5F5 !important;\n  caret-color: #42A5F5 !important;\n}\n\n.v-application .blue.darken-1 {\n  background-color: #1E88E5 !important;\n  border-color: #1E88E5 !important;\n}\n\n.v-application .blue--text.text--darken-1 {\n  color: #1E88E5 !important;\n  caret-color: #1E88E5 !important;\n}\n\n.v-application .blue.darken-2 {\n  background-color: #1976D2 !important;\n  border-color: #1976D2 !important;\n}\n\n.v-application .blue--text.text--darken-2 {\n  color: #1976D2 !important;\n  caret-color: #1976D2 !important;\n}\n\n.v-application .blue.darken-3 {\n  background-color: #1565C0 !important;\n  border-color: #1565C0 !important;\n}\n\n.v-application .blue--text.text--darken-3 {\n  color: #1565C0 !important;\n  caret-color: #1565C0 !important;\n}\n\n.v-application .blue.darken-4 {\n  background-color: #0D47A1 !important;\n  border-color: #0D47A1 !important;\n}\n\n.v-application .blue--text.text--darken-4 {\n  color: #0D47A1 !important;\n  caret-color: #0D47A1 !important;\n}\n\n.v-application .blue.accent-1 {\n  background-color: #82B1FF !important;\n  border-color: #82B1FF !important;\n}\n\n.v-application .blue--text.text--accent-1 {\n  color: #82B1FF !important;\n  caret-color: #82B1FF !important;\n}\n\n.v-application .blue.accent-2 {\n  background-color: #448AFF !important;\n  border-color: #448AFF !important;\n}\n\n.v-application .blue--text.text--accent-2 {\n  color: #448AFF !important;\n  caret-color: #448AFF !important;\n}\n\n.v-application .blue.accent-3 {\n  background-color: #2979FF !important;\n  border-color: #2979FF !important;\n}\n\n.v-application .blue--text.text--accent-3 {\n  color: #2979FF !important;\n  caret-color: #2979FF !important;\n}\n\n.v-application .blue.accent-4 {\n  background-color: #2962FF !important;\n  border-color: #2962FF !important;\n}\n\n.v-application .blue--text.text--accent-4 {\n  color: #2962FF !important;\n  caret-color: #2962FF !important;\n}\n\n.v-application .light-blue {\n  background-color: #03a9f4 !important;\n  border-color: #03a9f4 !important;\n}\n\n.v-application .light-blue--text {\n  color: #03a9f4 !important;\n  caret-color: #03a9f4 !important;\n}\n\n.v-application .light-blue.lighten-5 {\n  background-color: #e1f5fe !important;\n  border-color: #e1f5fe !important;\n}\n\n.v-application .light-blue--text.text--lighten-5 {\n  color: #e1f5fe !important;\n  caret-color: #e1f5fe !important;\n}\n\n.v-application .light-blue.lighten-4 {\n  background-color: #b3e5fc !important;\n  border-color: #b3e5fc !important;\n}\n\n.v-application .light-blue--text.text--lighten-4 {\n  color: #b3e5fc !important;\n  caret-color: #b3e5fc !important;\n}\n\n.v-application .light-blue.lighten-3 {\n  background-color: #81d4fa !important;\n  border-color: #81d4fa !important;\n}\n\n.v-application .light-blue--text.text--lighten-3 {\n  color: #81d4fa !important;\n  caret-color: #81d4fa !important;\n}\n\n.v-application .light-blue.lighten-2 {\n  background-color: #4fc3f7 !important;\n  border-color: #4fc3f7 !important;\n}\n\n.v-application .light-blue--text.text--lighten-2 {\n  color: #4fc3f7 !important;\n  caret-color: #4fc3f7 !important;\n}\n\n.v-application .light-blue.lighten-1 {\n  background-color: #29b6f6 !important;\n  border-color: #29b6f6 !important;\n}\n\n.v-application .light-blue--text.text--lighten-1 {\n  color: #29b6f6 !important;\n  caret-color: #29b6f6 !important;\n}\n\n.v-application .light-blue.darken-1 {\n  background-color: #039be5 !important;\n  border-color: #039be5 !important;\n}\n\n.v-application .light-blue--text.text--darken-1 {\n  color: #039be5 !important;\n  caret-color: #039be5 !important;\n}\n\n.v-application .light-blue.darken-2 {\n  background-color: #0288d1 !important;\n  border-color: #0288d1 !important;\n}\n\n.v-application .light-blue--text.text--darken-2 {\n  color: #0288d1 !important;\n  caret-color: #0288d1 !important;\n}\n\n.v-application .light-blue.darken-3 {\n  background-color: #0277bd !important;\n  border-color: #0277bd !important;\n}\n\n.v-application .light-blue--text.text--darken-3 {\n  color: #0277bd !important;\n  caret-color: #0277bd !important;\n}\n\n.v-application .light-blue.darken-4 {\n  background-color: #01579b !important;\n  border-color: #01579b !important;\n}\n\n.v-application .light-blue--text.text--darken-4 {\n  color: #01579b !important;\n  caret-color: #01579b !important;\n}\n\n.v-application .light-blue.accent-1 {\n  background-color: #80d8ff !important;\n  border-color: #80d8ff !important;\n}\n\n.v-application .light-blue--text.text--accent-1 {\n  color: #80d8ff !important;\n  caret-color: #80d8ff !important;\n}\n\n.v-application .light-blue.accent-2 {\n  background-color: #40c4ff !important;\n  border-color: #40c4ff !important;\n}\n\n.v-application .light-blue--text.text--accent-2 {\n  color: #40c4ff !important;\n  caret-color: #40c4ff !important;\n}\n\n.v-application .light-blue.accent-3 {\n  background-color: #00b0ff !important;\n  border-color: #00b0ff !important;\n}\n\n.v-application .light-blue--text.text--accent-3 {\n  color: #00b0ff !important;\n  caret-color: #00b0ff !important;\n}\n\n.v-application .light-blue.accent-4 {\n  background-color: #0091ea !important;\n  border-color: #0091ea !important;\n}\n\n.v-application .light-blue--text.text--accent-4 {\n  color: #0091ea !important;\n  caret-color: #0091ea !important;\n}\n\n.v-application .cyan {\n  background-color: #00bcd4 !important;\n  border-color: #00bcd4 !important;\n}\n\n.v-application .cyan--text {\n  color: #00bcd4 !important;\n  caret-color: #00bcd4 !important;\n}\n\n.v-application .cyan.lighten-5 {\n  background-color: #e0f7fa !important;\n  border-color: #e0f7fa !important;\n}\n\n.v-application .cyan--text.text--lighten-5 {\n  color: #e0f7fa !important;\n  caret-color: #e0f7fa !important;\n}\n\n.v-application .cyan.lighten-4 {\n  background-color: #b2ebf2 !important;\n  border-color: #b2ebf2 !important;\n}\n\n.v-application .cyan--text.text--lighten-4 {\n  color: #b2ebf2 !important;\n  caret-color: #b2ebf2 !important;\n}\n\n.v-application .cyan.lighten-3 {\n  background-color: #80deea !important;\n  border-color: #80deea !important;\n}\n\n.v-application .cyan--text.text--lighten-3 {\n  color: #80deea !important;\n  caret-color: #80deea !important;\n}\n\n.v-application .cyan.lighten-2 {\n  background-color: #4dd0e1 !important;\n  border-color: #4dd0e1 !important;\n}\n\n.v-application .cyan--text.text--lighten-2 {\n  color: #4dd0e1 !important;\n  caret-color: #4dd0e1 !important;\n}\n\n.v-application .cyan.lighten-1 {\n  background-color: #26c6da !important;\n  border-color: #26c6da !important;\n}\n\n.v-application .cyan--text.text--lighten-1 {\n  color: #26c6da !important;\n  caret-color: #26c6da !important;\n}\n\n.v-application .cyan.darken-1 {\n  background-color: #00acc1 !important;\n  border-color: #00acc1 !important;\n}\n\n.v-application .cyan--text.text--darken-1 {\n  color: #00acc1 !important;\n  caret-color: #00acc1 !important;\n}\n\n.v-application .cyan.darken-2 {\n  background-color: #0097a7 !important;\n  border-color: #0097a7 !important;\n}\n\n.v-application .cyan--text.text--darken-2 {\n  color: #0097a7 !important;\n  caret-color: #0097a7 !important;\n}\n\n.v-application .cyan.darken-3 {\n  background-color: #00838f !important;\n  border-color: #00838f !important;\n}\n\n.v-application .cyan--text.text--darken-3 {\n  color: #00838f !important;\n  caret-color: #00838f !important;\n}\n\n.v-application .cyan.darken-4 {\n  background-color: #006064 !important;\n  border-color: #006064 !important;\n}\n\n.v-application .cyan--text.text--darken-4 {\n  color: #006064 !important;\n  caret-color: #006064 !important;\n}\n\n.v-application .cyan.accent-1 {\n  background-color: #84ffff !important;\n  border-color: #84ffff !important;\n}\n\n.v-application .cyan--text.text--accent-1 {\n  color: #84ffff !important;\n  caret-color: #84ffff !important;\n}\n\n.v-application .cyan.accent-2 {\n  background-color: #18ffff !important;\n  border-color: #18ffff !important;\n}\n\n.v-application .cyan--text.text--accent-2 {\n  color: #18ffff !important;\n  caret-color: #18ffff !important;\n}\n\n.v-application .cyan.accent-3 {\n  background-color: #00e5ff !important;\n  border-color: #00e5ff !important;\n}\n\n.v-application .cyan--text.text--accent-3 {\n  color: #00e5ff !important;\n  caret-color: #00e5ff !important;\n}\n\n.v-application .cyan.accent-4 {\n  background-color: #00b8d4 !important;\n  border-color: #00b8d4 !important;\n}\n\n.v-application .cyan--text.text--accent-4 {\n  color: #00b8d4 !important;\n  caret-color: #00b8d4 !important;\n}\n\n.v-application .teal {\n  background-color: #009688 !important;\n  border-color: #009688 !important;\n}\n\n.v-application .teal--text {\n  color: #009688 !important;\n  caret-color: #009688 !important;\n}\n\n.v-application .teal.lighten-5 {\n  background-color: #e0f2f1 !important;\n  border-color: #e0f2f1 !important;\n}\n\n.v-application .teal--text.text--lighten-5 {\n  color: #e0f2f1 !important;\n  caret-color: #e0f2f1 !important;\n}\n\n.v-application .teal.lighten-4 {\n  background-color: #b2dfdb !important;\n  border-color: #b2dfdb !important;\n}\n\n.v-application .teal--text.text--lighten-4 {\n  color: #b2dfdb !important;\n  caret-color: #b2dfdb !important;\n}\n\n.v-application .teal.lighten-3 {\n  background-color: #80cbc4 !important;\n  border-color: #80cbc4 !important;\n}\n\n.v-application .teal--text.text--lighten-3 {\n  color: #80cbc4 !important;\n  caret-color: #80cbc4 !important;\n}\n\n.v-application .teal.lighten-2 {\n  background-color: #4db6ac !important;\n  border-color: #4db6ac !important;\n}\n\n.v-application .teal--text.text--lighten-2 {\n  color: #4db6ac !important;\n  caret-color: #4db6ac !important;\n}\n\n.v-application .teal.lighten-1 {\n  background-color: #26a69a !important;\n  border-color: #26a69a !important;\n}\n\n.v-application .teal--text.text--lighten-1 {\n  color: #26a69a !important;\n  caret-color: #26a69a !important;\n}\n\n.v-application .teal.darken-1 {\n  background-color: #00897b !important;\n  border-color: #00897b !important;\n}\n\n.v-application .teal--text.text--darken-1 {\n  color: #00897b !important;\n  caret-color: #00897b !important;\n}\n\n.v-application .teal.darken-2 {\n  background-color: #00796b !important;\n  border-color: #00796b !important;\n}\n\n.v-application .teal--text.text--darken-2 {\n  color: #00796b !important;\n  caret-color: #00796b !important;\n}\n\n.v-application .teal.darken-3 {\n  background-color: #00695c !important;\n  border-color: #00695c !important;\n}\n\n.v-application .teal--text.text--darken-3 {\n  color: #00695c !important;\n  caret-color: #00695c !important;\n}\n\n.v-application .teal.darken-4 {\n  background-color: #004d40 !important;\n  border-color: #004d40 !important;\n}\n\n.v-application .teal--text.text--darken-4 {\n  color: #004d40 !important;\n  caret-color: #004d40 !important;\n}\n\n.v-application .teal.accent-1 {\n  background-color: #a7ffeb !important;\n  border-color: #a7ffeb !important;\n}\n\n.v-application .teal--text.text--accent-1 {\n  color: #a7ffeb !important;\n  caret-color: #a7ffeb !important;\n}\n\n.v-application .teal.accent-2 {\n  background-color: #64ffda !important;\n  border-color: #64ffda !important;\n}\n\n.v-application .teal--text.text--accent-2 {\n  color: #64ffda !important;\n  caret-color: #64ffda !important;\n}\n\n.v-application .teal.accent-3 {\n  background-color: #1de9b6 !important;\n  border-color: #1de9b6 !important;\n}\n\n.v-application .teal--text.text--accent-3 {\n  color: #1de9b6 !important;\n  caret-color: #1de9b6 !important;\n}\n\n.v-application .teal.accent-4 {\n  background-color: #00bfa5 !important;\n  border-color: #00bfa5 !important;\n}\n\n.v-application .teal--text.text--accent-4 {\n  color: #00bfa5 !important;\n  caret-color: #00bfa5 !important;\n}\n\n.v-application .green {\n  background-color: #4CAF50 !important;\n  border-color: #4CAF50 !important;\n}\n\n.v-application .green--text {\n  color: #4CAF50 !important;\n  caret-color: #4CAF50 !important;\n}\n\n.v-application .green.lighten-5 {\n  background-color: #E8F5E9 !important;\n  border-color: #E8F5E9 !important;\n}\n\n.v-application .green--text.text--lighten-5 {\n  color: #E8F5E9 !important;\n  caret-color: #E8F5E9 !important;\n}\n\n.v-application .green.lighten-4 {\n  background-color: #C8E6C9 !important;\n  border-color: #C8E6C9 !important;\n}\n\n.v-application .green--text.text--lighten-4 {\n  color: #C8E6C9 !important;\n  caret-color: #C8E6C9 !important;\n}\n\n.v-application .green.lighten-3 {\n  background-color: #A5D6A7 !important;\n  border-color: #A5D6A7 !important;\n}\n\n.v-application .green--text.text--lighten-3 {\n  color: #A5D6A7 !important;\n  caret-color: #A5D6A7 !important;\n}\n\n.v-application .green.lighten-2 {\n  background-color: #81C784 !important;\n  border-color: #81C784 !important;\n}\n\n.v-application .green--text.text--lighten-2 {\n  color: #81C784 !important;\n  caret-color: #81C784 !important;\n}\n\n.v-application .green.lighten-1 {\n  background-color: #66BB6A !important;\n  border-color: #66BB6A !important;\n}\n\n.v-application .green--text.text--lighten-1 {\n  color: #66BB6A !important;\n  caret-color: #66BB6A !important;\n}\n\n.v-application .green.darken-1 {\n  background-color: #43A047 !important;\n  border-color: #43A047 !important;\n}\n\n.v-application .green--text.text--darken-1 {\n  color: #43A047 !important;\n  caret-color: #43A047 !important;\n}\n\n.v-application .green.darken-2 {\n  background-color: #388E3C !important;\n  border-color: #388E3C !important;\n}\n\n.v-application .green--text.text--darken-2 {\n  color: #388E3C !important;\n  caret-color: #388E3C !important;\n}\n\n.v-application .green.darken-3 {\n  background-color: #2E7D32 !important;\n  border-color: #2E7D32 !important;\n}\n\n.v-application .green--text.text--darken-3 {\n  color: #2E7D32 !important;\n  caret-color: #2E7D32 !important;\n}\n\n.v-application .green.darken-4 {\n  background-color: #1B5E20 !important;\n  border-color: #1B5E20 !important;\n}\n\n.v-application .green--text.text--darken-4 {\n  color: #1B5E20 !important;\n  caret-color: #1B5E20 !important;\n}\n\n.v-application .green.accent-1 {\n  background-color: #B9F6CA !important;\n  border-color: #B9F6CA !important;\n}\n\n.v-application .green--text.text--accent-1 {\n  color: #B9F6CA !important;\n  caret-color: #B9F6CA !important;\n}\n\n.v-application .green.accent-2 {\n  background-color: #69F0AE !important;\n  border-color: #69F0AE !important;\n}\n\n.v-application .green--text.text--accent-2 {\n  color: #69F0AE !important;\n  caret-color: #69F0AE !important;\n}\n\n.v-application .green.accent-3 {\n  background-color: #00E676 !important;\n  border-color: #00E676 !important;\n}\n\n.v-application .green--text.text--accent-3 {\n  color: #00E676 !important;\n  caret-color: #00E676 !important;\n}\n\n.v-application .green.accent-4 {\n  background-color: #00C853 !important;\n  border-color: #00C853 !important;\n}\n\n.v-application .green--text.text--accent-4 {\n  color: #00C853 !important;\n  caret-color: #00C853 !important;\n}\n\n.v-application .light-green {\n  background-color: #8bc34a !important;\n  border-color: #8bc34a !important;\n}\n\n.v-application .light-green--text {\n  color: #8bc34a !important;\n  caret-color: #8bc34a !important;\n}\n\n.v-application .light-green.lighten-5 {\n  background-color: #f1f8e9 !important;\n  border-color: #f1f8e9 !important;\n}\n\n.v-application .light-green--text.text--lighten-5 {\n  color: #f1f8e9 !important;\n  caret-color: #f1f8e9 !important;\n}\n\n.v-application .light-green.lighten-4 {\n  background-color: #dcedc8 !important;\n  border-color: #dcedc8 !important;\n}\n\n.v-application .light-green--text.text--lighten-4 {\n  color: #dcedc8 !important;\n  caret-color: #dcedc8 !important;\n}\n\n.v-application .light-green.lighten-3 {\n  background-color: #c5e1a5 !important;\n  border-color: #c5e1a5 !important;\n}\n\n.v-application .light-green--text.text--lighten-3 {\n  color: #c5e1a5 !important;\n  caret-color: #c5e1a5 !important;\n}\n\n.v-application .light-green.lighten-2 {\n  background-color: #aed581 !important;\n  border-color: #aed581 !important;\n}\n\n.v-application .light-green--text.text--lighten-2 {\n  color: #aed581 !important;\n  caret-color: #aed581 !important;\n}\n\n.v-application .light-green.lighten-1 {\n  background-color: #9ccc65 !important;\n  border-color: #9ccc65 !important;\n}\n\n.v-application .light-green--text.text--lighten-1 {\n  color: #9ccc65 !important;\n  caret-color: #9ccc65 !important;\n}\n\n.v-application .light-green.darken-1 {\n  background-color: #7cb342 !important;\n  border-color: #7cb342 !important;\n}\n\n.v-application .light-green--text.text--darken-1 {\n  color: #7cb342 !important;\n  caret-color: #7cb342 !important;\n}\n\n.v-application .light-green.darken-2 {\n  background-color: #689f38 !important;\n  border-color: #689f38 !important;\n}\n\n.v-application .light-green--text.text--darken-2 {\n  color: #689f38 !important;\n  caret-color: #689f38 !important;\n}\n\n.v-application .light-green.darken-3 {\n  background-color: #558b2f !important;\n  border-color: #558b2f !important;\n}\n\n.v-application .light-green--text.text--darken-3 {\n  color: #558b2f !important;\n  caret-color: #558b2f !important;\n}\n\n.v-application .light-green.darken-4 {\n  background-color: #33691e !important;\n  border-color: #33691e !important;\n}\n\n.v-application .light-green--text.text--darken-4 {\n  color: #33691e !important;\n  caret-color: #33691e !important;\n}\n\n.v-application .light-green.accent-1 {\n  background-color: #ccff90 !important;\n  border-color: #ccff90 !important;\n}\n\n.v-application .light-green--text.text--accent-1 {\n  color: #ccff90 !important;\n  caret-color: #ccff90 !important;\n}\n\n.v-application .light-green.accent-2 {\n  background-color: #b2ff59 !important;\n  border-color: #b2ff59 !important;\n}\n\n.v-application .light-green--text.text--accent-2 {\n  color: #b2ff59 !important;\n  caret-color: #b2ff59 !important;\n}\n\n.v-application .light-green.accent-3 {\n  background-color: #76ff03 !important;\n  border-color: #76ff03 !important;\n}\n\n.v-application .light-green--text.text--accent-3 {\n  color: #76ff03 !important;\n  caret-color: #76ff03 !important;\n}\n\n.v-application .light-green.accent-4 {\n  background-color: #64dd17 !important;\n  border-color: #64dd17 !important;\n}\n\n.v-application .light-green--text.text--accent-4 {\n  color: #64dd17 !important;\n  caret-color: #64dd17 !important;\n}\n\n.v-application .lime {\n  background-color: #cddc39 !important;\n  border-color: #cddc39 !important;\n}\n\n.v-application .lime--text {\n  color: #cddc39 !important;\n  caret-color: #cddc39 !important;\n}\n\n.v-application .lime.lighten-5 {\n  background-color: #f9fbe7 !important;\n  border-color: #f9fbe7 !important;\n}\n\n.v-application .lime--text.text--lighten-5 {\n  color: #f9fbe7 !important;\n  caret-color: #f9fbe7 !important;\n}\n\n.v-application .lime.lighten-4 {\n  background-color: #f0f4c3 !important;\n  border-color: #f0f4c3 !important;\n}\n\n.v-application .lime--text.text--lighten-4 {\n  color: #f0f4c3 !important;\n  caret-color: #f0f4c3 !important;\n}\n\n.v-application .lime.lighten-3 {\n  background-color: #e6ee9c !important;\n  border-color: #e6ee9c !important;\n}\n\n.v-application .lime--text.text--lighten-3 {\n  color: #e6ee9c !important;\n  caret-color: #e6ee9c !important;\n}\n\n.v-application .lime.lighten-2 {\n  background-color: #dce775 !important;\n  border-color: #dce775 !important;\n}\n\n.v-application .lime--text.text--lighten-2 {\n  color: #dce775 !important;\n  caret-color: #dce775 !important;\n}\n\n.v-application .lime.lighten-1 {\n  background-color: #d4e157 !important;\n  border-color: #d4e157 !important;\n}\n\n.v-application .lime--text.text--lighten-1 {\n  color: #d4e157 !important;\n  caret-color: #d4e157 !important;\n}\n\n.v-application .lime.darken-1 {\n  background-color: #c0ca33 !important;\n  border-color: #c0ca33 !important;\n}\n\n.v-application .lime--text.text--darken-1 {\n  color: #c0ca33 !important;\n  caret-color: #c0ca33 !important;\n}\n\n.v-application .lime.darken-2 {\n  background-color: #afb42b !important;\n  border-color: #afb42b !important;\n}\n\n.v-application .lime--text.text--darken-2 {\n  color: #afb42b !important;\n  caret-color: #afb42b !important;\n}\n\n.v-application .lime.darken-3 {\n  background-color: #9e9d24 !important;\n  border-color: #9e9d24 !important;\n}\n\n.v-application .lime--text.text--darken-3 {\n  color: #9e9d24 !important;\n  caret-color: #9e9d24 !important;\n}\n\n.v-application .lime.darken-4 {\n  background-color: #827717 !important;\n  border-color: #827717 !important;\n}\n\n.v-application .lime--text.text--darken-4 {\n  color: #827717 !important;\n  caret-color: #827717 !important;\n}\n\n.v-application .lime.accent-1 {\n  background-color: #f4ff81 !important;\n  border-color: #f4ff81 !important;\n}\n\n.v-application .lime--text.text--accent-1 {\n  color: #f4ff81 !important;\n  caret-color: #f4ff81 !important;\n}\n\n.v-application .lime.accent-2 {\n  background-color: #eeff41 !important;\n  border-color: #eeff41 !important;\n}\n\n.v-application .lime--text.text--accent-2 {\n  color: #eeff41 !important;\n  caret-color: #eeff41 !important;\n}\n\n.v-application .lime.accent-3 {\n  background-color: #c6ff00 !important;\n  border-color: #c6ff00 !important;\n}\n\n.v-application .lime--text.text--accent-3 {\n  color: #c6ff00 !important;\n  caret-color: #c6ff00 !important;\n}\n\n.v-application .lime.accent-4 {\n  background-color: #aeea00 !important;\n  border-color: #aeea00 !important;\n}\n\n.v-application .lime--text.text--accent-4 {\n  color: #aeea00 !important;\n  caret-color: #aeea00 !important;\n}\n\n.v-application .yellow {\n  background-color: #ffeb3b !important;\n  border-color: #ffeb3b !important;\n}\n\n.v-application .yellow--text {\n  color: #ffeb3b !important;\n  caret-color: #ffeb3b !important;\n}\n\n.v-application .yellow.lighten-5 {\n  background-color: #fffde7 !important;\n  border-color: #fffde7 !important;\n}\n\n.v-application .yellow--text.text--lighten-5 {\n  color: #fffde7 !important;\n  caret-color: #fffde7 !important;\n}\n\n.v-application .yellow.lighten-4 {\n  background-color: #fff9c4 !important;\n  border-color: #fff9c4 !important;\n}\n\n.v-application .yellow--text.text--lighten-4 {\n  color: #fff9c4 !important;\n  caret-color: #fff9c4 !important;\n}\n\n.v-application .yellow.lighten-3 {\n  background-color: #fff59d !important;\n  border-color: #fff59d !important;\n}\n\n.v-application .yellow--text.text--lighten-3 {\n  color: #fff59d !important;\n  caret-color: #fff59d !important;\n}\n\n.v-application .yellow.lighten-2 {\n  background-color: #fff176 !important;\n  border-color: #fff176 !important;\n}\n\n.v-application .yellow--text.text--lighten-2 {\n  color: #fff176 !important;\n  caret-color: #fff176 !important;\n}\n\n.v-application .yellow.lighten-1 {\n  background-color: #ffee58 !important;\n  border-color: #ffee58 !important;\n}\n\n.v-application .yellow--text.text--lighten-1 {\n  color: #ffee58 !important;\n  caret-color: #ffee58 !important;\n}\n\n.v-application .yellow.darken-1 {\n  background-color: #fdd835 !important;\n  border-color: #fdd835 !important;\n}\n\n.v-application .yellow--text.text--darken-1 {\n  color: #fdd835 !important;\n  caret-color: #fdd835 !important;\n}\n\n.v-application .yellow.darken-2 {\n  background-color: #fbc02d !important;\n  border-color: #fbc02d !important;\n}\n\n.v-application .yellow--text.text--darken-2 {\n  color: #fbc02d !important;\n  caret-color: #fbc02d !important;\n}\n\n.v-application .yellow.darken-3 {\n  background-color: #f9a825 !important;\n  border-color: #f9a825 !important;\n}\n\n.v-application .yellow--text.text--darken-3 {\n  color: #f9a825 !important;\n  caret-color: #f9a825 !important;\n}\n\n.v-application .yellow.darken-4 {\n  background-color: #f57f17 !important;\n  border-color: #f57f17 !important;\n}\n\n.v-application .yellow--text.text--darken-4 {\n  color: #f57f17 !important;\n  caret-color: #f57f17 !important;\n}\n\n.v-application .yellow.accent-1 {\n  background-color: #ffff8d !important;\n  border-color: #ffff8d !important;\n}\n\n.v-application .yellow--text.text--accent-1 {\n  color: #ffff8d !important;\n  caret-color: #ffff8d !important;\n}\n\n.v-application .yellow.accent-2 {\n  background-color: #ffff00 !important;\n  border-color: #ffff00 !important;\n}\n\n.v-application .yellow--text.text--accent-2 {\n  color: #ffff00 !important;\n  caret-color: #ffff00 !important;\n}\n\n.v-application .yellow.accent-3 {\n  background-color: #ffea00 !important;\n  border-color: #ffea00 !important;\n}\n\n.v-application .yellow--text.text--accent-3 {\n  color: #ffea00 !important;\n  caret-color: #ffea00 !important;\n}\n\n.v-application .yellow.accent-4 {\n  background-color: #ffd600 !important;\n  border-color: #ffd600 !important;\n}\n\n.v-application .yellow--text.text--accent-4 {\n  color: #ffd600 !important;\n  caret-color: #ffd600 !important;\n}\n\n.v-application .amber {\n  background-color: #ffc107 !important;\n  border-color: #ffc107 !important;\n}\n\n.v-application .amber--text {\n  color: #ffc107 !important;\n  caret-color: #ffc107 !important;\n}\n\n.v-application .amber.lighten-5 {\n  background-color: #fff8e1 !important;\n  border-color: #fff8e1 !important;\n}\n\n.v-application .amber--text.text--lighten-5 {\n  color: #fff8e1 !important;\n  caret-color: #fff8e1 !important;\n}\n\n.v-application .amber.lighten-4 {\n  background-color: #ffecb3 !important;\n  border-color: #ffecb3 !important;\n}\n\n.v-application .amber--text.text--lighten-4 {\n  color: #ffecb3 !important;\n  caret-color: #ffecb3 !important;\n}\n\n.v-application .amber.lighten-3 {\n  background-color: #ffe082 !important;\n  border-color: #ffe082 !important;\n}\n\n.v-application .amber--text.text--lighten-3 {\n  color: #ffe082 !important;\n  caret-color: #ffe082 !important;\n}\n\n.v-application .amber.lighten-2 {\n  background-color: #ffd54f !important;\n  border-color: #ffd54f !important;\n}\n\n.v-application .amber--text.text--lighten-2 {\n  color: #ffd54f !important;\n  caret-color: #ffd54f !important;\n}\n\n.v-application .amber.lighten-1 {\n  background-color: #ffca28 !important;\n  border-color: #ffca28 !important;\n}\n\n.v-application .amber--text.text--lighten-1 {\n  color: #ffca28 !important;\n  caret-color: #ffca28 !important;\n}\n\n.v-application .amber.darken-1 {\n  background-color: #ffb300 !important;\n  border-color: #ffb300 !important;\n}\n\n.v-application .amber--text.text--darken-1 {\n  color: #ffb300 !important;\n  caret-color: #ffb300 !important;\n}\n\n.v-application .amber.darken-2 {\n  background-color: #ffa000 !important;\n  border-color: #ffa000 !important;\n}\n\n.v-application .amber--text.text--darken-2 {\n  color: #ffa000 !important;\n  caret-color: #ffa000 !important;\n}\n\n.v-application .amber.darken-3 {\n  background-color: #ff8f00 !important;\n  border-color: #ff8f00 !important;\n}\n\n.v-application .amber--text.text--darken-3 {\n  color: #ff8f00 !important;\n  caret-color: #ff8f00 !important;\n}\n\n.v-application .amber.darken-4 {\n  background-color: #ff6f00 !important;\n  border-color: #ff6f00 !important;\n}\n\n.v-application .amber--text.text--darken-4 {\n  color: #ff6f00 !important;\n  caret-color: #ff6f00 !important;\n}\n\n.v-application .amber.accent-1 {\n  background-color: #ffe57f !important;\n  border-color: #ffe57f !important;\n}\n\n.v-application .amber--text.text--accent-1 {\n  color: #ffe57f !important;\n  caret-color: #ffe57f !important;\n}\n\n.v-application .amber.accent-2 {\n  background-color: #ffd740 !important;\n  border-color: #ffd740 !important;\n}\n\n.v-application .amber--text.text--accent-2 {\n  color: #ffd740 !important;\n  caret-color: #ffd740 !important;\n}\n\n.v-application .amber.accent-3 {\n  background-color: #ffc400 !important;\n  border-color: #ffc400 !important;\n}\n\n.v-application .amber--text.text--accent-3 {\n  color: #ffc400 !important;\n  caret-color: #ffc400 !important;\n}\n\n.v-application .amber.accent-4 {\n  background-color: #ffab00 !important;\n  border-color: #ffab00 !important;\n}\n\n.v-application .amber--text.text--accent-4 {\n  color: #ffab00 !important;\n  caret-color: #ffab00 !important;\n}\n\n.v-application .orange {\n  background-color: #ff9800 !important;\n  border-color: #ff9800 !important;\n}\n\n.v-application .orange--text {\n  color: #ff9800 !important;\n  caret-color: #ff9800 !important;\n}\n\n.v-application .orange.lighten-5 {\n  background-color: #fff3e0 !important;\n  border-color: #fff3e0 !important;\n}\n\n.v-application .orange--text.text--lighten-5 {\n  color: #fff3e0 !important;\n  caret-color: #fff3e0 !important;\n}\n\n.v-application .orange.lighten-4 {\n  background-color: #ffe0b2 !important;\n  border-color: #ffe0b2 !important;\n}\n\n.v-application .orange--text.text--lighten-4 {\n  color: #ffe0b2 !important;\n  caret-color: #ffe0b2 !important;\n}\n\n.v-application .orange.lighten-3 {\n  background-color: #ffcc80 !important;\n  border-color: #ffcc80 !important;\n}\n\n.v-application .orange--text.text--lighten-3 {\n  color: #ffcc80 !important;\n  caret-color: #ffcc80 !important;\n}\n\n.v-application .orange.lighten-2 {\n  background-color: #ffb74d !important;\n  border-color: #ffb74d !important;\n}\n\n.v-application .orange--text.text--lighten-2 {\n  color: #ffb74d !important;\n  caret-color: #ffb74d !important;\n}\n\n.v-application .orange.lighten-1 {\n  background-color: #ffa726 !important;\n  border-color: #ffa726 !important;\n}\n\n.v-application .orange--text.text--lighten-1 {\n  color: #ffa726 !important;\n  caret-color: #ffa726 !important;\n}\n\n.v-application .orange.darken-1 {\n  background-color: #fb8c00 !important;\n  border-color: #fb8c00 !important;\n}\n\n.v-application .orange--text.text--darken-1 {\n  color: #fb8c00 !important;\n  caret-color: #fb8c00 !important;\n}\n\n.v-application .orange.darken-2 {\n  background-color: #f57c00 !important;\n  border-color: #f57c00 !important;\n}\n\n.v-application .orange--text.text--darken-2 {\n  color: #f57c00 !important;\n  caret-color: #f57c00 !important;\n}\n\n.v-application .orange.darken-3 {\n  background-color: #ef6c00 !important;\n  border-color: #ef6c00 !important;\n}\n\n.v-application .orange--text.text--darken-3 {\n  color: #ef6c00 !important;\n  caret-color: #ef6c00 !important;\n}\n\n.v-application .orange.darken-4 {\n  background-color: #e65100 !important;\n  border-color: #e65100 !important;\n}\n\n.v-application .orange--text.text--darken-4 {\n  color: #e65100 !important;\n  caret-color: #e65100 !important;\n}\n\n.v-application .orange.accent-1 {\n  background-color: #ffd180 !important;\n  border-color: #ffd180 !important;\n}\n\n.v-application .orange--text.text--accent-1 {\n  color: #ffd180 !important;\n  caret-color: #ffd180 !important;\n}\n\n.v-application .orange.accent-2 {\n  background-color: #ffab40 !important;\n  border-color: #ffab40 !important;\n}\n\n.v-application .orange--text.text--accent-2 {\n  color: #ffab40 !important;\n  caret-color: #ffab40 !important;\n}\n\n.v-application .orange.accent-3 {\n  background-color: #ff9100 !important;\n  border-color: #ff9100 !important;\n}\n\n.v-application .orange--text.text--accent-3 {\n  color: #ff9100 !important;\n  caret-color: #ff9100 !important;\n}\n\n.v-application .orange.accent-4 {\n  background-color: #ff6d00 !important;\n  border-color: #ff6d00 !important;\n}\n\n.v-application .orange--text.text--accent-4 {\n  color: #ff6d00 !important;\n  caret-color: #ff6d00 !important;\n}\n\n.v-application .deep-orange {\n  background-color: #ff5722 !important;\n  border-color: #ff5722 !important;\n}\n\n.v-application .deep-orange--text {\n  color: #ff5722 !important;\n  caret-color: #ff5722 !important;\n}\n\n.v-application .deep-orange.lighten-5 {\n  background-color: #fbe9e7 !important;\n  border-color: #fbe9e7 !important;\n}\n\n.v-application .deep-orange--text.text--lighten-5 {\n  color: #fbe9e7 !important;\n  caret-color: #fbe9e7 !important;\n}\n\n.v-application .deep-orange.lighten-4 {\n  background-color: #ffccbc !important;\n  border-color: #ffccbc !important;\n}\n\n.v-application .deep-orange--text.text--lighten-4 {\n  color: #ffccbc !important;\n  caret-color: #ffccbc !important;\n}\n\n.v-application .deep-orange.lighten-3 {\n  background-color: #ffab91 !important;\n  border-color: #ffab91 !important;\n}\n\n.v-application .deep-orange--text.text--lighten-3 {\n  color: #ffab91 !important;\n  caret-color: #ffab91 !important;\n}\n\n.v-application .deep-orange.lighten-2 {\n  background-color: #ff8a65 !important;\n  border-color: #ff8a65 !important;\n}\n\n.v-application .deep-orange--text.text--lighten-2 {\n  color: #ff8a65 !important;\n  caret-color: #ff8a65 !important;\n}\n\n.v-application .deep-orange.lighten-1 {\n  background-color: #ff7043 !important;\n  border-color: #ff7043 !important;\n}\n\n.v-application .deep-orange--text.text--lighten-1 {\n  color: #ff7043 !important;\n  caret-color: #ff7043 !important;\n}\n\n.v-application .deep-orange.darken-1 {\n  background-color: #f4511e !important;\n  border-color: #f4511e !important;\n}\n\n.v-application .deep-orange--text.text--darken-1 {\n  color: #f4511e !important;\n  caret-color: #f4511e !important;\n}\n\n.v-application .deep-orange.darken-2 {\n  background-color: #e64a19 !important;\n  border-color: #e64a19 !important;\n}\n\n.v-application .deep-orange--text.text--darken-2 {\n  color: #e64a19 !important;\n  caret-color: #e64a19 !important;\n}\n\n.v-application .deep-orange.darken-3 {\n  background-color: #d84315 !important;\n  border-color: #d84315 !important;\n}\n\n.v-application .deep-orange--text.text--darken-3 {\n  color: #d84315 !important;\n  caret-color: #d84315 !important;\n}\n\n.v-application .deep-orange.darken-4 {\n  background-color: #bf360c !important;\n  border-color: #bf360c !important;\n}\n\n.v-application .deep-orange--text.text--darken-4 {\n  color: #bf360c !important;\n  caret-color: #bf360c !important;\n}\n\n.v-application .deep-orange.accent-1 {\n  background-color: #ff9e80 !important;\n  border-color: #ff9e80 !important;\n}\n\n.v-application .deep-orange--text.text--accent-1 {\n  color: #ff9e80 !important;\n  caret-color: #ff9e80 !important;\n}\n\n.v-application .deep-orange.accent-2 {\n  background-color: #ff6e40 !important;\n  border-color: #ff6e40 !important;\n}\n\n.v-application .deep-orange--text.text--accent-2 {\n  color: #ff6e40 !important;\n  caret-color: #ff6e40 !important;\n}\n\n.v-application .deep-orange.accent-3 {\n  background-color: #ff3d00 !important;\n  border-color: #ff3d00 !important;\n}\n\n.v-application .deep-orange--text.text--accent-3 {\n  color: #ff3d00 !important;\n  caret-color: #ff3d00 !important;\n}\n\n.v-application .deep-orange.accent-4 {\n  background-color: #dd2c00 !important;\n  border-color: #dd2c00 !important;\n}\n\n.v-application .deep-orange--text.text--accent-4 {\n  color: #dd2c00 !important;\n  caret-color: #dd2c00 !important;\n}\n\n.v-application .brown {\n  background-color: #795548 !important;\n  border-color: #795548 !important;\n}\n\n.v-application .brown--text {\n  color: #795548 !important;\n  caret-color: #795548 !important;\n}\n\n.v-application .brown.lighten-5 {\n  background-color: #efebe9 !important;\n  border-color: #efebe9 !important;\n}\n\n.v-application .brown--text.text--lighten-5 {\n  color: #efebe9 !important;\n  caret-color: #efebe9 !important;\n}\n\n.v-application .brown.lighten-4 {\n  background-color: #d7ccc8 !important;\n  border-color: #d7ccc8 !important;\n}\n\n.v-application .brown--text.text--lighten-4 {\n  color: #d7ccc8 !important;\n  caret-color: #d7ccc8 !important;\n}\n\n.v-application .brown.lighten-3 {\n  background-color: #bcaaa4 !important;\n  border-color: #bcaaa4 !important;\n}\n\n.v-application .brown--text.text--lighten-3 {\n  color: #bcaaa4 !important;\n  caret-color: #bcaaa4 !important;\n}\n\n.v-application .brown.lighten-2 {\n  background-color: #a1887f !important;\n  border-color: #a1887f !important;\n}\n\n.v-application .brown--text.text--lighten-2 {\n  color: #a1887f !important;\n  caret-color: #a1887f !important;\n}\n\n.v-application .brown.lighten-1 {\n  background-color: #8d6e63 !important;\n  border-color: #8d6e63 !important;\n}\n\n.v-application .brown--text.text--lighten-1 {\n  color: #8d6e63 !important;\n  caret-color: #8d6e63 !important;\n}\n\n.v-application .brown.darken-1 {\n  background-color: #6d4c41 !important;\n  border-color: #6d4c41 !important;\n}\n\n.v-application .brown--text.text--darken-1 {\n  color: #6d4c41 !important;\n  caret-color: #6d4c41 !important;\n}\n\n.v-application .brown.darken-2 {\n  background-color: #5d4037 !important;\n  border-color: #5d4037 !important;\n}\n\n.v-application .brown--text.text--darken-2 {\n  color: #5d4037 !important;\n  caret-color: #5d4037 !important;\n}\n\n.v-application .brown.darken-3 {\n  background-color: #4e342e !important;\n  border-color: #4e342e !important;\n}\n\n.v-application .brown--text.text--darken-3 {\n  color: #4e342e !important;\n  caret-color: #4e342e !important;\n}\n\n.v-application .brown.darken-4 {\n  background-color: #3e2723 !important;\n  border-color: #3e2723 !important;\n}\n\n.v-application .brown--text.text--darken-4 {\n  color: #3e2723 !important;\n  caret-color: #3e2723 !important;\n}\n\n.v-application .blue-grey {\n  background-color: #607d8b !important;\n  border-color: #607d8b !important;\n}\n\n.v-application .blue-grey--text {\n  color: #607d8b !important;\n  caret-color: #607d8b !important;\n}\n\n.v-application .blue-grey.lighten-5 {\n  background-color: #eceff1 !important;\n  border-color: #eceff1 !important;\n}\n\n.v-application .blue-grey--text.text--lighten-5 {\n  color: #eceff1 !important;\n  caret-color: #eceff1 !important;\n}\n\n.v-application .blue-grey.lighten-4 {\n  background-color: #cfd8dc !important;\n  border-color: #cfd8dc !important;\n}\n\n.v-application .blue-grey--text.text--lighten-4 {\n  color: #cfd8dc !important;\n  caret-color: #cfd8dc !important;\n}\n\n.v-application .blue-grey.lighten-3 {\n  background-color: #b0bec5 !important;\n  border-color: #b0bec5 !important;\n}\n\n.v-application .blue-grey--text.text--lighten-3 {\n  color: #b0bec5 !important;\n  caret-color: #b0bec5 !important;\n}\n\n.v-application .blue-grey.lighten-2 {\n  background-color: #90a4ae !important;\n  border-color: #90a4ae !important;\n}\n\n.v-application .blue-grey--text.text--lighten-2 {\n  color: #90a4ae !important;\n  caret-color: #90a4ae !important;\n}\n\n.v-application .blue-grey.lighten-1 {\n  background-color: #78909c !important;\n  border-color: #78909c !important;\n}\n\n.v-application .blue-grey--text.text--lighten-1 {\n  color: #78909c !important;\n  caret-color: #78909c !important;\n}\n\n.v-application .blue-grey.darken-1 {\n  background-color: #546e7a !important;\n  border-color: #546e7a !important;\n}\n\n.v-application .blue-grey--text.text--darken-1 {\n  color: #546e7a !important;\n  caret-color: #546e7a !important;\n}\n\n.v-application .blue-grey.darken-2 {\n  background-color: #455a64 !important;\n  border-color: #455a64 !important;\n}\n\n.v-application .blue-grey--text.text--darken-2 {\n  color: #455a64 !important;\n  caret-color: #455a64 !important;\n}\n\n.v-application .blue-grey.darken-3 {\n  background-color: #37474f !important;\n  border-color: #37474f !important;\n}\n\n.v-application .blue-grey--text.text--darken-3 {\n  color: #37474f !important;\n  caret-color: #37474f !important;\n}\n\n.v-application .blue-grey.darken-4 {\n  background-color: #263238 !important;\n  border-color: #263238 !important;\n}\n\n.v-application .blue-grey--text.text--darken-4 {\n  color: #263238 !important;\n  caret-color: #263238 !important;\n}\n\n.v-application .grey {\n  background-color: #9e9e9e !important;\n  border-color: #9e9e9e !important;\n}\n\n.v-application .grey--text {\n  color: #9e9e9e !important;\n  caret-color: #9e9e9e !important;\n}\n\n.v-application .grey.lighten-5 {\n  background-color: #fafafa !important;\n  border-color: #fafafa !important;\n}\n\n.v-application .grey--text.text--lighten-5 {\n  color: #fafafa !important;\n  caret-color: #fafafa !important;\n}\n\n.v-application .grey.lighten-4 {\n  background-color: #f5f5f5 !important;\n  border-color: #f5f5f5 !important;\n}\n\n.v-application .grey--text.text--lighten-4 {\n  color: #f5f5f5 !important;\n  caret-color: #f5f5f5 !important;\n}\n\n.v-application .grey.lighten-3 {\n  background-color: #eeeeee !important;\n  border-color: #eeeeee !important;\n}\n\n.v-application .grey--text.text--lighten-3 {\n  color: #eeeeee !important;\n  caret-color: #eeeeee !important;\n}\n\n.v-application .grey.lighten-2 {\n  background-color: #e0e0e0 !important;\n  border-color: #e0e0e0 !important;\n}\n\n.v-application .grey--text.text--lighten-2 {\n  color: #e0e0e0 !important;\n  caret-color: #e0e0e0 !important;\n}\n\n.v-application .grey.lighten-1 {\n  background-color: #bdbdbd !important;\n  border-color: #bdbdbd !important;\n}\n\n.v-application .grey--text.text--lighten-1 {\n  color: #bdbdbd !important;\n  caret-color: #bdbdbd !important;\n}\n\n.v-application .grey.darken-1 {\n  background-color: #757575 !important;\n  border-color: #757575 !important;\n}\n\n.v-application .grey--text.text--darken-1 {\n  color: #757575 !important;\n  caret-color: #757575 !important;\n}\n\n.v-application .grey.darken-2 {\n  background-color: #616161 !important;\n  border-color: #616161 !important;\n}\n\n.v-application .grey--text.text--darken-2 {\n  color: #616161 !important;\n  caret-color: #616161 !important;\n}\n\n.v-application .grey.darken-3 {\n  background-color: #424242 !important;\n  border-color: #424242 !important;\n}\n\n.v-application .grey--text.text--darken-3 {\n  color: #424242 !important;\n  caret-color: #424242 !important;\n}\n\n.v-application .grey.darken-4 {\n  background-color: #212121 !important;\n  border-color: #212121 !important;\n}\n\n.v-application .grey--text.text--darken-4 {\n  color: #212121 !important;\n  caret-color: #212121 !important;\n}\n\n.v-application .shades.black {\n  background-color: #000000 !important;\n  border-color: #000000 !important;\n}\n\n.v-application .shades--text.text--black {\n  color: #000000 !important;\n  caret-color: #000000 !important;\n}\n\n.v-application .shades.white {\n  background-color: #FFFFFF !important;\n  border-color: #FFFFFF !important;\n}\n\n.v-application .shades--text.text--white {\n  color: #FFFFFF !important;\n  caret-color: #FFFFFF !important;\n}\n\n.v-application .shades.transparent {\n  background-color: transparent !important;\n  border-color: transparent !important;\n}\n\n.v-application .shades--text.text--transparent {\n  color: transparent !important;\n  caret-color: transparent !important;\n}\n\n/*!\n * ress.css • v2.0.4\n * MIT License\n * github.com/filipelinhares/ress\n */\n/* # =================================================================\n   # Global selectors\n   # ================================================================= */\nhtml {\n  box-sizing: border-box;\n  overflow-y: scroll;\n  /* All browsers without overlaying scrollbars */\n  -webkit-text-size-adjust: 100%;\n  /* Prevent adjustments of font size after orientation changes in iOS */\n  word-break: normal;\n  -moz-tab-size: 4;\n  tab-size: 4;\n}\n\n*,\n::before,\n::after {\n  background-repeat: no-repeat;\n  /* Set `background-repeat: no-repeat` to all elements and pseudo elements */\n  box-sizing: inherit;\n}\n\n::before,\n::after {\n  text-decoration: inherit;\n  /* Inherit text-decoration and vertical align to ::before and ::after pseudo elements */\n  vertical-align: inherit;\n}\n\n* {\n  padding: 0;\n  /* Reset `padding` and `margin` of all elements */\n  margin: 0;\n}\n\n/* # =================================================================\n   # General elements\n   # ================================================================= */\nhr {\n  overflow: visible;\n  /* Show the overflow in Edge and IE */\n  height: 0;\n  /* Add the correct box sizing in Firefox */\n}\n\ndetails,\nmain {\n  display: block;\n  /* Render the `main` element consistently in IE. */\n}\n\nsummary {\n  display: list-item;\n  /* Add the correct display in all browsers */\n}\n\nsmall {\n  font-size: 80%;\n  /* Set font-size to 80% in `small` elements */\n}\n\n[hidden] {\n  display: none;\n  /* Add the correct display in IE */\n}\n\nabbr[title] {\n  border-bottom: none;\n  /* Remove the bottom border in Chrome 57 */\n  /* Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari */\n  text-decoration: underline;\n  text-decoration: underline dotted;\n}\n\na {\n  background-color: transparent;\n  /* Remove the gray background on active links in IE 10 */\n}\n\na:active,\na:hover {\n  outline-width: 0;\n  /* Remove the outline when hovering in all browsers */\n}\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  /* Specify the font family of code elements */\n}\n\npre {\n  font-size: 1em;\n  /* Correct the odd `em` font sizing in all browsers */\n}\n\nb,\nstrong {\n  font-weight: bolder;\n  /* Add the correct font weight in Chrome, Edge, and Safari */\n}\n\n/* https://gist.github.com/unruthless/413930 */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* # =================================================================\n   # Forms\n   # ================================================================= */\ninput {\n  border-radius: 0;\n}\n\n/* Replace pointer cursor in disabled elements */\n[disabled] {\n  cursor: default;\n}\n\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n  /* Correct the cursor style of increment and decrement buttons in Chrome */\n}\n\n[type=search] {\n  -webkit-appearance: textfield;\n  /* Correct the odd appearance in Chrome and Safari */\n  outline-offset: -2px;\n  /* Correct the outline style in Safari */\n}\n\n[type=search]::-webkit-search-cancel-button,\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n  /* Remove the inner padding in Chrome and Safari on macOS */\n}\n\ntextarea {\n  overflow: auto;\n  /* Internet Explorer 11+ */\n  resize: vertical;\n  /* Specify textarea resizability */\n}\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font: inherit;\n  /* Specify font inheritance of form elements */\n}\n\noptgroup {\n  font-weight: bold;\n  /* Restore the font weight unset by the previous rule */\n}\n\nbutton {\n  overflow: visible;\n  /* Address `overflow` set to `hidden` in IE 8/9/10/11 */\n}\n\nbutton,\nselect {\n  text-transform: none;\n  /* Firefox 40+, Internet Explorer 11- */\n}\n\n/* Apply cursor pointer to button elements */\nbutton,\n[type=button],\n[type=reset],\n[type=submit],\n[role=button] {\n  cursor: pointer;\n  color: inherit;\n}\n\n/* Remove inner padding and border in Firefox 4+ */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/* Replace focus style removed in the border reset above */\nbutton:-moz-focusring,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  outline: 1px dotted ButtonText;\n}\n\nbutton,\nhtml [type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n  /* Correct the inability to style clickable types in iOS */\n}\n\n/* Remove the default button styling in all browsers */\nbutton,\ninput,\nselect,\ntextarea {\n  background-color: transparent;\n  border-style: none;\n}\n\n/* Style select like a standard input */\nselect {\n  -moz-appearance: none;\n  /* Firefox 36+ */\n  -webkit-appearance: none;\n  /* Chrome 41+ */\n}\n\nselect::-ms-expand {\n  display: none;\n  /* Internet Explorer 11+ */\n}\n\nselect::-ms-value {\n  color: currentColor;\n  /* Internet Explorer 11+ */\n}\n\nlegend {\n  border: 0;\n  /* Correct `color` not being inherited in IE 8/9/10/11 */\n  color: inherit;\n  /* Correct the color inheritance from `fieldset` elements in IE */\n  display: table;\n  /* Correct the text wrapping in Edge and IE */\n  max-width: 100%;\n  /* Correct the text wrapping in Edge and IE */\n  white-space: normal;\n  /* Correct the text wrapping in Edge and IE */\n  max-width: 100%;\n  /* Correct the text wrapping in Edge 18- and IE */\n}\n\n::-webkit-file-upload-button {\n  /* Correct the inability to style clickable types in iOS and Safari */\n  -webkit-appearance: button;\n  color: inherit;\n  font: inherit;\n  /* Change font properties to `inherit` in Chrome and Safari */\n}\n\n/* # =================================================================\n   # Specify media element style\n   # ================================================================= */\nimg {\n  border-style: none;\n  /* Remove border when inside `a` element in IE 8/9/10 */\n}\n\n/* Add the correct vertical alignment in Chrome, Firefox, and Opera */\nprogress {\n  vertical-align: baseline;\n}\n\n/* # =================================================================\n   # Accessibility\n   # ================================================================= */\n/* Hide content from screens but not screenreaders */\n@media screen {\n  [hidden~=screen] {\n    display: inherit;\n  }\n\n  [hidden~=screen]:not(:active):not(:focus):not(:target) {\n    position: absolute !important;\n    clip: rect(0 0 0 0) !important;\n  }\n}\n/* Specify the progress cursor of updating elements */\n[aria-busy=true] {\n  cursor: progress;\n}\n\n/* Specify the pointer cursor of trigger elements */\n[aria-controls] {\n  cursor: pointer;\n}\n\n/* Specify the unstyled cursor of disabled, not-editable, or otherwise inoperable elements */\n[aria-disabled=true] {\n  cursor: default;\n}\n\n.v-application .elevation-24 {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12) !important;\n}\n\n.v-application .elevation-23 {\n  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12) !important;\n}\n\n.v-application .elevation-22 {\n  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12) !important;\n}\n\n.v-application .elevation-21 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12) !important;\n}\n\n.v-application .elevation-20 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12) !important;\n}\n\n.v-application .elevation-19 {\n  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12) !important;\n}\n\n.v-application .elevation-18 {\n  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12) !important;\n}\n\n.v-application .elevation-17 {\n  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12) !important;\n}\n\n.v-application .elevation-16 {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12) !important;\n}\n\n.v-application .elevation-15 {\n  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12) !important;\n}\n\n.v-application .elevation-14 {\n  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12) !important;\n}\n\n.v-application .elevation-13 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12) !important;\n}\n\n.v-application .elevation-12 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12) !important;\n}\n\n.v-application .elevation-11 {\n  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12) !important;\n}\n\n.v-application .elevation-10 {\n  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12) !important;\n}\n\n.v-application .elevation-9 {\n  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12) !important;\n}\n\n.v-application .elevation-8 {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12) !important;\n}\n\n.v-application .elevation-7 {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12) !important;\n}\n\n.v-application .elevation-6 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12) !important;\n}\n\n.v-application .elevation-5 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12) !important;\n}\n\n.v-application .elevation-4 {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12) !important;\n}\n\n.v-application .elevation-3 {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12) !important;\n}\n\n.v-application .elevation-2 {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12) !important;\n}\n\n.v-application .elevation-1 {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12) !important;\n}\n\n.v-application .elevation-0 {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12) !important;\n}\n\n.v-application .carousel-transition-enter {\n  transform: translate(100%, 0);\n}\n.v-application .carousel-transition-leave, .v-application .carousel-transition-leave-to {\n  position: absolute;\n  top: 0;\n  transform: translate(-100%, 0);\n}\n\n.carousel-reverse-transition-enter {\n  transform: translate(-100%, 0);\n}\n.carousel-reverse-transition-leave, .carousel-reverse-transition-leave-to {\n  position: absolute;\n  top: 0;\n  transform: translate(100%, 0);\n}\n\n.dialog-transition-enter, .dialog-transition-leave-to {\n  transform: scale(0.5);\n  opacity: 0;\n}\n.dialog-transition-enter-to, .dialog-transition-leave {\n  opacity: 1;\n}\n\n.dialog-bottom-transition-enter, .dialog-bottom-transition-leave-to {\n  transform: translateY(100%);\n}\n\n.picker-transition-enter-active, .picker-transition-leave-active,\n.picker-reverse-transition-enter-active,\n.picker-reverse-transition-leave-active {\n  transition: 0.3s cubic-bezier(0, 0, 0.2, 1);\n}\n.picker-transition-enter, .picker-transition-leave-to,\n.picker-reverse-transition-enter,\n.picker-reverse-transition-leave-to {\n  opacity: 0;\n}\n.picker-transition-leave, .picker-transition-leave-active, .picker-transition-leave-to,\n.picker-reverse-transition-leave,\n.picker-reverse-transition-leave-active,\n.picker-reverse-transition-leave-to {\n  position: absolute !important;\n}\n\n.picker-transition-enter {\n  transform: translate(0, 100%);\n}\n.picker-transition-leave-to {\n  transform: translate(0, -100%);\n}\n\n.picker-reverse-transition-enter {\n  transform: translate(0, -100%);\n}\n.picker-reverse-transition-leave-to {\n  transform: translate(0, 100%);\n}\n\n.picker-title-transition-enter-to, .picker-title-transition-leave {\n  transform: translate(0, 0);\n}\n.picker-title-transition-enter {\n  transform: translate(-100%, 0);\n}\n.picker-title-transition-leave-to {\n  opacity: 0;\n  transform: translate(100%, 0);\n}\n.picker-title-transition-leave, .picker-title-transition-leave-to, .picker-title-transition-leave-active {\n  position: absolute !important;\n}\n\n.tab-transition-enter {\n  transform: translate(100%, 0);\n}\n.tab-transition-leave, .tab-transition-leave-active {\n  position: absolute;\n  top: 0;\n}\n.tab-transition-leave-to {\n  position: absolute;\n  transform: translate(-100%, 0);\n}\n\n.tab-reverse-transition-enter {\n  transform: translate(-100%, 0);\n}\n.tab-reverse-transition-leave, .tab-reverse-transition-leave-to {\n  top: 0;\n  position: absolute;\n  transform: translate(100%, 0);\n}\n\n.expand-transition-enter-active, .expand-transition-leave-active {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1) !important;\n}\n.expand-transition-move {\n  transition: transform 0.6s;\n}\n\n.expand-x-transition-enter-active, .expand-x-transition-leave-active {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1) !important;\n}\n.expand-x-transition-move {\n  transition: transform 0.6s;\n}\n\n.scale-transition-enter-active, .scale-transition-leave-active {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1) !important;\n}\n.scale-transition-move {\n  transition: transform 0.6s;\n}\n.scale-transition-enter, .scale-transition-leave, .scale-transition-leave-to {\n  opacity: 0;\n  transform: scale(0);\n}\n\n.scale-rotate-transition-enter-active, .scale-rotate-transition-leave-active {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1) !important;\n}\n.scale-rotate-transition-move {\n  transition: transform 0.6s;\n}\n.scale-rotate-transition-enter, .scale-rotate-transition-leave, .scale-rotate-transition-leave-to {\n  opacity: 0;\n  transform: scale(0) rotate(-45deg);\n}\n\n.scale-rotate-reverse-transition-enter-active, .scale-rotate-reverse-transition-leave-active {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1) !important;\n}\n.scale-rotate-reverse-transition-move {\n  transition: transform 0.6s;\n}\n.scale-rotate-reverse-transition-enter, .scale-rotate-reverse-transition-leave, .scale-rotate-reverse-transition-leave-to {\n  opacity: 0;\n  transform: scale(0) rotate(45deg);\n}\n\n.message-transition-enter-active, .message-transition-leave-active {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1) !important;\n}\n.message-transition-move {\n  transition: transform 0.6s;\n}\n.message-transition-enter, .message-transition-leave-to {\n  opacity: 0;\n  transform: translateY(-15px);\n}\n.message-transition-leave, .message-transition-leave-active {\n  position: absolute;\n}\n\n.slide-y-transition-enter-active, .slide-y-transition-leave-active {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1) !important;\n}\n.slide-y-transition-move {\n  transition: transform 0.6s;\n}\n.slide-y-transition-enter, .slide-y-transition-leave-to {\n  opacity: 0;\n  transform: translateY(-15px);\n}\n\n.slide-y-reverse-transition-enter-active, .slide-y-reverse-transition-leave-active {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1) !important;\n}\n.slide-y-reverse-transition-move {\n  transition: transform 0.6s;\n}\n.slide-y-reverse-transition-enter, .slide-y-reverse-transition-leave-to {\n  opacity: 0;\n  transform: translateY(15px);\n}\n\n.scroll-y-transition-enter-active, .scroll-y-transition-leave-active {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1) !important;\n}\n.scroll-y-transition-move {\n  transition: transform 0.6s;\n}\n.scroll-y-transition-enter, .scroll-y-transition-leave-to {\n  opacity: 0;\n}\n.scroll-y-transition-enter {\n  transform: translateY(-15px);\n}\n.scroll-y-transition-leave-to {\n  transform: translateY(15px);\n}\n\n.scroll-y-reverse-transition-enter-active, .scroll-y-reverse-transition-leave-active {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1) !important;\n}\n.scroll-y-reverse-transition-move {\n  transition: transform 0.6s;\n}\n.scroll-y-reverse-transition-enter, .scroll-y-reverse-transition-leave-to {\n  opacity: 0;\n}\n.scroll-y-reverse-transition-enter {\n  transform: translateY(15px);\n}\n.scroll-y-reverse-transition-leave-to {\n  transform: translateY(-15px);\n}\n\n.scroll-x-transition-enter-active, .scroll-x-transition-leave-active {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1) !important;\n}\n.scroll-x-transition-move {\n  transition: transform 0.6s;\n}\n.scroll-x-transition-enter, .scroll-x-transition-leave-to {\n  opacity: 0;\n}\n.scroll-x-transition-enter {\n  transform: translateX(-15px);\n}\n.scroll-x-transition-leave-to {\n  transform: translateX(15px);\n}\n\n.scroll-x-reverse-transition-enter-active, .scroll-x-reverse-transition-leave-active {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1) !important;\n}\n.scroll-x-reverse-transition-move {\n  transition: transform 0.6s;\n}\n.scroll-x-reverse-transition-enter, .scroll-x-reverse-transition-leave-to {\n  opacity: 0;\n}\n.scroll-x-reverse-transition-enter {\n  transform: translateX(15px);\n}\n.scroll-x-reverse-transition-leave-to {\n  transform: translateX(-15px);\n}\n\n.slide-x-transition-enter-active, .slide-x-transition-leave-active {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1) !important;\n}\n.slide-x-transition-move {\n  transition: transform 0.6s;\n}\n.slide-x-transition-enter, .slide-x-transition-leave-to {\n  opacity: 0;\n  transform: translateX(-15px);\n}\n\n.slide-x-reverse-transition-enter-active, .slide-x-reverse-transition-leave-active {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1) !important;\n}\n.slide-x-reverse-transition-move {\n  transition: transform 0.6s;\n}\n.slide-x-reverse-transition-enter, .slide-x-reverse-transition-leave-to {\n  opacity: 0;\n  transform: translateX(15px);\n}\n\n.fade-transition-enter-active, .fade-transition-leave-active {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1) !important;\n}\n.fade-transition-move {\n  transition: transform 0.6s;\n}\n.fade-transition-enter, .fade-transition-leave-to {\n  opacity: 0 !important;\n}\n\n.fab-transition-enter-active, .fab-transition-leave-active {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1) !important;\n}\n.fab-transition-move {\n  transition: transform 0.6s;\n}\n.fab-transition-enter, .fab-transition-leave-to {\n  transform: scale(0) rotate(-45deg);\n}\n\n.v-application .blockquote {\n  padding: 16px 0 16px 24px;\n  font-size: 18px;\n  font-weight: 300;\n}\n\n.v-application code, .v-application kbd {\n  border-radius: 3px;\n  font-size: 85%;\n  font-weight: 900;\n}\n.v-application code {\n  background-color: #FBE5E1;\n  color: #C0341D;\n  padding: 0 0.4rem;\n}\n.v-application kbd {\n  background: #212529;\n  color: #FFFFFF;\n  padding: 0.2rem 0.4rem;\n}\n\nhtml {\n  font-size: 16px;\n  overflow-x: hidden;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\nhtml.overflow-y-hidden {\n  overflow-y: hidden !important;\n}\n\n.v-application {\n  font-family: \"Roboto\", sans-serif;\n  line-height: 1.5;\n}\n.v-application ::-ms-clear,\n.v-application ::-ms-reveal {\n  display: none;\n}\n\n.v-application .theme--light.heading {\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.v-application .theme--dark.heading {\n  color: #FFFFFF;\n}\n\n.v-application ul, .v-application ol {\n  padding-left: 24px;\n}\n\n.v-application .display-4 {\n  font-size: 6rem !important;\n  font-weight: 300;\n  line-height: 6rem;\n  letter-spacing: -0.015625em !important;\n  font-family: \"Roboto\", sans-serif !important;\n}\n.v-application .display-3 {\n  font-size: 3.75rem !important;\n  font-weight: 300;\n  line-height: 3.75rem;\n  letter-spacing: -0.0083333333em !important;\n  font-family: \"Roboto\", sans-serif !important;\n}\n.v-application .display-2 {\n  font-size: 3rem !important;\n  font-weight: 400;\n  line-height: 3.125rem;\n  letter-spacing: normal !important;\n  font-family: \"Roboto\", sans-serif !important;\n}\n.v-application .display-1 {\n  font-size: 2.125rem !important;\n  font-weight: 400;\n  line-height: 2.5rem;\n  letter-spacing: 0.0073529412em !important;\n  font-family: \"Roboto\", sans-serif !important;\n}\n.v-application .headline {\n  font-size: 1.5rem !important;\n  font-weight: 400;\n  line-height: 2rem;\n  letter-spacing: normal !important;\n  font-family: \"Roboto\", sans-serif !important;\n}\n.v-application .title {\n  font-size: 1.25rem !important;\n  font-weight: 500;\n  line-height: 2rem;\n  letter-spacing: 0.0125em !important;\n  font-family: \"Roboto\", sans-serif !important;\n}\n.v-application .subtitle-2 {\n  font-size: 0.875rem !important;\n  font-weight: 500;\n  letter-spacing: 0.0071428571em !important;\n  line-height: 1.375rem;\n  font-family: \"Roboto\", sans-serif !important;\n}\n.v-application .subtitle-1 {\n  font-size: 1rem !important;\n  font-weight: normal;\n  letter-spacing: 0.009375em !important;\n  line-height: 1.75rem;\n  font-family: \"Roboto\", sans-serif !important;\n}\n.v-application .body-2 {\n  font-size: 0.875rem !important;\n  font-weight: 400;\n  letter-spacing: 0.0178571429em !important;\n  line-height: 1.25rem;\n  font-family: \"Roboto\", sans-serif !important;\n}\n.v-application .body-1 {\n  font-size: 1rem !important;\n  font-weight: 400;\n  letter-spacing: 0.03125em !important;\n  line-height: 1.5rem;\n  font-family: \"Roboto\", sans-serif !important;\n}\n.v-application .caption {\n  font-size: 0.75rem !important;\n  font-weight: 400;\n  letter-spacing: 0.0333333333em !important;\n  line-height: 1.25rem;\n  font-family: \"Roboto\", sans-serif !important;\n}\n.v-application .overline {\n  font-size: 0.75rem !important;\n  font-weight: 500;\n  letter-spacing: 0.1666666667em !important;\n  line-height: 2rem;\n  text-transform: uppercase;\n  font-family: \"Roboto\", sans-serif !important;\n}\n.v-application p {\n  margin-bottom: 16px;\n}\n\n@media only print {\n  .v-application .hidden-print-only {\n    display: none !important;\n  }\n}\n@media only screen {\n  .v-application .hidden-screen-only {\n    display: none !important;\n  }\n}\n@media only screen and (max-width: 599px) {\n  .v-application .hidden-xs-only {\n    display: none !important;\n  }\n}\n@media only screen and (min-width: 600px) and (max-width: 959px) {\n  .v-application .hidden-sm-only {\n    display: none !important;\n  }\n}\n@media only screen and (max-width: 959px) {\n  .v-application .hidden-sm-and-down {\n    display: none !important;\n  }\n}\n@media only screen and (min-width: 600px) {\n  .v-application .hidden-sm-and-up {\n    display: none !important;\n  }\n}\n@media only screen and (min-width: 960px) and (max-width: 1263px) {\n  .v-application .hidden-md-only {\n    display: none !important;\n  }\n}\n@media only screen and (max-width: 1263px) {\n  .v-application .hidden-md-and-down {\n    display: none !important;\n  }\n}\n@media only screen and (min-width: 960px) {\n  .v-application .hidden-md-and-up {\n    display: none !important;\n  }\n}\n@media only screen and (min-width: 1264px) and (max-width: 1903px) {\n  .v-application .hidden-lg-only {\n    display: none !important;\n  }\n}\n@media only screen and (max-width: 1903px) {\n  .v-application .hidden-lg-and-down {\n    display: none !important;\n  }\n}\n@media only screen and (min-width: 1264px) {\n  .v-application .hidden-lg-and-up {\n    display: none !important;\n  }\n}\n@media only screen and (min-width: 1904px) {\n  .v-application .hidden-xl-only {\n    display: none !important;\n  }\n}\n\n.d-sr-only,\n.d-sr-only-focusable:not(:focus) {\n  border: 0 !important;\n  clip: rect(0, 0, 0, 0) !important;\n  height: 1px !important;\n  margin: -1px !important;\n  overflow: hidden !important;\n  padding: 0 !important;\n  position: absolute !important;\n  white-space: nowrap !important;\n  width: 1px !important;\n}\n\n.v-application .font-weight-thin {\n  font-weight: 100 !important;\n}\n.v-application .font-weight-light {\n  font-weight: 300 !important;\n}\n.v-application .font-weight-regular {\n  font-weight: 400 !important;\n}\n.v-application .font-weight-medium {\n  font-weight: 500 !important;\n}\n.v-application .font-weight-bold {\n  font-weight: 700 !important;\n}\n.v-application .font-weight-black {\n  font-weight: 900 !important;\n}\n.v-application .font-italic {\n  font-style: italic !important;\n}\n\n.v-application .transition-fast-out-slow-in {\n  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;\n}\n.v-application .transition-linear-out-slow-in {\n  transition: 0.3s cubic-bezier(0, 0, 0.2, 1) !important;\n}\n.v-application .transition-fast-out-linear-in {\n  transition: 0.3s cubic-bezier(0.4, 0, 1, 1) !important;\n}\n.v-application .transition-ease-in-out {\n  transition: 0.3s cubic-bezier(0.4, 0, 0.6, 1) !important;\n}\n.v-application .transition-fast-in-fast-out {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) !important;\n}\n.v-application .transition-swing {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1) !important;\n}\n\n.v-application .overflow-auto {\n  overflow: auto !important;\n}\n\n.v-application .overflow-hidden {\n  overflow: hidden !important;\n}\n\n.v-application .overflow-visible {\n  overflow: visible !important;\n}\n\n.v-application .overflow-x-auto {\n  overflow-x: auto !important;\n}\n\n.v-application .overflow-x-hidden {\n  overflow-x: hidden !important;\n}\n\n.v-application .overflow-y-auto {\n  overflow-y: auto !important;\n}\n\n.v-application .overflow-y-hidden {\n  overflow-y: hidden !important;\n}\n\n.v-application .d-none {\n  display: none !important;\n}\n\n.v-application .d-inline {\n  display: inline !important;\n}\n\n.v-application .d-inline-block {\n  display: inline-block !important;\n}\n\n.v-application .d-block {\n  display: block !important;\n}\n\n.v-application .d-table {\n  display: table !important;\n}\n\n.v-application .d-table-row {\n  display: table-row !important;\n}\n\n.v-application .d-table-cell {\n  display: table-cell !important;\n}\n\n.v-application .d-flex {\n  display: flex !important;\n}\n\n.v-application .d-inline-flex {\n  display: inline-flex !important;\n}\n\n.v-application .float-none {\n  float: none !important;\n}\n\n.v-application .float-left {\n  float: left !important;\n}\n\n.v-application .float-right {\n  float: right !important;\n}\n\n.v-application .flex-fill {\n  flex: 1 1 auto !important;\n}\n\n.v-application .flex-row {\n  flex-direction: row !important;\n}\n\n.v-application .flex-column {\n  flex-direction: column !important;\n}\n\n.v-application .flex-row-reverse {\n  flex-direction: row-reverse !important;\n}\n\n.v-application .flex-column-reverse {\n  flex-direction: column-reverse !important;\n}\n\n.v-application .flex-grow-0 {\n  flex-grow: 0 !important;\n}\n\n.v-application .flex-grow-1 {\n  flex-grow: 1 !important;\n}\n\n.v-application .flex-shrink-0 {\n  flex-shrink: 0 !important;\n}\n\n.v-application .flex-shrink-1 {\n  flex-shrink: 1 !important;\n}\n\n.v-application .flex-wrap {\n  flex-wrap: wrap !important;\n}\n\n.v-application .flex-nowrap {\n  flex-wrap: nowrap !important;\n}\n\n.v-application .flex-wrap-reverse {\n  flex-wrap: wrap-reverse !important;\n}\n\n.v-application .justify-start {\n  justify-content: flex-start !important;\n}\n\n.v-application .justify-end {\n  justify-content: flex-end !important;\n}\n\n.v-application .justify-center {\n  justify-content: center !important;\n}\n\n.v-application .justify-space-between {\n  justify-content: space-between !important;\n}\n\n.v-application .justify-space-around {\n  justify-content: space-around !important;\n}\n\n.v-application .align-start {\n  align-items: flex-start !important;\n}\n\n.v-application .align-end {\n  align-items: flex-end !important;\n}\n\n.v-application .align-center {\n  align-items: center !important;\n}\n\n.v-application .align-baseline {\n  align-items: baseline !important;\n}\n\n.v-application .align-stretch {\n  align-items: stretch !important;\n}\n\n.v-application .align-content-start {\n  align-content: flex-start !important;\n}\n\n.v-application .align-content-end {\n  align-content: flex-end !important;\n}\n\n.v-application .align-content-center {\n  align-content: center !important;\n}\n\n.v-application .align-content-space-between {\n  align-content: space-between !important;\n}\n\n.v-application .align-content-space-around {\n  align-content: space-around !important;\n}\n\n.v-application .align-content-stretch {\n  align-content: stretch !important;\n}\n\n.v-application .align-self-auto {\n  align-self: auto !important;\n}\n\n.v-application .align-self-start {\n  align-self: flex-start !important;\n}\n\n.v-application .align-self-end {\n  align-self: flex-end !important;\n}\n\n.v-application .align-self-center {\n  align-self: center !important;\n}\n\n.v-application .align-self-baseline {\n  align-self: baseline !important;\n}\n\n.v-application .align-self-stretch {\n  align-self: stretch !important;\n}\n\n.v-application .order-first {\n  order: -1 !important;\n}\n\n.v-application .order-0 {\n  order: 0 !important;\n}\n\n.v-application .order-1 {\n  order: 1 !important;\n}\n\n.v-application .order-2 {\n  order: 2 !important;\n}\n\n.v-application .order-3 {\n  order: 3 !important;\n}\n\n.v-application .order-4 {\n  order: 4 !important;\n}\n\n.v-application .order-5 {\n  order: 5 !important;\n}\n\n.v-application .order-6 {\n  order: 6 !important;\n}\n\n.v-application .order-7 {\n  order: 7 !important;\n}\n\n.v-application .order-8 {\n  order: 8 !important;\n}\n\n.v-application .order-9 {\n  order: 9 !important;\n}\n\n.v-application .order-10 {\n  order: 10 !important;\n}\n\n.v-application .order-11 {\n  order: 11 !important;\n}\n\n.v-application .order-12 {\n  order: 12 !important;\n}\n\n.v-application .order-last {\n  order: 13 !important;\n}\n\n.v-application .ma-0 {\n  margin: 0px !important;\n}\n\n.v-application .ma-1 {\n  margin: 4px !important;\n}\n\n.v-application .ma-2 {\n  margin: 8px !important;\n}\n\n.v-application .ma-3 {\n  margin: 12px !important;\n}\n\n.v-application .ma-4 {\n  margin: 16px !important;\n}\n\n.v-application .ma-5 {\n  margin: 20px !important;\n}\n\n.v-application .ma-6 {\n  margin: 24px !important;\n}\n\n.v-application .ma-7 {\n  margin: 28px !important;\n}\n\n.v-application .ma-8 {\n  margin: 32px !important;\n}\n\n.v-application .ma-9 {\n  margin: 36px !important;\n}\n\n.v-application .ma-10 {\n  margin: 40px !important;\n}\n\n.v-application .ma-11 {\n  margin: 44px !important;\n}\n\n.v-application .ma-12 {\n  margin: 48px !important;\n}\n\n.v-application .ma-13 {\n  margin: 52px !important;\n}\n\n.v-application .ma-14 {\n  margin: 56px !important;\n}\n\n.v-application .ma-15 {\n  margin: 60px !important;\n}\n\n.v-application .ma-16 {\n  margin: 64px !important;\n}\n\n.v-application .ma-auto {\n  margin: auto !important;\n}\n\n.v-application .mx-0 {\n  margin-right: 0px !important;\n  margin-left: 0px !important;\n}\n\n.v-application .mx-1 {\n  margin-right: 4px !important;\n  margin-left: 4px !important;\n}\n\n.v-application .mx-2 {\n  margin-right: 8px !important;\n  margin-left: 8px !important;\n}\n\n.v-application .mx-3 {\n  margin-right: 12px !important;\n  margin-left: 12px !important;\n}\n\n.v-application .mx-4 {\n  margin-right: 16px !important;\n  margin-left: 16px !important;\n}\n\n.v-application .mx-5 {\n  margin-right: 20px !important;\n  margin-left: 20px !important;\n}\n\n.v-application .mx-6 {\n  margin-right: 24px !important;\n  margin-left: 24px !important;\n}\n\n.v-application .mx-7 {\n  margin-right: 28px !important;\n  margin-left: 28px !important;\n}\n\n.v-application .mx-8 {\n  margin-right: 32px !important;\n  margin-left: 32px !important;\n}\n\n.v-application .mx-9 {\n  margin-right: 36px !important;\n  margin-left: 36px !important;\n}\n\n.v-application .mx-10 {\n  margin-right: 40px !important;\n  margin-left: 40px !important;\n}\n\n.v-application .mx-11 {\n  margin-right: 44px !important;\n  margin-left: 44px !important;\n}\n\n.v-application .mx-12 {\n  margin-right: 48px !important;\n  margin-left: 48px !important;\n}\n\n.v-application .mx-13 {\n  margin-right: 52px !important;\n  margin-left: 52px !important;\n}\n\n.v-application .mx-14 {\n  margin-right: 56px !important;\n  margin-left: 56px !important;\n}\n\n.v-application .mx-15 {\n  margin-right: 60px !important;\n  margin-left: 60px !important;\n}\n\n.v-application .mx-16 {\n  margin-right: 64px !important;\n  margin-left: 64px !important;\n}\n\n.v-application .mx-auto {\n  margin-right: auto !important;\n  margin-left: auto !important;\n}\n\n.v-application .my-0 {\n  margin-top: 0px !important;\n  margin-bottom: 0px !important;\n}\n\n.v-application .my-1 {\n  margin-top: 4px !important;\n  margin-bottom: 4px !important;\n}\n\n.v-application .my-2 {\n  margin-top: 8px !important;\n  margin-bottom: 8px !important;\n}\n\n.v-application .my-3 {\n  margin-top: 12px !important;\n  margin-bottom: 12px !important;\n}\n\n.v-application .my-4 {\n  margin-top: 16px !important;\n  margin-bottom: 16px !important;\n}\n\n.v-application .my-5 {\n  margin-top: 20px !important;\n  margin-bottom: 20px !important;\n}\n\n.v-application .my-6 {\n  margin-top: 24px !important;\n  margin-bottom: 24px !important;\n}\n\n.v-application .my-7 {\n  margin-top: 28px !important;\n  margin-bottom: 28px !important;\n}\n\n.v-application .my-8 {\n  margin-top: 32px !important;\n  margin-bottom: 32px !important;\n}\n\n.v-application .my-9 {\n  margin-top: 36px !important;\n  margin-bottom: 36px !important;\n}\n\n.v-application .my-10 {\n  margin-top: 40px !important;\n  margin-bottom: 40px !important;\n}\n\n.v-application .my-11 {\n  margin-top: 44px !important;\n  margin-bottom: 44px !important;\n}\n\n.v-application .my-12 {\n  margin-top: 48px !important;\n  margin-bottom: 48px !important;\n}\n\n.v-application .my-13 {\n  margin-top: 52px !important;\n  margin-bottom: 52px !important;\n}\n\n.v-application .my-14 {\n  margin-top: 56px !important;\n  margin-bottom: 56px !important;\n}\n\n.v-application .my-15 {\n  margin-top: 60px !important;\n  margin-bottom: 60px !important;\n}\n\n.v-application .my-16 {\n  margin-top: 64px !important;\n  margin-bottom: 64px !important;\n}\n\n.v-application .my-auto {\n  margin-top: auto !important;\n  margin-bottom: auto !important;\n}\n\n.v-application .mt-0 {\n  margin-top: 0px !important;\n}\n\n.v-application .mt-1 {\n  margin-top: 4px !important;\n}\n\n.v-application .mt-2 {\n  margin-top: 8px !important;\n}\n\n.v-application .mt-3 {\n  margin-top: 12px !important;\n}\n\n.v-application .mt-4 {\n  margin-top: 16px !important;\n}\n\n.v-application .mt-5 {\n  margin-top: 20px !important;\n}\n\n.v-application .mt-6 {\n  margin-top: 24px !important;\n}\n\n.v-application .mt-7 {\n  margin-top: 28px !important;\n}\n\n.v-application .mt-8 {\n  margin-top: 32px !important;\n}\n\n.v-application .mt-9 {\n  margin-top: 36px !important;\n}\n\n.v-application .mt-10 {\n  margin-top: 40px !important;\n}\n\n.v-application .mt-11 {\n  margin-top: 44px !important;\n}\n\n.v-application .mt-12 {\n  margin-top: 48px !important;\n}\n\n.v-application .mt-13 {\n  margin-top: 52px !important;\n}\n\n.v-application .mt-14 {\n  margin-top: 56px !important;\n}\n\n.v-application .mt-15 {\n  margin-top: 60px !important;\n}\n\n.v-application .mt-16 {\n  margin-top: 64px !important;\n}\n\n.v-application .mt-auto {\n  margin-top: auto !important;\n}\n\n.v-application .mr-0 {\n  margin-right: 0px !important;\n}\n\n.v-application .mr-1 {\n  margin-right: 4px !important;\n}\n\n.v-application .mr-2 {\n  margin-right: 8px !important;\n}\n\n.v-application .mr-3 {\n  margin-right: 12px !important;\n}\n\n.v-application .mr-4 {\n  margin-right: 16px !important;\n}\n\n.v-application .mr-5 {\n  margin-right: 20px !important;\n}\n\n.v-application .mr-6 {\n  margin-right: 24px !important;\n}\n\n.v-application .mr-7 {\n  margin-right: 28px !important;\n}\n\n.v-application .mr-8 {\n  margin-right: 32px !important;\n}\n\n.v-application .mr-9 {\n  margin-right: 36px !important;\n}\n\n.v-application .mr-10 {\n  margin-right: 40px !important;\n}\n\n.v-application .mr-11 {\n  margin-right: 44px !important;\n}\n\n.v-application .mr-12 {\n  margin-right: 48px !important;\n}\n\n.v-application .mr-13 {\n  margin-right: 52px !important;\n}\n\n.v-application .mr-14 {\n  margin-right: 56px !important;\n}\n\n.v-application .mr-15 {\n  margin-right: 60px !important;\n}\n\n.v-application .mr-16 {\n  margin-right: 64px !important;\n}\n\n.v-application .mr-auto {\n  margin-right: auto !important;\n}\n\n.v-application .mb-0 {\n  margin-bottom: 0px !important;\n}\n\n.v-application .mb-1 {\n  margin-bottom: 4px !important;\n}\n\n.v-application .mb-2 {\n  margin-bottom: 8px !important;\n}\n\n.v-application .mb-3 {\n  margin-bottom: 12px !important;\n}\n\n.v-application .mb-4 {\n  margin-bottom: 16px !important;\n}\n\n.v-application .mb-5 {\n  margin-bottom: 20px !important;\n}\n\n.v-application .mb-6 {\n  margin-bottom: 24px !important;\n}\n\n.v-application .mb-7 {\n  margin-bottom: 28px !important;\n}\n\n.v-application .mb-8 {\n  margin-bottom: 32px !important;\n}\n\n.v-application .mb-9 {\n  margin-bottom: 36px !important;\n}\n\n.v-application .mb-10 {\n  margin-bottom: 40px !important;\n}\n\n.v-application .mb-11 {\n  margin-bottom: 44px !important;\n}\n\n.v-application .mb-12 {\n  margin-bottom: 48px !important;\n}\n\n.v-application .mb-13 {\n  margin-bottom: 52px !important;\n}\n\n.v-application .mb-14 {\n  margin-bottom: 56px !important;\n}\n\n.v-application .mb-15 {\n  margin-bottom: 60px !important;\n}\n\n.v-application .mb-16 {\n  margin-bottom: 64px !important;\n}\n\n.v-application .mb-auto {\n  margin-bottom: auto !important;\n}\n\n.v-application .ml-0 {\n  margin-left: 0px !important;\n}\n\n.v-application .ml-1 {\n  margin-left: 4px !important;\n}\n\n.v-application .ml-2 {\n  margin-left: 8px !important;\n}\n\n.v-application .ml-3 {\n  margin-left: 12px !important;\n}\n\n.v-application .ml-4 {\n  margin-left: 16px !important;\n}\n\n.v-application .ml-5 {\n  margin-left: 20px !important;\n}\n\n.v-application .ml-6 {\n  margin-left: 24px !important;\n}\n\n.v-application .ml-7 {\n  margin-left: 28px !important;\n}\n\n.v-application .ml-8 {\n  margin-left: 32px !important;\n}\n\n.v-application .ml-9 {\n  margin-left: 36px !important;\n}\n\n.v-application .ml-10 {\n  margin-left: 40px !important;\n}\n\n.v-application .ml-11 {\n  margin-left: 44px !important;\n}\n\n.v-application .ml-12 {\n  margin-left: 48px !important;\n}\n\n.v-application .ml-13 {\n  margin-left: 52px !important;\n}\n\n.v-application .ml-14 {\n  margin-left: 56px !important;\n}\n\n.v-application .ml-15 {\n  margin-left: 60px !important;\n}\n\n.v-application .ml-16 {\n  margin-left: 64px !important;\n}\n\n.v-application .ml-auto {\n  margin-left: auto !important;\n}\n\n.v-application--is-ltr .ms-0 {\n  margin-left: 0px !important;\n}\n\n.v-application--is-rtl .ms-0 {\n  margin-right: 0px !important;\n}\n\n.v-application--is-ltr .ms-1 {\n  margin-left: 4px !important;\n}\n\n.v-application--is-rtl .ms-1 {\n  margin-right: 4px !important;\n}\n\n.v-application--is-ltr .ms-2 {\n  margin-left: 8px !important;\n}\n\n.v-application--is-rtl .ms-2 {\n  margin-right: 8px !important;\n}\n\n.v-application--is-ltr .ms-3 {\n  margin-left: 12px !important;\n}\n\n.v-application--is-rtl .ms-3 {\n  margin-right: 12px !important;\n}\n\n.v-application--is-ltr .ms-4 {\n  margin-left: 16px !important;\n}\n\n.v-application--is-rtl .ms-4 {\n  margin-right: 16px !important;\n}\n\n.v-application--is-ltr .ms-5 {\n  margin-left: 20px !important;\n}\n\n.v-application--is-rtl .ms-5 {\n  margin-right: 20px !important;\n}\n\n.v-application--is-ltr .ms-6 {\n  margin-left: 24px !important;\n}\n\n.v-application--is-rtl .ms-6 {\n  margin-right: 24px !important;\n}\n\n.v-application--is-ltr .ms-7 {\n  margin-left: 28px !important;\n}\n\n.v-application--is-rtl .ms-7 {\n  margin-right: 28px !important;\n}\n\n.v-application--is-ltr .ms-8 {\n  margin-left: 32px !important;\n}\n\n.v-application--is-rtl .ms-8 {\n  margin-right: 32px !important;\n}\n\n.v-application--is-ltr .ms-9 {\n  margin-left: 36px !important;\n}\n\n.v-application--is-rtl .ms-9 {\n  margin-right: 36px !important;\n}\n\n.v-application--is-ltr .ms-10 {\n  margin-left: 40px !important;\n}\n\n.v-application--is-rtl .ms-10 {\n  margin-right: 40px !important;\n}\n\n.v-application--is-ltr .ms-11 {\n  margin-left: 44px !important;\n}\n\n.v-application--is-rtl .ms-11 {\n  margin-right: 44px !important;\n}\n\n.v-application--is-ltr .ms-12 {\n  margin-left: 48px !important;\n}\n\n.v-application--is-rtl .ms-12 {\n  margin-right: 48px !important;\n}\n\n.v-application--is-ltr .ms-13 {\n  margin-left: 52px !important;\n}\n\n.v-application--is-rtl .ms-13 {\n  margin-right: 52px !important;\n}\n\n.v-application--is-ltr .ms-14 {\n  margin-left: 56px !important;\n}\n\n.v-application--is-rtl .ms-14 {\n  margin-right: 56px !important;\n}\n\n.v-application--is-ltr .ms-15 {\n  margin-left: 60px !important;\n}\n\n.v-application--is-rtl .ms-15 {\n  margin-right: 60px !important;\n}\n\n.v-application--is-ltr .ms-16 {\n  margin-left: 64px !important;\n}\n\n.v-application--is-rtl .ms-16 {\n  margin-right: 64px !important;\n}\n\n.v-application--is-ltr .ms-auto {\n  margin-left: auto !important;\n}\n\n.v-application--is-rtl .ms-auto {\n  margin-right: auto !important;\n}\n\n.v-application--is-ltr .me-0 {\n  margin-right: 0px !important;\n}\n\n.v-application--is-rtl .me-0 {\n  margin-left: 0px !important;\n}\n\n.v-application--is-ltr .me-1 {\n  margin-right: 4px !important;\n}\n\n.v-application--is-rtl .me-1 {\n  margin-left: 4px !important;\n}\n\n.v-application--is-ltr .me-2 {\n  margin-right: 8px !important;\n}\n\n.v-application--is-rtl .me-2 {\n  margin-left: 8px !important;\n}\n\n.v-application--is-ltr .me-3 {\n  margin-right: 12px !important;\n}\n\n.v-application--is-rtl .me-3 {\n  margin-left: 12px !important;\n}\n\n.v-application--is-ltr .me-4 {\n  margin-right: 16px !important;\n}\n\n.v-application--is-rtl .me-4 {\n  margin-left: 16px !important;\n}\n\n.v-application--is-ltr .me-5 {\n  margin-right: 20px !important;\n}\n\n.v-application--is-rtl .me-5 {\n  margin-left: 20px !important;\n}\n\n.v-application--is-ltr .me-6 {\n  margin-right: 24px !important;\n}\n\n.v-application--is-rtl .me-6 {\n  margin-left: 24px !important;\n}\n\n.v-application--is-ltr .me-7 {\n  margin-right: 28px !important;\n}\n\n.v-application--is-rtl .me-7 {\n  margin-left: 28px !important;\n}\n\n.v-application--is-ltr .me-8 {\n  margin-right: 32px !important;\n}\n\n.v-application--is-rtl .me-8 {\n  margin-left: 32px !important;\n}\n\n.v-application--is-ltr .me-9 {\n  margin-right: 36px !important;\n}\n\n.v-application--is-rtl .me-9 {\n  margin-left: 36px !important;\n}\n\n.v-application--is-ltr .me-10 {\n  margin-right: 40px !important;\n}\n\n.v-application--is-rtl .me-10 {\n  margin-left: 40px !important;\n}\n\n.v-application--is-ltr .me-11 {\n  margin-right: 44px !important;\n}\n\n.v-application--is-rtl .me-11 {\n  margin-left: 44px !important;\n}\n\n.v-application--is-ltr .me-12 {\n  margin-right: 48px !important;\n}\n\n.v-application--is-rtl .me-12 {\n  margin-left: 48px !important;\n}\n\n.v-application--is-ltr .me-13 {\n  margin-right: 52px !important;\n}\n\n.v-application--is-rtl .me-13 {\n  margin-left: 52px !important;\n}\n\n.v-application--is-ltr .me-14 {\n  margin-right: 56px !important;\n}\n\n.v-application--is-rtl .me-14 {\n  margin-left: 56px !important;\n}\n\n.v-application--is-ltr .me-15 {\n  margin-right: 60px !important;\n}\n\n.v-application--is-rtl .me-15 {\n  margin-left: 60px !important;\n}\n\n.v-application--is-ltr .me-16 {\n  margin-right: 64px !important;\n}\n\n.v-application--is-rtl .me-16 {\n  margin-left: 64px !important;\n}\n\n.v-application--is-ltr .me-auto {\n  margin-right: auto !important;\n}\n\n.v-application--is-rtl .me-auto {\n  margin-left: auto !important;\n}\n\n.v-application .ma-n1 {\n  margin: -4px !important;\n}\n\n.v-application .ma-n2 {\n  margin: -8px !important;\n}\n\n.v-application .ma-n3 {\n  margin: -12px !important;\n}\n\n.v-application .ma-n4 {\n  margin: -16px !important;\n}\n\n.v-application .ma-n5 {\n  margin: -20px !important;\n}\n\n.v-application .ma-n6 {\n  margin: -24px !important;\n}\n\n.v-application .ma-n7 {\n  margin: -28px !important;\n}\n\n.v-application .ma-n8 {\n  margin: -32px !important;\n}\n\n.v-application .ma-n9 {\n  margin: -36px !important;\n}\n\n.v-application .ma-n10 {\n  margin: -40px !important;\n}\n\n.v-application .ma-n11 {\n  margin: -44px !important;\n}\n\n.v-application .ma-n12 {\n  margin: -48px !important;\n}\n\n.v-application .ma-n13 {\n  margin: -52px !important;\n}\n\n.v-application .ma-n14 {\n  margin: -56px !important;\n}\n\n.v-application .ma-n15 {\n  margin: -60px !important;\n}\n\n.v-application .ma-n16 {\n  margin: -64px !important;\n}\n\n.v-application .mx-n1 {\n  margin-right: -4px !important;\n  margin-left: -4px !important;\n}\n\n.v-application .mx-n2 {\n  margin-right: -8px !important;\n  margin-left: -8px !important;\n}\n\n.v-application .mx-n3 {\n  margin-right: -12px !important;\n  margin-left: -12px !important;\n}\n\n.v-application .mx-n4 {\n  margin-right: -16px !important;\n  margin-left: -16px !important;\n}\n\n.v-application .mx-n5 {\n  margin-right: -20px !important;\n  margin-left: -20px !important;\n}\n\n.v-application .mx-n6 {\n  margin-right: -24px !important;\n  margin-left: -24px !important;\n}\n\n.v-application .mx-n7 {\n  margin-right: -28px !important;\n  margin-left: -28px !important;\n}\n\n.v-application .mx-n8 {\n  margin-right: -32px !important;\n  margin-left: -32px !important;\n}\n\n.v-application .mx-n9 {\n  margin-right: -36px !important;\n  margin-left: -36px !important;\n}\n\n.v-application .mx-n10 {\n  margin-right: -40px !important;\n  margin-left: -40px !important;\n}\n\n.v-application .mx-n11 {\n  margin-right: -44px !important;\n  margin-left: -44px !important;\n}\n\n.v-application .mx-n12 {\n  margin-right: -48px !important;\n  margin-left: -48px !important;\n}\n\n.v-application .mx-n13 {\n  margin-right: -52px !important;\n  margin-left: -52px !important;\n}\n\n.v-application .mx-n14 {\n  margin-right: -56px !important;\n  margin-left: -56px !important;\n}\n\n.v-application .mx-n15 {\n  margin-right: -60px !important;\n  margin-left: -60px !important;\n}\n\n.v-application .mx-n16 {\n  margin-right: -64px !important;\n  margin-left: -64px !important;\n}\n\n.v-application .my-n1 {\n  margin-top: -4px !important;\n  margin-bottom: -4px !important;\n}\n\n.v-application .my-n2 {\n  margin-top: -8px !important;\n  margin-bottom: -8px !important;\n}\n\n.v-application .my-n3 {\n  margin-top: -12px !important;\n  margin-bottom: -12px !important;\n}\n\n.v-application .my-n4 {\n  margin-top: -16px !important;\n  margin-bottom: -16px !important;\n}\n\n.v-application .my-n5 {\n  margin-top: -20px !important;\n  margin-bottom: -20px !important;\n}\n\n.v-application .my-n6 {\n  margin-top: -24px !important;\n  margin-bottom: -24px !important;\n}\n\n.v-application .my-n7 {\n  margin-top: -28px !important;\n  margin-bottom: -28px !important;\n}\n\n.v-application .my-n8 {\n  margin-top: -32px !important;\n  margin-bottom: -32px !important;\n}\n\n.v-application .my-n9 {\n  margin-top: -36px !important;\n  margin-bottom: -36px !important;\n}\n\n.v-application .my-n10 {\n  margin-top: -40px !important;\n  margin-bottom: -40px !important;\n}\n\n.v-application .my-n11 {\n  margin-top: -44px !important;\n  margin-bottom: -44px !important;\n}\n\n.v-application .my-n12 {\n  margin-top: -48px !important;\n  margin-bottom: -48px !important;\n}\n\n.v-application .my-n13 {\n  margin-top: -52px !important;\n  margin-bottom: -52px !important;\n}\n\n.v-application .my-n14 {\n  margin-top: -56px !important;\n  margin-bottom: -56px !important;\n}\n\n.v-application .my-n15 {\n  margin-top: -60px !important;\n  margin-bottom: -60px !important;\n}\n\n.v-application .my-n16 {\n  margin-top: -64px !important;\n  margin-bottom: -64px !important;\n}\n\n.v-application .mt-n1 {\n  margin-top: -4px !important;\n}\n\n.v-application .mt-n2 {\n  margin-top: -8px !important;\n}\n\n.v-application .mt-n3 {\n  margin-top: -12px !important;\n}\n\n.v-application .mt-n4 {\n  margin-top: -16px !important;\n}\n\n.v-application .mt-n5 {\n  margin-top: -20px !important;\n}\n\n.v-application .mt-n6 {\n  margin-top: -24px !important;\n}\n\n.v-application .mt-n7 {\n  margin-top: -28px !important;\n}\n\n.v-application .mt-n8 {\n  margin-top: -32px !important;\n}\n\n.v-application .mt-n9 {\n  margin-top: -36px !important;\n}\n\n.v-application .mt-n10 {\n  margin-top: -40px !important;\n}\n\n.v-application .mt-n11 {\n  margin-top: -44px !important;\n}\n\n.v-application .mt-n12 {\n  margin-top: -48px !important;\n}\n\n.v-application .mt-n13 {\n  margin-top: -52px !important;\n}\n\n.v-application .mt-n14 {\n  margin-top: -56px !important;\n}\n\n.v-application .mt-n15 {\n  margin-top: -60px !important;\n}\n\n.v-application .mt-n16 {\n  margin-top: -64px !important;\n}\n\n.v-application .mr-n1 {\n  margin-right: -4px !important;\n}\n\n.v-application .mr-n2 {\n  margin-right: -8px !important;\n}\n\n.v-application .mr-n3 {\n  margin-right: -12px !important;\n}\n\n.v-application .mr-n4 {\n  margin-right: -16px !important;\n}\n\n.v-application .mr-n5 {\n  margin-right: -20px !important;\n}\n\n.v-application .mr-n6 {\n  margin-right: -24px !important;\n}\n\n.v-application .mr-n7 {\n  margin-right: -28px !important;\n}\n\n.v-application .mr-n8 {\n  margin-right: -32px !important;\n}\n\n.v-application .mr-n9 {\n  margin-right: -36px !important;\n}\n\n.v-application .mr-n10 {\n  margin-right: -40px !important;\n}\n\n.v-application .mr-n11 {\n  margin-right: -44px !important;\n}\n\n.v-application .mr-n12 {\n  margin-right: -48px !important;\n}\n\n.v-application .mr-n13 {\n  margin-right: -52px !important;\n}\n\n.v-application .mr-n14 {\n  margin-right: -56px !important;\n}\n\n.v-application .mr-n15 {\n  margin-right: -60px !important;\n}\n\n.v-application .mr-n16 {\n  margin-right: -64px !important;\n}\n\n.v-application .mb-n1 {\n  margin-bottom: -4px !important;\n}\n\n.v-application .mb-n2 {\n  margin-bottom: -8px !important;\n}\n\n.v-application .mb-n3 {\n  margin-bottom: -12px !important;\n}\n\n.v-application .mb-n4 {\n  margin-bottom: -16px !important;\n}\n\n.v-application .mb-n5 {\n  margin-bottom: -20px !important;\n}\n\n.v-application .mb-n6 {\n  margin-bottom: -24px !important;\n}\n\n.v-application .mb-n7 {\n  margin-bottom: -28px !important;\n}\n\n.v-application .mb-n8 {\n  margin-bottom: -32px !important;\n}\n\n.v-application .mb-n9 {\n  margin-bottom: -36px !important;\n}\n\n.v-application .mb-n10 {\n  margin-bottom: -40px !important;\n}\n\n.v-application .mb-n11 {\n  margin-bottom: -44px !important;\n}\n\n.v-application .mb-n12 {\n  margin-bottom: -48px !important;\n}\n\n.v-application .mb-n13 {\n  margin-bottom: -52px !important;\n}\n\n.v-application .mb-n14 {\n  margin-bottom: -56px !important;\n}\n\n.v-application .mb-n15 {\n  margin-bottom: -60px !important;\n}\n\n.v-application .mb-n16 {\n  margin-bottom: -64px !important;\n}\n\n.v-application .ml-n1 {\n  margin-left: -4px !important;\n}\n\n.v-application .ml-n2 {\n  margin-left: -8px !important;\n}\n\n.v-application .ml-n3 {\n  margin-left: -12px !important;\n}\n\n.v-application .ml-n4 {\n  margin-left: -16px !important;\n}\n\n.v-application .ml-n5 {\n  margin-left: -20px !important;\n}\n\n.v-application .ml-n6 {\n  margin-left: -24px !important;\n}\n\n.v-application .ml-n7 {\n  margin-left: -28px !important;\n}\n\n.v-application .ml-n8 {\n  margin-left: -32px !important;\n}\n\n.v-application .ml-n9 {\n  margin-left: -36px !important;\n}\n\n.v-application .ml-n10 {\n  margin-left: -40px !important;\n}\n\n.v-application .ml-n11 {\n  margin-left: -44px !important;\n}\n\n.v-application .ml-n12 {\n  margin-left: -48px !important;\n}\n\n.v-application .ml-n13 {\n  margin-left: -52px !important;\n}\n\n.v-application .ml-n14 {\n  margin-left: -56px !important;\n}\n\n.v-application .ml-n15 {\n  margin-left: -60px !important;\n}\n\n.v-application .ml-n16 {\n  margin-left: -64px !important;\n}\n\n.v-application--is-ltr .ms-n1 {\n  margin-left: -4px !important;\n}\n\n.v-application--is-rtl .ms-n1 {\n  margin-right: -4px !important;\n}\n\n.v-application--is-ltr .ms-n2 {\n  margin-left: -8px !important;\n}\n\n.v-application--is-rtl .ms-n2 {\n  margin-right: -8px !important;\n}\n\n.v-application--is-ltr .ms-n3 {\n  margin-left: -12px !important;\n}\n\n.v-application--is-rtl .ms-n3 {\n  margin-right: -12px !important;\n}\n\n.v-application--is-ltr .ms-n4 {\n  margin-left: -16px !important;\n}\n\n.v-application--is-rtl .ms-n4 {\n  margin-right: -16px !important;\n}\n\n.v-application--is-ltr .ms-n5 {\n  margin-left: -20px !important;\n}\n\n.v-application--is-rtl .ms-n5 {\n  margin-right: -20px !important;\n}\n\n.v-application--is-ltr .ms-n6 {\n  margin-left: -24px !important;\n}\n\n.v-application--is-rtl .ms-n6 {\n  margin-right: -24px !important;\n}\n\n.v-application--is-ltr .ms-n7 {\n  margin-left: -28px !important;\n}\n\n.v-application--is-rtl .ms-n7 {\n  margin-right: -28px !important;\n}\n\n.v-application--is-ltr .ms-n8 {\n  margin-left: -32px !important;\n}\n\n.v-application--is-rtl .ms-n8 {\n  margin-right: -32px !important;\n}\n\n.v-application--is-ltr .ms-n9 {\n  margin-left: -36px !important;\n}\n\n.v-application--is-rtl .ms-n9 {\n  margin-right: -36px !important;\n}\n\n.v-application--is-ltr .ms-n10 {\n  margin-left: -40px !important;\n}\n\n.v-application--is-rtl .ms-n10 {\n  margin-right: -40px !important;\n}\n\n.v-application--is-ltr .ms-n11 {\n  margin-left: -44px !important;\n}\n\n.v-application--is-rtl .ms-n11 {\n  margin-right: -44px !important;\n}\n\n.v-application--is-ltr .ms-n12 {\n  margin-left: -48px !important;\n}\n\n.v-application--is-rtl .ms-n12 {\n  margin-right: -48px !important;\n}\n\n.v-application--is-ltr .ms-n13 {\n  margin-left: -52px !important;\n}\n\n.v-application--is-rtl .ms-n13 {\n  margin-right: -52px !important;\n}\n\n.v-application--is-ltr .ms-n14 {\n  margin-left: -56px !important;\n}\n\n.v-application--is-rtl .ms-n14 {\n  margin-right: -56px !important;\n}\n\n.v-application--is-ltr .ms-n15 {\n  margin-left: -60px !important;\n}\n\n.v-application--is-rtl .ms-n15 {\n  margin-right: -60px !important;\n}\n\n.v-application--is-ltr .ms-n16 {\n  margin-left: -64px !important;\n}\n\n.v-application--is-rtl .ms-n16 {\n  margin-right: -64px !important;\n}\n\n.v-application--is-ltr .me-n1 {\n  margin-right: -4px !important;\n}\n\n.v-application--is-rtl .me-n1 {\n  margin-left: -4px !important;\n}\n\n.v-application--is-ltr .me-n2 {\n  margin-right: -8px !important;\n}\n\n.v-application--is-rtl .me-n2 {\n  margin-left: -8px !important;\n}\n\n.v-application--is-ltr .me-n3 {\n  margin-right: -12px !important;\n}\n\n.v-application--is-rtl .me-n3 {\n  margin-left: -12px !important;\n}\n\n.v-application--is-ltr .me-n4 {\n  margin-right: -16px !important;\n}\n\n.v-application--is-rtl .me-n4 {\n  margin-left: -16px !important;\n}\n\n.v-application--is-ltr .me-n5 {\n  margin-right: -20px !important;\n}\n\n.v-application--is-rtl .me-n5 {\n  margin-left: -20px !important;\n}\n\n.v-application--is-ltr .me-n6 {\n  margin-right: -24px !important;\n}\n\n.v-application--is-rtl .me-n6 {\n  margin-left: -24px !important;\n}\n\n.v-application--is-ltr .me-n7 {\n  margin-right: -28px !important;\n}\n\n.v-application--is-rtl .me-n7 {\n  margin-left: -28px !important;\n}\n\n.v-application--is-ltr .me-n8 {\n  margin-right: -32px !important;\n}\n\n.v-application--is-rtl .me-n8 {\n  margin-left: -32px !important;\n}\n\n.v-application--is-ltr .me-n9 {\n  margin-right: -36px !important;\n}\n\n.v-application--is-rtl .me-n9 {\n  margin-left: -36px !important;\n}\n\n.v-application--is-ltr .me-n10 {\n  margin-right: -40px !important;\n}\n\n.v-application--is-rtl .me-n10 {\n  margin-left: -40px !important;\n}\n\n.v-application--is-ltr .me-n11 {\n  margin-right: -44px !important;\n}\n\n.v-application--is-rtl .me-n11 {\n  margin-left: -44px !important;\n}\n\n.v-application--is-ltr .me-n12 {\n  margin-right: -48px !important;\n}\n\n.v-application--is-rtl .me-n12 {\n  margin-left: -48px !important;\n}\n\n.v-application--is-ltr .me-n13 {\n  margin-right: -52px !important;\n}\n\n.v-application--is-rtl .me-n13 {\n  margin-left: -52px !important;\n}\n\n.v-application--is-ltr .me-n14 {\n  margin-right: -56px !important;\n}\n\n.v-application--is-rtl .me-n14 {\n  margin-left: -56px !important;\n}\n\n.v-application--is-ltr .me-n15 {\n  margin-right: -60px !important;\n}\n\n.v-application--is-rtl .me-n15 {\n  margin-left: -60px !important;\n}\n\n.v-application--is-ltr .me-n16 {\n  margin-right: -64px !important;\n}\n\n.v-application--is-rtl .me-n16 {\n  margin-left: -64px !important;\n}\n\n.v-application .pa-0 {\n  padding: 0px !important;\n}\n\n.v-application .pa-1 {\n  padding: 4px !important;\n}\n\n.v-application .pa-2 {\n  padding: 8px !important;\n}\n\n.v-application .pa-3 {\n  padding: 12px !important;\n}\n\n.v-application .pa-4 {\n  padding: 16px !important;\n}\n\n.v-application .pa-5 {\n  padding: 20px !important;\n}\n\n.v-application .pa-6 {\n  padding: 24px !important;\n}\n\n.v-application .pa-7 {\n  padding: 28px !important;\n}\n\n.v-application .pa-8 {\n  padding: 32px !important;\n}\n\n.v-application .pa-9 {\n  padding: 36px !important;\n}\n\n.v-application .pa-10 {\n  padding: 40px !important;\n}\n\n.v-application .pa-11 {\n  padding: 44px !important;\n}\n\n.v-application .pa-12 {\n  padding: 48px !important;\n}\n\n.v-application .pa-13 {\n  padding: 52px !important;\n}\n\n.v-application .pa-14 {\n  padding: 56px !important;\n}\n\n.v-application .pa-15 {\n  padding: 60px !important;\n}\n\n.v-application .pa-16 {\n  padding: 64px !important;\n}\n\n.v-application .px-0 {\n  padding-right: 0px !important;\n  padding-left: 0px !important;\n}\n\n.v-application .px-1 {\n  padding-right: 4px !important;\n  padding-left: 4px !important;\n}\n\n.v-application .px-2 {\n  padding-right: 8px !important;\n  padding-left: 8px !important;\n}\n\n.v-application .px-3 {\n  padding-right: 12px !important;\n  padding-left: 12px !important;\n}\n\n.v-application .px-4 {\n  padding-right: 16px !important;\n  padding-left: 16px !important;\n}\n\n.v-application .px-5 {\n  padding-right: 20px !important;\n  padding-left: 20px !important;\n}\n\n.v-application .px-6 {\n  padding-right: 24px !important;\n  padding-left: 24px !important;\n}\n\n.v-application .px-7 {\n  padding-right: 28px !important;\n  padding-left: 28px !important;\n}\n\n.v-application .px-8 {\n  padding-right: 32px !important;\n  padding-left: 32px !important;\n}\n\n.v-application .px-9 {\n  padding-right: 36px !important;\n  padding-left: 36px !important;\n}\n\n.v-application .px-10 {\n  padding-right: 40px !important;\n  padding-left: 40px !important;\n}\n\n.v-application .px-11 {\n  padding-right: 44px !important;\n  padding-left: 44px !important;\n}\n\n.v-application .px-12 {\n  padding-right: 48px !important;\n  padding-left: 48px !important;\n}\n\n.v-application .px-13 {\n  padding-right: 52px !important;\n  padding-left: 52px !important;\n}\n\n.v-application .px-14 {\n  padding-right: 56px !important;\n  padding-left: 56px !important;\n}\n\n.v-application .px-15 {\n  padding-right: 60px !important;\n  padding-left: 60px !important;\n}\n\n.v-application .px-16 {\n  padding-right: 64px !important;\n  padding-left: 64px !important;\n}\n\n.v-application .py-0 {\n  padding-top: 0px !important;\n  padding-bottom: 0px !important;\n}\n\n.v-application .py-1 {\n  padding-top: 4px !important;\n  padding-bottom: 4px !important;\n}\n\n.v-application .py-2 {\n  padding-top: 8px !important;\n  padding-bottom: 8px !important;\n}\n\n.v-application .py-3 {\n  padding-top: 12px !important;\n  padding-bottom: 12px !important;\n}\n\n.v-application .py-4 {\n  padding-top: 16px !important;\n  padding-bottom: 16px !important;\n}\n\n.v-application .py-5 {\n  padding-top: 20px !important;\n  padding-bottom: 20px !important;\n}\n\n.v-application .py-6 {\n  padding-top: 24px !important;\n  padding-bottom: 24px !important;\n}\n\n.v-application .py-7 {\n  padding-top: 28px !important;\n  padding-bottom: 28px !important;\n}\n\n.v-application .py-8 {\n  padding-top: 32px !important;\n  padding-bottom: 32px !important;\n}\n\n.v-application .py-9 {\n  padding-top: 36px !important;\n  padding-bottom: 36px !important;\n}\n\n.v-application .py-10 {\n  padding-top: 40px !important;\n  padding-bottom: 40px !important;\n}\n\n.v-application .py-11 {\n  padding-top: 44px !important;\n  padding-bottom: 44px !important;\n}\n\n.v-application .py-12 {\n  padding-top: 48px !important;\n  padding-bottom: 48px !important;\n}\n\n.v-application .py-13 {\n  padding-top: 52px !important;\n  padding-bottom: 52px !important;\n}\n\n.v-application .py-14 {\n  padding-top: 56px !important;\n  padding-bottom: 56px !important;\n}\n\n.v-application .py-15 {\n  padding-top: 60px !important;\n  padding-bottom: 60px !important;\n}\n\n.v-application .py-16 {\n  padding-top: 64px !important;\n  padding-bottom: 64px !important;\n}\n\n.v-application .pt-0 {\n  padding-top: 0px !important;\n}\n\n.v-application .pt-1 {\n  padding-top: 4px !important;\n}\n\n.v-application .pt-2 {\n  padding-top: 8px !important;\n}\n\n.v-application .pt-3 {\n  padding-top: 12px !important;\n}\n\n.v-application .pt-4 {\n  padding-top: 16px !important;\n}\n\n.v-application .pt-5 {\n  padding-top: 20px !important;\n}\n\n.v-application .pt-6 {\n  padding-top: 24px !important;\n}\n\n.v-application .pt-7 {\n  padding-top: 28px !important;\n}\n\n.v-application .pt-8 {\n  padding-top: 32px !important;\n}\n\n.v-application .pt-9 {\n  padding-top: 36px !important;\n}\n\n.v-application .pt-10 {\n  padding-top: 40px !important;\n}\n\n.v-application .pt-11 {\n  padding-top: 44px !important;\n}\n\n.v-application .pt-12 {\n  padding-top: 48px !important;\n}\n\n.v-application .pt-13 {\n  padding-top: 52px !important;\n}\n\n.v-application .pt-14 {\n  padding-top: 56px !important;\n}\n\n.v-application .pt-15 {\n  padding-top: 60px !important;\n}\n\n.v-application .pt-16 {\n  padding-top: 64px !important;\n}\n\n.v-application .pr-0 {\n  padding-right: 0px !important;\n}\n\n.v-application .pr-1 {\n  padding-right: 4px !important;\n}\n\n.v-application .pr-2 {\n  padding-right: 8px !important;\n}\n\n.v-application .pr-3 {\n  padding-right: 12px !important;\n}\n\n.v-application .pr-4 {\n  padding-right: 16px !important;\n}\n\n.v-application .pr-5 {\n  padding-right: 20px !important;\n}\n\n.v-application .pr-6 {\n  padding-right: 24px !important;\n}\n\n.v-application .pr-7 {\n  padding-right: 28px !important;\n}\n\n.v-application .pr-8 {\n  padding-right: 32px !important;\n}\n\n.v-application .pr-9 {\n  padding-right: 36px !important;\n}\n\n.v-application .pr-10 {\n  padding-right: 40px !important;\n}\n\n.v-application .pr-11 {\n  padding-right: 44px !important;\n}\n\n.v-application .pr-12 {\n  padding-right: 48px !important;\n}\n\n.v-application .pr-13 {\n  padding-right: 52px !important;\n}\n\n.v-application .pr-14 {\n  padding-right: 56px !important;\n}\n\n.v-application .pr-15 {\n  padding-right: 60px !important;\n}\n\n.v-application .pr-16 {\n  padding-right: 64px !important;\n}\n\n.v-application .pb-0 {\n  padding-bottom: 0px !important;\n}\n\n.v-application .pb-1 {\n  padding-bottom: 4px !important;\n}\n\n.v-application .pb-2 {\n  padding-bottom: 8px !important;\n}\n\n.v-application .pb-3 {\n  padding-bottom: 12px !important;\n}\n\n.v-application .pb-4 {\n  padding-bottom: 16px !important;\n}\n\n.v-application .pb-5 {\n  padding-bottom: 20px !important;\n}\n\n.v-application .pb-6 {\n  padding-bottom: 24px !important;\n}\n\n.v-application .pb-7 {\n  padding-bottom: 28px !important;\n}\n\n.v-application .pb-8 {\n  padding-bottom: 32px !important;\n}\n\n.v-application .pb-9 {\n  padding-bottom: 36px !important;\n}\n\n.v-application .pb-10 {\n  padding-bottom: 40px !important;\n}\n\n.v-application .pb-11 {\n  padding-bottom: 44px !important;\n}\n\n.v-application .pb-12 {\n  padding-bottom: 48px !important;\n}\n\n.v-application .pb-13 {\n  padding-bottom: 52px !important;\n}\n\n.v-application .pb-14 {\n  padding-bottom: 56px !important;\n}\n\n.v-application .pb-15 {\n  padding-bottom: 60px !important;\n}\n\n.v-application .pb-16 {\n  padding-bottom: 64px !important;\n}\n\n.v-application .pl-0 {\n  padding-left: 0px !important;\n}\n\n.v-application .pl-1 {\n  padding-left: 4px !important;\n}\n\n.v-application .pl-2 {\n  padding-left: 8px !important;\n}\n\n.v-application .pl-3 {\n  padding-left: 12px !important;\n}\n\n.v-application .pl-4 {\n  padding-left: 16px !important;\n}\n\n.v-application .pl-5 {\n  padding-left: 20px !important;\n}\n\n.v-application .pl-6 {\n  padding-left: 24px !important;\n}\n\n.v-application .pl-7 {\n  padding-left: 28px !important;\n}\n\n.v-application .pl-8 {\n  padding-left: 32px !important;\n}\n\n.v-application .pl-9 {\n  padding-left: 36px !important;\n}\n\n.v-application .pl-10 {\n  padding-left: 40px !important;\n}\n\n.v-application .pl-11 {\n  padding-left: 44px !important;\n}\n\n.v-application .pl-12 {\n  padding-left: 48px !important;\n}\n\n.v-application .pl-13 {\n  padding-left: 52px !important;\n}\n\n.v-application .pl-14 {\n  padding-left: 56px !important;\n}\n\n.v-application .pl-15 {\n  padding-left: 60px !important;\n}\n\n.v-application .pl-16 {\n  padding-left: 64px !important;\n}\n\n.v-application--is-ltr .ps-0 {\n  padding-left: 0px !important;\n}\n\n.v-application--is-rtl .ps-0 {\n  padding-right: 0px !important;\n}\n\n.v-application--is-ltr .ps-1 {\n  padding-left: 4px !important;\n}\n\n.v-application--is-rtl .ps-1 {\n  padding-right: 4px !important;\n}\n\n.v-application--is-ltr .ps-2 {\n  padding-left: 8px !important;\n}\n\n.v-application--is-rtl .ps-2 {\n  padding-right: 8px !important;\n}\n\n.v-application--is-ltr .ps-3 {\n  padding-left: 12px !important;\n}\n\n.v-application--is-rtl .ps-3 {\n  padding-right: 12px !important;\n}\n\n.v-application--is-ltr .ps-4 {\n  padding-left: 16px !important;\n}\n\n.v-application--is-rtl .ps-4 {\n  padding-right: 16px !important;\n}\n\n.v-application--is-ltr .ps-5 {\n  padding-left: 20px !important;\n}\n\n.v-application--is-rtl .ps-5 {\n  padding-right: 20px !important;\n}\n\n.v-application--is-ltr .ps-6 {\n  padding-left: 24px !important;\n}\n\n.v-application--is-rtl .ps-6 {\n  padding-right: 24px !important;\n}\n\n.v-application--is-ltr .ps-7 {\n  padding-left: 28px !important;\n}\n\n.v-application--is-rtl .ps-7 {\n  padding-right: 28px !important;\n}\n\n.v-application--is-ltr .ps-8 {\n  padding-left: 32px !important;\n}\n\n.v-application--is-rtl .ps-8 {\n  padding-right: 32px !important;\n}\n\n.v-application--is-ltr .ps-9 {\n  padding-left: 36px !important;\n}\n\n.v-application--is-rtl .ps-9 {\n  padding-right: 36px !important;\n}\n\n.v-application--is-ltr .ps-10 {\n  padding-left: 40px !important;\n}\n\n.v-application--is-rtl .ps-10 {\n  padding-right: 40px !important;\n}\n\n.v-application--is-ltr .ps-11 {\n  padding-left: 44px !important;\n}\n\n.v-application--is-rtl .ps-11 {\n  padding-right: 44px !important;\n}\n\n.v-application--is-ltr .ps-12 {\n  padding-left: 48px !important;\n}\n\n.v-application--is-rtl .ps-12 {\n  padding-right: 48px !important;\n}\n\n.v-application--is-ltr .ps-13 {\n  padding-left: 52px !important;\n}\n\n.v-application--is-rtl .ps-13 {\n  padding-right: 52px !important;\n}\n\n.v-application--is-ltr .ps-14 {\n  padding-left: 56px !important;\n}\n\n.v-application--is-rtl .ps-14 {\n  padding-right: 56px !important;\n}\n\n.v-application--is-ltr .ps-15 {\n  padding-left: 60px !important;\n}\n\n.v-application--is-rtl .ps-15 {\n  padding-right: 60px !important;\n}\n\n.v-application--is-ltr .ps-16 {\n  padding-left: 64px !important;\n}\n\n.v-application--is-rtl .ps-16 {\n  padding-right: 64px !important;\n}\n\n.v-application--is-ltr .pe-0 {\n  padding-right: 0px !important;\n}\n\n.v-application--is-rtl .pe-0 {\n  padding-left: 0px !important;\n}\n\n.v-application--is-ltr .pe-1 {\n  padding-right: 4px !important;\n}\n\n.v-application--is-rtl .pe-1 {\n  padding-left: 4px !important;\n}\n\n.v-application--is-ltr .pe-2 {\n  padding-right: 8px !important;\n}\n\n.v-application--is-rtl .pe-2 {\n  padding-left: 8px !important;\n}\n\n.v-application--is-ltr .pe-3 {\n  padding-right: 12px !important;\n}\n\n.v-application--is-rtl .pe-3 {\n  padding-left: 12px !important;\n}\n\n.v-application--is-ltr .pe-4 {\n  padding-right: 16px !important;\n}\n\n.v-application--is-rtl .pe-4 {\n  padding-left: 16px !important;\n}\n\n.v-application--is-ltr .pe-5 {\n  padding-right: 20px !important;\n}\n\n.v-application--is-rtl .pe-5 {\n  padding-left: 20px !important;\n}\n\n.v-application--is-ltr .pe-6 {\n  padding-right: 24px !important;\n}\n\n.v-application--is-rtl .pe-6 {\n  padding-left: 24px !important;\n}\n\n.v-application--is-ltr .pe-7 {\n  padding-right: 28px !important;\n}\n\n.v-application--is-rtl .pe-7 {\n  padding-left: 28px !important;\n}\n\n.v-application--is-ltr .pe-8 {\n  padding-right: 32px !important;\n}\n\n.v-application--is-rtl .pe-8 {\n  padding-left: 32px !important;\n}\n\n.v-application--is-ltr .pe-9 {\n  padding-right: 36px !important;\n}\n\n.v-application--is-rtl .pe-9 {\n  padding-left: 36px !important;\n}\n\n.v-application--is-ltr .pe-10 {\n  padding-right: 40px !important;\n}\n\n.v-application--is-rtl .pe-10 {\n  padding-left: 40px !important;\n}\n\n.v-application--is-ltr .pe-11 {\n  padding-right: 44px !important;\n}\n\n.v-application--is-rtl .pe-11 {\n  padding-left: 44px !important;\n}\n\n.v-application--is-ltr .pe-12 {\n  padding-right: 48px !important;\n}\n\n.v-application--is-rtl .pe-12 {\n  padding-left: 48px !important;\n}\n\n.v-application--is-ltr .pe-13 {\n  padding-right: 52px !important;\n}\n\n.v-application--is-rtl .pe-13 {\n  padding-left: 52px !important;\n}\n\n.v-application--is-ltr .pe-14 {\n  padding-right: 56px !important;\n}\n\n.v-application--is-rtl .pe-14 {\n  padding-left: 56px !important;\n}\n\n.v-application--is-ltr .pe-15 {\n  padding-right: 60px !important;\n}\n\n.v-application--is-rtl .pe-15 {\n  padding-left: 60px !important;\n}\n\n.v-application--is-ltr .pe-16 {\n  padding-right: 64px !important;\n}\n\n.v-application--is-rtl .pe-16 {\n  padding-left: 64px !important;\n}\n\n.v-application .rounded-0 {\n  border-radius: 0 !important;\n}\n\n.v-application .rounded-sm {\n  border-radius: 2px !important;\n}\n\n.v-application .rounded {\n  border-radius: 4px !important;\n}\n\n.v-application .rounded-lg {\n  border-radius: 8px !important;\n}\n\n.v-application .rounded-xl {\n  border-radius: 24px !important;\n}\n\n.v-application .rounded-pill {\n  border-radius: 9999px !important;\n}\n\n.v-application .rounded-circle {\n  border-radius: 50% !important;\n}\n\n.v-application .rounded-t-0 {\n  border-top-left-radius: 0 !important;\n  border-top-right-radius: 0 !important;\n}\n\n.v-application .rounded-t-sm {\n  border-top-left-radius: 2px !important;\n  border-top-right-radius: 2px !important;\n}\n\n.v-application .rounded-t {\n  border-top-left-radius: 4px !important;\n  border-top-right-radius: 4px !important;\n}\n\n.v-application .rounded-t-lg {\n  border-top-left-radius: 8px !important;\n  border-top-right-radius: 8px !important;\n}\n\n.v-application .rounded-t-xl {\n  border-top-left-radius: 24px !important;\n  border-top-right-radius: 24px !important;\n}\n\n.v-application .rounded-t-pill {\n  border-top-left-radius: 9999px !important;\n  border-top-right-radius: 9999px !important;\n}\n\n.v-application .rounded-t-circle {\n  border-top-left-radius: 50% !important;\n  border-top-right-radius: 50% !important;\n}\n\n.v-application .rounded-r-0 {\n  border-top-right-radius: 0 !important;\n  border-bottom-right-radius: 0 !important;\n}\n\n.v-application .rounded-r-sm {\n  border-top-right-radius: 2px !important;\n  border-bottom-right-radius: 2px !important;\n}\n\n.v-application .rounded-r {\n  border-top-right-radius: 4px !important;\n  border-bottom-right-radius: 4px !important;\n}\n\n.v-application .rounded-r-lg {\n  border-top-right-radius: 8px !important;\n  border-bottom-right-radius: 8px !important;\n}\n\n.v-application .rounded-r-xl {\n  border-top-right-radius: 24px !important;\n  border-bottom-right-radius: 24px !important;\n}\n\n.v-application .rounded-r-pill {\n  border-top-right-radius: 9999px !important;\n  border-bottom-right-radius: 9999px !important;\n}\n\n.v-application .rounded-r-circle {\n  border-top-right-radius: 50% !important;\n  border-bottom-right-radius: 50% !important;\n}\n\n.v-application .rounded-b-0 {\n  border-bottom-left-radius: 0 !important;\n  border-bottom-right-radius: 0 !important;\n}\n\n.v-application .rounded-b-sm {\n  border-bottom-left-radius: 2px !important;\n  border-bottom-right-radius: 2px !important;\n}\n\n.v-application .rounded-b {\n  border-bottom-left-radius: 4px !important;\n  border-bottom-right-radius: 4px !important;\n}\n\n.v-application .rounded-b-lg {\n  border-bottom-left-radius: 8px !important;\n  border-bottom-right-radius: 8px !important;\n}\n\n.v-application .rounded-b-xl {\n  border-bottom-left-radius: 24px !important;\n  border-bottom-right-radius: 24px !important;\n}\n\n.v-application .rounded-b-pill {\n  border-bottom-left-radius: 9999px !important;\n  border-bottom-right-radius: 9999px !important;\n}\n\n.v-application .rounded-b-circle {\n  border-bottom-left-radius: 50% !important;\n  border-bottom-right-radius: 50% !important;\n}\n\n.v-application .rounded-l-0 {\n  border-top-left-radius: 0 !important;\n  border-bottom-left-radius: 0 !important;\n}\n\n.v-application .rounded-l-sm {\n  border-top-left-radius: 2px !important;\n  border-bottom-left-radius: 2px !important;\n}\n\n.v-application .rounded-l {\n  border-top-left-radius: 4px !important;\n  border-bottom-left-radius: 4px !important;\n}\n\n.v-application .rounded-l-lg {\n  border-top-left-radius: 8px !important;\n  border-bottom-left-radius: 8px !important;\n}\n\n.v-application .rounded-l-xl {\n  border-top-left-radius: 24px !important;\n  border-bottom-left-radius: 24px !important;\n}\n\n.v-application .rounded-l-pill {\n  border-top-left-radius: 9999px !important;\n  border-bottom-left-radius: 9999px !important;\n}\n\n.v-application .rounded-l-circle {\n  border-top-left-radius: 50% !important;\n  border-bottom-left-radius: 50% !important;\n}\n\n.v-application .rounded-tl-0 {\n  border-top-left-radius: 0 !important;\n}\n\n.v-application .rounded-tl-sm {\n  border-top-left-radius: 2px !important;\n}\n\n.v-application .rounded-tl {\n  border-top-left-radius: 4px !important;\n}\n\n.v-application .rounded-tl-lg {\n  border-top-left-radius: 8px !important;\n}\n\n.v-application .rounded-tl-xl {\n  border-top-left-radius: 24px !important;\n}\n\n.v-application .rounded-tl-pill {\n  border-top-left-radius: 9999px !important;\n}\n\n.v-application .rounded-tl-circle {\n  border-top-left-radius: 50% !important;\n}\n\n.v-application .rounded-tr-0 {\n  border-top-right-radius: 0 !important;\n}\n\n.v-application .rounded-tr-sm {\n  border-top-right-radius: 2px !important;\n}\n\n.v-application .rounded-tr {\n  border-top-right-radius: 4px !important;\n}\n\n.v-application .rounded-tr-lg {\n  border-top-right-radius: 8px !important;\n}\n\n.v-application .rounded-tr-xl {\n  border-top-right-radius: 24px !important;\n}\n\n.v-application .rounded-tr-pill {\n  border-top-right-radius: 9999px !important;\n}\n\n.v-application .rounded-tr-circle {\n  border-top-right-radius: 50% !important;\n}\n\n.v-application .rounded-br-0 {\n  border-bottom-right-radius: 0 !important;\n}\n\n.v-application .rounded-br-sm {\n  border-bottom-right-radius: 2px !important;\n}\n\n.v-application .rounded-br {\n  border-bottom-right-radius: 4px !important;\n}\n\n.v-application .rounded-br-lg {\n  border-bottom-right-radius: 8px !important;\n}\n\n.v-application .rounded-br-xl {\n  border-bottom-right-radius: 24px !important;\n}\n\n.v-application .rounded-br-pill {\n  border-bottom-right-radius: 9999px !important;\n}\n\n.v-application .rounded-br-circle {\n  border-bottom-right-radius: 50% !important;\n}\n\n.v-application .rounded-bl-0 {\n  border-bottom-left-radius: 0 !important;\n}\n\n.v-application .rounded-bl-sm {\n  border-bottom-left-radius: 2px !important;\n}\n\n.v-application .rounded-bl {\n  border-bottom-left-radius: 4px !important;\n}\n\n.v-application .rounded-bl-lg {\n  border-bottom-left-radius: 8px !important;\n}\n\n.v-application .rounded-bl-xl {\n  border-bottom-left-radius: 24px !important;\n}\n\n.v-application .rounded-bl-pill {\n  border-bottom-left-radius: 9999px !important;\n}\n\n.v-application .rounded-bl-circle {\n  border-bottom-left-radius: 50% !important;\n}\n\n.v-application .text-left {\n  text-align: left !important;\n}\n\n.v-application .text-right {\n  text-align: right !important;\n}\n\n.v-application .text-center {\n  text-align: center !important;\n}\n\n.v-application .text-justify {\n  text-align: justify !important;\n}\n\n.v-application .text-start {\n  text-align: start !important;\n}\n\n.v-application .text-end {\n  text-align: end !important;\n}\n\n.v-application .text-decoration-line-through {\n  text-decoration: line-through !important;\n}\n\n.v-application .text-decoration-none {\n  text-decoration: none !important;\n}\n\n.v-application .text-decoration-overline {\n  text-decoration: overline !important;\n}\n\n.v-application .text-decoration-underline {\n  text-decoration: underline !important;\n}\n\n.v-application .text-wrap {\n  white-space: normal !important;\n}\n\n.v-application .text-no-wrap {\n  white-space: nowrap !important;\n}\n\n.v-application .text-break {\n  overflow-wrap: break-word !important;\n  word-break: break-word !important;\n}\n\n.v-application .text-truncate {\n  white-space: nowrap !important;\n  overflow: hidden !important;\n  text-overflow: ellipsis !important;\n}\n\n.v-application .text-none {\n  text-transform: none !important;\n}\n\n.v-application .text-capitalize {\n  text-transform: capitalize !important;\n}\n\n.v-application .text-lowercase {\n  text-transform: lowercase !important;\n}\n\n.v-application .text-uppercase {\n  text-transform: uppercase !important;\n}\n\n.v-application .text-h1 {\n  font-size: 6rem !important;\n  font-weight: 300;\n  line-height: 6rem;\n  letter-spacing: -0.015625em !important;\n  font-family: \"Roboto\", sans-serif !important;\n}\n\n.v-application .text-h2 {\n  font-size: 3.75rem !important;\n  font-weight: 300;\n  line-height: 3.75rem;\n  letter-spacing: -0.0083333333em !important;\n  font-family: \"Roboto\", sans-serif !important;\n}\n\n.v-application .text-h3 {\n  font-size: 3rem !important;\n  font-weight: 400;\n  line-height: 3.125rem;\n  letter-spacing: normal !important;\n  font-family: \"Roboto\", sans-serif !important;\n}\n\n.v-application .text-h4 {\n  font-size: 2.125rem !important;\n  font-weight: 400;\n  line-height: 2.5rem;\n  letter-spacing: 0.0073529412em !important;\n  font-family: \"Roboto\", sans-serif !important;\n}\n\n.v-application .text-h5 {\n  font-size: 1.5rem !important;\n  font-weight: 400;\n  line-height: 2rem;\n  letter-spacing: normal !important;\n  font-family: \"Roboto\", sans-serif !important;\n}\n\n.v-application .text-h6 {\n  font-size: 1.25rem !important;\n  font-weight: 500;\n  line-height: 2rem;\n  letter-spacing: 0.0125em !important;\n  font-family: \"Roboto\", sans-serif !important;\n}\n\n.v-application .text-subtitle-1 {\n  font-size: 1rem !important;\n  font-weight: normal;\n  line-height: 1.75rem;\n  letter-spacing: 0.009375em !important;\n  font-family: \"Roboto\", sans-serif !important;\n}\n\n.v-application .text-subtitle-2 {\n  font-size: 0.875rem !important;\n  font-weight: 500;\n  line-height: 1.375rem;\n  letter-spacing: 0.0071428571em !important;\n  font-family: \"Roboto\", sans-serif !important;\n}\n\n.v-application .text-body-1 {\n  font-size: 1rem !important;\n  font-weight: 400;\n  line-height: 1.5rem;\n  letter-spacing: 0.03125em !important;\n  font-family: \"Roboto\", sans-serif !important;\n}\n\n.v-application .text-body-2 {\n  font-size: 0.875rem !important;\n  font-weight: 400;\n  line-height: 1.25rem;\n  letter-spacing: 0.0178571429em !important;\n  font-family: \"Roboto\", sans-serif !important;\n}\n\n.v-application .text-button {\n  font-size: 0.875rem !important;\n  font-weight: 500;\n  line-height: 2.25rem;\n  letter-spacing: 0.0892857143em !important;\n  font-family: \"Roboto\", sans-serif !important;\n  text-transform: uppercase !important;\n}\n\n.v-application .text-caption {\n  font-size: 0.75rem !important;\n  font-weight: 400;\n  line-height: 1.25rem;\n  letter-spacing: 0.0333333333em !important;\n  font-family: \"Roboto\", sans-serif !important;\n}\n\n.v-application .text-overline {\n  font-size: 0.75rem !important;\n  font-weight: 500;\n  line-height: 2rem;\n  letter-spacing: 0.1666666667em !important;\n  font-family: \"Roboto\", sans-serif !important;\n  text-transform: uppercase !important;\n}\n\n@media (min-width: 600px) {\n  .v-application .d-sm-none {\n    display: none !important;\n  }\n\n  .v-application .d-sm-inline {\n    display: inline !important;\n  }\n\n  .v-application .d-sm-inline-block {\n    display: inline-block !important;\n  }\n\n  .v-application .d-sm-block {\n    display: block !important;\n  }\n\n  .v-application .d-sm-table {\n    display: table !important;\n  }\n\n  .v-application .d-sm-table-row {\n    display: table-row !important;\n  }\n\n  .v-application .d-sm-table-cell {\n    display: table-cell !important;\n  }\n\n  .v-application .d-sm-flex {\n    display: flex !important;\n  }\n\n  .v-application .d-sm-inline-flex {\n    display: inline-flex !important;\n  }\n\n  .v-application .float-sm-none {\n    float: none !important;\n  }\n\n  .v-application .float-sm-left {\n    float: left !important;\n  }\n\n  .v-application .float-sm-right {\n    float: right !important;\n  }\n\n  .v-application .flex-sm-fill {\n    flex: 1 1 auto !important;\n  }\n\n  .v-application .flex-sm-row {\n    flex-direction: row !important;\n  }\n\n  .v-application .flex-sm-column {\n    flex-direction: column !important;\n  }\n\n  .v-application .flex-sm-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n\n  .v-application .flex-sm-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n\n  .v-application .flex-sm-grow-0 {\n    flex-grow: 0 !important;\n  }\n\n  .v-application .flex-sm-grow-1 {\n    flex-grow: 1 !important;\n  }\n\n  .v-application .flex-sm-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n\n  .v-application .flex-sm-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n\n  .v-application .flex-sm-wrap {\n    flex-wrap: wrap !important;\n  }\n\n  .v-application .flex-sm-nowrap {\n    flex-wrap: nowrap !important;\n  }\n\n  .v-application .flex-sm-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n\n  .v-application .justify-sm-start {\n    justify-content: flex-start !important;\n  }\n\n  .v-application .justify-sm-end {\n    justify-content: flex-end !important;\n  }\n\n  .v-application .justify-sm-center {\n    justify-content: center !important;\n  }\n\n  .v-application .justify-sm-space-between {\n    justify-content: space-between !important;\n  }\n\n  .v-application .justify-sm-space-around {\n    justify-content: space-around !important;\n  }\n\n  .v-application .align-sm-start {\n    align-items: flex-start !important;\n  }\n\n  .v-application .align-sm-end {\n    align-items: flex-end !important;\n  }\n\n  .v-application .align-sm-center {\n    align-items: center !important;\n  }\n\n  .v-application .align-sm-baseline {\n    align-items: baseline !important;\n  }\n\n  .v-application .align-sm-stretch {\n    align-items: stretch !important;\n  }\n\n  .v-application .align-content-sm-start {\n    align-content: flex-start !important;\n  }\n\n  .v-application .align-content-sm-end {\n    align-content: flex-end !important;\n  }\n\n  .v-application .align-content-sm-center {\n    align-content: center !important;\n  }\n\n  .v-application .align-content-sm-space-between {\n    align-content: space-between !important;\n  }\n\n  .v-application .align-content-sm-space-around {\n    align-content: space-around !important;\n  }\n\n  .v-application .align-content-sm-stretch {\n    align-content: stretch !important;\n  }\n\n  .v-application .align-self-sm-auto {\n    align-self: auto !important;\n  }\n\n  .v-application .align-self-sm-start {\n    align-self: flex-start !important;\n  }\n\n  .v-application .align-self-sm-end {\n    align-self: flex-end !important;\n  }\n\n  .v-application .align-self-sm-center {\n    align-self: center !important;\n  }\n\n  .v-application .align-self-sm-baseline {\n    align-self: baseline !important;\n  }\n\n  .v-application .align-self-sm-stretch {\n    align-self: stretch !important;\n  }\n\n  .v-application .order-sm-first {\n    order: -1 !important;\n  }\n\n  .v-application .order-sm-0 {\n    order: 0 !important;\n  }\n\n  .v-application .order-sm-1 {\n    order: 1 !important;\n  }\n\n  .v-application .order-sm-2 {\n    order: 2 !important;\n  }\n\n  .v-application .order-sm-3 {\n    order: 3 !important;\n  }\n\n  .v-application .order-sm-4 {\n    order: 4 !important;\n  }\n\n  .v-application .order-sm-5 {\n    order: 5 !important;\n  }\n\n  .v-application .order-sm-6 {\n    order: 6 !important;\n  }\n\n  .v-application .order-sm-7 {\n    order: 7 !important;\n  }\n\n  .v-application .order-sm-8 {\n    order: 8 !important;\n  }\n\n  .v-application .order-sm-9 {\n    order: 9 !important;\n  }\n\n  .v-application .order-sm-10 {\n    order: 10 !important;\n  }\n\n  .v-application .order-sm-11 {\n    order: 11 !important;\n  }\n\n  .v-application .order-sm-12 {\n    order: 12 !important;\n  }\n\n  .v-application .order-sm-last {\n    order: 13 !important;\n  }\n\n  .v-application .ma-sm-0 {\n    margin: 0px !important;\n  }\n\n  .v-application .ma-sm-1 {\n    margin: 4px !important;\n  }\n\n  .v-application .ma-sm-2 {\n    margin: 8px !important;\n  }\n\n  .v-application .ma-sm-3 {\n    margin: 12px !important;\n  }\n\n  .v-application .ma-sm-4 {\n    margin: 16px !important;\n  }\n\n  .v-application .ma-sm-5 {\n    margin: 20px !important;\n  }\n\n  .v-application .ma-sm-6 {\n    margin: 24px !important;\n  }\n\n  .v-application .ma-sm-7 {\n    margin: 28px !important;\n  }\n\n  .v-application .ma-sm-8 {\n    margin: 32px !important;\n  }\n\n  .v-application .ma-sm-9 {\n    margin: 36px !important;\n  }\n\n  .v-application .ma-sm-10 {\n    margin: 40px !important;\n  }\n\n  .v-application .ma-sm-11 {\n    margin: 44px !important;\n  }\n\n  .v-application .ma-sm-12 {\n    margin: 48px !important;\n  }\n\n  .v-application .ma-sm-13 {\n    margin: 52px !important;\n  }\n\n  .v-application .ma-sm-14 {\n    margin: 56px !important;\n  }\n\n  .v-application .ma-sm-15 {\n    margin: 60px !important;\n  }\n\n  .v-application .ma-sm-16 {\n    margin: 64px !important;\n  }\n\n  .v-application .ma-sm-auto {\n    margin: auto !important;\n  }\n\n  .v-application .mx-sm-0 {\n    margin-right: 0px !important;\n    margin-left: 0px !important;\n  }\n\n  .v-application .mx-sm-1 {\n    margin-right: 4px !important;\n    margin-left: 4px !important;\n  }\n\n  .v-application .mx-sm-2 {\n    margin-right: 8px !important;\n    margin-left: 8px !important;\n  }\n\n  .v-application .mx-sm-3 {\n    margin-right: 12px !important;\n    margin-left: 12px !important;\n  }\n\n  .v-application .mx-sm-4 {\n    margin-right: 16px !important;\n    margin-left: 16px !important;\n  }\n\n  .v-application .mx-sm-5 {\n    margin-right: 20px !important;\n    margin-left: 20px !important;\n  }\n\n  .v-application .mx-sm-6 {\n    margin-right: 24px !important;\n    margin-left: 24px !important;\n  }\n\n  .v-application .mx-sm-7 {\n    margin-right: 28px !important;\n    margin-left: 28px !important;\n  }\n\n  .v-application .mx-sm-8 {\n    margin-right: 32px !important;\n    margin-left: 32px !important;\n  }\n\n  .v-application .mx-sm-9 {\n    margin-right: 36px !important;\n    margin-left: 36px !important;\n  }\n\n  .v-application .mx-sm-10 {\n    margin-right: 40px !important;\n    margin-left: 40px !important;\n  }\n\n  .v-application .mx-sm-11 {\n    margin-right: 44px !important;\n    margin-left: 44px !important;\n  }\n\n  .v-application .mx-sm-12 {\n    margin-right: 48px !important;\n    margin-left: 48px !important;\n  }\n\n  .v-application .mx-sm-13 {\n    margin-right: 52px !important;\n    margin-left: 52px !important;\n  }\n\n  .v-application .mx-sm-14 {\n    margin-right: 56px !important;\n    margin-left: 56px !important;\n  }\n\n  .v-application .mx-sm-15 {\n    margin-right: 60px !important;\n    margin-left: 60px !important;\n  }\n\n  .v-application .mx-sm-16 {\n    margin-right: 64px !important;\n    margin-left: 64px !important;\n  }\n\n  .v-application .mx-sm-auto {\n    margin-right: auto !important;\n    margin-left: auto !important;\n  }\n\n  .v-application .my-sm-0 {\n    margin-top: 0px !important;\n    margin-bottom: 0px !important;\n  }\n\n  .v-application .my-sm-1 {\n    margin-top: 4px !important;\n    margin-bottom: 4px !important;\n  }\n\n  .v-application .my-sm-2 {\n    margin-top: 8px !important;\n    margin-bottom: 8px !important;\n  }\n\n  .v-application .my-sm-3 {\n    margin-top: 12px !important;\n    margin-bottom: 12px !important;\n  }\n\n  .v-application .my-sm-4 {\n    margin-top: 16px !important;\n    margin-bottom: 16px !important;\n  }\n\n  .v-application .my-sm-5 {\n    margin-top: 20px !important;\n    margin-bottom: 20px !important;\n  }\n\n  .v-application .my-sm-6 {\n    margin-top: 24px !important;\n    margin-bottom: 24px !important;\n  }\n\n  .v-application .my-sm-7 {\n    margin-top: 28px !important;\n    margin-bottom: 28px !important;\n  }\n\n  .v-application .my-sm-8 {\n    margin-top: 32px !important;\n    margin-bottom: 32px !important;\n  }\n\n  .v-application .my-sm-9 {\n    margin-top: 36px !important;\n    margin-bottom: 36px !important;\n  }\n\n  .v-application .my-sm-10 {\n    margin-top: 40px !important;\n    margin-bottom: 40px !important;\n  }\n\n  .v-application .my-sm-11 {\n    margin-top: 44px !important;\n    margin-bottom: 44px !important;\n  }\n\n  .v-application .my-sm-12 {\n    margin-top: 48px !important;\n    margin-bottom: 48px !important;\n  }\n\n  .v-application .my-sm-13 {\n    margin-top: 52px !important;\n    margin-bottom: 52px !important;\n  }\n\n  .v-application .my-sm-14 {\n    margin-top: 56px !important;\n    margin-bottom: 56px !important;\n  }\n\n  .v-application .my-sm-15 {\n    margin-top: 60px !important;\n    margin-bottom: 60px !important;\n  }\n\n  .v-application .my-sm-16 {\n    margin-top: 64px !important;\n    margin-bottom: 64px !important;\n  }\n\n  .v-application .my-sm-auto {\n    margin-top: auto !important;\n    margin-bottom: auto !important;\n  }\n\n  .v-application .mt-sm-0 {\n    margin-top: 0px !important;\n  }\n\n  .v-application .mt-sm-1 {\n    margin-top: 4px !important;\n  }\n\n  .v-application .mt-sm-2 {\n    margin-top: 8px !important;\n  }\n\n  .v-application .mt-sm-3 {\n    margin-top: 12px !important;\n  }\n\n  .v-application .mt-sm-4 {\n    margin-top: 16px !important;\n  }\n\n  .v-application .mt-sm-5 {\n    margin-top: 20px !important;\n  }\n\n  .v-application .mt-sm-6 {\n    margin-top: 24px !important;\n  }\n\n  .v-application .mt-sm-7 {\n    margin-top: 28px !important;\n  }\n\n  .v-application .mt-sm-8 {\n    margin-top: 32px !important;\n  }\n\n  .v-application .mt-sm-9 {\n    margin-top: 36px !important;\n  }\n\n  .v-application .mt-sm-10 {\n    margin-top: 40px !important;\n  }\n\n  .v-application .mt-sm-11 {\n    margin-top: 44px !important;\n  }\n\n  .v-application .mt-sm-12 {\n    margin-top: 48px !important;\n  }\n\n  .v-application .mt-sm-13 {\n    margin-top: 52px !important;\n  }\n\n  .v-application .mt-sm-14 {\n    margin-top: 56px !important;\n  }\n\n  .v-application .mt-sm-15 {\n    margin-top: 60px !important;\n  }\n\n  .v-application .mt-sm-16 {\n    margin-top: 64px !important;\n  }\n\n  .v-application .mt-sm-auto {\n    margin-top: auto !important;\n  }\n\n  .v-application .mr-sm-0 {\n    margin-right: 0px !important;\n  }\n\n  .v-application .mr-sm-1 {\n    margin-right: 4px !important;\n  }\n\n  .v-application .mr-sm-2 {\n    margin-right: 8px !important;\n  }\n\n  .v-application .mr-sm-3 {\n    margin-right: 12px !important;\n  }\n\n  .v-application .mr-sm-4 {\n    margin-right: 16px !important;\n  }\n\n  .v-application .mr-sm-5 {\n    margin-right: 20px !important;\n  }\n\n  .v-application .mr-sm-6 {\n    margin-right: 24px !important;\n  }\n\n  .v-application .mr-sm-7 {\n    margin-right: 28px !important;\n  }\n\n  .v-application .mr-sm-8 {\n    margin-right: 32px !important;\n  }\n\n  .v-application .mr-sm-9 {\n    margin-right: 36px !important;\n  }\n\n  .v-application .mr-sm-10 {\n    margin-right: 40px !important;\n  }\n\n  .v-application .mr-sm-11 {\n    margin-right: 44px !important;\n  }\n\n  .v-application .mr-sm-12 {\n    margin-right: 48px !important;\n  }\n\n  .v-application .mr-sm-13 {\n    margin-right: 52px !important;\n  }\n\n  .v-application .mr-sm-14 {\n    margin-right: 56px !important;\n  }\n\n  .v-application .mr-sm-15 {\n    margin-right: 60px !important;\n  }\n\n  .v-application .mr-sm-16 {\n    margin-right: 64px !important;\n  }\n\n  .v-application .mr-sm-auto {\n    margin-right: auto !important;\n  }\n\n  .v-application .mb-sm-0 {\n    margin-bottom: 0px !important;\n  }\n\n  .v-application .mb-sm-1 {\n    margin-bottom: 4px !important;\n  }\n\n  .v-application .mb-sm-2 {\n    margin-bottom: 8px !important;\n  }\n\n  .v-application .mb-sm-3 {\n    margin-bottom: 12px !important;\n  }\n\n  .v-application .mb-sm-4 {\n    margin-bottom: 16px !important;\n  }\n\n  .v-application .mb-sm-5 {\n    margin-bottom: 20px !important;\n  }\n\n  .v-application .mb-sm-6 {\n    margin-bottom: 24px !important;\n  }\n\n  .v-application .mb-sm-7 {\n    margin-bottom: 28px !important;\n  }\n\n  .v-application .mb-sm-8 {\n    margin-bottom: 32px !important;\n  }\n\n  .v-application .mb-sm-9 {\n    margin-bottom: 36px !important;\n  }\n\n  .v-application .mb-sm-10 {\n    margin-bottom: 40px !important;\n  }\n\n  .v-application .mb-sm-11 {\n    margin-bottom: 44px !important;\n  }\n\n  .v-application .mb-sm-12 {\n    margin-bottom: 48px !important;\n  }\n\n  .v-application .mb-sm-13 {\n    margin-bottom: 52px !important;\n  }\n\n  .v-application .mb-sm-14 {\n    margin-bottom: 56px !important;\n  }\n\n  .v-application .mb-sm-15 {\n    margin-bottom: 60px !important;\n  }\n\n  .v-application .mb-sm-16 {\n    margin-bottom: 64px !important;\n  }\n\n  .v-application .mb-sm-auto {\n    margin-bottom: auto !important;\n  }\n\n  .v-application .ml-sm-0 {\n    margin-left: 0px !important;\n  }\n\n  .v-application .ml-sm-1 {\n    margin-left: 4px !important;\n  }\n\n  .v-application .ml-sm-2 {\n    margin-left: 8px !important;\n  }\n\n  .v-application .ml-sm-3 {\n    margin-left: 12px !important;\n  }\n\n  .v-application .ml-sm-4 {\n    margin-left: 16px !important;\n  }\n\n  .v-application .ml-sm-5 {\n    margin-left: 20px !important;\n  }\n\n  .v-application .ml-sm-6 {\n    margin-left: 24px !important;\n  }\n\n  .v-application .ml-sm-7 {\n    margin-left: 28px !important;\n  }\n\n  .v-application .ml-sm-8 {\n    margin-left: 32px !important;\n  }\n\n  .v-application .ml-sm-9 {\n    margin-left: 36px !important;\n  }\n\n  .v-application .ml-sm-10 {\n    margin-left: 40px !important;\n  }\n\n  .v-application .ml-sm-11 {\n    margin-left: 44px !important;\n  }\n\n  .v-application .ml-sm-12 {\n    margin-left: 48px !important;\n  }\n\n  .v-application .ml-sm-13 {\n    margin-left: 52px !important;\n  }\n\n  .v-application .ml-sm-14 {\n    margin-left: 56px !important;\n  }\n\n  .v-application .ml-sm-15 {\n    margin-left: 60px !important;\n  }\n\n  .v-application .ml-sm-16 {\n    margin-left: 64px !important;\n  }\n\n  .v-application .ml-sm-auto {\n    margin-left: auto !important;\n  }\n\n  .v-application--is-ltr .ms-sm-0 {\n    margin-left: 0px !important;\n  }\n\n  .v-application--is-rtl .ms-sm-0 {\n    margin-right: 0px !important;\n  }\n\n  .v-application--is-ltr .ms-sm-1 {\n    margin-left: 4px !important;\n  }\n\n  .v-application--is-rtl .ms-sm-1 {\n    margin-right: 4px !important;\n  }\n\n  .v-application--is-ltr .ms-sm-2 {\n    margin-left: 8px !important;\n  }\n\n  .v-application--is-rtl .ms-sm-2 {\n    margin-right: 8px !important;\n  }\n\n  .v-application--is-ltr .ms-sm-3 {\n    margin-left: 12px !important;\n  }\n\n  .v-application--is-rtl .ms-sm-3 {\n    margin-right: 12px !important;\n  }\n\n  .v-application--is-ltr .ms-sm-4 {\n    margin-left: 16px !important;\n  }\n\n  .v-application--is-rtl .ms-sm-4 {\n    margin-right: 16px !important;\n  }\n\n  .v-application--is-ltr .ms-sm-5 {\n    margin-left: 20px !important;\n  }\n\n  .v-application--is-rtl .ms-sm-5 {\n    margin-right: 20px !important;\n  }\n\n  .v-application--is-ltr .ms-sm-6 {\n    margin-left: 24px !important;\n  }\n\n  .v-application--is-rtl .ms-sm-6 {\n    margin-right: 24px !important;\n  }\n\n  .v-application--is-ltr .ms-sm-7 {\n    margin-left: 28px !important;\n  }\n\n  .v-application--is-rtl .ms-sm-7 {\n    margin-right: 28px !important;\n  }\n\n  .v-application--is-ltr .ms-sm-8 {\n    margin-left: 32px !important;\n  }\n\n  .v-application--is-rtl .ms-sm-8 {\n    margin-right: 32px !important;\n  }\n\n  .v-application--is-ltr .ms-sm-9 {\n    margin-left: 36px !important;\n  }\n\n  .v-application--is-rtl .ms-sm-9 {\n    margin-right: 36px !important;\n  }\n\n  .v-application--is-ltr .ms-sm-10 {\n    margin-left: 40px !important;\n  }\n\n  .v-application--is-rtl .ms-sm-10 {\n    margin-right: 40px !important;\n  }\n\n  .v-application--is-ltr .ms-sm-11 {\n    margin-left: 44px !important;\n  }\n\n  .v-application--is-rtl .ms-sm-11 {\n    margin-right: 44px !important;\n  }\n\n  .v-application--is-ltr .ms-sm-12 {\n    margin-left: 48px !important;\n  }\n\n  .v-application--is-rtl .ms-sm-12 {\n    margin-right: 48px !important;\n  }\n\n  .v-application--is-ltr .ms-sm-13 {\n    margin-left: 52px !important;\n  }\n\n  .v-application--is-rtl .ms-sm-13 {\n    margin-right: 52px !important;\n  }\n\n  .v-application--is-ltr .ms-sm-14 {\n    margin-left: 56px !important;\n  }\n\n  .v-application--is-rtl .ms-sm-14 {\n    margin-right: 56px !important;\n  }\n\n  .v-application--is-ltr .ms-sm-15 {\n    margin-left: 60px !important;\n  }\n\n  .v-application--is-rtl .ms-sm-15 {\n    margin-right: 60px !important;\n  }\n\n  .v-application--is-ltr .ms-sm-16 {\n    margin-left: 64px !important;\n  }\n\n  .v-application--is-rtl .ms-sm-16 {\n    margin-right: 64px !important;\n  }\n\n  .v-application--is-ltr .ms-sm-auto {\n    margin-left: auto !important;\n  }\n\n  .v-application--is-rtl .ms-sm-auto {\n    margin-right: auto !important;\n  }\n\n  .v-application--is-ltr .me-sm-0 {\n    margin-right: 0px !important;\n  }\n\n  .v-application--is-rtl .me-sm-0 {\n    margin-left: 0px !important;\n  }\n\n  .v-application--is-ltr .me-sm-1 {\n    margin-right: 4px !important;\n  }\n\n  .v-application--is-rtl .me-sm-1 {\n    margin-left: 4px !important;\n  }\n\n  .v-application--is-ltr .me-sm-2 {\n    margin-right: 8px !important;\n  }\n\n  .v-application--is-rtl .me-sm-2 {\n    margin-left: 8px !important;\n  }\n\n  .v-application--is-ltr .me-sm-3 {\n    margin-right: 12px !important;\n  }\n\n  .v-application--is-rtl .me-sm-3 {\n    margin-left: 12px !important;\n  }\n\n  .v-application--is-ltr .me-sm-4 {\n    margin-right: 16px !important;\n  }\n\n  .v-application--is-rtl .me-sm-4 {\n    margin-left: 16px !important;\n  }\n\n  .v-application--is-ltr .me-sm-5 {\n    margin-right: 20px !important;\n  }\n\n  .v-application--is-rtl .me-sm-5 {\n    margin-left: 20px !important;\n  }\n\n  .v-application--is-ltr .me-sm-6 {\n    margin-right: 24px !important;\n  }\n\n  .v-application--is-rtl .me-sm-6 {\n    margin-left: 24px !important;\n  }\n\n  .v-application--is-ltr .me-sm-7 {\n    margin-right: 28px !important;\n  }\n\n  .v-application--is-rtl .me-sm-7 {\n    margin-left: 28px !important;\n  }\n\n  .v-application--is-ltr .me-sm-8 {\n    margin-right: 32px !important;\n  }\n\n  .v-application--is-rtl .me-sm-8 {\n    margin-left: 32px !important;\n  }\n\n  .v-application--is-ltr .me-sm-9 {\n    margin-right: 36px !important;\n  }\n\n  .v-application--is-rtl .me-sm-9 {\n    margin-left: 36px !important;\n  }\n\n  .v-application--is-ltr .me-sm-10 {\n    margin-right: 40px !important;\n  }\n\n  .v-application--is-rtl .me-sm-10 {\n    margin-left: 40px !important;\n  }\n\n  .v-application--is-ltr .me-sm-11 {\n    margin-right: 44px !important;\n  }\n\n  .v-application--is-rtl .me-sm-11 {\n    margin-left: 44px !important;\n  }\n\n  .v-application--is-ltr .me-sm-12 {\n    margin-right: 48px !important;\n  }\n\n  .v-application--is-rtl .me-sm-12 {\n    margin-left: 48px !important;\n  }\n\n  .v-application--is-ltr .me-sm-13 {\n    margin-right: 52px !important;\n  }\n\n  .v-application--is-rtl .me-sm-13 {\n    margin-left: 52px !important;\n  }\n\n  .v-application--is-ltr .me-sm-14 {\n    margin-right: 56px !important;\n  }\n\n  .v-application--is-rtl .me-sm-14 {\n    margin-left: 56px !important;\n  }\n\n  .v-application--is-ltr .me-sm-15 {\n    margin-right: 60px !important;\n  }\n\n  .v-application--is-rtl .me-sm-15 {\n    margin-left: 60px !important;\n  }\n\n  .v-application--is-ltr .me-sm-16 {\n    margin-right: 64px !important;\n  }\n\n  .v-application--is-rtl .me-sm-16 {\n    margin-left: 64px !important;\n  }\n\n  .v-application--is-ltr .me-sm-auto {\n    margin-right: auto !important;\n  }\n\n  .v-application--is-rtl .me-sm-auto {\n    margin-left: auto !important;\n  }\n\n  .v-application .ma-sm-n1 {\n    margin: -4px !important;\n  }\n\n  .v-application .ma-sm-n2 {\n    margin: -8px !important;\n  }\n\n  .v-application .ma-sm-n3 {\n    margin: -12px !important;\n  }\n\n  .v-application .ma-sm-n4 {\n    margin: -16px !important;\n  }\n\n  .v-application .ma-sm-n5 {\n    margin: -20px !important;\n  }\n\n  .v-application .ma-sm-n6 {\n    margin: -24px !important;\n  }\n\n  .v-application .ma-sm-n7 {\n    margin: -28px !important;\n  }\n\n  .v-application .ma-sm-n8 {\n    margin: -32px !important;\n  }\n\n  .v-application .ma-sm-n9 {\n    margin: -36px !important;\n  }\n\n  .v-application .ma-sm-n10 {\n    margin: -40px !important;\n  }\n\n  .v-application .ma-sm-n11 {\n    margin: -44px !important;\n  }\n\n  .v-application .ma-sm-n12 {\n    margin: -48px !important;\n  }\n\n  .v-application .ma-sm-n13 {\n    margin: -52px !important;\n  }\n\n  .v-application .ma-sm-n14 {\n    margin: -56px !important;\n  }\n\n  .v-application .ma-sm-n15 {\n    margin: -60px !important;\n  }\n\n  .v-application .ma-sm-n16 {\n    margin: -64px !important;\n  }\n\n  .v-application .mx-sm-n1 {\n    margin-right: -4px !important;\n    margin-left: -4px !important;\n  }\n\n  .v-application .mx-sm-n2 {\n    margin-right: -8px !important;\n    margin-left: -8px !important;\n  }\n\n  .v-application .mx-sm-n3 {\n    margin-right: -12px !important;\n    margin-left: -12px !important;\n  }\n\n  .v-application .mx-sm-n4 {\n    margin-right: -16px !important;\n    margin-left: -16px !important;\n  }\n\n  .v-application .mx-sm-n5 {\n    margin-right: -20px !important;\n    margin-left: -20px !important;\n  }\n\n  .v-application .mx-sm-n6 {\n    margin-right: -24px !important;\n    margin-left: -24px !important;\n  }\n\n  .v-application .mx-sm-n7 {\n    margin-right: -28px !important;\n    margin-left: -28px !important;\n  }\n\n  .v-application .mx-sm-n8 {\n    margin-right: -32px !important;\n    margin-left: -32px !important;\n  }\n\n  .v-application .mx-sm-n9 {\n    margin-right: -36px !important;\n    margin-left: -36px !important;\n  }\n\n  .v-application .mx-sm-n10 {\n    margin-right: -40px !important;\n    margin-left: -40px !important;\n  }\n\n  .v-application .mx-sm-n11 {\n    margin-right: -44px !important;\n    margin-left: -44px !important;\n  }\n\n  .v-application .mx-sm-n12 {\n    margin-right: -48px !important;\n    margin-left: -48px !important;\n  }\n\n  .v-application .mx-sm-n13 {\n    margin-right: -52px !important;\n    margin-left: -52px !important;\n  }\n\n  .v-application .mx-sm-n14 {\n    margin-right: -56px !important;\n    margin-left: -56px !important;\n  }\n\n  .v-application .mx-sm-n15 {\n    margin-right: -60px !important;\n    margin-left: -60px !important;\n  }\n\n  .v-application .mx-sm-n16 {\n    margin-right: -64px !important;\n    margin-left: -64px !important;\n  }\n\n  .v-application .my-sm-n1 {\n    margin-top: -4px !important;\n    margin-bottom: -4px !important;\n  }\n\n  .v-application .my-sm-n2 {\n    margin-top: -8px !important;\n    margin-bottom: -8px !important;\n  }\n\n  .v-application .my-sm-n3 {\n    margin-top: -12px !important;\n    margin-bottom: -12px !important;\n  }\n\n  .v-application .my-sm-n4 {\n    margin-top: -16px !important;\n    margin-bottom: -16px !important;\n  }\n\n  .v-application .my-sm-n5 {\n    margin-top: -20px !important;\n    margin-bottom: -20px !important;\n  }\n\n  .v-application .my-sm-n6 {\n    margin-top: -24px !important;\n    margin-bottom: -24px !important;\n  }\n\n  .v-application .my-sm-n7 {\n    margin-top: -28px !important;\n    margin-bottom: -28px !important;\n  }\n\n  .v-application .my-sm-n8 {\n    margin-top: -32px !important;\n    margin-bottom: -32px !important;\n  }\n\n  .v-application .my-sm-n9 {\n    margin-top: -36px !important;\n    margin-bottom: -36px !important;\n  }\n\n  .v-application .my-sm-n10 {\n    margin-top: -40px !important;\n    margin-bottom: -40px !important;\n  }\n\n  .v-application .my-sm-n11 {\n    margin-top: -44px !important;\n    margin-bottom: -44px !important;\n  }\n\n  .v-application .my-sm-n12 {\n    margin-top: -48px !important;\n    margin-bottom: -48px !important;\n  }\n\n  .v-application .my-sm-n13 {\n    margin-top: -52px !important;\n    margin-bottom: -52px !important;\n  }\n\n  .v-application .my-sm-n14 {\n    margin-top: -56px !important;\n    margin-bottom: -56px !important;\n  }\n\n  .v-application .my-sm-n15 {\n    margin-top: -60px !important;\n    margin-bottom: -60px !important;\n  }\n\n  .v-application .my-sm-n16 {\n    margin-top: -64px !important;\n    margin-bottom: -64px !important;\n  }\n\n  .v-application .mt-sm-n1 {\n    margin-top: -4px !important;\n  }\n\n  .v-application .mt-sm-n2 {\n    margin-top: -8px !important;\n  }\n\n  .v-application .mt-sm-n3 {\n    margin-top: -12px !important;\n  }\n\n  .v-application .mt-sm-n4 {\n    margin-top: -16px !important;\n  }\n\n  .v-application .mt-sm-n5 {\n    margin-top: -20px !important;\n  }\n\n  .v-application .mt-sm-n6 {\n    margin-top: -24px !important;\n  }\n\n  .v-application .mt-sm-n7 {\n    margin-top: -28px !important;\n  }\n\n  .v-application .mt-sm-n8 {\n    margin-top: -32px !important;\n  }\n\n  .v-application .mt-sm-n9 {\n    margin-top: -36px !important;\n  }\n\n  .v-application .mt-sm-n10 {\n    margin-top: -40px !important;\n  }\n\n  .v-application .mt-sm-n11 {\n    margin-top: -44px !important;\n  }\n\n  .v-application .mt-sm-n12 {\n    margin-top: -48px !important;\n  }\n\n  .v-application .mt-sm-n13 {\n    margin-top: -52px !important;\n  }\n\n  .v-application .mt-sm-n14 {\n    margin-top: -56px !important;\n  }\n\n  .v-application .mt-sm-n15 {\n    margin-top: -60px !important;\n  }\n\n  .v-application .mt-sm-n16 {\n    margin-top: -64px !important;\n  }\n\n  .v-application .mr-sm-n1 {\n    margin-right: -4px !important;\n  }\n\n  .v-application .mr-sm-n2 {\n    margin-right: -8px !important;\n  }\n\n  .v-application .mr-sm-n3 {\n    margin-right: -12px !important;\n  }\n\n  .v-application .mr-sm-n4 {\n    margin-right: -16px !important;\n  }\n\n  .v-application .mr-sm-n5 {\n    margin-right: -20px !important;\n  }\n\n  .v-application .mr-sm-n6 {\n    margin-right: -24px !important;\n  }\n\n  .v-application .mr-sm-n7 {\n    margin-right: -28px !important;\n  }\n\n  .v-application .mr-sm-n8 {\n    margin-right: -32px !important;\n  }\n\n  .v-application .mr-sm-n9 {\n    margin-right: -36px !important;\n  }\n\n  .v-application .mr-sm-n10 {\n    margin-right: -40px !important;\n  }\n\n  .v-application .mr-sm-n11 {\n    margin-right: -44px !important;\n  }\n\n  .v-application .mr-sm-n12 {\n    margin-right: -48px !important;\n  }\n\n  .v-application .mr-sm-n13 {\n    margin-right: -52px !important;\n  }\n\n  .v-application .mr-sm-n14 {\n    margin-right: -56px !important;\n  }\n\n  .v-application .mr-sm-n15 {\n    margin-right: -60px !important;\n  }\n\n  .v-application .mr-sm-n16 {\n    margin-right: -64px !important;\n  }\n\n  .v-application .mb-sm-n1 {\n    margin-bottom: -4px !important;\n  }\n\n  .v-application .mb-sm-n2 {\n    margin-bottom: -8px !important;\n  }\n\n  .v-application .mb-sm-n3 {\n    margin-bottom: -12px !important;\n  }\n\n  .v-application .mb-sm-n4 {\n    margin-bottom: -16px !important;\n  }\n\n  .v-application .mb-sm-n5 {\n    margin-bottom: -20px !important;\n  }\n\n  .v-application .mb-sm-n6 {\n    margin-bottom: -24px !important;\n  }\n\n  .v-application .mb-sm-n7 {\n    margin-bottom: -28px !important;\n  }\n\n  .v-application .mb-sm-n8 {\n    margin-bottom: -32px !important;\n  }\n\n  .v-application .mb-sm-n9 {\n    margin-bottom: -36px !important;\n  }\n\n  .v-application .mb-sm-n10 {\n    margin-bottom: -40px !important;\n  }\n\n  .v-application .mb-sm-n11 {\n    margin-bottom: -44px !important;\n  }\n\n  .v-application .mb-sm-n12 {\n    margin-bottom: -48px !important;\n  }\n\n  .v-application .mb-sm-n13 {\n    margin-bottom: -52px !important;\n  }\n\n  .v-application .mb-sm-n14 {\n    margin-bottom: -56px !important;\n  }\n\n  .v-application .mb-sm-n15 {\n    margin-bottom: -60px !important;\n  }\n\n  .v-application .mb-sm-n16 {\n    margin-bottom: -64px !important;\n  }\n\n  .v-application .ml-sm-n1 {\n    margin-left: -4px !important;\n  }\n\n  .v-application .ml-sm-n2 {\n    margin-left: -8px !important;\n  }\n\n  .v-application .ml-sm-n3 {\n    margin-left: -12px !important;\n  }\n\n  .v-application .ml-sm-n4 {\n    margin-left: -16px !important;\n  }\n\n  .v-application .ml-sm-n5 {\n    margin-left: -20px !important;\n  }\n\n  .v-application .ml-sm-n6 {\n    margin-left: -24px !important;\n  }\n\n  .v-application .ml-sm-n7 {\n    margin-left: -28px !important;\n  }\n\n  .v-application .ml-sm-n8 {\n    margin-left: -32px !important;\n  }\n\n  .v-application .ml-sm-n9 {\n    margin-left: -36px !important;\n  }\n\n  .v-application .ml-sm-n10 {\n    margin-left: -40px !important;\n  }\n\n  .v-application .ml-sm-n11 {\n    margin-left: -44px !important;\n  }\n\n  .v-application .ml-sm-n12 {\n    margin-left: -48px !important;\n  }\n\n  .v-application .ml-sm-n13 {\n    margin-left: -52px !important;\n  }\n\n  .v-application .ml-sm-n14 {\n    margin-left: -56px !important;\n  }\n\n  .v-application .ml-sm-n15 {\n    margin-left: -60px !important;\n  }\n\n  .v-application .ml-sm-n16 {\n    margin-left: -64px !important;\n  }\n\n  .v-application--is-ltr .ms-sm-n1 {\n    margin-left: -4px !important;\n  }\n\n  .v-application--is-rtl .ms-sm-n1 {\n    margin-right: -4px !important;\n  }\n\n  .v-application--is-ltr .ms-sm-n2 {\n    margin-left: -8px !important;\n  }\n\n  .v-application--is-rtl .ms-sm-n2 {\n    margin-right: -8px !important;\n  }\n\n  .v-application--is-ltr .ms-sm-n3 {\n    margin-left: -12px !important;\n  }\n\n  .v-application--is-rtl .ms-sm-n3 {\n    margin-right: -12px !important;\n  }\n\n  .v-application--is-ltr .ms-sm-n4 {\n    margin-left: -16px !important;\n  }\n\n  .v-application--is-rtl .ms-sm-n4 {\n    margin-right: -16px !important;\n  }\n\n  .v-application--is-ltr .ms-sm-n5 {\n    margin-left: -20px !important;\n  }\n\n  .v-application--is-rtl .ms-sm-n5 {\n    margin-right: -20px !important;\n  }\n\n  .v-application--is-ltr .ms-sm-n6 {\n    margin-left: -24px !important;\n  }\n\n  .v-application--is-rtl .ms-sm-n6 {\n    margin-right: -24px !important;\n  }\n\n  .v-application--is-ltr .ms-sm-n7 {\n    margin-left: -28px !important;\n  }\n\n  .v-application--is-rtl .ms-sm-n7 {\n    margin-right: -28px !important;\n  }\n\n  .v-application--is-ltr .ms-sm-n8 {\n    margin-left: -32px !important;\n  }\n\n  .v-application--is-rtl .ms-sm-n8 {\n    margin-right: -32px !important;\n  }\n\n  .v-application--is-ltr .ms-sm-n9 {\n    margin-left: -36px !important;\n  }\n\n  .v-application--is-rtl .ms-sm-n9 {\n    margin-right: -36px !important;\n  }\n\n  .v-application--is-ltr .ms-sm-n10 {\n    margin-left: -40px !important;\n  }\n\n  .v-application--is-rtl .ms-sm-n10 {\n    margin-right: -40px !important;\n  }\n\n  .v-application--is-ltr .ms-sm-n11 {\n    margin-left: -44px !important;\n  }\n\n  .v-application--is-rtl .ms-sm-n11 {\n    margin-right: -44px !important;\n  }\n\n  .v-application--is-ltr .ms-sm-n12 {\n    margin-left: -48px !important;\n  }\n\n  .v-application--is-rtl .ms-sm-n12 {\n    margin-right: -48px !important;\n  }\n\n  .v-application--is-ltr .ms-sm-n13 {\n    margin-left: -52px !important;\n  }\n\n  .v-application--is-rtl .ms-sm-n13 {\n    margin-right: -52px !important;\n  }\n\n  .v-application--is-ltr .ms-sm-n14 {\n    margin-left: -56px !important;\n  }\n\n  .v-application--is-rtl .ms-sm-n14 {\n    margin-right: -56px !important;\n  }\n\n  .v-application--is-ltr .ms-sm-n15 {\n    margin-left: -60px !important;\n  }\n\n  .v-application--is-rtl .ms-sm-n15 {\n    margin-right: -60px !important;\n  }\n\n  .v-application--is-ltr .ms-sm-n16 {\n    margin-left: -64px !important;\n  }\n\n  .v-application--is-rtl .ms-sm-n16 {\n    margin-right: -64px !important;\n  }\n\n  .v-application--is-ltr .me-sm-n1 {\n    margin-right: -4px !important;\n  }\n\n  .v-application--is-rtl .me-sm-n1 {\n    margin-left: -4px !important;\n  }\n\n  .v-application--is-ltr .me-sm-n2 {\n    margin-right: -8px !important;\n  }\n\n  .v-application--is-rtl .me-sm-n2 {\n    margin-left: -8px !important;\n  }\n\n  .v-application--is-ltr .me-sm-n3 {\n    margin-right: -12px !important;\n  }\n\n  .v-application--is-rtl .me-sm-n3 {\n    margin-left: -12px !important;\n  }\n\n  .v-application--is-ltr .me-sm-n4 {\n    margin-right: -16px !important;\n  }\n\n  .v-application--is-rtl .me-sm-n4 {\n    margin-left: -16px !important;\n  }\n\n  .v-application--is-ltr .me-sm-n5 {\n    margin-right: -20px !important;\n  }\n\n  .v-application--is-rtl .me-sm-n5 {\n    margin-left: -20px !important;\n  }\n\n  .v-application--is-ltr .me-sm-n6 {\n    margin-right: -24px !important;\n  }\n\n  .v-application--is-rtl .me-sm-n6 {\n    margin-left: -24px !important;\n  }\n\n  .v-application--is-ltr .me-sm-n7 {\n    margin-right: -28px !important;\n  }\n\n  .v-application--is-rtl .me-sm-n7 {\n    margin-left: -28px !important;\n  }\n\n  .v-application--is-ltr .me-sm-n8 {\n    margin-right: -32px !important;\n  }\n\n  .v-application--is-rtl .me-sm-n8 {\n    margin-left: -32px !important;\n  }\n\n  .v-application--is-ltr .me-sm-n9 {\n    margin-right: -36px !important;\n  }\n\n  .v-application--is-rtl .me-sm-n9 {\n    margin-left: -36px !important;\n  }\n\n  .v-application--is-ltr .me-sm-n10 {\n    margin-right: -40px !important;\n  }\n\n  .v-application--is-rtl .me-sm-n10 {\n    margin-left: -40px !important;\n  }\n\n  .v-application--is-ltr .me-sm-n11 {\n    margin-right: -44px !important;\n  }\n\n  .v-application--is-rtl .me-sm-n11 {\n    margin-left: -44px !important;\n  }\n\n  .v-application--is-ltr .me-sm-n12 {\n    margin-right: -48px !important;\n  }\n\n  .v-application--is-rtl .me-sm-n12 {\n    margin-left: -48px !important;\n  }\n\n  .v-application--is-ltr .me-sm-n13 {\n    margin-right: -52px !important;\n  }\n\n  .v-application--is-rtl .me-sm-n13 {\n    margin-left: -52px !important;\n  }\n\n  .v-application--is-ltr .me-sm-n14 {\n    margin-right: -56px !important;\n  }\n\n  .v-application--is-rtl .me-sm-n14 {\n    margin-left: -56px !important;\n  }\n\n  .v-application--is-ltr .me-sm-n15 {\n    margin-right: -60px !important;\n  }\n\n  .v-application--is-rtl .me-sm-n15 {\n    margin-left: -60px !important;\n  }\n\n  .v-application--is-ltr .me-sm-n16 {\n    margin-right: -64px !important;\n  }\n\n  .v-application--is-rtl .me-sm-n16 {\n    margin-left: -64px !important;\n  }\n\n  .v-application .pa-sm-0 {\n    padding: 0px !important;\n  }\n\n  .v-application .pa-sm-1 {\n    padding: 4px !important;\n  }\n\n  .v-application .pa-sm-2 {\n    padding: 8px !important;\n  }\n\n  .v-application .pa-sm-3 {\n    padding: 12px !important;\n  }\n\n  .v-application .pa-sm-4 {\n    padding: 16px !important;\n  }\n\n  .v-application .pa-sm-5 {\n    padding: 20px !important;\n  }\n\n  .v-application .pa-sm-6 {\n    padding: 24px !important;\n  }\n\n  .v-application .pa-sm-7 {\n    padding: 28px !important;\n  }\n\n  .v-application .pa-sm-8 {\n    padding: 32px !important;\n  }\n\n  .v-application .pa-sm-9 {\n    padding: 36px !important;\n  }\n\n  .v-application .pa-sm-10 {\n    padding: 40px !important;\n  }\n\n  .v-application .pa-sm-11 {\n    padding: 44px !important;\n  }\n\n  .v-application .pa-sm-12 {\n    padding: 48px !important;\n  }\n\n  .v-application .pa-sm-13 {\n    padding: 52px !important;\n  }\n\n  .v-application .pa-sm-14 {\n    padding: 56px !important;\n  }\n\n  .v-application .pa-sm-15 {\n    padding: 60px !important;\n  }\n\n  .v-application .pa-sm-16 {\n    padding: 64px !important;\n  }\n\n  .v-application .px-sm-0 {\n    padding-right: 0px !important;\n    padding-left: 0px !important;\n  }\n\n  .v-application .px-sm-1 {\n    padding-right: 4px !important;\n    padding-left: 4px !important;\n  }\n\n  .v-application .px-sm-2 {\n    padding-right: 8px !important;\n    padding-left: 8px !important;\n  }\n\n  .v-application .px-sm-3 {\n    padding-right: 12px !important;\n    padding-left: 12px !important;\n  }\n\n  .v-application .px-sm-4 {\n    padding-right: 16px !important;\n    padding-left: 16px !important;\n  }\n\n  .v-application .px-sm-5 {\n    padding-right: 20px !important;\n    padding-left: 20px !important;\n  }\n\n  .v-application .px-sm-6 {\n    padding-right: 24px !important;\n    padding-left: 24px !important;\n  }\n\n  .v-application .px-sm-7 {\n    padding-right: 28px !important;\n    padding-left: 28px !important;\n  }\n\n  .v-application .px-sm-8 {\n    padding-right: 32px !important;\n    padding-left: 32px !important;\n  }\n\n  .v-application .px-sm-9 {\n    padding-right: 36px !important;\n    padding-left: 36px !important;\n  }\n\n  .v-application .px-sm-10 {\n    padding-right: 40px !important;\n    padding-left: 40px !important;\n  }\n\n  .v-application .px-sm-11 {\n    padding-right: 44px !important;\n    padding-left: 44px !important;\n  }\n\n  .v-application .px-sm-12 {\n    padding-right: 48px !important;\n    padding-left: 48px !important;\n  }\n\n  .v-application .px-sm-13 {\n    padding-right: 52px !important;\n    padding-left: 52px !important;\n  }\n\n  .v-application .px-sm-14 {\n    padding-right: 56px !important;\n    padding-left: 56px !important;\n  }\n\n  .v-application .px-sm-15 {\n    padding-right: 60px !important;\n    padding-left: 60px !important;\n  }\n\n  .v-application .px-sm-16 {\n    padding-right: 64px !important;\n    padding-left: 64px !important;\n  }\n\n  .v-application .py-sm-0 {\n    padding-top: 0px !important;\n    padding-bottom: 0px !important;\n  }\n\n  .v-application .py-sm-1 {\n    padding-top: 4px !important;\n    padding-bottom: 4px !important;\n  }\n\n  .v-application .py-sm-2 {\n    padding-top: 8px !important;\n    padding-bottom: 8px !important;\n  }\n\n  .v-application .py-sm-3 {\n    padding-top: 12px !important;\n    padding-bottom: 12px !important;\n  }\n\n  .v-application .py-sm-4 {\n    padding-top: 16px !important;\n    padding-bottom: 16px !important;\n  }\n\n  .v-application .py-sm-5 {\n    padding-top: 20px !important;\n    padding-bottom: 20px !important;\n  }\n\n  .v-application .py-sm-6 {\n    padding-top: 24px !important;\n    padding-bottom: 24px !important;\n  }\n\n  .v-application .py-sm-7 {\n    padding-top: 28px !important;\n    padding-bottom: 28px !important;\n  }\n\n  .v-application .py-sm-8 {\n    padding-top: 32px !important;\n    padding-bottom: 32px !important;\n  }\n\n  .v-application .py-sm-9 {\n    padding-top: 36px !important;\n    padding-bottom: 36px !important;\n  }\n\n  .v-application .py-sm-10 {\n    padding-top: 40px !important;\n    padding-bottom: 40px !important;\n  }\n\n  .v-application .py-sm-11 {\n    padding-top: 44px !important;\n    padding-bottom: 44px !important;\n  }\n\n  .v-application .py-sm-12 {\n    padding-top: 48px !important;\n    padding-bottom: 48px !important;\n  }\n\n  .v-application .py-sm-13 {\n    padding-top: 52px !important;\n    padding-bottom: 52px !important;\n  }\n\n  .v-application .py-sm-14 {\n    padding-top: 56px !important;\n    padding-bottom: 56px !important;\n  }\n\n  .v-application .py-sm-15 {\n    padding-top: 60px !important;\n    padding-bottom: 60px !important;\n  }\n\n  .v-application .py-sm-16 {\n    padding-top: 64px !important;\n    padding-bottom: 64px !important;\n  }\n\n  .v-application .pt-sm-0 {\n    padding-top: 0px !important;\n  }\n\n  .v-application .pt-sm-1 {\n    padding-top: 4px !important;\n  }\n\n  .v-application .pt-sm-2 {\n    padding-top: 8px !important;\n  }\n\n  .v-application .pt-sm-3 {\n    padding-top: 12px !important;\n  }\n\n  .v-application .pt-sm-4 {\n    padding-top: 16px !important;\n  }\n\n  .v-application .pt-sm-5 {\n    padding-top: 20px !important;\n  }\n\n  .v-application .pt-sm-6 {\n    padding-top: 24px !important;\n  }\n\n  .v-application .pt-sm-7 {\n    padding-top: 28px !important;\n  }\n\n  .v-application .pt-sm-8 {\n    padding-top: 32px !important;\n  }\n\n  .v-application .pt-sm-9 {\n    padding-top: 36px !important;\n  }\n\n  .v-application .pt-sm-10 {\n    padding-top: 40px !important;\n  }\n\n  .v-application .pt-sm-11 {\n    padding-top: 44px !important;\n  }\n\n  .v-application .pt-sm-12 {\n    padding-top: 48px !important;\n  }\n\n  .v-application .pt-sm-13 {\n    padding-top: 52px !important;\n  }\n\n  .v-application .pt-sm-14 {\n    padding-top: 56px !important;\n  }\n\n  .v-application .pt-sm-15 {\n    padding-top: 60px !important;\n  }\n\n  .v-application .pt-sm-16 {\n    padding-top: 64px !important;\n  }\n\n  .v-application .pr-sm-0 {\n    padding-right: 0px !important;\n  }\n\n  .v-application .pr-sm-1 {\n    padding-right: 4px !important;\n  }\n\n  .v-application .pr-sm-2 {\n    padding-right: 8px !important;\n  }\n\n  .v-application .pr-sm-3 {\n    padding-right: 12px !important;\n  }\n\n  .v-application .pr-sm-4 {\n    padding-right: 16px !important;\n  }\n\n  .v-application .pr-sm-5 {\n    padding-right: 20px !important;\n  }\n\n  .v-application .pr-sm-6 {\n    padding-right: 24px !important;\n  }\n\n  .v-application .pr-sm-7 {\n    padding-right: 28px !important;\n  }\n\n  .v-application .pr-sm-8 {\n    padding-right: 32px !important;\n  }\n\n  .v-application .pr-sm-9 {\n    padding-right: 36px !important;\n  }\n\n  .v-application .pr-sm-10 {\n    padding-right: 40px !important;\n  }\n\n  .v-application .pr-sm-11 {\n    padding-right: 44px !important;\n  }\n\n  .v-application .pr-sm-12 {\n    padding-right: 48px !important;\n  }\n\n  .v-application .pr-sm-13 {\n    padding-right: 52px !important;\n  }\n\n  .v-application .pr-sm-14 {\n    padding-right: 56px !important;\n  }\n\n  .v-application .pr-sm-15 {\n    padding-right: 60px !important;\n  }\n\n  .v-application .pr-sm-16 {\n    padding-right: 64px !important;\n  }\n\n  .v-application .pb-sm-0 {\n    padding-bottom: 0px !important;\n  }\n\n  .v-application .pb-sm-1 {\n    padding-bottom: 4px !important;\n  }\n\n  .v-application .pb-sm-2 {\n    padding-bottom: 8px !important;\n  }\n\n  .v-application .pb-sm-3 {\n    padding-bottom: 12px !important;\n  }\n\n  .v-application .pb-sm-4 {\n    padding-bottom: 16px !important;\n  }\n\n  .v-application .pb-sm-5 {\n    padding-bottom: 20px !important;\n  }\n\n  .v-application .pb-sm-6 {\n    padding-bottom: 24px !important;\n  }\n\n  .v-application .pb-sm-7 {\n    padding-bottom: 28px !important;\n  }\n\n  .v-application .pb-sm-8 {\n    padding-bottom: 32px !important;\n  }\n\n  .v-application .pb-sm-9 {\n    padding-bottom: 36px !important;\n  }\n\n  .v-application .pb-sm-10 {\n    padding-bottom: 40px !important;\n  }\n\n  .v-application .pb-sm-11 {\n    padding-bottom: 44px !important;\n  }\n\n  .v-application .pb-sm-12 {\n    padding-bottom: 48px !important;\n  }\n\n  .v-application .pb-sm-13 {\n    padding-bottom: 52px !important;\n  }\n\n  .v-application .pb-sm-14 {\n    padding-bottom: 56px !important;\n  }\n\n  .v-application .pb-sm-15 {\n    padding-bottom: 60px !important;\n  }\n\n  .v-application .pb-sm-16 {\n    padding-bottom: 64px !important;\n  }\n\n  .v-application .pl-sm-0 {\n    padding-left: 0px !important;\n  }\n\n  .v-application .pl-sm-1 {\n    padding-left: 4px !important;\n  }\n\n  .v-application .pl-sm-2 {\n    padding-left: 8px !important;\n  }\n\n  .v-application .pl-sm-3 {\n    padding-left: 12px !important;\n  }\n\n  .v-application .pl-sm-4 {\n    padding-left: 16px !important;\n  }\n\n  .v-application .pl-sm-5 {\n    padding-left: 20px !important;\n  }\n\n  .v-application .pl-sm-6 {\n    padding-left: 24px !important;\n  }\n\n  .v-application .pl-sm-7 {\n    padding-left: 28px !important;\n  }\n\n  .v-application .pl-sm-8 {\n    padding-left: 32px !important;\n  }\n\n  .v-application .pl-sm-9 {\n    padding-left: 36px !important;\n  }\n\n  .v-application .pl-sm-10 {\n    padding-left: 40px !important;\n  }\n\n  .v-application .pl-sm-11 {\n    padding-left: 44px !important;\n  }\n\n  .v-application .pl-sm-12 {\n    padding-left: 48px !important;\n  }\n\n  .v-application .pl-sm-13 {\n    padding-left: 52px !important;\n  }\n\n  .v-application .pl-sm-14 {\n    padding-left: 56px !important;\n  }\n\n  .v-application .pl-sm-15 {\n    padding-left: 60px !important;\n  }\n\n  .v-application .pl-sm-16 {\n    padding-left: 64px !important;\n  }\n\n  .v-application--is-ltr .ps-sm-0 {\n    padding-left: 0px !important;\n  }\n\n  .v-application--is-rtl .ps-sm-0 {\n    padding-right: 0px !important;\n  }\n\n  .v-application--is-ltr .ps-sm-1 {\n    padding-left: 4px !important;\n  }\n\n  .v-application--is-rtl .ps-sm-1 {\n    padding-right: 4px !important;\n  }\n\n  .v-application--is-ltr .ps-sm-2 {\n    padding-left: 8px !important;\n  }\n\n  .v-application--is-rtl .ps-sm-2 {\n    padding-right: 8px !important;\n  }\n\n  .v-application--is-ltr .ps-sm-3 {\n    padding-left: 12px !important;\n  }\n\n  .v-application--is-rtl .ps-sm-3 {\n    padding-right: 12px !important;\n  }\n\n  .v-application--is-ltr .ps-sm-4 {\n    padding-left: 16px !important;\n  }\n\n  .v-application--is-rtl .ps-sm-4 {\n    padding-right: 16px !important;\n  }\n\n  .v-application--is-ltr .ps-sm-5 {\n    padding-left: 20px !important;\n  }\n\n  .v-application--is-rtl .ps-sm-5 {\n    padding-right: 20px !important;\n  }\n\n  .v-application--is-ltr .ps-sm-6 {\n    padding-left: 24px !important;\n  }\n\n  .v-application--is-rtl .ps-sm-6 {\n    padding-right: 24px !important;\n  }\n\n  .v-application--is-ltr .ps-sm-7 {\n    padding-left: 28px !important;\n  }\n\n  .v-application--is-rtl .ps-sm-7 {\n    padding-right: 28px !important;\n  }\n\n  .v-application--is-ltr .ps-sm-8 {\n    padding-left: 32px !important;\n  }\n\n  .v-application--is-rtl .ps-sm-8 {\n    padding-right: 32px !important;\n  }\n\n  .v-application--is-ltr .ps-sm-9 {\n    padding-left: 36px !important;\n  }\n\n  .v-application--is-rtl .ps-sm-9 {\n    padding-right: 36px !important;\n  }\n\n  .v-application--is-ltr .ps-sm-10 {\n    padding-left: 40px !important;\n  }\n\n  .v-application--is-rtl .ps-sm-10 {\n    padding-right: 40px !important;\n  }\n\n  .v-application--is-ltr .ps-sm-11 {\n    padding-left: 44px !important;\n  }\n\n  .v-application--is-rtl .ps-sm-11 {\n    padding-right: 44px !important;\n  }\n\n  .v-application--is-ltr .ps-sm-12 {\n    padding-left: 48px !important;\n  }\n\n  .v-application--is-rtl .ps-sm-12 {\n    padding-right: 48px !important;\n  }\n\n  .v-application--is-ltr .ps-sm-13 {\n    padding-left: 52px !important;\n  }\n\n  .v-application--is-rtl .ps-sm-13 {\n    padding-right: 52px !important;\n  }\n\n  .v-application--is-ltr .ps-sm-14 {\n    padding-left: 56px !important;\n  }\n\n  .v-application--is-rtl .ps-sm-14 {\n    padding-right: 56px !important;\n  }\n\n  .v-application--is-ltr .ps-sm-15 {\n    padding-left: 60px !important;\n  }\n\n  .v-application--is-rtl .ps-sm-15 {\n    padding-right: 60px !important;\n  }\n\n  .v-application--is-ltr .ps-sm-16 {\n    padding-left: 64px !important;\n  }\n\n  .v-application--is-rtl .ps-sm-16 {\n    padding-right: 64px !important;\n  }\n\n  .v-application--is-ltr .pe-sm-0 {\n    padding-right: 0px !important;\n  }\n\n  .v-application--is-rtl .pe-sm-0 {\n    padding-left: 0px !important;\n  }\n\n  .v-application--is-ltr .pe-sm-1 {\n    padding-right: 4px !important;\n  }\n\n  .v-application--is-rtl .pe-sm-1 {\n    padding-left: 4px !important;\n  }\n\n  .v-application--is-ltr .pe-sm-2 {\n    padding-right: 8px !important;\n  }\n\n  .v-application--is-rtl .pe-sm-2 {\n    padding-left: 8px !important;\n  }\n\n  .v-application--is-ltr .pe-sm-3 {\n    padding-right: 12px !important;\n  }\n\n  .v-application--is-rtl .pe-sm-3 {\n    padding-left: 12px !important;\n  }\n\n  .v-application--is-ltr .pe-sm-4 {\n    padding-right: 16px !important;\n  }\n\n  .v-application--is-rtl .pe-sm-4 {\n    padding-left: 16px !important;\n  }\n\n  .v-application--is-ltr .pe-sm-5 {\n    padding-right: 20px !important;\n  }\n\n  .v-application--is-rtl .pe-sm-5 {\n    padding-left: 20px !important;\n  }\n\n  .v-application--is-ltr .pe-sm-6 {\n    padding-right: 24px !important;\n  }\n\n  .v-application--is-rtl .pe-sm-6 {\n    padding-left: 24px !important;\n  }\n\n  .v-application--is-ltr .pe-sm-7 {\n    padding-right: 28px !important;\n  }\n\n  .v-application--is-rtl .pe-sm-7 {\n    padding-left: 28px !important;\n  }\n\n  .v-application--is-ltr .pe-sm-8 {\n    padding-right: 32px !important;\n  }\n\n  .v-application--is-rtl .pe-sm-8 {\n    padding-left: 32px !important;\n  }\n\n  .v-application--is-ltr .pe-sm-9 {\n    padding-right: 36px !important;\n  }\n\n  .v-application--is-rtl .pe-sm-9 {\n    padding-left: 36px !important;\n  }\n\n  .v-application--is-ltr .pe-sm-10 {\n    padding-right: 40px !important;\n  }\n\n  .v-application--is-rtl .pe-sm-10 {\n    padding-left: 40px !important;\n  }\n\n  .v-application--is-ltr .pe-sm-11 {\n    padding-right: 44px !important;\n  }\n\n  .v-application--is-rtl .pe-sm-11 {\n    padding-left: 44px !important;\n  }\n\n  .v-application--is-ltr .pe-sm-12 {\n    padding-right: 48px !important;\n  }\n\n  .v-application--is-rtl .pe-sm-12 {\n    padding-left: 48px !important;\n  }\n\n  .v-application--is-ltr .pe-sm-13 {\n    padding-right: 52px !important;\n  }\n\n  .v-application--is-rtl .pe-sm-13 {\n    padding-left: 52px !important;\n  }\n\n  .v-application--is-ltr .pe-sm-14 {\n    padding-right: 56px !important;\n  }\n\n  .v-application--is-rtl .pe-sm-14 {\n    padding-left: 56px !important;\n  }\n\n  .v-application--is-ltr .pe-sm-15 {\n    padding-right: 60px !important;\n  }\n\n  .v-application--is-rtl .pe-sm-15 {\n    padding-left: 60px !important;\n  }\n\n  .v-application--is-ltr .pe-sm-16 {\n    padding-right: 64px !important;\n  }\n\n  .v-application--is-rtl .pe-sm-16 {\n    padding-left: 64px !important;\n  }\n\n  .v-application .text-sm-left {\n    text-align: left !important;\n  }\n\n  .v-application .text-sm-right {\n    text-align: right !important;\n  }\n\n  .v-application .text-sm-center {\n    text-align: center !important;\n  }\n\n  .v-application .text-sm-justify {\n    text-align: justify !important;\n  }\n\n  .v-application .text-sm-start {\n    text-align: start !important;\n  }\n\n  .v-application .text-sm-end {\n    text-align: end !important;\n  }\n\n  .v-application .text-sm-h1 {\n    font-size: 6rem !important;\n    font-weight: 300;\n    line-height: 6rem;\n    letter-spacing: -0.015625em !important;\n    font-family: \"Roboto\", sans-serif !important;\n  }\n\n  .v-application .text-sm-h2 {\n    font-size: 3.75rem !important;\n    font-weight: 300;\n    line-height: 3.75rem;\n    letter-spacing: -0.0083333333em !important;\n    font-family: \"Roboto\", sans-serif !important;\n  }\n\n  .v-application .text-sm-h3 {\n    font-size: 3rem !important;\n    font-weight: 400;\n    line-height: 3.125rem;\n    letter-spacing: normal !important;\n    font-family: \"Roboto\", sans-serif !important;\n  }\n\n  .v-application .text-sm-h4 {\n    font-size: 2.125rem !important;\n    font-weight: 400;\n    line-height: 2.5rem;\n    letter-spacing: 0.0073529412em !important;\n    font-family: \"Roboto\", sans-serif !important;\n  }\n\n  .v-application .text-sm-h5 {\n    font-size: 1.5rem !important;\n    font-weight: 400;\n    line-height: 2rem;\n    letter-spacing: normal !important;\n    font-family: \"Roboto\", sans-serif !important;\n  }\n\n  .v-application .text-sm-h6 {\n    font-size: 1.25rem !important;\n    font-weight: 500;\n    line-height: 2rem;\n    letter-spacing: 0.0125em !important;\n    font-family: \"Roboto\", sans-serif !important;\n  }\n\n  .v-application .text-sm-subtitle-1 {\n    font-size: 1rem !important;\n    font-weight: normal;\n    line-height: 1.75rem;\n    letter-spacing: 0.009375em !important;\n    font-family: \"Roboto\", sans-serif !important;\n  }\n\n  .v-application .text-sm-subtitle-2 {\n    font-size: 0.875rem !important;\n    font-weight: 500;\n    line-height: 1.375rem;\n    letter-spacing: 0.0071428571em !important;\n    font-family: \"Roboto\", sans-serif !important;\n  }\n\n  .v-application .text-sm-body-1 {\n    font-size: 1rem !important;\n    font-weight: 400;\n    line-height: 1.5rem;\n    letter-spacing: 0.03125em !important;\n    font-family: \"Roboto\", sans-serif !important;\n  }\n\n  .v-application .text-sm-body-2 {\n    font-size: 0.875rem !important;\n    font-weight: 400;\n    line-height: 1.25rem;\n    letter-spacing: 0.0178571429em !important;\n    font-family: \"Roboto\", sans-serif !important;\n  }\n\n  .v-application .text-sm-button {\n    font-size: 0.875rem !important;\n    font-weight: 500;\n    line-height: 2.25rem;\n    letter-spacing: 0.0892857143em !important;\n    font-family: \"Roboto\", sans-serif !important;\n    text-transform: uppercase !important;\n  }\n\n  .v-application .text-sm-caption {\n    font-size: 0.75rem !important;\n    font-weight: 400;\n    line-height: 1.25rem;\n    letter-spacing: 0.0333333333em !important;\n    font-family: \"Roboto\", sans-serif !important;\n  }\n\n  .v-application .text-sm-overline {\n    font-size: 0.75rem !important;\n    font-weight: 500;\n    line-height: 2rem;\n    letter-spacing: 0.1666666667em !important;\n    font-family: \"Roboto\", sans-serif !important;\n    text-transform: uppercase !important;\n  }\n}\n@media (min-width: 960px) {\n  .v-application .d-md-none {\n    display: none !important;\n  }\n\n  .v-application .d-md-inline {\n    display: inline !important;\n  }\n\n  .v-application .d-md-inline-block {\n    display: inline-block !important;\n  }\n\n  .v-application .d-md-block {\n    display: block !important;\n  }\n\n  .v-application .d-md-table {\n    display: table !important;\n  }\n\n  .v-application .d-md-table-row {\n    display: table-row !important;\n  }\n\n  .v-application .d-md-table-cell {\n    display: table-cell !important;\n  }\n\n  .v-application .d-md-flex {\n    display: flex !important;\n  }\n\n  .v-application .d-md-inline-flex {\n    display: inline-flex !important;\n  }\n\n  .v-application .float-md-none {\n    float: none !important;\n  }\n\n  .v-application .float-md-left {\n    float: left !important;\n  }\n\n  .v-application .float-md-right {\n    float: right !important;\n  }\n\n  .v-application .flex-md-fill {\n    flex: 1 1 auto !important;\n  }\n\n  .v-application .flex-md-row {\n    flex-direction: row !important;\n  }\n\n  .v-application .flex-md-column {\n    flex-direction: column !important;\n  }\n\n  .v-application .flex-md-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n\n  .v-application .flex-md-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n\n  .v-application .flex-md-grow-0 {\n    flex-grow: 0 !important;\n  }\n\n  .v-application .flex-md-grow-1 {\n    flex-grow: 1 !important;\n  }\n\n  .v-application .flex-md-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n\n  .v-application .flex-md-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n\n  .v-application .flex-md-wrap {\n    flex-wrap: wrap !important;\n  }\n\n  .v-application .flex-md-nowrap {\n    flex-wrap: nowrap !important;\n  }\n\n  .v-application .flex-md-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n\n  .v-application .justify-md-start {\n    justify-content: flex-start !important;\n  }\n\n  .v-application .justify-md-end {\n    justify-content: flex-end !important;\n  }\n\n  .v-application .justify-md-center {\n    justify-content: center !important;\n  }\n\n  .v-application .justify-md-space-between {\n    justify-content: space-between !important;\n  }\n\n  .v-application .justify-md-space-around {\n    justify-content: space-around !important;\n  }\n\n  .v-application .align-md-start {\n    align-items: flex-start !important;\n  }\n\n  .v-application .align-md-end {\n    align-items: flex-end !important;\n  }\n\n  .v-application .align-md-center {\n    align-items: center !important;\n  }\n\n  .v-application .align-md-baseline {\n    align-items: baseline !important;\n  }\n\n  .v-application .align-md-stretch {\n    align-items: stretch !important;\n  }\n\n  .v-application .align-content-md-start {\n    align-content: flex-start !important;\n  }\n\n  .v-application .align-content-md-end {\n    align-content: flex-end !important;\n  }\n\n  .v-application .align-content-md-center {\n    align-content: center !important;\n  }\n\n  .v-application .align-content-md-space-between {\n    align-content: space-between !important;\n  }\n\n  .v-application .align-content-md-space-around {\n    align-content: space-around !important;\n  }\n\n  .v-application .align-content-md-stretch {\n    align-content: stretch !important;\n  }\n\n  .v-application .align-self-md-auto {\n    align-self: auto !important;\n  }\n\n  .v-application .align-self-md-start {\n    align-self: flex-start !important;\n  }\n\n  .v-application .align-self-md-end {\n    align-self: flex-end !important;\n  }\n\n  .v-application .align-self-md-center {\n    align-self: center !important;\n  }\n\n  .v-application .align-self-md-baseline {\n    align-self: baseline !important;\n  }\n\n  .v-application .align-self-md-stretch {\n    align-self: stretch !important;\n  }\n\n  .v-application .order-md-first {\n    order: -1 !important;\n  }\n\n  .v-application .order-md-0 {\n    order: 0 !important;\n  }\n\n  .v-application .order-md-1 {\n    order: 1 !important;\n  }\n\n  .v-application .order-md-2 {\n    order: 2 !important;\n  }\n\n  .v-application .order-md-3 {\n    order: 3 !important;\n  }\n\n  .v-application .order-md-4 {\n    order: 4 !important;\n  }\n\n  .v-application .order-md-5 {\n    order: 5 !important;\n  }\n\n  .v-application .order-md-6 {\n    order: 6 !important;\n  }\n\n  .v-application .order-md-7 {\n    order: 7 !important;\n  }\n\n  .v-application .order-md-8 {\n    order: 8 !important;\n  }\n\n  .v-application .order-md-9 {\n    order: 9 !important;\n  }\n\n  .v-application .order-md-10 {\n    order: 10 !important;\n  }\n\n  .v-application .order-md-11 {\n    order: 11 !important;\n  }\n\n  .v-application .order-md-12 {\n    order: 12 !important;\n  }\n\n  .v-application .order-md-last {\n    order: 13 !important;\n  }\n\n  .v-application .ma-md-0 {\n    margin: 0px !important;\n  }\n\n  .v-application .ma-md-1 {\n    margin: 4px !important;\n  }\n\n  .v-application .ma-md-2 {\n    margin: 8px !important;\n  }\n\n  .v-application .ma-md-3 {\n    margin: 12px !important;\n  }\n\n  .v-application .ma-md-4 {\n    margin: 16px !important;\n  }\n\n  .v-application .ma-md-5 {\n    margin: 20px !important;\n  }\n\n  .v-application .ma-md-6 {\n    margin: 24px !important;\n  }\n\n  .v-application .ma-md-7 {\n    margin: 28px !important;\n  }\n\n  .v-application .ma-md-8 {\n    margin: 32px !important;\n  }\n\n  .v-application .ma-md-9 {\n    margin: 36px !important;\n  }\n\n  .v-application .ma-md-10 {\n    margin: 40px !important;\n  }\n\n  .v-application .ma-md-11 {\n    margin: 44px !important;\n  }\n\n  .v-application .ma-md-12 {\n    margin: 48px !important;\n  }\n\n  .v-application .ma-md-13 {\n    margin: 52px !important;\n  }\n\n  .v-application .ma-md-14 {\n    margin: 56px !important;\n  }\n\n  .v-application .ma-md-15 {\n    margin: 60px !important;\n  }\n\n  .v-application .ma-md-16 {\n    margin: 64px !important;\n  }\n\n  .v-application .ma-md-auto {\n    margin: auto !important;\n  }\n\n  .v-application .mx-md-0 {\n    margin-right: 0px !important;\n    margin-left: 0px !important;\n  }\n\n  .v-application .mx-md-1 {\n    margin-right: 4px !important;\n    margin-left: 4px !important;\n  }\n\n  .v-application .mx-md-2 {\n    margin-right: 8px !important;\n    margin-left: 8px !important;\n  }\n\n  .v-application .mx-md-3 {\n    margin-right: 12px !important;\n    margin-left: 12px !important;\n  }\n\n  .v-application .mx-md-4 {\n    margin-right: 16px !important;\n    margin-left: 16px !important;\n  }\n\n  .v-application .mx-md-5 {\n    margin-right: 20px !important;\n    margin-left: 20px !important;\n  }\n\n  .v-application .mx-md-6 {\n    margin-right: 24px !important;\n    margin-left: 24px !important;\n  }\n\n  .v-application .mx-md-7 {\n    margin-right: 28px !important;\n    margin-left: 28px !important;\n  }\n\n  .v-application .mx-md-8 {\n    margin-right: 32px !important;\n    margin-left: 32px !important;\n  }\n\n  .v-application .mx-md-9 {\n    margin-right: 36px !important;\n    margin-left: 36px !important;\n  }\n\n  .v-application .mx-md-10 {\n    margin-right: 40px !important;\n    margin-left: 40px !important;\n  }\n\n  .v-application .mx-md-11 {\n    margin-right: 44px !important;\n    margin-left: 44px !important;\n  }\n\n  .v-application .mx-md-12 {\n    margin-right: 48px !important;\n    margin-left: 48px !important;\n  }\n\n  .v-application .mx-md-13 {\n    margin-right: 52px !important;\n    margin-left: 52px !important;\n  }\n\n  .v-application .mx-md-14 {\n    margin-right: 56px !important;\n    margin-left: 56px !important;\n  }\n\n  .v-application .mx-md-15 {\n    margin-right: 60px !important;\n    margin-left: 60px !important;\n  }\n\n  .v-application .mx-md-16 {\n    margin-right: 64px !important;\n    margin-left: 64px !important;\n  }\n\n  .v-application .mx-md-auto {\n    margin-right: auto !important;\n    margin-left: auto !important;\n  }\n\n  .v-application .my-md-0 {\n    margin-top: 0px !important;\n    margin-bottom: 0px !important;\n  }\n\n  .v-application .my-md-1 {\n    margin-top: 4px !important;\n    margin-bottom: 4px !important;\n  }\n\n  .v-application .my-md-2 {\n    margin-top: 8px !important;\n    margin-bottom: 8px !important;\n  }\n\n  .v-application .my-md-3 {\n    margin-top: 12px !important;\n    margin-bottom: 12px !important;\n  }\n\n  .v-application .my-md-4 {\n    margin-top: 16px !important;\n    margin-bottom: 16px !important;\n  }\n\n  .v-application .my-md-5 {\n    margin-top: 20px !important;\n    margin-bottom: 20px !important;\n  }\n\n  .v-application .my-md-6 {\n    margin-top: 24px !important;\n    margin-bottom: 24px !important;\n  }\n\n  .v-application .my-md-7 {\n    margin-top: 28px !important;\n    margin-bottom: 28px !important;\n  }\n\n  .v-application .my-md-8 {\n    margin-top: 32px !important;\n    margin-bottom: 32px !important;\n  }\n\n  .v-application .my-md-9 {\n    margin-top: 36px !important;\n    margin-bottom: 36px !important;\n  }\n\n  .v-application .my-md-10 {\n    margin-top: 40px !important;\n    margin-bottom: 40px !important;\n  }\n\n  .v-application .my-md-11 {\n    margin-top: 44px !important;\n    margin-bottom: 44px !important;\n  }\n\n  .v-application .my-md-12 {\n    margin-top: 48px !important;\n    margin-bottom: 48px !important;\n  }\n\n  .v-application .my-md-13 {\n    margin-top: 52px !important;\n    margin-bottom: 52px !important;\n  }\n\n  .v-application .my-md-14 {\n    margin-top: 56px !important;\n    margin-bottom: 56px !important;\n  }\n\n  .v-application .my-md-15 {\n    margin-top: 60px !important;\n    margin-bottom: 60px !important;\n  }\n\n  .v-application .my-md-16 {\n    margin-top: 64px !important;\n    margin-bottom: 64px !important;\n  }\n\n  .v-application .my-md-auto {\n    margin-top: auto !important;\n    margin-bottom: auto !important;\n  }\n\n  .v-application .mt-md-0 {\n    margin-top: 0px !important;\n  }\n\n  .v-application .mt-md-1 {\n    margin-top: 4px !important;\n  }\n\n  .v-application .mt-md-2 {\n    margin-top: 8px !important;\n  }\n\n  .v-application .mt-md-3 {\n    margin-top: 12px !important;\n  }\n\n  .v-application .mt-md-4 {\n    margin-top: 16px !important;\n  }\n\n  .v-application .mt-md-5 {\n    margin-top: 20px !important;\n  }\n\n  .v-application .mt-md-6 {\n    margin-top: 24px !important;\n  }\n\n  .v-application .mt-md-7 {\n    margin-top: 28px !important;\n  }\n\n  .v-application .mt-md-8 {\n    margin-top: 32px !important;\n  }\n\n  .v-application .mt-md-9 {\n    margin-top: 36px !important;\n  }\n\n  .v-application .mt-md-10 {\n    margin-top: 40px !important;\n  }\n\n  .v-application .mt-md-11 {\n    margin-top: 44px !important;\n  }\n\n  .v-application .mt-md-12 {\n    margin-top: 48px !important;\n  }\n\n  .v-application .mt-md-13 {\n    margin-top: 52px !important;\n  }\n\n  .v-application .mt-md-14 {\n    margin-top: 56px !important;\n  }\n\n  .v-application .mt-md-15 {\n    margin-top: 60px !important;\n  }\n\n  .v-application .mt-md-16 {\n    margin-top: 64px !important;\n  }\n\n  .v-application .mt-md-auto {\n    margin-top: auto !important;\n  }\n\n  .v-application .mr-md-0 {\n    margin-right: 0px !important;\n  }\n\n  .v-application .mr-md-1 {\n    margin-right: 4px !important;\n  }\n\n  .v-application .mr-md-2 {\n    margin-right: 8px !important;\n  }\n\n  .v-application .mr-md-3 {\n    margin-right: 12px !important;\n  }\n\n  .v-application .mr-md-4 {\n    margin-right: 16px !important;\n  }\n\n  .v-application .mr-md-5 {\n    margin-right: 20px !important;\n  }\n\n  .v-application .mr-md-6 {\n    margin-right: 24px !important;\n  }\n\n  .v-application .mr-md-7 {\n    margin-right: 28px !important;\n  }\n\n  .v-application .mr-md-8 {\n    margin-right: 32px !important;\n  }\n\n  .v-application .mr-md-9 {\n    margin-right: 36px !important;\n  }\n\n  .v-application .mr-md-10 {\n    margin-right: 40px !important;\n  }\n\n  .v-application .mr-md-11 {\n    margin-right: 44px !important;\n  }\n\n  .v-application .mr-md-12 {\n    margin-right: 48px !important;\n  }\n\n  .v-application .mr-md-13 {\n    margin-right: 52px !important;\n  }\n\n  .v-application .mr-md-14 {\n    margin-right: 56px !important;\n  }\n\n  .v-application .mr-md-15 {\n    margin-right: 60px !important;\n  }\n\n  .v-application .mr-md-16 {\n    margin-right: 64px !important;\n  }\n\n  .v-application .mr-md-auto {\n    margin-right: auto !important;\n  }\n\n  .v-application .mb-md-0 {\n    margin-bottom: 0px !important;\n  }\n\n  .v-application .mb-md-1 {\n    margin-bottom: 4px !important;\n  }\n\n  .v-application .mb-md-2 {\n    margin-bottom: 8px !important;\n  }\n\n  .v-application .mb-md-3 {\n    margin-bottom: 12px !important;\n  }\n\n  .v-application .mb-md-4 {\n    margin-bottom: 16px !important;\n  }\n\n  .v-application .mb-md-5 {\n    margin-bottom: 20px !important;\n  }\n\n  .v-application .mb-md-6 {\n    margin-bottom: 24px !important;\n  }\n\n  .v-application .mb-md-7 {\n    margin-bottom: 28px !important;\n  }\n\n  .v-application .mb-md-8 {\n    margin-bottom: 32px !important;\n  }\n\n  .v-application .mb-md-9 {\n    margin-bottom: 36px !important;\n  }\n\n  .v-application .mb-md-10 {\n    margin-bottom: 40px !important;\n  }\n\n  .v-application .mb-md-11 {\n    margin-bottom: 44px !important;\n  }\n\n  .v-application .mb-md-12 {\n    margin-bottom: 48px !important;\n  }\n\n  .v-application .mb-md-13 {\n    margin-bottom: 52px !important;\n  }\n\n  .v-application .mb-md-14 {\n    margin-bottom: 56px !important;\n  }\n\n  .v-application .mb-md-15 {\n    margin-bottom: 60px !important;\n  }\n\n  .v-application .mb-md-16 {\n    margin-bottom: 64px !important;\n  }\n\n  .v-application .mb-md-auto {\n    margin-bottom: auto !important;\n  }\n\n  .v-application .ml-md-0 {\n    margin-left: 0px !important;\n  }\n\n  .v-application .ml-md-1 {\n    margin-left: 4px !important;\n  }\n\n  .v-application .ml-md-2 {\n    margin-left: 8px !important;\n  }\n\n  .v-application .ml-md-3 {\n    margin-left: 12px !important;\n  }\n\n  .v-application .ml-md-4 {\n    margin-left: 16px !important;\n  }\n\n  .v-application .ml-md-5 {\n    margin-left: 20px !important;\n  }\n\n  .v-application .ml-md-6 {\n    margin-left: 24px !important;\n  }\n\n  .v-application .ml-md-7 {\n    margin-left: 28px !important;\n  }\n\n  .v-application .ml-md-8 {\n    margin-left: 32px !important;\n  }\n\n  .v-application .ml-md-9 {\n    margin-left: 36px !important;\n  }\n\n  .v-application .ml-md-10 {\n    margin-left: 40px !important;\n  }\n\n  .v-application .ml-md-11 {\n    margin-left: 44px !important;\n  }\n\n  .v-application .ml-md-12 {\n    margin-left: 48px !important;\n  }\n\n  .v-application .ml-md-13 {\n    margin-left: 52px !important;\n  }\n\n  .v-application .ml-md-14 {\n    margin-left: 56px !important;\n  }\n\n  .v-application .ml-md-15 {\n    margin-left: 60px !important;\n  }\n\n  .v-application .ml-md-16 {\n    margin-left: 64px !important;\n  }\n\n  .v-application .ml-md-auto {\n    margin-left: auto !important;\n  }\n\n  .v-application--is-ltr .ms-md-0 {\n    margin-left: 0px !important;\n  }\n\n  .v-application--is-rtl .ms-md-0 {\n    margin-right: 0px !important;\n  }\n\n  .v-application--is-ltr .ms-md-1 {\n    margin-left: 4px !important;\n  }\n\n  .v-application--is-rtl .ms-md-1 {\n    margin-right: 4px !important;\n  }\n\n  .v-application--is-ltr .ms-md-2 {\n    margin-left: 8px !important;\n  }\n\n  .v-application--is-rtl .ms-md-2 {\n    margin-right: 8px !important;\n  }\n\n  .v-application--is-ltr .ms-md-3 {\n    margin-left: 12px !important;\n  }\n\n  .v-application--is-rtl .ms-md-3 {\n    margin-right: 12px !important;\n  }\n\n  .v-application--is-ltr .ms-md-4 {\n    margin-left: 16px !important;\n  }\n\n  .v-application--is-rtl .ms-md-4 {\n    margin-right: 16px !important;\n  }\n\n  .v-application--is-ltr .ms-md-5 {\n    margin-left: 20px !important;\n  }\n\n  .v-application--is-rtl .ms-md-5 {\n    margin-right: 20px !important;\n  }\n\n  .v-application--is-ltr .ms-md-6 {\n    margin-left: 24px !important;\n  }\n\n  .v-application--is-rtl .ms-md-6 {\n    margin-right: 24px !important;\n  }\n\n  .v-application--is-ltr .ms-md-7 {\n    margin-left: 28px !important;\n  }\n\n  .v-application--is-rtl .ms-md-7 {\n    margin-right: 28px !important;\n  }\n\n  .v-application--is-ltr .ms-md-8 {\n    margin-left: 32px !important;\n  }\n\n  .v-application--is-rtl .ms-md-8 {\n    margin-right: 32px !important;\n  }\n\n  .v-application--is-ltr .ms-md-9 {\n    margin-left: 36px !important;\n  }\n\n  .v-application--is-rtl .ms-md-9 {\n    margin-right: 36px !important;\n  }\n\n  .v-application--is-ltr .ms-md-10 {\n    margin-left: 40px !important;\n  }\n\n  .v-application--is-rtl .ms-md-10 {\n    margin-right: 40px !important;\n  }\n\n  .v-application--is-ltr .ms-md-11 {\n    margin-left: 44px !important;\n  }\n\n  .v-application--is-rtl .ms-md-11 {\n    margin-right: 44px !important;\n  }\n\n  .v-application--is-ltr .ms-md-12 {\n    margin-left: 48px !important;\n  }\n\n  .v-application--is-rtl .ms-md-12 {\n    margin-right: 48px !important;\n  }\n\n  .v-application--is-ltr .ms-md-13 {\n    margin-left: 52px !important;\n  }\n\n  .v-application--is-rtl .ms-md-13 {\n    margin-right: 52px !important;\n  }\n\n  .v-application--is-ltr .ms-md-14 {\n    margin-left: 56px !important;\n  }\n\n  .v-application--is-rtl .ms-md-14 {\n    margin-right: 56px !important;\n  }\n\n  .v-application--is-ltr .ms-md-15 {\n    margin-left: 60px !important;\n  }\n\n  .v-application--is-rtl .ms-md-15 {\n    margin-right: 60px !important;\n  }\n\n  .v-application--is-ltr .ms-md-16 {\n    margin-left: 64px !important;\n  }\n\n  .v-application--is-rtl .ms-md-16 {\n    margin-right: 64px !important;\n  }\n\n  .v-application--is-ltr .ms-md-auto {\n    margin-left: auto !important;\n  }\n\n  .v-application--is-rtl .ms-md-auto {\n    margin-right: auto !important;\n  }\n\n  .v-application--is-ltr .me-md-0 {\n    margin-right: 0px !important;\n  }\n\n  .v-application--is-rtl .me-md-0 {\n    margin-left: 0px !important;\n  }\n\n  .v-application--is-ltr .me-md-1 {\n    margin-right: 4px !important;\n  }\n\n  .v-application--is-rtl .me-md-1 {\n    margin-left: 4px !important;\n  }\n\n  .v-application--is-ltr .me-md-2 {\n    margin-right: 8px !important;\n  }\n\n  .v-application--is-rtl .me-md-2 {\n    margin-left: 8px !important;\n  }\n\n  .v-application--is-ltr .me-md-3 {\n    margin-right: 12px !important;\n  }\n\n  .v-application--is-rtl .me-md-3 {\n    margin-left: 12px !important;\n  }\n\n  .v-application--is-ltr .me-md-4 {\n    margin-right: 16px !important;\n  }\n\n  .v-application--is-rtl .me-md-4 {\n    margin-left: 16px !important;\n  }\n\n  .v-application--is-ltr .me-md-5 {\n    margin-right: 20px !important;\n  }\n\n  .v-application--is-rtl .me-md-5 {\n    margin-left: 20px !important;\n  }\n\n  .v-application--is-ltr .me-md-6 {\n    margin-right: 24px !important;\n  }\n\n  .v-application--is-rtl .me-md-6 {\n    margin-left: 24px !important;\n  }\n\n  .v-application--is-ltr .me-md-7 {\n    margin-right: 28px !important;\n  }\n\n  .v-application--is-rtl .me-md-7 {\n    margin-left: 28px !important;\n  }\n\n  .v-application--is-ltr .me-md-8 {\n    margin-right: 32px !important;\n  }\n\n  .v-application--is-rtl .me-md-8 {\n    margin-left: 32px !important;\n  }\n\n  .v-application--is-ltr .me-md-9 {\n    margin-right: 36px !important;\n  }\n\n  .v-application--is-rtl .me-md-9 {\n    margin-left: 36px !important;\n  }\n\n  .v-application--is-ltr .me-md-10 {\n    margin-right: 40px !important;\n  }\n\n  .v-application--is-rtl .me-md-10 {\n    margin-left: 40px !important;\n  }\n\n  .v-application--is-ltr .me-md-11 {\n    margin-right: 44px !important;\n  }\n\n  .v-application--is-rtl .me-md-11 {\n    margin-left: 44px !important;\n  }\n\n  .v-application--is-ltr .me-md-12 {\n    margin-right: 48px !important;\n  }\n\n  .v-application--is-rtl .me-md-12 {\n    margin-left: 48px !important;\n  }\n\n  .v-application--is-ltr .me-md-13 {\n    margin-right: 52px !important;\n  }\n\n  .v-application--is-rtl .me-md-13 {\n    margin-left: 52px !important;\n  }\n\n  .v-application--is-ltr .me-md-14 {\n    margin-right: 56px !important;\n  }\n\n  .v-application--is-rtl .me-md-14 {\n    margin-left: 56px !important;\n  }\n\n  .v-application--is-ltr .me-md-15 {\n    margin-right: 60px !important;\n  }\n\n  .v-application--is-rtl .me-md-15 {\n    margin-left: 60px !important;\n  }\n\n  .v-application--is-ltr .me-md-16 {\n    margin-right: 64px !important;\n  }\n\n  .v-application--is-rtl .me-md-16 {\n    margin-left: 64px !important;\n  }\n\n  .v-application--is-ltr .me-md-auto {\n    margin-right: auto !important;\n  }\n\n  .v-application--is-rtl .me-md-auto {\n    margin-left: auto !important;\n  }\n\n  .v-application .ma-md-n1 {\n    margin: -4px !important;\n  }\n\n  .v-application .ma-md-n2 {\n    margin: -8px !important;\n  }\n\n  .v-application .ma-md-n3 {\n    margin: -12px !important;\n  }\n\n  .v-application .ma-md-n4 {\n    margin: -16px !important;\n  }\n\n  .v-application .ma-md-n5 {\n    margin: -20px !important;\n  }\n\n  .v-application .ma-md-n6 {\n    margin: -24px !important;\n  }\n\n  .v-application .ma-md-n7 {\n    margin: -28px !important;\n  }\n\n  .v-application .ma-md-n8 {\n    margin: -32px !important;\n  }\n\n  .v-application .ma-md-n9 {\n    margin: -36px !important;\n  }\n\n  .v-application .ma-md-n10 {\n    margin: -40px !important;\n  }\n\n  .v-application .ma-md-n11 {\n    margin: -44px !important;\n  }\n\n  .v-application .ma-md-n12 {\n    margin: -48px !important;\n  }\n\n  .v-application .ma-md-n13 {\n    margin: -52px !important;\n  }\n\n  .v-application .ma-md-n14 {\n    margin: -56px !important;\n  }\n\n  .v-application .ma-md-n15 {\n    margin: -60px !important;\n  }\n\n  .v-application .ma-md-n16 {\n    margin: -64px !important;\n  }\n\n  .v-application .mx-md-n1 {\n    margin-right: -4px !important;\n    margin-left: -4px !important;\n  }\n\n  .v-application .mx-md-n2 {\n    margin-right: -8px !important;\n    margin-left: -8px !important;\n  }\n\n  .v-application .mx-md-n3 {\n    margin-right: -12px !important;\n    margin-left: -12px !important;\n  }\n\n  .v-application .mx-md-n4 {\n    margin-right: -16px !important;\n    margin-left: -16px !important;\n  }\n\n  .v-application .mx-md-n5 {\n    margin-right: -20px !important;\n    margin-left: -20px !important;\n  }\n\n  .v-application .mx-md-n6 {\n    margin-right: -24px !important;\n    margin-left: -24px !important;\n  }\n\n  .v-application .mx-md-n7 {\n    margin-right: -28px !important;\n    margin-left: -28px !important;\n  }\n\n  .v-application .mx-md-n8 {\n    margin-right: -32px !important;\n    margin-left: -32px !important;\n  }\n\n  .v-application .mx-md-n9 {\n    margin-right: -36px !important;\n    margin-left: -36px !important;\n  }\n\n  .v-application .mx-md-n10 {\n    margin-right: -40px !important;\n    margin-left: -40px !important;\n  }\n\n  .v-application .mx-md-n11 {\n    margin-right: -44px !important;\n    margin-left: -44px !important;\n  }\n\n  .v-application .mx-md-n12 {\n    margin-right: -48px !important;\n    margin-left: -48px !important;\n  }\n\n  .v-application .mx-md-n13 {\n    margin-right: -52px !important;\n    margin-left: -52px !important;\n  }\n\n  .v-application .mx-md-n14 {\n    margin-right: -56px !important;\n    margin-left: -56px !important;\n  }\n\n  .v-application .mx-md-n15 {\n    margin-right: -60px !important;\n    margin-left: -60px !important;\n  }\n\n  .v-application .mx-md-n16 {\n    margin-right: -64px !important;\n    margin-left: -64px !important;\n  }\n\n  .v-application .my-md-n1 {\n    margin-top: -4px !important;\n    margin-bottom: -4px !important;\n  }\n\n  .v-application .my-md-n2 {\n    margin-top: -8px !important;\n    margin-bottom: -8px !important;\n  }\n\n  .v-application .my-md-n3 {\n    margin-top: -12px !important;\n    margin-bottom: -12px !important;\n  }\n\n  .v-application .my-md-n4 {\n    margin-top: -16px !important;\n    margin-bottom: -16px !important;\n  }\n\n  .v-application .my-md-n5 {\n    margin-top: -20px !important;\n    margin-bottom: -20px !important;\n  }\n\n  .v-application .my-md-n6 {\n    margin-top: -24px !important;\n    margin-bottom: -24px !important;\n  }\n\n  .v-application .my-md-n7 {\n    margin-top: -28px !important;\n    margin-bottom: -28px !important;\n  }\n\n  .v-application .my-md-n8 {\n    margin-top: -32px !important;\n    margin-bottom: -32px !important;\n  }\n\n  .v-application .my-md-n9 {\n    margin-top: -36px !important;\n    margin-bottom: -36px !important;\n  }\n\n  .v-application .my-md-n10 {\n    margin-top: -40px !important;\n    margin-bottom: -40px !important;\n  }\n\n  .v-application .my-md-n11 {\n    margin-top: -44px !important;\n    margin-bottom: -44px !important;\n  }\n\n  .v-application .my-md-n12 {\n    margin-top: -48px !important;\n    margin-bottom: -48px !important;\n  }\n\n  .v-application .my-md-n13 {\n    margin-top: -52px !important;\n    margin-bottom: -52px !important;\n  }\n\n  .v-application .my-md-n14 {\n    margin-top: -56px !important;\n    margin-bottom: -56px !important;\n  }\n\n  .v-application .my-md-n15 {\n    margin-top: -60px !important;\n    margin-bottom: -60px !important;\n  }\n\n  .v-application .my-md-n16 {\n    margin-top: -64px !important;\n    margin-bottom: -64px !important;\n  }\n\n  .v-application .mt-md-n1 {\n    margin-top: -4px !important;\n  }\n\n  .v-application .mt-md-n2 {\n    margin-top: -8px !important;\n  }\n\n  .v-application .mt-md-n3 {\n    margin-top: -12px !important;\n  }\n\n  .v-application .mt-md-n4 {\n    margin-top: -16px !important;\n  }\n\n  .v-application .mt-md-n5 {\n    margin-top: -20px !important;\n  }\n\n  .v-application .mt-md-n6 {\n    margin-top: -24px !important;\n  }\n\n  .v-application .mt-md-n7 {\n    margin-top: -28px !important;\n  }\n\n  .v-application .mt-md-n8 {\n    margin-top: -32px !important;\n  }\n\n  .v-application .mt-md-n9 {\n    margin-top: -36px !important;\n  }\n\n  .v-application .mt-md-n10 {\n    margin-top: -40px !important;\n  }\n\n  .v-application .mt-md-n11 {\n    margin-top: -44px !important;\n  }\n\n  .v-application .mt-md-n12 {\n    margin-top: -48px !important;\n  }\n\n  .v-application .mt-md-n13 {\n    margin-top: -52px !important;\n  }\n\n  .v-application .mt-md-n14 {\n    margin-top: -56px !important;\n  }\n\n  .v-application .mt-md-n15 {\n    margin-top: -60px !important;\n  }\n\n  .v-application .mt-md-n16 {\n    margin-top: -64px !important;\n  }\n\n  .v-application .mr-md-n1 {\n    margin-right: -4px !important;\n  }\n\n  .v-application .mr-md-n2 {\n    margin-right: -8px !important;\n  }\n\n  .v-application .mr-md-n3 {\n    margin-right: -12px !important;\n  }\n\n  .v-application .mr-md-n4 {\n    margin-right: -16px !important;\n  }\n\n  .v-application .mr-md-n5 {\n    margin-right: -20px !important;\n  }\n\n  .v-application .mr-md-n6 {\n    margin-right: -24px !important;\n  }\n\n  .v-application .mr-md-n7 {\n    margin-right: -28px !important;\n  }\n\n  .v-application .mr-md-n8 {\n    margin-right: -32px !important;\n  }\n\n  .v-application .mr-md-n9 {\n    margin-right: -36px !important;\n  }\n\n  .v-application .mr-md-n10 {\n    margin-right: -40px !important;\n  }\n\n  .v-application .mr-md-n11 {\n    margin-right: -44px !important;\n  }\n\n  .v-application .mr-md-n12 {\n    margin-right: -48px !important;\n  }\n\n  .v-application .mr-md-n13 {\n    margin-right: -52px !important;\n  }\n\n  .v-application .mr-md-n14 {\n    margin-right: -56px !important;\n  }\n\n  .v-application .mr-md-n15 {\n    margin-right: -60px !important;\n  }\n\n  .v-application .mr-md-n16 {\n    margin-right: -64px !important;\n  }\n\n  .v-application .mb-md-n1 {\n    margin-bottom: -4px !important;\n  }\n\n  .v-application .mb-md-n2 {\n    margin-bottom: -8px !important;\n  }\n\n  .v-application .mb-md-n3 {\n    margin-bottom: -12px !important;\n  }\n\n  .v-application .mb-md-n4 {\n    margin-bottom: -16px !important;\n  }\n\n  .v-application .mb-md-n5 {\n    margin-bottom: -20px !important;\n  }\n\n  .v-application .mb-md-n6 {\n    margin-bottom: -24px !important;\n  }\n\n  .v-application .mb-md-n7 {\n    margin-bottom: -28px !important;\n  }\n\n  .v-application .mb-md-n8 {\n    margin-bottom: -32px !important;\n  }\n\n  .v-application .mb-md-n9 {\n    margin-bottom: -36px !important;\n  }\n\n  .v-application .mb-md-n10 {\n    margin-bottom: -40px !important;\n  }\n\n  .v-application .mb-md-n11 {\n    margin-bottom: -44px !important;\n  }\n\n  .v-application .mb-md-n12 {\n    margin-bottom: -48px !important;\n  }\n\n  .v-application .mb-md-n13 {\n    margin-bottom: -52px !important;\n  }\n\n  .v-application .mb-md-n14 {\n    margin-bottom: -56px !important;\n  }\n\n  .v-application .mb-md-n15 {\n    margin-bottom: -60px !important;\n  }\n\n  .v-application .mb-md-n16 {\n    margin-bottom: -64px !important;\n  }\n\n  .v-application .ml-md-n1 {\n    margin-left: -4px !important;\n  }\n\n  .v-application .ml-md-n2 {\n    margin-left: -8px !important;\n  }\n\n  .v-application .ml-md-n3 {\n    margin-left: -12px !important;\n  }\n\n  .v-application .ml-md-n4 {\n    margin-left: -16px !important;\n  }\n\n  .v-application .ml-md-n5 {\n    margin-left: -20px !important;\n  }\n\n  .v-application .ml-md-n6 {\n    margin-left: -24px !important;\n  }\n\n  .v-application .ml-md-n7 {\n    margin-left: -28px !important;\n  }\n\n  .v-application .ml-md-n8 {\n    margin-left: -32px !important;\n  }\n\n  .v-application .ml-md-n9 {\n    margin-left: -36px !important;\n  }\n\n  .v-application .ml-md-n10 {\n    margin-left: -40px !important;\n  }\n\n  .v-application .ml-md-n11 {\n    margin-left: -44px !important;\n  }\n\n  .v-application .ml-md-n12 {\n    margin-left: -48px !important;\n  }\n\n  .v-application .ml-md-n13 {\n    margin-left: -52px !important;\n  }\n\n  .v-application .ml-md-n14 {\n    margin-left: -56px !important;\n  }\n\n  .v-application .ml-md-n15 {\n    margin-left: -60px !important;\n  }\n\n  .v-application .ml-md-n16 {\n    margin-left: -64px !important;\n  }\n\n  .v-application--is-ltr .ms-md-n1 {\n    margin-left: -4px !important;\n  }\n\n  .v-application--is-rtl .ms-md-n1 {\n    margin-right: -4px !important;\n  }\n\n  .v-application--is-ltr .ms-md-n2 {\n    margin-left: -8px !important;\n  }\n\n  .v-application--is-rtl .ms-md-n2 {\n    margin-right: -8px !important;\n  }\n\n  .v-application--is-ltr .ms-md-n3 {\n    margin-left: -12px !important;\n  }\n\n  .v-application--is-rtl .ms-md-n3 {\n    margin-right: -12px !important;\n  }\n\n  .v-application--is-ltr .ms-md-n4 {\n    margin-left: -16px !important;\n  }\n\n  .v-application--is-rtl .ms-md-n4 {\n    margin-right: -16px !important;\n  }\n\n  .v-application--is-ltr .ms-md-n5 {\n    margin-left: -20px !important;\n  }\n\n  .v-application--is-rtl .ms-md-n5 {\n    margin-right: -20px !important;\n  }\n\n  .v-application--is-ltr .ms-md-n6 {\n    margin-left: -24px !important;\n  }\n\n  .v-application--is-rtl .ms-md-n6 {\n    margin-right: -24px !important;\n  }\n\n  .v-application--is-ltr .ms-md-n7 {\n    margin-left: -28px !important;\n  }\n\n  .v-application--is-rtl .ms-md-n7 {\n    margin-right: -28px !important;\n  }\n\n  .v-application--is-ltr .ms-md-n8 {\n    margin-left: -32px !important;\n  }\n\n  .v-application--is-rtl .ms-md-n8 {\n    margin-right: -32px !important;\n  }\n\n  .v-application--is-ltr .ms-md-n9 {\n    margin-left: -36px !important;\n  }\n\n  .v-application--is-rtl .ms-md-n9 {\n    margin-right: -36px !important;\n  }\n\n  .v-application--is-ltr .ms-md-n10 {\n    margin-left: -40px !important;\n  }\n\n  .v-application--is-rtl .ms-md-n10 {\n    margin-right: -40px !important;\n  }\n\n  .v-application--is-ltr .ms-md-n11 {\n    margin-left: -44px !important;\n  }\n\n  .v-application--is-rtl .ms-md-n11 {\n    margin-right: -44px !important;\n  }\n\n  .v-application--is-ltr .ms-md-n12 {\n    margin-left: -48px !important;\n  }\n\n  .v-application--is-rtl .ms-md-n12 {\n    margin-right: -48px !important;\n  }\n\n  .v-application--is-ltr .ms-md-n13 {\n    margin-left: -52px !important;\n  }\n\n  .v-application--is-rtl .ms-md-n13 {\n    margin-right: -52px !important;\n  }\n\n  .v-application--is-ltr .ms-md-n14 {\n    margin-left: -56px !important;\n  }\n\n  .v-application--is-rtl .ms-md-n14 {\n    margin-right: -56px !important;\n  }\n\n  .v-application--is-ltr .ms-md-n15 {\n    margin-left: -60px !important;\n  }\n\n  .v-application--is-rtl .ms-md-n15 {\n    margin-right: -60px !important;\n  }\n\n  .v-application--is-ltr .ms-md-n16 {\n    margin-left: -64px !important;\n  }\n\n  .v-application--is-rtl .ms-md-n16 {\n    margin-right: -64px !important;\n  }\n\n  .v-application--is-ltr .me-md-n1 {\n    margin-right: -4px !important;\n  }\n\n  .v-application--is-rtl .me-md-n1 {\n    margin-left: -4px !important;\n  }\n\n  .v-application--is-ltr .me-md-n2 {\n    margin-right: -8px !important;\n  }\n\n  .v-application--is-rtl .me-md-n2 {\n    margin-left: -8px !important;\n  }\n\n  .v-application--is-ltr .me-md-n3 {\n    margin-right: -12px !important;\n  }\n\n  .v-application--is-rtl .me-md-n3 {\n    margin-left: -12px !important;\n  }\n\n  .v-application--is-ltr .me-md-n4 {\n    margin-right: -16px !important;\n  }\n\n  .v-application--is-rtl .me-md-n4 {\n    margin-left: -16px !important;\n  }\n\n  .v-application--is-ltr .me-md-n5 {\n    margin-right: -20px !important;\n  }\n\n  .v-application--is-rtl .me-md-n5 {\n    margin-left: -20px !important;\n  }\n\n  .v-application--is-ltr .me-md-n6 {\n    margin-right: -24px !important;\n  }\n\n  .v-application--is-rtl .me-md-n6 {\n    margin-left: -24px !important;\n  }\n\n  .v-application--is-ltr .me-md-n7 {\n    margin-right: -28px !important;\n  }\n\n  .v-application--is-rtl .me-md-n7 {\n    margin-left: -28px !important;\n  }\n\n  .v-application--is-ltr .me-md-n8 {\n    margin-right: -32px !important;\n  }\n\n  .v-application--is-rtl .me-md-n8 {\n    margin-left: -32px !important;\n  }\n\n  .v-application--is-ltr .me-md-n9 {\n    margin-right: -36px !important;\n  }\n\n  .v-application--is-rtl .me-md-n9 {\n    margin-left: -36px !important;\n  }\n\n  .v-application--is-ltr .me-md-n10 {\n    margin-right: -40px !important;\n  }\n\n  .v-application--is-rtl .me-md-n10 {\n    margin-left: -40px !important;\n  }\n\n  .v-application--is-ltr .me-md-n11 {\n    margin-right: -44px !important;\n  }\n\n  .v-application--is-rtl .me-md-n11 {\n    margin-left: -44px !important;\n  }\n\n  .v-application--is-ltr .me-md-n12 {\n    margin-right: -48px !important;\n  }\n\n  .v-application--is-rtl .me-md-n12 {\n    margin-left: -48px !important;\n  }\n\n  .v-application--is-ltr .me-md-n13 {\n    margin-right: -52px !important;\n  }\n\n  .v-application--is-rtl .me-md-n13 {\n    margin-left: -52px !important;\n  }\n\n  .v-application--is-ltr .me-md-n14 {\n    margin-right: -56px !important;\n  }\n\n  .v-application--is-rtl .me-md-n14 {\n    margin-left: -56px !important;\n  }\n\n  .v-application--is-ltr .me-md-n15 {\n    margin-right: -60px !important;\n  }\n\n  .v-application--is-rtl .me-md-n15 {\n    margin-left: -60px !important;\n  }\n\n  .v-application--is-ltr .me-md-n16 {\n    margin-right: -64px !important;\n  }\n\n  .v-application--is-rtl .me-md-n16 {\n    margin-left: -64px !important;\n  }\n\n  .v-application .pa-md-0 {\n    padding: 0px !important;\n  }\n\n  .v-application .pa-md-1 {\n    padding: 4px !important;\n  }\n\n  .v-application .pa-md-2 {\n    padding: 8px !important;\n  }\n\n  .v-application .pa-md-3 {\n    padding: 12px !important;\n  }\n\n  .v-application .pa-md-4 {\n    padding: 16px !important;\n  }\n\n  .v-application .pa-md-5 {\n    padding: 20px !important;\n  }\n\n  .v-application .pa-md-6 {\n    padding: 24px !important;\n  }\n\n  .v-application .pa-md-7 {\n    padding: 28px !important;\n  }\n\n  .v-application .pa-md-8 {\n    padding: 32px !important;\n  }\n\n  .v-application .pa-md-9 {\n    padding: 36px !important;\n  }\n\n  .v-application .pa-md-10 {\n    padding: 40px !important;\n  }\n\n  .v-application .pa-md-11 {\n    padding: 44px !important;\n  }\n\n  .v-application .pa-md-12 {\n    padding: 48px !important;\n  }\n\n  .v-application .pa-md-13 {\n    padding: 52px !important;\n  }\n\n  .v-application .pa-md-14 {\n    padding: 56px !important;\n  }\n\n  .v-application .pa-md-15 {\n    padding: 60px !important;\n  }\n\n  .v-application .pa-md-16 {\n    padding: 64px !important;\n  }\n\n  .v-application .px-md-0 {\n    padding-right: 0px !important;\n    padding-left: 0px !important;\n  }\n\n  .v-application .px-md-1 {\n    padding-right: 4px !important;\n    padding-left: 4px !important;\n  }\n\n  .v-application .px-md-2 {\n    padding-right: 8px !important;\n    padding-left: 8px !important;\n  }\n\n  .v-application .px-md-3 {\n    padding-right: 12px !important;\n    padding-left: 12px !important;\n  }\n\n  .v-application .px-md-4 {\n    padding-right: 16px !important;\n    padding-left: 16px !important;\n  }\n\n  .v-application .px-md-5 {\n    padding-right: 20px !important;\n    padding-left: 20px !important;\n  }\n\n  .v-application .px-md-6 {\n    padding-right: 24px !important;\n    padding-left: 24px !important;\n  }\n\n  .v-application .px-md-7 {\n    padding-right: 28px !important;\n    padding-left: 28px !important;\n  }\n\n  .v-application .px-md-8 {\n    padding-right: 32px !important;\n    padding-left: 32px !important;\n  }\n\n  .v-application .px-md-9 {\n    padding-right: 36px !important;\n    padding-left: 36px !important;\n  }\n\n  .v-application .px-md-10 {\n    padding-right: 40px !important;\n    padding-left: 40px !important;\n  }\n\n  .v-application .px-md-11 {\n    padding-right: 44px !important;\n    padding-left: 44px !important;\n  }\n\n  .v-application .px-md-12 {\n    padding-right: 48px !important;\n    padding-left: 48px !important;\n  }\n\n  .v-application .px-md-13 {\n    padding-right: 52px !important;\n    padding-left: 52px !important;\n  }\n\n  .v-application .px-md-14 {\n    padding-right: 56px !important;\n    padding-left: 56px !important;\n  }\n\n  .v-application .px-md-15 {\n    padding-right: 60px !important;\n    padding-left: 60px !important;\n  }\n\n  .v-application .px-md-16 {\n    padding-right: 64px !important;\n    padding-left: 64px !important;\n  }\n\n  .v-application .py-md-0 {\n    padding-top: 0px !important;\n    padding-bottom: 0px !important;\n  }\n\n  .v-application .py-md-1 {\n    padding-top: 4px !important;\n    padding-bottom: 4px !important;\n  }\n\n  .v-application .py-md-2 {\n    padding-top: 8px !important;\n    padding-bottom: 8px !important;\n  }\n\n  .v-application .py-md-3 {\n    padding-top: 12px !important;\n    padding-bottom: 12px !important;\n  }\n\n  .v-application .py-md-4 {\n    padding-top: 16px !important;\n    padding-bottom: 16px !important;\n  }\n\n  .v-application .py-md-5 {\n    padding-top: 20px !important;\n    padding-bottom: 20px !important;\n  }\n\n  .v-application .py-md-6 {\n    padding-top: 24px !important;\n    padding-bottom: 24px !important;\n  }\n\n  .v-application .py-md-7 {\n    padding-top: 28px !important;\n    padding-bottom: 28px !important;\n  }\n\n  .v-application .py-md-8 {\n    padding-top: 32px !important;\n    padding-bottom: 32px !important;\n  }\n\n  .v-application .py-md-9 {\n    padding-top: 36px !important;\n    padding-bottom: 36px !important;\n  }\n\n  .v-application .py-md-10 {\n    padding-top: 40px !important;\n    padding-bottom: 40px !important;\n  }\n\n  .v-application .py-md-11 {\n    padding-top: 44px !important;\n    padding-bottom: 44px !important;\n  }\n\n  .v-application .py-md-12 {\n    padding-top: 48px !important;\n    padding-bottom: 48px !important;\n  }\n\n  .v-application .py-md-13 {\n    padding-top: 52px !important;\n    padding-bottom: 52px !important;\n  }\n\n  .v-application .py-md-14 {\n    padding-top: 56px !important;\n    padding-bottom: 56px !important;\n  }\n\n  .v-application .py-md-15 {\n    padding-top: 60px !important;\n    padding-bottom: 60px !important;\n  }\n\n  .v-application .py-md-16 {\n    padding-top: 64px !important;\n    padding-bottom: 64px !important;\n  }\n\n  .v-application .pt-md-0 {\n    padding-top: 0px !important;\n  }\n\n  .v-application .pt-md-1 {\n    padding-top: 4px !important;\n  }\n\n  .v-application .pt-md-2 {\n    padding-top: 8px !important;\n  }\n\n  .v-application .pt-md-3 {\n    padding-top: 12px !important;\n  }\n\n  .v-application .pt-md-4 {\n    padding-top: 16px !important;\n  }\n\n  .v-application .pt-md-5 {\n    padding-top: 20px !important;\n  }\n\n  .v-application .pt-md-6 {\n    padding-top: 24px !important;\n  }\n\n  .v-application .pt-md-7 {\n    padding-top: 28px !important;\n  }\n\n  .v-application .pt-md-8 {\n    padding-top: 32px !important;\n  }\n\n  .v-application .pt-md-9 {\n    padding-top: 36px !important;\n  }\n\n  .v-application .pt-md-10 {\n    padding-top: 40px !important;\n  }\n\n  .v-application .pt-md-11 {\n    padding-top: 44px !important;\n  }\n\n  .v-application .pt-md-12 {\n    padding-top: 48px !important;\n  }\n\n  .v-application .pt-md-13 {\n    padding-top: 52px !important;\n  }\n\n  .v-application .pt-md-14 {\n    padding-top: 56px !important;\n  }\n\n  .v-application .pt-md-15 {\n    padding-top: 60px !important;\n  }\n\n  .v-application .pt-md-16 {\n    padding-top: 64px !important;\n  }\n\n  .v-application .pr-md-0 {\n    padding-right: 0px !important;\n  }\n\n  .v-application .pr-md-1 {\n    padding-right: 4px !important;\n  }\n\n  .v-application .pr-md-2 {\n    padding-right: 8px !important;\n  }\n\n  .v-application .pr-md-3 {\n    padding-right: 12px !important;\n  }\n\n  .v-application .pr-md-4 {\n    padding-right: 16px !important;\n  }\n\n  .v-application .pr-md-5 {\n    padding-right: 20px !important;\n  }\n\n  .v-application .pr-md-6 {\n    padding-right: 24px !important;\n  }\n\n  .v-application .pr-md-7 {\n    padding-right: 28px !important;\n  }\n\n  .v-application .pr-md-8 {\n    padding-right: 32px !important;\n  }\n\n  .v-application .pr-md-9 {\n    padding-right: 36px !important;\n  }\n\n  .v-application .pr-md-10 {\n    padding-right: 40px !important;\n  }\n\n  .v-application .pr-md-11 {\n    padding-right: 44px !important;\n  }\n\n  .v-application .pr-md-12 {\n    padding-right: 48px !important;\n  }\n\n  .v-application .pr-md-13 {\n    padding-right: 52px !important;\n  }\n\n  .v-application .pr-md-14 {\n    padding-right: 56px !important;\n  }\n\n  .v-application .pr-md-15 {\n    padding-right: 60px !important;\n  }\n\n  .v-application .pr-md-16 {\n    padding-right: 64px !important;\n  }\n\n  .v-application .pb-md-0 {\n    padding-bottom: 0px !important;\n  }\n\n  .v-application .pb-md-1 {\n    padding-bottom: 4px !important;\n  }\n\n  .v-application .pb-md-2 {\n    padding-bottom: 8px !important;\n  }\n\n  .v-application .pb-md-3 {\n    padding-bottom: 12px !important;\n  }\n\n  .v-application .pb-md-4 {\n    padding-bottom: 16px !important;\n  }\n\n  .v-application .pb-md-5 {\n    padding-bottom: 20px !important;\n  }\n\n  .v-application .pb-md-6 {\n    padding-bottom: 24px !important;\n  }\n\n  .v-application .pb-md-7 {\n    padding-bottom: 28px !important;\n  }\n\n  .v-application .pb-md-8 {\n    padding-bottom: 32px !important;\n  }\n\n  .v-application .pb-md-9 {\n    padding-bottom: 36px !important;\n  }\n\n  .v-application .pb-md-10 {\n    padding-bottom: 40px !important;\n  }\n\n  .v-application .pb-md-11 {\n    padding-bottom: 44px !important;\n  }\n\n  .v-application .pb-md-12 {\n    padding-bottom: 48px !important;\n  }\n\n  .v-application .pb-md-13 {\n    padding-bottom: 52px !important;\n  }\n\n  .v-application .pb-md-14 {\n    padding-bottom: 56px !important;\n  }\n\n  .v-application .pb-md-15 {\n    padding-bottom: 60px !important;\n  }\n\n  .v-application .pb-md-16 {\n    padding-bottom: 64px !important;\n  }\n\n  .v-application .pl-md-0 {\n    padding-left: 0px !important;\n  }\n\n  .v-application .pl-md-1 {\n    padding-left: 4px !important;\n  }\n\n  .v-application .pl-md-2 {\n    padding-left: 8px !important;\n  }\n\n  .v-application .pl-md-3 {\n    padding-left: 12px !important;\n  }\n\n  .v-application .pl-md-4 {\n    padding-left: 16px !important;\n  }\n\n  .v-application .pl-md-5 {\n    padding-left: 20px !important;\n  }\n\n  .v-application .pl-md-6 {\n    padding-left: 24px !important;\n  }\n\n  .v-application .pl-md-7 {\n    padding-left: 28px !important;\n  }\n\n  .v-application .pl-md-8 {\n    padding-left: 32px !important;\n  }\n\n  .v-application .pl-md-9 {\n    padding-left: 36px !important;\n  }\n\n  .v-application .pl-md-10 {\n    padding-left: 40px !important;\n  }\n\n  .v-application .pl-md-11 {\n    padding-left: 44px !important;\n  }\n\n  .v-application .pl-md-12 {\n    padding-left: 48px !important;\n  }\n\n  .v-application .pl-md-13 {\n    padding-left: 52px !important;\n  }\n\n  .v-application .pl-md-14 {\n    padding-left: 56px !important;\n  }\n\n  .v-application .pl-md-15 {\n    padding-left: 60px !important;\n  }\n\n  .v-application .pl-md-16 {\n    padding-left: 64px !important;\n  }\n\n  .v-application--is-ltr .ps-md-0 {\n    padding-left: 0px !important;\n  }\n\n  .v-application--is-rtl .ps-md-0 {\n    padding-right: 0px !important;\n  }\n\n  .v-application--is-ltr .ps-md-1 {\n    padding-left: 4px !important;\n  }\n\n  .v-application--is-rtl .ps-md-1 {\n    padding-right: 4px !important;\n  }\n\n  .v-application--is-ltr .ps-md-2 {\n    padding-left: 8px !important;\n  }\n\n  .v-application--is-rtl .ps-md-2 {\n    padding-right: 8px !important;\n  }\n\n  .v-application--is-ltr .ps-md-3 {\n    padding-left: 12px !important;\n  }\n\n  .v-application--is-rtl .ps-md-3 {\n    padding-right: 12px !important;\n  }\n\n  .v-application--is-ltr .ps-md-4 {\n    padding-left: 16px !important;\n  }\n\n  .v-application--is-rtl .ps-md-4 {\n    padding-right: 16px !important;\n  }\n\n  .v-application--is-ltr .ps-md-5 {\n    padding-left: 20px !important;\n  }\n\n  .v-application--is-rtl .ps-md-5 {\n    padding-right: 20px !important;\n  }\n\n  .v-application--is-ltr .ps-md-6 {\n    padding-left: 24px !important;\n  }\n\n  .v-application--is-rtl .ps-md-6 {\n    padding-right: 24px !important;\n  }\n\n  .v-application--is-ltr .ps-md-7 {\n    padding-left: 28px !important;\n  }\n\n  .v-application--is-rtl .ps-md-7 {\n    padding-right: 28px !important;\n  }\n\n  .v-application--is-ltr .ps-md-8 {\n    padding-left: 32px !important;\n  }\n\n  .v-application--is-rtl .ps-md-8 {\n    padding-right: 32px !important;\n  }\n\n  .v-application--is-ltr .ps-md-9 {\n    padding-left: 36px !important;\n  }\n\n  .v-application--is-rtl .ps-md-9 {\n    padding-right: 36px !important;\n  }\n\n  .v-application--is-ltr .ps-md-10 {\n    padding-left: 40px !important;\n  }\n\n  .v-application--is-rtl .ps-md-10 {\n    padding-right: 40px !important;\n  }\n\n  .v-application--is-ltr .ps-md-11 {\n    padding-left: 44px !important;\n  }\n\n  .v-application--is-rtl .ps-md-11 {\n    padding-right: 44px !important;\n  }\n\n  .v-application--is-ltr .ps-md-12 {\n    padding-left: 48px !important;\n  }\n\n  .v-application--is-rtl .ps-md-12 {\n    padding-right: 48px !important;\n  }\n\n  .v-application--is-ltr .ps-md-13 {\n    padding-left: 52px !important;\n  }\n\n  .v-application--is-rtl .ps-md-13 {\n    padding-right: 52px !important;\n  }\n\n  .v-application--is-ltr .ps-md-14 {\n    padding-left: 56px !important;\n  }\n\n  .v-application--is-rtl .ps-md-14 {\n    padding-right: 56px !important;\n  }\n\n  .v-application--is-ltr .ps-md-15 {\n    padding-left: 60px !important;\n  }\n\n  .v-application--is-rtl .ps-md-15 {\n    padding-right: 60px !important;\n  }\n\n  .v-application--is-ltr .ps-md-16 {\n    padding-left: 64px !important;\n  }\n\n  .v-application--is-rtl .ps-md-16 {\n    padding-right: 64px !important;\n  }\n\n  .v-application--is-ltr .pe-md-0 {\n    padding-right: 0px !important;\n  }\n\n  .v-application--is-rtl .pe-md-0 {\n    padding-left: 0px !important;\n  }\n\n  .v-application--is-ltr .pe-md-1 {\n    padding-right: 4px !important;\n  }\n\n  .v-application--is-rtl .pe-md-1 {\n    padding-left: 4px !important;\n  }\n\n  .v-application--is-ltr .pe-md-2 {\n    padding-right: 8px !important;\n  }\n\n  .v-application--is-rtl .pe-md-2 {\n    padding-left: 8px !important;\n  }\n\n  .v-application--is-ltr .pe-md-3 {\n    padding-right: 12px !important;\n  }\n\n  .v-application--is-rtl .pe-md-3 {\n    padding-left: 12px !important;\n  }\n\n  .v-application--is-ltr .pe-md-4 {\n    padding-right: 16px !important;\n  }\n\n  .v-application--is-rtl .pe-md-4 {\n    padding-left: 16px !important;\n  }\n\n  .v-application--is-ltr .pe-md-5 {\n    padding-right: 20px !important;\n  }\n\n  .v-application--is-rtl .pe-md-5 {\n    padding-left: 20px !important;\n  }\n\n  .v-application--is-ltr .pe-md-6 {\n    padding-right: 24px !important;\n  }\n\n  .v-application--is-rtl .pe-md-6 {\n    padding-left: 24px !important;\n  }\n\n  .v-application--is-ltr .pe-md-7 {\n    padding-right: 28px !important;\n  }\n\n  .v-application--is-rtl .pe-md-7 {\n    padding-left: 28px !important;\n  }\n\n  .v-application--is-ltr .pe-md-8 {\n    padding-right: 32px !important;\n  }\n\n  .v-application--is-rtl .pe-md-8 {\n    padding-left: 32px !important;\n  }\n\n  .v-application--is-ltr .pe-md-9 {\n    padding-right: 36px !important;\n  }\n\n  .v-application--is-rtl .pe-md-9 {\n    padding-left: 36px !important;\n  }\n\n  .v-application--is-ltr .pe-md-10 {\n    padding-right: 40px !important;\n  }\n\n  .v-application--is-rtl .pe-md-10 {\n    padding-left: 40px !important;\n  }\n\n  .v-application--is-ltr .pe-md-11 {\n    padding-right: 44px !important;\n  }\n\n  .v-application--is-rtl .pe-md-11 {\n    padding-left: 44px !important;\n  }\n\n  .v-application--is-ltr .pe-md-12 {\n    padding-right: 48px !important;\n  }\n\n  .v-application--is-rtl .pe-md-12 {\n    padding-left: 48px !important;\n  }\n\n  .v-application--is-ltr .pe-md-13 {\n    padding-right: 52px !important;\n  }\n\n  .v-application--is-rtl .pe-md-13 {\n    padding-left: 52px !important;\n  }\n\n  .v-application--is-ltr .pe-md-14 {\n    padding-right: 56px !important;\n  }\n\n  .v-application--is-rtl .pe-md-14 {\n    padding-left: 56px !important;\n  }\n\n  .v-application--is-ltr .pe-md-15 {\n    padding-right: 60px !important;\n  }\n\n  .v-application--is-rtl .pe-md-15 {\n    padding-left: 60px !important;\n  }\n\n  .v-application--is-ltr .pe-md-16 {\n    padding-right: 64px !important;\n  }\n\n  .v-application--is-rtl .pe-md-16 {\n    padding-left: 64px !important;\n  }\n\n  .v-application .text-md-left {\n    text-align: left !important;\n  }\n\n  .v-application .text-md-right {\n    text-align: right !important;\n  }\n\n  .v-application .text-md-center {\n    text-align: center !important;\n  }\n\n  .v-application .text-md-justify {\n    text-align: justify !important;\n  }\n\n  .v-application .text-md-start {\n    text-align: start !important;\n  }\n\n  .v-application .text-md-end {\n    text-align: end !important;\n  }\n\n  .v-application .text-md-h1 {\n    font-size: 6rem !important;\n    font-weight: 300;\n    line-height: 6rem;\n    letter-spacing: -0.015625em !important;\n    font-family: \"Roboto\", sans-serif !important;\n  }\n\n  .v-application .text-md-h2 {\n    font-size: 3.75rem !important;\n    font-weight: 300;\n    line-height: 3.75rem;\n    letter-spacing: -0.0083333333em !important;\n    font-family: \"Roboto\", sans-serif !important;\n  }\n\n  .v-application .text-md-h3 {\n    font-size: 3rem !important;\n    font-weight: 400;\n    line-height: 3.125rem;\n    letter-spacing: normal !important;\n    font-family: \"Roboto\", sans-serif !important;\n  }\n\n  .v-application .text-md-h4 {\n    font-size: 2.125rem !important;\n    font-weight: 400;\n    line-height: 2.5rem;\n    letter-spacing: 0.0073529412em !important;\n    font-family: \"Roboto\", sans-serif !important;\n  }\n\n  .v-application .text-md-h5 {\n    font-size: 1.5rem !important;\n    font-weight: 400;\n    line-height: 2rem;\n    letter-spacing: normal !important;\n    font-family: \"Roboto\", sans-serif !important;\n  }\n\n  .v-application .text-md-h6 {\n    font-size: 1.25rem !important;\n    font-weight: 500;\n    line-height: 2rem;\n    letter-spacing: 0.0125em !important;\n    font-family: \"Roboto\", sans-serif !important;\n  }\n\n  .v-application .text-md-subtitle-1 {\n    font-size: 1rem !important;\n    font-weight: normal;\n    line-height: 1.75rem;\n    letter-spacing: 0.009375em !important;\n    font-family: \"Roboto\", sans-serif !important;\n  }\n\n  .v-application .text-md-subtitle-2 {\n    font-size: 0.875rem !important;\n    font-weight: 500;\n    line-height: 1.375rem;\n    letter-spacing: 0.0071428571em !important;\n    font-family: \"Roboto\", sans-serif !important;\n  }\n\n  .v-application .text-md-body-1 {\n    font-size: 1rem !important;\n    font-weight: 400;\n    line-height: 1.5rem;\n    letter-spacing: 0.03125em !important;\n    font-family: \"Roboto\", sans-serif !important;\n  }\n\n  .v-application .text-md-body-2 {\n    font-size: 0.875rem !important;\n    font-weight: 400;\n    line-height: 1.25rem;\n    letter-spacing: 0.0178571429em !important;\n    font-family: \"Roboto\", sans-serif !important;\n  }\n\n  .v-application .text-md-button {\n    font-size: 0.875rem !important;\n    font-weight: 500;\n    line-height: 2.25rem;\n    letter-spacing: 0.0892857143em !important;\n    font-family: \"Roboto\", sans-serif !important;\n    text-transform: uppercase !important;\n  }\n\n  .v-application .text-md-caption {\n    font-size: 0.75rem !important;\n    font-weight: 400;\n    line-height: 1.25rem;\n    letter-spacing: 0.0333333333em !important;\n    font-family: \"Roboto\", sans-serif !important;\n  }\n\n  .v-application .text-md-overline {\n    font-size: 0.75rem !important;\n    font-weight: 500;\n    line-height: 2rem;\n    letter-spacing: 0.1666666667em !important;\n    font-family: \"Roboto\", sans-serif !important;\n    text-transform: uppercase !important;\n  }\n}\n@media (min-width: 1264px) {\n  .v-application .d-lg-none {\n    display: none !important;\n  }\n\n  .v-application .d-lg-inline {\n    display: inline !important;\n  }\n\n  .v-application .d-lg-inline-block {\n    display: inline-block !important;\n  }\n\n  .v-application .d-lg-block {\n    display: block !important;\n  }\n\n  .v-application .d-lg-table {\n    display: table !important;\n  }\n\n  .v-application .d-lg-table-row {\n    display: table-row !important;\n  }\n\n  .v-application .d-lg-table-cell {\n    display: table-cell !important;\n  }\n\n  .v-application .d-lg-flex {\n    display: flex !important;\n  }\n\n  .v-application .d-lg-inline-flex {\n    display: inline-flex !important;\n  }\n\n  .v-application .float-lg-none {\n    float: none !important;\n  }\n\n  .v-application .float-lg-left {\n    float: left !important;\n  }\n\n  .v-application .float-lg-right {\n    float: right !important;\n  }\n\n  .v-application .flex-lg-fill {\n    flex: 1 1 auto !important;\n  }\n\n  .v-application .flex-lg-row {\n    flex-direction: row !important;\n  }\n\n  .v-application .flex-lg-column {\n    flex-direction: column !important;\n  }\n\n  .v-application .flex-lg-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n\n  .v-application .flex-lg-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n\n  .v-application .flex-lg-grow-0 {\n    flex-grow: 0 !important;\n  }\n\n  .v-application .flex-lg-grow-1 {\n    flex-grow: 1 !important;\n  }\n\n  .v-application .flex-lg-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n\n  .v-application .flex-lg-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n\n  .v-application .flex-lg-wrap {\n    flex-wrap: wrap !important;\n  }\n\n  .v-application .flex-lg-nowrap {\n    flex-wrap: nowrap !important;\n  }\n\n  .v-application .flex-lg-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n\n  .v-application .justify-lg-start {\n    justify-content: flex-start !important;\n  }\n\n  .v-application .justify-lg-end {\n    justify-content: flex-end !important;\n  }\n\n  .v-application .justify-lg-center {\n    justify-content: center !important;\n  }\n\n  .v-application .justify-lg-space-between {\n    justify-content: space-between !important;\n  }\n\n  .v-application .justify-lg-space-around {\n    justify-content: space-around !important;\n  }\n\n  .v-application .align-lg-start {\n    align-items: flex-start !important;\n  }\n\n  .v-application .align-lg-end {\n    align-items: flex-end !important;\n  }\n\n  .v-application .align-lg-center {\n    align-items: center !important;\n  }\n\n  .v-application .align-lg-baseline {\n    align-items: baseline !important;\n  }\n\n  .v-application .align-lg-stretch {\n    align-items: stretch !important;\n  }\n\n  .v-application .align-content-lg-start {\n    align-content: flex-start !important;\n  }\n\n  .v-application .align-content-lg-end {\n    align-content: flex-end !important;\n  }\n\n  .v-application .align-content-lg-center {\n    align-content: center !important;\n  }\n\n  .v-application .align-content-lg-space-between {\n    align-content: space-between !important;\n  }\n\n  .v-application .align-content-lg-space-around {\n    align-content: space-around !important;\n  }\n\n  .v-application .align-content-lg-stretch {\n    align-content: stretch !important;\n  }\n\n  .v-application .align-self-lg-auto {\n    align-self: auto !important;\n  }\n\n  .v-application .align-self-lg-start {\n    align-self: flex-start !important;\n  }\n\n  .v-application .align-self-lg-end {\n    align-self: flex-end !important;\n  }\n\n  .v-application .align-self-lg-center {\n    align-self: center !important;\n  }\n\n  .v-application .align-self-lg-baseline {\n    align-self: baseline !important;\n  }\n\n  .v-application .align-self-lg-stretch {\n    align-self: stretch !important;\n  }\n\n  .v-application .order-lg-first {\n    order: -1 !important;\n  }\n\n  .v-application .order-lg-0 {\n    order: 0 !important;\n  }\n\n  .v-application .order-lg-1 {\n    order: 1 !important;\n  }\n\n  .v-application .order-lg-2 {\n    order: 2 !important;\n  }\n\n  .v-application .order-lg-3 {\n    order: 3 !important;\n  }\n\n  .v-application .order-lg-4 {\n    order: 4 !important;\n  }\n\n  .v-application .order-lg-5 {\n    order: 5 !important;\n  }\n\n  .v-application .order-lg-6 {\n    order: 6 !important;\n  }\n\n  .v-application .order-lg-7 {\n    order: 7 !important;\n  }\n\n  .v-application .order-lg-8 {\n    order: 8 !important;\n  }\n\n  .v-application .order-lg-9 {\n    order: 9 !important;\n  }\n\n  .v-application .order-lg-10 {\n    order: 10 !important;\n  }\n\n  .v-application .order-lg-11 {\n    order: 11 !important;\n  }\n\n  .v-application .order-lg-12 {\n    order: 12 !important;\n  }\n\n  .v-application .order-lg-last {\n    order: 13 !important;\n  }\n\n  .v-application .ma-lg-0 {\n    margin: 0px !important;\n  }\n\n  .v-application .ma-lg-1 {\n    margin: 4px !important;\n  }\n\n  .v-application .ma-lg-2 {\n    margin: 8px !important;\n  }\n\n  .v-application .ma-lg-3 {\n    margin: 12px !important;\n  }\n\n  .v-application .ma-lg-4 {\n    margin: 16px !important;\n  }\n\n  .v-application .ma-lg-5 {\n    margin: 20px !important;\n  }\n\n  .v-application .ma-lg-6 {\n    margin: 24px !important;\n  }\n\n  .v-application .ma-lg-7 {\n    margin: 28px !important;\n  }\n\n  .v-application .ma-lg-8 {\n    margin: 32px !important;\n  }\n\n  .v-application .ma-lg-9 {\n    margin: 36px !important;\n  }\n\n  .v-application .ma-lg-10 {\n    margin: 40px !important;\n  }\n\n  .v-application .ma-lg-11 {\n    margin: 44px !important;\n  }\n\n  .v-application .ma-lg-12 {\n    margin: 48px !important;\n  }\n\n  .v-application .ma-lg-13 {\n    margin: 52px !important;\n  }\n\n  .v-application .ma-lg-14 {\n    margin: 56px !important;\n  }\n\n  .v-application .ma-lg-15 {\n    margin: 60px !important;\n  }\n\n  .v-application .ma-lg-16 {\n    margin: 64px !important;\n  }\n\n  .v-application .ma-lg-auto {\n    margin: auto !important;\n  }\n\n  .v-application .mx-lg-0 {\n    margin-right: 0px !important;\n    margin-left: 0px !important;\n  }\n\n  .v-application .mx-lg-1 {\n    margin-right: 4px !important;\n    margin-left: 4px !important;\n  }\n\n  .v-application .mx-lg-2 {\n    margin-right: 8px !important;\n    margin-left: 8px !important;\n  }\n\n  .v-application .mx-lg-3 {\n    margin-right: 12px !important;\n    margin-left: 12px !important;\n  }\n\n  .v-application .mx-lg-4 {\n    margin-right: 16px !important;\n    margin-left: 16px !important;\n  }\n\n  .v-application .mx-lg-5 {\n    margin-right: 20px !important;\n    margin-left: 20px !important;\n  }\n\n  .v-application .mx-lg-6 {\n    margin-right: 24px !important;\n    margin-left: 24px !important;\n  }\n\n  .v-application .mx-lg-7 {\n    margin-right: 28px !important;\n    margin-left: 28px !important;\n  }\n\n  .v-application .mx-lg-8 {\n    margin-right: 32px !important;\n    margin-left: 32px !important;\n  }\n\n  .v-application .mx-lg-9 {\n    margin-right: 36px !important;\n    margin-left: 36px !important;\n  }\n\n  .v-application .mx-lg-10 {\n    margin-right: 40px !important;\n    margin-left: 40px !important;\n  }\n\n  .v-application .mx-lg-11 {\n    margin-right: 44px !important;\n    margin-left: 44px !important;\n  }\n\n  .v-application .mx-lg-12 {\n    margin-right: 48px !important;\n    margin-left: 48px !important;\n  }\n\n  .v-application .mx-lg-13 {\n    margin-right: 52px !important;\n    margin-left: 52px !important;\n  }\n\n  .v-application .mx-lg-14 {\n    margin-right: 56px !important;\n    margin-left: 56px !important;\n  }\n\n  .v-application .mx-lg-15 {\n    margin-right: 60px !important;\n    margin-left: 60px !important;\n  }\n\n  .v-application .mx-lg-16 {\n    margin-right: 64px !important;\n    margin-left: 64px !important;\n  }\n\n  .v-application .mx-lg-auto {\n    margin-right: auto !important;\n    margin-left: auto !important;\n  }\n\n  .v-application .my-lg-0 {\n    margin-top: 0px !important;\n    margin-bottom: 0px !important;\n  }\n\n  .v-application .my-lg-1 {\n    margin-top: 4px !important;\n    margin-bottom: 4px !important;\n  }\n\n  .v-application .my-lg-2 {\n    margin-top: 8px !important;\n    margin-bottom: 8px !important;\n  }\n\n  .v-application .my-lg-3 {\n    margin-top: 12px !important;\n    margin-bottom: 12px !important;\n  }\n\n  .v-application .my-lg-4 {\n    margin-top: 16px !important;\n    margin-bottom: 16px !important;\n  }\n\n  .v-application .my-lg-5 {\n    margin-top: 20px !important;\n    margin-bottom: 20px !important;\n  }\n\n  .v-application .my-lg-6 {\n    margin-top: 24px !important;\n    margin-bottom: 24px !important;\n  }\n\n  .v-application .my-lg-7 {\n    margin-top: 28px !important;\n    margin-bottom: 28px !important;\n  }\n\n  .v-application .my-lg-8 {\n    margin-top: 32px !important;\n    margin-bottom: 32px !important;\n  }\n\n  .v-application .my-lg-9 {\n    margin-top: 36px !important;\n    margin-bottom: 36px !important;\n  }\n\n  .v-application .my-lg-10 {\n    margin-top: 40px !important;\n    margin-bottom: 40px !important;\n  }\n\n  .v-application .my-lg-11 {\n    margin-top: 44px !important;\n    margin-bottom: 44px !important;\n  }\n\n  .v-application .my-lg-12 {\n    margin-top: 48px !important;\n    margin-bottom: 48px !important;\n  }\n\n  .v-application .my-lg-13 {\n    margin-top: 52px !important;\n    margin-bottom: 52px !important;\n  }\n\n  .v-application .my-lg-14 {\n    margin-top: 56px !important;\n    margin-bottom: 56px !important;\n  }\n\n  .v-application .my-lg-15 {\n    margin-top: 60px !important;\n    margin-bottom: 60px !important;\n  }\n\n  .v-application .my-lg-16 {\n    margin-top: 64px !important;\n    margin-bottom: 64px !important;\n  }\n\n  .v-application .my-lg-auto {\n    margin-top: auto !important;\n    margin-bottom: auto !important;\n  }\n\n  .v-application .mt-lg-0 {\n    margin-top: 0px !important;\n  }\n\n  .v-application .mt-lg-1 {\n    margin-top: 4px !important;\n  }\n\n  .v-application .mt-lg-2 {\n    margin-top: 8px !important;\n  }\n\n  .v-application .mt-lg-3 {\n    margin-top: 12px !important;\n  }\n\n  .v-application .mt-lg-4 {\n    margin-top: 16px !important;\n  }\n\n  .v-application .mt-lg-5 {\n    margin-top: 20px !important;\n  }\n\n  .v-application .mt-lg-6 {\n    margin-top: 24px !important;\n  }\n\n  .v-application .mt-lg-7 {\n    margin-top: 28px !important;\n  }\n\n  .v-application .mt-lg-8 {\n    margin-top: 32px !important;\n  }\n\n  .v-application .mt-lg-9 {\n    margin-top: 36px !important;\n  }\n\n  .v-application .mt-lg-10 {\n    margin-top: 40px !important;\n  }\n\n  .v-application .mt-lg-11 {\n    margin-top: 44px !important;\n  }\n\n  .v-application .mt-lg-12 {\n    margin-top: 48px !important;\n  }\n\n  .v-application .mt-lg-13 {\n    margin-top: 52px !important;\n  }\n\n  .v-application .mt-lg-14 {\n    margin-top: 56px !important;\n  }\n\n  .v-application .mt-lg-15 {\n    margin-top: 60px !important;\n  }\n\n  .v-application .mt-lg-16 {\n    margin-top: 64px !important;\n  }\n\n  .v-application .mt-lg-auto {\n    margin-top: auto !important;\n  }\n\n  .v-application .mr-lg-0 {\n    margin-right: 0px !important;\n  }\n\n  .v-application .mr-lg-1 {\n    margin-right: 4px !important;\n  }\n\n  .v-application .mr-lg-2 {\n    margin-right: 8px !important;\n  }\n\n  .v-application .mr-lg-3 {\n    margin-right: 12px !important;\n  }\n\n  .v-application .mr-lg-4 {\n    margin-right: 16px !important;\n  }\n\n  .v-application .mr-lg-5 {\n    margin-right: 20px !important;\n  }\n\n  .v-application .mr-lg-6 {\n    margin-right: 24px !important;\n  }\n\n  .v-application .mr-lg-7 {\n    margin-right: 28px !important;\n  }\n\n  .v-application .mr-lg-8 {\n    margin-right: 32px !important;\n  }\n\n  .v-application .mr-lg-9 {\n    margin-right: 36px !important;\n  }\n\n  .v-application .mr-lg-10 {\n    margin-right: 40px !important;\n  }\n\n  .v-application .mr-lg-11 {\n    margin-right: 44px !important;\n  }\n\n  .v-application .mr-lg-12 {\n    margin-right: 48px !important;\n  }\n\n  .v-application .mr-lg-13 {\n    margin-right: 52px !important;\n  }\n\n  .v-application .mr-lg-14 {\n    margin-right: 56px !important;\n  }\n\n  .v-application .mr-lg-15 {\n    margin-right: 60px !important;\n  }\n\n  .v-application .mr-lg-16 {\n    margin-right: 64px !important;\n  }\n\n  .v-application .mr-lg-auto {\n    margin-right: auto !important;\n  }\n\n  .v-application .mb-lg-0 {\n    margin-bottom: 0px !important;\n  }\n\n  .v-application .mb-lg-1 {\n    margin-bottom: 4px !important;\n  }\n\n  .v-application .mb-lg-2 {\n    margin-bottom: 8px !important;\n  }\n\n  .v-application .mb-lg-3 {\n    margin-bottom: 12px !important;\n  }\n\n  .v-application .mb-lg-4 {\n    margin-bottom: 16px !important;\n  }\n\n  .v-application .mb-lg-5 {\n    margin-bottom: 20px !important;\n  }\n\n  .v-application .mb-lg-6 {\n    margin-bottom: 24px !important;\n  }\n\n  .v-application .mb-lg-7 {\n    margin-bottom: 28px !important;\n  }\n\n  .v-application .mb-lg-8 {\n    margin-bottom: 32px !important;\n  }\n\n  .v-application .mb-lg-9 {\n    margin-bottom: 36px !important;\n  }\n\n  .v-application .mb-lg-10 {\n    margin-bottom: 40px !important;\n  }\n\n  .v-application .mb-lg-11 {\n    margin-bottom: 44px !important;\n  }\n\n  .v-application .mb-lg-12 {\n    margin-bottom: 48px !important;\n  }\n\n  .v-application .mb-lg-13 {\n    margin-bottom: 52px !important;\n  }\n\n  .v-application .mb-lg-14 {\n    margin-bottom: 56px !important;\n  }\n\n  .v-application .mb-lg-15 {\n    margin-bottom: 60px !important;\n  }\n\n  .v-application .mb-lg-16 {\n    margin-bottom: 64px !important;\n  }\n\n  .v-application .mb-lg-auto {\n    margin-bottom: auto !important;\n  }\n\n  .v-application .ml-lg-0 {\n    margin-left: 0px !important;\n  }\n\n  .v-application .ml-lg-1 {\n    margin-left: 4px !important;\n  }\n\n  .v-application .ml-lg-2 {\n    margin-left: 8px !important;\n  }\n\n  .v-application .ml-lg-3 {\n    margin-left: 12px !important;\n  }\n\n  .v-application .ml-lg-4 {\n    margin-left: 16px !important;\n  }\n\n  .v-application .ml-lg-5 {\n    margin-left: 20px !important;\n  }\n\n  .v-application .ml-lg-6 {\n    margin-left: 24px !important;\n  }\n\n  .v-application .ml-lg-7 {\n    margin-left: 28px !important;\n  }\n\n  .v-application .ml-lg-8 {\n    margin-left: 32px !important;\n  }\n\n  .v-application .ml-lg-9 {\n    margin-left: 36px !important;\n  }\n\n  .v-application .ml-lg-10 {\n    margin-left: 40px !important;\n  }\n\n  .v-application .ml-lg-11 {\n    margin-left: 44px !important;\n  }\n\n  .v-application .ml-lg-12 {\n    margin-left: 48px !important;\n  }\n\n  .v-application .ml-lg-13 {\n    margin-left: 52px !important;\n  }\n\n  .v-application .ml-lg-14 {\n    margin-left: 56px !important;\n  }\n\n  .v-application .ml-lg-15 {\n    margin-left: 60px !important;\n  }\n\n  .v-application .ml-lg-16 {\n    margin-left: 64px !important;\n  }\n\n  .v-application .ml-lg-auto {\n    margin-left: auto !important;\n  }\n\n  .v-application--is-ltr .ms-lg-0 {\n    margin-left: 0px !important;\n  }\n\n  .v-application--is-rtl .ms-lg-0 {\n    margin-right: 0px !important;\n  }\n\n  .v-application--is-ltr .ms-lg-1 {\n    margin-left: 4px !important;\n  }\n\n  .v-application--is-rtl .ms-lg-1 {\n    margin-right: 4px !important;\n  }\n\n  .v-application--is-ltr .ms-lg-2 {\n    margin-left: 8px !important;\n  }\n\n  .v-application--is-rtl .ms-lg-2 {\n    margin-right: 8px !important;\n  }\n\n  .v-application--is-ltr .ms-lg-3 {\n    margin-left: 12px !important;\n  }\n\n  .v-application--is-rtl .ms-lg-3 {\n    margin-right: 12px !important;\n  }\n\n  .v-application--is-ltr .ms-lg-4 {\n    margin-left: 16px !important;\n  }\n\n  .v-application--is-rtl .ms-lg-4 {\n    margin-right: 16px !important;\n  }\n\n  .v-application--is-ltr .ms-lg-5 {\n    margin-left: 20px !important;\n  }\n\n  .v-application--is-rtl .ms-lg-5 {\n    margin-right: 20px !important;\n  }\n\n  .v-application--is-ltr .ms-lg-6 {\n    margin-left: 24px !important;\n  }\n\n  .v-application--is-rtl .ms-lg-6 {\n    margin-right: 24px !important;\n  }\n\n  .v-application--is-ltr .ms-lg-7 {\n    margin-left: 28px !important;\n  }\n\n  .v-application--is-rtl .ms-lg-7 {\n    margin-right: 28px !important;\n  }\n\n  .v-application--is-ltr .ms-lg-8 {\n    margin-left: 32px !important;\n  }\n\n  .v-application--is-rtl .ms-lg-8 {\n    margin-right: 32px !important;\n  }\n\n  .v-application--is-ltr .ms-lg-9 {\n    margin-left: 36px !important;\n  }\n\n  .v-application--is-rtl .ms-lg-9 {\n    margin-right: 36px !important;\n  }\n\n  .v-application--is-ltr .ms-lg-10 {\n    margin-left: 40px !important;\n  }\n\n  .v-application--is-rtl .ms-lg-10 {\n    margin-right: 40px !important;\n  }\n\n  .v-application--is-ltr .ms-lg-11 {\n    margin-left: 44px !important;\n  }\n\n  .v-application--is-rtl .ms-lg-11 {\n    margin-right: 44px !important;\n  }\n\n  .v-application--is-ltr .ms-lg-12 {\n    margin-left: 48px !important;\n  }\n\n  .v-application--is-rtl .ms-lg-12 {\n    margin-right: 48px !important;\n  }\n\n  .v-application--is-ltr .ms-lg-13 {\n    margin-left: 52px !important;\n  }\n\n  .v-application--is-rtl .ms-lg-13 {\n    margin-right: 52px !important;\n  }\n\n  .v-application--is-ltr .ms-lg-14 {\n    margin-left: 56px !important;\n  }\n\n  .v-application--is-rtl .ms-lg-14 {\n    margin-right: 56px !important;\n  }\n\n  .v-application--is-ltr .ms-lg-15 {\n    margin-left: 60px !important;\n  }\n\n  .v-application--is-rtl .ms-lg-15 {\n    margin-right: 60px !important;\n  }\n\n  .v-application--is-ltr .ms-lg-16 {\n    margin-left: 64px !important;\n  }\n\n  .v-application--is-rtl .ms-lg-16 {\n    margin-right: 64px !important;\n  }\n\n  .v-application--is-ltr .ms-lg-auto {\n    margin-left: auto !important;\n  }\n\n  .v-application--is-rtl .ms-lg-auto {\n    margin-right: auto !important;\n  }\n\n  .v-application--is-ltr .me-lg-0 {\n    margin-right: 0px !important;\n  }\n\n  .v-application--is-rtl .me-lg-0 {\n    margin-left: 0px !important;\n  }\n\n  .v-application--is-ltr .me-lg-1 {\n    margin-right: 4px !important;\n  }\n\n  .v-application--is-rtl .me-lg-1 {\n    margin-left: 4px !important;\n  }\n\n  .v-application--is-ltr .me-lg-2 {\n    margin-right: 8px !important;\n  }\n\n  .v-application--is-rtl .me-lg-2 {\n    margin-left: 8px !important;\n  }\n\n  .v-application--is-ltr .me-lg-3 {\n    margin-right: 12px !important;\n  }\n\n  .v-application--is-rtl .me-lg-3 {\n    margin-left: 12px !important;\n  }\n\n  .v-application--is-ltr .me-lg-4 {\n    margin-right: 16px !important;\n  }\n\n  .v-application--is-rtl .me-lg-4 {\n    margin-left: 16px !important;\n  }\n\n  .v-application--is-ltr .me-lg-5 {\n    margin-right: 20px !important;\n  }\n\n  .v-application--is-rtl .me-lg-5 {\n    margin-left: 20px !important;\n  }\n\n  .v-application--is-ltr .me-lg-6 {\n    margin-right: 24px !important;\n  }\n\n  .v-application--is-rtl .me-lg-6 {\n    margin-left: 24px !important;\n  }\n\n  .v-application--is-ltr .me-lg-7 {\n    margin-right: 28px !important;\n  }\n\n  .v-application--is-rtl .me-lg-7 {\n    margin-left: 28px !important;\n  }\n\n  .v-application--is-ltr .me-lg-8 {\n    margin-right: 32px !important;\n  }\n\n  .v-application--is-rtl .me-lg-8 {\n    margin-left: 32px !important;\n  }\n\n  .v-application--is-ltr .me-lg-9 {\n    margin-right: 36px !important;\n  }\n\n  .v-application--is-rtl .me-lg-9 {\n    margin-left: 36px !important;\n  }\n\n  .v-application--is-ltr .me-lg-10 {\n    margin-right: 40px !important;\n  }\n\n  .v-application--is-rtl .me-lg-10 {\n    margin-left: 40px !important;\n  }\n\n  .v-application--is-ltr .me-lg-11 {\n    margin-right: 44px !important;\n  }\n\n  .v-application--is-rtl .me-lg-11 {\n    margin-left: 44px !important;\n  }\n\n  .v-application--is-ltr .me-lg-12 {\n    margin-right: 48px !important;\n  }\n\n  .v-application--is-rtl .me-lg-12 {\n    margin-left: 48px !important;\n  }\n\n  .v-application--is-ltr .me-lg-13 {\n    margin-right: 52px !important;\n  }\n\n  .v-application--is-rtl .me-lg-13 {\n    margin-left: 52px !important;\n  }\n\n  .v-application--is-ltr .me-lg-14 {\n    margin-right: 56px !important;\n  }\n\n  .v-application--is-rtl .me-lg-14 {\n    margin-left: 56px !important;\n  }\n\n  .v-application--is-ltr .me-lg-15 {\n    margin-right: 60px !important;\n  }\n\n  .v-application--is-rtl .me-lg-15 {\n    margin-left: 60px !important;\n  }\n\n  .v-application--is-ltr .me-lg-16 {\n    margin-right: 64px !important;\n  }\n\n  .v-application--is-rtl .me-lg-16 {\n    margin-left: 64px !important;\n  }\n\n  .v-application--is-ltr .me-lg-auto {\n    margin-right: auto !important;\n  }\n\n  .v-application--is-rtl .me-lg-auto {\n    margin-left: auto !important;\n  }\n\n  .v-application .ma-lg-n1 {\n    margin: -4px !important;\n  }\n\n  .v-application .ma-lg-n2 {\n    margin: -8px !important;\n  }\n\n  .v-application .ma-lg-n3 {\n    margin: -12px !important;\n  }\n\n  .v-application .ma-lg-n4 {\n    margin: -16px !important;\n  }\n\n  .v-application .ma-lg-n5 {\n    margin: -20px !important;\n  }\n\n  .v-application .ma-lg-n6 {\n    margin: -24px !important;\n  }\n\n  .v-application .ma-lg-n7 {\n    margin: -28px !important;\n  }\n\n  .v-application .ma-lg-n8 {\n    margin: -32px !important;\n  }\n\n  .v-application .ma-lg-n9 {\n    margin: -36px !important;\n  }\n\n  .v-application .ma-lg-n10 {\n    margin: -40px !important;\n  }\n\n  .v-application .ma-lg-n11 {\n    margin: -44px !important;\n  }\n\n  .v-application .ma-lg-n12 {\n    margin: -48px !important;\n  }\n\n  .v-application .ma-lg-n13 {\n    margin: -52px !important;\n  }\n\n  .v-application .ma-lg-n14 {\n    margin: -56px !important;\n  }\n\n  .v-application .ma-lg-n15 {\n    margin: -60px !important;\n  }\n\n  .v-application .ma-lg-n16 {\n    margin: -64px !important;\n  }\n\n  .v-application .mx-lg-n1 {\n    margin-right: -4px !important;\n    margin-left: -4px !important;\n  }\n\n  .v-application .mx-lg-n2 {\n    margin-right: -8px !important;\n    margin-left: -8px !important;\n  }\n\n  .v-application .mx-lg-n3 {\n    margin-right: -12px !important;\n    margin-left: -12px !important;\n  }\n\n  .v-application .mx-lg-n4 {\n    margin-right: -16px !important;\n    margin-left: -16px !important;\n  }\n\n  .v-application .mx-lg-n5 {\n    margin-right: -20px !important;\n    margin-left: -20px !important;\n  }\n\n  .v-application .mx-lg-n6 {\n    margin-right: -24px !important;\n    margin-left: -24px !important;\n  }\n\n  .v-application .mx-lg-n7 {\n    margin-right: -28px !important;\n    margin-left: -28px !important;\n  }\n\n  .v-application .mx-lg-n8 {\n    margin-right: -32px !important;\n    margin-left: -32px !important;\n  }\n\n  .v-application .mx-lg-n9 {\n    margin-right: -36px !important;\n    margin-left: -36px !important;\n  }\n\n  .v-application .mx-lg-n10 {\n    margin-right: -40px !important;\n    margin-left: -40px !important;\n  }\n\n  .v-application .mx-lg-n11 {\n    margin-right: -44px !important;\n    margin-left: -44px !important;\n  }\n\n  .v-application .mx-lg-n12 {\n    margin-right: -48px !important;\n    margin-left: -48px !important;\n  }\n\n  .v-application .mx-lg-n13 {\n    margin-right: -52px !important;\n    margin-left: -52px !important;\n  }\n\n  .v-application .mx-lg-n14 {\n    margin-right: -56px !important;\n    margin-left: -56px !important;\n  }\n\n  .v-application .mx-lg-n15 {\n    margin-right: -60px !important;\n    margin-left: -60px !important;\n  }\n\n  .v-application .mx-lg-n16 {\n    margin-right: -64px !important;\n    margin-left: -64px !important;\n  }\n\n  .v-application .my-lg-n1 {\n    margin-top: -4px !important;\n    margin-bottom: -4px !important;\n  }\n\n  .v-application .my-lg-n2 {\n    margin-top: -8px !important;\n    margin-bottom: -8px !important;\n  }\n\n  .v-application .my-lg-n3 {\n    margin-top: -12px !important;\n    margin-bottom: -12px !important;\n  }\n\n  .v-application .my-lg-n4 {\n    margin-top: -16px !important;\n    margin-bottom: -16px !important;\n  }\n\n  .v-application .my-lg-n5 {\n    margin-top: -20px !important;\n    margin-bottom: -20px !important;\n  }\n\n  .v-application .my-lg-n6 {\n    margin-top: -24px !important;\n    margin-bottom: -24px !important;\n  }\n\n  .v-application .my-lg-n7 {\n    margin-top: -28px !important;\n    margin-bottom: -28px !important;\n  }\n\n  .v-application .my-lg-n8 {\n    margin-top: -32px !important;\n    margin-bottom: -32px !important;\n  }\n\n  .v-application .my-lg-n9 {\n    margin-top: -36px !important;\n    margin-bottom: -36px !important;\n  }\n\n  .v-application .my-lg-n10 {\n    margin-top: -40px !important;\n    margin-bottom: -40px !important;\n  }\n\n  .v-application .my-lg-n11 {\n    margin-top: -44px !important;\n    margin-bottom: -44px !important;\n  }\n\n  .v-application .my-lg-n12 {\n    margin-top: -48px !important;\n    margin-bottom: -48px !important;\n  }\n\n  .v-application .my-lg-n13 {\n    margin-top: -52px !important;\n    margin-bottom: -52px !important;\n  }\n\n  .v-application .my-lg-n14 {\n    margin-top: -56px !important;\n    margin-bottom: -56px !important;\n  }\n\n  .v-application .my-lg-n15 {\n    margin-top: -60px !important;\n    margin-bottom: -60px !important;\n  }\n\n  .v-application .my-lg-n16 {\n    margin-top: -64px !important;\n    margin-bottom: -64px !important;\n  }\n\n  .v-application .mt-lg-n1 {\n    margin-top: -4px !important;\n  }\n\n  .v-application .mt-lg-n2 {\n    margin-top: -8px !important;\n  }\n\n  .v-application .mt-lg-n3 {\n    margin-top: -12px !important;\n  }\n\n  .v-application .mt-lg-n4 {\n    margin-top: -16px !important;\n  }\n\n  .v-application .mt-lg-n5 {\n    margin-top: -20px !important;\n  }\n\n  .v-application .mt-lg-n6 {\n    margin-top: -24px !important;\n  }\n\n  .v-application .mt-lg-n7 {\n    margin-top: -28px !important;\n  }\n\n  .v-application .mt-lg-n8 {\n    margin-top: -32px !important;\n  }\n\n  .v-application .mt-lg-n9 {\n    margin-top: -36px !important;\n  }\n\n  .v-application .mt-lg-n10 {\n    margin-top: -40px !important;\n  }\n\n  .v-application .mt-lg-n11 {\n    margin-top: -44px !important;\n  }\n\n  .v-application .mt-lg-n12 {\n    margin-top: -48px !important;\n  }\n\n  .v-application .mt-lg-n13 {\n    margin-top: -52px !important;\n  }\n\n  .v-application .mt-lg-n14 {\n    margin-top: -56px !important;\n  }\n\n  .v-application .mt-lg-n15 {\n    margin-top: -60px !important;\n  }\n\n  .v-application .mt-lg-n16 {\n    margin-top: -64px !important;\n  }\n\n  .v-application .mr-lg-n1 {\n    margin-right: -4px !important;\n  }\n\n  .v-application .mr-lg-n2 {\n    margin-right: -8px !important;\n  }\n\n  .v-application .mr-lg-n3 {\n    margin-right: -12px !important;\n  }\n\n  .v-application .mr-lg-n4 {\n    margin-right: -16px !important;\n  }\n\n  .v-application .mr-lg-n5 {\n    margin-right: -20px !important;\n  }\n\n  .v-application .mr-lg-n6 {\n    margin-right: -24px !important;\n  }\n\n  .v-application .mr-lg-n7 {\n    margin-right: -28px !important;\n  }\n\n  .v-application .mr-lg-n8 {\n    margin-right: -32px !important;\n  }\n\n  .v-application .mr-lg-n9 {\n    margin-right: -36px !important;\n  }\n\n  .v-application .mr-lg-n10 {\n    margin-right: -40px !important;\n  }\n\n  .v-application .mr-lg-n11 {\n    margin-right: -44px !important;\n  }\n\n  .v-application .mr-lg-n12 {\n    margin-right: -48px !important;\n  }\n\n  .v-application .mr-lg-n13 {\n    margin-right: -52px !important;\n  }\n\n  .v-application .mr-lg-n14 {\n    margin-right: -56px !important;\n  }\n\n  .v-application .mr-lg-n15 {\n    margin-right: -60px !important;\n  }\n\n  .v-application .mr-lg-n16 {\n    margin-right: -64px !important;\n  }\n\n  .v-application .mb-lg-n1 {\n    margin-bottom: -4px !important;\n  }\n\n  .v-application .mb-lg-n2 {\n    margin-bottom: -8px !important;\n  }\n\n  .v-application .mb-lg-n3 {\n    margin-bottom: -12px !important;\n  }\n\n  .v-application .mb-lg-n4 {\n    margin-bottom: -16px !important;\n  }\n\n  .v-application .mb-lg-n5 {\n    margin-bottom: -20px !important;\n  }\n\n  .v-application .mb-lg-n6 {\n    margin-bottom: -24px !important;\n  }\n\n  .v-application .mb-lg-n7 {\n    margin-bottom: -28px !important;\n  }\n\n  .v-application .mb-lg-n8 {\n    margin-bottom: -32px !important;\n  }\n\n  .v-application .mb-lg-n9 {\n    margin-bottom: -36px !important;\n  }\n\n  .v-application .mb-lg-n10 {\n    margin-bottom: -40px !important;\n  }\n\n  .v-application .mb-lg-n11 {\n    margin-bottom: -44px !important;\n  }\n\n  .v-application .mb-lg-n12 {\n    margin-bottom: -48px !important;\n  }\n\n  .v-application .mb-lg-n13 {\n    margin-bottom: -52px !important;\n  }\n\n  .v-application .mb-lg-n14 {\n    margin-bottom: -56px !important;\n  }\n\n  .v-application .mb-lg-n15 {\n    margin-bottom: -60px !important;\n  }\n\n  .v-application .mb-lg-n16 {\n    margin-bottom: -64px !important;\n  }\n\n  .v-application .ml-lg-n1 {\n    margin-left: -4px !important;\n  }\n\n  .v-application .ml-lg-n2 {\n    margin-left: -8px !important;\n  }\n\n  .v-application .ml-lg-n3 {\n    margin-left: -12px !important;\n  }\n\n  .v-application .ml-lg-n4 {\n    margin-left: -16px !important;\n  }\n\n  .v-application .ml-lg-n5 {\n    margin-left: -20px !important;\n  }\n\n  .v-application .ml-lg-n6 {\n    margin-left: -24px !important;\n  }\n\n  .v-application .ml-lg-n7 {\n    margin-left: -28px !important;\n  }\n\n  .v-application .ml-lg-n8 {\n    margin-left: -32px !important;\n  }\n\n  .v-application .ml-lg-n9 {\n    margin-left: -36px !important;\n  }\n\n  .v-application .ml-lg-n10 {\n    margin-left: -40px !important;\n  }\n\n  .v-application .ml-lg-n11 {\n    margin-left: -44px !important;\n  }\n\n  .v-application .ml-lg-n12 {\n    margin-left: -48px !important;\n  }\n\n  .v-application .ml-lg-n13 {\n    margin-left: -52px !important;\n  }\n\n  .v-application .ml-lg-n14 {\n    margin-left: -56px !important;\n  }\n\n  .v-application .ml-lg-n15 {\n    margin-left: -60px !important;\n  }\n\n  .v-application .ml-lg-n16 {\n    margin-left: -64px !important;\n  }\n\n  .v-application--is-ltr .ms-lg-n1 {\n    margin-left: -4px !important;\n  }\n\n  .v-application--is-rtl .ms-lg-n1 {\n    margin-right: -4px !important;\n  }\n\n  .v-application--is-ltr .ms-lg-n2 {\n    margin-left: -8px !important;\n  }\n\n  .v-application--is-rtl .ms-lg-n2 {\n    margin-right: -8px !important;\n  }\n\n  .v-application--is-ltr .ms-lg-n3 {\n    margin-left: -12px !important;\n  }\n\n  .v-application--is-rtl .ms-lg-n3 {\n    margin-right: -12px !important;\n  }\n\n  .v-application--is-ltr .ms-lg-n4 {\n    margin-left: -16px !important;\n  }\n\n  .v-application--is-rtl .ms-lg-n4 {\n    margin-right: -16px !important;\n  }\n\n  .v-application--is-ltr .ms-lg-n5 {\n    margin-left: -20px !important;\n  }\n\n  .v-application--is-rtl .ms-lg-n5 {\n    margin-right: -20px !important;\n  }\n\n  .v-application--is-ltr .ms-lg-n6 {\n    margin-left: -24px !important;\n  }\n\n  .v-application--is-rtl .ms-lg-n6 {\n    margin-right: -24px !important;\n  }\n\n  .v-application--is-ltr .ms-lg-n7 {\n    margin-left: -28px !important;\n  }\n\n  .v-application--is-rtl .ms-lg-n7 {\n    margin-right: -28px !important;\n  }\n\n  .v-application--is-ltr .ms-lg-n8 {\n    margin-left: -32px !important;\n  }\n\n  .v-application--is-rtl .ms-lg-n8 {\n    margin-right: -32px !important;\n  }\n\n  .v-application--is-ltr .ms-lg-n9 {\n    margin-left: -36px !important;\n  }\n\n  .v-application--is-rtl .ms-lg-n9 {\n    margin-right: -36px !important;\n  }\n\n  .v-application--is-ltr .ms-lg-n10 {\n    margin-left: -40px !important;\n  }\n\n  .v-application--is-rtl .ms-lg-n10 {\n    margin-right: -40px !important;\n  }\n\n  .v-application--is-ltr .ms-lg-n11 {\n    margin-left: -44px !important;\n  }\n\n  .v-application--is-rtl .ms-lg-n11 {\n    margin-right: -44px !important;\n  }\n\n  .v-application--is-ltr .ms-lg-n12 {\n    margin-left: -48px !important;\n  }\n\n  .v-application--is-rtl .ms-lg-n12 {\n    margin-right: -48px !important;\n  }\n\n  .v-application--is-ltr .ms-lg-n13 {\n    margin-left: -52px !important;\n  }\n\n  .v-application--is-rtl .ms-lg-n13 {\n    margin-right: -52px !important;\n  }\n\n  .v-application--is-ltr .ms-lg-n14 {\n    margin-left: -56px !important;\n  }\n\n  .v-application--is-rtl .ms-lg-n14 {\n    margin-right: -56px !important;\n  }\n\n  .v-application--is-ltr .ms-lg-n15 {\n    margin-left: -60px !important;\n  }\n\n  .v-application--is-rtl .ms-lg-n15 {\n    margin-right: -60px !important;\n  }\n\n  .v-application--is-ltr .ms-lg-n16 {\n    margin-left: -64px !important;\n  }\n\n  .v-application--is-rtl .ms-lg-n16 {\n    margin-right: -64px !important;\n  }\n\n  .v-application--is-ltr .me-lg-n1 {\n    margin-right: -4px !important;\n  }\n\n  .v-application--is-rtl .me-lg-n1 {\n    margin-left: -4px !important;\n  }\n\n  .v-application--is-ltr .me-lg-n2 {\n    margin-right: -8px !important;\n  }\n\n  .v-application--is-rtl .me-lg-n2 {\n    margin-left: -8px !important;\n  }\n\n  .v-application--is-ltr .me-lg-n3 {\n    margin-right: -12px !important;\n  }\n\n  .v-application--is-rtl .me-lg-n3 {\n    margin-left: -12px !important;\n  }\n\n  .v-application--is-ltr .me-lg-n4 {\n    margin-right: -16px !important;\n  }\n\n  .v-application--is-rtl .me-lg-n4 {\n    margin-left: -16px !important;\n  }\n\n  .v-application--is-ltr .me-lg-n5 {\n    margin-right: -20px !important;\n  }\n\n  .v-application--is-rtl .me-lg-n5 {\n    margin-left: -20px !important;\n  }\n\n  .v-application--is-ltr .me-lg-n6 {\n    margin-right: -24px !important;\n  }\n\n  .v-application--is-rtl .me-lg-n6 {\n    margin-left: -24px !important;\n  }\n\n  .v-application--is-ltr .me-lg-n7 {\n    margin-right: -28px !important;\n  }\n\n  .v-application--is-rtl .me-lg-n7 {\n    margin-left: -28px !important;\n  }\n\n  .v-application--is-ltr .me-lg-n8 {\n    margin-right: -32px !important;\n  }\n\n  .v-application--is-rtl .me-lg-n8 {\n    margin-left: -32px !important;\n  }\n\n  .v-application--is-ltr .me-lg-n9 {\n    margin-right: -36px !important;\n  }\n\n  .v-application--is-rtl .me-lg-n9 {\n    margin-left: -36px !important;\n  }\n\n  .v-application--is-ltr .me-lg-n10 {\n    margin-right: -40px !important;\n  }\n\n  .v-application--is-rtl .me-lg-n10 {\n    margin-left: -40px !important;\n  }\n\n  .v-application--is-ltr .me-lg-n11 {\n    margin-right: -44px !important;\n  }\n\n  .v-application--is-rtl .me-lg-n11 {\n    margin-left: -44px !important;\n  }\n\n  .v-application--is-ltr .me-lg-n12 {\n    margin-right: -48px !important;\n  }\n\n  .v-application--is-rtl .me-lg-n12 {\n    margin-left: -48px !important;\n  }\n\n  .v-application--is-ltr .me-lg-n13 {\n    margin-right: -52px !important;\n  }\n\n  .v-application--is-rtl .me-lg-n13 {\n    margin-left: -52px !important;\n  }\n\n  .v-application--is-ltr .me-lg-n14 {\n    margin-right: -56px !important;\n  }\n\n  .v-application--is-rtl .me-lg-n14 {\n    margin-left: -56px !important;\n  }\n\n  .v-application--is-ltr .me-lg-n15 {\n    margin-right: -60px !important;\n  }\n\n  .v-application--is-rtl .me-lg-n15 {\n    margin-left: -60px !important;\n  }\n\n  .v-application--is-ltr .me-lg-n16 {\n    margin-right: -64px !important;\n  }\n\n  .v-application--is-rtl .me-lg-n16 {\n    margin-left: -64px !important;\n  }\n\n  .v-application .pa-lg-0 {\n    padding: 0px !important;\n  }\n\n  .v-application .pa-lg-1 {\n    padding: 4px !important;\n  }\n\n  .v-application .pa-lg-2 {\n    padding: 8px !important;\n  }\n\n  .v-application .pa-lg-3 {\n    padding: 12px !important;\n  }\n\n  .v-application .pa-lg-4 {\n    padding: 16px !important;\n  }\n\n  .v-application .pa-lg-5 {\n    padding: 20px !important;\n  }\n\n  .v-application .pa-lg-6 {\n    padding: 24px !important;\n  }\n\n  .v-application .pa-lg-7 {\n    padding: 28px !important;\n  }\n\n  .v-application .pa-lg-8 {\n    padding: 32px !important;\n  }\n\n  .v-application .pa-lg-9 {\n    padding: 36px !important;\n  }\n\n  .v-application .pa-lg-10 {\n    padding: 40px !important;\n  }\n\n  .v-application .pa-lg-11 {\n    padding: 44px !important;\n  }\n\n  .v-application .pa-lg-12 {\n    padding: 48px !important;\n  }\n\n  .v-application .pa-lg-13 {\n    padding: 52px !important;\n  }\n\n  .v-application .pa-lg-14 {\n    padding: 56px !important;\n  }\n\n  .v-application .pa-lg-15 {\n    padding: 60px !important;\n  }\n\n  .v-application .pa-lg-16 {\n    padding: 64px !important;\n  }\n\n  .v-application .px-lg-0 {\n    padding-right: 0px !important;\n    padding-left: 0px !important;\n  }\n\n  .v-application .px-lg-1 {\n    padding-right: 4px !important;\n    padding-left: 4px !important;\n  }\n\n  .v-application .px-lg-2 {\n    padding-right: 8px !important;\n    padding-left: 8px !important;\n  }\n\n  .v-application .px-lg-3 {\n    padding-right: 12px !important;\n    padding-left: 12px !important;\n  }\n\n  .v-application .px-lg-4 {\n    padding-right: 16px !important;\n    padding-left: 16px !important;\n  }\n\n  .v-application .px-lg-5 {\n    padding-right: 20px !important;\n    padding-left: 20px !important;\n  }\n\n  .v-application .px-lg-6 {\n    padding-right: 24px !important;\n    padding-left: 24px !important;\n  }\n\n  .v-application .px-lg-7 {\n    padding-right: 28px !important;\n    padding-left: 28px !important;\n  }\n\n  .v-application .px-lg-8 {\n    padding-right: 32px !important;\n    padding-left: 32px !important;\n  }\n\n  .v-application .px-lg-9 {\n    padding-right: 36px !important;\n    padding-left: 36px !important;\n  }\n\n  .v-application .px-lg-10 {\n    padding-right: 40px !important;\n    padding-left: 40px !important;\n  }\n\n  .v-application .px-lg-11 {\n    padding-right: 44px !important;\n    padding-left: 44px !important;\n  }\n\n  .v-application .px-lg-12 {\n    padding-right: 48px !important;\n    padding-left: 48px !important;\n  }\n\n  .v-application .px-lg-13 {\n    padding-right: 52px !important;\n    padding-left: 52px !important;\n  }\n\n  .v-application .px-lg-14 {\n    padding-right: 56px !important;\n    padding-left: 56px !important;\n  }\n\n  .v-application .px-lg-15 {\n    padding-right: 60px !important;\n    padding-left: 60px !important;\n  }\n\n  .v-application .px-lg-16 {\n    padding-right: 64px !important;\n    padding-left: 64px !important;\n  }\n\n  .v-application .py-lg-0 {\n    padding-top: 0px !important;\n    padding-bottom: 0px !important;\n  }\n\n  .v-application .py-lg-1 {\n    padding-top: 4px !important;\n    padding-bottom: 4px !important;\n  }\n\n  .v-application .py-lg-2 {\n    padding-top: 8px !important;\n    padding-bottom: 8px !important;\n  }\n\n  .v-application .py-lg-3 {\n    padding-top: 12px !important;\n    padding-bottom: 12px !important;\n  }\n\n  .v-application .py-lg-4 {\n    padding-top: 16px !important;\n    padding-bottom: 16px !important;\n  }\n\n  .v-application .py-lg-5 {\n    padding-top: 20px !important;\n    padding-bottom: 20px !important;\n  }\n\n  .v-application .py-lg-6 {\n    padding-top: 24px !important;\n    padding-bottom: 24px !important;\n  }\n\n  .v-application .py-lg-7 {\n    padding-top: 28px !important;\n    padding-bottom: 28px !important;\n  }\n\n  .v-application .py-lg-8 {\n    padding-top: 32px !important;\n    padding-bottom: 32px !important;\n  }\n\n  .v-application .py-lg-9 {\n    padding-top: 36px !important;\n    padding-bottom: 36px !important;\n  }\n\n  .v-application .py-lg-10 {\n    padding-top: 40px !important;\n    padding-bottom: 40px !important;\n  }\n\n  .v-application .py-lg-11 {\n    padding-top: 44px !important;\n    padding-bottom: 44px !important;\n  }\n\n  .v-application .py-lg-12 {\n    padding-top: 48px !important;\n    padding-bottom: 48px !important;\n  }\n\n  .v-application .py-lg-13 {\n    padding-top: 52px !important;\n    padding-bottom: 52px !important;\n  }\n\n  .v-application .py-lg-14 {\n    padding-top: 56px !important;\n    padding-bottom: 56px !important;\n  }\n\n  .v-application .py-lg-15 {\n    padding-top: 60px !important;\n    padding-bottom: 60px !important;\n  }\n\n  .v-application .py-lg-16 {\n    padding-top: 64px !important;\n    padding-bottom: 64px !important;\n  }\n\n  .v-application .pt-lg-0 {\n    padding-top: 0px !important;\n  }\n\n  .v-application .pt-lg-1 {\n    padding-top: 4px !important;\n  }\n\n  .v-application .pt-lg-2 {\n    padding-top: 8px !important;\n  }\n\n  .v-application .pt-lg-3 {\n    padding-top: 12px !important;\n  }\n\n  .v-application .pt-lg-4 {\n    padding-top: 16px !important;\n  }\n\n  .v-application .pt-lg-5 {\n    padding-top: 20px !important;\n  }\n\n  .v-application .pt-lg-6 {\n    padding-top: 24px !important;\n  }\n\n  .v-application .pt-lg-7 {\n    padding-top: 28px !important;\n  }\n\n  .v-application .pt-lg-8 {\n    padding-top: 32px !important;\n  }\n\n  .v-application .pt-lg-9 {\n    padding-top: 36px !important;\n  }\n\n  .v-application .pt-lg-10 {\n    padding-top: 40px !important;\n  }\n\n  .v-application .pt-lg-11 {\n    padding-top: 44px !important;\n  }\n\n  .v-application .pt-lg-12 {\n    padding-top: 48px !important;\n  }\n\n  .v-application .pt-lg-13 {\n    padding-top: 52px !important;\n  }\n\n  .v-application .pt-lg-14 {\n    padding-top: 56px !important;\n  }\n\n  .v-application .pt-lg-15 {\n    padding-top: 60px !important;\n  }\n\n  .v-application .pt-lg-16 {\n    padding-top: 64px !important;\n  }\n\n  .v-application .pr-lg-0 {\n    padding-right: 0px !important;\n  }\n\n  .v-application .pr-lg-1 {\n    padding-right: 4px !important;\n  }\n\n  .v-application .pr-lg-2 {\n    padding-right: 8px !important;\n  }\n\n  .v-application .pr-lg-3 {\n    padding-right: 12px !important;\n  }\n\n  .v-application .pr-lg-4 {\n    padding-right: 16px !important;\n  }\n\n  .v-application .pr-lg-5 {\n    padding-right: 20px !important;\n  }\n\n  .v-application .pr-lg-6 {\n    padding-right: 24px !important;\n  }\n\n  .v-application .pr-lg-7 {\n    padding-right: 28px !important;\n  }\n\n  .v-application .pr-lg-8 {\n    padding-right: 32px !important;\n  }\n\n  .v-application .pr-lg-9 {\n    padding-right: 36px !important;\n  }\n\n  .v-application .pr-lg-10 {\n    padding-right: 40px !important;\n  }\n\n  .v-application .pr-lg-11 {\n    padding-right: 44px !important;\n  }\n\n  .v-application .pr-lg-12 {\n    padding-right: 48px !important;\n  }\n\n  .v-application .pr-lg-13 {\n    padding-right: 52px !important;\n  }\n\n  .v-application .pr-lg-14 {\n    padding-right: 56px !important;\n  }\n\n  .v-application .pr-lg-15 {\n    padding-right: 60px !important;\n  }\n\n  .v-application .pr-lg-16 {\n    padding-right: 64px !important;\n  }\n\n  .v-application .pb-lg-0 {\n    padding-bottom: 0px !important;\n  }\n\n  .v-application .pb-lg-1 {\n    padding-bottom: 4px !important;\n  }\n\n  .v-application .pb-lg-2 {\n    padding-bottom: 8px !important;\n  }\n\n  .v-application .pb-lg-3 {\n    padding-bottom: 12px !important;\n  }\n\n  .v-application .pb-lg-4 {\n    padding-bottom: 16px !important;\n  }\n\n  .v-application .pb-lg-5 {\n    padding-bottom: 20px !important;\n  }\n\n  .v-application .pb-lg-6 {\n    padding-bottom: 24px !important;\n  }\n\n  .v-application .pb-lg-7 {\n    padding-bottom: 28px !important;\n  }\n\n  .v-application .pb-lg-8 {\n    padding-bottom: 32px !important;\n  }\n\n  .v-application .pb-lg-9 {\n    padding-bottom: 36px !important;\n  }\n\n  .v-application .pb-lg-10 {\n    padding-bottom: 40px !important;\n  }\n\n  .v-application .pb-lg-11 {\n    padding-bottom: 44px !important;\n  }\n\n  .v-application .pb-lg-12 {\n    padding-bottom: 48px !important;\n  }\n\n  .v-application .pb-lg-13 {\n    padding-bottom: 52px !important;\n  }\n\n  .v-application .pb-lg-14 {\n    padding-bottom: 56px !important;\n  }\n\n  .v-application .pb-lg-15 {\n    padding-bottom: 60px !important;\n  }\n\n  .v-application .pb-lg-16 {\n    padding-bottom: 64px !important;\n  }\n\n  .v-application .pl-lg-0 {\n    padding-left: 0px !important;\n  }\n\n  .v-application .pl-lg-1 {\n    padding-left: 4px !important;\n  }\n\n  .v-application .pl-lg-2 {\n    padding-left: 8px !important;\n  }\n\n  .v-application .pl-lg-3 {\n    padding-left: 12px !important;\n  }\n\n  .v-application .pl-lg-4 {\n    padding-left: 16px !important;\n  }\n\n  .v-application .pl-lg-5 {\n    padding-left: 20px !important;\n  }\n\n  .v-application .pl-lg-6 {\n    padding-left: 24px !important;\n  }\n\n  .v-application .pl-lg-7 {\n    padding-left: 28px !important;\n  }\n\n  .v-application .pl-lg-8 {\n    padding-left: 32px !important;\n  }\n\n  .v-application .pl-lg-9 {\n    padding-left: 36px !important;\n  }\n\n  .v-application .pl-lg-10 {\n    padding-left: 40px !important;\n  }\n\n  .v-application .pl-lg-11 {\n    padding-left: 44px !important;\n  }\n\n  .v-application .pl-lg-12 {\n    padding-left: 48px !important;\n  }\n\n  .v-application .pl-lg-13 {\n    padding-left: 52px !important;\n  }\n\n  .v-application .pl-lg-14 {\n    padding-left: 56px !important;\n  }\n\n  .v-application .pl-lg-15 {\n    padding-left: 60px !important;\n  }\n\n  .v-application .pl-lg-16 {\n    padding-left: 64px !important;\n  }\n\n  .v-application--is-ltr .ps-lg-0 {\n    padding-left: 0px !important;\n  }\n\n  .v-application--is-rtl .ps-lg-0 {\n    padding-right: 0px !important;\n  }\n\n  .v-application--is-ltr .ps-lg-1 {\n    padding-left: 4px !important;\n  }\n\n  .v-application--is-rtl .ps-lg-1 {\n    padding-right: 4px !important;\n  }\n\n  .v-application--is-ltr .ps-lg-2 {\n    padding-left: 8px !important;\n  }\n\n  .v-application--is-rtl .ps-lg-2 {\n    padding-right: 8px !important;\n  }\n\n  .v-application--is-ltr .ps-lg-3 {\n    padding-left: 12px !important;\n  }\n\n  .v-application--is-rtl .ps-lg-3 {\n    padding-right: 12px !important;\n  }\n\n  .v-application--is-ltr .ps-lg-4 {\n    padding-left: 16px !important;\n  }\n\n  .v-application--is-rtl .ps-lg-4 {\n    padding-right: 16px !important;\n  }\n\n  .v-application--is-ltr .ps-lg-5 {\n    padding-left: 20px !important;\n  }\n\n  .v-application--is-rtl .ps-lg-5 {\n    padding-right: 20px !important;\n  }\n\n  .v-application--is-ltr .ps-lg-6 {\n    padding-left: 24px !important;\n  }\n\n  .v-application--is-rtl .ps-lg-6 {\n    padding-right: 24px !important;\n  }\n\n  .v-application--is-ltr .ps-lg-7 {\n    padding-left: 28px !important;\n  }\n\n  .v-application--is-rtl .ps-lg-7 {\n    padding-right: 28px !important;\n  }\n\n  .v-application--is-ltr .ps-lg-8 {\n    padding-left: 32px !important;\n  }\n\n  .v-application--is-rtl .ps-lg-8 {\n    padding-right: 32px !important;\n  }\n\n  .v-application--is-ltr .ps-lg-9 {\n    padding-left: 36px !important;\n  }\n\n  .v-application--is-rtl .ps-lg-9 {\n    padding-right: 36px !important;\n  }\n\n  .v-application--is-ltr .ps-lg-10 {\n    padding-left: 40px !important;\n  }\n\n  .v-application--is-rtl .ps-lg-10 {\n    padding-right: 40px !important;\n  }\n\n  .v-application--is-ltr .ps-lg-11 {\n    padding-left: 44px !important;\n  }\n\n  .v-application--is-rtl .ps-lg-11 {\n    padding-right: 44px !important;\n  }\n\n  .v-application--is-ltr .ps-lg-12 {\n    padding-left: 48px !important;\n  }\n\n  .v-application--is-rtl .ps-lg-12 {\n    padding-right: 48px !important;\n  }\n\n  .v-application--is-ltr .ps-lg-13 {\n    padding-left: 52px !important;\n  }\n\n  .v-application--is-rtl .ps-lg-13 {\n    padding-right: 52px !important;\n  }\n\n  .v-application--is-ltr .ps-lg-14 {\n    padding-left: 56px !important;\n  }\n\n  .v-application--is-rtl .ps-lg-14 {\n    padding-right: 56px !important;\n  }\n\n  .v-application--is-ltr .ps-lg-15 {\n    padding-left: 60px !important;\n  }\n\n  .v-application--is-rtl .ps-lg-15 {\n    padding-right: 60px !important;\n  }\n\n  .v-application--is-ltr .ps-lg-16 {\n    padding-left: 64px !important;\n  }\n\n  .v-application--is-rtl .ps-lg-16 {\n    padding-right: 64px !important;\n  }\n\n  .v-application--is-ltr .pe-lg-0 {\n    padding-right: 0px !important;\n  }\n\n  .v-application--is-rtl .pe-lg-0 {\n    padding-left: 0px !important;\n  }\n\n  .v-application--is-ltr .pe-lg-1 {\n    padding-right: 4px !important;\n  }\n\n  .v-application--is-rtl .pe-lg-1 {\n    padding-left: 4px !important;\n  }\n\n  .v-application--is-ltr .pe-lg-2 {\n    padding-right: 8px !important;\n  }\n\n  .v-application--is-rtl .pe-lg-2 {\n    padding-left: 8px !important;\n  }\n\n  .v-application--is-ltr .pe-lg-3 {\n    padding-right: 12px !important;\n  }\n\n  .v-application--is-rtl .pe-lg-3 {\n    padding-left: 12px !important;\n  }\n\n  .v-application--is-ltr .pe-lg-4 {\n    padding-right: 16px !important;\n  }\n\n  .v-application--is-rtl .pe-lg-4 {\n    padding-left: 16px !important;\n  }\n\n  .v-application--is-ltr .pe-lg-5 {\n    padding-right: 20px !important;\n  }\n\n  .v-application--is-rtl .pe-lg-5 {\n    padding-left: 20px !important;\n  }\n\n  .v-application--is-ltr .pe-lg-6 {\n    padding-right: 24px !important;\n  }\n\n  .v-application--is-rtl .pe-lg-6 {\n    padding-left: 24px !important;\n  }\n\n  .v-application--is-ltr .pe-lg-7 {\n    padding-right: 28px !important;\n  }\n\n  .v-application--is-rtl .pe-lg-7 {\n    padding-left: 28px !important;\n  }\n\n  .v-application--is-ltr .pe-lg-8 {\n    padding-right: 32px !important;\n  }\n\n  .v-application--is-rtl .pe-lg-8 {\n    padding-left: 32px !important;\n  }\n\n  .v-application--is-ltr .pe-lg-9 {\n    padding-right: 36px !important;\n  }\n\n  .v-application--is-rtl .pe-lg-9 {\n    padding-left: 36px !important;\n  }\n\n  .v-application--is-ltr .pe-lg-10 {\n    padding-right: 40px !important;\n  }\n\n  .v-application--is-rtl .pe-lg-10 {\n    padding-left: 40px !important;\n  }\n\n  .v-application--is-ltr .pe-lg-11 {\n    padding-right: 44px !important;\n  }\n\n  .v-application--is-rtl .pe-lg-11 {\n    padding-left: 44px !important;\n  }\n\n  .v-application--is-ltr .pe-lg-12 {\n    padding-right: 48px !important;\n  }\n\n  .v-application--is-rtl .pe-lg-12 {\n    padding-left: 48px !important;\n  }\n\n  .v-application--is-ltr .pe-lg-13 {\n    padding-right: 52px !important;\n  }\n\n  .v-application--is-rtl .pe-lg-13 {\n    padding-left: 52px !important;\n  }\n\n  .v-application--is-ltr .pe-lg-14 {\n    padding-right: 56px !important;\n  }\n\n  .v-application--is-rtl .pe-lg-14 {\n    padding-left: 56px !important;\n  }\n\n  .v-application--is-ltr .pe-lg-15 {\n    padding-right: 60px !important;\n  }\n\n  .v-application--is-rtl .pe-lg-15 {\n    padding-left: 60px !important;\n  }\n\n  .v-application--is-ltr .pe-lg-16 {\n    padding-right: 64px !important;\n  }\n\n  .v-application--is-rtl .pe-lg-16 {\n    padding-left: 64px !important;\n  }\n\n  .v-application .text-lg-left {\n    text-align: left !important;\n  }\n\n  .v-application .text-lg-right {\n    text-align: right !important;\n  }\n\n  .v-application .text-lg-center {\n    text-align: center !important;\n  }\n\n  .v-application .text-lg-justify {\n    text-align: justify !important;\n  }\n\n  .v-application .text-lg-start {\n    text-align: start !important;\n  }\n\n  .v-application .text-lg-end {\n    text-align: end !important;\n  }\n\n  .v-application .text-lg-h1 {\n    font-size: 6rem !important;\n    font-weight: 300;\n    line-height: 6rem;\n    letter-spacing: -0.015625em !important;\n    font-family: \"Roboto\", sans-serif !important;\n  }\n\n  .v-application .text-lg-h2 {\n    font-size: 3.75rem !important;\n    font-weight: 300;\n    line-height: 3.75rem;\n    letter-spacing: -0.0083333333em !important;\n    font-family: \"Roboto\", sans-serif !important;\n  }\n\n  .v-application .text-lg-h3 {\n    font-size: 3rem !important;\n    font-weight: 400;\n    line-height: 3.125rem;\n    letter-spacing: normal !important;\n    font-family: \"Roboto\", sans-serif !important;\n  }\n\n  .v-application .text-lg-h4 {\n    font-size: 2.125rem !important;\n    font-weight: 400;\n    line-height: 2.5rem;\n    letter-spacing: 0.0073529412em !important;\n    font-family: \"Roboto\", sans-serif !important;\n  }\n\n  .v-application .text-lg-h5 {\n    font-size: 1.5rem !important;\n    font-weight: 400;\n    line-height: 2rem;\n    letter-spacing: normal !important;\n    font-family: \"Roboto\", sans-serif !important;\n  }\n\n  .v-application .text-lg-h6 {\n    font-size: 1.25rem !important;\n    font-weight: 500;\n    line-height: 2rem;\n    letter-spacing: 0.0125em !important;\n    font-family: \"Roboto\", sans-serif !important;\n  }\n\n  .v-application .text-lg-subtitle-1 {\n    font-size: 1rem !important;\n    font-weight: normal;\n    line-height: 1.75rem;\n    letter-spacing: 0.009375em !important;\n    font-family: \"Roboto\", sans-serif !important;\n  }\n\n  .v-application .text-lg-subtitle-2 {\n    font-size: 0.875rem !important;\n    font-weight: 500;\n    line-height: 1.375rem;\n    letter-spacing: 0.0071428571em !important;\n    font-family: \"Roboto\", sans-serif !important;\n  }\n\n  .v-application .text-lg-body-1 {\n    font-size: 1rem !important;\n    font-weight: 400;\n    line-height: 1.5rem;\n    letter-spacing: 0.03125em !important;\n    font-family: \"Roboto\", sans-serif !important;\n  }\n\n  .v-application .text-lg-body-2 {\n    font-size: 0.875rem !important;\n    font-weight: 400;\n    line-height: 1.25rem;\n    letter-spacing: 0.0178571429em !important;\n    font-family: \"Roboto\", sans-serif !important;\n  }\n\n  .v-application .text-lg-button {\n    font-size: 0.875rem !important;\n    font-weight: 500;\n    line-height: 2.25rem;\n    letter-spacing: 0.0892857143em !important;\n    font-family: \"Roboto\", sans-serif !important;\n    text-transform: uppercase !important;\n  }\n\n  .v-application .text-lg-caption {\n    font-size: 0.75rem !important;\n    font-weight: 400;\n    line-height: 1.25rem;\n    letter-spacing: 0.0333333333em !important;\n    font-family: \"Roboto\", sans-serif !important;\n  }\n\n  .v-application .text-lg-overline {\n    font-size: 0.75rem !important;\n    font-weight: 500;\n    line-height: 2rem;\n    letter-spacing: 0.1666666667em !important;\n    font-family: \"Roboto\", sans-serif !important;\n    text-transform: uppercase !important;\n  }\n}\n@media (min-width: 1904px) {\n  .v-application .d-xl-none {\n    display: none !important;\n  }\n\n  .v-application .d-xl-inline {\n    display: inline !important;\n  }\n\n  .v-application .d-xl-inline-block {\n    display: inline-block !important;\n  }\n\n  .v-application .d-xl-block {\n    display: block !important;\n  }\n\n  .v-application .d-xl-table {\n    display: table !important;\n  }\n\n  .v-application .d-xl-table-row {\n    display: table-row !important;\n  }\n\n  .v-application .d-xl-table-cell {\n    display: table-cell !important;\n  }\n\n  .v-application .d-xl-flex {\n    display: flex !important;\n  }\n\n  .v-application .d-xl-inline-flex {\n    display: inline-flex !important;\n  }\n\n  .v-application .float-xl-none {\n    float: none !important;\n  }\n\n  .v-application .float-xl-left {\n    float: left !important;\n  }\n\n  .v-application .float-xl-right {\n    float: right !important;\n  }\n\n  .v-application .flex-xl-fill {\n    flex: 1 1 auto !important;\n  }\n\n  .v-application .flex-xl-row {\n    flex-direction: row !important;\n  }\n\n  .v-application .flex-xl-column {\n    flex-direction: column !important;\n  }\n\n  .v-application .flex-xl-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n\n  .v-application .flex-xl-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n\n  .v-application .flex-xl-grow-0 {\n    flex-grow: 0 !important;\n  }\n\n  .v-application .flex-xl-grow-1 {\n    flex-grow: 1 !important;\n  }\n\n  .v-application .flex-xl-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n\n  .v-application .flex-xl-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n\n  .v-application .flex-xl-wrap {\n    flex-wrap: wrap !important;\n  }\n\n  .v-application .flex-xl-nowrap {\n    flex-wrap: nowrap !important;\n  }\n\n  .v-application .flex-xl-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n\n  .v-application .justify-xl-start {\n    justify-content: flex-start !important;\n  }\n\n  .v-application .justify-xl-end {\n    justify-content: flex-end !important;\n  }\n\n  .v-application .justify-xl-center {\n    justify-content: center !important;\n  }\n\n  .v-application .justify-xl-space-between {\n    justify-content: space-between !important;\n  }\n\n  .v-application .justify-xl-space-around {\n    justify-content: space-around !important;\n  }\n\n  .v-application .align-xl-start {\n    align-items: flex-start !important;\n  }\n\n  .v-application .align-xl-end {\n    align-items: flex-end !important;\n  }\n\n  .v-application .align-xl-center {\n    align-items: center !important;\n  }\n\n  .v-application .align-xl-baseline {\n    align-items: baseline !important;\n  }\n\n  .v-application .align-xl-stretch {\n    align-items: stretch !important;\n  }\n\n  .v-application .align-content-xl-start {\n    align-content: flex-start !important;\n  }\n\n  .v-application .align-content-xl-end {\n    align-content: flex-end !important;\n  }\n\n  .v-application .align-content-xl-center {\n    align-content: center !important;\n  }\n\n  .v-application .align-content-xl-space-between {\n    align-content: space-between !important;\n  }\n\n  .v-application .align-content-xl-space-around {\n    align-content: space-around !important;\n  }\n\n  .v-application .align-content-xl-stretch {\n    align-content: stretch !important;\n  }\n\n  .v-application .align-self-xl-auto {\n    align-self: auto !important;\n  }\n\n  .v-application .align-self-xl-start {\n    align-self: flex-start !important;\n  }\n\n  .v-application .align-self-xl-end {\n    align-self: flex-end !important;\n  }\n\n  .v-application .align-self-xl-center {\n    align-self: center !important;\n  }\n\n  .v-application .align-self-xl-baseline {\n    align-self: baseline !important;\n  }\n\n  .v-application .align-self-xl-stretch {\n    align-self: stretch !important;\n  }\n\n  .v-application .order-xl-first {\n    order: -1 !important;\n  }\n\n  .v-application .order-xl-0 {\n    order: 0 !important;\n  }\n\n  .v-application .order-xl-1 {\n    order: 1 !important;\n  }\n\n  .v-application .order-xl-2 {\n    order: 2 !important;\n  }\n\n  .v-application .order-xl-3 {\n    order: 3 !important;\n  }\n\n  .v-application .order-xl-4 {\n    order: 4 !important;\n  }\n\n  .v-application .order-xl-5 {\n    order: 5 !important;\n  }\n\n  .v-application .order-xl-6 {\n    order: 6 !important;\n  }\n\n  .v-application .order-xl-7 {\n    order: 7 !important;\n  }\n\n  .v-application .order-xl-8 {\n    order: 8 !important;\n  }\n\n  .v-application .order-xl-9 {\n    order: 9 !important;\n  }\n\n  .v-application .order-xl-10 {\n    order: 10 !important;\n  }\n\n  .v-application .order-xl-11 {\n    order: 11 !important;\n  }\n\n  .v-application .order-xl-12 {\n    order: 12 !important;\n  }\n\n  .v-application .order-xl-last {\n    order: 13 !important;\n  }\n\n  .v-application .ma-xl-0 {\n    margin: 0px !important;\n  }\n\n  .v-application .ma-xl-1 {\n    margin: 4px !important;\n  }\n\n  .v-application .ma-xl-2 {\n    margin: 8px !important;\n  }\n\n  .v-application .ma-xl-3 {\n    margin: 12px !important;\n  }\n\n  .v-application .ma-xl-4 {\n    margin: 16px !important;\n  }\n\n  .v-application .ma-xl-5 {\n    margin: 20px !important;\n  }\n\n  .v-application .ma-xl-6 {\n    margin: 24px !important;\n  }\n\n  .v-application .ma-xl-7 {\n    margin: 28px !important;\n  }\n\n  .v-application .ma-xl-8 {\n    margin: 32px !important;\n  }\n\n  .v-application .ma-xl-9 {\n    margin: 36px !important;\n  }\n\n  .v-application .ma-xl-10 {\n    margin: 40px !important;\n  }\n\n  .v-application .ma-xl-11 {\n    margin: 44px !important;\n  }\n\n  .v-application .ma-xl-12 {\n    margin: 48px !important;\n  }\n\n  .v-application .ma-xl-13 {\n    margin: 52px !important;\n  }\n\n  .v-application .ma-xl-14 {\n    margin: 56px !important;\n  }\n\n  .v-application .ma-xl-15 {\n    margin: 60px !important;\n  }\n\n  .v-application .ma-xl-16 {\n    margin: 64px !important;\n  }\n\n  .v-application .ma-xl-auto {\n    margin: auto !important;\n  }\n\n  .v-application .mx-xl-0 {\n    margin-right: 0px !important;\n    margin-left: 0px !important;\n  }\n\n  .v-application .mx-xl-1 {\n    margin-right: 4px !important;\n    margin-left: 4px !important;\n  }\n\n  .v-application .mx-xl-2 {\n    margin-right: 8px !important;\n    margin-left: 8px !important;\n  }\n\n  .v-application .mx-xl-3 {\n    margin-right: 12px !important;\n    margin-left: 12px !important;\n  }\n\n  .v-application .mx-xl-4 {\n    margin-right: 16px !important;\n    margin-left: 16px !important;\n  }\n\n  .v-application .mx-xl-5 {\n    margin-right: 20px !important;\n    margin-left: 20px !important;\n  }\n\n  .v-application .mx-xl-6 {\n    margin-right: 24px !important;\n    margin-left: 24px !important;\n  }\n\n  .v-application .mx-xl-7 {\n    margin-right: 28px !important;\n    margin-left: 28px !important;\n  }\n\n  .v-application .mx-xl-8 {\n    margin-right: 32px !important;\n    margin-left: 32px !important;\n  }\n\n  .v-application .mx-xl-9 {\n    margin-right: 36px !important;\n    margin-left: 36px !important;\n  }\n\n  .v-application .mx-xl-10 {\n    margin-right: 40px !important;\n    margin-left: 40px !important;\n  }\n\n  .v-application .mx-xl-11 {\n    margin-right: 44px !important;\n    margin-left: 44px !important;\n  }\n\n  .v-application .mx-xl-12 {\n    margin-right: 48px !important;\n    margin-left: 48px !important;\n  }\n\n  .v-application .mx-xl-13 {\n    margin-right: 52px !important;\n    margin-left: 52px !important;\n  }\n\n  .v-application .mx-xl-14 {\n    margin-right: 56px !important;\n    margin-left: 56px !important;\n  }\n\n  .v-application .mx-xl-15 {\n    margin-right: 60px !important;\n    margin-left: 60px !important;\n  }\n\n  .v-application .mx-xl-16 {\n    margin-right: 64px !important;\n    margin-left: 64px !important;\n  }\n\n  .v-application .mx-xl-auto {\n    margin-right: auto !important;\n    margin-left: auto !important;\n  }\n\n  .v-application .my-xl-0 {\n    margin-top: 0px !important;\n    margin-bottom: 0px !important;\n  }\n\n  .v-application .my-xl-1 {\n    margin-top: 4px !important;\n    margin-bottom: 4px !important;\n  }\n\n  .v-application .my-xl-2 {\n    margin-top: 8px !important;\n    margin-bottom: 8px !important;\n  }\n\n  .v-application .my-xl-3 {\n    margin-top: 12px !important;\n    margin-bottom: 12px !important;\n  }\n\n  .v-application .my-xl-4 {\n    margin-top: 16px !important;\n    margin-bottom: 16px !important;\n  }\n\n  .v-application .my-xl-5 {\n    margin-top: 20px !important;\n    margin-bottom: 20px !important;\n  }\n\n  .v-application .my-xl-6 {\n    margin-top: 24px !important;\n    margin-bottom: 24px !important;\n  }\n\n  .v-application .my-xl-7 {\n    margin-top: 28px !important;\n    margin-bottom: 28px !important;\n  }\n\n  .v-application .my-xl-8 {\n    margin-top: 32px !important;\n    margin-bottom: 32px !important;\n  }\n\n  .v-application .my-xl-9 {\n    margin-top: 36px !important;\n    margin-bottom: 36px !important;\n  }\n\n  .v-application .my-xl-10 {\n    margin-top: 40px !important;\n    margin-bottom: 40px !important;\n  }\n\n  .v-application .my-xl-11 {\n    margin-top: 44px !important;\n    margin-bottom: 44px !important;\n  }\n\n  .v-application .my-xl-12 {\n    margin-top: 48px !important;\n    margin-bottom: 48px !important;\n  }\n\n  .v-application .my-xl-13 {\n    margin-top: 52px !important;\n    margin-bottom: 52px !important;\n  }\n\n  .v-application .my-xl-14 {\n    margin-top: 56px !important;\n    margin-bottom: 56px !important;\n  }\n\n  .v-application .my-xl-15 {\n    margin-top: 60px !important;\n    margin-bottom: 60px !important;\n  }\n\n  .v-application .my-xl-16 {\n    margin-top: 64px !important;\n    margin-bottom: 64px !important;\n  }\n\n  .v-application .my-xl-auto {\n    margin-top: auto !important;\n    margin-bottom: auto !important;\n  }\n\n  .v-application .mt-xl-0 {\n    margin-top: 0px !important;\n  }\n\n  .v-application .mt-xl-1 {\n    margin-top: 4px !important;\n  }\n\n  .v-application .mt-xl-2 {\n    margin-top: 8px !important;\n  }\n\n  .v-application .mt-xl-3 {\n    margin-top: 12px !important;\n  }\n\n  .v-application .mt-xl-4 {\n    margin-top: 16px !important;\n  }\n\n  .v-application .mt-xl-5 {\n    margin-top: 20px !important;\n  }\n\n  .v-application .mt-xl-6 {\n    margin-top: 24px !important;\n  }\n\n  .v-application .mt-xl-7 {\n    margin-top: 28px !important;\n  }\n\n  .v-application .mt-xl-8 {\n    margin-top: 32px !important;\n  }\n\n  .v-application .mt-xl-9 {\n    margin-top: 36px !important;\n  }\n\n  .v-application .mt-xl-10 {\n    margin-top: 40px !important;\n  }\n\n  .v-application .mt-xl-11 {\n    margin-top: 44px !important;\n  }\n\n  .v-application .mt-xl-12 {\n    margin-top: 48px !important;\n  }\n\n  .v-application .mt-xl-13 {\n    margin-top: 52px !important;\n  }\n\n  .v-application .mt-xl-14 {\n    margin-top: 56px !important;\n  }\n\n  .v-application .mt-xl-15 {\n    margin-top: 60px !important;\n  }\n\n  .v-application .mt-xl-16 {\n    margin-top: 64px !important;\n  }\n\n  .v-application .mt-xl-auto {\n    margin-top: auto !important;\n  }\n\n  .v-application .mr-xl-0 {\n    margin-right: 0px !important;\n  }\n\n  .v-application .mr-xl-1 {\n    margin-right: 4px !important;\n  }\n\n  .v-application .mr-xl-2 {\n    margin-right: 8px !important;\n  }\n\n  .v-application .mr-xl-3 {\n    margin-right: 12px !important;\n  }\n\n  .v-application .mr-xl-4 {\n    margin-right: 16px !important;\n  }\n\n  .v-application .mr-xl-5 {\n    margin-right: 20px !important;\n  }\n\n  .v-application .mr-xl-6 {\n    margin-right: 24px !important;\n  }\n\n  .v-application .mr-xl-7 {\n    margin-right: 28px !important;\n  }\n\n  .v-application .mr-xl-8 {\n    margin-right: 32px !important;\n  }\n\n  .v-application .mr-xl-9 {\n    margin-right: 36px !important;\n  }\n\n  .v-application .mr-xl-10 {\n    margin-right: 40px !important;\n  }\n\n  .v-application .mr-xl-11 {\n    margin-right: 44px !important;\n  }\n\n  .v-application .mr-xl-12 {\n    margin-right: 48px !important;\n  }\n\n  .v-application .mr-xl-13 {\n    margin-right: 52px !important;\n  }\n\n  .v-application .mr-xl-14 {\n    margin-right: 56px !important;\n  }\n\n  .v-application .mr-xl-15 {\n    margin-right: 60px !important;\n  }\n\n  .v-application .mr-xl-16 {\n    margin-right: 64px !important;\n  }\n\n  .v-application .mr-xl-auto {\n    margin-right: auto !important;\n  }\n\n  .v-application .mb-xl-0 {\n    margin-bottom: 0px !important;\n  }\n\n  .v-application .mb-xl-1 {\n    margin-bottom: 4px !important;\n  }\n\n  .v-application .mb-xl-2 {\n    margin-bottom: 8px !important;\n  }\n\n  .v-application .mb-xl-3 {\n    margin-bottom: 12px !important;\n  }\n\n  .v-application .mb-xl-4 {\n    margin-bottom: 16px !important;\n  }\n\n  .v-application .mb-xl-5 {\n    margin-bottom: 20px !important;\n  }\n\n  .v-application .mb-xl-6 {\n    margin-bottom: 24px !important;\n  }\n\n  .v-application .mb-xl-7 {\n    margin-bottom: 28px !important;\n  }\n\n  .v-application .mb-xl-8 {\n    margin-bottom: 32px !important;\n  }\n\n  .v-application .mb-xl-9 {\n    margin-bottom: 36px !important;\n  }\n\n  .v-application .mb-xl-10 {\n    margin-bottom: 40px !important;\n  }\n\n  .v-application .mb-xl-11 {\n    margin-bottom: 44px !important;\n  }\n\n  .v-application .mb-xl-12 {\n    margin-bottom: 48px !important;\n  }\n\n  .v-application .mb-xl-13 {\n    margin-bottom: 52px !important;\n  }\n\n  .v-application .mb-xl-14 {\n    margin-bottom: 56px !important;\n  }\n\n  .v-application .mb-xl-15 {\n    margin-bottom: 60px !important;\n  }\n\n  .v-application .mb-xl-16 {\n    margin-bottom: 64px !important;\n  }\n\n  .v-application .mb-xl-auto {\n    margin-bottom: auto !important;\n  }\n\n  .v-application .ml-xl-0 {\n    margin-left: 0px !important;\n  }\n\n  .v-application .ml-xl-1 {\n    margin-left: 4px !important;\n  }\n\n  .v-application .ml-xl-2 {\n    margin-left: 8px !important;\n  }\n\n  .v-application .ml-xl-3 {\n    margin-left: 12px !important;\n  }\n\n  .v-application .ml-xl-4 {\n    margin-left: 16px !important;\n  }\n\n  .v-application .ml-xl-5 {\n    margin-left: 20px !important;\n  }\n\n  .v-application .ml-xl-6 {\n    margin-left: 24px !important;\n  }\n\n  .v-application .ml-xl-7 {\n    margin-left: 28px !important;\n  }\n\n  .v-application .ml-xl-8 {\n    margin-left: 32px !important;\n  }\n\n  .v-application .ml-xl-9 {\n    margin-left: 36px !important;\n  }\n\n  .v-application .ml-xl-10 {\n    margin-left: 40px !important;\n  }\n\n  .v-application .ml-xl-11 {\n    margin-left: 44px !important;\n  }\n\n  .v-application .ml-xl-12 {\n    margin-left: 48px !important;\n  }\n\n  .v-application .ml-xl-13 {\n    margin-left: 52px !important;\n  }\n\n  .v-application .ml-xl-14 {\n    margin-left: 56px !important;\n  }\n\n  .v-application .ml-xl-15 {\n    margin-left: 60px !important;\n  }\n\n  .v-application .ml-xl-16 {\n    margin-left: 64px !important;\n  }\n\n  .v-application .ml-xl-auto {\n    margin-left: auto !important;\n  }\n\n  .v-application--is-ltr .ms-xl-0 {\n    margin-left: 0px !important;\n  }\n\n  .v-application--is-rtl .ms-xl-0 {\n    margin-right: 0px !important;\n  }\n\n  .v-application--is-ltr .ms-xl-1 {\n    margin-left: 4px !important;\n  }\n\n  .v-application--is-rtl .ms-xl-1 {\n    margin-right: 4px !important;\n  }\n\n  .v-application--is-ltr .ms-xl-2 {\n    margin-left: 8px !important;\n  }\n\n  .v-application--is-rtl .ms-xl-2 {\n    margin-right: 8px !important;\n  }\n\n  .v-application--is-ltr .ms-xl-3 {\n    margin-left: 12px !important;\n  }\n\n  .v-application--is-rtl .ms-xl-3 {\n    margin-right: 12px !important;\n  }\n\n  .v-application--is-ltr .ms-xl-4 {\n    margin-left: 16px !important;\n  }\n\n  .v-application--is-rtl .ms-xl-4 {\n    margin-right: 16px !important;\n  }\n\n  .v-application--is-ltr .ms-xl-5 {\n    margin-left: 20px !important;\n  }\n\n  .v-application--is-rtl .ms-xl-5 {\n    margin-right: 20px !important;\n  }\n\n  .v-application--is-ltr .ms-xl-6 {\n    margin-left: 24px !important;\n  }\n\n  .v-application--is-rtl .ms-xl-6 {\n    margin-right: 24px !important;\n  }\n\n  .v-application--is-ltr .ms-xl-7 {\n    margin-left: 28px !important;\n  }\n\n  .v-application--is-rtl .ms-xl-7 {\n    margin-right: 28px !important;\n  }\n\n  .v-application--is-ltr .ms-xl-8 {\n    margin-left: 32px !important;\n  }\n\n  .v-application--is-rtl .ms-xl-8 {\n    margin-right: 32px !important;\n  }\n\n  .v-application--is-ltr .ms-xl-9 {\n    margin-left: 36px !important;\n  }\n\n  .v-application--is-rtl .ms-xl-9 {\n    margin-right: 36px !important;\n  }\n\n  .v-application--is-ltr .ms-xl-10 {\n    margin-left: 40px !important;\n  }\n\n  .v-application--is-rtl .ms-xl-10 {\n    margin-right: 40px !important;\n  }\n\n  .v-application--is-ltr .ms-xl-11 {\n    margin-left: 44px !important;\n  }\n\n  .v-application--is-rtl .ms-xl-11 {\n    margin-right: 44px !important;\n  }\n\n  .v-application--is-ltr .ms-xl-12 {\n    margin-left: 48px !important;\n  }\n\n  .v-application--is-rtl .ms-xl-12 {\n    margin-right: 48px !important;\n  }\n\n  .v-application--is-ltr .ms-xl-13 {\n    margin-left: 52px !important;\n  }\n\n  .v-application--is-rtl .ms-xl-13 {\n    margin-right: 52px !important;\n  }\n\n  .v-application--is-ltr .ms-xl-14 {\n    margin-left: 56px !important;\n  }\n\n  .v-application--is-rtl .ms-xl-14 {\n    margin-right: 56px !important;\n  }\n\n  .v-application--is-ltr .ms-xl-15 {\n    margin-left: 60px !important;\n  }\n\n  .v-application--is-rtl .ms-xl-15 {\n    margin-right: 60px !important;\n  }\n\n  .v-application--is-ltr .ms-xl-16 {\n    margin-left: 64px !important;\n  }\n\n  .v-application--is-rtl .ms-xl-16 {\n    margin-right: 64px !important;\n  }\n\n  .v-application--is-ltr .ms-xl-auto {\n    margin-left: auto !important;\n  }\n\n  .v-application--is-rtl .ms-xl-auto {\n    margin-right: auto !important;\n  }\n\n  .v-application--is-ltr .me-xl-0 {\n    margin-right: 0px !important;\n  }\n\n  .v-application--is-rtl .me-xl-0 {\n    margin-left: 0px !important;\n  }\n\n  .v-application--is-ltr .me-xl-1 {\n    margin-right: 4px !important;\n  }\n\n  .v-application--is-rtl .me-xl-1 {\n    margin-left: 4px !important;\n  }\n\n  .v-application--is-ltr .me-xl-2 {\n    margin-right: 8px !important;\n  }\n\n  .v-application--is-rtl .me-xl-2 {\n    margin-left: 8px !important;\n  }\n\n  .v-application--is-ltr .me-xl-3 {\n    margin-right: 12px !important;\n  }\n\n  .v-application--is-rtl .me-xl-3 {\n    margin-left: 12px !important;\n  }\n\n  .v-application--is-ltr .me-xl-4 {\n    margin-right: 16px !important;\n  }\n\n  .v-application--is-rtl .me-xl-4 {\n    margin-left: 16px !important;\n  }\n\n  .v-application--is-ltr .me-xl-5 {\n    margin-right: 20px !important;\n  }\n\n  .v-application--is-rtl .me-xl-5 {\n    margin-left: 20px !important;\n  }\n\n  .v-application--is-ltr .me-xl-6 {\n    margin-right: 24px !important;\n  }\n\n  .v-application--is-rtl .me-xl-6 {\n    margin-left: 24px !important;\n  }\n\n  .v-application--is-ltr .me-xl-7 {\n    margin-right: 28px !important;\n  }\n\n  .v-application--is-rtl .me-xl-7 {\n    margin-left: 28px !important;\n  }\n\n  .v-application--is-ltr .me-xl-8 {\n    margin-right: 32px !important;\n  }\n\n  .v-application--is-rtl .me-xl-8 {\n    margin-left: 32px !important;\n  }\n\n  .v-application--is-ltr .me-xl-9 {\n    margin-right: 36px !important;\n  }\n\n  .v-application--is-rtl .me-xl-9 {\n    margin-left: 36px !important;\n  }\n\n  .v-application--is-ltr .me-xl-10 {\n    margin-right: 40px !important;\n  }\n\n  .v-application--is-rtl .me-xl-10 {\n    margin-left: 40px !important;\n  }\n\n  .v-application--is-ltr .me-xl-11 {\n    margin-right: 44px !important;\n  }\n\n  .v-application--is-rtl .me-xl-11 {\n    margin-left: 44px !important;\n  }\n\n  .v-application--is-ltr .me-xl-12 {\n    margin-right: 48px !important;\n  }\n\n  .v-application--is-rtl .me-xl-12 {\n    margin-left: 48px !important;\n  }\n\n  .v-application--is-ltr .me-xl-13 {\n    margin-right: 52px !important;\n  }\n\n  .v-application--is-rtl .me-xl-13 {\n    margin-left: 52px !important;\n  }\n\n  .v-application--is-ltr .me-xl-14 {\n    margin-right: 56px !important;\n  }\n\n  .v-application--is-rtl .me-xl-14 {\n    margin-left: 56px !important;\n  }\n\n  .v-application--is-ltr .me-xl-15 {\n    margin-right: 60px !important;\n  }\n\n  .v-application--is-rtl .me-xl-15 {\n    margin-left: 60px !important;\n  }\n\n  .v-application--is-ltr .me-xl-16 {\n    margin-right: 64px !important;\n  }\n\n  .v-application--is-rtl .me-xl-16 {\n    margin-left: 64px !important;\n  }\n\n  .v-application--is-ltr .me-xl-auto {\n    margin-right: auto !important;\n  }\n\n  .v-application--is-rtl .me-xl-auto {\n    margin-left: auto !important;\n  }\n\n  .v-application .ma-xl-n1 {\n    margin: -4px !important;\n  }\n\n  .v-application .ma-xl-n2 {\n    margin: -8px !important;\n  }\n\n  .v-application .ma-xl-n3 {\n    margin: -12px !important;\n  }\n\n  .v-application .ma-xl-n4 {\n    margin: -16px !important;\n  }\n\n  .v-application .ma-xl-n5 {\n    margin: -20px !important;\n  }\n\n  .v-application .ma-xl-n6 {\n    margin: -24px !important;\n  }\n\n  .v-application .ma-xl-n7 {\n    margin: -28px !important;\n  }\n\n  .v-application .ma-xl-n8 {\n    margin: -32px !important;\n  }\n\n  .v-application .ma-xl-n9 {\n    margin: -36px !important;\n  }\n\n  .v-application .ma-xl-n10 {\n    margin: -40px !important;\n  }\n\n  .v-application .ma-xl-n11 {\n    margin: -44px !important;\n  }\n\n  .v-application .ma-xl-n12 {\n    margin: -48px !important;\n  }\n\n  .v-application .ma-xl-n13 {\n    margin: -52px !important;\n  }\n\n  .v-application .ma-xl-n14 {\n    margin: -56px !important;\n  }\n\n  .v-application .ma-xl-n15 {\n    margin: -60px !important;\n  }\n\n  .v-application .ma-xl-n16 {\n    margin: -64px !important;\n  }\n\n  .v-application .mx-xl-n1 {\n    margin-right: -4px !important;\n    margin-left: -4px !important;\n  }\n\n  .v-application .mx-xl-n2 {\n    margin-right: -8px !important;\n    margin-left: -8px !important;\n  }\n\n  .v-application .mx-xl-n3 {\n    margin-right: -12px !important;\n    margin-left: -12px !important;\n  }\n\n  .v-application .mx-xl-n4 {\n    margin-right: -16px !important;\n    margin-left: -16px !important;\n  }\n\n  .v-application .mx-xl-n5 {\n    margin-right: -20px !important;\n    margin-left: -20px !important;\n  }\n\n  .v-application .mx-xl-n6 {\n    margin-right: -24px !important;\n    margin-left: -24px !important;\n  }\n\n  .v-application .mx-xl-n7 {\n    margin-right: -28px !important;\n    margin-left: -28px !important;\n  }\n\n  .v-application .mx-xl-n8 {\n    margin-right: -32px !important;\n    margin-left: -32px !important;\n  }\n\n  .v-application .mx-xl-n9 {\n    margin-right: -36px !important;\n    margin-left: -36px !important;\n  }\n\n  .v-application .mx-xl-n10 {\n    margin-right: -40px !important;\n    margin-left: -40px !important;\n  }\n\n  .v-application .mx-xl-n11 {\n    margin-right: -44px !important;\n    margin-left: -44px !important;\n  }\n\n  .v-application .mx-xl-n12 {\n    margin-right: -48px !important;\n    margin-left: -48px !important;\n  }\n\n  .v-application .mx-xl-n13 {\n    margin-right: -52px !important;\n    margin-left: -52px !important;\n  }\n\n  .v-application .mx-xl-n14 {\n    margin-right: -56px !important;\n    margin-left: -56px !important;\n  }\n\n  .v-application .mx-xl-n15 {\n    margin-right: -60px !important;\n    margin-left: -60px !important;\n  }\n\n  .v-application .mx-xl-n16 {\n    margin-right: -64px !important;\n    margin-left: -64px !important;\n  }\n\n  .v-application .my-xl-n1 {\n    margin-top: -4px !important;\n    margin-bottom: -4px !important;\n  }\n\n  .v-application .my-xl-n2 {\n    margin-top: -8px !important;\n    margin-bottom: -8px !important;\n  }\n\n  .v-application .my-xl-n3 {\n    margin-top: -12px !important;\n    margin-bottom: -12px !important;\n  }\n\n  .v-application .my-xl-n4 {\n    margin-top: -16px !important;\n    margin-bottom: -16px !important;\n  }\n\n  .v-application .my-xl-n5 {\n    margin-top: -20px !important;\n    margin-bottom: -20px !important;\n  }\n\n  .v-application .my-xl-n6 {\n    margin-top: -24px !important;\n    margin-bottom: -24px !important;\n  }\n\n  .v-application .my-xl-n7 {\n    margin-top: -28px !important;\n    margin-bottom: -28px !important;\n  }\n\n  .v-application .my-xl-n8 {\n    margin-top: -32px !important;\n    margin-bottom: -32px !important;\n  }\n\n  .v-application .my-xl-n9 {\n    margin-top: -36px !important;\n    margin-bottom: -36px !important;\n  }\n\n  .v-application .my-xl-n10 {\n    margin-top: -40px !important;\n    margin-bottom: -40px !important;\n  }\n\n  .v-application .my-xl-n11 {\n    margin-top: -44px !important;\n    margin-bottom: -44px !important;\n  }\n\n  .v-application .my-xl-n12 {\n    margin-top: -48px !important;\n    margin-bottom: -48px !important;\n  }\n\n  .v-application .my-xl-n13 {\n    margin-top: -52px !important;\n    margin-bottom: -52px !important;\n  }\n\n  .v-application .my-xl-n14 {\n    margin-top: -56px !important;\n    margin-bottom: -56px !important;\n  }\n\n  .v-application .my-xl-n15 {\n    margin-top: -60px !important;\n    margin-bottom: -60px !important;\n  }\n\n  .v-application .my-xl-n16 {\n    margin-top: -64px !important;\n    margin-bottom: -64px !important;\n  }\n\n  .v-application .mt-xl-n1 {\n    margin-top: -4px !important;\n  }\n\n  .v-application .mt-xl-n2 {\n    margin-top: -8px !important;\n  }\n\n  .v-application .mt-xl-n3 {\n    margin-top: -12px !important;\n  }\n\n  .v-application .mt-xl-n4 {\n    margin-top: -16px !important;\n  }\n\n  .v-application .mt-xl-n5 {\n    margin-top: -20px !important;\n  }\n\n  .v-application .mt-xl-n6 {\n    margin-top: -24px !important;\n  }\n\n  .v-application .mt-xl-n7 {\n    margin-top: -28px !important;\n  }\n\n  .v-application .mt-xl-n8 {\n    margin-top: -32px !important;\n  }\n\n  .v-application .mt-xl-n9 {\n    margin-top: -36px !important;\n  }\n\n  .v-application .mt-xl-n10 {\n    margin-top: -40px !important;\n  }\n\n  .v-application .mt-xl-n11 {\n    margin-top: -44px !important;\n  }\n\n  .v-application .mt-xl-n12 {\n    margin-top: -48px !important;\n  }\n\n  .v-application .mt-xl-n13 {\n    margin-top: -52px !important;\n  }\n\n  .v-application .mt-xl-n14 {\n    margin-top: -56px !important;\n  }\n\n  .v-application .mt-xl-n15 {\n    margin-top: -60px !important;\n  }\n\n  .v-application .mt-xl-n16 {\n    margin-top: -64px !important;\n  }\n\n  .v-application .mr-xl-n1 {\n    margin-right: -4px !important;\n  }\n\n  .v-application .mr-xl-n2 {\n    margin-right: -8px !important;\n  }\n\n  .v-application .mr-xl-n3 {\n    margin-right: -12px !important;\n  }\n\n  .v-application .mr-xl-n4 {\n    margin-right: -16px !important;\n  }\n\n  .v-application .mr-xl-n5 {\n    margin-right: -20px !important;\n  }\n\n  .v-application .mr-xl-n6 {\n    margin-right: -24px !important;\n  }\n\n  .v-application .mr-xl-n7 {\n    margin-right: -28px !important;\n  }\n\n  .v-application .mr-xl-n8 {\n    margin-right: -32px !important;\n  }\n\n  .v-application .mr-xl-n9 {\n    margin-right: -36px !important;\n  }\n\n  .v-application .mr-xl-n10 {\n    margin-right: -40px !important;\n  }\n\n  .v-application .mr-xl-n11 {\n    margin-right: -44px !important;\n  }\n\n  .v-application .mr-xl-n12 {\n    margin-right: -48px !important;\n  }\n\n  .v-application .mr-xl-n13 {\n    margin-right: -52px !important;\n  }\n\n  .v-application .mr-xl-n14 {\n    margin-right: -56px !important;\n  }\n\n  .v-application .mr-xl-n15 {\n    margin-right: -60px !important;\n  }\n\n  .v-application .mr-xl-n16 {\n    margin-right: -64px !important;\n  }\n\n  .v-application .mb-xl-n1 {\n    margin-bottom: -4px !important;\n  }\n\n  .v-application .mb-xl-n2 {\n    margin-bottom: -8px !important;\n  }\n\n  .v-application .mb-xl-n3 {\n    margin-bottom: -12px !important;\n  }\n\n  .v-application .mb-xl-n4 {\n    margin-bottom: -16px !important;\n  }\n\n  .v-application .mb-xl-n5 {\n    margin-bottom: -20px !important;\n  }\n\n  .v-application .mb-xl-n6 {\n    margin-bottom: -24px !important;\n  }\n\n  .v-application .mb-xl-n7 {\n    margin-bottom: -28px !important;\n  }\n\n  .v-application .mb-xl-n8 {\n    margin-bottom: -32px !important;\n  }\n\n  .v-application .mb-xl-n9 {\n    margin-bottom: -36px !important;\n  }\n\n  .v-application .mb-xl-n10 {\n    margin-bottom: -40px !important;\n  }\n\n  .v-application .mb-xl-n11 {\n    margin-bottom: -44px !important;\n  }\n\n  .v-application .mb-xl-n12 {\n    margin-bottom: -48px !important;\n  }\n\n  .v-application .mb-xl-n13 {\n    margin-bottom: -52px !important;\n  }\n\n  .v-application .mb-xl-n14 {\n    margin-bottom: -56px !important;\n  }\n\n  .v-application .mb-xl-n15 {\n    margin-bottom: -60px !important;\n  }\n\n  .v-application .mb-xl-n16 {\n    margin-bottom: -64px !important;\n  }\n\n  .v-application .ml-xl-n1 {\n    margin-left: -4px !important;\n  }\n\n  .v-application .ml-xl-n2 {\n    margin-left: -8px !important;\n  }\n\n  .v-application .ml-xl-n3 {\n    margin-left: -12px !important;\n  }\n\n  .v-application .ml-xl-n4 {\n    margin-left: -16px !important;\n  }\n\n  .v-application .ml-xl-n5 {\n    margin-left: -20px !important;\n  }\n\n  .v-application .ml-xl-n6 {\n    margin-left: -24px !important;\n  }\n\n  .v-application .ml-xl-n7 {\n    margin-left: -28px !important;\n  }\n\n  .v-application .ml-xl-n8 {\n    margin-left: -32px !important;\n  }\n\n  .v-application .ml-xl-n9 {\n    margin-left: -36px !important;\n  }\n\n  .v-application .ml-xl-n10 {\n    margin-left: -40px !important;\n  }\n\n  .v-application .ml-xl-n11 {\n    margin-left: -44px !important;\n  }\n\n  .v-application .ml-xl-n12 {\n    margin-left: -48px !important;\n  }\n\n  .v-application .ml-xl-n13 {\n    margin-left: -52px !important;\n  }\n\n  .v-application .ml-xl-n14 {\n    margin-left: -56px !important;\n  }\n\n  .v-application .ml-xl-n15 {\n    margin-left: -60px !important;\n  }\n\n  .v-application .ml-xl-n16 {\n    margin-left: -64px !important;\n  }\n\n  .v-application--is-ltr .ms-xl-n1 {\n    margin-left: -4px !important;\n  }\n\n  .v-application--is-rtl .ms-xl-n1 {\n    margin-right: -4px !important;\n  }\n\n  .v-application--is-ltr .ms-xl-n2 {\n    margin-left: -8px !important;\n  }\n\n  .v-application--is-rtl .ms-xl-n2 {\n    margin-right: -8px !important;\n  }\n\n  .v-application--is-ltr .ms-xl-n3 {\n    margin-left: -12px !important;\n  }\n\n  .v-application--is-rtl .ms-xl-n3 {\n    margin-right: -12px !important;\n  }\n\n  .v-application--is-ltr .ms-xl-n4 {\n    margin-left: -16px !important;\n  }\n\n  .v-application--is-rtl .ms-xl-n4 {\n    margin-right: -16px !important;\n  }\n\n  .v-application--is-ltr .ms-xl-n5 {\n    margin-left: -20px !important;\n  }\n\n  .v-application--is-rtl .ms-xl-n5 {\n    margin-right: -20px !important;\n  }\n\n  .v-application--is-ltr .ms-xl-n6 {\n    margin-left: -24px !important;\n  }\n\n  .v-application--is-rtl .ms-xl-n6 {\n    margin-right: -24px !important;\n  }\n\n  .v-application--is-ltr .ms-xl-n7 {\n    margin-left: -28px !important;\n  }\n\n  .v-application--is-rtl .ms-xl-n7 {\n    margin-right: -28px !important;\n  }\n\n  .v-application--is-ltr .ms-xl-n8 {\n    margin-left: -32px !important;\n  }\n\n  .v-application--is-rtl .ms-xl-n8 {\n    margin-right: -32px !important;\n  }\n\n  .v-application--is-ltr .ms-xl-n9 {\n    margin-left: -36px !important;\n  }\n\n  .v-application--is-rtl .ms-xl-n9 {\n    margin-right: -36px !important;\n  }\n\n  .v-application--is-ltr .ms-xl-n10 {\n    margin-left: -40px !important;\n  }\n\n  .v-application--is-rtl .ms-xl-n10 {\n    margin-right: -40px !important;\n  }\n\n  .v-application--is-ltr .ms-xl-n11 {\n    margin-left: -44px !important;\n  }\n\n  .v-application--is-rtl .ms-xl-n11 {\n    margin-right: -44px !important;\n  }\n\n  .v-application--is-ltr .ms-xl-n12 {\n    margin-left: -48px !important;\n  }\n\n  .v-application--is-rtl .ms-xl-n12 {\n    margin-right: -48px !important;\n  }\n\n  .v-application--is-ltr .ms-xl-n13 {\n    margin-left: -52px !important;\n  }\n\n  .v-application--is-rtl .ms-xl-n13 {\n    margin-right: -52px !important;\n  }\n\n  .v-application--is-ltr .ms-xl-n14 {\n    margin-left: -56px !important;\n  }\n\n  .v-application--is-rtl .ms-xl-n14 {\n    margin-right: -56px !important;\n  }\n\n  .v-application--is-ltr .ms-xl-n15 {\n    margin-left: -60px !important;\n  }\n\n  .v-application--is-rtl .ms-xl-n15 {\n    margin-right: -60px !important;\n  }\n\n  .v-application--is-ltr .ms-xl-n16 {\n    margin-left: -64px !important;\n  }\n\n  .v-application--is-rtl .ms-xl-n16 {\n    margin-right: -64px !important;\n  }\n\n  .v-application--is-ltr .me-xl-n1 {\n    margin-right: -4px !important;\n  }\n\n  .v-application--is-rtl .me-xl-n1 {\n    margin-left: -4px !important;\n  }\n\n  .v-application--is-ltr .me-xl-n2 {\n    margin-right: -8px !important;\n  }\n\n  .v-application--is-rtl .me-xl-n2 {\n    margin-left: -8px !important;\n  }\n\n  .v-application--is-ltr .me-xl-n3 {\n    margin-right: -12px !important;\n  }\n\n  .v-application--is-rtl .me-xl-n3 {\n    margin-left: -12px !important;\n  }\n\n  .v-application--is-ltr .me-xl-n4 {\n    margin-right: -16px !important;\n  }\n\n  .v-application--is-rtl .me-xl-n4 {\n    margin-left: -16px !important;\n  }\n\n  .v-application--is-ltr .me-xl-n5 {\n    margin-right: -20px !important;\n  }\n\n  .v-application--is-rtl .me-xl-n5 {\n    margin-left: -20px !important;\n  }\n\n  .v-application--is-ltr .me-xl-n6 {\n    margin-right: -24px !important;\n  }\n\n  .v-application--is-rtl .me-xl-n6 {\n    margin-left: -24px !important;\n  }\n\n  .v-application--is-ltr .me-xl-n7 {\n    margin-right: -28px !important;\n  }\n\n  .v-application--is-rtl .me-xl-n7 {\n    margin-left: -28px !important;\n  }\n\n  .v-application--is-ltr .me-xl-n8 {\n    margin-right: -32px !important;\n  }\n\n  .v-application--is-rtl .me-xl-n8 {\n    margin-left: -32px !important;\n  }\n\n  .v-application--is-ltr .me-xl-n9 {\n    margin-right: -36px !important;\n  }\n\n  .v-application--is-rtl .me-xl-n9 {\n    margin-left: -36px !important;\n  }\n\n  .v-application--is-ltr .me-xl-n10 {\n    margin-right: -40px !important;\n  }\n\n  .v-application--is-rtl .me-xl-n10 {\n    margin-left: -40px !important;\n  }\n\n  .v-application--is-ltr .me-xl-n11 {\n    margin-right: -44px !important;\n  }\n\n  .v-application--is-rtl .me-xl-n11 {\n    margin-left: -44px !important;\n  }\n\n  .v-application--is-ltr .me-xl-n12 {\n    margin-right: -48px !important;\n  }\n\n  .v-application--is-rtl .me-xl-n12 {\n    margin-left: -48px !important;\n  }\n\n  .v-application--is-ltr .me-xl-n13 {\n    margin-right: -52px !important;\n  }\n\n  .v-application--is-rtl .me-xl-n13 {\n    margin-left: -52px !important;\n  }\n\n  .v-application--is-ltr .me-xl-n14 {\n    margin-right: -56px !important;\n  }\n\n  .v-application--is-rtl .me-xl-n14 {\n    margin-left: -56px !important;\n  }\n\n  .v-application--is-ltr .me-xl-n15 {\n    margin-right: -60px !important;\n  }\n\n  .v-application--is-rtl .me-xl-n15 {\n    margin-left: -60px !important;\n  }\n\n  .v-application--is-ltr .me-xl-n16 {\n    margin-right: -64px !important;\n  }\n\n  .v-application--is-rtl .me-xl-n16 {\n    margin-left: -64px !important;\n  }\n\n  .v-application .pa-xl-0 {\n    padding: 0px !important;\n  }\n\n  .v-application .pa-xl-1 {\n    padding: 4px !important;\n  }\n\n  .v-application .pa-xl-2 {\n    padding: 8px !important;\n  }\n\n  .v-application .pa-xl-3 {\n    padding: 12px !important;\n  }\n\n  .v-application .pa-xl-4 {\n    padding: 16px !important;\n  }\n\n  .v-application .pa-xl-5 {\n    padding: 20px !important;\n  }\n\n  .v-application .pa-xl-6 {\n    padding: 24px !important;\n  }\n\n  .v-application .pa-xl-7 {\n    padding: 28px !important;\n  }\n\n  .v-application .pa-xl-8 {\n    padding: 32px !important;\n  }\n\n  .v-application .pa-xl-9 {\n    padding: 36px !important;\n  }\n\n  .v-application .pa-xl-10 {\n    padding: 40px !important;\n  }\n\n  .v-application .pa-xl-11 {\n    padding: 44px !important;\n  }\n\n  .v-application .pa-xl-12 {\n    padding: 48px !important;\n  }\n\n  .v-application .pa-xl-13 {\n    padding: 52px !important;\n  }\n\n  .v-application .pa-xl-14 {\n    padding: 56px !important;\n  }\n\n  .v-application .pa-xl-15 {\n    padding: 60px !important;\n  }\n\n  .v-application .pa-xl-16 {\n    padding: 64px !important;\n  }\n\n  .v-application .px-xl-0 {\n    padding-right: 0px !important;\n    padding-left: 0px !important;\n  }\n\n  .v-application .px-xl-1 {\n    padding-right: 4px !important;\n    padding-left: 4px !important;\n  }\n\n  .v-application .px-xl-2 {\n    padding-right: 8px !important;\n    padding-left: 8px !important;\n  }\n\n  .v-application .px-xl-3 {\n    padding-right: 12px !important;\n    padding-left: 12px !important;\n  }\n\n  .v-application .px-xl-4 {\n    padding-right: 16px !important;\n    padding-left: 16px !important;\n  }\n\n  .v-application .px-xl-5 {\n    padding-right: 20px !important;\n    padding-left: 20px !important;\n  }\n\n  .v-application .px-xl-6 {\n    padding-right: 24px !important;\n    padding-left: 24px !important;\n  }\n\n  .v-application .px-xl-7 {\n    padding-right: 28px !important;\n    padding-left: 28px !important;\n  }\n\n  .v-application .px-xl-8 {\n    padding-right: 32px !important;\n    padding-left: 32px !important;\n  }\n\n  .v-application .px-xl-9 {\n    padding-right: 36px !important;\n    padding-left: 36px !important;\n  }\n\n  .v-application .px-xl-10 {\n    padding-right: 40px !important;\n    padding-left: 40px !important;\n  }\n\n  .v-application .px-xl-11 {\n    padding-right: 44px !important;\n    padding-left: 44px !important;\n  }\n\n  .v-application .px-xl-12 {\n    padding-right: 48px !important;\n    padding-left: 48px !important;\n  }\n\n  .v-application .px-xl-13 {\n    padding-right: 52px !important;\n    padding-left: 52px !important;\n  }\n\n  .v-application .px-xl-14 {\n    padding-right: 56px !important;\n    padding-left: 56px !important;\n  }\n\n  .v-application .px-xl-15 {\n    padding-right: 60px !important;\n    padding-left: 60px !important;\n  }\n\n  .v-application .px-xl-16 {\n    padding-right: 64px !important;\n    padding-left: 64px !important;\n  }\n\n  .v-application .py-xl-0 {\n    padding-top: 0px !important;\n    padding-bottom: 0px !important;\n  }\n\n  .v-application .py-xl-1 {\n    padding-top: 4px !important;\n    padding-bottom: 4px !important;\n  }\n\n  .v-application .py-xl-2 {\n    padding-top: 8px !important;\n    padding-bottom: 8px !important;\n  }\n\n  .v-application .py-xl-3 {\n    padding-top: 12px !important;\n    padding-bottom: 12px !important;\n  }\n\n  .v-application .py-xl-4 {\n    padding-top: 16px !important;\n    padding-bottom: 16px !important;\n  }\n\n  .v-application .py-xl-5 {\n    padding-top: 20px !important;\n    padding-bottom: 20px !important;\n  }\n\n  .v-application .py-xl-6 {\n    padding-top: 24px !important;\n    padding-bottom: 24px !important;\n  }\n\n  .v-application .py-xl-7 {\n    padding-top: 28px !important;\n    padding-bottom: 28px !important;\n  }\n\n  .v-application .py-xl-8 {\n    padding-top: 32px !important;\n    padding-bottom: 32px !important;\n  }\n\n  .v-application .py-xl-9 {\n    padding-top: 36px !important;\n    padding-bottom: 36px !important;\n  }\n\n  .v-application .py-xl-10 {\n    padding-top: 40px !important;\n    padding-bottom: 40px !important;\n  }\n\n  .v-application .py-xl-11 {\n    padding-top: 44px !important;\n    padding-bottom: 44px !important;\n  }\n\n  .v-application .py-xl-12 {\n    padding-top: 48px !important;\n    padding-bottom: 48px !important;\n  }\n\n  .v-application .py-xl-13 {\n    padding-top: 52px !important;\n    padding-bottom: 52px !important;\n  }\n\n  .v-application .py-xl-14 {\n    padding-top: 56px !important;\n    padding-bottom: 56px !important;\n  }\n\n  .v-application .py-xl-15 {\n    padding-top: 60px !important;\n    padding-bottom: 60px !important;\n  }\n\n  .v-application .py-xl-16 {\n    padding-top: 64px !important;\n    padding-bottom: 64px !important;\n  }\n\n  .v-application .pt-xl-0 {\n    padding-top: 0px !important;\n  }\n\n  .v-application .pt-xl-1 {\n    padding-top: 4px !important;\n  }\n\n  .v-application .pt-xl-2 {\n    padding-top: 8px !important;\n  }\n\n  .v-application .pt-xl-3 {\n    padding-top: 12px !important;\n  }\n\n  .v-application .pt-xl-4 {\n    padding-top: 16px !important;\n  }\n\n  .v-application .pt-xl-5 {\n    padding-top: 20px !important;\n  }\n\n  .v-application .pt-xl-6 {\n    padding-top: 24px !important;\n  }\n\n  .v-application .pt-xl-7 {\n    padding-top: 28px !important;\n  }\n\n  .v-application .pt-xl-8 {\n    padding-top: 32px !important;\n  }\n\n  .v-application .pt-xl-9 {\n    padding-top: 36px !important;\n  }\n\n  .v-application .pt-xl-10 {\n    padding-top: 40px !important;\n  }\n\n  .v-application .pt-xl-11 {\n    padding-top: 44px !important;\n  }\n\n  .v-application .pt-xl-12 {\n    padding-top: 48px !important;\n  }\n\n  .v-application .pt-xl-13 {\n    padding-top: 52px !important;\n  }\n\n  .v-application .pt-xl-14 {\n    padding-top: 56px !important;\n  }\n\n  .v-application .pt-xl-15 {\n    padding-top: 60px !important;\n  }\n\n  .v-application .pt-xl-16 {\n    padding-top: 64px !important;\n  }\n\n  .v-application .pr-xl-0 {\n    padding-right: 0px !important;\n  }\n\n  .v-application .pr-xl-1 {\n    padding-right: 4px !important;\n  }\n\n  .v-application .pr-xl-2 {\n    padding-right: 8px !important;\n  }\n\n  .v-application .pr-xl-3 {\n    padding-right: 12px !important;\n  }\n\n  .v-application .pr-xl-4 {\n    padding-right: 16px !important;\n  }\n\n  .v-application .pr-xl-5 {\n    padding-right: 20px !important;\n  }\n\n  .v-application .pr-xl-6 {\n    padding-right: 24px !important;\n  }\n\n  .v-application .pr-xl-7 {\n    padding-right: 28px !important;\n  }\n\n  .v-application .pr-xl-8 {\n    padding-right: 32px !important;\n  }\n\n  .v-application .pr-xl-9 {\n    padding-right: 36px !important;\n  }\n\n  .v-application .pr-xl-10 {\n    padding-right: 40px !important;\n  }\n\n  .v-application .pr-xl-11 {\n    padding-right: 44px !important;\n  }\n\n  .v-application .pr-xl-12 {\n    padding-right: 48px !important;\n  }\n\n  .v-application .pr-xl-13 {\n    padding-right: 52px !important;\n  }\n\n  .v-application .pr-xl-14 {\n    padding-right: 56px !important;\n  }\n\n  .v-application .pr-xl-15 {\n    padding-right: 60px !important;\n  }\n\n  .v-application .pr-xl-16 {\n    padding-right: 64px !important;\n  }\n\n  .v-application .pb-xl-0 {\n    padding-bottom: 0px !important;\n  }\n\n  .v-application .pb-xl-1 {\n    padding-bottom: 4px !important;\n  }\n\n  .v-application .pb-xl-2 {\n    padding-bottom: 8px !important;\n  }\n\n  .v-application .pb-xl-3 {\n    padding-bottom: 12px !important;\n  }\n\n  .v-application .pb-xl-4 {\n    padding-bottom: 16px !important;\n  }\n\n  .v-application .pb-xl-5 {\n    padding-bottom: 20px !important;\n  }\n\n  .v-application .pb-xl-6 {\n    padding-bottom: 24px !important;\n  }\n\n  .v-application .pb-xl-7 {\n    padding-bottom: 28px !important;\n  }\n\n  .v-application .pb-xl-8 {\n    padding-bottom: 32px !important;\n  }\n\n  .v-application .pb-xl-9 {\n    padding-bottom: 36px !important;\n  }\n\n  .v-application .pb-xl-10 {\n    padding-bottom: 40px !important;\n  }\n\n  .v-application .pb-xl-11 {\n    padding-bottom: 44px !important;\n  }\n\n  .v-application .pb-xl-12 {\n    padding-bottom: 48px !important;\n  }\n\n  .v-application .pb-xl-13 {\n    padding-bottom: 52px !important;\n  }\n\n  .v-application .pb-xl-14 {\n    padding-bottom: 56px !important;\n  }\n\n  .v-application .pb-xl-15 {\n    padding-bottom: 60px !important;\n  }\n\n  .v-application .pb-xl-16 {\n    padding-bottom: 64px !important;\n  }\n\n  .v-application .pl-xl-0 {\n    padding-left: 0px !important;\n  }\n\n  .v-application .pl-xl-1 {\n    padding-left: 4px !important;\n  }\n\n  .v-application .pl-xl-2 {\n    padding-left: 8px !important;\n  }\n\n  .v-application .pl-xl-3 {\n    padding-left: 12px !important;\n  }\n\n  .v-application .pl-xl-4 {\n    padding-left: 16px !important;\n  }\n\n  .v-application .pl-xl-5 {\n    padding-left: 20px !important;\n  }\n\n  .v-application .pl-xl-6 {\n    padding-left: 24px !important;\n  }\n\n  .v-application .pl-xl-7 {\n    padding-left: 28px !important;\n  }\n\n  .v-application .pl-xl-8 {\n    padding-left: 32px !important;\n  }\n\n  .v-application .pl-xl-9 {\n    padding-left: 36px !important;\n  }\n\n  .v-application .pl-xl-10 {\n    padding-left: 40px !important;\n  }\n\n  .v-application .pl-xl-11 {\n    padding-left: 44px !important;\n  }\n\n  .v-application .pl-xl-12 {\n    padding-left: 48px !important;\n  }\n\n  .v-application .pl-xl-13 {\n    padding-left: 52px !important;\n  }\n\n  .v-application .pl-xl-14 {\n    padding-left: 56px !important;\n  }\n\n  .v-application .pl-xl-15 {\n    padding-left: 60px !important;\n  }\n\n  .v-application .pl-xl-16 {\n    padding-left: 64px !important;\n  }\n\n  .v-application--is-ltr .ps-xl-0 {\n    padding-left: 0px !important;\n  }\n\n  .v-application--is-rtl .ps-xl-0 {\n    padding-right: 0px !important;\n  }\n\n  .v-application--is-ltr .ps-xl-1 {\n    padding-left: 4px !important;\n  }\n\n  .v-application--is-rtl .ps-xl-1 {\n    padding-right: 4px !important;\n  }\n\n  .v-application--is-ltr .ps-xl-2 {\n    padding-left: 8px !important;\n  }\n\n  .v-application--is-rtl .ps-xl-2 {\n    padding-right: 8px !important;\n  }\n\n  .v-application--is-ltr .ps-xl-3 {\n    padding-left: 12px !important;\n  }\n\n  .v-application--is-rtl .ps-xl-3 {\n    padding-right: 12px !important;\n  }\n\n  .v-application--is-ltr .ps-xl-4 {\n    padding-left: 16px !important;\n  }\n\n  .v-application--is-rtl .ps-xl-4 {\n    padding-right: 16px !important;\n  }\n\n  .v-application--is-ltr .ps-xl-5 {\n    padding-left: 20px !important;\n  }\n\n  .v-application--is-rtl .ps-xl-5 {\n    padding-right: 20px !important;\n  }\n\n  .v-application--is-ltr .ps-xl-6 {\n    padding-left: 24px !important;\n  }\n\n  .v-application--is-rtl .ps-xl-6 {\n    padding-right: 24px !important;\n  }\n\n  .v-application--is-ltr .ps-xl-7 {\n    padding-left: 28px !important;\n  }\n\n  .v-application--is-rtl .ps-xl-7 {\n    padding-right: 28px !important;\n  }\n\n  .v-application--is-ltr .ps-xl-8 {\n    padding-left: 32px !important;\n  }\n\n  .v-application--is-rtl .ps-xl-8 {\n    padding-right: 32px !important;\n  }\n\n  .v-application--is-ltr .ps-xl-9 {\n    padding-left: 36px !important;\n  }\n\n  .v-application--is-rtl .ps-xl-9 {\n    padding-right: 36px !important;\n  }\n\n  .v-application--is-ltr .ps-xl-10 {\n    padding-left: 40px !important;\n  }\n\n  .v-application--is-rtl .ps-xl-10 {\n    padding-right: 40px !important;\n  }\n\n  .v-application--is-ltr .ps-xl-11 {\n    padding-left: 44px !important;\n  }\n\n  .v-application--is-rtl .ps-xl-11 {\n    padding-right: 44px !important;\n  }\n\n  .v-application--is-ltr .ps-xl-12 {\n    padding-left: 48px !important;\n  }\n\n  .v-application--is-rtl .ps-xl-12 {\n    padding-right: 48px !important;\n  }\n\n  .v-application--is-ltr .ps-xl-13 {\n    padding-left: 52px !important;\n  }\n\n  .v-application--is-rtl .ps-xl-13 {\n    padding-right: 52px !important;\n  }\n\n  .v-application--is-ltr .ps-xl-14 {\n    padding-left: 56px !important;\n  }\n\n  .v-application--is-rtl .ps-xl-14 {\n    padding-right: 56px !important;\n  }\n\n  .v-application--is-ltr .ps-xl-15 {\n    padding-left: 60px !important;\n  }\n\n  .v-application--is-rtl .ps-xl-15 {\n    padding-right: 60px !important;\n  }\n\n  .v-application--is-ltr .ps-xl-16 {\n    padding-left: 64px !important;\n  }\n\n  .v-application--is-rtl .ps-xl-16 {\n    padding-right: 64px !important;\n  }\n\n  .v-application--is-ltr .pe-xl-0 {\n    padding-right: 0px !important;\n  }\n\n  .v-application--is-rtl .pe-xl-0 {\n    padding-left: 0px !important;\n  }\n\n  .v-application--is-ltr .pe-xl-1 {\n    padding-right: 4px !important;\n  }\n\n  .v-application--is-rtl .pe-xl-1 {\n    padding-left: 4px !important;\n  }\n\n  .v-application--is-ltr .pe-xl-2 {\n    padding-right: 8px !important;\n  }\n\n  .v-application--is-rtl .pe-xl-2 {\n    padding-left: 8px !important;\n  }\n\n  .v-application--is-ltr .pe-xl-3 {\n    padding-right: 12px !important;\n  }\n\n  .v-application--is-rtl .pe-xl-3 {\n    padding-left: 12px !important;\n  }\n\n  .v-application--is-ltr .pe-xl-4 {\n    padding-right: 16px !important;\n  }\n\n  .v-application--is-rtl .pe-xl-4 {\n    padding-left: 16px !important;\n  }\n\n  .v-application--is-ltr .pe-xl-5 {\n    padding-right: 20px !important;\n  }\n\n  .v-application--is-rtl .pe-xl-5 {\n    padding-left: 20px !important;\n  }\n\n  .v-application--is-ltr .pe-xl-6 {\n    padding-right: 24px !important;\n  }\n\n  .v-application--is-rtl .pe-xl-6 {\n    padding-left: 24px !important;\n  }\n\n  .v-application--is-ltr .pe-xl-7 {\n    padding-right: 28px !important;\n  }\n\n  .v-application--is-rtl .pe-xl-7 {\n    padding-left: 28px !important;\n  }\n\n  .v-application--is-ltr .pe-xl-8 {\n    padding-right: 32px !important;\n  }\n\n  .v-application--is-rtl .pe-xl-8 {\n    padding-left: 32px !important;\n  }\n\n  .v-application--is-ltr .pe-xl-9 {\n    padding-right: 36px !important;\n  }\n\n  .v-application--is-rtl .pe-xl-9 {\n    padding-left: 36px !important;\n  }\n\n  .v-application--is-ltr .pe-xl-10 {\n    padding-right: 40px !important;\n  }\n\n  .v-application--is-rtl .pe-xl-10 {\n    padding-left: 40px !important;\n  }\n\n  .v-application--is-ltr .pe-xl-11 {\n    padding-right: 44px !important;\n  }\n\n  .v-application--is-rtl .pe-xl-11 {\n    padding-left: 44px !important;\n  }\n\n  .v-application--is-ltr .pe-xl-12 {\n    padding-right: 48px !important;\n  }\n\n  .v-application--is-rtl .pe-xl-12 {\n    padding-left: 48px !important;\n  }\n\n  .v-application--is-ltr .pe-xl-13 {\n    padding-right: 52px !important;\n  }\n\n  .v-application--is-rtl .pe-xl-13 {\n    padding-left: 52px !important;\n  }\n\n  .v-application--is-ltr .pe-xl-14 {\n    padding-right: 56px !important;\n  }\n\n  .v-application--is-rtl .pe-xl-14 {\n    padding-left: 56px !important;\n  }\n\n  .v-application--is-ltr .pe-xl-15 {\n    padding-right: 60px !important;\n  }\n\n  .v-application--is-rtl .pe-xl-15 {\n    padding-left: 60px !important;\n  }\n\n  .v-application--is-ltr .pe-xl-16 {\n    padding-right: 64px !important;\n  }\n\n  .v-application--is-rtl .pe-xl-16 {\n    padding-left: 64px !important;\n  }\n\n  .v-application .text-xl-left {\n    text-align: left !important;\n  }\n\n  .v-application .text-xl-right {\n    text-align: right !important;\n  }\n\n  .v-application .text-xl-center {\n    text-align: center !important;\n  }\n\n  .v-application .text-xl-justify {\n    text-align: justify !important;\n  }\n\n  .v-application .text-xl-start {\n    text-align: start !important;\n  }\n\n  .v-application .text-xl-end {\n    text-align: end !important;\n  }\n\n  .v-application .text-xl-h1 {\n    font-size: 6rem !important;\n    font-weight: 300;\n    line-height: 6rem;\n    letter-spacing: -0.015625em !important;\n    font-family: \"Roboto\", sans-serif !important;\n  }\n\n  .v-application .text-xl-h2 {\n    font-size: 3.75rem !important;\n    font-weight: 300;\n    line-height: 3.75rem;\n    letter-spacing: -0.0083333333em !important;\n    font-family: \"Roboto\", sans-serif !important;\n  }\n\n  .v-application .text-xl-h3 {\n    font-size: 3rem !important;\n    font-weight: 400;\n    line-height: 3.125rem;\n    letter-spacing: normal !important;\n    font-family: \"Roboto\", sans-serif !important;\n  }\n\n  .v-application .text-xl-h4 {\n    font-size: 2.125rem !important;\n    font-weight: 400;\n    line-height: 2.5rem;\n    letter-spacing: 0.0073529412em !important;\n    font-family: \"Roboto\", sans-serif !important;\n  }\n\n  .v-application .text-xl-h5 {\n    font-size: 1.5rem !important;\n    font-weight: 400;\n    line-height: 2rem;\n    letter-spacing: normal !important;\n    font-family: \"Roboto\", sans-serif !important;\n  }\n\n  .v-application .text-xl-h6 {\n    font-size: 1.25rem !important;\n    font-weight: 500;\n    line-height: 2rem;\n    letter-spacing: 0.0125em !important;\n    font-family: \"Roboto\", sans-serif !important;\n  }\n\n  .v-application .text-xl-subtitle-1 {\n    font-size: 1rem !important;\n    font-weight: normal;\n    line-height: 1.75rem;\n    letter-spacing: 0.009375em !important;\n    font-family: \"Roboto\", sans-serif !important;\n  }\n\n  .v-application .text-xl-subtitle-2 {\n    font-size: 0.875rem !important;\n    font-weight: 500;\n    line-height: 1.375rem;\n    letter-spacing: 0.0071428571em !important;\n    font-family: \"Roboto\", sans-serif !important;\n  }\n\n  .v-application .text-xl-body-1 {\n    font-size: 1rem !important;\n    font-weight: 400;\n    line-height: 1.5rem;\n    letter-spacing: 0.03125em !important;\n    font-family: \"Roboto\", sans-serif !important;\n  }\n\n  .v-application .text-xl-body-2 {\n    font-size: 0.875rem !important;\n    font-weight: 400;\n    line-height: 1.25rem;\n    letter-spacing: 0.0178571429em !important;\n    font-family: \"Roboto\", sans-serif !important;\n  }\n\n  .v-application .text-xl-button {\n    font-size: 0.875rem !important;\n    font-weight: 500;\n    line-height: 2.25rem;\n    letter-spacing: 0.0892857143em !important;\n    font-family: \"Roboto\", sans-serif !important;\n    text-transform: uppercase !important;\n  }\n\n  .v-application .text-xl-caption {\n    font-size: 0.75rem !important;\n    font-weight: 400;\n    line-height: 1.25rem;\n    letter-spacing: 0.0333333333em !important;\n    font-family: \"Roboto\", sans-serif !important;\n  }\n\n  .v-application .text-xl-overline {\n    font-size: 0.75rem !important;\n    font-weight: 500;\n    line-height: 2rem;\n    letter-spacing: 0.1666666667em !important;\n    font-family: \"Roboto\", sans-serif !important;\n    text-transform: uppercase !important;\n  }\n}\n@media print {\n  .v-application .d-print-none {\n    display: none !important;\n  }\n\n  .v-application .d-print-inline {\n    display: inline !important;\n  }\n\n  .v-application .d-print-inline-block {\n    display: inline-block !important;\n  }\n\n  .v-application .d-print-block {\n    display: block !important;\n  }\n\n  .v-application .d-print-table {\n    display: table !important;\n  }\n\n  .v-application .d-print-table-row {\n    display: table-row !important;\n  }\n\n  .v-application .d-print-table-cell {\n    display: table-cell !important;\n  }\n\n  .v-application .d-print-flex {\n    display: flex !important;\n  }\n\n  .v-application .d-print-inline-flex {\n    display: inline-flex !important;\n  }\n\n  .v-application .float-print-none {\n    float: none !important;\n  }\n\n  .v-application .float-print-left {\n    float: left !important;\n  }\n\n  .v-application .float-print-right {\n    float: right !important;\n  }\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesClient.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/addStylesClient.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ "./node_modules/vue-style-loader/lib/listToStyles.js");
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/lib/listToStyles.js":
/*!***********************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/listToStyles.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listToStyles; });
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ "./node_modules/vuetify-loader/lib/runtime/installComponents.js":
/*!**********************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/runtime/installComponents.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function installComponents (component, components) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }
}


/***/ }),

/***/ "./node_modules/vuetify/lib/components/VSheet/VSheet.js":
/*!**************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VSheet/VSheet.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_components_VSheet_VSheet_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/components/VSheet/VSheet.sass */ "./node_modules/vuetify/src/components/VSheet/VSheet.sass");
/* harmony import */ var _src_components_VSheet_VSheet_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VSheet_VSheet_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins_binds_attrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixins/binds-attrs */ "./node_modules/vuetify/lib/mixins/binds-attrs/index.js");
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/colorable */ "./node_modules/vuetify/lib/mixins/colorable/index.js");
/* harmony import */ var _mixins_elevatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mixins/elevatable */ "./node_modules/vuetify/lib/mixins/elevatable/index.js");
/* harmony import */ var _mixins_measurable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../mixins/measurable */ "./node_modules/vuetify/lib/mixins/measurable/index.js");
/* harmony import */ var _mixins_roundable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../mixins/roundable */ "./node_modules/vuetify/lib/mixins/roundable/index.js");
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../mixins/themeable */ "./node_modules/vuetify/lib/mixins/themeable/index.js");
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../util/mixins */ "./node_modules/vuetify/lib/util/mixins.js");
// Styles
 // Mixins






 // Helpers


/* @vue/component */

/* harmony default export */ __webpack_exports__["default"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_7__["default"])(_mixins_binds_attrs__WEBPACK_IMPORTED_MODULE_1__["default"], _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__["default"], _mixins_elevatable__WEBPACK_IMPORTED_MODULE_3__["default"], _mixins_measurable__WEBPACK_IMPORTED_MODULE_4__["default"], _mixins_roundable__WEBPACK_IMPORTED_MODULE_5__["default"], _mixins_themeable__WEBPACK_IMPORTED_MODULE_6__["default"]).extend({
  name: 'v-sheet',
  props: {
    outlined: Boolean,
    shaped: Boolean,
    tag: {
      type: String,
      default: 'div'
    }
  },
  computed: {
    classes() {
      return {
        'v-sheet': true,
        'v-sheet--outlined': this.outlined,
        'v-sheet--shaped': this.shaped,
        ...this.themeClasses,
        ...this.elevationClasses,
        ...this.roundedClasses
      };
    },

    styles() {
      return this.measurableStyles;
    }

  },

  render(h) {
    const data = {
      class: this.classes,
      style: this.styles,
      on: this.listeners$
    };
    return h(this.tag, this.setBackgroundColor(this.color, data), this.$slots.default);
  }

}));
//# sourceMappingURL=VSheet.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VSheet/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VSheet/index.js ***!
  \*************************************************************/
/*! exports provided: VSheet, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VSheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VSheet */ "./node_modules/vuetify/lib/components/VSheet/VSheet.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VSheet", function() { return _VSheet__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/* harmony default export */ __webpack_exports__["default"] = (_VSheet__WEBPACK_IMPORTED_MODULE_0__["default"]);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/directives/ripple/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/vuetify/lib/directives/ripple/index.js ***!
  \*************************************************************/
/*! exports provided: Ripple, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ripple", function() { return Ripple; });
/* harmony import */ var _src_directives_ripple_VRipple_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/directives/ripple/VRipple.sass */ "./node_modules/vuetify/src/directives/ripple/VRipple.sass");
/* harmony import */ var _src_directives_ripple_VRipple_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_directives_ripple_VRipple_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/console */ "./node_modules/vuetify/lib/util/console.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/helpers */ "./node_modules/vuetify/lib/util/helpers.js");
// Styles
 // Utilities



const DELAY_RIPPLE = 80;

function transform(el, value) {
  el.style.transform = value;
  el.style.webkitTransform = value;
}

function opacity(el, value) {
  el.style.opacity = value.toString();
}

function isTouchEvent(e) {
  return e.constructor.name === 'TouchEvent';
}

function isKeyboardEvent(e) {
  return e.constructor.name === 'KeyboardEvent';
}

const calculate = (e, el, value = {}) => {
  let localX = 0;
  let localY = 0;

  if (!isKeyboardEvent(e)) {
    const offset = el.getBoundingClientRect();
    const target = isTouchEvent(e) ? e.touches[e.touches.length - 1] : e;
    localX = target.clientX - offset.left;
    localY = target.clientY - offset.top;
  }

  let radius = 0;
  let scale = 0.3;

  if (el._ripple && el._ripple.circle) {
    scale = 0.15;
    radius = el.clientWidth / 2;
    radius = value.center ? radius : radius + Math.sqrt((localX - radius) ** 2 + (localY - radius) ** 2) / 4;
  } else {
    radius = Math.sqrt(el.clientWidth ** 2 + el.clientHeight ** 2) / 2;
  }

  const centerX = `${(el.clientWidth - radius * 2) / 2}px`;
  const centerY = `${(el.clientHeight - radius * 2) / 2}px`;
  const x = value.center ? centerX : `${localX - radius}px`;
  const y = value.center ? centerY : `${localY - radius}px`;
  return {
    radius,
    scale,
    x,
    y,
    centerX,
    centerY
  };
};

const ripples = {
  /* eslint-disable max-statements */
  show(e, el, value = {}) {
    if (!el._ripple || !el._ripple.enabled) {
      return;
    }

    const container = document.createElement('span');
    const animation = document.createElement('span');
    container.appendChild(animation);
    container.className = 'v-ripple__container';

    if (value.class) {
      container.className += ` ${value.class}`;
    }

    const {
      radius,
      scale,
      x,
      y,
      centerX,
      centerY
    } = calculate(e, el, value);
    const size = `${radius * 2}px`;
    animation.className = 'v-ripple__animation';
    animation.style.width = size;
    animation.style.height = size;
    el.appendChild(container);
    const computed = window.getComputedStyle(el);

    if (computed && computed.position === 'static') {
      el.style.position = 'relative';
      el.dataset.previousPosition = 'static';
    }

    animation.classList.add('v-ripple__animation--enter');
    animation.classList.add('v-ripple__animation--visible');
    transform(animation, `translate(${x}, ${y}) scale3d(${scale},${scale},${scale})`);
    opacity(animation, 0);
    animation.dataset.activated = String(performance.now());
    setTimeout(() => {
      animation.classList.remove('v-ripple__animation--enter');
      animation.classList.add('v-ripple__animation--in');
      transform(animation, `translate(${centerX}, ${centerY}) scale3d(1,1,1)`);
      opacity(animation, 0.25);
    }, 0);
  },

  hide(el) {
    if (!el || !el._ripple || !el._ripple.enabled) return;
    const ripples = el.getElementsByClassName('v-ripple__animation');
    if (ripples.length === 0) return;
    const animation = ripples[ripples.length - 1];
    if (animation.dataset.isHiding) return;else animation.dataset.isHiding = 'true';
    const diff = performance.now() - Number(animation.dataset.activated);
    const delay = Math.max(250 - diff, 0);
    setTimeout(() => {
      animation.classList.remove('v-ripple__animation--in');
      animation.classList.add('v-ripple__animation--out');
      opacity(animation, 0);
      setTimeout(() => {
        const ripples = el.getElementsByClassName('v-ripple__animation');

        if (ripples.length === 1 && el.dataset.previousPosition) {
          el.style.position = el.dataset.previousPosition;
          delete el.dataset.previousPosition;
        }

        animation.parentNode && el.removeChild(animation.parentNode);
      }, 300);
    }, delay);
  }

};

function isRippleEnabled(value) {
  return typeof value === 'undefined' || !!value;
}

function rippleShow(e) {
  const value = {};
  const element = e.currentTarget;
  if (!element || !element._ripple || element._ripple.touched) return;

  if (isTouchEvent(e)) {
    element._ripple.touched = true;
    element._ripple.isTouch = true;
  } else {
    // It's possible for touch events to fire
    // as mouse events on Android/iOS, this
    // will skip the event call if it has
    // already been registered as touch
    if (element._ripple.isTouch) return;
  }

  value.center = element._ripple.centered || isKeyboardEvent(e);

  if (element._ripple.class) {
    value.class = element._ripple.class;
  }

  if (isTouchEvent(e)) {
    // already queued that shows or hides the ripple
    if (element._ripple.showTimerCommit) return;

    element._ripple.showTimerCommit = () => {
      ripples.show(e, element, value);
    };

    element._ripple.showTimer = window.setTimeout(() => {
      if (element && element._ripple && element._ripple.showTimerCommit) {
        element._ripple.showTimerCommit();

        element._ripple.showTimerCommit = null;
      }
    }, DELAY_RIPPLE);
  } else {
    ripples.show(e, element, value);
  }
}

function rippleHide(e) {
  const element = e.currentTarget;
  if (!element || !element._ripple) return;
  window.clearTimeout(element._ripple.showTimer); // The touch interaction occurs before the show timer is triggered.
  // We still want to show ripple effect.

  if (e.type === 'touchend' && element._ripple.showTimerCommit) {
    element._ripple.showTimerCommit();

    element._ripple.showTimerCommit = null; // re-queue ripple hiding

    element._ripple.showTimer = setTimeout(() => {
      rippleHide(e);
    });
    return;
  }

  window.setTimeout(() => {
    if (element._ripple) {
      element._ripple.touched = false;
    }
  });
  ripples.hide(element);
}

function rippleCancelShow(e) {
  const element = e.currentTarget;
  if (!element || !element._ripple) return;

  if (element._ripple.showTimerCommit) {
    element._ripple.showTimerCommit = null;
  }

  window.clearTimeout(element._ripple.showTimer);
}

let keyboardRipple = false;

function keyboardRippleShow(e) {
  if (!keyboardRipple && (e.keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_2__["keyCodes"].enter || e.keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_2__["keyCodes"].space)) {
    keyboardRipple = true;
    rippleShow(e);
  }
}

function keyboardRippleHide(e) {
  keyboardRipple = false;
  rippleHide(e);
}

function updateRipple(el, binding, wasEnabled) {
  const enabled = isRippleEnabled(binding.value);

  if (!enabled) {
    ripples.hide(el);
  }

  el._ripple = el._ripple || {};
  el._ripple.enabled = enabled;
  const value = binding.value || {};

  if (value.center) {
    el._ripple.centered = true;
  }

  if (value.class) {
    el._ripple.class = binding.value.class;
  }

  if (value.circle) {
    el._ripple.circle = value.circle;
  }

  if (enabled && !wasEnabled) {
    el.addEventListener('touchstart', rippleShow, {
      passive: true
    });
    el.addEventListener('touchend', rippleHide, {
      passive: true
    });
    el.addEventListener('touchmove', rippleCancelShow, {
      passive: true
    });
    el.addEventListener('touchcancel', rippleHide);
    el.addEventListener('mousedown', rippleShow);
    el.addEventListener('mouseup', rippleHide);
    el.addEventListener('mouseleave', rippleHide);
    el.addEventListener('keydown', keyboardRippleShow);
    el.addEventListener('keyup', keyboardRippleHide); // Anchor tags can be dragged, causes other hides to fail - #1537

    el.addEventListener('dragstart', rippleHide, {
      passive: true
    });
  } else if (!enabled && wasEnabled) {
    removeListeners(el);
  }
}

function removeListeners(el) {
  el.removeEventListener('mousedown', rippleShow);
  el.removeEventListener('touchstart', rippleShow);
  el.removeEventListener('touchend', rippleHide);
  el.removeEventListener('touchmove', rippleCancelShow);
  el.removeEventListener('touchcancel', rippleHide);
  el.removeEventListener('mouseup', rippleHide);
  el.removeEventListener('mouseleave', rippleHide);
  el.removeEventListener('keydown', keyboardRippleShow);
  el.removeEventListener('keyup', keyboardRippleHide);
  el.removeEventListener('dragstart', rippleHide);
}

function directive(el, binding, node) {
  updateRipple(el, binding, false);

  if (true) {
    // warn if an inline element is used, waiting for el to be in the DOM first
    node.context && node.context.$nextTick(() => {
      const computed = window.getComputedStyle(el);

      if (computed && computed.display === 'inline') {
        const context = node.fnOptions ? [node.fnOptions, node.context] : [node.componentInstance];
        Object(_util_console__WEBPACK_IMPORTED_MODULE_1__["consoleWarn"])('v-ripple can only be used on block-level elements', ...context);
      }
    });
  }
}

function unbind(el) {
  delete el._ripple;
  removeListeners(el);
}

function update(el, binding) {
  if (binding.value === binding.oldValue) {
    return;
  }

  const wasEnabled = isRippleEnabled(binding.oldValue);
  updateRipple(el, binding, wasEnabled);
}

const Ripple = {
  bind: directive,
  unbind,
  update
};
/* harmony default export */ __webpack_exports__["default"] = (Ripple);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/framework.js":
/*!***********************************************!*\
  !*** ./node_modules/vuetify/lib/framework.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Vuetify; });
/* harmony import */ var _install__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./install */ "./node_modules/vuetify/lib/install.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ "./node_modules/vuetify/lib/services/index.js");
 // Services


class Vuetify {
  constructor(userPreset = {}) {
    this.framework = {
      isHydrating: false
    };
    this.installed = [];
    this.preset = {};
    this.userPreset = {};
    this.userPreset = userPreset;
    this.use(_services__WEBPACK_IMPORTED_MODULE_1__["Presets"]);
    this.use(_services__WEBPACK_IMPORTED_MODULE_1__["Application"]);
    this.use(_services__WEBPACK_IMPORTED_MODULE_1__["Breakpoint"]);
    this.use(_services__WEBPACK_IMPORTED_MODULE_1__["Goto"]);
    this.use(_services__WEBPACK_IMPORTED_MODULE_1__["Icons"]);
    this.use(_services__WEBPACK_IMPORTED_MODULE_1__["Lang"]);
    this.use(_services__WEBPACK_IMPORTED_MODULE_1__["Theme"]);
  } // Called on the new vuetify instance
  // bootstrap in install beforeCreate
  // Exposes ssrContext if available


  init(root, ssrContext) {
    this.installed.forEach(property => {
      const service = this.framework[property];
      service.framework = this.framework;
      service.init(root, ssrContext);
    }); // rtl is not installed and
    // will never be called by
    // the init process

    this.framework.rtl = Boolean(this.preset.rtl);
  } // Instantiate a VuetifyService


  use(Service) {
    const property = Service.property;
    if (this.installed.includes(property)) return; // TODO maybe a specific type for arg 2?

    this.framework[property] = new Service(this.preset, this);
    this.installed.push(property);
  }

}
Vuetify.install = _install__WEBPACK_IMPORTED_MODULE_0__["install"];
Vuetify.installed = false;
Vuetify.version = "2.3.16";
Vuetify.config = {
  silent: false
};
//# sourceMappingURL=framework.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/install.js":
/*!*********************************************!*\
  !*** ./node_modules/vuetify/lib/install.js ***!
  \*********************************************/
/*! exports provided: install */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/console */ "./node_modules/vuetify/lib/util/console.js");


function install(Vue, args = {}) {
  if (install.installed) return;
  install.installed = true;

  if (vue__WEBPACK_IMPORTED_MODULE_0___default.a !== Vue) {
    Object(_util_console__WEBPACK_IMPORTED_MODULE_1__["consoleError"])(`Multiple instances of Vue detected
See https://github.com/vuetifyjs/vuetify/issues/4068

If you're seeing "$attrs is readonly", it's caused by this`);
  }

  const components = args.components || {};
  const directives = args.directives || {};

  for (const name in directives) {
    const directive = directives[name];
    Vue.directive(name, directive);
  }

  (function registerComponents(components) {
    if (components) {
      for (const key in components) {
        const component = components[key];

        if (component && !registerComponents(component.$_vuetify_subcomponents)) {
          Vue.component(key, component);
        }
      }

      return true;
    }

    return false;
  })(components); // Used to avoid multiple mixins being setup
  // when in dev mode and hot module reload
  // https://github.com/vuejs/vue/issues/5089#issuecomment-284260111


  if (Vue.$_vuetify_installed) return;
  Vue.$_vuetify_installed = true;
  Vue.mixin({
    beforeCreate() {
      const options = this.$options;

      if (options.vuetify) {
        options.vuetify.init(this, this.$ssrContext);
        this.$vuetify = Vue.observable(options.vuetify.framework);
      } else {
        this.$vuetify = options.parent && options.parent.$vuetify || this;
      }
    },

    beforeMount() {
      // @ts-ignore
      if (this.$options.vuetify && this.$el && this.$el.hasAttribute('data-server-rendered')) {
        // @ts-ignore
        this.$vuetify.isHydrating = true; // @ts-ignore

        this.$vuetify.breakpoint.update(true);
      }
    },

    mounted() {
      // @ts-ignore
      if (this.$options.vuetify && this.$vuetify.isHydrating) {
        // @ts-ignore
        this.$vuetify.isHydrating = false; // @ts-ignore

        this.$vuetify.breakpoint.update();
      }
    }

  });
}
//# sourceMappingURL=install.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/locale/af.js":
/*!***********************************************!*\
  !*** ./node_modules/vuetify/lib/locale/af.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  badge: 'badge',
  close: 'Close',
  dataIterator: {
    noResultsText: 'Geen ooreenstemmende resultate is gevind nie',
    loadingText: 'Loading item...'
  },
  dataTable: {
    itemsPerPageText: 'Rye per bladsy:',
    ariaLabel: {
      sortDescending: 'Sorted descending.',
      sortAscending: 'Sorted ascending..',
      sortNone: 'Not sorted.',
      activateNone: 'Activate to remove sorting.',
      activateDescending: 'Activate to sort descending.',
      activateAscending: 'Activate to sort ascending.'
    },
    sortBy: 'Sort by'
  },
  dataFooter: {
    itemsPerPageText: 'Aantal per bladsy:',
    itemsPerPageAll: 'Alles',
    nextPage: 'Volgende bladsy',
    prevPage: 'Vorige bladsy',
    firstPage: 'Eerste bladsy',
    lastPage: 'Laaste bladsy',
    pageText: '{0}-{1} van {2}'
  },
  datePicker: {
    itemsSelected: '{0} gekies',
    nextMonthAriaLabel: 'Volgende maand',
    nextYearAriaLabel: 'Volgende jaar',
    prevMonthAriaLabel: 'Vorige maand',
    prevYearAriaLabel: 'Vorige jaar'
  },
  noDataText: 'Geen data is beskikbaar nie',
  carousel: {
    prev: 'Vorige visuele',
    next: 'Volgende visuele',
    ariaLabel: {
      delimiter: 'Carousel slide {0} of {1}'
    }
  },
  calendar: {
    moreEvents: '{0} meer'
  },
  fileInput: {
    counter: '{0} files',
    counterSize: '{0} files ({1} in total)'
  },
  timePicker: {
    am: 'AM',
    pm: 'PM'
  },
  pagination: {
    ariaLabel: {
      wrapper: 'Paginasie-navigasie',
      next: 'Volgende bladsy',
      previous: 'Vorige bladsy',
      page: 'Gaan na bladsy {0}',
      currentPage: 'Huidige bladsy, Bladsy {0}'
    }
  }
});
//# sourceMappingURL=af.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/locale/ar.js":
/*!***********************************************!*\
  !*** ./node_modules/vuetify/lib/locale/ar.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  badge: 'شارة',
  close: 'إغلاق',
  dataIterator: {
    noResultsText: 'لا توجد سجلات مطابقة',
    loadingText: 'تحميل العنصر...'
  },
  dataTable: {
    itemsPerPageText: 'الصفوف لكل صفحة:',
    ariaLabel: {
      sortDescending: 'مفروز تنازلي. تنشيط لإزالة الفرز.',
      sortAscending: 'مفروز تصاعدي. تنشيط للفرز التنازلي.',
      sortNone: 'غير مفروزة. تفعيل لفرز تصاعدي.',
      activateNone: 'Activate to remove sorting.',
      activateDescending: 'Activate to sort descending.',
      activateAscending: 'Activate to sort ascending.'
    },
    sortBy: 'مفروزة حسب'
  },
  dataFooter: {
    itemsPerPageText: 'العناصر لكل صفحة:',
    itemsPerPageAll: 'الكل',
    nextPage: 'الصفحة التالية',
    prevPage: 'الصفحة السابقة',
    firstPage: 'الصفحة الأولى',
    lastPage: 'الصفحة الأخيرة',
    pageText: '{0}-{1} من {2}'
  },
  datePicker: {
    itemsSelected: '{0} مختارة',
    nextMonthAriaLabel: 'الشهر القادم',
    nextYearAriaLabel: 'العام القادم',
    prevMonthAriaLabel: 'الشهر الماضى',
    prevYearAriaLabel: 'السنة الماضية'
  },
  noDataText: 'لا توجد بيانات متاحة',
  carousel: {
    prev: 'البصري السابق',
    next: 'البصري التالي',
    ariaLabel: {
      delimiter: 'Carousel slide {0} of {1}'
    }
  },
  calendar: {
    moreEvents: '{0} أكثر'
  },
  fileInput: {
    counter: '{0} ملفات',
    counterSize: '{0} ملفات ({1} في المجموع)'
  },
  timePicker: {
    am: 'صباحاً',
    pm: 'مساءً'
  },
  pagination: {
    ariaLabel: {
      wrapper: 'ترقيم الصفحات الملاحة',
      next: 'الصفحة التالية',
      previous: 'الصفحة السابقة',
      page: '{0} انتقل إلى صفحة',
      currentPage: '{0} الصفحة الحالية ، الصفحة'
    }
  }
});
//# sourceMappingURL=ar.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/locale/ca.js":
/*!***********************************************!*\
  !*** ./node_modules/vuetify/lib/locale/ca.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  badge: 'Insígnia',
  close: 'Tancar',
  dataIterator: {
    noResultsText: 'Sense dades per mostrar',
    loadingText: 'Carregant...'
  },
  dataTable: {
    itemsPerPageText: 'Files per pàgina:',
    ariaLabel: {
      sortDescending: 'Ordre descendent. Premi per treure la ordenació.',
      sortAscending: 'Ordre ascendent. Premi per ordenar descendent.',
      sortNone: 'Sense ordenar. Premi per ordenar ascendent.',
      activateNone: 'Activate to remove sorting.',
      activateDescending: 'Activate to sort descending.',
      activateAscending: 'Activate to sort ascending.'
    },
    sortBy: 'Ordenat per'
  },
  dataFooter: {
    itemsPerPageText: 'Elements per pàgina:',
    itemsPerPageAll: 'Tot',
    nextPage: 'Pàgina següent',
    prevPage: 'Pàgina anterior',
    firstPage: 'Primera pàgina',
    lastPage: 'Última pàgina',
    pageText: '{0}-{1} de {2}'
  },
  datePicker: {
    itemsSelected: '{0} seleccionats',
    nextMonthAriaLabel: 'El mes que ve',
    nextYearAriaLabel: `L'any que ve`,
    prevMonthAriaLabel: 'Mes anterior',
    prevYearAriaLabel: 'Any anterior'
  },
  noDataText: 'Sense dades',
  carousel: {
    prev: 'Visualització prèvia',
    next: 'Visualització següent',
    ariaLabel: {
      delimiter: 'Diapositiva {0} of {1}'
    }
  },
  calendar: {
    moreEvents: '{0} més'
  },
  fileInput: {
    counter: '{0} fitxers',
    counterSize: '{0} fitxers ({1} en total)'
  },
  timePicker: {
    am: 'AM',
    pm: 'PM'
  },
  pagination: {
    ariaLabel: {
      wrapper: 'Navegació de la pàgina',
      next: 'Pàgina següent',
      previous: 'Pàgina anterior',
      page: 'Ves a la pàgina {0}',
      currentPage: 'Pàgina actual, pàgina {0}'
    }
  }
});
//# sourceMappingURL=ca.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/locale/cs.js":
/*!***********************************************!*\
  !*** ./node_modules/vuetify/lib/locale/cs.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  badge: 'Odznak',
  close: 'Zavřít',
  dataIterator: {
    noResultsText: 'Nenalezeny žádné záznamy',
    loadingText: 'Načítám položky...'
  },
  dataTable: {
    itemsPerPageText: 'Řádků na stránku:',
    ariaLabel: {
      sortDescending: 'Řazeno sestupně.',
      sortAscending: 'Řazeno vzestupně.',
      sortNone: 'Neseřazeno.',
      activateNone: 'Aktivováním vypnete řazení.',
      activateDescending: 'Aktivováním se bude řadit sestupně.',
      activateAscending: 'Aktivováním se bude řadit vzestupně.'
    },
    sortBy: 'Řadit dle'
  },
  dataFooter: {
    itemsPerPageText: 'Položek na stránku:',
    itemsPerPageAll: 'Vše',
    nextPage: 'Další strana',
    prevPage: 'Předchozí strana',
    firstPage: 'První strana',
    lastPage: 'Poslední strana',
    pageText: '{0}-{1} z {2}'
  },
  datePicker: {
    itemsSelected: '{0} vybráno',
    nextMonthAriaLabel: 'Příští měsíc',
    nextYearAriaLabel: 'Příští rok',
    prevMonthAriaLabel: 'Předchozí měsíc',
    prevYearAriaLabel: 'Předchozí rok'
  },
  noDataText: 'Nejsou dostupná žádná data',
  carousel: {
    prev: 'Předchozí obrázek',
    next: 'Další obrázek',
    ariaLabel: {
      delimiter: 'Carousel slide {0} of {1}'
    }
  },
  calendar: {
    moreEvents: '{0} dalších'
  },
  fileInput: {
    counter: '{0} souborů',
    counterSize: '{0} souborů ({1} celkem)'
  },
  timePicker: {
    am: 'AM',
    pm: 'PM'
  },
  pagination: {
    ariaLabel: {
      wrapper: 'Navigace stránkování',
      next: 'Další strana',
      previous: 'Předchozí strana',
      page: 'Přejít na stránku {0}',
      currentPage: 'Aktuální stránka, stránka {0}'
    }
  }
});
//# sourceMappingURL=cs.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/locale/de.js":
/*!***********************************************!*\
  !*** ./node_modules/vuetify/lib/locale/de.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  badge: 'Abzeichen',
  close: 'Schließen',
  dataIterator: {
    noResultsText: 'Keine Elemente gefunden',
    loadingText: 'Lade Elemente...'
  },
  dataTable: {
    itemsPerPageText: 'Zeilen pro Seite:',
    ariaLabel: {
      sortDescending: 'Absteigend sortiert.',
      sortAscending: 'Aufsteigend sortiert.',
      sortNone: 'Nicht sortiert.',
      activateNone: 'Aktivieren um Sortierung zu entfernen.',
      activateDescending: 'Aktivieren um absteigend zu sortieren.',
      activateAscending: 'Aktivieren um aufsteigend zu sortieren.'
    },
    sortBy: 'Sortiere nach'
  },
  dataFooter: {
    itemsPerPageText: 'Elemente pro Seite:',
    itemsPerPageAll: 'Alle',
    nextPage: 'Nächste Seite',
    prevPage: 'Vorherige Seite',
    firstPage: 'Erste Seite',
    lastPage: 'Letzte Seite',
    pageText: '{0}-{1} von {2}'
  },
  datePicker: {
    itemsSelected: '{0} ausgewählt',
    nextMonthAriaLabel: 'Nächsten Monat',
    nextYearAriaLabel: 'Nächstes Jahr',
    prevMonthAriaLabel: 'Vorheriger Monat',
    prevYearAriaLabel: 'Vorheriges Jahr'
  },
  noDataText: 'Keine Daten vorhanden',
  carousel: {
    prev: 'Vorheriges Bild',
    next: 'Nächstes Bild',
    ariaLabel: {
      delimiter: 'Element {0} von {1}'
    }
  },
  calendar: {
    moreEvents: '{0} mehr'
  },
  fileInput: {
    counter: '{0} Dateien',
    counterSize: '{0} Dateien ({1} gesamt)'
  },
  timePicker: {
    am: 'AM',
    pm: 'PM'
  },
  pagination: {
    ariaLabel: {
      wrapper: 'Seitennavigation',
      next: 'Nächste Seite',
      previous: 'Vorherige Seite',
      page: 'Gehe zu Seite {0}',
      currentPage: 'Aktuelle Seite, Seite {0}'
    }
  }
});
//# sourceMappingURL=de.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/locale/el.js":
/*!***********************************************!*\
  !*** ./node_modules/vuetify/lib/locale/el.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  badge: 'Σήμα',
  close: 'Close',
  dataIterator: {
    noResultsText: 'Δε βρέθηκαν αποτελέσματα',
    loadingText: 'Loading item...'
  },
  dataTable: {
    itemsPerPageText: 'Γραμμές ανά σελίδα:',
    ariaLabel: {
      sortDescending: 'Sorted descending.',
      sortAscending: 'Sorted ascending.',
      sortNone: 'Not sorted.',
      activateNone: 'Activate to remove sorting.',
      activateDescending: 'Activate to sort descending.',
      activateAscending: 'Activate to sort ascending.'
    },
    sortBy: 'Sort by'
  },
  dataFooter: {
    itemsPerPageText: 'Αντικείμενα ανά σελίδα:',
    itemsPerPageAll: 'Όλα',
    nextPage: 'Επόμενη σελίδα',
    prevPage: 'Προηγούμενη σελίδα',
    firstPage: 'Πρώτη σελίδα',
    lastPage: 'Τελευταία σελίδα',
    pageText: '{0}-{1} από {2}'
  },
  datePicker: {
    itemsSelected: '{0} επιλεγμένα',
    nextMonthAriaLabel: 'Τον επόμενο μήνα',
    nextYearAriaLabel: 'Του χρόνου',
    prevMonthAriaLabel: 'Προηγούμενος μήνας',
    prevYearAriaLabel: 'Προηγούμενο έτος'
  },
  noDataText: 'Χωρίς δεδομένα',
  carousel: {
    prev: 'הקודם חזותי',
    next: 'הבא חזותי',
    ariaLabel: {
      delimiter: 'Carousel slide {0} of {1}'
    }
  },
  calendar: {
    moreEvents: '{0} ακόμη'
  },
  fileInput: {
    counter: '{0} files',
    counterSize: '{0} files ({1} in total)'
  },
  timePicker: {
    am: 'AM',
    pm: 'PM'
  },
  pagination: {
    ariaLabel: {
      wrapper: 'Πλοήγηση με προορισμούς',
      next: 'Επόμενη σελίδα',
      previous: 'Προηγούμενη σελίδα',
      page: 'Πήγαινε στην σελίδα {0}',
      currentPage: 'Τρέχουσα σελίδα, σελίδα {0}'
    }
  }
});
//# sourceMappingURL=el.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/locale/en.js":
/*!***********************************************!*\
  !*** ./node_modules/vuetify/lib/locale/en.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  badge: 'Badge',
  close: 'Close',
  dataIterator: {
    noResultsText: 'No matching records found',
    loadingText: 'Loading items...'
  },
  dataTable: {
    itemsPerPageText: 'Rows per page:',
    ariaLabel: {
      sortDescending: 'Sorted descending.',
      sortAscending: 'Sorted ascending.',
      sortNone: 'Not sorted.',
      activateNone: 'Activate to remove sorting.',
      activateDescending: 'Activate to sort descending.',
      activateAscending: 'Activate to sort ascending.'
    },
    sortBy: 'Sort by'
  },
  dataFooter: {
    itemsPerPageText: 'Items per page:',
    itemsPerPageAll: 'All',
    nextPage: 'Next page',
    prevPage: 'Previous page',
    firstPage: 'First page',
    lastPage: 'Last page',
    pageText: '{0}-{1} of {2}'
  },
  datePicker: {
    itemsSelected: '{0} selected',
    nextMonthAriaLabel: 'Next month',
    nextYearAriaLabel: 'Next year',
    prevMonthAriaLabel: 'Previous month',
    prevYearAriaLabel: 'Previous year'
  },
  noDataText: 'No data available',
  carousel: {
    prev: 'Previous visual',
    next: 'Next visual',
    ariaLabel: {
      delimiter: 'Carousel slide {0} of {1}'
    }
  },
  calendar: {
    moreEvents: '{0} more'
  },
  fileInput: {
    counter: '{0} files',
    counterSize: '{0} files ({1} in total)'
  },
  timePicker: {
    am: 'AM',
    pm: 'PM'
  },
  pagination: {
    ariaLabel: {
      wrapper: 'Pagination Navigation',
      next: 'Next page',
      previous: 'Previous page',
      page: 'Goto Page {0}',
      currentPage: 'Current Page, Page {0}'
    }
  }
});
//# sourceMappingURL=en.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/locale/es.js":
/*!***********************************************!*\
  !*** ./node_modules/vuetify/lib/locale/es.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  badge: 'Placa',
  close: 'Cerrar',
  dataIterator: {
    noResultsText: 'Ningún elemento coincide con la búsqueda',
    loadingText: 'Cargando...'
  },
  dataTable: {
    itemsPerPageText: 'Filas por página:',
    ariaLabel: {
      sortDescending: 'Orden descendente.',
      sortAscending: 'Orden ascendente.',
      sortNone: 'Sin ordenar.',
      activateNone: 'Pulse para quitar orden.',
      activateDescending: 'Pulse para ordenar descendente.',
      activateAscending: 'Pulse para ordenar ascendente.'
    },
    sortBy: 'Ordenado por'
  },
  dataFooter: {
    itemsPerPageText: 'Elementos por página:',
    itemsPerPageAll: 'Todos',
    nextPage: 'Página siguiente',
    prevPage: 'Página anterior',
    firstPage: 'Primer página',
    lastPage: 'Última página',
    pageText: '{0}-{1} de {2}'
  },
  datePicker: {
    itemsSelected: '{0} seleccionados',
    nextMonthAriaLabel: 'Próximo mes',
    nextYearAriaLabel: 'Próximo año',
    prevMonthAriaLabel: 'Mes anterior',
    prevYearAriaLabel: 'Año anterior'
  },
  noDataText: 'No hay datos disponibles',
  carousel: {
    prev: 'Visual anterior',
    next: 'Visual siguiente',
    ariaLabel: {
      delimiter: 'Carousel slide {0} of {1}'
    }
  },
  calendar: {
    moreEvents: '{0} más'
  },
  fileInput: {
    counter: '{0} archivos',
    counterSize: '{0} archivos ({1} en total)'
  },
  timePicker: {
    am: 'AM',
    pm: 'PM'
  },
  pagination: {
    ariaLabel: {
      wrapper: 'Navegación de paginación',
      next: 'Página siguiente',
      previous: 'Página anterior',
      page: 'Ir a la página {0}',
      currentPage: 'Página actual, página {0}'
    }
  }
});
//# sourceMappingURL=es.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/locale/et.js":
/*!***********************************************!*\
  !*** ./node_modules/vuetify/lib/locale/et.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  badge: 'Märk',
  close: 'Sulge',
  dataIterator: {
    noResultsText: 'Vastavaid kirjeid ei leitud',
    loadingText: 'Andmeid laaditakse...'
  },
  dataTable: {
    itemsPerPageText: 'Ridu leheküljel:',
    ariaLabel: {
      sortDescending: 'Kahanevalt sorteeritud.',
      sortAscending: 'Kasvavalt sorteeritud.',
      sortNone: 'Ei ole sorteeritud.',
      activateNone: 'Vajuta uuesti sorteerimise eemaldamiseks.',
      activateDescending: 'Vajuta uuesti, et sorteerida kahanevalt.',
      activateAscending: 'Vajuta kasvavalt sorteerimiseks.'
    },
    sortBy: 'Sorteerimise alus'
  },
  dataFooter: {
    itemsPerPageText: 'Kirjeid leheküljel:',
    itemsPerPageAll: 'Kõik',
    nextPage: 'Järgmine lehekülg',
    prevPage: 'Eelmine lehekülg',
    firstPage: 'Esimene lehekülg',
    lastPage: 'Viimane lehekülg',
    pageText: '{0}-{1} {2}st'
  },
  datePicker: {
    itemsSelected: '{0} valitud',
    nextMonthAriaLabel: 'Järgmine kuu',
    nextYearAriaLabel: 'Järgmine aasta',
    prevMonthAriaLabel: 'Eelmine kuu',
    prevYearAriaLabel: 'Eelmine aasta'
  },
  noDataText: 'Andmed puuduvad',
  carousel: {
    prev: 'Eelmine visuaalne',
    next: 'Järgmine visuaalne',
    ariaLabel: {
      delimiter: 'Carousel slide {0} of {1}'
    }
  },
  calendar: {
    moreEvents: '{0} veel'
  },
  fileInput: {
    counter: '{0} faili',
    counterSize: '{0} faili (kokku {1})'
  },
  timePicker: {
    am: 'AM',
    pm: 'PM'
  },
  pagination: {
    ariaLabel: {
      wrapper: 'Pagination Navigation',
      next: 'Järgmine lehekülg',
      previous: 'Eelmine lehekülg',
      page: 'Mine lehele {0}',
      currentPage: 'Praegune leht, leht {0}'
    }
  }
});
//# sourceMappingURL=et.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/locale/fa.js":
/*!***********************************************!*\
  !*** ./node_modules/vuetify/lib/locale/fa.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  badge: 'نشان',
  close: 'بستن',
  dataIterator: {
    noResultsText: 'نتیجه‌ای یافت نشد',
    loadingText: 'در حال بارگذاری...'
  },
  dataTable: {
    itemsPerPageText: 'ردیف در صفحه:',
    ariaLabel: {
      sortDescending: 'مرتب‌سازی نزولی',
      sortAscending: 'مرتب‌سازی صعودی',
      sortNone: 'بدون مرتب‌سازی',
      activateNone: 'غیرفعال‌سازی مرتب‌سازی',
      activateDescending: 'غیرفعال‌سازی مرتب‌سازی نزولی',
      activateAscending: 'غیرفعال‌سازی مرتب‌سازی صعودی'
    },
    sortBy: 'مرتب‌سازی براساس'
  },
  dataFooter: {
    itemsPerPageText: 'ردیف در صفحه:',
    itemsPerPageAll: 'همه',
    nextPage: 'صفحه‌ی بعد',
    prevPage: 'صفحه‌ی قبل',
    firstPage: 'صفحه‌ی یکم',
    lastPage: 'صفحه‌ی آخر',
    pageText: '{0} تا {1} از {2}'
  },
  datePicker: {
    itemsSelected: '{0} انتخاب شده',
    nextMonthAriaLabel: 'ماه بعد',
    nextYearAriaLabel: 'سال بعد',
    prevMonthAriaLabel: 'ماه قبل',
    prevYearAriaLabel: 'سال قبل'
  },
  noDataText: 'داده‌ای موجود نیست',
  carousel: {
    prev: 'اسلاید قبلی',
    next: 'اسلاید بعدی',
    ariaLabel: {
      delimiter: 'اسلاید {0} از {1}'
    }
  },
  calendar: {
    moreEvents: '{بیشتر {0'
  },
  fileInput: {
    counter: '{0} پرونده',
    counterSize: '{0} پرونده ({1} در کل)'
  },
  timePicker: {
    am: 'قبل از ظهر',
    pm: 'بعد از ظهر'
  },
  pagination: {
    ariaLabel: {
      wrapper: 'جهت یابی صفحه',
      next: 'صفحه بعد',
      previous: 'صفحه قبلی',
      page: 'برو صفحه {0}',
      currentPage: '{0} صفحه فعلی ، صفحه'
    }
  }
});
//# sourceMappingURL=fa.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/locale/fi.js":
/*!***********************************************!*\
  !*** ./node_modules/vuetify/lib/locale/fi.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  badge: 'Infopiste',
  close: 'Sulje',
  dataIterator: {
    noResultsText: 'Ei osumia',
    loadingText: 'Ladataan kohteita...'
  },
  dataTable: {
    itemsPerPageText: 'Rivejä sivulla:',
    ariaLabel: {
      sortDescending: ': Järjestetty laskevasti. Poista järjestäminen aktivoimalla.',
      sortAscending: ': Järjestetty nousevasti. Järjestä laskevasti aktivoimalla.',
      sortNone: ': Ei järjestetty. Järjestä nousevasti aktivoimalla.',
      activateNone: 'Aktivoi lajittelun poistamiseksi.',
      activateDescending: 'Aktivoi laskevien laskevien lajittelemiseksi.',
      activateAscending: 'Aktivoi lajitella nouseva.'
    },
    sortBy: 'Järjestä'
  },
  dataFooter: {
    itemsPerPageText: 'Kohteita sivulla:',
    itemsPerPageAll: 'Kaikki',
    nextPage: 'Seuraava sivu',
    prevPage: 'Edellinen sivu',
    firstPage: 'Ensimmäinen sivu',
    lastPage: 'Viimeinen sivu',
    pageText: '{0}-{1} ({2})'
  },
  datePicker: {
    itemsSelected: '{0} valittu',
    nextMonthAriaLabel: 'Seuraava kuukausi',
    nextYearAriaLabel: 'Ensi vuosi',
    prevMonthAriaLabel: 'Edellinen kuukausi',
    prevYearAriaLabel: 'Edellinen vuosi'
  },
  noDataText: 'Ei dataa',
  carousel: {
    prev: 'Edellinen kuva',
    next: 'Seuraava kuva',
    ariaLabel: {
      delimiter: 'Karusellin kuva {0}/{1}'
    }
  },
  calendar: {
    moreEvents: '{0} lisää'
  },
  fileInput: {
    counter: '{0} tiedostoa',
    counterSize: '{0} tiedostoa ({1} yhteensä)'
  },
  timePicker: {
    am: 'ap.',
    pm: 'ip.'
  },
  pagination: {
    ariaLabel: {
      wrapper: 'Pagination Navigation',
      next: 'Next page',
      previous: 'Previous page',
      page: 'Goto Page {0}',
      currentPage: 'Current Page, Page {0}'
    }
  }
});
//# sourceMappingURL=fi.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/locale/fr.js":
/*!***********************************************!*\
  !*** ./node_modules/vuetify/lib/locale/fr.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  badge: 'Badge',
  close: 'Fermer',
  dataIterator: {
    noResultsText: 'Aucun enregistrement correspondant trouvé',
    loadingText: `Chargement de l'élément...`
  },
  dataTable: {
    itemsPerPageText: 'Lignes par page:',
    ariaLabel: {
      sortDescending: 'Tri décroissant.',
      sortAscending: 'Tri croissant.',
      sortNone: 'Non trié.',
      activateNone: 'Activer pour supprimer le tri.',
      activateDescending: 'Activer pour trier par ordre décroissant.',
      activateAscending: 'Activer pour trier par ordre croissant.'
    },
    sortBy: 'Trier par'
  },
  dataFooter: {
    itemsPerPageText: 'Élements par page:',
    itemsPerPageAll: 'Tous',
    nextPage: 'Page suivante',
    prevPage: 'Page précédente',
    firstPage: 'Première page',
    lastPage: 'Dernière page',
    pageText: '{0}-{1} de {2}'
  },
  datePicker: {
    itemsSelected: '{0} sélectionnés',
    nextMonthAriaLabel: 'Le mois prochain',
    nextYearAriaLabel: `L'année prochaine`,
    prevMonthAriaLabel: 'Le mois précédent',
    prevYearAriaLabel: 'Année précédente'
  },
  noDataText: 'Aucune donnée disponible',
  carousel: {
    prev: 'Visuel précédent',
    next: 'Visuel suivant',
    ariaLabel: {
      delimiter: 'Carousel slide {0} of {1}'
    }
  },
  calendar: {
    moreEvents: '{0} plus'
  },
  fileInput: {
    counter: '{0} fichiers',
    counterSize: '{0} fichiers ({1} au total)'
  },
  timePicker: {
    am: 'AM',
    pm: 'PM'
  },
  pagination: {
    ariaLabel: {
      wrapper: 'Navigation de pagination',
      next: 'Page suivante',
      previous: 'Page précédente',
      page: 'Aller à la page {0}',
      currentPage: 'Page actuelle, Page {0}'
    }
  }
});
//# sourceMappingURL=fr.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/locale/he.js":
/*!***********************************************!*\
  !*** ./node_modules/vuetify/lib/locale/he.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  badge: 'תג',
  close: 'סגור',
  dataIterator: {
    noResultsText: 'לא נמצאו תוצאות מתאימות',
    loadingText: 'טוען פריט...'
  },
  dataTable: {
    itemsPerPageText: 'שורות לעמוד:',
    ariaLabel: {
      sortDescending: 'ממוין לפי סדר עולה. לחץ להספקת המיון.',
      sortAscending: 'ממוין לפי סדר יורד. לחץ למיון לפי סדר עולה.',
      sortNone: 'לא ממוין. לחץ למיון לפי סדר עולה.',
      activateNone: 'הפעל להסרת המיון.',
      activateDescending: 'הפעל למיון יורד.',
      activateAscending: 'הפעל למיון עולה.'
    },
    sortBy: 'סדר לפי'
  },
  dataFooter: {
    itemsPerPageText: 'פריטים לדף:',
    itemsPerPageAll: 'הכל',
    nextPage: 'עמוד הבא',
    prevPage: 'עמוד הקודם',
    firstPage: 'עמוד ראשון',
    lastPage: 'עמוד אחרון',
    pageText: '{0}-{1} מתוך {2}'
  },
  datePicker: {
    itemsSelected: '{0} נבחרו',
    nextMonthAriaLabel: 'חודש הבא',
    nextYearAriaLabel: 'שנה הבאה',
    prevMonthAriaLabel: 'חודש שעבר',
    prevYearAriaLabel: 'שנה שעברה'
  },
  noDataText: 'אין נתונים זמינים',
  carousel: {
    prev: 'מצג קודם',
    next: 'מצג הבא',
    ariaLabel: {
      delimiter: 'Carousel slide {0} of {1}'
    }
  },
  calendar: {
    moreEvents: '{0} נוספים'
  },
  fileInput: {
    counter: '{0} קבצים',
    counterSize: '{0} קבצים ({1} בסך הכל)'
  },
  timePicker: {
    am: 'AM',
    pm: 'PM'
  },
  pagination: {
    ariaLabel: {
      wrapper: 'ניווט עימוד',
      next: 'עמוד הבא',
      previous: 'עמוד הקודם',
      page: '{0} לך לעמוד',
      currentPage: '{0} עמוד נוכחי, עמוד'
    }
  }
});
//# sourceMappingURL=he.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/locale/hr.js":
/*!***********************************************!*\
  !*** ./node_modules/vuetify/lib/locale/hr.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  badge: 'Bedž',
  close: 'Zatvori',
  dataIterator: {
    noResultsText: 'Nisu pronađene odgovarajuće stavke',
    loadingText: 'Učitavanje...'
  },
  dataTable: {
    itemsPerPageText: 'Redaka po stranici:',
    ariaLabel: {
      sortDescending: 'Sortirano silazno.',
      sortAscending: 'Sortirano uzlazno.',
      sortNone: 'Nije sortirano.',
      activateNone: 'Odaberite za uklanjanje sortiranja.',
      activateDescending: 'Odaberite za silazno sortiranje.',
      activateAscending: 'Odaberite za uzlazno sortiranje.'
    },
    sortBy: 'Sortirajte po'
  },
  dataFooter: {
    itemsPerPageText: 'Stavki po stranici:',
    itemsPerPageAll: 'Sve',
    nextPage: 'Sljedeća stranica',
    prevPage: 'Prethodna stranica',
    firstPage: 'Prva stranica',
    lastPage: 'Posljednja stranica',
    pageText: '{0}-{1} od {2}'
  },
  datePicker: {
    itemsSelected: '{0} odabrano',
    nextMonthAriaLabel: 'Sljedeći mjesec',
    nextYearAriaLabel: 'Slijedeće godine',
    prevMonthAriaLabel: 'Prethodni mjesec',
    prevYearAriaLabel: 'Prošla godina'
  },
  noDataText: 'Nema dostupnih podataka',
  carousel: {
    prev: 'Prethodno',
    next: 'Sljedeće',
    ariaLabel: {
      delimiter: 'Carousel slide {0} of {1}'
    }
  },
  calendar: {
    moreEvents: 'Još {0}'
  },
  fileInput: {
    counter: 'Odabranih datoteka: {0}',
    counterSize: 'Odabranih datoteka: {0} ({1} ukupno)'
  },
  timePicker: {
    am: 'AM',
    pm: 'PM'
  },
  pagination: {
    ariaLabel: {
      wrapper: 'Navigacija stranicama',
      next: 'Sljedeća stranica',
      previous: 'Prethodna stranica',
      page: 'Idi na stranicu {0}',
      currentPage: 'Trenutna stranica, stranica {0}'
    }
  }
});
//# sourceMappingURL=hr.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/locale/hu.js":
/*!***********************************************!*\
  !*** ./node_modules/vuetify/lib/locale/hu.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  badge: 'Jelvény',
  close: 'Bezárás',
  dataIterator: {
    noResultsText: 'Nincs egyező találat',
    loadingText: 'Betöltés...'
  },
  dataTable: {
    itemsPerPageText: 'Elem oldalanként:',
    ariaLabel: {
      sortDescending: 'Csökkenő sorrendbe rendezve.',
      sortAscending: 'Növekvő sorrendbe rendezve.',
      sortNone: 'Rendezetlen.',
      activateNone: 'Rendezés törlése.',
      activateDescending: 'Aktiváld a csökkenő rendezésért.',
      activateAscending: 'Aktiváld a növekvő rendezésért.'
    },
    sortBy: 'Rendezés'
  },
  dataFooter: {
    itemsPerPageText: 'Elem oldalanként:',
    itemsPerPageAll: 'Mind',
    nextPage: 'Következő oldal',
    prevPage: 'Előző oldal',
    firstPage: 'Első oldal',
    lastPage: 'Utolsó oldal',
    pageText: '{0}-{1} / {2}'
  },
  datePicker: {
    itemsSelected: '{0} kiválasztva',
    nextMonthAriaLabel: 'Következő hónap',
    nextYearAriaLabel: 'Következő év',
    prevMonthAriaLabel: 'Előző hónap',
    prevYearAriaLabel: 'Előző év'
  },
  noDataText: 'Nincs elérhető adat',
  carousel: {
    prev: 'Előző',
    next: 'Következő',
    ariaLabel: {
      delimiter: 'Dia {0}/{1}'
    }
  },
  calendar: {
    moreEvents: '{0} további'
  },
  fileInput: {
    counter: '{0} fájl',
    counterSize: '{0} fájl ({1} összesen)'
  },
  timePicker: {
    am: 'de',
    pm: 'du'
  },
  pagination: {
    ariaLabel: {
      wrapper: 'Oldal navigáció',
      next: 'Következő oldal',
      previous: 'Előző oldal',
      page: 'Menj a(z) {0}. oldalra',
      currentPage: 'Aktuális oldal: {0}'
    }
  }
});
//# sourceMappingURL=hu.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/locale/id.js":
/*!***********************************************!*\
  !*** ./node_modules/vuetify/lib/locale/id.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  badge: 'Lencana',
  close: 'Tutup',
  dataIterator: {
    noResultsText: 'Tidak ditemukan catatan yang cocok',
    loadingText: 'Memuat data...'
  },
  dataTable: {
    itemsPerPageText: 'Baris per halaman:',
    ariaLabel: {
      sortDescending: 'Diurutkan kebawah.',
      sortAscending: 'Diurutkan keatas.',
      sortNone: 'Tidak diurutkan.',
      activateNone: 'Aktifkan untuk menghapus penyortiran.',
      activateDescending: 'Aktifkan untuk mengurutkan kebawah.',
      activateAscending: 'Aktifkan untuk mengurutkan keatas.'
    },
    sortBy: 'Urutkan berdasar'
  },
  dataFooter: {
    itemsPerPageText: 'Item per halaman:',
    itemsPerPageAll: 'Semua',
    nextPage: 'Halaman selanjutnya',
    prevPage: 'Halaman sebelumnya',
    firstPage: 'Halaman pertama',
    lastPage: 'Halaman terakhir',
    pageText: '{0}-{1} dari {2}'
  },
  datePicker: {
    itemsSelected: '{0} dipilih',
    nextMonthAriaLabel: 'Bulan depan',
    nextYearAriaLabel: 'Tahun depan',
    prevMonthAriaLabel: 'Bulan sebelumnya',
    prevYearAriaLabel: 'Tahun sebelumnya'
  },
  noDataText: 'Tidak ada data tersedia',
  carousel: {
    prev: 'Visual sebelumnya',
    next: 'Visual selanjutnya',
    ariaLabel: {
      delimiter: 'Carousel slide {0} of {1}'
    }
  },
  calendar: {
    moreEvents: '{0} lagi'
  },
  fileInput: {
    counter: '{0} berkas',
    counterSize: '{0} berkas (dari total {1})'
  },
  timePicker: {
    am: 'AM',
    pm: 'PM'
  },
  pagination: {
    ariaLabel: {
      wrapper: 'Navigasi Pagination',
      next: 'Halaman selanjutnya',
      previous: 'Halaman sebelumnya',
      page: 'Buka halaman {0}',
      currentPage: 'Halaman Saat Ini, Halaman {0}'
    }
  }
});
//# sourceMappingURL=id.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/locale/index.js":
/*!**************************************************!*\
  !*** ./node_modules/vuetify/lib/locale/index.js ***!
  \**************************************************/
/*! exports provided: af, ar, ca, cs, de, el, en, es, et, fa, fi, fr, hr, hu, he, id, it, ja, ko, lv, lt, nl, no, pl, pt, ro, ru, sk, sl, srCyrl, sv, th, tr, uk, zhHans, zhHant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _af__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./af */ "./node_modules/vuetify/lib/locale/af.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "af", function() { return _af__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ar */ "./node_modules/vuetify/lib/locale/ar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ar", function() { return _ar__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _ca__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ca */ "./node_modules/vuetify/lib/locale/ca.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ca", function() { return _ca__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _cs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cs */ "./node_modules/vuetify/lib/locale/cs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cs", function() { return _cs__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _de__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./de */ "./node_modules/vuetify/lib/locale/de.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "de", function() { return _de__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _el__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./el */ "./node_modules/vuetify/lib/locale/el.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "el", function() { return _el__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _en__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./en */ "./node_modules/vuetify/lib/locale/en.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "en", function() { return _en__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _es__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./es */ "./node_modules/vuetify/lib/locale/es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "es", function() { return _es__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _et__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./et */ "./node_modules/vuetify/lib/locale/et.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "et", function() { return _et__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _fa__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fa */ "./node_modules/vuetify/lib/locale/fa.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fa", function() { return _fa__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _fi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fi */ "./node_modules/vuetify/lib/locale/fi.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fi", function() { return _fi__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _fr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fr */ "./node_modules/vuetify/lib/locale/fr.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fr", function() { return _fr__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _hr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./hr */ "./node_modules/vuetify/lib/locale/hr.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hr", function() { return _hr__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _hu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./hu */ "./node_modules/vuetify/lib/locale/hu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hu", function() { return _hu__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _he__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./he */ "./node_modules/vuetify/lib/locale/he.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "he", function() { return _he__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _id__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./id */ "./node_modules/vuetify/lib/locale/id.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "id", function() { return _id__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _it__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./it */ "./node_modules/vuetify/lib/locale/it.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "it", function() { return _it__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _ja__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ja */ "./node_modules/vuetify/lib/locale/ja.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ja", function() { return _ja__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _ko__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ko */ "./node_modules/vuetify/lib/locale/ko.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ko", function() { return _ko__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _lv__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./lv */ "./node_modules/vuetify/lib/locale/lv.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lv", function() { return _lv__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _lt__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./lt */ "./node_modules/vuetify/lib/locale/lt.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lt", function() { return _lt__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _nl__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./nl */ "./node_modules/vuetify/lib/locale/nl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nl", function() { return _nl__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _no__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./no */ "./node_modules/vuetify/lib/locale/no.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "no", function() { return _no__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _pl__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pl */ "./node_modules/vuetify/lib/locale/pl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pl", function() { return _pl__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _pt__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pt */ "./node_modules/vuetify/lib/locale/pt.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pt", function() { return _pt__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _ro__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ro */ "./node_modules/vuetify/lib/locale/ro.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ro", function() { return _ro__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _ru__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./ru */ "./node_modules/vuetify/lib/locale/ru.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ru", function() { return _ru__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _sk__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./sk */ "./node_modules/vuetify/lib/locale/sk.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sk", function() { return _sk__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _sl__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./sl */ "./node_modules/vuetify/lib/locale/sl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sl", function() { return _sl__WEBPACK_IMPORTED_MODULE_28__["default"]; });

/* harmony import */ var _sr_Cyrl__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./sr-Cyrl */ "./node_modules/vuetify/lib/locale/sr-Cyrl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "srCyrl", function() { return _sr_Cyrl__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony import */ var _sv__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./sv */ "./node_modules/vuetify/lib/locale/sv.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sv", function() { return _sv__WEBPACK_IMPORTED_MODULE_30__["default"]; });

/* harmony import */ var _th__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./th */ "./node_modules/vuetify/lib/locale/th.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "th", function() { return _th__WEBPACK_IMPORTED_MODULE_31__["default"]; });

/* harmony import */ var _tr__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./tr */ "./node_modules/vuetify/lib/locale/tr.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tr", function() { return _tr__WEBPACK_IMPORTED_MODULE_32__["default"]; });

/* harmony import */ var _uk__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./uk */ "./node_modules/vuetify/lib/locale/uk.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uk", function() { return _uk__WEBPACK_IMPORTED_MODULE_33__["default"]; });

/* harmony import */ var _zh_Hans__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./zh-Hans */ "./node_modules/vuetify/lib/locale/zh-Hans.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zhHans", function() { return _zh_Hans__WEBPACK_IMPORTED_MODULE_34__["default"]; });

/* harmony import */ var _zh_Hant__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./zh-Hant */ "./node_modules/vuetify/lib/locale/zh-Hant.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zhHant", function() { return _zh_Hant__WEBPACK_IMPORTED_MODULE_35__["default"]; });





































//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/locale/it.js":
/*!***********************************************!*\
  !*** ./node_modules/vuetify/lib/locale/it.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  badge: 'Distintivo',
  close: 'Chiudi',
  dataIterator: {
    noResultsText: 'Nessun risultato trovato',
    loadingText: 'Caricamento in corso...'
  },
  dataTable: {
    itemsPerPageText: 'Righe per pagina:',
    ariaLabel: {
      sortDescending: 'Ordinati in ordine decrescente.',
      sortAscending: 'Ordinati in ordine crescente.',
      sortNone: 'Non ordinato.',
      activateNone: `Attiva per rimuovere l'ordinamento.`,
      activateDescending: 'Attiva per ordinare in ordine decrescente.',
      activateAscending: 'Attiva per ordinare in ordine crescente.'
    },
    sortBy: 'Ordina per'
  },
  dataFooter: {
    itemsPerPageText: 'Elementi per pagina:',
    itemsPerPageAll: 'Tutti',
    nextPage: 'Pagina seguente',
    prevPage: 'Pagina precedente',
    firstPage: 'Pagina prima',
    lastPage: 'Pagina ultima',
    pageText: '{0}-{1} di {2}'
  },
  datePicker: {
    itemsSelected: '{0} selezionati',
    nextMonthAriaLabel: 'Il prossimo mese',
    nextYearAriaLabel: `L'anno prossimo`,
    prevMonthAriaLabel: 'Il mese scorso',
    prevYearAriaLabel: `L'anno scorso`
  },
  noDataText: 'Nessun elemento disponibile',
  carousel: {
    prev: 'Vista precedente',
    next: 'Prossima vista',
    ariaLabel: {
      delimiter: 'Carousel slide {0} of {1}'
    }
  },
  calendar: {
    moreEvents: '{0} di più'
  },
  fileInput: {
    counter: '{0} files',
    counterSize: '{0} files ({1} in totale)'
  },
  timePicker: {
    am: 'AM',
    pm: 'PM'
  },
  pagination: {
    ariaLabel: {
      wrapper: 'Navigazione impaginazione',
      next: 'Pagina seguente',
      previous: 'Pagina precedente',
      page: 'Vai alla pagina {0}',
      currentPage: 'Pagina corrente, pagina {0}'
    }
  }
});
//# sourceMappingURL=it.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/locale/ja.js":
/*!***********************************************!*\
  !*** ./node_modules/vuetify/lib/locale/ja.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  badge: 'バッジ',
  close: '閉じる',
  dataIterator: {
    noResultsText: '検索結果が見つかりません。',
    loadingText: '項目をロード中です...'
  },
  dataTable: {
    itemsPerPageText: '1ページあたりの行数：',
    ariaLabel: {
      sortDescending: '降順の並び替え。',
      sortAscending: '昇順の並び替え。',
      sortNone: 'ソートされていません。',
      activateNone: 'ソートを削除するには有効にしてください。',
      activateDescending: '降順の並び替えのためには有効にしてください。',
      activateAscending: '昇順のソートのためには有効にしてください。'
    },
    sortBy: 'ソート方式'
  },
  dataFooter: {
    itemsPerPageText: '1ページあたりの件数：',
    itemsPerPageAll: 'すべて',
    nextPage: '次のページ',
    prevPage: '前のページ',
    firstPage: '一ページ目',
    lastPage: '最後のページ',
    pageText: '{0}-{1} 件目 / {2}件'
  },
  datePicker: {
    itemsSelected: '{0}日付選択',
    nextMonthAriaLabel: '来月',
    nextYearAriaLabel: '来年',
    prevMonthAriaLabel: '前月',
    prevYearAriaLabel: '前年'
  },
  noDataText: 'データはありません。',
  carousel: {
    prev: '前のビジュアル',
    next: '次のビジュアル',
    ariaLabel: {
      delimiter: 'Carousel slide {0} of {1}'
    }
  },
  calendar: {
    moreEvents: 'さらに{0}'
  },
  fileInput: {
    counter: '{0} ファイル',
    counterSize: '{0} ファイル (合計 {1})'
  },
  timePicker: {
    am: 'AM',
    pm: 'PM'
  },
  pagination: {
    ariaLabel: {
      wrapper: 'ページネーションナビゲーション',
      next: '次のページ',
      previous: '前のページ',
      page: 'ページに移動 {0}',
      currentPage: '現在のページ、ページ {0}'
    }
  }
});
//# sourceMappingURL=ja.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/locale/ko.js":
/*!***********************************************!*\
  !*** ./node_modules/vuetify/lib/locale/ko.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  badge: '배지',
  close: '닫기',
  dataIterator: {
    noResultsText: '일치하는 항목이 없습니다.',
    loadingText: '불러오는 중...'
  },
  dataTable: {
    itemsPerPageText: '페이지 당 행 수:',
    ariaLabel: {
      sortDescending: '내림차순 정렬.',
      sortAscending: '오름차순 정렬.',
      sortNone: '정렬하지 않음.',
      activateNone: '정렬을 취소하려면 활성화하세요.',
      activateDescending: '내림차순 정렬을 위해 활성화하세요.',
      activateAscending: '오름차순 정렬을 위해 활성화하세요.'
    },
    sortBy: 'Sort by'
  },
  dataFooter: {
    itemsPerPageText: '페이지 당 항목 수:',
    itemsPerPageAll: '전체',
    nextPage: '다음 페이지',
    prevPage: '이전 페이지',
    firstPage: '첫 페이지',
    lastPage: '마지막 페이지',
    pageText: '{2} 중 {0}-{1}'
  },
  datePicker: {
    itemsSelected: '{0} 선택됨',
    nextMonthAriaLabel: '다음 달',
    nextYearAriaLabel: '내년',
    prevMonthAriaLabel: '지난달',
    prevYearAriaLabel: '전년도'
  },
  noDataText: '데이터가 없습니다.',
  carousel: {
    prev: '이전 화면',
    next: '다음 화면',
    ariaLabel: {
      delimiter: 'Carousel slide {0} of {1}'
    }
  },
  calendar: {
    moreEvents: '{0} 더보기'
  },
  fileInput: {
    counter: '{0} files',
    counterSize: '{0} files ({1} in total)'
  },
  timePicker: {
    am: '오전',
    pm: '오후'
  },
  pagination: {
    ariaLabel: {
      wrapper: 'Pagination Navigation',
      next: '다음 페이지',
      previous: '이전 페이지',
      page: '고토 페이지 {0}',
      currentPage: '현재 페이지, 페이지 {0}'
    }
  }
});
//# sourceMappingURL=ko.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/locale/lt.js":
/*!***********************************************!*\
  !*** ./node_modules/vuetify/lib/locale/lt.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  badge: 'Ženklelis',
  close: 'Uždaryti',
  dataIterator: {
    noResultsText: 'Nerasta atitinkančių įrašų',
    loadingText: 'Kraunama...'
  },
  dataTable: {
    itemsPerPageText: 'Eilutės per puslapį:',
    ariaLabel: {
      sortDescending: 'Išrikiuota mažėjimo tvarka.',
      sortAscending: 'Išrikiuota didėjimo tvarka.',
      sortNone: 'Nerikiuota.',
      activateNone: 'Suaktyvinkite, jei norite rikiavimą pašalinti.',
      activateDescending: 'Suaktyvinkite, jei norite rikiuoti mažėjimo tvarka.',
      activateAscending: 'Suaktyvinkite, jei norite rikiuoti didėjimo tvarka.'
    },
    sortBy: 'Sort by'
  },
  dataFooter: {
    itemsPerPageText: 'Įrašai per puslapį:',
    itemsPerPageAll: 'Visi',
    nextPage: 'Kitas puslapis',
    prevPage: 'Ankstesnis puslapis',
    firstPage: 'Pirmas puslapis',
    lastPage: 'Paskutinis puslapis',
    pageText: '{0}-{1} iš {2}'
  },
  datePicker: {
    itemsSelected: '{0} pasirinkta',
    nextMonthAriaLabel: 'Kitą mėnesį',
    nextYearAriaLabel: 'Kitais metais',
    prevMonthAriaLabel: 'Praeita mėnesį',
    prevYearAriaLabel: 'Praeiti metai'
  },
  noDataText: 'Nėra duomenų',
  carousel: {
    prev: 'Ankstesnioji skaidrė',
    next: 'Kita skaidrė',
    ariaLabel: {
      delimiter: 'Carousel slide {0} of {1}'
    }
  },
  calendar: {
    moreEvents: 'Daugiau {0}'
  },
  fileInput: {
    counter: '{0} failų',
    counterSize: '{0} failų ({1} iš viso)'
  },
  timePicker: {
    am: 'AM',
    pm: 'PM'
  },
  pagination: {
    ariaLabel: {
      wrapper: 'Puslapio naršymas',
      next: 'Kitas puslapis',
      previous: 'Ankstesnis puslapis',
      page: 'Eiti į puslapį {0}',
      currentPage: 'Dabartinis puslapis, puslapis {0}'
    }
  }
});
//# sourceMappingURL=lt.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/locale/lv.js":
/*!***********************************************!*\
  !*** ./node_modules/vuetify/lib/locale/lv.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  badge: 'Žetons',
  close: 'Aizvērt',
  dataIterator: {
    noResultsText: 'Nekas netika atrasts',
    loadingText: 'Ielādē...'
  },
  dataTable: {
    itemsPerPageText: 'Rādīt lapā:',
    ariaLabel: {
      sortDescending: 'Sakārtots dilstošā secībā.',
      sortAscending: 'Sakārtots augošā secībā.',
      sortNone: 'Nav sakārtots.',
      activateNone: 'Aktivizēt, lai noņemtu kārtošanu.',
      activateDescending: 'Aktivizēt, lai sakārtotu dilstošā secībā.',
      activateAscending: 'Aktivizēt, lai sakārtotu augošā secībā.'
    },
    sortBy: 'Sort by'
  },
  dataFooter: {
    itemsPerPageText: 'Rādīt lapā:',
    itemsPerPageAll: 'Visu',
    nextPage: 'Nākamā lapa',
    prevPage: 'Iepriekšējā lapa',
    firstPage: 'Pirmā lapa',
    lastPage: 'Pēdējā lapa',
    pageText: '{0}-{1} no {2}'
  },
  datePicker: {
    itemsSelected: '{0} izvēlēts',
    nextMonthAriaLabel: 'Nākammēnes',
    nextYearAriaLabel: 'Nākamgad',
    prevMonthAriaLabel: 'Iepriekšējais mēnesis',
    prevYearAriaLabel: 'Iepriekšējais gads'
  },
  noDataText: 'Nav pieejamu datu',
  carousel: {
    prev: 'Iepriekšējais slaids',
    next: 'Nākamais slaids',
    ariaLabel: {
      delimiter: 'Carousel slide {0} of {1}'
    }
  },
  calendar: {
    moreEvents: 'Vēl {0}'
  },
  fileInput: {
    counter: '{0} files',
    counterSize: '{0} files ({1} in total)'
  },
  timePicker: {
    am: 'AM',
    pm: 'PM'
  },
  pagination: {
    ariaLabel: {
      wrapper: 'Navigācija paginationā',
      next: 'Nākamā lapa',
      previous: 'Iepriekšējā lapa',
      page: 'Iet uz lapu {0}',
      currentPage: 'Pašreizējā lapa, lapa {0}'
    }
  }
});
//# sourceMappingURL=lv.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/locale/nl.js":
/*!***********************************************!*\
  !*** ./node_modules/vuetify/lib/locale/nl.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  badge: 'insigne',
  close: 'Sluiten',
  dataIterator: {
    noResultsText: 'Geen overeenkomende resultaten gevonden',
    loadingText: 'Items aan het laden...'
  },
  dataTable: {
    itemsPerPageText: 'Rijen per pagina:',
    ariaLabel: {
      sortDescending: 'Aflopend gesorteerd.',
      sortAscending: 'Oplopend gesorteerd.',
      sortNone: 'Niet gesorteerd.',
      activateNone: 'Activeer om de sortering te verwijderen.',
      activateDescending: 'Activeer om aflopend te sorteren.',
      activateAscending: 'Activeer om oplopend te sorteren.'
    },
    sortBy: 'Sorteer volgens'
  },
  dataFooter: {
    itemsPerPageText: 'Aantal per pagina:',
    itemsPerPageAll: 'Alles',
    nextPage: 'Volgende pagina',
    prevPage: 'Vorige pagina',
    firstPage: 'Eerste pagina',
    lastPage: 'Laatste pagina',
    pageText: '{0}-{1} van {2}'
  },
  datePicker: {
    itemsSelected: '{0} geselecteerd',
    nextMonthAriaLabel: 'Volgende maand',
    nextYearAriaLabel: 'Volgend jaar',
    prevMonthAriaLabel: 'Vorige maand',
    prevYearAriaLabel: 'Vorig jaar'
  },
  noDataText: 'Geen gegevens beschikbaar',
  carousel: {
    prev: 'Vorig beeld',
    next: 'Volgend beeld',
    ariaLabel: {
      delimiter: 'Carousel slide {0} of {1}'
    }
  },
  calendar: {
    moreEvents: '{0} meer'
  },
  fileInput: {
    counter: '{0} bestanden',
    counterSize: '{0} bestanden ({1} in totaal)'
  },
  timePicker: {
    am: 'AM',
    pm: 'PM'
  },
  pagination: {
    ariaLabel: {
      wrapper: 'Paginanavigatie',
      next: 'Volgende pagina',
      previous: 'Vorige pagina',
      page: 'Ga naar pagina {0}',
      currentPage: 'Huidige pagina, pagina {0}'
    }
  }
});
//# sourceMappingURL=nl.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/locale/no.js":
/*!***********************************************!*\
  !*** ./node_modules/vuetify/lib/locale/no.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  badge: 'Skilt',
  close: 'Lukk',
  dataIterator: {
    noResultsText: 'Fant ingen matchende elementer.',
    loadingText: 'Laster elementer...'
  },
  dataTable: {
    itemsPerPageText: 'Rader per side:',
    ariaLabel: {
      sortDescending: 'Sortert synkende.',
      sortAscending: 'Sortert stigende.',
      sortNone: 'Ikke sortert.',
      activateNone: 'Aktiver for å fjerne sortering.',
      activateDescending: 'Aktiver for å sortere synkende.',
      activateAscending: 'Aktiver for å sortere stigende.'
    },
    sortBy: 'Sorter etter'
  },
  dataFooter: {
    itemsPerPageText: 'Elementer per side:',
    itemsPerPageAll: 'Alle',
    nextPage: 'Neste side',
    prevPage: 'Forrige side',
    firstPage: 'Første side',
    lastPage: 'Siste side',
    pageText: '{0}-{1} av {2}'
  },
  datePicker: {
    itemsSelected: '{0} valgt',
    nextMonthAriaLabel: 'Neste måned',
    nextYearAriaLabel: 'Neste år',
    prevMonthAriaLabel: 'Forrige måned',
    prevYearAriaLabel: 'Forrige år'
  },
  noDataText: 'Ingen data er tilgjengelig',
  carousel: {
    prev: 'Forrige bilde',
    next: 'Neste bilde',
    ariaLabel: {
      delimiter: 'Karusellbilde {0} av {1}'
    }
  },
  calendar: {
    moreEvents: '{0} flere'
  },
  fileInput: {
    counter: '{0} filer',
    counterSize: '{0} filer ({1} totalt)'
  },
  timePicker: {
    am: 'AM',
    pm: 'PM'
  },
  pagination: {
    ariaLabel: {
      wrapper: 'Paginasjonsnavigasjon',
      next: 'Neste side',
      previous: 'Forrige side',
      page: 'Gå til side {0}',
      currentPage: 'Gjeldende side, side {0}'
    }
  }
});
//# sourceMappingURL=no.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/locale/pl.js":
/*!***********************************************!*\
  !*** ./node_modules/vuetify/lib/locale/pl.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  badge: 'Odznaka',
  close: 'Zamknij',
  dataIterator: {
    noResultsText: 'Nie znaleziono danych odpowiadających wyszukiwaniu',
    loadingText: 'Wczytywanie danych...'
  },
  dataTable: {
    itemsPerPageText: 'Wierszy na stronie:',
    ariaLabel: {
      sortDescending: 'Sortowanie malejąco. Kliknij aby zmienić.',
      sortAscending: 'Sortowanie rosnąco. Kliknij aby zmienić.',
      sortNone: 'Bez sortowania. Kliknij aby posortować rosnąco.',
      activateNone: 'Kliknij aby usunąć sortowanie.',
      activateDescending: 'Kliknij aby posortować malejąco.',
      activateAscending: 'Kliknij aby posortować rosnąco.'
    },
    sortBy: 'Sortuj według'
  },
  dataFooter: {
    itemsPerPageText: 'Pozycji na stronie:',
    itemsPerPageAll: 'Wszystkie',
    nextPage: 'Następna strona',
    prevPage: 'Poprzednia strona',
    firstPage: 'Pierwsza strona',
    lastPage: 'Ostatnia strona',
    pageText: '{0}-{1} z {2}'
  },
  datePicker: {
    itemsSelected: '{0} dat(y)',
    nextMonthAriaLabel: 'Następny miesiąc',
    nextYearAriaLabel: 'Następny rok',
    prevMonthAriaLabel: 'Poprzedni miesiąc',
    prevYearAriaLabel: 'Poprzedni rok'
  },
  noDataText: 'Brak danych',
  carousel: {
    prev: 'Poprzedni obraz',
    next: 'Następny obraz',
    ariaLabel: {
      delimiter: 'Carousel slide {0} of {1}'
    }
  },
  calendar: {
    moreEvents: '{0} więcej'
  },
  fileInput: {
    counter: 'Liczba plików: {0}',
    counterSize: 'Liczba plików: {0} (łącznie {1})'
  },
  timePicker: {
    am: 'AM',
    pm: 'PM'
  },
  pagination: {
    ariaLabel: {
      wrapper: 'Nawigacja paginacyjna',
      next: 'Następna strona',
      previous: 'Poprzednia strona',
      page: 'Idź do strony {0}',
      currentPage: 'Bieżąca strona, strona {0}'
    }
  }
});
//# sourceMappingURL=pl.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/locale/pt.js":
/*!***********************************************!*\
  !*** ./node_modules/vuetify/lib/locale/pt.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  badge: 'Distintivo',
  close: 'Fechar',
  dataIterator: {
    noResultsText: 'Nenhum dado encontrado',
    loadingText: 'Carregando itens...'
  },
  dataTable: {
    itemsPerPageText: 'Linhas por página:',
    ariaLabel: {
      sortDescending: 'Ordenado decrescente.',
      sortAscending: 'Ordenado crescente.',
      sortNone: 'Não ordenado.',
      activateNone: 'Ative para remover a ordenação.',
      activateDescending: 'Ative para ordenar decrescente.',
      activateAscending: 'Ative para ordenar crescente.'
    },
    sortBy: 'Ordenar por'
  },
  dataFooter: {
    itemsPerPageText: 'Itens por página:',
    itemsPerPageAll: 'Todos',
    nextPage: 'Próxima página',
    prevPage: 'Página anterior',
    firstPage: 'Primeira página',
    lastPage: 'Última página',
    pageText: '{0}-{1} de {2}'
  },
  datePicker: {
    itemsSelected: '{0} selecionado(s)',
    nextMonthAriaLabel: 'Próximo mês',
    nextYearAriaLabel: 'Próximo ano',
    prevMonthAriaLabel: 'Mês anterior',
    prevYearAriaLabel: 'Ano anterior'
  },
  noDataText: 'Não há dados disponíveis',
  carousel: {
    prev: 'Visão anterior',
    next: 'Próxima visão',
    ariaLabel: {
      delimiter: 'Slide {0} de {1} do carrossel'
    }
  },
  calendar: {
    moreEvents: 'Mais {0}'
  },
  fileInput: {
    counter: '{0} arquivo(s)',
    counterSize: '{0} arquivo(s) ({1} no total)'
  },
  timePicker: {
    am: 'AM',
    pm: 'PM'
  },
  pagination: {
    ariaLabel: {
      wrapper: 'Navegação de paginação',
      next: 'Próxima página',
      previous: 'Página anterior',
      page: 'Ir à página {0}',
      currentPage: 'Página atual, página {0}'
    }
  }
});
//# sourceMappingURL=pt.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/locale/ro.js":
/*!***********************************************!*\
  !*** ./node_modules/vuetify/lib/locale/ro.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  badge: 'Insignă',
  close: 'Close',
  dataIterator: {
    noResultsText: 'Nu au fost găsite înregistrări care să se potrivească',
    loadingText: 'Loading item...'
  },
  dataTable: {
    itemsPerPageText: 'Rânduri pe pagină:',
    ariaLabel: {
      sortDescending: 'Sorted descending.',
      sortAscending: 'Sorted ascending.',
      sortNone: 'Not sorted.',
      activateNone: 'Activate to remove sorting.',
      activateDescending: 'Activate to sort descending.',
      activateAscending: 'Activate to sort ascending.'
    },
    sortBy: 'Sort by'
  },
  dataFooter: {
    itemsPerPageText: 'Articole pe pagină:',
    itemsPerPageAll: 'Toate',
    nextPage: 'Pagina următoare',
    prevPage: 'Pagina anterioară',
    firstPage: 'Pagina prima',
    lastPage: 'Pagina ultima',
    pageText: '{0}-{1} din {2}'
  },
  datePicker: {
    itemsSelected: '{0} selectate',
    nextMonthAriaLabel: 'Luna viitoare',
    nextYearAriaLabel: 'Anul urmator',
    prevMonthAriaLabel: 'Luna trecută',
    prevYearAriaLabel: 'Anul precedent'
  },
  noDataText: 'Nu există date disponibile',
  carousel: {
    prev: 'Anterior vizual',
    next: 'Următorul vizual',
    ariaLabel: {
      delimiter: 'Carousel slide {0} of {1}'
    }
  },
  calendar: {
    moreEvents: '{0} mai mult'
  },
  fileInput: {
    counter: '{0} files',
    counterSize: '{0} files ({1} in total)'
  },
  timePicker: {
    am: 'AM',
    pm: 'PM'
  },
  pagination: {
    ariaLabel: {
      wrapper: 'Navigare prin paginare',
      next: 'Pagina următoare',
      previous: 'Pagina anterioară',
      page: 'Mergi la pagina {0}',
      currentPage: 'Pagina curentă, pagina {0}'
    }
  }
});
//# sourceMappingURL=ro.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/locale/ru.js":
/*!***********************************************!*\
  !*** ./node_modules/vuetify/lib/locale/ru.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  badge: 'знак',
  close: 'Закрыть',
  dataIterator: {
    noResultsText: 'Не найдено подходящих записей',
    loadingText: 'Запись загружается...'
  },
  dataTable: {
    itemsPerPageText: 'Строк на странице:',
    ariaLabel: {
      sortDescending: 'Упорядочено по убыванию.',
      sortAscending: 'Упорядочено по возрастанию.',
      sortNone: 'Не упорядочено.',
      activateNone: 'Активируйте, чтобы убрать сортировку.',
      activateDescending: 'Активируйте для упорядочивания убыванию.',
      activateAscending: 'Активируйте для упорядочивания по возрастанию.'
    },
    sortBy: 'Сортировать по'
  },
  dataFooter: {
    itemsPerPageText: 'Записей на странице:',
    itemsPerPageAll: 'Все',
    nextPage: 'Следующая страница',
    prevPage: 'Предыдущая страница',
    firstPage: 'Первая страница',
    lastPage: 'Последняя страница',
    pageText: '{0}-{1} из {2}'
  },
  datePicker: {
    itemsSelected: '{0} выбран',
    nextMonthAriaLabel: 'Следующий месяц',
    nextYearAriaLabel: 'Следующий год',
    prevMonthAriaLabel: 'Прошлый месяц',
    prevYearAriaLabel: 'Предыдущий год'
  },
  noDataText: 'Отсутствуют данные',
  carousel: {
    prev: 'Предыдущий слайд',
    next: 'Следующий слайд',
    ariaLabel: {
      delimiter: 'Слайд {0} из {1}'
    }
  },
  calendar: {
    moreEvents: 'Еще {0}'
  },
  fileInput: {
    counter: 'Файлов: {0}',
    counterSize: 'Файлов: {0} (всего {1})'
  },
  timePicker: {
    am: 'AM',
    pm: 'PM'
  },
  pagination: {
    ariaLabel: {
      wrapper: 'Навигация по страницам',
      next: 'Следующая страница',
      previous: 'Предыдущая страница',
      page: 'Перейти на страницу {0}',
      currentPage: 'Текущая страница, Страница {0}'
    }
  }
});
//# sourceMappingURL=ru.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/locale/sk.js":
/*!***********************************************!*\
  !*** ./node_modules/vuetify/lib/locale/sk.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  badge: 'Odznak',
  close: 'Zavrieť',
  dataIterator: {
    noResultsText: 'Neboli nájdené žiadne záznamy',
    loadingText: 'Načítavam položky...'
  },
  dataTable: {
    itemsPerPageText: 'Počet riadkov na stránku:',
    ariaLabel: {
      sortDescending: 'Zoradené zostupne.',
      sortAscending: 'Zoradené vzostupne.',
      sortNone: 'Nezoradené.',
      activateNone: 'Aktivujte na zrušenie triedenia.',
      activateDescending: 'Aktivujte na zoradenie zostupne.',
      activateAscending: 'Aktivujte na zoradenie vzostupne.'
    },
    sortBy: 'Zoradiť podľa'
  },
  dataFooter: {
    itemsPerPageText: 'Počet položiek na stránku:',
    itemsPerPageAll: 'Všetko',
    nextPage: 'Ďalšia stránka',
    prevPage: 'Predchádzajúca stránka',
    firstPage: 'Prvá stránka',
    lastPage: 'Posledná stránka',
    pageText: '{0}–{1} z {2}'
  },
  datePicker: {
    itemsSelected: '{0} vybrané',
    nextMonthAriaLabel: 'Ďalší mesiac',
    nextYearAriaLabel: 'Ďalší rok',
    prevMonthAriaLabel: 'Predchádzajúci mesiac',
    prevYearAriaLabel: 'Predchádzajúci rok'
  },
  noDataText: 'Nie sú dostupné žiadne dáta',
  carousel: {
    prev: 'Predchádzajúci obrázok',
    next: 'Další obrázok',
    ariaLabel: {
      delimiter: 'Snímka {0} z {1}'
    }
  },
  calendar: {
    moreEvents: '{0} ďalších'
  },
  fileInput: {
    counter: '{0} súborov',
    counterSize: '{0} súborov ({1} celkom)'
  },
  timePicker: {
    am: 'AM',
    pm: 'PM'
  },
  pagination: {
    ariaLabel: {
      wrapper: 'Navigácia stránkovania',
      next: 'Ďalšia stránka',
      previous: 'Predchádzajúca stránka',
      page: 'Ísť na stránku {0}',
      currentPage: 'Aktuálna stránka, stránka {0}'
    }
  }
});
//# sourceMappingURL=sk.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/locale/sl.js":
/*!***********************************************!*\
  !*** ./node_modules/vuetify/lib/locale/sl.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  badge: 'Značka',
  close: 'Zapri',
  dataIterator: {
    noResultsText: 'Ni iskanega zapisa',
    loadingText: 'Nalaganje...'
  },
  dataTable: {
    itemsPerPageText: 'Vrstic na stran:',
    ariaLabel: {
      sortDescending: 'Razvrščeno padajoče.',
      sortAscending: 'Razvrščeno naraščajoče.',
      sortNone: 'Ni razvrščeno.',
      activateNone: 'Aktivirajte za odstranitev razvrščanja.',
      activateDescending: 'Aktivirajte za padajoče razvrščanje.',
      activateAscending: 'Aktivirajte za naraščajoče razvrščanje.'
    },
    sortBy: 'Razvrsti po'
  },
  dataFooter: {
    itemsPerPageText: 'Predmetov na stran:',
    itemsPerPageAll: 'Vse',
    nextPage: 'Naslednja stran',
    prevPage: 'Prejšnja stran',
    firstPage: 'Prva stran',
    lastPage: 'Zadnja stran',
    pageText: '{0}-{1} od {2}'
  },
  datePicker: {
    itemsSelected: '{0} izbrano/-ih',
    nextMonthAriaLabel: 'Naslednji mesec',
    nextYearAriaLabel: 'Naslednje leto',
    prevMonthAriaLabel: 'Prejšnji mesec',
    prevYearAriaLabel: 'Prejšnje leto'
  },
  noDataText: 'Ni podatkov',
  carousel: {
    prev: 'Prejšnji prikaz',
    next: 'Naslednji prikaz',
    ariaLabel: {
      delimiter: 'Carousel slide {0} of {1}'
    }
  },
  calendar: {
    moreEvents: 'Še {0}'
  },
  fileInput: {
    counter: '{0} datotek',
    counterSize: '{0} datotek ({1} skupno)'
  },
  timePicker: {
    am: 'AM',
    pm: 'PM'
  },
  pagination: {
    ariaLabel: {
      wrapper: 'Navigacija po strani po strani',
      next: 'Naslednja stran',
      previous: 'Prejšnja stran',
      page: 'Pojdi na stran {0}',
      currentPage: 'Trenutna stran, stran {0}'
    }
  }
});
//# sourceMappingURL=sl.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/locale/sr-Cyrl.js":
/*!****************************************************!*\
  !*** ./node_modules/vuetify/lib/locale/sr-Cyrl.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  badge: 'Значка',
  close: 'Close',
  dataIterator: {
    noResultsText: 'Ни један запис није пронађен',
    loadingText: 'Loading item...'
  },
  dataTable: {
    itemsPerPageText: 'Редова по страници:',
    ariaLabel: {
      sortDescending: 'Sorted descending.',
      sortAscending: 'Sorted ascending.',
      sortNone: 'Not sorted.',
      activateNone: 'Activate to remove sorting.',
      activateDescending: 'Activate to sort descending.',
      activateAscending: 'Activate to sort ascending.'
    },
    sortBy: 'Sort by'
  },
  dataFooter: {
    itemsPerPageText: 'Ставки по страници:',
    itemsPerPageAll: 'Све',
    nextPage: 'Следећа страница',
    prevPage: 'Претходна страница',
    firstPage: 'Прва страница',
    lastPage: 'Последња страница',
    pageText: '{0}-{1} од {2}'
  },
  datePicker: {
    itemsSelected: '{0} одабрано',
    nextMonthAriaLabel: 'Следећег месеца',
    nextYearAriaLabel: 'Следеће године',
    prevMonthAriaLabel: 'Претходни мјесец',
    prevYearAriaLabel: 'Претходна година'
  },
  noDataText: 'Нема доступних података',
  carousel: {
    prev: 'Превиоус висуал',
    next: 'Нект висуал',
    ariaLabel: {
      delimiter: 'Carousel slide {0} of {1}'
    }
  },
  calendar: {
    moreEvents: '{0} море'
  },
  fileInput: {
    counter: '{0} files',
    counterSize: '{0} files ({1} in total)'
  },
  timePicker: {
    am: 'AM',
    pm: 'PM'
  },
  pagination: {
    ariaLabel: {
      wrapper: 'Навигација страницама',
      next: 'Следећа страница',
      previous: 'Претходна страница',
      page: 'Иди на страну {0}',
      currentPage: 'Тренутна страница, страница {0}'
    }
  }
});
//# sourceMappingURL=sr-Cyrl.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/locale/sv.js":
/*!***********************************************!*\
  !*** ./node_modules/vuetify/lib/locale/sv.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  badge: 'Bricka',
  close: 'Stäng',
  dataIterator: {
    noResultsText: 'Inga poster funna',
    loadingText: 'Laddar data...'
  },
  dataTable: {
    itemsPerPageText: 'Rader per sida:',
    ariaLabel: {
      sortDescending: 'Sorterat fallande.',
      sortAscending: 'Sorterat stigande.',
      sortNone: 'Osorterat.',
      activateNone: 'Aktivera för att ta bort sortering.',
      activateDescending: 'Aktivera för sortering fallande.',
      activateAscending: 'Aktivera för sortering stigande.'
    },
    sortBy: 'Sortera efter'
  },
  dataFooter: {
    itemsPerPageText: 'Objekt per sida:',
    itemsPerPageAll: 'Alla',
    nextPage: 'Nästa sida',
    prevPage: 'Föregående sida',
    firstPage: 'Första sidan',
    lastPage: 'Sista sidan',
    pageText: '{0}-{1} av {2}'
  },
  datePicker: {
    itemsSelected: '{0} markerade',
    nextMonthAriaLabel: 'Nästa månad',
    nextYearAriaLabel: 'Nästa år',
    prevMonthAriaLabel: 'Förra månaden',
    prevYearAriaLabel: 'Förra året'
  },
  noDataText: 'Ingen data tillgänglig',
  carousel: {
    prev: 'Föregående vy',
    next: 'Nästa vy',
    ariaLabel: {
      delimiter: 'Carousel slide {0} of {1}'
    }
  },
  calendar: {
    moreEvents: '{0} fler'
  },
  fileInput: {
    counter: '{0} filer',
    counterSize: '{0} filer (av {1} totalt)'
  },
  timePicker: {
    am: 'AM',
    pm: 'PM'
  },
  pagination: {
    ariaLabel: {
      wrapper: 'Pagination Navigation',
      next: 'Nästa sida',
      previous: 'Föregående sida',
      page: 'Gå till sidan {0}',
      currentPage: 'Aktuell sida, sida {0}'
    }
  }
});
//# sourceMappingURL=sv.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/locale/th.js":
/*!***********************************************!*\
  !*** ./node_modules/vuetify/lib/locale/th.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  badge: 'สัญลักษณ์',
  close: 'ปิด',
  dataIterator: {
    noResultsText: 'ไม่พบข้อมูลที่ค้นหา',
    loadingText: 'กำลังโหลดข้อมูล...'
  },
  dataTable: {
    itemsPerPageText: 'แถวต่อหน้า:',
    ariaLabel: {
      sortDescending: 'เรียงจากมากไปน้อยอยู่',
      sortAscending: 'เรียงจากน้อยไปมากอยู่',
      sortNone: 'ไม่ได้เรียงลำดับ',
      activateNone: 'กดเพื่อปิดการเรียงลำดับ',
      activateDescending: 'กดเพื่อเรียงจากมากไปน้อย',
      activateAscending: 'กดเพื่อเรียงจากน้อยไปมาก'
    },
    sortBy: 'เรียงตาม'
  },
  dataFooter: {
    itemsPerPageText: 'รายการต่อหน้า:',
    itemsPerPageAll: 'ทั้งหมด',
    nextPage: 'หน้าต่อไป',
    prevPage: 'หน้าที่แล้ว',
    firstPage: 'หน้าแรก',
    lastPage: 'หน้าสุดท้าย',
    pageText: '{0}-{1} จาก {2}'
  },
  datePicker: {
    itemsSelected: 'เลือก {0} วัน',
    nextMonthAriaLabel: 'เดือนถัดไป',
    nextYearAriaLabel: 'ปีถัดไป',
    prevMonthAriaLabel: 'เดือนก่อนหน้า',
    prevYearAriaLabel: 'ปีก่อนหน้า'
  },
  noDataText: 'ไม่มีข้อมูล',
  carousel: {
    prev: 'ภาพก่อนหน้า',
    next: 'ภาพถัดไป',
    ariaLabel: {
      delimiter: 'ภาพสไลด์ที่ {0} จาก {1}'
    }
  },
  calendar: {
    moreEvents: 'มีอีก {0}'
  },
  fileInput: {
    counter: '{0} ไฟล์',
    counterSize: '{0} ไฟล์ (รวม {1})'
  },
  timePicker: {
    am: 'AM',
    pm: 'PM'
  },
  pagination: {
    ariaLabel: {
      wrapper: 'การนำทางไปยังหน้า',
      next: 'หน้าต่อไป',
      previous: 'หน้าที่แล้ว',
      page: 'ไปที่หน้า {0}',
      currentPage: 'หน้าปัจจุบัน (หน้า {0})'
    }
  }
});
//# sourceMappingURL=th.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/locale/tr.js":
/*!***********************************************!*\
  !*** ./node_modules/vuetify/lib/locale/tr.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  badge: 'rozet',
  close: 'Kapat',
  dataIterator: {
    noResultsText: 'Eşleşen veri bulunamadı',
    loadingText: 'Yükleniyor... Lütfen bekleyin.'
  },
  dataTable: {
    itemsPerPageText: 'Sayfa başına satır:',
    ariaLabel: {
      sortDescending: 'Z den A ya sıralı.',
      sortAscending: 'A dan Z ye sıralı.',
      sortNone: 'Sıralı değil. ',
      activateNone: 'Sıralamayı kaldırmak için etkinleştir.',
      activateDescending: 'Z den A ya sıralamak için etkinleştir.',
      activateAscending: 'A dan Z ye sıralamak için etkinleştir.'
    },
    sortBy: 'Sırala'
  },
  dataFooter: {
    itemsPerPageText: 'Sayfa başına satır:',
    itemsPerPageAll: 'Hepsi',
    nextPage: 'Sonraki sayfa',
    prevPage: 'Önceki sayfa',
    firstPage: 'İlk sayfa',
    lastPage: 'Son sayfa',
    pageText: '{0} - {1} arası, Toplam: {2} kayıt'
  },
  datePicker: {
    itemsSelected: '{0} öge seçildi',
    nextMonthAriaLabel: 'Gelecek ay',
    nextYearAriaLabel: 'Gelecek yıl',
    prevMonthAriaLabel: 'Geçtiğimiz ay',
    prevYearAriaLabel: 'Geçen yıl'
  },
  noDataText: 'Bu görünümde veri yok.',
  carousel: {
    prev: 'Önceki görsel',
    next: 'Sonraki görsel',
    ariaLabel: {
      delimiter: 'Galeri sayfa {0} / {1}'
    }
  },
  calendar: {
    moreEvents: '{0} tane daha'
  },
  fileInput: {
    counter: '{0} dosya',
    counterSize: '{0} dosya (toplamda {1})'
  },
  timePicker: {
    am: 'AM',
    pm: 'PM'
  },
  pagination: {
    ariaLabel: {
      wrapper: 'Sayfalandırma Navigasyonu',
      next: 'Sonraki sayfa',
      previous: 'Önceki sayfa',
      page: 'Sayfaya git {0}',
      currentPage: 'Geçerli Sayfa, Sayfa {0}'
    }
  }
});
//# sourceMappingURL=tr.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/locale/uk.js":
/*!***********************************************!*\
  !*** ./node_modules/vuetify/lib/locale/uk.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  badge: 'Знак',
  close: 'Закрити',
  dataIterator: {
    noResultsText: 'В результаті пошуку нічого не знайдено',
    loadingText: 'Завантаження...'
  },
  dataTable: {
    itemsPerPageText: 'Рядків на сторінці:',
    ariaLabel: {
      sortDescending: 'Відсортовано за спаданням.',
      sortAscending: 'Відсортовано за зростанням.',
      sortNone: 'Не відсортовано.',
      activateNone: 'Активувати, щоб видалити сортування.',
      activateDescending: 'Активувати, щоб відсортувати за спаданням.',
      activateAscending: 'Активувати, щоб відсортувати за зростанням.'
    },
    sortBy: 'Відсортувати за'
  },
  dataFooter: {
    itemsPerPageText: 'Елементів на сторінці:',
    itemsPerPageAll: 'Всі',
    nextPage: 'Наступна сторінка',
    prevPage: 'Попередня сторінка',
    firstPage: 'Перша сторінка',
    lastPage: 'Остання сторінка',
    pageText: '{0}-{1} з {2}'
  },
  datePicker: {
    itemsSelected: '{0} вибрано',
    nextMonthAriaLabel: 'Наступного місяця',
    nextYearAriaLabel: 'Наступного року',
    prevMonthAriaLabel: 'Попередній місяць',
    prevYearAriaLabel: 'Попередній рік'
  },
  noDataText: 'Немає даних для відображення',
  carousel: {
    prev: 'Попередній слайд',
    next: 'Наступий слайд',
    ariaLabel: {
      delimiter: 'Слайд {0} з {1}'
    }
  },
  calendar: {
    moreEvents: 'Ще {0}'
  },
  fileInput: {
    counter: '{0} файлів',
    counterSize: '{0} файлів ({1} загалом)'
  },
  timePicker: {
    am: 'AM',
    pm: 'PM'
  },
  pagination: {
    ariaLabel: {
      wrapper: 'Навігація по сторінках',
      next: 'Наступна сторінка',
      previous: 'Попередня сторінка',
      page: 'Перейти на сторінку {0}',
      currentPage: 'Поточна сторінка, Сторінка {0}'
    }
  }
});
//# sourceMappingURL=uk.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/locale/zh-Hans.js":
/*!****************************************************!*\
  !*** ./node_modules/vuetify/lib/locale/zh-Hans.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  badge: '徽章',
  close: '关闭',
  dataIterator: {
    noResultsText: '没有符合条件的结果',
    loadingText: '加载中……'
  },
  dataTable: {
    itemsPerPageText: '每页数目：',
    ariaLabel: {
      sortDescending: '：降序排列。',
      sortAscending: '：升序排列。',
      sortNone: '：未排序。',
      activateNone: '点击以移除排序。',
      activateDescending: '点击以降序排列。',
      activateAscending: '点击以升序排列。'
    },
    sortBy: '排序方式'
  },
  dataFooter: {
    itemsPerPageText: '每页数目：',
    itemsPerPageAll: '全部',
    nextPage: '下一页',
    prevPage: '上一页',
    firstPage: '首页',
    lastPage: '尾页',
    pageText: '{0}-{1} 共 {2}'
  },
  datePicker: {
    itemsSelected: '已选择 {0}',
    nextMonthAriaLabel: '下个月',
    nextYearAriaLabel: '明年',
    prevMonthAriaLabel: '前一个月',
    prevYearAriaLabel: '前一年'
  },
  noDataText: '没有数据',
  carousel: {
    prev: '上一张',
    next: '下一张',
    ariaLabel: {
      delimiter: 'Carousel slide {0} of {1}'
    }
  },
  calendar: {
    moreEvents: '还有 {0} 项'
  },
  fileInput: {
    counter: '{0} 个文件',
    counterSize: '{0} 个文件（共 {1}）'
  },
  timePicker: {
    am: 'AM',
    pm: 'PM'
  },
  pagination: {
    ariaLabel: {
      wrapper: '分页导航',
      next: '下一页',
      previous: '上一页',
      page: '转到页面 {0}',
      currentPage: '当前页 {0}'
    }
  }
});
//# sourceMappingURL=zh-Hans.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/locale/zh-Hant.js":
/*!****************************************************!*\
  !*** ./node_modules/vuetify/lib/locale/zh-Hant.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  badge: '徽章',
  close: '關閉',
  dataIterator: {
    noResultsText: '沒有符合條件的結果',
    loadingText: '讀取中...'
  },
  dataTable: {
    itemsPerPageText: '每頁列數：',
    ariaLabel: {
      sortDescending: '：降序排列。',
      sortAscending: '：升序排列。',
      sortNone: '無排序方式。點擊以升序排列。',
      activateNone: '點擊以移除排序方式。',
      activateDescending: '點擊以降序排列。',
      activateAscending: '點擊以移除排序方式。'
    },
    sortBy: '排序方式'
  },
  dataFooter: {
    itemsPerPageText: '每頁項目：',
    itemsPerPageAll: '全部',
    nextPage: '下一頁',
    prevPage: '上一頁',
    firstPage: '第一頁',
    lastPage: '最後頁',
    pageText: '{2} 條中的 {0}~{1} 條'
  },
  datePicker: {
    itemsSelected: '已選擇 {0}',
    nextMonthAriaLabel: '下個月',
    nextYearAriaLabel: '明年',
    prevMonthAriaLabel: '前一個月',
    prevYearAriaLabel: '前一年'
  },
  noDataText: '沒有資料',
  carousel: {
    prev: '上一張',
    next: '下一張',
    ariaLabel: {
      delimiter: 'Carousel slide {0} of {1}'
    }
  },
  calendar: {
    moreEvents: '還有其他 {0} 項'
  },
  fileInput: {
    counter: '{0} 個檔案',
    counterSize: '{0} 個檔案（共 {1}）'
  },
  timePicker: {
    am: 'AM',
    pm: 'PM'
  },
  pagination: {
    ariaLabel: {
      wrapper: '分頁導航',
      next: '下一頁',
      previous: '上一頁',
      page: '轉到頁面 {0}',
      currentPage: '當前頁 {0}'
    }
  }
});
//# sourceMappingURL=zh-Hant.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/mixins/binds-attrs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/vuetify/lib/mixins/binds-attrs/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/**
 * This mixin provides `attrs$` and `listeners$` to work around
 * vue bug https://github.com/vuejs/vue/issues/10115
 */

function makeWatcher(property) {
  return function (val, oldVal) {
    for (const attr in oldVal) {
      if (!Object.prototype.hasOwnProperty.call(val, attr)) {
        this.$delete(this.$data[property], attr);
      }
    }

    for (const attr in val) {
      this.$set(this.$data[property], attr, val[attr]);
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  data: () => ({
    attrs$: {},
    listeners$: {}
  }),

  created() {
    // Work around unwanted re-renders: https://github.com/vuejs/vue/issues/10115
    // Make sure to use `attrs$` instead of `$attrs` (confusing right?)
    this.$watch('$attrs', makeWatcher('attrs$'), {
      immediate: true
    });
    this.$watch('$listeners', makeWatcher('listeners$'), {
      immediate: true
    });
  }

}));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/mixins/colorable/index.js":
/*!************************************************************!*\
  !*** ./node_modules/vuetify/lib/mixins/colorable/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/console */ "./node_modules/vuetify/lib/util/console.js");
/* harmony import */ var _util_colorUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/colorUtils */ "./node_modules/vuetify/lib/util/colorUtils.js");



/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  name: 'colorable',
  props: {
    color: String
  },
  methods: {
    setBackgroundColor(color, data = {}) {
      if (typeof data.style === 'string') {
        // istanbul ignore next
        Object(_util_console__WEBPACK_IMPORTED_MODULE_1__["consoleError"])('style must be an object', this); // istanbul ignore next

        return data;
      }

      if (typeof data.class === 'string') {
        // istanbul ignore next
        Object(_util_console__WEBPACK_IMPORTED_MODULE_1__["consoleError"])('class must be an object', this); // istanbul ignore next

        return data;
      }

      if (Object(_util_colorUtils__WEBPACK_IMPORTED_MODULE_2__["isCssColor"])(color)) {
        data.style = { ...data.style,
          'background-color': `${color}`,
          'border-color': `${color}`
        };
      } else if (color) {
        data.class = { ...data.class,
          [color]: true
        };
      }

      return data;
    },

    setTextColor(color, data = {}) {
      if (typeof data.style === 'string') {
        // istanbul ignore next
        Object(_util_console__WEBPACK_IMPORTED_MODULE_1__["consoleError"])('style must be an object', this); // istanbul ignore next

        return data;
      }

      if (typeof data.class === 'string') {
        // istanbul ignore next
        Object(_util_console__WEBPACK_IMPORTED_MODULE_1__["consoleError"])('class must be an object', this); // istanbul ignore next

        return data;
      }

      if (Object(_util_colorUtils__WEBPACK_IMPORTED_MODULE_2__["isCssColor"])(color)) {
        data.style = { ...data.style,
          color: `${color}`,
          'caret-color': `${color}`
        };
      } else if (color) {
        const [colorName, colorModifier] = color.toString().trim().split(' ', 2);
        data.class = { ...data.class,
          [colorName + '--text']: true
        };

        if (colorModifier) {
          data.class['text--' + colorModifier] = true;
        }
      }

      return data;
    }

  }
}));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/mixins/elevatable/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/vuetify/lib/mixins/elevatable/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  name: 'elevatable',
  props: {
    elevation: [Number, String]
  },
  computed: {
    computedElevation() {
      return this.elevation;
    },

    elevationClasses() {
      const elevation = this.computedElevation;
      if (elevation == null) return {};
      if (isNaN(parseInt(elevation))) return {};
      return {
        [`elevation-${this.elevation}`]: true
      };
    }

  }
}));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/mixins/groupable/index.js":
/*!************************************************************!*\
  !*** ./node_modules/vuetify/lib/mixins/groupable/index.js ***!
  \************************************************************/
/*! exports provided: factory, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "factory", function() { return factory; });
/* harmony import */ var _registrable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../registrable */ "./node_modules/vuetify/lib/mixins/registrable/index.js");
// Mixins

function factory(namespace, child, parent) {
  return Object(_registrable__WEBPACK_IMPORTED_MODULE_0__["inject"])(namespace, child, parent).extend({
    name: 'groupable',
    props: {
      activeClass: {
        type: String,

        default() {
          if (!this[namespace]) return undefined;
          return this[namespace].activeClass;
        }

      },
      disabled: Boolean
    },

    data() {
      return {
        isActive: false
      };
    },

    computed: {
      groupClasses() {
        if (!this.activeClass) return {};
        return {
          [this.activeClass]: this.isActive
        };
      }

    },

    created() {
      this[namespace] && this[namespace].register(this);
    },

    beforeDestroy() {
      this[namespace] && this[namespace].unregister(this);
    },

    methods: {
      toggle() {
        this.$emit('change');
      }

    }
  });
}
/* eslint-disable-next-line @typescript-eslint/no-redeclare */

const Groupable = factory('itemGroup');
/* harmony default export */ __webpack_exports__["default"] = (Groupable);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/mixins/measurable/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/vuetify/lib/mixins/measurable/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/helpers */ "./node_modules/vuetify/lib/util/helpers.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
// Helpers
 // Types


/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_1___default.a.extend({
  name: 'measurable',
  props: {
    height: [Number, String],
    maxHeight: [Number, String],
    maxWidth: [Number, String],
    minHeight: [Number, String],
    minWidth: [Number, String],
    width: [Number, String]
  },
  computed: {
    measurableStyles() {
      const styles = {};
      const height = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_0__["convertToUnit"])(this.height);
      const minHeight = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_0__["convertToUnit"])(this.minHeight);
      const minWidth = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_0__["convertToUnit"])(this.minWidth);
      const maxHeight = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_0__["convertToUnit"])(this.maxHeight);
      const maxWidth = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_0__["convertToUnit"])(this.maxWidth);
      const width = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_0__["convertToUnit"])(this.width);
      if (height) styles.height = height;
      if (minHeight) styles.minHeight = minHeight;
      if (minWidth) styles.minWidth = minWidth;
      if (maxHeight) styles.maxHeight = maxHeight;
      if (maxWidth) styles.maxWidth = maxWidth;
      if (width) styles.width = width;
      return styles;
    }

  }
}));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/mixins/positionable/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/vuetify/lib/mixins/positionable/index.js ***!
  \***************************************************************/
/*! exports provided: factory, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "factory", function() { return factory; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/helpers */ "./node_modules/vuetify/lib/util/helpers.js");


const availableProps = {
  absolute: Boolean,
  bottom: Boolean,
  fixed: Boolean,
  left: Boolean,
  right: Boolean,
  top: Boolean
};
function factory(selected = []) {
  return vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
    name: 'positionable',
    props: selected.length ? Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__["filterObjectOnKeys"])(availableProps, selected) : availableProps
  });
}
/* harmony default export */ __webpack_exports__["default"] = (factory()); // Add a `*` before the second `/`

/* Tests /
let single = factory(['top']).extend({
  created () {
    this.top
    this.bottom
    this.absolute
  }
})

let some = factory(['top', 'bottom']).extend({
  created () {
    this.top
    this.bottom
    this.absolute
  }
})

let all = factory().extend({
  created () {
    this.top
    this.bottom
    this.absolute
    this.foobar
  }
})
/**/
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/mixins/registrable/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/vuetify/lib/mixins/registrable/index.js ***!
  \**************************************************************/
/*! exports provided: inject, provide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inject", function() { return inject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provide", function() { return provide; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/console */ "./node_modules/vuetify/lib/util/console.js");



function generateWarning(child, parent) {
  return () => Object(_util_console__WEBPACK_IMPORTED_MODULE_1__["consoleWarn"])(`The ${child} component must be used inside a ${parent}`);
}

function inject(namespace, child, parent) {
  const defaultImpl = child && parent ? {
    register: generateWarning(child, parent),
    unregister: generateWarning(child, parent)
  } : null;
  return vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
    name: 'registrable-inject',
    inject: {
      [namespace]: {
        default: defaultImpl
      }
    }
  });
}
function provide(namespace, self = false) {
  return vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
    name: 'registrable-provide',

    provide() {
      return {
        [namespace]: self ? this : {
          register: this.register,
          unregister: this.unregister
        }
      };
    }

  });
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/mixins/roundable/index.js":
/*!************************************************************!*\
  !*** ./node_modules/vuetify/lib/mixins/roundable/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* @vue/component */

/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  name: 'roundable',
  props: {
    rounded: [Boolean, String],
    tile: Boolean
  },
  computed: {
    roundedClasses() {
      const composite = [];
      const rounded = typeof this.rounded === 'string' ? String(this.rounded) : this.rounded === true;

      if (this.tile) {
        composite.push('rounded-0');
      } else if (typeof rounded === 'string') {
        const values = rounded.split(' ');

        for (const value of values) {
          composite.push(`rounded-${value}`);
        }
      } else if (rounded) {
        composite.push('rounded');
      }

      return composite.length > 0 ? {
        [composite.join(' ')]: true
      } : {};
    }

  }
}));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/mixins/routable/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/vuetify/lib/mixins/routable/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _directives_ripple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../directives/ripple */ "./node_modules/vuetify/lib/directives/ripple/index.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/helpers */ "./node_modules/vuetify/lib/util/helpers.js");
 // Directives

 // Utilities


/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  name: 'routable',
  directives: {
    Ripple: _directives_ripple__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    activeClass: String,
    append: Boolean,
    disabled: Boolean,
    exact: {
      type: Boolean,
      default: undefined
    },
    exactActiveClass: String,
    link: Boolean,
    href: [String, Object],
    to: [String, Object],
    nuxt: Boolean,
    replace: Boolean,
    ripple: {
      type: [Boolean, Object],
      default: null
    },
    tag: String,
    target: String
  },
  data: () => ({
    isActive: false,
    proxyClass: ''
  }),
  computed: {
    classes() {
      const classes = {};
      if (this.to) return classes;
      if (this.activeClass) classes[this.activeClass] = this.isActive;
      if (this.proxyClass) classes[this.proxyClass] = this.isActive;
      return classes;
    },

    computedRipple() {
      var _this$ripple;

      return (_this$ripple = this.ripple) != null ? _this$ripple : !this.disabled && this.isClickable;
    },

    isClickable() {
      if (this.disabled) return false;
      return Boolean(this.isLink || this.$listeners.click || this.$listeners['!click'] || this.$attrs.tabindex);
    },

    isLink() {
      return this.to || this.href || this.link;
    },

    styles: () => ({})
  },
  watch: {
    $route: 'onRouteChange'
  },
  methods: {
    click(e) {
      this.$emit('click', e);
    },

    generateRouteLink() {
      let exact = this.exact;
      let tag;
      const data = {
        attrs: {
          tabindex: 'tabindex' in this.$attrs ? this.$attrs.tabindex : undefined
        },
        class: this.classes,
        style: this.styles,
        props: {},
        directives: [{
          name: 'ripple',
          value: this.computedRipple
        }],
        [this.to ? 'nativeOn' : 'on']: { ...this.$listeners,
          click: this.click
        },
        ref: 'link'
      };

      if (typeof this.exact === 'undefined') {
        exact = this.to === '/' || this.to === Object(this.to) && this.to.path === '/';
      }

      if (this.to) {
        // Add a special activeClass hook
        // for component level styles
        let activeClass = this.activeClass;
        let exactActiveClass = this.exactActiveClass || activeClass;

        if (this.proxyClass) {
          activeClass = `${activeClass} ${this.proxyClass}`.trim();
          exactActiveClass = `${exactActiveClass} ${this.proxyClass}`.trim();
        }

        tag = this.nuxt ? 'nuxt-link' : 'router-link';
        Object.assign(data.props, {
          to: this.to,
          exact,
          activeClass,
          exactActiveClass,
          append: this.append,
          replace: this.replace
        });
      } else {
        tag = this.href && 'a' || this.tag || 'div';
        if (tag === 'a' && this.href) data.attrs.href = this.href;
      }

      if (this.target) data.attrs.target = this.target;
      return {
        tag,
        data
      };
    },

    onRouteChange() {
      if (!this.to || !this.$refs.link || !this.$route) return;
      const activeClass = `${this.activeClass} ${this.proxyClass || ''}`.trim();
      const path = `_vnode.data.class.${activeClass}`;
      this.$nextTick(() => {
        /* istanbul ignore else */
        if (Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__["getObjectValueByPath"])(this.$refs.link, path)) {
          this.toggle();
        }
      });
    },

    toggle: () => {}
  }
}));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/mixins/sizeable/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/vuetify/lib/mixins/sizeable/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  name: 'sizeable',
  props: {
    large: Boolean,
    small: Boolean,
    xLarge: Boolean,
    xSmall: Boolean
  },
  computed: {
    medium() {
      return Boolean(!this.xSmall && !this.small && !this.large && !this.xLarge);
    },

    sizeableClasses() {
      return {
        'v-size--x-small': this.xSmall,
        'v-size--small': this.small,
        'v-size--default': this.medium,
        'v-size--large': this.large,
        'v-size--x-large': this.xLarge
      };
    }

  }
}));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/mixins/themeable/index.js":
/*!************************************************************!*\
  !*** ./node_modules/vuetify/lib/mixins/themeable/index.js ***!
  \************************************************************/
/*! exports provided: default, functionalThemeClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "functionalThemeClasses", function() { return functionalThemeClasses; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* @vue/component */

const Themeable = vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend().extend({
  name: 'themeable',

  provide() {
    return {
      theme: this.themeableProvide
    };
  },

  inject: {
    theme: {
      default: {
        isDark: false
      }
    }
  },
  props: {
    dark: {
      type: Boolean,
      default: null
    },
    light: {
      type: Boolean,
      default: null
    }
  },

  data() {
    return {
      themeableProvide: {
        isDark: false
      }
    };
  },

  computed: {
    appIsDark() {
      return this.$vuetify.theme.dark || false;
    },

    isDark() {
      if (this.dark === true) {
        // explicitly dark
        return true;
      } else if (this.light === true) {
        // explicitly light
        return false;
      } else {
        // inherit from parent, or default false if there is none
        return this.theme.isDark;
      }
    },

    themeClasses() {
      return {
        'theme--dark': this.isDark,
        'theme--light': !this.isDark
      };
    },

    /** Used by menus and dialogs, inherits from v-app instead of the parent */
    rootIsDark() {
      if (this.dark === true) {
        // explicitly dark
        return true;
      } else if (this.light === true) {
        // explicitly light
        return false;
      } else {
        // inherit from v-app
        return this.appIsDark;
      }
    },

    rootThemeClasses() {
      return {
        'theme--dark': this.rootIsDark,
        'theme--light': !this.rootIsDark
      };
    }

  },
  watch: {
    isDark: {
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          this.themeableProvide.isDark = this.isDark;
        }
      },

      immediate: true
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (Themeable);
function functionalThemeClasses(context) {
  const vm = { ...context.props,
    ...context.injections
  };
  const isDark = Themeable.options.computed.isDark.call(vm);
  return Themeable.options.computed.themeClasses.call({
    isDark
  });
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/mixins/toggleable/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/vuetify/lib/mixins/toggleable/index.js ***!
  \*************************************************************/
/*! exports provided: factory, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "factory", function() { return factory; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

function factory(prop = 'value', event = 'input') {
  return vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
    name: 'toggleable',
    model: {
      prop,
      event
    },
    props: {
      [prop]: {
        required: false
      }
    },

    data() {
      return {
        isActive: !!this[prop]
      };
    },

    watch: {
      [prop](val) {
        this.isActive = !!val;
      },

      isActive(val) {
        !!val !== this[prop] && this.$emit(event, val);
      }

    }
  });
}
/* eslint-disable-next-line @typescript-eslint/no-redeclare */

const Toggleable = factory();
/* harmony default export */ __webpack_exports__["default"] = (Toggleable);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/presets/default/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/vuetify/lib/presets/default/index.js ***!
  \***********************************************************/
/*! exports provided: preset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preset", function() { return preset; });
/* harmony import */ var _src_styles_main_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/styles/main.sass */ "./node_modules/vuetify/src/styles/main.sass");
/* harmony import */ var _src_styles_main_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_styles_main_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../locale */ "./node_modules/vuetify/lib/locale/index.js");
// Styles
 // Locale


const preset = {
  breakpoint: {
    // TODO: update to MD2 spec in v3 - 1280
    mobileBreakpoint: 1264,
    scrollBarWidth: 16,
    thresholds: {
      xs: 600,
      sm: 960,
      md: 1280,
      lg: 1920
    }
  },
  icons: {
    // TODO: remove v3
    iconfont: 'mdi',
    values: {}
  },
  lang: {
    current: 'en',
    locales: {
      en: _locale__WEBPACK_IMPORTED_MODULE_1__["en"]
    },
    // Default translator exists in lang service
    t: undefined
  },
  rtl: false,
  theme: {
    dark: false,
    default: 'light',
    disable: false,
    options: {
      cspNonce: undefined,
      customProperties: undefined,
      minifyTheme: undefined,
      themeCache: undefined,
      variations: true
    },
    themes: {
      light: {
        primary: '#1976D2',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00'
      },
      dark: {
        primary: '#2196F3',
        secondary: '#424242',
        accent: '#FF4081',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00'
      }
    }
  }
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/services/application/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/vuetify/lib/services/application/index.js ***!
  \****************************************************************/
/*! exports provided: Application */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return Application; });
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service */ "./node_modules/vuetify/lib/services/service/index.js");
// Extensions

class Application extends _service__WEBPACK_IMPORTED_MODULE_0__["Service"] {
  constructor() {
    super(...arguments);
    this.bar = 0;
    this.top = 0;
    this.left = 0;
    this.insetFooter = 0;
    this.right = 0;
    this.bottom = 0;
    this.footer = 0;
    this.application = {
      bar: {},
      top: {},
      left: {},
      insetFooter: {},
      right: {},
      bottom: {},
      footer: {}
    };
  }

  register(uid, location, size) {
    this.application[location] = {
      [uid]: size
    };
    this.update(location);
  }

  unregister(uid, location) {
    if (this.application[location][uid] == null) return;
    delete this.application[location][uid];
    this.update(location);
  }

  update(location) {
    this[location] = Object.values(this.application[location]).reduce((acc, cur) => acc + cur, 0);
  }

}
Application.property = 'application';
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/services/breakpoint/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/vuetify/lib/services/breakpoint/index.js ***!
  \***************************************************************/
/*! exports provided: Breakpoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Breakpoint", function() { return Breakpoint; });
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service */ "./node_modules/vuetify/lib/services/service/index.js");
// Extensions

class Breakpoint extends _service__WEBPACK_IMPORTED_MODULE_0__["Service"] {
  constructor(preset) {
    super(); // Public

    this.xs = false;
    this.sm = false;
    this.md = false;
    this.lg = false;
    this.xl = false;
    this.xsOnly = false;
    this.smOnly = false;
    this.smAndDown = false;
    this.smAndUp = false;
    this.mdOnly = false;
    this.mdAndDown = false;
    this.mdAndUp = false;
    this.lgOnly = false;
    this.lgAndDown = false;
    this.lgAndUp = false;
    this.xlOnly = false; // Value is xs to match v2.x functionality

    this.name = 'xs';
    this.height = 0;
    this.width = 0; // TODO: Add functionality to detect this dynamically in v3
    // Value is true to match v2.x functionality

    this.mobile = true;
    this.resizeTimeout = 0;
    const {
      mobileBreakpoint,
      scrollBarWidth,
      thresholds
    } = preset[Breakpoint.property];
    this.mobileBreakpoint = mobileBreakpoint;
    this.scrollBarWidth = scrollBarWidth;
    this.thresholds = thresholds;
  }

  init() {
    this.update();
    /* istanbul ignore if */

    if (typeof window === 'undefined') return;
    window.addEventListener('resize', this.onResize.bind(this), {
      passive: true
    });
  }
  /* eslint-disable-next-line max-statements */


  update(ssr = false) {
    const height = ssr ? 0 : this.getClientHeight();
    const width = ssr ? 0 : this.getClientWidth();
    const xs = width < this.thresholds.xs;
    const sm = width < this.thresholds.sm && !xs;
    const md = width < this.thresholds.md - this.scrollBarWidth && !(sm || xs);
    const lg = width < this.thresholds.lg - this.scrollBarWidth && !(md || sm || xs);
    const xl = width >= this.thresholds.lg - this.scrollBarWidth;
    this.height = height;
    this.width = width;
    this.xs = xs;
    this.sm = sm;
    this.md = md;
    this.lg = lg;
    this.xl = xl;
    this.xsOnly = xs;
    this.smOnly = sm;
    this.smAndDown = (xs || sm) && !(md || lg || xl);
    this.smAndUp = !xs && (sm || md || lg || xl);
    this.mdOnly = md;
    this.mdAndDown = (xs || sm || md) && !(lg || xl);
    this.mdAndUp = !(xs || sm) && (md || lg || xl);
    this.lgOnly = lg;
    this.lgAndDown = (xs || sm || md || lg) && !xl;
    this.lgAndUp = !(xs || sm || md) && (lg || xl);
    this.xlOnly = xl;

    switch (true) {
      case xs:
        this.name = 'xs';
        break;

      case sm:
        this.name = 'sm';
        break;

      case md:
        this.name = 'md';
        break;

      case lg:
        this.name = 'lg';
        break;

      default:
        this.name = 'xl';
        break;
    }

    if (typeof this.mobileBreakpoint === 'number') {
      this.mobile = width < parseInt(this.mobileBreakpoint, 10);
      return;
    }

    const breakpoints = {
      xs: 0,
      sm: 1,
      md: 2,
      lg: 3,
      xl: 4
    };
    const current = breakpoints[this.name];
    const max = breakpoints[this.mobileBreakpoint];
    this.mobile = current <= max;
  }

  onResize() {
    clearTimeout(this.resizeTimeout); // Added debounce to match what
    // v-resize used to do but was
    // removed due to a memory leak
    // https://github.com/vuetifyjs/vuetify/pull/2997

    this.resizeTimeout = window.setTimeout(this.update.bind(this), 200);
  } // Cross-browser support as described in:
  // https://stackoverflow.com/questions/1248081


  getClientWidth() {
    /* istanbul ignore if */
    if (typeof document === 'undefined') return 0; // SSR

    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  }

  getClientHeight() {
    /* istanbul ignore if */
    if (typeof document === 'undefined') return 0; // SSR

    return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  }

}
Breakpoint.property = 'breakpoint';
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/services/goto/easing-patterns.js":
/*!*******************************************************************!*\
  !*** ./node_modules/vuetify/lib/services/goto/easing-patterns.js ***!
  \*******************************************************************/
/*! exports provided: linear, easeInQuad, easeOutQuad, easeInOutQuad, easeInCubic, easeOutCubic, easeInOutCubic, easeInQuart, easeOutQuart, easeInOutQuart, easeInQuint, easeOutQuint, easeInOutQuint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linear", function() { return linear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInQuad", function() { return easeInQuad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOutQuad", function() { return easeOutQuad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOutQuad", function() { return easeInOutQuad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInCubic", function() { return easeInCubic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOutCubic", function() { return easeOutCubic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOutCubic", function() { return easeInOutCubic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInQuart", function() { return easeInQuart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOutQuart", function() { return easeOutQuart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOutQuart", function() { return easeInOutQuart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInQuint", function() { return easeInQuint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOutQuint", function() { return easeOutQuint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOutQuint", function() { return easeInOutQuint; });
// linear
const linear = t => t; // accelerating from zero velocity

const easeInQuad = t => t ** 2; // decelerating to zero velocity

const easeOutQuad = t => t * (2 - t); // acceleration until halfway, then deceleration

const easeInOutQuad = t => t < 0.5 ? 2 * t ** 2 : -1 + (4 - 2 * t) * t; // accelerating from zero velocity

const easeInCubic = t => t ** 3; // decelerating to zero velocity

const easeOutCubic = t => --t ** 3 + 1; // acceleration until halfway, then deceleration

const easeInOutCubic = t => t < 0.5 ? 4 * t ** 3 : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1; // accelerating from zero velocity

const easeInQuart = t => t ** 4; // decelerating to zero velocity

const easeOutQuart = t => 1 - --t ** 4; // acceleration until halfway, then deceleration

const easeInOutQuart = t => t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t; // accelerating from zero velocity

const easeInQuint = t => t ** 5; // decelerating to zero velocity

const easeOutQuint = t => 1 + --t ** 5; // acceleration until halfway, then deceleration

const easeInOutQuint = t => t < 0.5 ? 16 * t ** 5 : 1 + 16 * --t ** 5;
//# sourceMappingURL=easing-patterns.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/services/goto/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/vuetify/lib/services/goto/index.js ***!
  \*********************************************************/
/*! exports provided: default, Goto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return goTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Goto", function() { return Goto; });
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service */ "./node_modules/vuetify/lib/services/service/index.js");
/* harmony import */ var _easing_patterns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./easing-patterns */ "./node_modules/vuetify/lib/services/goto/easing-patterns.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./node_modules/vuetify/lib/services/goto/util.js");
// Extensions
 // Utilities



function goTo(_target, _settings = {}) {
  const settings = {
    container: document.scrollingElement || document.body || document.documentElement,
    duration: 500,
    offset: 0,
    easing: 'easeInOutCubic',
    appOffset: true,
    ..._settings
  };
  const container = Object(_util__WEBPACK_IMPORTED_MODULE_2__["getContainer"])(settings.container);
  /* istanbul ignore else */

  if (settings.appOffset && goTo.framework.application) {
    const isDrawer = container.classList.contains('v-navigation-drawer');
    const isClipped = container.classList.contains('v-navigation-drawer--clipped');
    const {
      bar,
      top
    } = goTo.framework.application;
    settings.offset += bar;
    /* istanbul ignore else */

    if (!isDrawer || isClipped) settings.offset += top;
  }

  const startTime = performance.now();
  let targetLocation;

  if (typeof _target === 'number') {
    targetLocation = Object(_util__WEBPACK_IMPORTED_MODULE_2__["getOffset"])(_target) - settings.offset;
  } else {
    targetLocation = Object(_util__WEBPACK_IMPORTED_MODULE_2__["getOffset"])(_target) - Object(_util__WEBPACK_IMPORTED_MODULE_2__["getOffset"])(container) - settings.offset;
  }

  const startLocation = container.scrollTop;
  if (targetLocation === startLocation) return Promise.resolve(targetLocation);
  const ease = typeof settings.easing === 'function' ? settings.easing : _easing_patterns__WEBPACK_IMPORTED_MODULE_1__[settings.easing];
  /* istanbul ignore else */

  if (!ease) throw new TypeError(`Easing function "${settings.easing}" not found.`); // Cannot be tested properly in jsdom

  /* istanbul ignore next */

  return new Promise(resolve => requestAnimationFrame(function step(currentTime) {
    const timeElapsed = currentTime - startTime;
    const progress = Math.abs(settings.duration ? Math.min(timeElapsed / settings.duration, 1) : 1);
    container.scrollTop = Math.floor(startLocation + (targetLocation - startLocation) * ease(progress));
    const clientHeight = container === document.body ? document.documentElement.clientHeight : container.clientHeight;

    if (progress === 1 || clientHeight + container.scrollTop === container.scrollHeight) {
      return resolve(targetLocation);
    }

    requestAnimationFrame(step);
  }));
}
goTo.framework = {};

goTo.init = () => {};

class Goto extends _service__WEBPACK_IMPORTED_MODULE_0__["Service"] {
  constructor() {
    super();
    return goTo;
  }

}
Goto.property = 'goTo';
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/services/goto/util.js":
/*!********************************************************!*\
  !*** ./node_modules/vuetify/lib/services/goto/util.js ***!
  \********************************************************/
/*! exports provided: getOffset, getContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOffset", function() { return getOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContainer", function() { return getContainer; });
// Return target's cumulative offset from the top
function getOffset(target) {
  if (typeof target === 'number') {
    return target;
  }

  let el = $(target);

  if (!el) {
    throw typeof target === 'string' ? new Error(`Target element "${target}" not found.`) : new TypeError(`Target must be a Number/Selector/HTMLElement/VueComponent, received ${type(target)} instead.`);
  }

  let totalOffset = 0;

  while (el) {
    totalOffset += el.offsetTop;
    el = el.offsetParent;
  }

  return totalOffset;
}
function getContainer(container) {
  const el = $(container);
  if (el) return el;
  throw typeof container === 'string' ? new Error(`Container element "${container}" not found.`) : new TypeError(`Container must be a Selector/HTMLElement/VueComponent, received ${type(container)} instead.`);
}

function type(el) {
  return el == null ? el : el.constructor.name;
}

function $(el) {
  if (typeof el === 'string') {
    return document.querySelector(el);
  } else if (el && el._isVue) {
    return el.$el;
  } else if (el instanceof HTMLElement) {
    return el;
  } else {
    return null;
  }
}
//# sourceMappingURL=util.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/services/icons/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/vuetify/lib/services/icons/index.js ***!
  \**********************************************************/
/*! exports provided: Icons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icons", function() { return Icons; });
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service */ "./node_modules/vuetify/lib/services/service/index.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/helpers */ "./node_modules/vuetify/lib/util/helpers.js");
/* harmony import */ var _presets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./presets */ "./node_modules/vuetify/lib/services/icons/presets/index.js");
// Extensions
 // Utilities

 // Presets


class Icons extends _service__WEBPACK_IMPORTED_MODULE_0__["Service"] {
  constructor(preset) {
    super();
    const {
      iconfont,
      values
    } = preset[Icons.property];
    this.iconfont = iconfont;
    this.values = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__["mergeDeep"])(_presets__WEBPACK_IMPORTED_MODULE_2__["default"][iconfont], values);
  }

}
Icons.property = 'icons';
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/services/icons/presets/fa-svg.js":
/*!*******************************************************************!*\
  !*** ./node_modules/vuetify/lib/services/icons/presets/fa-svg.js ***!
  \*******************************************************************/
/*! exports provided: convertToComponentDeclarations, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertToComponentDeclarations", function() { return convertToComponentDeclarations; });
/* harmony import */ var _fa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fa */ "./node_modules/vuetify/lib/services/icons/presets/fa.js");

function convertToComponentDeclarations(component, iconSet) {
  const result = {};

  for (const key in iconSet) {
    result[key] = {
      component,
      props: {
        icon: iconSet[key].split(' fa-')
      }
    };
  }

  return result;
}
/* harmony default export */ __webpack_exports__["default"] = (convertToComponentDeclarations('font-awesome-icon', _fa__WEBPACK_IMPORTED_MODULE_0__["default"]));
//# sourceMappingURL=fa-svg.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/services/icons/presets/fa.js":
/*!***************************************************************!*\
  !*** ./node_modules/vuetify/lib/services/icons/presets/fa.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const icons = {
  complete: 'fas fa-check',
  cancel: 'fas fa-times-circle',
  close: 'fas fa-times',
  delete: 'fas fa-times-circle',
  clear: 'fas fa-times-circle',
  success: 'fas fa-check-circle',
  info: 'fas fa-info-circle',
  warning: 'fas fa-exclamation',
  error: 'fas fa-exclamation-triangle',
  prev: 'fas fa-chevron-left',
  next: 'fas fa-chevron-right',
  checkboxOn: 'fas fa-check-square',
  checkboxOff: 'far fa-square',
  checkboxIndeterminate: 'fas fa-minus-square',
  delimiter: 'fas fa-circle',
  sort: 'fas fa-sort-up',
  expand: 'fas fa-chevron-down',
  menu: 'fas fa-bars',
  subgroup: 'fas fa-caret-down',
  dropdown: 'fas fa-caret-down',
  radioOn: 'far fa-dot-circle',
  radioOff: 'far fa-circle',
  edit: 'fas fa-edit',
  ratingEmpty: 'far fa-star',
  ratingFull: 'fas fa-star',
  ratingHalf: 'fas fa-star-half',
  loading: 'fas fa-sync',
  first: 'fas fa-step-backward',
  last: 'fas fa-step-forward',
  unfold: 'fas fa-arrows-alt-v',
  file: 'fas fa-paperclip',
  plus: 'fas fa-plus',
  minus: 'fas fa-minus'
};
/* harmony default export */ __webpack_exports__["default"] = (icons);
//# sourceMappingURL=fa.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/services/icons/presets/fa4.js":
/*!****************************************************************!*\
  !*** ./node_modules/vuetify/lib/services/icons/presets/fa4.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const icons = {
  complete: 'fa fa-check',
  cancel: 'fa fa-times-circle',
  close: 'fa fa-times',
  delete: 'fa fa-times-circle',
  clear: 'fa fa-times-circle',
  success: 'fa fa-check-circle',
  info: 'fa fa-info-circle',
  warning: 'fa fa-exclamation',
  error: 'fa fa-exclamation-triangle',
  prev: 'fa fa-chevron-left',
  next: 'fa fa-chevron-right',
  checkboxOn: 'fa fa-check-square',
  checkboxOff: 'fa fa-square-o',
  checkboxIndeterminate: 'fa fa-minus-square',
  delimiter: 'fa fa-circle',
  sort: 'fa fa-sort-up',
  expand: 'fa fa-chevron-down',
  menu: 'fa fa-bars',
  subgroup: 'fa fa-caret-down',
  dropdown: 'fa fa-caret-down',
  radioOn: 'fa fa-dot-circle-o',
  radioOff: 'fa fa-circle-o',
  edit: 'fa fa-pencil',
  ratingEmpty: 'fa fa-star-o',
  ratingFull: 'fa fa-star',
  ratingHalf: 'fa fa-star-half-o',
  loading: 'fa fa-refresh',
  first: 'fa fa-step-backward',
  last: 'fa fa-step-forward',
  unfold: 'fa fa-angle-double-down',
  file: 'fa fa-paperclip',
  plus: 'fa fa-plus',
  minus: 'fa fa-minus'
};
/* harmony default export */ __webpack_exports__["default"] = (icons);
//# sourceMappingURL=fa4.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/services/icons/presets/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/vuetify/lib/services/icons/presets/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mdi_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mdi-svg */ "./node_modules/vuetify/lib/services/icons/presets/mdi-svg.js");
/* harmony import */ var _md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./md */ "./node_modules/vuetify/lib/services/icons/presets/md.js");
/* harmony import */ var _mdi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mdi */ "./node_modules/vuetify/lib/services/icons/presets/mdi.js");
/* harmony import */ var _fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fa */ "./node_modules/vuetify/lib/services/icons/presets/fa.js");
/* harmony import */ var _fa4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fa4 */ "./node_modules/vuetify/lib/services/icons/presets/fa4.js");
/* harmony import */ var _fa_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fa-svg */ "./node_modules/vuetify/lib/services/icons/presets/fa-svg.js");






/* harmony default export */ __webpack_exports__["default"] = (Object.freeze({
  mdiSvg: _mdi_svg__WEBPACK_IMPORTED_MODULE_0__["default"],
  md: _md__WEBPACK_IMPORTED_MODULE_1__["default"],
  mdi: _mdi__WEBPACK_IMPORTED_MODULE_2__["default"],
  fa: _fa__WEBPACK_IMPORTED_MODULE_3__["default"],
  fa4: _fa4__WEBPACK_IMPORTED_MODULE_4__["default"],
  faSvg: _fa_svg__WEBPACK_IMPORTED_MODULE_5__["default"]
}));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/services/icons/presets/md.js":
/*!***************************************************************!*\
  !*** ./node_modules/vuetify/lib/services/icons/presets/md.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const icons = {
  complete: 'check',
  cancel: 'cancel',
  close: 'close',
  delete: 'cancel',
  clear: 'clear',
  success: 'check_circle',
  info: 'info',
  warning: 'priority_high',
  error: 'warning',
  prev: 'chevron_left',
  next: 'chevron_right',
  checkboxOn: 'check_box',
  checkboxOff: 'check_box_outline_blank',
  checkboxIndeterminate: 'indeterminate_check_box',
  delimiter: 'fiber_manual_record',
  sort: 'arrow_upward',
  expand: 'keyboard_arrow_down',
  menu: 'menu',
  subgroup: 'arrow_drop_down',
  dropdown: 'arrow_drop_down',
  radioOn: 'radio_button_checked',
  radioOff: 'radio_button_unchecked',
  edit: 'edit',
  ratingEmpty: 'star_border',
  ratingFull: 'star',
  ratingHalf: 'star_half',
  loading: 'cached',
  first: 'first_page',
  last: 'last_page',
  unfold: 'unfold_more',
  file: 'attach_file',
  plus: 'add',
  minus: 'remove'
};
/* harmony default export */ __webpack_exports__["default"] = (icons);
//# sourceMappingURL=md.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/services/icons/presets/mdi-svg.js":
/*!********************************************************************!*\
  !*** ./node_modules/vuetify/lib/services/icons/presets/mdi-svg.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const icons = {
  complete: 'M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z',
  cancel: 'M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z',
  close: 'M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z',
  delete: 'M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z',
  clear: 'M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z',
  success: 'M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z',
  info: 'M13,9H11V7H13M13,17H11V11H13M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z',
  warning: 'M11,4.5H13V15.5H11V4.5M13,17.5V19.5H11V17.5H13Z',
  error: 'M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z',
  prev: 'M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z',
  next: 'M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z',
  checkboxOn: 'M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z',
  checkboxOff: 'M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z',
  checkboxIndeterminate: 'M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z',
  delimiter: 'M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z',
  sort: 'M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z',
  expand: 'M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z',
  menu: 'M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z',
  subgroup: 'M7,10L12,15L17,10H7Z',
  dropdown: 'M7,10L12,15L17,10H7Z',
  radioOn: 'M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,7C9.24,7 7,9.24 7,12C7,14.76 9.24,17 12,17C14.76,17 17,14.76 17,12C17,9.24 14.76,7 12,7Z',
  radioOff: 'M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z',
  edit: 'M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z',
  ratingEmpty: 'M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z',
  ratingFull: 'M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z',
  ratingHalf: 'M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z',
  loading: 'M19,8L15,12H18C18,15.31 15.31,18 12,18C11,18 10.03,17.75 9.2,17.3L7.74,18.76C8.97,19.54 10.43,20 12,20C16.42,20 20,16.42 20,12H23M6,12C6,8.69 8.69,6 12,6C13,6 13.97,6.25 14.8,6.7L16.26,5.24C15.03,4.46 13.57,4 12,4C7.58,4 4,7.58 4,12H1L5,16L9,12',
  first: 'M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z',
  last: 'M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z',
  unfold: 'M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z',
  file: 'M16.5,6V17.5C16.5,19.71 14.71,21.5 12.5,21.5C10.29,21.5 8.5,19.71 8.5,17.5V5C8.5,3.62 9.62,2.5 11,2.5C12.38,2.5 13.5,3.62 13.5,5V15.5C13.5,16.05 13.05,16.5 12.5,16.5C11.95,16.5 11.5,16.05 11.5,15.5V6H10V15.5C10,16.88 11.12,18 12.5,18C13.88,18 15,16.88 15,15.5V5C15,2.79 13.21,1 11,1C8.79,1 7,2.79 7,5V17.5C7,20.54 9.46,23 12.5,23C15.54,23 18,20.54 18,17.5V6H16.5Z',
  plus: 'M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z',
  minus: 'M19,13H5V11H19V13Z'
};
/* harmony default export */ __webpack_exports__["default"] = (icons);
//# sourceMappingURL=mdi-svg.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/services/icons/presets/mdi.js":
/*!****************************************************************!*\
  !*** ./node_modules/vuetify/lib/services/icons/presets/mdi.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const icons = {
  complete: 'mdi-check',
  cancel: 'mdi-close-circle',
  close: 'mdi-close',
  delete: 'mdi-close-circle',
  clear: 'mdi-close',
  success: 'mdi-check-circle',
  info: 'mdi-information',
  warning: 'mdi-exclamation',
  error: 'mdi-alert',
  prev: 'mdi-chevron-left',
  next: 'mdi-chevron-right',
  checkboxOn: 'mdi-checkbox-marked',
  checkboxOff: 'mdi-checkbox-blank-outline',
  checkboxIndeterminate: 'mdi-minus-box',
  delimiter: 'mdi-circle',
  sort: 'mdi-arrow-up',
  expand: 'mdi-chevron-down',
  menu: 'mdi-menu',
  subgroup: 'mdi-menu-down',
  dropdown: 'mdi-menu-down',
  radioOn: 'mdi-radiobox-marked',
  radioOff: 'mdi-radiobox-blank',
  edit: 'mdi-pencil',
  ratingEmpty: 'mdi-star-outline',
  ratingFull: 'mdi-star',
  ratingHalf: 'mdi-star-half-full',
  loading: 'mdi-cached',
  first: 'mdi-page-first',
  last: 'mdi-page-last',
  unfold: 'mdi-unfold-more-horizontal',
  file: 'mdi-paperclip',
  plus: 'mdi-plus',
  minus: 'mdi-minus'
};
/* harmony default export */ __webpack_exports__["default"] = (icons);
//# sourceMappingURL=mdi.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/services/index.js":
/*!****************************************************!*\
  !*** ./node_modules/vuetify/lib/services/index.js ***!
  \****************************************************/
/*! exports provided: Application, Breakpoint, Goto, Icons, Lang, Presets, Theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application */ "./node_modules/vuetify/lib/services/application/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return _application__WEBPACK_IMPORTED_MODULE_0__["Application"]; });

/* harmony import */ var _breakpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breakpoint */ "./node_modules/vuetify/lib/services/breakpoint/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Breakpoint", function() { return _breakpoint__WEBPACK_IMPORTED_MODULE_1__["Breakpoint"]; });

/* harmony import */ var _goto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./goto */ "./node_modules/vuetify/lib/services/goto/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Goto", function() { return _goto__WEBPACK_IMPORTED_MODULE_2__["Goto"]; });

/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons */ "./node_modules/vuetify/lib/services/icons/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icons", function() { return _icons__WEBPACK_IMPORTED_MODULE_3__["Icons"]; });

/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lang */ "./node_modules/vuetify/lib/services/lang/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Lang", function() { return _lang__WEBPACK_IMPORTED_MODULE_4__["Lang"]; });

/* harmony import */ var _presets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./presets */ "./node_modules/vuetify/lib/services/presets/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Presets", function() { return _presets__WEBPACK_IMPORTED_MODULE_5__["Presets"]; });

/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./theme */ "./node_modules/vuetify/lib/services/theme/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Theme", function() { return _theme__WEBPACK_IMPORTED_MODULE_6__["Theme"]; });








//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/services/lang/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/vuetify/lib/services/lang/index.js ***!
  \*********************************************************/
/*! exports provided: Lang */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lang", function() { return Lang; });
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service */ "./node_modules/vuetify/lib/services/service/index.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/helpers */ "./node_modules/vuetify/lib/util/helpers.js");
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/console */ "./node_modules/vuetify/lib/util/console.js");
// Extensions
 // Utilities



const LANG_PREFIX = '$vuetify.';
const fallback = Symbol('Lang fallback');

function getTranslation(locale, key, usingDefault = false, defaultLocale) {
  const shortKey = key.replace(LANG_PREFIX, '');
  let translation = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__["getObjectValueByPath"])(locale, shortKey, fallback);

  if (translation === fallback) {
    if (usingDefault) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_2__["consoleError"])(`Translation key "${shortKey}" not found in fallback`);
      translation = key;
    } else {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_2__["consoleWarn"])(`Translation key "${shortKey}" not found, falling back to default`);
      translation = getTranslation(defaultLocale, key, true, defaultLocale);
    }
  }

  return translation;
}

class Lang extends _service__WEBPACK_IMPORTED_MODULE_0__["Service"] {
  constructor(preset) {
    super();
    this.defaultLocale = 'en';
    const {
      current,
      locales,
      t
    } = preset[Lang.property];
    this.current = current;
    this.locales = locales;
    this.translator = t || this.defaultTranslator;
  }

  currentLocale(key) {
    const translation = this.locales[this.current];
    const defaultLocale = this.locales[this.defaultLocale];
    return getTranslation(translation, key, false, defaultLocale);
  }

  t(key, ...params) {
    if (!key.startsWith(LANG_PREFIX)) return this.replace(key, params);
    return this.translator(key, ...params);
  }

  defaultTranslator(key, ...params) {
    return this.replace(this.currentLocale(key), params);
  }

  replace(str, params) {
    return str.replace(/\{(\d+)\}/g, (match, index) => {
      /* istanbul ignore next */
      return String(params[+index]);
    });
  }

}
Lang.property = 'lang';
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/services/presets/index.js":
/*!************************************************************!*\
  !*** ./node_modules/vuetify/lib/services/presets/index.js ***!
  \************************************************************/
/*! exports provided: Presets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Presets", function() { return Presets; });
/* harmony import */ var _presets_default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../presets/default */ "./node_modules/vuetify/lib/presets/default/index.js");
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/console */ "./node_modules/vuetify/lib/util/console.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/helpers */ "./node_modules/vuetify/lib/util/helpers.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service */ "./node_modules/vuetify/lib/services/service/index.js");
// Preset
 // Utilities




class Presets extends _service__WEBPACK_IMPORTED_MODULE_3__["Service"] {
  constructor(parentPreset, parent) {
    super(); // The default preset

    const defaultPreset = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__["mergeDeep"])({}, _presets_default__WEBPACK_IMPORTED_MODULE_0__["preset"]); // The user provided preset

    const {
      userPreset
    } = parent; // The user provided global preset

    const {
      preset: globalPreset = {},
      ...preset
    } = userPreset;

    if (globalPreset.preset != null) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_1__["consoleWarn"])('Global presets do not support the **preset** option, it can be safely omitted');
    }

    parent.preset = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__["mergeDeep"])(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__["mergeDeep"])(defaultPreset, globalPreset), preset);
  }

}
Presets.property = 'presets';
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/services/service/index.js":
/*!************************************************************!*\
  !*** ./node_modules/vuetify/lib/services/service/index.js ***!
  \************************************************************/
/*! exports provided: Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Service", function() { return Service; });
class Service {
  constructor() {
    this.framework = {};
  }

  init(root, ssrContext) {}

}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/services/theme/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/vuetify/lib/services/theme/index.js ***!
  \**********************************************************/
/*! exports provided: Theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Theme", function() { return Theme; });
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service */ "./node_modules/vuetify/lib/services/service/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/vuetify/lib/services/theme/utils.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/helpers */ "./node_modules/vuetify/lib/util/helpers.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_3__);
/* eslint-disable no-multi-spaces */
// Extensions
 // Utilities


 // Types


class Theme extends _service__WEBPACK_IMPORTED_MODULE_0__["Service"] {
  constructor(preset) {
    super();
    this.disabled = false;
    this.isDark = null;
    this.unwatch = null;
    this.vueMeta = null;
    const {
      dark,
      disable,
      options,
      themes
    } = preset[Theme.property];
    this.dark = Boolean(dark);
    this.defaults = this.themes = themes;
    this.options = options;

    if (disable) {
      this.disabled = true;
      return;
    }

    this.themes = {
      dark: this.fillVariant(themes.dark, true),
      light: this.fillVariant(themes.light, false)
    };
  } // When setting css, check for element and apply new values

  /* eslint-disable-next-line accessor-pairs */


  set css(val) {
    if (this.vueMeta) {
      if (this.isVueMeta23) {
        this.applyVueMeta23();
      }

      return;
    }

    this.checkOrCreateStyleElement() && (this.styleEl.innerHTML = val);
  }

  set dark(val) {
    const oldDark = this.isDark;
    this.isDark = val; // Only apply theme after dark
    // has already been set before

    oldDark != null && this.applyTheme();
  }

  get dark() {
    return Boolean(this.isDark);
  } // Apply current theme default
  // only called on client side


  applyTheme() {
    if (this.disabled) return this.clearCss();
    this.css = this.generatedStyles;
  }

  clearCss() {
    this.css = '';
  } // Initialize theme for SSR and SPA
  // Attach to ssrContext head or
  // apply new theme to document


  init(root, ssrContext) {
    if (this.disabled) return;
    /* istanbul ignore else */

    if (root.$meta) {
      this.initVueMeta(root);
    } else if (ssrContext) {
      this.initSSR(ssrContext);
    }

    this.initTheme(root);
  } // Allows for you to set target theme


  setTheme(theme, value) {
    this.themes[theme] = Object.assign(this.themes[theme], value);
    this.applyTheme();
  } // Reset theme defaults


  resetThemes() {
    this.themes.light = Object.assign({}, this.defaults.light);
    this.themes.dark = Object.assign({}, this.defaults.dark);
    this.applyTheme();
  } // Check for existence of style element


  checkOrCreateStyleElement() {
    this.styleEl = document.getElementById('vuetify-theme-stylesheet');
    /* istanbul ignore next */

    if (this.styleEl) return true;
    this.genStyleElement(); // If doesn't have it, create it

    return Boolean(this.styleEl);
  }

  fillVariant(theme = {}, dark) {
    const defaultTheme = this.themes[dark ? 'dark' : 'light'];
    return Object.assign({}, defaultTheme, theme);
  } // Generate the style element
  // if applicable


  genStyleElement() {
    /* istanbul ignore if */
    if (typeof document === 'undefined') return;
    /* istanbul ignore next */

    this.styleEl = document.createElement('style');
    this.styleEl.type = 'text/css';
    this.styleEl.id = 'vuetify-theme-stylesheet';

    if (this.options.cspNonce) {
      this.styleEl.setAttribute('nonce', this.options.cspNonce);
    }

    document.head.appendChild(this.styleEl);
  }

  initVueMeta(root) {
    this.vueMeta = root.$meta();

    if (this.isVueMeta23) {
      // vue-meta needs to apply after mounted()
      root.$nextTick(() => {
        this.applyVueMeta23();
      });
      return;
    }

    const metaKeyName = typeof this.vueMeta.getOptions === 'function' ? this.vueMeta.getOptions().keyName : 'metaInfo';
    const metaInfo = root.$options[metaKeyName] || {};

    root.$options[metaKeyName] = () => {
      metaInfo.style = metaInfo.style || [];
      const vuetifyStylesheet = metaInfo.style.find(s => s.id === 'vuetify-theme-stylesheet');

      if (!vuetifyStylesheet) {
        metaInfo.style.push({
          cssText: this.generatedStyles,
          type: 'text/css',
          id: 'vuetify-theme-stylesheet',
          nonce: (this.options || {}).cspNonce
        });
      } else {
        vuetifyStylesheet.cssText = this.generatedStyles;
      }

      return metaInfo;
    };
  }

  applyVueMeta23() {
    const {
      set
    } = this.vueMeta.addApp('vuetify');
    set({
      style: [{
        cssText: this.generatedStyles,
        type: 'text/css',
        id: 'vuetify-theme-stylesheet',
        nonce: this.options.cspNonce
      }]
    });
  }

  initSSR(ssrContext) {
    // SSR
    const nonce = this.options.cspNonce ? ` nonce="${this.options.cspNonce}"` : '';
    ssrContext.head = ssrContext.head || '';
    ssrContext.head += `<style type="text/css" id="vuetify-theme-stylesheet"${nonce}>${this.generatedStyles}</style>`;
  }

  initTheme(root) {
    // Only watch for reactivity on client side
    if (typeof document === 'undefined') return; // If we get here somehow, ensure
    // existing instance is removed

    if (this.unwatch) {
      this.unwatch();
      this.unwatch = null;
    } // TODO: Update to use RFC if merged
    // https://github.com/vuejs/rfcs/blob/advanced-reactivity-api/active-rfcs/0000-advanced-reactivity-api.md


    root.$once('hook:created', () => {
      const obs = vue__WEBPACK_IMPORTED_MODULE_3___default.a.observable({
        themes: this.themes
      });
      this.unwatch = root.$watch(() => obs.themes, () => this.applyTheme(), {
        deep: true
      });
    });
    this.applyTheme();
  }

  get currentTheme() {
    const target = this.dark ? 'dark' : 'light';
    return this.themes[target];
  }

  get generatedStyles() {
    const theme = this.parsedTheme;
    /* istanbul ignore next */

    const options = this.options || {};
    let css;

    if (options.themeCache != null) {
      css = options.themeCache.get(theme);
      /* istanbul ignore if */

      if (css != null) return css;
    }

    css = _utils__WEBPACK_IMPORTED_MODULE_1__["genStyles"](theme, options.customProperties);

    if (options.minifyTheme != null) {
      css = options.minifyTheme(css);
    }

    if (options.themeCache != null) {
      options.themeCache.set(theme, css);
    }

    return css;
  }

  get parsedTheme() {
    return _utils__WEBPACK_IMPORTED_MODULE_1__["parse"](this.currentTheme || {}, undefined, Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__["getNestedValue"])(this.options, ['variations'], true));
  } // Is using v2.3 of vue-meta
  // https://github.com/nuxt/vue-meta/releases/tag/v2.3.0


  get isVueMeta23() {
    return typeof this.vueMeta.addApp === 'function';
  }

}
Theme.property = 'theme';
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/services/theme/utils.js":
/*!**********************************************************!*\
  !*** ./node_modules/vuetify/lib/services/theme/utils.js ***!
  \**********************************************************/
/*! exports provided: parse, genStyles, genVariations, lighten, darken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genStyles", function() { return genStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genVariations", function() { return genVariations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lighten", function() { return lighten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darken", function() { return darken; });
/* harmony import */ var _util_colorUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/colorUtils */ "./node_modules/vuetify/lib/util/colorUtils.js");
/* harmony import */ var _util_color_transformSRGB__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/color/transformSRGB */ "./node_modules/vuetify/lib/util/color/transformSRGB.js");
/* harmony import */ var _util_color_transformCIELAB__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/color/transformCIELAB */ "./node_modules/vuetify/lib/util/color/transformCIELAB.js");



function parse(theme, isItem = false, variations = true) {
  const {
    anchor,
    ...variant
  } = theme;
  const colors = Object.keys(variant);
  const parsedTheme = {};

  for (let i = 0; i < colors.length; ++i) {
    const name = colors[i];
    const value = theme[name];
    if (value == null) continue;

    if (!variations) {
      parsedTheme[name] = {
        base: Object(_util_colorUtils__WEBPACK_IMPORTED_MODULE_0__["intToHex"])(Object(_util_colorUtils__WEBPACK_IMPORTED_MODULE_0__["colorToInt"])(value))
      };
    } else if (isItem) {
      /* istanbul ignore else */
      if (name === 'base' || name.startsWith('lighten') || name.startsWith('darken')) {
        parsedTheme[name] = Object(_util_colorUtils__WEBPACK_IMPORTED_MODULE_0__["colorToHex"])(value);
      }
    } else if (typeof value === 'object') {
      parsedTheme[name] = parse(value, true, variations);
    } else {
      parsedTheme[name] = genVariations(name, Object(_util_colorUtils__WEBPACK_IMPORTED_MODULE_0__["colorToInt"])(value));
    }
  }

  if (!isItem) {
    parsedTheme.anchor = anchor || parsedTheme.base || parsedTheme.primary.base;
  }

  return parsedTheme;
}
/**
 * Generate the CSS for a base color (.primary)
 */

const genBaseColor = (name, value) => {
  return `
.v-application .${name} {
  background-color: ${value} !important;
  border-color: ${value} !important;
}
.v-application .${name}--text {
  color: ${value} !important;
  caret-color: ${value} !important;
}`;
};
/**
 * Generate the CSS for a variant color (.primary.darken-2)
 */


const genVariantColor = (name, variant, value) => {
  const [type, n] = variant.split(/(\d)/, 2);
  return `
.v-application .${name}.${type}-${n} {
  background-color: ${value} !important;
  border-color: ${value} !important;
}
.v-application .${name}--text.text--${type}-${n} {
  color: ${value} !important;
  caret-color: ${value} !important;
}`;
};

const genColorVariableName = (name, variant = 'base') => `--v-${name}-${variant}`;

const genColorVariable = (name, variant = 'base') => `var(${genColorVariableName(name, variant)})`;

function genStyles(theme, cssVar = false) {
  const {
    anchor,
    ...variant
  } = theme;
  const colors = Object.keys(variant);
  if (!colors.length) return '';
  let variablesCss = '';
  let css = '';
  const aColor = cssVar ? genColorVariable('anchor') : anchor;
  css += `.v-application a { color: ${aColor}; }`;
  cssVar && (variablesCss += `  ${genColorVariableName('anchor')}: ${anchor};\n`);

  for (let i = 0; i < colors.length; ++i) {
    const name = colors[i];
    const value = theme[name];
    css += genBaseColor(name, cssVar ? genColorVariable(name) : value.base);
    cssVar && (variablesCss += `  ${genColorVariableName(name)}: ${value.base};\n`);
    const variants = Object.keys(value);

    for (let i = 0; i < variants.length; ++i) {
      const variant = variants[i];
      const variantValue = value[variant];
      if (variant === 'base') continue;
      css += genVariantColor(name, variant, cssVar ? genColorVariable(name, variant) : variantValue);
      cssVar && (variablesCss += `  ${genColorVariableName(name, variant)}: ${variantValue};\n`);
    }
  }

  if (cssVar) {
    variablesCss = `:root {\n${variablesCss}}\n\n`;
  }

  return variablesCss + css;
}
function genVariations(name, value) {
  const values = {
    base: Object(_util_colorUtils__WEBPACK_IMPORTED_MODULE_0__["intToHex"])(value)
  };

  for (let i = 5; i > 0; --i) {
    values[`lighten${i}`] = Object(_util_colorUtils__WEBPACK_IMPORTED_MODULE_0__["intToHex"])(lighten(value, i));
  }

  for (let i = 1; i <= 4; ++i) {
    values[`darken${i}`] = Object(_util_colorUtils__WEBPACK_IMPORTED_MODULE_0__["intToHex"])(darken(value, i));
  }

  return values;
}
function lighten(value, amount) {
  const lab = _util_color_transformCIELAB__WEBPACK_IMPORTED_MODULE_2__["fromXYZ"](_util_color_transformSRGB__WEBPACK_IMPORTED_MODULE_1__["toXYZ"](value));
  lab[0] = lab[0] + amount * 10;
  return _util_color_transformSRGB__WEBPACK_IMPORTED_MODULE_1__["fromXYZ"](_util_color_transformCIELAB__WEBPACK_IMPORTED_MODULE_2__["toXYZ"](lab));
}
function darken(value, amount) {
  const lab = _util_color_transformCIELAB__WEBPACK_IMPORTED_MODULE_2__["fromXYZ"](_util_color_transformSRGB__WEBPACK_IMPORTED_MODULE_1__["toXYZ"](value));
  lab[0] = lab[0] - amount * 10;
  return _util_color_transformSRGB__WEBPACK_IMPORTED_MODULE_1__["fromXYZ"](_util_color_transformCIELAB__WEBPACK_IMPORTED_MODULE_2__["toXYZ"](lab));
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/util/color/transformCIELAB.js":
/*!****************************************************************!*\
  !*** ./node_modules/vuetify/lib/util/color/transformCIELAB.js ***!
  \****************************************************************/
/*! exports provided: fromXYZ, toXYZ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromXYZ", function() { return fromXYZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toXYZ", function() { return toXYZ; });
const delta = 0.20689655172413793; // 6÷29

const cielabForwardTransform = t => t > delta ** 3 ? Math.cbrt(t) : t / (3 * delta ** 2) + 4 / 29;

const cielabReverseTransform = t => t > delta ? t ** 3 : 3 * delta ** 2 * (t - 4 / 29);

function fromXYZ(xyz) {
  const transform = cielabForwardTransform;
  const transformedY = transform(xyz[1]);
  return [116 * transformedY - 16, 500 * (transform(xyz[0] / 0.95047) - transformedY), 200 * (transformedY - transform(xyz[2] / 1.08883))];
}
function toXYZ(lab) {
  const transform = cielabReverseTransform;
  const Ln = (lab[0] + 16) / 116;
  return [transform(Ln + lab[1] / 500) * 0.95047, transform(Ln), transform(Ln - lab[2] / 200) * 1.08883];
}
//# sourceMappingURL=transformCIELAB.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/util/color/transformSRGB.js":
/*!**************************************************************!*\
  !*** ./node_modules/vuetify/lib/util/color/transformSRGB.js ***!
  \**************************************************************/
/*! exports provided: fromXYZ, toXYZ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromXYZ", function() { return fromXYZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toXYZ", function() { return toXYZ; });
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/helpers */ "./node_modules/vuetify/lib/util/helpers.js");
 // For converting XYZ to sRGB

const srgbForwardMatrix = [[3.2406, -1.5372, -0.4986], [-0.9689, 1.8758, 0.0415], [0.0557, -0.2040, 1.0570]]; // Forward gamma adjust

const srgbForwardTransform = C => C <= 0.0031308 ? C * 12.92 : 1.055 * C ** (1 / 2.4) - 0.055; // For converting sRGB to XYZ


const srgbReverseMatrix = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]]; // Reverse gamma adjust

const srgbReverseTransform = C => C <= 0.04045 ? C / 12.92 : ((C + 0.055) / 1.055) ** 2.4;

function fromXYZ(xyz) {
  const rgb = Array(3);
  const transform = srgbForwardTransform;
  const matrix = srgbForwardMatrix; // Matrix transform, then gamma adjustment

  for (let i = 0; i < 3; ++i) {
    rgb[i] = Math.round(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_0__["clamp"])(transform(matrix[i][0] * xyz[0] + matrix[i][1] * xyz[1] + matrix[i][2] * xyz[2])) * 255);
  } // Rescale back to [0, 255]


  return (rgb[0] << 16) + (rgb[1] << 8) + (rgb[2] << 0);
}
function toXYZ(rgb) {
  const xyz = [0, 0, 0];
  const transform = srgbReverseTransform;
  const matrix = srgbReverseMatrix; // Rescale from [0, 255] to [0, 1] then adjust sRGB gamma to linear RGB

  const r = transform((rgb >> 16 & 0xff) / 255);
  const g = transform((rgb >> 8 & 0xff) / 255);
  const b = transform((rgb >> 0 & 0xff) / 255); // Matrix color space transform

  for (let i = 0; i < 3; ++i) {
    xyz[i] = matrix[i][0] * r + matrix[i][1] * g + matrix[i][2] * b;
  }

  return xyz;
}
//# sourceMappingURL=transformSRGB.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/util/colorUtils.js":
/*!*****************************************************!*\
  !*** ./node_modules/vuetify/lib/util/colorUtils.js ***!
  \*****************************************************/
/*! exports provided: isCssColor, colorToInt, classToHex, intToHex, colorToHex, HSVAtoRGBA, RGBAtoHSVA, HSVAtoHSLA, HSLAtoHSVA, RGBAtoCSS, RGBtoCSS, RGBAtoHex, HexToRGBA, HexToHSVA, HSVAtoHex, parseHex, parseGradient, RGBtoInt, contrastRatio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCssColor", function() { return isCssColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorToInt", function() { return colorToInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classToHex", function() { return classToHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intToHex", function() { return intToHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorToHex", function() { return colorToHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HSVAtoRGBA", function() { return HSVAtoRGBA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RGBAtoHSVA", function() { return RGBAtoHSVA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HSVAtoHSLA", function() { return HSVAtoHSLA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HSLAtoHSVA", function() { return HSLAtoHSVA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RGBAtoCSS", function() { return RGBAtoCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RGBtoCSS", function() { return RGBtoCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RGBAtoHex", function() { return RGBAtoHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HexToRGBA", function() { return HexToRGBA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HexToHSVA", function() { return HexToHSVA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HSVAtoHex", function() { return HSVAtoHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseHex", function() { return parseHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseGradient", function() { return parseGradient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RGBtoInt", function() { return RGBtoInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contrastRatio", function() { return contrastRatio; });
/* harmony import */ var _console__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./console */ "./node_modules/vuetify/lib/util/console.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./node_modules/vuetify/lib/util/helpers.js");
/* harmony import */ var _color_transformSRGB__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./color/transformSRGB */ "./node_modules/vuetify/lib/util/color/transformSRGB.js");
// Utilities



function isCssColor(color) {
  return !!color && !!color.match(/^(#|var\(--|(rgb|hsl)a?\()/);
}
function colorToInt(color) {
  let rgb;

  if (typeof color === 'number') {
    rgb = color;
  } else if (typeof color === 'string') {
    let c = color[0] === '#' ? color.substring(1) : color;

    if (c.length === 3) {
      c = c.split('').map(char => char + char).join('');
    }

    if (c.length !== 6) {
      Object(_console__WEBPACK_IMPORTED_MODULE_0__["consoleWarn"])(`'${color}' is not a valid rgb color`);
    }

    rgb = parseInt(c, 16);
  } else {
    throw new TypeError(`Colors can only be numbers or strings, recieved ${color == null ? color : color.constructor.name} instead`);
  }

  if (rgb < 0) {
    Object(_console__WEBPACK_IMPORTED_MODULE_0__["consoleWarn"])(`Colors cannot be negative: '${color}'`);
    rgb = 0;
  } else if (rgb > 0xffffff || isNaN(rgb)) {
    Object(_console__WEBPACK_IMPORTED_MODULE_0__["consoleWarn"])(`'${color}' is not a valid rgb color`);
    rgb = 0xffffff;
  }

  return rgb;
}
function classToHex(color, colors, currentTheme) {
  const [colorName, colorModifier] = color.toString().trim().replace('-', '').split(' ', 2);
  let hexColor = '';

  if (colorName && colorName in colors) {
    if (colorModifier && colorModifier in colors[colorName]) {
      hexColor = colors[colorName][colorModifier];
    } else if ('base' in colors[colorName]) {
      hexColor = colors[colorName].base;
    }
  } else if (colorName && colorName in currentTheme) {
    hexColor = currentTheme[colorName];
  }

  return hexColor;
}
function intToHex(color) {
  let hexColor = color.toString(16);
  if (hexColor.length < 6) hexColor = '0'.repeat(6 - hexColor.length) + hexColor;
  return '#' + hexColor;
}
function colorToHex(color) {
  return intToHex(colorToInt(color));
}
/**
 * Converts HSVA to RGBA. Based on formula from https://en.wikipedia.org/wiki/HSL_and_HSV
 *
 * @param color HSVA color as an array [0-360, 0-1, 0-1, 0-1]
 */

function HSVAtoRGBA(hsva) {
  const {
    h,
    s,
    v,
    a
  } = hsva;

  const f = n => {
    const k = (n + h / 60) % 6;
    return v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);
  };

  const rgb = [f(5), f(3), f(1)].map(v => Math.round(v * 255));
  return {
    r: rgb[0],
    g: rgb[1],
    b: rgb[2],
    a
  };
}
/**
 * Converts RGBA to HSVA. Based on formula from https://en.wikipedia.org/wiki/HSL_and_HSV
 *
 * @param color RGBA color as an array [0-255, 0-255, 0-255, 0-1]
 */

function RGBAtoHSVA(rgba) {
  if (!rgba) return {
    h: 0,
    s: 1,
    v: 1,
    a: 1
  };
  const r = rgba.r / 255;
  const g = rgba.g / 255;
  const b = rgba.b / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;

  if (max !== min) {
    if (max === r) {
      h = 60 * (0 + (g - b) / (max - min));
    } else if (max === g) {
      h = 60 * (2 + (b - r) / (max - min));
    } else if (max === b) {
      h = 60 * (4 + (r - g) / (max - min));
    }
  }

  if (h < 0) h = h + 360;
  const s = max === 0 ? 0 : (max - min) / max;
  const hsv = [h, s, max];
  return {
    h: hsv[0],
    s: hsv[1],
    v: hsv[2],
    a: rgba.a
  };
}
function HSVAtoHSLA(hsva) {
  const {
    h,
    s,
    v,
    a
  } = hsva;
  const l = v - v * s / 2;
  const sprime = l === 1 || l === 0 ? 0 : (v - l) / Math.min(l, 1 - l);
  return {
    h,
    s: sprime,
    l,
    a
  };
}
function HSLAtoHSVA(hsl) {
  const {
    h,
    s,
    l,
    a
  } = hsl;
  const v = l + s * Math.min(l, 1 - l);
  const sprime = v === 0 ? 0 : 2 - 2 * l / v;
  return {
    h,
    s: sprime,
    v,
    a
  };
}
function RGBAtoCSS(rgba) {
  return `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`;
}
function RGBtoCSS(rgba) {
  return RGBAtoCSS({ ...rgba,
    a: 1
  });
}
function RGBAtoHex(rgba) {
  const toHex = v => {
    const h = Math.round(v).toString(16);
    return ('00'.substr(0, 2 - h.length) + h).toUpperCase();
  };

  return `#${[toHex(rgba.r), toHex(rgba.g), toHex(rgba.b), toHex(Math.round(rgba.a * 255))].join('')}`;
}
function HexToRGBA(hex) {
  const rgba = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["chunk"])(hex.slice(1), 2).map(c => parseInt(c, 16));
  return {
    r: rgba[0],
    g: rgba[1],
    b: rgba[2],
    a: Math.round(rgba[3] / 255 * 100) / 100
  };
}
function HexToHSVA(hex) {
  const rgb = HexToRGBA(hex);
  return RGBAtoHSVA(rgb);
}
function HSVAtoHex(hsva) {
  return RGBAtoHex(HSVAtoRGBA(hsva));
}
function parseHex(hex) {
  if (hex.startsWith('#')) {
    hex = hex.slice(1);
  }

  hex = hex.replace(/([^0-9a-f])/gi, 'F');

  if (hex.length === 3 || hex.length === 4) {
    hex = hex.split('').map(x => x + x).join('');
  }

  if (hex.length === 6) {
    hex = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["padEnd"])(hex, 8, 'F');
  } else {
    hex = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["padEnd"])(Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["padEnd"])(hex, 6), 8, 'F');
  }

  return `#${hex}`.toUpperCase().substr(0, 9);
}
function parseGradient(gradient, colors, currentTheme) {
  return gradient.replace(/([a-z]+(\s[a-z]+-[1-5])?)(?=$|,)/gi, x => {
    return classToHex(x, colors, currentTheme) || x;
  }).replace(/(rgba\()#[0-9a-f]+(?=,)/gi, x => {
    return 'rgba(' + Object.values(HexToRGBA(parseHex(x.replace(/rgba\(/, '')))).slice(0, 3).join(',');
  });
}
function RGBtoInt(rgba) {
  return (rgba.r << 16) + (rgba.g << 8) + rgba.b;
}
/**
 * Returns the contrast ratio (1-21) between two colors.
 *
 * @param c1 First color
 * @param c2 Second color
 */

function contrastRatio(c1, c2) {
  const [, y1] = Object(_color_transformSRGB__WEBPACK_IMPORTED_MODULE_2__["toXYZ"])(RGBtoInt(c1));
  const [, y2] = Object(_color_transformSRGB__WEBPACK_IMPORTED_MODULE_2__["toXYZ"])(RGBtoInt(c2));
  return (Math.max(y1, y2) + 0.05) / (Math.min(y1, y2) + 0.05);
}
//# sourceMappingURL=colorUtils.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/util/console.js":
/*!**************************************************!*\
  !*** ./node_modules/vuetify/lib/util/console.js ***!
  \**************************************************/
/*! exports provided: consoleInfo, consoleWarn, consoleError, deprecate, breaking, removed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "consoleInfo", function() { return consoleInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "consoleWarn", function() { return consoleWarn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "consoleError", function() { return consoleError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deprecate", function() { return deprecate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breaking", function() { return breaking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removed", function() { return removed; });
/* harmony import */ var _framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../framework */ "./node_modules/vuetify/lib/framework.js");


function createMessage(message, vm, parent) {
  if (_framework__WEBPACK_IMPORTED_MODULE_0__["default"].config.silent) return;

  if (parent) {
    vm = {
      _isVue: true,
      $parent: parent,
      $options: vm
    };
  }

  if (vm) {
    // Only show each message once per instance
    vm.$_alreadyWarned = vm.$_alreadyWarned || [];
    if (vm.$_alreadyWarned.includes(message)) return;
    vm.$_alreadyWarned.push(message);
  }

  return `[Vuetify] ${message}` + (vm ? generateComponentTrace(vm) : '');
}

function consoleInfo(message, vm, parent) {
  const newMessage = createMessage(message, vm, parent);
  newMessage != null && console.info(newMessage);
}
function consoleWarn(message, vm, parent) {
  const newMessage = createMessage(message, vm, parent);
  newMessage != null && console.warn(newMessage);
}
function consoleError(message, vm, parent) {
  const newMessage = createMessage(message, vm, parent);
  newMessage != null && console.error(newMessage);
}
function deprecate(original, replacement, vm, parent) {
  consoleWarn(`[UPGRADE] '${original}' is deprecated, use '${replacement}' instead.`, vm, parent);
}
function breaking(original, replacement, vm, parent) {
  consoleError(`[BREAKING] '${original}' has been removed, use '${replacement}' instead. For more information, see the upgrade guide https://github.com/vuetifyjs/vuetify/releases/tag/v2.0.0#user-content-upgrade-guide`, vm, parent);
}
function removed(original, vm, parent) {
  consoleWarn(`[REMOVED] '${original}' has been removed. You can safely omit it.`, vm, parent);
}
/**
 * Shamelessly stolen from vuejs/vue/blob/dev/src/core/util/debug.js
 */

const classifyRE = /(?:^|[-_])(\w)/g;

const classify = str => str.replace(classifyRE, c => c.toUpperCase()).replace(/[-_]/g, '');

function formatComponentName(vm, includeFile) {
  if (vm.$root === vm) {
    return '<Root>';
  }

  const options = typeof vm === 'function' && vm.cid != null ? vm.options : vm._isVue ? vm.$options || vm.constructor.options : vm || {};
  let name = options.name || options._componentTag;
  const file = options.__file;

  if (!name && file) {
    const match = file.match(/([^/\\]+)\.vue$/);
    name = match && match[1];
  }

  return (name ? `<${classify(name)}>` : `<Anonymous>`) + (file && includeFile !== false ? ` at ${file}` : '');
}

function generateComponentTrace(vm) {
  if (vm._isVue && vm.$parent) {
    const tree = [];
    let currentRecursiveSequence = 0;

    while (vm) {
      if (tree.length > 0) {
        const last = tree[tree.length - 1];

        if (last.constructor === vm.constructor) {
          currentRecursiveSequence++;
          vm = vm.$parent;
          continue;
        } else if (currentRecursiveSequence > 0) {
          tree[tree.length - 1] = [last, currentRecursiveSequence];
          currentRecursiveSequence = 0;
        }
      }

      tree.push(vm);
      vm = vm.$parent;
    }

    return '\n\nfound in\n\n' + tree.map((vm, i) => `${i === 0 ? '---> ' : ' '.repeat(5 + i * 2)}${Array.isArray(vm) ? `${formatComponentName(vm[0])}... (${vm[1]} recursive calls)` : formatComponentName(vm)}`).join('\n');
  } else {
    return `\n\n(found in ${formatComponentName(vm)})`;
  }
}
//# sourceMappingURL=console.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/util/helpers.js":
/*!**************************************************!*\
  !*** ./node_modules/vuetify/lib/util/helpers.js ***!
  \**************************************************/
/*! exports provided: createSimpleFunctional, directiveConfig, addOnceEventListener, passiveSupported, addPassiveEventListener, getNestedValue, deepEqual, getObjectValueByPath, getPropertyFromItem, createRange, getZIndex, escapeHTML, filterObjectOnKeys, convertToUnit, kebabCase, isObject, keyCodes, remapInternalIcon, keys, camelize, arrayDiff, upperFirst, groupItems, wrapInArray, sortItems, defaultFilter, searchItems, getSlotType, debounce, throttle, getPrefixedScopedSlots, getSlot, clamp, padEnd, chunk, humanReadableFileSize, camelizeObjectKeys, mergeDeep, fillArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSimpleFunctional", function() { return createSimpleFunctional; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directiveConfig", function() { return directiveConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addOnceEventListener", function() { return addOnceEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passiveSupported", function() { return passiveSupported; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPassiveEventListener", function() { return addPassiveEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNestedValue", function() { return getNestedValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepEqual", function() { return deepEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getObjectValueByPath", function() { return getObjectValueByPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPropertyFromItem", function() { return getPropertyFromItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRange", function() { return createRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getZIndex", function() { return getZIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeHTML", function() { return escapeHTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterObjectOnKeys", function() { return filterObjectOnKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertToUnit", function() { return convertToUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kebabCase", function() { return kebabCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyCodes", function() { return keyCodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remapInternalIcon", function() { return remapInternalIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "camelize", function() { return camelize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayDiff", function() { return arrayDiff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upperFirst", function() { return upperFirst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupItems", function() { return groupItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapInArray", function() { return wrapInArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortItems", function() { return sortItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultFilter", function() { return defaultFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchItems", function() { return searchItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSlotType", function() { return getSlotType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPrefixedScopedSlots", function() { return getPrefixedScopedSlots; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSlot", function() { return getSlot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "padEnd", function() { return padEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chunk", function() { return chunk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "humanReadableFileSize", function() { return humanReadableFileSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "camelizeObjectKeys", function() { return camelizeObjectKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeDeep", function() { return mergeDeep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fillArray", function() { return fillArray; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

function createSimpleFunctional(c, el = 'div', name) {
  return vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
    name: name || c.replace(/__/g, '-'),
    functional: true,

    render(h, {
      data,
      children
    }) {
      data.staticClass = `${c} ${data.staticClass || ''}`.trim();
      return h(el, data, children);
    }

  });
}
function directiveConfig(binding, defaults = {}) {
  return { ...defaults,
    ...binding.modifiers,
    value: binding.arg,
    ...(binding.value || {})
  };
}
function addOnceEventListener(el, eventName, cb, options = false) {
  var once = event => {
    cb(event);
    el.removeEventListener(eventName, once, options);
  };

  el.addEventListener(eventName, once, options);
}
let passiveSupported = false;

try {
  if (typeof window !== 'undefined') {
    const testListenerOpts = Object.defineProperty({}, 'passive', {
      get: () => {
        passiveSupported = true;
      }
    });
    window.addEventListener('testListener', testListenerOpts, testListenerOpts);
    window.removeEventListener('testListener', testListenerOpts, testListenerOpts);
  }
} catch (e) {
  console.warn(e);
}


function addPassiveEventListener(el, event, cb, options) {
  el.addEventListener(event, cb, passiveSupported ? options : false);
}
function getNestedValue(obj, path, fallback) {
  const last = path.length - 1;
  if (last < 0) return obj === undefined ? fallback : obj;

  for (let i = 0; i < last; i++) {
    if (obj == null) {
      return fallback;
    }

    obj = obj[path[i]];
  }

  if (obj == null) return fallback;
  return obj[path[last]] === undefined ? fallback : obj[path[last]];
}
function deepEqual(a, b) {
  if (a === b) return true;

  if (a instanceof Date && b instanceof Date && a.getTime() !== b.getTime()) {
    // If the values are Date, compare them as timestamps
    return false;
  }

  if (a !== Object(a) || b !== Object(b)) {
    // If the values aren't objects, they were already checked for equality
    return false;
  }

  const props = Object.keys(a);

  if (props.length !== Object.keys(b).length) {
    // Different number of props, don't bother to check
    return false;
  }

  return props.every(p => deepEqual(a[p], b[p]));
}
function getObjectValueByPath(obj, path, fallback) {
  // credit: http://stackoverflow.com/questions/6491463/accessing-nested-javascript-objects-with-string-key#comment55278413_6491621
  if (obj == null || !path || typeof path !== 'string') return fallback;
  if (obj[path] !== undefined) return obj[path];
  path = path.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties

  path = path.replace(/^\./, ''); // strip a leading dot

  return getNestedValue(obj, path.split('.'), fallback);
}
function getPropertyFromItem(item, property, fallback) {
  if (property == null) return item === undefined ? fallback : item;
  if (item !== Object(item)) return fallback === undefined ? item : fallback;
  if (typeof property === 'string') return getObjectValueByPath(item, property, fallback);
  if (Array.isArray(property)) return getNestedValue(item, property, fallback);
  if (typeof property !== 'function') return fallback;
  const value = property(item, fallback);
  return typeof value === 'undefined' ? fallback : value;
}
function createRange(length) {
  return Array.from({
    length
  }, (v, k) => k);
}
function getZIndex(el) {
  if (!el || el.nodeType !== Node.ELEMENT_NODE) return 0;
  const index = +window.getComputedStyle(el).getPropertyValue('z-index');
  if (!index) return getZIndex(el.parentNode);
  return index;
}
const tagsToReplace = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;'
};
function escapeHTML(str) {
  return str.replace(/[&<>]/g, tag => tagsToReplace[tag] || tag);
}
function filterObjectOnKeys(obj, keys) {
  const filtered = {};

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];

    if (typeof obj[key] !== 'undefined') {
      filtered[key] = obj[key];
    }
  }

  return filtered;
}
function convertToUnit(str, unit = 'px') {
  if (str == null || str === '') {
    return undefined;
  } else if (isNaN(+str)) {
    return String(str);
  } else {
    return `${Number(str)}${unit}`;
  }
}
function kebabCase(str) {
  return (str || '').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}
function isObject(obj) {
  return obj !== null && typeof obj === 'object';
} // KeyboardEvent.keyCode aliases

const keyCodes = Object.freeze({
  enter: 13,
  tab: 9,
  delete: 46,
  esc: 27,
  space: 32,
  up: 38,
  down: 40,
  left: 37,
  right: 39,
  end: 35,
  home: 36,
  del: 46,
  backspace: 8,
  insert: 45,
  pageup: 33,
  pagedown: 34
}); // This remaps internal names like '$cancel' or '$vuetify.icons.cancel'
// to the current name or component for that icon.

function remapInternalIcon(vm, iconName) {
  if (!iconName.startsWith('$')) {
    return iconName;
  } // Get the target icon name


  const iconPath = `$vuetify.icons.values.${iconName.split('$').pop().split('.').pop()}`; // Now look up icon indirection name,
  // e.g. '$vuetify.icons.values.cancel'

  return getObjectValueByPath(vm, iconPath, iconName);
}
function keys(o) {
  return Object.keys(o);
}
/**
 * Camelize a hyphen-delimited string.
 */

const camelizeRE = /-(\w)/g;
const camelize = str => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '');
};
/**
 * Returns the set difference of B and A, i.e. the set of elements in B but not in A
 */

function arrayDiff(a, b) {
  const diff = [];

  for (let i = 0; i < b.length; i++) {
    if (a.indexOf(b[i]) < 0) diff.push(b[i]);
  }

  return diff;
}
/**
 * Makes the first character of a string uppercase
 */

function upperFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function groupItems(items, groupBy, groupDesc) {
  const key = groupBy[0];
  const groups = [];
  let current = null;

  for (var i = 0; i < items.length; i++) {
    const item = items[i];
    const val = getObjectValueByPath(item, key);

    if (current !== val) {
      current = val;
      groups.push({
        name: val,
        items: []
      });
    }

    groups[groups.length - 1].items.push(item);
  }

  return groups;
}
function wrapInArray(v) {
  return v != null ? Array.isArray(v) ? v : [v] : [];
}
function sortItems(items, sortBy, sortDesc, locale, customSorters) {
  if (sortBy === null || !sortBy.length) return items;
  const stringCollator = new Intl.Collator(locale, {
    sensitivity: 'accent',
    usage: 'sort'
  });
  return items.sort((a, b) => {
    for (let i = 0; i < sortBy.length; i++) {
      const sortKey = sortBy[i];
      let sortA = getObjectValueByPath(a, sortKey);
      let sortB = getObjectValueByPath(b, sortKey);

      if (sortDesc[i]) {
        [sortA, sortB] = [sortB, sortA];
      }

      if (customSorters && customSorters[sortKey]) {
        const customResult = customSorters[sortKey](sortA, sortB);
        if (!customResult) continue;
        return customResult;
      } // Check if both cannot be evaluated


      if (sortA === null && sortB === null) {
        continue;
      }

      [sortA, sortB] = [sortA, sortB].map(s => (s || '').toString().toLocaleLowerCase());

      if (sortA !== sortB) {
        if (!isNaN(sortA) && !isNaN(sortB)) return Number(sortA) - Number(sortB);
        return stringCollator.compare(sortA, sortB);
      }
    }

    return 0;
  });
}
function defaultFilter(value, search, item) {
  return value != null && search != null && typeof value !== 'boolean' && value.toString().toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) !== -1;
}
function searchItems(items, search) {
  if (!search) return items;
  search = search.toString().toLowerCase();
  if (search.trim() === '') return items;
  return items.filter(item => Object.keys(item).some(key => defaultFilter(getObjectValueByPath(item, key), search, item)));
}
/**
 * Returns:
 *  - 'normal' for old style slots - `<template slot="default">`
 *  - 'scoped' for old style scoped slots (`<template slot="default" slot-scope="data">`) or bound v-slot (`#default="data"`)
 *  - 'v-slot' for unbound v-slot (`#default`) - only if the third param is true, otherwise counts as scoped
 */

function getSlotType(vm, name, split) {
  if (vm.$slots[name] && vm.$scopedSlots[name] && vm.$scopedSlots[name].name) {
    return split ? 'v-slot' : 'scoped';
  }

  if (vm.$slots[name]) return 'normal';
  if (vm.$scopedSlots[name]) return 'scoped';
}
function debounce(fn, delay) {
  let timeoutId = 0;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}
function throttle(fn, limit) {
  let throttling = false;
  return (...args) => {
    if (!throttling) {
      throttling = true;
      setTimeout(() => throttling = false, limit);
      return fn(...args);
    }
  };
}
function getPrefixedScopedSlots(prefix, scopedSlots) {
  return Object.keys(scopedSlots).filter(k => k.startsWith(prefix)).reduce((obj, k) => {
    obj[k.replace(prefix, '')] = scopedSlots[k];
    return obj;
  }, {});
}
function getSlot(vm, name = 'default', data, optional = false) {
  if (vm.$scopedSlots[name]) {
    return vm.$scopedSlots[name](data instanceof Function ? data() : data);
  } else if (vm.$slots[name] && (!data || optional)) {
    return vm.$slots[name];
  }

  return undefined;
}
function clamp(value, min = 0, max = 1) {
  return Math.max(min, Math.min(max, value));
}
function padEnd(str, length, char = '0') {
  return str + char.repeat(Math.max(0, length - str.length));
}
function chunk(str, size = 1) {
  const chunked = [];
  let index = 0;

  while (index < str.length) {
    chunked.push(str.substr(index, size));
    index += size;
  }

  return chunked;
}
function humanReadableFileSize(bytes, binary = false) {
  const base = binary ? 1024 : 1000;

  if (bytes < base) {
    return `${bytes} B`;
  }

  const prefix = binary ? ['Ki', 'Mi', 'Gi'] : ['k', 'M', 'G'];
  let unit = -1;

  while (Math.abs(bytes) >= base && unit < prefix.length - 1) {
    bytes /= base;
    ++unit;
  }

  return `${bytes.toFixed(1)} ${prefix[unit]}B`;
}
function camelizeObjectKeys(obj) {
  if (!obj) return {};
  return Object.keys(obj).reduce((o, key) => {
    o[camelize(key)] = obj[key];
    return o;
  }, {});
}
function mergeDeep(source = {}, target = {}) {
  for (const key in target) {
    const sourceProperty = source[key];
    const targetProperty = target[key]; // Only continue deep merging if
    // both properties are objects

    if (isObject(sourceProperty) && isObject(targetProperty)) {
      source[key] = mergeDeep(sourceProperty, targetProperty);
      continue;
    }

    source[key] = targetProperty;
  }

  return source;
}
function fillArray(length, obj) {
  return Array(length).fill(obj);
}
//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/util/mixins.js":
/*!*************************************************!*\
  !*** ./node_modules/vuetify/lib/util/mixins.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mixins; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable max-len, import/export, no-use-before-define */

function mixins(...args) {
  return vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
    mixins: args
  });
}
//# sourceMappingURL=mixins.js.map

/***/ }),

/***/ "./node_modules/vuetify/src/components/VSheet/VSheet.sass":
/*!****************************************************************!*\
  !*** ./node_modules/vuetify/src/components/VSheet/VSheet.sass ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../css-loader!../../../../sass-loader/dist/cjs.js??ref--10-2!./VSheet.sass */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify/src/components/VSheet/VSheet.sass");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("bbf2bb74", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vuetify/src/directives/ripple/VRipple.sass":
/*!*****************************************************************!*\
  !*** ./node_modules/vuetify/src/directives/ripple/VRipple.sass ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../css-loader!../../../../sass-loader/dist/cjs.js??ref--10-2!./VRipple.sass */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify/src/directives/ripple/VRipple.sass");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("c7def8b6", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vuetify/src/styles/main.sass":
/*!***************************************************!*\
  !*** ./node_modules/vuetify/src/styles/main.sass ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../css-loader!../../../sass-loader/dist/cjs.js??ref--10-2!./main.sass */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify/src/styles/main.sass");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("c445c65c", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);