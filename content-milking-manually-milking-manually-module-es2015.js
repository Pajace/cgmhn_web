(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-milking-manually-milking-manually-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/milking-manually/milking-manually.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/milking-manually/milking-manually.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>milking_manually</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/content/milking-manually/milking-manually-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/content/milking-manually/milking-manually-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: MilkingManuallyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MilkingManuallyPageRoutingModule", function() { return MilkingManuallyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _milking_manually_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./milking-manually.page */ "./src/app/pages/content/milking-manually/milking-manually.page.ts");




const routes = [
    {
        path: '',
        component: _milking_manually_page__WEBPACK_IMPORTED_MODULE_3__["MilkingManuallyPage"]
    }
];
let MilkingManuallyPageRoutingModule = class MilkingManuallyPageRoutingModule {
};
MilkingManuallyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MilkingManuallyPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/content/milking-manually/milking-manually.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/content/milking-manually/milking-manually.module.ts ***!
  \***************************************************************************/
/*! exports provided: MilkingManuallyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MilkingManuallyPageModule", function() { return MilkingManuallyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _milking_manually_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./milking-manually-routing.module */ "./src/app/pages/content/milking-manually/milking-manually-routing.module.ts");
/* harmony import */ var _milking_manually_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./milking-manually.page */ "./src/app/pages/content/milking-manually/milking-manually.page.ts");







let MilkingManuallyPageModule = class MilkingManuallyPageModule {
};
MilkingManuallyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _milking_manually_routing_module__WEBPACK_IMPORTED_MODULE_5__["MilkingManuallyPageRoutingModule"]
        ],
        declarations: [_milking_manually_page__WEBPACK_IMPORTED_MODULE_6__["MilkingManuallyPage"]]
    })
], MilkingManuallyPageModule);



/***/ }),

/***/ "./src/app/pages/content/milking-manually/milking-manually.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/content/milking-manually/milking-manually.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRlbnQvbWlsa2luZy1tYW51YWxseS9taWxraW5nLW1hbnVhbGx5LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/content/milking-manually/milking-manually.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/content/milking-manually/milking-manually.page.ts ***!
  \*************************************************************************/
/*! exports provided: MilkingManuallyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MilkingManuallyPage", function() { return MilkingManuallyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let MilkingManuallyPage = class MilkingManuallyPage {
    constructor() { }
    ngOnInit() {
    }
};
MilkingManuallyPage.ctorParameters = () => [];
MilkingManuallyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-milking-manually',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./milking-manually.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/milking-manually/milking-manually.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./milking-manually.page.scss */ "./src/app/pages/content/milking-manually/milking-manually.page.scss")).default]
    })
], MilkingManuallyPage);



/***/ })

}]);
//# sourceMappingURL=content-milking-manually-milking-manually-module-es2015.js.map