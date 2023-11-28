import { Component } from '@angular/core';
import { ProductService } from '../../products/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  searchTerm:any //to receive data from html

  constructor(private ps:ProductService){}

  searchData(event:any){
      console.log(event.target.value);
      this.searchTerm=event.target.value
      
      this.ps.search.next(this.searchTerm) 
//next is used to send data. The data will be received at BehaviourSubject variable (here 'search is the variable')  
  }

}
