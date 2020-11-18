(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["AdminLayout"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/Dashboard-Admin.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/Dashboard-Admin.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      menu: false,
      drawer: null,
      dropdownItem: 1,
      dropdownItems: [{
        text: 'Home',
        icon: 'mdi-view-dashboard',
        url: '/siAdmino'
      }, {
        text: 'Settings',
        icon: 'mdi-account',
        url: '/settings'
      }],
      sidebarItems: [{
        title: 'Home',
        icon: 'mdi-view-dashboard',
        url: '/home'
      }],
      appName: "Lavuety",
      me: {
        first_name: "",
        last_name: "",
        email: ""
      }
    };
  },
  // end of data
  methods: {
    logout: function logout() {
      var currentObj = this;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/auth/logout').then(function (response) {
        localStorage.removeItem('userToken');
        currentObj.$router.push('/');
      })["catch"](function (error) {
        console.log(error);
      });
    },
    // end of logout()
    getMe: function getMe() {
      var currentObj = this;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('api/auth/me').then(function (response) {
        // handle success
        currentObj.me.first_name = response.data.user.first_name;
        currentObj.me.last_name = response.data.user.last_name;
        currentObj.me.email = response.data.user.email;
      })["catch"](function (error) {
        // handle error
        console.log(error);
      });
    }
  },
  mounted: function mounted() {
    var currentObj = this;
    currentObj.getMe();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/Dashboard-Admin.vue?vue&type=template&id=97a8cdfc&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/Dashboard-Admin.vue?vue&type=template&id=97a8cdfc& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    { attrs: { id: "inspire" } },
    [
      _c(
        "v-app-bar",
        {
          attrs: {
            "clipped-right": _vm.$vuetify.breakpoint.lgAndUp,
            app: "",
            color: "white"
          }
        },
        [
          _c("v-app-bar-nav-icon", {
            on: {
              click: function($event) {
                $event.stopPropagation()
                _vm.drawer = !_vm.drawer
              }
            }
          }),
          _vm._v(" "),
          _c("span", { staticClass: "hidden-sm-and-down ml-5" }, [
            _c("div", { staticClass: "text-subtitle1" }, [
              _vm._v("We Love "),
              _c("span", { staticClass: "red--text" }, [_vm._v("❤")]),
              _vm._v(" To Manage The Apps")
            ])
          ]),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-btn",
            { attrs: { icon: "" } },
            [_c("v-icon", [_vm._v("mdi-bell")])],
            1
          ),
          _vm._v(" "),
          _c(
            "v-menu",
            {
              attrs: {
                "close-on-content-click": false,
                "nudge-width": 200,
                "offset-x": ""
              },
              scopedSlots: _vm._u([
                {
                  key: "activator",
                  fn: function(ref) {
                    var on = ref.on
                    return [
                      _c(
                        "v-btn",
                        _vm._g({ attrs: { icon: "", large: "" } }, on),
                        [
                          _c(
                            "v-avatar",
                            { attrs: { size: "32px", item: "" } },
                            [
                              _c("v-img", {
                                attrs: {
                                  src: "/statics/user.png",
                                  alt: "Vuetify"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ]
                  }
                }
              ]),
              model: {
                value: _vm.menu,
                callback: function($$v) {
                  _vm.menu = $$v
                },
                expression: "menu"
              }
            },
            [
              _vm._v(" "),
              _c(
                "v-card",
                [
                  _c(
                    "v-list",
                    [
                      _c(
                        "v-list-item",
                        [
                          _c("v-list-item-avatar", [
                            _c("img", {
                              attrs: { src: "/statics/user.png", alt: "user" }
                            })
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-list-item-content",
                            [
                              _c("v-list-item-title", [
                                _vm._v(
                                  _vm._s(_vm.me.first_name) +
                                    " " +
                                    _vm._s(_vm.me.last_name)
                                )
                              ]),
                              _vm._v(" "),
                              _c("v-list-item-subtitle", [
                                _vm._v(_vm._s(_vm.me.email))
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-divider"),
                  _vm._v(" "),
                  _c(
                    "v-list",
                    { attrs: { shaped: "", dense: "" } },
                    [
                      _c("v-subheader", [_vm._v("REPORTS")]),
                      _vm._v(" "),
                      _c(
                        "v-list-item-group",
                        {
                          attrs: { color: "primary" },
                          model: {
                            value: _vm.dropdownItem,
                            callback: function($$v) {
                              _vm.dropdownItem = $$v
                            },
                            expression: "dropdownItem"
                          }
                        },
                        _vm._l(_vm.dropdownItems, function(ip, i) {
                          return _c(
                            "v-list-item",
                            { key: i, attrs: { href: ip.url } },
                            [
                              _c(
                                "v-list-item-icon",
                                [
                                  _c("v-icon", {
                                    domProps: { textContent: _vm._s(ip.icon) }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-list-item-content",
                                [
                                  _c("v-list-item-title", {
                                    domProps: { textContent: _vm._s(ip.text) }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        }),
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { text: "" },
                          on: {
                            click: function($event) {
                              _vm.menu = false
                            }
                          }
                        },
                        [_vm._v("Close")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { text: "", color: "danger" },
                          on: { click: _vm.logout }
                        },
                        [_vm._v("Logout")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-navigation-drawer",
        {
          staticClass: "blue-grey darken-4",
          attrs: { app: "" },
          model: {
            value: _vm.drawer,
            callback: function($$v) {
              _vm.drawer = $$v
            },
            expression: "drawer"
          }
        },
        [
          _c(
            "v-list-item",
            { staticClass: "blue-grey darken-3" },
            [
              _c(
                "v-list-item-content",
                [
                  _c(
                    "v-list-item-title",
                    { staticClass: "title white--text" },
                    [
                      _vm._v(
                        "\n            " + _vm._s(_vm.appName) + "\n          "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("v-list-item-subtitle", { staticClass: "white--text" }, [
                    _vm._v("\n            User Dashboard\n          ")
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-list",
            { attrs: { dense: "", nav: "" } },
            _vm._l(_vm.sidebarItems, function(item) {
              return _c(
                "v-list-item",
                { key: item.title, attrs: { link: "" } },
                [
                  _c(
                    "v-list-item-icon",
                    [
                      _c("v-icon", { staticClass: "white--text" }, [
                        _vm._v(_vm._s(item.icon))
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-item-content",
                    [
                      _c("v-list-item-title", { staticClass: "white--text" }, [
                        _vm._v(_vm._s(item.title))
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            }),
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-content",
        [_c("v-container", { attrs: { fluid: "" } }, [_c("router-view")], 1)],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/layouts/Dashboard-Admin.vue":
/*!**************************************************!*\
  !*** ./resources/js/layouts/Dashboard-Admin.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_Admin_vue_vue_type_template_id_97a8cdfc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard-Admin.vue?vue&type=template&id=97a8cdfc& */ "./resources/js/layouts/Dashboard-Admin.vue?vue&type=template&id=97a8cdfc&");
/* harmony import */ var _Dashboard_Admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard-Admin.vue?vue&type=script&lang=js& */ "./resources/js/layouts/Dashboard-Admin.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VApp */ "./node_modules/vuetify/lib/components/VApp/index.js");
/* harmony import */ var vuetify_lib_components_VAppBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VAppBar */ "./node_modules/vuetify/lib/components/VAppBar/index.js");
/* harmony import */ var vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VAvatar */ "./node_modules/vuetify/lib/components/VAvatar/index.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VContent */ "./node_modules/vuetify/lib/components/VContent/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VImg */ "./node_modules/vuetify/lib/components/VImg/index.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/index.js");
/* harmony import */ var vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vuetify/lib/components/VMenu */ "./node_modules/vuetify/lib/components/VMenu/index.js");
/* harmony import */ var vuetify_lib_components_VNavigationDrawer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vuetify/lib/components/VNavigationDrawer */ "./node_modules/vuetify/lib/components/VNavigationDrawer/index.js");
/* harmony import */ var vuetify_lib_components_VSubheader__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! vuetify/lib/components/VSubheader */ "./node_modules/vuetify/lib/components/VSubheader/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_Admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_Admin_vue_vue_type_template_id_97a8cdfc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_Admin_vue_vue_type_template_id_97a8cdfc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */

























_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VApp: vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__["VApp"],VAppBar: vuetify_lib_components_VAppBar__WEBPACK_IMPORTED_MODULE_5__["VAppBar"],VAppBarNavIcon: vuetify_lib_components_VAppBar__WEBPACK_IMPORTED_MODULE_5__["VAppBarNavIcon"],VAvatar: vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_6__["VAvatar"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_7__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_8__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_8__["VCardActions"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["VContainer"],VContent: vuetify_lib_components_VContent__WEBPACK_IMPORTED_MODULE_10__["VContent"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_11__["VDivider"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_12__["VIcon"],VImg: vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_13__["VImg"],VList: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_14__["VList"],VListItem: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_14__["VListItem"],VListItemAvatar: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_14__["VListItemAvatar"],VListItemContent: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_14__["VListItemContent"],VListItemGroup: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_14__["VListItemGroup"],VListItemIcon: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_14__["VListItemIcon"],VListItemSubtitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_14__["VListItemSubtitle"],VListItemTitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_14__["VListItemTitle"],VMenu: vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_15__["VMenu"],VNavigationDrawer: vuetify_lib_components_VNavigationDrawer__WEBPACK_IMPORTED_MODULE_16__["VNavigationDrawer"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["VSpacer"],VSubheader: vuetify_lib_components_VSubheader__WEBPACK_IMPORTED_MODULE_17__["VSubheader"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/Dashboard-Admin.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/Dashboard-Admin.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/layouts/Dashboard-Admin.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_Admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard-Admin.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/Dashboard-Admin.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_Admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/layouts/Dashboard-Admin.vue?vue&type=template&id=97a8cdfc&":
/*!*********************************************************************************!*\
  !*** ./resources/js/layouts/Dashboard-Admin.vue?vue&type=template&id=97a8cdfc& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_Admin_vue_vue_type_template_id_97a8cdfc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard-Admin.vue?vue&type=template&id=97a8cdfc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/Dashboard-Admin.vue?vue&type=template&id=97a8cdfc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_Admin_vue_vue_type_template_id_97a8cdfc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_Admin_vue_vue_type_template_id_97a8cdfc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);