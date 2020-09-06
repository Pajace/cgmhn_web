(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-success-milk-secretion-success-milk-secretion-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/success-milk-secretion/success-milk-secretion.page.html":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/success-milk-secretion/success-milk-secretion.page.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesContentSuccessMilkSecretionSuccessMilkSecretionPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>success_milk_secretion</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/content/success-milk-secretion/success-milk-secretion-routing.module.ts":
    /*!***********************************************************************************************!*\
      !*** ./src/app/pages/content/success-milk-secretion/success-milk-secretion-routing.module.ts ***!
      \***********************************************************************************************/

    /*! exports provided: SuccessMilkSecretionPageRoutingModule */

    /***/
    function srcAppPagesContentSuccessMilkSecretionSuccessMilkSecretionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SuccessMilkSecretionPageRoutingModule", function () {
        return SuccessMilkSecretionPageRoutingModule;
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


      var _success_milk_secretion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./success-milk-secretion.page */
      "./src/app/pages/content/success-milk-secretion/success-milk-secretion.page.ts");

      var routes = [{
        path: '',
        component: _success_milk_secretion_page__WEBPACK_IMPORTED_MODULE_3__["SuccessMilkSecretionPage"]
      }];

      var SuccessMilkSecretionPageRoutingModule = function SuccessMilkSecretionPageRoutingModule() {
        _classCallCheck(this, SuccessMilkSecretionPageRoutingModule);
      };

      SuccessMilkSecretionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SuccessMilkSecretionPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/content/success-milk-secretion/success-milk-secretion.module.ts":
    /*!***************************************************************************************!*\
      !*** ./src/app/pages/content/success-milk-secretion/success-milk-secretion.module.ts ***!
      \***************************************************************************************/

    /*! exports provided: SuccessMilkSecretionPageModule */

    /***/
    function srcAppPagesContentSuccessMilkSecretionSuccessMilkSecretionModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SuccessMilkSecretionPageModule", function () {
        return SuccessMilkSecretionPageModule;
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


      var _success_milk_secretion_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./success-milk-secretion-routing.module */
      "./src/app/pages/content/success-milk-secretion/success-milk-secretion-routing.module.ts");
      /* harmony import */


      var _success_milk_secretion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./success-milk-secretion.page */
      "./src/app/pages/content/success-milk-secretion/success-milk-secretion.page.ts");

      var SuccessMilkSecretionPageModule = function SuccessMilkSecretionPageModule() {
        _classCallCheck(this, SuccessMilkSecretionPageModule);
      };

      SuccessMilkSecretionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _success_milk_secretion_routing_module__WEBPACK_IMPORTED_MODULE_5__["SuccessMilkSecretionPageRoutingModule"]],
        declarations: [_success_milk_secretion_page__WEBPACK_IMPORTED_MODULE_6__["SuccessMilkSecretionPage"]]
      })], SuccessMilkSecretionPageModule);
      /***/
    },

    /***/
    "./src/app/pages/content/success-milk-secretion/success-milk-secretion.page.scss":
    /*!***************************************************************************************!*\
      !*** ./src/app/pages/content/success-milk-secretion/success-milk-secretion.page.scss ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesContentSuccessMilkSecretionSuccessMilkSecretionPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRlbnQvc3VjY2Vzcy1taWxrLXNlY3JldGlvbi9zdWNjZXNzLW1pbGstc2VjcmV0aW9uLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/pages/content/success-milk-secretion/success-milk-secretion.page.ts":
    /*!*************************************************************************************!*\
      !*** ./src/app/pages/content/success-milk-secretion/success-milk-secretion.page.ts ***!
      \*************************************************************************************/

    /*! exports provided: SuccessMilkSecretionPage */

    /***/
    function srcAppPagesContentSuccessMilkSecretionSuccessMilkSecretionPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SuccessMilkSecretionPage", function () {
        return SuccessMilkSecretionPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var SuccessMilkSecretionPage = /*#__PURE__*/function () {
        function SuccessMilkSecretionPage() {
          _classCallCheck(this, SuccessMilkSecretionPage);
        }

        _createClass(SuccessMilkSecretionPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SuccessMilkSecretionPage;
      }();

      SuccessMilkSecretionPage.ctorParameters = function () {
        return [];
      };

      SuccessMilkSecretionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-success-milk-secretion',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./success-milk-secretion.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/success-milk-secretion/success-milk-secretion.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./success-milk-secretion.page.scss */
        "./src/app/pages/content/success-milk-secretion/success-milk-secretion.page.scss"))["default"]]
      })], SuccessMilkSecretionPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=content-success-milk-secretion-success-milk-secretion-module-es5.js.map