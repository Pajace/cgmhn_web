(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-infant-want-milk-infant-want-milk-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/infant-want-milk/infant-want-milk.page.html":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/infant-want-milk/infant-want-milk.page.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesContentInfantWantMilkInfantWantMilkPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>infant_want_milk</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/content/infant-want-milk/infant-want-milk-routing.module.ts":
    /*!***********************************************************************************!*\
      !*** ./src/app/pages/content/infant-want-milk/infant-want-milk-routing.module.ts ***!
      \***********************************************************************************/

    /*! exports provided: InfantWantMilkPageRoutingModule */

    /***/
    function srcAppPagesContentInfantWantMilkInfantWantMilkRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InfantWantMilkPageRoutingModule", function () {
        return InfantWantMilkPageRoutingModule;
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


      var _infant_want_milk_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./infant-want-milk.page */
      "./src/app/pages/content/infant-want-milk/infant-want-milk.page.ts");

      var routes = [{
        path: '',
        component: _infant_want_milk_page__WEBPACK_IMPORTED_MODULE_3__["InfantWantMilkPage"]
      }];

      var InfantWantMilkPageRoutingModule = function InfantWantMilkPageRoutingModule() {
        _classCallCheck(this, InfantWantMilkPageRoutingModule);
      };

      InfantWantMilkPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], InfantWantMilkPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/content/infant-want-milk/infant-want-milk.module.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/content/infant-want-milk/infant-want-milk.module.ts ***!
      \***************************************************************************/

    /*! exports provided: InfantWantMilkPageModule */

    /***/
    function srcAppPagesContentInfantWantMilkInfantWantMilkModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InfantWantMilkPageModule", function () {
        return InfantWantMilkPageModule;
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


      var _infant_want_milk_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./infant-want-milk-routing.module */
      "./src/app/pages/content/infant-want-milk/infant-want-milk-routing.module.ts");
      /* harmony import */


      var _infant_want_milk_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./infant-want-milk.page */
      "./src/app/pages/content/infant-want-milk/infant-want-milk.page.ts");

      var InfantWantMilkPageModule = function InfantWantMilkPageModule() {
        _classCallCheck(this, InfantWantMilkPageModule);
      };

      InfantWantMilkPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _infant_want_milk_routing_module__WEBPACK_IMPORTED_MODULE_5__["InfantWantMilkPageRoutingModule"]],
        declarations: [_infant_want_milk_page__WEBPACK_IMPORTED_MODULE_6__["InfantWantMilkPage"]]
      })], InfantWantMilkPageModule);
      /***/
    },

    /***/
    "./src/app/pages/content/infant-want-milk/infant-want-milk.page.scss":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/content/infant-want-milk/infant-want-milk.page.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesContentInfantWantMilkInfantWantMilkPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRlbnQvaW5mYW50LXdhbnQtbWlsay9pbmZhbnQtd2FudC1taWxrLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/pages/content/infant-want-milk/infant-want-milk.page.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/content/infant-want-milk/infant-want-milk.page.ts ***!
      \*************************************************************************/

    /*! exports provided: InfantWantMilkPage */

    /***/
    function srcAppPagesContentInfantWantMilkInfantWantMilkPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InfantWantMilkPage", function () {
        return InfantWantMilkPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var InfantWantMilkPage = /*#__PURE__*/function () {
        function InfantWantMilkPage() {
          _classCallCheck(this, InfantWantMilkPage);
        }

        _createClass(InfantWantMilkPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return InfantWantMilkPage;
      }();

      InfantWantMilkPage.ctorParameters = function () {
        return [];
      };

      InfantWantMilkPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-infant-want-milk',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./infant-want-milk.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/infant-want-milk/infant-want-milk.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./infant-want-milk.page.scss */
        "./src/app/pages/content/infant-want-milk/infant-want-milk.page.scss"))["default"]]
      })], InfantWantMilkPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=content-infant-want-milk-infant-want-milk-module-es5.js.map