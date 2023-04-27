import { Component } from '@angular/core';
import { ProductService } from 'src/app/products/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  searchTerm:any
  constructor(private ps:ProductService){}
  ngOnInit():void{}


  search(event:any){
this.searchTerm=event.target.value
//searchTerm ini elladthum edkuka.

//send the data in behaviour subject
this.ps.search.next(this.searchTerm)
  }

}
