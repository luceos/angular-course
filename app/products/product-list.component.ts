import {Component, OnInit} from '@angular/core';
import {ProductInterface} from './product.interface';
import {ProductService} from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: ['app/products/product-list.component.css']
})

export class ProductListComponent implements OnInit {
    pageTitle: string = 'Services';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = true;
    listFilter: string = '';
    products: ProductInterface[] = [];
    errorMessage: string = '';

    constructor(private service: ProductService) {
    }

    ngOnInit(): void {
        this.service.get()
            .subscribe(products => this.products = products, error => this.errorMessage = <any>error);
    }

    toggleImage() {
        this.showImage = !this.showImage;
    }

    onRatingClicked(message: string) {
        this.pageTitle = this.pageTitle.replace(/:.*$/, '') + ': ' + message;
    }
}
