(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _components_page_content_add_accounts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/page-content/add-accounts.component */ "./src/app/components/page-content/add-accounts.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_page_content_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/page-content/login.component */ "./src/app/components/page-content/login.component.ts");
/* harmony import */ var _components_page_content_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/page-content/signup.component */ "./src/app/components/page-content/signup.component.ts");
/* harmony import */ var _components_page_content_manage_accounts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/page-content/manage-accounts.component */ "./src/app/components/page-content/manage-accounts.component.ts");
/* harmony import */ var _components_page_content_account_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/page-content/account.component */ "./src/app/components/page-content/account.component.ts");









const routes = [
    { path: '', component: _components_page_content_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'signup', component: _components_page_content_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
    { path: 'addAccounts', component: _components_page_content_add_accounts_component__WEBPACK_IMPORTED_MODULE_0__["AddAccountsComponent"] },
    { path: 'manageAccounts', component: _components_page_content_manage_accounts_component__WEBPACK_IMPORTED_MODULE_5__["ManageAccountsComponent"] },
    { path: 'account', component: _components_page_content_account_component__WEBPACK_IMPORTED_MODULE_6__["AccountComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'fin';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [""] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                template: `<router-outlet></router-outlet>`,
                styles: [``],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _components_small_components_add_transaction_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/small-components/add-transaction-modal.component */ "./src/app/components/small-components/add-transaction-modal.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_page_template_pagetemplate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/page-template/pagetemplate.component */ "./src/app/components/page-template/pagetemplate.component.ts");
/* harmony import */ var _components_page_template_headerpagetemplate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/page-template/headerpagetemplate.component */ "./src/app/components/page-template/headerpagetemplate.component.ts");
/* harmony import */ var _components_page_content_manage_accounts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/page-content/manage-accounts.component */ "./src/app/components/page-content/manage-accounts.component.ts");
/* harmony import */ var _components_page_content_add_accounts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/page-content/add-accounts.component */ "./src/app/components/page-content/add-accounts.component.ts");
/* harmony import */ var _components_page_content_account_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/page-content/account.component */ "./src/app/components/page-content/account.component.ts");
/* harmony import */ var _components_page_content_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/page-content/login.component */ "./src/app/components/page-content/login.component.ts");
/* harmony import */ var _components_page_content_signup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/page-content/signup.component */ "./src/app/components/page-content/signup.component.ts");
/* harmony import */ var _components_small_components_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/small-components/navbar.component */ "./src/app/components/small-components/navbar.component.ts");
/* harmony import */ var _components_small_components_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/small-components/header.component */ "./src/app/components/small-components/header.component.ts");
/* harmony import */ var _components_small_components_clickable_list_view_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/small-components/clickable-list-view.component */ "./src/app/components/small-components/clickable-list-view.component.ts");
/* harmony import */ var _components_small_components_help_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/small-components/help-modal.component */ "./src/app/components/small-components/help-modal.component.ts");
/* harmony import */ var _components_small_components_help_modal_button_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/small-components/help-modal-button.component */ "./src/app/components/small-components/help-modal-button.component.ts");
/* harmony import */ var _components_small_components_empty_content_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/small-components/empty-content.component */ "./src/app/components/small-components/empty-content.component.ts");
/* harmony import */ var _components_small_components_input_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/small-components/input.component */ "./src/app/components/small-components/input.component.ts");
/* harmony import */ var _components_api_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/api.service */ "./src/app/components/api.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _components_small_components_add_transaction_modal_button_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/small-components/add-transaction-modal-button.component */ "./src/app/components/small-components/add-transaction-modal-button.component.ts");
/* harmony import */ var _components_small_components_tabs_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/small-components/tabs.component */ "./src/app/components/small-components/tabs.component.ts");
/* harmony import */ var _components_small_components_tab_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/small-components/tab.component */ "./src/app/components/small-components/tab.component.ts");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/__ivy_ngcc__/fesm2015/swimlane-ngx-charts.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");



























