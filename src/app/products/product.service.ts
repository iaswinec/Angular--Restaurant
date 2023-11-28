import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  search=new BehaviorSubject('') 
//created an object. The 'searchData' from header.ts will be received and stored here. 
// Then this data will be used by viewAllProduct component usibg dependency injection

  constructor( private http:HttpClient) { }

  viewAllProduct(){   //api to view allproducts
    return this.http.get('http://localhost:3000/products')
  }

  viewProduct(pid:any){   //to view single product
    return this.http.get('http://localhost:3000/products/'+pid)
  }

  deleteProduct(pid:any){
    return this.http.delete('http://localhost:3000/products/'+pid)
  }

  addNewProduct(pdata:any){  //add product
    return this.http.post('http://localhost:3000/products/',pdata)
  }

  editProduct(pid:any, pdata:any){  //update product
    return this.http.put('http://localhost:3000/products/'+pid,pdata)
  }

}
