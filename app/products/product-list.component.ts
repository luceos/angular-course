import { Component, OnInit } from '@angular/core';
import { ProductInterface } from './product.interface';

@Component({
    selector: 'pm-products',
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: ['app/products/product-list.component.css']
})

export class ProductListComponent implements OnInit {
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = true;
    listFilter: string = 'programming';
    products: ProductInterface[] = [
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
    ngOnInit(): void {
        // ..
    }
    toggleImage() {
        this.showImage = !this.showImage;
    }
}