import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { productInterface } from 'src/app/Interface/products';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-admin-products-page',
  templateUrl: './admin-products-page.component.html',
  styleUrls: ['./admin-products-page.component.css']
})
export class AdminProductsPageComponent implements OnInit {
active:boolean=false
  constructor(private router:Router, private route:ActivatedRoute, private productservice:ProductsService) { }
  products:productInterface[]=[]
  ngOnInit(): void {
    this.products = this.productservice.getproducts()
  }

  addproduct(){
    this.router.navigate(['admin/addproduct'])
  }

  editproduct(id:string){
    this.router.navigate(['admin/edit/'+id])
  }

  activate(status:boolean){
    this.active = status

    return this.active
  }

}
