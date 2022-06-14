import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { productInterface } from 'src/app/Interface/products';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
id:string=''
  form!:FormGroup
  product!:any
  constructor(private productservice:ProductsService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.id = params['id']
      this.product = this.productservice.getproduct(this.id)
    })
    this.form = new FormGroup({
      'name': new FormControl(this.product.name, Validators.required),
      'brand': new FormControl(this.product.brand, Validators.required),
      'price': new FormControl(this.product.price, Validators.required),
      'quantity': new FormControl(null, Validators.required),
      'category': new FormControl(this.product.category,[ Validators.required, this.selectValidator]),
      'description': new FormControl(this.product.description, Validators.required),
      'specification': new FormControl(this.product.specification, Validators.required),
      'image': new FormControl(this.product.image, Validators.required),
      'thumbnail1': new FormControl(this.product.thumbnail_1, Validators.required),
      'thumbnail2': new FormControl(this.product.thumbnail_2, Validators.required),
      'thumbnail3': new FormControl(this.product.thumbnail_3, Validators.required),
    })
  }

  editproduct(){
    this.productservice.updateproduct(this.form.value,this.id)
  }

  selectValidator(control: FormControl): {[s:string]:boolean} | null
  {
    if (control.value==='select'){
      return {'notAllowed': true}
    }
    return null
  }

  canDeactivate():boolean | Observable<boolean> | Promise<boolean>{
    if(this.form.dirty){
      return confirm('Do you want to discard the changes')
    }
    else{
      return true
    }
  }

}

