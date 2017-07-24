"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ProductListComponent = (function () {
    function ProductListComponent() {
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showImage = true;
        this.listFilter = 'programming';
        this.products = [
            {
                'id': 1,
                'name': 'Java Programming',
                'code': 'JAV100',
                'releaseDate': 'January 18th, 2017',
                'description': 'Learn Java',
                'price': 2100,
                'starRating': 4.2,
                'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/86059/1285037485.png'
            },
            {
                'id': 2,
                'name': 'Python Programming',
                'code': 'PRG400',
                'releaseDate': 'August 19th, 2016',
                'description': 'Learn Python',
                'price': 1750,
                'starRating': 4.8,
                'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/213924/python1.png'
            }
        ];
    }
    ProductListComponent.prototype.ngOnInit = function () {
        // ..
    };
    ProductListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    ProductListComponent = __decorate([
        core_1.Component({
            selector: 'pm-products',
            templateUrl: 'app/products/product-list.component.html',
            styleUrls: ['app/products/product-list.component.css']
        })
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map