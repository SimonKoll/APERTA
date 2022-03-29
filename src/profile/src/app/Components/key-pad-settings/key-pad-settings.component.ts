import { Component, OnInit } from '@angular/core';
import { KeyPad } from 'src/app/Model/key-pad';
import { HttpService } from 'src/app/Service/http.service';
import { KeypadComponent } from '../keypad/keypad.component';

@Component({
  selector: 'app-key-pad-settings',
  templateUrl: './key-pad-settings.component.html',
  styleUrls: ['./key-pad-settings.component.css']
})
export class KeyPadSettingsComponent implements OnInit {
  KeyPad: KeyPad[] | undefined;
  numpadCode: String = "";

  fakeArray = new Array(3);

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.getKeyPads();
  }

  getKeyPads(){
    this.httpService.getKeyPads().subscribe((data:KeyPad[])=>{
      this.KeyPad = data;
      console.log(data);
      this.getCode();
    })
  }

  getCode(){
    // @ts-ignore
    this.numpadCode = this.KeyPad[1].numpad_code;
    console.log(this.numpadCode);
    //var numpad = new KeypadComponent(this.numpadCode, true);
  }

}
