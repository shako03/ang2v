import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonFunctionService {

  constructor() { }

  printInConsole(name : string, obj : any){
    console.log(`${name} :  ${obj}`);
  }
}
 