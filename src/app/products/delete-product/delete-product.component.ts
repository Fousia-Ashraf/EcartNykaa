import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { ProductsRoutingModule } from '../products-routing.module';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent {

  pid:any
  constructor(private ps:ProductService,private ar:ActivatedRoute,private router:Router){}
  ngOnInit():void{
    this.ar.params.subscribe((data:any)=>{this.pid=data["id"]})
      

      this.ps.DeletProductComponent(this.pid).subscribe((item:any)=>{
        alert("Product no longer exists")
        this.router.navigateByUrl("products")
      })


    }
  }
    

  


