(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-milk-recipes-milk-recipes-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/milk-recipes/milk-recipes.page.html":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/milk-recipes/milk-recipes.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesContentMilkRecipesMilkRecipesPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>milk_recipes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/content/milk-recipes/milk-recipes-routing.module.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/content/milk-recipes/milk-recipes-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: MilkRecipesPageRoutingModule */

    /***/
    function srcAppPagesContentMilkRecipesMilkRecipesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MilkRecipesPageRoutingModule", function () {
        return MilkRecipesPageRoutingModule;
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


      var _milk_recipes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./milk-recipes.page */
      "./src/app/pages/content/milk-recipes/milk-recipes.page.ts");

      var routes = [{
        path: '',
        component: _milk_recipes_page__WEBPACK_IMPORTED_MODULE_3__["MilkRecipesPage"]
      }];

      var MilkRecipesPageRoutingModule = function MilkRecipesPageRoutingModule() {
        _classCallCheck(this, MilkRecipesPageRoutingModule);
      };

      MilkRecipesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MilkRecipesPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/content/milk-recipes/milk-recipes.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/content/milk-recipes/milk-recipes.module.ts ***!
      \*******************************************************************/

    /*! exports provided: MilkRecipesPageModule */

    /***/
    function srcAppPagesContentMilkRecipesMilkRecipesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MilkRecipesPageModule", function () {
        return MilkRecipesPageModule;
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


      var _milk_recipes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./milk-recipes-routing.module */
      "./src/app/pages/content/milk-recipes/milk-recipes-routing.module.ts");
      /* harmony import */


      var _milk_recipes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./milk-recipes.page */
      "./src/app/pages/content/milk-recipes/milk-recipes.page.ts");

      var MilkRecipesPageModule = function MilkRecipesPageModule() {
        _classCallCheck(this, MilkRecipesPageModule);
      };

      MilkRecipesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _milk_recipes_routing_module__WEBPACK_IMPORTED_MODULE_5__["MilkRecipesPageRoutingModule"]],
        declarations: [_milk_recipes_page__WEBPACK_IMPORTED_MODULE_6__["MilkRecipesPage"]]
      })], MilkRecipesPageModule);
      /***/
    },

    /***/
    "./src/app/pages/content/milk-recipes/milk-recipes.page.scss":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/content/milk-recipes/milk-recipes.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesContentMilkRecipesMilkRecipesPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRlbnQvbWlsay1yZWNpcGVzL21pbGstcmVjaXBlcy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/pages/content/milk-recipes/milk-recipes.page.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/content/milk-recipes/milk-recipes.page.ts ***!
      \*****************************************************************/

    /*! exports provided: MilkRecipesPage */

    /***/
    function srcAppPagesContentMilkRecipesMilkRecipesPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MilkRecipesPage", function () {
        return MilkRecipesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var MilkRecipesPage = /*#__PURE__*/function () {
        function MilkRecipesPage() {
          _classCallCheck(this, MilkRecipesPage);
        }

        _createClass(MilkRecipesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MilkRecipesPage;
      }();

      MilkRecipesPage.ctorParameters = function () {
        return [];
      };

      MilkRecipesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-milk-recipes',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./milk-recipes.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/milk-recipes/milk-recipes.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./milk-recipes.page.scss */
        "./src/app/pages/content/milk-recipes/milk-recipes.page.scss"))["default"]]
      })], MilkRecipesPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=content-milk-recipes-milk-recipes-module-es5.js.map