//import { BarComponent } from './components/page-content/bar.component';
//import { BarComponent1 } from './components/page-content/bar.component1';
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _components_small_components_input_component__WEBPACK_IMPORTED_MODULE_18__["InputComponent"],
        _components_page_template_pagetemplate_component__WEBPACK_IMPORTED_MODULE_5__["PageTemplateComponent"],
        _components_small_components_empty_content_component__WEBPACK_IMPORTED_MODULE_17__["EmptyContentComponent"],
        _components_page_template_headerpagetemplate_component__WEBPACK_IMPORTED_MODULE_6__["HeaderPageTemplateComponent"],
        _components_api_service__WEBPACK_IMPORTED_MODULE_19__["APIService"],
        _components_small_components_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
        _components_small_components_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
        _components_small_components_clickable_list_view_component__WEBPACK_IMPORTED_MODULE_14__["ClickableListView"]
    ], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_24__["NgxChartsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["BrowserAnimationsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_small_components_input_component__WEBPACK_IMPORTED_MODULE_18__["InputComponent"],
        _components_page_template_headerpagetemplate_component__WEBPACK_IMPORTED_MODULE_6__["HeaderPageTemplateComponent"],
        _components_page_template_pagetemplate_component__WEBPACK_IMPORTED_MODULE_5__["PageTemplateComponent"],
        _components_small_components_empty_content_component__WEBPACK_IMPORTED_MODULE_17__["EmptyContentComponent"],
        _components_small_components_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
        _components_small_components_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
        _components_page_content_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
        _components_page_content_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"],
        _components_page_content_manage_accounts_component__WEBPACK_IMPORTED_MODULE_7__["ManageAccountsComponent"],
        _components_page_content_add_accounts_component__WEBPACK_IMPORTED_MODULE_8__["AddAccountsComponent"],
        _components_page_content_account_component__WEBPACK_IMPORTED_MODULE_9__["AccountComponent"],
        _components_small_components_add_transaction_modal_component__WEBPACK_IMPORTED_MODULE_0__["AddTransactionModal"],
        _components_small_components_add_transaction_modal_button_component__WEBPACK_IMPORTED_MODULE_21__["AddTransactionButtonComponent"],
        _components_small_components_tabs_component__WEBPACK_IMPORTED_MODULE_22__["TabsComponent"],
        _components_small_components_tab_component__WEBPACK_IMPORTED_MODULE_23__["TabComponent"],
        _components_small_components_help_modal_component__WEBPACK_IMPORTED_MODULE_15__["ModalComponent"],
        _components_small_components_help_modal_button_component__WEBPACK_IMPORTED_MODULE_16__["HelpModalButtonComponent"],
        _components_small_components_clickable_list_view_component__WEBPACK_IMPORTED_MODULE_14__["ClickableListView"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_24__["NgxChartsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components_small_components_input_component__WEBPACK_IMPORTED_MODULE_18__["InputComponent"],
                    _components_page_template_headerpagetemplate_component__WEBPACK_IMPORTED_MODULE_6__["HeaderPageTemplateComponent"],
                    _components_page_template_pagetemplate_component__WEBPACK_IMPORTED_MODULE_5__["PageTemplateComponent"],
                    _components_small_components_empty_content_component__WEBPACK_IMPORTED_MODULE_17__["EmptyContentComponent"],
                    _components_small_components_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
                    _components_small_components_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
                    _components_page_content_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                    _components_page_content_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"],
                    _components_page_content_manage_accounts_component__WEBPACK_IMPORTED_MODULE_7__["ManageAccountsComponent"],
                    _components_page_content_add_accounts_component__WEBPACK_IMPORTED_MODULE_8__["AddAccountsComponent"],
                    _components_page_content_account_component__WEBPACK_IMPORTED_MODULE_9__["AccountComponent"],
                    _components_small_components_add_transaction_modal_component__WEBPACK_IMPORTED_MODULE_0__["AddTransactionModal"],
                    _components_small_components_add_transaction_modal_button_component__WEBPACK_IMPORTED_MODULE_21__["AddTransactionButtonComponent"],
                    _components_small_components_tabs_component__WEBPACK_IMPORTED_MODULE_22__["TabsComponent"],
                    _components_small_components_tab_component__WEBPACK_IMPORTED_MODULE_23__["TabComponent"],
                    _components_small_components_help_modal_component__WEBPACK_IMPORTED_MODULE_15__["ModalComponent"],
                    _components_small_components_help_modal_button_component__WEBPACK_IMPORTED_MODULE_16__["HelpModalButtonComponent"],
                    _components_small_components_clickable_list_view_component__WEBPACK_IMPORTED_MODULE_14__["ClickableListView"],
                ],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_24__["NgxChartsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["BrowserAnimationsModule"]],
                providers: [
                    _components_small_components_input_component__WEBPACK_IMPORTED_MODULE_18__["InputComponent"],
                    _components_page_template_pagetemplate_component__WEBPACK_IMPORTED_MODULE_5__["PageTemplateComponent"],
                    _components_small_components_empty_content_component__WEBPACK_IMPORTED_MODULE_17__["EmptyContentComponent"],
                    _components_page_template_headerpagetemplate_component__WEBPACK_IMPORTED_MODULE_6__["HeaderPageTemplateComponent"],
                    _components_api_service__WEBPACK_IMPORTED_MODULE_19__["APIService"],
                    _components_small_components_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
                    _components_small_components_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
                    _components_small_components_clickable_list_view_component__WEBPACK_IMPORTED_MODULE_14__["ClickableListView"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/api.service.ts":
/*!*******************************************!*\
  !*** ./src/app/components/api.service.ts ***!
  \*******************************************/
/*! exports provided: APIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIService", function() { return APIService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class APIService {
    constructor(http) {
        this.http = http;
    }
    getUserData(callback) {
        this.http
            .get('http://localhost:8080/users')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => res))
            .subscribe((res) => {
            this.userResult = res;
            callback(this.userResult);
        });
    }
    postValidateUser(body) {
        const headers = {
            'content-type': 'application/json',
            Authorization: 'Basic ' + btoa('srobinson:0p3n$esame21'),
        };
        this.http
            .post('http://localhost:8080/validateUser', body, {
            headers: headers,
            observe: 'response',
        })
            .subscribe((response) => {
            console.log('POST completed sucessfully. The response received ' + response);
            this.msg = 'success';
            return this.msg;
        }, (error) => {
            console.log('Post failed with the errors');
            console.log(error);
            this.msg = 'error';
            return this.msg;
        }, () => {
            console.log('Post Completed');
        });
        return this.msg;
    }
    getAccountDataAsync(callback) {
        this.http
            .get('http://localhost:8080/accounts')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => res))
            .subscribe((res) => {
            this.accountsResult = res;
            callback(this.accountsResult);
            console.log(this.accountsResult);
        });
    }
    getTransactionDataAsync(callback) {
        this.http
            .get('http://localhost:8080/transactions')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => res))
            .subscribe((res) => {
            this.transactionsResult = res;
            callback(this.transactionsResult);
            console.log(this.transactionsResult);
        });
    }
    postUserData(body) {
        const headers = {
            'content-type': 'application/json',
            Authorization: 'Basic ' + btoa('srobinson:0p3n$esame21'),
        };
        this.http
            .post('http://localhost:8080/addUser', body, {
            headers: headers,
            observe: 'response',
        })
            .subscribe((response) => {
            console.log('POST completed sucessfully. The response received ' + response);
        }, (error) => {
            console.log('Post failed with the errors');
        }, () => {
            console.log('Post Completed');
        });
    }
    postAccountData(body) {
        const headers = {
            'content-type': 'application/json',
            Authorization: 'Basic ' + btoa('srobinson:0p3n$esame21'),
        };
        this.http
            .post('http://localhost:8080/addAccount', body, {
            headers: headers,
            observe: 'response',
        })
            .subscribe((response) => {
            console.log('POST completed sucessfully. The response received ' + response);
        }, (error) => {
            console.log('Post failed with errors');
        }, () => {
            console.log('Post Completed');
        });
    }
    postTransactionDataTest() {
        const headers = {
            'content-type': 'application/json',
            Authorization: 'Basic ' + btoa('srobinson:0p3n$esame21'),
        };
        const body = '{"account_id":{"account_id": 1}, "transaction_type": "Deposit", "transaction_date": "2021-09-18", "transaction_amount": 20, "transaction_subTotal": 0}';
        this.http
            .post('http://localhost:8080/addTransaction', body, {
            headers: headers,
            observe: 'response',
        })
            .subscribe((response) => {
            console.log('POST completed sucessfully. The response received ' + response);
        }, (error) => {
            console.log('Post failed with the errors');
        }, () => {
            console.log('Post Completed');
        });
    }
    postTransactionData(body) {
        const headers = {
            'content-type': 'application/json',
            Authorization: 'Basic ' + btoa('srobinson:0p3n$esame21'),
        };
        this.http
            .post('http://localhost:8080/addTransaction', body, {
            headers: headers,
            observe: 'response',
        })
            .subscribe((response) => {
            console.log('POST completed sucessfully. The response received ' + response);
        }, (error) => {
            console.log('Post failed with the errors');
        }, () => {
            console.log('Post Completed');
        });
    }
}
APIService.ɵfac = function APIService_Factory(t) { return new (t || APIService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
APIService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: APIService, factory: APIService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](APIService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/page-content/account.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/page-content/account.component.ts ***!
  \**************************************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../api.service */ "./src/app/components/api.service.ts");
/* harmony import */ var _page_template_pagetemplate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../page-template/pagetemplate.component */ "./src/app/components/page-template/pagetemplate.component.ts");
/* harmony import */ var _small_components_add_transaction_modal_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../small-components/add-transaction-modal-button.component */ "./src/app/components/small-components/add-transaction-modal-button.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _small_components_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../small-components/input.component */ "./src/app/components/small-components/input.component.ts");







function AccountComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input-component", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const input_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", input_r2.label)("placeholder", input_r2.placeholder)("type", input_r2.type)("name", input_r2.name)("min", input_r2.min)("id", input_r2.id);
} }
const _c0 = function (a0, a1) { return { "text-deposit-arrow": a0, "text-withdraw-arrow": a1 }; };
function AccountComponent_tr_29_ng_container_1_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const transaction_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
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
} }
const _c1 = function (a0, a1) { return { "text-deposit": a0, "text-withdraw": a1 }; };
function AccountComponent_tr_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AccountComponent_tr_29_ng_container_1_Template, 9, 8, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const transaction_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c1, transaction_r3.transaction_type === "Deposit", transaction_r3.transaction_type === "Withdraw"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.accountUser === ctx_r1.currentUser && transaction_r3.account_id === ctx_r1.accountIDnum);
} }
//import { formatDate } from '@angular/common';
class AccountComponent {
    constructor(apiService) {
        this.apiService = apiService;
        this.currentUser = 1;
        this.accountFieldData = [
            {
                label: 'Transaction Amount',
                placeholder: 'Type in your transaction amount',
                type: 'number',
                name: 'amount',
                min: 0,
                id: 'amount',
            },
            {
                label: 'Transaction Group',
                placeholder: 'Type in your transaction group',
                type: 'text',
                name: 'transaction group',
                id: 'group',
            },
            {
                label: 'Transaction Date',
                placeholder: 'Type in your transaction date',
                type: 'date',
                name: 'date',
                id: 'date',
            },
        ];
    }
    postTransactionData() {
        this.accountIDnum = parseInt(window.location.search.substring(4));
        const transactionType = 'Deposit';
        const transactionDate = document.getElementById('date')
            .value;
        const transactionAmount = (document.getElementById('amount')).value;
        console.log(transactionDate);
        const body = '{"account_id":{"account_id":' +
            this.accountIDnum +
            '}, "transaction_type":' +
            transactionType +
            ', "transaction_date":' +
            transactionDate +
            ', "transaction_amount":' +
            transactionAmount +
            ', "transaction_subTotal": 0}';
        this.apiService.postTransactionData(body);
        location.reload();
    }
    ngOnInit() {
        this.accountIDnum = parseInt(window.location.search.substring(4));
        this.accountID = (parseInt(window.location.search.substring(4)) - 1).toString();
        this.apiService.getAccountDataAsync((d) => {
            this.accountDescription = d[this.accountID].account_Description;
            this.accountDeposits = d[this.accountID].deposit_amount;
            this.accountWithdraws = d[this.accountID].withdraw_amount;
            this.accountUser = d[this.accountID].user_id;
            this.accountStartingAmount = d[this.accountID].account_Starting_Amount;
        });
        this.apiService.getTransactionDataAsync((d) => {
            this.transactionData = d;
        });
    }
}
AccountComponent.ɵfac = function AccountComponent_Factory(t) { return new (t || AccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["APIService"])); };
AccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccountComponent, selectors: [["account-component"]], decls: 57, vars: 9, consts: [[3, "pagedirections", "pagetitle"], ["modalAccountText", ""], ["class", "input", 4, "ngFor", "ngForOf"], [1, "select"], ["value", "0"], ["value", "1"], ["value", "2"], ["type", "submit", 1, "primary", "round", 3, "click"], [1, "scroll"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "input"], [3, "label", "placeholder", "type", "name", "min", "id"], [3, "ngClass"], [4, "ngIf"]], template: function AccountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "page-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "add-transaction-button-component", 1);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountComponent_Template_button_click_14_listener() { return ctx.postTransactionData(); });
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
    } if (rf & 2) {
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
    } }, directives: [_page_template_pagetemplate_component__WEBPACK_IMPORTED_MODULE_2__["PageTemplateComponent"], _small_components_add_transaction_modal_button_component__WEBPACK_IMPORTED_MODULE_3__["AddTransactionButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _small_components_input_component__WEBPACK_IMPORTED_MODULE_5__["InputComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".scroll[_ngcontent-%COMP%] {\n        height: 10rem;\n        overflow-y: scroll;\n      }\n      .clickable-view[_ngcontent-%COMP%] {\n        margin: 0.625rem;\n      }\n\n      .inputs[_ngcontent-%COMP%] {\n        align-items: center;\n      }\n      .input[_ngcontent-%COMP%] {\n        width: 50%;\n      }\n      .select[_ngcontent-%COMP%] {\n        width: 52%;\n      }\n\n      .row[_ngcontent-%COMP%] {\n        padding-right: 5rem;\n      }\n\n      .text-deposit[_ngcontent-%COMP%] {\n        color: green;\n      }\n\n      .text-withdraw[_ngcontent-%COMP%] {\n        color: #a10a28;\n      }\n\n      .text-deposit-arrow[_ngcontent-%COMP%]::before {\n        font-family: 'Font Awesome 5 Free';\n        content: '\u2191';\n      }\n\n      .text-withdraw-arrow[_ngcontent-%COMP%]::before {\n        font-family: 'Font Awesome 5 Free';\n        content: '\u2193';\n      }\n\n      select[_ngcontent-%COMP%] {\n        border-radius: 20rem;\n        font-size: 1rem;\n        height: 1.5rem;\n        min-width: 15rem;\n        width: 100%;\n        height: 3.25rem;\n        padding: 0rem 1rem;\n        border: 0.063rem solid var(--fin-white);\n        margin: 0.5rem 0;\n        background: var(--fin-neutral-6);\n        color: var(--fin-neutral-1);\n      }\n\n      table[_ngcontent-%COMP%] {\n        border-collapse: collapse;\n        width: 100%;\n      }\n\n      th[_ngcontent-%COMP%] {\n        background-color: var(--fin-neutral-6);\n        color: var(--fin-neutral-1);\n      }\n\n      td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n        border: 0.063rem solid #dddddd;\n        text-align: left;\n        padding: 0.5rem;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'account-component',
                template: `
    <page-template
      [pagedirections]="'Click on an account to view and add information'"
      [pagetitle]="this.accountDescription"
    >
      <add-transaction-button-component modalAccountText="">
        <div class="input" *ngFor="let input of accountFieldData">
          <input-component
            [label]="input.label"
            [placeholder]="input.placeholder"
            [type]="input.type"
            [name]="input.name"
            [min]="input.min"
            [id]="input.id"
          ></input-component>
        </div>
        <label>Transaction Type </label>
        <br />
        <select class="select">
          <option value="0">Select your transaction type</option>
          <option value="1">Deposit</option>
          <option value="2">Withdraw</option>
        </select>
        <br />
        <button
          type="submit"
          class="primary round"
          (click)="postTransactionData()"
        >
          Submit Transaction
        </button>
      </add-transaction-button-component>

      <p>Transactions</p>
      <div class="scroll">
        <table>
          <tr>
            <th>Transaction Date</th>
            <th>Transaction Type</th>
            <th>Transaction Amount</th>
            <th>Sub-Total</th>
          </tr>

          <tr
            *ngFor="let transaction of transactionData"
            [ngClass]="{
              'text-deposit': transaction.transaction_type === 'Deposit',
              'text-withdraw': transaction.transaction_type === 'Withdraw'
            }"
          >
            <ng-container
              *ngIf="
                accountUser === currentUser &&
                transaction.account_id === accountIDnum
              "
            >
              <td>{{ transaction.transaction_date }}</td>
              <td>{{ transaction.transaction_type }}</td>
              <td
                [ngClass]="{
                  'text-deposit-arrow':
                    transaction.transaction_type === 'Deposit',
                  'text-withdraw-arrow':
                    transaction.transaction_type === 'Withdraw'
                }"
              >
                \${{ transaction.transaction_amount }}
              </td>
              <td>\${{ transaction.transaction_subTotal }}</td>
            </ng-container>
          </tr>
        </table>
      </div>
      <br />
      <br />
      <p>Overall Account Summary</p>
      <table>
        <tr>
          <th>Account Starting Amount</th>
          <th>Account Deposits</th>
          <th>Account Withdraws</th>
          <th>Account Current Amount</th>
          <th>Overall Account Difference</th>
        </tr>
        <tr>
          <td>\${{ this.accountStartingAmount }}</td>
          <td>\${{ this.accountDeposits }}</td>
          <td>\${{ this.accountWithdraws }}</td>
          <td>
            \${{ this.transactionData.slice(-1).pop().transaction_subTotal }}
          </td>
          <td>
            \${{
              this.transactionData.slice(-1).pop().transaction_subTotal -
                this.accountStartingAmount
            }}
          </td>
        </tr>
      </table>
    </page-template>
  `,
                styles: [
                    `
      .scroll {
        height: 10rem;
        overflow-y: scroll;
      }
      .clickable-view {
        margin: 0.625rem;
      }

      .inputs {
        align-items: center;
      }
      .input {
        width: 50%;
      }
      .select {
        width: 52%;
      }

      .row {
        padding-right: 5rem;
      }

      .text-deposit {
        color: green;
      }

      .text-withdraw {
        color: #a10a28;
      }

      .text-deposit-arrow::before {
        font-family: 'Font Awesome 5 Free';
        content: '↑';
      }

      .text-withdraw-arrow::before {
        font-family: 'Font Awesome 5 Free';
        content: '↓';
      }

      select {
        border-radius: 20rem;
        font-size: 1rem;
        height: 1.5rem;
        min-width: 15rem;
        width: 100%;
        height: 3.25rem;
        padding: 0rem 1rem;
        border: 0.063rem solid var(--fin-white);
        margin: 0.5rem 0;
        background: var(--fin-neutral-6);
        color: var(--fin-neutral-1);
      }

      table {
        border-collapse: collapse;
        width: 100%;
      }

      th {
        background-color: var(--fin-neutral-6);
        color: var(--fin-neutral-1);
      }

      td,
      th {
        border: 0.063rem solid #dddddd;
        text-align: left;
        padding: 0.5rem;
      }
    `,
                ],
            }]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_1__["APIService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/page-content/add-accounts.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/page-content/add-accounts.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddAccountsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAccountsComponent", function() { return AddAccountsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../api.service */ "./src/app/components/api.service.ts");
/* harmony import */ var _page_template_pagetemplate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../page-template/pagetemplate.component */ "./src/app/components/page-template/pagetemplate.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _small_components_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../small-components/input.component */ "./src/app/components/small-components/input.component.ts");







function AddAccountsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 9);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.error, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function AddAccountsComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input-component", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const input_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", input_r2.label)("placeholder", input_r2.placeholder)("type", input_r2.type)("name", input_r2.name)("min", input_r2.min)("id", input_r2.id);
} }
class AddAccountsComponent {
    constructor(apiService) {
        this.apiService = apiService;
        this.startingAmount = 0;
        this.accountFieldData = [
            {
                label: 'Account Description (Example: TD Bank Checking)',
                placeholder: 'Type in your account description',
                type: 'text',
                name: 'description',
                id: 'description',
                min: 0,
            },
            {
                label: 'Account Starting Amount ($)',
                placeholder: 'Type in your account starting amount',
                type: 'number',
                name: 'amount',
                id: 'amount',
                min: 1,
            },
        ];
    }
    postAccountData() {
        this.accountTypeNum = (document.getElementById('select')).value;
        if (this.accountTypeNum === 1) {
            this.accountType = 'Checking';
        }
        else if (this.accountTypeNum === 2) {
            this.accountType = 'Savings';
        }
        this.accountDescription = (document.getElementById('description')).value;
        this.startingAmount = (document.getElementById('amount')).value;
        if (this.accountTypeNum === 0 ||
            this.startingAmount === 0 ||
            this.accountDescription === '') {
            this.error =
                'Invalid inputs provided.  Please fill out all field inputs.';
        }
        else {
            const body = '{"user_id":{"user_id":' +
                src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["userId"] +
                '}, "account_Type": "' +
                this.accountType +
                '", "account_Starting_Amount": ' +
                this.startingAmount +
                ', "account_Description": "' +
                this.accountDescription +
                '", "deposit_amount": 0, "withdraw_amount": 0}';
            console.log(body);
            this.apiService.postAccountData(body);
        }
    }
    ngOnInit() { }
}
AddAccountsComponent.ɵfac = function AddAccountsComponent_Factory(t) { return new (t || AddAccountsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"])); };
AddAccountsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddAccountsComponent, selectors: [["add-accounts-content-component"]], decls: 17, vars: 4, consts: [[3, "pagetitle", "pagedirections"], ["class", "error", 3, "innerHTML", 4, "ngIf"], [1, "inputs"], ["id", "select", 1, "select"], ["value", "0"], ["value", "1"], ["value", "2"], ["class", "input", 4, "ngFor", "ngForOf"], ["type", "submit", 1, "primary", "round", 3, "click"], [1, "error", 3, "innerHTML"], [1, "input"], [3, "label", "placeholder", "type", "name", "min", "id"]], template: function AddAccountsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "page-template", 0);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddAccountsComponent_Template_button_click_15_listener() { return ctx.postAccountData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Add Account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pagetitle", "Add Accounts")("pagedirections", "Fill out the form to add an account. To view and manage accounts click\n    Manage Accounts in the navbar.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.accountFieldData);
    } }, directives: [_page_template_pagetemplate_component__WEBPACK_IMPORTED_MODULE_3__["PageTemplateComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _small_components_input_component__WEBPACK_IMPORTED_MODULE_5__["InputComponent"]], styles: [".inputs[_ngcontent-%COMP%] {\n        align-items: center;\n      }\n      .input[_ngcontent-%COMP%] {\n        width: 50%;\n      }\n      .select[_ngcontent-%COMP%] {\n        width: 52%;\n      }\n\n      select[_ngcontent-%COMP%] {\n        border-radius: 20rem;\n        font-size: 1rem;\n        height: 1.5rem;\n        min-width: 15rem;\n        width: 100%;\n        height: 3.25rem;\n        padding: 0rem 1rem;\n        border: 0.063rem solid var(--fin-white);\n        margin: 0.5rem 0;\n        background: var(--fin-neutral-6);\n        color: var(--fin-neutral-1);\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddAccountsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'add-accounts-content-component',
                template: `
    <page-template
      [pagetitle]="'Add Accounts'"
      [pagedirections]="
        'Fill out the form to add an account. To view and manage accounts click
    Manage Accounts in the navbar.'
      "
    >
      <div *ngIf="error" [innerHTML]="error" class="error"></div>
      <form>
        <div class="inputs">
          <label>Account Type (checking/savings)</label>
          <br />
          <select class="select" id="select">
            <option value="0">Select your account type</option>
            <option value="1">Checking</option>
            <option value="2">Savings</option>
          </select>
          <div class="input" *ngFor="let input of accountFieldData">
            <input-component
              [label]="input.label"
              [placeholder]="input.placeholder"
              [type]="input.type"
              [name]="input.name"
              [min]="input.min"
              [id]="input.id"
            ></input-component>
          </div>
        </div>
        <button type="submit" class="primary round" (click)="postAccountData()">
          Add Account
        </button>
      </form>
    </page-template>
  `,
                styles: [
                    `
      .inputs {
        align-items: center;
      }
      .input {
        width: 50%;
      }
      .select {
        width: 52%;
      }

      select {
        border-radius: 20rem;
        font-size: 1rem;
        height: 1.5rem;
        min-width: 15rem;
        width: 100%;
        height: 3.25rem;
        padding: 0rem 1rem;
        border: 0.063rem solid var(--fin-white);
        margin: 0.5rem 0;
        background: var(--fin-neutral-6);
        color: var(--fin-neutral-1);
      }
    `,
                ],
            }]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/page-content/login.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/page-content/login.component.ts ***!
  \************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../api.service */ "./src/app/components/api.service.ts");
