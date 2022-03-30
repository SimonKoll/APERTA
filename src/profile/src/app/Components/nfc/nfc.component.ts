import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nfc',
  templateUrl: './nfc.component.html',
  styleUrls: ['./nfc.component.css']
})
export class NfcComponent implements OnInit {

  @Input() rfid_code : String = "";

  constructor() { }

  ngOnInit(): void {
  }

}
