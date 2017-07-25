import { Pipe, PipeTransform } from '@angular/core';
import { ProductInterface } from './product.interface';

@Pipe({
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {
    transform(value: ProductInterface[], filter: string): ProductInterface[] {
        return filter ?
            value.filter(
                (product: ProductInterface) => product.name.toLocaleLowerCase().indexOf(filter.toLocaleLowerCase()) !== -1
            ) :
            value;
    }
}