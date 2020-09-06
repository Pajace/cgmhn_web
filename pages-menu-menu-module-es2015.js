(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-menu-menu-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/menu.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/menu.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-menu contentId=\"content\">\n  <ion-header>\n    <ion-toolbar color='primary'>\n      <ion-title>menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n\n    <div *ngFor=\"let p of pages\">\n\n      <!-- side menu header -->\n      <ion-menu-toggle *ngIf=\"isHeader(p)\">\n        <ion-item [routerLink]=\"p.url\" routerDirection=\"root\" routerLinkActive=\"active\">\n          <ion-icon [name]=\"p.icon\" slot=\"start\"></ion-icon>\n          <ion-label> {{ p.title }} </ion-label>\n        </ion-item>\n      </ion-menu-toggle>\n\n      <!-- 1st layer category -->\n      <ion-item button *ngIf=\"isCategory(p)\" (click)=\"p.isOpen = !p.isOpen\" [class.active-parent]=\"p.isOpen\"\n        detail=\"false\">\n        <ion-icon slot=\"start\" name=\"arrow-forward\" *ngIf=\"!p.isOpen\"></ion-icon>\n        <ion-icon slot=\"start\" name=\"arrow-down\" *ngIf=\"p.isOpen\"></ion-icon>\n        <ion-label> {{ p.title }} </ion-label>\n      </ion-item>\n\n      <!-- 1st layer content -->\n      <ion-list *ngIf=\"p.isOpen\">\n        <ion-menu-toggle>\n          <ng-container *ngFor=\"let sub2 of p.children\">\n            <ion-item *ngIf=\"this.isContent(sub2)\" class=\"sub2-item\" [routerLink]=\"sub2.url\" rouerDirection=\"root\"\n              routerLinkActive=\"active\">\n              <ion-icon [name]=\"sub2.icon\" slot=\"start\"></ion-icon>\n              <ion-label> {{ sub2.title }} </ion-label>\n            </ion-item>\n          </ng-container>\n        </ion-menu-toggle>\n\n        <!-- 2nd layer category -->\n        <ng-container *ngFor=\"let sub2 of p.children\">\n          <ion-item class=\"sub2-item\" button *ngIf=\"isCategory(sub2)\" (click)=\"sub2.isOpen = !sub2.isOpen\"\n            [class.active-parent]=\"sub2.isOpen\" detail=\"false\">\n            <ion-icon slot=\"start\" name=\"arrow-forward\" *ngIf=\"!sub2.isOpen\"></ion-icon>\n            <ion-icon slot=\"start\" name=\"arrow-down\" *ngIf=\"sub2.isOpen\"></ion-icon>\n            <ion-label> {{ sub2.title }} </ion-label>\n          </ion-item>\n\n          <!-- 2nd layer content  -->\n          <ion-list *ngIf=\"sub2.isOpen\">\n            <ion-menu-toggle>\n              <ng-container *ngFor=\"let sub3 of sub2.children\">\n                <ion-item *ngIf=\"this.isContent(sub3)\" class=\"sub3-item\" [routerLink]=\"sub3.url\" rouerDirection=\"root\"\n                  routerLinkActive=\"active\">\n                  <ion-icon [name]=\"sub3.icon\" slot=\"start\"></ion-icon>\n                  <ion-label> {{ sub3.title }} </ion-label>\n                </ion-item>\n              </ng-container>\n            </ion-menu-toggle>\n          </ion-list>\n\n        </ng-container>\n        \n      </ion-list>\n\n    </div>\n\n  </ion-content>\n\n</ion-menu>\n\n<ion-router-outlet id=\"content\" main></ion-router-outlet>");

/***/ }),

/***/ "./src/app/pages/menu/menu-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/menu/menu-routing.module.ts ***!
  \***************************************************/
/*! exports provided: MenuPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageRoutingModule", function() { return MenuPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.page */ "./src/app/pages/menu/menu.page.ts");




