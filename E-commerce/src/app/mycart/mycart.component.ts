import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { productInterface } from '../Interface/products';
import { ProductsService } from '../Services/products.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {
mycart:productInterface[]=[]
  constructor(private router:Router, private route:ActivatedRoute, private productservice:ProductsService) { }

  ngOnInit(): void {
    this.mycart = this.productservice.getcart()
  }

  remove(id:string){
    this.productservice.deleteproduct(id)

  }

  edit(id:string, quantity:number){
    this.productservice.editcart(id, quantity)
  }

  checkout(){
    this.router.navigate(['checkout'])
  }

}
