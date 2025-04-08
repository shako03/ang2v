import { Component } from '@angular/core';
import { User } from '../Models/user';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from '../services/api.service';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  constructor(private httpUsers : UserService){}

  ngOnInit(){
    this.httpUsers.getAllUsers().subscribe((resp : any) => {
      console.log(resp.data)
      this.renderUser(resp.data)
    })
    this.httpUsers.getAllProducts().subscribe((resp : any) => {
      this.getProducts(resp)
    })
  }

  renderUser(arr : User[]){
    this.userArr = arr
  }


  getProducts(arr : any){
    console.log(arr)
  }


  userArr : User[] = []
    

  

}
