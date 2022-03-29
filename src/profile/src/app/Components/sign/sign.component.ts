import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../Service/http.service";
import {Sign} from "../../Model/sign";
import {elementAt} from "rxjs/operators";
import { ProfileComponent } from '../profile/profile.component';
import { Input } from '@angular/core';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {


  @Input() licensename: String = "";



  constructor() {}
  /*constructor(licenseplateId: number, licenseplate: String, isActive: boolean) {
    this.licenseplateId = licenseplateId;
    this.licenseplate = licenseplate;
    this.isActive = isActive;
    console.log(licenseplateId, licenseplate, isActive);
  }*/

  ngOnInit(): void {

  }



}
