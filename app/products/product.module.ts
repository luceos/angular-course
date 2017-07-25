import {NgModule} from '@angular/core';
import {ProductListComponent} from './product-list.component';
import {ProductDetailComponent} from './product-detail.component';
import {ProductGuardService} from './product-guard.service';
import {ProductFilterPipe} from './product-filter.pipe';
import {ProductService} from './product.service';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forRoot([
            {path: 'product/:id', component: ProductDetailComponent, canActivate: [ProductGuardService]},
            {path: 'products', component: ProductListComponent},
        ])
    ],
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        ProductFilterPipe
    ],
    providers: [ProductGuardService, ProductService]
})

export class ProductModule {}