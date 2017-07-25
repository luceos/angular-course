import {Component} from '@angular/core';
import {ProductService} from './products/product.service';
import {Router} from '@angular/router';

@Component({
    selector: 'pm-app',
    providers: [ProductService],
    template: `
        <div>
            <nav class="navbar navbar-default navbar-fixed-top">
                <div class="container">
                    <a class="navbar-brand">{{ pageTitle }}</a>
                    <ul class="nav navbar-nav">
                        <li [ngClass]="{'active': isActive('/welcome')}"><a [routerLink]="['/welcome']">
                            <i class="fa fa-home"></i> home</a>
                        </li>
                        <li [ngClass]="{'active': isActive('/products') || isActive('/product/', false)}">
                            <a [routerLink]="['/products']"><i class="fa fa-archive"></i> products</a>
                        </li>
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

    constructor(private router: Router) {
    }

    isActive(url: string, exact?: boolean): boolean {
        return this.router.isActive(url, exact ? exact : true);
    }
}
