import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { userInterface } from 'src/app/Interface/users';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
@ViewChild('form') form!:NgForm

  constructor(private userservice:UsersService,private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    const user = this.userservice.login(this.form.value)
    if (user){
      if(user.role==='admin'){
      this.router.navigate(['admin'])
      }
    else{
      this.router.navigate(['home'])
      }
    }
    else{
      console.log('user does not exist');

    }
  }

}
