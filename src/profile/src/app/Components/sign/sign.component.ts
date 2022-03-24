import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../Service/http.service";
import {Sign} from "../../Model/sign";
import {elementAt} from "rxjs/operators";

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  signId: number | undefined;
  Signs: Sign[] | undefined;
  licensename: String | undefined;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.getSigns()
  }

  getSigns(){
    this.httpService.getSigns().subscribe((data:Sign[])=>{
      this.Signs = data;
      console.log(data);
      this.getSignName()
    })
  }


  // @ts-ignore
  getSignName() {
    for(var i = 0; i <= 3; i++) {
      // @ts-ignore
      this.licensename = this.Signs[i].licenseplate;
      console.log(this.licensename);
      return this.licensename;
    }
    }

}
