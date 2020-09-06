(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-office-worker-breastfeeding-office-worker-breastfeeding-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/office-worker-breastfeeding/office-worker-breastfeeding.page.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/office-worker-breastfeeding/office-worker-breastfeeding.page.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>office_worker_breastfeeding</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/content/office-worker-breastfeeding/office-worker-breastfeeding-routing.module.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/content/office-worker-breastfeeding/office-worker-breastfeeding-routing.module.ts ***!
  \*********************************************************************************************************/
/*! exports provided: OfficeWorkerBreastfeedingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficeWorkerBreastfeedingPageRoutingModule", function() { return OfficeWorkerBreastfeedingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _office_worker_breastfeeding_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./office-worker-breastfeeding.page */ "./src/app/pages/content/office-worker-breastfeeding/office-worker-breastfeeding.page.ts");




const routes = [
    {
        path: '',
        component: _office_worker_breastfeeding_page__WEBPACK_IMPORTED_MODULE_3__["OfficeWorkerBreastfeedingPage"]
    }
];
let OfficeWorkerBreastfeedingPageRoutingModule = class OfficeWorkerBreastfeedingPageRoutingModule {
};
OfficeWorkerBreastfeedingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OfficeWorkerBreastfeedingPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/content/office-worker-breastfeeding/office-worker-breastfeeding.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/content/office-worker-breastfeeding/office-worker-breastfeeding.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: OfficeWorkerBreastfeedingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficeWorkerBreastfeedingPageModule", function() { return OfficeWorkerBreastfeedingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _office_worker_breastfeeding_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./office-worker-breastfeeding-routing.module */ "./src/app/pages/content/office-worker-breastfeeding/office-worker-breastfeeding-routing.module.ts");
/* harmony import */ var _office_worker_breastfeeding_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./office-worker-breastfeeding.page */ "./src/app/pages/content/office-worker-breastfeeding/office-worker-breastfeeding.page.ts");







let OfficeWorkerBreastfeedingPageModule = class OfficeWorkerBreastfeedingPageModule {
};
OfficeWorkerBreastfeedingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _office_worker_breastfeeding_routing_module__WEBPACK_IMPORTED_MODULE_5__["OfficeWorkerBreastfeedingPageRoutingModule"]
        ],
        declarations: [_office_worker_breastfeeding_page__WEBPACK_IMPORTED_MODULE_6__["OfficeWorkerBreastfeedingPage"]]
    })
], OfficeWorkerBreastfeedingPageModule);



/***/ }),

/***/ "./src/app/pages/content/office-worker-breastfeeding/office-worker-breastfeeding.page.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/content/office-worker-breastfeeding/office-worker-breastfeeding.page.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRlbnQvb2ZmaWNlLXdvcmtlci1icmVhc3RmZWVkaW5nL29mZmljZS13b3JrZXItYnJlYXN0ZmVlZGluZy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/content/office-worker-breastfeeding/office-worker-breastfeeding.page.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/content/office-worker-breastfeeding/office-worker-breastfeeding.page.ts ***!
  \***********************************************************************************************/
/*! exports provided: OfficeWorkerBreastfeedingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficeWorkerBreastfeedingPage", function() { return OfficeWorkerBreastfeedingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let OfficeWorkerBreastfeedingPage = class OfficeWorkerBreastfeedingPage {
    constructor() { }
    ngOnInit() {
    }
};
OfficeWorkerBreastfeedingPage.ctorParameters = () => [];
OfficeWorkerBreastfeedingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-office-worker-breastfeeding',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./office-worker-breastfeeding.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/office-worker-breastfeeding/office-worker-breastfeeding.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./office-worker-breastfeeding.page.scss */ "./src/app/pages/content/office-worker-breastfeeding/office-worker-breastfeeding.page.scss")).default]
    })
], OfficeWorkerBreastfeedingPage);



/***/ })

}]);
//# sourceMappingURL=content-office-worker-breastfeeding-office-worker-breastfeeding-module-es2015.js.map