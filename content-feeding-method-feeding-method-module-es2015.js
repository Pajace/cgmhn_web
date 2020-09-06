(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-feeding-method-feeding-method-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/feeding-method/feeding-method.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/feeding-method/feeding-method.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>feeding_method</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/content/feeding-method/feeding-method-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/content/feeding-method/feeding-method-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: FeedingMethodPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedingMethodPageRoutingModule", function() { return FeedingMethodPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _feeding_method_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feeding-method.page */ "./src/app/pages/content/feeding-method/feeding-method.page.ts");




const routes = [
    {
        path: '',
        component: _feeding_method_page__WEBPACK_IMPORTED_MODULE_3__["FeedingMethodPage"]
    }
];
let FeedingMethodPageRoutingModule = class FeedingMethodPageRoutingModule {
};
FeedingMethodPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FeedingMethodPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/content/feeding-method/feeding-method.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/content/feeding-method/feeding-method.module.ts ***!
  \***********************************************************************/
/*! exports provided: FeedingMethodPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedingMethodPageModule", function() { return FeedingMethodPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _feeding_method_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./feeding-method-routing.module */ "./src/app/pages/content/feeding-method/feeding-method-routing.module.ts");
/* harmony import */ var _feeding_method_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./feeding-method.page */ "./src/app/pages/content/feeding-method/feeding-method.page.ts");







let FeedingMethodPageModule = class FeedingMethodPageModule {
};
FeedingMethodPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _feeding_method_routing_module__WEBPACK_IMPORTED_MODULE_5__["FeedingMethodPageRoutingModule"]
        ],
        declarations: [_feeding_method_page__WEBPACK_IMPORTED_MODULE_6__["FeedingMethodPage"]]
    })
], FeedingMethodPageModule);



/***/ }),

/***/ "./src/app/pages/content/feeding-method/feeding-method.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/content/feeding-method/feeding-method.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRlbnQvZmVlZGluZy1tZXRob2QvZmVlZGluZy1tZXRob2QucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/content/feeding-method/feeding-method.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/content/feeding-method/feeding-method.page.ts ***!
  \*********************************************************************/
/*! exports provided: FeedingMethodPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedingMethodPage", function() { return FeedingMethodPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FeedingMethodPage = class FeedingMethodPage {
    constructor() { }
    ngOnInit() {
    }
};
FeedingMethodPage.ctorParameters = () => [];
FeedingMethodPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-feeding-method',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./feeding-method.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/feeding-method/feeding-method.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./feeding-method.page.scss */ "./src/app/pages/content/feeding-method/feeding-method.page.scss")).default]
    })
], FeedingMethodPage);



/***/ })

}]);
//# sourceMappingURL=content-feeding-method-feeding-method-module-es2015.js.map