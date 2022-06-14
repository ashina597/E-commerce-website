import { Injectable } from '@angular/core';
import { userInterface } from '../Interface/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  loggedin:boolean=false
  user!:userInterface
 users:userInterface[]=[
   {
    user_id: '3312',
    First_name: 'Ashina',
    Surname: 'Barasa',
    email: 'ashina@gmail.com',
    role: 'customer',
    phone_number: '0782773978',
    gender: 'female',
    password: '12345'
   },

   {
    user_id: '43826',
    First_name: 'Leila',
    Surname: 'Queen',
    email: 'queen@gmail.com',
    role: 'admin',
    phone_number: '0704987378',
    gender: 'female',
    password: '123456789'
   }
 ]
  constructor() { }

  login(user:any){
  const User = this.users.find(x=>x.email===user.email && x.password===user.password)
  if (User){
    this.loggedin = true
  }
    return User
  }

  registerUser(user:userInterface){
    this.users.push(user)
    this.loggedin = true
  }

  getUsers(){
    return this.users
  }

  isloggedin(){
    return this.loggedin
  }
}
