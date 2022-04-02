import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import {Sign} from "../Model/sign";
import { KeyPad } from '../Model/key-pad';
import { Nfc } from '../Model/nfc';



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

  createNumpad(keypad: KeyPad){
    return this.http.post<KeyPad>(this.baseUrl + "/add-numpad", keypad)
  }

  createLicenseplate(licenseplate: Sign){
    return this.http.post<KeyPad>(this.baseUrl + "/add-licenseplate", licenseplate)
  }

  createRfid(rfid: Nfc){
    return this.http.post<KeyPad>(this.baseUrl + "/add-rfid", rfid)
  }

  deleteNumpad(numpad: KeyPad){
    return this.http.delete<KeyPad>(this.baseUrl + "/delete-numpad")
  }

  deleteLicenseplate(licenseplate: Sign){
    return this.http.delete<KeyPad>(this.baseUrl + "/delete-licenseplate")
  }

  deleteRfid(nfc: Nfc){
    return this.http.delete<KeyPad>(this.baseUrl + "/delete-rfid")
  }
}
