(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-ldr-manual-ldr-manual-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/ldr-manual/ldr-manual.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/ldr-manual/ldr-manual.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>ldr_manual</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/content/ldr-manual/ldr-manual-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/content/ldr-manual/ldr-manual-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: LdrManualPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LdrManualPageRoutingModule", function() { return LdrManualPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ldr_manual_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ldr-manual.page */ "./src/app/pages/content/ldr-manual/ldr-manual.page.ts");




const routes = [
    {
        path: '',
        component: _ldr_manual_page__WEBPACK_IMPORTED_MODULE_3__["LdrManualPage"]
    }
];
let LdrManualPageRoutingModule = class LdrManualPageRoutingModule {
};
LdrManualPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LdrManualPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/content/ldr-manual/ldr-manual.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/content/ldr-manual/ldr-manual.module.ts ***!
  \***************************************************************/
/*! exports provided: LdrManualPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LdrManualPageModule", function() { return LdrManualPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ldr_manual_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ldr-manual-routing.module */ "./src/app/pages/content/ldr-manual/ldr-manual-routing.module.ts");
/* harmony import */ var _ldr_manual_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ldr-manual.page */ "./src/app/pages/content/ldr-manual/ldr-manual.page.ts");







let LdrManualPageModule = class LdrManualPageModule {
};
LdrManualPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ldr_manual_routing_module__WEBPACK_IMPORTED_MODULE_5__["LdrManualPageRoutingModule"]
        ],
        declarations: [_ldr_manual_page__WEBPACK_IMPORTED_MODULE_6__["LdrManualPage"]]
    })
], LdrManualPageModule);



/***/ }),

/***/ "./src/app/pages/content/ldr-manual/ldr-manual.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/content/ldr-manual/ldr-manual.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRlbnQvbGRyLW1hbnVhbC9sZHItbWFudWFsLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/content/ldr-manual/ldr-manual.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/content/ldr-manual/ldr-manual.page.ts ***!
  \*************************************************************/
/*! exports provided: LdrManualPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LdrManualPage", function() { return LdrManualPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let LdrManualPage = class LdrManualPage {
    constructor() { }
    ngOnInit() {
    }
};
LdrManualPage.ctorParameters = () => [];
LdrManualPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ldr-manual',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./ldr-manual.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/ldr-manual/ldr-manual.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./ldr-manual.page.scss */ "./src/app/pages/content/ldr-manual/ldr-manual.page.scss")).default]
    })
], LdrManualPage);



/***/ })

}]);
//# sourceMappingURL=content-ldr-manual-ldr-manual-module-es2015.js.map