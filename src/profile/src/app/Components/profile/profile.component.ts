import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Sign } from 'src/app/Model/sign';

import {HttpService} from "../../Service/http.service";
import { SignComponent } from '../sign/sign.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  Signs: Sign[] | undefined;
  licensename : String = "";
  i: number = 0;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.getSigns();
  }

  fakeArray = new Array(3);


  getSigns(){
    this.httpService.getSigns().subscribe((data:Sign[])=>{
      this.Signs = data;
      console.log(data);
      this.getSignName();
    })
  }

  getSignName() {
    while (this.i <= 2) {
      this.licensename = this.Signs![this.i].licenseplate;
      console.log(this.licensename);
      //SignComponent.arguments.licensename = this.licensename;
      this.i++;

    }
  }

}
