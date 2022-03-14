import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../Service/http.service";
import {Sign} from "../../Model/sign";

@Component({
  selector: 'app-sign-settings',
  templateUrl: './sign-settings.component.html',
  styleUrls: ['./sign-settings.component.css']
})
export class SignSettingsComponent implements OnInit {
  Signs: any;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.getSigns()
  }

  getSigns(){
    this.httpService.getSigns().subscribe((data:Sign[])=>{
      this.Signs = data;
    })
  }

}
