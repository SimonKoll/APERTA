import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../Service/http.service";
import {Sign} from "../../Model/sign";
import { Input } from '@angular/core';

@Component({
  selector: 'app-sign-settings',
  templateUrl: './sign-settings.component.html',
  styleUrls: ['./sign-settings.component.css']
})
export class SignSettingsComponent implements OnInit {

  Signs: Sign[] | undefined;
  licensename : String = "";
  i: number = 0;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.getSigns();
  }

  fakeArray = new Array(6);


  getSigns(){
    this.httpService.getSigns().subscribe((data:Sign[])=>{
      this.Signs = data;
      console.log(data);
      this.getSignName();
    })
  }

  // @ts-ignore
  getSignName() {
    while (this.i <= 2) {
      this.licensename = this.Signs![this.i].licenseplate;
      console.log(this.licensename);
      this.i++;

    }
  }
}
