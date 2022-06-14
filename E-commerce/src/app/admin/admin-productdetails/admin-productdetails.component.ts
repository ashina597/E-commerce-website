import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-admin-productdetails',
  templateUrl: './admin-productdetails.component.html',
  styleUrls: ['./admin-productdetails.component.css']
})
export class AdminProductdetailsComponent implements OnInit {
  id:string=''
  product!:any
    constructor(private productservice:ProductsService, private route:ActivatedRoute, private router:Router) { }

    ngOnInit(): void {
      this.route.params.subscribe((params:Params)=>{
        this.id = params['id']
        this.product = this.productservice.getproduct(this.id)
      })
    }

    editproduct(id:string){
      this.router.navigate(['admin/edit/'+id])
    }

    deleteproduct(id:string){
      this.productservice.deleteproduct(id)
      // this.router.navigate(['admin/products'])
    }

}
