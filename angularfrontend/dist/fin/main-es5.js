function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

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


    var _components_page_content_signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/page-content/signin.component */
    "./src/app/components/page-content/signin.component.ts");
    /* harmony import */


    var _components_page_content_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/page-content/signup.component */
    "./src/app/components/page-content/signup.component.ts");
    /* harmony import */


    var _components_page_content_manage_accounts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/page-content/manage-accounts.component */
    "./src/app/components/page-content/manage-accounts.component.ts");
    /* harmony import */


    var _components_page_content_account_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/page-content/account.component */
    "./src/app/components/page-content/account.component.ts");

    var routes = [{
      path: '',
      component: _components_page_content_signin_component__WEBPACK_IMPORTED_MODULE_3__["SigninComponent"]
    }, {
      path: 'signup',
      component: _components_page_content_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"]
    }, {
      path: 'addAccounts',
      component: _components_page_content_add_accounts_component__WEBPACK_IMPORTED_MODULE_0__["AddAccountsComponent"]
    }, {
      path: 'manageAccounts',
      component: _components_page_content_manage_accounts_component__WEBPACK_IMPORTED_MODULE_5__["ManageAccountsComponent"]
    }, {
      path: 'account',
      component: _components_page_content_account_component__WEBPACK_IMPORTED_MODULE_6__["AccountComponent"]
    }];

    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

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

    var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'fin';
    });

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


    var _components_small_components_add_transaction_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./components/small-components/add-transaction-modal.component */
    "./src/app/components/small-components/add-transaction-modal.component.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_page_template_pagetemplate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/page-template/pagetemplate.component */
    "./src/app/components/page-template/pagetemplate.component.ts");
    /* harmony import */


    var _components_page_template_headerpagetemplate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/page-template/headerpagetemplate.component */
    "./src/app/components/page-template/headerpagetemplate.component.ts");
    /* harmony import */


    var _components_page_content_manage_accounts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/page-content/manage-accounts.component */
    "./src/app/components/page-content/manage-accounts.component.ts");
    /* harmony import */


    var _components_page_content_add_accounts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/page-content/add-accounts.component */
    "./src/app/components/page-content/add-accounts.component.ts");
    /* harmony import */


    var _components_page_content_account_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/page-content/account.component */
    "./src/app/components/page-content/account.component.ts");
    /* harmony import */


    var _components_page_content_signin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/page-content/signin.component */
    "./src/app/components/page-content/signin.component.ts");
    /* harmony import */


    var _components_page_content_signup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/page-content/signup.component */
    "./src/app/components/page-content/signup.component.ts");
    /* harmony import */


    var _components_small_components_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/small-components/navbar.component */
    "./src/app/components/small-components/navbar.component.ts");
    /* harmony import */


    var _components_small_components_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/small-components/header.component */
    "./src/app/components/small-components/header.component.ts");
    /* harmony import */


    var _components_small_components_clickable_list_view_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/small-components/clickable-list-view.component */
    "./src/app/components/small-components/clickable-list-view.component.ts");
    /* harmony import */


    var _components_small_components_help_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/small-components/help-modal.component */
    "./src/app/components/small-components/help-modal.component.ts");
    /* harmony import */


    var _components_small_components_help_modal_button_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/small-components/help-modal-button.component */
    "./src/app/components/small-components/help-modal-button.component.ts");
    /* harmony import */


    var _components_small_components_empty_content_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/small-components/empty-content.component */
    "./src/app/components/small-components/empty-content.component.ts");
    /* harmony import */


    var _components_small_components_input_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/small-components/input.component */
    "./src/app/components/small-components/input.component.ts");
    /* harmony import */


    var _components_api_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/api.service */
    "./src/app/components/api.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _components_small_components_add_transaction_modal_button_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/small-components/add-transaction-modal-button.component */
    "./src/app/components/small-components/add-transaction-modal-button.component.ts");
    /* harmony import */


    var _components_small_components_tabs_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/small-components/tabs.component */
    "./src/app/components/small-components/tabs.component.ts");
    /* harmony import */


    var _components_small_components_tab_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/small-components/tab.component */
    "./src/app/components/small-components/tab.component.ts");
    /* harmony import */


    var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @swimlane/ngx-charts */
    "./node_modules/@swimlane/ngx-charts/__ivy_ngcc__/fesm2015/swimlane-ngx-charts.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js"); //import { BarComponent } from './components/page-content/bar.component';
    //import { BarComponent1 } from './components/page-content/bar.component1';


    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_components_small_components_input_component__WEBPACK_IMPORTED_MODULE_18__["InputComponent"], _components_page_template_pagetemplate_component__WEBPACK_IMPORTED_MODULE_5__["PageTemplateComponent"], _components_small_components_empty_content_component__WEBPACK_IMPORTED_MODULE_17__["EmptyContentComponent"], _components_page_template_headerpagetemplate_component__WEBPACK_IMPORTED_MODULE_6__["HeaderPageTemplateComponent"], _components_api_service__WEBPACK_IMPORTED_MODULE_19__["APIService"], _components_small_components_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"], _components_small_components_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"], _components_small_components_clickable_list_view_component__WEBPACK_IMPORTED_MODULE_14__["ClickableListViewComponent"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_24__["NgxChartsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["BrowserAnimationsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_small_components_input_component__WEBPACK_IMPORTED_MODULE_18__["InputComponent"], _components_page_template_headerpagetemplate_component__WEBPACK_IMPORTED_MODULE_6__["HeaderPageTemplateComponent"], _components_page_template_pagetemplate_component__WEBPACK_IMPORTED_MODULE_5__["PageTemplateComponent"], _components_small_components_empty_content_component__WEBPACK_IMPORTED_MODULE_17__["EmptyContentComponent"], _components_small_components_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"], _components_small_components_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"], _components_page_content_signin_component__WEBPACK_IMPORTED_MODULE_10__["SigninComponent"], _components_page_content_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"], _components_page_content_manage_accounts_component__WEBPACK_IMPORTED_MODULE_7__["ManageAccountsComponent"], _components_page_content_add_accounts_component__WEBPACK_IMPORTED_MODULE_8__["AddAccountsComponent"], _components_page_content_account_component__WEBPACK_IMPORTED_MODULE_9__["AccountComponent"], _components_small_components_add_transaction_modal_component__WEBPACK_IMPORTED_MODULE_0__["AddTransactionModalComponent"], _components_small_components_add_transaction_modal_button_component__WEBPACK_IMPORTED_MODULE_21__["AddTransactionButtonComponent"], _components_small_components_tabs_component__WEBPACK_IMPORTED_MODULE_22__["TabsComponent"], _components_small_components_tab_component__WEBPACK_IMPORTED_MODULE_23__["TabComponent"], _components_small_components_help_modal_component__WEBPACK_IMPORTED_MODULE_15__["ModalComponent"], _components_small_components_help_modal_button_component__WEBPACK_IMPORTED_MODULE_16__["HelpModalButtonComponent"], _components_small_components_clickable_list_view_component__WEBPACK_IMPORTED_MODULE_14__["ClickableListViewComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_24__["NgxChartsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["BrowserAnimationsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_small_components_input_component__WEBPACK_IMPORTED_MODULE_18__["InputComponent"], _components_page_template_headerpagetemplate_component__WEBPACK_IMPORTED_MODULE_6__["HeaderPageTemplateComponent"], _components_page_template_pagetemplate_component__WEBPACK_IMPORTED_MODULE_5__["PageTemplateComponent"], _components_small_components_empty_content_component__WEBPACK_IMPORTED_MODULE_17__["EmptyContentComponent"], _components_small_components_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"], _components_small_components_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"], _components_page_content_signin_component__WEBPACK_IMPORTED_MODULE_10__["SigninComponent"], _components_page_content_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"], _components_page_content_manage_accounts_component__WEBPACK_IMPORTED_MODULE_7__["ManageAccountsComponent"], _components_page_content_add_accounts_component__WEBPACK_IMPORTED_MODULE_8__["AddAccountsComponent"], _components_page_content_account_component__WEBPACK_IMPORTED_MODULE_9__["AccountComponent"], _components_small_components_add_transaction_modal_component__WEBPACK_IMPORTED_MODULE_0__["AddTransactionModalComponent"], _components_small_components_add_transaction_modal_button_component__WEBPACK_IMPORTED_MODULE_21__["AddTransactionButtonComponent"], _components_small_components_tabs_component__WEBPACK_IMPORTED_MODULE_22__["TabsComponent"], _components_small_components_tab_component__WEBPACK_IMPORTED_MODULE_23__["TabComponent"], _components_small_components_help_modal_component__WEBPACK_IMPORTED_MODULE_15__["ModalComponent"], _components_small_components_help_modal_button_component__WEBPACK_IMPORTED_MODULE_16__["HelpModalButtonComponent"], _components_small_components_clickable_list_view_component__WEBPACK_IMPORTED_MODULE_14__["ClickableListViewComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_24__["NgxChartsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["BrowserAnimationsModule"]],
          providers: [_components_small_components_input_component__WEBPACK_IMPORTED_MODULE_18__["InputComponent"], _components_page_template_pagetemplate_component__WEBPACK_IMPORTED_MODULE_5__["PageTemplateComponent"], _components_small_components_empty_content_component__WEBPACK_IMPORTED_MODULE_17__["EmptyContentComponent"], _components_page_template_headerpagetemplate_component__WEBPACK_IMPORTED_MODULE_6__["HeaderPageTemplateComponent"], _components_api_service__WEBPACK_IMPORTED_MODULE_19__["APIService"], _components_small_components_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"], _components_small_components_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"], _components_small_components_clickable_list_view_component__WEBPACK_IMPORTED_MODULE_14__["ClickableListViewComponent"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/api.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/components/api.service.ts ***!
    \*******************************************/

  /*! exports provided: APIService */

  /***/
  function srcAppComponentsApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "APIService", function () {
      return APIService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var APIService = /*#__PURE__*/function () {
      function APIService(http) {
        _classCallCheck(this, APIService);

        this.http = http;
      }

      _createClass(APIService, [{
        key: "getUserData",
        value: function getUserData(callback) {
          var _this = this;

          var headers = {
            'content-type': 'application/json',
            Authorization: 'Basic ' + btoa('srobinson:0p3n$esame21')
          };
          this.http.get('http://localhost:8080/fin-accounts.webservice/users', {
            headers: headers,
            observe: 'response'
          }) //.pipe(map((res) => res))
          .subscribe(function (response) {
            _this.userResult = response;
            callback(_this.userResult);
          });
        }
      }, {
        key: "postValidateUser",
        value: function postValidateUser(body) {
          var _this2 = this;

          var headers = {
            'content-type': 'application/json',
            Authorization: 'Basic ' + btoa('srobinson:0p3n$esame21')
          };
          this.http.post('http://localhost:8080/fin-accounts.webservice/validateUser', body, {
            headers: headers,
            observe: 'response'
          }).subscribe(function (response) {
            console.log('POST completed sucessfully. The response received ' + response);
            _this2.msg = 'success';
            return _this2.msg;
          }, function (error) {
            console.log('Post failed with the errors');
            console.log(error);
            _this2.msg = 'error';
            return _this2.msg;
          }, function () {
            console.log('Post Completed');
          });
          return this.msg;
        }
      }, {
        key: "getAccountDataAsync",
        value: function getAccountDataAsync(callback) {
          var _this3 = this;

          var headers = {
            'content-type': 'application/json',
            Authorization: 'Basic ' + btoa('srobinson:0p3n$esame21')
          };
          this.http.get('http://localhost:8080/fin-accounts.webservice/accounts', {
            headers: headers,
            observe: 'response'
          }) //.pipe(map((res) => res))
          .subscribe(function (response) {
            _this3.accountsResult = response;
            callback(_this3.accountsResult);
            console.log(_this3.accountsResult);
          });
        }
      }, {
        key: "getTransactionDataAsync",
        value: function getTransactionDataAsync(callback) {
          var _this4 = this;

          this.http.get('http://localhost:8080/fin-accounts.webservice/transactions').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
            return res;
          })).subscribe(function (res) {
            _this4.transactionsResult = res;
            callback(_this4.transactionsResult);
            console.log(_this4.transactionsResult);
          });
        }
      }, {
        key: "postUserData",
        value: function postUserData(body) {
          var headers = {
            'content-type': 'application/json',
            Authorization: 'Basic ' + btoa('srobinson:bl')
          };
          this.http.post('http://localhost:8080//fin-accounts.webservice/addUser', body, {
            headers: headers,
            observe: 'response'
          }).subscribe(function (response) {
            console.log('POST completed sucessfully. The response received ' + response);
          }, function (error) {
            console.log('Post failed with the errors');
          }, function () {
            console.log('Post Completed');
          });
        }
      }, {
        key: "postAccountData",
        value: function postAccountData(body) {
          var headers = {
            'content-type': 'application/json',
            Authorization: 'Basic ' + btoa('srobinson:bl')
          };
          this.http.post('http://localhost:8080/fin-accounts.webservice/addAccount', body, {
            headers: headers,
            observe: 'response'
          }).subscribe(function (response) {
            console.log('POST completed sucessfully. The response received ' + response);
          }, function (error) {
            console.log('Post failed with errors');
          }, function () {
            console.log('Post Completed');
          });
        }
      }, {
        key: "postTransactionDataTest",
        value: function postTransactionDataTest() {
          var headers = {
            'content-type': 'application/json',
            Authorization: 'Basic ' + btoa('srobinson:bl')
          };
          var body = '{"account_id":{"account_id": 1}, "transaction_type": "Deposit", "transaction_date": "2021-09-18", "transaction_amount": 20, "transaction_subTotal": 0}';
          this.http.post('http://localhost:8080/fin-accounts.webservice/addTransaction', body, {
            headers: headers,
            observe: 'response'
          }).subscribe(function (response) {
            console.log('POST completed sucessfully. The response received ' + response);
          }, function (error) {
            console.log('Post failed with the errors');
          }, function () {
            console.log('Post Completed');
          });
        }
      }, {
        key: "postTransactionData",
        value: function postTransactionData(body) {
          var headers = {
            'content-type': 'application/json',
            Authorization: 'Basic ' + btoa('srobinson:bl')
          };
          this.http.post('http://localhost:8080/fin-accounts.webservice/addTransaction', body, {
            headers: headers,
            observe: 'response'
          }).subscribe(function (response) {
            console.log('POST completed sucessfully. The response received ' + response);
          }, function (error) {
            console.log('Post failed with the errors');
          }, function () {
            console.log('Post Completed');
          });
        }
      }]);

      return APIService;
    }();

    APIService.ɵfac = function APIService_Factory(t) {
      return new (t || APIService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    APIService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: APIService,
      factory: APIService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](APIService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/page-content/account.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/page-content/account.component.ts ***!
    \**************************************************************/

  /*! exports provided: AccountComponent */

  /***/
  function srcAppComponentsPageContentAccountComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountComponent", function () {
      return AccountComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../api.service */
    "./src/app/components/api.service.ts");
    /* harmony import */


    var _page_template_pagetemplate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../page-template/pagetemplate.component */
    "./src/app/components/page-template/pagetemplate.component.ts");
    /* harmony import */


    var _small_components_add_transaction_modal_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../small-components/add-transaction-modal-button.component */
    "./src/app/components/small-components/add-transaction-modal-button.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _small_components_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../small-components/input.component */
    "./src/app/components/small-components/input.component.ts");

    function AccountComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-input-component", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var input_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", input_r2.label)("placeholder", input_r2.placeholder)("type", input_r2.type)("name", input_r2.name)("min", input_r2.min)("id", input_r2.id);
      }
    }

    var _c0 = function _c0(a0, a1) {
      return {
        "text-deposit-arrow": a0,
        "text-withdraw-arrow": a1
      };
    };

    function AccountComponent_tr_29_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var transaction_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](transaction_r3.transaction_date);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](transaction_r3.transaction_type);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, transaction_r3.transaction_type === "Deposit", transaction_r3.transaction_type === "Withdraw"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" $", transaction_r3.transaction_amount, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", transaction_r3.transaction_subTotal, "");
      }
    }

    var _c1 = function _c1(a0, a1) {
      return {
        "text-deposit": a0,
        "text-withdraw": a1
      };
    };

    function AccountComponent_tr_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AccountComponent_tr_29_ng_container_1_Template, 9, 8, "ng-container", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var transaction_r3 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c1, transaction_r3.transaction_type === "Deposit", transaction_r3.transaction_type === "Withdraw"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.accountUser === ctx_r1.currentUser && transaction_r3.account_id === ctx_r1.accountIDnum);
      }
    } //import { formatDate } from '@angular/common';


    var AccountComponent = /*#__PURE__*/function () {
      function AccountComponent(apiService) {
        _classCallCheck(this, AccountComponent);

        this.apiService = apiService;
        this.currentUser = 1;
        this.accountFieldData = [{
          label: 'Transaction Amount',
          placeholder: 'Type in your transaction amount',
          type: 'number',
          name: 'amount',
          min: 0,
          id: 'amount'
        }, {
          label: 'Transaction Group',
          placeholder: 'Type in your transaction group',
          type: 'text',
          name: 'transaction group',
          id: 'group'
        }, {
          label: 'Transaction Date',
          placeholder: 'Type in your transaction date',
          type: 'date',
          name: 'date',
          id: 'date'
        }];
      }

      _createClass(AccountComponent, [{
        key: "postTransactionData",
        value: function postTransactionData() {
          this.accountIDnum = parseInt(window.location.search.substring(4), 10);
          var transactionType = 'Deposit';
          var transactionDate = document.getElementById('date').value;
          var transactionAmount = document.getElementById('amount').value;
          console.log(transactionDate);
          var body = '{"account_id":{"account_id":' + this.accountIDnum + '}, "transaction_type":' + transactionType + ', "transaction_date":' + transactionDate + ', "transaction_amount":' + transactionAmount + ', "transaction_subTotal": 0}';
          this.apiService.postTransactionData(body);
          location.reload();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.accountIDnum = parseInt(window.location.search.substring(4), 10);
          this.accountID = (parseInt(window.location.search.substring(4), 10) - 1).toString();
          this.apiService.getAccountDataAsync(function (d) {
            _this5.accountDescription = d[_this5.accountID].account_Description;
            _this5.accountDeposits = d[_this5.accountID].deposit_amount;
            _this5.accountWithdraws = d[_this5.accountID].withdraw_amount;
            _this5.accountUser = d[_this5.accountID].user_id;
            _this5.accountStartingAmount = d[_this5.accountID].account_Starting_Amount;
          });
          this.apiService.getTransactionDataAsync(function (d) {
            _this5.transactionData = d;
          });
        }
      }]);

      return AccountComponent;
    }();

    AccountComponent.ɵfac = function AccountComponent_Factory(t) {
      return new (t || AccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["APIService"]));
    };

    AccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AccountComponent,
      selectors: [["app-account-component"]],
      decls: 57,
      vars: 9,
      consts: [[3, "pagedirections", "pagetitle"], ["modalAccountText", ""], ["class", "input", 4, "ngFor", "ngForOf"], [1, "select"], ["value", "0"], ["value", "1"], ["value", "2"], ["type", "submit", 1, "primary", "round", 3, "click"], [1, "scroll"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "input"], [3, "label", "placeholder", "type", "name", "min", "id"], [3, "ngClass"], [4, "ngIf"]],
      template: function AccountComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-page-template", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-add-transaction-button-component", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AccountComponent_div_2_Template, 2, 6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Transaction Type ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Select your transaction type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Deposit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Withdraw");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountComponent_Template_button_click_14_listener() {
            return ctx.postTransactionData();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Submit Transaction ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Transactions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Transaction Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Transaction Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Transaction Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Sub-Total");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AccountComponent_tr_29_Template, 2, 5, "tr", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Overall Account Summary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Account Starting Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Account Deposits");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Account Withdraws");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Account Current Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Overall Account Difference");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pagedirections", "Click on an account to view and add information")("pagetitle", ctx.accountDescription);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.accountFieldData);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.transactionData);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.accountStartingAmount, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.accountDeposits, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.accountWithdraws, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" $", ctx.transactionData.slice(0 - 1).pop().transaction_subTotal, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" $", ctx.transactionData.slice(0 - 1).pop().transaction_subTotal - ctx.accountStartingAmount, " ");
        }
      },
      directives: [_page_template_pagetemplate_component__WEBPACK_IMPORTED_MODULE_2__["PageTemplateComponent"], _small_components_add_transaction_modal_button_component__WEBPACK_IMPORTED_MODULE_3__["AddTransactionButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _small_components_input_component__WEBPACK_IMPORTED_MODULE_5__["InputComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: [".scroll[_ngcontent-%COMP%] {\n        height: 10rem;\n        overflow-y: scroll;\n      }\n      .clickable-view[_ngcontent-%COMP%] {\n        margin: 0.625rem;\n      }\n\n      .inputs[_ngcontent-%COMP%] {\n        align-items: center;\n      }\n      .input[_ngcontent-%COMP%] {\n        width: 50%;\n      }\n      .select[_ngcontent-%COMP%] {\n        width: 52%;\n      }\n\n      .row[_ngcontent-%COMP%] {\n        padding-right: 5rem;\n      }\n\n      .text-deposit[_ngcontent-%COMP%] {\n        color: green;\n      }\n\n      .text-withdraw[_ngcontent-%COMP%] {\n        color: #a10a28;\n      }\n\n      .text-deposit-arrow[_ngcontent-%COMP%]::before {\n        font-family: 'Font Awesome 5 Free';\n        content: '\u2191';\n      }\n\n      .text-withdraw-arrow[_ngcontent-%COMP%]::before {\n        font-family: 'Font Awesome 5 Free';\n        content: '\u2193';\n      }\n\n      select[_ngcontent-%COMP%] {\n        border-radius: 20rem;\n        font-size: 1rem;\n        height: 1.5rem;\n        min-width: 15rem;\n        width: 100%;\n        height: 3.25rem;\n        padding: 0rem 1rem;\n        border: 0.063rem solid var(--fin-white);\n        margin: 0.5rem 0;\n        background: var(--fin-neutral-6);\n        color: var(--fin-neutral-1);\n      }\n\n      table[_ngcontent-%COMP%] {\n        border-collapse: collapse;\n        width: 100%;\n      }\n\n      th[_ngcontent-%COMP%] {\n        background-color: var(--fin-neutral-6);\n        color: var(--fin-neutral-1);\n      }\n\n      td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n        border: 0.063rem solid #dddddd;\n        text-align: left;\n        padding: 0.5rem;\n      }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-account-component',
          template: "\n    <app-page-template\n      [pagedirections]=\"'Click on an account to view and add information'\"\n      [pagetitle]=\"this.accountDescription\"\n    >\n      <app-add-transaction-button-component modalAccountText=\"\">\n        <div class=\"input\" *ngFor=\"let input of accountFieldData\">\n          <app-input-component\n            [label]=\"input.label\"\n            [placeholder]=\"input.placeholder\"\n            [type]=\"input.type\"\n            [name]=\"input.name\"\n            [min]=\"input.min\"\n            [id]=\"input.id\"\n          ></app-input-component>\n        </div>\n        <label>Transaction Type </label>\n        <br />\n        <select class=\"select\">\n          <option value=\"0\">Select your transaction type</option>\n          <option value=\"1\">Deposit</option>\n          <option value=\"2\">Withdraw</option>\n        </select>\n        <br />\n        <button\n          type=\"submit\"\n          class=\"primary round\"\n          (click)=\"postTransactionData()\"\n        >\n          Submit Transaction\n        </button>\n      </app-add-transaction-button-component>\n\n      <p>Transactions</p>\n      <div class=\"scroll\">\n        <table>\n          <tr>\n            <th>Transaction Date</th>\n            <th>Transaction Type</th>\n            <th>Transaction Amount</th>\n            <th>Sub-Total</th>\n          </tr>\n\n          <tr\n            *ngFor=\"let transaction of transactionData\"\n            [ngClass]=\"{\n              'text-deposit': transaction.transaction_type === 'Deposit',\n              'text-withdraw': transaction.transaction_type === 'Withdraw'\n            }\"\n          >\n            <ng-container\n              *ngIf=\"\n                accountUser === currentUser &&\n                transaction.account_id === accountIDnum\n              \"\n            >\n              <td>{{ transaction.transaction_date }}</td>\n              <td>{{ transaction.transaction_type }}</td>\n              <td\n                [ngClass]=\"{\n                  'text-deposit-arrow':\n                    transaction.transaction_type === 'Deposit',\n                  'text-withdraw-arrow':\n                    transaction.transaction_type === 'Withdraw'\n                }\"\n              >\n                ${{ transaction.transaction_amount }}\n              </td>\n              <td>${{ transaction.transaction_subTotal }}</td>\n            </ng-container>\n          </tr>\n        </table>\n      </div>\n      <br />\n      <br />\n      <p>Overall Account Summary</p>\n      <table>\n        <tr>\n          <th>Account Starting Amount</th>\n          <th>Account Deposits</th>\n          <th>Account Withdraws</th>\n          <th>Account Current Amount</th>\n          <th>Overall Account Difference</th>\n        </tr>\n        <tr>\n          <td>${{ this.accountStartingAmount }}</td>\n          <td>${{ this.accountDeposits }}</td>\n          <td>${{ this.accountWithdraws }}</td>\n          <td>\n            ${{ this.transactionData.slice(-1).pop().transaction_subTotal }}\n          </td>\n          <td>\n            ${{\n              this.transactionData.slice(-1).pop().transaction_subTotal -\n                this.accountStartingAmount\n            }}\n          </td>\n        </tr>\n      </table>\n    </app-page-template>\n  ",
          styles: ["\n      .scroll {\n        height: 10rem;\n        overflow-y: scroll;\n      }\n      .clickable-view {\n        margin: 0.625rem;\n      }\n\n      .inputs {\n        align-items: center;\n      }\n      .input {\n        width: 50%;\n      }\n      .select {\n        width: 52%;\n      }\n\n      .row {\n        padding-right: 5rem;\n      }\n\n      .text-deposit {\n        color: green;\n      }\n\n      .text-withdraw {\n        color: #a10a28;\n      }\n\n      .text-deposit-arrow::before {\n        font-family: 'Font Awesome 5 Free';\n        content: '\u2191';\n      }\n\n      .text-withdraw-arrow::before {\n        font-family: 'Font Awesome 5 Free';\n        content: '\u2193';\n      }\n\n      select {\n        border-radius: 20rem;\n        font-size: 1rem;\n        height: 1.5rem;\n        min-width: 15rem;\n        width: 100%;\n        height: 3.25rem;\n        padding: 0rem 1rem;\n        border: 0.063rem solid var(--fin-white);\n        margin: 0.5rem 0;\n        background: var(--fin-neutral-6);\n        color: var(--fin-neutral-1);\n      }\n\n      table {\n        border-collapse: collapse;\n        width: 100%;\n      }\n\n      th {\n        background-color: var(--fin-neutral-6);\n        color: var(--fin-neutral-1);\n      }\n\n      td,\n      th {\n        border: 0.063rem solid #dddddd;\n        text-align: left;\n        padding: 0.5rem;\n      }\n    "]
        }]
      }], function () {
        return [{
          type: _api_service__WEBPACK_IMPORTED_MODULE_1__["APIService"]
        }];
      }, null);
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


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../api.service */
    "./src/app/components/api.service.ts");
    /* harmony import */


    var _page_template_pagetemplate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../page-template/pagetemplate.component */
    "./src/app/components/page-template/pagetemplate.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _small_components_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../small-components/input.component */
    "./src/app/components/small-components/input.component.ts");

    function AddAccountsComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 9);
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.error, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function AddAccountsComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-input-component", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var input_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", input_r2.label)("placeholder", input_r2.placeholder)("type", input_r2.type)("name", input_r2.name)("min", input_r2.min)("id", input_r2.id);
      }
    }

    var AddAccountsComponent = /*#__PURE__*/function () {
      function AddAccountsComponent(apiService) {
        _classCallCheck(this, AddAccountsComponent);

        this.apiService = apiService;
        this.startingAmount = 0;
        this.accountFieldData = [{
          label: 'Account Description (Example: TD Bank Checking)',
          placeholder: 'Type in your account description',
          type: 'text',
          name: 'description',
          id: 'description',
          min: 0
        }, {
          label: 'Account Starting Amount ($)',
          placeholder: 'Type in your account starting amount',
          type: 'number',
          name: 'amount',
          id: 'amount',
          min: 1
        }];
      }

      _createClass(AddAccountsComponent, [{
        key: "postAccountData",
        value: function postAccountData() {
          this.accountTypeNum = document.getElementById('select').value;

          if (this.accountTypeNum === 1) {
            this.accountType = 'Checking';
          } else if (this.accountTypeNum === 2) {
            this.accountType = 'Savings';
          }

          this.accountDescription = document.getElementById('description').value;
          this.startingAmount = document.getElementById('amount').value;

          if (this.accountTypeNum === 0 || this.startingAmount === 0 || this.accountDescription === '') {
            this.error = 'Invalid inputs provided.  Please fill out all field inputs.';
          } else {
            var body = '{"user_id":{"user_id":' + src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["userId"] + '}, "account_Type": "' + this.accountType + '", "account_Starting_Amount": ' + this.startingAmount + ', "account_Description": "' + this.accountDescription + '", "deposit_amount": 0, "withdraw_amount": 0}';
            console.log(body);
            this.apiService.postAccountData(body);
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AddAccountsComponent;
    }();

    AddAccountsComponent.ɵfac = function AddAccountsComponent_Factory(t) {
      return new (t || AddAccountsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"]));
    };

    AddAccountsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddAccountsComponent,
      selectors: [["app-add-accounts-content-component"]],
      decls: 17,
      vars: 4,
      consts: [[3, "pagetitle", "pagedirections"], ["class", "error", 3, "innerHTML", 4, "ngIf"], [1, "inputs"], ["id", "select", 1, "select"], ["value", "0"], ["value", "1"], ["value", "2"], ["class", "input", 4, "ngFor", "ngForOf"], ["type", "submit", 1, "primary", "round", 3, "click"], [1, "error", 3, "innerHTML"], [1, "input"], [3, "label", "placeholder", "type", "name", "min", "id"]],
      template: function AddAccountsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-page-template", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddAccountsComponent_div_1_Template, 1, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Account Type (checking/savings)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "select", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Select your account type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Checking");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Savings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AddAccountsComponent_div_14_Template, 2, 6, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddAccountsComponent_Template_button_click_15_listener() {
            return ctx.postAccountData();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Add Account ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pagetitle", "Add Accounts")("pagedirections", "Fill out the form to add an account. To view and manage accounts click\n    Manage Accounts in the navbar.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.accountFieldData);
        }
      },
      directives: [_page_template_pagetemplate_component__WEBPACK_IMPORTED_MODULE_3__["PageTemplateComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _small_components_input_component__WEBPACK_IMPORTED_MODULE_5__["InputComponent"]],
      styles: [".inputs[_ngcontent-%COMP%] {\n        align-items: center;\n      }\n      .input[_ngcontent-%COMP%] {\n        width: 50%;\n      }\n      .select[_ngcontent-%COMP%] {\n        width: 52%;\n      }\n\n      select[_ngcontent-%COMP%] {\n        border-radius: 20rem;\n        font-size: 1rem;\n        height: 1.5rem;\n        min-width: 15rem;\n        width: 100%;\n        height: 3.25rem;\n        padding: 0rem 1rem;\n        border: 0.063rem solid var(--fin-white);\n        margin: 0.5rem 0;\n        background: var(--fin-neutral-6);\n        color: var(--fin-neutral-1);\n      }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddAccountsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-add-accounts-content-component',
          template: "\n    <app-page-template\n      [pagetitle]=\"'Add Accounts'\"\n      [pagedirections]=\"\n        'Fill out the form to add an account. To view and manage accounts click\n    Manage Accounts in the navbar.'\n      \"\n    >\n      <div *ngIf=\"error\" [innerHTML]=\"error\" class=\"error\"></div>\n      <form>\n        <div class=\"inputs\">\n          <label>Account Type (checking/savings)</label>\n          <br />\n          <select class=\"select\" id=\"select\">\n            <option value=\"0\">Select your account type</option>\n            <option value=\"1\">Checking</option>\n            <option value=\"2\">Savings</option>\n          </select>\n          <div class=\"input\" *ngFor=\"let input of accountFieldData\">\n            <app-input-component\n              [label]=\"input.label\"\n              [placeholder]=\"input.placeholder\"\n              [type]=\"input.type\"\n              [name]=\"input.name\"\n              [min]=\"input.min\"\n              [id]=\"input.id\"\n            ></app-input-component>\n          </div>\n        </div>\n        <button type=\"submit\" class=\"primary round\" (click)=\"postAccountData()\">\n          Add Account\n        </button>\n      </form>\n    </app-page-template>\n  ",
          styles: ["\n      .inputs {\n        align-items: center;\n      }\n      .input {\n        width: 50%;\n      }\n      .select {\n        width: 52%;\n      }\n\n      select {\n        border-radius: 20rem;\n        font-size: 1rem;\n        height: 1.5rem;\n        min-width: 15rem;\n        width: 100%;\n        height: 3.25rem;\n        padding: 0rem 1rem;\n        border: 0.063rem solid var(--fin-white);\n        margin: 0.5rem 0;\n        background: var(--fin-neutral-6);\n        color: var(--fin-neutral-1);\n      }\n    "]
        }]
      }], function () {
        return [{
          type: _api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"]
        }];
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


    var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../api.service */
    "./src/app/components/api.service.ts");
    /* harmony import */


    var _page_template_pagetemplate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../page-template/pagetemplate.component */
    "./src/app/components/page-template/pagetemplate.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _small_components_clickable_list_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../small-components/clickable-list-view.component */
    "./src/app/components/small-components/clickable-list-view.component.ts");
    /* harmony import */


    var _small_components_empty_content_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../small-components/empty-content.component */
    "./src/app/components/small-components/empty-content.component.ts");

    function ManageAccountsComponent_div_1_div_3_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-clickable-list-view", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var account_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", account_r3.account_Description)("link", "/account?id=".concat(account_r3.account_id))("amount", account_r3.account_Starting_Amount.toLocaleString("en-GB"));
      }
    }

    function ManageAccountsComponent_div_1_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ManageAccountsComponent_div_1_div_3_div_1_Template, 2, 3, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var account_r3 = ctx.$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", account_r3.user_id === ctx_r2.userId);
      }
    }

    function ManageAccountsComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Account Current Amount");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ManageAccountsComponent_div_1_div_3_Template, 2, 1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.accountData);
      }
    }

    function ManageAccountsComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-emptycontent", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var ManageAccountsComponent = /*#__PURE__*/function () {
      function ManageAccountsComponent(apiService) {
        _classCallCheck(this, ManageAccountsComponent);

        this.apiService = apiService;
        this.userId = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["userId"];
      }

      _createClass(ManageAccountsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.apiService.getAccountDataAsync(function (d) {
            _this6.accountData = d;
          });
        }
      }]);

      return ManageAccountsComponent;
    }();

    ManageAccountsComponent.ɵfac = function ManageAccountsComponent_Factory(t) {
      return new (t || ManageAccountsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"]));
    };

    ManageAccountsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ManageAccountsComponent,
      selectors: [["app-manage-accounts-content-component"]],
      decls: 3,
      vars: 4,
      consts: [[3, "pagetitle", "pagedirections"], [4, "ngIf"], [1, "align-right"], ["class", "clickable-view", 4, "ngFor", "ngForOf"], [1, "clickable-view"], [3, "name", "link", "amount"], ["emptyHeader", "No Accounts Yet", "emptyPar", "Click 'Add Accounts' in the navbar to add an account. "]],
      template: function ManageAccountsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-page-template", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ManageAccountsComponent_div_1_Template, 4, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ManageAccountsComponent_div_2_Template, 2, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pagetitle", "Manage Accounts")("pagedirections", "Click on an account to view and add information");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.accountData);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.accountData);
        }
      },
      directives: [_page_template_pagetemplate_component__WEBPACK_IMPORTED_MODULE_3__["PageTemplateComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _small_components_clickable_list_view_component__WEBPACK_IMPORTED_MODULE_5__["ClickableListViewComponent"], _small_components_empty_content_component__WEBPACK_IMPORTED_MODULE_6__["EmptyContentComponent"]],
      styles: [".align-right[_ngcontent-%COMP%] {\n        text-align: right;\n        margin-right: 10rem;\n      }\n      .clickable-view[_ngcontent-%COMP%] {\n        margin: 0.625rem;\n      }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ManageAccountsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-manage-accounts-content-component',
          template: "\n    <app-page-template\n      [pagetitle]=\"'Manage Accounts'\"\n      [pagedirections]=\"'Click on an account to view and add information'\"\n    >\n      <div *ngIf=\"accountData\">\n        <p class=\"align-right\">Account Current Amount</p>\n        <div *ngFor=\"let account of accountData\" class=\"clickable-view\">\n          <div *ngIf=\"account.user_id === userId\">\n            <app-clickable-list-view\n              [name]=\"account.account_Description\"\n              [link]=\"'/account?id='.concat(account.account_id)\"\n              [amount]=\"account.account_Starting_Amount.toLocaleString('en-GB')\"\n            >\n            </app-clickable-list-view>\n          </div>\n        </div>\n      </div>\n\n      <div *ngIf=\"!accountData\">\n        <app-emptycontent\n          emptyHeader=\"No Accounts Yet\"\n          emptyPar=\"Click 'Add Accounts' in the navbar to add an account. \"\n        ></app-emptycontent>\n      </div>\n    </app-page-template>\n  ",
          styles: ["\n      .align-right {\n        text-align: right;\n        margin-right: 10rem;\n      }\n      .clickable-view {\n        margin: 0.625rem;\n      }\n    "]
        }]
      }], function () {
        return [{
          type: _api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/page-content/signin.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/page-content/signin.component.ts ***!
    \*************************************************************/

  /*! exports provided: SigninComponent */

  /***/
  function srcAppComponentsPageContentSigninComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SigninComponent", function () {
      return SigninComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/components/api.service.ts");
    /* harmony import */


    var _page_template_headerpagetemplate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../page-template/headerpagetemplate.component */
    "./src/app/components/page-template/headerpagetemplate.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _small_components_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../small-components/input.component */
    "./src/app/components/small-components/input.component.ts");

    function SigninComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 6);
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.error, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function SigninComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-input-component", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var input_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", input_r2.label)("placeholder", input_r2.placeholder)("id", input_r2.id)("type", input_r2.type)("name", input_r2.name);
      }
    }

    var SigninComponent = /*#__PURE__*/function () {
      function SigninComponent(apiService) {
        _classCallCheck(this, SigninComponent);

        this.apiService = apiService;
        this.inputFieldData = [{
          label: 'Email',
          placeholder: 'Type in your email',
          type: 'email',
          name: 'email',
          id: 'email'
        }, {
          label: 'Password',
          placeholder: 'Type in your password',
          type: 'password',
          name: 'password',
          id: 'password'
        }];
        this.loginData = [{
          password: 'B!ah123'
        }];
      }

      _createClass(SigninComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "signIn",
        value: function signIn() {
          this.email = document.getElementById('email').value;
          this.password = document.getElementById('password').value;

          if (this.email === '' || this.password === '') {
            console.log('Please fill out all fields');
          } else {
            var body = '{"email": "' + this.email + '", "password": "' + this.password + '"}';
            console.log(body);
            this.response = this.apiService.postValidateUser(body);
            console.log(this.response);

            if (!this.response.includes('error') || this.response !== undefined) {
              console.log('yay');
              location.href = '/manageAccounts';
            } else {
              console.log("can't authenticate");
              location.href = '/';
            }
          }
          /*
          console.log(this.email);
          if (
            this.email ==
              (<HTMLInputElement>document.getElementById('email')).value &&
            this.loginData[0].password ==
              (<HTMLInputElement>document.getElementById('password')).value
          ) {
            console.log('Input matches account sign-in info!');
            location.href = '/manageAccounts';
          } else if (
            this.email ==
              (<HTMLInputElement>document.getElementById('email')).value &&
            this.loginData[0].password !=
              (<HTMLInputElement>document.getElementById('password')).value
          ) {
            this.error = 'Email exists but password is incorrect';
            console.log('Email exists but password is incorrect');
          } else if (
            (<HTMLInputElement>document.getElementById('email')).value == '' &&
            (<HTMLInputElement>document.getElementById('password')).value == ''
          ) {
            this.error = 'Please enter in a valid username and password';
          } else if (
            this.email != (<HTMLInputElement>document.getElementById('email')).value
          ) {
            this.error = "Email doesn't exist.  Please signup first";
            console.log("Email doesn't exist.  Please signup first");
          }
            */

        }
      }]);

      return SigninComponent;
    }();

    SigninComponent.ɵfac = function SigninComponent_Factory(t) {
      return new (t || SigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["APIService"]));
    };

    SigninComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SigninComponent,
      selectors: [["app-login-content-component"]],
      decls: 8,
      vars: 3,
      consts: [[1, "signin", 3, "pagetitle"], ["class", "error", 3, "innerHTML", 4, "ngIf"], ["class", "inputs", 4, "ngFor", "ngForOf"], [1, "login-button"], ["type", "submit", 1, "primary", "round", 3, "click"], ["href", "/signup"], [1, "error", 3, "innerHTML"], [1, "inputs"], [3, "label", "placeholder", "id", "type", "name"]],
      template: function SigninComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-header-page-template", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SigninComponent_div_1_Template, 1, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SigninComponent_div_2_Template, 2, 5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SigninComponent_Template_button_click_4_listener() {
            return ctx.signIn();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Sign In ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Don't have an account? Signup -> ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pagetitle", "Sign In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.inputFieldData);
        }
      },
      directives: [_page_template_headerpagetemplate_component__WEBPACK_IMPORTED_MODULE_2__["HeaderPageTemplateComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _small_components_input_component__WEBPACK_IMPORTED_MODULE_4__["InputComponent"]],
      styles: [".login-button[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: center;\n        width: 70%;\n      }\n\n      .inputs[_ngcontent-%COMP%] {\n        width: 30%;\n      }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SigninComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login-content-component',
          template: "\n    <app-header-page-template class=\"signin\" [pagetitle]=\"'Sign In'\">\n      <div *ngIf=\"error\" [innerHTML]=\"error\" class=\"error\"></div>\n\n      <div class=\"inputs\" *ngFor=\"let input of inputFieldData\">\n        <app-input-component\n          [label]=\"input.label\"\n          [placeholder]=\"input.placeholder\"\n          [id]=\"input.id\"\n          [type]=\"input.type\"\n          [name]=\"input.name\"\n        ></app-input-component>\n      </div>\n\n      <div class=\"login-button\">\n        <button type=\"submit\" class=\"primary round\" (click)=\"signIn()\">\n          Sign In\n        </button>\n      </div>\n      <a href=\"/signup\">Don't have an account? Signup -> </a>\n    </app-header-page-template>\n  ",
          styles: ["\n      .login-button {\n        display: flex;\n        justify-content: center;\n        width: 70%;\n      }\n\n      .inputs {\n        width: 30%;\n      }\n    "]
        }]
      }], function () {
        return [{
          type: _api_service__WEBPACK_IMPORTED_MODULE_1__["APIService"]
        }];
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


    var sha_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! sha.js */
    "./node_modules/sha.js/index.js");
    /* harmony import */


    var sha_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sha_js__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../api.service */
    "./src/app/components/api.service.ts");
    /* harmony import */


    var _page_template_headerpagetemplate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../page-template/headerpagetemplate.component */
    "./src/app/components/page-template/headerpagetemplate.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _small_components_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../small-components/input.component */
    "./src/app/components/small-components/input.component.ts");

    function SignupComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-input-component", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var input_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", input_r1.label)("placeholder", input_r1.placeholder)("type", input_r1.type)("name", input_r1.name)("id", input_r1.id);
      }
    }

    var SignupComponent = /*#__PURE__*/function () {
      function SignupComponent(apiService) {
        _classCallCheck(this, SignupComponent);

        this.apiService = apiService;
        this.signupFieldData = [{
          label: 'Full Name',
          placeholder: 'Type in your full name',
          type: 'fname',
          name: 'fname',
          id: 'fname'
        }, {
          label: 'Email',
          placeholder: 'Type in your email',
          type: 'email',
          name: 'email',
          id: 'email'
        }, {
          label: 'Password',
          placeholder: 'Type in your password',
          type: 'password',
          name: 'password',
          id: 'password'
        }];
      }

      _createClass(SignupComponent, [{
        key: "postUserData",
        value: function postUserData() {
          this.fullName = document.getElementById('fname').value;
          this.email = document.getElementById('email').value;
          this.password = document.getElementById('password').value;

          if (this.fullName === '' || this.email === '' || this.password === '') {
            console.log('Please fill out all fields');
          } else {
            this.hashedPassword = sha_js__WEBPACK_IMPORTED_MODULE_1__('sha256').update(this.password).digest('hex');
            var body = '{"fullName": "' + this.fullName + '", "email": "' + this.email + '", "password":"' + this.hashedPassword + '"}';
            this.apiService.postUserData(body);
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SignupComponent;
    }();

    SignupComponent.ɵfac = function SignupComponent_Factory(t) {
      return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"]));
    };

    SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignupComponent,
      selectors: [["app-signup-content-component"]],
      decls: 8,
      vars: 2,
      consts: [[3, "pagetitle"], ["class", "inputs", 4, "ngFor", "ngForOf"], [1, "login-button"], ["type", "submit", 1, "primary", "round", 3, "click"], ["href", "/"], [1, "inputs"], [3, "label", "placeholder", "type", "name", "id"]],
      template: function SignupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-header-page-template", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignupComponent_div_2_Template, 2, 5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_4_listener() {
            return ctx.postUserData();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Sign Up ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Already have an account? Login -> ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pagetitle", "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.signupFieldData);
        }
      },
      directives: [_page_template_headerpagetemplate_component__WEBPACK_IMPORTED_MODULE_3__["HeaderPageTemplateComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _small_components_input_component__WEBPACK_IMPORTED_MODULE_5__["InputComponent"]],
      styles: [".login-button[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: center;\n        width: 70%;\n      }\n\n      .inputs[_ngcontent-%COMP%] {\n        width: 30%;\n      }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-signup-content-component',
          template: "\n    <app-header-page-template [pagetitle]=\"'Sign Up'\">\n      <form>\n        <div class=\"inputs\" *ngFor=\"let input of signupFieldData\">\n          <app-input-component\n            [label]=\"input.label\"\n            [placeholder]=\"input.placeholder\"\n            [type]=\"input.type\"\n            [name]=\"input.name\"\n            [id]=\"input.id\"\n          ></app-input-component>\n        </div>\n\n        <div class=\"login-button\">\n          <button type=\"submit\" class=\"primary round\" (click)=\"postUserData()\">\n            Sign Up\n          </button>\n        </div>\n      </form>\n      <a href=\"/\">Already have an account? Login -> </a>\n    </app-header-page-template>\n  ",
          styles: ["\n      .login-button {\n        display: flex;\n        justify-content: center;\n        width: 70%;\n      }\n\n      .inputs {\n        width: 30%;\n      }\n    "]
        }]
      }], function () {
        return [{
          type: _api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"]
        }];
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
      selectors: [["app-header-page-template"]],
      inputs: {
        pagetitle: "pagetitle"
      },
      ngContentSelectors: _c0,
      decls: 6,
      vars: 3,
      consts: [[3, "maintitle", "tagline"], [1, "content"], [1, "column", "login-signup-container"], [1, "pagetitle"]],
      template: function HeaderPageTemplateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header-component", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);

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
      styles: [".content[_ngcontent-%COMP%] {\n        margin: 2rem 2rem 0rem 2rem;\n      }\n\n      .login-signup-container[_ngcontent-%COMP%] {\n        align-items: center;\n        margin-top: 5rem;\n      }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderPageTemplateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header-page-template',
          template: "\n    <app-header-component\n      [maintitle]=\"'Fin'\"\n      [tagline]=\"'Financial Accounts Management'\"\n    ></app-header-component>\n    <div class=\"content\">\n      <div class=\"column login-signup-container\">\n        <h2 class=\"pagetitle\">{{ pagetitle }}</h2>\n        <ng-content></ng-content>\n      </div>\n    </div>\n  ",
          styles: ["\n      .content {\n        margin: 2rem 2rem 0rem 2rem;\n      }\n\n      .login-signup-container {\n        align-items: center;\n        margin-top: 5rem;\n      }\n    "]
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


    var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/components/api.service.ts");
    /* harmony import */


    var _small_components_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../small-components/navbar.component */
    "./src/app/components/small-components/navbar.component.ts");
    /* harmony import */


    var _small_components_help_modal_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../small-components/help-modal-button.component */
    "./src/app/components/small-components/help-modal-button.component.ts");

    var _c0 = ["*"];

    var PageTemplateComponent = /*#__PURE__*/function () {
      function PageTemplateComponent(apiService) {
        _classCallCheck(this, PageTemplateComponent);

        this.apiService = apiService;
      }

      _createClass(PageTemplateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.apiService.getUserData(function (d) {
            _this7.userData = d[0].fullName;
          });
        }
      }]);

      return PageTemplateComponent;
    }();

    PageTemplateComponent.ɵfac = function PageTemplateComponent_Factory(t) {
      return new (t || PageTemplateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["APIService"]));
    };

    PageTemplateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PageTemplateComponent,
      selectors: [["app-page-template"]],
      inputs: {
        pagedirections: "pagedirections",
        pagetitle: "pagetitle"
      },
      ngContentSelectors: _c0,
      decls: 9,
      vars: 4,
      consts: [[3, "childToMaster"], [1, "content"], [1, "pagetitle"], [3, "modaltext"]],
      template: function PageTemplateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar-component", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-help-modal-button-component", 3);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("childToMaster", ctx.userData);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pagetitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pagedirections);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("modaltext", "To add an account click Add An Account.  To view accounts click Manage Accounts.  To add transactions for a specific account click on that account.");
        }
      },
      directives: [_small_components_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _small_components_help_modal_button_component__WEBPACK_IMPORTED_MODULE_3__["HelpModalButtonComponent"]],
      styles: [".content[_ngcontent-%COMP%] {\n        margin: 2rem 2rem 0rem 2rem;\n      }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageTemplateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-page-template',
          template: "\n    <app-navbar-component\n      [childToMaster]=\"this.userData\"\n    ></app-navbar-component>\n    <div class=\"content\">\n      <h2 class=\"pagetitle\">{{ pagetitle }}</h2>\n      <p>{{ pagedirections }}</p>\n      <br />\n      <ng-content></ng-content>\n    </div>\n    <app-help-modal-button-component\n      [modaltext]=\"\n        'To add an account click Add An Account.  To view accounts click Manage Accounts.  To add transactions for a specific account click on that account.'\n      \"\n    ></app-help-modal-button-component>\n  ",
          styles: ["\n      .content {\n        margin: 2rem 2rem 0rem 2rem;\n      }\n    "]
        }]
      }], function () {
        return [{
          type: _api_service__WEBPACK_IMPORTED_MODULE_1__["APIService"]
        }];
      }, {
        pagedirections: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        pagetitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/small-components/add-transaction-modal-button.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/components/small-components/add-transaction-modal-button.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: AddTransactionButtonComponent */

  /***/
  function srcAppComponentsSmallComponentsAddTransactionModalButtonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddTransactionButtonComponent", function () {
      return AddTransactionButtonComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _help_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./help-modal.service */
    "./src/app/components/small-components/help-modal.service.ts");
    /* harmony import */


    var _help_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./help-modal.component */
    "./src/app/components/small-components/help-modal.component.ts");

    var _c0 = ["*"];

    var AddTransactionButtonComponent = /*#__PURE__*/function () {
      function AddTransactionButtonComponent(modalService) {
        _classCallCheck(this, AddTransactionButtonComponent);

        this.modalService = modalService;
      }

      _createClass(AddTransactionButtonComponent, [{
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

      return AddTransactionButtonComponent;
    }();

    AddTransactionButtonComponent.ɵfac = function AddTransactionButtonComponent_Factory(t) {
      return new (t || AddTransactionButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_help_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"]));
    };

    AddTransactionButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddTransactionButtonComponent,
      selectors: [["app-add-transaction-button-component"]],
      inputs: {
        modaltext: "modaltext"
      },
      ngContentSelectors: _c0,
      decls: 7,
      vars: 0,
      consts: [[1, "primary", "round", 3, "click"], ["id", "custom-modal-2"], [1, "float-right"], [1, "secondary", 3, "click"]],
      template: function AddTransactionButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddTransactionButtonComponent_Template_button_click_0_listener() {
            return ctx.openModal("custom-modal-2");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Add Transaction ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-modal-component", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddTransactionButtonComponent_Template_button_click_4_listener() {
            return ctx.closeModal("custom-modal-2");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " X ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_help_modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"]],
      styles: [".float-right[_ngcontent-%COMP%] {\n        float: right;\n      }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddTransactionButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-add-transaction-button-component',
          template: "\n    <button (click)=\"openModal('custom-modal-2')\" class=\"primary round\">\n      Add Transaction\n    </button>\n\n    <app-modal-component id=\"custom-modal-2\">\n      <div class=\"float-right\">\n        <button class=\"secondary\" (click)=\"closeModal('custom-modal-2')\">\n          X\n        </button>\n      </div>\n      <ng-content></ng-content>\n    </app-modal-component>\n  ",
          styles: ["\n      .float-right {\n        float: right;\n      }\n    "]
        }]
      }], function () {
        return [{
          type: _help_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"]
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
  "./src/app/components/small-components/add-transaction-modal.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/components/small-components/add-transaction-modal.component.ts ***!
    \********************************************************************************/

  /*! exports provided: AddTransactionModalComponent */

  /***/
  function srcAppComponentsSmallComponentsAddTransactionModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddTransactionModalComponent", function () {
      return AddTransactionModalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _add_transaction_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./add-transaction-modal.service */
    "./src/app/components/small-components/add-transaction-modal.service.ts");

    var _c0 = ["*"];

    var AddTransactionModalComponent = /*#__PURE__*/function () {
      function AddTransactionModalComponent(addTransactionModalService, el) {
        _classCallCheck(this, AddTransactionModalComponent);

        this.addTransactionModalService = addTransactionModalService;
        this.el = el;
        this.element = el.nativeElement;
      }

      _createClass(AddTransactionModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          // ensure id attribute exists
          if (!this.id) {
            console.error('modal must have an id');
            return;
          } // move element to bottom of page (just before </body>) so it can be displayed above everything else


          document.body.appendChild(this.element); // close modal on background click

          this.element.addEventListener('click', function (el) {
            if (el.target.className === 'modal') {
              _this8.close();
            }
          }); // add self (this modal instance) to the modal service so it's accessible from controllers

          this.addTransactionModalService.add(this);
        } // remove self from modal service when component is destroyed

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.addTransactionModalService.remove(this.id);
          this.element.remove();
        } // open modal

      }, {
        key: "open",
        value: function open() {
          this.element.style.display = 'block';
          document.body.classList.add('modal-open');
        } // close modal

      }, {
        key: "close",
        value: function close() {
          this.element.style.display = 'none';
          document.body.classList.remove('modal-open');
        }
      }]);

      return AddTransactionModalComponent;
    }();

    AddTransactionModalComponent.ɵfac = function AddTransactionModalComponent_Factory(t) {
      return new (t || AddTransactionModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_add_transaction_modal_service__WEBPACK_IMPORTED_MODULE_1__["AddTransactionModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    AddTransactionModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddTransactionModalComponent,
      selectors: [["app-add-transaction-modal"]],
      inputs: {
        id: "id"
      },
      ngContentSelectors: _c0,
      decls: 4,
      vars: 0,
      consts: [[1, "modal"], [1, "modal-body"], [1, "modal-background"]],
      template: function AddTransactionModalComponent_Template(rf, ctx) {
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
      styles: ["\n      modal {\n        display: none;\n      }\n      .modal {\n        position: fixed;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        z-index: 1000;\n        overflow: auto;\n      }\n      .modal .modal-body {\n        padding: 1.25rem;\n        background: #fff;\n        margin: 16rem;\n        border-radius: 2rem;\n        min-height: 20rem;\n        max-width: 80rem;\n      }\n      .modal-background {\n        position: fixed;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        background-color: var(--fin-black-transparent);\n        opacity: 0.75;\n        z-index: 900;\n      }\n      body.modal-open-2 {\n        overflow: hidden;\n      }\n    "],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddTransactionModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-add-transaction-modal',
          template: "\n    <div class=\"modal\">\n      <div class=\"modal-body\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n    <div class=\"modal-background\"></div>\n  ",
          styles: ["\n      modal {\n        display: none;\n      }\n      .modal {\n        position: fixed;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        z-index: 1000;\n        overflow: auto;\n      }\n      .modal .modal-body {\n        padding: 1.25rem;\n        background: #fff;\n        margin: 16rem;\n        border-radius: 2rem;\n        min-height: 20rem;\n        max-width: 80rem;\n      }\n      .modal-background {\n        position: fixed;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        background-color: var(--fin-black-transparent);\n        opacity: 0.75;\n        z-index: 900;\n      }\n      body.modal-open-2 {\n        overflow: hidden;\n      }\n    "],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _add_transaction_modal_service__WEBPACK_IMPORTED_MODULE_1__["AddTransactionModalService"]
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
  "./src/app/components/small-components/add-transaction-modal.service.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/components/small-components/add-transaction-modal.service.ts ***!
    \******************************************************************************/

  /*! exports provided: AddTransactionModalService */

  /***/
  function srcAppComponentsSmallComponentsAddTransactionModalServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddTransactionModalService", function () {
      return AddTransactionModalService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AddTransactionModalService = /*#__PURE__*/function () {
      function AddTransactionModalService() {
        _classCallCheck(this, AddTransactionModalService);

        this.modals = [];
      }

      _createClass(AddTransactionModalService, [{
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

      return AddTransactionModalService;
    }();

    AddTransactionModalService.ɵfac = function AddTransactionModalService_Factory(t) {
      return new (t || AddTransactionModalService)();
    };

    AddTransactionModalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AddTransactionModalService,
      factory: AddTransactionModalService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddTransactionModalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/small-components/clickable-list-view.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/components/small-components/clickable-list-view.component.ts ***!
    \******************************************************************************/

  /*! exports provided: ClickableListViewComponent */

  /***/
  function srcAppComponentsSmallComponentsClickableListViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClickableListViewComponent", function () {
      return ClickableListViewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ClickableListViewComponent = /*#__PURE__*/function () {
      function ClickableListViewComponent() {
        _classCallCheck(this, ClickableListViewComponent);
      }

      _createClass(ClickableListViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ClickableListViewComponent;
    }();

    ClickableListViewComponent.ɵfac = function ClickableListViewComponent_Factory(t) {
      return new (t || ClickableListViewComponent)();
    };

    ClickableListViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClickableListViewComponent,
      selectors: [["app-clickable-list-view"]],
      inputs: {
        link: "link",
        amount: "amount",
        name: "name"
      },
      decls: 7,
      vars: 3,
      consts: [[3, "href"], [1, "clickable-list"], [1, "space-between"]],
      template: function ClickableListViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.amount, "");
        }
      },
      styles: ["div[_ngcontent-%COMP%] {\n        background: #efefef;\n        width: 90%;\n        padding: 1rem;\n        border-radius: 0.625rem;\n      }\n\n      .space-between[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: space-between;\n      }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClickableListViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-clickable-list-view',
          template: "\n    <a href=\"{{ link }}\">\n      <div class=\"clickable-list\">\n        <div class=\"space-between\">\n          <p>{{ name }}</p>\n          <p>${{ amount }}</p>\n        </div>\n      </div>\n    </a>\n  ",
          styles: ["\n      div {\n        background: #efefef;\n        width: 90%;\n        padding: 1rem;\n        border-radius: 0.625rem;\n      }\n\n      .space-between {\n        display: flex;\n        justify-content: space-between;\n      }\n    "]
        }]
      }], function () {
        return [];
      }, {
        link: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        amount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        name: [{
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
      selectors: [["app-header-component"]],
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
      styles: [".hero[_ngcontent-%COMP%] {\n        align-items: center;\n        background: var(--fin-gradient);\n        border-radius: 0rem 0rem 2rem 2rem;\n        justify-content: center;\n        padding: 6rem;\n      }\n\n      .fin[_ngcontent-%COMP%] {\n        color: var(--fin-white);\n        font-family: 'Courgette', cursive;\n        font-size: 4rem;\n        text-shadow: 0rem 0.125rem rgb(0 0 0 / 16%);\n        font-weight: 300;\n      }\n\n      .tag-line[_ngcontent-%COMP%] {\n        color: var(--fin-white);\n      }\n\n      img[_ngcontent-%COMP%] {\n        padding-right: 1rem;\n        width: 9.813rem;\n        height: 5.188rem;\n      }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header-component',
          template: "\n    <div class=\"row hero\">\n      <div class=\"column center\">\n        <div class=\"row\">\n          <img src=\"../../assets/logo.svg\" rel=\"icon\" alt=\"\" class=\"logo\" />\n          <h1 class=\"fin\">{{ maintitle }}</h1>\n        </div>\n        <p class=\"tag-line\">{{ tagline }}</p>\n      </div>\n    </div>\n  ",
          styles: ["\n      .hero {\n        align-items: center;\n        background: var(--fin-gradient);\n        border-radius: 0rem 0rem 2rem 2rem;\n        justify-content: center;\n        padding: 6rem;\n      }\n\n      .fin {\n        color: var(--fin-white);\n        font-family: 'Courgette', cursive;\n        font-size: 4rem;\n        text-shadow: 0rem 0.125rem rgb(0 0 0 / 16%);\n        font-weight: 300;\n      }\n\n      .tag-line {\n        color: var(--fin-white);\n      }\n\n      img {\n        padding-right: 1rem;\n        width: 9.813rem;\n        height: 5.188rem;\n      }\n    "]
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


    var _help_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./help-modal.service */
    "./src/app/components/small-components/help-modal.service.ts");
    /* harmony import */


    var _help_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./help-modal.component */
    "./src/app/components/small-components/help-modal.component.ts");

    var _c0 = ["*"];

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
      return new (t || HelpModalButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_help_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"]));
    };

    HelpModalButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HelpModalButtonComponent,
      selectors: [["app-help-modal-button-component"]],
      inputs: {
        modaltext: "modaltext"
      },
      ngContentSelectors: _c0,
      decls: 9,
      vars: 1,
      consts: [[1, "btn-help", 3, "click"], ["id", "custom-modal-1"], [1, "float-right"], [1, "secondary", 3, "click"], [1, "modaltext"]],
      template: function HelpModalButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HelpModalButtonComponent_Template_button_click_0_listener() {
            return ctx.openModal("custom-modal-1");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-modal-component", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HelpModalButtonComponent_Template_button_click_4_listener() {
            return ctx.closeModal("custom-modal-1");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " X ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.modaltext);
        }
      },
      directives: [_help_modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"]],
      styles: [".float-right[_ngcontent-%COMP%] {\n        float: right;\n      }\n\n      .modaltext[_ngcontent-%COMP%] {\n        padding: 4rem;\n      }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HelpModalButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-help-modal-button-component',
          template: "\n    <button class=\"btn-help\" (click)=\"openModal('custom-modal-1')\">?</button>\n\n    <app-modal-component id=\"custom-modal-1\">\n      <div class=\"float-right\">\n        <button class=\"secondary\" (click)=\"closeModal('custom-modal-1')\">\n          X\n        </button>\n      </div>\n      <p class=\"modaltext\">{{ modaltext }}</p>\n      <ng-content></ng-content>\n    </app-modal-component>\n  ",
          styles: ["\n      .float-right {\n        float: right;\n      }\n\n      .modaltext {\n        padding: 4rem;\n      }\n    "]
        }]
      }], function () {
        return [{
          type: _help_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"]
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
          var _this9 = this;

          // ensure id attribute exists
          if (!this.id) {
            console.error('modal must have an id');
            return;
          } // move element to bottom of page (just before </body>) so it can be displayed above everything else


          document.body.appendChild(this.element); // close modal on background click

          this.element.addEventListener('click', function (el) {
            if (el.target.className === 'modal') {
              _this9.close();
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
          this.element.style.display = 'block';
          document.body.classList.add('modal-open');
        } // close modal

      }, {
        key: "close",
        value: function close() {
          this.element.style.display = 'none';
          document.body.classList.remove('modal-open');
        }
      }]);

      return ModalComponent;
    }();

    ModalComponent.ɵfac = function ModalComponent_Factory(t) {
      return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_help_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ModalComponent,
      selectors: [["app-modal-component"]],
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
      styles: ["\n      app-modal-component {\n        display: none;\n      }\n      .modal {\n        position: fixed;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        z-index: 1000;\n        overflow: auto;\n      }\n      .modal .modal-body {\n        padding: 1.25rem;\n        background: #fff;\n        margin: 16rem;\n        border-radius: 0.625rem;\n        min-height: 20rem;\n        max-width: 80rem;\n      }\n      .modal-background {\n        position: fixed;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        background-color: var(--fin-black-transparent);\n        opacity: 0.75;\n        z-index: 900;\n      }\n      body.modal-open {\n        overflow: hidden;\n      }\n    "],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-modal-component',
          template: "\n    <div class=\"modal\">\n      <div class=\"modal-body\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n    <div class=\"modal-background\"></div>\n  ",
          styles: ["\n      app-modal-component {\n        display: none;\n      }\n      .modal {\n        position: fixed;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        z-index: 1000;\n        overflow: auto;\n      }\n      .modal .modal-body {\n        padding: 1.25rem;\n        background: #fff;\n        margin: 16rem;\n        border-radius: 0.625rem;\n        min-height: 20rem;\n        max-width: 80rem;\n      }\n      .modal-background {\n        position: fixed;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        background-color: var(--fin-black-transparent);\n        opacity: 0.75;\n        z-index: 900;\n      }\n      body.modal-open {\n        overflow: hidden;\n      }\n    "],
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
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
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
      selectors: [["app-input-component"]],
      inputs: {
        label: "label",
        placeholder: "placeholder",
        type: "type",
        name: "name",
        required: "required",
        min: "min",
        id: "id"
      },
      decls: 3,
      vars: 7,
      consts: [[3, "placeholder", "type", "name", "required", "min", "id"]],
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.id);
        }
      },
      styles: ["label[_ngcontent-%COMP%] {\n        color: var(--fin-neutral-1);\n      }\n\n      input[_ngcontent-%COMP%] {\n        border-radius: 20rem;\n        font-size: 1rem;\n        height: 1.5rem;\n        min-width: 15rem;\n        width: 100%;\n        padding: 0.75rem 1rem;\n        border: 0.063rem solid var(--fin-white);\n        margin: 0.5rem 0;\n        background: var(--fin-neutral-6);\n        color: var(--fin-neutral-1);\n      }\n\n      input[type='checkbox'][_ngcontent-%COMP%], input[type='radio'][_ngcontent-%COMP%] {\n        width: 1.2rem;\n        height: 1.2rem;\n        margin-top: 0.3rem;\n      }\n\n      input[type='date'][_ngcontent-%COMP%] {\n        font-family: Inter, sans-serif;\n      }\n\n      input[_ngcontent-%COMP%]:focus {\n        outline: none;\n        box-shadow: 0rem 0rem 0.313rem var(--fin-blue-1);\n      }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-input-component',
          template: "\n    <label>{{ label }}</label>\n\n    <input\n      placeholder=\"{{ placeholder }}\"\n      type=\"{{ type }}\"\n      name=\"{{ name }}\"\n      required=\"{{ required }}\"\n      min=\"{{ min }}\"\n      id=\"{{ id }}\"\n    />\n  ",
          styles: ["\n      label {\n        color: var(--fin-neutral-1);\n      }\n\n      input {\n        border-radius: 20rem;\n        font-size: 1rem;\n        height: 1.5rem;\n        min-width: 15rem;\n        width: 100%;\n        padding: 0.75rem 1rem;\n        border: 0.063rem solid var(--fin-white);\n        margin: 0.5rem 0;\n        background: var(--fin-neutral-6);\n        color: var(--fin-neutral-1);\n      }\n\n      input[type='checkbox'],\n      input[type='radio'] {\n        width: 1.2rem;\n        height: 1.2rem;\n        margin-top: 0.3rem;\n      }\n\n      input[type='date'] {\n        font-family: Inter, sans-serif;\n      }\n\n      input:focus {\n        outline: none;\n        box-shadow: 0rem 0rem 0.313rem var(--fin-blue-1);\n      }\n    "]
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
        }],
        id: [{
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function NavbarComponent_h3_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Welcome!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NavbarComponent_h3_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome ", ctx_r1.userData, "!");
      }
    }

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
      selectors: [["app-navbar-component"]],
      inputs: {
        userData: ["childToMaster", "userData"]
      },
      decls: 20,
      vars: 2,
      consts: [[1, "row", "navbar"], [1, "column", "center"], ["src", "../../assets/logo.svg", "rel", "icon", "alt", "", 1, "logo"], ["class", "name", 4, "ngIf"], [1, "nav", "navbar-nav", "navbar-right"], ["routerLinkActive", "active", 1, "nav-item"], ["routerLink", "/addAccounts"], [1, "white-text"], ["routerLink", "/manageAccounts"], [2, "width", "2rem", "border-right", "0.05rem solid white"], ["href", "/"], [1, "fa", "fa-power-off"], [1, "name"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavbarComponent_h3_3_Template, 2, 0, "h3", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NavbarComponent_h3_4_Template, 2, 1, "h3", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Add Accounts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Manage Accounts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userData);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userData);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: [".logo[_ngcontent-%COMP%] {\n        width: 8rem;\n        height: 8rem;\n      }\n      .name[_ngcontent-%COMP%] {\n        width: 100%;\n        color: var(--fin-white);\n        font-weight: normal;\n      }\n\n      .profilelogo[_ngcontent-%COMP%] {\n        width: 3rem;\n        height: 3rem;\n      }\n      .navbar[_ngcontent-%COMP%] {\n        align-items: center;\n        background: var(--fin-gradient);\n        border-radius: 0rem 0rem 2rem 2rem;\n        min-width: 39.6875rem;\n      }\n\n      .nav[_ngcontent-%COMP%] {\n        padding-left: 0;\n        margin-bottom: 0;\n        list-style: none;\n        width: 50rem;\n      }\n\n      .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n        position: relative;\n        display: block;\n        padding: 0.625rem 0.9375rem;\n      }\n\n      .active[_ngcontent-%COMP%] {\n        text-decoration: none;\n        background-color: rgba(255, 255, 255, 0.2);\n        border-radius: 0.625rem;\n      }\n\n      .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n        padding-top: 0.9375rem;\n        padding-bottom: 0.9375rem;\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        appearance: none;\n      }\n      .navbar-right[_ngcontent-%COMP%] {\n        float: right;\n        display: flex;\n        justify-content: flex-end;\n        width: 95rem;\n      }\n\n      .white-text[_ngcontent-%COMP%] {\n        color: white;\n      }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar-component',
          template: "\n    <div class=\"row navbar\">\n      <div class=\"column center\">\n        <img src=\"../../assets/logo.svg\" rel=\"icon\" alt=\"\" class=\"logo\" />\n      </div>\n\n      <h3 *ngIf=\"!userData\" class=\"name\">Welcome!</h3>\n      <h3 *ngIf=\"userData\" class=\"name\">Welcome {{ this.userData }}!</h3>\n\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a routerLink=\"/addAccounts\">\n            <p class=\"white-text\">Add Accounts</p>\n          </a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a routerLink=\"/manageAccounts\">\n            <p class=\"white-text\">Manage Accounts</p>\n          </a>\n        </li>\n\n        <div style=\"width:2rem; border-right:0.05rem solid white;\"></div>\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a href=\"/\">\n            <i class=\"fa fa-power-off\"></i>\n            <p class=\"white-text\">Logout</p>\n          </a>\n        </li>\n      </ul>\n    </div>\n  ",
          styles: ["\n      .logo {\n        width: 8rem;\n        height: 8rem;\n      }\n      .name {\n        width: 100%;\n        color: var(--fin-white);\n        font-weight: normal;\n      }\n\n      .profilelogo {\n        width: 3rem;\n        height: 3rem;\n      }\n      .navbar {\n        align-items: center;\n        background: var(--fin-gradient);\n        border-radius: 0rem 0rem 2rem 2rem;\n        min-width: 39.6875rem;\n      }\n\n      .nav {\n        padding-left: 0;\n        margin-bottom: 0;\n        list-style: none;\n        width: 50rem;\n      }\n\n      .nav > li > a {\n        position: relative;\n        display: block;\n        padding: 0.625rem 0.9375rem;\n      }\n\n      .active {\n        text-decoration: none;\n        background-color: rgba(255, 255, 255, 0.2);\n        border-radius: 0.625rem;\n      }\n\n      .navbar-nav > li > a {\n        padding-top: 0.9375rem;\n        padding-bottom: 0.9375rem;\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        appearance: none;\n      }\n      .navbar-right {\n        float: right;\n        display: flex;\n        justify-content: flex-end;\n        width: 95rem;\n      }\n\n      .white-text {\n        color: white;\n      }\n    "]
        }]
      }], null, {
        userData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['childToMaster']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/small-components/tab.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/small-components/tab.component.ts ***!
    \**************************************************************/

  /*! exports provided: TabComponent */

  /***/
  function srcAppComponentsSmallComponentsTabComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabComponent", function () {
      return TabComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /**
     * A single tab page. It renders the passed template
     * via the @Input properties by using the ngTemplateOutlet
     * and ngTemplateOutletContext directives.
     */


    var _c0 = ["*"];

    var TabComponent = /*#__PURE__*/_createClass(function TabComponent() {
      _classCallCheck(this, TabComponent);

      this.active = false;
    });

    TabComponent.ɵfac = function TabComponent_Factory(t) {
      return new (t || TabComponent)();
    };

    TabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TabComponent,
      selectors: [["app-tab-component"]],
      inputs: {
        title: "title",
        active: "active"
      },
      ngContentSelectors: _c0,
      decls: 2,
      vars: 1,
      consts: [[1, "pane", 3, "hidden"]],
      template: function TabComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.active);
        }
      },
      styles: [".pane[_ngcontent-%COMP%] {\n        padding: 1em;\n      }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-tab-component',
          styles: ["\n      .pane {\n        padding: 1em;\n      }\n    "],
          template: "\n    <div [hidden]=\"!active\" class=\"pane\">\n      <ng-content></ng-content>\n    </div>\n  "
        }]
      }], null, {
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        active: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/small-components/tabs.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/small-components/tabs.component.ts ***!
    \***************************************************************/

  /*! exports provided: TabsComponent */

  /***/
  function srcAppComponentsSmallComponentsTabsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsComponent", function () {
      return TabsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _tab_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./tab.component */
    "./src/app/components/small-components/tab.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /**
     * The main component that renders single TabComponent
     * instances.
     */


    function TabsComponent_li_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabsComponent_li_1_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var tab_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.selectTab(tab_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tab_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", tab_r1.active);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tab_r1.title);
      }
    }

    var _c0 = ["*"];

    var TabsComponent = /*#__PURE__*/function () {
      function TabsComponent() {
        _classCallCheck(this, TabsComponent);
      }

      _createClass(TabsComponent, [{
        key: "ngAfterContentInit",
        value: // contentChildren are set
        function ngAfterContentInit() {
          // get all active tabs
          var activeTabs = this.tabs.filter(function (tab) {
            return tab.active;
          }); // if there is no active tab set, activate the first

          if (activeTabs.length === 0) {
            this.selectTab(this.tabs.first);
          }
        }
      }, {
        key: "selectTab",
        value: function selectTab(tab) {
          // deactivate all tabs
          this.tabs.toArray().forEach(function (tab) {
            return tab.active = false;
          }); // activate the tab the user has clicked on.

          tab.active = true;
        }
      }]);

      return TabsComponent;
    }();

    TabsComponent.ɵfac = function TabsComponent_Factory(t) {
      return new (t || TabsComponent)();
    };

    TabsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TabsComponent,
      selectors: [["app-tabs-component"]],
      contentQueries: function TabsComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _tab_component__WEBPACK_IMPORTED_MODULE_1__["TabComponent"], false);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tabs = _t);
        }
      },
      ngContentSelectors: _c0,
      decls: 3,
      vars: 1,
      consts: [[1, "nav", "nav-tabs"], [3, "active", "click", 4, "ngFor", "ngForOf"], [3, "click"], ["href", "tab"]],
      template: function TabsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TabsComponent_li_1_Template, 3, 3, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabs);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: [".tab-close[_ngcontent-%COMP%] {\n        color: gray;\n        text-align: right;\n        cursor: pointer;\n      }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-tabs-component',
          template: "\n    <ul class=\"nav nav-tabs\">\n      <li\n        *ngFor=\"let tab of tabs\"\n        (click)=\"selectTab(tab)\"\n        [class.active]=\"tab.active\"\n      >\n        <a href=\"tab\">{{ tab.title }}</a>\n      </li>\n    </ul>\n    <ng-content></ng-content>\n  ",
          styles: ["\n      .tab-close {\n        color: gray;\n        text-align: right;\n        cursor: pointer;\n      }\n    "]
        }]
      }], null, {
        tabs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [_tab_component__WEBPACK_IMPORTED_MODULE_1__["TabComponent"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment, userId */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "userId", function () {
      return userId;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    var userId = 1;
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