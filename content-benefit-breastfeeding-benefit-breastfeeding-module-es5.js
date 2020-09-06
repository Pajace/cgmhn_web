(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-benefit-breastfeeding-benefit-breastfeeding-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/benefit-breastfeeding/benefit-breastfeeding.page.html":
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/benefit-breastfeeding/benefit-breastfeeding.page.html ***!
      \***************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesContentBenefitBreastfeedingBenefitBreastfeedingPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>benefit_breastfeeding</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/content/benefit-breastfeeding/benefit-breastfeeding-routing.module.ts":
    /*!*********************************************************************************************!*\
      !*** ./src/app/pages/content/benefit-breastfeeding/benefit-breastfeeding-routing.module.ts ***!
      \*********************************************************************************************/

    /*! exports provided: BenefitBreastfeedingPageRoutingModule */

    /***/
    function srcAppPagesContentBenefitBreastfeedingBenefitBreastfeedingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BenefitBreastfeedingPageRoutingModule", function () {
        return BenefitBreastfeedingPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _benefit_breastfeeding_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./benefit-breastfeeding.page */
      "./src/app/pages/content/benefit-breastfeeding/benefit-breastfeeding.page.ts");

      var routes = [{
        path: '',
        component: _benefit_breastfeeding_page__WEBPACK_IMPORTED_MODULE_3__["BenefitBreastfeedingPage"]
      }];

      var BenefitBreastfeedingPageRoutingModule = function BenefitBreastfeedingPageRoutingModule() {
        _classCallCheck(this, BenefitBreastfeedingPageRoutingModule);
      };

      BenefitBreastfeedingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BenefitBreastfeedingPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/content/benefit-breastfeeding/benefit-breastfeeding.module.ts":
    /*!*************************************************************************************!*\
      !*** ./src/app/pages/content/benefit-breastfeeding/benefit-breastfeeding.module.ts ***!
      \*************************************************************************************/

    /*! exports provided: BenefitBreastfeedingPageModule */

    /***/
    function srcAppPagesContentBenefitBreastfeedingBenefitBreastfeedingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BenefitBreastfeedingPageModule", function () {
        return BenefitBreastfeedingPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _benefit_breastfeeding_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./benefit-breastfeeding-routing.module */
      "./src/app/pages/content/benefit-breastfeeding/benefit-breastfeeding-routing.module.ts");
      /* harmony import */


      var _benefit_breastfeeding_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./benefit-breastfeeding.page */
      "./src/app/pages/content/benefit-breastfeeding/benefit-breastfeeding.page.ts");

      var BenefitBreastfeedingPageModule = function BenefitBreastfeedingPageModule() {
        _classCallCheck(this, BenefitBreastfeedingPageModule);
      };

      BenefitBreastfeedingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _benefit_breastfeeding_routing_module__WEBPACK_IMPORTED_MODULE_5__["BenefitBreastfeedingPageRoutingModule"]],
        declarations: [_benefit_breastfeeding_page__WEBPACK_IMPORTED_MODULE_6__["BenefitBreastfeedingPage"]]
      })], BenefitBreastfeedingPageModule);
      /***/
    },

    /***/
    "./src/app/pages/content/benefit-breastfeeding/benefit-breastfeeding.page.scss":
    /*!*************************************************************************************!*\
      !*** ./src/app/pages/content/benefit-breastfeeding/benefit-breastfeeding.page.scss ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesContentBenefitBreastfeedingBenefitBreastfeedingPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRlbnQvYmVuZWZpdC1icmVhc3RmZWVkaW5nL2JlbmVmaXQtYnJlYXN0ZmVlZGluZy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/pages/content/benefit-breastfeeding/benefit-breastfeeding.page.ts":
    /*!***********************************************************************************!*\
      !*** ./src/app/pages/content/benefit-breastfeeding/benefit-breastfeeding.page.ts ***!
      \***********************************************************************************/

    /*! exports provided: BenefitBreastfeedingPage */

    /***/
    function srcAppPagesContentBenefitBreastfeedingBenefitBreastfeedingPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BenefitBreastfeedingPage", function () {
        return BenefitBreastfeedingPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var BenefitBreastfeedingPage = /*#__PURE__*/function () {
        function BenefitBreastfeedingPage() {
          _classCallCheck(this, BenefitBreastfeedingPage);
        }

        _createClass(BenefitBreastfeedingPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BenefitBreastfeedingPage;
      }();

      BenefitBreastfeedingPage.ctorParameters = function () {
        return [];
      };

      BenefitBreastfeedingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-benefit-breastfeeding',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./benefit-breastfeeding.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/benefit-breastfeeding/benefit-breastfeeding.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./benefit-breastfeeding.page.scss */
        "./src/app/pages/content/benefit-breastfeeding/benefit-breastfeeding.page.scss"))["default"]]
      })], BenefitBreastfeedingPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=content-benefit-breastfeeding-benefit-breastfeeding-module-es5.js.map