import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrl: './delete-product.component.css'
})
export class DeleteProductComponent implements OnInit {

    pid:any
  constructor(private ar:ActivatedRoute, private ps:ProductService, private router:Router){}

  ngOnInit():void{
    this.ar.params.subscribe((data:any)=>{
      this.pid=data["id"]
    })
    
  this.ps.deleteProduct(this.pid).subscribe((item)=>{
    alert("item deleted")
    this.router.navigateByUrl("products")
  })
  }

}
