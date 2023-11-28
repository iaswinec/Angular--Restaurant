import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrl: './view-product.component.css'
})
export class ViewProductComponent implements OnInit {
  pid:any
  pdata:any
  constructor(private ar:ActivatedRoute, private ps:ProductService){}
  
  ngOnInit(): void {
    this.ar.params.subscribe((data:any)=>{
      console.log(data);
      this.pid=data["id"]   //pid stores the product id. Retrieved from url    
    })
    this.ps.viewProduct(this.pid).subscribe((item:any)=>{
      console.log(item);
      this.pdata=item
    })

  }


}
