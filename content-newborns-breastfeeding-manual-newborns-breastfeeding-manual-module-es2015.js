(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-newborns-breastfeeding-manual-newborns-breastfeeding-manual-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/newborns-breastfeeding-manual/newborns-breastfeeding-manual.page.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/newborns-breastfeeding-manual/newborns-breastfeeding-manual.page.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>newborns_breastfeeding_manual</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/content/newborns-breastfeeding-manual/newborns-breastfeeding-manual-routing.module.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/content/newborns-breastfeeding-manual/newborns-breastfeeding-manual-routing.module.ts ***!
  \*************************************************************************************************************/
/*! exports provided: NewbornsBreastfeedingManualPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewbornsBreastfeedingManualPageRoutingModule", function() { return NewbornsBreastfeedingManualPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _newborns_breastfeeding_manual_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newborns-breastfeeding-manual.page */ "./src/app/pages/content/newborns-breastfeeding-manual/newborns-breastfeeding-manual.page.ts");




const routes = [
    {
        path: '',
        component: _newborns_breastfeeding_manual_page__WEBPACK_IMPORTED_MODULE_3__["NewbornsBreastfeedingManualPage"]
    }
];
let NewbornsBreastfeedingManualPageRoutingModule = class NewbornsBreastfeedingManualPageRoutingModule {
};
NewbornsBreastfeedingManualPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NewbornsBreastfeedingManualPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/content/newborns-breastfeeding-manual/newborns-breastfeeding-manual.module.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/content/newborns-breastfeeding-manual/newborns-breastfeeding-manual.module.ts ***!
  \*****************************************************************************************************/
/*! exports provided: NewbornsBreastfeedingManualPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewbornsBreastfeedingManualPageModule", function() { return NewbornsBreastfeedingManualPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _newborns_breastfeeding_manual_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./newborns-breastfeeding-manual-routing.module */ "./src/app/pages/content/newborns-breastfeeding-manual/newborns-breastfeeding-manual-routing.module.ts");
/* harmony import */ var _newborns_breastfeeding_manual_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./newborns-breastfeeding-manual.page */ "./src/app/pages/content/newborns-breastfeeding-manual/newborns-breastfeeding-manual.page.ts");







let NewbornsBreastfeedingManualPageModule = class NewbornsBreastfeedingManualPageModule {
};
NewbornsBreastfeedingManualPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _newborns_breastfeeding_manual_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewbornsBreastfeedingManualPageRoutingModule"]
        ],
        declarations: [_newborns_breastfeeding_manual_page__WEBPACK_IMPORTED_MODULE_6__["NewbornsBreastfeedingManualPage"]]
    })
], NewbornsBreastfeedingManualPageModule);



/***/ }),

/***/ "./src/app/pages/content/newborns-breastfeeding-manual/newborns-breastfeeding-manual.page.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/content/newborns-breastfeeding-manual/newborns-breastfeeding-manual.page.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRlbnQvbmV3Ym9ybnMtYnJlYXN0ZmVlZGluZy1tYW51YWwvbmV3Ym9ybnMtYnJlYXN0ZmVlZGluZy1tYW51YWwucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/content/newborns-breastfeeding-manual/newborns-breastfeeding-manual.page.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/content/newborns-breastfeeding-manual/newborns-breastfeeding-manual.page.ts ***!
  \***************************************************************************************************/
/*! exports provided: NewbornsBreastfeedingManualPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewbornsBreastfeedingManualPage", function() { return NewbornsBreastfeedingManualPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let NewbornsBreastfeedingManualPage = class NewbornsBreastfeedingManualPage {
    constructor() { }
    ngOnInit() {
    }
};
NewbornsBreastfeedingManualPage.ctorParameters = () => [];
NewbornsBreastfeedingManualPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-newborns-breastfeeding-manual',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./newborns-breastfeeding-manual.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/newborns-breastfeeding-manual/newborns-breastfeeding-manual.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./newborns-breastfeeding-manual.page.scss */ "./src/app/pages/content/newborns-breastfeeding-manual/newborns-breastfeeding-manual.page.scss")).default]
    })
], NewbornsBreastfeedingManualPage);



/***/ })

}]);
//# sourceMappingURL=content-newborns-breastfeeding-manual-newborns-breastfeeding-manual-module-es2015.js.map