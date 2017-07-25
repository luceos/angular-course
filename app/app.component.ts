import { Component } from '@angular/core';
import {ProductService} from './products/product.service';

@Component({
    selector: 'pm-app',
    providers: [ProductService],
    template: `
        <div>
            <nav class="navbar navbar-default">
                <div class="container">
                    <a class="navbar-brand">{{ pageTitle }}</a>
                    <ul class="nav navbar-nav">
                        <li><a [routerLink]="['/welcome']"><i class="fa fa-home"></i></a></li>
                        <li><a [routerLink]="['/products']"><i class="fa fa-archive"></i></a></li>
                    </ul>
                </div>
            </nav>
            <div class="container">
                <router-outlet></router-outlet>
            </div>
        </div>
    `
})

export class AppComponent {
    pageTitle: string = 'Pony Regulatory Gravity';
}
