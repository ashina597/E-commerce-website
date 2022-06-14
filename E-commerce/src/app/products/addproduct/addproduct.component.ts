import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
form!:FormGroup
  constructor(private productservice:ProductsService, private router:Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'brand': new FormControl(null, Validators.required),
      'price': new FormControl(null, Validators.required),
      'quantity': new FormControl(null, Validators.required),
      'category': new FormControl('select',[ Validators.required, this.selectValidator]),
      'description': new FormControl(null, Validators.required),
      'specification': new FormControl(null, Validators.required),
      'image': new FormControl(null, Validators.required),
      'thumbnail1': new FormControl(null, Validators.required),
      'thumbnail2': new FormControl(null, Validators.required),
      'thumbnail3': new FormControl(null, Validators.required),
    })
  }

  addproduct(){
    this.productservice.addproduct(this.form.value)
    this.form.reset()
    this.router.navigate(['admin/products'])
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
