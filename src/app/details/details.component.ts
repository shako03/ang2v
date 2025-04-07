import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
// import { User } from '../Models/user';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent  {


constructor(private rout: ActivatedRoute) { 
  this.rout.params.subscribe((data => ['id']))
  
 }

  
     

}




// life cycle hook

///fetch     prommise         then
// params    observable       subsccrite


