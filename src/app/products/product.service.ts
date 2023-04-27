import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import behaviour subject(bs)-it is a class
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //object create for bs.

  search=new BehaviorSubject("")    //string ayt access akande so we gave an empty string ""

  constructor(private http:HttpClient) {

   }
   //api call to view all products
   //we need a method
   viewAllProduct(){
   return this.http.get('http://localhost:3000/products')
   }
   //api call to view single product

   viewProduct(productId:any){
    return this.http.get('http://localhost:3000/products/'+productId)

   }
   //dlete product
   DeletProductComponent(productId:any){
    return this.http.delete('http://localhost:3000/products/'+productId)

   }
   //api for add new product
   addNewProduct(productData:any){
    return this.http.post('http://localhost:3000/products/',productData)
   }
   //api call to update product
   updateProduct(productId:any,productData:any){
    return this.http.put('http://localhost:3000/products/'+productId,productData)
   }
}
