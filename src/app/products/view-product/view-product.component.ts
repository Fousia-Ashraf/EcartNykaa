import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent {
prodId:any
productData:any
  constructor(private ps:ProductService,private ar:ActivatedRoute){}
  ngOnInit():void{
    this.ar.params.subscribe((data:any)=>{
      this.prodId=data["id"]
      this.ps.viewProduct(this.prodId).subscribe((value:any)=>{
        this.productData=value
      })
      


    })

  }

}
