import {ProductInterface} from './product.interface';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    templateUrl: 'app/products/product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
    pageTitle: string = 'Product Detail';
    product: ProductInterface;
    constructor(private route: ActivatedRoute, private router: Router) {
    }
    ngOnInit(): void {
        this.pageTitle += `: ${this.route.snapshot.params.id}`;
    }
    onBack(): void {
        this.router.navigate(['/products']);
    }
}