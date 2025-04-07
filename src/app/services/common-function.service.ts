import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonFunctionService {

  constructor() { }

  print(){
    console.log("hello from common function service")
  }
}
 