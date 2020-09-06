(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-postpartum-manual-postpartum-manual-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/postpartum-manual/postpartum-manual.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/postpartum-manual/postpartum-manual.page.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>postpartum_manual</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/content/postpartum-manual/postpartum-manual-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/content/postpartum-manual/postpartum-manual-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: PostpartumManualPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostpartumManualPageRoutingModule", function() { return PostpartumManualPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _postpartum_manual_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./postpartum-manual.page */ "./src/app/pages/content/postpartum-manual/postpartum-manual.page.ts");




const routes = [
    {
        path: '',
        component: _postpartum_manual_page__WEBPACK_IMPORTED_MODULE_3__["PostpartumManualPage"]
    }
];
let PostpartumManualPageRoutingModule = class PostpartumManualPageRoutingModule {
};
PostpartumManualPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PostpartumManualPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/content/postpartum-manual/postpartum-manual.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/content/postpartum-manual/postpartum-manual.module.ts ***!
  \*****************************************************************************/
/*! exports provided: PostpartumManualPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostpartumManualPageModule", function() { return PostpartumManualPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _postpartum_manual_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./postpartum-manual-routing.module */ "./src/app/pages/content/postpartum-manual/postpartum-manual-routing.module.ts");
/* harmony import */ var _postpartum_manual_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./postpartum-manual.page */ "./src/app/pages/content/postpartum-manual/postpartum-manual.page.ts");







let PostpartumManualPageModule = class PostpartumManualPageModule {
};
PostpartumManualPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _postpartum_manual_routing_module__WEBPACK_IMPORTED_MODULE_5__["PostpartumManualPageRoutingModule"]
        ],
        declarations: [_postpartum_manual_page__WEBPACK_IMPORTED_MODULE_6__["PostpartumManualPage"]]
    })
], PostpartumManualPageModule);



/***/ }),

/***/ "./src/app/pages/content/postpartum-manual/postpartum-manual.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/content/postpartum-manual/postpartum-manual.page.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRlbnQvcG9zdHBhcnR1bS1tYW51YWwvcG9zdHBhcnR1bS1tYW51YWwucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/content/postpartum-manual/postpartum-manual.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/content/postpartum-manual/postpartum-manual.page.ts ***!
  \***************************************************************************/
/*! exports provided: PostpartumManualPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostpartumManualPage", function() { return PostpartumManualPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let PostpartumManualPage = class PostpartumManualPage {
    constructor() { }
    ngOnInit() {
    }
};
PostpartumManualPage.ctorParameters = () => [];
PostpartumManualPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-postpartum-manual',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./postpartum-manual.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/postpartum-manual/postpartum-manual.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./postpartum-manual.page.scss */ "./src/app/pages/content/postpartum-manual/postpartum-manual.page.scss")).default]
    })
], PostpartumManualPage);



/***/ })

}]);
//# sourceMappingURL=content-postpartum-manual-postpartum-manual-module-es2015.js.map