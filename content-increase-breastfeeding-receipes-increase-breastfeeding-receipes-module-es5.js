(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-increase-breastfeeding-receipes-increase-breastfeeding-receipes-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/increase-breastfeeding-receipes/increase-breastfeeding-receipes.page.html":
    /*!***********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/increase-breastfeeding-receipes/increase-breastfeeding-receipes.page.html ***!
      \***********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesContentIncreaseBreastfeedingReceipesIncreaseBreastfeedingReceipesPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>increase_breastfeeding_receipes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/content/increase-breastfeeding-receipes/increase-breastfeeding-receipes-routing.module.ts":
    /*!*****************************************************************************************************************!*\
      !*** ./src/app/pages/content/increase-breastfeeding-receipes/increase-breastfeeding-receipes-routing.module.ts ***!
      \*****************************************************************************************************************/

    /*! exports provided: IncreaseBreastfeedingReceipesPageRoutingModule */

    /***/
    function srcAppPagesContentIncreaseBreastfeedingReceipesIncreaseBreastfeedingReceipesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IncreaseBreastfeedingReceipesPageRoutingModule", function () {
        return IncreaseBreastfeedingReceipesPageRoutingModule;
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


      var _increase_breastfeeding_receipes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./increase-breastfeeding-receipes.page */
      "./src/app/pages/content/increase-breastfeeding-receipes/increase-breastfeeding-receipes.page.ts");

      var routes = [{
        path: '',
        component: _increase_breastfeeding_receipes_page__WEBPACK_IMPORTED_MODULE_3__["IncreaseBreastfeedingReceipesPage"]
      }];

      var IncreaseBreastfeedingReceipesPageRoutingModule = function IncreaseBreastfeedingReceipesPageRoutingModule() {
        _classCallCheck(this, IncreaseBreastfeedingReceipesPageRoutingModule);
      };

      IncreaseBreastfeedingReceipesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], IncreaseBreastfeedingReceipesPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/content/increase-breastfeeding-receipes/increase-breastfeeding-receipes.module.ts":
    /*!*********************************************************************************************************!*\
      !*** ./src/app/pages/content/increase-breastfeeding-receipes/increase-breastfeeding-receipes.module.ts ***!
      \*********************************************************************************************************/

    /*! exports provided: IncreaseBreastfeedingReceipesPageModule */

    /***/
    function srcAppPagesContentIncreaseBreastfeedingReceipesIncreaseBreastfeedingReceipesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IncreaseBreastfeedingReceipesPageModule", function () {
        return IncreaseBreastfeedingReceipesPageModule;
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


      var _increase_breastfeeding_receipes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./increase-breastfeeding-receipes-routing.module */
      "./src/app/pages/content/increase-breastfeeding-receipes/increase-breastfeeding-receipes-routing.module.ts");
      /* harmony import */


      var _increase_breastfeeding_receipes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./increase-breastfeeding-receipes.page */
      "./src/app/pages/content/increase-breastfeeding-receipes/increase-breastfeeding-receipes.page.ts");

      var IncreaseBreastfeedingReceipesPageModule = function IncreaseBreastfeedingReceipesPageModule() {
        _classCallCheck(this, IncreaseBreastfeedingReceipesPageModule);
      };

      IncreaseBreastfeedingReceipesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _increase_breastfeeding_receipes_routing_module__WEBPACK_IMPORTED_MODULE_5__["IncreaseBreastfeedingReceipesPageRoutingModule"]],
        declarations: [_increase_breastfeeding_receipes_page__WEBPACK_IMPORTED_MODULE_6__["IncreaseBreastfeedingReceipesPage"]]
      })], IncreaseBreastfeedingReceipesPageModule);
      /***/
    },

    /***/
    "./src/app/pages/content/increase-breastfeeding-receipes/increase-breastfeeding-receipes.page.scss":
    /*!*********************************************************************************************************!*\
      !*** ./src/app/pages/content/increase-breastfeeding-receipes/increase-breastfeeding-receipes.page.scss ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesContentIncreaseBreastfeedingReceipesIncreaseBreastfeedingReceipesPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRlbnQvaW5jcmVhc2UtYnJlYXN0ZmVlZGluZy1yZWNlaXBlcy9pbmNyZWFzZS1icmVhc3RmZWVkaW5nLXJlY2VpcGVzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/pages/content/increase-breastfeeding-receipes/increase-breastfeeding-receipes.page.ts":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/pages/content/increase-breastfeeding-receipes/increase-breastfeeding-receipes.page.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: IncreaseBreastfeedingReceipesPage */

    /***/
    function srcAppPagesContentIncreaseBreastfeedingReceipesIncreaseBreastfeedingReceipesPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IncreaseBreastfeedingReceipesPage", function () {
        return IncreaseBreastfeedingReceipesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var IncreaseBreastfeedingReceipesPage = /*#__PURE__*/function () {
        function IncreaseBreastfeedingReceipesPage() {
          _classCallCheck(this, IncreaseBreastfeedingReceipesPage);
        }

        _createClass(IncreaseBreastfeedingReceipesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return IncreaseBreastfeedingReceipesPage;
      }();

      IncreaseBreastfeedingReceipesPage.ctorParameters = function () {
        return [];
      };

      IncreaseBreastfeedingReceipesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-increase-breastfeeding-receipes',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./increase-breastfeeding-receipes.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/increase-breastfeeding-receipes/increase-breastfeeding-receipes.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./increase-breastfeeding-receipes.page.scss */
        "./src/app/pages/content/increase-breastfeeding-receipes/increase-breastfeeding-receipes.page.scss"))["default"]]
      })], IncreaseBreastfeedingReceipesPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=content-increase-breastfeeding-receipes-increase-breastfeeding-receipes-module-es5.js.map