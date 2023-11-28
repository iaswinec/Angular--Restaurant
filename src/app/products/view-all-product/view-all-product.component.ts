import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrl: './view-all-product.component.css'
})
export class ViewAllProductComponent implements OnInit {

  productData:any
  filterCategory: any
  searchString:any=''
  constructor(private ps:ProductService){}

  ngOnInit():void{
      this.ps.viewAllProduct().subscribe((data:any)=>{
        this.productData=data
      })

      this.ps.search.subscribe((data:any)=>{  //access data from behaviour subject
        this.searchString=data
      })
  }

  filter(category:any){
    this.filterCategory=this.productData.filter((i:any)=>i.categoryId==category || category=="")
  }

  }