/* harmony import */ var _page_template_headerpagetemplate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../page-template/headerpagetemplate.component */ "./src/app/components/page-template/headerpagetemplate.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _small_components_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../small-components/input.component */ "./src/app/components/small-components/input.component.ts");






function LoginComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 6);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.error, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function LoginComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input-component", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const input_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", input_r2.label)("placeholder", input_r2.placeholder)("id", input_r2.id)("type", input_r2.type)("name", input_r2.name);
} }
class LoginComponent {
    constructor(apiService) {
        this.apiService = apiService;
        this.inputFieldData = [
            {
                label: 'Email',
                placeholder: 'Type in your email',
                type: 'email',
                name: 'email',
                id: 'email',
            },
            {
                label: 'Password',
                placeholder: 'Type in your password',
                type: 'password',
                name: 'password',
                id: 'password',
            },
        ];
        this.loginData = [
            {
                password: 'B!ah123',
            },
        ];
    }
    ngOnInit() { }
    signIn() {
        this.email = document.getElementById('email').value;
        this.password = (document.getElementById('password')).value;
        if (this.email === '' || this.password === '') {
            console.log('Please fill out all fields');
        }
        else {
            const body = '{"email": "' + this.email + '", "password": "' + this.password + '"}';
            console.log(body);
            this.response = this.apiService.postValidateUser(body);
            console.log(this.response);
            if (!this.response.includes('error') || this.response !== undefined) {
                console.log('yay');
                location.href = '/manageAccounts';
            }
            else {
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
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["APIService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["login-content-component"]], decls: 8, vars: 3, consts: [[1, "signin", 3, "pagetitle"], ["class", "error", 3, "innerHTML", 4, "ngIf"], ["class", "inputs", 4, "ngFor", "ngForOf"], [1, "login-button"], ["type", "submit", 1, "primary", "round", 3, "click"], ["href", "/signup"], [1, "error", 3, "innerHTML"], [1, "inputs"], [3, "label", "placeholder", "id", "type", "name"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header-page-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_1_Template, 1, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_div_2_Template, 2, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_4_listener() { return ctx.signIn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Sign In ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Don't have an account? Signup -> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pagetitle", "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.inputFieldData);
    } }, directives: [_page_template_headerpagetemplate_component__WEBPACK_IMPORTED_MODULE_2__["HeaderPageTemplateComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _small_components_input_component__WEBPACK_IMPORTED_MODULE_4__["InputComponent"]], styles: [".login-button[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: center;\n        width: 70%;\n      }\n\n      .inputs[_ngcontent-%COMP%] {\n        width: 30%;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'login-content-component',
                template: `
    <header-page-template class="signin" [pagetitle]="'Sign In'">
      <div *ngIf="error" [innerHTML]="error" class="error"></div>

      <div class="inputs" *ngFor="let input of inputFieldData">
        <input-component
          [label]="input.label"
          [placeholder]="input.placeholder"
          [id]="input.id"
          [type]="input.type"
          [name]="input.name"
        ></input-component>
      </div>

      <div class="login-button">
        <button type="submit" class="primary round" (click)="signIn()">
          Sign In
        </button>
      </div>
      <a href="/signup">Don't have an account? Signup -> </a>
    </header-page-template>
  `,
                styles: [
                    `
      .login-button {
        display: flex;
        justify-content: center;
        width: 70%;
      }

      .inputs {
        width: 30%;
      }
    `,
                ],
            }]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_1__["APIService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/page-content/manage-accounts.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/page-content/manage-accounts.component.ts ***!
  \**********************************************************************/
/*! exports provided: ManageAccountsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageAccountsComponent", function() { return ManageAccountsComponent; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../api.service */ "./src/app/components/api.service.ts");
/* harmony import */ var _page_template_pagetemplate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../page-template/pagetemplate.component */ "./src/app/components/page-template/pagetemplate.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _small_components_clickable_list_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../small-components/clickable-list-view.component */ "./src/app/components/small-components/clickable-list-view.component.ts");
/* harmony import */ var _small_components_empty_content_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../small-components/empty-content.component */ "./src/app/components/small-components/empty-content.component.ts");








function ManageAccountsComponent_div_1_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "clickable-list-view", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const account_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", account_r3.account_Description)("link", "/account?id=".concat(account_r3.account_id))("amount", account_r3.account_Starting_Amount.toLocaleString("en-GB"));
} }
function ManageAccountsComponent_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ManageAccountsComponent_div_1_div_3_div_1_Template, 2, 3, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const account_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", account_r3.user_id === ctx_r2.userId);
} }
function ManageAccountsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Account Current Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ManageAccountsComponent_div_1_div_3_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.accountData);
} }
function ManageAccountsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-emptycontent", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class ManageAccountsComponent {
    constructor(apiService) {
        this.apiService = apiService;
        this.userId = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["userId"];
    }
    ngOnInit() {
        this.apiService.getAccountDataAsync((d) => {
            this.accountData = d;
        });
    }
}
ManageAccountsComponent.ɵfac = function ManageAccountsComponent_Factory(t) { return new (t || ManageAccountsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"])); };
ManageAccountsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ManageAccountsComponent, selectors: [["manage-accounts-content-component"]], decls: 3, vars: 4, consts: [[3, "pagetitle", "pagedirections"], [4, "ngIf"], [1, "align-right"], ["class", "clickable-view", 4, "ngFor", "ngForOf"], [1, "clickable-view"], [3, "name", "link", "amount"], ["emptyHeader", "No Accounts Yet", "emptyPar", "Click 'Add Accounts' in the navbar to add an account. "]], template: function ManageAccountsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "page-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ManageAccountsComponent_div_1_Template, 4, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ManageAccountsComponent_div_2_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pagetitle", "Manage Accounts")("pagedirections", "Click on an account to view and add information");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.accountData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.accountData);
    } }, directives: [_page_template_pagetemplate_component__WEBPACK_IMPORTED_MODULE_3__["PageTemplateComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _small_components_clickable_list_view_component__WEBPACK_IMPORTED_MODULE_5__["ClickableListView"], _small_components_empty_content_component__WEBPACK_IMPORTED_MODULE_6__["EmptyContentComponent"]], styles: [".align-right[_ngcontent-%COMP%] {\n        text-align: right;\n        margin-right: 10rem;\n      }\n      .clickable-view[_ngcontent-%COMP%] {\n        margin: 0.625rem;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ManageAccountsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'manage-accounts-content-component',
                template: `
    <page-template
      [pagetitle]="'Manage Accounts'"
      [pagedirections]="'Click on an account to view and add information'"
    >
      <div *ngIf="accountData">
        <p class="align-right">Account Current Amount</p>
        <div *ngFor="let account of accountData" class="clickable-view">
          <div *ngIf="account.user_id === userId">
            <clickable-list-view
              [name]="account.account_Description"
              [link]="'/account?id='.concat(account.account_id)"
              [amount]="account.account_Starting_Amount.toLocaleString('en-GB')"
            >
            </clickable-list-view>
          </div>
        </div>
      </div>

      <div *ngIf="!accountData">
        <app-emptycontent
          emptyHeader="No Accounts Yet"
          emptyPar="Click 'Add Accounts' in the navbar to add an account. "
        ></app-emptycontent>
      </div>
    </page-template>
  `,
                styles: [
                    `
      .align-right {
        text-align: right;
        margin-right: 10rem;
      }
      .clickable-view {
        margin: 0.625rem;
      }
    `,
                ],
            }]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/page-content/signup.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/page-content/signup.component.ts ***!
  \*************************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var sha_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sha.js */ "./node_modules/sha.js/index.js");
