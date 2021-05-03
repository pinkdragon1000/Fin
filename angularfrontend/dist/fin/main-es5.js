function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _components_page_content_add_accounts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./components/page-content/add-accounts.component */
    "./src/app/components/page-content/add-accounts.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_page_content_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/page-content/login.component */
    "./src/app/components/page-content/login.component.ts");
    /* harmony import */


    var _components_page_content_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/page-content/signup.component */
    "./src/app/components/page-content/signup.component.ts");
    /* harmony import */


    var _components_page_content_manage_accounts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/page-content/manage-accounts.component */
    "./src/app/components/page-content/manage-accounts.component.ts");

    var routes = [{
      path: '',
      component: _components_page_content_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'signup',
      component: _components_page_content_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"]
    }, {
      path: 'addAccounts',
      component: _components_page_content_add_accounts_component__WEBPACK_IMPORTED_MODULE_0__["AddAccountsComponent"]
    }, {
      path: 'manageAccounts',
      component: _components_page_content_manage_accounts_component__WEBPACK_IMPORTED_MODULE_5__["ManageAccountsComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'fin';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: [""]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          template: "<router-outlet></router-outlet>",
          styles: [""]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_page_template_pagetemplate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/page-template/pagetemplate.component */
    "./src/app/components/page-template/pagetemplate.component.ts");
    /* harmony import */


    var _components_page_template_headerpagetemplate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/page-template/headerpagetemplate.component */
    "./src/app/components/page-template/headerpagetemplate.component.ts");
    /* harmony import */


    var _components_page_content_manage_accounts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/page-content/manage-accounts.component */
    "./src/app/components/page-content/manage-accounts.component.ts");
    /* harmony import */


    var _components_page_content_add_accounts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/page-content/add-accounts.component */
    "./src/app/components/page-content/add-accounts.component.ts");
    /* harmony import */


    var _components_page_content_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/page-content/login.component */
    "./src/app/components/page-content/login.component.ts");
    /* harmony import */


    var _components_page_content_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/page-content/signup.component */
    "./src/app/components/page-content/signup.component.ts");
    /* harmony import */


    var _components_small_components_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/small-components/navbar.component */
    "./src/app/components/small-components/navbar.component.ts");
    /* harmony import */


    var _components_small_components_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/small-components/header.component */
    "./src/app/components/small-components/header.component.ts");
    /* harmony import */


    var _components_small_components_help_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/small-components/help-modal.component */
    "./src/app/components/small-components/help-modal.component.ts");
    /* harmony import */


    var _components_small_components_help_modal_button_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/small-components/help-modal-button.component */
    "./src/app/components/small-components/help-modal-button.component.ts");
    /* harmony import */


    var _components_small_components_empty_content_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/small-components/empty-content.component */
    "./src/app/components/small-components/empty-content.component.ts");
    /* harmony import */


    var _components_small_components_input_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/small-components/input.component */
    "./src/app/components/small-components/input.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_components_small_components_input_component__WEBPACK_IMPORTED_MODULE_15__["InputComponent"], _components_page_template_pagetemplate_component__WEBPACK_IMPORTED_MODULE_4__["PageTemplateComponent"], _components_small_components_empty_content_component__WEBPACK_IMPORTED_MODULE_14__["EmptyContentComponent"], _components_page_template_headerpagetemplate_component__WEBPACK_IMPORTED_MODULE_5__["HeaderPageTemplateComponent"], _components_small_components_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"], _components_small_components_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_small_components_input_component__WEBPACK_IMPORTED_MODULE_15__["InputComponent"], _components_page_template_headerpagetemplate_component__WEBPACK_IMPORTED_MODULE_5__["HeaderPageTemplateComponent"], _components_page_template_pagetemplate_component__WEBPACK_IMPORTED_MODULE_4__["PageTemplateComponent"], _components_small_components_empty_content_component__WEBPACK_IMPORTED_MODULE_14__["EmptyContentComponent"], _components_small_components_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"], _components_small_components_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"], _components_page_content_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _components_page_content_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"], _components_page_content_manage_accounts_component__WEBPACK_IMPORTED_MODULE_6__["ManageAccountsComponent"], _components_page_content_add_accounts_component__WEBPACK_IMPORTED_MODULE_7__["AddAccountsComponent"], _components_small_components_help_modal_component__WEBPACK_IMPORTED_MODULE_12__["ModalComponent"], _components_small_components_help_modal_button_component__WEBPACK_IMPORTED_MODULE_13__["HelpModalButtonComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_small_components_input_component__WEBPACK_IMPORTED_MODULE_15__["InputComponent"], _components_page_template_headerpagetemplate_component__WEBPACK_IMPORTED_MODULE_5__["HeaderPageTemplateComponent"], _components_page_template_pagetemplate_component__WEBPACK_IMPORTED_MODULE_4__["PageTemplateComponent"], _components_small_components_empty_content_component__WEBPACK_IMPORTED_MODULE_14__["EmptyContentComponent"], _components_small_components_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"], _components_small_components_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"], _components_page_content_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _components_page_content_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"], _components_page_content_manage_accounts_component__WEBPACK_IMPORTED_MODULE_6__["ManageAccountsComponent"], _components_page_content_add_accounts_component__WEBPACK_IMPORTED_MODULE_7__["AddAccountsComponent"], _components_small_components_help_modal_component__WEBPACK_IMPORTED_MODULE_12__["ModalComponent"], _components_small_components_help_modal_button_component__WEBPACK_IMPORTED_MODULE_13__["HelpModalButtonComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [_components_small_components_input_component__WEBPACK_IMPORTED_MODULE_15__["InputComponent"], _components_page_template_pagetemplate_component__WEBPACK_IMPORTED_MODULE_4__["PageTemplateComponent"], _components_small_components_empty_content_component__WEBPACK_IMPORTED_MODULE_14__["EmptyContentComponent"], _components_page_template_headerpagetemplate_component__WEBPACK_IMPORTED_MODULE_5__["HeaderPageTemplateComponent"], _components_small_components_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"], _components_small_components_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/page-content/add-accounts.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/page-content/add-accounts.component.ts ***!
    \*******************************************************************/

  /*! exports provided: AddAccountsComponent */

  /***/
  function srcAppComponentsPageContentAddAccountsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddAccountsComponent", function () {
      return AddAccountsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _page_template_pagetemplate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../page-template/pagetemplate.component */
    "./src/app/components/page-template/pagetemplate.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _small_components_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../small-components/input.component */
    "./src/app/components/small-components/input.component.ts");

    function AddAccountsComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input-component", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var input_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", input_r1.label)("placeholder", input_r1.placeholder)("type", input_r1.type)("name", input_r1.name)("min", input_r1.min);
      }
    }

    var AddAccountsComponent = /*#__PURE__*/function () {
      function AddAccountsComponent() {
        _classCallCheck(this, AddAccountsComponent);

        this.accountFieldData = [{
          label: 'Account Type (checking/savings)',
          placeholder: 'Type in your account type',
          type: 'text',
          name: 'name'
        }, {
          label: 'Account Description (Example: TD Bank Checking)',
          placeholder: 'Type in your account description',
          type: 'text',
          name: 'description'
        }, {
          label: 'Account Starting Amount ($)',
          placeholder: 'Type in your account starting amount',
          type: 'number',
          name: 'amount',
          min: 0
        }];
      }

      _createClass(AddAccountsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AddAccountsComponent;
    }();

    AddAccountsComponent.ɵfac = function AddAccountsComponent_Factory(t) {
      return new (t || AddAccountsComponent)();
    };

    AddAccountsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddAccountsComponent,
      selectors: [["add-accounts-content-component"]],
      decls: 4,
      vars: 2,
      consts: [[3, "pagedirections"], ["class", "inputs", 4, "ngFor", "ngForOf"], ["onclick", "", 1, "primary", "round"], [1, "inputs"], [3, "label", "placeholder", "type", "name", "min"]],
      template: function AddAccountsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "page-template", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddAccountsComponent_div_1_Template, 2, 5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Add Account ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pagedirections", "Fill out the form to add an account. To view and manage accounts click\n    Manage Accounts in the navbar.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.accountFieldData);
        }
      },
      directives: [_page_template_pagetemplate_component__WEBPACK_IMPORTED_MODULE_1__["PageTemplateComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _small_components_input_component__WEBPACK_IMPORTED_MODULE_3__["InputComponent"]],
      styles: [".inputs[_ngcontent-%COMP%] {\n    width: 30%;\n  }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddAccountsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'add-accounts-content-component',
          template: "\n    <page-template [pagedirections]=\"'Fill out the form to add an account. To view and manage accounts click\n    Manage Accounts in the navbar.'\" >\n\n      <div class=\"inputs\" *ngFor=\"let input of accountFieldData\">\n      <input-component\n        [label]=\"input.label\"\n        [placeholder]=\"input.placeholder\"\n        [type]=\"input.type\"\n        [name]=\"input.name\"\n        [min]=\"input.min\"\n      ></input-component>\n      </div>\n      <button class=\"primary round\" onclick=\"\">\n        Add Account\n      </button>\n    </page-template>\n\n  ",
          styles: ["\n  .inputs {\n    width: 30%;\n  }\n  "]
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/page-content/login.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/components/page-content/login.component.ts ***!
    \************************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsPageContentLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _page_template_headerpagetemplate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../page-template/headerpagetemplate.component */
    "./src/app/components/page-template/headerpagetemplate.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _small_components_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../small-components/input.component */
    "./src/app/components/small-components/input.component.ts");

    function LoginComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input-component", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var input_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", input_r1.label)("placeholder", input_r1.placeholder)("type", input_r1.type)("name", input_r1.name);
      }
    }

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent() {
        _classCallCheck(this, LoginComponent);

        this.inputFieldData = [{
          label: 'Email',
          placeholder: 'Type in your email',
          type: 'email',
          name: 'email'
        }, {
          label: 'Password',
          placeholder: 'Type in your password',
          type: 'password',
          name: 'password'
        }];
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)();
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["login-content-component"]],
      decls: 7,
      vars: 2,
      consts: [[3, "pagetitle"], ["class", "inputs", 4, "ngFor", "ngForOf"], [1, "login-button"], ["onclick", "location.href='/manageAccounts';", 1, "primary", "round"], ["href", "/signup"], [1, "inputs"], [3, "label", "placeholder", "type", "name"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header-page-template", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_1_Template, 2, 4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Sign In ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Don't have an account? Signup -> ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pagetitle", "Sign In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.inputFieldData);
        }
      },
      directives: [_page_template_headerpagetemplate_component__WEBPACK_IMPORTED_MODULE_1__["HeaderPageTemplateComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _small_components_input_component__WEBPACK_IMPORTED_MODULE_3__["InputComponent"]],
      styles: ["h2[_ngcontent-%COMP%] {\n        background: linear-gradient(\n          to right,\n          #f32170,\n          #ff6b08,\n          #cf23cf,\n          #eedd44\n        );\n        -webkit-text-fill-color: transparent;\n        -webkit-background-clip: text;\n      }\n\n      .login-button[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: center;\n        width: 70%;\n      }\n\n      .inputs[_ngcontent-%COMP%] {\n        width: 30%;\n      }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'login-content-component',
          template: "\n    <header-page-template [pagetitle]=\"'Sign In'\">\n      <div class=\"inputs\" *ngFor=\"let input of inputFieldData\">\n        <input-component\n          [label]=\"input.label\"\n          [placeholder]=\"input.placeholder\"\n          [type]=\"input.type\"\n          [name]=\"input.name\"\n        ></input-component>\n      </div>\n\n      <div class=\"login-button\">\n        <button\n          class=\"primary round\"\n          onclick=\"location.href='/manageAccounts';\"\n        >\n          Sign In\n        </button>\n      </div>\n      <a href=\"/signup\">Don't have an account? Signup -> </a>\n    </header-page-template>\n  ",
          styles: ["\n      h2 {\n        background: linear-gradient(\n          to right,\n          #f32170,\n          #ff6b08,\n          #cf23cf,\n          #eedd44\n        );\n        -webkit-text-fill-color: transparent;\n        -webkit-background-clip: text;\n      }\n\n      .login-button {\n        display: flex;\n        justify-content: center;\n        width: 70%;\n      }\n\n      .inputs {\n        width: 30%;\n      }\n    "]
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/page-content/manage-accounts.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/page-content/manage-accounts.component.ts ***!
    \**********************************************************************/

  /*! exports provided: ManageAccountsComponent */

  /***/
  function srcAppComponentsPageContentManageAccountsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageAccountsComponent", function () {
      return ManageAccountsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _page_template_pagetemplate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../page-template/pagetemplate.component */
    "./src/app/components/page-template/pagetemplate.component.ts");
    /* harmony import */


    var _small_components_empty_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../small-components/empty-content.component */
    "./src/app/components/small-components/empty-content.component.ts");

    var ManageAccountsComponent = /*#__PURE__*/function () {
      function ManageAccountsComponent() {
        _classCallCheck(this, ManageAccountsComponent);
      }

      _createClass(ManageAccountsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ManageAccountsComponent;
    }();

    ManageAccountsComponent.ɵfac = function ManageAccountsComponent_Factory(t) {
      return new (t || ManageAccountsComponent)();
    };

    ManageAccountsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ManageAccountsComponent,
      selectors: [["manage-accounts-content-component"]],
      decls: 2,
      vars: 1,
      consts: [[3, "pagedirections"], ["emptyHeader", "No Accounts Yet", "emptyPar", "Click 'Add Accounts' in the navbar to add an account. "]],
      template: function ManageAccountsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "page-template", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-emptycontent", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pagedirections", "Click on an account to view and add information");
        }
      },
      directives: [_page_template_pagetemplate_component__WEBPACK_IMPORTED_MODULE_1__["PageTemplateComponent"], _small_components_empty_content_component__WEBPACK_IMPORTED_MODULE_2__["EmptyContentComponent"]],
      styles: [""]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManageAccountsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'manage-accounts-content-component',
          template: "\n    <page-template [pagedirections]=\"'Click on an account to view and add information'\">\n      <app-emptycontent\n        emptyHeader=\"No Accounts Yet\"\n        emptyPar=\"Click 'Add Accounts' in the navbar to add an account. \"\n      ></app-emptycontent>\n    </page-template>\n  ",
          styles: ["\n  "]
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/page-content/signup.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/page-content/signup.component.ts ***!
    \*************************************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppComponentsPageContentSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _page_template_headerpagetemplate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../page-template/headerpagetemplate.component */
    "./src/app/components/page-template/headerpagetemplate.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _small_components_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../small-components/input.component */
    "./src/app/components/small-components/input.component.ts");

    function SignupComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input-component", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var input_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", input_r1.label)("placeholder", input_r1.placeholder)("type", input_r1.type)("name", input_r1.name);
      }
    }

    var SignupComponent = /*#__PURE__*/function () {
      function SignupComponent() {
        _classCallCheck(this, SignupComponent);

        this.signupFieldData = [{
          label: 'Full Name',
          placeholder: 'Type in your full name',
          type: 'fname',
          name: 'fname'
        }, {
          label: 'Email',
          placeholder: 'Type in your email',
          type: 'email',
          name: 'email'
        }, {
          label: 'Password',
          placeholder: 'Type in your password',
          type: 'password',
          name: 'password'
        }];
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SignupComponent;
    }();

    SignupComponent.ɵfac = function SignupComponent_Factory(t) {
      return new (t || SignupComponent)();
    };

    SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignupComponent,
      selectors: [["signup-content-component"]],
      decls: 7,
      vars: 2,
      consts: [[3, "pagetitle"], ["class", "inputs", 4, "ngFor", "ngForOf"], [1, "login-button"], ["onclick", "location.href='/manageAccounts';", 1, "primary", "round"], ["href", "/"], [1, "inputs"], [3, "label", "placeholder", "type", "name"]],
      template: function SignupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header-page-template", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_div_1_Template, 2, 4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Sign Up ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Already have an account? Login -> ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pagetitle", "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.signupFieldData);
        }
      },
      directives: [_page_template_headerpagetemplate_component__WEBPACK_IMPORTED_MODULE_1__["HeaderPageTemplateComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _small_components_input_component__WEBPACK_IMPORTED_MODULE_3__["InputComponent"]],
      styles: [".login-button[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: center;\n        width: 70%;\n      }\n\n      .inputs[_ngcontent-%COMP%] {\n        width: 30%;\n      }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'signup-content-component',
          template: "\n    <header-page-template [pagetitle]=\"'Sign Up'\">\n\n        <div class=\"inputs\" *ngFor=\"let input of signupFieldData\">\n        <input-component\n          [label]=\"input.label\"\n          [placeholder]=\"input.placeholder\"\n          [type]=\"input.type\"\n          [name]=\"input.name\"\n        ></input-component>\n      </div>\n\n        <div class=\"login-button\">\n          <button\n            class=\"primary round\"\n            onclick=\"location.href='/manageAccounts';\"\n          >\n            Sign Up\n          </button>\n        </div>\n        <a href=\"/\">Already have an account? Login -> </a>\n    </header-page-template>\n  ",
          styles: ["\n      .login-button {\n        display: flex;\n        justify-content: center;\n        width: 70%;\n      }\n\n      .inputs {\n        width: 30%;\n      }\n    "]
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/page-template/headerpagetemplate.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/components/page-template/headerpagetemplate.component.ts ***!
    \**************************************************************************/

  /*! exports provided: HeaderPageTemplateComponent */

  /***/
  function srcAppComponentsPageTemplateHeaderpagetemplateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderPageTemplateComponent", function () {
      return HeaderPageTemplateComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _small_components_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../small-components/header.component */
    "./src/app/components/small-components/header.component.ts");

    var _c0 = ["*"];

    var HeaderPageTemplateComponent = /*#__PURE__*/function () {
      function HeaderPageTemplateComponent() {
        _classCallCheck(this, HeaderPageTemplateComponent);
      }

      _createClass(HeaderPageTemplateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderPageTemplateComponent;
    }();

    HeaderPageTemplateComponent.ɵfac = function HeaderPageTemplateComponent_Factory(t) {
      return new (t || HeaderPageTemplateComponent)();
    };

    HeaderPageTemplateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderPageTemplateComponent,
      selectors: [["header-page-template"]],
      inputs: {
        pagetitle: "pagetitle"
      },
      ngContentSelectors: _c0,
      decls: 6,
      vars: 3,
      consts: [[3, "maintitle", "tagline"], [1, "content"], [1, "column", "login-signup-container"]],
      template: function HeaderPageTemplateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "header-component", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maintitle", "Fin")("tagline", "Financial Accounts Management");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pagetitle);
        }
      },
      directives: [_small_components_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]],
      styles: [".content[_ngcontent-%COMP%] {\n        margin: 2rem 2rem 0rem 2rem;\n      }\n      \n      h2[_ngcontent-%COMP%] {\n        color: var(--fin-neutral-1);\n      }\n  \n      .login-signup-container[_ngcontent-%COMP%] {\n        align-items: center;\n        margin-top: 5rem;\n      }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderPageTemplateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'header-page-template',
          template: "\n    <header-component\n      [maintitle]=\"'Fin'\"\n      [tagline]=\"'Financial Accounts Management'\"\n    ></header-component>\n    <div class=\"content\">\n    <div class=\"column login-signup-container\">\n    <h2>{{pagetitle}}</h2>\n\n      <ng-content></ng-content>\n      </div>\n    </div>\n  ",
          styles: ["\n      .content {\n        margin: 2rem 2rem 0rem 2rem;\n      }\n      \n      h2 {\n        color: var(--fin-neutral-1);\n      }\n  \n      .login-signup-container {\n        align-items: center;\n        margin-top: 5rem;\n      }\n    "]
        }]
      }], function () {
        return [];
      }, {
        pagetitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/page-template/pagetemplate.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/components/page-template/pagetemplate.component.ts ***!
    \********************************************************************/

  /*! exports provided: PageTemplateComponent */

  /***/
  function srcAppComponentsPageTemplatePagetemplateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageTemplateComponent", function () {
      return PageTemplateComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _small_components_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../small-components/navbar.component */
    "./src/app/components/small-components/navbar.component.ts");
    /* harmony import */


    var _small_components_help_modal_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../small-components/help-modal-button.component */
    "./src/app/components/small-components/help-modal-button.component.ts");

    var _c0 = ["*"];

    var PageTemplateComponent = /*#__PURE__*/function () {
      function PageTemplateComponent() {
        _classCallCheck(this, PageTemplateComponent);
      }

      _createClass(PageTemplateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageTemplateComponent;
    }();

    PageTemplateComponent.ɵfac = function PageTemplateComponent_Factory(t) {
      return new (t || PageTemplateComponent)();
    };

    PageTemplateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PageTemplateComponent,
      selectors: [["page-template"]],
      inputs: {
        pagedirections: "pagedirections"
      },
      ngContentSelectors: _c0,
      decls: 6,
      vars: 2,
      consts: [[1, "content"], [3, "modaltext"]],
      template: function PageTemplateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "navbar-component");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "help-modal-button-component", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pagedirections);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("modaltext", "To add an account click Add An Account.  To view accounts click Manage Accounts.  To add transactions for a specific account click on that account.");
        }
      },
      directives: [_small_components_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _small_components_help_modal_button_component__WEBPACK_IMPORTED_MODULE_2__["HelpModalButtonComponent"]],
      styles: [".content[_ngcontent-%COMP%] {\n        margin: 2rem 2rem 0rem 2rem;\n      }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageTemplateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'page-template',
          template: "\n    <navbar-component></navbar-component>\n    <div class=\"content\">\n    <p>{{ pagedirections }}</p>\n      <ng-content></ng-content>\n    </div>\n    <help-modal-button-component [modaltext]=\"'To add an account click Add An Account.  To view accounts click Manage Accounts.  To add transactions for a specific account click on that account.'\"></help-modal-button-component>\n  ",
          styles: ["\n      .content {\n        margin: 2rem 2rem 0rem 2rem;\n      }\n    "]
        }]
      }], function () {
        return [];
      }, {
        pagedirections: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/small-components/empty-content.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/components/small-components/empty-content.component.ts ***!
    \************************************************************************/

  /*! exports provided: EmptyContentComponent */

  /***/
  function srcAppComponentsSmallComponentsEmptyContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmptyContentComponent", function () {
      return EmptyContentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var EmptyContentComponent = /*#__PURE__*/function () {
      function EmptyContentComponent() {
        _classCallCheck(this, EmptyContentComponent);
      }

      _createClass(EmptyContentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EmptyContentComponent;
    }();

    EmptyContentComponent.ɵfac = function EmptyContentComponent_Factory(t) {
      return new (t || EmptyContentComponent)();
    };

    EmptyContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EmptyContentComponent,
      selectors: [["app-emptycontent"]],
      inputs: {
        emptyHeader: "emptyHeader",
        emptyPar: "emptyPar"
      },
      decls: 9,
      vars: 2,
      consts: [[1, "wrapper"], ["src", "../../assets/empty.svg", "rel", "icon", "alt", "", 1, "emptyicon"], [1, "row"], [1, "space"]],
      template: function EmptyContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.emptyHeader);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.emptyPar);
        }
      },
      styles: [".emptyicon[_ngcontent-%COMP%] {\n        padding-left: 3rem;\n      }\n\n      .wrapper[_ngcontent-%COMP%] {\n        display: flex;\n        flex-direction: column;\n        padding: 4rem;\n        align-items: center;\n      }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmptyContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-emptycontent',
          template: "\n    <div class=\"wrapper\">\n      <img src=\"../../assets/empty.svg\" rel=\"icon\" alt=\"\" class=\"emptyicon\" />\n      <br />\n\n      <div class=\"row\">\n        <h3>{{ emptyHeader }}</h3>\n      </div>\n      <br />\n      <p class=\"space\">{{ emptyPar }}</p>\n    </div>\n  ",
          styles: ["\n      .emptyicon {\n        padding-left: 3rem;\n      }\n\n      .wrapper {\n        display: flex;\n        flex-direction: column;\n        padding: 4rem;\n        align-items: center;\n      }\n    "]
        }]
      }], function () {
        return [];
      }, {
        emptyHeader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        emptyPar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/small-components/header.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/small-components/header.component.ts ***!
    \*****************************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentsSmallComponentsHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["header-component"]],
      inputs: {
        maintitle: "maintitle",
        tagline: "tagline"
      },
      decls: 8,
      vars: 2,
      consts: [[1, "row", "hero"], [1, "column", "center"], [1, "row"], ["src", "../../assets/logo.svg", "rel", "icon", "alt", "", 1, "logo"], [1, "fin"], [1, "tag-line"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.maintitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.tagline);
        }
      },
      styles: [".hero[_ngcontent-%COMP%] {\n        align-items: center;\n        background: var(--fin-gradient);\n        border-radius: 0rem 0rem 2rem 2rem;\n        justify-content: center;\n        padding: 6rem;\n      }\n\n      .fin[_ngcontent-%COMP%] {\n        color: var(--fin-white);\n        font-family: 'Courgette', cursive;\n        font-size: 6rem;\n        text-shadow: 0.07rem 0.07rem var(--fin-neutral-1);\n      }\n\n      .tag-line[_ngcontent-%COMP%] {\n        color: var(--fin-white);\n      }\n\n      img[_ngcontent-%COMP%] {\n        padding-right: 2rem;\n      }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'header-component',
          template: "\n    <div class=\"row hero\">\n      <div class=\"column center\">\n        <div class=\"row\">\n          <img src=\"../../assets/logo.svg\" rel=\"icon\" alt=\"\" class=\"logo\" />\n          <h1 class=\"fin\">{{ maintitle }}</h1>\n        </div>\n        <p class=\"tag-line\">{{ tagline }}</p>\n      </div>\n    </div>\n  ",
          styles: ["\n      .hero {\n        align-items: center;\n        background: var(--fin-gradient);\n        border-radius: 0rem 0rem 2rem 2rem;\n        justify-content: center;\n        padding: 6rem;\n      }\n\n      .fin {\n        color: var(--fin-white);\n        font-family: 'Courgette', cursive;\n        font-size: 6rem;\n        text-shadow: 0.07rem 0.07rem var(--fin-neutral-1);\n      }\n\n      .tag-line {\n        color: var(--fin-white);\n      }\n\n      img {\n        padding-right: 2rem;\n      }\n    "]
        }]
      }], function () {
        return [];
      }, {
        maintitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tagline: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/small-components/help-modal-button.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/components/small-components/help-modal-button.component.ts ***!
    \****************************************************************************/

  /*! exports provided: HelpModalButtonComponent */

  /***/
  function srcAppComponentsSmallComponentsHelpModalButtonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelpModalButtonComponent", function () {
      return HelpModalButtonComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _small_components_help_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../small-components/help-modal.service */
    "./src/app/components/small-components/help-modal.service.ts");
    /* harmony import */


    var _help_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./help-modal.component */
    "./src/app/components/small-components/help-modal.component.ts");

    var HelpModalButtonComponent = /*#__PURE__*/function () {
      function HelpModalButtonComponent(modalService) {
        _classCallCheck(this, HelpModalButtonComponent);

        this.modalService = modalService;
      }

      _createClass(HelpModalButtonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openModal",
        value: function openModal(id) {
          this.modalService.open(id);
        }
      }, {
        key: "closeModal",
        value: function closeModal(id) {
          this.modalService.close(id);
        }
      }]);

      return HelpModalButtonComponent;
    }();

    HelpModalButtonComponent.ɵfac = function HelpModalButtonComponent_Factory(t) {
      return new (t || HelpModalButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_small_components_help_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"]));
    };

    HelpModalButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HelpModalButtonComponent,
      selectors: [["help-modal-button-component"]],
      inputs: {
        modaltext: "modaltext"
      },
      decls: 8,
      vars: 1,
      consts: [[1, "btn-help", 3, "click"], ["id", "custom-modal-1"], [1, "float-right"], [1, "secondary", 3, "click"]],
      template: function HelpModalButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HelpModalButtonComponent_Template_button_click_0_listener() {
            return ctx.openModal("custom-modal-1");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "modal", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HelpModalButtonComponent_Template_button_click_4_listener() {
            return ctx.closeModal("custom-modal-1");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " X");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.modaltext);
        }
      },
      directives: [_help_modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"]],
      styles: [".float-right[_ngcontent-%COMP%] {\n  float: right;\n}"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HelpModalButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'help-modal-button-component',
          template: "\n  <button class=\"btn-help\" (click)=\"openModal('custom-modal-1')\">?</button>\n  \n  <modal id=\"custom-modal-1\">\n  <div class=\"float-right\">\n  <button class=\"secondary\" (click)=\"closeModal('custom-modal-1');\"> X</button>\n  </div>\n    <p>{{modaltext}}</p>\n    \n  </modal>\n  ",
          styles: ["\n.float-right {\n  float: right;\n}\n     \n    "]
        }]
      }], function () {
        return [{
          type: _small_components_help_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"]
        }];
      }, {
        modaltext: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/small-components/help-modal.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/small-components/help-modal.component.ts ***!
    \*********************************************************************/

  /*! exports provided: ModalComponent */

  /***/
  function srcAppComponentsSmallComponentsHelpModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalComponent", function () {
      return ModalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _help_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./help-modal.service */
    "./src/app/components/small-components/help-modal.service.ts");

    var _c0 = ["*"];

    var ModalComponent = /*#__PURE__*/function () {
      function ModalComponent(modalService, el) {
        _classCallCheck(this, ModalComponent);

        this.modalService = modalService;
        this.el = el;
        this.element = el.nativeElement;
      }

      _createClass(ModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          // ensure id attribute exists
          if (!this.id) {
            console.error("modal must have an id");
            return;
          } // move element to bottom of page (just before </body>) so it can be displayed above everything else


          document.body.appendChild(this.element); // close modal on background click

          this.element.addEventListener("click", function (el) {
            if (el.target.className === "modal") {
              _this.close();
            }
          }); // add self (this modal instance) to the modal service so it's accessible from controllers

          this.modalService.add(this);
        } // remove self from modal service when component is destroyed

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.modalService.remove(this.id);
          this.element.remove();
        } // open modal

      }, {
        key: "open",
        value: function open() {
          this.element.style.display = "block";
          document.body.classList.add("modal-open");
        } // close modal

      }, {
        key: "close",
        value: function close() {
          this.element.style.display = "none";
          document.body.classList.remove("modal-open");
        }
      }]);

      return ModalComponent;
    }();

    ModalComponent.ɵfac = function ModalComponent_Factory(t) {
      return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_help_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ModalComponent,
      selectors: [["modal"]],
      inputs: {
        id: "id"
      },
      ngContentSelectors: _c0,
      decls: 4,
      vars: 0,
      consts: [[1, "modal"], [1, "modal-body"], [1, "modal-background"]],
      template: function ModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        }
      },
      styles: ["\n        modal {\n          display: none;\n        }\n        .modal {\n          position: fixed;\n          top: 0;\n          right: 0;\n          bottom: 0;\n          left: 0;\n          z-index: 1000;\n          overflow: auto;\n        }\n        .modal .modal-body {\n          padding: 1.25rem;\n          background: #fff;\n          margin: 16rem;\n          border-radius: 2rem;\n          min-height: 20rem;\n          max-width: 80rem;\n        }\n        .modal-background {\n          position: fixed;\n          top: 0;\n          right: 0;\n          bottom: 0;\n          left: 0;\n          background-color: var(--fin-black-transparent);\n          opacity: 0.75;\n          z-index: 900;\n        }\n        body.modal-open {\n          overflow: hidden;\n        }\n      "],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "modal",
          template: "\n      <div class=\"modal\">\n        <div class=\"modal-body\">\n          <ng-content></ng-content>\n        </div>\n      </div>\n      <div class=\"modal-background\"></div>\n    ",
          styles: ["\n        modal {\n          display: none;\n        }\n        .modal {\n          position: fixed;\n          top: 0;\n          right: 0;\n          bottom: 0;\n          left: 0;\n          z-index: 1000;\n          overflow: auto;\n        }\n        .modal .modal-body {\n          padding: 1.25rem;\n          background: #fff;\n          margin: 16rem;\n          border-radius: 2rem;\n          min-height: 20rem;\n          max-width: 80rem;\n        }\n        .modal-background {\n          position: fixed;\n          top: 0;\n          right: 0;\n          bottom: 0;\n          left: 0;\n          background-color: var(--fin-black-transparent);\n          opacity: 0.75;\n          z-index: 900;\n        }\n        body.modal-open {\n          overflow: hidden;\n        }\n      "],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _help_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/small-components/help-modal.service.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/small-components/help-modal.service.ts ***!
    \*******************************************************************/

  /*! exports provided: ModalService */

  /***/
  function srcAppComponentsSmallComponentsHelpModalServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalService", function () {
      return ModalService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ModalService = /*#__PURE__*/function () {
      function ModalService() {
        _classCallCheck(this, ModalService);

        this.modals = [];
      }

      _createClass(ModalService, [{
        key: "add",
        value: function add(modal) {
          // add modal to array of active modals
          this.modals.push(modal);
        }
      }, {
        key: "remove",
        value: function remove(id) {
          // remove modal from array of active modals
          this.modals = this.modals.filter(function (x) {
            return x.id !== id;
          });
        }
      }, {
        key: "open",
        value: function open(id) {
          // open modal specified by id
          var modal = this.modals.find(function (x) {
            return x.id === id;
          });
          modal.open();
        }
      }, {
        key: "close",
        value: function close(id) {
          // close modal specified by id
          var modal = this.modals.find(function (x) {
            return x.id === id;
          });
          modal.close();
        }
      }]);

      return ModalService;
    }();

    ModalService.ɵfac = function ModalService_Factory(t) {
      return new (t || ModalService)();
    };

    ModalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ModalService,
      factory: ModalService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/small-components/input.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/components/small-components/input.component.ts ***!
    \****************************************************************/

  /*! exports provided: InputComponent */

  /***/
  function srcAppComponentsSmallComponentsInputComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InputComponent", function () {
      return InputComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var InputComponent = /*#__PURE__*/function () {
      function InputComponent() {
        _classCallCheck(this, InputComponent);
      }

      _createClass(InputComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return InputComponent;
    }();

    InputComponent.ɵfac = function InputComponent_Factory(t) {
      return new (t || InputComponent)();
    };

    InputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InputComponent,
      selectors: [["input-component"]],
      inputs: {
        label: "label",
        placeholder: "placeholder",
        type: "type",
        name: "name",
        required: "required",
        min: "min"
      },
      decls: 3,
      vars: 6,
      consts: [[3, "placeholder", "type", "name", "required", "min"]],
      template: function InputComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.placeholder);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("type", ctx.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", ctx.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("required", ctx.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("min", ctx.min);
        }
      },
      styles: ["label[_ngcontent-%COMP%] {\n        color: var(--fin-neutral-1);\n      }\n\n      input[_ngcontent-%COMP%] {\n        border-radius: 20rem;\n        font-size: 1rem;\n        height: 1.5rem;\n        min-width: 15rem;\n        width: 100%;\n        padding: 0.75rem 1rem;\n        border: 1px solid var(--fin-white);\n        margin: 0.5rem 0;\n        background: var(--fin-neutral-6);\n        color: var(--fin-neutral-1);\n      }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'input-component',
          template: "\n    <label>{{ label }}</label>\n\n    <input\n      placeholder=\"{{ placeholder }}\"\n      type=\"{{ type }}\"\n      name=\"{{ name }}\"\n      required=\"{{ required }}\"\n      min=\"{{min}}\"\n    />\n  ",
          styles: ["\n      label {\n        color: var(--fin-neutral-1);\n      }\n\n      input {\n        border-radius: 20rem;\n        font-size: 1rem;\n        height: 1.5rem;\n        min-width: 15rem;\n        width: 100%;\n        padding: 0.75rem 1rem;\n        border: 1px solid var(--fin-white);\n        margin: 0.5rem 0;\n        background: var(--fin-neutral-6);\n        color: var(--fin-neutral-1);\n      }\n    "]
        }]
      }], function () {
        return [];
      }, {
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        required: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        min: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/small-components/navbar.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/small-components/navbar.component.ts ***!
    \*****************************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppComponentsSmallComponentsNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)();
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["navbar-component"]],
      decls: 18,
      vars: 0,
      consts: [[1, "row", "navbar"], [1, "column", "center"], ["src", "../../assets/logo.svg", "rel", "icon", "alt", "", 1, "logo"], [1, "nav", "navbar-nav", "navbar-right"], ["routerLinkActive", "active", 1, "nav-item"], ["routerLink", "/addAccounts"], [1, "white-text"], ["routerLink", "/manageAccounts"], [2, "width", "2rem", "border-right", "0.05rem solid white"], ["href", "/"], [1, "fa", "fa-power-off"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Add Accounts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Manage Accounts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".logo[_ngcontent-%COMP%] {\n        width: 8rem;\n        height: 8rem;\n      }\n\n      .profilelogo[_ngcontent-%COMP%] {\n        width: 3rem;\n        height: 3rem;\n      }\n      .navbar[_ngcontent-%COMP%] {\n        align-items: center;\n        background: var(--fin-gradient);\n        border-radius: 0rem 0rem 2rem 2rem;\n        min-width: 39.6875rem;\n      }\n\n      .nav[_ngcontent-%COMP%] {\n        padding-left: 0;\n        margin-bottom: 0;\n        list-style: none;\n        width: 50rem;\n      }\n\n      .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n        position: relative;\n        display: block;\n        padding: 0.625rem 0.9375rem;\n      }\n\n      .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus, .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:active {\n        text-decoration: none;\n        background-color: rgba(255, 255, 255, 0.2);\n      }\n\n      .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n        padding-top: 0.9375rem;\n        padding-bottom: 0.9375rem;\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        appearance: none;\n      }\n      .navbar-right[_ngcontent-%COMP%] {\n        float: right;\n        display: flex;\n        justify-content: flex-end;\n        width: 95rem;\n      }\n\n      .white-text[_ngcontent-%COMP%] {\n        color: white;\n      }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'navbar-component',
          template: "\n    <div class=\"row navbar\">\n      <div class=\"column center\">\n        <img src=\"../../assets/logo.svg\" rel=\"icon\" alt=\"\" class=\"logo\" />\n      </div>\n\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a routerLink=\"/addAccounts\">\n            <p class=\"white-text\">Add Accounts</p>\n          </a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a routerLink=\"/manageAccounts\">\n            <p class=\"white-text\">Manage Accounts</p>\n          </a>\n        </li>\n\n        <div style=\"width:2rem; border-right:0.05rem solid white;\"></div>\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a href=\"/\">\n            <i class=\"fa fa-power-off\"></i>\n            <p class=\"white-text\">Logout</p>\n          </a>\n        </li>\n      </ul>\n    </div>\n  ",
          styles: ["\n      .logo {\n        width: 8rem;\n        height: 8rem;\n      }\n\n      .profilelogo {\n        width: 3rem;\n        height: 3rem;\n      }\n      .navbar {\n        align-items: center;\n        background: var(--fin-gradient);\n        border-radius: 0rem 0rem 2rem 2rem;\n        min-width: 39.6875rem;\n      }\n\n      .nav {\n        padding-left: 0;\n        margin-bottom: 0;\n        list-style: none;\n        width: 50rem;\n      }\n\n      .nav > li > a {\n        position: relative;\n        display: block;\n        padding: 0.625rem 0.9375rem;\n      }\n\n      .nav > li > a:hover,\n      .nav > li > a:focus,\n      .nav > li > a:active {\n        text-decoration: none;\n        background-color: rgba(255, 255, 255, 0.2);\n      }\n\n      .navbar-nav > li > a {\n        padding-top: 0.9375rem;\n        padding-bottom: 0.9375rem;\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        appearance: none;\n      }\n      .navbar-right {\n        float: right;\n        display: flex;\n        justify-content: flex-end;\n        width: 95rem;\n      }\n\n      .white-text {\n        color: white;\n      }\n    "]
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/sitarobinson/Desktop/Projects/Fin/angularfrontend/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map