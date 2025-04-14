import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAutorized = true

  login() {
    this.isAutorized = true
  }
  logOut() {
    this.isAutorized = false
  }

  isLogedIn(){
    return this.isAutorized
  }
}
