(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-postpartum-notice-postpartum-notice-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/postpartum-notice/postpartum-notice.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/postpartum-notice/postpartum-notice.page.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>postpartum_notice</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/content/postpartum-notice/postpartum-notice-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/content/postpartum-notice/postpartum-notice-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: PostpartumNoticePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostpartumNoticePageRoutingModule", function() { return PostpartumNoticePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _postpartum_notice_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./postpartum-notice.page */ "./src/app/pages/content/postpartum-notice/postpartum-notice.page.ts");




const routes = [
    {
        path: '',
        component: _postpartum_notice_page__WEBPACK_IMPORTED_MODULE_3__["PostpartumNoticePage"]
    }
];
let PostpartumNoticePageRoutingModule = class PostpartumNoticePageRoutingModule {
};
PostpartumNoticePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PostpartumNoticePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/content/postpartum-notice/postpartum-notice.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/content/postpartum-notice/postpartum-notice.module.ts ***!
  \*****************************************************************************/
/*! exports provided: PostpartumNoticePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostpartumNoticePageModule", function() { return PostpartumNoticePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _postpartum_notice_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./postpartum-notice-routing.module */ "./src/app/pages/content/postpartum-notice/postpartum-notice-routing.module.ts");
/* harmony import */ var _postpartum_notice_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./postpartum-notice.page */ "./src/app/pages/content/postpartum-notice/postpartum-notice.page.ts");







let PostpartumNoticePageModule = class PostpartumNoticePageModule {
};
PostpartumNoticePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _postpartum_notice_routing_module__WEBPACK_IMPORTED_MODULE_5__["PostpartumNoticePageRoutingModule"]
        ],
        declarations: [_postpartum_notice_page__WEBPACK_IMPORTED_MODULE_6__["PostpartumNoticePage"]]
    })
], PostpartumNoticePageModule);



/***/ }),

/***/ "./src/app/pages/content/postpartum-notice/postpartum-notice.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/content/postpartum-notice/postpartum-notice.page.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRlbnQvcG9zdHBhcnR1bS1ub3RpY2UvcG9zdHBhcnR1bS1ub3RpY2UucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/content/postpartum-notice/postpartum-notice.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/content/postpartum-notice/postpartum-notice.page.ts ***!
  \***************************************************************************/
/*! exports provided: PostpartumNoticePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostpartumNoticePage", function() { return PostpartumNoticePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let PostpartumNoticePage = class PostpartumNoticePage {
    constructor() { }
    ngOnInit() {
    }
};
PostpartumNoticePage.ctorParameters = () => [];
PostpartumNoticePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-postpartum-notice',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./postpartum-notice.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/postpartum-notice/postpartum-notice.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./postpartum-notice.page.scss */ "./src/app/pages/content/postpartum-notice/postpartum-notice.page.scss")).default]
    })
], PostpartumNoticePage);



/***/ })

}]);
//# sourceMappingURL=content-postpartum-notice-postpartum-notice-module-es2015.js.map