(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-breastfeeding-tips-breastfeeding-tips-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/breastfeeding-tips/breastfeeding-tips.page.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/breastfeeding-tips/breastfeeding-tips.page.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>breastfeeding_tips</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/content/breastfeeding-tips/breastfeeding-tips-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/content/breastfeeding-tips/breastfeeding-tips-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: BreastfeedingTipsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreastfeedingTipsPageRoutingModule", function() { return BreastfeedingTipsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _breastfeeding_tips_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./breastfeeding-tips.page */ "./src/app/pages/content/breastfeeding-tips/breastfeeding-tips.page.ts");




const routes = [
    {
        path: '',
        component: _breastfeeding_tips_page__WEBPACK_IMPORTED_MODULE_3__["BreastfeedingTipsPage"]
    }
];
let BreastfeedingTipsPageRoutingModule = class BreastfeedingTipsPageRoutingModule {
};
BreastfeedingTipsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BreastfeedingTipsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/content/breastfeeding-tips/breastfeeding-tips.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/content/breastfeeding-tips/breastfeeding-tips.module.ts ***!
  \*******************************************************************************/
/*! exports provided: BreastfeedingTipsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreastfeedingTipsPageModule", function() { return BreastfeedingTipsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _breastfeeding_tips_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./breastfeeding-tips-routing.module */ "./src/app/pages/content/breastfeeding-tips/breastfeeding-tips-routing.module.ts");
/* harmony import */ var _breastfeeding_tips_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./breastfeeding-tips.page */ "./src/app/pages/content/breastfeeding-tips/breastfeeding-tips.page.ts");







let BreastfeedingTipsPageModule = class BreastfeedingTipsPageModule {
};
BreastfeedingTipsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _breastfeeding_tips_routing_module__WEBPACK_IMPORTED_MODULE_5__["BreastfeedingTipsPageRoutingModule"]
        ],
        declarations: [_breastfeeding_tips_page__WEBPACK_IMPORTED_MODULE_6__["BreastfeedingTipsPage"]]
    })
], BreastfeedingTipsPageModule);



/***/ }),

/***/ "./src/app/pages/content/breastfeeding-tips/breastfeeding-tips.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/content/breastfeeding-tips/breastfeeding-tips.page.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRlbnQvYnJlYXN0ZmVlZGluZy10aXBzL2JyZWFzdGZlZWRpbmctdGlwcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/content/breastfeeding-tips/breastfeeding-tips.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/content/breastfeeding-tips/breastfeeding-tips.page.ts ***!
  \*****************************************************************************/
/*! exports provided: BreastfeedingTipsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreastfeedingTipsPage", function() { return BreastfeedingTipsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let BreastfeedingTipsPage = class BreastfeedingTipsPage {
    constructor() { }
    ngOnInit() {
    }
};
BreastfeedingTipsPage.ctorParameters = () => [];
BreastfeedingTipsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-breastfeeding-tips',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./breastfeeding-tips.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/breastfeeding-tips/breastfeeding-tips.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./breastfeeding-tips.page.scss */ "./src/app/pages/content/breastfeeding-tips/breastfeeding-tips.page.scss")).default]
    })
], BreastfeedingTipsPage);



/***/ })

}]);
//# sourceMappingURL=content-breastfeeding-tips-breastfeeding-tips-module-es2015.js.map