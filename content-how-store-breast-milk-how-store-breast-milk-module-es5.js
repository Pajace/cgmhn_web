(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-how-store-breast-milk-how-store-breast-milk-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/how-store-breast-milk/how-store-breast-milk.page.html":
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/how-store-breast-milk/how-store-breast-milk.page.html ***!
      \***************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesContentHowStoreBreastMilkHowStoreBreastMilkPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>how_store_breast_milk</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/content/how-store-breast-milk/how-store-breast-milk-routing.module.ts":
    /*!*********************************************************************************************!*\
      !*** ./src/app/pages/content/how-store-breast-milk/how-store-breast-milk-routing.module.ts ***!
      \*********************************************************************************************/

    /*! exports provided: HowStoreBreastMilkPageRoutingModule */

    /***/
    function srcAppPagesContentHowStoreBreastMilkHowStoreBreastMilkRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HowStoreBreastMilkPageRoutingModule", function () {
        return HowStoreBreastMilkPageRoutingModule;
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


      var _how_store_breast_milk_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./how-store-breast-milk.page */
      "./src/app/pages/content/how-store-breast-milk/how-store-breast-milk.page.ts");

      var routes = [{
        path: '',
        component: _how_store_breast_milk_page__WEBPACK_IMPORTED_MODULE_3__["HowStoreBreastMilkPage"]
      }];

      var HowStoreBreastMilkPageRoutingModule = function HowStoreBreastMilkPageRoutingModule() {
        _classCallCheck(this, HowStoreBreastMilkPageRoutingModule);
      };

      HowStoreBreastMilkPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HowStoreBreastMilkPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/content/how-store-breast-milk/how-store-breast-milk.module.ts":
    /*!*************************************************************************************!*\
      !*** ./src/app/pages/content/how-store-breast-milk/how-store-breast-milk.module.ts ***!
      \*************************************************************************************/

    /*! exports provided: HowStoreBreastMilkPageModule */

    /***/
    function srcAppPagesContentHowStoreBreastMilkHowStoreBreastMilkModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HowStoreBreastMilkPageModule", function () {
        return HowStoreBreastMilkPageModule;
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


      var _how_store_breast_milk_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./how-store-breast-milk-routing.module */
      "./src/app/pages/content/how-store-breast-milk/how-store-breast-milk-routing.module.ts");
      /* harmony import */


      var _how_store_breast_milk_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./how-store-breast-milk.page */
      "./src/app/pages/content/how-store-breast-milk/how-store-breast-milk.page.ts");

      var HowStoreBreastMilkPageModule = function HowStoreBreastMilkPageModule() {
        _classCallCheck(this, HowStoreBreastMilkPageModule);
      };

      HowStoreBreastMilkPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _how_store_breast_milk_routing_module__WEBPACK_IMPORTED_MODULE_5__["HowStoreBreastMilkPageRoutingModule"]],
        declarations: [_how_store_breast_milk_page__WEBPACK_IMPORTED_MODULE_6__["HowStoreBreastMilkPage"]]
      })], HowStoreBreastMilkPageModule);
      /***/
    },

    /***/
    "./src/app/pages/content/how-store-breast-milk/how-store-breast-milk.page.scss":
    /*!*************************************************************************************!*\
      !*** ./src/app/pages/content/how-store-breast-milk/how-store-breast-milk.page.scss ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesContentHowStoreBreastMilkHowStoreBreastMilkPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRlbnQvaG93LXN0b3JlLWJyZWFzdC1taWxrL2hvdy1zdG9yZS1icmVhc3QtbWlsay5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/pages/content/how-store-breast-milk/how-store-breast-milk.page.ts":
    /*!***********************************************************************************!*\
      !*** ./src/app/pages/content/how-store-breast-milk/how-store-breast-milk.page.ts ***!
      \***********************************************************************************/

    /*! exports provided: HowStoreBreastMilkPage */

    /***/
    function srcAppPagesContentHowStoreBreastMilkHowStoreBreastMilkPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HowStoreBreastMilkPage", function () {
        return HowStoreBreastMilkPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var HowStoreBreastMilkPage = /*#__PURE__*/function () {
        function HowStoreBreastMilkPage() {
          _classCallCheck(this, HowStoreBreastMilkPage);
        }

        _createClass(HowStoreBreastMilkPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HowStoreBreastMilkPage;
      }();

      HowStoreBreastMilkPage.ctorParameters = function () {
        return [];
      };

      HowStoreBreastMilkPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-how-store-breast-milk',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./how-store-breast-milk.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/how-store-breast-milk/how-store-breast-milk.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./how-store-breast-milk.page.scss */
        "./src/app/pages/content/how-store-breast-milk/how-store-breast-milk.page.scss"))["default"]]
      })], HowStoreBreastMilkPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=content-how-store-breast-milk-how-store-breast-milk-module-es5.js.map