const routes = [
    {
        path: '',
        redirectTo: '/menu/main',
        pathMatch: 'full',
    },
    {
        path: '',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_3__["MenuPage"],
        children: [
            {
                path: 'main',
                loadChildren: () => __webpack_require__.e(/*! import() | main-main-module */ "main-main-module").then(__webpack_require__.bind(null, /*! ../main/main.module */ "./src/app/pages/main/main.module.ts"))
                    .then(m => m.MainPageModule)
            },
            {
                path: 'why-need-breastfeeding',
                loadChildren: () => __webpack_require__.e(/*! import() | content-why-need-breastfeeding-why-need-breastfeeding-module */ "content-why-need-breastfeeding-why-need-breastfeeding-module").then(__webpack_require__.bind(null, /*! ../content/why-need-breastfeeding/why-need-breastfeeding.module */ "./src/app/pages/content/why-need-breastfeeding/why-need-breastfeeding.module.ts"))
                    .then(m => m.WhyNeedBreastfeedingPageModule)
            },
            {
                path: 'benefit-breastfeeding',
                loadChildren: () => __webpack_require__.e(/*! import() | content-benefit-breastfeeding-benefit-breastfeeding-module */ "content-benefit-breastfeeding-benefit-breastfeeding-module").then(__webpack_require__.bind(null, /*! ../content/benefit-breastfeeding/benefit-breastfeeding.module */ "./src/app/pages/content/benefit-breastfeeding/benefit-breastfeeding.module.ts"))
                    .then(m => m.BenefitBreastfeedingPageModule)
            },
            {
                path: 'how-breastfeeding',
                loadChildren: () => __webpack_require__.e(/*! import() | content-how-breastfeeding-how-breastfeeding-module */ "content-how-breastfeeding-how-breastfeeding-module").then(__webpack_require__.bind(null, /*! ../content/how-breastfeeding/how-breastfeeding.module */ "./src/app/pages/content/how-breastfeeding/how-breastfeeding.module.ts"))
                    .then(m => m.HowBreastfeedingPageModule)
            },
            {
                path: 'success-milk-secretion',
                loadChildren: () => __webpack_require__.e(/*! import() | content-success-milk-secretion-success-milk-secretion-module */ "content-success-milk-secretion-success-milk-secretion-module").then(__webpack_require__.bind(null, /*! ../content/success-milk-secretion/success-milk-secretion.module */ "./src/app/pages/content/success-milk-secretion/success-milk-secretion.module.ts"))
                    .then(m => m.SuccessMilkSecretionPageModule)
            },
            {
                path: 'first-breastfeeding',
                loadChildren: () => __webpack_require__.e(/*! import() | content-first-breastfeeding-first-breastfeeding-module */ "content-first-breastfeeding-first-breastfeeding-module").then(__webpack_require__.bind(null, /*! ../content/first-breastfeeding/first-breastfeeding.module */ "./src/app/pages/content/first-breastfeeding/first-breastfeeding.module.ts"))
                    .then(m => m.FirstBreastfeedingPageModule)
            },
            {
                path: 'postpartum-touch',
                loadChildren: () => __webpack_require__.e(/*! import() | content-postpartum-touch-postpartum-touch-module */ "content-postpartum-touch-postpartum-touch-module").then(__webpack_require__.bind(null, /*! ../content/postpartum-touch/postpartum-touch.module */ "./src/app/pages/content/postpartum-touch/postpartum-touch.module.ts"))
                    .then(m => m.PostpartumTouchPageModule)
            },
            {
                path: 'mother-infant-in-room',
                loadChildren: () => __webpack_require__.e(/*! import() | content-mother-infant-in-room-mother-infant-in-room-module */ "content-mother-infant-in-room-mother-infant-in-room-module").then(__webpack_require__.bind(null, /*! ../content/mother-infant-in-room/mother-infant-in-room.module */ "./src/app/pages/content/mother-infant-in-room/mother-infant-in-room.module.ts"))
                    .then(m => m.MotherInfantInRoomPageModule)
            },
            {
                path: 'ldr-manual',
                loadChildren: () => __webpack_require__.e(/*! import() | content-ldr-manual-ldr-manual-module */ "content-ldr-manual-ldr-manual-module").then(__webpack_require__.bind(null, /*! ../content/ldr-manual/ldr-manual.module */ "./src/app/pages/content/ldr-manual/ldr-manual.module.ts"))
                    .then(m => m.LdrManualPageModule)
            },
            {
                path: 'mother-infant-root',
                loadChildren: () => __webpack_require__.e(/*! import() | content-mother-infant-root-mother-infant-root-module */ "content-mother-infant-root-mother-infant-root-module").then(__webpack_require__.bind(null, /*! ../content/mother-infant-root/mother-infant-root.module */ "./src/app/pages/content/mother-infant-root/mother-infant-root.module.ts"))
                    .then(m => m.MotherInfantRootPageModule)
            },
            {
                path: 'breastfeeding-tips',
                loadChildren: () => __webpack_require__.e(/*! import() | content-breastfeeding-tips-breastfeeding-tips-module */ "content-breastfeeding-tips-breastfeeding-tips-module").then(__webpack_require__.bind(null, /*! ../content/breastfeeding-tips/breastfeeding-tips.module */ "./src/app/pages/content/breastfeeding-tips/breastfeeding-tips.module.ts"))
                    .then(m => m.BreastfeedingTipsPageModule)
            },
            {
                path: 'infant-want-milk',
                loadChildren: () => __webpack_require__.e(/*! import() | content-infant-want-milk-infant-want-milk-module */ "content-infant-want-milk-infant-want-milk-module").then(__webpack_require__.bind(null, /*! ../content/infant-want-milk/infant-want-milk.module */ "./src/app/pages/content/infant-want-milk/infant-want-milk.module.ts"))
                    .then(m => m.InfantWantMilkPageModule)
            },
            {
                path: 'milking-manually',
                loadChildren: () => __webpack_require__.e(/*! import() | content-milking-manually-milking-manually-module */ "content-milking-manually-milking-manually-module").then(__webpack_require__.bind(null, /*! ../content/milking-manually/milking-manually.module */ "./src/app/pages/content/milking-manually/milking-manually.module.ts"))
                    .then(m => m.MilkingManuallyPageModule)
            },
            {
                path: 'feeding-method',
                loadChildren: () => __webpack_require__.e(/*! import() | content-feeding-method-feeding-method-module */ "content-feeding-method-feeding-method-module").then(__webpack_require__.bind(null, /*! ../content/feeding-method/feeding-method.module */ "./src/app/pages/content/feeding-method/feeding-method.module.ts"))
                    .then(m => m.FeedingMethodPageModule)
            },
            {
                path: 'postpartum-manual',
                loadChildren: () => __webpack_require__.e(/*! import() | content-postpartum-manual-postpartum-manual-module */ "content-postpartum-manual-postpartum-manual-module").then(__webpack_require__.bind(null, /*! ../content/postpartum-manual/postpartum-manual.module */ "./src/app/pages/content/postpartum-manual/postpartum-manual.module.ts"))
                    .then(m => m.PostpartumManualPageModule)
            },
            {
                path: 'milk-recipes',
                loadChildren: () => __webpack_require__.e(/*! import() | content-milk-recipes-milk-recipes-module */ "content-milk-recipes-milk-recipes-module").then(__webpack_require__.bind(null, /*! ../content/milk-recipes/milk-recipes.module */ "./src/app/pages/content/milk-recipes/milk-recipes.module.ts"))
                    .then(m => m.MilkRecipesPageModule)
            },
            {
                path: 'how-store-breast-milk',
                loadChildren: () => __webpack_require__.e(/*! import() | content-how-store-breast-milk-how-store-breast-milk-module */ "content-how-store-breast-milk-how-store-breast-milk-module").then(__webpack_require__.bind(null, /*! ../content/how-store-breast-milk/how-store-breast-milk.module */ "./src/app/pages/content/how-store-breast-milk/how-store-breast-milk.module.ts"))
                    .then(m => m.HowStoreBreastMilkPageModule)
            },
            {
                path: 'epds',
                loadChildren: () => __webpack_require__.e(/*! import() | content-epds-epds-module */ "content-epds-epds-module").then(__webpack_require__.bind(null, /*! ../content/epds/epds.module */ "./src/app/pages/content/epds/epds.module.ts"))
                    .then(m => m.EpdsPageModule)
            },
            {
                path: 'postpartum-notice',
                loadChildren: () => __webpack_require__.e(/*! import() | content-postpartum-notice-postpartum-notice-module */ "content-postpartum-notice-postpartum-notice-module").then(__webpack_require__.bind(null, /*! ../content/postpartum-notice/postpartum-notice.module */ "./src/app/pages/content/postpartum-notice/postpartum-notice.module.ts"))
                    .then(m => m.PostpartumNoticePageModule)
            },
            {
                path: 'increase-breastfeeding-receipes',
                loadChildren: () => __webpack_require__.e(/*! import() | content-increase-breastfeeding-receipes-increase-breastfeeding-receipes-module */ "content-increase-breastfeeding-receipes-increase-breastfeeding-receipes-module").then(__webpack_require__.bind(null, /*! ../content/increase-breastfeeding-receipes/increase-breastfeeding-receipes.module */ "./src/app/pages/content/increase-breastfeeding-receipes/increase-breastfeeding-receipes.module.ts"))
                    .then(m => m.IncreaseBreastfeedingReceipesPageModule)
            },
            {
                path: 'newborns-breastfeeding-manual',
                loadChildren: () => __webpack_require__.e(/*! import() | content-newborns-breastfeeding-manual-newborns-breastfeeding-manual-module */ "content-newborns-breastfeeding-manual-newborns-breastfeeding-manual-module").then(__webpack_require__.bind(null, /*! ../content/newborns-breastfeeding-manual/newborns-breastfeeding-manual.module */ "./src/app/pages/content/newborns-breastfeeding-manual/newborns-breastfeeding-manual.module.ts"))
                    .then(m => m.NewbornsBreastfeedingManualPageModule)
            },
            {
                path: 'office-worker-breastfeeding',
                loadChildren: () => __webpack_require__.e(/*! import() | content-office-worker-breastfeeding-office-worker-breastfeeding-module */ "content-office-worker-breastfeeding-office-worker-breastfeeding-module").then(__webpack_require__.bind(null, /*! ../content/office-worker-breastfeeding/office-worker-breastfeeding.module */ "./src/app/pages/content/office-worker-breastfeeding/office-worker-breastfeeding.module.ts"))
                    .then(m => m.OfficeWorkerBreastfeedingPageModule)
            },
            {
                path: 'breastfeeding-qa',
                loadChildren: () => __webpack_require__.e(/*! import() | content-breastfeeding-qa-breastfeeding-qa-module */ "content-breastfeeding-qa-breastfeeding-qa-module").then(__webpack_require__.bind(null, /*! ../content/breastfeeding-qa/breastfeeding-qa.module */ "./src/app/pages/content/breastfeeding-qa/breastfeeding-qa.module.ts"))
                    .then(m => m.BreastfeedingQaPageModule)
            },
            {
                path: 'fips-reference',
                loadChildren: () => __webpack_require__.e(/*! import() | content-fips-reference-fips-reference-module */ "content-fips-reference-fips-reference-module").then(__webpack_require__.bind(null, /*! ../content/fips-reference/fips-reference.module */ "./src/app/pages/content/fips-reference/fips-reference.module.ts"))
                    .then(m => m.FipsReferencePageModule)
            },
        ],
    }
];
let MenuPageRoutingModule = class MenuPageRoutingModule {
};
MenuPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MenuPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/menu/menu.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/menu/menu.module.ts ***!
  \*******************************************/