/* harmony import */ var sha_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sha_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../api.service */ "./src/app/components/api.service.ts");
/* harmony import */ var _page_template_headerpagetemplate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../page-template/headerpagetemplate.component */ "./src/app/components/page-template/headerpagetemplate.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _small_components_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../small-components/input.component */ "./src/app/components/small-components/input.component.ts");







function SignupComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input-component", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const input_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", input_r1.label)("placeholder", input_r1.placeholder)("type", input_r1.type)("name", input_r1.name)("id", input_r1.id);
} }
class SignupComponent {
    constructor(apiService) {
        this.apiService = apiService;
        this.signupFieldData = [
            {
                label: 'Full Name',
                placeholder: 'Type in your full name',
                type: 'fname',
                name: 'fname',
                id: 'fname',
            },
            {
                label: 'Email',
                placeholder: 'Type in your email',
                type: 'email',
                name: 'email',
                id: 'email',
            },
            {
                label: 'Password',
                placeholder: 'Type in your password',
                type: 'password',
                name: 'password',
                id: 'password',
            },
        ];
    }
    postUserData() {
        this.fullName = document.getElementById('fname').value;
        this.email = document.getElementById('email').value;
        this.password = (document.getElementById('password')).value;
        if (this.fullName === '' || this.email === '' || this.password === '') {
            console.log('Please fill out all fields');
        }
        else {
            this.hashedPassword = sha_js__WEBPACK_IMPORTED_MODULE_1__('sha256').update(this.password).digest('hex');
            const body = '{"fullName": "' +
                this.fullName +
                '", "email": "' +
                this.email +
                '", "password":"' +
                this.hashedPassword +
                '"}';
            this.apiService.postUserData(body);
        }
    }
    ngOnInit() { }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["signup-content-component"]], decls: 8, vars: 2, consts: [[3, "pagetitle"], ["class", "inputs", 4, "ngFor", "ngForOf"], [1, "login-button"], ["type", "submit", 1, "primary", "round", 3, "click"], ["href", "/"], [1, "inputs"], [3, "label", "placeholder", "type", "name", "id"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header-page-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignupComponent_div_2_Template, 2, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_4_listener() { return ctx.postUserData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Sign Up ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Already have an account? Login -> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pagetitle", "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.signupFieldData);
    } }, directives: [_page_template_headerpagetemplate_component__WEBPACK_IMPORTED_MODULE_3__["HeaderPageTemplateComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _small_components_input_component__WEBPACK_IMPORTED_MODULE_5__["InputComponent"]], styles: [".login-button[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: center;\n        width: 70%;\n      }\n\n      .inputs[_ngcontent-%COMP%] {\n        width: 30%;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'signup-content-component',
                template: `
    <header-page-template [pagetitle]="'Sign Up'">
      <form>
        <div class="inputs" *ngFor="let input of signupFieldData">
          <input-component
            [label]="input.label"
            [placeholder]="input.placeholder"
            [type]="input.type"
            [name]="input.name"
            [id]="input.id"
          ></input-component>
        </div>

        <div class="login-button">
          <button type="submit" class="primary round" (click)="postUserData()">
            Sign Up
          </button>
        </div>
      </form>
      <a href="/">Already have an account? Login -> </a>
    </header-page-template>
  `,
                styles: [
                    `
      .login-button {
        display: flex;
        justify-content: center;
        width: 70%;
      }

      .inputs {
        width: 30%;
      }
    `,
                ],
            }]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/page-template/headerpagetemplate.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/page-template/headerpagetemplate.component.ts ***!
  \**************************************************************************/
/*! exports provided: HeaderPageTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderPageTemplateComponent", function() { return HeaderPageTemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _small_components_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../small-components/header.component */ "./src/app/components/small-components/header.component.ts");



