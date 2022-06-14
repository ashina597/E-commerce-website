import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { productInterface } from 'src/app/Interface/products';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
id:string=''
product!:any
  constructor(private productservice:ProductsService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.id = params['id']
      this.product = this.productservice.getproduct(this.id)
    })
  }

  addtocart(id:string){
    this.productservice.addtocart(id)
    this.router.navigate(['home'])
  }

}
