import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {
status:boolean=false
  constructor() { }

  ngOnInit(): void {
  }

  active(status:boolean){
    this.status=status
    return this.status
  }

}