const _c0 = ["*"];
class HeaderPageTemplateComponent {
    constructor() { }
    ngOnInit() { }
}
HeaderPageTemplateComponent.ɵfac = function HeaderPageTemplateComponent_Factory(t) { return new (t || HeaderPageTemplateComponent)(); };
HeaderPageTemplateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderPageTemplateComponent, selectors: [["header-page-template"]], inputs: { pagetitle: "pagetitle" }, ngContentSelectors: _c0, decls: 6, vars: 3, consts: [[3, "maintitle", "tagline"], [1, "content"], [1, "column", "login-signup-container"], [1, "pagetitle"]], template: function HeaderPageTemplateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "header-component", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maintitle", "Fin")("tagline", "Financial Accounts Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pagetitle);
    } }, directives: [_small_components_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]], styles: [".content[_ngcontent-%COMP%] {\n        margin: 2rem 2rem 0rem 2rem;\n      }\n\n      .login-signup-container[_ngcontent-%COMP%] {\n        align-items: center;\n        margin-top: 5rem;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderPageTemplateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'header-page-template',
                template: `
    <header-component
      [maintitle]="'Fin'"
      [tagline]="'Financial Accounts Management'"
    ></header-component>
    <div class="content">
      <div class="column login-signup-container">
        <h2 class="pagetitle">{{ pagetitle }}</h2>
        <ng-content></ng-content>
      </div>
    </div>
  `,
                styles: [
                    `
      .content {
        margin: 2rem 2rem 0rem 2rem;
      }

      .login-signup-container {
        align-items: center;
        margin-top: 5rem;
      }
    `,
                ],
            }]
    }], function () { return []; }, { pagetitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/page-template/pagetemplate.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/page-template/pagetemplate.component.ts ***!
  \********************************************************************/
/*! exports provided: PageTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTemplateComponent", function() { return PageTemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/components/api.service.ts");
/* harmony import */ var _small_components_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../small-components/navbar.component */ "./src/app/components/small-components/navbar.component.ts");
/* harmony import */ var _small_components_help_modal_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../small-components/help-modal-button.component */ "./src/app/components/small-components/help-modal-button.component.ts");





const _c0 = ["*"];
class PageTemplateComponent {
    constructor(apiService) {
        this.apiService = apiService;
    }
    ngOnInit() {
        this.apiService.getUserData((d) => { this.userData = d[0].fullName; });
    }
}
PageTemplateComponent.ɵfac = function PageTemplateComponent_Factory(t) { return new (t || PageTemplateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["APIService"])); };
PageTemplateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageTemplateComponent, selectors: [["page-template"]], inputs: { pagedirections: "pagedirections", pagetitle: "pagetitle" }, ngContentSelectors: _c0, decls: 9, vars: 4, consts: [[3, "childToMaster"], [1, "content"], [1, "pagetitle"], [3, "modaltext"]], template: function PageTemplateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "navbar-component", 0);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "help-modal-button-component", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("childToMaster", ctx.userData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pagetitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pagedirections);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("modaltext", "To add an account click Add An Account.  To view accounts click Manage Accounts.  To add transactions for a specific account click on that account.");
    } }, directives: [_small_components_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _small_components_help_modal_button_component__WEBPACK_IMPORTED_MODULE_3__["HelpModalButtonComponent"]], styles: [".content[_ngcontent-%COMP%] {\n        margin: 2rem 2rem 0rem 2rem;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageTemplateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'page-template',
                template: `
    <navbar-component [childToMaster]="this.userData"></navbar-component>
    <div class="content">
      <h2 class="pagetitle">{{ pagetitle }}</h2>
      <p>{{ pagedirections }}</p>
      <br />
      <ng-content></ng-content>
    </div>
    <help-modal-button-component
      [modaltext]="
        'To add an account click Add An Account.  To view accounts click Manage Accounts.  To add transactions for a specific account click on that account.'
      "
    ></help-modal-button-component>
  `,
                styles: [
                    `
      .content {
        margin: 2rem 2rem 0rem 2rem;
      }
    `,
                ],
            }]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_1__["APIService"] }]; }, { pagedirections: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pagetitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/small-components/add-transaction-modal-button.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/small-components/add-transaction-modal-button.component.ts ***!
  \***************************************************************************************/
/*! exports provided: AddTransactionButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTransactionButtonComponent", function() { return AddTransactionButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _help_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./help-modal.service */ "./src/app/components/small-components/help-modal.service.ts");
/* harmony import */ var _help_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./help-modal.component */ "./src/app/components/small-components/help-modal.component.ts");




