import { IProduct } from "./product";
import { Injectable } from "@angular/core";

import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap, map } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
  private productUrl : string = 'api/products/products.json'

  constructor(private http: HttpClient) {  
  }

  getProducts(): Observable<IProduct[]> {
    return  this.http.get<IProduct[]>(this.productUrl).pipe(
      tap(data => console.log('getProducts All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getProduct(id: number): Observable<IProduct> {
    return this.getProducts().pipe(
      map((data: IProduct[]) => data.find(obj => obj.productId === id))
    );
  }

  private handleError(err: HttpErrorResponse){
    let errorMessage = '';
    if (err instanceof ErrorEvent) {
      errorMessage = `An error occured: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}