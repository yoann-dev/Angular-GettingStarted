import { Component, OnInit } from '@angular/core';
import { IProduct } from './product'
import { ProductService } from './product.service'

@Component({
    templateUrl:  './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    showImage: boolean = false;
    errorMessage: string;
    _listFilter: string;
    get listFilter() : string {
      return this._listFilter
    }
    set listFilter(value: string) {
      this._listFilter = value;
      this.filteredProducts = this._listFilter ? this.performFilter(this.listFilter) : this.products;
    }
    filteredProducts: IProduct[];
    products: IProduct[];

    constructor(private productService : ProductService) {
    }

    ngOnInit(): void {
      this.productService.getProducts().subscribe(
        products =>  { 
          this.products = products;
          this.filteredProducts = products;
        },
        error => this.errorMessage = <any>error
      );
      this.filteredProducts = this.products;
    }

    toggleImage(): void {
      this.showImage = !this.showImage;
    }

    performFilter(filterBy: string) : IProduct[] {
      filterBy = filterBy.toLocaleLowerCase();
      return this.products.filter((product: IProduct) => 
        product.productName.toLowerCase().indexOf(filterBy) != -1)
    }

    onRatingClicked(message:string): void {
      this.pageTitle = 'Product List: ' + message;
    }
}