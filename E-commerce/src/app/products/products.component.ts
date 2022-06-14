import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { productInterface } from '../Interface/products';
import { ProductsService } from '../Services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products:productInterface[]=[]
status:boolean=false
  constructor(private router: Router, private productservice:ProductsService) { }

  ngOnInit(): void {
    this.products = this.productservice.getproducts()
  }

  active(status:boolean){
    this.status=status
    return this.status
  }

  addtocart(id:string){
    this.productservice.addtocart(id)
  }

}
