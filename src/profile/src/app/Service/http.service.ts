import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import {Sign} from "../Model/sign";



@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl = "http://130.162.215.116";

  constructor(private http: HttpClient) { }

  getSigns(){
    var licenseplate = this.http.get<Sign[]>(this.baseUrl + "/get-licenseplates")
    return licenseplate
  }

  getKeyPads(){
    var keyPad = this.http.get<[]>(this.baseUrl + "/get-numpad-codes")
    return keyPad;
  }

  getNFC(){
    var nfc = this.http.get<[]>(this.baseUrl + "/get-rfid-codes")
    return nfc;
  }
}
