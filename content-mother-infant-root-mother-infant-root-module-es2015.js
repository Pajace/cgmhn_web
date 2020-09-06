(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-mother-infant-root-mother-infant-root-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/mother-infant-root/mother-infant-root.page.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/mother-infant-root/mother-infant-root.page.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>mother_infant_root</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/content/mother-infant-root/mother-infant-root-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/content/mother-infant-root/mother-infant-root-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: MotherInfantRootPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotherInfantRootPageRoutingModule", function() { return MotherInfantRootPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _mother_infant_root_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mother-infant-root.page */ "./src/app/pages/content/mother-infant-root/mother-infant-root.page.ts");




const routes = [
    {
        path: '',
        component: _mother_infant_root_page__WEBPACK_IMPORTED_MODULE_3__["MotherInfantRootPage"]
    }
];
let MotherInfantRootPageRoutingModule = class MotherInfantRootPageRoutingModule {
};
MotherInfantRootPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MotherInfantRootPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/content/mother-infant-root/mother-infant-root.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/content/mother-infant-root/mother-infant-root.module.ts ***!
  \*******************************************************************************/
/*! exports provided: MotherInfantRootPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotherInfantRootPageModule", function() { return MotherInfantRootPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _mother_infant_root_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mother-infant-root-routing.module */ "./src/app/pages/content/mother-infant-root/mother-infant-root-routing.module.ts");
/* harmony import */ var _mother_infant_root_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mother-infant-root.page */ "./src/app/pages/content/mother-infant-root/mother-infant-root.page.ts");







let MotherInfantRootPageModule = class MotherInfantRootPageModule {
};
MotherInfantRootPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _mother_infant_root_routing_module__WEBPACK_IMPORTED_MODULE_5__["MotherInfantRootPageRoutingModule"]
        ],
        declarations: [_mother_infant_root_page__WEBPACK_IMPORTED_MODULE_6__["MotherInfantRootPage"]]
    })
], MotherInfantRootPageModule);



/***/ }),

/***/ "./src/app/pages/content/mother-infant-root/mother-infant-root.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/content/mother-infant-root/mother-infant-root.page.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRlbnQvbW90aGVyLWluZmFudC1yb290L21vdGhlci1pbmZhbnQtcm9vdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/content/mother-infant-root/mother-infant-root.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/content/mother-infant-root/mother-infant-root.page.ts ***!
  \*****************************************************************************/
/*! exports provided: MotherInfantRootPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotherInfantRootPage", function() { return MotherInfantRootPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let MotherInfantRootPage = class MotherInfantRootPage {
    constructor() { }
    ngOnInit() {
    }
};
MotherInfantRootPage.ctorParameters = () => [];
MotherInfantRootPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mother-infant-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./mother-infant-root.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/mother-infant-root/mother-infant-root.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./mother-infant-root.page.scss */ "./src/app/pages/content/mother-infant-root/mother-infant-root.page.scss")).default]
    })
], MotherInfantRootPage);



/***/ })

}]);
//# sourceMappingURL=content-mother-infant-root-mother-infant-root-module-es2015.js.map