/*! exports provided: MenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _menu_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-routing.module */ "./src/app/pages/menu/menu-routing.module.ts");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu.page */ "./src/app/pages/menu/menu.page.ts");







let MenuPageModule = class MenuPageModule {
};
MenuPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _menu_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenuPageRoutingModule"]
        ],
        declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"]]
    })
], MenuPageModule);



/***/ }),

/***/ "./src/app/pages/menu/menu.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/menu/menu.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".active {\n  --ion-text-color: var(--ion-color-primary);\n}\n.active ion-icon {\n  --ion-text-color-rgb: var(--ion-color-primary);\n}\n.active-parent {\n  font-weight: 500;\n}\n.sub2-item {\n  padding-left: 20px;\n}\n.sub3-item {\n  padding-left: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWVudS9tZW51LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBDQUFBO0FBQ0o7QUFDSTtFQUNJLDhDQUFBO0FBQ1I7QUFHQTtFQUNJLGdCQUFBO0FBQUo7QUFHQTtFQUNJLGtCQUFBO0FBQUo7QUFHQTtFQUNJLGtCQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tZW51L21lbnUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGl2ZSB7XHJcbiAgICAtLWlvbi10ZXh0LWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcblxyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICAgIC0taW9uLXRleHQtY29sb3ItcmdiOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hY3RpdmUtcGFyZW50IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5zdWIyLWl0ZW0ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4uc3ViMy1pdGVtIHtcclxuICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/menu/menu.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/menu/menu.page.ts ***!
  \*****************************************/
/*! exports provided: MenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPage", function() { return MenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var SideMenuType;
(function (SideMenuType) {
    SideMenuType[SideMenuType["Header"] = 0] = "Header";
    SideMenuType[SideMenuType["Category"] = 1] = "Category";
    SideMenuType[SideMenuType["Content"] = 2] = "Content";
})(SideMenuType || (SideMenuType = {}));
let MenuPage = class MenuPage {
    constructor() {
        this.pages = [
            this.createSideMenuHeader(),
            this.createCategory('生產前衛教', [
                this.createContent({ title: '為何需要母乳', url: '/menu/why-need-breastfeeding' }),
                this.createCategory('餵母乳之前的準備', [
                    this.createContent({ title: '哺餵母乳的好處', url: '/menu/benefit-breastfeeding' }),
                    this.createContent({ title: '成功哺餵母乳的步驟', url: '/menu/how-breastfeeding' }),
                    this.createContent({ title: '奶水分泌法寶', url: '/menu/success-milk-secretion' }),
                    this.createContent({ title: '哺乳初體驗', url: '/menu/first-breastfeeding' }),
                ]),
                this.createCategory('愛的接觸', [
                    this.createContent({ title: '產後立即皮膚接觸', url: '/menu/postpartum-touch' }),
                    this.createContent({ title: '親子同室', url: '/menu/mother-infant-in-room' }),
                    this.createContent({ title: '待產手冊', url: '/menu/ldr-manual' }),
                ]),
            ]),
            this.createCategory('生產後衛教', [
                this.createCategory('親子同室好處多', [
                    this.createContent({ title: '親子同室衛教手冊', url: '/menu/mother-infant-root' })
                ]),
                this.createCategory('母乳哺餵技巧', [
                    this.createContent({ title: '含上乳房有技巧', url: '/menu/breastfeeding-tips' }),
                    this.createContent({ title: '寶寶想吃奶的表現', url: '/menu/infant-want-milk' }),
                ]),
                this.createCategory('乳房充盈與脹奶知多少', [
                    this.createContent({ title: '手擠奶', url: '/menu/milking-manually' }),
                    this.createContent({ title: '親餵方式', url: '/menu/feeding-method' }),
                ]),
                this.createCategory('哺乳期間怎麼吃', [
                    this.createContent({ title: '產後衛教手冊', url: '/menu/postpartum-manual' }),
                    this.createContent({ title: '促進乳汁食譜', url: '/menu/milk-recipes' }),
                ]),
                this.createContent({ title: '母乳儲存的方法', url: '/menu/how-store-breast-milk' }),
                this.createCategory('支持團體及諮詢管道', [
                    this.createContent({ title: '衛生福利部國民健康署孕產婦關懷網站', url: '/menu/' }),
                    this.createContent({ title: '中華民國寶貝花園母乳推廣協', url: '/menu/' }),
                    this.createContent({ title: '台灣母乳協會', url: '/menu/' }),
                ]),
                this.createContent({ title: '產後憂鬱監測', url: '/menu/epds' }),
            ]),
            this.createCategory('居家哺乳需求', [
                this.createCategory('月子哺乳兩三事', [
                    this.createContent({ title: '產婦坐月子須知', url: '/menu/postpartum-notice' }),
                    this.createContent({ title: '促進乳汁食譜', url: '/menu/increase-breastfeeding-receipes' }),
                    this.createContent({ title: '新生兒困難哺乳衛教手冊', url: '/menu/newborns-breastfeeding-manual' }),
                ]),
                this.createContent({ title: '坐月子心情憂鬱', url: '/menu/epds' }),
                this.createContent({ title: '上班族持續哺乳', url: '/menu/office-worker-breastfeeding' }),
            ]),
            this.createCategory('常見問題 Q&A', [
                this.createContent({ title: '母乳哺餵常見問題', url: '/menu/breastfeeding-qa' }),
                this.createContent({ title: '哺乳互動天地', url: '/menu/fips-reference' }),
            ]),
        ];
    }
    ngOnInit() {
    }
    isCategory(item) {
        return item.type === SideMenuType.Category;
    }
    isContent(item) {
        return item.type === SideMenuType.Content;
    }
    isHeader(item) {
        return item.type === SideMenuType.Header;
    }
    createContent(data) {
        return {
            title: data.title,
            url: data.url,
            icon: 'newspaper-outline',
            isOpen: false,
            type: SideMenuType.Content,
            children: [],
        };
    }
    createCategory(title, children) {
        return {
            title,
            url: '',
            icon: '',
            isOpen: false,
            type: SideMenuType.Category,
            children,
        };
    }
    createSideMenuHeader() {
        return {
            title: '目錄',
            url: '/menu/main',
            icon: 'home',
            isOpen: false,
            type: SideMenuType.Header,
            children: [],
        };
    }
};
MenuPage.ctorParameters = () => [];
MenuPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./menu.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/menu.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./menu.page.scss */ "./src/app/pages/menu/menu.page.scss")).default]
    })
], MenuPage);



/***/ })

}]);
//# sourceMappingURL=pages-menu-menu-module-es2015.js.map