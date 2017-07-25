import {Injectable} from '@angular/core';
import {ProductInterface} from './product.interface';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()

export class ProductService {
    private url: string = 'api/products/products.json';

    constructor(private http: Http) {
    }

    public get(): Observable<ProductInterface[]> {
        return this.http.get(this.url)
            // .do((response: Response) => console.log(response))
            .map((response: Response) => <ProductInterface[]> response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);

        return Observable.throw(error.json().error || 'Something went wrong while downloading services');
    }
}
