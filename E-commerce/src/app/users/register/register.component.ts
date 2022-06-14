import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
form!: FormGroup
users:any[]=[]
  constructor(private userservice :UsersService, private router:Router) { }

  ngOnInit(): void {
    this.form= new FormGroup({
      'fname': new FormControl(null, Validators.required),
      'sname': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'phone_no': new FormControl(null, [Validators.required,  Validators.maxLength(10), Validators.pattern(/^[0-9]\d*$/)]),
      'gender': new FormControl('select',  [Validators.required, this.selectValidator]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(8)]),
      'role': new FormControl('customer')
    })
  }

  selectValidator(control: FormControl): {[s:string]:boolean} | null
  {
    if (control.value==='select'){
      return {'notAllowed': true}
    }
    return null
  }

  signup(){
   this.userservice.registerUser(this.form.value)
    this.router.navigate(['home'])
  }

  canDeactivate():boolean | Observable<boolean> | Promise<boolean>{
    if(this.form.dirty){
      return confirm('Do you want to cancel your registration?')
    }
    else{
      return true
    }
  }

}
