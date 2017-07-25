"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var product_service_1 = require("./products/product.service");
var router_1 = require("@angular/router");
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.pageTitle = 'Pony Regulatory Gravity';
    }
    AppComponent.prototype.isActive = function (url, exact) {
        return this.router.isActive(url, exact ? exact : true);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'pm-app',
            providers: [product_service_1.ProductService],
            template: "\n        <div>\n            <nav class=\"navbar navbar-default navbar-fixed-top\">\n                <div class=\"container\">\n                    <a class=\"navbar-brand\">{{ pageTitle }}</a>\n                    <ul class=\"nav navbar-nav\">\n                        <li [ngClass]=\"{'active': isActive('/welcome')}\"><a [routerLink]=\"['/welcome']\">\n                            <i class=\"fa fa-home\"></i> home</a>\n                        </li>\n                        <li [ngClass]=\"{'active': isActive('/products') || isActive('/product/', false)}\">\n                            <a [routerLink]=\"['/products']\"><i class=\"fa fa-archive\"></i> products</a>\n                        </li>\n                    </ul>\n                </div>\n            </nav>\n            <div class=\"container\">\n                <router-outlet></router-outlet>\n            </div>\n        </div>\n    "
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map