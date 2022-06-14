import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../Services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router, private userservice:UsersService) { }

  ngOnInit(): void {
  }

  login(){
    this.router.navigate(['/login'])
  }

  mycart(){
    this.router.navigate(['/mycart'])
  }

  home(){
    this.router.navigate(['/home'])
  }

  help(){
    this.router.navigate(['/help'])
  }
}
