import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { User } from '../Models/user';
import { CommonFuncService } from '../Services/common-func.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {

     constructor(private rout : ActivatedRoute, private commonFunc :CommonFuncService){
       this.rout.params.subscribe(data => this.getSngleUser(data['id']))

     }

  singleUser? : User = new User()  

  userArr : User[] = [
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

    getSngleUser(id : number){

      this.singleUser = this.userArr.find((user) => user.id == id)
      // console.log(`user info ${this.singleUser}`)
      this.commonFunc.printinConsole("user info", JSON.stringify(this.singleUser))

    }



     ngOnInit(){
       console.log("hi")
       this.titles = []
      //  console.log(this.rout.snapshot.queryParamMap.get("id"))
     }

     titles = []


     

}




// life cycle hook

///fetch     prommise         then
// params    observable       subsccrite


