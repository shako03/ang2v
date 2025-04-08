import { Component } from '@angular/core';
import { User } from '../Models/user';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  constructor(private httpUsers : ApiService){}

  ngOnInit(){
    this.httpUsers.getAllUsers().subscribe((resp : any) => console.log(resp))
  }



  userArr : User[] = []
    

  

}
