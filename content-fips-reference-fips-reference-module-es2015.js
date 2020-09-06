(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-fips-reference-fips-reference-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/fips-reference/fips-reference.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/fips-reference/fips-reference.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>fips_reference</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/content/fips-reference/fips-reference-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/content/fips-reference/fips-reference-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: FipsReferencePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FipsReferencePageRoutingModule", function() { return FipsReferencePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _fips_reference_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fips-reference.page */ "./src/app/pages/content/fips-reference/fips-reference.page.ts");




const routes = [
    {
        path: '',
        component: _fips_reference_page__WEBPACK_IMPORTED_MODULE_3__["FipsReferencePage"]
    }
];
let FipsReferencePageRoutingModule = class FipsReferencePageRoutingModule {
};
FipsReferencePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FipsReferencePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/content/fips-reference/fips-reference.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/content/fips-reference/fips-reference.module.ts ***!
  \***********************************************************************/
/*! exports provided: FipsReferencePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FipsReferencePageModule", function() { return FipsReferencePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _fips_reference_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fips-reference-routing.module */ "./src/app/pages/content/fips-reference/fips-reference-routing.module.ts");
/* harmony import */ var _fips_reference_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fips-reference.page */ "./src/app/pages/content/fips-reference/fips-reference.page.ts");







let FipsReferencePageModule = class FipsReferencePageModule {
};
FipsReferencePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _fips_reference_routing_module__WEBPACK_IMPORTED_MODULE_5__["FipsReferencePageRoutingModule"]
        ],
        declarations: [_fips_reference_page__WEBPACK_IMPORTED_MODULE_6__["FipsReferencePage"]]
    })
], FipsReferencePageModule);



/***/ }),

/***/ "./src/app/pages/content/fips-reference/fips-reference.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/content/fips-reference/fips-reference.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRlbnQvZmlwcy1yZWZlcmVuY2UvZmlwcy1yZWZlcmVuY2UucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/content/fips-reference/fips-reference.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/content/fips-reference/fips-reference.page.ts ***!
  \*********************************************************************/
/*! exports provided: FipsReferencePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FipsReferencePage", function() { return FipsReferencePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FipsReferencePage = class FipsReferencePage {
    constructor() { }
    ngOnInit() {
    }
};
FipsReferencePage.ctorParameters = () => [];
FipsReferencePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fips-reference',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./fips-reference.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/fips-reference/fips-reference.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./fips-reference.page.scss */ "./src/app/pages/content/fips-reference/fips-reference.page.scss")).default]
    })
], FipsReferencePage);



/***/ })

}]);
//# sourceMappingURL=content-fips-reference-fips-reference-module-es2015.js.map