const _c0 = ["*"];
class AddTransactionButtonComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    ngOnInit() { }
    openModal(id) {
        this.modalService.open(id);
    }
    closeModal(id) {
        this.modalService.close(id);
    }
}
AddTransactionButtonComponent.ɵfac = function AddTransactionButtonComponent_Factory(t) { return new (t || AddTransactionButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_help_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"])); };
AddTransactionButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddTransactionButtonComponent, selectors: [["add-transaction-button-component"]], inputs: { modaltext: "modaltext" }, ngContentSelectors: _c0, decls: 7, vars: 0, consts: [[1, "primary", "round", 3, "click"], ["id", "custom-modal-2"], [1, "float-right"], [1, "secondary", 3, "click"]], template: function AddTransactionButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddTransactionButtonComponent_Template_button_click_0_listener() { return ctx.openModal("custom-modal-2"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Add Transaction\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "modal", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddTransactionButtonComponent_Template_button_click_4_listener() { return ctx.closeModal("custom-modal-2"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " X ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_help_modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"]], styles: [".float-right[_ngcontent-%COMP%] {\n        float: right;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddTransactionButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'add-transaction-button-component',
                template: `
  <button (click)="openModal('custom-modal-2')" class="primary round">
  Add Transaction
</button>

    <modal id="custom-modal-2">
      <div class="float-right">
        <button class="secondary" (click)="closeModal('custom-modal-2')">
          X
        </button>
      </div>
      <ng-content></ng-content>
    </modal>
  `,
                styles: [
                    `
      .float-right {
        float: right;
      }
    `,
                ],
            }]
    }], function () { return [{ type: _help_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"] }]; }, { modaltext: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/small-components/add-transaction-modal.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/small-components/add-transaction-modal.component.ts ***!
  \********************************************************************************/
/*! exports provided: AddTransactionModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTransactionModal", function() { return AddTransactionModal; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _add_transaction_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-transaction-modal.service */ "./src/app/components/small-components/add-transaction-modal.service.ts");



const _c0 = ["*"];
class AddTransactionModal {
    constructor(addTransactionModalService, el) {
        this.addTransactionModalService = addTransactionModalService;
        this.el = el;
        this.element = el.nativeElement;
    }
    ngOnInit() {
        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        document.body.appendChild(this.element);
        // close modal on background click
        this.element.addEventListener('click', (el) => {
            if (el.target.className === 'modal') {
                this.close();
            }
        });
        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.addTransactionModalService.add(this);
    }
    // remove self from modal service when component is destroyed
    ngOnDestroy() {
        this.addTransactionModalService.remove(this.id);
        this.element.remove();
    }
    // open modal
    open() {
        this.element.style.display = 'block';
        document.body.classList.add('modal-open');
    }
    // close modal
    close() {
        this.element.style.display = 'none';
        document.body.classList.remove('modal-open');
    }
}
AddTransactionModal.ɵfac = function AddTransactionModal_Factory(t) { return new (t || AddTransactionModal)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_add_transaction_modal_service__WEBPACK_IMPORTED_MODULE_1__["AddTransactionModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
AddTransactionModal.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddTransactionModal, selectors: [["add-transaction-modal"]], inputs: { id: "id" }, ngContentSelectors: _c0, decls: 4, vars: 0, consts: [[1, "modal"], [1, "modal-body"], [1, "modal-background"]], template: function AddTransactionModal_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
    } }, styles: ["\n      modal {\n        display: none;\n      }\n      .modal {\n        position: fixed;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        z-index: 1000;\n        overflow: auto;\n      }\n      .modal .modal-body {\n        padding: 1.25rem;\n        background: #fff;\n        margin: 16rem;\n        border-radius: 2rem;\n        min-height: 20rem;\n        max-width: 80rem;\n      }\n      .modal-background {\n        position: fixed;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        background-color: var(--fin-black-transparent);\n        opacity: 0.75;\n        z-index: 900;\n      }\n      body.modal-open-2 {\n        overflow: hidden;\n      }\n    "], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddTransactionModal, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'add-transaction-modal',
                template: `
    <div class="modal">
      <div class="modal-body">
        <ng-content></ng-content>
      </div>
    </div>
    <div class="modal-background"></div>
  `,
                styles: [
                    `
      modal {
        display: none;
      }
      .modal {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1000;
        overflow: auto;
      }
      .modal .modal-body {
        padding: 1.25rem;
        background: #fff;
        margin: 16rem;
        border-radius: 2rem;
        min-height: 20rem;
        max-width: 80rem;
      }
      .modal-background {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: var(--fin-black-transparent);
        opacity: 0.75;
        z-index: 900;
      }
      body.modal-open-2 {
        overflow: hidden;
      }
    `,
                ],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: _add_transaction_modal_service__WEBPACK_IMPORTED_MODULE_1__["AddTransactionModalService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/small-components/add-transaction-modal.service.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/small-components/add-transaction-modal.service.ts ***!
  \******************************************************************************/
/*! exports provided: AddTransactionModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTransactionModalService", function() { return AddTransactionModalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AddTransactionModalService {
    constructor() {
        this.modals = [];
    }
    add(modal) {
        // add modal to array of active modals
        this.modals.push(modal);
    }
    remove(id) {
        // remove modal from array of active modals
        this.modals = this.modals.filter((x) => x.id !== id);
    }
    open(id) {
        // open modal specified by id
        const modal = this.modals.find((x) => x.id === id);
        modal.open();
    }
    close(id) {
        // close modal specified by id
        const modal = this.modals.find((x) => x.id === id);
        modal.close();
    }
}
AddTransactionModalService.ɵfac = function AddTransactionModalService_Factory(t) { return new (t || AddTransactionModalService)(); };
AddTransactionModalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AddTransactionModalService, factory: AddTransactionModalService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddTransactionModalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/small-components/clickable-list-view.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/small-components/clickable-list-view.component.ts ***!
  \******************************************************************************/
/*! exports provided: ClickableListView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickableListView", function() { return ClickableListView; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ClickableListView {
    constructor() { }
    ngOnInit() { }
}
ClickableListView.ɵfac = function ClickableListView_Factory(t) { return new (t || ClickableListView)(); };
ClickableListView.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClickableListView, selectors: [["clickable-list-view"]], inputs: { link: "link", amount: "amount", name: "name" }, decls: 7, vars: 3, consts: [[3, "href"], [1, "clickable-list"], [1, "space-between"]], template: function ClickableListView_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.amount, "");
    } }, styles: ["div[_ngcontent-%COMP%] {\n        background: #efefef;\n        width: 90%;\n        padding: 1rem;\n        border-radius: 0.625rem;\n      }\n\n      .space-between[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: space-between;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClickableListView, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'clickable-list-view',
                template: `
    <a href="{{ link }}">
      <div class="clickable-list">
        <div class="space-between">
          <p>{{ name }}</p>
          <p>\${{ amount }}</p>
        </div>
      </div>
    </a>
  `,
                styles: [
                    `
      div {
        background: #efefef;
        width: 90%;
        padding: 1rem;
        border-radius: 0.625rem;
      }

      .space-between {
        display: flex;
        justify-content: space-between;
      }
    `,
                ],
            }]
    }], function () { return []; }, { link: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], amount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/small-components/empty-content.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/small-components/empty-content.component.ts ***!
  \************************************************************************/
/*! exports provided: EmptyContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyContentComponent", function() { return EmptyContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class EmptyContentComponent {
    constructor() { }
    ngOnInit() { }
}
EmptyContentComponent.ɵfac = function EmptyContentComponent_Factory(t) { return new (t || EmptyContentComponent)(); };
EmptyContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmptyContentComponent, selectors: [["app-emptycontent"]], inputs: { emptyHeader: "emptyHeader", emptyPar: "emptyPar" }, decls: 9, vars: 2, consts: [[1, "wrapper"], ["src", "../../assets/empty.svg", "rel", "icon", "alt", "", 1, "emptyicon"], [1, "row"], [1, "space"]], template: function EmptyContentComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.emptyHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.emptyPar);
    } }, styles: [".emptyicon[_ngcontent-%COMP%] {\n        padding-left: 3rem;\n      }\n\n      .wrapper[_ngcontent-%COMP%] {\n        display: flex;\n        flex-direction: column;\n        padding: 4rem;\n        align-items: center;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmptyContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-emptycontent',
                template: `
    <div class="wrapper">
      <img src="../../assets/empty.svg" rel="icon" alt="" class="emptyicon" />
      <br />

      <div class="row">
        <h3>{{ emptyHeader }}</h3>
      </div>
      <br />
      <p class="space">{{ emptyPar }}</p>
    </div>
  `,
                styles: [
                    `
      .emptyicon {
        padding-left: 3rem;
      }

      .wrapper {
        display: flex;
        flex-direction: column;
        padding: 4rem;
        align-items: center;
      }
    `,
                ],
            }]
    }], function () { return []; }, { emptyHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], emptyPar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/small-components/header.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/small-components/header.component.ts ***!
  \*****************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HeaderComponent {
    constructor() { }
    ngOnInit() { }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["header-component"]], inputs: { maintitle: "maintitle", tagline: "tagline" }, decls: 8, vars: 2, consts: [[1, "row", "hero"], [1, "column", "center"], [1, "row"], ["src", "../../assets/logo.svg", "rel", "icon", "alt", "", 1, "logo"], [1, "fin"], [1, "tag-line"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.maintitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.tagline);
    } }, styles: [".hero[_ngcontent-%COMP%] {\n        align-items: center;\n        background: var(--fin-gradient);\n        border-radius: 0rem 0rem 2rem 2rem;\n        justify-content: center;\n        padding: 6rem;\n      }\n\n      .fin[_ngcontent-%COMP%] {\n        color: var(--fin-white);\n        font-family: 'Courgette', cursive;\n        font-size: 4rem;\n        text-shadow: 0rem 0.125rem rgb(0 0 0 / 16%);\n        font-weight: 300;\n      }\n\n      .tag-line[_ngcontent-%COMP%] {\n        color: var(--fin-white);\n      }\n\n      img[_ngcontent-%COMP%] {\n        padding-right: 1rem;\n        width: 9.813rem;\n        height: 5.188rem;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'header-component',
                template: `
    <div class="row hero">
      <div class="column center">
        <div class="row">
          <img src="../../assets/logo.svg" rel="icon" alt="" class="logo" />
          <h1 class="fin">{{ maintitle }}</h1>
        </div>
        <p class="tag-line">{{ tagline }}</p>
      </div>
    </div>
  `,
                styles: [
                    `
      .hero {
        align-items: center;
        background: var(--fin-gradient);
        border-radius: 0rem 0rem 2rem 2rem;
        justify-content: center;
        padding: 6rem;
      }

      .fin {
        color: var(--fin-white);
        font-family: 'Courgette', cursive;
        font-size: 4rem;
        text-shadow: 0rem 0.125rem rgb(0 0 0 / 16%);
        font-weight: 300;
      }

      .tag-line {
        color: var(--fin-white);
      }

      img {
        padding-right: 1rem;
        width: 9.813rem;
        height: 5.188rem;
      }
    `,
                ],
            }]
    }], function () { return []; }, { maintitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], tagline: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/small-components/help-modal-button.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/small-components/help-modal-button.component.ts ***!
  \****************************************************************************/
/*! exports provided: HelpModalButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpModalButtonComponent", function() { return HelpModalButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _help_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./help-modal.service */ "./src/app/components/small-components/help-modal.service.ts");
/* harmony import */ var _help_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./help-modal.component */ "./src/app/components/small-components/help-modal.component.ts");




const _c0 = ["*"];
class HelpModalButtonComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    ngOnInit() { }
    openModal(id) {
        this.modalService.open(id);
    }
    closeModal(id) {
        this.modalService.close(id);
    }
}
HelpModalButtonComponent.ɵfac = function HelpModalButtonComponent_Factory(t) { return new (t || HelpModalButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_help_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"])); };
HelpModalButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HelpModalButtonComponent, selectors: [["help-modal-button-component"]], inputs: { modaltext: "modaltext" }, ngContentSelectors: _c0, decls: 9, vars: 1, consts: [[1, "btn-help", 3, "click"], ["id", "custom-modal-1"], [1, "float-right"], [1, "secondary", 3, "click"], [1, "modaltext"]], template: function HelpModalButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HelpModalButtonComponent_Template_button_click_0_listener() { return ctx.openModal("custom-modal-1"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "modal", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HelpModalButtonComponent_Template_button_click_4_listener() { return ctx.closeModal("custom-modal-1"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " X ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.modaltext);
    } }, directives: [_help_modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"]], styles: [".float-right[_ngcontent-%COMP%] {\n        float: right;\n      }\n\n      .modaltext[_ngcontent-%COMP%] {\n        padding: 4rem;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HelpModalButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'help-modal-button-component',
                template: `
    <button class="btn-help" (click)="openModal('custom-modal-1')">?</button>

    <modal id="custom-modal-1">
      <div class="float-right">
        <button class="secondary" (click)="closeModal('custom-modal-1')">
          X
        </button>
      </div>
      <p class="modaltext">{{ modaltext }}</p>
      <ng-content></ng-content>
    </modal>
  `,
                styles: [
                    `
      .float-right {
        float: right;
      }

      .modaltext {
        padding: 4rem;
      }
    `,
                ],
            }]
    }], function () { return [{ type: _help_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"] }]; }, { modaltext: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/small-components/help-modal.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/small-components/help-modal.component.ts ***!
  \*********************************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _help_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./help-modal.service */ "./src/app/components/small-components/help-modal.service.ts");



const _c0 = ["*"];
class ModalComponent {
    constructor(modalService, el) {
        this.modalService = modalService;
        this.el = el;
        this.element = el.nativeElement;
    }
    ngOnInit() {
        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        document.body.appendChild(this.element);
        // close modal on background click
        this.element.addEventListener('click', (el) => {
            if (el.target.className === 'modal') {
                this.close();
            }
        });
        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
    }
    // remove self from modal service when component is destroyed
    ngOnDestroy() {
        this.modalService.remove(this.id);
        this.element.remove();
    }
    // open modal
    open() {
        this.element.style.display = 'block';
        document.body.classList.add('modal-open');
    }
    // close modal
    close() {
        this.element.style.display = 'none';
        document.body.classList.remove('modal-open');
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_help_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["modal"]], inputs: { id: "id" }, ngContentSelectors: _c0, decls: 4, vars: 0, consts: [[1, "modal"], [1, "modal-body"], [1, "modal-background"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
    } }, styles: ["\n      modal {\n        display: none;\n      }\n      .modal {\n        position: fixed;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        z-index: 1000;\n        overflow: auto;\n      }\n      .modal .modal-body {\n        padding: 1.25rem;\n        background: #fff;\n        margin: 16rem;\n        border-radius: 0.625rem;\n        min-height: 20rem;\n        max-width: 80rem;\n      }\n      .modal-background {\n        position: fixed;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        background-color: var(--fin-black-transparent);\n        opacity: 0.75;\n        z-index: 900;\n      }\n      body.modal-open {\n        overflow: hidden;\n      }\n    "], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'modal',
                template: `
    <div class="modal">
      <div class="modal-body">
        <ng-content></ng-content>
      </div>
    </div>
    <div class="modal-background"></div>
  `,
                styles: [
                    `
      modal {
        display: none;
      }
      .modal {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1000;
        overflow: auto;
      }
      .modal .modal-body {
        padding: 1.25rem;
        background: #fff;
        margin: 16rem;
        border-radius: 0.625rem;
        min-height: 20rem;
        max-width: 80rem;
      }
      .modal-background {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: var(--fin-black-transparent);
        opacity: 0.75;
        z-index: 900;
      }
      body.modal-open {
        overflow: hidden;
      }
    `,
                ],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: _help_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/small-components/help-modal.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/small-components/help-modal.service.ts ***!
  \*******************************************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ModalService {
    constructor() {
        this.modals = [];
    }
    add(modal) {
        // add modal to array of active modals
        this.modals.push(modal);
    }
    remove(id) {
        // remove modal from array of active modals
        this.modals = this.modals.filter((x) => x.id !== id);
    }
    open(id) {
        // open modal specified by id
        const modal = this.modals.find((x) => x.id === id);
        modal.open();
    }
    close(id) {
        // close modal specified by id
        const modal = this.modals.find((x) => x.id === id);
        modal.close();
    }
}
ModalService.ɵfac = function ModalService_Factory(t) { return new (t || ModalService)(); };
ModalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ModalService, factory: ModalService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/small-components/input.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/small-components/input.component.ts ***!
  \****************************************************************/
/*! exports provided: InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class InputComponent {
    constructor() { }
    ngOnInit() { }
}
InputComponent.ɵfac = function InputComponent_Factory(t) { return new (t || InputComponent)(); };
InputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputComponent, selectors: [["input-component"]], inputs: { label: "label", placeholder: "placeholder", type: "type", name: "name", required: "required", min: "min", id: "id" }, decls: 3, vars: 7, consts: [[3, "placeholder", "type", "name", "required", "min", "id"]], template: function InputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.placeholder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("type", ctx.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("required", ctx.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("min", ctx.min);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.id);
    } }, styles: ["label[_ngcontent-%COMP%] {\n        color: var(--fin-neutral-1);\n      }\n\n      input[_ngcontent-%COMP%] {\n        border-radius: 20rem;\n        font-size: 1rem;\n        height: 1.5rem;\n        min-width: 15rem;\n        width: 100%;\n        padding: 0.75rem 1rem;\n        border: 0.063rem solid var(--fin-white);\n        margin: 0.5rem 0;\n        background: var(--fin-neutral-6);\n        color: var(--fin-neutral-1);\n      }\n\n      input[type='checkbox'][_ngcontent-%COMP%], input[type='radio'][_ngcontent-%COMP%] {\n        width: 1.2rem;\n        height: 1.2rem;\n        margin-top: 0.3rem;\n      }\n\n      input[type='date'][_ngcontent-%COMP%] {\n        font-family: Inter, sans-serif;\n      }\n\n      input[_ngcontent-%COMP%]:focus {\n        outline: none;\n        box-shadow: 0rem 0rem 0.313rem var(--fin-blue-1);\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'input-component',
                template: `
    <label>{{ label }}</label>

    <input
      placeholder="{{ placeholder }}"
      type="{{ type }}"
      name="{{ name }}"
      required="{{ required }}"
      min="{{ min }}"
      id="{{ id }}"
    />
  `,
                styles: [
                    `
      label {
        color: var(--fin-neutral-1);
      }

      input {
        border-radius: 20rem;
        font-size: 1rem;
        height: 1.5rem;
        min-width: 15rem;
        width: 100%;
        padding: 0.75rem 1rem;
        border: 0.063rem solid var(--fin-white);
        margin: 0.5rem 0;
        background: var(--fin-neutral-6);
        color: var(--fin-neutral-1);
      }

      input[type='checkbox'],
      input[type='radio'] {
        width: 1.2rem;
        height: 1.2rem;
        margin-top: 0.3rem;
      }

      input[type='date'] {
        font-family: Inter, sans-serif;
      }

      input:focus {
        outline: none;
        box-shadow: 0rem 0rem 0.313rem var(--fin-blue-1);
      }
    `,
                ],
            }]
    }], function () { return []; }, { label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], min: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/small-components/navbar.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/small-components/navbar.component.ts ***!
  \*****************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




function NavbarComponent_h3_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Welcome!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_h3_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome ", ctx_r1.userData, "!");
} }
class NavbarComponent {
    ngOnInit() { }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["navbar-component"]], inputs: { userData: ["childToMaster", "userData"] }, decls: 20, vars: 2, consts: [[1, "row", "navbar"], [1, "column", "center"], ["src", "../../assets/logo.svg", "rel", "icon", "alt", "", 1, "logo"], ["class", "name", 4, "ngIf"], [1, "nav", "navbar-nav", "navbar-right"], ["routerLinkActive", "active", 1, "nav-item"], ["routerLink", "/addAccounts"], [1, "white-text"], ["routerLink", "/manageAccounts"], [2, "width", "2rem", "border-right", "0.05rem solid white"], ["href", "/"], [1, "fa", "fa-power-off"], [1, "name"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".logo[_ngcontent-%COMP%] {\n        width: 8rem;\n        height: 8rem;\n      }\n      .name[_ngcontent-%COMP%] {\n        width: 100%;\n        color: var(--fin-white);\n        font-weight: normal;\n      }\n\n      .profilelogo[_ngcontent-%COMP%] {\n        width: 3rem;\n        height: 3rem;\n      }\n      .navbar[_ngcontent-%COMP%] {\n        align-items: center;\n        background: var(--fin-gradient);\n        border-radius: 0rem 0rem 2rem 2rem;\n        min-width: 39.6875rem;\n      }\n\n      .nav[_ngcontent-%COMP%] {\n        padding-left: 0;\n        margin-bottom: 0;\n        list-style: none;\n        width: 50rem;\n      }\n\n      .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n        position: relative;\n        display: block;\n        padding: 0.625rem 0.9375rem;\n      }\n\n      .active[_ngcontent-%COMP%] {\n        text-decoration: none;\n        background-color: rgba(255, 255, 255, 0.2);\n        border-radius: 0.625rem;\n      }\n\n      .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n        padding-top: 0.9375rem;\n        padding-bottom: 0.9375rem;\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        appearance: none;\n      }\n      .navbar-right[_ngcontent-%COMP%] {\n        float: right;\n        display: flex;\n        justify-content: flex-end;\n        width: 95rem;\n      }\n\n      .white-text[_ngcontent-%COMP%] {\n        color: white;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'navbar-component',
                template: `
    <div class="row navbar">
      <div class="column center">
        <img src="../../assets/logo.svg" rel="icon" alt="" class="logo" />
      </div>

      <h3 *ngIf="!userData" class="name">Welcome!</h3>
      <h3 *ngIf="userData" class="name">Welcome {{ this.userData }}!</h3>

      <ul class="nav navbar-nav navbar-right">
        <li class="nav-item" routerLinkActive="active">
          <a routerLink="/addAccounts">
            <p class="white-text">Add Accounts</p>
          </a>
        </li>
        <li class="nav-item" routerLinkActive="active">
          <a routerLink="/manageAccounts">
            <p class="white-text">Manage Accounts</p>
          </a>
        </li>

        <div style="width:2rem; border-right:0.05rem solid white;"></div>
        <li class="nav-item" routerLinkActive="active">
          <a href="/">
            <i class="fa fa-power-off"></i>
            <p class="white-text">Logout</p>
          </a>
        </li>
      </ul>
    </div>
  `,
                styles: [
                    `
      .logo {
        width: 8rem;
        height: 8rem;
      }
      .name {
        width: 100%;
        color: var(--fin-white);
        font-weight: normal;
      }

      .profilelogo {
        width: 3rem;
        height: 3rem;
      }
      .navbar {
        align-items: center;
        background: var(--fin-gradient);
        border-radius: 0rem 0rem 2rem 2rem;
        min-width: 39.6875rem;
      }

      .nav {
        padding-left: 0;
        margin-bottom: 0;
        list-style: none;
        width: 50rem;
      }

      .nav > li > a {
        position: relative;
        display: block;
        padding: 0.625rem 0.9375rem;
      }

      .active {
        text-decoration: none;
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 0.625rem;
      }

      .navbar-nav > li > a {
        padding-top: 0.9375rem;
        padding-bottom: 0.9375rem;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      }
      .navbar-right {
        float: right;
        display: flex;
        justify-content: flex-end;
        width: 95rem;
      }

      .white-text {
        color: white;
      }
    `,
                ],
            }]
    }], null, { userData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['childToMaster']
        }] }); })();


/***/ }),

/***/ "./src/app/components/small-components/tab.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/small-components/tab.component.ts ***!
  \**************************************************************/
/*! exports provided: TabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabComponent", function() { return TabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/**
 * A single tab page. It renders the passed template
 * via the @Input properties by using the ngTemplateOutlet
 * and ngTemplateOutletContext directives.
 */


const _c0 = ["*"];
class TabComponent {
    constructor() {
        this.active = false;
    }
}
TabComponent.ɵfac = function TabComponent_Factory(t) { return new (t || TabComponent)(); };
TabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabComponent, selectors: [["my-tab"]], inputs: { title: ["tabTitle", "title"], active: "active" }, ngContentSelectors: _c0, decls: 2, vars: 1, consts: [[1, "pane", 3, "hidden"]], template: function TabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.active);
    } }, styles: [".pane[_ngcontent-%COMP%] {\n        padding: 1em;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'my-tab',
                styles: [
                    `
      .pane {
        padding: 1em;
      }
    `,
                ],
                template: `
    <div [hidden]="!active" class="pane">
      <ng-content></ng-content>
    </div>
  `,
            }]
    }], null, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['tabTitle']
        }], active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/small-components/tabs.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/small-components/tabs.component.ts ***!
  \***************************************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _tab_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab.component */ "./src/app/components/small-components/tab.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/**
 * The main component that renders single TabComponent
 * instances.
 */




function TabsComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabsComponent_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const tab_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.selectTab(tab_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", tab_r1.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tab_r1.title);
} }
const _c0 = ["*"];
class TabsComponent {
    // contentChildren are set
    ngAfterContentInit() {
        // get all active tabs
        let activeTabs = this.tabs.filter((tab) => tab.active);
        // if there is no active tab set, activate the first
        if (activeTabs.length === 0) {
            this.selectTab(this.tabs.first);
        }
    }
    selectTab(tab) {
        // deactivate all tabs
        this.tabs.toArray().forEach((tab) => (tab.active = false));
        // activate the tab the user has clicked on.
        tab.active = true;
    }
}
TabsComponent.ɵfac = function TabsComponent_Factory(t) { return new (t || TabsComponent)(); };
TabsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabsComponent, selectors: [["my-tabs"]], contentQueries: function TabsComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _tab_component__WEBPACK_IMPORTED_MODULE_1__["TabComponent"], false);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tabs = _t);
    } }, ngContentSelectors: _c0, decls: 3, vars: 1, consts: [[1, "nav", "nav-tabs"], [3, "active", "click", 4, "ngFor", "ngForOf"], [3, "click"], ["href", "tab"]], template: function TabsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TabsComponent_li_1_Template, 3, 3, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".tab-close[_ngcontent-%COMP%] {\n        color: gray;\n        text-align: right;\n        cursor: pointer;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'my-tabs',
                template: `
    <ul class="nav nav-tabs">
      <li
        *ngFor="let tab of tabs"
        (click)="selectTab(tab)"
        [class.active]="tab.active"
      >
        <a href="tab">{{ tab.title }}</a>
      </li>
    </ul>
    <ng-content></ng-content>
  `,
                styles: [
                    `
      .tab-close {
        color: gray;
        text-align: right;
        cursor: pointer;
      }
    `,
                ],
            }]
    }], null, { tabs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [_tab_component__WEBPACK_IMPORTED_MODULE_1__["TabComponent"]]
        }] }); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment, userId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userId", function() { return userId; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
};
const userId = 1;
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sitarobinson/Desktop/Projects/Fin/angularfrontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map