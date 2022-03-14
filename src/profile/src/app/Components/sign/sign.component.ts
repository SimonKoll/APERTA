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

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.getSigns()
  }

  getSigns(){
    this.httpService.getSigns().subscribe((data:Sign[])=>{
      this.Signs = data;
      console.log(data);
      this.getSignName(1)
    })
  }

  getSignName(signId: number){
    var licensename = this.Signs?.find(element => element.licenseplateId == signId)?.licenseplate
    return licensename;
  }

}
