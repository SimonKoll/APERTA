import { Component, OnInit } from '@angular/core';
import { KeyPad } from 'src/app/Model/key-pad';
import { HttpService } from 'src/app/Service/http.service';
import { Nfc } from '../nfc';

@Component({
  selector: 'app-nfc-settings',
  templateUrl: './nfc-settings.component.html',
  styleUrls: ['./nfc-settings.component.css']
})
export class NfcSettingsComponent implements OnInit {
  NFC: Nfc[] | undefined;
  rfid_code: String = "";

  fakeArray = new Array(3);

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.getKeyPads();
  }

  getKeyPads(){
    this.httpService.getNFC().subscribe((data: Nfc[])=>{
      this.NFC = data;
      console.log(data);
      this.getCode();
    })
  }

  getCode(){
    // @ts-ignore
    this.rfid_code = this.NFC[1].rfid_code;
    console.log(this.rfid_code);
    //var numpad = new KeypadComponent(this.numpadCode, true);
  }
}
