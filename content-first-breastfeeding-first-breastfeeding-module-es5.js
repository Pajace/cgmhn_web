(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-first-breastfeeding-first-breastfeeding-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/first-breastfeeding/first-breastfeeding.page.html":
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/first-breastfeeding/first-breastfeeding.page.html ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesContentFirstBreastfeedingFirstBreastfeedingPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>first_breastfeeding</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/content/first-breastfeeding/first-breastfeeding-routing.module.ts":
    /*!*****************************************************************************************!*\
      !*** ./src/app/pages/content/first-breastfeeding/first-breastfeeding-routing.module.ts ***!
      \*****************************************************************************************/

    /*! exports provided: FirstBreastfeedingPageRoutingModule */

    /***/
    function srcAppPagesContentFirstBreastfeedingFirstBreastfeedingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FirstBreastfeedingPageRoutingModule", function () {
        return FirstBreastfeedingPageRoutingModule;
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


      var _first_breastfeeding_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./first-breastfeeding.page */
      "./src/app/pages/content/first-breastfeeding/first-breastfeeding.page.ts");

      var routes = [{
        path: '',
        component: _first_breastfeeding_page__WEBPACK_IMPORTED_MODULE_3__["FirstBreastfeedingPage"]
      }];

      var FirstBreastfeedingPageRoutingModule = function FirstBreastfeedingPageRoutingModule() {
        _classCallCheck(this, FirstBreastfeedingPageRoutingModule);
      };

      FirstBreastfeedingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FirstBreastfeedingPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/content/first-breastfeeding/first-breastfeeding.module.ts":
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/content/first-breastfeeding/first-breastfeeding.module.ts ***!
      \*********************************************************************************/

    /*! exports provided: FirstBreastfeedingPageModule */

    /***/
    function srcAppPagesContentFirstBreastfeedingFirstBreastfeedingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FirstBreastfeedingPageModule", function () {
        return FirstBreastfeedingPageModule;
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


      var _first_breastfeeding_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./first-breastfeeding-routing.module */
      "./src/app/pages/content/first-breastfeeding/first-breastfeeding-routing.module.ts");
      /* harmony import */


      var _first_breastfeeding_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./first-breastfeeding.page */
      "./src/app/pages/content/first-breastfeeding/first-breastfeeding.page.ts");

      var FirstBreastfeedingPageModule = function FirstBreastfeedingPageModule() {
        _classCallCheck(this, FirstBreastfeedingPageModule);
      };

      FirstBreastfeedingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _first_breastfeeding_routing_module__WEBPACK_IMPORTED_MODULE_5__["FirstBreastfeedingPageRoutingModule"]],
        declarations: [_first_breastfeeding_page__WEBPACK_IMPORTED_MODULE_6__["FirstBreastfeedingPage"]]
      })], FirstBreastfeedingPageModule);
      /***/
    },

    /***/
    "./src/app/pages/content/first-breastfeeding/first-breastfeeding.page.scss":
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/content/first-breastfeeding/first-breastfeeding.page.scss ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesContentFirstBreastfeedingFirstBreastfeedingPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRlbnQvZmlyc3QtYnJlYXN0ZmVlZGluZy9maXJzdC1icmVhc3RmZWVkaW5nLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/pages/content/first-breastfeeding/first-breastfeeding.page.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/content/first-breastfeeding/first-breastfeeding.page.ts ***!
      \*******************************************************************************/

    /*! exports provided: FirstBreastfeedingPage */

    /***/
    function srcAppPagesContentFirstBreastfeedingFirstBreastfeedingPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FirstBreastfeedingPage", function () {
        return FirstBreastfeedingPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var FirstBreastfeedingPage = /*#__PURE__*/function () {
        function FirstBreastfeedingPage() {
          _classCallCheck(this, FirstBreastfeedingPage);
        }

        _createClass(FirstBreastfeedingPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FirstBreastfeedingPage;
      }();

      FirstBreastfeedingPage.ctorParameters = function () {
        return [];
      };

      FirstBreastfeedingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-first-breastfeeding',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./first-breastfeeding.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/first-breastfeeding/first-breastfeeding.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./first-breastfeeding.page.scss */
        "./src/app/pages/content/first-breastfeeding/first-breastfeeding.page.scss"))["default"]]
      })], FirstBreastfeedingPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=content-first-breastfeeding-first-breastfeeding-module-es5.js.map