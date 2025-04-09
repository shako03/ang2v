import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { User } from '../Models/user';
import { CommonModule } from '@angular/common';
import { CommonFunctionService } from '../services/common-function.service';
import { ApiService } from '../services/api.service';
import { UserService } from '../services/user.service';
// import { User } from '../Models/user';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterModule, CommonModule,],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {



  constructor(private rout: ActivatedRoute,
    private commonFunction: CommonFunctionService,
    private api: UserService
  ) {
    this.rout.params.subscribe((data => this.getSingleUser(data['id'])))

  }

  singleUser?: User = new User();


  userArr: User[] = [
    {
      id: 1,
      email: 'george.bluth@reqres.in',
      first_name: 'George',
      last_name: 'Bluth',
      avatar: 'https://reqres.in/img/faces/1-image.jpg',
    },
    {
      id: 2,
      email: 'janet.weaver@reqres.in',
      first_name: 'Janet',
      last_name: 'Weaver',
      avatar: 'https://reqres.in/img/faces/2-image.jpg',
    },
    {
      id: 3,
      email: 'emma.wong@reqres.in',
      first_name: 'Emma',
      last_name: 'Wong',
      avatar: 'https://reqres.in/img/faces/3-image.jpg',
    },
    {
      id: 4,
      email: 'eve.holt@reqres.in',
      first_name: 'Eve',
      last_name: 'Holt',
      avatar: 'https://reqres.in/img/faces/4-image.jpg',
    },
    {
      id: 5,
      email: 'charles.morris@reqres.in',
      first_name: 'Charles',
      last_name: 'Morris',
      avatar: 'https://reqres.in/img/faces/5-image.jpg',
    },
    {
      id: 6,
      email: 'tracey.ramos@reqres.in',
      first_name: 'Tracey',
      last_name: 'Ramos',
      avatar: 'https://reqres.in/img/faces/6-image.jpg',
    },
  ];



  getSingleUser(id: number) {
    this.api.getUserById(id).subscribe((data: any) => {
      console.log(data.data)
    })
    



  }



}




